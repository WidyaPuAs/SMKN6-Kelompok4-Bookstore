<?php 
include 'dp.php';
$objDb = new DbConnect;
$conn = $objDb -> connect();

$sql = "SELECT * FROM book_product";
$stmt = $conn -> prepare ($sql);
$stmt -> execute();
$book_product = $stmt -> fetchAll(PDO::FETCH_ASSOC);
echo json_encode($book_product);

?>