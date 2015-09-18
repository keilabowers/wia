/* DropzoneJS demo by Keila Bowers */

//Dropzone.option. Then select the html element by ID to configur options

 Dropzone.options.myDropzone = {
        addRemoveLinks: true,
        acceptedFiles: "image/*",
        //acceptedFiles: "application/pdf",
        //acceptedFiles: ".gif",
        autoProcessQueue: false,

	init: function() {
	    var submit = document.getElementById("submit");
	    myDropzone = this;

	    submit.addEventListener("click", function() {
	      myDropzone.processQueue(); 
	    });

		myDropzone.on("complete", function(){ //do not use 'processing' with hang-up first item
			myDropzone.options.autoProcessQueue = true;
			myDropzone.processQueue();

		});

	}

};  


