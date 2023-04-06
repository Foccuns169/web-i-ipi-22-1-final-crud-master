<?php
    require('conn.php');

    $name = $_POST['name'];
    $descri = $_POST['descri'];
    $preco = $_POST['preco'];
    $data = $_POST['data'];
    $user_id = $_POST['usuario_id'];

    $conn->query("INSERT INTO products (name, descri, preco, data, usuario_id) VALUES ('$name', '$descri', '$preco', '$data', '$user_id')");
    
    header('Access-Control-Allow-Origin: *');
    http_response_code(201);
?>