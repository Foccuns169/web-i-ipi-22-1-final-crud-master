<?php

    require 'conn.php';

    $userId = $_GET['usuario_id'];

    $result = $conn->query("SELECT * FROM products WHERE usuario_id = $userId");
    $data = $result->fetchAll(PDO::FETCH_ASSOC);

    header('Access-Control-Allow-Origin: *');
    
    echo json_encode($data);