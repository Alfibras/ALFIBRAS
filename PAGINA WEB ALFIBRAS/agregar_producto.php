<?php
include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre_producto = $_POST['nombre_producto'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];
    $stock = $_POST['stock'];
    $imagen_url = $_POST['imagen_url'];

    $sql = "INSERT INTO productos (nombre_producto, descripcion, precio, stock, imagen_url) VALUES (:nombre_producto, :descripcion, :precio, :stock, :imagen_url)";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':nombre_producto', $nombre_producto);
    $stmt->bindParam(':descripcion', $descripcion);
    $stmt->bindParam(':precio', $precio);
    $stmt->bindParam(':stock', $stock);
    $stmt->bindParam(':imagen_url', $imagen_url);

    if ($stmt->execute()) {
        echo "Producto añadido correctamente";
    } else {
        echo "Error al añadir el producto";
    }
}
?>
