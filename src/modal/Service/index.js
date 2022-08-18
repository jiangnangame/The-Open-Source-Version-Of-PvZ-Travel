/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    Mobile && ($('quickKeyTextShovel')['style']['display'] = 'none'), oS['Init']({
        'PicArr': [
            'images/interface/Logo.webp',
            'images/interface/Surface.webp',
            'images/interface/Surface.webp',
            'images/Plants/IceAloe/IceAloe.webp',
            'images/Plants/WallNut/WallNut.webp',
            'images/Plants/SunFlower/idle.webp',
            'images/Plants/SunShroom/SunShroom.webp'
        ],
        'LoadMusic': 'logo',
        'backgroundImage': 'images/interface/Logo.webp',
        'LoadAccess'() {
            if (!oS['warmStart']) {
                EDAll['innerHTML'] += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22startGame\x22\x20onclick=\x22PlayAudio(\x27pause\x27);SetBlock($(\x27dSurface\x27));\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22userButton\x22\x20class=\x22voidButton\x20jngButton\x22\x20onclick=\x22\x22>' + oButtons['GetName']('user') + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22languageButton\x22\x20class=\x22voidButton\x20jngButton\x22\x20onclick=\x22\x22>' + $__language_Array__['d292663d214af95b390e5dca0fa01ab9'] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
                {
                    let h = $('userButton');
                    SetStyle(h, {
                        'position': 'absolute',
                        'width': '63px',
                        'height': '46px',
                        'left': 0xd2 + 418.5 + 'px',
                        'top': '521.5px',
                        'cursor': 'pointer',
                        'backgroundSize': '63px\x2046px',
                        'backgroundImage': 'url(./images/interface/smallButton.png)'
                    }), h['innerHTML'] = '<img\x20src=\x22./images/interface/NationFlags/user.png\x22\x20height=\x2235\x22\x20style=\x22position:relative;left:1px;top:5px;\x22/>', h['onclick'] = DataManager['LoginTip'];
                }
                ;
                {
                    let j = $('languageButton');
                    SetStyle(j, {
                        'position': 'absolute',
                        'width': '63px',
                        'height': '46px',
                        'left': -0xd2 + 418.5 + 'px',
                        'top': '521.5px',
                        'cursor': 'pointer',
                        'backgroundSize': '63px\x2046px',
                        'backgroundImage': 'url(./images/interface/smallButton.png)'
                    });
                    let k = './images/interface/NationFlags/', l = [
                            {
                                'icon': k + 'china.png',
                                'value': 'zh-cn',
                                'text': $__language_Array__['b8555c6ee61705540102fe3427b87d1f']
                            },
                            {
                                'icon': k + 'america.png',
                                'value': 'en-us',
                                'text': 'English'
                            }
                        ];
                    for (let m = l['length'] - 0x1; m >= 0x0; m--) {
                        var a;
                        if (((a = localStorage['JNG_TR_USER_LANGUAGE']) !== null && a !== void 0x0 ? a : 'zh-cn')['includes'](l[m]['value']) || m == 0x0) {
                            j['innerHTML'] = '<img\x20src=\x22' + l[m]['icon'] + '\x22\x20height=\x2235\x22\x20style=\x22position:relative;left:0px;top:4px;\x22/>', localStorage['JNG_TR_USER_LANGUAGE'] = l[m]['value'];
                            break;
                        }
                    }
                    j['onclick'] = () => {
                        for (let p = 0x0; p < l['length']; p++) {
                            var o;
                            if (l[p]['value'] === ((o = localStorage['JNG_TR_USER_LANGUAGE']) !== null && o !== void 0x0 ? o : 'zh-cn')) {
                                localStorage['JNG_TR_USER_LANGUAGE'] = l[(p + 0x1) % l['length']]['value'], location['reload']();
                                return;
                            }
                        }
                    };
                }
                var b = 'images/interface/';
                loadRes({
                    'js': [],
                    'css': [
                        'css/effect.css',
                        'css/publicBase64.css'
                    ],
                    'img': [
                        b + 'GetNewPlantPanel.webp',
                        b + 'PublicBg.webp',
                        b + 'left.gif',
                        b + 'down.gif',
                        b + 'GrowSoil.gif',
                        b + 'LawnCleaner.png',
                        b + 'Shovel.png',
                        b + 'sun2.png',
                        b + 'Topbar.webp',
                        b + 'PreviewMap.webp',
                        b + 'Dave.png',
                        b + 'ConveyorBelt.webp',
                        b + 'Black_Dave.png',
                        b + 'Clearance_reward.png',
                        b + 'Map_Turn.webp',
                        b + 'Fuben1.png',
                        b + 'map.webp',
                        b + 'panel.webp',
                        b + 'Speed_Adjust.png',
                        b + 'GameOver.png',
                        b + 'Black_Dave.png',
                        b + 'Dave.png',
                        b + 'Zomboss.png',
                        b + 'Almanac.webp',
                        b + 'Notice.webp',
                        'images/Zombies/buff_freeze.png'
                    ],
                    'au': [
                        'bottom',
                        'buzzer',
                        'click3',
                        'Close',
                        'crazydavelong1',
                        'crazydavelong2',
                        'crazydavelong3',
                        'crazydaveshort1',
                        'pause',
                        'plant1',
                        'plant2',
                        'plantsgarden',
                        'points',
                        'readysetplant',
                        'scream',
                        'seedlift',
                        'shovel',
                        'UnlockLimit',
                        'winmusic'
                    ]
                }), localStorage['JNG_DEV'] === 'true' ? ClearChild($('status')) : setTimeout(()=>{oEffects['fadeOut']($('status'), 1.5, ClearChild)},!localStorage.JNG_TR_VISITED?(localStorage.JNG_TR_VISITED=1,2000):0), oS['warmStart'] = 0x1;
                localStorage['JNG_TR_BIGCURSOR'] === undefined && (localStorage['JNG_TR_BIGCURSOR'] = 0x1);
                Number(localStorage['JNG_TR_BIGCURSOR']) && CheckCursor();
                let c = 0x0, d = 0x0, e = 'IAMAFUCKINGDEVELOPER', f = Math['random']() + '__test_DIV__', g = NewEle(f, 'div', 'position:absolute;left:0;bottom:0;width:50px;height:50px;', {
                        'onclick'() {
                            c >= 0xf && (ClearChild(this), NewEle('', 'script', '', { 'src': '' }, document['body']));
                            c++;
                            let o = c;
                            setTimeout(function () {
                                o == c && (c = 0x0);
                            }, 0x12c), g['focus']();
                        }
                    }, EDAll);
                document['body']['addEventListener']('mousemove', o => {
                    $User['clientX'] = o['clientX'] - EDAlloffsetLeft, $User['clientY'] = o['clientY'];
                }), addEventListener('jng-event-endgame', o => {
                    WIN['IsGaming'] = () => ![];
                }), oPropSym['Init']();
            }
        }
    });
}
;