<?php 
	
	$title = "ConfirmationVideo";
	$page = "confirmvideo";
	require_once("header.php"); 
	
	if(!isset($_SESSION["name"]))
	{
		header('Location: Login.php');
		exit;
	}

	
	//User-enterd info from Sign-up Form
	if (isset($_POST['firstname']))
	{
		header('Location: Register.php');
		exit;
	}
	else
	{
		$title = $_POST['title'];
		$videotype = $_POST['videotype'];
		$bcode = $_POST['bcode'];
		$cost = $_POST['cost'];
		$rent = $_POST['rent'];
		dbconnect($host, $user, $pw, $db);
		$query   = "SELECT mid FROM movies WHERE title='".$title."'";
		$result = mysqli_query($dbc, $query) or die('Can not read database!');
		if ($row = $result->fetch_assoc()) 
			$movieid =  $row['mid'];
		//echo $title;echo $movieid;echo  $videotype;echo $bcode;echo $cost;echo $rent;
		//mysqli_close($dbc);
		
	}
	
	//dbconnect($host, $user, $pw, $db);
	//Build SQL statement to populate db
	$query = "INSERT INTO video (title, movieid,  type,  bcode ,cost ,rent )" .
		"VALUES ('$title','$movieid', '$videotype', '$bcode','$cost','$rent')";
		
	$result = mysqli_query($dbc, $query) or die('Unable to write to the database!');
		
	mysqli_close($dbc);
?>


	<h2>Branch Registration Confirmation</h2>

	<article>
		<p>Thanks for adding the video for movie <?php echo $title; ?>!</p>
		<p><a href="Welcome.php">Return to Welcom page</a></p>
		<p>This page will automatically be redirected to the login page in 5 seconds...</p>
	</article>
		
	
<?php require_once("footer.php"); ?>
	
				