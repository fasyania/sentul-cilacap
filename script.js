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
// ==========================================================================
const btnInfoTiket = document.getElementById('btn-info-tiket');
const modalInfoTiket = document.getElementById('modal-info-tiket');
const btnCloseModal = document.getElementById('btn-close-modal');

if (btnInfoTiket && modalInfoTiket) {
  btnInfoTiket.addEventListener('click', function() {
    modalInfoTiket.showModal();
  });
}

if (btnCloseModal && modalInfoTiket) {
  btnCloseModal.addEventListener('click', function() {
    modalInfoTiket.close();
  });
}

if (modalInfoTiket) {
  modalInfoTiket.addEventListener('click', function(event) {
    if (event.target === modalInfoTiket) {
      modalInfoTiket.close();
    }
  });
}

// ==========================================================================
// 3. BAGIAN PIC 2: HALAMAN TENTANG KAMI (tentang.html)
// ==========================================================================
const btnToggleVisi = document.getElementById('btn-toggle-visi');
const boxVisiMisi = document.getElementById('box-visi-misi');

if (btnToggleVisi && boxVisiMisi) {
  btnToggleVisi.addEventListener('click', function () {
    boxVisiMisi.classList.toggle('about-hidden');

    if (boxVisiMisi.classList.contains('about-hidden')) {
      btnToggleVisi.textContent = 'Lihat Visi & Misi Kami';
    } else {
      btnToggleVisi.textContent = 'Sembunyikan Visi & Misi';
    }
  });
}

// ==========================================================================
// 4. BAGIAN PIC 3: INTERAKSI FASILITAS (fasilitas.html)
// ==========================================================================
const detailBtns = document.querySelectorAll('.btn-detail-fasilitas');
if (detailBtns.length > 0) {
  detailBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const info = btn.getAttribute('data-info');
      alert(info);
    });
  });
}