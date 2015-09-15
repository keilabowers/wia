window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);

	var shape = new createjs.Shape();

	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(10, "butt", "round");
	shape.graphics.rect(50,50,300,300);

	//Rounded Rect
	shape.graphics.beginStroke("blue");
	shape.graphics.drawRoundRect(75,75,250,250,50); // x,y,w,h,radius

	//Complex Rounded Rect
	shape.graphics.beginStroke("red");
	shape.graphics.drawRoundRectComplex(100,100,200,200,50,0,50,0); // x,y,w,h,tl,tr,br,bl

	stage.addChild(shape);
	stage.update();
	
	
}