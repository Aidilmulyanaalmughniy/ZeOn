// ========== SLIDESHOW ==========
const slides = ["images/foto1.jpg", "images/foto2.jpg", "images/foto3.jpg"];
let index = 0;
const slideImg = document.getElementById("slide");
setInterval(() => {
  index = (index + 1) % slides.length;
  slideImg.src = slides[index];
}, 4000);

// ========== BACKGROUND MUSIC ==========
document.body.addEventListener('click', () => {
  document.getElementById('bg-music').play();
}, { once: true });

// ========== FORM BUKU TAMU ==========
document.getElementById("guestForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const ucapan = document.getElementById("ucapan").value.trim();

  if (!nama || !ucapan) {
    document.getElementById("status").innerText = "Nama dan ucapan wajib diisi.";
    return;
  }

  const data = new FormData();
  data.append("nama", nama);
  data.append("ucapan", ucapan);

  fetch("https://script.google.com/macros/s/AKfycbxbO8eZJLMUahndQSg2ktTYMR3c3_XdxDJepDLK4SF8SoidjwBBf47M7cDOeHyXYavFng/exec", {
    method: "POST",
    body: data
  })
  .then(response => response.text())
  .then(responseText => {
    document.getElementById("successMsg").style.display = "block";
    document.getElementById("status").innerText = "";
    e.target.reset();
  })
  .catch(error => {
    console.error("Gagal:", error);
    document.getElementById("status").innerText = "Gagal mengirim. Coba lagi nanti.";
  });
});


// ========== ANIMASI SCROLL ==========
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card.animate").forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});
