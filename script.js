/**
 * ==========================================================================
 * TIRTA SENTUL WATERPARK & HALL CILACAP - JAVASCRIPT TUNGGAL
 * Mata Kuliah: Pemrograman Web Dasar - Politeknik Negeri Cilacap
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. SKRIP UMUM (Dikelola oleh Ketua / PM)
// Menandai menu navigasi yang sedang aktif berdasarkan nama file yang dibuka
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-links a");

  let currentFile = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (!currentFile || currentFile === "") {
    currentFile = "index.html";
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentFile) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ==========================================================================
// 2. BAGIAN PIC 1: INTERAKSI BERANDA (index.html)
// Tuliskan kode JavaScript khusus halaman beranda di bawah baris ini:
// ==========================================================================
/* 2. BAGIAN PIC 1 */
// Pengecekan elemen defensif untuk Modal Pop-Up Info Tiket
const btnInfoTiket = document.getElementById('btn-info-tiket');
const modalInfoTiket = document.getElementById('modal-info-tiket');
const btnCloseModal = document.getElementById('btn-close-modal');

if (btnInfoTiket && modalInfoTiket) {
  // Buka modal saat tombol diklik
  btnInfoTiket.addEventListener('click', function() {
    modalInfoTiket.showModal();
  });
}

if (btnCloseModal && modalInfoTiket) {
  // Tutup modal saat tombol silang (x) diklik
  btnCloseModal.addEventListener('click', function() {
    modalInfoTiket.close();
  });
}

if (modalInfoTiket) {
  // Tutup modal jika pengguna mengklik area luar (backdrop)
  modalInfoTiket.addEventListener('click', function(event) {
    if (event.target === modalInfoTiket) {
      modalInfoTiket.close();
    }
  });
}


// ==========================================================================
// 3. BAGIAN PIC 2: INTERAKSI TENTANG KAMI (tentang.html)
// Tuliskan kode JavaScript khusus halaman tentang kami di bawah baris ini:
// ==========================================================================


// ==========================================================================
// 4. BAGIAN PIC 3: INTERAKSI FASILITAS (fasilitas.html)
// Tuliskan kode JavaScript khusus halaman fasilitas di bawah baris ini:
// ==========================================================================

