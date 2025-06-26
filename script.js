
    const form = document.getElementById('guestForm');
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => {
        if (response.ok) {
          successMsg.style.display = 'block';
          form.reset();
        } else {
          alert("Terjadi kesalahan. Coba lagi nanti.");
        }
      })
      .catch(() => alert("Gagal mengirim. Cek koneksi atau coba lagi."));
    });
// Slideshow
const slides = [
    "images/foto1.jpg",
    "images/foto2.jpg",
    "images/foto3.jpg",
    // tambahkan lebih banyak foto
];
let index = 0;
const slideImg = document.getElementById("slide");

setInterval(() => {
    index = (index + 1) % slides.length;
    slideImg.src = slides[index];
}, 3000);
 

  // Coba putar otomatis
  document.body.addEventListener('click', () => {
    document.getElementById('bg-music').play();
}, { once: true });


// Slideshow otomatis
const images = ["img/foto1.jpg", "img/foto2.jpg", "img/foto3.jpg"];
let current = 0;
setInterval(() => {
  current = (current + 1) % images.length;
  document.getElementById("slide").src = images[current];
}, 4000);
// Simpan dan tampilkan buku tamu
document.getElementById("guestForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !message) return;

  const entry = {
    nama: name,
    pesan: message,
    waktu: new Date().toLocaleString()
  };

// Animasi kartu masuk
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card.animate").forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});
