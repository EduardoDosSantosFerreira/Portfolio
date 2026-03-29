// Hero Canvas Animation
const canvas = document.getElementById('hero-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2
        });
    }

    function animateParticles() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(220, 53, 69, ${p.opacity})`;
            ctx.fill();
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}

// Typed Text Animation
const typedTextElement = document.getElementById('typed-text');
if (typedTextElement) {
    const texts = [
        'Desenvolvedor Fullstack',
        'Automação de Processos',
        'Desenvolvedor de Software',
        'Python & JavaScript',
        'Desenvolvedor WEB',
        'React & Node.js'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeEffect, 500);
            return;
        }

        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }

    typeEffect();
}

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = false;
} else {
    document.body.classList.remove('dark-mode');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.remove('dark-mode');
        localStorage.removeItem('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    }
});

// Navbar hide on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 120) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add scroll reveal effect for cards
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.projeto-card');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.style.opacity = '1';
            reveal.style.transform = 'translateY(0)';
        }
    });
});

// Initial reveal for cards
document.querySelectorAll('.projeto-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
});

window.dispatchEvent(new Event('scroll'));