window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	//Create a red rectangle
	var shape = new createjs.Shape();
	
	//Fill 
	shape.graphics.beginFill("red");
	
	//Draw out the rectanlge
	shape.graphics.rect(0,0, 100, 100);
	
	//Change its registeration point
	shape.regX = 50;
	shape.regY= 50;
	
	//Move the rect to (100,100)
	shape.x = 100;
	shape.y = 100;
	
	stage.addChild(shape);
	
	//stage.update(); 

	//Ticker class controls time
	// a centerallized heart beat that make "tick"
	//Create a listener for that tick

	//Set the Framerate fps default is 20fps
	createjs.Ticker.setFPS(30);

	//create a listener
	createjs.Ticker.addEventListener("tick", ticks);

	//function
	function ticks(e){
		//console.log("Tick");
		shape.rotation += 8;
		//shape.alpha -= .05;
		//shape.X += 5;
		//shape.Y += 5;
		//shape.skewX += 20;
		//shape.skewY += 20;
		shape.scaleX += .2;
		shape.scaleY += .2;

		stage.update();

	}

	
	
			
}