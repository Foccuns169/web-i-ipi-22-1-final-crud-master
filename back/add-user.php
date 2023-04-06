<?php
    require('conn.php');
    
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    $conn->query("INSERT INTO users (username, email, password) VALUES ('$username','$email', '$password')");
    
    header('Access-Control-Allow-Origin: *');
    http_response_code(201);
?>