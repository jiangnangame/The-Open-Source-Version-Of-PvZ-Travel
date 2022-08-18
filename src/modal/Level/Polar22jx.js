/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let saveR;
    oS['Init']({
        'PName': [
            oPuffShroom,
            oPotatoMine,
            oPeashooter,
            oBegonia
        ],
        'ZName': [
            oImp,
            oBalloonZombie,
            oSkatingZombie,
            oCigarZombie,
            oZomboni,
            oMembraneZombie,
            oMakeRifterZombie
        ],
        'LevelName': $__language_Array__['aa2e0b0ec8df7f7dde3bdb7c29501997'],
        'LoadMusic': 'Bgm_Polar_Ready_JX_2',
        'StartGameMusic': 'Bgm_Polar_Fight_JX_2',
        'CanSelectCard': 0x0,
        'LoadAccess'(a) {
            PlayAudio('Bgm_Polar_Noise', 0x1), oSym['addTask'](0x5a, a), NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll);
        },
        'StartGame': function () {
            StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(a => {
                oP['Monitor'](), BeginCool(), AutoProduceSun(0x19), oSym['addTask'](0x4b0, b => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
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
                oMakeRifterZombie,
                0x1,
                0xa
            ],
            [
                oBalloonZombie,
                0x1,
                0x3,
                [0x3]
            ],
            [
                oSkatingZombie,
                0x1,
                0x64
            ],
            [
                oCigarZombie,
                0x1,
                0xa
            ],
            [
                oZomboni,
                0x1,
                0xb
            ],
            [
                oMembraneZombie,
                0x1,
                0xa
            ]
        ],
        'FlagNum': 0x7,
        'FlagToMonitor': {
            0x1: [a => {
                    let b = [];
                    for (let c of $P) {
                        c['EName'] == 'oPotatoMine' && (b[c['R']] = !![]);
                    }
                    for (let d = 0x1; d < 0x6; d++) {
                        if (!b[d]) {
                            saveR = d, PlaceZombie(oSkatingZombie, d, 0xb, 0x0), PlaceZombie(oImp, d, 0xb, 0x0), CustomSpecial(oRifterAnimate, d, 0x8, 0x0), oSym['addTask'](0x1f4, function () {
                                PlaceZombie(oZomboni, d, 0xb, 0x0);
                            });
                            break;
                        }
                    }
                }],
            0x2: [a => {
                    for (let d = 0x1; d < 0x6; d++) {
                        PlaceZombie(oZombie, d, 0xb, 0x0);
                    }
                    let b = hasPlants(), c = 0x3;
                    for (let e of b) {
                        Math['random']() < 0.5 && c-- > 0x0 && CustomSpecial(oRifterAnimate, e['R'], Math['min'](e['C'] + 0x1, 0x9));
                    }
                }],
            0x3: [a => {
                    for (let b = 0x0; b < 0x5; b++) {
                        PlaceZombie(oSkatingZombie, b + 0x1, 0xb, 0x0);
                    }
                    oSym['addTask'](0x190, function () {
                        let c = [
                            PlaceZombie(oMembraneZombie, 0x2, 0xb, 0x0),
                            PlaceZombie(oMembraneZombie, 0x4, 0xb, 0x0)
                        ];
                        for (let d of c) {
                            d['Speed'] += 0.8, d['HP'] -= 0xfa;
                        }
                        for (let e = 0x6; e < 0xa; e++) {
                            for (let f = 0x1; f < 0x6; f++)
                                CustomSpecial(oRifterAnimate, f, e);
                        }
                    });
                }],
            0x4: [a => {
                    oSym['addTask'](0x258, function () {
                        for (let b = 0x1; b < 0x6; b++) {
                            PlaceZombie(oCigarZombie, b, 0xb, 0x0)['Speed'] += 0.3, PlaceZombie(oImp, b, 0xb, 0x0)['Speed'] += 0.8;
                        }
                    }), oSym['addTask'](0x3e8, function () {
                        for (let b = 0x1; b < 0x6; b++) {
                            oSym['addTask'](b % 0x3 * 0x12c, c => {
                                PlaceZombie(oSkatingZombie, b, 0xb, 0x0)['HP'] -= 0x1e;
                            });
                        }
                        oSym['addTask'](0xc8, function () {
                            PlaceZombie(oBalloonZombie, 0x3, 0xb, 0x0)['Speed'] += 0.2;
                        });
                    });
                }],
            0x5: [a => {
                    let b = [];
                    for (let c of $P) {
                        c['EName'] == 'oPotatoMine' && (b[c['R']] = !![]);
                    }
                    oSym['addTask'](0x12c, function () {
                        for (let d = 0x1; d < 0x6; d++) {
                            oSym['addTask'](d % 0x4 * 0x12c, e => {
                                PlaceZombie(oImp, d, 0xb, 0x0)['HP'] -= 0x14;
                            });
                        }
                    }), oSym['addTask'](0x2bc, function () {
                        for (let d = 0x1; d < 0x6; d++) {
                            b[d] && (PlaceZombie(oSkatingZombie, d, 0xb, 0x0), oSym['addTask'](0x12c, function () {
                                PlaceZombie(oZombie, d, 0xb, 0x0);
                            })), d != 0x3 && oSym['addTask'](d % 0x2 * 0x12c, e => {
                                PlaceZombie(oBalloonZombie, d, 0xb, 0x0)['HP'] -= 0x50;
                            });
                        }
                    }), oSym['addTask'](0x3e8, function () {
                        PlaceZombie(oMakeRifterZombie, 0x3, 0xb, 0x0);
                    });
                }],
            0x6: [a => {
                    PlaceZombie(oZomboni, 0x3, 0xb, 0x0);
                    for (let b = 0x1; b < 0x6; b++) {
                        b != 0x3 && (PlaceZombie(oZombie, b, 0xb, 0x0)['HP'] -= 0x1e), b != 0x3 && oSym['addTask'](b * 0x64 + b % 0x3 * 0xc8, function () {
                            PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                        });
                    }
                    oSym['addTask'](0x320, function () {
                        PlaceZombie(oMakeRifterZombie, saveR, 0xb, 0x0)['HP'] -= 0x64;
                    });
                }]
        },
        'FlagToSumNum': {
            'a1': [
                0x3,
                0x5,
                0x6
            ],
            'a2': [
                0x1,
                0x0,
                0x0,
                0x3
            ]
        }
    });
}