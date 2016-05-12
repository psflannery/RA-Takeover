// Insert the HTML for the button
function ot_button_markUp() {
    var activePath = 'M251,150c0,93.5-29.203,143-101,143S49,243.5,49,150C49,52.5,78.203,7,150,7S251,51.5,251,150z',
        restPath = 'M281,150c0,71.797-59.203,131-131,131S19,221.797,19,150S78.203,19,150,19S281,78.203,281,150z',
        // Since the markup is constant, let's just create a single string of HTML
        otBackdrop = '<div class="ot-backdrop"></div>',
        sounds = '<audio id="loop" src="sounds/WET_SLOW.mp3" preload="auto" loop></audio>',
        otButton = '<div class="ot-btn-container">' +
                     '<div class="ot-btn-main">' +
                       '<nav class="ot-btn-main-menu">' +
                         '<span class="ot-morph-shape" data-morph-active="' + activePath + '">' +
                           '<svg id="ot-launch" width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none">' +
                             '<path d="' + restPath + '"/>' +
                           '</svg>' +
                         '</span>' +
                         '<button class="ot-menu-trigger" data-toggle="ot-menu" data-text-swap="Stop!" aria-controls="student-list" aria-expanded="false">' +
                           '<span>Click</span>' +
                         '</button>' +
                         '<ul id="student-list" class="ot-btn-menu-items">' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Rhys Coren" data-placement="left"><img src="img/anon.png"><span class="sr-only">Rhys Coren</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Rian Coughlan" data-placement="left"><img src="img/anon.png"><span class="sr-only">Rian Coughlan</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Elliot Dodd" data-placement="left"><img src="img/anon.png"><span class="sr-only">Elliot Dodd</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Alana Francis" data-placement="left"><img src="img/anon.png"><span class="sr-only">Alana Francis</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Kira Freije" data-placement="left"><img src="img/anon.png"><span class="sr-only">Kira Freije</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Gery Georgieva" data-placement="left"><img src="img/anon.png"><span class="sr-only">Gery Georgieva</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Anna Hughes" data-placement="left"><img src="img/anon.png"><span class="sr-only">Anna Hughes</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Frank Kent" data-placement="left" data-tint="#00FFFF"><img src="img/anon.png"><span class="sr-only">Frank Kent</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Neill Kidgell" data-placement="top" data-tint="#FFFF00"><img src="img/anon.png"><span class="sr-only">Neill Kidgell</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Jack Killick" data-placement="top" data-tint="#FF0000"><img src="img/anon.png"><span class="sr-only">Jack Killick</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Molly Palmer" data-placement="top"><img src="img/anon.png"><span class="sr-only">Molly Palmer</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Anna Paterson" data-placement="top"><img src="img/anon.png"><span class="sr-only">Anna Paterson</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Robin Seir" data-placement="top"><img src="img/anon.png"><span class="sr-only">Robin Seir</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Rafal Topolewski" data-placement="top"><img src="img/anon.png"><span class="sr-only">Rafal Topolewski</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Claire Undy" data-placement="top"><img src="img/anon.png"><span class="sr-only">Claire Undy</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Wanda Wieser" data-placement="top"><img src="img/anon.png"><span class="sr-only">Wanda Wieser</span></a></li>' +
                           '<li><a href="#" data-toggle="ot-takover" data-tooltip="Tom Worsfold" data-placement="top"><img src="img/anon.png"><span class="sr-only">Tom Worsfold</span></a></li>' +
                         '</ul>' +
                       '</nav>' + 
                     '</div>' +
                   '</div>';
    $('body').append(otButton, sounds);
}

function ot_expand_menu() {
    $('[data-toggle="ot-menu"]').click(function(e){
        e.preventDefault();
        var $otBtn = $('.ot-btn-main-menu'),
            otBtnOpen = 'menu--open',
            s = Snap('#ot-launch'),
            otPath = s.select( 'path' ),
            el = $(this),
            paths = {
                rest : otPath.attr('d'),
                active : $('.ot-morph-shape').data('morph-active')
            },
            $content = $('.content');
        
        $otBtn.hasClass(otBtnOpen) ? $otBtn.removeClass(otBtnOpen) : setTimeout( function() {$otBtn.addClass(otBtnOpen)}, 175 );
        
        el.attr('aria-expanded', function (i, attr) {
            return attr === 'true' ? 'false' : 'true';
        });
        
        // Turn off the takeover from the main menu button
        $content.hasClass('ot-takeover') ? $content.removeClass('ot-takeover') : '';

        //$('.ot-backdrop').toggleClass('ot-visible');
        
        otPath.stop().animate({'path' : paths.active}, 150, mina.easein, function() {
            otPath.stop().animate({'path' : paths.rest}, 800, mina.elastic );
        });

        // Swap out the text in the switch
        if (el.text() === el.data("text-swap")) {
          el.text(el.data("text-original"));
        } else {
          el.data("text-original", el.text());
          el.text(el.data("text-swap"));
        }
    });
}

function shadeBlendConvert(p, from, to) {
    if(typeof(p)!="number"||p<-1||p>1||typeof(from)!="string"||(from[0]!='r'&&from[0]!='#')||(typeof(to)!="string"&&typeof(to)!="undefined"))return null; //ErrorCheck
    if(!this.sbcRip)this.sbcRip=function(d){
        var l=d.length,RGB=new Object();
        if(l>9){
            d=d.split(",");
            if(d.length<3||d.length>4)return null;//ErrorCheck
            RGB[0]=i(d[0].slice(4)),RGB[1]=i(d[1]),RGB[2]=i(d[2]),RGB[3]=d[3]?parseFloat(d[3]):-1;
        }else{
            if(l==8||l==6||l<4)return null; //ErrorCheck
            if(l<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(l>4?d[4]+""+d[4]:""); //3 digit
            d=i(d.slice(1),16),RGB[0]=d>>16&255,RGB[1]=d>>8&255,RGB[2]=d&255,RGB[3]=l==9||l==5?r(((d>>24&255)/255)*10000)/10000:-1;
        }
        return RGB;}
    var i=parseInt,r=Math.round,h=from.length>9,h=typeof(to)=="string"?to.length>9?true:to=="c"?!h:false:h,b=p<0,p=b?p*-1:p,to=to&&to!="c"?to:b?"#000000":"#FFFFFF",f=sbcRip(from),t=sbcRip(to);
    if(!f||!t)return null; //ErrorCheck
    if(h)return "rgb("+r((t[0]-f[0])*p+f[0])+","+r((t[1]-f[1])*p+f[1])+","+r((t[2]-f[2])*p+f[2])+(f[3]<0&&t[3]<0?")":","+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*10000)/10000:t[3]<0?f[3]:t[3])+")");
    else return "#"+(0x100000000+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*255):t[3]>-1?r(t[3]*255):f[3]>-1?r(f[3]*255):255)*0x1000000+r((t[0]-f[0])*p+f[0])*0x10000+r((t[1]-f[1])*p+f[1])*0x100+r((t[2]-f[2])*p+f[2])).toString(16).slice(f[3]>-1||t[3]>-1?1:3);
}
// http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors#answer-13542669

function ot_launch_takeOver() {
    var playing = false,
        takeover = false;
    $('[data-toggle="ot-takover"]').click(function(e){
        e.preventDefault();
        var loop = $("#loop");

       $('.content').toggleClass('ot-takeover');

        // Toggle the sound
        if (playing == false) {
          loop[0].play();
          playing = true;
        } else {
          loop[0].pause();
          loop[0].currentTime = 0;
          playing = false;
        }
        
        // Set up the accent color
        var tint = $(this).data('tint'),
            tintedBg = $('.content > div');
        if (takeover === false) {
            //tintedBg.css('background-color', shadeBlendConvert(0.3, tint));
            tintedBg.css({'background-color': tint, 'background-image': 'linear-gradient(45deg, ' + shadeBlendConvert(0.3, tint) + ' 25%, transparent 25%, transparent 75%, ' + shadeBlendConvert(0.3, tint) + ' 75%, ' + shadeBlendConvert(0.3, tint) + '), linear-gradient(45deg, ' + shadeBlendConvert(0.3, tint) + ' 25%, transparent 25%, transparent 75%, ' + shadeBlendConvert(0.3, tint) + ' 75%, ' + shadeBlendConvert(0.3, tint) + ')', 'background-size': '30px 30px', 'background-position': '0 0, 15px 15px' });
            takeover = true;
        } else {
            //tintedBg.css('background-color', '');
            tintedBg.css('background', '');
            takeover = false;
        }
    });
}

$(document).ready(function($) {
    ot_button_markUp();
    ot_expand_menu();
    ot_launch_takeOver();
});