<?php

	$title = "Add to watchlist";
	$page = "wishlist";
	require_once("header.php"); 
	if(!isset($_SESSION["name"]))
	{
		header('Location: Login.php');
		exit;
	}
	
	$title = $_POST['tt'];
	$name=$_SESSION["username"];
	dbconnect($host, $user, $pw, $db);
	
	$query   = "SELECT mid FROM movies WHERE title='".$title."';";
	$result = mysqli_query($dbc, $query) or die('Can not read database!');
	if ($row = $result->fetch_assoc()) 
			$mid =  $row['mid'];
	$query = "INSERT INTO user_wishlist (username, mid)". "VALUES ('$name','$mid ')";
	echo $query;
	$result = mysqli_query($dbc, $query) or die('Already in wishlist!');	
	mysqli_close($dbc);	
	header("Location: Wishlist.php");
	exit;
?>