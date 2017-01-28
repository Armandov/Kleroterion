function kleroterion(jury){
	for (var i = 0; i < jury.length; i++) {
		var number = Math.random();
		number = Math.round(number);
		if (number == 1) {
		jury[i].color = "black"
		}else{
			jury[i].color = "white"
		};
	};
	return console.log(jury)
}