var cores = ["bg-warning","bg-secondary","bg-primary","bg-info","bg-danger","bg-success"];
var blocos = document.getElementsByClassName('bloco');

var disablePlay = function () {
	var btnPlay = document.getElementById("play");
	btnPlay.setAttribute('disabled', '');	
}

var enablePlay = function () {
	var btnPlay = document.getElementById("play");
	btnPlay.removeAttribute('disabled');	
}


var play = function () {
	disablePlay();


	for (var i = cores.length - 1; i >= 0; i--) {
		sleep(1000);

		 
		blocos[i].classList.add(cores[i]);
		// setInterval(blocos[i].classList.add(cores[i]), 1000)

	}
	// alert("teste");
}