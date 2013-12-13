<?php
	$title = "Add to cart";
	$page = "cart";
	require_once("header.php"); 
	if(!isset($_SESSION["name"]))
	{
		header('Location: Login.php');
		exit;
	}
	$brc = $_POST['branchname'];
	$pieces = explode(":", $brc);
	$pieces1 = explode(",", $pieces[1]);
	$branchname= $pieces1[0];
	$type= $pieces[2];
	$name=$_SESSION["username"];
	dbconnect($host, $user, $pw, $db);
	$query   = "SELECT bcode FROM branches WHERE branchname='".$branchname."';";
	$result = mysqli_query($dbc, $query) or die('Can not read database!');
	if ($row = $result->fetch_assoc()) 
			$bcode =  $row['bcode'];

	$query1   = "SELECT videoid FROM video WHERE type='".$type." ' AND bcode='".$bcode."' AND status='0' ;";
	$result1 = mysqli_query($dbc, $query1) or die('Can not read database!');
	if ($row1 = $result1->fetch_assoc()) 
			$vid =  $row1['videoid'];
	
	$query2 = "INSERT INTO user_cart (username, videoid)". "VALUES ('$name','$vid')";
	$result2 = mysqli_query($dbc, $query2) or die('Already in cart!');	
	mysqli_close($dbc);	
	header("Location: Cart.php");
	exit;
	
	

?>