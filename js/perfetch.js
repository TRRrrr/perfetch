//an archor loads a page to the result area.

function loadPage(a){
    var archor = a;
    var page = archor.getAttribute('value')+".html";
	var result = '#'+archor.getAttribute('result');
    $(result).load('ajax/'+page);
}

function navSelector(a){
    var archor = a;
	loadPage(archor);
	var nav = document.getElementsByTagName("nav");
	var navs = nav[0].getElementsByTagName("a");
	for(var i=0; i<navs.length;i++){
		navs[i].className='';
	}
	archor.className='current';	
}

function navIni(){
	var nav = document.getElementsByTagName("nav");
	for(var i=0; i < nav.length; i++){
		var navs = nav[i].getElementsByTagName("a");
		for(var j=0;j < navs.length; j++){
			navs[j].onclick = function() {navSelector(this);};
			navs[j].setAttribute("result","content");
		}
	}
}
/////////////////////
/*
function readMoreIni(){
	var readMore = document.getElementsByClassName("read_more");
	for(var i=0; i < readMore.length; i++){
		var page = readMore[i].getAttribute('value');
		readMore[i].parentNode.onclick = function(){readMoreSelector(page);};
		readMore[i].setAttribute("result","content");
	}
}*/
///////////////////////
function readMoreSelector(a){alert(a.getAttribute('value'));
	var link = document.getElementById(a.getAttribute('value'));
	navSelector(link);
}

function homepage(){
	$("#content").load("ajax/home.html");
	$("#footer").load("ajax/footer.html");
}

function goToHomePage(){
	if(this.value == "home"){return true}
	return false
}
