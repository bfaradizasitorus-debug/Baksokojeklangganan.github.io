// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// ==========================
// WHATSAPP ORDER FUNCTION
// ==========================
function sendToWa(event) {
  event.preventDefault();

  const Nama = document.getElementById("Nama").value.trim();
  const Alamat = document.getElementById("Alamat").value.trim();
  const Pesan = document.getElementById("Pesan").value.trim();

  const text =
    `Halo bang, saya mau pesan bakso kojek.%0A%0A` +
    `*Nama:* ${Nama}%0A` +
    `*Alamat:* ${Alamat}%0A` +
    `*Pesan:* ${Pesan}`;

  const waUrl = `https://wa.me/6281260995857?text=${text}`;
  window.open(waUrl, "_blank");
}
