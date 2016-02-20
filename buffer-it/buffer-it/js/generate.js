function generateLink() {
	var buffer = "https://buffer.com/add?";
	var mediaURL = document.getElementById("media").value;
	var message = document.getElementById("message").value;
	var identifyURL = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/;
	var hasURL = identifyURL.test(message);
	var messageURI = encodeURIComponent(message);
	var url = identifyURL.exec(message);
	var space = new RegExp(" ");
	var hasSpace = space.test(url);

	if(mediaURL.length > 0) {
		if(mediaURL.substring(0,15) == "pic.twitter.com" || mediaURL.substring(0,16) == "https://youtu.be" || mediaURL.substring(0,15) == "http://youtu.be") {
			if(hasURL == true) {
				if(hasSpace == true) {
					document.getElementById("finalLink").value = buffer + "text=" + messageURI + "%20" + mediaURL;
					document.getElementById("finalLink").select();
				} else {
					var result = message.indexOf(url[0]);
					var deleteUrl = message.substring(0,result-1);
					messageURI = encodeURIComponent(deleteUrl);
					document.getElementById("finalLink").value = buffer + "url=" + url[0] + "&text=" + messageURI + "%20" + mediaURL;
					document.getElementById("finalLink").select();
				}
			} else {
				document.getElementById("finalLink").value = buffer + "&text=" + messageURI + "%20" + mediaURL;
				document.getElementById("finalLink").select();
			}
		} else {
			alert("Invalid media URL. Please try again.")
		}
	} else if(hasURL == true) {
		if(hasSpace == true) {
					document.getElementById("finalLink").value = buffer + "text=" + messageURI;
					document.getElementById("finalLink").select();
				} else {
					var result = message.indexOf(url[0]);
					var deleteUrl = message.substring(0,result-1);
					messageURI = encodeURIComponent(deleteUrl);
					document.getElementById("finalLink").value = buffer + "url=" + url[0] + "&text=" + messageURI;
					document.getElementById("finalLink").select();
				}
	} else {
		document.getElementById("finalLink").value = buffer + "&text=" + messageURI;
		document.getElementById("finalLink").select();
	}

}