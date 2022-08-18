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
        oMiracleImitater,
        oJalapeno
    ],
    'ZName': [
        oSadakoZombie,
        oStrollZombie,
        oFootballZombie,
        oNewspaperZombie,
        oImp,
        oSkatingZombie,
        oMakeRifterZombie
    ],
    'LevelName': $__language_Array__['65ab70f3ca5989f449f471eb80c4f1fd'],
    'LoadMusic': 'Bgm_Polar_Ready_1',
    'StartGameMusic': 'Bgm_Polar_Fight_1',
    'LoadAccess'(b) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll);
        for (let c = 0x1; c < 0x4; c++) {
            for (let d = 0x1; d < 0x6; d++) {
                CustomSpecial(oRifter, d, c);
            }
        }
        for (let e = 0x7; e < 0xa; e++) {
            for (let f = 0x1; f < 0x6; f++) {
                CustomSpecial(oRifter, f, e);
            }
        }
        oSym['addTask'](0x5a, b);
    }
}, {
    'AZ': [
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
    'FlagNum': 0x10,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x2,
            0x4,
            0x5,
            0x7,
            0x9,
            0xa,
            0xf
        ],
        'a2': [
            0x1,
            0x2,
            0x3,
            0x5,
            0x8,
            0x10,
            0x14,
            0x12,
            0x1e
        ]
    }
});