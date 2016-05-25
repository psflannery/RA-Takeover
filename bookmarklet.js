javascript: (function () {
    var i,
        scripts,
        styles = document.createElement('link'),
        jsCode = [
            'https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js',
            'https://dl.dropboxusercontent.com/u/2250499/opening_times/Takeovers/RA/demos/raw-demo/js/main.js'
        ];
    styles.setAttribute('rel', 'stylesheet');
    styles.setAttribute('href', 'https://dl.dropboxusercontent.com/u/2250499/opening_times/Takeovers/RA/demos/css/main.css');
    document.getElementsByTagName('head')[0].appendChild(styles);
    for(i=0; i!=jsCode.length; i++){
        scripts = document.createElement('script');
        scripts.setAttribute('src', jsCode[i]);
        document.body.appendChild(scripts);
    };
}());
