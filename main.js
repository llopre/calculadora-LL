
function Calcular() {
	var op=document.getElementById('op-selector').value;
	var valor1=parseInt(document.getElementById('input1').value);
	var valor2=parseInt(document.getElementById('input2').value);
	var result;

	switch(op){

		case "S": result = valor1+valor2;
		break;
		case "R": result = valor1-valor2;
		break;
		case "M": result = valor1*valor2;
		break;
		case "D": result = valor1/valor2;
		break;

	}

	alert(result);
}