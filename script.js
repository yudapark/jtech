// Dark / Light mode toggle dengan localStorage
const toggleBtn = document.getElementById('darkModeToggle');

function toggleMode() {
    document.body.classList.toggle('light');
    
    if (document.body.classList.contains('light')) {
        localStorage.setItem('mode', 'light');
        toggleBtn.innerHTML = '☀️';
    } else {
        localStorage.setItem('mode', 'dark');
        toggleBtn.innerHTML = '🌙';
    }
}

toggleBtn.addEventListener('click', toggleMode);

// Load saved mode
window.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light') {
        document.body.classList.add('light');
        toggleBtn.innerHTML = '☀️';
    } else {
        toggleBtn.innerHTML = '🌙';
    }
});

// Tombol konsultasi (alert interaktif) - untuk semua tombol
const consultBtns = document.querySelectorAll('#consultBtn, #consultBtnNav');
consultBtns.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('📞 Hubungi kami via WhatsApp: 0815-4113-1863\nAtau DM Instagram @jtech.official');
        });
    }
});