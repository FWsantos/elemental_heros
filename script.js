var cores = ["bg-warning","bg-secondary","bg-primary","bg-info","bg-danger","bg-success"];
var blocos = document.getElementsByClassName('bloco');
var permite = false;

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
	// document.getElementById('resultado').innerHTML = id+1;

}

var payplay = function (a) {
	// console.log(permite);
	// window.permite = true;
	// console.log(permite);
	
	var j = 0;
	
	var ids = [0, 1, 2, 3, 4, 5]
	document.getElementById("b0").onclick = function() {
		colorir(0);
		if(a[j] == ids[j]){
			j++;
		}else{
			document.getElementById('resultado').innerHTML = "Perdeu";
			setTimeout(function () {
				document.location.reload(true);
			}, 2000)
		}

	};
	document.getElementById("b1").onclick = function() {
		colorir(1);
		if(a[j] == ids[j]){
			j++;
		}else{
			document.getElementById('resultado').innerHTML = "Perdeu";
			setTimeout(function () {
				document.location.reload(true);
			}, 2000)
		}
		
	};
	document.getElementById("b2").onclick = function() {
		colorir(2);
		if(a[j] == ids[j]){
			j++;
		}else{
			document.getElementById('resultado').innerHTML = "Perdeu";
			setTimeout(function () {
				document.location.reload(true);
			}, 2000)
		}
		
	};
	document.getElementById("b3").onclick = function() {
		colorir(3);
		if(a[j] == ids[j]){
			j++;
		}else{
			document.getElementById('resultado').innerHTML = "Perdeu";
			setTimeout(function () {
				document.location.reload(true);
			}, 2000)
		}
		
	};
	document.getElementById("b4").onclick = function() {
		colorir(4);
		if(a[j] == ids[j]){
			j++;
		}else{
			document.getElementById('resultado').innerHTML = "Perdeu";
			setTimeout(function () {
				document.location.reload(true);
			}, 2000)
		}
		
	};
	document.getElementById("b5").onclick = function() {
		colorir(5);
		if(a[j] == ids[j]){
			j++;
		}else{
			document.getElementById('resultado').innerHTML = "Perdeu";
			setTimeout(function () {
				document.location.reload(true);
			}, 2000)
		}
		
	};

}

var play = function (turnoD) {
	disablePlay();

	
	// var turnoD = 3;
	var a = [];
	for (var i = 0; i < turnoD; i++) {
		a[i] = ( Math.floor(Math.random() * turnoD));
	}
	for (var i = 0; i < 7; i++) {
		(function (i) {
			setTimeout(function () {
				if(i != 0){
					blocos[a[i-1]].classList.remove(cores[a[i-1]]);

				}
				if (i < 6) {	
					console.log(a[i]);
					blocos[a[i]].classList.add(cores[a[i]]);
					document.getElementById('resultado').innerHTML = a[i] + 1;
				}else if(i == 6){
					document.getElementById('resultado').innerHTML = "Teste sua memória";
					payplay(a);
				}
			}, 500*i);
		})(i);
	}
}
