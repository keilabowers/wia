window.onload = function() {
			
			//Canvas & Stage
			var canvas=document.getElementById("canvas");	
			var stage= new createjs.Stage(canvas); 

			var bmp = new createjs.Bitmap();

			//load img and wait until it is fully loaded before doing anything with it...
			var img = new Image();
			img.src = "../images/ship.svg";
			img.onload = updateStage;

			//function
			function updateStage(e){
				bmp = new createjs.Bitmap(e.target);
				//find center of canvas
				var centerX = canvas.width/2;
				var centerY = canvas.height/2;

				//move img to center of stage
				bmp.X = centerX;
				bmp.Y = centerY;

				//change registration point
				bmp.regX = 50;
				bmp.regY = 50; //could you do bmp.width/2?

				//scale 
				bmp.scaleX = 4;
				bmp.scaleY = 4;

				stage.addChild(bmp);
				//stage.update();
			}

			//Ticker 
			createjs.Ticker.addEventListener("tick", tick);
			function tick (e){
				bmp.rotation += 2;
				bmp.X += 2;
				stage.update();
			}
			
	
		
}