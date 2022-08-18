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
        oImp,
        oSadakoZombie,
        oZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oPushIceImp,
        oSkatingZombie,
        oNewspaperZombie,
        oMembraneZombie,
        oZomboni
    ],
    'LevelName': $__language_Array__['a2c40869dbf45721bfeac882a37dbfde'],
    'LoadMusic': 'Bgm_Polar_Ready_JX_2',
    'StartGameMusic': 'Bgm_Polar_Fight_JX_2',
    'FixedProps': { 'LSP': { 'num': Infinity } },
    'LoadAccess'(a) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll);
        for (let b = 0x1; b < 0x6; b++) {
            for (let c = 0x1; c < 0xa; c++) {
                if (b % 0x2 == c % 0x2) {
                    if (b % 0x3 > c % 0x3)
                        b != 0x1 && CustomSpecial(oGoUpIce, b, c);
                    else {
                        if (b % 0x3 < c % 0x3)
                            b != 0x5 && CustomSpecial(oGoDownIce, b, c);
                        else {
                            if (b == 0x5)
                                CustomSpecial(oGoUpIce, b, c);
                            else
                                b == 0x1 ? CustomSpecial(oGoDownIce, b, c) : CustomSpecial(oRandomIce, b, c);
                        }
                    }
                }
            }
        }
        oSym['addTask'](0x5a, a);
    },
    'StartGame': function () {
        StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
            'fullValue': oP['FlagNum'] - 0x1,
            'curValue': 0x0
        }), PrepareGrowPlants(a => {
            oP['Monitor'](), BeginCool(), oSym['addTask'](0x258, b => {
                oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
            }), oSym['addTask'](0x25d, function b(c = 0x0) {
                for (let d = 0x1; d < 0x6; d++) {
                    PlaceZombie(oZomboni, d, 0xc, 0x0);
                }
                c < 0x3 && oSym['addTask'](0x33e, b, [c + 0x1]);
            });
        });
    }
}, {
    'AZ': [
        [
            oZomboni,
            0x1,
            0xe
        ],
        [
            oImp,
            0x1,
            0x1
        ],
        [
            oSadakoZombie,
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
            0x2,
            0x1
        ],
        [
            oBucketheadZombie,
            0x2,
            0x1
        ],
        [
            oPushIceImp,
            0x2,
            0x6
        ],
        [
            oSkatingZombie,
            0x2,
            0x1
        ],
        [
            oNewspaperZombie,
            0x1,
            0x1
        ],
        [
            oMembraneZombie,
            0x3,
            0x7
        ]
    ],
    'FlagNum': 0xf,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x2,
            0x3,
            0x4,
            0x5,
            0x7,
            0x9,
            0xa,
            0xd,
            0xe,
            0xf
        ],
        'a2': [
            0x2,
            0x1,
            0x3,
            0x7,
            0x14,
            0xa,
            0xf,
            0x14,
            0x19,
            0x2d,
            0x5
        ]
    },
    'FlagToMonitor': {
        0x1: [a => {
                for (let b = 0x2; b < 0x6; b += 0x2) {
                    PlaceZombie(oMembraneZombie, b, 0xb, 0x0);
                }
            }],
        0x3: [a => {
                for (let b = 0x1; b < 0x6; b += 0x2) {
                    PlaceZombie(oMembraneZombie, b, 0xb, 0x0);
                }
            }],
        0x6: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    for (let c = 0x5; c < 0xa; c++) {
                        b % 0x2 != c % 0x2 && CustomSpecial(oRifterAnimate, b, c);
                    }
                    PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                }
                oSym['addTask'](0x4b0, d => {
                    for (let e = 0x1; e < 0x6; e += 0x2) {
                        PlaceZombie(oZomboni, e, 0xc, 0x0);
                    }
                });
            }],
        0x7: [a => {
                for (let b = 0x2; b < 0x6; b += 0x2) {
                    PlaceZombie(oMembraneZombie, b, 0xb, 0x0);
                }
                oSym['addTask'](0x4b0, c => {
                    for (let d = 0x1; d < 0x6; d++) {
                        PlaceZombie(oPushIceImp, d, 0xb, 0x0);
                    }
                });
            }],
        0x9: [a => {
                oSym['addTask'](0x25d, function b(c = 0x0) {
                    for (let d = 0x1; d < 0x6; d++) {
                        PlaceZombie(oMembraneZombie, d, 0xc, 0x0);
                    }
                    c < 0x3 && oSym['addTask'](0x4b0, b, [c + 0x1]);
                    for (let e = 0x1; e < 0x6; e++) {
                        for (let f = 0x5; f < 0xa; f++) {
                            e % 0x2 != f % 0x2 && CustomSpecial(oRifterAnimate, e, f);
                        }
                    }
                }), oSym['addTask'](0x320, c => {
                    for (let d = 0x1; d < 0x6; d++) {
                        PlaceZombie(oSkatingZombie, d, 0xb, 0x0);
                    }
                });
            }],
        0xb: [a => {
                PlaceZombie(oZomboni, [
                    0x1,
                    0x2,
                    0x4,
                    0x5
                ]['random'](), 0xc, 0x0), PlaceZombie(oZomboni, 0x3, 0xc, 0x0), oSym['addTask'](0x2bc, function () {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oSkatingZombie, b, 0xb, 0x0), PlaceZombie(oSadakoZombie, b, 0xb, 0x0), b % 0x2 == 0x0 && PlaceZombie(oBucketheadZombie, b, 0xb, 0x0);
                    }
                });
            }],
        0xc: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    PlaceZombie(oZomboni, b, 0xb, 0x0);
                }
                oSym['addTask'](0x320, c => {
                    for (let d = 0x1; d < 0x6; d++) {
                        for (let e = 0x5; e < 0xa; e++) {
                            d % 0x2 != e % 0x2 && CustomSpecial(oRifterAnimate, d, e);
                        }
                    }
                    for (let f = 0x0; f < 0x6; f++) {
                        oSym['addTask'](0xc8 * f, PlaceZombie, [
                            oSkatingZombie,
                            f % 0x5 + 0x1,
                            0xb,
                            0x0
                        ]), oSym['addTask'](0xc8 * f, PlaceZombie, [
                            oSkatingZombie,
                            0x5 - f % 0x5,
                            0xb,
                            0x0
                        ]);
                    }
                });
            }],
        0xd: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    PlaceZombie(oBucketheadZombie, b, 0xb, 0x0);
                }
                oSym['addTask'](0x12c, function c(d = 0x0) {
                    for (let e = 0x1; e < 0x6; e++) {
                        PlaceZombie(oZomboni, e, 0xc, 0x0);
                    }
                    d < 0x3 && oSym['addTask'](0x33e, c, [d + 0x1]);
                });
            }]
    }
});