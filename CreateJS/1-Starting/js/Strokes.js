window.onload = function() {
	
 	var canvas = document.getElementById("canvas1");
 	var stage = new createjs.Stage(canvas);

 	var shape = new createjs.Shape();
 	shape.graphics.beginStroke("purple");
 	shape.graphics.moveTo(25,25);
 	shape.graphics.lineTo(250,25);
 	shape.graphics.setStrokeStyle(10, "round", "miter", 5); //width,caps,joints,miderLimit

 	shape.graphics.movetTo(50,50);
 	//shape.graphics.quadraticCurveTo(50,175,250,250);
 	//shape.graphics.arcTo(100,50,100,500,60);
 	shape.graphics.bezierCurvesTo(100,50,250,50,250,250);

 	shape.graphics.lineTo(50,250);
 	
 	stage.addChild(shape);
 	stage.update();

	
	
}