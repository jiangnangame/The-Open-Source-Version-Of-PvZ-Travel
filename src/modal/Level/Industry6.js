/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    function Cube(a, b) {
        oSym['addTask'](0x2 * b, function () {
            for (let c = 0x0; c < 0x2; c++) {
                oSym['addTask'](c * b, d => {
                    PlaceZombie(a, c % 0x5 + 0x1, 0xb, 0x0);
                }), oSym['addTask'](c * b, d => {
                    PlaceZombie(a, 0x5 - c % 0x5, 0xb, 0x0);
                });
            }
            oSym['addTask'](0x2 * b, d => {
                PlaceZombie(a, 0x3, 0xb, 0x0);
            });
        }), oSym['addTask'](b, c => {
            PlaceZombie(a, 0x1 % 0x5 + 0x1, 0xb, 0x0);
        }), oSym['addTask'](b, c => {
            PlaceZombie(a, 0x5 - 0x1 % 0x5, 0xb, 0x0);
        }), PlaceZombie(a, 0x3, 0xb, 0x0);
    }
    function Cube2(a, b, c, d) {
        oSym['addTask'](0x2 * d, function () {
            for (let e = 0x0; e < 0x2; e++) {
                oSym['addTask'](e * d, f => {
                    a && PlaceZombie(a, e % 0x5 + 0x1, 0xb, 0x0), b && PlaceZombie(b, (e + 0x1) % 0x5 + 0x1, 0xb, 0x0);
                }), oSym['addTask'](e * d, f => {
                    a && PlaceZombie(a, 0x5 - e % 0x5, 0xb, 0x0), b && e < 0x1 && PlaceZombie(b, 0x5 - (e + 0x1) % 0x5, 0xb, 0x0);
                });
            }
            c && PlaceZombie(c, 0x3, 0xb, 0x0), oSym['addTask'](0x2 * d, f => {
                a && PlaceZombie(a, 0x3, 0xb, 0x0);
            });
        }), oSym['addTask'](d, e => {
            a && PlaceZombie(a, 0x1 % 0x5 + 0x1, 0xb, 0x0);
        }), oSym['addTask'](d, e => {
            b && PlaceZombie(b, 0x3, 0xb, 0x0);
        }), oSym['addTask'](d, e => {
            a && PlaceZombie(a, 0x5 - 0x1 % 0x5, 0xb, 0x0);
        }), a && PlaceZombie(a, 0x3, 0xb, 0x0);
    }
    function Line(b, c, d = 0x12c, e = 0x3) {
        let f = 0x0;
        oSym['addTask'](0x0, function g() {
            PlaceZombie(b, c, 0xb, 0x0), ++f < e && oSym['addTask'](d, g);
        });
    }
    function X(a, b) {
        for (let c = 0x0; c < 0x2; c++) {
            PlaceZombie(a, c * 0x4 + 0x1, 0xb, 0x0), oSym['addTask'](c ? b : 0x3 * b, d => {
                for (let e = 0x1; e < 0x3; e++) {
                    PlaceZombie(a, e * 0x2, 0xb, 0x0);
                }
            });
        }
        oSym['addTask'](0x4 * b, d => {
            for (let e = 0x0; e < 0x2; e++) {
                PlaceZombie(a, e * 0x4 + 0x1, 0xb, 0x0);
            }
        }), oSym['addTask'](0x2 * b, d => {
            PlaceZombie(a, 0x3, 0xb, 0x0);
        });
    }
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
            oPlantern,
            oCabbage
        ],
        'ZName': [
            oBeetleCarZombie,
            oImp,
            oNewspaperZombie,
            oCaskZombie,
            oZomboni,
            oStrollZombie,
            oFootballZombie,
            oMembraneZombie,
            oBucketheadZombie,
            oZombie
        ],
        'LevelName': $__language_Array__['052914f00d7696456f5fa69ffc75cacd'],
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll), CustomSpecial(oPotatoMine, 0x3, 0x3);
            let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll), e = NewEle('effect', 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll);
            (function f() {
                c['onclick'] = f;
                switch (b) {
                case 0x0:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['603af6b3c92308de8c19e38140dd51d3']), b++;
                    break;
                case 0x1:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['4dc39cc7f3002bcdc67e192119e8e912']), b++;
                    break;
                case 0x2:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(c, $__language_Array__['a20b9ff5e5bedb6e82dbd5117a577439']), b++;
                    break;
                case 0x3:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['27373d4d543f0367cd38fa664fdb35a7']), b++;
                    break;
                case 0x4:
                    c['onclick'] = null, d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['368b2190e9d06fc4bef184df9e1c8b4a']), oEffects['Animate'](e, 'NPCFade', 'fast', 'linear', g => (ClearChild(g), c['onclick'] = f), 0x0, 0x4), b++;
                    break;
                case 0x5:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['d59e733a832e2ccb6d67a4df5bf77b3a']), b++;
                    break;
                case 0x6:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['d1918bbccb7d98eb0061efb30be6f414']), b++;
                    break;
                case 0x7:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['b239795ca73a3283fc3ccf7dcbb47c6f']), b++;
                    break;
                case 0x8:
                    ClearChild(c, d), oSym['addTask'](0x1e, a);
                }
            }());
        },
        'HaveFog': {
            'type': 'strongFog',
            'leftBorder': 0x4
        },
        'SunNum': 0x96,
        'StartGame'() {
            StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(a => {
                oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x5dc, b => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
                });
            }), oSym['addTask'](0x578, a => {
                PlaceZombie(oBeetleCarZombie, 0x3, 0xc, 0x0), oSym['addTask'](0x12c, b => {
                    PlaceZombie(oZombie, 0x3, 0xb, 0x0), oSym['addTask'](0x12c, c => {
                        PlaceZombie(oConeheadZombie, 0x3, 0xb, 0x0);
                    });
                });
            });
        }
    }, {
        'AZ': [
            [
                oBeetleCarZombie,
                0x1,
                0xa
            ],
            [
                oZomboni,
                0x1,
                0xa
            ],
            [
                oImp,
                0x1,
                0x1
            ],
            [
                oCaskZombie,
                0x1,
                0x3
            ],
            [
                oStrollZombie,
                0x1,
                0x8
            ],
            [
                oFootballZombie,
                0x1,
                0x3
            ],
            [
                oZombie,
                0x1,
                0xa
            ],
            [
                oMembraneZombie,
                0x1,
                0xa
            ],
            [
                oBucketheadZombie,
                0x1,
                0x1
            ],
            [
                oNewspaperZombie,
                0x1,
                0x1
            ]
        ],
        'FlagNum': 0x9,
        'FlagToSumNum': {
            'a1': [
                0x4,
                0x5,
                0x7,
                0xa
            ],
            'a2': [
                0x0,
                0x5,
                0xa,
                0x78
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    Cube2(oZombie, oBucketheadZombie, oNewspaperZombie, 0x12c), oSym['addTask'](0x384, b => {
                        for (let c = 0x1; c < 0x6; c++) {
                            Line(oNewspaperZombie, c, 0x12c, 0x2);
                        }
                    }), oSym['addTask'](0x5dc, b => {
                        for (let c = 0x1; c < 0x6; c++) {
                            Line(oCaskZombie, c, 0x12c, 0x2);
                        }
                    });
                }],
            0x2: [a => {
                    oSym['addTask'](0x12c, b => {
                        X(oBucketheadZombie, 0x190), Cube(oZombie, 0x190);
                    });
                }],
            0x3: [a => {
                    for (let b = 0x0; b < 0x3; b++) {
                        oSym['addTask'](Math['random']() * 0x5dc, c => {
                            Line(oMembraneZombie, [
                                0x1,
                                0x3,
                                0x5
                            ]['random'](), 0x1f4, 0x3);
                        });
                    }
                    PlaceZombie(oBeetleCarZombie, [
                        0x2,
                        0x4
                    ]['random'](), 0xc, 0x0), oSym['addTask'](0x384, c => {
                        for (let d = 0x1; d < 0x6; d++) {
                            Line(oCaskZombie, d, 0x12c, 0x2);
                        }
                    });
                    for (let c = 0x1; c < 0x7; c++) {
                        oSym['addTask'](Math['random']() * 0x708, d => {
                            Line(oImp, [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), 0xc8, 0x2);
                        });
                    }
                    for (let d = 0x1; d < 0x6; d++) {
                        oSym['addTask'](d * 0x258, e => {
                            Math['random']() > 0.5 ? Cube(oBucketheadZombie, 0x190 * Math['random']() + 0x12c) : X(oBucketheadZombie, 0x190 * Math['random']() + 0x12c);
                        });
                    }
                }],
            0x4: [a => {
                    for (let b = 0x0; b < 0x6; b++) {
                        let c = oImp;
                        b > 0x1 && (c = oBucketheadZombie), b > 0x2 && (c = oMembraneZombie), b > 0x4 && (c = oFootballZombie), oSym['addTask'](b * 0x12c, d => {
                            b % 0x2 ? Cube(c, (b + 0x1) * 0x64) : X(c, (b + 0x1) * 0x64);
                        });
                    }
                }],
            0x5: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oStrollZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x2bc, function () {
                        for (let c = 0x1; c < 0x6; c++) {
                            Line(oStrollZombie, c, 0x190, 0x5);
                        }
                    });
                }],
            0x6: [a => {
                    X(oZomboni, 0x2ee), oSym['addTask'](0x2bc, function () {
                        for (let b = 0x1; b < 0x6; b++) {
                            Line(oStrollZombie, b, 0x190, 0x5), Line(oMembraneZombie, b, 0x190, 0x5);
                        }
                    }), oSym['addTask'](0x5dc, b => {
                        for (let c = 0x2; c < 0x5; c += 0x2) {
                            PlaceZombie(oFootballZombie, c, 0xb, 0x0);
                        }
                    });
                }],
            0x7: [a => {
                    oSym['addTask'](0x15e, function () {
                        Cube(oBeetleCarZombie, 0x2ee);
                        for (let b = 0x1; b < 0x6; b += 0x2) {
                            PlaceZombie(oFootballZombie, b, 0xb, 0x0);
                        }
                        X(oMembraneZombie, 0x15e), X(oStrollZombie, 0x15e);
                    }), oSym['addTask'](0x320, function () {
                        for (let b = 0x0; b < 0x6; b++) {
                            let c = oStrollZombie;
                            b > 0x1 && (c = oBucketheadZombie), b > 0x2 && (c = oMembraneZombie), b > 0x4 && (c = oFootballZombie), oSym['addTask'](b * 0x12c, d => {
                                b % 0x2 ? Cube(c, (b + 0x1) * 0x64) : X(c, (b + 0x1) * 0x64);
                            });
                        }
                    });
                }],
            0x8: [a => {
                }]
        }
    });
}