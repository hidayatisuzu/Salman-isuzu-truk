// Navbar toggle
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
}

// Tahun otomatis footer
document.getElementById("year").textContent = new Date().getFullYear();
