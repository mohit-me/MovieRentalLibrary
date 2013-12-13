<?php

if(isset($_POST['bcode']))
{
	$bcode = $_POST['bcode'];

	require_once("global.php");
	require_once("functions.php");
	
	dbconnect($host, $user, $pw, $db);
		
	$query = "SELECT bid FROM branches WHERE bcode='".$bcode."'";
	
	$result = mysqli_query($dbc, $query)
		or die('Can not read database!');

	echo mysqli_num_rows($result);

	mysqli_close($dbc);
}
?>