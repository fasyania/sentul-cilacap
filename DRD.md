# DESIGN REQUIREMENTS DOCUMENT (DRD)
## Proyek: Website Kolaboratif Tirta Sentul Cilacap
**Mata Kuliah**: Pemrograman Web Dasar (Modul 6: Git, GitHub, & Kolaborasi Tim)  
**Institusi**: Politeknik Negeri Cilacap  
**Arsitektur**: Multi-Page Application (MPA) — 3 Halaman HTML, 1 File CSS Tunggal, 1 File JS Tunggal  
**Ketua / PM**: Anda (PIC Setup Repo, Master Header/Footer, Base CSS, & Merge Lead)

---

## 1. PEMBAGIAN PERAN & TUGAS ANGGOTA

| Peran | Penanggung Jawab | Berkas & Branch | Tugas Utama |
| :--- | :--- | :--- | :--- |
| **Ketua / PM** | **Inisiator (Anda)** | `main` | Setup repository, membuat kerangka dasar, master template navbar & footer, base style, review Pull Request, dan deploy ke GitHub Pages. |
| **Anggota 1** | PIC Beranda | `index.html`<br>Branch: `fitur-beranda` | Mengerjakan struktur Beranda (Hero, 3 Keunggulan, Preview & Tiket), mengisi CSS zona 5 (prefix `.home-`), dan interaksi JS di zona 2. |
| **Anggota 2** | PIC Tentang Kami | `tentang.html`<br>Branch: `fitur-tentang` | Mengerjakan profil & filosofi fasad pilar klasik Sentul, mengisi CSS zona 6 (prefix `.about-`), dan interaksi JS di zona 3. |
| **Anggota 3** | PIC Fasilitas | `fasilitas.html`<br>Branch: `fitur-fasilitas` | Mengerjakan katalog 4 fasilitas utama & tabel HTM, mengisi CSS zona 7 (prefix `.facility-`), dan interaksi JS di zona 4. |

---

## 2. ATURAN BAKU GIT & KONTRAK KODE (STRICT RULES)

Untuk memastikan penilaian dosen (checklist Modul 6) mendapat nilai sempurna, **seluruh anggota wajib mematuhi aturan ini**:

1. **Dilarang Menulis Inline Style**: Jangan pernah menambahkan atribut `style="..."` di dalam tag HTML.
2. **Dilarang Membuat File CSS / JS Baru**: Hanya ada **satu `style.css`** dan **satu `script.js`**.
3. **Dilarang Men-styling Tag Global Telanjang (Anti-CSS Bleeding)**:
   * Dilarang menulis rule umum seperti `h1 { ... }`, `h2 { ... }`, atau `p { ... }`.
   * Semua selector CSS **WAJIB** diawali class prefix halaman masing-masing (contoh: `.home-hero h1`, `.about-grid p`, `.facility-card h3`).
4. **Wajib Mematuhi Zonasi Komentar**:
   * PIC Beranda hanya boleh menaruh CSS di zona: `/* 5. BAGIAN PIC 1: HALAMAN BERANDA */`.
   * PIC Tentang Kami hanya boleh menaruh CSS di zona: `/* 6. BAGIAN PIC 2: HALAMAN TENTANG KAMI */`.
   * PIC Fasilitas hanya boleh menaruh CSS di zona: `/* 7. BAGIAN PIC 3: HALAMAN FASILITAS */`.
5. **Wajib Menggunakan Wrapper `.container`**:
   * Setiap `<section>` di dalam `<main>` wajib membungkus isinya dengan `<div class="container">` agar posisi konten sejajar dan rapi dengan navbar dan footer.
6. **Defensive JavaScript**:
   * Karena `script.js` dimuat di ketiga halaman, kode JS wajib memeriksa keberadaan elemen terlebih dahulu (`if (element) { ... }`) agar tidak melempar error di halaman lain.
7. **Komponen Bersama yang Boleh Langsung Dipakai**:
   * `.container` (lebar rapi di tengah layar).
   * `.btn`, `.btn-primary`, `.btn-secondary` (tombol standar).
   * Variabel warna: `var(--primary-color)`, `var(--navy-color)`, `var(--white)`, `var(--bg-light)`.
8. **Alur Kerja Git Setiap Anggota**:
   * Pastikan `git pull origin main` terlebih dahulu sebelum mulai bekerja.
   * Buat branch baru: `git switch -c <nama-branch>`.
   * Lakukan **minimal 2 kali commit**:
     * Commit 1: `git commit -m "Membuat struktur HTML halaman [nama]"`
     * Commit 2: `git commit -m "Menambahkan styling CSS dan interaksi JS [nama]"`
   * Kirim branch ke GitHub: `git push -u origin <nama-branch>`.
   * Buka GitHub dan buat **Pull Request (PR)** ke `main` agar ditinjau oleh Ketua.

---

## 3. MASTER TEMPLATE KANONIKAL (HEADER & FOOTER)
*Seluruh anggota wajib memastikan bagian `<head>`, `<header>`, dan `<footer>` persis sama dengan master ini:*

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Nama Halaman] - Tirta Sentul Waterpark & Hall Cilacap</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- HEADER BERSAMA -->
  <header class="site-header">
    <div class="container navbar">
      <a href="index.html" class="brand-logo">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
        <span>Tirta Sentul</span>
      </a>

      <nav>
        <ul class="nav-links">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="tentang.html">Tentang Kami</a></li>
          <li><a href="fasilitas.html">Fasilitas</a></li>
        </ul>
      </nav>

      <a href="https://maps.google.com/?q=Sentul+Waterpark+Cilacap" target="_blank" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.85rem;">
        Petunjuk Rute
      </a>
    </div>
  </header>

  <!-- =======================================================================
       AREA KERJA PIC: MASUKKAN KONTEN <main> DI BAWAH INI
       ======================================================================= -->
  <main id="main-content">
    <!-- Konten spesifik halaman di sini -->
  </main>

  <!-- FOOTER BERSAMA -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col">
        <h3>Tirta Sentul Cilacap</h3>
        <p>Destinasi rekreasi air dan arena olahraga semi-indoor di Cilacap. Berenang nyaman, sejuk tanpa terik matahari langsung.</p>
      </div>

      <div class="footer-col">
        <h4>Navigasi</h4>
        <ul class="footer-links">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="tentang.html">Tentang Kami</a></li>
          <li><a href="fasilitas.html">Fasilitas</a></li>
          <li><a href="https://maps.google.com/?q=Sentul+Waterpark+Cilacap" target="_blank">Google Maps</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Jam & Tiket</h4>
        <ul class="footer-links">
          <li>Buka: 07.00 – 17.00 WIB</li>
          <li>Weekday: Rp 15.000</li>
          <li>Weekend: Rp 20.000</li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Kontak & Lokasi</h4>
        <div class="footer-contact-item">
          <span>📍 Jl. Gatot Subroto No. 8, Sidanegara, Cilacap</span>
        </div>
        <div class="footer-contact-item">
          <span>📞 WhatsApp: +62 85326125864</span>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>&copy; 2026 Tirta Sentul Waterpark & Hall Cilacap.</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

---

## 4. PROMPT KIT AI UNTUK PIC 1 (Halaman: `index.html`)

*Salin teks di bawah ini ke ChatGPT / Claude / Gemini untuk menghasilkan kode Beranda:*

```markdown
Kamu adalah Frontend UI/UX Developer mahasiswa tingkat 2 mata kuliah Pemrograman Web Dasar. 
Tugasmu adalah merancang dan membuat kode untuk halaman Beranda Tirta Sentul Waterpark & Hall Cilacap dengan kualitas visual modern, estetis, rapi, dan mudah dipahami.

PANDUAN DESAIN & INISIATIF KREATIF:
1. Desain harus hidup, rapi, dan berbobot (hindari tampilan kaku/kosong).
2. Setiap <section> WAJIB memiliki hierarki visual lengkap: ada Judul Seksi (<h2>), subjudul/pengantar singkat (<p>), baru kemudian konten utama (grid kartu atau banner).
3. Kamu bebas menyusun copywriting yang memikat, persuasif, serta menambahkan badge atau ikon pemanis agar kartu terlihat profesional.

PAGAR TEKNIS INTEGRASI (WAJIB DIPATUHI 100%):
1. Menggunakan HTML5 Semantik, CSS3 murni (Flexbox/Grid dasar, hover effect halus), dan Pure JavaScript DOM dasar.
2. Dilarang menggunakan animasi rumit (IntersectionObserver, scroll library), library/CDN eksternal, atau inline style (style="...").
3. TOMBOL REUSABLE: Gunakan class tombol sistem yang sudah tersedia di proyek: `.btn .btn-primary` dan `.btn .btn-secondary`.
   - CTA Utama Hero: WAJIB berupa link ke halaman fasilitas: `<a href="fasilitas.html" class="btn btn-primary">Lihat Fasilitas Lengkap</a>` (DILARANG mengarahkannya ke anchor #keunggulan).
   - CTA Sekunder Hero: `<a href="https://maps.google.com/?q=Sentul+Waterpark+Cilacap" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Petunjuk Rute</a>`.
   - DILARANG membuat class tombol baru (seperti .home-btn) dan JANGAN menulis ulang CSS tombol di stylesheet.
4. ANTI-CSS BLEEDING: DILARANG men-styling selector tag telanjang (seperti h1, h2, p, img). Semua class CSS Beranda WAJIB diawali prefix `.home-` (contoh: `.home-hero`, `.home-section-header`, `.home-features`, `.home-card`, `.home-cta`).
5. WRAPPER CONTAINER: Setiap <section> di dalam <main> WAJIB membungkus isinya dengan `<div class="container">` agar lebarnya sejajar dengan navbar dan footer.
6. DEFENSIVE JAVASCRIPT: Kode JS WAJIB mengecek keberadaan elemen terlebih dahulu dengan `if (element) { ... }` agar tidak error saat file script.js dimuat di halaman lain.
7. Variabel warna proyek: var(--primary-color), var(--navy-color), var(--bg-light), var(--white).
8. Aset gambar lokal: `assets/images/indoor-pool.jpg`.

OUTPUT KODE YANG HARUS KAMU BERIKAN (BAGI DALAM 3 BLOK KODE TERPISAH):

[BLOK 1: HTML BERANDA]
Kode untuk di dalam tag <main id="main-content">...</main> di index.html:
- Hero Section: Layout 2 kolom (teks persuasif tentang sensasi renang semi-indoor sejuk bebas panas terik matahari di Cilacap, tombol CTA ke fasilitas.html & Google Maps, serta foto `assets/images/indoor-pool.jpg`).
- Section Keunggulan: Header seksi (judul <h2> dan pengantar <p>), diikuti Grid 3 Kartu Keunggulan (1. Atap Semi-Indoor Bebas Terik, 2. Fasad Megah Sentul Hall, 3. Air Bersih & Terawat Higienis).
- Section Callout / CTA: Banner ajakan berkunjung ke Jl. Gatot Subroto Cilacap + tombol interaksi: `<button type="button" id="btn-info-tiket" class="btn btn-primary">Cek Jam Buka & Tiket</button>`.

[BLOK 2: CSS KHUSUS BERANDA]
Kode CSS untuk di-copy ke zona /* 5. BAGIAN PIC 1: HALAMAN BERANDA */ di style.css:
- Gunakan class ber-prefix .home- (contoh: .home-hero, .home-section-header, .home-features, .home-card, .home-cta).
- Layout menggunakan Flexbox / CSS Grid sederhana, padding seksi proporsional (misal 50px-60px), kartu dengan border-radius (8px-12px), box-shadow lembut, dan efek hover kartu naik sedikit (`transform: translateY(-4px)`).
- JANGAN menulis ulang CSS tombol (.btn).

[BLOK 3: JAVASCRIPT DOM DASAR]
Kode JavaScript untuk di-copy ke zona /* 2. BAGIAN PIC 1 */ di script.js:
- 1 fungsi dengan document.getElementById('btn-info-tiket') dan addEventListener('click') yang menampilkan alert informasi harga tiket (Weekday Rp 15.000, Weekend Rp 20.000) dan jam operasional. Wajib gunakan pengecekan defensive `if (btnInfoTiket)`.
```

---

## 5. PROMPT KIT AI UNTUK PIC 2 (Halaman: `tentang.html`)

*Salin teks di bawah ini ke ChatGPT / Claude / Gemini untuk menghasilkan kode Tentang Kami:*

```markdown
Kamu adalah Frontend UI/UX Developer mahasiswa tingkat 2 mata kuliah Pemrograman Web Dasar. 
Tugasmu adalah merancang dan membuat kode untuk halaman Tentang Kami Tirta Sentul Cilacap dengan kualitas rapi, berbobot, dan menarik.

PANDUAN DESAIN & INISIATIF KREATIF:
1. Tampilkan citra tempat rekreasi keluarga dan olahraga yang berkelas serta terpercaya.
2. Setiap <section> WAJIB memiliki hierarki visual jelas: Judul (<h1>/<h2>), pengantar singkat, dan konten terstruktur.
3. Berikan sentuhan desain yang bersih pada narasi profil, tombol interaktif, dan kartu nilai perusahaan.

PAGAR TEKNIS INTEGRASI (WAJIB DIPATUHI 100%):
1. Menggunakan HTML5 Semantik, CSS3 murni (Flexbox/Grid dasar, hover), dan Pure JavaScript DOM dasar.
2. Dilarang menggunakan animasi rumit, library/CDN eksternal, atau inline style (style="...").
3. TOMBOL REUSABLE: Gunakan class tombol bersama: `class="btn btn-secondary"`. DILARANG membuat class tombol baru seperti .about-btn dan JANGAN menulis ulang CSS tombol di stylesheet.
4. ANTI-INLINE STYLE: Kotak visi-misi (`id="box-visi-misi"`) harus disembunyikan secara default menggunakan class CSS `.about-hidden { display: none; }` (DILARANG menggunakan style="display:none" di HTML). Di JS, lakukan toggle class `.about-hidden` saat tombol diklik.
5. ANTI-CSS BLEEDING: DILARANG men-styling selector tag telanjang (seperti h1, h2, p, img). Semua selector CSS WAJIB diawali prefix `.about-` (contoh: `.about-hero`, `.about-profile`, `.about-values`, `.about-card`).
6. WRAPPER CONTAINER: Setiap <section> di dalam <main> WAJIB membungkus isinya dengan `<div class="container">` agar lebarnya sejajar dengan navbar dan footer.
7. DEFENSIVE JAVASCRIPT: Kode JS WAJIB mengecek keberadaan elemen terlebih dahulu dengan `if (element) { ... }` agar tidak error saat file script.js dimuat di halaman lain.
8. Variabel warna proyek: var(--primary-color), var(--navy-color), var(--bg-light), var(--white).
9. Aset gambar lokal: `assets/images/facade-entrance.jpg`.

OUTPUT KODE YANG HARUS KAMU BERIKAN (BAGI DALAM 3 BLOK KODE TERPISAH):

[BLOK 1: HTML TENTANG KAMI]
Kode untuk di dalam tag <main id="main-content">...</main> di tentang.html:
- Hero Subpage: Banner judul halaman ("Mengenal Tirta Sentul Cilacap") dan deskripsi pengantar.
- Profil & Komitmen: Layout 2 kolom (kiri: foto fasad pilar Romawi megah `assets/images/facade-entrance.jpg`; kanan: cerita komitmen menghadirkan kolam semi-indoor teduh dan hall serbaguna untuk warga Cilacap).
- Interaksi Visi & Misi: Letakkan di kolom teks profil, berupa tombol: `<button type="button" id="btn-toggle-visi" class="btn btn-secondary">Lihat Visi & Misi Kami</button>` dan kotak konten `<div id="box-visi-misi" class="about-hidden">...</div>` (berisi poin visi dan misi Tirta Sentul).
- Section Nilai Utama: Header seksi (judul <h2> dan pengantar <p>) + Grid 3 Kotak Nilai (1. Kenyamanan Teduh, 2. Standar Olahraga & Edukasi, 3. Rekreasi Terjangkau).

[BLOK 2: CSS KHUSUS TENTANG KAMI]
Kode CSS untuk di-copy ke zona /* 6. BAGIAN PIC 2: HALAMAN TENTANG KAMI */ di style.css:
- Wajib sertakan rule helper: `.about-hidden { display: none; }`.
- Gunakan class ber-prefix .about- (contoh: .about-hero, .about-profile, .about-box, .about-card).
- Layout rapi menggunakan Flexbox atau CSS Grid sederhana dengan padding seksi yang nyaman dan hover efek halus pada kartu nilai. JANGAN menulis ulang CSS tombol (.btn).

[BLOK 3: JAVASCRIPT DOM DASAR]
Kode JavaScript untuk di-copy ke zona /* 3. BAGIAN PIC 2 */ di script.js:
- 1 fungsi interaksi DOM untuk tombol id="btn-toggle-visi" yang melakukan toggle class `.about-hidden` pada elemen id="box-visi-misi" saat diklik, serta mengubah teks tombol antara "Lihat Visi & Misi Kami" dan "Sembunyikan Visi & Misi". Wajib gunakan pengecekan defensif `if (btnToggleVisi && boxVisiMisi)`.
```

---

## 6. PROMPT KIT AI UNTUK PIC 3 (Halaman: `fasilitas.html`)

*Salin teks di bawah ini ke ChatGPT / Claude / Gemini untuk menghasilkan kode Fasilitas:*

```markdown
Kamu adalah Frontend UI/UX Developer mahasiswa tingkat 2 mata kuliah Pemrograman Web Dasar. 
Tugasmu adalah merancang dan membuat kode untuk halaman Fasilitas Tirta Sentul Cilacap dengan kualitas visual rapi, informatif, dan terstruktur.

PANDUAN DESAIN & INISIATIF KREATIF:
1. Buat katalog fasilitas terlihat menarik layaknya destinasi wisata modern.
2. Setiap <section> WAJIB memiliki hierarki visual lengkap: Judul seksi (<h2>), pengantar singkat (<p>), baru kemudian grid katalog atau tabel HTM.
3. Setiap kartu fasilitas memiliki foto, judul fasilitas, deskripsi singkat, dan tombol interaksi.

PAGAR TEKNIS INTEGRASI (WAJIB DIPATUHI 100%):
1. Menggunakan HTML5 Semantik, CSS3 murni (Flexbox/Grid dasar, hover), dan Pure JavaScript DOM dasar.
2. Dilarang menggunakan animasi rumit, library/CDN eksternal, atau inline style (style="...").
3. TOMBOL REUSABLE: Gunakan class tombol bersama: `class="btn btn-secondary btn-detail-fasilitas"`. DILARANG membuat class tombol baru dan JANGAN menulis ulang CSS tombol di stylesheet.
4. ANTI-CSS BLEEDING: DILARANG men-styling selector tag telanjang (seperti h1, h2, p, img). Semua selector CSS WAJIB diawali prefix `.facility-` (contoh: `.facility-hero`, `.facility-grid`, `.facility-card`, `.facility-pricing`).
5. WRAPPER CONTAINER: Setiap <section> di dalam <main> WAJIB membungkus isinya dengan `<div class="container">` agar lebarnya sejajar dengan navbar dan footer.
6. DEFENSIVE JAVASCRIPT: Kode JS WAJIB mengecek keberadaan elemen terlebih dahulu dengan `if (elements.length > 0)` agar tidak error saat file script.js dimuat di halaman lain.
7. Variabel warna proyek: var(--primary-color), var(--navy-color), var(--bg-light), var(--white).

OUTPUT KODE YANG HARUS KAMU BERIKAN (BAGI DALAM 3 BLOK KODE TERPISAH):

[BLOK 1: HTML FASILITAS]
Kode untuk di dalam tag <main id="main-content">...</main> di fasilitas.html:
- Hero Subpage: Banner judul halaman ("Fasilitas & Wahana Tirta Sentul") dan deskripsi pengantar.
- Katalog 4 Fasilitas Unggulan: Header seksi (judul <h2> dan pengantar <p>) + Grid 2 kolom / 4 kartu fasilitas dengan pemetaan gambar dan atribut data-info persis berikut:
  1. Kartu 1 (Kolam Lintasan Semi-Indoor): gambar `assets/images/indoor-pool.jpg`, tombol `<button type="button" class="btn btn-secondary btn-detail-fasilitas" data-info="Kolam beratap kanopi teduh dengan 6 lintasan renang atletik dan kedalaman bertingkat 1 hingga 2 meter.">Detail Fasilitas</button>`
  2. Kartu 2 (Sentul Hall Venue): gambar `assets/images/facade-entrance.jpg`, tombol `<button type="button" class="btn btn-secondary btn-detail-fasilitas" data-info="Gedung pertemuan aula megah berpilar klasik Romawi dengan kapasitas ratusan tamu dan area parkir sangat luas.">Detail Fasilitas</button>`
  3. Kartu 3 (Waterpark & Ember Tumpah): gambar `assets/images/waterpark-slides.jpg`, tombol `<button type="button" class="btn btn-secondary btn-detail-fasilitas" data-info="Wahana air ceria untuk keluarga dengan seluncuran berkelok, ember tumpah raksasa, dan kolam dangkal aman.">Detail Fasilitas</button>`
  4. Kartu 4 (Gazebo & Lounge Tepi Kolam): gambar `assets/images/relax-gazebo.jpg`, tombol `<button type="button" class="btn btn-secondary btn-detail-fasilitas" data-info="Area istirahat teduh dilengkapi gazebo kayu bersih dan kursi malas modern yang bebas digunakan pengunjung.">Detail Fasilitas</button>`
- Section Informasi HTM & Jam Buka: Header seksi (judul <h2> dan pengantar <p>) + 2 kotak/tabel harga tiket (Weekday: Rp 15.000 / orang, Weekend: Rp 20.000 / orang).

[BLOK 2: CSS KHUSUS FASILITAS]
Kode CSS untuk di-copy ke zona /* 7. BAGIAN PIC 3: HALAMAN FASILITAS */ di style.css:
- Gunakan class ber-prefix .facility- (contoh: .facility-hero, .facility-grid, .facility-card, .facility-pricing).
- Terapkan CSS Grid atau Flexbox responsif, kartu dengan border-radius, overflow hidden agar gambar rapi, dan efek hover kartu terangkat sedikit. JANGAN menulis ulang CSS tombol (.btn).

[BLOK 3: JAVASCRIPT DOM DASAR]
Kode JavaScript untuk di-copy ke zona /* 4. BAGIAN PIC 3 */ di script.js:
- Ambil semua tombol dengan `const detailBtns = document.querySelectorAll('.btn-detail-fasilitas');`.
- Cek defensif `if (detailBtns.length > 0)`, lalu pasang perulangan `forEach`: saat tombol diklik, ambil data teks dari `btn.getAttribute('data-info')` dan tampilkan menggunakan `alert(info)`.
```