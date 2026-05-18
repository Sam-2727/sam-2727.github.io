// Figure formatting and previews for links to anchors like #fig-name.
(function() {
    'use strict';

    var tooltip = null;
    var currentRef = null;
    var hideTimer = null;
    var lastMouseX = 0;
    var lastMouseY = 0;

    document.addEventListener('DOMContentLoaded', function() {
        enhanceBlogFigures();
        numberFigureReferences();
        initFigurePreviews();
    });

    function enhanceBlogFigures() {
        var existingFigures = document.querySelectorAll('main figure[id^="fig-"]');
        existingFigures.forEach(function(figure) {
            figure.classList.add('blog-figure');
            figure.setAttribute('data-figure-id', figure.id);
        });

        var anchors = document.querySelectorAll('main a[id^="fig-"]');
        anchors.forEach(function(anchor) {
            if (anchor.closest('figure.blog-figure')) return;

            var anchorBlock = getAnchorBlock(anchor);
            var imageBlock = nextElement(anchorBlock);
            if (!imageBlock) return;

            var image = findOnlyImage(imageBlock);
            if (!image) return;

            var captionBlock = nextElement(imageBlock);
            var captionHtml = extractCaptionHtml(captionBlock);

            var figure = document.createElement('figure');
            figure.className = 'blog-figure';
            figure.id = anchor.id;
            figure.setAttribute('data-figure-id', anchor.id);

            var media = document.createElement('div');
            media.className = 'blog-figure-media';
            media.appendChild(image);
            figure.appendChild(media);

            if (captionHtml) {
                var figcaption = document.createElement('figcaption');
                figcaption.innerHTML = captionHtml;
                figure.appendChild(figcaption);
            }

            anchor.removeAttribute('id');
            anchorBlock.parentNode.insertBefore(figure, anchorBlock);
            anchorBlock.parentNode.removeChild(anchorBlock);
            imageBlock.parentNode.removeChild(imageBlock);
            if (captionHtml && captionBlock && captionBlock.parentNode) {
                captionBlock.parentNode.removeChild(captionBlock);
            }
        });
    }

    function numberFigureReferences() {
        var figureNumbers = {};
        var figures = document.querySelectorAll('main figure.blog-figure[id^="fig-"]');

        figures.forEach(function(figure, index) {
            var number = index + 1;
            figureNumbers[figure.id] = number;
            figure.setAttribute('data-figure-number', number);
        });

        var refs = document.querySelectorAll('main a[href^="#fig-"], main a[href*="#fig-"]');
        refs.forEach(function(ref) {
            var id = getFigureIdFromHref(ref.getAttribute('href'));
            if (!id || !figureNumbers[id]) return;

            if (!ref.hasAttribute('data-original-text')) {
                ref.setAttribute('data-original-text', ref.textContent);
            }

            ref.textContent = 'figure ' + figureNumbers[id];
            ref.setAttribute('aria-label', 'figure ' + figureNumbers[id]);
        });
    }

    function getFigureIdFromHref(href) {
        if (!href) return '';
        var hashIndex = href.indexOf('#');
        if (hashIndex === -1) return '';
        var id = decodeURIComponent(href.substring(hashIndex + 1));
        return id.indexOf('fig-') === 0 ? id : '';
    }

    function getAnchorBlock(anchor) {
        var parent = anchor.parentElement;
        if (parent && parent.tagName === 'P' && parent.textContent.trim() === '') {
            return parent;
        }
        return anchor;
    }

    function nextElement(node) {
        return node ? node.nextElementSibling : null;
    }

    function findOnlyImage(block) {
        if (!block || block.tagName !== 'P') return null;
        var images = block.querySelectorAll('img');
        if (images.length !== 1) return null;

        var clone = block.cloneNode(true);
        var img = clone.querySelector('img');
        if (img) img.remove();
        if (clone.textContent.trim() !== '') return null;

        return images[0];
    }

    function extractCaptionHtml(block) {
        if (!block || block.tagName !== 'P') return '';

        var children = Array.prototype.filter.call(block.childNodes, function(node) {
            return node.nodeType !== Node.TEXT_NODE || node.nodeValue.trim() !== '';
        });

        if (children.length === 1 && children[0].nodeType === Node.ELEMENT_NODE) {
            var element = children[0];
            if (element.tagName === 'EM' || element.tagName === 'I') {
                return element.innerHTML;
            }
        }

        return '';
    }

    function initFigurePreviews() {
        tooltip = document.createElement('div');
        tooltip.id = 'figure-tooltip';
        tooltip.style.display = 'none';
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
        document.body.appendChild(tooltip);

        document.addEventListener('mouseover', handleRefMouseOver);
        document.addEventListener('mouseout', handleRefMouseOut);
        document.addEventListener('mousemove', handleRefMouseMove);
    }

    function findFigureRef(target) {
        if (!target || !target.closest) return null;
        return target.closest('a[href^="#fig-"], a[href*="#fig-"]');
    }

    function handleRefMouseOver(e) {
        var ref = findFigureRef(e.target);
        if (!ref || ref === currentRef) return;

        if (hideTimer) {
            clearTimeout(hideTimer);
            hideTimer = null;
        }

        currentRef = ref;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        showFigurePreview(ref, e);
    }

    function handleRefMouseOut(e) {
        if (!currentRef) return;
        if (e.relatedTarget && currentRef.contains(e.relatedTarget)) return;

        var ref = findFigureRef(e.target);
        if (ref !== currentRef) return;
        scheduleHide();
    }

    function handleRefMouseMove(e) {
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        if (tooltip.style.display === 'block' && tooltip.style.visibility === 'visible') {
            positionTooltip(e, tooltip);
        }
    }

    function scheduleHide() {
        if (hideTimer) {
            clearTimeout(hideTimer);
        }

        hideTimer = setTimeout(function() {
            if (isMouseOverCurrentRef()) {
                hideTimer = null;
                return;
            }
            currentRef = null;
            hideFigurePreview();
            hideTimer = null;
        }, 30);
    }

    function isMouseOverCurrentRef() {
        if (!currentRef) return false;
        var element = document.elementFromPoint(lastMouseX, lastMouseY);
        if (!element) return false;
        return findFigureRef(element) === currentRef;
    }

    function showFigurePreview(ref, e) {
        var figure = findFigureForRef(ref);
        if (!figure) return;

        var clone = figure.cloneNode(true);
        clone.removeAttribute('id');
        clone.classList.add('figure-preview-clone');

        tooltip.innerHTML = '';
        tooltip.appendChild(clone);
        tooltip.style.display = 'block';
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';

        typesetMath(tooltip).finally(function() {
            if (currentRef !== ref) return;
            positionTooltip(e, tooltip);
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });
    }

    function findFigureForRef(ref) {
        var id = getFigureIdFromHref(ref.getAttribute('href'));
        if (!id) return null;

        var target = document.getElementById(id);
        if (!target) return null;
        if (target.tagName === 'FIGURE') return target;

        var figure = target.closest('figure.blog-figure');
        if (figure) return figure;

        var block = getAnchorBlock(target);
        var imageBlock = nextElement(block);
        if (!findOnlyImage(imageBlock)) return null;

        return createPreviewFigureFromLegacyNodes(target, imageBlock, nextElement(imageBlock));
    }

    function createPreviewFigureFromLegacyNodes(anchor, imageBlock, captionBlock) {
        var image = findOnlyImage(imageBlock);
        if (!image) return null;

        var figure = document.createElement('figure');
        figure.className = 'blog-figure';

        var media = document.createElement('div');
        media.className = 'blog-figure-media';
        media.appendChild(image.cloneNode(true));
        figure.appendChild(media);

        var captionHtml = extractCaptionHtml(captionBlock);
        if (captionHtml) {
            var figcaption = document.createElement('figcaption');
            figcaption.innerHTML = captionHtml;
            figure.appendChild(figcaption);
        }

        return figure;
    }

    function typesetMath(root) {
        if (window.MathJax && window.MathJax.typesetPromise) {
            return window.MathJax.typesetPromise([root]).catch(function() {});
        }
        return Promise.resolve();
    }

    function hideFigurePreview() {
        tooltip.style.display = 'none';
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
        tooltip.innerHTML = '';
    }

    function positionTooltip(e, element) {
        var padding = 20;
        var rect = element.getBoundingClientRect();
        var x = e.clientX + padding;
        var y = e.clientY + padding;

        if (e.clientX + rect.width + padding > window.innerWidth) {
            x = e.clientX - rect.width - padding;
        }

        if (e.clientY + rect.height + padding > window.innerHeight) {
            y = e.clientY - rect.height - padding;
        }

        if (x < padding) x = padding;
        if (y < padding) y = padding;

        element.style.left = x + 'px';
        element.style.top = y + 'px';
    }
})();
