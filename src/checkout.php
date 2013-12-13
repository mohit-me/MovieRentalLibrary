<?php

	$title = "Checkout";
	$page = "checkout";
	require_once("header.php"); 
	if(!isset($_SESSION["name"]))
	{
		header('Location: Login.php');
		exit;
	}
	
	$name=$_SESSION["username"];
	$days_issue = $_POST['days_issue'];
	//echo $name;
	//echo $rent;
	//echo $quantity;
	dbconnect($host, $user, $pw, $db);
	$today = date('Y-m-d');
	$query1   = "SELECT * FROM users WHERE username='".$name."';";
	$result1 = mysqli_query($dbc, $query1) or die('Can not read database!');
	if ($row1 = $result1->fetch_assoc()) 
		$ic=$row1['issuecount'];
	$query   = "SELECT * FROM user_cart WHERE username='".$name."';";
	$result = mysqli_query($dbc, $query) or die('Can not read database!');
	if ($row = $result->fetch_assoc()) 
	{		
		$videoid=$row['videoid'];
		$query1   = "SELECT * FROM video WHERE videoid='".$videoid."';";
		$result1 = mysqli_query($dbc, $query1) or die('Can not read database!');
		if ($row1 = $result1->fetch_assoc())
			 $rent1=$row1['rent'];
		$rent2=(100-intval($ic));
		if($rent2>0)
		{
			$rent=0.5*$rent1+0.005*$rent1*$rent2;
		}
		else $rent=0.5*$rent1;
		if(intval($days_issue)==1)
			$amount=$rent;
		else if(intval($days_issue)==2)
			$amount=$rent*1.8;
		else if(intval($days_issue)==3)
			$amount=$rent*2.6;
	$ret = $today+intval($days_issue);

	$query2 = "INSERT INTO user_rented (username, videoid ,date_of_rent ,days_issue,rent_due,date_of_return,fine )". "VALUES ('$name','$videoid ','$today',$days_issue,$amount,'$ret',0)";
	$result2 = mysqli_query($dbc, $query2) or die('Already rented 1!');	
	$query22   = "UPDATE user_rented SET date_of_return = DATE_ADD(date_of_rent, INTERVAL ". $days_issue ." DAY) WHERE videoid='".$videoid."';";
	$result22 = mysqli_query($dbc, $query22) or die('Already rented 2!');
	
	$query   = "SELECT * FROM video WHERE videoid='".$videoid."';";
	$result = mysqli_query($dbc, $query) or die('Can not read database!');
	if ($row = $result->fetch_assoc()) 
		$issues=$row['issues'];
	$issue1=$issues+1;
	$query22   = "UPDATE video SET issues=".$issue1." WHERE videoid='".$videoid."';";
	$result22 = mysqli_query($dbc, $query22) or die('Already rented 2!');
	$ic=$ic+1;
	$query22   = "UPDATE users SET issuecount=".$ic." WHERE username='".$name."';";
	$result22 = mysqli_query($dbc, $query22) or die('Already rented 2!');
	
	$query3 ="DELETE FROM user_cart WHERE videoid ='".$videoid."';";
	$result3 = mysqli_query($dbc, $query3) or die('Already rented 3!');
	$query4 ="UPDATE video SET  status=1 WHERE videoid ='".$videoid."';";
	$result4 = mysqli_query($dbc, $query4) or die('Already rented 4!');	
	
	}
	mysqli_close($dbc);	
	header("Location: Profile.php");
	exit;
?>