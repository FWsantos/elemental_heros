var cores = ["bg-warning","bg-secondary","bg-primary","bg-info","bg-danger","bg-success"];
var blocos = document.getElementsByClassName('bloco');
var permite = false;

var disablePlay = function () {
	var btnPlay = document.getElementById("play");
	btnPlay.setAttribute('disabled', '');	
}

var disableBlocos = function () {
	for (var i = 0; i < 6; i++) {
		document.getElementById('b'+i).setAttribute('disabled', '');
	}
}

var enableBlocos = function () {
	for (var i = 0; i < 6; i++) {
		document.getElementById('b'+i).removeAttribute('disabled');
	}
}

var enablePlay = function () {
	var btnPlay = document.getElementById("play");
	btnPlay.removeAttribute('disabled');	
}

var colorir = function (id) {
	var obj = document.getElementById('b'+id);
	obj.classList.toggle(cores[id]);
	setTimeout(function () {
		obj.classList.toggle(cores[id]);
	}, 500);
	// document.getElementById('resultado').innerHTML = id+1;

}

var venceu = function (turnoD, a) {
	document.getElementById('resultado').innerHTML = "!!!!!!!VENCEU!!!!!!!";
	setTimeout(function () {
		enablePlay();
		play(turnoD +1, a);
		// document.location.reload(true);
	}, 1000);
}



var payplay = function (a, turnoD) {
	enableBlocos();
	// console.log(permite);
	// window.permite = true;
	// console.log(permite);
	
	var j = 0;
	
	// var ids = [0, 1, 2, 3, 4, 5];

	// console.log(a[j]);
	// console.log(ids[j]);

	document.getElementById("b0").onclick = function() {
		colorir(0);

		if(a[j] == 0){
			j++;
			if (j == turnoD) {
				venceu(turnoD, a);
			}
		}else{
			document.getElementById('resultado').innerHTML = "Perdeu";
			setTimeout(function () {
				document.location.reload(true);
			}, 2000)
		}

	};
	document.getElementById("b1").onclick = function() {
		colorir(1);
		if(a[j] == 1){
			j++;
			if (j == turnoD) {
				venceu(turnoD, a);
			}
		}else{
			document.getElementById('resultado').innerHTML = "Perdeu";
			setTimeout(function () {
				document.location.reload(true);
			}, 2000)
		}
		
	};
	document.getElementById("b2").onclick = function() {
		colorir(2);
		if(a[j] == 2){
			j++;
			if (j == turnoD) {
				venceu(turnoD, a);
			}
		}else{
			document.getElementById('resultado').innerHTML = "Perdeu";
			setTimeout(function () {
				document.location.reload(true);
			}, 2000)
		}
		
	};
	document.getElementById("b3").onclick = function() {
		colorir(3);
		if(a[j] == 3){
			j++;
			if (j == turnoD) {
				venceu(turnoD, a);
			}
		}else{
			document.getElementById('resultado').innerHTML = "Perdeu";
			setTimeout(function () {
				document.location.reload(true);
			}, 2000)
		}
		
	};
	document.getElementById("b4").onclick = function() {
		colorir(4);
		if(a[j] == 4){
			j++;
			if (j == turnoD) {
				venceu(turnoD, a);
			}
		}else{
			document.getElementById('resultado').innerHTML = "Perdeu";
			setTimeout(function () {
				document.location.reload(true);
			}, 2000)
		}
		
	};
	document.getElementById("b5").onclick = function() {
		colorir(5);
		if(a[j] == 5){
			j++;
			if (j == turnoD) {
				venceu(turnoD, a);
			}
		}else{
			document.getElementById('resultado').innerHTML = "Perdeu";
			setTimeout(function () {
				document.location.reload(true);
			}, 1500);
		}
		
	};

}

var play = function (turnoD, a) {
	disablePlay();
	disableBlocos();

	
	// var turnoD = 3;
	// var a = [0,0,0];
	// var a = [];
	// for (var i = 0; i < ; i++) {
	a[turnoD-1] = ( Math.floor(Math.random() * turnoD));
	// }


	for (var i = 0; i < turnoD+1; i++) {
		(function (i) {
			setTimeout(function () {
				// if(i != 0){
				// 	blocos[a[i-1]].classList.remove(cores[a[i-1]]);

				// }
				if (i < turnoD) {	
					colorir(a[i]);
					// setTimeout(function(){
					// 	console.log(a[i]);
					// 	blocos[a[i]].classList.add(cores[a[i]]);
					// }, 100*i);
					document.getElementById('resultado').innerHTML = a[i] + 1;
				}else if(i == turnoD){
					document.getElementById('resultado').innerHTML = "Teste sua memória";
					console.log("A "+a)
					payplay(a, turnoD);
				}

			}, 1000*i);
		})(i);
	}
}
