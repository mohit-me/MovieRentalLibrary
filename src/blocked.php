<!DOCTYPE html>
<html lang="en">
<?php
	//Start Session
	session_start();
	//Inlcude global variables and functions
	//I won't need to copy and paste this code everywhere!
	require_once("./includes/global.php");
	require_once("./includes/functions.php");
	$title = "blocked";
	$page = "blocked";
?>

<head>
	
    <title><?php echo 'Clover - '.$title; ?></title>
	<link type="text/css" rel="stylesheet" href="style/styles.css" />
	
	<!-- Script that allows IE8 and lower to render HTML5 specific tags -->
	<script src="js/html5.js" type="text/javascript"></script>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

	<!-- jQuery script library included -->
	<script type="text/javascript" src="js/jquery.js"></script> 
	
  </head>
  
  <body>
  	
	<!-- This link just gets me back to the top of the page -->
	<a href="#top"></a>
	<!-- This is a background gradient! -->
	<div id="fancypants">
		<!--The main wrapper I use for the entire site. This allows me to center the entire page and set a specific width.-->
		<div id="page_wrapper">

			<header id="page_heading">
				<h1>Clover Movie Rental Store</h1>
			</header>
			
			<!-- Site logo -->
			<img id="clover" src="img/clover.png" alt="An image of Clover Movie Gallery's blue clover logo.">
			
			<header id="user_message">
				<?php
					if(isset($_SESSION["name"]))
					{
						echo '<div >Welcome back ' . $_SESSION["name"] . ' ' . $_SESSION['type'].'</div>';
					}
				?>
			</header>
			
<?php 
	
	/*Arrays for navigation menus. 
	Allows me to easily add more items to the menu and to dynamically
	generate the navigation as I wish. */
	$left_nav = array
		(
			array("home" , "Home" , "index.php"),
			array("gallery" , "Gallery" , "Gallery.php"),
			array("about" , "About" , "About.php"),
			array("contact" , "Contact" , "Contact.php")
		);
					
	$right_nav_guest = array
		(
			array("login" , "Login" , "Login.php"),
			array("register" , "Register" , "Register.php")
		);
	
	$right_nav_user = array
		(
			array("logout" , "Logout" , "Logout.php"),
		);
	
?>
			
<nav id="login_nav">
	<ul>
		<?php 
			//Check to see if user is logged in and display user navigations.
			//Otherwise display guest navigation.
			
			//Loop through the right nav guest array
			
			$cartitems = 0;
			
			//Get the number of items in your cart if you are logged in
			if (isset($_SESSION['id']))
			{

				
				dbconnect($host, $user, $pw, $db);
				
				$query = "SELECT * FROM users WHERE username ='".$_SESSION['username']."'";
				$result = mysqli_query($dbc, $query); //or die ("");
				$query1 ="SELECT count(*) FROM users WHERE username ='".$_SESSION['username']."'";
				$cartitems = mysqli_query($dbc, $query1);
				/*while ($row = mysqli_fetch_array($result))
				{
					$cartitems += intval($row['quantity']);
				}
				
				if(intval($cartitems) > 99)
				{
					$cartitems = '99+';
				}*/
				
			}
			else //Get the number of items in your cart if you aren't logged in
			{
				if(isset($_SESSION['cart']))
				{
					$arraycount = count($_SESSION['cart']);
					for($i = 0; $i < $arraycount; $i++)
					{
						$cartitems += intval($_SESSION['cart'][$i]['quantity']);
					}
					
					if(intval($cartitems) > 99)
					{
						$cartitems = '99+';
					}
				}
			}
			
			
		
			if(isset($_SESSION["name"]))
			{
				
				//Loop through the right nav user array
				for ($row =0; $row < count($right_nav_user); $row++)
				{
					if ($right_nav_user[$row][0] == $page)
					{
						echo '<li class="selected"><a href="'.$right_nav_user[$row][2].'">'.$right_nav_user[$row][1].'</a></li>';
					}
					else
					{
						echo '<li><a href="'.$right_nav_user[$row][2].'">'.$right_nav_user[$row][1].'</a></li>';
					}
				}
			}
			else
			{
				//Loop through the right nav guest array
				for ($row =0; $row < count($right_nav_guest); $row++)
				{
					if ($right_nav_guest[$row][0] == $page)
					{
						echo '<li class="selected"><a href="'.$right_nav_guest[$row][2].'">'.$right_nav_guest[$row][1].'</a></li>';
					}
					else
					{
						echo '<li><a href="'.$right_nav_guest[$row][2].'">'.$right_nav_guest[$row][1].'</a></li>';
					}
				}
			}
			
			/* DO AN IF STATEMENT HERE TO CHECK FOR ADMIN ACCOUNT */
			//If I have time!
			//I will add in a link to an admin page that allows you to add products, view orders, cart items, etc..
			
		?>
	</ul>
</nav>

			<div id="content_wrapper">
			
				<aside id="updates">
					<h3>Updates</h3>
					
					<article>
						<h4>New Movies Are Available</h4>
						<p>- A new Movie is available in our <a href="./Gallery.php">Store</a></p>
					</article>
					
					<article>
						<h4>Clover Movie Rental Store</h4>
						<p>- Clover Movie Rental Store is going to open a new store.
						See <a href="./About.php">About</a> page for further details.</p>
					</article>
				</aside>
				
				<section id="main">
				
<p>You Have not returned the movie within 20 days. Contact Branch Manager</p>
	
<?php require_once("footer.php"); ?>

<!-- End Header -->