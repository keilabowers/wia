window.onload = function() {
	
	var canvas = document.getElementsById("canvas1");
	var stage = new createjs.Stage(canvas);

	var shape = new createjs.Shape();
	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(10, "butt", "round");

	//draw a circle drawCircle(x,y,radius)
	shape.graphics.drawCircle(100,100,50);

	//draw and ellipse drawEllipse(x,y,w,h)
	shape.graphics.drawEllipse(75,200,150,50);

	//arcs arc(x,y,radius,startangle,endangle, anticlock 1 or clock 0)
	shape.graphics.beginStroke("red");
	shape.graphics.arc(100,100,75,0, -90*(math.PI/180), 1);

	stage.addChild(shape);
	stage.update();

}