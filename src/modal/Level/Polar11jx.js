/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oImitater,
        oMonotropa,
        oPuffShroom,
        oIceAloe,
        oCherryBomb,
        oWallNut
    ],
    'ZName': [
        oMakeRifterZombie,
        oImp,
        oZombie,
        oBucketheadZombie,
        oStrollZombie,
        oSadakoZombie,
        oSkatingZombie
    ],
    'PicArr': ['images/interface/Polar2.webp'],
    'LevelName': $__language_Array__['f89b9f65c61b412e81fa868ef3b1dc3a'],
    'LoadMusic': 'Bgm_Polar_Ready_JX_1',
    'StartGameMusic': 'Bgm_Polar_Fight_JX_1',
    'DKind': 0x0,
    'CanSelectCard': 0x0,
    'LoadAccess': function (b) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll), !oS['DKind'] && (NewEle('PolarFire2', 'div', null, 0x0, $('tGround')), NewEle('PolarFire', 'div', null, 0x0, $('tGround')));
        let c = NewEle('BGBOX_WIN', 'div', 'width:1400px;height:600px;z-index:199;', 0x0, $('dAll'));
        c['classList']['add']('BgMask-PolarJX'), NewImg('imgKK', 'images/interface/PolarJxStar.webp', 'left:0;top:0;' + (!$User['LowPerformanceMode'] ? 'animation:rotate2\x20130s\x20linear\x20infinite;' : ''), c), oSym['addTask'](0x5a, b);
        for (let d = 0x1; d < 0xa; d++) {
            for (let e = 0x1; e < 0x6; e++) {
                if (e % 0x2 == 0x0)
                    d != 0x5 ? CustomSpecial(oRifter, e, d) : CustomSpecial(oRandomIce, e, d);
                else {
                    if (d != 0x1 && d <= 0x3 || d >= 0x6) {
                        if (d == 0x2 && e == 0x3)
                            continue;
                        CustomSpecial(oRifter, e, d);
                    }
                }
            }
        }
    },
    'StartGame': function () {
        StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
            'fullValue': oP['FlagNum'] - 0x1,
            'curValue': 0x0
        }), PrepareGrowPlants(a => {
            oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x2bc, b => {
                oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
            });
        }), oSym['addTask'](0x2bc, function () {
            for (let a = 0x1; a <= 0x5; a += 0x2)
                PlaceZombie(oImp, a, 0xb, 0x0);
        }), oSym['addTask'](0x320, function () {
            for (let a = 0x2; a <= 0x5; a += 0x2)
                PlaceZombie(oSadakoZombie, a, 0xb, 0x0);
        });
    }
}, {
    'AZ': [
        [
            oMakeRifterZombie,
            0x1,
            0x1
        ],
        [
            oSkatingZombie,
            0x1,
            0x1
        ],
        [
            oImp,
            0x1,
            0x1
        ],
        [
            oZombie,
            0x4,
            0x1
        ],
        [
            oBucketheadZombie,
            0x3,
            0x1
        ],
        [
            oStrollZombie,
            0x1,
            0xa,
            [0xa]
        ],
        [
            oSadakoZombie,
            0x1,
            0x1
        ]
    ],
    'FlagNum': 0x6,
    'FlagToSumNum': {
        'a1': [0x1],
        'a2': [
            0x0,
            0x0
        ]
    },
    'FlagToMonitor': {
        0x1: [a => {
                for (let b = 0x2; b <= 0x5; b += 0x2)
                    PlaceZombie(oBucketheadZombie, b, 0xb, 0x0);
                oSym['addTask'](0x12c, function () {
                    for (let c = 0x1; c <= 0x5; c++) {
                        PlaceZombie(oStrollZombie, c, 0xb, 0x0), PlaceZombie(oSadakoZombie, c, 0xb, 0x0);
                    }
                });
            }],
        0x2: [a => {
                oSym['addTask'](0x64, function () {
                    for (let b = 0x1; b <= 0x5; b += 0x2)
                        PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                }), oSym['addTask'](0xc8, function () {
                    for (let b = 0x1; b <= 0x5; b++)
                        PlaceZombie(oSadakoZombie, b, 0xb, 0x0);
                }), oSym['addTask'](0x366, function () {
                    for (let b = 0x1; b <= 0x5; b++)
                        PlaceZombie(oMakeRifterZombie, b, 0xb, 0x0);
                });
            }],
        0x3: [a => {
                for (let b = 0x1; b <= 0x5; b += 0x2)
                    PlaceZombie(oImp, b, 0xb, 0x0);
                oSym['addTask'](0xc8, c => {
                    for (let d = 0x2; d <= 0x4; d++) {
                        oSym['addTask'](d * 0xc8, e => {
                            PlaceZombie(oSkatingZombie, d, 0xb, 0x0);
                        });
                    }
                    oSym['addTask'](0x258, e => {
                        for (let f = 0x1; f <= 0x5; f++) {
                            oSym['addTask'](f * 0xc8, g => {
                                PlaceZombie(oStrollZombie, 0x5 - (f - 0x1), 0xb, 0x0);
                            });
                        }
                    });
                });
            }],
        0x4: [a => {
                for (let b = 0x1; b <= 0x5; b++) {
                    PlaceZombie(oZombie, b, 0xb, 0x0);
                }
                oSym['addTask'](0xc8, c => {
                    for (let d = 0x1; d <= 0x5; d += 0x2) {
                        PlaceZombie(oSadakoZombie, d, 0xb, 0x0), PlaceZombie(oStrollZombie, d, 0xb, 0x0);
                    }
                }), oSym['addTask'](0x2bc, c => {
                    for (let d = 0x1; d <= 0x5; d++) {
                        d % 0x2 == 0x0 && PlaceZombie(oSkatingZombie, d, 0xb, 0x0);
                    }
                });
            }],
        0x5: [a => {
                for (let b = 0x1; b <= 0x5; b += 0x2) {
                    PlaceZombie(oSadakoZombie, b, 0xb, 0x0), PlaceZombie(oStrollZombie, b, 0xb, 0x0);
                }
                oSym['addTask'](0x12c, function () {
                    for (let c = 0x1; c <= 0x5; c++)
                        c % 0x2 == 0x0 ? PlaceZombie(oMakeRifterZombie, c, 0xb, 0x0) : PlaceZombie(oSadakoZombie, c, 0xb, 0x0);
                }), oSym['addTask'](0x23a, function () {
                    for (let c = 0x1; c <= 0x5; c++)
                        c % 0x2 == 0x0 ? PlaceZombie(oSadakoZombie, c, 0xb, 0x0) : PlaceZombie(oMakeRifterZombie, c, 0xb, 0x0);
                }), oSym['addTask'](0x528, function () {
                    for (let c = 0x1; c <= 0x5; c++) {
                        c == 0x3 && PlaceZombie(oStrollZombie, c, 0xb, 0x0), PlaceZombie(oImp, c, 0xb, 0x0);
                    }
                });
            }]
    }
});