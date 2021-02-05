window.onload = function () {

	
	const burg = document.querySelector(".burger");
	const menu = document.querySelector(".nav");


	function click(){
		menu.classList.toggle("active");
                burg.classList.toggle("active");
	}


	burg.onclick = click;

};
