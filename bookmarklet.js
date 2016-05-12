javascript: (function () { 
    var jsCode = document.createElement('script');
    var styles = document.createElement('link');
    
    jsCode.setAttribute('src', 'http://www.website.com/js/main.js');
    styles.setAttribute('rel', 'stylesheet');
    styles.setAttribute('href', 'http://www.website.com/css/style.css');
    document.body.appendChild(jsCode); 
}());

/*
javascript:var i,s,ss=[
    'http://kathack.com/js/kh.js',
    'http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js'
];
for(i=0;i!=ss.length;i++){
    s=document.createElement('script');
    s.src=ss[i];
    document.body.appendChild(s);
}void(0);
*/

/*
javascript: (function () {
	var linkNode = document.createElement('link');
	linkNode.rel = 'stylesheet';
	linkNode.href = 'http://www.website.com/stylesheets/style.css';
	document.getElementsByTagName('head')[0].appendChild(linkNode);
})();
*/

// http://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154