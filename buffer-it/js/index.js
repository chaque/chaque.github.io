

//https://buffer.com/add?url= &text= 
function deets() {
	document.getElementById("status").innerHTML = "Use this format if you want to insert pic.twitter in your post --> pic.twitter.com/Yl89HMaTCP<br>or this format if you want to insert a Youtube video --> https://youtu.be/ZAqj3JWSN8M";
}

function generateLink() {
	var whites = new RegExp(" ");
	var fo = "https://buffer.com/add?";
	var msg = document.getElementById("message").value;
	var mediaL = document.getElementById("media").value;
	var bitly = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/;
	var result = bitly.exec(msg);
	var testL = bitly.test(msg);
	var hasws = whites.test(result);
	var msgURI = encodeURIComponent(msg);

	if(testL == false) {
		
		if (mediaL.length > 1) {
			if (mediaL.substring(0,15) == "pic.twitter.com" || mediaL.substring(0,16) == "https://youtu.be") {
				document.getElementById("finalLink").value = fo + "text=" + msgURI + "%20" + mediaL;
				document.getElementById("finalLink").select();
			} else {
				document.getElementById("status").innerHTML = "Please enter a valid URL. Click on the question mark above for more details.";
				document.getElementById("finalLink").value = fo + "text=" + msgURI;
				document.getElementById("finalLink").select();
			}
		} else {
			document.getElementById("finalLink").value = fo + "text=" + msgURI;
			document.getElementById("finalLink").select();
		}
	} else if(hasws == true) {
			document.getElementById("finalLink").value = fo + "text=" + msgURI;
	} else {
		var resultle = msg.indexOf(result[0]);
		var cutL = msg.substring(0,resultle-1);
		msgURI = encodeURIComponent(cutL);
		document.getElementById("finalLink").value = fo + "url=" + result[0] + "&text=" + msgURI;
		document.getElementById("finalLink").select();
	}







/**var hasWhiteSpace = result[0].indexOf(" ");
	
if (hasWhiteSpace === -1) {
	document.getElementById("resultLink").innerHTML = result[0];
} else {
	document.getElementById("resultLink").innerHTML = "lol";
}


document.getElementById("message").value = array[0];
document.getElementById("message").select();**/
	
	
}



function reset() {
	document.getElementById("status").innerHTML = " ";
}