		var link = document.querySelector(".button-write-us");
		var popup = document.querySelector(".modal");
		var close = popup.querySelector(".modal-close");

		var form = popup.querySelector("form");
		var email = popup.querySelector("[name=email]");

		 var isStorageSupport = true;
		 var storage = "";
		  
		 try {
		    storage = localStorage.getItem("email");
		 } catch (err) {
		    isStorageSupport = false;
		 }

		link.addEventListener("click",function(evt) {
			evt.preventDefault();
			popup.classList.add("modal-show");
		});

		close.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
		});

		form.addEventListener("submit", function (evt) {
    		if (!email.value) {
    			evt.preventDefault();
    			popup.classList.add("modal-error");	
    		} else {
    			if (isStorageSupport) {
    				localStorage.setItem("email", email.value);
    			}
    		}
    	});

		window.addEventListener("keydown", function(evt){
			if (evt.keyCode === 27) {
      			evt.preventDefault();
      			if (popup.classList.contains("modal-show")) {
        			popup.classList.remove("modal-show");
      			}
   			 }
		});