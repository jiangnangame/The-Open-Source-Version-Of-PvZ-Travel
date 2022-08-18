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
        oKiwibeast
    ],
    'ZName': [
        oZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oImp,
        oMembraneZombie,
        oCigarZombie,
        oMakeRifterZombie,
        oSkatingZombie,
        oStrollZombie,
        oFootballZombie,
        oSculptorZombie,
        oSculpture
    ],
    'LevelName': $__language_Array__['9577fb07e5be0cdc3ba37d9d5064d1f2'],
    'LockedCards': [[
            oElecTurnip,
            0x0
        ]],
    'LoadAccess'(b) {
        NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
        for (let c = 0x3; c <= 0x6; c++) {
            for (let d = 0x1; d <= 0x5; d++) {
                PlaceZombie(oSculpture, d, c);
            }
        }
        for (let e = 0x1; e <= 0x5; e++) {
            PlaceZombie(oSculpture, e, 0x9);
        }
        for (let f = 0x1; f <= 0x5; f += 0x2) {
            PlaceZombie(oSculpture, f, 0x2);
        }
        for (let g = 0x2; g <= 0x5; g += 0x2) {
            PlaceZombie(oSculpture, g, 0x8);
        }
        CustomSpecial(oTrafficLight, 0x2, 0x7), CustomSpecial(oTrafficLight, 0x4, 0x7), oSym['addTask'](0x5a, b);
    },
    'HaveFog': {
        'leftBorder': 0x3,
        'type': 'Fog'
    }
}, {
    'AZ': [
        [
            oZombie,
            0x3,
            0x1,
            [
                0x1,
                0xa,
                0xb,
                0xc,
                0xd,
                0xe,
                0xf
            ]
        ],
        [
            oConeheadZombie,
            0x1,
            0x2,
            [0x2]
        ],
        [
            oBucketheadZombie,
            0x1,
            0xa
        ],
        [
            oImp,
            0x2,
            0x1,
            [
                0x1,
                0xa,
                0xb,
                0xc,
                0xd,
                0xe,
                0xf
            ]
        ],
        [
            oMembraneZombie,
            0x2,
            0x3,
            [
                0x3,
                0x4,
                0x5,
                0xa,
                0x13,
                0x14
            ]
        ],
        [
            oCigarZombie,
            0x2,
            0x3,
            [
                0x3,
                0xa,
                0x13,
                0x14
            ]
        ],
        [
            oMakeRifterZombie,
            0x1,
            0x3
        ],
        [
            oSkatingZombie,
            0x1,
            0x3
        ],
        [
            oStrollZombie,
            0x1,
            0x2
        ],
        [
            oFootballZombie,
            0x1,
            0x6
        ],
        [
            oSculptorZombie,
            0x1,
            0x8,
            [
                0x9,
                0xf
            ]
        ]
    ],
    'FlagNum': 0x10,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x2,
            0x5,
            0x7,
            0x9,
            0xb,
            0xd,
            0xf,
            0x10
        ],
        'a2': [
            0x2,
            0x3,
            0x5,
            0x14,
            0x1e,
            0x30,
            0x1e,
            0x2d,
            0x3c
        ]
    },
    'FlagToMonitor': {
        0x6: [a => {
                for (let b = 0x1; b <= 0x5; b++) {
                    PlaceZombie(oConeheadZombie, b, 0xb, 0x0);
                }
            }],
        0x7: [a => {
                for (let b = 0x1; b <= 0x5; b++) {
                    PlaceZombie(oSculpture, b, 0xb, 0x0), PlaceZombie(oSculptorZombie, b, 0xc, 0x0);
                }
                oSym['addTask'](0x1f4, c => {
                    for (let d = 0x1; d < 0x6; d++) {
                        !oGd['$LockingGrid'][d + '_11'] && PlaceZombie(oSculpture, d, 0xb, 0x0);
                    }
                    for (let e = 0x1; e <= 0x5; e++) {
                        PlaceZombie(oSculptorZombie, e, 0xc, 0x0);
                    }
                }), oSym['addTask'](0x3e8, c => {
                    for (let d = 0x1; d < 0x6; d++) {
                        PlaceZombie(oMembraneZombie, d, 0xc, 0x0), PlaceZombie(oMembraneZombie, d, 0xb, 0x0);
                    }
                });
            }],
        0xb: [a => {
                for (let b = 0x1; b <= 0x5; b++) {
                    !oGd['$LockingGrid'][b + '_11'] && PlaceZombie(oSculpture, b, 0xb, 0x0), PlaceZombie(oSculptorZombie, b, 0xc, 0x0), PlaceZombie(oFootballZombie, b, 0xc, 0x0);
                }
            }],
        0xe: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    PlaceZombie(oMembraneZombie, b, 0xc, 0x0), PlaceZombie(oMembraneZombie, b, 0xb, 0x0);
                }
                oSym['addTask'](0x1f4, c => {
                    for (let d = 0x1; d < 0x6; d++) {
                        !oGd['$LockingGrid'][d + '_11'] && PlaceZombie(oSculpture, d, 0xb, 0x0);
                    }
                    for (let e = 0x1; e <= 0x5; e++) {
                        PlaceZombie(oSculptorZombie, e, 0xc, 0x0);
                    }
                }), oSym['addTask'](0x5dc, c => {
                    for (let d = 0x1; d <= 0x5; d++) {
                        PlaceZombie(oSculptorZombie, d, 0xb, 0x0), PlaceZombie(oFootballZombie, d, 0xc, 0x0);
                    }
                });
            }]
    }
});