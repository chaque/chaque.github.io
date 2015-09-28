//placeholders
switch (new Date().getDay()) {
	case 0:
		placeholder = "Happy Sunday! Go get more sleep :)";
		break;
	case 1:
		placeholder = "OK, Monday, let's do this!";
		break;
	case 2:
		placeholder = "It's CHOOSEday: to pizza or not to pizza?!";
		break;
	case 3:
		placeholder = "Keep calm, you're halfway through. #Wednesday";
		break;
	case 4:
		placeholder = "It's Thursday and ah, the things you GET to do!";
		break;
	case 5:
		placeholder = "Is it just me, or does coffee taste better on Friday mornings?";
		break;
	case 6:
		placeholder = "How are your Saturday workouts going?";
}
document.getElementById("message").placeholder=placeholder;

//variables
var linkToImg = "pic.twitter.com/caLkjFM02q";
var reset = "";
var text = document.getElementById("message");
var intent = "https://twitter.com/intent/tweet?text=";
var generatedLink = link.value;

//main fx
function addImg() {
	linkToImg = prompt("Paste Twitter image URL", "pic.twitter.com/caLkjFM02q");
	if(linkToImg != "pic.twitter.com/caLkjFM02q") {
		if(linkToImg.length == 26 && linkToImg.substring(0,15) == 'pic.twitter.com') {
			document.getElementById("status").innerHTML = "&#10003; Link looks good!";
		} else {
			document.getElementById("status").innerHTML = "&#10060; Sorry, link not supported :(";
		}
	} else {
		document.getElementById("status").innerHTML = "...";
	}
}

function generateLink() {
	text = message.value;
	var textURI = encodeURIComponent(text);
	
	if (text.length != 0) {
		if(text != 'Feed me some words') {
			if(linkToImg != "pic.twitter.com/caLkjFM02q") {
				if(linkToImg.length == 26 && linkToImg.substring(0,15) == 'pic.twitter.com') {
					document.getElementById("link").innerHTML = intent + textURI + " " + linkToImg;
					document.getElementById("preview").innerHTML = '<button type="button"><a href="' + link.value + '">Preview</a></button>';
					document.getElementById("preview").style.display = "inline-block";
					document.getElementById("status").innerHTML = "&#10003; Done";
				} else {
					alert("Sorry, unable to attach photo - the link you've entered is not valid.");
					document.getElementById("link").innerHTML = intent + textURI;
					document.getElementById("preview").innerHTML = '<button type="button"><a href="' + link.value + '">Preview</a></button>';
					document.getElementById("preview").style.display = "inline-block";
					document.getElementById("status").innerHTML = "&#10003; Done";
				}
			} else{
				document.getElementById("link").innerHTML = intent + textURI;
				document.getElementById("preview").innerHTML = '<button type="button"><a href="' + link.value + '">Preview</a></button>';
				document.getElementById("preview").style.display = "inline-block";
				document.getElementById("status").innerHTML = "&#10003; Done";
			}
		} else {
			document.getElementById("link").innerHTML = reset;
		}
	} else {
		document.getElementById("message").innerHTML = 'Feed me some words';
		document.getElementById("preview").style.display = "none";
	}

}

function selectAll() {
	document.getElementById("link").select();
}

function clearAll() {
	document.getElementById("clickToTweet").reset();
	document.getElementById("message").innerHTML = reset;
	document.getElementById("link").innerHTML = reset;
	document.getElementById("preview").style.display = "none";
	document.getElementById("status").innerHTML = "&#10003; Reset";
	linkToImg = "pic.twitter.com/caLkjFM02q";
}

function showInfo() {
	window.open("https://christinevalena.com/clicktotweet/attachphoto", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=100%, left=350%, width=650, height=500");

	if (window.focus) {
		newWindow.focus();
	}
}