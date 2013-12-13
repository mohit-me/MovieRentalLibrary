<?php

	$title = "Rate Movie";
	$page = "rate";
	require_once("header.php"); 
	if(!isset($_SESSION["name"]))
	{
		header('Location: Login.php');
		exit;
	}
	
	$title = $_POST['tt'];
	$rating = $_POST['rating'];
	
	$name=$_SESSION["username"];
	dbconnect($host, $user, $pw, $db);
	
	$query   = "SELECT mid FROM movies WHERE title='".$title."';";
	$result = mysqli_query($dbc, $query) or die('Can not read database!');
	if ($row = $result->fetch_assoc()) 
			$mid =  $row['mid'];
	$queryxx = "SELECT count(*) as rating1 FROM user_rating WHERE mid =$mid AND username= '$name'";
	$resultxx = mysqli_query($dbc, $queryxx)
	or die ('Cannot get movies from database!');
	$row1 = mysqli_fetch_array($resultxx);
	$rating1 = $row1['rating1'];
	if($rating1=0)
	{$query = "INSERT INTO user_rating (username, mid, rating)". "VALUES ('$name','$mid','$rating')";
	echo $query;
	$result = mysqli_query($dbc, $query) or die('Already rated!');	
	}
	else
	{$query = "UPDATE user_rating SET rating='$rating' WHERE username='$name' AND mid='$mid'";
	echo $query;
	$result = mysqli_query($dbc, $query) or die('Already rated!');	
	

	}
	mysqli_close($dbc);	
	header("Location: Movie.php?mid=".$mid);
	exit;
?>