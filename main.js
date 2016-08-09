
function Calcular() {
	var op=document.getElementById('op-selector').value;
	var valor1=parseInt(document.getElementById('input1').value);
	var valor2=parseInt(document.getElementById('input2').value);
	var res; 
	var result;
	var tipo;

	switch(op){

		case "S": 
				result = valor1+valor2;
				tipo="+";
				break;
		case "R": 
				result = valor1-valor2;
				tipo="-";
				break;
		case "M": 
				result = valor1*valor2;
				tipo="*";
				break;
		case "D": 
				result = valor1/valor2;
				tipo="/";
				break;

	}

	alert("operacion: " + valor1 + tipo + valor2 + "=" + result);
	document.setElementById('res').value=res;




}