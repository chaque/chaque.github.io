function deets() {
	document.getElementById("status").innerHTML = "Use the following format if you want to insert media from Twitter or Youtube:<br>pic.twitter.com/Yl89HMaTCP<br>https://youtu.be/ZAqj3JWSN8M";
	document.getElementById("hide").style.display = "inline";
	document.getElementById("status").style.padding = "1rem";
	document.getElementById("status").style.background = "#eee";
	document.getElementById("status").style.margin = "0 0 .4rem 0";
	document.getElementById("status").style.display = "block";
}

function hideMe() {
	document.getElementById("status").style.display = "none";
	document.getElementById("hide").style.display = "none";
}