( function ( $ ) {
    // Detect Mobile Browser
    function mobilecheck() {
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true;})(navigator.userAgent||navigator.vendor||window.opera);
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
                                 '<path d="' + paths.rest + '" filter="url(#dropshadow)"/>' +
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
        var ot_first_click = true;
        
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
                
            // Preload the background images
            if(ot_first_click === true) {
                ot_bg_preloader(
                    '../../assets/rhys-bg.gif',
                    '../../assets/gery-bg.jpg',
                    '../../assets/anna-h-bg.jpg',
                    '../../assets/wanda-bg.jpg'
                );
                ot_first_click = false;
            };
            
            // Toggle the button class and set timings for the animation
            $otBtn.hasClass(otBtnOpen) ? $otBtn.removeClass(otBtnOpen) : setTimeout( function() { $otBtn.addClass(otBtnOpen); }, 175 );
            
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
                return;
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
                $('.converted-to-svg textpath').each(function(i){
                    var originalClass = $('#converted-' + (i+1)).data('class');
                    $(this).parents('svg').replaceWith($('<h2 class="' + originalClass + '">' + $( this ).text() + '</h2>'));
                });

                takeover = false;
            }
        });
    }
    
    function shadeBlendConvert(p, from, to) {
        // http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors#answer-13542669
        if( typeof(p)!=="number" || p < -1 || p > 1 || typeof(from)!=="string" || (from[0]!=='r'&&from[0]!=='#') || (typeof(to)!=="string"&&typeof(to)!=="undefined") )return null; //ErrorCheck
        if( !this.sbcRip )this.sbcRip=function(d) {
            var l=d.length,
                RGB=new Object();
            if(l>9) {
                d = d.split( "," );
                if( d.length < 3 || d.length > 4 )return null; //ErrorCheck
                RGB[0] = i( d[0].slice(4) ), RGB[1] = i( d[1] ), RGB[2]=i( d[2] ), RGB[3] = d[3] ? parseFloat( d[3] ) : -1;
            } else {
                if( l === 8 || l === 6 || l < 4 )return null; //ErrorCheck
                if( l < 6 )d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + ( l > 4 ? d[4] + "" + d[4] : "" ); //3 digit
                d = i( d.slice( 1 ), 16 ), RGB[0] = d >> 16 & 255, RGB[1] = d >> 8 & 255, RGB[2] = d & 255, RGB[3] = l === 9 || l === 5 ? r( ( (d >> 24 & 255 ) / 255 ) * 10000 ) / 10000 :-1;
            }
            return RGB;
        };
        var i = parseInt,
            r = Math.round,
            h = from.length > 9,
            h = typeof(to) === "string" ? to.length > 9 ? true : to === "c" ? !h : false : h,
            b = p < 0,
            p = b ? p * -1 : p,
            to = to && to !== "c" ? to : b ? "#000000" : "#FFFFFF",
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

            // load audio file from html tag
            var audioElement = document.getElementById('ot-noise');
            
            // creating source node
            var source = audioContext.createMediaElementSource(audioElement);

            // creating source node
            analyser = audioContext.createAnalyser();
            
            // set size of how many bits we analyse on
            analyser.fftSize = 2048;

            // connect to the source
            source.connect(analyser);
            analyser.connect(audioContext.destination);
        } else {
            // Web Audio API is not available - bail, or improvise a fallback
            console.log("Browser does not support the Web Audio API :(");
        }

        function update() {
            requestAnimationFrame(update);
            analyser.getByteFrequencyData(frequencyData);

            var lights = $('li'),
                tint = $('.is-active').data('tint'),
                totalLights = lights.length;

            for (var i=0; i < totalLights; i++) {
                //set light colours
                //var lightColour = i*10;
                //lights[i].style.boxShadow = '10px 10px 2px hsla('+lightColour+',  80%, 50%, 0.8)';
                
                var freqDataKey = i*6;
                    
                if ( takeover !== true ) { // move this condition outside the loop
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
        
        // Set up the variables
        var audio = $("#ot-noise"),
            audioSrc = $(this).data('mp3'),
            //tint = $(this).data('tint'),
            //tintedBg = $('.content'),
            artist = $(this).data('tooltip'),
            str = artist.replace(/\s+/g, '-').toLowerCase(),
            //path = "M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0";
            path = "m186,93c-1,-1 -2.07613,-0.61732 -3,-1c-1.30656,-0.5412 -2.186,-1.69255 -4,-3c-1.14726,-0.8269 -2,-2 -4,-3c-2,-1 -3.54915,-3.95517 -7,-5c-1.91418,-0.57957 -4.96384,-2.11587 -8,-3c-3.95868,-1.15277 -6.90779,-2.49622 -11,-3c-3.97003,-0.48873 -8,-1 -12,-1c-3,0 -7,0 -11,0c-5,0 -9,0 -14,0c-6,0 -11.02045,-0.49488 -17,0c-6.06203,0.50171 -12,2 -17,3c-5,1 -9,3 -14,5c-5,2 -7.74675,4.37135 -12,7c-1.90211,1.17557 -4.34619,2.70546 -6,5c-1.30745,1.814 -2.1731,3.85273 -3,5c-1.30745,1.814 -1.48626,4.82375 -2,7c-0.45951,1.9465 -0.51945,5.03873 -1,8c-0.50654,3.12144 -1,7 -1,10c0,3 -0.48055,6.03874 0,9c0.50654,3.12144 1.31074,5.08025 2,8c1.02748,4.35251 3,7 4,9c1,2 1.69255,5.186 3,7c1.65381,2.29454 4,5 5,7c1,2 2.48626,3.82375 3,6c0.22975,0.97325 1,3 1,4c0,1 1,2 1,3c0,1 0,2 0,3c0,1 0,2 0,4c0,1 0,2 0,3c0,1 0,2 0,3c0,1 0,3 -1,4c-2,2 -2.51301,2.59399 -4,5c-1.66251,2.68999 -1,4 -2,6c-1,2 -0.77025,3.02675 -1,4c-0.51374,2.17625 -1.45881,2.69344 -2,4c-0.76537,1.84776 0,3 0,4c0,2 0,3 0,5c0,1 0,3 0,4c0,1 0.70711,2.29289 0,3c-0.70711,0.70711 -1.29289,0.29289 -2,1c-0.70711,0.70711 -0.45881,1.69344 -1,3c-0.38268,0.92387 0.38268,2.07613 0,3c-0.54119,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 0,3c0,1 -1,2 -1,4c0,1 -0.29289,1.29289 -1,2c-1.41422,1.41422 -0.61732,2.07613 -1,3c-0.54119,1.30656 -0.29289,3.29289 -1,4c-0.70711,0.70711 -1.45881,1.69344 -2,3c-0.38268,0.92389 0,3 0,5c0,2 -0.48626,3.82376 -1,6c-0.45951,1.9465 -0.32037,4.02582 0,6c0.50654,3.12143 2.95517,4.54916 4,8c0.57957,1.91418 2.14429,4.93414 3,7c1.21015,2.92157 1.69255,5.186 3,7c1.65381,2.29453 2.41886,4.41885 4,6c1.58114,1.58115 3.32367,3.52017 5,5c2.703,2.38617 4.45049,4.4505 7,7c2.54951,2.5495 5.71899,5.31021 9,8c2.78832,2.28589 6,4 11,7c5,3 8.19801,4.63297 14,8c6.23695,3.61945 11.85101,8.3186 18,11c7.83176,3.41519 14.89149,5.3476 24,8c7.91736,2.30554 14.91573,3.42648 24,5c7.94397,1.37601 15.00908,1.92987 23,3c7.0085,0.93857 13.93796,1.49829 20,2c6.97615,0.57736 14,1 19,1c7,0 13.07747,0.96109 19,0c6.24289,-1.01309 13.21512,-3.36078 20,-6c6.25189,-2.43188 13.37155,-6.25131 22,-11c6.31754,-3.47687 11.27551,-8.6868 17,-14c6.30505,-5.85205 13,-11 19,-17c7,-7 11.73764,-13.23737 19,-21c5.797,-6.19635 12.73459,-13.43195 18,-21c5.87997,-8.45139 10.91641,-15.6463 14,-25c2.88657,-8.75601 3.49939,-17.9626 4,-28c0.3985,-7.99007 0.12335,-18.01311 -1,-28c-0.90118,-8.01173 -3.41547,-17.24428 -7,-25c-4.3194,-9.34573 -9.09686,-15.91626 -16,-24c-5.0719,-5.93933 -10.11639,-12.03857 -17,-17c-7.25598,-5.2298 -14.94348,-8.20956 -22,-10c-8.93637,-2.26741 -19,-3 -28,-3c-8,0 -18.0451,-0.1516 -25,2c-9.06305,2.80378 -16.20598,7.74292 -25,15c-8.19888,6.76596 -14.57663,13.45816 -23,23c-7.54572,8.54765 -13.61992,19.19925 -19,29c-5.61182,10.22289 -9.35817,18.80716 -13,26c-4.44887,8.78679 -7.44353,14.38063 -9,20c-1.33467,4.81857 -1,11 -1,15c0,6 0,12 1,17c1,5 2.7464,8.16119 6,13c2.78995,4.14923 8.04024,8.9502 13,13c6.0497,4.93976 11.52368,10.7847 21,16c8.62845,4.74869 15.16824,6.58481 23,10c6.149,2.6814 13.03442,3.867 21,6c7.03235,1.88312 14.85712,4.59308 22,6c8.88467,1.75 17.91574,2.42648 27,4c7.94397,1.37601 17,2 25,2c8,0 15,0 22,0c5,0 11,0 15,0c5,0 8.02997,0.48874 12,0c4.09222,-0.50378 8.03067,-0.91232 11,-2c5.05658,-1.85226 7.94342,-2.14774 13,-4c2.96933,-1.08768 6.41208,-1.96854 10,-4c3.69196,-2.09033 5.70547,-5.34619 8,-7c1.814,-1.30746 5.10339,-2.90634 6,-4c2.28589,-2.78833 4.81265,-4.20682 7,-6c2.78833,-2.28589 5.88153,-3.19028 9,-5c1.93399,-1.12234 4.07843,-1.78986 7,-3c2.06586,-0.85571 5.23401,-0.49295 10,-3c3.19098,-1.67856 6.17697,-3.34518 11,-5c4.23007,-1.45139 6.186,-3.69254 8,-5c2.29453,-1.65381 3.70547,-3.34619 6,-5c1.814,-1.30746 4,-3 5,-4c2,-2 4.41885,-3.41885 6,-5c1.58115,-1.58115 3.14682,-3.86325 5,-6c3.276,-3.77728 4.11215,-6.9183 7,-11c2.08246,-2.94336 4.19028,-6.88152 6,-10c1.12231,-1.93399 3.19031,-4.88152 5,-8c1.12231,-1.93399 3.14429,-5.93414 4,-8c1.21014,-2.92157 3.14771,-5.94341 5,-11c1.08771,-2.96933 3.32141,-7.80901 5,-11c2.50708,-4.76599 2.88135,-8.02521 4,-13c0.90454,-4.02266 2,-9 3,-12c1,-3 1.49347,-5.87856 2,-9c0.48053,-2.96126 0,-7 0,-12c0,-3 0.49622,-6.90779 1,-11c0.36658,-2.97752 0,-6 0,-8c0,-3 0,-5 0,-7c0,-3 -0.45953,-6.0535 0,-8c0.51373,-2.17625 1.54047,-4.0535 2,-6c0.51373,-2.17625 1,-3 1,-5c0,-3 1,-5 1,-8c0,-2 0,-4 0,-7c0,-2 -0.54047,-4.0535 -1,-6c-0.51373,-2.17625 -2,-4 -2,-5c0,-2 -1.34619,-2.70546 -3,-5c-1.30743,-1.814 -2.88153,-4.19028 -6,-6c-1.93402,-1.12234 -4.07843,-2.78985 -7,-4c-2.06586,-0.85571 -3.61102,-0.92807 -6,-3c-1.68927,-1.46507 -3.05353,-1.5405 -5,-2c-2.17627,-0.51374 -3,-2 -4,-2c-1,0 -2,0 -4,0c-1,0 -2.02676,-0.22975 -3,0c-2.17624,0.51374 -2.31076,1.53493 -4,3c-2.38895,2.07193 -5,4 -7,6c-3,3 -6,7 -9,12c-3,5 -6.43289,10.80243 -9,17c-2.42029,5.84312 -3,10 -4,15c-1,5 -2.1604,9.96329 -3,14c-1.23862,5.95532 -1.36096,9.14223 -3,15c-1.45105,5.18599 -2.64557,10.01257 -3,15c-0.50125,7.05328 -1.5029,14.01546 -2,22c-0.50098,8.04668 -1,18 -1,26c0,9 1.88177,18.02708 4,27c1.89459,8.02562 4.36078,17.21512 7,24c2.43188,6.25189 4.9776,12.44437 8,18c3.05997,5.62463 7.41156,11.40402 11,16c3.48129,4.45877 7.71411,7.21167 10,10c1.79318,2.18735 5.29871,2.94855 7,4c1.9021,1.17557 4,3 5,4c1,1 2.797,2.2565 4,3c2.69,1.66251 4.3869,2.9176 7,4c1.84778,0.76538 3.82373,2.48627 6,3c0.97327,0.22977 2,0 3,0c2,0 2.81268,-0.20682 5,-2c2.78833,-2.28589 4.32141,-3.80902 6,-7c2.50708,-4.76599 2.69122,-10.07181 4,-15c1.62329,-6.11267 6.15942,-16.31375 11,-28c4.2785,-10.32928 9.29352,-19.88138 12,-27c2.24762,-5.9117 4.37671,-9.88731 6,-16c1.30878,-4.92821 2.88135,-8.02521 4,-13c0.90454,-4.02266 1.09546,-9.97734 2,-14c1.11865,-4.97479 1.60583,-9.01947 2,-13c0.50244,-5.0742 1,-8 1,-11c0,-3 0,-6 0,-10c0,-2 0,-5 0,-8c0,-3 0,-5 0,-7c0,-2 0,-5 0,-7c0,-3 0,-4 0,-6c0,-2 0,-5 0,-7c0,-2 0,-4 0,-6c0,-3 -0.54047,-5.0535 -1,-7c-0.51373,-2.17625 -2,-5 -2,-7c0,-2 -0.14429,-3.93414 -1,-6c-1.21014,-2.92156 -1.14429,-4.93414 -2,-7c-1.21014,-2.92156 -0.08099,-5.107 -1,-9c-0.51373,-2.17625 -2,-5 -3,-7c-1,-2 -1.87769,-6.066 -3,-8c-1.80969,-3.11848 -3.04034,-5.64734 -6,-9c-2.38617,-2.703 -5.4505,-5.45049 -8,-8c-2.5495,-2.54951 -4.4505,-4.45049 -7,-7c-2.5495,-2.54951 -5.59399,-5.51301 -8,-7c-2.69,-1.66251 -5.31,-2.33749 -8,-4c-1.203,-0.7435 -2.82373,-1.48626 -5,-2c-0.97327,-0.22975 -2,-1 -3,-1c-2,0 -3,0 -4,0c-2,0 -5,0 -7,0c-4,0 -7,0 -13,0c-3,0 -7,0 -11,0c-5,0 -8.03873,-0.48055 -11,0c-3.12143,0.50654 -4.54916,2.95517 -8,4c-2.87128,0.86935 -4.93414,1.14429 -7,2c-2.92157,1.21015 -7.02997,0.51127 -11,1c-4.09222,0.50377 -9.93796,1.49829 -16,2c-4.98297,0.4124 -12,1 -19,1c-7,0 -14,0 -22,0c-7,0 -14,0 -19,0c-5,0 -10,0 -16,0c-4,0 -8,0 -11,0c-4,0 -6.92578,0.49755 -12,1c-2.98541,0.29561 -6.92578,0.49755 -12,1c-4.97568,0.49269 -12.01511,-0.42533 -18,0c-7.05328,0.50126 -14.0174,0.44076 -23,1c-8.04669,0.50097 -15.99335,1.05481 -24,2c-8.99294,1.06161 -17.1853,2.36742 -25,5c-7.21725,2.43132 -11.17697,3.34518 -16,5c-2.11504,0.72569 -4,1 -5,1c-3,0 -3.69344,0.4588 -5,1c-0.92387,0.38268 -3.29289,0.29289 -4,1c-0.70711,0.70711 -0.29289,2.29289 -1,3c-0.70711,0.70711 -1,1 -1,2c0,2 0,3 0,4c0,1 -0.29289,2.29289 -1,3c-0.70711,0.70711 -2,1 -4,2c-2,1 -3.07613,1.61732 -4,2c-1.30656,0.5412 -3,2 -4,3c-1,1 -3.69344,2.4588 -5,3c-0.92387,0.38268 -1,1 -3,1l-1,-1l-1,-1l-2,-1";

        // Toggle the takeover, or switch between artists
        if(takeover !== true) {
            return;
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
            $('h2').each(function(i){
                // Store the current text in a variable;
                var originalText = $(this).text(),
                    originalClasses = $(this).attr('class');

                // Replace the html markup with an svg placeholder
                $(this).replaceWith($('<svg id="converted-' + (i+1) + '" class="converted-to-svg" data-class="' + originalClasses + '"></svg>'));
                
                // Animate the path
                var s = new Snap('#converted-' + (i+1)),
                    length = Snap.path.getTotalLength(path),
                    animatedText = s.text(500, 250, originalText).attr({
                        'textpath': path,
                        'font': 'bold 2.25em sans-serif'
                    });

                // Define the animation and call it back recursively
                function repeater() {
                    animatedText.textPath.stop().animate({
                        'startOffset': length
                    }, 250000, function() {
                        animatedText.textPath.stop().attr({ startOffset: 0 }); // reset
                        repeater();
                    });
                }
                repeater();
            });
        }
      });
    }
    
    // Loop through the background images so we can preload them
    function ot_bg_preloader() {
        var images = [];
        for (var i = 0; i < arguments.length; i++) {
            images[i] = new Image();
            images[i].src = ot_bg_preloader.arguments[i];
        }
    }

    $(document).ready(function() {
        ot_button_markUp();
        ot_expand_menu();
        ot_launch_takeOver();
        //ot_visualization();
    });
})( jQuery );
