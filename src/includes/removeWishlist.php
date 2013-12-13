<?php
	session_start();
	require_once("global.php");
	require_once("functions.php");
	
	dbconnect($host, $user, $pw, $db);
	
	if(empty($_GET)) /*This runs when there are no parameters in the URL otherwise you return PHP errors*/
	{
		echo '<p>Cannot find watchlist item!</p>';
	}
	else
	{
		if(isset($_SESSION['id']))
		{
			dbconnect($host, $user, $pw, $db);
			
			$query = 'DELETE FROM user_wishlist WHERE MID = '.($_GET["mid"]) ;
			//echo $query;
			$result = mysqli_query($dbc, $query)
				or die ('Cannot remove cart item from database!');
		}
	}
	
	header("Location: ../Wishlist.php");
	exit;

?>