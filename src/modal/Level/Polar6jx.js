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
        oPepper
    ],
    'ZName': [
        oImp,
        oBucketheadZombie,
        oSkatingZombie,
        oZomboni,
        oMembraneZombie,
        oStrollZombie
    ],
    'PicArr': ['images/interface/Polar2.webp'],
    'LevelName': $__language_Array__['269f490fae261348c24f5b8e63cfcbb3'],
    'LoadMusic': 'Bgm_Polar_Ready_JX_1',
    'StartGameMusic': 'Bgm_Polar_Fight_JX_1',
    'DKind': 0x0,
    'FixedProps': { 'LSP': { 'num': Infinity } },
    'LoadAccess': function (b) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll), !oS['DKind'] && (NewEle('PolarFire2', 'div', null, 0x0, $('tGround')), NewEle('PolarFire', 'div', null, 0x0, $('tGround')));
        let c = NewEle('BGBOX_WIN', 'div', 'width:1400px;height:600px;z-index:199;', 0x0, $('dAll'));
        c['classList']['add']('BgMask-PolarJX'), NewImg('imgKK', 'images/interface/PolarJxStar.webp', 'left:0;top:0;' + (!$User['LowPerformanceMode'] ? 'animation:rotate2\x20130s\x20linear\x20infinite;' : ''), c), oSym['addTask'](0x5a, b);
        for (let d = 0x1; d < 0x6; d++) {
            CustomSpecial(oRifter, d, 0x9);
            for (let e = 0x1; e < 0x6; ++e)
                (d % 0x2 || e < 0x2) && CustomSpecial(oRifter, d, e);
        }
        for (let f = 0x0; f < 0x5; f += 0x2)
            f && CustomSpecial(oRandomIce, f, 0x5);
    },
    'StartGame': function () {
        StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
            'fullValue': oP['FlagNum'] - 0x1,
            'curValue': 0x0
        }), PrepareGrowPlants(a => {
            oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x514, b => {
                oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
            });
        }), oSym['addTask'](0x514, function () {
            for (let a = 0x1; a <= 0x5; a += 0x2)
                PlaceZombie(oStrollZombie, a, 0xb, 0x0);
        });
    }
}, {
    'AZ': [
        [
            oStrollZombie,
            0x1,
            0x1
        ],
        [
            oImp,
            0x1,
            0x1
        ],
        [
            oBucketheadZombie,
            0x3,
            0x3
        ],
        [
            oSkatingZombie,
            0x1,
            0x1
        ],
        [
            oMembraneZombie,
            0x1,
            0x1
        ],
        [
            oZomboni,
            0x1,
            0x4,
            [0x5]
        ]
    ],
    'FlagNum': 0x4,
    'FlagToSumNum': {
        'a1': [0x1],
        'a2': [
            0x0,
            0x0
        ]
    },
    'FlagToMonitor': {
        0x1: [a => {
                for (let b = 0x2; b < 0x5; b += 0x2) {
                    PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                }
                for (let c = 0x1; c <= 0x5; c += 0x2)
                    PlaceZombie(oStrollZombie, c, 0xb, 0x0);
                for (let d = 0x1; d <= 0xe; d++) {
                    oSym['addTask']((d + 1.5) * 0x12c, e => {
                        PlaceZombie(oImp, (d - 0x1) % 0x5 + 0x1, 0xb, 0x0);
                    }), oSym['addTask']((d + 0x1) * 0x12c, e => {
                        PlaceZombie(oStrollZombie, 0x5 - (d - 0x1) % 0x5, 0xb, 0x0);
                    });
                }
                for (let e = 0x0; e < 0x4; e++) {
                    oSym['addTask']((e + 0x1) * 0x258, f => {
                        PlaceZombie(oSkatingZombie, [
                            0x2,
                            0x4
                        ]['random'](), 0xb, 0x0);
                    });
                }
                oSym['addTask'](0x514, function () {
                    for (let f = 0x1; f <= 0x5; f++) {
                        PlaceZombie(oMembraneZombie, f, 0xb, 0x0);
                    }
                }), oSym['addTask'](0x76c, function () {
                    for (let f = 0x1; f <= 0x5; f++)
                        PlaceZombie(oMembraneZombie, f, 0xb, 0x0);
                });
            }],
        0x2: [a => {
                oSym['addTask'](0x514, function () {
                    for (let b = 0x1; b <= 0x5; b++)
                        PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                }), PlaceZombie(oZomboni, 0x3, 0xb, 0x0);
                for (let b = 0x1; b <= 0x5; b += 0x2)
                    PlaceZombie(oStrollZombie, b, 0xb, 0x0);
            }],
        0x3: [a => {
                for (let b = 0x1; b <= 0x5; b++) {
                    PlaceZombie(oBucketheadZombie, b, 0xb, 0x0);
                }
                for (let c = 0x1; c <= 0x5; c++) {
                    PlaceZombie(oMembraneZombie, c, 0xb, 0x0);
                }
                PlaceZombie(oZomboni, 0x2, 0xb, 0x0), PlaceZombie(oZomboni, 0x4, 0xb, 0x0), oSym['addTask'](0x28a, function () {
                    for (let d = 0x1; d <= 0x5; d++) {
                        PlaceZombie(oMembraneZombie, d, 0xb, 0x0);
                    }
                }), oSym['addTask'](0x15e, function () {
                    for (let d = 0x1; d <= 0x5; d++)
                        PlaceZombie(oStrollZombie, d, 0xb, 0x0);
                }), oSym['addTask'](0x546, function () {
                    for (let d = 0x1; d <= 0x5; d++)
                        PlaceZombie(oStrollZombie, d, 0xb, 0x0);
                });
            }]
    }
});