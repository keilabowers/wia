window.onload = function() {
	
	var canvas = document.getElementById("canvas1");

	var stage = new createjs.Stage(canvas);

	var rect1 = new createjs.Shape();
	//rect1.graphics.beginFill(createjs.graphics.getRGB(162,216,255,.5));
	//rect1.graphics.beginLinearGradientFill(["yellow","purple","red"],[0,.5,1],50,50,150,50);
	rect1.graphics.beginRadialGradientFill(["yellow","red"],[0,1], 100,100,0,100,100,100);
	rect1.graphics.rect(50,50,100,100);
	stage.addChild(rect1);
	stage.update();
	
			
}