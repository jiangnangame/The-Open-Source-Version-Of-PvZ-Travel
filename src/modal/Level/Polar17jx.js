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
        oMiracleImitater,
        oJalapeno
    ],
    'ZName': [
        oZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oStrollZombie,
        oSadakoZombie,
        oFootballZombie,
        oImp,
        oMembraneZombie,
        oSkatingZombie
    ],
    'PicArr': ['images/interface/Polar.webp'],
    'LevelName': $__language_Array__['23c0ad8b35fcff65ecc0f434d80f2f16'],
    'DKind': 0x1,
    'LoadMusic': 'Bgm_Polar_Ready_JX_2',
    'StartGameMusic': 'Bgm_Polar_Fight_JX_2',
    'FixedProps': { 'LSP': { 'num': Infinity } },
    'LoadAccess': function (b) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll), oSym['addTask'](0x5a, function () {
            b(0x0);
        });
    },
    'StartGame': a => {
        oSym['addTask'](0x96, b => {
            oS['DKind'] && AutoProduceSun(0x19);
        }), oMiniGames['Frostbite'](0x7d0, 0x28), oSym['addTask'](0x64, function () {
            for (let b = 0x2; b < 0xa; b++) {
                for (let c = 0x1; c < 0x6; c++) {
                    if (b % 0x3 == c % 0x2)
                        oSym['addTask'](c * b * 0x32, d => {
                            CustomSpecial(oRifterAnimate, c, b);
                        });
                }
            }
        });
    }
}, {
    'AZ': [
        [
            oZombie,
            0x2,
            0x1
        ],
        [
            oConeheadZombie,
            0x2,
            0x1
        ],
        [
            oBucketheadZombie,
            0x1,
            0x1
        ],
        [
            oStrollZombie,
            0x1,
            0x1
        ],
        [
            oSadakoZombie,
            0x1,
            0x1
        ],
        [
            oFootballZombie,
            0x1,
            0x3
        ],
        [
            oImp,
            0x1,
            0x2
        ],
        [
            oMembraneZombie,
            0x1,
            0x5
        ],
        [
            oSkatingZombie,
            0x1,
            0x5
        ]
    ],
    'FlagNum': 0x9,
    'FlagToMonitor': {
        0x1: [a => {
                PlaceZombie(oSadakoZombie, [
                    0x1,
                    0x3,
                    0x4
                ]['random'](), 0xb, 0x0);
                for (let b = 0x0; b < 0xf; b++) {
                    oSym['addTask'](0x76c * Math['random'](), PlaceZombie, [
                        oImp,
                        [
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]['random'](),
                        0xb,
                        0x0
                    ]);
                }
            }],
        0x2: [a => {
                for (let b = 0x1; b < 0x6; b += 0x2) {
                    PlaceZombie(oBucketheadZombie, b, 0xb, 0x0);
                }
                for (let c = 0x0; c < 0x2d; c++) {
                    oSym['addTask'](0xc8 * c, PlaceZombie, [
                        oStrollZombie,
                        c % 0x5 + 0x1,
                        0xb,
                        0x0
                    ]), oSym['addTask'](0xc8 * c, PlaceZombie, [
                        oStrollZombie,
                        0x5 - c % 0x5,
                        0xb,
                        0x0
                    ]);
                }
                oSym['addTask'](0x2bc, d => {
                    for (let e = 0x2; e < 0x6; e += 0x2) {
                        PlaceZombie(oBucketheadZombie, e, 0xb, 0x0);
                    }
                }), oSym['addTask'](0x1f4, d => {
                    for (let e = 0x1; e < 0x6; e++)
                        PlaceZombie(oBucketheadZombie, e, 0xb, 0x0);
                });
            }],
        0x3: [a => {
                for (let b = 0x0; b < 0x4; b++) {
                    oSym['addTask'](0x76c * Math['random'](), PlaceZombie, [
                        oBucketheadZombie,
                        [
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]['random'](),
                        0xb,
                        0x0
                    ]);
                }
                for (let c = 0x0; c < 0x9; c += 0x2) {
                    oSym['addTask'](0xc8 * c, PlaceZombie, [
                        oFootballZombie,
                        c % 0x5 + 0x1,
                        0xb,
                        0x0
                    ]), oSym['addTask'](0xc8 * c, PlaceZombie, [
                        oFootballZombie,
                        0x5 - c % 0x5,
                        0xb,
                        0x0
                    ]);
                }
            }],
        0x4: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    CustomSpecial(oRifterAnimate, b, 0x9), CustomSpecial(oRifterAnimate, b, 0x5);
                }
                oSym['addTask'](0x1f4, function () {
                    for (let c = 0x1; c < 0x6; c++) {
                        PlaceZombie(oSkatingZombie, c, 0xb, 0x0), PlaceZombie(oMembraneZombie, c, 0xb, 0x0);
                    }
                });
            }],
        0x5: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    oSym['addTask'](0xc8 * b, PlaceZombie, [
                        oFootballZombie,
                        b,
                        0xb,
                        0x0
                    ]), oSym['addTask'](0x15e * b, PlaceZombie, [
                        oSkatingZombie,
                        b,
                        0xb,
                        0x0
                    ]), oSym['addTask'](0x190 * b, PlaceZombie, [
                        oBucketheadZombie,
                        b,
                        0xb,
                        0x0
                    ]), oSym['addTask'](0x1f4 * b, PlaceZombie, [
                        oMembraneZombie,
                        b,
                        0xb,
                        0x0
                    ]);
                }
                oSym['addTask'](0x708, c => {
                    for (let d = 0x1; d < 0x6; d++)
                        PlaceZombie(oBucketheadZombie, d, 0xb, 0x0);
                });
            }],
        0x6: [a => {
                for (let c = 0x0; c < 0x11; c++) {
                    oSym['addTask'](0xc8 * c, PlaceZombie, [
                        oStrollZombie,
                        c % 0x5 + 0x1,
                        0xb,
                        0x0
                    ]), oSym['addTask'](0xc8 * c, PlaceZombie, [
                        oStrollZombie,
                        0x5 - c % 0x5,
                        0xb,
                        0x0
                    ]), oSym['addTask'](0x96 * c, PlaceZombie, [
                        oConeheadZombie,
                        c % 0x5 + 0x1,
                        0xb,
                        0x0
                    ]), oSym['addTask'](0x96 * c, PlaceZombie, [
                        oConeheadZombie,
                        0x5 - c % 0x5,
                        0xb,
                        0x0
                    ]);
                }
                for (let d = 0x0; d < 0x9; d += 0x2) {
                    oSym['addTask'](0x190 * d, PlaceZombie, [
                        oMembraneZombie,
                        d % 0x5 + 0x1,
                        0xb,
                        0x0
                    ]), oSym['addTask'](0x190 * d, PlaceZombie, [
                        oMembraneZombie,
                        0x5 - d % 0x5,
                        0xb,
                        0x0
                    ]);
                }
                for (let e = 0x1; e < 0x6; e++) {
                    PlaceZombie(oFootballZombie, e, 0xb, 0x0), oSym['addTask'](0x12c * e, PlaceZombie, [
                        oMembraneZombie,
                        e,
                        0xb,
                        0x0
                    ]);
                }
                let b = hasPlants(!![], function (f) {
                    return f['EName'] != 'oRifter' && f['EName'] != 'oRifterAnimate';
                });
                for (let f = 0x0; f < 0x5 && b['length'] > 0x0; f++) {
                    let g = Math['floor'](Math['random']() * b['length']), h = b[g];
                    CustomSpecial(oRifterAnimate, h['R'], h['C']), b['splice'](g, 0x1);
                }
            }],
        0x7: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    PlaceZombie(oFootballZombie, b, 0xb, 0x0);
                }
                for (let c = 0x1; c < 0x10; c++) {
                    oSym['addTask'](0xc8 * c, PlaceZombie, [
                        oSadakoZombie,
                        c % 0x5 + 0x1,
                        0xb,
                        0x0
                    ]);
                }
                for (let d = 0x0; d < 0xf; d++) {
                    oSym['addTask'](0x76c * Math['random'](), PlaceZombie, [
                        oBucketheadZombie,
                        [
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]['random'](),
                        0xb,
                        0x0
                    ]);
                }
            }],
        0x8: [a => {
                oSym['addTask'](0x190, function () {
                    for (let b = 0x0; b < 0x5; b++) {
                        oSym['addTask'](0x96 * b, PlaceZombie, [
                            oSkatingZombie,
                            b % 0x5 + 0x1,
                            0xb,
                            0x0
                        ]), oSym['addTask'](0x96 * b, PlaceZombie, [
                            oSkatingZombie,
                            0x5 - b % 0x5,
                            0xb,
                            0x0
                        ]), oSym['addTask'](0x96 * b, PlaceZombie, [
                            oStrollZombie,
                            b % 0x5 + 0x1,
                            0xb,
                            0x0
                        ]), oSym['addTask'](0x96 * b, PlaceZombie, [
                            oStrollZombie,
                            0x5 - b % 0x5,
                            0xb,
                            0x0
                        ]);
                    }
                });
                for (let b = 0x4; b < 0xa; b++) {
                    for (let c = 0x1; c < 0x6; c++) {
                        CustomSpecial(oRifterAnimate, c, b);
                    }
                }
            }]
    },
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x3,
            0x7,
            0x8
        ],
        'a2': [
            0x3,
            0x5,
            0x10,
            0x12,
            0x18
        ]
    }
});