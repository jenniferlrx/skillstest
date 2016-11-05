//===================================
// set up events for sending requests
//===================================
//initialize ajax url link
var urlAddress="/megaHelloWorld";
// button events to trigger requsts
$("#get-btn").on("click", function(){
	//modify url if queries are added
	if($("#queryText").val()){
		urlAddress +="?"+$("#queryText").val();
		$("#queryText").val("");
	}
	getResponse("GET");
	$(".response").css("background-color","rgb(66, 139, 202)");
});

$("#post-btn").on("click",function(){
	getResponse("POST");
	$(".response").css("background-color","rgb(92, 184, 92)");
});

$("#put-btn").on("click", function(){
	getResponse("PUT");
	$(".response").css("background-color","rgb(91, 192, 222)");
});

$("#delete-btn").on("click", function(){
	getResponse("DELETE");
	$(".response").css("background-color","rgb(217, 83, 79)");
});
//define a funciton to call Ajax with settings
function getResponse(requestType){
		$.ajax({
		url:urlAddress,
		type:requestType,
		success: function(data){
			$(".requestReply").html(data);
		}
	});
	urlAddress="/megaHelloWorld";
	$(".response").addClass("showResponse");
	
}
