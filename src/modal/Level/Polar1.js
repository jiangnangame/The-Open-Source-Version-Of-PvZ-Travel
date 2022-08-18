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
        oDoomShroom
    ],
    'ZName': [
        oZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oStrollZombie,
        oCigarZombie
    ],
    'PicArr': ['images/interface/Polar.webp'],
    'backgroundImage': 'images/interface/Polar.webp',
    'LevelName': $__language_Array__['21b68119ef96d8abe229d915bf49a0a9'],
    'LoadAccess': function (a) {
        PlayAudio('Bgm_Polar_Noise', 0x1);
        {
            let g = localStorage['getJsonItem']('JNG_TR_WON', 'Polar1');
            !g ? b() : d();
        }
        ;
        function b() {
            let h = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:0;width:900px;height:600px;background:url(images/interface/Marsh.webp);opacity:1;', 0x0, EDAll), j = ![];
            {
                const r = oZ['traversalOf'], s = oBu['traversalOf']['bind'](oBu);
                (function t() {
                    oZ['traversalOf'](), !j && oSym['addTask'](0xa, t);
                }(), function u() {
                    s(), !j && oSym['addTask'](0x1, u);
                }());
            }
            oS['isStartGame'] = 0x1;
            let k = oP['MonPrgs'];
            oP['MonPrgs'] = v => {
            };
            function l() {
                for (let v of $Z) {
                    v['DisappearDie']();
                }
            }
            for (let v = 0x1; v <= 0x5; v++) {
                let w = CustomSpecial(oSunShroom, v, 0x2);
                w['ProduceSun'] = () => {
                }, w = CustomSpecial(oSunShroom, v, 0x1), w['ProduceSun'] = () => {
                }, CustomSpecial(oScaredyShroom, v, 0x3), CustomSpecial(oFumeShroom, v, 0x4), w = CustomSpecial(oWallNut, v, 0x5), w['HP'] = Infinity;
            }
            oS['isStartGame'] = 0x0;
            let m = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:1;', 0x0, EDAll), n = 0x0, o = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), q = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function x() {
                o['onclick'] = x;
                switch (n) {
                case 0x0:
                    q['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(o, $__language_Array__['f61ef6da5f32864c6480e071ce1ca37d']), n++;
                    break;
                case 0x1:
                    q['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(o, $__language_Array__['7f25d271e013114f672ad393488ecdf1']), n++;
                    break;
                case 0x2:
                    q['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(o, $__language_Array__['6471f7fbb543c3d9945b2e202c75310b']), n++;
                    break;
                case 0x3:
                    PlayAudio('Zomboss2'), o['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': 'O——O——C——',
                        'font_size': 0x12
                    })[0x0] + '</p>', n++;
                    break;
                case 0x4:
                    PlayAudio('Zomboss3'), innerText(o, $__language_Array__['5831a1aca63dedf8db99595f43c8e412']), n++;
                    break;
                case 0x5:
                    q['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(o, $__language_Array__['44c17e79f23af1303273ac110a27b406']), n++;
                    break;
                case 0x6:
                    q['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(o, $__language_Array__['8d5ea94ec297006afb41f306fd5d27e7']), n++;
                    break;
                case 0x7: {
                        oSym['NowSpeed'] != 0x1 && CSpeed(0x1);
                        o['onclick'] = null, q['style']['opacity'] = o['style']['opacity'] = 0x0;
                        let z = PlayAudio;
                        PlayAudio = () => {
                        };
                        for (let B = 0x0; B < 0x14; B++) {
                            let C = PlaceZombie([
                                    oZombie,
                                    oConeheadZombie,
                                    oBucketheadZombie,
                                    oFootballZombie,
                                    oImp
                                ]['random'](), [
                                    0x1,
                                    0x2,
                                    0x3,
                                    0x4,
                                    0x5
                                ]['random'](), [
                                    0x6,
                                    0x7,
                                    0x8,
                                    0x9
                                ]['random'](), 0x0), D = C['Speed'];
                            C['Speed'] += Math['random']() * 0x28, oSym['addTask'](0x3, () => {
                                C['Speed'] = D;
                            });
                        }
                        oEffects['Animate'](m, { 'background': 'rgba(0,0,0,0.6)' }, 'slow', 'linear', E => {
                            let F = NewEle('', 'div', 'position:\x20absolute;opacity:0;z-index:299;\x20left:\x200px;\x20top:\x20288px;\x20line-height:\x2024px;\x20font-size:\x2024px;\x20width:\x20900px;\x20height:\x2024px;\x20text-align:\x20center;color:white;', {}, EDAll), G = [$__language_Array__['bf05c04aaaea11f805dcd9b9e114af84']];
                            for (let H = 0x0; H < G['length']; H++) {
                                oSym['addTask'](0x1f4 * H, () => {
                                    F['innerText'] = G[H], oEffects['Animate'](F, { 'opacity': 0x1 }, 0x1), oSym['addTask'](0x18f, () => {
                                        oEffects['Animate'](F, { 'opacity': 0x0 }, 0x1);
                                    });
                                });
                            }
                            oSym['addTask'](G['length'] * 0x1f4, () => {
                                ClearChild(F);
                            });
                        });
                        let A = ![];
                        oSym['addTask'](0x12c, function E() {
                            oSym['addTask'](0x32 * Math['random'](), () => {
                                !A && PlaceZombie([
                                    oZombie,
                                    oZombie,
                                    oImp,
                                    oZombie,
                                    oImp,
                                    oConeheadZombie,
                                    oConeheadZombie,
                                    oBucketheadZombie,
                                    oImp
                                ]['random'](), [
                                    0x1,
                                    0x2,
                                    0x3,
                                    0x4,
                                    0x5
                                ]['random'](), 0xb, 0x0);
                            }), !A && oSym['addTask'](0x5a * Math['random']() + 0x82, E);
                        }), oSym['addTask'](0x1f4, () => {
                            A = !![], l(), PlayAudio = z, o['onclick'] = x, q['style']['opacity'] = o['style']['opacity'] = '', oEffects['ScreenShake'](), m['style']['background'] = 'white', q['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(o, $__language_Array__['b2edcc3f94ed2629f500aa4ded44d720']), n++;
                        });
                    }
                    ;
                    break;
                case 0x8:
                    q['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(o, $__language_Array__['6471f7fbb543c3d9945b2e202c75310b']), n++;
                    break;
                case 0x9: {
                        o['onclick'] = null, q['style']['opacity'] = o['style']['opacity'] = 0x0;
                        let F = PlayAudio;
                        PlayAudio = () => {
                        };
                        for (let H = 0x0; H < 0x14; H++) {
                            let I = PlaceZombie([
                                    oZombie,
                                    oConeheadZombie,
                                    oBucketheadZombie,
                                    oFootballZombie,
                                    oImp
                                ]['random'](), [
                                    0x1,
                                    0x2,
                                    0x3,
                                    0x4,
                                    0x5
                                ]['random'](), [
                                    0x6,
                                    0x7,
                                    0x8,
                                    0x9
                                ]['random'](), 0x0), J = I['Speed'];
                            I['Speed'] += Math['random']() * 0x28, oSym['addTask'](0x3, () => {
                                I['Speed'] = J;
                            });
                        }
                        oEffects['Animate'](m, { 'background': 'rgba(0,0,0,0.6)' }, 'slow', 'linear', K => {
                            let L = NewEle('', 'div', 'position:\x20absolute;opacity:0;z-index:299;\x20left:\x200px;\x20top:\x20288px;\x20line-height:\x2024px;\x20font-size:\x2024px;\x20width:\x20900px;\x20height:\x2024px;\x20text-align:\x20center;color:white;', {}, EDAll), M = [$__language_Array__['2a03c13665a89a44307a0462bf40acc5']];
                            for (let N = 0x0; N < M['length']; N++) {
                                oSym['addTask'](0x1f4 * N, () => {
                                    L['innerText'] = M[N], oEffects['Animate'](L, { 'opacity': 0x1 }, 0x1), oSym['addTask'](0x18f, () => {
                                        oEffects['Animate'](L, { 'opacity': 0x0 }, 0x1);
                                    });
                                });
                            }
                            oSym['addTask'](M['length'] * 0x1f4, () => {
                                ClearChild(L);
                            });
                        });
                        let G = ![];
                        oSym['addTask'](0x12c, function K() {
                            oSym['addTask'](0x32 * Math['random'](), () => {
                                !G && PlaceZombie([
                                    oZombie,
                                    oZombie,
                                    oImp,
                                    oZombie,
                                    oImp,
                                    oConeheadZombie,
                                    oConeheadZombie,
                                    oBucketheadZombie,
                                    oImp
                                ]['random'](), [
                                    0x1,
                                    0x2,
                                    0x3,
                                    0x4,
                                    0x5
                                ]['random'](), 0xb, 0x0);
                            }), !G && oSym['addTask'](0x5a * Math['random']() + 0x82, K);
                        }), oSym['addTask'](0x1f4, () => {
                            G = !![], l(), PlayAudio = F, o['onclick'] = x, q['style']['opacity'] = o['style']['opacity'] = '', oEffects['ScreenShake'](), m['style']['background'] = 'white', q['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(o, $__language_Array__['adbda0d7aa1dde95bcd3904bc8543876']), n++;
                        });
                    }
                    break;
                case 0xa:
                    q['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(o, $__language_Array__['21f913fb042ec0a14c1bd4a2e8dbe044']), n++;
                    break;
                case 0xb:
                    q['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(o, $__language_Array__['fc06a2b7f1be266b6b768982e02d90fd']), n++;
                    break;
                case 0xc:
                    q['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(o, $__language_Array__['81699b49a75cbd37adccc105cad6ab21']), n++;
                    break;
                case 0xd:
                    PlayAudio('Zomboss2'), innerText(o, $__language_Array__['fede8ce69e37cd4dfacd758536f01973']), n++;
                    break;
                case 0xe:
                    q['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(o, $__language_Array__['720041d4ff70aac3aaa884f4034bfc69']), n++;
                    break;
                case 0xf:
                    let y = hasPlants();
                    for (let L of y) {
                        L['Die']();
                    }
                    ClearChild(o, q, h), oP['MonPrgs'] = k, oP['NumZombies'] = 0x0, c(), oEffects['fadeOut'](m, 'slow', M => {
                        ClearChild(M), j = !![], d();
                    });
                }
            }());
        }
        function c() {
            CustomSpecial(oRifter, 0x2, 0x7), CustomSpecial(oRifter, 0x3, 0x7), NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll), c = () => {
            };
        }
        function d() {
            let h = localStorage['getJsonItem']('JNG_TR_WON');
            for (let j in h) {
                if (/Industry/['test'](j)) {
                    f();
                    return;
                }
            }
            e();
        }
        function e() {
            c();
            let h = 0x0, i = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), j = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function k() {
                i['onclick'] = k;
                switch (h) {
                case 0x0:
                    j['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(i, '……'), h++;
                    break;
                case 0x1:
                    PlayAudio('crazydavelong1'), innerText(i, $__language_Array__['830359a47f36f026215162785b2f62a2']), h++;
                    break;
                case 0x2:
                    PlayAudio('crazydavelong3'), innerText(i, $__language_Array__['997262a1d445a91b22bad6762e9bacd8']), h++;
                    break;
                case 0x3:
                    PlayAudio('crazydavelong1'), innerText(i, $__language_Array__['b015820a2116330aeb63193ddb470d72']), h++;
                    break;
                case 0x4:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['2d25ce563e8fb4f7b9885e183b4c69c4']), oEffects['ScreenShake'](), h++;
                    break;
                case 0x5:
                    j['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(i, '……'), h++;
                    break;
                case 0x6:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['0bf10a92fd8c86558939ce5999ec311d']), h++;
                    break;
                case 0x7:
                    j['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(i, '……'), h++;
                    break;
                case 0x8:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, '……'), h++;
                    break;
                case 0x9:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['da2b7a1c2bcf711a94c03ef44da0b289']), h++;
                    break;
                case 0xa:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['a3dd6f0ac6de119db7765c57a900c4bc']), h++;
                    break;
                case 0xb:
                    ClearChild(i, j), oSym['addTask'](0x1e, a);
                }
            }());
        }
        function f() {
            c();
            let h = 0x0, i = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), j = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function k() {
                i['onclick'] = k;
                switch (h) {
                case 0x0:
                    j['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(i, '……'), h++;
                    break;
                case 0x1:
                    PlayAudio('crazydavelong2'), innerText(i, $__language_Array__['2db02938f965d15f789e2b0988f45266']), h++;
                    break;
                case 0x2:
                    PlayAudio('crazydavelong3'), innerText(i, $__language_Array__['017c65b7348475e409e9a65163e4b928']), h++;
                    break;
                case 0x3:
                    PlayAudio('crazydavelong3'), innerText(i, $__language_Array__['3556e3ed579f6163889f02e2b49206dd']), h++;
                    break;
                case 0x4:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['2d25ce563e8fb4f7b9885e183b4c69c4']), oEffects['ScreenShake'](), h++;
                    break;
                case 0x5:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['0bf10a92fd8c86558939ce5999ec311d']), h++;
                    break;
                case 0x6:
                    j['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(i, '……'), h++;
                    break;
                case 0x7:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, '……'), h++;
                    break;
                case 0x8:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['da2b7a1c2bcf711a94c03ef44da0b289']), h++;
                    break;
                case 0x9:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['a3dd6f0ac6de119db7765c57a900c4bc']), h++;
                    break;
                case 0xa:
                    ClearChild(i, j), oSym['addTask'](0x1e, a);
                }
            }());
        }
    }
}, {
    'AZ': [
        [
            oZombie,
            0x3,
            0x1,
            [0x1]
        ],
        [
            oConeheadZombie,
            0x2,
            0x2,
            [0x2]
        ],
        [
            oBucketheadZombie,
            0x1,
            0x3,
            [0x3]
        ],
        [
            oStrollZombie,
            0x1,
            0x4,
            [0x4]
        ],
        [
            oCigarZombie,
            0x1,
            0x5,
            [0x5]
        ]
    ],
    'FlagNum': 0xf,
    'FlagToSumNum': {
        'a1': [
            0x2,
            0x4,
            0x5,
            0x7,
            0x9,
            0xc
        ],
        'a2': [
            0x1,
            0x2,
            0x5,
            0x8,
            0xa,
            0xf,
            0x14
        ]
    }
});