// Ask user name
let userName = prompt("What is your name?");

// Get current hour
let hour = new Date().getHours();

// Greeting
if (hour < 12) {
  console.log("Good morning, " + userName + "!");
} else if (hour < 18) {
  console.log("Good afternoon, " + userName + "!");
} else {
  console.log("Good evening, " + userName + "!");
}

// Ask birth year
let birthYear = prompt("What year were you born?");

// Calculate age
let age = 2026 - birthYear;

// Calculate days lived
let daysLived = age * 365;

console.log("You have lived for approximately " + daysLived + " days!");

// Adult check
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Dark mode toggle
const darkModeBtn = document.querySelector("#darkModeBtn");

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});


// =======================
// Hobby Gallery
// =======================

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400"
];

let currentIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", function () {

  currentIndex++;

  // Prevent undefined image error
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  galleryImage.src = images[currentIndex];

});