$(document).ready(function() {

	$(".gallery_thumbnails a").click(function(e){
		e.preventDefault(); //disables the links (or normal action)

		//create var to hold the links from the thumbnail
		var photo_fullsize = $(this).attr("href");
		var photo_caption = $(this).attr("title");

		//create our preview link
		var photo_preview = photo_fullsize.replace("_fullsize", "_preview");

		//slideup our caption
		$(".gallery_caption").slideUp(500);

		//fadeOut the preview area
		$(".gallery_preview").fadeOut(500, function(){
			//Preload our clicked img
			$(".gallery_preload_area").html('<img src="'+photo_preview+'" />');

			//once img is preload then use
			$(".gallery_preload_area img").imgpreload(function(){
				console.log("test2");

				//Change the picture and link for the preview area
				$(".gallery_preview").html('<a class="overlayLink" title="'+photo_caption+'" href="'+photo_fullsize+'" style="background-image:url('+photo_preview+');"></a>');
				
				//Fade Back in the preview window
				$(".gallery_preview").fadeIn(500);

				$(".gallery_caption").html('<p><a class="overlayLink zoom" title="' + photo_caption + '" href="' + photo_fullsize + '">View Larger</a></p><p>' + photo_caption + '</p>');
				$(".gallery_caption").slideDown(500);
				setFancyBoxLink();
	updateThumbnails();

			});

		});

	}); //end of click

	//create first var
	var first_photo_caption = $(".gallery_thumbnails a").first().attr("title");
	var first_photo_fullsize = $(".gallery_thumbnails a").first().attr("href");
	var first_photo_preview = first_photo_fullsize.replace("_fullsize", "_preview");

	//Set the caption and the photo 
	$(".gallery_preview").html('<a class="overlayLink" title="'+ first_photo_caption+'" href="'+ first_photo_fullsize+'" style="background-image:url('+ first_photo_preview+');"></a>');
	$(".gallery_caption").html('<p><a class="overlayLink zoom" title="' + first_photo_caption + '" href="' + first_photo_fullsize + '">View Larger</a></p><p>' + first_photo_caption + '</p>');
	setFancyBoxLink();
	updateThumbnails();

});  //end of ready

function setFancyBoxLink(){
	$("a.overlayLink").fancybox({

		"titlePosition" : "over" ,
		"overlayColor" : "#000" ,
		"overlayOpacity" : .8 ,
		"transitionIn" : "elastic",
		"transitionOut" : "elastic",
		"autoScale" : true

	});
}

function updateThumbnails(){
	$(".gallery_thumbnails a").each(function(index){
		if($(".gallery_preview a").attr("href") === $(this).attr("href")){
			//if the anchor tag is the same as the preview a then shade thumbnail + give class of selected
			$(this).addClass("selected");
			$(this).children().fadeTo(250, .4);
		}else{
			//remove the selected class and fade up to 100%
			$(this).removeClass("selected");
			$(this).children().css("opacity", "1");

		}
	});
}
