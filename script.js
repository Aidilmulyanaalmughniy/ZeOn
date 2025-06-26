document.getElementById("guestbook").addEventListener("submit", function(e) {
  e.preventDefault(); // biar tidak reload

  var form = e.target;
  var data = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbxFgk9e9iwkzckdv9Uf4o0g1LE4X8yXmBJy1tut_mFgVRA7286ABBmLgh73dmmM5ETuGw/exec", {
    method: "POST",
    body: data
  })
  .then(response => response.text())
  .then(result => {
    document.getElementById("status").innerText = "Terima kasih sudah mengisi!";
    form.reset();
  })
  .catch(error => {
    document.getElementById("status").innerText = "Gagal mengirim!";
  });
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
