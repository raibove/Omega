let slideIndex = 1;
let menu;
window.onload = function(){
	showSlides(1);
	const menuIcon = document.querySelector(".menu-icons");
menu = document.querySelector(".menu");
const menuopt = document.querySelectorAll(".menuopt");
menuIcon.addEventListener("click", toggleMenu);
	for (let i = 0; i < menuopt.length; i++) 
	{
    	menuopt[i].addEventListener("click",toggleMenu);
	}
function toggleMenu(){
		menu.classList.toggle("toggle");
	}
}

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex= n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" d", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " d";
}
