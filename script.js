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
document.getElementById("guestbook").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbxy9V8WC4hQbmOLbKf9ZkAteojUnbKjRAp6cqsoVKZUA9wLgZJHR0hDCtU12earxv-Zng/exec", {
    method: "POST",
    body: data,
  })
  .then(response => response.text())
  .then(responseText => {
    document.getElementById("successMsg").style.display = "block";
    form.reset();
  })
  .catch(error => {
    document.getElementById("status").innerText = "Gagal mengirim. Coba lagi.";
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
