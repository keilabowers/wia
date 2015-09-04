window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		//var orgShadowColor = ctx.shadowColor;
		ctx.save();

		//Shadow
		ctx.shadowColor = "#000000";
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 10;

		//Draw a simple rect
		ctx.fillStyle = "blue";
		ctx.fillRect(20,20,200,100);

		ctx.fillStyle = "green";
		ctx.shadowColor = "rgba(0,100,100,.5)";
		ctx.shadowOffsetX = 5;
		ctx.shadowOffsetY = 5;
		ctx.shadowBlur = 5;
		ctx.font = "25pt Georgia";
		ctx.fillText("Drawing Text on a Canvas!", 250, 75);
		
		//draw a red line a purple shadow
		ctx.lineCap = "round";
		ctx.lineWidth = 25;
		ctx.shadowColor = "rgba(150,0,150,.75)";
		ctx.shadowOffsetX = -15;
		ctx.shadowOffsetY = 5;
		ctx.shadowBlur = 15;
		ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.moveTo(50,200);
		ctx.lineTo(450,200);
		ctx.stroke();

		//rect with no shadow
		//ctx.shadowColor = orgShadowColor;
		ctx.restore();
		ctx.fillStyle = "blue";
		ctx.fillRect(20,225,200,50);



						
		}
	}
}