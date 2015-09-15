window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);

	var shape = new createjs.Shape();

	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(5, "round", "round");

	//draw polystar - point size 0polygon 1spikes
	shape.graphics.drawPolyStar(75,75,50,5,.5,-90);

	//triangle 
	shape.graphics.drawPolyStar(550,75,50,3,0,-90);

	//
	var shape2 = new createjs.Shape();
	shape.graphics.beginFill("red");
	shape2.graphics.drawPolyStar(250,250,50,3,0,-90);

	stage.addChild(shape);
	stage.addChild(shape2);
	//add event listener to make it clickable
	shape2.addEventListener("click", function(event){
		console.log("Red triangle has been clicked");
	});

	stage.update();	
	
}