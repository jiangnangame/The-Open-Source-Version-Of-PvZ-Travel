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
        oSkatingZombie,
        oMakeRifterZombie,
        oZomboni,
        oFootballZombie
    ],
    'PicArr': ['images/interface/Polar.webp'],
    'LevelName': $__language_Array__['c65e73b3c5f56bd78798d53c878d4696'],
    'LoadMusic': 'Bgm_Polar_Ready_JX_2',
    'DKind': 0x1,
    'FixedProps': { 'LSP': { 'num': Infinity } },
    'StartGameMusic': 'Bgm_Polar_Fight_JX_2',
    'LoadAccess': function (b) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll), oSym['addTask'](0x5a, function () {
            b(0x0);
        });
    },
    'StartGame': function () {
        StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
            'fullValue': oP['FlagNum'] - 0x1,
            'curValue': 0x0
        }), PrepareGrowPlants(a => {
            oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x19), oSym['addTask'](0x9c4, b => {
                oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
            });
        });
    }
}, {
    'AZ': [
        [
            oSkatingZombie,
            0x2,
            0x1
        ],
        [
            oMakeRifterZombie,
            0x2,
            0x2
        ],
        [
            oZomboni,
            0x1,
            0x5
        ],
        [
            oFootballZombie,
            0x1,
            0x1,
            [
                0x6,
                0x7,
                0x8,
                0x9
            ]
        ]
    ],
    'FlagNum': 0x9,
    'FlagToMonitor': {
        0x1: [a => {
                let b = hasPlants(!![], function (c) {
                    return c['EName'] != 'oRifter' && c['EName'] != 'oRifterAnimate';
                });
                for (let c = 0x1; c <= 0x5; c++) {
                    PlaceZombie(oMakeRifterZombie, c, 0xb, 0x0);
                    if (b['length'] > 0x0 && c < 0x4) {
                        let d = Math['floor'](Math['random']() * b['length']), e = b[d];
                        CustomSpecial(oRifterAnimate, e['R'], e['C']), b['splice'](d, 0x1);
                    }
                    oSym['addTask'](Math['floor'](Math['random']() * 0x32), function () {
                        CustomSpecial(oRifterAnimate, c, c + 0x4), CustomSpecial(oRifterAnimate, c, 0x9 - c);
                    });
                }
            }],
        0x2: [a => {
                for (let b = 0x1; b <= 0x5; b++) {
                    PlaceZombie(oSkatingZombie, b, 0xb, 0x0), CustomSpecial(oRifterAnimate, b, 0x6), b % 0x2 == 0x0 && oSym['addTask'](Math['floor'](Math['random']() * 0x320) + 0x258, c => {
                        PlaceZombie(oFootballZombie, b, 0xb, 0x0);
                    }), oSym['addTask'](Math['floor'](Math['random']() * 0x1f4) + 0x384, c => {
                        PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                    });
                }
            }],
        0x3: [a => {
                let b = hasPlants(![], function (c) {
                    return c['EName'] == 'oSunFlower' || c['EName'] == 'oSunShroom' || c['EName'] == 'oMonotropa';
                });
                for (let c = 0x0; c < 0x2 && b['length'] > 0x0; c++) {
                    let d = Math['floor'](Math['random']() * b['length']), e = b[d];
                    CustomSpecial(oRifterAnimate, e['R'], e['C']), b['splice'](d, 0x1);
                }
                for (let f = 0x1; f <= 0xc; f++) {
                    oSym['addTask'](Math['floor'](Math['random']() * 0x708) + 0xc8, g => {
                        PlaceZombie(oSkatingZombie, Math['floor'](Math['random']() * 0x5 + 0x1), 0xb, 0x0), PlaceZombie(oMakeRifterZombie, Math['floor'](Math['random']() * 0x5 + 0x1), 0xb, 0x0);
                    });
                }
            }],
        0x4: [a => {
                for (let b = 0x0; b < 0x3; b++) {
                    CustomSpecial(oRifterAnimate, Math['floor'](Math['random']() * 0x5 + 0x1), Math['floor'](Math['random']() * 0x9 + 0x1));
                }
                oSym['addTask'](0x190, c => {
                    PlaceZombie(oZomboni, Math['floor'](Math['random']() * 0x5 + 0x1), 0xb, 0x0);
                }), oSym['addTask'](0x5f3, c => {
                    for (let d = 0x1; d < 0x6; d++)
                        PlaceZombie(oFootballZombie, d, 0xb, 0x0);
                });
            }],
        0x5: [a => {
                for (let b = 0x0; b < 0x4; b++) {
                    CustomSpecial(oRifterAnimate, Math['floor'](Math['random']() * 0x5 + 0x1), Math['floor'](Math['random']() * 0x9 + 0x1));
                }
                for (let c = 0x1; c < 0x6; c++) {
                    PlaceZombie(oSkatingZombie, c, 0xb, 0x0);
                }
                for (let d = 0x1; d <= 0x7; d++) {
                    oSym['addTask'](Math['floor'](Math['random']() * 0x578) + 0xc8, e => {
                        PlaceZombie(oFootballZombie, Math['floor'](Math['random']() * 0x5 + 0x1), 0xb, 0x0);
                    });
                }
            }],
        0x6: [a => {
                oSym['addTask'](0x12c, function b(c) {
                    for (let d = 0x1; d < 0x6; d++) {
                        PlaceZombie(oSkatingZombie, d, 0xb, 0x0);
                    }
                    c < 0x4 && oSym['addTask'](0x12c, b, [c + 0x1]);
                }, [0x1]), oSym['addTask'](Math['floor'](Math['random']() * 0x578) + 0x2bc, c => {
                    for (let d = 0x0; d < 0x2; d++)
                        PlaceZombie(oFootballZombie, Math['floor'](Math['random']() * 0x5 + 0x1), 0xb, 0x0);
                });
            }],
        0x7: [a => {
                let b = hasPlants(![], function (c) {
                    return c['EName'] == 'oSunFlower' || c['EName'] == 'oSunShroom' || c['EName'] == 'oMonotropa';
                });
                for (let c = 0x0; c < 0x5 && b['length'] > 0x0; c++) {
                    let d = Math['floor'](Math['random']() * b['length']), e = b[d];
                    CustomSpecial(oRifterAnimate, e['R'], e['C']), b['splice'](d, 0x1);
                }
                for (let f = 0x1; f < 0x6; f++) {
                    PlaceZombie(oSkatingZombie, f, 0xb, 0x0);
                }
            }],
        0x8: [a => {
                let b = hasPlants(!![], function (c) {
                    return c['EName'] != 'oSunFlower' && c['EName'] != 'oSunShroom' && c['EName'] != 'oMonotropa' && c['EName'] != 'oRifter' && c['EName'] != 'oRifterAnimate';
                });
                for (let c = 0x0; c < 0x3 && b['length'] > 0x0; c++) {
                    let d = Math['floor'](Math['random']() * b['length']), e = b[d];
                    CustomSpecial(oRifterAnimate, e['R'], e['C']), CustomSpecial(oRifterAnimate, Math['floor'](Math['random']() * 0x5 + 0x1), Math['floor'](Math['random']() * 0x9 + 0x1)), b['splice'](d, 0x1);
                }
                for (let f = 0x1; f < 0x6; f++) {
                    CustomSpecial(oRifterAnimate, f, 0x5), PlaceZombie(oSkatingZombie, f, 0xb, 0x0);
                }
                oSym['addTask'](0x12c, function () {
                    for (let g = 0x1; g < 0x6; g += 0x2) {
                        PlaceZombie(oFootballZombie, g, 0xb, 0x0);
                    }
                });
            }]
    },
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x7,
            0x8,
            0x9
        ],
        'a2': [
            0x1,
            0x5,
            0xa,
            0xf
        ]
    }
});