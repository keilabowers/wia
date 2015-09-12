window.onload = function() {
 	
	//create stage
	var canvas = document.getElementById("canvas1");

	var stage = new createjs.Stage(canvas);	

	//create blue circle
	var circleGraphic = new createjs.Graphics();
	circleGraphic.beginFill("blue");
	circleGraphic.drawCircle(0,0,50);

	//create the shape - display object that handles vector graphics
	var circleShape = new createjs.Shape(circleGraphic);

	//Access the shapes properties
	circleShape.x = 50;
	circleShape.y = 50;

	//Add shape to the stage display list

	stage.addChild(circleShape);

	//so it can show must update the stage
	stage.update();
	
	
			
}