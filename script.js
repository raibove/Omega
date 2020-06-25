let slideIndex = [1,1,1,1];
let slideId = ["slides1","slides2","slides3","slides4"];
let dotId = ["dot1","dot2","dot3","dot4"];
let menu;
window.onload = function(){
showSlides(1,0);
showSlides(1,1);
showSlides(1,2);
showSlides(1,3);
const menuIcon = document.querySelector(".menu-icons");
menu = document.querySelector(".menu");
const menuopt = document.querySelectorAll(".menuopt");
menuIcon.addEventListener("click", toggleMenu);
	for (let i = 0; i < menuopt.length; i++) 
	{
    	menuopt[i].addEventListener("click",toggleMenu);
	}
}

function plusSlides(n,no){
	showSlides(slideIndex[no] += n,no);
}

function currentSlide(n,no){
	showSlides(slideIndex[no] = n,no);
}

function showSlides(n,no){
	let i;
	let slides = document.getElementsByClassName(slideId[no]);  
	let dots = document.getElementsByClassName(dotId[no]);

	if(n > slides.length){
		slideIndex[no] = 1;
	}
	if(n < 1){
		slideIndex[no] = slides.length;
	}
	for(i=0; i<slides.length; i++){
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" d", "");
  	}
  slides[slideIndex[no]-1].style.display = "block"; 
  if(n==slides.length || n==0){
  slides[0].style.display = "block"; 
  slides[slides.length-1].style.display = "block"; 
  } 
  else{  
  slides[slideIndex[no]].style.display = "block"; 
}
  dots[slideIndex[no]-1].className += " d";
}
	function toggleMenu(){
		menu.classList.toggle("toggle");
	}