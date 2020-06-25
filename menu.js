window.onload = function(){
	console.log("here");
	const menuIcon = document.querySelector(".menu-icons");
	const menu = document.querySelector(".menu");
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