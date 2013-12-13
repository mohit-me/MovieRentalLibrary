/*
	jq-video.js
*/

/*This is the validation.js file re-written in jQuery*/

/*When document is ready do this*/
$(document).ready(function(){
	/*Set focus to the name field on page load*/
	$('#videoform').focus();
	/*Define variables and assign IDs to them for easier readability*/
	var form = $('#addvideo');
	
	var title = $('#title');
	var bcode = $('#bcode');
	var cost = $('#cost');
	var rent = $('#rent');
	

	/*More IDs for messages*/
	var titleMsg = $('#titleMsg');
	var bcodeMsg = $('#bcodeMsg');
	var videotypeMsg = $('#videotypeMsg');
	var costMsg = $('#costMsg');
	var rentMsg = $('#rentMsg');
	
	

	/*Flags to determine if a field is invalid*/
	var titleFlag = false;
	var bcodeFlag = false;
	var costFlag = false;
	var rentFlag = false;
	var available = false;

	
	/*This will run validation when field loses focus*/
	title.change(validatetitle);
	bcode.change(validatebcode);
	cost.change(validatecost);
	rent.change(validaterent);
	
	/*When user submits the form run validation on all fields*/
	form.submit(function(){
		if(validatetitle2() & validaterent() & validatecost() &  validatebcode2() )
		{
			return true;
		}
		else
		{
			/*Set focus from lowest to highest input field if flags are true*/
			/*Will also highlight text!*/
			if(bcodeFlag){bcode.focus().select();}
			if(titleFlag){title.focus().select();}
			if(costFlag){cost.focus().select();}
			if(rentFlag){rent.focus().select();}		
			return false;
		}
	});


function validatetitle(){
		/*Invalid field if greater than 15 characters*/
		if (title.val().length > 30)
		{
			title.removeClass("valid");
			title.addClass("error");
			titleMsg.removeClass("valid");
			titleMsg.addClass("error");
			titleMsg.text("30 characters max!");
			titleFlag = true;
			return false;
		}
		/*Invalid field if left blank*/
		else if (title.val().length < 1)
		{
			title.removeClass("valid");
			title.addClass("error");
			titleMsg.removeClass("valid");
			titleMsg.addClass("error");
			titleMsg.text("title required!");
			titleFlag = true;
			return false;
		}
		else
		{
			titleMsg.text("Validating...");
		
			$.post('includes/checkTitle.php', {'title': title.val()},
				function(response) 
				{
					if (response == 0) 
					{
						title.removeClass("valid");
						title.addClass("error");
						titleMsg.removeClass("valid");
						titleMsg.addClass("error");
						titleMsg.text("title is not yet added.!");
						titleFlag = true;
						available = false;
						return false;
					} 
					else 
					{
						title.removeClass("error");
						title.addClass("valid");
						titleMsg.removeClass("error");
						titleMsg.addClass("valid");
						titleMsg.text("title found... But Okay!");
						titleFlag = false;
						available = true;
						return true;
						
					}
				}
			);

		}
			
	}
	
	function validatetitle2(){
	
		if (available == true)
		{
			/*Invalid field if greater than 15 characters*/
			if (title.val().length > 30)
			{
				title.removeClass("valid");
				title.addClass("error");
				titleMsg.removeClass("valid");
				titleMsg.addClass("error");
				titleMsg.text("30 characters max!");
				titleFlag = true;
				return false;
			}
			/*Invalid field if left blank*/
			else if (title.val().length < 1)
			{
				title.removeClass("valid");
				title.addClass("error");
				titleMsg.removeClass("valid");
				titleMsg.addClass("error");
				titleMsg.text("title required!");
				titleFlag = true;
				return false;
			}
			else
			{
				return true;
			}
		}
		else
		{
			titleFlag = true;
			return false;
		}
			
	}
	
	
	
	
	function validaterent(){
		/*Invalid field if name is > 30 characters*/
		if (rent.val().length > 5)
		{
			rent.removeClass("valid");
			rent.addClass("error");
			rentMsg.removeClass("valid");
			rentMsg.addClass("error");
			rentMsg.text("9999 at max!");
			rentFlag = true;
			return false;
		}
		/*Invalid field if left blank*/
		else if (rent.val().length < 1 )
		{
			rent.removeClass("valid");
			rent.addClass("error");
			rentMsg.removeClass("valid");
			rentMsg.addClass("error");
			rentMsg.text("rent  is required!");
			rentFlag = true;
			return false;
		}
		else 
		{
			rent.removeClass("error");
			rent.addClass("valid");
			rentMsg.removeClass("error");
			rentMsg.addClass("valid");
			rentMsg.text("Valid Rent!");
			rentFlag = false;
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
						bcode.removeClass("valid");
						bcode.addClass("error");
						bcodeMsg.removeClass("valid");
						bcodeMsg.addClass("error");
						bcodeMsg.text("no such branch!");
						bcodeFlag = true;
						available = false;
						return false;
				
					} 
					else 
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
	function validatecost(){
		/*Invalid field if name is > 50 characters*/
		if (cost.val().length > 4)
		{
			cost.removeClass("valid");
			cost.addClass("error");
			costMsg.removeClass("valid");
			costMsg.addClass("error");
			costMsg.text("9999 max!");
			costFlag = true;
			return false;
		}
		/*Invalid field if left blank*/
		else if (title.val().length < 1)
		{
			cost.removeClass("valid");
			cost.addClass("error");
			costMsg.removeClass("valid");
			costMsg.addClass("error");
			costMsg.text("cost is required!");
			costFlag = true;
			return false;
		}
		else
		{
			cost.removeClass("error");
			cost.addClass("valid");
			costMsg.removeClass("error");
			costMsg.addClass("valid");
			costMsg.text("cost Validated!");
			costFlag = false;
			return true;
		}
	}

	
	
	
	/*Reset the form when user clicks Reset button*/
	$('#reset').click(function(){

		/*Set message text back to defaults*/
		$('#titleMsg').text("Enter your first name");
		$('#bcodeMsg').text("Pick a bcode");
		$('#costMsg').text("Enter a cost");
		$('#rentMsg').text("Enter correct rent  number");
		

		/*Remove class styles to any fields and messages*/
		$('#titleMsg').removeClass("valid");
		$('#bcodeMsg').removeClass("valid");
		$('#costMsg').removeClass("valid");
		$('#rentMsg').removeClass("valid");
		
		$('#titleMsg').removeClass("error");
		$('#bcodeMsg').removeClass("error");
		$('#costMsg').removeClass("error");
		$('#rentMsg').removeClass("error");
		
		$('#title').removeClass("valid");
		$('#bcode').removeClass("valid");
		$('#cost').removeClass("valid");
		$('#rent').removeClass("valid");
		
		$('#title').removeClass("error");
		$('#bcode').removeClass("error");
		$('#cost').removeClass("error");
		$('#rent').removeClass("error");
		
		/*Set focus to first field*/
		$('#title').focus();

	});
	
});

