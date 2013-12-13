<?php 
	$title = "Complaint movie";
	$page = "return";
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
				$comp=$row['complaint'];
			$comp1=$comp+1;
			$usernm=$_SESSION['username'];
			$vid=($_GET["cid"]);

			$query2="SELECT count(*) as user_comp FROM complaint  WHERE username ='$usernm' AND videoid=".$vid;
			//echo $query2;
			$result2 = mysqli_query($dbc, $query2);
			$row2 = mysqli_fetch_array($result2);
			$ccount = $row2['user_comp'];
			if($ccount==0)
			{$query = "INSERT INTO complaint (username , videoid )" ."VALUES ('$usernm','$vid')";
			$result = mysqli_query($dbc, $query)
				or die ('Cannot remove cart item from database!');
			$query = 'UPDATE video SET complaint='.$comp1.' WHERE videoid = '.($_GET["cid"]) ;
			$result = mysqli_query($dbc, $query)
				or die ('Cannot remove cart item from database!');
			}
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
	echo 'Complaint Registered';
	echo '<a href="Rentals.php"> Go back</a>'
	//header("Location: ../Rentals.php");
	//exit;
?>


<?php require_once("footer.php"); ?>