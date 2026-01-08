// Section reference numbering
document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('main h2, main h3');
    var sectionNumbers = {};
    var sectionCount = 0;
    var subsectionCount = 0;
    
    sections.forEach(function(section) {
        if (section.tagName === 'H2') {
            sectionCount++;
            subsectionCount = 0;
            if (section.id) {
                sectionNumbers[section.id] = sectionCount.toString();
            }
        } else if (section.tagName === 'H3') {
            subsectionCount++;
            if (section.id) {
                sectionNumbers[section.id] = sectionCount + '.' + subsectionCount;
            }
        }
    });
    
    document.querySelectorAll('a.secref').forEach(function(link) {
        var target = link.getAttribute('href').substring(1);
        if (sectionNumbers[target]) {
            link.textContent = sectionNumbers[target];
        }
    });
});