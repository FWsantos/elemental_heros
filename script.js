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

var colorir = function (id) {
	var obj = document.getElementById('b'+id);
	obj.classList.toggle(cores[id]);
	document.getElementById('resultado').innerHTML = id+1;

}

var play = function (turnoD) {
	disablePlay();

	// // var j = 0;
	// for (var i = cores.length - 1; i >= 0; i--) {
	// 	(function (i) {
	// 		setTimeout(function () {
	// 			console.log("Teste" + i);
	// 			blocos[i].classList.add(cores[i]);
	// 			document.getElementById('resultado').innerHTML = i;
	// 			if(i === 5){
	// 				// document.getElementById('resultado').innerHTML = ;
	// 			}

	// 		}, 100*i);
	// 	})(i);
	// }
	
	// var turnoD = 3;
	var a = [];
	for (var i = 0; i < turnoD; i++) {
		a[i] = ( Math.floor(Math.random() * 6));
	}
	for (var i = a.length - 1; i >= 0; i--) {
		(function (i) {
			setTimeout(function () {
				if(i != 0){
					blocos[a[i-1]].classList.remove(cores[a[i-1]]);

				}
				console.log(a[i]);
				blocos[a[i]].classList.add(cores[a[i]]);
				document.getElementById('resultado').innerHTML = a[i] + 1;
				if(i === 5){
					// document.getElementById('resultado').innerHTML = ;
				}

			}, 300*i);
		})(i);
	}

	console.log(a);
}
