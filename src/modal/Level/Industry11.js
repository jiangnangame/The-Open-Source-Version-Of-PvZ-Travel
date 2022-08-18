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
            oMonotropa,
            oCabbage,
            oKernelPult,
            oIceAloe,
            oShiitake,
            oBlover
        ],
        'ZName': [
            oBalloonZombie,
            oNewspaperZombie,
            oMakeRifterZombie,
            oCigarZombie,
            oMembraneZombie,
            oSculpture,
            oSculptorZombie,
            oZomboni,
            oSkatingZombie,
            oCaskZombie,
            oBeetleCarZombie
        ],
        'LevelName': $__language_Array__['c4b529f684fe27505bc3854700d8afb2'],
        'FixedProps': 'disabled',
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            for (let f = 0x1; f < 0x6; f++) {
                PlaceZombie(oSculpture, f, 0x9);
            }
            let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function g() {
                d['onclick'] = g;
                switch (c) {
                case 0x0:
                    d['onclick'] = null, e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['7ee5669118c5e5727ca16578f50d67f9']), oEffects['fadeIn'](b, 'slow', () => d['onclick'] = g), c++;
                    break;
                case 0x1:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['0dc6ff9369c4420b10022aaa794a9d70']), c++;
                    break;
                case 0x2:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['f4d22032b5e4b5583cab0769ea3e2eca']), c++;
                    break;
                case 0x3:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['de738a88f84e300f7576fc35b822eb45']), c++;
                    break;
                case 0x4:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['efece987adf92059e78679535366131b']), c++;
                    break;
                case 0x5:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['a576d48ef9369e3bb0b9054a3fe72a4b']), c++;
                    break;
                case 0x6:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['c6ee05bc4144749e31a6a187f255b26a']), c++;
                    break;
                case 0x7:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['7afb396a8d74a7d0d622c4273f64f3d9']), c++;
                    break;
                case 0x8:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['24d59c385a4313ecc1846326a571fea9']), c++;
                    break;
                case 0x9:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['98684283ffe497426ea8df3e8f9bd291']), c++;
                    break;
                case 0xa:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['26e4f012aeb037a3c8ed3d71033e7223']), c++;
                    break;
                case 0xb:
                    d['onclick'] = null, e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['1c9bea8e902cc474a904a7b7d12e1d0a']), oEffects['fadeOut'](b, 'slow', () => d['onclick'] = g), c++;
                    break;
                case 0xc:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['8f57c82a67a4e6cc512d7ee77f2445df']), c++;
                    break;
                case 0xd:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['e034adff054cf8ec3905372917e9f128']), c++;
                    break;
                case 0xe:
                    ClearChild(d, e), ClearChild(b), oSym['addTask'](0x1e, a);
                }
            }());
        },
        'HaveFog': {
            'leftBorder': 0x5,
            'type': 'strongFog'
        },
        'CanSelectCard': 0x0,
        'SunNum': 0x96,
        'StartGame'() {
            StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(a => {
                oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x5dc, b => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
                });
            });
        }
    }, {
        'AZ': [
            [
                oBeetleCarZombie,
                0x1,
                0xe
            ],
            [
                oZomboni,
                0x1,
                0xe
            ],
            [
                oNewspaperZombie,
                0x1,
                0x1
            ],
            [
                oBalloonZombie,
                0x1,
                0xe
            ],
            [
                oCaskZombie,
                0x1,
                0x6
            ],
            [
                oMembraneZombie,
                0x1,
                0xe
            ],
            [
                oSculptorZombie,
                0x1,
                0x5
            ],
            [
                oCigarZombie,
                0x1,
                0x2
            ],
            [
                oMakeRifterZombie,
                0x1,
                0x9,
                [0x1]
            ],
            [
                oSkatingZombie,
                0x2,
                0x5
            ]
        ],
        'FlagNum': 0xe,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x4,
                0x5,
                0x7,
                0xa,
                0xd
            ],
            'a2': [
                0x1,
                0x0,
                0x3,
                0x2,
                0x2,
                0x5,
                0x1
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oSculpture, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x258, function () {
                        Line(oMakeRifterZombie, 0x1, 0x8fc, 0x2), Line(oMakeRifterZombie, 0x5, 0x8fc, 0x2), oSym['addTask'](0x384, function () {
                            X(oNewspaperZombie, 0x2bc);
                        });
                    });
                }],
            0x2: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oCigarZombie, b, 0xb, 0x0), b % 0x2 == 0x0 && PlaceZombie(oSculptorZombie, b, 0xb, 0x0);
                    }
                }],
            0x3: [a => {
                    Cube(oSkatingZombie, 0x2bc);
                    for (let b = 0x1; b < 0x6; b++) {
                        b % 0x2 != 0x0 && PlaceZombie(oSculptorZombie, b, 0xb, 0x0);
                    }
                }],
            0x4: [a => {
                    Cube2(oSkatingZombie, oCigarZombie, oCaskZombie, 0x320);
                }],
            0x5: [a => {
                    for (let b = 0x2; b < 0x5; b += 0x2) {
                        PlaceZombie(oSculptorZombie, b, 0xb, 0x0);
                    }
                }],
            0x6: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oMakeRifterZombie, b, 0xc, 0x0);
                    }
                    oSym['addTask'](Math['random']() * 0x76c, function () {
                        PlaceZombie(oMembraneZombie, [
                            0x1,
                            0x3,
                            0x5
                        ]['random'](), 0xb, 0x0);
                    });
                }],
            0x7: [a => {
                    Cube2(oSkatingZombie, oCigarZombie, oCaskZombie, 0x320), oSym['addTask'](0x960, function () {
                        let b = PlaceZombie(oZomboni, 0x3, 0xb, 0x0);
                        b['getHit0'](b, 0x190);
                    }), X(oCigarZombie, 0x320), X(oCaskZombie, 0x898);
                }],
            0x8: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        !oGd['$LockingGrid'][b + '_11'] && PlaceZombie(oSculpture, b, 0xb, 0x0), b % 0x2 == 0x1 && PlaceZombie(oSculptorZombie, b, 0xb, 0x0);
                    }
                }],
            0x9: [a => {
                    Cube2(oNewspaperZombie, oMembraneZombie, oCaskZombie, 0x320);
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oSculptorZombie, b, 0xc, 0x0);
                    }
                }],
            0xa: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        !oGd['$LockingGrid'][b + '_11'] && PlaceZombie(oSculpture, b, 0xb, 0x0);
                    }
                    for (let c = 0x1; c < 0x6; c += 0x2) {
                        PlaceZombie(oSculptorZombie, c, 0xc, 0x0);
                    }
                    for (let d = 0x2; d < 0x6; d += 0x2) {
                        let e = PlaceZombie(oBeetleCarZombie, d, 0xb, 0x0);
                        e['getHit0'](e, 0x12c);
                    }
                    oSym['addTask'](0x1f4, function () {
                        for (let f = 0x1; f < 0x6; f++) {
                            let g = PlaceZombie(oNewspaperZombie, f, 0xb, 0x0);
                            g['HP'] -= 0x3c;
                        }
                        oSym['addTask'](0x320, function () {
                            for (let h = 0x1; h < 0x6; h++) {
                                h % 0x2 == 0x1 && PlaceZombie(oCaskZombie, h, 0xb, 0x0);
                            }
                        });
                    });
                }],
            0xb: [a => {
                    for (let b = 0x1; b < 0x28; b++) {
                        oSym['addTask'](Math['random']() * 0x76c, function () {
                            PlaceZombie(oBalloonZombie, [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), 0xb, 0x0);
                        });
                    }
                }],
            0xc: [a => {
                    for (let b = 0x1; b <= 0x5; b++) {
                        if (b % 0x2 == 0x0) {
                            let c = PlaceZombie(oZomboni, b, 0xb, 0x0);
                            c['getHit0'](c, 0x190), Line(oCigarZombie, b, 0x1f4, 0x2);
                        } else {
                            let d = PlaceZombie(oBeetleCarZombie, b, 0xb, 0x0);
                            d['getHit0'](d, 0x190);
                        }
                    }
                }],
            0xd: [a => {
                    PlaceZombie(oBalloonZombie, 0x3, 0xb, 0x0);
                }]
        },
        'FlagToEnd'() {
            ShowWinItem(GetPlantCardDom(oKernelPult, EDAll));
        }
    });
}