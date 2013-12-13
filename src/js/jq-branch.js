/*
	jq-validation.js
*/

/*This is the validation.js file re-written in jQuery*/

/*When document is ready do this*/
$(document).ready(function(){
	/*Set focus to the name field on page load*/
	$('#branchname').focus();
	/*Define variables and assign IDs to them for easier readability*/
	var form = $('#branchform');
	var branchname = $('#branchname');
	var email = $('#email');
	var address = $('#address');
	var city = $('#city');
	var state = $('#state');
	var zipcode = $('#zipcode');
	var mobile = $('#mobile');
	var bcode = $('#bcode');


	/*More IDs for messages*/
	var branchname = $('#branchname');
	var addressMsg = $('#addressMsg');
	var cityMsg = $('#cityMsg');
	var stateMsg = $('#stateMsg');
	var mobileMsg = $('#mobileMsg');
	var zipcodeMsg = $('#zipcodeMsg');
	var bcodeMsg = $('#bcodeMsg');

	

	/*Flags to determine if a field is invalid*/
	var branchnameFlag = false;
	var emailFlag = false;
	var addressFlag = false;
	var cityFlag = false;
	var stateFlag = false;
	var mobileFlag = false;
	var zipcodeFlag = false;
	var bcodeFlag = false;
	var available = false;

	
	/*This will run validation when field loses focus*/
	branchname.change(validatebranchname);
	email.change(validateEmail);
	bcode.change(validatebcode);
	address.change(validateAddress);
	city.change(validateCity);
	state.change(validateState);
	mobile.change(validateMobile);
	zipcode.change(validateZipcode);
	
	/*When user submits the form run validation on all fields*/
	form.submit(function(){
		if(validatebranchname() & validateMobile() & validateZipcode() & validateAddress()  & validateCity() & validateState() & validateRePassword() & validateEmail() & validatebcode2())
		{
			return true;
		}
		else
		{
			/*Set focus from lowest to highest input field if flags are true*/
			/*Will also highlight text!*/
			if(emailFlag){email.focus().select();}
			if(bcodeFlag){bcode.focus().select();}
			if(branchnameFlag){branchname.focus().select();}
			if(addressFlag){address.focus().select();}
			if(cityFlag){city.focus().select();}
			if(mobileFlag){mobile.focus().select();}		
			if(stateFlag){state.focus().select();}
			if(zipcodeFlag){zipcode.focus().select();}
			return false;
		}
	});


/*Validation functions for each field*/	
	function validatebranchname(){
		/*Invalid field if name is > 30 characters*/
		if (branchname.val().length > 30)
		{
			branchname.removeClass("valid");
			branchname.addClass("error");
			branchnameMsg.removeClass("valid");
			branchnameMsg.addClass("error");
			branchnameMsg.text("30 characters max!");
			branchnameFlag = true;
			return false;
		}
		/*Invalid field if left blank*/
		else if (branchname.val().length < 1)
		{
			branchname.removeClass("valid");
			branchname.addClass("error");
			branchnameMsg.removeClass("valid");
			branchnameMsg.addClass("error");
			branchnameMsg.text("Branch name is required!");
			branchnameFlag = true;
			return false;
		}
		else
		{
			branchname.removeClass("error");
			branchname.addClass("valid");
			branchnameMsg.removeClass("error");
			branchnameMsg.addClass("valid");
			branchnameMsg.text("Ok !");
			branchnameFlag = false;
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
	
	function validatebcode(){
		/*Invalid field if greater than 15 characters*/
		if (bcode.val().length > 30)
		{
			bcode.removeClass("valid");
			bcode.addClass("error");
			bcodeMsg.removeClass("valid");
			bcodeMsg.addClass("error");
			bcodeMsg.text("30 characters max!");
			bcodeFlag = true;
			return false;
		}
		/*Invalid field if left blank*/
		else if (bcode.val().length < 1)
		{
			bcode.removeClass("valid");
			bcode.addClass("error");
			bcodeMsg.removeClass("valid");
			bcodeMsg.addClass("error");
			bcodeMsg.text("bcode required!");
			bcodeFlag = true;
			return false;
		}
		else
		{
			bcodeMsg.text("Validating...");
		
			$.post('includes/checkbcode.php', {'bcode': bcode.val()},
				function(response) 
				{
					if (response == 0) 
					{
						bcode.removeClass("error");
						bcode.addClass("valid");
						bcodeMsg.removeClass("error");
						bcodeMsg.addClass("valid");
						bcodeMsg.text("Silly bcode... But Okay!");
						bcodeFlag = false;
						available = true;
						return true;
					} 
					else 
					{
						bcode.removeClass("valid");
						bcode.addClass("error");
						bcodeMsg.removeClass("valid");
						bcodeMsg.addClass("error");
						bcodeMsg.text("bcode is taken!");
						bcodeFlag = true;
						available = false;
						return false;
					}
				}
			);

		}
			
	}
	
	function validatebcode2(){
	
		if (available == true)
		{
			/*Invalid field if greater than 15 characters*/
			if (bcode.val().length > 30)
			{
				bcode.removeClass("valid");
				bcode.addClass("error");
				bcodeMsg.removeClass("valid");
				bcodeMsg.addClass("error");
				bcodeMsg.text("30 characters max!");
				bcodeFlag = true;
				return false;
			}
			/*Invalid field if left blank*/
			else if (bcode.val().length < 1)
			{
				bcode.removeClass("valid");
				bcode.addClass("error");
				bcodeMsg.removeClass("valid");
				bcodeMsg.addClass("error");
				bcodeMsg.text("bcode required!");
				bcodeFlag = true;
				return false;
			}
			else
			{
				return true;
			}
		}
		else
		{
			bcodeFlag = true;
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
		else if (branchname.val().length < 1)
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
		else if (branchname.val().length < 1)
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
		else if (branchname.val().length < 1)
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
	

	
	/*Reset the form when user clicks Reset button*/
	$('#reset').click(function(){

		/*Set message text back to defaults*/
		$('#branchnameMsg').text("Enter your first name");
		$('#emailMsg').text("What is your email address?");
		$('#bcodeMsg').text("Pick a bcode");
		$('#addressMsg').text("Enter a address");
		$('#cityMsg').text("Enter a city");
		$('#stateMsg').text("Enter a state");
		$('#zipcodeMsg').text("Enter correct zipcodecode");
		$('#mobileMsg').text("Enter correct mobile  number");
		

		/*Remove class styles to any fields and messages*/
		$('#branchnameMsg').removeClass("valid");
		$('#emailMsg').removeClass("valid");
		$('#bcodeMsg').removeClass("valid");
		$('#addressMsg').removeClass("valid");
		$('#cityMsg').removeClass("valid");
		$('#stateMsg').removeClass("valid");
		$('#zipcodeMsg').removeClass("valid");
		$('#mobileMsg').removeClass("valid");

		$('#branchnameMsg').removeClass("error");
		$('#emailMsg').removeClass("error");
		$('#bcodeMsg').removeClass("error");
		$('#addressMsg').removeClass("error");
		$('#cityMsg').removeClass("error");
		$('#stateMsg').removeClass("error");
		$('#zipcodeMsg').removeClass("error");
		$('#mobileMsg').removeClass("error");
		
		$('#branchname').removeClass("valid");
		$('#email').removeClass("valid");
		$('#bcode').removeClass("valid");
		$('#address').removeClass("valid");
		$('#city').removeClass("valid");
		$('#state').removeClass("valid");
		$('#zipcode').removeClass("valid");
		$('#mobile').removeClass("valid");
		
		$('#branchname').removeClass("error");
		$('#email').removeClass("error");
		$('#bcode').removeClass("error");
		$('#address').removeClass("error");
		$('#city').removeClass("error");
		$('#state').removeClass("error");
		$('#zipcode').removeClass("error");
		$('#mobile').removeClass("error");
		$('#dateofbirth').removeClass("error");
		
		/*Set focus to first field*/
		$('#branchname').focus();

	});
	
});

