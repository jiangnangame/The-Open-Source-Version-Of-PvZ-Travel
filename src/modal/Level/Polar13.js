/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oSunShroom,
        oSnowPea,
        oMonotropa,
        oRadish,
        oFumeShroom,
        oMiracleImitater,
        oJalapeno
    ],
    'ZName': [
        oSadakoZombie,
        oSkatingZombie,
        oStrollZombie,
        oPushIceImp,
        oMembraneZombie,
        oMakeRifterZombie
    ],
    'LevelName': $__language_Array__['0fd07d81f01852d3b4ecdccad3dfb95c'],
    'LoadMusic': 'Bgm_Polar_Ready_1',
    'StartGameMusic': 'Bgm_Polar_Fight_1',
    'CanSelectCard': 0x0,
    'FixedProps': 'disabled',
    'LoadAccess': function (b) {
        NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll), PlayAudio('Bgm_Polar_Noise', 0x1), oSym['addTask'](0x5a, b, [0x0]);
    }
}, {
    'AZ': [
        [
            oSadakoZombie,
            0x1,
            0x5
        ],
        [
            oStrollZombie,
            0x2,
            0x1
        ],
        [
            oPushIceImp,
            0x1,
            0x5
        ],
        [
            oMembraneZombie,
            0x1,
            0x5
        ],
        [
            oMakeRifterZombie,
            0x2,
            0x1,
            [0x1]
        ],
        [
            oSkatingZombie,
            0x1,
            0x5,
            [0x5]
        ]
    ],
    'FlagNum': 0x16,
    'FlagToSumNum': {
        'a1': [
            0x4,
            0x5,
            0x9,
            0xa,
            0xc,
            0x12,
            0x15
        ],
        'a2': [
            0x1,
            0x3,
            0x8,
            0x18,
            0xa,
            0xf,
            0x12,
            0x1c
        ]
    }
});