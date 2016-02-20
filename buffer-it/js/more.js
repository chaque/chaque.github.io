var hasPrev;

function preV() {
	prevwindow = window.open(document.getElementById("finalLink").value, "_blank", "toolbar=no, scrollbars=no, resizable=no, top=100, left=600%, width=700, height=500");

	if (window.focus) {
		prevwindow.focus();
	}

	hasPrev = true;
	
}


function resetAll() {

	if(hasPrev) {
		if (false == prevwindow.closed) {
			prevwindow.close();
		}
	}
		
	document.getElementById("hihi").style.visibility="hidden";
}