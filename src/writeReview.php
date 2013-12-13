<?php

	$title = "Write a review";
	$page = "review";
	require_once("header.php"); 
	if(!isset($_SESSION["name"]))
	{
		header('Location: Login.php');
		exit;
	}
	
	$title = $_POST['tt'];
	$review = $_POST['review'];
	
	$name=$_SESSION["username"];
	dbconnect($host, $user, $pw, $db);
	
	$query   = "SELECT mid FROM movies WHERE title='".$title."';";
	$result = mysqli_query($dbc, $query) or die('Can not read database!');
	if ($row = $result->fetch_assoc()) 
			$mid =  $row['mid'];
	$query = "INSERT INTO movie_review (username, mid, review)". "VALUES ('$name','$mid','$review')";
	echo $query;
	$result = mysqli_query($dbc, $query) or die('Already written a review!');	
	mysqli_close($dbc);	
	header("Location: Movie.php?mid=".$mid);
	exit;
?>