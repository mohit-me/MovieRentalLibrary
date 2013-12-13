<?php 
	$title = "Read Reviews!";
	$page = "read";
	require_once("header.php"); 
	dbconnect($host, $user, $pw, $db);	
		$query = 'SELECT * FROM movie_review WHERE mid = '.($_GET["mid"])  ;
		$result = mysqli_query($dbc, $query)
			or die ('Cannot get movies from database!');
		while($row = $result->fetch_assoc())
		{

			echo "<article><br><b>By ".$row['username']."</b><br>Review:".$row['REVIEW']."</article>";
		}
	
?>
	
					
<?php require_once("footer.php"); ?>


