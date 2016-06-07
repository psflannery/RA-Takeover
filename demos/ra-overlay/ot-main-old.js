( function ( $ ) {
    // Detect Mobile Browser
    function mobilecheck() {
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    // Definitions
    var takeover = false,
        eventtype = mobilecheck() ? 'touchstart' : 'click';
    
    function ot_button_markUp() {
        var paths = {
              rest: 'M281,150c0,71.797-59.203,131-131,131S19,221.797,19,150S78.203,19,150,19S281,78.203,281,150z',
              active: 'M251,150c0,93.5-29.203,143-101,143S49,243.5,49,150C49,52.5,78.203,7,150,7S251,51.5,251,150z'
            },
            // Since the markup is constant, let's just create a single string of HTML
            sounds = '<audio id="ot-noise" src="" loop></audio>',
            otButton = '<div class="ot-btn-container">' +
                         '<div class="ot-btn-main">' +
                           '<nav class="ot-btn-main-menu">' +
                             '<span class="ot-morph-shape" data-morph-active="' + paths.active + '">' +
                               '<svg id="ot-launch" width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none">' +
                                  '<defs>' +
                                    '<filter id="dropshadow" width="200%" height="200%">' +
                                      '<feOffset dx="0" dy="0" result="offsetblur" in="SourceGraphic"/>' +
                                      '<feGaussianBlur result="blurOut" in="offOut" stdDeviation="5"/>' +
                                      '<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />' +
                                    '</filter>' +
                                  '</defs>' +
                                  '<path d="' + paths.rest + '"/>' +
                               '</svg>' +
                             '</span>' +
                             '<button type="button" class="ot-menu-trigger" data-toggle="ot-menu" data-text-swap="Stop!" aria-controls="student-list" aria-expanded="false">' +
                               '<span>Click</span>' +
                             '</button>' +
                             '<ul id="student-list" class="ot-btn-menu-items" role="group">' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Rhys Coren" data-placement="left" data-mp3="../../assets/rhys-sound.mp3" data-tint="#00FF00"><img src="../../assets/rhys-button.jpg"><span class="sr-only">Rhys Coren</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Rian Coughlan" data-placement="left" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">Rian Coughlan</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Elliot Dodd" data-placement="left" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">Elliot Dodd</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Alana Francis" data-placement="left" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">Alana Francis</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Kira Freije" data-placement="left" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">Kira Freije</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Gery Georgieva" data-placement="left" data-mp3="../../assets/gery-sound.m4a" data-tint="#FFC0CB"><img src="../../assets/gery-button.jpg" style="height: 60px; width: 60px"><span class="sr-only">Gery Georgieva</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Anna Hughes" data-placement="left" data-mp3="../../assets/anna-h-sound.mp3" data-tint="#CCCFFF"><img src="../../assets/anna-h-button.jpg" style="height: 60px"><span class="sr-only">Anna Hughes</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Frank Kent" data-placement="left" data-mp3="../../assets/WET_SLOW.mp3" data-tint="#00FFFF"><img src="../../assets/anon.png"><span class="sr-only">Frank Kent</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Neill Kidgell" data-placement="top" data-mp3="../../assets/WET_SLOW.mp3" data-tint="#FFFF00"><img src="../../assets/anon.png"><span class="sr-only">Neill Kidgell</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Jack Killick" data-placement="top" data-mp3="../../assets/WET_SLOW.mp3" data-tint="#FF0000"><img src="../../assets/anon.png"><span class="sr-only">Jack Killick</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Molly Palmer" data-placement="top" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">Molly Palmer</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Anna Paterson" data-placement="top" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">Anna Paterson</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Robin Seir" data-placement="top" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">Robin Seir</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Rafal Topolewski" data-placement="top" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">Rafal Topolewski</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Claire Undy" data-placement="top" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">Claire Undy</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Wanda Wieser" data-placement="top" data-mp3="../../assets/wanda-sound.mp3" data-tint="#E0B095"><img src="../../assets/wanda-button.jpg" style="height: 60px"><span class="sr-only">Wanda Wieser</span></button></li>' +
                               '<li><button type="button" data-toggle="ot-takover" data-tooltip="Tom Worsfold" data-placement="top" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">Tom Worsfold</span></button></li>' +
                             '</ul>' +
                           '</nav>' + 
                         '</div>' +
                       '</div>';
        $('body').append(otButton, sounds);
    }

    function ot_expand_menu() {
        $('[data-toggle="ot-menu"]').on(eventtype, function(e){
            e.preventDefault();
            var $otBtn = $('.ot-btn-main-menu'),
                otBtnOpen = 'menu--open',
                s = new Snap('#ot-launch'),
                otPath = s.select( 'path' ),
                el = $(this),
                paths = {
                    rest: otPath.attr('d'),
                    active: $('.ot-morph-shape').data('morph-active')
                },
                audio = $('#ot-noise');
            
            // Toggle the button class and set timings for the animation
            $otBtn.hasClass(otBtnOpen) ? $otBtn.removeClass(otBtnOpen) : setTimeout( function() {$otBtn.addClass(otBtnOpen)}, 175 );
            
            // Toggle aria-expanded
            el.attr('aria-expanded', function (i, attr) {
                return attr === 'true' ? 'false' : 'true';
            });
            
            // Switch between the svg paths
            otPath.stop().animate({'path' : paths.active}, 150, mina.easein, function() {
                otPath.stop().animate({'path' : paths.rest}, 800, mina.elastic );
            });

            // Swap out the text in the switch
            if (el.text() === el.data('text-swap')) {
              el.text(el.data('text-original'));
            } else {
              el.data('text-original', el.text());
              el.text(el.data('text-swap'));
            }

            // Turn off the takeover from the main menu button
            if(takeover !== true) {
                return
            } else {
                $('.content').removeClass('ot-takeover').css('background', '');
                $('li').css('background', ''); // test
                $('[data-toggle="ot-takover"]').removeClass('is-active').attr('disabled', false);
                $('body').removeClass();

                // Pause the audio
                if ( '' !== audio.attr('src') ) {
                    audio[0].pause();
                    audio[0].load(); //suspends and restores all audio element
                }

                // Convert the SVG text back to html
                $('.converted-to-svg textpath').each(function(i, el){
                    $(this).parents('svg').replaceWith($('<h1 class="convert-to-svg test-svg">' + $( this ).text() + '</h1>'));
                });

                takeover = false;
            }
        });
    }
    
    function shadeBlendConvert(p, from, to) {
        // http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors#answer-13542669
        if( typeof(p)!="number" || p < -1 || p > 1 || typeof(from)!="string" || (from[0]!='r'&&from[0]!='#') || (typeof(to)!="string"&&typeof(to)!="undefined") )return null; //ErrorCheck
        if( !this.sbcRip )this.sbcRip=function(d) {
            var l=d.length,
                RGB=new Object();
            if(l>9) {
                d = d.split( "," );
                if( d.length < 3 || d.length > 4 )return null; //ErrorCheck
                RGB[0] = i( d[0].slice(4) ), RGB[1] = i( d[1] ), RGB[2]=i( d[2] ), RGB[3] = d[3] ? parseFloat( d[3] ) : -1;
            } else {
                if( l == 8 || l == 6 || l < 4 )return null; //ErrorCheck
                if( l < 6 )d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + ( l > 4 ? d[4] + "" + d[4] : "" ); //3 digit
                d = i( d.slice( 1 ), 16 ), RGB[0] = d >> 16 & 255, RGB[1] = d >> 8 & 255, RGB[2] = d & 255, RGB[3] = l == 9 || l == 5 ? r( ( (d >> 24 & 255 ) / 255 ) * 10000 ) / 10000 :-1;
            }
            return RGB;
        }
        var i = parseInt,
            r = Math.round,
            h = from.length > 9,
            h = typeof(to) == "string" ? to.length > 9 ? true : to == "c" ? !h : false : h,
            b = p < 0,
            p = b ? p * -1 : p,
            to = to && to != "c" ? to : b ? "#000000" : "#FFFFFF",
            f = sbcRip(from),
            t = sbcRip(to);
        if( !f || !t )return null; //ErrorCheck
        if( h )return "rgb(" + r( ( t[0] - f[0]) * p + f[0] ) + ", " + r( ( t[1] - f[1] ) * p + f[1] ) + "," + r( ( t[2] - f[2] ) * p + f[2] ) + ( f[3] < 0 && t[3] < 0 ? ")" : ", " + ( f[3] > -1 && t[3] > -1 ? r( ( ( t[3] - f[3] ) * p + f[3] ) * 10000 )/10000 : t[3] < 0 ? f[3] : t[3]) + ")" );
        else return "#" + ( 0x100000000 + ( f[3] > -1 && t[3] > -1 ? r( ( ( t[3] - f[3] ) * p + f[3] ) * 255 ) : t[3] > -1 ? r( t[3] * 255 ) : f[3] > -1 ? r( f[3] * 255 ) : 255 ) * 0x1000000 + r( ( t[0] - f[0] ) * p + f[0] ) * 0x10000 + r( ( t[1] - f[1] ) * p + f[1] ) * 0x100 + r( ( t[2] - f[2] ) * p + f[2] ) ).toString(16).slice( f[3] > -1 || t[3] > -1 ? 1 : 3 );
    }

    function ot_visualization(){
        // Detect compatabilty
        var ContextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext);
        //for analyser node
        var analyser;
        //set empty array hald of fft size or equal to frequencybincount (you could put frequency bin count here if created)
        var frequencyData = new Uint8Array(1024);

        if (ContextClass) {
            // Web Audio API is available.
            var audioContext = new ContextClass();

            //load audio file from html tag
            var audioElement = document.getElementById('ot-noise');
            
            //creating source node
            var source = audioContext.createMediaElementSource(audioElement);

            //creating source node
            analyser = audioContext.createAnalyser();
            
            //set size of how many bits we analyse on
            analyser.fftSize = 2048;

            //connect to the source
            source.connect(analyser);
            analyser.connect(audioContext.destination);
        } else {
            // Web Audio API is not available - bail, or improvise a fallback
            console.log("Browser does not support the Web Audio API :(");
        }

        function update() {
            requestAnimationFrame(update);
            analyser.getByteFrequencyData(frequencyData);

            var lights = $('.ot-btn-menu-items li'),
                tint = $('.is-active').data('tint'),
                totalLights = lights.length;

            for (var i=0; i < totalLights; i++) {
                //set light colours
                //var lightColour = i*10;
                //lights[i].style.boxShadow = '10px 10px 2px hsla('+lightColour+',  80%, 50%, 0.8)';
                
                var freqDataKey = i*6;
                    
                if ( takeover !== true ) {
                    // clear the audio animations
                    return;
                } else {
                    // launch the audio animations
                    if (frequencyData[freqDataKey] > 160 || frequencyData[freqDataKey] < 80 ){
                        lights[i].style.backgroundImage = 'linear-gradient(to right, ' + shadeBlendConvert(0.3, tint) + ' 0%, ' + shadeBlendConvert(-0.6, tint) + ' 100%)';
                    }
                    else {
                        lights[i].style.backgroundImage = 'linear-gradient(to right, ' + shadeBlendConvert(0.6, tint) + ' 0%, ' + shadeBlendConvert(0.3, tint) + ' 50%)';
                    }
                }
            }
        }

        update();
    }
    
    function ot_launch_takeOver() {
      $('[data-toggle="ot-takover"]').on(eventtype, function(e){
        e.preventDefault();

        takeover = true;
        
        var audio = $("#ot-noise"),
            audioSrc = $(this).data('mp3'),
            //tint = $(this).data('tint'),
            //tintedBg = $('.content'),
            artist = $(this).data('tooltip'),
            str = artist.replace(/\s+/g, '-').toLowerCase();
            //clicks = $(this).data('clicks');
            
        var path = '<path d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0" id="txt-path"></path>',
            defs = '<defs>' + path + '</defs>';

        // Toggle the takeover, or switch between artists
        if(takeover !== true) {
            //return;;
        } else {
            // Swap in the audio src, and play it
            audio.attr('src', audioSrc);
            audio[0].oncanplaythrough = audio[0].play();
            
            $('.content').addClass('ot-takeover');
            
            // Ensure we don't relaunch an already running artists page
            $('[data-toggle="ot-takover"]').removeClass('is-active').attr('disabled', false);
            $(this).addClass('is-active').attr('disabled', true);
            
            // Set up the accent colour
            //tintedBg.css({'background-color': tint, 'background-image': 'linear-gradient(45deg, ' + shadeBlendConvert(0.3, tint) + ' 25%, transparent 25%, transparent 75%, ' + shadeBlendConvert(0.3, tint) + ' 75%, ' + shadeBlendConvert(0.3, tint) + '), linear-gradient(45deg, ' + shadeBlendConvert(0.3, tint) + ' 25%, transparent 25%, transparent 75%, ' + shadeBlendConvert(0.3, tint) + ' 75%, ' + shadeBlendConvert(0.3, tint) + ')', 'background-size': '30px 30px', 'background-position': '0 0, 15px 15px' });
                        
            // Clear any previous body class then add the current artist name
            $('body').removeClass().addClass(str);

            // Convert dom text to svg
            $('.convert-to-svg').each(function(i){
            //$('.standfirst').each(function(i){
                $(this).replaceWith($('<svg id="converted-' + (i+1) + '" class="converted-to-svg">' + defs + '<text class="convert-to-svg"><textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#txt-path" startOffset="0"><tspan>' + $( this ).text() + '</tspan></textPath></text></svg>'));
            });
        }
            
        /*
        clicks ? $('#ot-noise').attr('src', '') : $('#ot-noise').attr('src', noise);
        clicks ? $content.removeClass('ot-takeover') : $content.addClass('ot-takeover');
        $(this).data('clicks', !clicks);
        */
      });
    }

    $(document).ready(function() {
        ot_button_markUp();
        ot_expand_menu();
        ot_launch_takeOver();
        ot_visualization();
    });
})( jQuery );