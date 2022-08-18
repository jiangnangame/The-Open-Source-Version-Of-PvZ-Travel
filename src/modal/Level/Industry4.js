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
            oSculpture,
            oNewspaperZombie,
            oCaskZombie,
            oBucketheadZombie,
            oConeheadZombie,
            oFootballZombie,
            oZomboni,
            oCigarZombie,
            oStrollZombie
        ],
        'LevelName': $__language_Array__['6212a16293f6ea115e49a319f7addd9f'],
        'HaveFog': {
            'leftBorder': 0x3,
            'type': 'Fog'
        },
        'LockedCards': [oCabbage],
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll), NewEle(0x0, 'div', 'left:' + (0x179 - 0x50) + 'px;', { 'className': 'Mould' }, FightingScene);
            for (let e = 0x1; e < 0x6; e++) {
                CustomSpecial(oObstacle, e, 0x3);
            }
            for (let f = 0x7; f < 0xa; f++) {
                for (let g = 0x1; g < 0x6; g++) {
                    PlaceZombie(oSculpture, g, f);
                }
            }
            let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function h() {
                c['onclick'] = h;
                switch (b) {
                case 0x0:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['738abcd089590cd5d1f0cd963d7ccc6b']), b++;
                    break;
                case 0x1:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['20f19ceeaee2742aeb627c58e8e26667']), b++;
                    break;
                case 0x2:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['5f780e6f1b089e638c0bfe02973bc68a']), b++;
                    break;
                case 0x3:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['143d1e158733119c93562390135e7944']), b++;
                    break;
                case 0x4:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['566805b0196bc3756d8fe013f850bb90']), b++;
                    break;
                case 0x5:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['33f6fc4f7737220ffbc046a9725d8829']), b++;
                    break;
                case 0x6:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(c, $__language_Array__['daec6e9c474458871ed84bc37d2c0832']), b++;
                    break;
                case 0x7:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['1817dbafc9be87c00eb5004f9437ee6d']), b++;
                    break;
                case 0x8:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['6bb17080a24d517a53b839f1e9f73d82']), b++;
                    break;
                case 0x9:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['e5d096e9ad251b4bc61fe74e416c54f5']), b++;
                    break;
                case 0xa:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['35d87392fef7f7b339a210256b441a1e']), b++;
                    break;
                case 0xb:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['0ed1fc7c248e784b704f7e0fad2782a0']), b++;
                    break;
                case 0xc:
                    ClearChild(c, d), oSym['addTask'](0x1e, a);
                }
            }());
        }
    }, {
        'AZ': [
            [
                oNewspaperZombie,
                0x1,
                0x1
            ],
            [
                oCaskZombie,
                0x1,
                0x2
            ],
            [
                oBucketheadZombie,
                0x1,
                0x4
            ],
            [
                oConeheadZombie,
                0x1,
                0x2
            ],
            [
                oFootballZombie,
                0x1,
                0x6
            ],
            [
                oZomboni,
                0x1,
                0x8
            ],
            [
                oCigarZombie,
                0x1,
                0x5
            ],
            [
                oStrollZombie,
                0x1,
                0xb
            ]
        ],
        'FlagNum': 0xa,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x5,
                0x7,
                0x9,
                0xa
            ],
            'a2': [
                0x1,
                0x0,
                0xa,
                0x14,
                0x0
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    Cube(oNewspaperZombie, 0xfa), oSym['addTask'](0x1f4, b => {
                        Cube(oCaskZombie, 0x226);
                    }), oSym['addTask'](0x1f4 + 0x44c, b => {
                        Cube(oConeheadZombie, 0xfa);
                    }), oSym['addTask'](0x1f4 + 0x3e8 + 0x2ee, b => {
                        for (let c = 0x1; c < 0x6; c += 0x4) {
                            PlaceZombie(oStrollZombie, c, 0xb, 0x0);
                        }
                    });
                }],
            0x2: [a => {
                    oSym['addTask'](0x4b0, b => {
                        Cube2(oBucketheadZombie, oConeheadZombie, oCaskZombie, 0x226);
                    });
                    for (let b = 0x0; b < 0xa; b++) {
                        oSym['addTask'](Math['random']() * 0x76c, c => {
                            PlaceZombie(oStrollZombie, [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), 0xb, 0x0);
                        });
                    }
                }],
            0x3: [a => {
                    Cube2(oStrollZombie, oNewspaperZombie, oFootballZombie, 0x15e);
                }],
            0x4: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        oSym['addTask'](b * 0x190, c => {
                            Line(oCigarZombie, b, 0x190);
                        });
                    }
                    oSym['addTask'](0x2bc, c => {
                        Cube2(![], oFootballZombie, ![], 0x190);
                    });
                }],
            0x6: [a => {
                    Line(oFootballZombie, 0x3, 0x320, 0x7);
                    for (let b = 0x1; b < 0x6; b++) {
                        oSym['addTask'](b % 0x3 * 0x190, c => {
                            Line(oStrollZombie, b, 0xc8, 0x5);
                        });
                    }
                }],
            0x7: [a => {
                    Line(oZomboni, [
                        0x1,
                        0x5
                    ]['random'](), 0x12c, 0x7);
                    for (let b = 0x1; b < 0x6; b++) {
                        oSym['addTask'](b * 0x190, c => {
                            Line(oCigarZombie, b, 0x190, 0xd);
                        });
                    }
                }],
            0x8: [a => {
                    Cube2(oZomboni, ![], oCigarZombie, 0x2bc);
                }],
            0x9: [a => {
                    Cube2(oZomboni, oCaskZombie, oNewspaperZombie, 0x2bc);
                    for (let b = 0x1; b < 0x6; b++) {
                        oSym['addTask'](b % 0x5 * 0xc8, c => {
                            Line(oStrollZombie, b, 0xc8, 0x5);
                        });
                    }
                    oSym['addTask'](0x258, c => {
                        Cube2(oNewspaperZombie, oNewspaperZombie, oNewspaperZombie, 0x1f4);
                    });
                }]
        },
        'FlagToEnd'() {
            ShowWinItem(GetPlantCardDom(oCabbage, EDAll));
        }
    });
}