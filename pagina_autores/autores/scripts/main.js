// Navigation active state
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollReveal();
    initSmoothScroll();
});

// Navigation active link highlighting
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section, main');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll reveal animations
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.author-card, .work-card, .legacy-item, .timeline-item'
    );

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// Smooth scroll for links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href === '#' || href === '#!') {
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Parallax effect on hero images
window.addEventListener('scroll', () => {
    const heroSections = document.querySelectorAll('.hero');

    heroSections.forEach(hero => {
        const scrollPosition = window.pageYOffset;
        const offset = scrollPosition * 0.5;
        hero.style.backgroundPosition = `center ${offset}px`;
    });
});

// Card hover effects
const cards = document.querySelectorAll('.author-card, .work-card, .legacy-item');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = this.classList.contains('author-card')
            ? 'translateY(-8px)'
            : 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Button click animations
const buttons = document.querySelectorAll('.btn-primary');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Accessibility - keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.activeElement.blur();
    }

    if (e.key === 'Enter') {
        const focused = document.activeElement;
        if (focused && (focused.classList.contains('btn-primary') || focused.classList.contains('author-card'))) {
            focused.click();
        }
    }
});

// Mobile menu indicator
function checkMobileMenu() {
    const header = document.querySelector('.header');
    if (window.innerWidth <= 768) {
        header.style.fontSize = '0.85rem';
    } else {
        header.style.fontSize = '1rem';
    }
}

window.addEventListener('resize', checkMobileMenu);
checkMobileMenu();

// Fade in section titles on scroll
const sectionTitles = document.querySelectorAll('.section-title, .biography-section h3, .works-section h3, .legacy-section h3, .timeline-section h3');

const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            titleObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sectionTitles.forEach(title => {
    title.style.opacity = '0';
    titleObserver.observe(title);
});

// Smooth header scroll behavior
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Performance: Debounce resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Re-initialize on resize
    }, 250);
});

// Add ripple CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

document.head.appendChild(style);

// Print function for pages
window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});

window.addEventListener('afterprint', () => {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
});

console.log('Literaire - Portal de Autores carregado com sucesso!');
