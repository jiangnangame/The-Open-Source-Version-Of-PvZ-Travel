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
            oRepeater,
            oXshooter,
            oMacintosh,
            oCranberry,
            oSpikeweed,
            oPotatoMine,
            oBlover,
            oCherryBomb
        ],
        'ZName': [
            oImp,
            oThiefZombie,
            oSculpture,
            oSculptorZombie,
            oSadakoZombie,
            oSkatingZombie,
            oMakeRifterZombie,
            oBeetleCarZombie,
            oMembraneZombie,
            oZomboni,
            oGargantuar
        ],
        'LevelName': $__language_Array__['e6e42be10d090ab03c9a373cf987658f'],
        'FixedProps': 'disabled',
        'StartGameMusic': 'Bgm_Industry_Fight_Challenge_3',
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            for (let f = 0x1; f < 0x6; f++) {
                for (let g = 0x8; g < 0xa; g++) {
                    f % 0x2 != 0x0 && PlaceZombie(oSculpture, f, g);
                }
            }
            for (let h = 0x1; h < 0x6; h++) {
                CustomSpecial(oRifter, h, 0x1);
            }
            let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function k() {
                d['onclick'] = k;
                switch (c) {
                case 0x0:
                    d['onclick'] = null, e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['e0058fa9aae1815e26fe521d8900568b']), oEffects['fadeIn'](b, 'slow', () => d['onclick'] = k), c++;
                    break;
                case 0x1:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['95a5f28f08617bf78496048aea834fa9']), c++;
                    break;
                case 0x2:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['35eeaab408ead439556dac5525c05a37']), c++;
                    break;
                case 0x3:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['73cab5f2c39cb9fd3b246c3a3f887751']), c++;
                    break;
                case 0x4:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['ade57ec71a45777f12fc84b7f4dcc92b']), c++;
                    break;
                case 0x5:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['9869a5912cc7f6d2d74088282ab9629e']), c++;
                    break;
                case 0x6:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['eaaf1dbbe2fca5394c8349dcf5ce8856']), c++;
                    break;
                case 0x7:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['5f330198b6ffbbe282b3ee4b960b0c05']), c++;
                    break;
                case 0x8:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['5cd405408f3f70ebdea84347b26746d4']), c++;
                    break;
                case 0x9:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['080846acf60f2c6a92400bf79a9eeef7']), c++;
                    break;
                case 0xa:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['e47bd02efcce7c9cc2ec97df15ce90a8']), c++;
                    break;
                case 0xb:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['b6ba6a3509df2b4dbf29418fa8d189de']), c++;
                    break;
                case 0xc:
                    ClearChild(d, e), oEffects['fadeOut'](b, 'slow', l => {
                        ClearChild(l), a();
                    });
                }
            }());
        },
        'HaveFog': {
            'leftBorder': 0x5,
            'type': 'strongFog'
        },
        'DKind': 0x0,
        'CanSelectCard': 0x0,
        'StaticCard': 0x0,
        'StartGame'() {
            oMiniGames['ConveyorBelt']([
                oRepeater,
                oXshooter,
                oXshooter,
                oXshooter,
                oCranberry,
                oMacintosh,
                oCranberry,
                oMacintosh,
                oCranberry,
                oCranberry,
                oSpikeweed,
                oPotatoMine,
                oBlover
            ], 0x177, 0x3, [
                oBlover,
                oCherryBomb,
                oXshooter,
                oXshooter,
                oCranberry,
                oCranberry,
                oCherryBomb
            ]), oSym['addTask'](0x320, function () {
                for (let a = 0x1; a < 0x6; a++) {
                    PlaceZombie(oSculptorZombie, a, 0xc, 0x0), oSym['addTask'](0x64 + a * 0x32, function () {
                        PlaceZombie(oThiefZombie, a, 0x1, 0x0);
                    });
                }
            });
        }
    }, {
        'AZ': [
            [
                oThiefZombie,
                0x1,
                0xe
            ],
            [
                oSadakoZombie,
                0x1,
                0x1
            ],
            [
                oSculptorZombie,
                0x1,
                0x5
            ],
            [
                oSkatingZombie,
                0x1,
                0x3
            ],
            [
                oMakeRifterZombie,
                0x1,
                0x4
            ],
            [
                oBeetleCarZombie,
                0x1,
                0x7
            ],
            [
                oMembraneZombie,
                0x1,
                0x6
            ],
            [
                oZomboni,
                0x1,
                0xc
            ],
            [
                oGargantuar,
                0x1,
                0x10
            ]
        ],
        'FlagNum': 0xe,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x4,
                0x5,
                0x7,
                0x9,
                0xb,
                0xc,
                0xd
            ],
            'a2': [
                0x0,
                0x1,
                0x5,
                0x4,
                0x6,
                0x7,
                0x8,
                0x9,
                0xa
            ]
        },
        'FlagToMonitor': {
            0x2: [a => {
                    PlaceZombie(oMembraneZombie, 0x3, 0xc, 0x0);
                }],
            0x3: [a => {
                    X(oSkatingZombie, 0x2bc);
                }],
            0x5: [a => {
                    Cube(oMembraneZombie, 0x2bc);
                }],
            0x6: [a => {
                    PlaceZombie(oGargantuar, 0x3, 0xc, 0x0);
                }],
            0x7: [a => {
                    let b = hasPlants(!![], function (c) {
                        return c['Tools'] != !![] && c['canEat'] == !![];
                    });
                    for (let c = 0x0; c < 0x3; c++) {
                        let d = Math['floor'](Math['random']() * b['length']), e, f;
                        if (b['length'] > 0x0 && Math['random']() > 0.5) {
                            let g = b[d];
                            [e, f] = [
                                g['R'],
                                g['C']
                            ], b['splice'](d, 0x1);
                        } else
                            e = [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), f = Math['floor'](Math['random']() * 0x2 + 0x1);
                        PlaceZombie(oThiefZombie, e, f, 0x0);
                    }
                    PlaceZombie(oBeetleCarZombie, 0x3, 0xb, 0x0), oSym['addTask'](0x708, h => {
                        PlaceZombie(oGargantuar, 0x2, 0xc, 0x0), PlaceZombie(oGargantuar, 0x4, 0xc, 0x0);
                    });
                }],
            0x9: [a => {
                    oSym['addTask'](0x320, function () {
                        for (let b = 0x1; b < 0x6; b++) {
                            PlaceZombie(oSculptorZombie, b, 0xc, 0x0), PlaceZombie(oSculptorZombie, b, 0xb, 0x0), oSym['addTask'](0x64 + b * 0x32, function () {
                                PlaceZombie(oThiefZombie, b, 0x1, 0x0);
                            });
                        }
                    });
                    for (let b = 0x1; b < 0x6; b += 0x4) {
                        PlaceZombie(oZomboni, b, 0xb, 0x0);
                    }
                }],
            0xb: [a => {
                    let b = hasPlants(!![], function (c) {
                        return c['Tools'] != !![] && c['canEat'] == !![];
                    });
                    for (let c = 0x0; c < 0x8; c++) {
                        let d = Math['floor'](Math['random']() * b['length']), e, f;
                        if (b['length'] > 0x0 && Math['random']() > 0.6) {
                            let g = b[d];
                            [e, f] = [
                                g['R'],
                                g['C']
                            ], b['splice'](d, 0x1);
                        } else
                            e = [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), f = Math['floor'](Math['random']() * 0x3 + 0x1);
                        PlaceZombie(oThiefZombie, e, f, 0x0);
                    }
                }],
            0xd: [a => {
                    PlaceZombie(oGargantuar, 0x3, 0xc, 0x0), oSym['addTask'](0x190, function () {
                        PlaceZombie(oGargantuar, 0x1, 0xc, 0x0), PlaceZombie(oGargantuar, 0x5, 0xc, 0x0);
                    }), oSym['addTask'](0x258, function () {
                        PlaceZombie(oGargantuar, 0x2, 0xc, 0x0), PlaceZombie(oGargantuar, 0x4, 0xc, 0x0);
                    }), Cube(oMembraneZombie, 0x2bc), X(oBeetleCarZombie, 0x578);
                }]
        },
        'FlagToEnd'() {
            ShowWinItem(GetPlantCardDom(oCranberry, EDAll));
        }
    });
}