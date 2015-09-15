window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);

	//text class
	var sentence = new createjs.Text();
	sentence.text = "This is a sentence about nothing";
	sentence.font = "bold 30px Times";
	sentence.color = "blue";

	//text is a display object - inherits all of the normal properties
	sentence.X = 150;
	sentence.Y = 50;
	//sentence.rotation = 45;

	//Text has more properties ie textAlign - left, right, center
	sentence.textAlign = "center";
	sentence.lineWidth = 200; //wraps the text
	sentence.lineHeight = 40; //space between the leters
	sentence.outline = false; //boolean

	//can combine them all into one line
	var sentence2 = new createjs.Text("This is our 2nd text", "bold 30 Times", "blue");
 
	stage.addChild(sentence2);
	stage.addChild(sentence);
	stage.update();	
	
}