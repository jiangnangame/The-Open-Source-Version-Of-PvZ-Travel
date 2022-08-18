/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oPeashooter,
        oSunFlower,
        oWallNut,
        oPotatoMine,
        oStoneFlower,
        oRadish,
        oSnowPea,
        oRepeater,
        oCherryBomb,
        oTallNut,
        oSunShroom,
        oPuffShroom,
        oScaredyShroom,
        oFumeShroom,
        oSporeShroom,
        oBambooUncle,
        oDoomShroom,
        oBegonia,
        oPepper,
        oIceAloe,
        oImitater,
        oMonotropa,
        oSpikeweed,
        oTorchwood,
        oKiwibeast,
        oMiracleImitater,
        oJalapeno
    ],
    'ZName': [
        oZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oNewspaperZombie,
        oSkatingZombie,
        oCaskZombie,
        oMakeRifterZombie,
        oZomboni
    ],
    'LevelName': $__language_Array__['3e31d3f38e07ba8026b76733c5d8c5d9'],
    'LoadMusic': 'Bgm_Polar_4_NPC',
    'AudioArr': [
        'Bgm_Polar_24_NPC_1',
        'Bgm_Polar_24_NPC_2'
    ],
    'DKind': 0x0,
    'StartGame': a => oMiniGames['ProtectPlants']({ 'oObstacle2': 0x5 }),
    'LoadAccess'(a) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll), (NewEle('PolarFire2', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')));
        for (let b = 0x2, c; b < 0x9; b++) {
            if (b !== 0x5) {
                c = b % 0x2 !== 0x0 ? 0x2 : 0x1;
                for (; c < 0x6; c += 0x2)
                    CustomSpecial(oRifter, c, b);
            }
        }
        NewEle(0x0, 'div', 'left:135px;', { 'className': 'Mould' }, FightingScene), NewEle(0x0, 'div', 'left:785px;', { 'className': 'Mould' }, FightingScene), NewEle(0x0, 'div', 'left:455px;', { 'className': 'FlowerBed' }, FightingScene);
        for (let d = 0x1; d < 0x6; d++) {
            CustomSpecial(oObstacle, d, 0x1), CustomSpecial(oObstacle, d, 0x9), CustomSpecial(oObstacle2, d, 0x5);
        }
        ;
        {
            let e = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#000;opacity:0;', 0x0, EDAll), f = 0x0, g = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), h = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function i() {
                g['onclick'] = i;
                switch (f) {
                case 0x0:
                    h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(g, $__language_Array__['164376d922e47648b9b11543f4746bdf']), f++;
                    break;
                case 0x1:
                    h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['85bb0392620697db9c1df14710799c62']), f++;
                    break;
                case 0x2:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['db68e24ff58255917d97b3c799c0885e']), f++;
                    break;
                case 0x3:
                    h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(g, $__language_Array__['013c94a254870623aeb397b683d4d7c0']), f++;
                    break;
                case 0x4:
                    h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['489320dbbd6fb5767066dd438aee6db9']), f++;
                    break;
                case 0x5:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['79a14376d2785e5f4323b847c021aca4']), f++;
                    break;
                case 0x6:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['23788de316a06c96ed66504f713cc8db']), f++;
                    break;
                case 0x7:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['a10e0eefb432d6d9f1a81caaaaee1316']), f++;
                    break;
                case 0x8:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['8c5930f9124f57e1947105004e6471fa']), f++;
                    break;
                case 0x9:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['bdd68f845dc63bc722ce1f5e761dd4d7']), f++;
                    break;
                case 0xa:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['c27ef77b6bbe666bd6fdcc284380eb8f']), f++;
                    break;
                case 0xb:
                    h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(g, '……\x20'), f++;
                    break;
                case 0xc:
                    h['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), StopMusic(), PlayMusic(oS['LoadMusic'] = 'Bgm_Polar_24_NPC_1'), innerText(g, $__language_Array__['2f607adf997eedbf8a43cb546b16e62b']), f++;
                    break;
                case 0xd:
                    h['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(g, $__language_Array__['c93b9dc2b74f08ea69c01bbb1d19f70c']), f++;
                    break;
                case 0xe:
                    g['onclick'] = null, h['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['c4bef01067a9b5eb9fc22b05dd0df3de']), oEffects['fadeIn'](e, 'slow', () => g['onclick'] = i), oEffects['Animate'](g, { 'color': 'white' }, 0x1), oEffects['Animate'](h, { 'opacity': '0' }, 0x1), f++;
                    break;
                case 0xf:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['01367385e73f7c164a7f6c17a12c8245']), f++;
                    break;
                case 0x10:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['cae24cd0da7b5965dfead637b06d38f7']), f++;
                    break;
                case 0x11:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(g, $__language_Array__['b03ed679024dcf48d470b1137c28c004']), f++;
                    break;
                case 0x12:
                    ClearChild(g, h), oEffects['fadeOut'](e, 'slow', j => {
                        ClearChild(j), a();
                    });
                }
            }());
        }
        ;
    }
}, {
    'AZ': [
        [
            oZombie,
            0x2,
            0x2,
            [
                0x2,
                0x3
            ]
        ],
        [
            oConeheadZombie,
            0x1,
            0x4,
            [
                0x4,
                0x5
            ]
        ],
        [
            oBucketheadZombie,
            0x1,
            0x6,
            [
                0x6,
                0x7
            ]
        ],
        [
            oNewspaperZombie,
            0x1,
            0x7,
            [0x7]
        ],
        [
            oSkatingZombie,
            0x2,
            0x1,
            [
                0x1,
                0x8
            ]
        ],
        [
            oCaskZombie,
            0x1,
            0x9,
            [0x9]
        ],
        [
            oMakeRifterZombie,
            0x2,
            0xa,
            [
                0xa,
                0xf,
                0x14
            ]
        ],
        [
            oZomboni,
            0x2,
            0xa,
            [
                0xa,
                0xf,
                0x14
            ]
        ]
    ],
    'FlagNum': 0x14,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x2,
            0x4,
            0x6,
            0x7,
            0x9,
            0xa,
            0xd,
            0xf,
            0x11,
            0x13,
            0x14
        ],
        'a2': [
            0x1,
            0x1,
            0x3,
            0x5,
            0xa,
            0xf,
            0x1e,
            0x23,
            0x32,
            0x28,
            0x2d,
            0x46
        ]
    },
    'FlagToEnd'() {
        PlayMusic(oS['StartGameMusic'] = 'Bgm_Polar_24_NPC_2');
        const a = NewEle('Dom_' + Math['random'](), 'div', 'position:absolute;z-index:257;height:600px;width:900px;left:115px;', { 'className': 'LvlUI_Industry20Div' }, EDAll);
        let b = NewEle('', 'div', 'position:absolute;left:0;top:0;height:600px;width:900px;background:black;', {}, a), c = NewEle('PHONE_' + Math['random'](), 'div', 'opacity:0;background:white;background:url(images/Props/Industry20/phone.webp);background-size:\x20cover;background-position:\x20center\x200;position:absolute;width:250px;left:325px;height:550px;top:25px;border:0px\x20solid\x20red;z-index:257;text-align:center;display:inline-block;', 0x0, a), d = NewEle('', 'div', 'background:white;position:absolute;top:50px;left:0;width:100%;margin:0;padding:0;width:250px;height:55px;box-shadow:0px\x201px\x205px\x20rgba(0,0,0,0.4);', {}, c), e = NewEle('SEARCH_' + Math['random'](), 'input', 'font-size:0.7em;border-radius:\x205px\x200px\x200px\x205px;\x20text-align:\x20left;\x20height:\x2030px;\x20position:\x20absolute;\x20width:\x20140px;\x20left:\x2015px;\x20top:\x2060px;\x20border:\x201px\x20solid\x20black;\x20display:\x20inline-block;padding-left:5px;padding-right:30px;', {
                'readonly': 'readonly',
                'placeholder': $__language_Array__['047f84c43b84288a20d8c3448f4c150e'],
                'className': EBody['className'] + '\x20LvlUI_Industry20Div',
                'onfocus': function () {
                    e['blur']();
                },
                'onmousedown': function (p) {
                    p['preventDefault']();
                }
            }, c), f = ![], g = NewEle('SEARCH_' + Math['random'](), 'div', 'font-size:0.7em;line-height:32px;border-radius:\x200px\x205px\x205px\x200px;\x20transition:\x20background\x200.1s\x20ease\x200s,color\x200.1s;\x20position:\x20absolute;\x20background:\x20black;\x20color:\x20white;\x20left:\x20190px;\x20border:\x201px\x20solid\x20black;\x20width:\x2040px;\x20height:\x2032px;\x20top:\x2060px;', {
                'onclick': p => {
                    search(0x1);
                },
                'innerText': $__language_Array__['3b2a78264567a4c1e213b48b6970505c'],
                'className': 'LvlUI_Industry20Div',
                'onmouseover': p => {
                    g['style']['background'] = 'white', g['style']['color'] = 'black';
                },
                'onmouseout': p => {
                    g['style']['background'] = 'black', g['style']['color'] = 'white';
                }
            }, c), h = NewEle('SEARCH_' + Math['random'](), 'div', 'position:\x20absolute;\x20border-radius:\x2025%;\x20left:\x2093px;outline:none;\x20border:\x200px\x20solid\x20red;\x20width:\x2060px;\x20height:\x2018px;\x20bottom:\x2018px;', {
                'onclick': p => {
                    phonePopUp(0x0), i['innerHTML'] = '';
                },
                'onmousedown'() {
                    this['style']['backgroundColor'] = 'rgba(0,0,0,0.2)';
                },
                'onmouseup'() {
                    this['style']['backgroundColor'] = '';
                },
                'onmouseout'() {
                    this['style']['backgroundColor'] = '';
                }
            }, c), i = NewEle('MAIN_' + Math['random'](), 'div', 'overflow:\x20auto;\x20height:\x20380px;\x20padding:\x200px;\x20text-align:\x20left;\x20position:\x20absolute;\x20width:\x20235px;\x20left:\x2010px;\x20top:\x20110px;\x20border:\x200px\x20solid\x20red;\x20display:\x20inline-block;', { 'className': 'NoBar\x20a4pxBar' }, c);
        function j(p, q, r, s = ![], t = '') {
            NewEle('', 'h3', 'position:\x20relative;padding:5px;margin:0;', {
                'innerText': p,
                'className': 'LvlUI_Industry20Div'
            }, i), NewEle('', 'span', 'position:\x20relative;padding-left:5px;\x20color:\x20gray;font-size:12px;display:inline-block;line-height:20px;', {
                'innerText': q,
                'className': 'LvlUI_Industry20Div\x20LvlUI_Industry20SmallText'
            }, i), NewEle('', 'hr', 'position:\x20relative;\x20margin:\x202px\x20auto;\x20border:\x200px;\x20height:\x201px;\x20background-image:\x20linear-gradient(to\x20right,\x20rgba(128,\x20128,\x20128,\x200.5),\x20rgba(128,\x20128,\x20128,\x200.5),\x20rgba(0,\x200,\x200,\x200));', {}, i), s ? NewEle('', 'span', 'position:\x20relative;\x20font-size:\x2015px;\x20padding:\x205px;\x20margin:\x202px;display:inline-block;' + t, {
                'innerHTML': r,
                'className': 'LvlUI_Industry20Div\x20LvlUI_Industry20Content'
            }, i) : NewEle('', 'span', 'position:\x20relative;\x20font-size:\x2015px;\x20padding:\x205px;\x20margin:\x202px;display:inline-block;' + t, {
                'innerText': r,
                'className': 'LvlUI_Industry20Div\x20LvlUI_Industry20Content'
            }, i);
        }
        function k(p, q, r = 0.5) {
            let s = p['scrollTop'], u = q - s, v = A => {
                    return (Math['sin'](A * Math['PI'] - Math['PI'] / 0x2) + 0x1) / 0x2;
                }, w = 0x0, x = 0xf, z = 0x1 / (r / (x / 0x3e8));
            (function A() {
                w = Math['min'](w, 0x1), w < 0x1 && (i['scrollTop'] = v(w) * u + s, w += z, setTimeout(A, x));
            }());
        }
        function l(p, q = 0x64) {
            return new Promise((r, s) => {
                setTimeout(() => {
                    p(r);
                }, q);
            });
        }
        function m() {
            let p = 0x1, q = 0x0;
            for (let r = 0x0; r < 0x5; r++) {
                setTimeout(() => {
                    c['style']['opacity'] = p ^= 0x1;
                }, q += Math['random']() * 0xc8);
            }
        }
        async function n() {
            let p = [];
            await NewScript('jng_script_longString', './modal/Level/Leo_Article_Long_String.js'), window['__$jsonPFunc__'](p), delete window['__$jsonPFunc__'], await l(q => {
                c['style']['opacity'] = 0x1, c['style']['transform'] = 'scale(0.5)', q();
            }), await l(q => {
                i['innerHTML'] = '', j($__language_Array__['c379aa0add286a18685b2fca756c8f76'], $__language_Array__['cc140fc7757ae838c3be34034ea51e01'], p[0x0]), setTimeout(() => {
                    k(i, i['scrollHeight'], 0x1);
                }, 0x3e8), setTimeout(m, 0x9c4), setTimeout(q, 0xbb8);
            }), await l(q => {
                c['style']['transform'] = 'scale(1)', c['style']['opacity'] = 0x1, q();
            }, 0x1f4), await l(q => {
                i['innerHTML'] = '', j($__language_Array__['d5ec589db84beba63c9f5655372310b7'], $__language_Array__['a7bb16d80abf2f604859aa8639656f89'], p[0x1], !![]), i['scrollTop'] = 0x0, setTimeout(() => {
                    i['scrollTop'] = 0x0;
                }, 0x64), setTimeout(function () {
                    k(i, i['scrollHeight'], 0x4);
                }, 0x384), setTimeout(m, 0x1194), setTimeout(q, 0x1388);
            }), await l(q => {
                c['style']['transform'] = 'scale(1.5)', c['style']['opacity'] = 0x1, q();
            }, 0x1f4), await l(q => {
                i['innerHTML'] = '', j($__language_Array__['e6efd7b4007ebc277c21347eceeacbc4'], '2016-03-23\x2023:22:22', p[0x2]), i['scrollTop'] = 0x0, setTimeout(() => {
                    i['scrollTop'] = 0x0;
                }, 0x64), setTimeout(() => {
                    i['scrollTop'] = 0x0, k(i, i['scrollHeight'], 0x5), setTimeout(() => {
                        k(i, 0x1, 0.1);
                    }, 0x157d), setTimeout(m, 0x1770), setTimeout(q, 0x1964);
                }, 0x3e8);
            }), await l(q => {
                c['style']['opacity'] = 0x1, c['style']['transform'] = 'scale(1.9)', q();
            }, 0x1f4), await l(q => {
                c['style']['opacity'] = 0x0, q();
            }, 0x7d0), await l(q => {
                ClearChild(a), o(), q();
            }, 0x1f4);
        }
        n();
        function o() {
            let p = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;left:115px;width:900px;height:600px;background:black;opacity:1;', 0x0, EDAll);
            p['parentNode']['insertBefore'](p, $('DivA'));
            function q(u, v = 0x14, w = !![], x = '', y = 0x230) {
                let z = {
                    'text': u,
                    'font_size': v,
                    'str': w,
                    'font_family': x,
                    'align_center': ![],
                    'width': y
                };
                return oEffects['TextEffects']['ShakeText'](z);
            }
            function r() {
                setTimeout(oS['DefaultFlagToEnd'], 0x3e8);
            }
            let s = NewEle('daveName', 'div', 'pointer-events:\x20none;\x20word-break:\x20break-all;\x20z-index:\x20330;\x20color:\x20white;\x20font-size:\x2020px;\x20position:\x20absolute;padding-left:20px;\x20bottom:\x20230px;\x20left:\x20265px;\x20height:\x2025px;\x20width:\x20600px;', 0x0, EDAll);
            s['innerText'] = $__language_Array__['363d097112a6150267896acde7df3a67'], t();
            function t() {
                let u = NewEle('talk' + Math['random'](), 'div', 'z-index:300;color:white;font-size:20px;position:absolute;padding-top:40px;bottom:0;left:265px;height:220px;width:600px;border:5px\x200\x200\x200;background:rgba(30,30,30,0.5);', 0x0, EDAll), v = NewEle('talk' + Math['random'](), 'div', 'cursor:pointer;word-break:break-all;z-index:300;padding:0;color:white;font-size:20px;position:absolute;top:30px;left:20px;height:200px;width:560px;', 0x0, u), w = [
                        [
                            $__language_Array__['9a9aac042e93500906d753a2994843e8'],
                            0x14
                        ],
                        [
                            $__language_Array__['b5b444bd1175f47726f710837beb04df'],
                            0x14
                        ],
                        [
                            $__language_Array__['66271166f8fe9f0458f3c5342eb514a6'],
                            0x14,
                            0xa
                        ],
                        [
                            $__language_Array__['f9dac02e2981b15f223195c7b44c9fc5'],
                            0x14,
                            0x14
                        ],
                        [
                            $__language_Array__['688078e5ebcd51186f6401801c03b661'],
                            0x14
                        ],
                        [
                            '……',
                            0x14
                        ],
                        [
                            $__language_Array__['7fc43dd352d7f0d012665188f50617b4'],
                            0x14
                        ],
                        [
                            $__language_Array__['7fc43dd352d7f0d012665188f50617b4'],
                            0x14
                        ],
                        [
                            q($__language_Array__['998d182afd7367bd396413cf1b5767ed'], 0x18, ![]),
                            0x18
                        ],
                        [
                            q($__language_Array__['ff248d8e5cb1feb43d391266f4b17dce'], 0x18, ![]),
                            0x18
                        ],
                        [
                            q($__language_Array__['3361953c6852a16b4316b3f990015af3'], 0x18, ![]),
                            0x18
                        ],
                        [
                            q($__language_Array__['ed69f027aa4bb2832dd715b387182172'], 0x10, ![]),
                            0x10
                        ],
                        [
                            q('……', 0x14, ![]),
                            0x14
                        ],
                        [
                            q($__language_Array__['04c5bf1412d329c7637ebae018253afc'], 0x10, ![]),
                            0x10
                        ]
                    ], x = -0x1, y = 0x32, z = {
                        '，': 0xc8,
                        '…': 0x12c
                    }, A = ![];
                v['onclick'] = function () {
                    var B;
                    if (x >= 0x0 && v['innerHTML']['length'] < w[x][0x0]['length']) {
                        let G = w[x][0x0]['split']($__language_Array__['c99637b6ce5d8c46f302d24302b0f2c7']);
                        v['innerHTML'] = G[G['length'] - 0x1] + '\x20', A = !![];
                        return;
                    }
                    A = ![], x++;
                    if (x >= w['length']) {
                        ClearChild(u, s), r();
                        return;
                    }
                    y = (B = w[x][0x2]) !== null && B !== void 0x0 ? B : 0x32, v['innerHTML'] = '', v['style']['fontSize'] = w[x][0x1] + 'px';
                    let C = w[x][0x0], D = C instanceof Array ? C : C['split'](''), E = 0x0, F = x;
                    setTimeout(function H() {
                        if (x != F || E >= D['length'] || A) {
                            E >= D['length'] && !A && setTimeout(I => {
                                x == F && !A && (A = !![], v['innerHTML'] += '\x20');
                            }, 0xc8);
                            return;
                        }
                        v['innerHTML'] += D[E++], setTimeout(H, z[D[E - 0x1]] ? z[D[E - 0x1]] : y);
                    }, y);
                }, v['click']();
            }
        }
    }
});