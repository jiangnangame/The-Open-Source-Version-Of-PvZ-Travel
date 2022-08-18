/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let oNewBamboo = InheritO(oBambooUncle, {
        'EName': 'oNewBamboo',
        'PKind': 0x3,
        'Die': function (a) {
            const b = new Set(['JNG_TICKET_ShovelPlant']);
            !b['has'](a) ? CPlants['prototype']['Die']['call'](this) : SetAlpha($(this['id'])['childNodes'][0x1], 0x1);
        }
    });
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
            oMiracleImitater,
            oJalapeno
        ],
        'ZName': [
            oPushIceImp,
            oSadakoZombie,
            oStrollZombie,
            oFootballZombie,
            oNewspaperZombie,
            oImp,
            oSkatingZombie,
            oMakeRifterZombie,
            oZomboni,
            oZombie,
            oConeheadZombie,
            oMembraneZombie,
            oBalloonZombie,
            oBucketheadZombie
        ],
        'PicArr': ['images/interface/Polar2.webp'],
        'LevelName': $__language_Array__['f9266e78b12caa29eeec466f6f98e388'],
        'LoadMusic': 'Bgm_Polar_Fight_JX_3',
        'StartGameMusic': 'Bgm_Polar_Fight_JX_3',
        'DKind': 0x0,
        'FixedProps': { 'LSP': { 'num': Infinity } },
        'LoadAccess': function (b) {
            PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll), !oS['DKind'] && (NewEle('PolarFire2', 'div', null, 0x0, $('tGround')), NewEle('PolarFire', 'div', null, 0x0, $('tGround')));
            let c = NewEle('BGBOX_WIN', 'div', 'width:1400px;height:600px;z-index:199;', 0x0, $('dAll'));
            c['classList']['add']('BgMask-PolarJX'), NewImg('imgKK', 'images/interface/PolarJxStar.webp', 'left:0;top:0;' + (!$User['LowPerformanceMode'] ? 'animation:rotate2\x20130s\x20linear\x20infinite;' : ''), c), NewEle(0x0, 'div', 'left:250px;', { 'className': 'Mould' }, $('tGround'));
            for (let d = 0x1; d < 0x4; d++) {
                for (let e = 0x1; e < 0x6; e++) {
                    if (d == 0x2)
                        CustomSpecial(oRifter, e, d);
                    else
                        d == 0x3 && (CustomSpecial(oNewBamboo, e, d), NewEle(0x0, 'div', 'left:\x20' + (0xd7 + 0x50) + 'px;top:\x20' + (0x50 + (e - 0x1) * 0x64) + 'px;', { 'className': 'sos' }, FightingScene));
                    d % 0x2 != 0x0 && CustomSpecial(oObstacle, e, d);
                }
            }
            for (let f = 0x2; f < 0x5; f++) {
                CustomSpecial(oRifter, f, 0x6), CustomSpecial(oRifter, f, 0x7);
            }
            for (let g = 0x1; g < 0x6; g++) {
                CustomSpecial(oRifter, g, 0x9), (g == 0x1 || g == 0x5) && CustomSpecial(oRifter, g, 0x7);
            }
            jngAlert['open']({
                'text': $__language_Array__['ae4aefb67e2513c31dc1be14d971c68e'],
                'type': 0x0,
                'shade': 0x1,
                'nextHandler': h => oSym['addTask'](0xa, b)
            });
        },
        'StartGame': function () {
            (function a(b) {
                let c = {}, d = new Set();
                NewMusic(oS['LoadMusic'] = oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                    'fullValue': oP['FlagNum'] - 0x1,
                    'curValue': 0x0
                });
                for (let e in $P) {
                    let f = $P[e];
                    b['hasOwnProperty'](f['EName']) && d['add'](f['R'] + '_' + f['C']);
                }
                PrepareGrowPlants(function () {
                    oP['Monitor'](oS['Monitor']), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), function g() {
                        for (let h in b)
                            c[h] = 0x0;
                        for (let j of $P)
                            c['hasOwnProperty'](j['EName']) && d['has'](j['R'] + '_' + j['C']) && ++c[j['EName']];
                        for (let k in b) {
                            if (b[k] !== c[k]) {
                                toOver(0x2);
                                return;
                            }
                        }
                        oSym['addTask'](0xc8, g);
                    }(), oSym['addTask'](0x708, h => {
                        oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
                    });
                });
            }({ 'oNewBamboo': 0x5 }), oSym['addTask'](0x71c, function () {
                PlaceZombie(oZomboni, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                for (let b = 0x2; b < 0x6; b += 0x2) {
                    PlaceZombie(oImp, b, 0xb, 0x0);
                }
                oSym['addTask'](0x6a4, function () {
                    PlaceZombie(oZomboni, 0x3, 0xb, 0x0);
                });
            }));
        }
    }, {
        'AZ': [
            [
                oPushIceImp,
                0x1,
                0x1
            ],
            [
                oBalloonZombie,
                0x1,
                0x1
            ],
            [
                oZombie,
                0x1,
                0x1
            ],
            [
                oConeheadZombie,
                0x1,
                0x1
            ],
            [
                oBucketheadZombie,
                0x1,
                0x1
            ],
            [
                oZomboni,
                0x1,
                0x1
            ],
            [
                oMembraneZombie,
                0x1,
                0x1
            ],
            [
                oSadakoZombie,
                0x1,
                0x1
            ],
            [
                oStrollZombie,
                0x1,
                0x1
            ],
            [
                oFootballZombie,
                0x1,
                0x8
            ],
            [
                oNewspaperZombie,
                0x1,
                0x1
            ],
            [
                oMakeRifterZombie,
                0x2,
                0x5,
                [
                    0x5,
                    0xa,
                    0xf,
                    0x10
                ]
            ],
            [
                oSkatingZombie,
                0x1,
                0x6
            ],
            [
                oImp,
                0x3,
                0x1,
                [
                    0x1,
                    0x2,
                    0x3
                ]
            ]
        ],
        'FlagNum': 0xb,
        'FlagToSumNum': {
            'a1': [0x9],
            'a2': [
                0x0,
                0x0
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oImp, b, 0xb, 0x0), PlaceZombie(oZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x12c, function () {
                        for (let c = 0x2; c < 0x6; c += 0x2) {
                            PlaceZombie(oMembraneZombie, c, 0xb, 0x0);
                        }
                        for (let d = 0x1; d < 0x6; d += 0x2) {
                            oSym['addTask'](d * 0x1f4, function () {
                                PlaceZombie(oMakeRifterZombie, d, 0xb, 0x0);
                            }), PlaceZombie(oStrollZombie, d, 0xb, 0x0);
                        }
                    });
                }],
            0x2: [a => {
                    for (let b = 0x2; b < 0x5; b++) {
                        PlaceZombie(oSkatingZombie, b, 0xb, 0x0), PlaceZombie(oMakeRifterZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x12c, function () {
                        for (let c = 0x1; c <= 0x5; c++) {
                            PlaceZombie(oStrollZombie, c, 0xb, 0x0), PlaceZombie(oSkatingZombie, c, 0xb, 0x0);
                        }
                    });
                }],
            0x3: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        b % 0x2 == 0x0 ? PlaceZombie(oSadakoZombie, b, 0xb, 0x0) : PlaceZombie(oConeheadZombie, b, 0xb, 0x0), PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x2bc, function () {
                        for (let c = 0x1; c < 0x6; c++) {
                            PlaceZombie(oBalloonZombie, c, 0xb, 0x0);
                        }
                    }), oSym['addTask'](0x514, function () {
                        for (let c = 0x2; c < 0x6; c += 0x2) {
                            PlaceZombie(oPushIceImp, c, 0xb, 0x0);
                        }
                    });
                }],
            0x4: [a => {
                    PlaceZombie(oZombie, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                    for (let b = 0x1; b <= 0xa; b++) {
                        oSym['addTask'](Math['floor'](Math['random']() * 0x76c) + 0x384, function () {
                            PlaceZombie(oZombie, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                        }), oSym['addTask'](b * 0x12c, function () {
                            if (b <= 0x5)
                                PlaceZombie(oMembraneZombie, b, 0xb, 0x0);
                            else
                                PlaceZombie(oMakeRifterZombie, b - 0x5, 0xb, 0x0);
                        });
                    }
                    for (let c = 0x1; c < 0x6; c++) {
                        PlaceZombie(oNewspaperZombie, c, 0xb, 0x0), oSym['addTask'](c * 0x1f4, function () {
                            PlaceZombie(oSkatingZombie, c, 0xb, 0x0), PlaceZombie(oStrollZombie, c, 0xb, 0x0), PlaceZombie(oFootballZombie, c, 0xb, 0x0);
                        });
                    }
                }],
            0x5: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie([
                            oBucketheadZombie,
                            oPushIceImp,
                            oImp
                        ]['random'](), b, 0xb, 0x0), PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x12c, function () {
                        for (let c = 0x1; c < 0x6; c++) {
                            let d = PlaceZombie(oMembraneZombie, c, 0xb, 0x0);
                            d['HP'] += 0xc8;
                        }
                    }), oSym['addTask'](0x514, function () {
                        PlaceZombie(oZomboni, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                    }), oSym['addTask'](0x1f4, function () {
                        for (let c = 0x1; c <= 0x6; c++) {
                            oSym['addTask'](Math['floor'](Math['random']() * 0x76c), function () {
                                PlaceZombie(oMakeRifterZombie, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                            });
                        }
                    });
                }],
            0x6: [a => {
                    for (let b = 0x0; b < 0x3; b++) {
                        oSym['addTask'](Math['floor'](Math['random']() * 0x384) + 0x384, function () {
                            PlaceZombie(oZomboni, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0), PlaceZombie(oMakeRifterZombie, b + 0x2, 0xb, 0x0);
                        });
                    }
                    for (let c = 0x1; c <= 0xa; c++) {
                        if (c < 0x6)
                            PlaceZombie(oImp, (c - 0x1) % 0x5 + 0x1, 0xb, 0x0);
                        if (c < 0xa)
                            PlaceZombie(oMembraneZombie, (c - 0x1) % 0x5 + 0x1, 0xb, 0x0);
                    }
                    oSym['addTask'](0x2bc, function () {
                        for (let d = 0x1; d < 0x7; d++)
                            oSym['addTask'](Math['random']() * 0x320, function () {
                                PlaceZombie(oBalloonZombie, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                            });
                        for (let e = 0x2; e < 0x5; e += 0x2) {
                            PlaceZombie(oPushIceImp, e, 0xb, 0x0);
                        }
                    });
                }],
            0x7: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oFootballZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x1f4, function () {
                        for (let c = 0x1; c < 0x6; c++) {
                            PlaceZombie(oMakeRifterZombie, c, 0xb, 0x0);
                        }
                    }), oSym['addTask'](0x12c, function () {
                        for (let c = 0x1; c < 0x6; c++) {
                            PlaceZombie(oMembraneZombie, c, 0xb, 0x0);
                        }
                    });
                    for (let c = 0x0; c < 0x5; c++) {
                        PlaceZombie(oMembraneZombie, c + 0x1, 0xb, 0x0), oSym['addTask'](Math['floor'](Math['random']() * 0x76c), function () {
                            PlaceZombie(oConeheadZombie, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                        }), oSym['addTask'](Math['floor'](Math['random']() * 0xf3c) + 0x384, function () {
                            PlaceZombie(oZomboni, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0), PlaceZombie(oBalloonZombie, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0), PlaceZombie(oMakeRifterZombie, c + 0x1, 0xb, 0x0);
                        });
                    }
                }],
            0x8: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        oSym['addTask'](Math['floor'](Math['random']() * 0x76c), function () {
                            PlaceZombie(oConeheadZombie, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                        }), PlaceZombie(oSadakoZombie, b, 0xb, 0x0), PlaceZombie(oBalloonZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x12c, function () {
                        for (let c = 0x1; c < 0x6; c++) {
                            PlaceZombie(oPushIceImp, c, 0xb, 0x0), PlaceZombie(oImp, c, 0xb, 0x0);
                        }
                    }), oSym['addTask'](0x384, function () {
                        for (let c = 0x1; c < 0x6; c++) {
                            PlaceZombie(oMakeRifterZombie, c, 0xb, 0x0);
                        }
                    }), PlaceZombie(oMembraneZombie, 0x3, 0xb, 0x0), oSym['addTask'](0x5dc, function () {
                        oSym['addTask'](Math['floor'](Math['random']() * 0x258), function () {
                            PlaceZombie(oMakeRifterZombie, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0), PlaceZombie(oZomboni, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                        });
                        for (let c = 0x1; c < 0x6; c++) {
                            PlaceZombie(oMembraneZombie, c, 0xb, 0x0), PlaceZombie(oBalloonZombie, c, 0xb, 0x0);
                        }
                    });
                }],
            0x9: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        oSym['addTask'](Math['floor'](Math['random']() * 0x514), function () {
                            PlaceZombie(oZombie, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                        }), PlaceZombie(oConeheadZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0xc8, function () {
                        for (let c = 0x1; c < 0x6; c++) {
                            PlaceZombie(oMakeRifterZombie, c, 0xb, 0x0), PlaceZombie(oMembraneZombie, c, 0xb, 0x0);
                        }
                    }), oSym['addTask'](0x2bc, function () {
                        for (let c = 0x1; c < 0x6; c++) {
                            PlaceZombie(oMakeRifterZombie, c, 0xb, 0x0), PlaceZombie(oMembraneZombie, c, 0xb, 0x0);
                        }
                    });
                    for (let c = 0x1; c < 0x6; c++) {
                        PlaceZombie(oPushIceImp, c, 0xb, 0x0);
                    }
                    oSym['addTask'](0x4b0, function () {
                        for (let d = 0x0; d < 0x5; d++) {
                            oSym['addTask'](Math['floor'](Math['random']() * 0x258), function () {
                                PlaceZombie(oMakeRifterZombie, d + 0x1, 0xb, 0x0), PlaceZombie(oZomboni, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                            });
                        }
                    });
                }],
            0xa: [a => {
                    oSym['addTask'](Math['floor'](Math['random']() * 0x258) + 0x12c, function () {
                        PlaceZombie(oZomboni, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                    });
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oStrollZombie, b, 0xb, 0x0), PlaceZombie(oMakeRifterZombie, b, 0xb, 0x0), PlaceZombie(oSadakoZombie, b, 0xb, 0x0), PlaceZombie(oMembraneZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x258, function () {
                        oSym['addTask'](Math['floor'](Math['random']() * 0x258) + 0x12c, function () {
                            PlaceZombie(oZomboni, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                        });
                        for (let c = 0x1; c < 0x6; c++) {
                            PlaceZombie(oSadakoZombie, c, 0xb, 0x0), PlaceZombie(oMembraneZombie, c, 0xb, 0x0), PlaceZombie(oStrollZombie, c, 0xb, 0x0);
                        }
                    }), oSym['addTask'](0x3e8, function () {
                        for (let c = 0x1; c < 0x6; c++) {
                            PlaceZombie(oMakeRifterZombie, c, 0xb, 0x0);
                            for (let d = 0x0; d < 0x2; d++) {
                                PlaceZombie(oMakeRifterZombie, c, 0xb, 0x0), oSym['addTask'](d * 0x1f4, function () {
                                    PlaceZombie(oSkatingZombie, c, 0xb, 0x0), PlaceZombie(oStrollZombie, c, 0xb, 0x0), c % 0x2 == (d < 0x1 ? 0x1 : 0x0) && PlaceZombie(oZomboni, c, 0xb, 0x0);
                                });
                            }
                        }
                    });
                }]
        },
        'FlagToEnd': function () {
            oS['SunNum'] >= 0x9c4 ? oS['DefaultFlagToEnd']() : toOver(0x2);
        }
    });
}