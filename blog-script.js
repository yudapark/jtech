// Blog Modal Functions
function showBlogModal(postId) {
    const modal = document.getElementById('blogModal');
    const titleElem = document.getElementById('blogModalTitle');
    const bodyElem = document.getElementById('blogModalBody');
    
    const articles = {
        1: {
            title: "7 Cara Merawat Laptop Agar Awet dan Tidak Lemot",
            content: `
                <p><strong>Laptop adalah investasi penting bagi pekerja dan pelajar. Merawatnya dengan baik akan memperpanjang usia perangkat.</strong></p>
                <h4>1. Bersihkan Debu Secara Rutin</h4>
                <p>Debu yang menumpuk dapat menyumbat kipas dan menyebabkan overheating. Bersihkan laptop setiap 3-6 bulan sekali.</p>
                <h4>2. Gunakan Cooling Pad</h4>
                <p>Cooling pad membantu sirkulasi udara dan menjaga suhu laptop tetap stabil.</p>
                <h4>3. Hindari Makan/Minum di Dekat Laptop</h4>
                <p>Tumpahan cairan bisa merusak komponen internal laptop.</p>
                <h4>4. Matikan Laptop dengan Benar</h4>
                <p>Jangan langsung menekan tombol power. Gunakan shutdown melalui sistem operasi.</p>
                <h4>5. Update Driver dan OS</h4>
                <p>Update rutin menjaga keamanan dan performa laptop.</p>
                <h4>6. Gunakan Antivirus</h4>
                <p>Lindungi laptop dari malware dan virus berbahaya.</p>
                <h4>7. Jangan Mengisi Daya Terlalu Lama</h4>
                <p>Cabut charger saat baterai sudah penuh untuk menjaga kesehatan baterai.</p>
                <p><strong>Butuh bantuan perawatan laptop? <a href="kontak.html">Hubungi J-TECH sekarang!</a></strong></p>
            `
        },
        2: {
            title: "5 Elemen Desain Grafis yang Wajib Diketahui Pemula",
            content: `
                <p><strong>Desain grafis adalah keterampilan yang sangat berharga di era digital. Berikut 5 elemen dasar yang harus dikuasai:</strong></p>
                <h4>1. Garis (Line)</h4>
                <p>Garis membentuk batas, arah, dan gerakan dalam desain.</p>
                <h4>2. Bentuk (Shape)</h4>
                <p>Bentuk geometris atau organik memberikan struktur pada desain.</p>
                <h4>3. Warna (Color)</h4>
                <p>Warna mempengaruhi mood dan emosi. Pelajari teori warna dasar.</p>
                <h4>4. Tipografi (Typography)</h4>
                <p>Pemilihan font yang tepat sangat penting untuk keterbacaan.</p>
                <h4>5. Ruang (Space)</h4>
                <p>Ruang negatif (white space) membuat desain tidak terlihat padat.</p>
                <p><strong>Butuh jasa desain profesional? <a href="kontak.html">Pesan desain di J-TECH!</a></strong></p>
            `
        },
        3: {
            title: "Rekomendasi Aplikasi Edit Video Gratis untuk Pemula",
            content: `
                <p><strong>Mulai karir sebagai video editor tidak perlu mengeluarkan biaya besar. Berikut aplikasi edit video gratis terbaik:</strong></p>
                <h4>1. DaVinci Resolve</h4>
                <p>Aplikasi profesional dengan fitur color grading lengkap, gratis tanpa watermark.</p>
                <h4>2. Shotcut</h4>
                <p>Open source, ringan, dan mendukung banyak format video.</p>
                <h4>3. OpenShot</h4>
                <p>Mudah digunakan, cocok untuk pemula yang baru belajar editing.</p>
                <h4>4. CapCut</h4>
                <p>Aplikasi mobile populer untuk edit video TikTok dan Instagram Reels.</p>
                <h4>5. KineMaster (Free Version)</h4>
                <p>Edit video di HP dengan fitur lengkap meskipun ada watermark.</p>
                <p><strong>Butuh bantuan editing video? <a href="kontak.html">Jasa editing video J-TECH siap membantu!</a></strong></p>
            `
        },
        4: {
            title: "Cara Melindungi Data Pribadi dari Serangan Malware",
            content: `
                <p><strong>Keamanan data adalah prioritas utama. Berikut langkah-langkah melindungi perangkat Anda:</strong></p>
                <h4>1. Install Antivirus Terpercaya</h4>
                <p>Gunakan antivirus seperti Avast, Bitdefender, atau Malwarebytes.</p>
                <h4>2. Jangan Klik Link Sembarangan</h4>
                <p>Phishing sering terjadi melalui email atau pesan mencurigakan.</p>
                <h4>3. Backup Data Secara Rutin</h4>
                <p>Gunakan cloud storage atau hardisk eksternal untuk backup.</p>
                <h4>4. Gunakan Password yang Kuat</h4>
                <p>Kombinasikan huruf besar, kecil, angka, dan simbol.</p>
                <h4>5. Aktifkan Two-Factor Authentication (2FA)</h4>
                <p>Lapisan keamanan ekstra untuk akun penting Anda.</p>
                <p><strong>Butuh bantuan pembersihan virus? <a href="kontak.html">Hubungi J-TECH untuk service antivirus!</a></strong></p>
            `
        }
    };
    
    const article = articles[postId];
    if (article) {
        titleElem.textContent = article.title;
        bodyElem.innerHTML = article.content;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function hideBlogModal() {
    const modal = document.getElementById('blogModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('blogModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) hideBlogModal();
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideBlogModal();
    });
});