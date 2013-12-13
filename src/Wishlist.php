<?php 
	$title = "Wish List";
	$page = "wishlist";
	require_once("header.php"); 

	echo '	<h2>wish List</h2>';
	
	//Check if user is logged in
	$subtotal = 0;
	
	if (isset($_SESSION['id']))
	{
		//Get cart items from database if user is logged in
		dbconnect($host, $user, $pw, $db);
		//echo $_SESSION['username'];
		//Pull the product information from the database
		$query = "SELECT * FROM user_wishlist WHERE username ='".$_SESSION['username']."'";
		//echo $query;
		$result = mysqli_query($dbc, $query)
			or die ('Cannot get cart items from database!');
			
		$rows =  mysqli_num_rows($result);
		if($rows == null)
		{
			echo '<article><p>There are no items in your wathlist!</p></article>';

		}
			
		
		while($wishitem = mysqli_fetch_array($result))
		{
			$query = 'SELECT distinct * FROM movies  WHERE mid = '.$wishitem['MID'] ;
			//echo $query;
			$resultproduct = mysqli_query($dbc, $query)
				or die ('Cannot get product from database!');
			

			$colcount = 1;
			$totcount = 1;
			
			while ($row = mysqli_fetch_array($resultproduct))
			{
				if ($colcount == 1)
				{
					echo '<article class="gal_left">';
				}
				else if ($colcount == 2)
				{
					echo '<article class="gal_center">';
				}
				else if ($colcount == 3)
				{
					echo '<article class="gal_right">';
				}
				echo '	<a href="Movie.php?mid='.$row['mid'].'"><img alt="'.$row['title'].'" class="prod_sm" src="./'.$row['poster'].'" /></a>';
				echo '	<p><a href="Movie.php?mid='.$row['mid'].'">'.$row['title'].'</a></p>';
				echo '<div class="itemtrash"><p><a href="./includes/removewishlist.php?mid='.$wishitem['MID'].'">Remove</a></p></div>
					</article>';
				$colcount++;
				$totcount++;
				//if ($colcount > 3){$colcount = 1;}
				//if ($totcount > 9){ echo '<p><a href="Gallery.php"> Next </a></p>';}
			}
		

			$row = mysqli_fetch_array($resultproduct);
			
			
		}
	}
	else
	{
		//No cart items
		echo '<article><p>There are no items in your wishlist!</p></article>';
		
	
	}
?>


<?php require_once("footer.php"); ?>


