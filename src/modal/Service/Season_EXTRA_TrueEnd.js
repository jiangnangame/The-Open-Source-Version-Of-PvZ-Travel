/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    function showTxt(a, b, c) {
        oEffects['Animate'](a, {
            'opacity': '0',
            'transform': 'scale(1.15)'
        }, 0x1, ![], d => {
            oSym['addTask'](0x1, e => {
                b ? (a['style']['transform'] = 'scale(0.85)', a['innerText'] = b, oEffects['Animate'](a, {
                    'opacity': '0.8',
                    'transform': 'scale(1)'
                }, 0x1)) : (a['style']['transform'] = 'scale(1)', a['style']['opacity'] = '0.8', a['innerText'] = ''), c && (a['style']['color'] = c);
            });
        });
    }
    function changeBG(a, b) {
        oEffects['Animate'](a, { 'filter': 'brightness(1000%)' }, 0x1, ![], c => {
            oSym['addTask'](0x1, d => {
                a['style']['backgroundImage'] = 'url(\x27images/interface/Fuben_Win_' + b + '.webp\x27)', oEffects['Animate'](a, { 'filter': 'brightness(100%)' }, 0x1);
            });
        });
    }
    oS['Init']({
        'PicArr': [
            RESPATH + 'ForestSelection1.webp',
            RESPATH + 'ForestSelection2.webp'
        ],
        'LoadMusic': 'SeasonEXTRA/MemoryBGM',
        'backgroundImage': 'images/interface/Fuben_Win_Spring.webp',
        'PicArr': [
            'images/interface/Fuben_Win_Spring.webp',
            'images/interface/Fuben_Win_Summer.webp',
            'images/interface/Fuben_Win_Autumn.webp',
            'images/interface/Fuben_Win_Winter.webp'
        ],
        'LoadAccess'() {
            let a = oSym['NowSpeed'];
            CSpeed(0x1);
            let b = NewEle('wumaoTexiao' + Math['random'](), 'div', 'position:absolute;z-index:21;left:-200px;width:1500px;height:600px;background:#000;opacity:1;', 0x0, EDPZ), c = NewEle('txt' + Math['random'](), 'div', 'position:absolute;z-index:22;line-height:550px;width:900px;height:600px;color:#000;font-size:2em;text-align:center;font-family:\x27Microsoft\x20YaHei\x27;', ![], $('dAll'));
            oEffects['Animate'](b, {
                'opacity': '0.5',
                'background': '#FFF'
            }, 0x3, ![], d);
            function d() {
                oSym['addTask'](0x0, function g() {
                    oEffects['Animate'](b, { 'opacity': '0.2' }, 0x5, ![], h => {
                        oSym['addTask'](0x1, i => {
                            oEffects['Animate'](h, { 'opacity': '0.5' }, 0x5);
                        });
                    }), oSym['addTask'](0x3e9, g);
                }), showTxt(c, $__language_Array__['7c4c4c5e56d10b3e0e3a07c785d418bb']), oSym['addTask'](0xf1, h => {
                    showTxt(c, $__language_Array__['00dd2222f41b1d03a6617e4f94917ac4']);
                }), oSym['addTask'](0x1f6, h => {
                    showTxt(c, $__language_Array__['9d29ddb25c9a4b000f8eff73aec3bdaf']);
                }), oSym['addTask'](0x323, h => {
                    showTxt(c, $__language_Array__['6bc3bb6a24828407e9af8f2ee7d6257a']);
                }), oSym['addTask'](0x450, h => {
                    showTxt(c, $__language_Array__['d9c58b64a7bf46b00cddae199c9e23d9']);
                }), oSym['addTask'](0x57d, h => {
                    showTxt(c, $__language_Array__['379d55507f0f002ade53646a29bfcb74']);
                }), oSym['addTask'](0x6ab, h => {
                    showTxt(c), changeBG($('tGround'), 'Summer'), oSym['addTask'](0xc8, i => {
                        let j = 0x0, k = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), l = NewImg('dDave', '', 'left:0;top:81px', EDAll);
                        (function m() {
                            k['onclick'] = m;
                            switch (j) {
                            case 0x0:
                                l['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(k, $__language_Array__['186d6a0431b7ba66df3cef42168cc3b9']), j++;
                                break;
                            case 0x1:
                                l['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(k, $__language_Array__['b0fbb2f33f3f1cda2c86c6d5fca1a054']), j++;
                                break;
                            case 0x2:
                                l['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(k, $__language_Array__['c577d88a6e9d3a366450b97473324ded']), j++;
                                break;
                            case 0x3:
                                l['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(k, $__language_Array__['06e55d047bbb8db91da5a0462859b9ae']), j++;
                                break;
                            case 0x4:
                                l['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(k, $__language_Array__['3b5ab01b378c30fe87d1b2ab0685bb9a']), j++;
                                break;
                            case 0x5:
                                l['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(k, $__language_Array__['77f2d297ed8da388cfbeaec696406eb0']), j++;
                                break;
                            case 0x6:
                                l['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(k, $__language_Array__['7fbf586d4dda3672acd2a15e20501d63']), j++;
                                break;
                            case 0x7:
                                ClearChild(k, l), e();
                            }
                        }());
                    });
                });
            }
            function e() {
                showTxt(c, $__language_Array__['3b54d23e48cb4885090a0b8f0f22c4af'], '#FFF'), oSym['addTask'](0x15e, g => {
                    showTxt(c, $__language_Array__['69f72bc50e7a18bf3c6dd615b11f30c4']);
                }), oSym['addTask'](0x2bc, g => {
                    showTxt(c, $__language_Array__['13d41d4db444757b80a8c73136475322']);
                }), oSym['addTask'](0x3e8, g => {
                    showTxt(c, $__language_Array__['5c399c2d02fa020d2e3a1df40f430453']);
                }), oSym['addTask'](0x546, g => {
                    showTxt(c, 'And\x20You');
                }), oSym['addTask'](0x6a4, g => {
                    f();
                }), changeBG($('tGround'), 'Autumn');
            }
            function f() {
                showTxt(c), NewImg('imgSF', 'images/interface/Clearance_reward.png', 'left:260px;top:233px', EDAll, {
                    'onclick': function () {
                        oEffects['Animate'](b, { 'opacity': '1' }, 0x3, ![], g => {
                            CSpeed(a), SelectModal('Fuben_Winter_SelectionMap', 'SelectionMap');
                        });
                    }
                }), changeBG($('tGround'), 'Winter');
            }
        }
    });
}