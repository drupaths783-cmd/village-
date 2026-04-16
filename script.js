document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Scroll Animations
    const animElements = document.querySelectorAll('.scroll-anim');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Determine if there are specific classes to add based on initial state
                // but the CSS just uses .visible to clear transforms.
                entry.target.classList.add('visible');
                
                // Optional: Stop observing once animated in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animElements.forEach(el => {
        // give default 'up' animation if not specified
        if (!el.classList.contains('slide-in-left') && !el.classList.contains('slide-in-right')) {
            el.classList.add('up');
        }
        scrollObserver.observe(el);
    });
});
