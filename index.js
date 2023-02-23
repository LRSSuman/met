let navLinks = document.querySelector("#navLinks");

function showMenu() {
	navLinks.style.right = "0";
}

function hideMenu() {
	navLinks.style.right = "-200px";
}

let contents = ["eventContent", "registerContent", "commiteeContent"];
let contentHeadings = ["eh", "rh", "ch"];
let contentLabels = ["el", "rl", "cl"];
let visibleContentId = null;

function toggleVisibility(contentId) {
	if (visibleContentId === contentId) {
		visibleDivId = null;
	} else {
		visibleContentId = contentId;
	}
	hideNonVisibleContent();
}

function hideNonVisibleContent() {
	let i, cId, content, cHeading, cLabel;
	for (i = 0; i < contents.length; i++) {
		cId = contents[i];
		cHeading = contentHeadings[i];
		cLabel = contentLabels[i];
		ch = document.getElementById(cHeading);
		cl = document.getElementById(cLabel);
		content = document.getElementById(cId);
		if (visibleContentId === cId) {
			ch.style.color = "#f5a425";
			cl.style.border = "2px solid #f5a425";
			content.classList.remove("check");
		} else {
			cl.style.border = "none";
			content.classList.add("check");
			ch.style.color = "#fff";
		}
	}
}