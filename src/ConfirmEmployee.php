<?php 
	
	$title = "Confirmation";
	$page = "confirm manager";
	require_once("header.php"); 
	
	if(!isset($_SESSION["name"]))
	{
		header('Location: Login.php');
		exit;
	}

	$salt = '8dn37dnsa9nd7012na';
	
	//User-enterd info from Sign-up Form
	if (!isset($_POST['firstname']))
	{
		header('Location: AddBranchManager.php');
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
		$account_type = 'employee';
		$role = 'employee';

		$salary = $_POST['salary'];
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
	$query = "SELECT bcode FROM employees WHERE username='".$_SESSION['username']."'";
	$result = mysqli_query($dbc, $query) or die('Can not read database!');
	if ($row = $result->fetch_assoc()) 
				$bcode=$row['bcode'];
	//Build SQL statement to populate db
	$query = "INSERT INTO users (firstname, lastname, password, username, email,mobile,dateofbirth , newsletter, referral, account_type)" .
		"VALUES ('$firstname', '$lastname', '$password', '$username', '$email',  '$mobile', '$dateofbirth' ,'$newsletter', '$referral', '$account_type')";
		
	$result = mysqli_query($dbc, $query) or die('Unable to write to the database!');
	
	$query = "INSERT INTO employees (username, bcode, salary,role)" .
		"VALUES ('$username', '$bcode', '$salary','$role')";
		
	$result = mysqli_query($dbc, $query) or die('Unable to write to the database!');
	
	$query1 = "INSERT INTO address (username, address, city, state, zipcode )" .
		"VALUES ('$username', '$address','$city','$state','$zipcode')";
		
	$result1 = mysqli_query($dbc, $query1) or die('Unable to write to the database!');	
	mysqli_close($dbc);
?>


	<h2>Registration Confirmation</h2>

	<article>
		<p>Thanks for registering employee <?php echo $firstname .' '.$lastname; ?>!</p>
		<p><a href="Register.php">Return to registration page</a></p>
	</article>
		
	
<?php require_once("footer.php"); ?>
	
				