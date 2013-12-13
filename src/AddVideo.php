<?php 
	$title = "Video";
	$page = "addvideo";
	require_once("header.php"); 
	
	//check to see if the user is already logged in
	//if they are, redirect them to the customerWelcome.php page
	if(!isset($_SESSION["name"]))
	{
		header('Location: Login.php');
		exit;
	}
?>
  	
  	

	<h2>Add A Video</h2>

	<article>
		<p>A New video is in the store Add it</p>
		<p><a href="Welcome.php">Already added. Click here to go back.</a></p>
	</article>
	
	<article id="userform">
		<h3>Video Addition Form:</h3>
		<form id="videoform" action="ConfirmVideo.php" method="post">
			<p>
				<label for="title">Title: </label>
				<input class="box" type="text" id="title" name="title" value="" size="25" />
				<span id="titleMsg">Enter A Movie title</span>
			</p>

			<p>
					<label for="videotype">Video Type: </label>
					<select name="videotype" id="videotype">
					<option value="DVD">DVD</option>
					<option value="BluRay">Blu Ray</option>
					<option value="VOD">Video on Demand</option>
				</select>
				<span id="videoTypeMasg"></span>
			</p>
			<?php
				if( $_SESSION['type']=="admin")
				{
					echo '<p>';
					echo '<label for="bcode">Branch Code : </label>';
					echo '<input class="box" type="text" id="bcode" name="bcode" value="" size="8"/>';
					echo '<span id="bcodeMsg">What is the branch where movie is added?</span>';
					echo '</p>';
				}
				else
				{

					echo '<p>';
					dbconnect($host, $user, $pw, $db);
					$query = "SELECT bcode FROM employees WHERE username='".$_SESSION['username']."'";
					$result = mysqli_query($dbc, $query) or die('Can not read database!');
					echo '<label for="bcode">Branch Code: </label>';
					echo '<select name="bcode" id="bcode">';
					if ($row = $result->fetch_assoc()) 
					echo '<option value='.$row['bcode'].'>';
					echo $row['bcode'];
					echo '</option>';
					echo '</select>';
					echo '<span id="bcodeMsg">Your Branch Id</span>';
					echo '</p>';
					
				}
			?>
			<p>
				<label for="rent">Enter Daily Rent: </label>
				<input class="box" type="text" id="rent" name="rent" value="" size="10"/>
				<span id="rentMsg">Enter Daily Rent(in Rs.)?</span>
			</p>
			<p>
				<label for="cost">Enter Cost: </label>
				<input class="box" type="text" id="cost" name="cost" value="" size="10"/>
				<span id="costMsg">Enter Cost(in Rs.)?</span>
			</p>
			
			<p id="userform_button">
				<input id="submit" type="submit" value="Submit" />
				<input id="reset" type="reset" value="Reset" />
			</p>
			
		</form>
		
	</article>
					
<?php require_once("footer.php"); ?>


