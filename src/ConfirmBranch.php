<?php 
	
	$title = "Confirmation";
	$page = "confirm";
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
		$branchname = $_POST['branchname'];
		$email = $_POST['email'];
		$address = $_POST['address'];
		$city = $_POST['city'];
		$state = $_POST['state'];
		$zipcode = $_POST['zipcode'];
		$mobile = $_POST['mobile'];
		$bcode = $_POST['bcode'];
	}
	
	dbconnect($host, $user, $pw, $db);
	//Build SQL statement to populate db
	$query = "INSERT INTO branches (branchname,  email, address, city, state, zipcode ,mobile, bcode )" .
		"VALUES ('$branchname', '$email', '$address','$city','$state','$zipcode', '$mobile', '$bcode')";
		
	$result = mysqli_query($dbc, $query) or die('Unable to write to the database!');
		
	mysqli_close($dbc);
?>


	<h2>Branch Registration Confirmation</h2>

	<article>
		<p>Thanks for registering the branch <?php echo $branchname; ?>!</p>
		<p><a href="Welcome.php">Return to Welcom page</a></p>
		<p>This page will automatically be redirected to the login page in 5 seconds...</p>
	</article>
		
	
<?php require_once("footer.php"); ?>
	
				