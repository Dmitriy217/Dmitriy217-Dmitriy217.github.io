window.onload = function () {

	
	const burg = document.querySelector(".burger");
	const menu = document.querySelector(".nav");

	function click(){
		menu.classList.toggle("active");
		burg.classList.toggle("active");
	}

	burg.onclick = click;

	// -------------------------------------

	const slider = document.querySelector(".slider_bg");

	let act_slider = 1;

	setInterval(function(){
		slider.classList.remove("slide" + act_slider);
		if(act_slider < 4){
			act_slider++;
			slider.classList.add("slide" + act_slider);
		}
		else{
			act_slider = 1;
			slider.classList.add("slide" + act_slider);
		}
	}, 5000);




};