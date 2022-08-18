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
                    PlaceZombie(a, c % 0x5 + 0x1, 0xc, 0x0);
                }), oSym['addTask'](c * b, d => {
                    PlaceZombie(a, 0x5 - c % 0x5, 0xc, 0x0);
                });
            }
            oSym['addTask'](0x2 * b, d => {
                PlaceZombie(a, 0x3, 0xc, 0x0);
            });
        }), oSym['addTask'](b, c => {
            PlaceZombie(a, 0x1 % 0x5 + 0x1, 0xc, 0x0);
        }), oSym['addTask'](b, c => {
            PlaceZombie(a, 0x5 - 0x1 % 0x5, 0xc, 0x0);
        }), PlaceZombie(a, 0x3, 0xc, 0x0);
    }
    function Cube2(a, b, c, d) {
        oSym['addTask'](0x2 * d, function () {
            for (let e = 0x0; e < 0x2; e++) {
                oSym['addTask'](e * d, f => {
                    a && PlaceZombie(a, e % 0x5 + 0x1, 0xc, 0x0), b && PlaceZombie(b, (e + 0x1) % 0x5 + 0x1, 0xc, 0x0);
                }), oSym['addTask'](e * d, f => {
                    a && PlaceZombie(a, 0x5 - e % 0x5, 0xc, 0x0), b && e < 0x1 && PlaceZombie(b, 0x5 - (e + 0x1) % 0x5, 0xc, 0x0);
                });
            }
            c && PlaceZombie(c, 0x3, 0xc, 0x0), oSym['addTask'](0x2 * d, f => {
                a && PlaceZombie(a, 0x3, 0xc, 0x0);
            });
        }), oSym['addTask'](d, e => {
            a && PlaceZombie(a, 0x1 % 0x5 + 0x1, 0xc, 0x0);
        }), oSym['addTask'](d, e => {
            b && PlaceZombie(b, 0x3, 0xc, 0x0);
        }), oSym['addTask'](d, e => {
            a && PlaceZombie(a, 0x5 - 0x1 % 0x5, 0xc, 0x0);
        }), a && PlaceZombie(a, 0x3, 0xc, 0x0);
    }
    function Line(b, c, d = 0x12c, e = 0x3) {
        let f = 0x0;
        oSym['addTask'](0x0, function g() {
            PlaceZombie(b, c, 0xc, 0x0), ++f < e && oSym['addTask'](d, g);
        });
    }
    function X(a, b) {
        for (let c = 0x0; c < 0x2; c++) {
            PlaceZombie(a, c * 0x4 + 0x1, 0xc, 0x0), oSym['addTask'](c ? b : 0x3 * b, d => {
                for (let e = 0x1; e < 0x3; e++) {
                    PlaceZombie(a, e * 0x2, 0xc, 0x0);
                }
            });
        }
        oSym['addTask'](0x4 * b, d => {
            for (let e = 0x0; e < 0x2; e++) {
                PlaceZombie(a, e * 0x4 + 0x1, 0xc, 0x0);
            }
        }), oSym['addTask'](0x2 * b, d => {
            PlaceZombie(a, 0x3, 0xc, 0x0);
        });
    }
    oS['Init']({
        'PName': [
            oNutBowlingPay,
            oBoomNutBowlingPay,
            oBigWallNutPay
        ],
        'ZName': [
            oSculpture,
            oSadakoZombie,
            oStrollZombie,
            oCaskZombie,
            oSculptorZombie,
            oConeheadZombie,
            oNewspaperZombie,
            oZomboni,
            oBeetleCarZombie
        ],
        'LevelName': $__language_Array__['9d774ba1ae49b4bb8301903f3b2b3d67'],
        'StartGameMusic': 'Bgm_Industry_Fight_Challenge_2',
        'CanSelectCard': 0x0,
        'FixedProps': 'disabled',
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            for (let e = 0x1; e < 0x6; e++) {
                for (let f = 0x8; f < 0xa; f++)
                    PlaceZombie(oSculpture, e, f);
            }
            NewEle(0x0, 'div', 'left:' + (0x179 - 0x50) + 'px;', { 'className': 'FlowerBed' }, FightingScene);
            let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function g() {
                c['onclick'] = g;
                switch (b) {
                case 0x0:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['f2c190d06ec6a96066aced100661ddc5']), b++;
                    break;
                case 0x1:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(c, $__language_Array__['3c47c8838170be17b67e505eae8e1f11']), b++;
                    break;
                case 0x2:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['4a3b7a9b5fb6f911d0b5e08f1a79ba69']), b++;
                    break;
                case 0x3:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['7f649ae397850d7fbb0b815876d6686b']), b++;
                    break;
                case 0x4:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['c6b07233105a51d51f2be60bfb75ac61']), b++;
                    break;
                case 0x5:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['9c596e1eed7c7863c212efe6e1f9368c']), b++;
                    break;
                case 0x6:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['223914754465d0ddaadbcb4a5451e6de']), b++;
                    break;
                case 0x7:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['8fa1d8752bbeb1f734eabacb19ae29f5']), b++;
                    break;
                case 0x8:
                    ClearChild(c, d), oSym['addTask'](0x1e, a);
                }
            }());
        },
        'StartGame'() {
            let a = function (b) {
                oS['DKind'] && AppearSun(GetX(Math['floor'](0x1 + Math['random']() * oS['C'])), GetY(Math['floor'](0x1 + Math['random']() * oS['R'])), b, 0x1);
                let c = Math['floor'](0x9 + Math['random']() * 0x3) * Math['min'](oS['SunNum'] + 0x4b, 0xc8);
                oSym['addTask'](c, a, [b]);
            };
            StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(b => {
                oP['Monitor'](), BeginCool(), oS['DKind'] && a(0x32), oSym['addTask'](0x5dc, c => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
                });
            });
        }
    }, {
        'AZ': [
            [
                oStrollZombie,
                0x1,
                0x1
            ],
            [
                oSadakoZombie,
                0x1,
                0xf
            ],
            [
                oCaskZombie,
                0x1,
                0x5
            ],
            [
                oSculptorZombie,
                0x1,
                0x2
            ],
            [
                oConeheadZombie,
                0x1,
                0x8
            ],
            [
                oNewspaperZombie,
                0x1,
                0x7
            ],
            [
                oZomboni,
                0x1,
                0xb
            ],
            [
                oBeetleCarZombie,
                0x1,
                0xe
            ]
        ],
        'FlagNum': 0xe,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x8,
                0xd,
                0xe,
                0xf
            ],
            'a2': [
                0x1,
                0x0,
                0x0,
                0x1,
                0x2
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    for (let b = 0x1; b < 0x6; b++)
                        PlaceZombie(oSculpture, b, 0xb, 0x0);
                    for (let c = 0x1; c < 0x6; c++)
                        PlaceZombie(oSculptorZombie, c, 0xc, 0x0);
                    oSym['addTask'](0x1f4, d => {
                        for (let e = 0x1; e < 0x6; e++)
                            !oGd['$LockingGrid'][e + '_11'] && PlaceZombie(oSculpture, e, 0xb, 0x0);
                    }), oSym['addTask'](0xc8, d => {
                        for (let e = 0x1; e < 0x6; e++)
                            !oGd['$LockingGrid'][e + '_11'] && PlaceZombie(oSculpture, e, 0xb, 0x0);
                    }), oSym['addTask'](0x384, d => {
                        for (let e = 0x1; e < 0x6; e++)
                            !oGd['$LockingGrid'][e + '_11'] && PlaceZombie(oSculpture, e, 0xb, 0x0);
                    });
                }],
            0x2: [a => {
                    Cube2(![], oCaskZombie, ![], 0x1f4);
                }],
            0x4: [a => {
                    Cube2(![], oSadakoZombie, ![], 0x2bc);
                }],
            0x5: [a => {
                    for (let b = 0x1; b < 0x6; b++)
                        PlaceZombie(oSculptorZombie, b, 0xc, 0x0);
                }],
            0x7: [a => {
                    oSym['addTask'](0x190, b => {
                        for (let c = 0x2; c < 0x5; c++) {
                            PlaceZombie(oNewspaperZombie, c, 0xc, 0x0);
                        }
                        PlaceZombie(oConeheadZombie, 0x3, 0xb, 0x0);
                    });
                }],
            0x8: [a => {
                    for (let b = 0x2; b < 0x6; b += 0x2) {
                        Line(oConeheadZombie, b, 0x1f4, 0x1), oSym['addTask'](0x640, c => {
                            Line(oStrollZombie, b, 0x1f4, 0x1);
                        });
                    }
                }],
            0x9: [a => {
                    Line(oBeetleCarZombie, 0x3, 0x320, 0x3);
                }],
            0xa: [a => {
                    AppearSun(GetX(Math['floor'](0x1 + Math['random']() * oS['C'])), GetY(Math['floor'](0x1 + Math['random']() * oS['R'])), 0x12c, 0x1);
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oSculptorZombie, b, 0xc, 0x0);
                    }
                    for (let c = 0x2; c < 0x6; c += 0x2) {
                        Line(oConeheadZombie, c, 0x1f4, 0x1);
                    }
                    oSym['addTask'](0x578, d => {
                        Line(oBeetleCarZombie, [
                            0x1,
                            0x3,
                            0x5
                        ]['random'](), 0xc8, 0x5);
                    });
                }],
            0xb: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oSculptorZombie, b, 0xc, 0x0), Line(oZomboni, b, 0x2bc, 0x4);
                    }
                    oSym['addTask'](0x1f4, c => {
                        for (let d = 0x1; d < 0x6; d++)
                            !oGd['$LockingGrid'][d + '_11'] && PlaceZombie(oSculpture, d, 0xb, 0x0);
                    }), oSym['addTask'](0xc8, c => {
                        for (let d = 0x1; d < 0x6; d++)
                            !oGd['$LockingGrid'][d + '_11'] && PlaceZombie(oSculpture, d, 0xb, 0x0);
                    }), oSym['addTask'](0x384, c => {
                        for (let d = 0x1; d < 0x6; d++)
                            !oGd['$LockingGrid'][d + '_11'] && PlaceZombie(oSculpture, d, 0xb, 0x0);
                    });
                }],
            0xc: [a => {
                    AppearSun(GetX(Math['floor'](0x1 + Math['random']() * oS['C'])), GetY(Math['floor'](0x1 + Math['random']() * oS['R'])), 0x64, 0x1);
                }],
            0xd: [a => {
                    AppearSun(GetX(Math['floor'](0x1 + Math['random']() * oS['C'])), GetY(Math['floor'](0x1 + Math['random']() * oS['R'])), 0x32, 0x1), oSym['addTask'](0x2bc, b => {
                        AppearSun(GetX(Math['floor'](0x1 + Math['random']() * oS['C'])), GetY(Math['floor'](0x1 + Math['random']() * oS['R'])), 0x32, 0x1);
                    }), oSym['addTask'](0x578, b => {
                        AppearSun(GetX(Math['floor'](0x1 + Math['random']() * oS['C'])), GetY(Math['floor'](0x1 + Math['random']() * oS['R'])), 0xc8, 0x1);
                    });
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oSculptorZombie, b, 0xc, 0x0);
                    }
                    oSym['addTask'](0x1f4, c => {
                        for (let d = 0x1; d < 0x6; d++) {
                            !oGd['$LockingGrid'][d + '_11'] && PlaceZombie(oSculpture, d, 0xb, 0x0), Line(oBeetleCarZombie, d, 0x2bc, 0x3);
                        }
                    });
                }]
        }
    }, {
        'GrowPlant': function (a, b, c, d, e) {
            ZimuRQ['style']['display'] === 'block' && PlaySubtitle();
            if (b > 0x15b - 0x50)
                return PlaySubtitle($__language_Array__['4822ccff721b3594a6595c683e4beebe']), CancelPlant(), ![];
            let f = oS['ChoseCard'], g = ArCard[f], h = g['PName'], i = h['prototype'], j = i['coolTime'];
            i['CanGrow'](a, d, e) && (PlayAudio('plant' + Math['floor'](0x1 + Math['random']() * 0x2)), new h()['Birth'](b, c, d, e, a), oS['SunNum'] -= i['SunNum'], j && (g['CDReady'] = 0x0, DoCoolTimer(f, j)), oSym['addTask'](0x14, SetHidden, [SetStyle($('imgGrowSoil'), {
                    'left': b - 0x1e + 'px',
                    'top': c - 0x1e + 'px',
                    'zIndex': 0x3 * d + 0x1,
                    'visibility': 'visible'
                })]), !Mobile && CancelPlant()), Mobile && CancelPlant();
        }
    });
}