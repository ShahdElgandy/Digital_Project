const images = ["assest/images/Rectangle 6.png", "assest/images/pro2.jpeg"];
let currentIndex = 0;

const imageElement = document.getElementById("project-image");
const indexDisplay = document.getElementById("current-index");

function updateImage() {
  imageElement.src = images[currentIndex];
  indexDisplay.textContent = currentIndex === 0 ? "01" : "02";
}

function nextProject() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function prevProject() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const icon = document.getElementById("theme-icon");
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "assest/icons/Rectangle 11.png";
  } else {
    icon.src = "assest/icons/Moon.png";
  }
}


function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  
  const icon = document.getElementById("theme-icon");
  const logo = document.getElementById("logo"); 
  
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "assest/icons/Rectangle 11.png";
    logo.src = "assest/icons/Group 11 1.png";
  } else {
    icon.src = "assest/icons/Moon.png";
    logo.src = "assest/icons/Group 11.png";
  }
}

