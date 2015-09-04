window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
 		//create a var to hold the image
 		var srcImg = document.getElementById("img1");

 		//draw the image onto the canvas
 		//ctx.drawImage(srcImg,0,0);

 		//draw a scaled image
 		//ctx.drawImage(srcImg,50,50,240,300);

 		//draw a slice of image
 		//ctx.drawImage(srcImg, 285, 40, 95, 140, 50, 50, 190, 280);

 		var srcVid = document.getElementById("vid1");
 		srcVid.play();
 		//setinterval(function, ms);
 		setinterval(function(){
 			ctx.drawImage(srcVid, 0, 0, 480, 270);
 		}, 50);
 		

				
     						
		}
	}
}