<?php 
	$title = "lost movie";
	$page = "lost";
	require_once("header.php"); 
?>
<?php
	dbconnect($host, $user, $pw, $db);
	
	if(empty($_GET)) /*This runs when there are no parameters in the URL otherwise you return PHP errors*/
	{
		echo '<p>Cannot find item!</p>';
	}
	else
	{
		if(isset($_SESSION['id']))
		{
			dbconnect($host, $user, $pw, $db);
			$query = 'SELECT * FROM video WHERE videoid = '.($_GET["cid"]);
			$result = mysqli_query($dbc, $query)
				or die ('Cannot remove cart item from database!');
			while($row = mysqli_fetch_array($result))
				{
				$amount=$row['cost'];
				$videoid=$row['videoid'];
				}
				$query1 = 'UPDATE video SET cond=1 WHERE videoid = '.$videoid;
				$result1 = mysqli_query($dbc, $query1)
					or die ('Cannot remove cart item from database!');
				
			echo 'Pay Rs. '.$amount.'please';

			$query = 'DELETE FROM user_rented WHERE videoid = '.($_GET["cid"]) ;
			$result = mysqli_query($dbc, $query)
				or die ('Cannot remove cart item from database!');
		}
		else
		{
			$i = $_GET["cid"];
			unset($_SESSION['cart'][$i]);
			$_SESSION['cart'] = array_values($_SESSION['cart']);
			if(count($_SESSION['cart']) <= 0)
			{
				unset($_SESSION['cart']);
			}
		}
	}
	echo '<a href="Rentals.php"> Go back</a>'
	//header("Location: ../Rentals.php");
	//exit;
?>


<?php require_once("footer.php"); ?>