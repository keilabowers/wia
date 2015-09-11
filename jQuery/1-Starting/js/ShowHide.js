$(function() { 
	//Add a click function to button
	$("#hide").click(function(){
		$("#theDiv").hide(2000);
	});

	$("#show").click(function(){
		$("#theDiv").show(2000, function(){
			$("#theDiv").css("background", "red");

		});
	});

	$("#toggle").click(function(){
		$("#theDiv").toggle("slow");
	});

});


