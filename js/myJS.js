function loadPage(a){
    var archor = a;
    var page = archor.getAttribute('value')+".html";
	var result = '#'+archor.getAttribute('result');
    $(result).load('ajax/'+page);
}
function navSelector(a){
    var archor = a;
	loadPage(archor);
    var navs=document.getElementsByName('nav');
	for(var i=0; i<navs.length;i++){
	    navs[i].className='';
	}
	archor.className='current';	
}