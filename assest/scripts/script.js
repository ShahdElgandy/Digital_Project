const images = ["assest/images/Rectangle 6.png", "assest/images/pro2.jpeg"];
let currentIndex = 0;

const imageElement = document.getElementById("project-image");
const indexDisplay = document.getElementById("current-index");

function updateImage() {
  if (imageElement && indexDisplay) {
    imageElement.src = images[currentIndex];
    indexDisplay.textContent = currentIndex === 0 ? "01" : "02";
  }
}

function nextProject() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function prevProject() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    const icon = document.getElementById("theme-icon");
    const logo = document.getElementById("logo");

    if (icon) icon.src = "assest/icons/Rectangle 11.png";
    if (logo) logo.src = "assest/icons/Group 11 1.png";
  }

  updateImage();
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const icon = document.getElementById("theme-icon");
  const logo = document.getElementById("logo");

  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {
    if (icon) icon.src = "assest/icons/Rectangle 11.png";
    if (logo) logo.src = "assest/icons/Group 11 1.png";
    localStorage.setItem("theme", "dark");
  } else {
    if (icon) icon.src = "assest/icons/Moon.png";
    if (logo) logo.src = "assest/icons/Group 11.png";
    localStorage.setItem("theme", "light");
  }
}
