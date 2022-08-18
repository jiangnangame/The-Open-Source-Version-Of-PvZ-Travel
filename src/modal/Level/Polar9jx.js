/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oFumeShroom,
        oPuffShroom,
        oSnowPea,
        oIceAloe,
        oPepper,
        oTallNut
    ],
    'ZName': [
        oSadakoZombie,
        oImp,
        oFootballZombie,
        oMakeRifterZombie,
        oSkatingZombie,
        oMembraneZombie
    ],
    'PicArr': ['images/interface/Polar2.webp'],
    'LevelName': $__language_Array__['c0f520af955b1dd35c89368edd87bbe4'],
    'LoadMusic': 'Bgm_Polar_Ready_JX_1',
    'StartGameMusic': 'Bgm_Polar_Fight_JX_1',
    'DKind': 0x0,
    'CanSelectCard': 0x0,
    'SunNum': 0x5dc,
    'LoadAccess': function (b) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll), !oS['DKind'] && (NewEle('PolarFire2', 'div', null, 0x0, $('tGround')), NewEle('PolarFire', 'div', null, 0x0, $('tGround')));
        let c = NewEle('BGBOX_WIN', 'div', 'width:1400px;height:600px;z-index:199;', 0x0, $('dAll'));
        c['classList']['add']('BgMask-PolarJX'), NewImg('imgKK', 'images/interface/PolarJxStar.webp', 'left:0;top:0;' + (!$User['LowPerformanceMode'] ? 'animation:rotate2\x20130s\x20linear\x20infinite;' : ''), c), oSym['addTask'](0x5a, b);
        for (let d = 0x1; d < 0xa; d++) {
            (d - 0x1) % 0x5 + 0x1 != 0x1 && CustomSpecial(oRandomIce, (d - 0x1) % 0x5 + 0x1, d);
            for (let e = 0x1; e < 0x5; e++)
                d + e < 0xa && d != 0x2 && e != 0x1 && CustomSpecial(oRifter, (d - 0x1) % 0x5 + 0x1, d + e);
        }
    },
    'StartGame': function () {
        oMiniGames['GrowWithoutSun'](), oSym['addTask'](0x4b0, function () {
            let a = PlaceZombie(oImp, Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
            oSym['addTask'](0x64, function b() {
                a['Speed'] += Math['random']() / 0x3, a['HP'] += 0x14, a['Speed'] < 0x4 && oSym['addTask'](0x64, b);
            });
        });
    }
}, {
    'AZ': [
        [
            oMembraneZombie,
            0x1,
            0x1
        ],
        [
            oSkatingZombie,
            0x3,
            0x1
        ],
        [
            oSadakoZombie,
            0x3,
            0x5
        ],
        [
            oImp,
            0x3,
            0x1
        ],
        [
            oFootballZombie,
            0x2,
            0xc,
            [
                0xc,
                0xd,
                0xe,
                0xf
            ]
        ],
        [
            oMakeRifterZombie,
            0x2,
            0xa,
            [
                0xa,
                0xb,
                0xc,
                0xd,
                0xe,
                0xf
            ]
        ]
    ],
    'FlagNum': 0x5,
    'FlagToSumNum': {
        'a1': [0x3],
        'a2': [
            0x0,
            0xf
        ]
    },
    'FlagToMonitor': {
        0x1: [a => {
                for (let b = 0x1; b <= 0x5; b++) {
                    let c = PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                    c['HP'] -= 0x28, c = PlaceZombie(oImp, b, 0xb, 0x0), c['HP'] += 0x14, c = PlaceZombie(oMakeRifterZombie, b, 0xb, 0x0), c['HP'] -= 0x1e;
                }
                oSym['addTask'](0x320, function () {
                    for (let d = 0x1; d < 0x6; d++) {
                        oSym['addTask'](d * 0x2bc, function () {
                            let e = PlaceZombie(oMembraneZombie, d, 0xb, 0x0);
                            e['HP'] -= 0xfa, e['Speed'] += 1.5, d != 0x3 && (e = PlaceZombie(oMembraneZombie, 0x6 - d, 0xb, 0x0), e['HP'] -= 0xfa, e['Speed'] += 1.5);
                        });
                    }
                });
            }],
        0x2: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    let c = PlaceZombie(oFootballZombie, b, 0xb, 0x0);
                    c['Speed'] -= 0x1, c['HP'] -= 0xc8, c['OrnHP'] -= 0x4b0, PlaceZombie(oSadakoZombie, b, 0xb, 0x0);
                }
                oSym['addTask'](0x2bc, function () {
                    for (let d = 0x1; d <= 0x5; d++) {
                        let e = PlaceZombie(oSkatingZombie, d, 0xb, 0x0);
                        e['HP'] += 0x28;
                    }
                });
            }],
        0x3: [a => {
                for (let b = 0x1; b <= 0x5; b++) {
                    PlaceZombie(oImp, b, 0xb, 0x0);
                }
                for (let c = 0x2; c <= 0x3; c++) {
                    PlaceZombie(oMembraneZombie, c, 0xb, 0x0);
                }
                oSym['addTask'](0xc8, function d(e) {
                    let f = PlaceZombie(oImp, (e - 0x1) % 0x5 + 0x1, 0xb, 0x0);
                    f['HP'] += 0x64, e <= 0x8 && oSym['addTask'](0xfa, d, [e + 0x1]);
                }, [0x1]);
            }],
        0x4: [a => {
                PlaceZombie(oMakeRifterZombie, 0x1, 0xb, 0x0);
                for (let b = 0x1; b <= 0x5; b++) {
                    let c = PlaceZombie(oFootballZombie, b, 0xb, 0x0);
                    c['OrnHP'] -= 0x3e8;
                }
            }]
    }
});