// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Highlight active navigation link
    highlightActiveNav();
    
    // Add smooth scrolling to all anchor links
    addSmoothScrolling();
    
    // Add fade-in animation to sections
    addScrollAnimations();
    
});

/**
 * Highlight the active navigation link based on current page
 */
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        // Remove active class from all links first
        link.classList.remove('active');
        
        // Add active class to current page link
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/**
 * Add smooth scrolling to all anchor links
 */
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Add scroll animations to sections
 */
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all major content sections
    const sections = document.querySelectorAll('.home-card, .home-detail, .content-section, .contact-card');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

/**
 * Mobile menu toggle (for future enhancement)
 */
function initMobileMenu() {
    // This function can be expanded to add a hamburger menu for mobile devices
    const navbar = document.querySelector('.navbar');
    
    // Add mobile menu toggle button dynamically if needed
    if (window.innerWidth <= 768) {
        // Mobile menu logic can be added here
    }
}

// Initialize mobile menu on load and resize
window.addEventListener('load', initMobileMenu);
window.addEventListener('resize', initMobileMenu);