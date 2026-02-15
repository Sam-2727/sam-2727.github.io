document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.toggle-btn[data-filter]');
    var posts = document.querySelectorAll('.post-list li[data-category]');

    if (buttons.length === 0 || posts.length === 0) return;

    function filterPosts(category) {
        posts.forEach(function(post) {
            post.style.display = post.getAttribute('data-category') === category ? '' : 'none';
        });

        buttons.forEach(function(btn) {
            if (btn.getAttribute('data-filter') === category) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterPosts(this.getAttribute('data-filter'));
        });
    });

    filterPosts('technical');
});
