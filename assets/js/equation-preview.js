// Equation Preview on Hover - Fixed positioning logic
(function() {
    'use strict';
    
    var tooltip = null;
    var currentRef = null;
    var hideTimer = null;
    var lastMouseX = 0;
    var lastMouseY = 0;
    
    function waitForMathJax() {
        if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
            window.MathJax.startup.promise.then(function() {
                setTimeout(initEquationPreviews, 500);
            });
        } else {
            setTimeout(waitForMathJax, 100);
        }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        waitForMathJax();
    });
    
    function initEquationPreviews() {
        console.log('Initializing equation previews...');
        
        // Create tooltip element
        tooltip = document.createElement('div');
        tooltip.id = 'equation-tooltip';
        tooltip.style.display = 'none';
        tooltip.style.visibility = 'hidden'; // Start hidden
        tooltip.style.opacity = '0';
        document.body.appendChild(tooltip);

        // Clean up stray MathJax delimiters that are left as text nodes.
        cleanupMathJaxDelimiters();

        // Use event delegation so late-rendered MathJax links still work.
        document.addEventListener('mouseover', handleRefMouseOver);
        document.addEventListener('mouseout', handleRefMouseOut);
        document.addEventListener('mousemove', handleRefMouseMove);
        
        console.log('Equation preview initialization complete');
    }

    function findEqRef(target) {
        if (!target || !target.closest) return null;
        return target.closest('a[href^="#mjx-eqn"], a[href^="#eq:"]');
    }

    function handleRefMouseOver(e) {
        var ref = findEqRef(e.target);
        if (!ref || ref === currentRef) return;
        if (hideTimer) {
            clearTimeout(hideTimer);
            hideTimer = null;
        }
        currentRef = ref;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        showEquationPreview(ref, tooltip, e);
    }

    function handleRefMouseOut(e) {
        if (!currentRef) return;
        if (e.relatedTarget && currentRef.contains(e.relatedTarget)) {
            return;
        }
        var ref = findEqRef(e.target);
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
            hideEquationPreview(tooltip);
            hideTimer = null;
        }, 30);
    }

    function isMouseOverCurrentRef() {
        if (!currentRef) return false;
        var el = document.elementFromPoint(lastMouseX, lastMouseY);
        if (!el) return false;
        return findEqRef(el) === currentRef;
    }
    
    function showEquationPreview(ref, tooltip, e) {
        var encodedHref = ref.getAttribute('href');
        if (!encodedHref) return;
        
        // Support full URLs and decode the hash portion.
        var hashIndex = encodedHref.indexOf('#');
        if (hashIndex === -1) return;
        var eqId = encodedHref.substring(hashIndex + 1);
        eqId = decodeURIComponent(eqId);
        
        console.log('Looking for equation with ID:', eqId);
        
        // Find the equation element
        var equation = document.getElementById(eqId);
        if (!equation) {
            console.log('Equation not found:', eqId);
            return;
        }
        
        console.log('Found equation element:', equation.tagName);
        
        // Find the parent MJX-CONTAINER
        var eqContainer = findEquationContainer(equation);
        if (!eqContainer) {
            eqContainer = findEquationContainerForId(eqId);
        }
        
        if (!eqContainer) {
            console.log('Container not found for equation:', eqId);
            return;
        }
        
        console.log('Found container:', eqContainer.tagName);
        
        // Clone the equation container
        var clone = eqContainer.cloneNode(true);
        
        // Remove equation number tag from clone
        var tags = clone.querySelectorAll('.mjx-tag, mjx-mtd[id^="mjx-eqn"]');
        tags.forEach(function(tag) {
            if (tag.classList && tag.classList.contains('mjx-tag')) {
                tag.parentNode.removeChild(tag);
            } else if (tag.tagName === 'MJX-MTD' && tag.id.indexOf('mjx-eqn') === 0) {
                var parent = tag.parentElement;
                if (parent && parent.childElementCount > 1) {
                    tag.parentNode.removeChild(tag);
                }
            }
        });
        
        // Remove assistive/annotation nodes and stray TeX delimiters.
        stripAssistiveNodes(clone);
        stripTeXDelimiters(clone);
        stripInlineTeXText(clone);

        // Clear tooltip and add cloned equation
        tooltip.innerHTML = '';

        // If there are text nodes around the mjx-container, append only the container.
        var containerClone = clone.querySelector('mjx-container');
        if (containerClone) {
            tooltip.appendChild(containerClone.cloneNode(true));
        } else {
            tooltip.appendChild(clone);
        }
        
        // SHOW FIRST (but hidden) to get dimensions
        tooltip.style.display = 'block';
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
        
        // Force layout calculation
        var rect = tooltip.getBoundingClientRect();
        
        // Now position it
        positionTooltip(e, tooltip);
        
        // Finally make it visible
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
        
        console.log('Tooltip displayed at:', tooltip.style.left, tooltip.style.top);
        console.log('Tooltip styles:', {
            display: tooltip.style.display,
            visibility: tooltip.style.visibility,
            opacity: tooltip.style.opacity
        });
    }
    
    function findEquationContainer(element) {
        var current = element;
        var maxDepth = 30;
        var depth = 0;
        
        while (current && depth < maxDepth) {
            if (current.tagName === 'MJX-CONTAINER') {
                var displayAttr = current.getAttribute('display');
                if (displayAttr === 'true') {
                    return current;
                }
            }
            current = current.parentElement;
            depth++;
        }
        
        return null;
    }

    function findEquationContainerForId(eqId) {
        if (!eqId) return null;
        var containers = document.querySelectorAll('mjx-container[display="true"]');
        for (var i = 0; i < containers.length; i++) {
            if (containers[i].querySelector('#' + CSS.escape(eqId))) {
                return containers[i];
            }
        }
        return null;
    }

    function stripAssistiveNodes(root) {
        if (!root) return;
        var assistive = root.querySelectorAll('mjx-assistive-mml, mjx-annotation, annotation');
        assistive.forEach(function(node) {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        });
    }

    function stripTeXDelimiters(root) {
        if (!root) return;
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
        var nodes = [];
        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }
        nodes.forEach(function(node) {
            var text = node.nodeValue;
            if (!text) return;
            if (/^\s*\\[\(\)\[\]]\s*$/.test(text)) {
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            }
        });
    }

    function stripInlineTeXText(root) {
        if (!root) return;
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
        var nodes = [];
        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }
        nodes.forEach(function(node) {
            var text = node.nodeValue;
            if (!text) return;
            if (/\\[\(\)\[\]]/.test(text)) {
                var cleaned = text.replace(/\\[\(\)\[\]]/g, '');
                if (cleaned.trim() === '') {
                    if (node.parentNode) {
                        node.parentNode.removeChild(node);
                    }
                } else {
                    node.nodeValue = cleaned;
                }
            }
        });
    }

    function cleanupMathJaxDelimiters() {
        var containers = document.querySelectorAll('mjx-container');
        containers.forEach(function(container) {
            removeDelimiterSibling(container, 'previousSibling');
            removeDelimiterSibling(container, 'nextSibling');
        });
    }

    function removeDelimiterSibling(node, direction) {
        var sibling = node[direction];
        if (!sibling || sibling.nodeType !== Node.TEXT_NODE) return;
        var text = sibling.nodeValue;
        if (!text) return;
        if (!/\\[\(\)\[\]]/.test(text)) return;
        var cleaned = text.replace(/\\[\(\)\[\]]/g, '');
        if (cleaned.trim() === '') {
            if (sibling.parentNode) {
                sibling.parentNode.removeChild(sibling);
            }
        } else {
            sibling.nodeValue = cleaned;
        }
    }
    
    function hideEquationPreview(tooltip) {
        tooltip.style.display = 'none';
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
        console.log('Tooltip hidden');
    }
    
    function positionTooltip(e, tooltip) {
        var padding = 20;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        var isFixed = window.getComputedStyle(tooltip).position === 'fixed';
        
        var tooltipRect = tooltip.getBoundingClientRect();
        
        var baseX = isFixed ? 0 : scrollLeft;
        var baseY = isFixed ? 0 : scrollTop;
        var x = e.clientX + baseX + padding;
        var y = e.clientY + baseY + padding;
        
        // Keep tooltip within viewport
        if (e.clientX + tooltipRect.width + padding > window.innerWidth) {
            x = e.clientX + baseX - tooltipRect.width - padding;
        }
        
        if (e.clientY + tooltipRect.height + padding > window.innerHeight) {
            y = e.clientY + baseY - tooltipRect.height - padding;
        }
        
        // Ensure x and y are not negative
        var minX = baseX + padding;
        var minY = baseY + padding;
        if (x < minX) x = minX;
        if (y < minY) y = minY;
        
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
    }
})();
