/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let PlaceZombieRandom = function (a, b = Math['floor'](Math['random']() * 0x5) + 0x1) {
        PlaceZombie(a, b, 0xb, 0x0);
    };
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
            oBegonia
        ],
        'ZName': [
            oMakeRifterZombie,
            oBalloonZombie,
            oImp,
            oZombie,
            oStrollZombie,
            oCigarZombie,
            oFootballZombie,
            oSkatingZombie,
            oSadakoZombie,
            oPushIceImp,
            oZomboni
        ],
        'PicArr': ['images/interface/Polar2.webp'],
        'backgroundImage': 'images/interface/Polar2.webp',
        'LevelName': $__language_Array__['e9115e2d52bd649cd6afede5ff145a20'],
        'LoadMusic': 'Bgm_Polar_Ready_JX_1',
        'StartGameMusic': 'Bgm_Polar_Fight_JX_1',
        'DKind': 0x0,
        'LoadAccess': function (b) {
            PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll), !oS['DKind'] && (NewEle('PolarFire2', 'div', null, 0x0, $('tGround')), NewEle('PolarFire', 'div', null, 0x0, $('tGround')));
            let c = NewEle('BGBOX_WIN', 'div', 'width:1400px;height:600px;z-index:199;', 0x0, $('dAll'));
            c['classList']['add']('BgMask-PolarJX'), NewImg('imgKK', 'images/interface/PolarJxStar.webp', 'left:0;top:0;' + (!$User['LowPerformanceMode'] ? 'animation:rotate2\x20130s\x20linear\x20infinite;' : ''), c), oSym['addTask'](0x5a, b);
            for (let d = 0x1; d < 0x6; d++) {
                CustomSpecial(oRifter, 0x1, d), CustomSpecial(oRifter, 0x5, d + 0x4), d > 0x1 && d < 0x5 && (CustomSpecial(oRifter, d, 0x5), CustomSpecial(oRifter, 0x2, d + 0x5), CustomSpecial(oRifter, 0x4, d - 0x1)), d != 0x5 && d != 0x2 && d != 0x4 && CustomSpecial(oGoDownIce, d, 0xa - d), d == 0x4 && CustomSpecial(oRandomIce, d, 0xa - d), d % 0x2 == 0x0 && CustomSpecial(oRandomIce, d, 0x4);
            }
            CustomSpecial(oRandomIce, 0x3, 0x3), CustomSpecial(oGoUpIce, 0x5, 0x4);
        },
        'StartGame': function () {
            StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(a => {
                oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x514, b => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
                });
            }), oSym['addTask'](0x514, function () {
                PlaceZombieRandom(oImp), oSym['addTask'](0x258, function () {
                    PlaceZombieRandom(oFootballZombie), oSym['addTask'](0x1f4, function () {
                        for (let a = 0x2; a < 0x5; a++) {
                            PlaceZombie(oStrollZombie, a, 0xb, 0x0);
                        }
                    });
                });
            });
        }
    }, {
        'AZ': [
            [
                oZomboni,
                0x1,
                0x1
            ],
            [
                oPushIceImp,
                0x1,
                0x1
            ],
            [
                oMakeRifterZombie,
                0x1,
                0x4
            ],
            [
                oSkatingZombie,
                0x1,
                0x3
            ],
            [
                oSadakoZombie,
                0x1,
                0x1
            ],
            [
                oImp,
                0x1,
                0x1
            ],
            [
                oBalloonZombie,
                0x1,
                0x5
            ],
            [
                oZombie,
                0x3,
                0x1
            ],
            [
                oFootballZombie,
                0x2,
                0x6
            ],
            [
                oStrollZombie,
                0x1,
                0x8
            ],
            [
                oCigarZombie,
                0x1,
                0x9
            ]
        ],
        'FlagNum': 0xa,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x4,
                0x5,
                0x7
            ],
            'a2': [
                0x0,
                0x0,
                0x0,
                0x0,
                0x0
            ]
        },
        'FlagToMonitor': {
            0x2: [a => {
                    for (let b = 0x0; b < 0xf; b++) {
                        oSym['addTask'](0x3e8 * Math['random'](), function () {
                            PlaceZombieRandom([
                                oBalloonZombie,
                                oImp,
                                oZombie,
                                oStrollZombie,
                                oCigarZombie,
                                oFootballZombie
                            ]['random']());
                        });
                    }
                }],
            0x3: [a => {
                    PlaceZombie(oBalloonZombie, 0x1, 0xb, 0x0);
                    for (let b = 0x0; b < 0x7; b++) {
                        oSym['addTask'](Math['random']() * 0x2bc + 0x2bc, function () {
                            PlaceZombieRandom([
                                oBalloonZombie,
                                oImp,
                                oZombie,
                                oStrollZombie,
                                oCigarZombie
                            ]['random']());
                        });
                    }
                    oSym['addTask'](0x578, function () {
                        for (let c = 0x0; c < 0x5; c++) {
                            oSym['addTask'](0x12c * c, function () {
                                PlaceZombie(oCigarZombie, c % 0x3 + 0x2, 0xb);
                            });
                        }
                    });
                }],
            0x4: [a => {
                    for (let b = 0x0; b < 0x8; b++) {
                        oSym['addTask'](b * 0xc8, function () {
                            PlaceZombieRandom(oSkatingZombie, 0x1), PlaceZombieRandom(oSkatingZombie, 0x5);
                        });
                    }
                    for (let c = 0x2; c < 0x5; c += 0x2) {
                        PlaceZombieRandom(oStrollZombie, c);
                    }
                    for (let d = 0x0; d < 0xf; d++) {
                        oSym['addTask'](Math['random']() * 0x960 + 0x44c, function () {
                            PlaceZombieRandom(oMakeRifterZombie);
                        });
                    }
                }],
            0x5: [a => {
                    for (let b = 0x0; b < 0x5; b++) {
                        oSym['addTask'](b * 0xfa, c => {
                            PlaceZombieRandom(oBalloonZombie);
                        }), oSym['addTask'](b * 0xfa, function () {
                            PlaceZombieRandom(oSkatingZombie, [
                                0x1,
                                0x5
                            ]['random']());
                        });
                    }
                    oSym['addTask'](0x320, function () {
                        for (let c = 0x0; c < 0xc; c++) {
                            oSym['addTask'](Math['random']() * 0x320, function () {
                                PlaceZombieRandom([
                                    oBalloonZombie,
                                    oStrollZombie,
                                    oImp
                                ]['random']());
                            });
                        }
                    }), oSym['addTask'](0x596, function () {
                        for (let c = 0x0; c < 0x2; c++) {
                            oSym['addTask'](c * 0x12c, function () {
                                for (let d = 0x0; d < 0x5; d++) {
                                    PlaceZombieRandom(oSadakoZombie);
                                }
                            });
                        }
                    });
                }],
            0x6: [b => {
                    for (let c = 0x0; c < 0x2; c++) {
                        oSym['addTask'](c * 0x12c, function () {
                            for (let d = 0x0; d < 0x5; d++) {
                                PlaceZombieRandom(oSadakoZombie);
                            }
                        });
                    }
                    for (let d = 0x0; d < 0x7; d++) {
                        oSym['addTask'](Math['random']() * 0x320, function () {
                            PlaceZombieRandom([
                                oSkatingZombie,
                                oSadakoZombie,
                                oBalloonZombie,
                                oStrollZombie,
                                oImp
                            ]['random']());
                        });
                    }
                    oSym['addTask'](0x320, e => {
                        for (let f = 0x0; f < 0x5; f++)
                            PlaceZombieRandom(oPushIceImp, f + 0x1);
                        oSym['addTask'](0x1f4, g => {
                            PlaceZombieRandom(oZomboni, 0x3);
                        });
                    });
                }],
            0x7: [a => {
                    for (let b = 0x0; b < 0x5; b++) {
                        PlaceZombie(oPushIceImp, b + 0x1, 0xb, 0x0);
                    }
                    oSym['addTask'](0x258, c => {
                        for (let d = 0x0; d < 0x5; d++) {
                            PlaceZombie(oStrollZombie, d + 0x1, 0xb, 0x0);
                        }
                    }), oSym['addTask'](0x514, c => {
                        for (let d = 0x0; d < 0x5; d++) {
                            PlaceZombie(oMakeRifterZombie, d + 0x1, 0xb, 0x0);
                        }
                    });
                }],
            0x8: [a => {
                    oSym['addTask'](0x2bc, b => {
                        for (let c = 0x0; c < 0x5; c++) {
                            PlaceZombie(oStrollZombie, c + 0x1, 0xb, 0x0);
                        }
                    });
                    for (let b = 0x0; b <= 0x5; b++) {
                        oSym['addTask'](Math['random']() * 0x190 + b * 0xc8, c => {
                            PlaceZombieRandom(oCigarZombie);
                        });
                    }
                }],
            0x9: [a => {
                    for (let b = 0x2; b < 0x5; b += 0x2) {
                        PlaceZombie(oZomboni, b, 0xb, 0x0);
                    }
                    for (let c = 0x0; c <= 0xa; c++) {
                        oSym['addTask'](Math['random']() * 0x960 + c * 0x64, d => {
                            PlaceZombieRandom(oBalloonZombie);
                        });
                    }
                    oSym['addTask'](0x12c, function () {
                        for (let d = 0x0; d < 0x5; d++) {
                            PlaceZombie(oFootballZombie, d + 0x1, 0xb, 0x0);
                        }
                    });
                }]
        }
    });
}