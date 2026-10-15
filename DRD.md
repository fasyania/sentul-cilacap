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
Kamu adalah Frontend Developer mahasiswa tingkat 2 mata kuliah Pemrograman Web Dasar. 
Tugasmu adalah membuat kode untuk halaman Beranda Tirta Sentul Cilacap dengan kualitas rapi, bersih, dan profesional.

BATASAN TEKNIS SANGAT KETAT (WAJIB PATUH 100%):
1. Menggunakan HTML5 Semantik, CSS3 (Flexbox/Grid dasar, hover), dan Pure JavaScript DOM dasar.
2. Dilarang menggunakan animasi rumit (IntersectionObserver, keyframe complex), library/CDN eksternal, atau inline style (style="...").
3. ANTI-CSS BLEEDING: DILARANG men-styling tag telanjang (seperti h1, h2, p, img). Semua selector CSS WAJIB diawali prefix `.home-` (contoh: `.home-hero h1`, `.home-card p`, `.home-banner h2`).
4. WRAPPER CONTAINER: Setiap <section> di dalam <main> WAJIB membungkus isinya dengan `<div class="container">` agar lebarnya sejajar dengan navbar dan footer.
5. DEFENSIVE JAVASCRIPT: Kode JS WAJIB mengecek keberadaan elemen terlebih dahulu dengan `if (element) { ... }` agar tidak error saat file script.js dimuat di halaman lain.
6. Gunakan variabel warna yang sudah ada di proyek: var(--primary-color), var(--navy-color), var(--bg-light), var(--white).
7. Gambar lokal yang digunakan WAJIB persis: `assets/images/indoor-pool.jpg`.

OUTPUT KODE YANG HARUS KAMU BERIKAN (BAGI DALAM 3 BLOK KODE TERPISAH):

[BLOK 1: HTML BERANDA]
Kode untuk di dalam tag <main id="main-content">...</main> di index.html:
- Hero Section (Headline tentang sensasi renang semi-indoor sejuk bebas panas matahari di Cilacap, tombol ke fasilitas & Google Maps, foto kolam semi-indoor).
- Section Keunggulan (3 kartu: Atap Semi-Indoor, Fasad Megah Sentul Hall, Air Jernih Terawat).
- Callout Banner (Ajakan berkunjung ke Jl. Gatot Subroto Cilacap + tombol interaksi dengan id="btn-info-tiket").

[BLOK 2: CSS KHUSUS BERANDA]
Kode CSS untuk di-copy ke zona /* 5. BAGIAN PIC 1: HALAMAN BERANDA */ di style.css:
- Gunakan class ber-prefix .home- (seperti .home-hero, .home-cards-grid, .home-card).
- Gunakan Flexbox atau Grid sederhana dengan margin, padding, border-radius 8px, dan efek hover kartu terangkat sedikit.

[BLOK 3: JAVASCRIPT DOM DASAR]
Kode JavaScript untuk di-copy ke zona /* 2. BAGIAN PIC 1 */ di script.js:
- 1 fungsi dengan document.getElementById('btn-info-tiket') dan addEventListener('click') yang menampilkan alert informasi harga tiket (Weekday Rp 15rb, Weekend Rp 20rb) dan jam operasional. Wajib gunakan pengecekan `if (btnInfoTiket)`.
```

---

## 5. PROMPT KIT AI UNTUK PIC 2 (Halaman: `tentang.html`)

*Salin teks di bawah ini ke ChatGPT / Claude / Gemini untuk menghasilkan kode Tentang Kami:*

```markdown
Kamu adalah Frontend Developer mahasiswa tingkat 2 mata kuliah Pemrograman Web Dasar. 
Tugasmu adalah membuat kode untuk halaman Tentang Kami Tirta Sentul Cilacap dengan kualitas rapi, bersih, dan berbobot.

BATASAN TEKNIS SANGAT KETAT (WAJIB PATUH 100%):
1. Menggunakan HTML5 Semantik, CSS3 (Flexbox/Grid dasar, hover), dan Pure JavaScript DOM dasar.
2. Dilarang menggunakan animasi rumit, library/CDN eksternal, atau inline style (style="...").
3. ANTI-CSS BLEEDING: DILARANG men-styling tag telanjang (seperti h1, h2, p, img). Semua selector CSS WAJIB diawali prefix `.about-` (contoh: `.about-hero h1`, `.about-text p`, `.about-value-box h3`).
4. WRAPPER CONTAINER: Setiap <section> di dalam <main> WAJIB membungkus isinya dengan `<div class="container">` agar lebarnya sejajar dengan navbar dan footer.
5. DEFENSIVE JAVASCRIPT: Kode JS WAJIB mengecek keberadaan elemen terlebih dahulu dengan `if (element) { ... }` agar tidak error saat file script.js dimuat di halaman lain.
6. Gunakan variabel warna yang sudah ada: var(--primary-color), var(--navy-color), var(--bg-light), var(--white).
7. Gambar lokal yang digunakan WAJIB persis: `assets/images/facade-entrance.jpg`.

OUTPUT KODE YANG HARUS KAMU BERIKAN (BAGI DALAM 3 BLOK KODE TERPISAH):

[BLOK 1: HTML TENTANG KAMI]
Kode untuk di dalam tag <main id="main-content">...</main> di tentang.html:
- Hero Subpage (Judul "Mengenal Tirta Sentul Cilacap").
- Profil & Kisah (Layout 2 kolom: foto fasad pilar Romawi megah Sentul Hall di kiri, cerita komitmen kolam semi-indoor teduh di kanan).
- Tombol Interaksi (Tombol dengan id="btn-toggle-visi" dan div dengan id="box-visi-misi" untuk menampilkan visi-misi).
- 3 Box Nilai Utama (Kenyamanan Teduh, Standar Olahraga, Tarif Terjangkau).

[BLOK 2: CSS KHUSUS TENTANG KAMI]
Kode CSS untuk di-copy ke zona /* 6. BAGIAN PIC 2: HALAMAN TENTANG KAMI */ di style.css:
- Gunakan class ber-prefix .about- (seperti .about-hero, .about-grid, .about-value-box).
- Gunakan Flexbox atau Grid sederhana dengan padding dan border-radius rapi.

[BLOK 3: JAVASCRIPT DOM DASAR]
Kode JavaScript untuk di-copy ke zona /* 3. BAGIAN PIC 2 */ di script.js:
- 1 fungsi interaksi DOM untuk tombol id="btn-toggle-visi" yang melakukan toggle (tampil/sembunyi) pada elemen id="box-visi-misi" saat diklik. Wajib gunakan pengecekan `if (btnToggleVisi && boxVisiMisi)`.
```

---

## 6. PROMPT KIT AI UNTUK PIC 3 (Halaman: `fasilitas.html`)

*Salin teks di bawah ini ke ChatGPT / Claude / Gemini untuk menghasilkan kode Fasilitas:*

```markdown
Kamu adalah Frontend Developer mahasiswa tingkat 2 mata kuliah Pemrograman Web Dasar. 
Tugasmu adalah membuat kode untuk halaman Fasilitas Tirta Sentul Cilacap dengan kualitas rapi, informatif, dan terstruktur.

BATASAN TEKNIS SANGAT KETAT (WAJIB PATUH 100%):
1. Menggunakan HTML5 Semantik, CSS3 (Flexbox/Grid dasar, hover), dan Pure JavaScript DOM dasar.
2. Dilarang menggunakan animasi rumit, library/CDN eksternal, atau inline style (style="...").
3. ANTI-CSS BLEEDING: DILARANG men-styling tag telanjang (seperti h1, h2, p, img). Semua selector CSS WAJIB diawali prefix `.facility-` (contoh: `.facility-hero h1`, `.facility-card h3`, `.facility-price-box h4`).
4. WRAPPER CONTAINER: Setiap <section> di dalam <main> WAJIB membungkus isinya dengan `<div class="container">` agar lebarnya sejajar dengan navbar dan footer.
5. DEFENSIVE JAVASCRIPT: Kode JS WAJIB mengecek keberadaan elemen terlebih dahulu dengan `if (element) { ... }` agar tidak error saat file script.js dimuat di halaman lain.
6. Gunakan variabel warna yang sudah ada: var(--primary-color), var(--navy-color), var(--bg-light), var(--white).
7. Gambar lokal yang digunakan WAJIB persis:
   - `assets/images/indoor-pool.jpg` (Kolam Lintasan Semi-Indoor)
   - `assets/images/facade-entrance.jpg` (Sentul Hall Venue Fasad Megah)
   - `assets/images/waterpark-slides.jpg` (Wahana Waterpark & Ember Tumpah)
   - `assets/images/relax-gazebo.jpg` (Gazebo & Lounge Santai Tepi Kolam)

OUTPUT KODE YANG HARUS KAMU BERIKAN (BAGI DALAM 3 BLOK KODE TERPISAH):

[BLOK 1: HTML FASILITAS]
Kode untuk di dalam tag <main id="main-content">...</main> di fasilitas.html:
- Hero Subpage (Judul "Fasilitas & Wahana Tirta Sentul").
- Katalog 4 Fasilitas (Grid 2 kolom / 4 kartu: tiap kartu memuat foto, nama fasilitas, deskripsi singkat, dan tombol rincian dengan class="btn-detail-fasilitas").
- Bagian Informasi HTM (Tabel / 2 kotak harga: Weekday Rp 15.000 dan Weekend Rp 20.000).

[BLOK 2: CSS KHUSUS FASILITAS]
Kode CSS untuk di-copy ke zona /* 7. BAGIAN PIC 3: HALAMAN FASILITAS */ di style.css:
- Gunakan class ber-prefix .facility- (seperti .facility-grid, .facility-card, .facility-price-box).
- Gunakan CSS Grid atau Flexbox sederhana dengan efek hover kartu terangkat sedikit.

[BLOK 3: JAVASCRIPT DOM DASAR]
Kode JavaScript untuk di-copy ke zona /* 4. BAGIAN PIC 3 */ di script.js:
- Interaksi tombol pada kartu fasilitas yang menampilkan alert/pesan detail fasilitas saat diklik. Wajib gunakan querySelectorAll dan pengecekan elemen.
```