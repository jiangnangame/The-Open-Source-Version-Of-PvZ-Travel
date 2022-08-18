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
        oDoomShroom
    ],
    'ZName': [
        oBalloonZombie,
        oImp,
        oZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oStrollZombie,
        oCigarZombie,
        oFootballZombie
    ],
    'PicArr': ['images/interface/Polar2.webp'],
    'backgroundImage': 'images/interface/Polar2.webp',
    'LevelName': $__language_Array__['3d729cf7e10750c6d9c0b9aa08472612'],
    'LoadMusic': 'Bgm_Polar_Ready_JX_1',
    'StartGameMusic': 'Bgm_Polar_Fight_JX_1',
    'DKind': 0x0,
    'LoadAccess': function (b) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll), !oS['DKind'] && (NewEle('PolarFire2', 'div', null, 0x0, $('tGround')), NewEle('PolarFire', 'div', null, 0x0, $('tGround')));
        let c = NewEle('BGBOX_WIN', 'div', 'width:1400px;height:600px;z-index:199;', 0x0, $('dAll'));
        c['classList']['add']('BgMask-PolarJX'), NewImg('imgKK', 'images/interface/PolarJxStar.webp', 'left:0;top:0;' + (!$User['LowPerformanceMode'] ? 'animation:rotate2\x20130s\x20linear\x20infinite;' : ''), c), oSym['addTask'](0x5a, b), CustomSpecial(oGoDownIce, 0x1, 0x9), CustomSpecial(oGoUpIce, 0x5, 0x9), CustomSpecial(oGoDownIce, 0x4, 0x7), CustomSpecial(oGoUpIce, 0x2, 0x7), CustomSpecial(oGoDownIce, 0x1, 0x5), CustomSpecial(oGoUpIce, 0x5, 0x5), CustomSpecial(oGoDownIce, 0x2, 0x4), CustomSpecial(oGoUpIce, 0x4, 0x4), CustomSpecial(oRandomIce, 0x3, 0x3);
    },
    'StartGame': function () {
        StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
            'fullValue': oP['FlagNum'] - 0x1,
            'curValue': 0x0
        }), PrepareGrowPlants(a => {
            oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x258, b => {
                oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
            });
        }), oSym['addTask'](0x258, function () {
            for (let a = 0x1; a <= 0x5; a += 0x4) {
                PlaceZombie(oConeheadZombie, a, 0xb, 0x0);
            }
            oSym['addTask'](0x1f4, function () {
                for (let b = 0x1; b <= 0x5; b++) {
                    PlaceZombie(oImp, b, 0xb, 0x0);
                }
            });
        });
    }
}, {
    'AZ': [
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
            oConeheadZombie,
            0x2,
            0x6
        ],
        [
            oBucketheadZombie,
            0x1,
            0x7
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
    'FlagNum': 0x8,
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
            0x1e
        ]
    },
    'FlagToMonitor': {
        0x1: [a => {
                for (let b = 0x1; b <= 0x5; b += 0x2) {
                    PlaceZombie(oConeheadZombie, b, 0xb, 0x0);
                }
                oSym['addTask'](0x1f4, function () {
                    for (let c = 0x1; c <= 0x5; c++) {
                        PlaceZombie(oStrollZombie, c, 0xb, 0x0);
                    }
                    oSym['addTask'](0x12c, function () {
                        for (let d = 0x1; d <= 0x5; d += 0x2) {
                            PlaceZombie(oBucketheadZombie, d, 0xb, 0x0);
                        }
                    });
                });
            }],
        0x2: [a => {
                for (let b = 0x1; b <= 0x5; b++) {
                    PlaceZombie(oZombie, b, 0xb, 0x0);
                }
                oSym['addTask'](0x12c, function () {
                    for (let c = 0x2; c <= 0x5; c += 0x2) {
                        PlaceZombie(oStrollZombie, c, 0xb, 0x0);
                    }
                    oSym['addTask'](0x12c, function () {
                        for (let d = 0x2; d <= 0x5; d += 0x2) {
                            PlaceZombie(oFootballZombie, d, 0xb, 0x0);
                        }
                    });
                });
            }],
        0x3: [a => {
                for (let b = 0x1; b <= 0x5; b++) {
                    oSym['addTask'](b * 0x12c, c => {
                        PlaceZombie(oImp, b, 0xb, 0x0);
                    });
                }
                oSym['addTask'](0x12c, function () {
                    for (let c = 0x1; c <= 0x5; c++) {
                        oSym['addTask'](0x708 - c * 0x12c, d => {
                            PlaceZombie(oZombie, c, 0xb, 0x0);
                        });
                    }
                    oSym['addTask'](0x12c, function () {
                        for (let d = 0x1; d <= 0x5; d++) {
                            oSym['addTask'](d * 0x12c, e => {
                                PlaceZombie(oBucketheadZombie, d, 0xb, 0x0);
                            }), oSym['addTask'](d * 0x1f4, e => {
                                PlaceZombie(oBalloonZombie, d, 0xb, 0x0);
                            });
                        }
                    });
                });
            }],
        0x4: [a => {
                for (let b = 0x1; b <= 0x5; b++) {
                    oSym['addTask'](b * 0x12c, c => {
                        PlaceZombie(oBalloonZombie, b, 0xb, 0x0);
                    });
                }
                oSym['addTask'](0x12c, function () {
                    for (let c = 0x1; c <= 0x5; c++) {
                        oSym['addTask'](0x708 - c * 0x12c, d => {
                            PlaceZombie(oConeheadZombie, c, 0xb, 0x0);
                        }), oSym['addTask'](c * 0x12c, d => {
                            PlaceZombie(oBalloonZombie, c, 0xb, 0x0);
                        });
                    }
                    oSym['addTask'](0x12c, function () {
                        for (let d = 0x1; d <= 0x5; d++) {
                            oSym['addTask'](d * 0x12c, e => {
                                PlaceZombie(oStrollZombie, d, 0xb, 0x0);
                            }), oSym['addTask'](d * 0x12c, e => {
                                PlaceZombie(oBalloonZombie, d, 0xb, 0x0);
                            });
                        }
                    });
                });
            }],
        0x5: [a => {
                for (let b = 0x1; b <= 0x19; b++) {
                    oSym['addTask'](b * 0x32, c => {
                        PlaceZombie(oZombie, Number['parseInt'](Math['random']() * 0x5) + 0x1, b % 0x5 + 0x5);
                    });
                }
            }],
        0x6: [a => {
                for (let b = 0x1; b <= 0x5; b++) {
                    PlaceZombie(oImp, b, 0xb, 0x0), oSym['addTask'](0x190, c => {
                        PlaceZombie(oBalloonZombie, b, 0xb, 0x0), oSym['addTask'](0x12c, d => {
                            PlaceZombie(oBucketheadZombie, b, 0xb, 0x0);
                        });
                    }), oSym['addTask'](0x64, c => {
                        PlaceZombie(oConeheadZombie, b, 0xb, 0x0);
                    });
                }
            }],
        0x7: [a => {
                for (let b = 0x1; b <= 0xa; b++) {
                    oSym['addTask'](b * 0x12c, c => {
                        PlaceZombie(oBalloonZombie, b % 0x5 + 0x1, 0xb, 0x0);
                    }), oSym['addTask'](b * 0x12c, c => {
                        PlaceZombie(oBucketheadZombie, 0x5 - b % 0x5, 0xb, 0x0);
                    });
                }
            }]
    }
});