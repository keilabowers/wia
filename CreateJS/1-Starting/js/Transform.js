window.onload = function() {

	var canvas = document.getElementById("canvas1");
	var stage = createjs.Stage(canvas);

	var shape = new createjs.Shape();
	shape.graphics.beginFill("red");
	shape.graphics.rect(50,50,100,100);

	//change registration point origin point of the square + width/2 or height/2
	shape.regX = 100;
	shape.regY = 100;

	//move square back down
	shape.x = 200;
	shape.y = 100;
	//shape.rotation = 30; //degrees, rotates around the registration point

	//scaling .5=half 2=twice as big
	shape.scaleX = 1.5;
	shape.scaleY = .5;

	//Alpha is still clickable
	shape.alpha = .5;

	//visibility boolean 1-shows 0-hides is not clickable
	shape.visible = 1;

	//Skewing 
	shape.skewX = 200;
	shape.skewY = 200;



	stage.addChild(shape);
	stage.update();	
			
	
	
}