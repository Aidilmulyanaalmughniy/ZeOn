document.getElementById("guestForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");
  
  if (!name || !message) return;
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
  // Simpan ke localStorage (simpan sementara di browser)
  const entry = {
    nama: name,
    pesan: message,
    waktu: new Date().toLocaleString()
  };

  let entries = JSON.parse(localStorage.getItem("bukuTamu")) || [];
  entries.push(entry);
  localStorage.setItem("bukuTamu", JSON.stringify(entries));
function renderGuestbook() {
  const entries = JSON.parse(localStorage.getItem("bukuTamu")) || [];
  const container = document.getElementById("guestbook-entries");
  container.innerHTML = "<h3>Pesan yang sudah masuk:</h3>";

  entries.reverse().forEach((e) => {
    const inisial = e.nama.charAt(0).toUpperCase();
    const waktu = new Date(e.waktu).toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <div class="entry-avatar">${inisial}</div>
      <div class="entry-content">
        <h4>${e.nama}</h4>
        <time>${waktu}</time>
        <p>${e.pesan}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

  // Update status & reset form
  status.textContent = "✅ Ucapan berhasil disimpan!";
  document.getElementById("guestForm").reset();

  // Tampilkan lagi semua pesan
  renderGuestbook();
});

function renderGuestbook() {
  const entries = JSON.parse(localStorage.getItem("bukuTamu")) || [];
  const container = document.getElementById("guestbook-entries");
  container.innerHTML = "<h3>Pesan yang sudah masuk:</h3>";

  entries.forEach((e) => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `<strong>${e.nama}</strong> <br><em>${e.waktu}</em><br>${e.pesan}<hr>`;
    container.appendChild(div);
  });
}

// Tampilkan saat halaman dibuka
renderGuestbook();

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

  let entries = JSON.parse(localStorage.getItem("bukuTamu")) || [];
  entries.push(entry);
  localStorage.setItem("bukuTamu", JSON.stringify(entries));

  document.getElementById("status").textContent = "✅ Pesan berhasil disimpan!";
  document.getElementById("guestForm").reset();
  renderGuestbook();
});

function renderGuestbook() {
  const entries = JSON.parse(localStorage.getItem("bukuTamu")) || [];
  const container = document.getElementById("guestbook-entries");
  container.innerHTML = "";
  entries.reverse().forEach((e) => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `<strong>${e.nama}</strong> <br><small>${e.waktu}</small><p>${e.pesan}</p>`;
    container.appendChild(div);
  });
}

renderGuestbook();

// Animasi kartu masuk
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card.animate").forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});
