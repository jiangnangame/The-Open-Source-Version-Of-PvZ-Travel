/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oSunShroom,
        oPeashooter,
        oRepeater,
        oPotatoMine,
        oBegonia,
        oDoomShroom
    ],
    'ZName': [
        oZomboni,
        oImp,
        oSkatingZombie,
        oSadakoZombie
    ],
    'PicArr': ['images/interface/Polar.webp'],
    'LevelName': $__language_Array__['4e020436f5e61939d62c6f60897fe2e7'],
    'DKind': 0x1,
    'CanSelectCard': 0x0,
    'LoadMusic': 'Bgm_Polar_Ready_JX_2',
    'StartGameMusic': 'Bgm_Polar_Fight_JX_2',
    'LoadAccess': function (b) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll), oSym['addTask'](0x5a, function () {
            b(0x0);
        });
    },
    'StartGame': a => {
        StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
            'fullValue': oP['FlagNum'] - 0x1,
            'curValue': 0x0
        }), PrepareGrowPlants(b => {
            oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x19), oSym['addTask'](0xbb8, c => {
                oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
            });
        });
    }
}, {
    'AZ': [
        [
            oSadakoZombie,
            0x3,
            0x4
        ],
        [
            oImp,
            0x2,
            0x1
        ],
        [
            oZomboni,
            0x1,
            0x8
        ],
        [
            oSkatingZombie,
            0x3,
            0x5
        ]
    ],
    'FlagNum': 0x7,
    'FlagToMonitor': {
        0x2: [a => {
                oSym['addTask'](0x12c, function () {
                    for (let b = 0x1; b < 0x6; b++) {
                        CustomSpecial(oRifterAnimate, b, 0x5);
                    }
                    oSym['addTask'](0x1f4, c => {
                        for (let d = 0x1; d < 0x6; d += 0x2) {
                            PlaceZombie(oImp, d, 0xb, 0x0), PlaceZombie(oSkatingZombie, d, 0xb, 0x0);
                        }
                    });
                });
            }],
        0x4: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    CustomSpecial(oRifterAnimate, b, 0x9);
                }
                oSym['addTask'](0x1f4, c => {
                    for (let d = 0x1; d < 0x6; d++) {
                        PlaceZombie(oSkatingZombie, d, 0xb, 0x0);
                    }
                });
            }],
        0x6: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    PlaceZombie(oSadakoZombie, b, 0xb, 0x0);
                }
                oSym['addTask'](0x190, function () {
                    PlaceZombie(oZomboni, [
                        0x2,
                        0x4
                    ]['random'](), 0xb, 0x0);
                });
            }]
    },
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x3,
            0x5
        ],
        'a2': [
            0x1,
            0x3,
            0x7,
            0xc
        ]
    }
});