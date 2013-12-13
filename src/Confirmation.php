<?php 
	
	$title = "Confirmation";
	$page = "confirm";
	require_once("header.php"); 
	
	if(isset($_SESSION["name"]))
	{
		header('Location: Welcome.php');
		exit;
	}

	$salt = '8dn37dnsa9nd7012na';
	
	//User-enterd info from Sign-up Form
	if (!isset($_POST['firstname']))
	{
		header('Location: Register.php');
		exit;
	}
	else
	{
		$firstname = $_POST['firstname'];
		$lastname = $_POST['lastname'];
		$username = $_POST['username'];
		$password  = hash('md5',$_POST['password'] . $salt);
		$email = $_POST['email'];
		$dateofbirth = $_POST['dateofbirth'];
		$address = $_POST['address'];
		$city = $_POST['city'];
		$state = $_POST['state'];
		$zipcode = $_POST['zipcode'];
		
		$mobile = $_POST['mobile'];
		
		$referral = $_POST['referral'];
		$code = $_POST['code'];
		if(strcmp($code,'1'))
		{
			$account_type = 'admin';
		}
		else 
		{
			$account_type = 'user';
		}
		if (isset($_POST['newsletter']))
		{
			$newsletter = $_POST['newsletter'];
		}
		else
		{
			$newsletter = 'no';
		}
	}
	
	dbconnect($host, $user, $pw, $db);
	//Build SQL statement to populate db
	$query = "INSERT INTO users (firstname, lastname, password, username, email, address, city, state, zipcode ,mobile,dateofbirth , newsletter, referral, account_type)" .
		"VALUES ('$firstname', '$lastname', '$password', '$username', '$email', '$address','$city','$state','$zipcode', '$mobile', '$dateofbirth' ,'$newsletter', '$referral', '$account_type')";
		
	$result = mysqli_query($dbc, $query) or die('Unable to write to the database!');
		
	mysqli_close($dbc);
?>


	<h2>Registration Confirmation</h2>

	<article>
		<p>Thanks for registering <?php echo $firstname .' '.$lastname; ?>!</p>
		<p><a href="Login.php">Login</a> or <a href="Register.php">Return to registration page</a></p>
		<p>This page will automatically be redirected to the login page in 5 seconds...</p>
	</article>
		
	
<?php require_once("footer.php"); ?>
	
				