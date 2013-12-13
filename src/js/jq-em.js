/*
	jq-validation.js
*/

/*This is the validation.js file re-written in jQuery*/

/*When document is ready do this*/
$(document).ready(function(){
	/*Set focus to the name field on page load*/
	$('#firstname').focus();
	/*Define variables and assign IDs to them for easier readability*/
	var form = $('#employeeform');
	var firstname = $('#firstname');
	var lastname = $('#lastname');
	var username = $('#username');
	var password = $('#password');
	var repassword = $('#repassword');
	var email = $('#email');
	var address = $('#address');
	var city = $('#city');
	var state = $('#state');
	var zipcode = $('#zipcode');
	var mobile = $('#mobile');
	var dateofbirth = $('#dateofbirth');
	var salary = $('#salary');


	/*More IDs for messages*/
	var firstnameMsg = $('#firstnameMsg');
	var lastnameMsg = $('#lastnameMsg');
	var usernameMsg = $('#usernameMsg');
	var emailMsg = $('#emailMsg');
	var passwordMsg = $('#passwordMsg');
	var repasswordMsg = $('#repasswordMsg');
	var referralMsg = $('#referralMsg');
	var addressMsg = $('#addressMsg');
	var cityMsg = $('#cityMsg');
	var stateMsg = $('#stateMsg');
	var mobileMsg = $('#mobileMsg');
	var zipcodeMsg = $('#zipcodeMsg');
	var dateofbirthMsg = $('#dateofbirthMsg');
	var salaryMsg = $('#salaryMsg');
	
	

	/*Flags to determine if a field is invalid*/
	var firstnameFlag = false;
	var lastnameFlag = false;
	var usernameFlag = false;
	var passwordFlag = false;
	var repasswordFlag = false;
	var emailFlag = false;
	var addressFlag = false;
	var cityFlag = false;
	var stateFlag = false;
	var mobileFlag = false;
	var zipcodeFlag = false;
	var dateofbirthFlag = false;
	var salaryFlag = false;
	var available = false;

	
	/*This will run validation when field loses focus*/
	firstname.change(validateFirstName);
	lastname.change(validateLastName);
	email.change(validateEmail);
	password.change(validatePassword);
	password.change(validateRePassword);
	repassword.change(validateRePassword);
	username.change(validateUsername);
	address.change(validateAddress);
	city.change(validateCity);
	state.change(validateState);
	mobile.change(validateMobile);
	zipcode.change(validateZipcode);
	dateofbirth.change(validateDateofbirth);
	salary.change(validateSalary);
	/*When user submits the form run validation on all fields*/
	form.submit(function(){
		if(validateFirstName() & validateMobile() & validateDateofbirth() & validateLastName() & validatePassword() & validateZipcode() & validateAddress()  & validateCity() & validateState() & validateRePassword() & validateEmail() & validateUsername2()  &validateSalary() )
		{
			return true;
		}
		else
		{
			/*Set focus from lowest to highest input field if flags are true*/
			/*Will also highlight text!*/
			if(emailFlag){email.focus().select();}
			if(repasswordFlag){repassword.focus().select();}
			if(passwordFlag){password.focus().select();}
			if(usernameFlag){username.focus().select();}
			if(lastnameFlag){lastname.focus().select();}
			if(firstnameFlag){firstname.focus().select();}
			if(addressFlag){address.focus().select();}
			if(cityFlag){city.focus().select();}
			if(mobileFlag){mobile.focus().select();}		
			if(stateFlag){state.focus().select();}
			if(zipcodeFlag){zipcode.focus().select();}
			if(dateofbirthFlag){dateofbirth.focus().select();}
			if(salaryFlag){salary.focus().select();}
			return false;
		}
	});


/*Validation functions for each field*/	
	function validateFirstName(){
		/*Invalid field if name is > 30 characters*/
		if (firstname.val().length > 30)
		{
			firstname.removeClass("valid");
			firstname.addClass("error");
			firstnameMsg.removeClass("valid");
			firstnameMsg.addClass("error");
			firstnameMsg.text("30 characters max!");
			firstnameFlag = true;
			return false;
		}
		/*Invalid field if left blank*/
		else if (firstname.val().length < 1)
		{
			firstname.removeClass("valid");
			firstname.addClass("error");
			firstnameMsg.removeClass("valid");
			firstnameMsg.addClass("error");
			firstnameMsg.text("First name is required!");
			firstnameFlag = true;
			return false;
		}
		else
		{
			firstname.removeClass("error");
			firstname.addClass("valid");
			firstnameMsg.removeClass("error");
			firstnameMsg.addClass("valid");
			firstnameMsg.text("Nice name!");
			firstnameFlag = false;
			return true;
		}
	}
	
	
	
	function validateLastName(){
		/*Invalid field if name is > 30 characters*/
		if (lastname.val().length > 30)
		{
			lastname.removeClass("valid");
			lastname.addClass("error");
			lastnameMsg.removeClass("valid");
			lastnameMsg.addClass("error");
			lastnameMsg.text("30 characters max!");
			lastnameFlag = true;
			return false;
		}
		/*Invalid field if left blank*/
		else if (lastname.val().length < 1)
		{
			lastname.removeClass("valid");
			lastname.addClass("error");
			lastnameMsg.removeClass("valid");
			lastnameMsg.addClass("error");
			lastnameMsg.text("Last name is required!");
			lastnameFlag = true;
			return false;
		}
		else
		{
			lastname.removeClass("error");
			lastname.addClass("valid");
			lastnameMsg.removeClass("error");
			lastnameMsg.addClass("valid");
			lastnameMsg.text("Weird last name!");
			lastnameFlag = false;
			return true;
		}
	}
	
	function validateZipcode(){
		var regexpzip=/^[0-9]+$/;
		
		if (zipcode.val().length < 6)
		{
			zipcode.removeClass("valid");
			zipcode.addClass("error");
			zipcodeMsg.removeClass("valid");
			zipcodeMsg.addClass("error");
			zipcodeMsg.text("Invalid zipcode code!");
			zipcodeFlag = true;
			return false;
		}
		else if (zipcode.val().length > 6)
		{
			zipcode.removeClass("valid");
			zipcode.addClass("error");
			zipcodeMsg.removeClass("valid");
			zipcodeMsg.addClass("error");
			zipcodeMsg.text("Invalid zipcode code!");
			zipcodeFlag = true;
			return false;
		}
		else if(!regexpzip.test(zipcode.val()))
		{
			zipcode.removeClass("valid");
			zipcode.addClass("error");
			zipcodeMsg.removeClass("valid");
			zipcodeMsg.addClass("error");
			zipcodedMsg.text("Numeric characters only!");
			passwordFlag = true;
			return false;
		}
		else
		{
			zipcode.removeClass("error");
			zipcode.addClass("valid");
			zipcodeMsg.removeClass("error");
			zipcodeMsg.addClass("valid");
			zipcodeMsg.text("Good!");
			zipcodeFlag = false;
			return true;
		}
	}
	
	function validateMobile(){
		var regexpMob=/^[0-9]+$/;
		/*Invalid field if name is > 30 characters*/
		if (mobile.val().length > 11)
		{
			mobile.removeClass("valid");
			mobile.addClass("error");
			mobileMsg.removeClass("valid");
			mobileMsg.addClass("error");
			mobileMsg.text("11 digits at max!");
			mobileFlag = true;
			return false;
		}
		/*Invalid field if left blank*/
		else if (mobile.val().length < 10 )
		{
			mobile.removeClass("valid");
			mobile.addClass("error");
			mobileMsg.removeClass("valid");
			mobileMsg.addClass("error");
			mobileMsg.text("Mobile number is required!");
			mobileFlag = true;
			return false;
		}
		
		else if(!regexpMob.test(mobile.val()))
		{
			mobile.removeClass("valid");
			mobile.addClass("error");
			mobileMsg.removeClass("valid");
			mobileMsg.addClass("error");
			mobileMsg.text("Numeric characters only!");
			passwordFlag = true;
			return false;
		}
		else 
		{
			mobile.removeClass("error");
			mobile.addClass("valid");
			mobileMsg.removeClass("error");
			mobileMsg.addClass("valid");
			mobileMsg.text("Valid Number!");
			mobileFlag = false;
			return true;
		}
	}

	function validateSalary(){
		if (salary.val().length < 4)
		{
			salary.removeClass("valid");
			salary.addClass("error");
			salaryMsg.removeClass("valid");
			salaryMsg.addClass("error");
			salaryMsg.text("Below min salary ");
			salaryFlag = true;
			return false;
		}
		else
		{
			salary.removeClass("error");
			salary.addClass("valid");
			salaryMsg.removeClass("error");
			salaryMsg.addClass("valid");
			salaryMsg.text("Valid salary Code!");
			salaryFlag = false;
			return true;
		}
	}
	
	
	function validateUsername(){
		/*Invalid field if greater than 15 characters*/
		if (username.val().length > 30)
		{
			username.removeClass("valid");
			username.addClass("error");
			usernameMsg.removeClass("valid");
			usernameMsg.addClass("error");
			usernameMsg.text("30 characters max!");
			usernameFlag = true;
			return false;
		}
		/*Invalid field if left blank*/
		else if (username.val().length < 1)
		{
			username.removeClass("valid");
			username.addClass("error");
			usernameMsg.removeClass("valid");
			usernameMsg.addClass("error");
			usernameMsg.text("Username required!");
			usernameFlag = true;
			return false;
		}
		else
		{
			usernameMsg.text("Validating...");
		
			$.post('includes/checkname.php', {'username': username.val()},
				function(response) 
				{
					if (response == 0) 
					{
						username.removeClass("error");
						username.addClass("valid");
						usernameMsg.removeClass("error");
						usernameMsg.addClass("valid");
						usernameMsg.text("Silly username... But Okay!");
						usernameFlag = false;
						available = true;
						return true;
					} 
					else 
					{
						username.removeClass("valid");
						username.addClass("error");
						usernameMsg.removeClass("valid");
						usernameMsg.addClass("error");
						usernameMsg.text("Username is taken!");
						usernameFlag = true;
						available = false;
						return false;
					}
				}
			);

		}
			
	}
	
	function validateUsername2(){
	
		if (available == true)
		{
			/*Invalid field if greater than 15 characters*/
			if (username.val().length > 30)
			{
				username.removeClass("valid");
				username.addClass("error");
				usernameMsg.removeClass("valid");
				usernameMsg.addClass("error");
				usernameMsg.text("30 characters max!");
				usernameFlag = true;
				return false;
			}
			/*Invalid field if left blank*/
			else if (username.val().length < 1)
			{
				username.removeClass("valid");
				username.addClass("error");
				usernameMsg.removeClass("valid");
				usernameMsg.addClass("error");
				usernameMsg.text("Username required!");
				usernameFlag = true;
				return false;
			}
			else
			{
				return true;
			}
		}
		else
		{
			usernameFlag = true;
			return false;
		}
			
	}
	

	/*Validation functions for each field*/	
	function validateAddress(){
		/*Invalid field if name is > 50 characters*/
		if (address.val().length > 50)
		{
			address.removeClass("valid");
			address.addClass("error");
			addressMsg.removeClass("valid");
			addressMsg.addClass("error");
			addressMsg.text("50 characters max!");
			addressFlag = true;
			return false;
		}
		/*Invalid field if left blank*/
		else if (firstname.val().length < 1)
		{
			address.removeClass("valid");
			address.addClass("error");
			addressMsg.removeClass("valid");
			addressMsg.addClass("error");
			addressMsg.text("address is required!");
			addressFlag = true;
			return false;
		}
		else
		{
			address.removeClass("error");
			address.addClass("valid");
			addressMsg.removeClass("error");
			addressMsg.addClass("valid");
			addressMsg.text("Address Validated!");
			addressFlag = false;
			return true;
		}
	}

	
	
	/*Validation functions for each field*/	
	function validateCity(){
		/*Invalid field if name is > 50 characters*/
		if (city.val().length > 50)
		{
			city.removeClass("valid");
			city.addClass("error");
			cityMsg.removeClass("valid");
			cityMsg.addClass("error");
			cityMsg.text("50 characters max!");
			cityFlag = true;
			return false;
		}
		/*Invalid field if left blank*/
		else if (firstname.val().length < 1)
		{
			city.removeClass("valid");
			city.addClass("error");
			cityMsg.removeClass("valid");
			cityMsg.addClass("error");
			cityMsg.text("City is required!");
			cityFlag = true;
			return false;
		}
		else
		{
			city.removeClass("error");
			city.addClass("valid");
			cityMsg.removeClass("error");
			cityMsg.addClass("valid");
			cityMsg.text("City Validated!");
			cityFlag = false;
			return true;
		}
	}

	/*Validation functions for each field*/	
	function validateState(){
		/*Invalid field if name is > 50 characters*/
		if (state.val().length > 50)
		{
			state.removeClass("valid");
			state.addClass("error");
			stateMsg.removeClass("valid");
			stateMsg.addClass("error");
			stateMsg.text("50 characters max!");
			stateFlag = true;
			return false;
		}
		/*Invalid field if left blank*/
		else if (firstname.val().length < 1)
		{
			state.removeClass("valid");
			state.addClass("error");
			stateMsg.removeClass("valid");
			stateMsg.addClass("error");
			stateMsg.text("State is required!");
			stateFlag = true;
			return false;
		}
		else
		{
			state.removeClass("error");
			state.addClass("valid");
			stateMsg.removeClass("error");
			stateMsg.addClass("valid");
			stateMsg.text("State Validated!");
			stateFlag = false;
			return true;
		}
	}

	function validateEmail(){
		/*This regular expression should test for email addresses with the following conditions:
				Any number of these characters before the @ symbol: a-z A-Z 0-9 (. - _ +)
				Any number of these characters after the @ symbol and before a '.': a-z A-Z 0-9 (-)
				Two to Six of these characters consisting of a '.' before them: a-z A-Z
				
				Valid examples: eMAIL009@email123.com ; e-mail123@e-mail.com ; e.mail123@email.com ; e_mail111@email.com ; email+@email.com
								email@email.co.com ; email@email.example.subdomain.co.cc.com.biz.gov
								
				Invalid examples: @.com ; email@email.c ; 
		*/
		var regexp = /^[a-zA-Z0-9\._+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,6})+$/;
		
		/*Check if its blank*/
		if (email.val().length < 1)
		{
			email.removeClass("valid");
			email.addClass("error");
			emailMsg.removeClass("valid");
			emailMsg.addClass("error");
			emailMsg.text("Email is required!");
			emailFlag = true;
			return false;
		}
		/*Invalid email if its too short*/
		else if (email.val().length < 6) /*I changed this to 6 because you *could* have an email like e@e.co*/
		{
			email.removeClass("valid");
			email.addClass("error");
			emailMsg.removeClass("valid");
			emailMsg.addClass("error");
			emailMsg.text("6 characters minimum!");
			emailFlag = true;
			return false;
		}
		/*Invalid email if its too long*/
		else if (email.val().length > 50)
		{
			email.removeClass("valid");
			email.addClass("error");
			emailMsg.removeClass("valid");
			emailMsg.addClass("error");
			emailMsg.text("50 characters max!");
			emailFlag = true;
			return false;
		}
		/*Checks email formatting (see regexp description above)*/
		else if(!regexp.test(email.val()))
		{
			email.removeClass("valid");
			email.addClass("error");
			emailMsg.removeClass("valid");
			emailMsg.addClass("error");
			emailMsg.text("Not a valid email!");
			emailFlag = true;
			return false;
		}
		else
		{
			email.removeClass("error");
			email.addClass("valid");
			emailMsg.removeClass("error");
			emailMsg.addClass("valid");
			emailMsg.text("Email looks valid!");
			emailFlag = false;
			return true;
		}
	}
	

	function validateDateofbirth(){
		
		var regexp = /^(?:(0[1-9]|1[012])[\- \/.](0[1-9]|[12][0-9]|3[01])[\- \/.](19)[0-9]{2})$/;

		
		/*Check if its blank*/
		if (dateofbirth.val().length < 1)
		{
			dateofbirth.removeClass("valid");
			dateofbirth.addClass("error");
			dateofbirthMsg.removeClass("valid");
			dateofbirthMsg.addClass("error");
			dateofbirthMsg.text("Date of birth is required!");
			dateofbirthFlag = true;
			return false;
		}
		/*Invalid dateofbirth if its too short*/
		else if (dateofbirth.val().length < 10) /*I changed this to 6 because you *could* have an dateofbirth like e@e.co*/
		{
			dateofbirth.removeClass("valid");
			dateofbirth.addClass("error");
			dateofbirthMsg.removeClass("valid");
			dateofbirthMsg.addClass("error");
			dateofbirthMsg.text("Format MM-DD-YYYY");
			dateofbirthFlag = true;
			return false;
		}
		/*Invalid dateofbirth if its too long*/
		else if (dateofbirth.val().length > 10)
		{
			dateofbirth.removeClass("valid");
			dateofbirth.addClass("error");
			dateofbirthMsg.removeClass("valid");
			dateofbirthMsg.addClass("error");
			dateofbirthMsg.text("Format MM-DD-YYYY");
			dateofbirthFlag = true;
			return false;
		}
		/*Checks dateofbirth formatting (see regexp description above)*/
		else if(!regexp.test(dateofbirth.val()))
		{
			dateofbirth.removeClass("valid");
			dateofbirth.addClass("error");
			dateofbirthMsg.removeClass("valid");
			dateofbirthMsg.addClass("error");
			dateofbirthMsg.text("Not a valid dateofbirth!");
			dateofbirthFlag = true;
			return false;
		}
		else
		{
			dateofbirth.removeClass("error");
			dateofbirth.addClass("valid");
			dateofbirthMsg.removeClass("error");
			dateofbirthMsg.addClass("valid");
			dateofbirthMsg.text("dateofbirth looks valid!");
			dateofbirthFlag = false;
			return true;
		}
	}
	

	function validatePassword(){
		
		/*Regular expression that only allows alphanumeric characters in your password!
		
		I like validating passwords like this better... 
		*/
		var regexppass = /^[a-zA-Z0-9]+$/;
	
		if (password.val().length < 1)
		{
			password.removeClass("valid");
			password.addClass("error");
			passwordMsg.removeClass("valid");
			passwordMsg.addClass("error");
			passwordMsg.text("Password is required!");
			passwordFlag = true;
			return false;
		}
		/*Invalid if password is too short*/
		else if (password.val().length < 4)
		{
			password.removeClass("valid");
			password.addClass("error");
			passwordMsg.removeClass("valid");
			passwordMsg.addClass("error");
			passwordMsg.text("4 characters minimum!");
			passwordFlag = true;
			return false;
		}
		/*Invalid if password is too long*/
		else if (password.val().length > 50)
		{
			password.removeClass("valid");
			password.addClass("error");
			passwordMsg.removeClass("valid");
			passwordMsg.addClass("error");
			passwordMsg.text("50 characters max!");
			passwordFlag = true;
			return false;
		}
		/*Invalid if password contains anything other than alphanumeric characters*/
		else if(!regexppass.test(password.val()))
		{
			password.removeClass("valid");
			password.addClass("error");
			passwordMsg.removeClass("valid");
			passwordMsg.addClass("error");
			passwordMsg.text("Alphanumeric characters only!");
			passwordFlag = true;
			return false;
		}
		else
		{
			password.removeClass("error");
			password.addClass("valid");
			passwordMsg.removeClass("error");
			passwordMsg.addClass("valid");
			passwordMsg.text("Good!");
			passwordFlag = false;
			return true;
		}
	}
	
	function validateRePassword(){
		/*Check if passwords match, invalid if not*/
		if (repassword.val() != password.val())
		{
			repassword.removeClass("valid");
			repassword.addClass("error");
			repasswordMsg.removeClass("valid");
			repasswordMsg.addClass("error");
			repasswordMsg.text("Passwords do not match!");
			repasswordFlag = true;
			return false;
		}
		/*Passwords WILL match if they are both blank, check to see if there IS a password at all*/
		else if (password.val() == "")
		{
			repassword.removeClass("valid");
			repassword.addClass("error");
			repasswordMsg.removeClass("valid");
			repasswordMsg.addClass("error");
			repasswordMsg.text("Enter a password first!");
			repasswordFlag = true;
			return false;
		}
		else
		{
			repassword.removeClass("error");
			repassword.addClass("valid");
			repasswordMsg.removeClass("error");
			repasswordMsg.addClass("valid");
			repasswordMsg.text("Great job at typing!");
			repasswordFlag = false;
			return true;
		}
	}
	
	/*Reset the form when user clicks Reset button*/
	$('#reset').click(function(){

		/*Set message text back to defaults*/
		$('#firstnameMsg').text("Enter your first name");
		$('#lastnameMsg').text("Enter your last name");
		$('#emailMsg').text("What is your email address?");
		$('#passwordMsg').text("Enter alphanumeric password");
		$('#repasswordMsg').text("Re-enter your password");
		$('#usernameMsg').text("Pick a username");
		$('#addressMsg').text("Enter a address");
		$('#cityMsg').text("Enter a city");
		$('#stateMsg').text("Enter a state");
		$('#zipcodeMsg').text("Enter correct zipcodecode");
		$('#mobileMsg').text("Enter correct mobile  number");
		$('#dateofbirthMsg').text("Enter dateofbirth");
		$('#salaryeMsg').text("Enter Salary");
		

		/*Remove class styles to any fields and messages*/
		$('#firstnameMsg').removeClass("valid");
		$('#lastnameMsg').removeClass("valid");
		$('#emailMsg').removeClass("valid");
		$('#passwordMsg').removeClass("valid");
		$('#repasswordMsg').removeClass("valid");
		$('#usernameMsg').removeClass("valid");
		$('#addressMsg').removeClass("valid");
		$('#cityMsg').removeClass("valid");
		$('#stateMsg').removeClass("valid");
		$('#zipcodeMsg').removeClass("valid");
		$('#mobileMsg').removeClass("valid");
		$('#salary').removeClass("valid");
		$('#dateofbirthMsg').removeClass("valid");

		$('#firstnameMsg').removeClass("error");
		$('#lastnameMsg').removeClass("error");
		$('#emailMsg').removeClass("error");
		$('#passwordMsg').removeClass("error");
		$('#repasswordMsg').removeClass("error");
		$('#usernameMsg').removeClass("error");
		$('#addressMsg').removeClass("error");
		$('#cityMsg').removeClass("error");
		$('#stateMsg').removeClass("error");
		$('#zipcodeMsg').removeClass("error");
		$('#mobileMsg').removeClass("error");
		$('#salaryMsg').removeClass("error");
		$('#dateofbirthMsg').removeClass("error");
		
		$('#firstname').removeClass("valid");
		$('#lastname').removeClass("valid");
		$('#email').removeClass("valid");
		$('#password').removeClass("valid");
		$('#repassword').removeClass("valid");
		$('#username').removeClass("valid");
		$('#address').removeClass("valid");
		$('#city').removeClass("valid");
		$('#state').removeClass("valid");
		$('#zipcode').removeClass("valid");
		$('#mobile').removeClass("valid");
		$('#salary').removeClass("valid");
		$('#dateofbirth').removeClass("valid");
		
		$('#firstname').removeClass("error");
		$('#lastname').removeClass("error");
		$('#email').removeClass("error");
		$('#password').removeClass("error");
		$('#repassword').removeClass("error");
		$('#username').removeClass("error");
		$('#address').removeClass("error");
		$('#city').removeClass("error");
		$('#state').removeClass("error");
		$('#zipcode').removeClass("error");
		$('#mobile').removeClass("error");
		$('#salary').removeClass("error");
		$('#dateofbirth').removeClass("error");
		
		/*Set focus to first field*/
		$('#firstname').focus();

	});
	
});

