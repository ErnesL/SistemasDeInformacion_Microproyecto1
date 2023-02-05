// Hero start

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Hero end

// Skills start

//Json
var text = {
  english: "100%",
  python: "70%",
  java: "50%",
  html: "30%",
  css: "20%",
  jscript: "15%",
};

// Creating the div element
const placer = document.querySelector(".Skills");
const name0 = document.createElement("h2");
name0.classList = "main-title";
name0.innerText = "Skills";
placer.appendChild(name0);

// ENGLISH

// <div></div>
const name1 = document.createElement("p");
name1.innerText = "English";
const placer_box1 = document.createElement("div");
const box1 = document.createElement("div");
// <div class = "container"></div>
placer_box1.classList = "container";
box1.classList = "skills english";
// <div class = "container">100%</div>
box1.innerText = text.english;
placer.appendChild(name1);
placer_box1.appendChild(box1);
placer.appendChild(placer_box1);

//PYTHON
const placer_box2 = document.createElement("div");
const name2 = document.createElement("p");
name2.innerText = "Python";
const box2 = document.createElement("div");
placer_box2.classList = "container";
box2.classList = "skills python";
box2.innerText = text.python;
placer.appendChild(name2);
placer_box2.appendChild(box2);
placer.appendChild(placer_box2);

//JAVA
const placer_box3 = document.createElement("div");
const name3 = document.createElement("p");
name3.innerText = "Java";
const box3 = document.createElement("div");
placer_box3.classList = "container";
box3.classList = "skills java";
box3.innerText = text.java;
placer.appendChild(name3);
placer_box3.appendChild(box3);
placer.appendChild(placer_box3);

//HTML
const placer_box4 = document.createElement("div");
const name4 = document.createElement("p");
name4.innerText = "HTML";
const box4 = document.createElement("div");
placer_box4.classList = "container";
box4.classList = "skills html";
box4.innerText = text.html;
placer.appendChild(name4);
placer_box4.appendChild(box4);
placer.appendChild(placer_box4);

//CSS
const placer_box5 = document.createElement("div");
const name5 = document.createElement("p");
name5.innerText = "CSS";
const box5 = document.createElement("div");
placer_box5.classList = "container";
box5.classList = "skills css";
box5.innerText = text.css;
placer.appendChild(name5);
placer_box5.appendChild(box5);
placer.appendChild(placer_box5);

//JSCRIPT
const placer_box6 = document.createElement("div");
const name6 = document.createElement("p");
name6.innerText = "JScript";
const box6 = document.createElement("div");
placer_box6.classList = "container";
box6.classList = "skills js";
box6.innerText = text.jscript;
placer.appendChild(name6);
placer_box6.appendChild(box6);
placer.appendChild(placer_box6);

// Skills end
