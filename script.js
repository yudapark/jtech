// Dark / Light mode toggle dengan localStorage
const toggleBtn = document.getElementById('darkModeToggle');

function toggleMode() {
    document.body.classList.toggle('light');
    
    if (document.body.classList.contains('light')) {
        localStorage.setItem('mode', 'light');
        if (toggleBtn) toggleBtn.innerHTML = '☀️';
    } else {
        localStorage.setItem('mode', 'dark');
        if (toggleBtn) toggleBtn.innerHTML = '🌙';
    }
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMode);
}

// Load saved mode
window.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light') {
        document.body.classList.add('light');
        if (toggleBtn) toggleBtn.innerHTML = '☀️';
    } else if (toggleBtn) {
        toggleBtn.innerHTML = '🌙';
    }
    
    // Animasi fade in untuk cards
    const cards = document.querySelectorAll('.bmc-card, .service-item, .testimonial-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
});

// Modal functions untuk konsultasi (untuk halaman lama)
function showModal() {
    const modal = document.getElementById('consultModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function hideModal() {
    const modal = document.getElementById('consultModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Event listeners untuk tombol konsultasi (halaman lama)
document.addEventListener('DOMContentLoaded', () => {
    const consultBtns = document.querySelectorAll('#consultBtn, #consultBtnNav');
    consultBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal();
        });
    });

    const modalOverlay = document.getElementById('consultModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) hideModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideModal();
    });
});

// Social link functions
function openWhatsApp() {
    window.open('https://wa.me/6281541131863?text=Halo%20J-TECH%2C%20saya%20ingin%20konsultasi', '_blank');
}

function openInstagram() {
    window.open('https://instagram.com/jtech.official', '_blank');
}

function openEmail() {
    window.location.href = 'mailto:jtech@digital.com?subject=Konsultasi%20J-TECH&body=Saya%20ingin%20berkonsultasi%20mengenai...';
}

// Smooth scroll untuk anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '' && href !== '#consultModal') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Counter animation untuk stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger counter when stats come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numbers = entry.target.querySelectorAll('.number');
            numbers.forEach(num => {
                const target = parseInt(num.textContent);
                if (!isNaN(target) && num.textContent !== target + '+') {
                    animateCounter(num, target);
                }
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    observer.observe(statsSection);
}