<?php 
	$title = "Gallery";
	$page = "gallery";
	require_once("header.php"); 
?>
  
	<h1>Gallery</h1>
	<br><br>
	
<?php
	dbconnect($host, $user, $pw, $db);
	
	$query = 'SELECT * FROM movies';
	$result = mysqli_query($dbc, $query)
		or die ('Cannot get Movies from database!');
	
	$colcount = 1;
	$totcount = 1;
	
	while ($row = mysqli_fetch_array($result))
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
		/*if ($row['director'] > 0)
			{	
				$new_price = $row['price'] - ($row['price'] * $row['discount']);
				echo '	<p><span class="old_price">$'.number_format($row['price'],2,'.',',').'</span> 
					&nbsp;&nbsp;<span class="discount">$'.number_format($new_price,2,'.',',').'</span></p>';
			}
			else
			{
				echo '	<p class="Movie_price">$'.number_format($row['price'],2,'.',',').'</p>';
			}
		*/echo '</article>';
		
		$colcount++;
		$totcount++;
		if ($colcount > 3){$colcount = 1;}
		if ($totcount > 9){ echo '<p><a href="Gallery.php"> Next </a></p>';}
	}
	
	
	mysqli_close($dbc);
?>
					
<?php require_once("footer.php"); ?>


