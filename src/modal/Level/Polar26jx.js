/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let oStrollZombieCopySPN = InheritO(oStrollZombie, {
        'EName': 'oStrollZombieCopySPN',
        'nowtype': ![],
        'OSpeed': 4.8,
        'Speed': 4.8,
        'HP': 0x1f4
    });
    oS['Init']({
        'PName': [
            oPotatoMine,
            oStoneFlower,
            oRadish,
            oPuffShroom,
            oIceAloe,
            oCherryBomb,
            oDoomShroom
        ],
        'ZName': [
            oImp,
            oSadakoZombie,
            oConeheadZombie,
            oBucketheadZombie,
            oCaskZombie,
            oZomboni,
            oFootballZombie,
            oMembraneZombie,
            oStrollZombieCopySPN
        ],
        'LevelName': $__language_Array__['f1f85e6f29547c83194c93f9a7643b8a'],
        'LoadMusic': 'Bgm_Polar_Ready_JX_2',
        'StartGameMusic': 'Bgm_Polar_Fight_JX_2',
        'CanSelectCard': 0x0,
        'StaticCard': 0x0,
        'LoadAccess'(a) {
            PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll), oSym['addTask'](0x5a, a);
        },
        'StartGame': a => {
            oMiniGames['ConveyorBelt']([
                oPotatoMine,
                oStoneFlower,
                oRadish,
                oPuffShroom,
                oIceAloe
            ], 0x190, 0x3, [
                'random',
                'random',
                'random',
                'random',
                'random',
                oRadish,
                oRadish,
                oRadish,
                oCherryBomb,
                oDoomShroom,
                oCherryBomb,
                oDoomShroom
            ]['shuffle']());
        }
    }, {
        'AZ': [
            [
                oStrollZombieCopySPN,
                0x1,
                0xf
            ],
            [
                oImp,
                0x1,
                0x1
            ],
            [
                oSadakoZombie,
                0x1,
                0x1,
                [
                    0x1,
                    0x2,
                    0x3,
                    0x4,
                    0x5
                ]
            ],
            [
                oConeheadZombie,
                0x2,
                0x6
            ],
            [
                oBucketheadZombie,
                0x2,
                0x6,
                [
                    0x14,
                    0x17
                ]
            ],
            [
                oCaskZombie,
                0x2,
                0x6
            ],
            [
                oZomboni,
                0x3,
                0x15,
                [
                    0x15,
                    0x16,
                    0x17
                ]
            ],
            [
                oFootballZombie,
                0x2,
                0x6,
                [0x14]
            ],
            [
                oMembraneZombie,
                0x3,
                0xf,
                [0x14]
            ]
        ],
        'FlagNum': 0x8,
        'FlagToSumNum': {
            'a1': [
                0x5,
                0x7,
                0x9,
                0xa,
                0xd
            ],
            'a2': [
                0x2,
                0xa,
                0x10,
                0x19,
                0x23
            ]
        },
        'FlagToMonitor': {
            0x2: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        oSym['addTask'](Math['sin'](b) * 0x64 + 0x64, c => {
                            PlaceZombie(oConeheadZombie, b, 0xb, 0x0);
                        }), oSym['addTask'](Math['abs'](Math['cos'](b) * 0x3e8) + 0x12c, c => {
                            PlaceZombie(oBucketheadZombie, b, 0xb, 0x0);
                        });
                    }
                }],
            0x3: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        oSym['addTask'](Math['min'](Math['abs'](Math['tan'](b * 0xb4) * 0x258 + 0x258), 0x7d0), c => {
                            PlaceZombie(oZomboni, b, 0xc, 0x0);
                        });
                    }
                }],
            0x4: [a => {
                    for (let b = 0x0; b < 0xa; b++) {
                        oSym['addTask'](Math['sin'](b * 0x7) * 0x3e8 + 0x3e8, c => {
                            PlaceZombie([
                                oZombie,
                                oBucketheadZombie,
                                oConeheadZombie,
                                oMembraneZombie,
                                oZombie,
                                oBucketheadZombie,
                                oConeheadZombie,
                                oMembraneZombie,
                                oFootballZombie,
                                oCaskZombie
                            ]['random'](), b % 0x5 + 0x1, 0xb, 0x0);
                        });
                    }
                }],
            0x5: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oStrollZombieCopySPN, b, 0xb, 0x0), oSym['addTask'](Math['random']() * b * 0xc8 + 0xc8, c => {
                            PlaceZombie(oStrollZombieCopySPN, b, 0xb, 0x0);
                        });
                    }
                    PlaceZombie(oCaskZombie, 0x1, 0xb, 0x0), PlaceZombie(oMembraneZombie, 0x3, 0xb, 0x0), PlaceZombie(oCaskZombie, 0x5, 0xb, 0x0);
                }],
            0x6: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        CustomSpecial(oRifterAnimate, b, 0x9), CustomSpecial(oRifterAnimate, b, 0x5), PlaceZombie(oMembraneZombie, b, 0xb, 0x0);
                    }
                    for (let c = 0x1; c < 0x6; c++) {
                        PlaceZombie(oStrollZombieCopySPN, c, 0xb, 0x0), oSym['addTask'](Math['random']() * c * 0xc8 + 0xc8, d => {
                            PlaceZombie(oStrollZombieCopySPN, c, 0xb, 0x0);
                        });
                    }
                    PlaceZombie(oFootballZombie, 0x3, 0xb, 0x0);
                    for (let d = 0x0; d < 0x1e; d++) {
                        oSym['addTask'](Math['sin'](d * 0x7) * 0x3e8 + 0x3e8, e => {
                            PlaceZombie([
                                oZombie,
                                oBucketheadZombie,
                                oConeheadZombie,
                                oMembraneZombie,
                                oZombie,
                                oBucketheadZombie,
                                oConeheadZombie,
                                oMembraneZombie,
                                oFootballZombie,
                                oCaskZombie
                            ]['random'](), d % 0x5 + 0x1, 0xb, 0x0);
                        });
                    }
                    oSym['addTask'](0x1c2, function () {
                        for (let e = 0x1; e < 0x6; e++) {
                            PlaceZombie(oSkatingZombie, e, 0xb, 0x0);
                        }
                    });
                }],
            0x7: [b => {
                    for (let c = 0x0; c < 0x2; c++) {
                        oSym['addTask'](c * 0x190, function () {
                            for (let d = 0x1; d < 0x6; d++) {
                                oSym['addTask'](d * 0x50, e => {
                                    PlaceZombie(oStrollZombieCopySPN, d, 0xb, 0x0), PlaceZombie(oStrollZombieCopySPN, 0x6 - d, 0xb, 0x0);
                                }), PlaceZombie(oZomboni, d, 0xb, 0x0);
                            }
                        });
                    }
                    for (let d = 0x0; d < 0x4; d++) {
                        oSym['addTask'](Math['sin'](d * 0x3) * 0x1f4 + 0x1f4, e => {
                            PlaceZombie([
                                oZombie,
                                oBucketheadZombie,
                                oConeheadZombie,
                                oMembraneZombie,
                                oZombie,
                                oBucketheadZombie,
                                oConeheadZombie,
                                oMembraneZombie,
                                oFootballZombie,
                                oCaskZombie
                            ]['random'](), d % 0x5 + 0x1, 0xb, 0x0);
                        });
                    }
                }]
        }
    });
}