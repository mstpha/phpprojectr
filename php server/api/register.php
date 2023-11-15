<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "projet";




// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$name = $_POST["name"];
$pwd = $_POST["pass"];
$sql = "INSERT INTO login (name,password) VALUES($name,$pwd)";
$result = $conn->query($sql);

// echo json_encode()

$conn->close();
?>