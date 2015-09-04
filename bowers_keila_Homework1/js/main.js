/*
     Name: Keila Bowers
     Date: September 3, 2015
     Class & Section:  WIA-1508 Section 01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************


PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

window.onload = function() { //When the windows is loaded it starts the function 
if(Modernizr.canvas){ //uses modernizr to see if canvas is supported

//Draw Rectangle here
	//create var to link to html canvas item 
	var canvas1 = document.getElementById("rectCanvas");
	var ctx1 = canvas1.getContext("2d");
		//gives the stroke and fill its styling
		ctx1.strokeStyle = "black";
		ctx1.lineWidth = 1;
		ctx1.fillStyle = "#3232ff";

		//creates 2 rectangles the same dimensions; one to color fill and the other to create stroke
		ctx1.fillRect(0, 0, 50, 100);	
		ctx1.strokeRect(0, 0, 50, 100);


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

	var canvas2 = document.getElementById('circleCanvas');
	var ctx2 = canvas2.getContext("2d");
			//gives the stroke and fill its styling	
			ctx2.strokeStyle = "black";
			ctx2.fillStyle = "rgba(255,25,25,.5)";
			ctx2.lineWidth = 1;

			//starts path for full circle with a radius of 20px 
			ctx2.beginPath();
			ctx2.arc(50, 50, 20, 0, 2*Math.PI ) //2radians is a complete circle
			ctx2.fill();
			ctx2.stroke();							




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

	var canvas3 = document.getElementById("starCanvas");
	var ctx3 = canvas3.getContext("2d");
		ctx3.strokeStyle = "blue";
		ctx3.fillStyle = "red";
		ctx3.lineWidth = 5;

		ctx3.beginPath();
		ctx3.moveTo(100, 100); //starts star
		ctx3.lineTo(120, 120); //each line in star
		ctx3.lineTo(140, 120);
		ctx3.lineTo(120, 140);
		ctx3.lineTo(140, 180);
		ctx3.lineTo(100, 160);	
		ctx3.lineTo(60, 180);
		ctx3.lineTo(80, 140);	
		ctx3.lineTo(60, 120);
		ctx3.lineTo(80, 120);
		ctx3.closePath();	//connects last line with first to complete the shape	
		ctx3.fill();
		ctx3.stroke();



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

	var canvas4 = document.getElementById('umbrellaCanvas');
	var ctx4 = canvas4.getContext("2d");
			ctx4.strokeStyle = "black";
			ctx4.fillStyle = "red";

			//for loop that repeats the bezier curve and moves it over 100px
			for(var i=0; i<3; i++){
			ctx4.beginPath();
			ctx4.moveTo(100+i*100, 100);
			ctx4.bezierCurveTo(145+i*100, 75, 175+i*100, 125, 200+i*100, 100 );
			ctx4.stroke();
			};			



/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
	var canvas5 = document.getElementById('textCanvas');
	var ctx5 = canvas5.getContext("2d");
		 var textString = "On Thursdays, we're teddy bear doctors";
		 ctx5.font = "22pt Ariel";
		 ctx5.fillStyle = "green";	
		 ctx5.fillText(textString, 20, 40);						


/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

	var canvas6 = document.getElementById('imageCanvas');
	var ctx6 = canvas6.getContext("2d");
			var testImg = document.getElementById("logoImg");

			ctx6.drawImage(testImg, 0, 0);
			ctx6.drawImage(testImg, 0, 1000, testImg.width / 2, testImg.height / 2);
			ctx6.drawImage(testImg, 20, 40, 50, 50, 40, 40, 50, 50);						




/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

//Draw scene here

	var canvas7 = document.getElementById('sceneCanvas');
	var ctx7 = canvas7.getContext("2d");


}else{ //if canvas is not supported then it will alert the user with text below
	alert("Your Browser Does not Support Canvas");
}
}

