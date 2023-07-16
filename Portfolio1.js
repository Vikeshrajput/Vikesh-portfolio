const tabLinksEl = document.getElementById("tab-links");
const educationEl = document.getElementById("tab-linksTwo");
const educationHidenEl = document.getElementById("education-hiden");
const skillsEl = document.getElementById("skills");

tabLinksEl.addEventListener("click", () => {
  educationHidenEl.style.display = "none";
  skillsEl.style.display = "block";
});
educationEl.addEventListener("click", () => {
  skillsEl.style.display = "none";
  educationHidenEl.style.display = "block";
});

// =========open menu=======

const closeMenuEl = document.getElementById("closeMenu");
const openMenuMenuEl = document.getElementById("closeMenu");
const sideMenuEl = document.getElementById("sideMenu");

function closeMenu() {
  sideMenuEl.style.right = "-200px";
}
function openMenu() {
  sideMenuEl.style.right = "0px";
}

// =============typing animation=========

const typingAnmEl = document.getElementById("rishi");

const careers = ["web Developer", "Freelancer", "Data Visualizer"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  typingAnmEl.innerHTML = `<p class="rishi" id="rishi" style="font-size:2.2rem;">and i'm a <span class="details"> ${careers[
    careerIndex
  ].slice(0, characterIndex)}. </span></p>
`;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
