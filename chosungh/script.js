// Typing effect for the hero section
const typingText = document.querySelector('.typing-text');
const phrases = ['프론트엔드 개발자', 'UI/UX 디자이너', '문제 해결사', '크리에이티브 코더'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return;
    
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    // Adjust typing speed based on action
    let typeSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Stop at the end of the word
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect on DOM load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 500);
});

// Scroll Animation with Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only trigger once
        }
    });
}, observerOptions);

// Select sections to animate
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Staggered animation for project cards
document.querySelectorAll('.project-grid').forEach(grid => {
    const cards = grid.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });
});

// Dynamic Navbar styling on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(13, 13, 13, 0.9)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(13, 13, 13, 0.7)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
    }
});

// Smooth Scrolling for navigation links (Safari fallback & custom easing)
document.querySelectorAll('.nav-links a, .hero-buttons a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only valid internal links
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetNode = document.getElementById(targetId);
            
            if (targetNode) {
                const targetPosition = targetNode.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: targetPosition - 80, // adjust for navbar
                    behavior: 'smooth'
                });
            }
        }
    });
});
