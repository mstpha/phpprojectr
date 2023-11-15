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
$pwd = $_POST["password"];
$sql = "SELECT * FROM LOGIN where name=$name AND password=$pwd";
 $result = $conn->query($sql);

$exists = $result->num_rows > 0;
echo json_encode($exists);



$conn->close();
?>