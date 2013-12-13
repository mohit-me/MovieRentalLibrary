<?php 
	$title = "Shopping Cart";
	$page = "cart";
	require_once("header.php"); 

	echo '	<h2>Shopping Cart</h2>';
	
	echo '	<article id="cartheader">
				<span class="imagespace"></span>
				<span class="productheader">Product</span>
				<span class="quantityheader1">Rent Due</span>
				<span class="priceheader1">Return Date</span>
			</article>';
	//Check if user is logged in
	$subtotal = 0;
	
	if (isset($_SESSION['id']))
	{
		//Get cart items from database if user is logged in
		dbconnect($host, $user, $pw, $db);
		//echo $_SESSION['username'];
		//Pull the product information from the database
		$query = "SELECT * FROM user_rented WHERE username ='".$_SESSION['username']."'";
		//echo $query;
		$result = mysqli_query($dbc, $query)
			or die ('Cannot get cart items from database!');
			
		$rows =  mysqli_num_rows($result);
		if($rows == null)
		{
			echo '<article><p>There are no items in your cart!</p></article>';

		}
			$subtotal = 0;
		
		while($cartitem = mysqli_fetch_array($result))
		{
			$query = 'SELECT distinct * FROM user_rented,movies , video  WHERE user_rented.videoid=video.videoid AND  video.movieid=movies.mid  AND user_rented.videoid = '.$cartitem['videoid'] ;
			//echo $query;
			$resultproduct = mysqli_query($dbc, $query)
				or die ('Cannot get product from database!');
			
			$row = mysqli_fetch_array($resultproduct);
			echo '	<form id="checkout" action="checkout.php" method="post">
						<article class="cartitem">
						<a href="./Movie.php?mid='.$row['mid'].'"><img class="cartlist" alt="'.$row['title'].'" src="./'.$row['poster'].'" /></a>
						<div class="itemtitle"><p><a href="./Movie.php?mid='.$row['mid'].'">'.$row['title'].'</a></p></div>
						<div class="itemquantity"><p> Rs.'.$cartitem['rent_due'].' &nbsp; &nbsp;</p>
						</div>';
					{
						$price = $cartitem['rent_due']+$cartitem['fine'];
						$subtotal = $subtotal +($price );
						echo '<div class="itemprice"><p>'.$row['date_of_return'].'</p></div>';
					}
			echo '		<div class="itemtrash"><p><a href="./returnMovie.php?cid='.$cartitem['videoid'].'">Return Movie</a></p></div>';
			echo '		<div class="itemtrash"><p><a href="./complaintMovie.php?cid='.$cartitem['videoid'].'">Bad quality report</a></p></div>';
			echo '		<div class="itemtrash"><p><a href="./lostVideo.php?cid='.$cartitem['videoid'].'">Lost video</a></p></div>
			
					</article>';
		
		}
		
		
	}	
	else
	{
		//No cart items
		echo '<article><p>There are no items in your cart!</p></article>';
		
		echo '	<article class="subtotal">
					<p class="subtotal">Total: Rs 0.00</p>
				</article>';
	}
	echo '	<article class="subtotal">
					<p class="subtotal">Total: Rs'.number_format($subtotal,2,'.',',').'</p>
				</article>'
?>


<?php require_once("footer.php"); ?>