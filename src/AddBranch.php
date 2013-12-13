<?php 
	$title = "Add Branch";
	$page = "addbranch";
	require_once("header.php"); 
	
	//check to see if the user is already logged in
	//if they are, redirect them to the customerWelcome.php page
	if(!isset($_SESSION["name"]))
	{
		header('Location: Login.php');
		exit;
	}
?>
  	
	<h2>Wow A New Branch Is Opening Registration</h2>

	<article>
		<p>Welcome to Clover Movie Rental Store's  franchise addition page.</p>
		<p><a href="Welcome.php">Already have a franchise Go Back.</a></p>
	</article>
	
	<article id="userform">
		<h3>Registration Form:</h3>
		<form id="branchform" action="ConfirmBranch.php" method="post">
			<p>
				<label for="branchname">Branch Name:</label>
				<input class="box" type="text" id="branchname" name="branchname" value="" size="25" />
				<span id="branchnameMsg">Enter the branch name</span>
			</p>
			<p>
				<label for="email">Email: </label>
				<input class="box" type="text" id="email" name="email" value="" size="25"/>
				<span id="emailMsg">What is branch's contact email address?</span>
			</p>
			<p>
				<label for="address">Address: </label>
				<input class="box" type="text" id="address" name="address" value="" size="25"/>
				<span id="addressMsg">What is the address?</span>
			</p>
			<p>
				<label for="city">City: </label>
				<input class="box" type="text" id="city" name="city" value="" size="25"/>
				<span id="cityMsg">What is the the city?</span>
			</p>
			<p>
				<label for="state">State: </label>
				<input class="box" type="text" id="state" name="state" value="" size="25"/>
				<span id="stateMsg">What is the state?</span>
			</p>
			<p>
				<label for="zipcode">Zip Code : </label>
				<input class="box" type="text" id="zipcode" name="zipcode" value="" size="8"/>
				<span id="zipcodeMsg">What is branch's zip code?</span>
			</p>
			<p>
				<label for="mobile">Contact No.: </label>
				<input class="box" type="text" id="mobile" name="mobile" value="" size="12"/>
				<span id="mobileMsg">What is your branch's contact no?</span>
			</p>
			<p>
				<label for="bcode">Enter Brach Code: </label>
				<input class="box" type="text" id="bcode" name="bcode" value="" size="10"/>
				<span id="bcodeMsg">Enter Branch Code alloted to you?</span>
			</p>
			
			<p id="userform_button">
				<input id="submit" type="submit" value="Submit" />
				<input id="reset" type="reset" value="Reset" />
			</p>
			
		</form>
		
	</article>
					
<?php require_once("footer.php"); ?>


