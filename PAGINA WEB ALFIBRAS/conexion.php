<?php

$conn = new mysqli("localhost", "root", "", "alfibras");
$conn -> set_charset("utf8")

if ($conn->connect_errno) {
    echo "No hay conexion: (" . $conn->connect_errno . ") " . $conn->connect_error;
}
?>


