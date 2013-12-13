<?php

if(isset($_POST['title']))
{
	$title = $_POST['title'];

	require_once("global.php");
	require_once("functions.php");
	
	dbconnect($host, $user, $pw, $db);
		
	$query = "SELECT title FROM movies WHERE title='".$title."'";
	
	$result = mysqli_query($dbc, $query)
		or die('Can not read database!');

	echo mysqli_num_rows($result);

	mysqli_close($dbc);
}
?>