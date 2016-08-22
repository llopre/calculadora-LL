<?php
//Redefinicion de variables
$v1= $_POST ["input1"]; //Las variables tienen que empezar con el signo pesos
$v2= $_POST ["input2"];
$ope= $_POST ["operacion"];

//var_dump($_POST);




//calculo
switch($ope){
  

 		case "S": 
 				$result = $v1+$v2;
 				$tipo="+";
 				break;
 		case "R": 
 				$result = $v1-$v2;
 				$tipo="-";
 				break;
 		case "M": 
 				$result = $v1*$v2;
 				$tipo="*";
 				break;
 		case "D": 
 				$result = $v1/$v2;
				$tipo="/";
 				break;
  
  	}

//print_r($result);

?>

<!--Esto es html-->

<div>
	<p>Operacion: <?= $v1." ".$tipo." ".$v2 ?></p>
	<p>Resultado:</p>
	<input type="text" value="<?= $result ?>" disabled> 
</div>