!function($){function t(){var t=!1;return function(a){(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}function a(){var t={rest:"M281,150c0,71.797-59.203,131-131,131S19,221.797,19,150S78.203,19,150,19S281,78.203,281,150z",active:"M251,150c0,93.5-29.203,143-101,143S49,243.5,49,150C49,52.5,78.203,7,150,7S251,51.5,251,150z"},a=["Rhys Coren","Rian Coughlan","Elliot Dodd","Alana Francis","Kira Freije","Gery Georgieva","Anna Hughes","Frank Kent","Neill Kidgell","Jack Killick","Molly Palmer","Anna Paterson","Robin Seir","Rafal Topolewski","Claire Undy","Wanda Wieser","Tom Worsfold"],s=["alana-sound-1.mp3","alana-sound-2.mp3","alana-sound-3.mp3","alana-sound-4.mp3","alana-sound-5.mp3"],o=s[Math.floor(Math.random()*s.length)],c='<audio id="ot-noise" src="" loop></audio>',e='<div class="ot-btn-container"><div class="ot-btn-main"><nav class="ot-btn-main-menu"><span class="ot-morph-shape" data-morph-active="'+t.active+'"><svg id="ot-launch" width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none"><path d="'+t.rest+'" /></svg></span><button type="button" class="ot-menu-trigger" data-toggle="ot-menu" data-text-swap="Stop!" aria-controls="student-list" aria-expanded="false"><span>Click</span></button><ul id="student-list" class="ot-btn-menu-items" role="group"><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[0]+'" data-placement="right" data-mp3="../../assets/rhys-sound.mp3" data-tint="#00FF00"><img src="../../assets/rhys-button.jpg"><span class="sr-only">'+a[0]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[1]+'" data-placement="top" data-mp3="../../assets/rian-sound.mp3"><img src="../../assets/rian-button.jpg"><span class="sr-only">'+a[1]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[2]+'" data-placement="left" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">'+a[2]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[3]+'" data-placement="left" data-mp3="../../assets/'+o+'"><img src="../../assets/alana-button.jpg"><span class="sr-only">'+a[3]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[4]+'" data-placement="left" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">'+a[4]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[5]+'" data-placement="left" data-mp3="../../assets/gery-sound.m4a" data-tint="#FFC0CB"><img src="../../assets/gery-button.jpg"><span class="sr-only">'+a[5]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[6]+'" data-placement="left" data-mp3="../../assets/anna-h-sound.mp3" data-tint="#CCCFFF"><img src="../../assets/anna-h-button.jpg"><span class="sr-only">'+a[6]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[7]+'" data-placement="bottom" data-mp3="../../assets/WET_SLOW.mp3" data-tint="#00FFFF"><img src="../../assets/anon.png"><span class="sr-only">'+a[7]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[8]+'" data-placement="bottom" data-mp3="../../assets/WET_SLOW.mp3" data-tint="#FFFF00"><img src="../../assets/anon.png"><span class="sr-only">'+a[8]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[9]+'" data-placement="top" data-mp3="../../assets/jack-sound.mp3" data-tint="#FF0000"><img src="../../assets/jack-button.jpg"><span class="sr-only">'+a[9]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[10]+'" data-placement="top" data-mp3="../../assets/molly-sound.mp3"><img src="../../assets/molly-button.jpg"><span class="sr-only">'+a[10]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[11]+'" data-placement="top" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">'+a[11]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[12]+'" data-placement="top" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">'+a[12]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[13]+'" data-placement="top" data-mp3="../../assets/rafal-sound.mp3"><img src="../../assets/rafal-button.jpg"><span class="sr-only">'+a[13]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[14]+'" data-placement="top" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">'+a[14]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[15]+'" data-placement="top" data-mp3="../../assets/wanda-sound.mp3" data-tint="#E0B095"><img src="../../assets/wanda-button.jpg"><span class="sr-only">'+a[15]+'</span></button></li><li><button type="button" data-toggle="ot-takover" data-tooltip="'+a[16]+'" data-placement="top" data-mp3="../../assets/WET_SLOW.mp3"><img src="../../assets/anon.png"><span class="sr-only">'+a[16]+"</span></button></li></ul></nav></div></div>";$("body").append(e,c)}function s(){var t=!0;$('[data-toggle="ot-menu"]').on(i,function(a){a.preventDefault();var s=$(".ot-btn-main-menu"),o="menu--open",c=new Snap("#ot-launch"),i=c.select("path"),l=$(this),p={rest:i.attr("d"),active:$(".ot-morph-shape").data("morph-active")},r=$("#ot-noise");t===!0&&(e("../../assets/rhys-bg.gif","../../assets/gery-bg.jpg","../../assets/anna-h-bg.jpg","../../assets/wanda-bg.jpg"),t=!1),s.hasClass(o)?s.removeClass(o):setTimeout(function(){s.addClass(o)},175),l.attr("aria-expanded",function(t,a){return"true"===a?"false":"true"}),i.stop().animate({path:p.active},150,mina.easein,function(){i.stop().animate({path:p.rest},800,mina.elastic)}),l.text()===l.data("text-swap")?l.text(l.data("text-original")):(l.data("text-original",l.text()),l.text(l.data("text-swap"))),n===!0&&($(".content").removeClass("ot-takeover").css("background",""),$("li").css("background",""),$('[data-toggle="ot-takover"]').removeClass("is-active").attr("disabled",!1),$("body").removeClass(),""!==r.attr("src")&&(r[0].pause(),r[0].load()),$(".converted-to-svg text").each(function(t){var a=$("#converted-"+(t+1)).data("class");$(this).parents("svg").replaceWith($('<h1 class="'+a+'">'+$(this).text()+"</h1>"))}),$(".undy-pillows-top").length&&$(".undy-pillows-top").remove(),n=!1)})}function o(t,a,s){if("number"!=typeof t||-1>t||t>1||"string"!=typeof a||"r"!==a[0]&&"#"!==a[0]||"string"!=typeof s&&"undefined"!=typeof s)return null;this.sbcRip||(this.sbcRip=function(t){var a=t.length,s=new Object;if(a>9){if(t=t.split(","),t.length<3||t.length>4)return null;s[0]=o(t[0].slice(4)),s[1]=o(t[1]),s[2]=o(t[2]),s[3]=t[3]?parseFloat(t[3]):-1}else{if(8===a||6===a||4>a)return null;6>a&&(t="#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+(a>4?t[4]+""+t[4]:"")),t=o(t.slice(1),16),s[0]=t>>16&255,s[1]=t>>8&255,s[2]=255&t,s[3]=9===a||5===a?c((t>>24&255)/255*1e4)/1e4:-1}return s});var o=parseInt,c=Math.round,e=a.length>9,e="string"==typeof s?s.length>9?!0:"c"===s?!e:!1:e,n=0>t,t=n?-1*t:t,s=s&&"c"!==s?s:n?"#000000":"#FFFFFF",i=sbcRip(a),l=sbcRip(s);return i&&l?e?"rgb("+c((l[0]-i[0])*t+i[0])+", "+c((l[1]-i[1])*t+i[1])+","+c((l[2]-i[2])*t+i[2])+(i[3]<0&&l[3]<0?")":", "+(i[3]>-1&&l[3]>-1?c(1e4*((l[3]-i[3])*t+i[3]))/1e4:l[3]<0?i[3]:l[3])+")"):"#"+(4294967296+16777216*(i[3]>-1&&l[3]>-1?c(255*((l[3]-i[3])*t+i[3])):l[3]>-1?c(255*l[3]):i[3]>-1?c(255*i[3]):255)+65536*c((l[0]-i[0])*t+i[0])+256*c((l[1]-i[1])*t+i[1])+c((l[2]-i[2])*t+i[2])).toString(16).slice(i[3]>-1||l[3]>-1?1:3):null}function c(){$('[data-toggle="ot-takover"]').on(i,function(t){t.preventDefault(),n=!0;var a=$("#ot-noise"),s=$(this).data("mp3"),o=$(this).data("tint"),c=$("body"),e=$(this).data("tooltip"),i=e.replace(/\s+/g,"-").toLowerCase(),l="m186,93c-1,-1 -2.07613,-0.61732 -3,-1c-1.30656,-0.5412 -2.186,-1.69255 -4,-3c-1.14726,-0.8269 -2,-2 -4,-3c-2,-1 -3.54915,-3.95517 -7,-5c-1.91418,-0.57957 -4.96384,-2.11587 -8,-3c-3.95868,-1.15277 -6.90779,-2.49622 -11,-3c-3.97003,-0.48873 -8,-1 -12,-1c-3,0 -7,0 -11,0c-5,0 -9,0 -14,0c-6,0 -11.02045,-0.49488 -17,0c-6.06203,0.50171 -12,2 -17,3c-5,1 -9,3 -14,5c-5,2 -7.74675,4.37135 -12,7c-1.90211,1.17557 -4.34619,2.70546 -6,5c-1.30745,1.814 -2.1731,3.85273 -3,5c-1.30745,1.814 -1.48626,4.82375 -2,7c-0.45951,1.9465 -0.51945,5.03873 -1,8c-0.50654,3.12144 -1,7 -1,10c0,3 -0.48055,6.03874 0,9c0.50654,3.12144 1.31074,5.08025 2,8c1.02748,4.35251 3,7 4,9c1,2 1.69255,5.186 3,7c1.65381,2.29454 4,5 5,7c1,2 2.48626,3.82375 3,6c0.22975,0.97325 1,3 1,4c0,1 1,2 1,3c0,1 0,2 0,3c0,1 0,2 0,4c0,1 0,2 0,3c0,1 0,2 0,3c0,1 0,3 -1,4c-2,2 -2.51301,2.59399 -4,5c-1.66251,2.68999 -1,4 -2,6c-1,2 -0.77025,3.02675 -1,4c-0.51374,2.17625 -1.45881,2.69344 -2,4c-0.76537,1.84776 0,3 0,4c0,2 0,3 0,5c0,1 0,3 0,4c0,1 0.70711,2.29289 0,3c-0.70711,0.70711 -1.29289,0.29289 -2,1c-0.70711,0.70711 -0.45881,1.69344 -1,3c-0.38268,0.92387 0.38268,2.07613 0,3c-0.54119,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 0,3c0,1 -1,2 -1,4c0,1 -0.29289,1.29289 -1,2c-1.41422,1.41422 -0.61732,2.07613 -1,3c-0.54119,1.30656 -0.29289,3.29289 -1,4c-0.70711,0.70711 -1.45881,1.69344 -2,3c-0.38268,0.92389 0,3 0,5c0,2 -0.48626,3.82376 -1,6c-0.45951,1.9465 -0.32037,4.02582 0,6c0.50654,3.12143 2.95517,4.54916 4,8c0.57957,1.91418 2.14429,4.93414 3,7c1.21015,2.92157 1.69255,5.186 3,7c1.65381,2.29453 2.41886,4.41885 4,6c1.58114,1.58115 3.32367,3.52017 5,5c2.703,2.38617 4.45049,4.4505 7,7c2.54951,2.5495 5.71899,5.31021 9,8c2.78832,2.28589 6,4 11,7c5,3 8.19801,4.63297 14,8c6.23695,3.61945 11.85101,8.3186 18,11c7.83176,3.41519 14.89149,5.3476 24,8c7.91736,2.30554 14.91573,3.42648 24,5c7.94397,1.37601 15.00908,1.92987 23,3c7.0085,0.93857 13.93796,1.49829 20,2c6.97615,0.57736 14,1 19,1c7,0 13.07747,0.96109 19,0c6.24289,-1.01309 13.21512,-3.36078 20,-6c6.25189,-2.43188 13.37155,-6.25131 22,-11c6.31754,-3.47687 11.27551,-8.6868 17,-14c6.30505,-5.85205 13,-11 19,-17c7,-7 11.73764,-13.23737 19,-21c5.797,-6.19635 12.73459,-13.43195 18,-21c5.87997,-8.45139 10.91641,-15.6463 14,-25c2.88657,-8.75601 3.49939,-17.9626 4,-28c0.3985,-7.99007 0.12335,-18.01311 -1,-28c-0.90118,-8.01173 -3.41547,-17.24428 -7,-25c-4.3194,-9.34573 -9.09686,-15.91626 -16,-24c-5.0719,-5.93933 -10.11639,-12.03857 -17,-17c-7.25598,-5.2298 -14.94348,-8.20956 -22,-10c-8.93637,-2.26741 -19,-3 -28,-3c-8,0 -18.0451,-0.1516 -25,2c-9.06305,2.80378 -16.20598,7.74292 -25,15c-8.19888,6.76596 -14.57663,13.45816 -23,23c-7.54572,8.54765 -13.61992,19.19925 -19,29c-5.61182,10.22289 -9.35817,18.80716 -13,26c-4.44887,8.78679 -7.44353,14.38063 -9,20c-1.33467,4.81857 -1,11 -1,15c0,6 0,12 1,17c1,5 2.7464,8.16119 6,13c2.78995,4.14923 8.04024,8.9502 13,13c6.0497,4.93976 11.52368,10.7847 21,16c8.62845,4.74869 15.16824,6.58481 23,10c6.149,2.6814 13.03442,3.867 21,6c7.03235,1.88312 14.85712,4.59308 22,6c8.88467,1.75 17.91574,2.42648 27,4c7.94397,1.37601 17,2 25,2c8,0 15,0 22,0c5,0 11,0 15,0c5,0 8.02997,0.48874 12,0c4.09222,-0.50378 8.03067,-0.91232 11,-2c5.05658,-1.85226 7.94342,-2.14774 13,-4c2.96933,-1.08768 6.41208,-1.96854 10,-4c3.69196,-2.09033 5.70547,-5.34619 8,-7c1.814,-1.30746 5.10339,-2.90634 6,-4c2.28589,-2.78833 4.81265,-4.20682 7,-6c2.78833,-2.28589 5.88153,-3.19028 9,-5c1.93399,-1.12234 4.07843,-1.78986 7,-3c2.06586,-0.85571 5.23401,-0.49295 10,-3c3.19098,-1.67856 6.17697,-3.34518 11,-5c4.23007,-1.45139 6.186,-3.69254 8,-5c2.29453,-1.65381 3.70547,-3.34619 6,-5c1.814,-1.30746 4,-3 5,-4c2,-2 4.41885,-3.41885 6,-5c1.58115,-1.58115 3.14682,-3.86325 5,-6c3.276,-3.77728 4.11215,-6.9183 7,-11c2.08246,-2.94336 4.19028,-6.88152 6,-10c1.12231,-1.93399 3.19031,-4.88152 5,-8c1.12231,-1.93399 3.14429,-5.93414 4,-8c1.21014,-2.92157 3.14771,-5.94341 5,-11c1.08771,-2.96933 3.32141,-7.80901 5,-11c2.50708,-4.76599 2.88135,-8.02521 4,-13c0.90454,-4.02266 2,-9 3,-12c1,-3 1.49347,-5.87856 2,-9c0.48053,-2.96126 0,-7 0,-12c0,-3 0.49622,-6.90779 1,-11c0.36658,-2.97752 0,-6 0,-8c0,-3 0,-5 0,-7c0,-3 -0.45953,-6.0535 0,-8c0.51373,-2.17625 1.54047,-4.0535 2,-6c0.51373,-2.17625 1,-3 1,-5c0,-3 1,-5 1,-8c0,-2 0,-4 0,-7c0,-2 -0.54047,-4.0535 -1,-6c-0.51373,-2.17625 -2,-4 -2,-5c0,-2 -1.34619,-2.70546 -3,-5c-1.30743,-1.814 -2.88153,-4.19028 -6,-6c-1.93402,-1.12234 -4.07843,-2.78985 -7,-4c-2.06586,-0.85571 -3.61102,-0.92807 -6,-3c-1.68927,-1.46507 -3.05353,-1.5405 -5,-2c-2.17627,-0.51374 -3,-2 -4,-2c-1,0 -2,0 -4,0c-1,0 -2.02676,-0.22975 -3,0c-2.17624,0.51374 -2.31076,1.53493 -4,3c-2.38895,2.07193 -5,4 -7,6c-3,3 -6,7 -9,12c-3,5 -6.43289,10.80243 -9,17c-2.42029,5.84312 -3,10 -4,15c-1,5 -2.1604,9.96329 -3,14c-1.23862,5.95532 -1.36096,9.14223 -3,15c-1.45105,5.18599 -2.64557,10.01257 -3,15c-0.50125,7.05328 -1.5029,14.01546 -2,22c-0.50098,8.04668 -1,18 -1,26c0,9 1.88177,18.02708 4,27c1.89459,8.02562 4.36078,17.21512 7,24c2.43188,6.25189 4.9776,12.44437 8,18c3.05997,5.62463 7.41156,11.40402 11,16c3.48129,4.45877 7.71411,7.21167 10,10c1.79318,2.18735 5.29871,2.94855 7,4c1.9021,1.17557 4,3 5,4c1,1 2.797,2.2565 4,3c2.69,1.66251 4.3869,2.9176 7,4c1.84778,0.76538 3.82373,2.48627 6,3c0.97327,0.22977 2,0 3,0c2,0 2.81268,-0.20682 5,-2c2.78833,-2.28589 4.32141,-3.80902 6,-7c2.50708,-4.76599 2.69122,-10.07181 4,-15c1.62329,-6.11267 6.15942,-16.31375 11,-28c4.2785,-10.32928 9.29352,-19.88138 12,-27c2.24762,-5.9117 4.37671,-9.88731 6,-16c1.30878,-4.92821 2.88135,-8.02521 4,-13c0.90454,-4.02266 1.09546,-9.97734 2,-14c1.11865,-4.97479 1.60583,-9.01947 2,-13c0.50244,-5.0742 1,-8 1,-11c0,-3 0,-6 0,-10c0,-2 0,-5 0,-8c0,-3 0,-5 0,-7c0,-2 0,-5 0,-7c0,-3 0,-4 0,-6c0,-2 0,-5 0,-7c0,-2 0,-4 0,-6c0,-3 -0.54047,-5.0535 -1,-7c-0.51373,-2.17625 -2,-5 -2,-7c0,-2 -0.14429,-3.93414 -1,-6c-1.21014,-2.92156 -1.14429,-4.93414 -2,-7c-1.21014,-2.92156 -0.08099,-5.107 -1,-9c-0.51373,-2.17625 -2,-5 -3,-7c-1,-2 -1.87769,-6.066 -3,-8c-1.80969,-3.11848 -3.04034,-5.64734 -6,-9c-2.38617,-2.703 -5.4505,-5.45049 -8,-8c-2.5495,-2.54951 -4.4505,-4.45049 -7,-7c-2.5495,-2.54951 -5.59399,-5.51301 -8,-7c-2.69,-1.66251 -5.31,-2.33749 -8,-4c-1.203,-0.7435 -2.82373,-1.48626 -5,-2c-0.97327,-0.22975 -2,-1 -3,-1c-2,0 -3,0 -4,0c-2,0 -5,0 -7,0c-4,0 -7,0 -13,0c-3,0 -7,0 -11,0c-5,0 -8.03873,-0.48055 -11,0c-3.12143,0.50654 -4.54916,2.95517 -8,4c-2.87128,0.86935 -4.93414,1.14429 -7,2c-2.92157,1.21015 -7.02997,0.51127 -11,1c-4.09222,0.50377 -9.93796,1.49829 -16,2c-4.98297,0.4124 -12,1 -19,1c-7,0 -14,0 -22,0c-7,0 -14,0 -19,0c-5,0 -10,0 -16,0c-4,0 -8,0 -11,0c-4,0 -6.92578,0.49755 -12,1c-2.98541,0.29561 -6.92578,0.49755 -12,1c-4.97568,0.49269 -12.01511,-0.42533 -18,0c-7.05328,0.50126 -14.0174,0.44076 -23,1c-8.04669,0.50097 -15.99335,1.05481 -24,2c-8.99294,1.06161 -17.1853,2.36742 -25,5c-7.21725,2.43132 -11.17697,3.34518 -16,5c-2.11504,0.72569 -4,1 -5,1c-3,0 -3.69344,0.4588 -5,1c-0.92387,0.38268 -3.29289,0.29289 -4,1c-0.70711,0.70711 -0.29289,2.29289 -1,3c-0.70711,0.70711 -1,1 -1,2c0,2 0,3 0,4c0,1 -0.29289,2.29289 -1,3c-0.70711,0.70711 -2,1 -4,2c-2,1 -3.07613,1.61732 -4,2c-1.30656,0.5412 -3,2 -4,3c-1,1 -3.69344,2.4588 -5,3c-0.92387,0.38268 -1,1 -3,1l-1,-1l-1,-1l-2,-1";n===!0&&(a.attr("src",s),a[0].oncanplaythrough=a[0].play(),$(".content").addClass("ot-takeover"),$('[data-toggle="ot-takover"]').removeClass("is-active").attr("disabled",!1),$(this).addClass("is-active").attr("disabled",!0),$("body").removeClass().addClass(i),"claire-undy"===i?$("body").append('<div class="undy-pillows-top"></div>'):$(".undy-pillows-top").remove(),$(".convert-to-svg").each(function(t){function a(){n.textPath.stop().animate({startOffset:e},25e4,function(){n.textPath.stop().attr({startOffset:0}),a()})}var s=$(this).text(),o=$(this).attr("class");$(this).replaceWith($('<svg id="converted-'+(t+1)+'" class="converted-to-svg" data-class="'+o+'" viewBox="0 0 1000 200" preserveAspectRatio="xMidYMid meet""></svg>'));var c=new Snap("#converted-"+(t+1)),e=Snap.path.getTotalLength(l),n=c.text(500,250,s).attr({textpath:l,font:"bold 2.25em sans-serif"});a()}),$(".converted-to-svg").css("fill",o))})}function e(){for(var t=[],a=0;a<arguments.length;a++)t[a]=new Image,t[a].src=e.arguments[a]}var n=!1,i=t()?"touchstart":"click";$(document).ready(function(){a(),s(),c()})}(jQuery);