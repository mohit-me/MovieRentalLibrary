<?php

	$title = "Add to watchlist";
	$page = "watchlist";
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
	$query = "INSERT INTO user_watchlist (username, mid)". "VALUES ('$name','$mid ')";
	$result = mysqli_query($dbc, $query) or die('Already in watchlist!');	
	mysqli_close($dbc);	
	header("Location: Watchlist.php");
	exit;
?>