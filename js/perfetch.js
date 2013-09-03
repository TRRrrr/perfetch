//an archor loads a page to the result area.
function pageIni(){
	window.onload = function(){
		navIni();
		homepage();
	}

}


function loadPage(page_value, resultTag){
    var page = page_value + ".html";
	var result = '#' + resultTag;
    $(result).load('ajax/'+page);
}

function navSelector(page_value,resultTag){
	loadPage(page_value,resultTag);
	var nav = document.getElementsByTagName("nav");
	var navs = nav[0].getElementsByTagName("a");
	for(var i=0; i<navs.length;i++){
		if(navs[i].getAttribute('value') !== page_value){
			navs[i].className='';
		}else{
			navs[i].className='current';
		}
	}
}

function navIni(){
	var nav = document.getElementsByTagName("nav");
	for(var i=0; i < nav.length; i++){
		var navs = nav[i].getElementsByTagName("a");
		for(var j=0;j < navs.length; j++){
			navs[j].onclick = function() {navSelector(this.getAttribute('value'),this.getAttribute('resultTag'));};
			navs[j].setAttribute("resultTag","content");
		}
	}
}
/////////////////////

function readMoreIni(){
	var readMore = document.getElementsByClassName("read_more");
	for(var i=0; i < readMore.length; i++){
		//var page = readMore[i].getAttribute('value');
		readMore[i].onclick = function(){navSelector(this.getAttribute('value'),this.getAttribute('resultTag'));};
		readMore[i].setAttribute("resultTag","content");
		//readMore[i].setAttribute("value",readMore[i].getAttribute("value"));
	}
}
///////////////////////

function homepage(){
	$("#content").load("ajax/home.html");
	$("#footer").load("ajax/footer.html");
}

function goToHomePage(){
	if(this.value == "home"){return true}
	return false
}
