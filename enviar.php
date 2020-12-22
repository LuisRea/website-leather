<?php
//llamando a los campos
$nombre = $_POST['nombre'];
$direccion = $_POST['direccion'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];
//datos para el correo
$destino = "luisalbet2@gmail.com";
$asunto = "contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Direccion: $direccion \n";
$carta .= "Mensaje: $mensaje";

//enviando mensaje
mail($destino, $asunto, $carta);
header('location:mensaje-enviado.html')

?>