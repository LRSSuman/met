let navLinks = document.querySelector('#navLinks');

function showMenu(){
	navLinks.style.right = '0';
}

function hideMenu(){
	navLinks.style.right = '-200px';
}

let contents = ['eventContent','registerContent','commiteeContent'];
let visibleContentId = null;

function toggleVisibility(contentId){
	console.log(contentId);
	if(visibleContentId === contentId){
		// visibleDivId = null;
	} else {
		visibleContentId = contentId
	}
	hideNonVisibleContent();
}

function hideNonVisibleContent(){
	console.log('hi')
	let i,cId,content;
	for(i=0;i<contents.length;i++){
		cId = contents[i];
		content = document.getElementById(cId);
		if(visibleContentId === cId){
			content.classList.remove('check');
			console.log('hihi')
		} else {
			content.classList.add('check');		}
	}
}