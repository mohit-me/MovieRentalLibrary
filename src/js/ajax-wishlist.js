
<script type="text/javascript">
 
function addWatchList()
{
var title = $('#title').val();
var mid =  $('#mid').val();
var uid =  $('#username').val();
$('#propspectDiv').html('Submitting your Request.<img src="ajax.png" />');//Prints the progress text into our Progress DIV 
$.ajax({
url : '../addToWatchList.php', //Declaration of file, in which we will send the data
data:{
"mid" : mid                //we are passing the name value in URL
},
success : function(data){
window.setTimeout(function(){
$('#propspectDiv').html('Added to WishList'); //Prints the progress text into our Progress DIV
}, 2000);
}
});
}
 
</script>