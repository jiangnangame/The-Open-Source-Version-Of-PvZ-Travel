/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    const sunPlants = ['oSunShroom'], plantsAttack = {
            'oBegonia': 0xa,
            'oSunShroom': 0x0,
            'oSnowPea': 0x28,
            'oMonotropa': 0x1e,
            'oRadish': 0x64,
            'oFumeShroom': 0x46,
            'oMiracleImitater': 0x32,
            'oJalapeno': 0x708
        };
    let getPlants = function () {
            return hasPlants(!![], a => {
                return a['EName'] != 'oRifter' && a['EName'] != 'oGoUpIce' && a['EName'] != 'oGoDownIce' && a['EName'] != 'oRandomIce';
            });
        }, getGround = function (a = getPlants()) {
            let b = a['length'], c = [
                    null,
                    [],
                    [],
                    [],
                    [],
                    []
                ];
            for (let d = 0x0; d < b; d++) {
                c[a[d]['R']]['push'](a[d]);
            }
            return c;
        }, getAttack = function (b = getPlants()) {
            let c = b['length'], d, e = [
                    null,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0
                ];
            for (let f = 0x0; f < c; f++) {
                e[b[f]['R']] += (d = plantsAttack[b[f]['EName']]) ? d : 0x0;
            }
            return e;
        }, AttackType1 = function () {
            let a = getGround();
            for (let b = 0x1; b <= 0x5; b++) {
                let c = a[b]['length'], d = ![];
                for (let e = 0x0; e < c; e++) {
                    if (!FindInArray(a[b][e]['EName'], sunPlants)) {
                        PlaceZombie(oZombie, b, 0xb, 0x0), d = !![];
                        break;
                    }
                }
                !d && PlaceZombie(oSadakoZombie, b, 0xb, 0x0);
            }
        }, AttackType2 = function (a = [
            0xa,
            oImp
        ], b = [
            0x14,
            oZombie
        ], c = [
            0x28,
            oStrollZombie
        ], d = [
            0x50,
            oMembraneZombie
        ]) {
            let e = getAttack();
            for (let f = 0x1; f < 0x6; f++) {
                e[f] >= a[0x0] && PlaceZombie(a[0x1], f, 0xb, 0x0), oSym['addTask'](0xfa, function () {
                    e[f] >= b[0x0] && PlaceZombie(b[0x1], f, 0xb, 0x0), oSym['addTask'](0xfa, function () {
                        e[f] >= c[0x0] && PlaceZombie(c[0x1], f, 0xb, 0x0), oSym['addTask'](0x12c, function () {
                            e[f] >= d[0x0] && PlaceZombie(d[0x1], f, 0xb, 0x0);
                        });
                    });
                });
            }
        }, Zombies2 = function (a = Math['floor'](Math['random']() * 0x5) + 0x1, b = 0x0, c = [
            oZombie,
            oStrollZombie,
            oMakeRifterZombie,
            oMembraneZombie,
            oPushIceImp
        ], d = 0x190, e = 0x14, f = 0x0) {
            let g = c['length'], h = PlaceZombie(c[b], a, 0xb, 0x0);
            oSym['addTask'](d, function () {
                $Z[h['id']] && (e > 0x0 && Zombies2(a % 0x5 + 0x1, b == g - 0x1 ? 0x0 : b + 0x1, c, d, e - 0x1, f));
            });
        }, FindInArray = function (a, b) {
            const c = b['length'];
            for (let d = 0x0; d < c; d++) {
                if (a == b[d])
                    return !![];
            }
            return ![];
        };
    oS['Init']({
        'PName': [
            oBegonia,
            oSunShroom,
            oSnowPea,
            oMonotropa,
            oRadish,
            oFumeShroom,
            oMiracleImitater,
            oJalapeno
        ],
        'ZName': [
            oImp,
            oZombie,
            oSadakoZombie,
            oSkatingZombie,
            oStrollZombie,
            oPushIceImp,
            oMembraneZombie,
            oMakeRifterZombie
        ],
        'PicArr': ['images/interface/Polar2.webp'],
        'LevelName': $__language_Array__['4d66bd197dce8b77e2778aa996c0ae72'],
        'LoadMusic': 'Bgm_Polar_Ready_JX_1',
        'StartGameMusic': 'Bgm_Polar_Fight_JX_1',
        'DKind': 0x0,
        'CanSelectCard': 0x0,
        'LoadAccess': function (b) {
            PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll), !oS['DKind'] && (NewEle('PolarFire2', 'div', null, 0x0, $('tGround')), NewEle('PolarFire', 'div', null, 0x0, $('tGround')));
            let c = NewEle('BGBOX_WIN', 'div', 'width:1400px;height:600px;z-index:199;', 0x0, $('dAll'));
            c['classList']['add']('BgMask-PolarJX'), NewImg('imgKK', 'images/interface/PolarJxStar.webp', 'left:0;top:0;' + (!$User['LowPerformanceMode'] ? 'animation:rotate2\x20130s\x20linear\x20infinite;' : ''), c), oSym['addTask'](0x5a, b);
            for (let d = 0x1; d < 0xa; ++d) {
                for (let e = 0x1; e < 0x6; e++) {
                    if ((d > 0x2 || d == 0x1 && e % 0x2 == 0x0) && d != 0x5)
                        CustomSpecial(oRifter, e, d);
                }
            }
        },
        'StartGame': function () {
            StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(a => {
                oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x4b0, b => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
                });
            }), oSym['addTask'](0x4b0, function () {
                AttackType1();
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
                oZombie,
                0x1,
                0x1
            ],
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
                0x1
            ],
            [
                oSkatingZombie,
                0x1,
                0x5
            ]
        ],
        'FlagNum': 0xa,
        'FlagToSumNum': {
            'a1': [0x0],
            'a2': [
                0x0,
                0x0
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    AttackType1();
                }],
            0x2: [a => {
                    if (getPlants()['length'] > 0xa)
                        for (let b = 0x1; b < 0x6; b++) {
                            PlaceZombie(oImp, b, 0xb, 0x0);
                        }
                    AttackType2();
                }],
            0x3: [a => {
                    for (let b = 0x0; b < 0x2; b++) {
                        Zombies2(Math['floor'](Math['random']() * 0x5) + 0x1, 0x0, [
                            oZombie,
                            oStrollZombie
                        ], 0x190), Zombies2(Math['floor'](Math['random']() * 0x5) + 0x1, 0x0, [
                            oImp,
                            oZombie
                        ], 0x190);
                    }
                }],
            0x4: [a => {
                    Zombies2(0x1, 0x0, [
                        oImp,
                        oStrollZombie
                    ], 0xc8), Zombies2(0x5, 0x1, [
                        oImp,
                        oStrollZombie
                    ], 0xc8);
                }],
            0x5: [a => {
                    AttackType2(), oSym['addTask'](0x2bc, function () {
                        AttackType2([
                            0x78,
                            oSkatingZombie
                        ], [
                            0x96,
                            oMakeRifterZombie
                        ], [
                            0xaa,
                            oPushIceImp
                        ], [
                            0x1,
                            oStrollZombie
                        ]), Zombies2(0x5, 0x1, [
                            oImp,
                            oImp,
                            oSadakoZombie,
                            oSadakoZombie,
                            oMakeRifterZombie,
                            oMembraneZombie,
                            oMakeRifterZombie,
                            oSkatingZombie
                        ], 0x1f4);
                    });
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oMembraneZombie, b, 0xb, 0x0);
                    }
                }],
            0x6: [a => {
                    oSym['addTask'](0x12c, function () {
                        for (let b = 0x1; b < 0x6; b++) {
                            PlaceZombie(oPushIceImp, b, 0xb, 0x0);
                        }
                    }), oSym['addTask'](0x2bc, function () {
                        for (let b = 0x1; b < 0x6; b++) {
                            PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                        }
                        AttackType2([
                            0xfa,
                            oSkatingZombie
                        ], [
                            0x190,
                            oMakeRifterZombie
                        ], [
                            0x1,
                            oImp
                        ], [
                            0x1,
                            oZombie
                        ]);
                    });
                }],
            0x7: [a => {
                    for (let b = 0x0; b < 0x2; b++) {
                        Zombies2(Math['floor'](Math['random']() * 0x5) + 0x1, 0x0, [
                            oImp,
                            oZombie,
                            oZombie,
                            oSkatingZombie,
                            oSkatingZombie,
                            oPushIceImp,
                            oMembraneZombie,
                            oMembraneZombie
                        ], 0xc8, 0xa, 0xf), Zombies2(Math['floor'](Math['random']() * 0x5) + 0x1, 0x0, [
                            oImp,
                            oZombie,
                            oStrollZombie
                        ], 0x1f4);
                    }
                }],
            0x8: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oMakeRifterZombie, b, 0xb, 0x0), PlaceZombie(oImp, b, 0xb, 0x0);
                    }
                    Zombies2(0x1, 0x0, [oMembraneZombie], 0x12c, 0x5), Zombies2(0x3, 0x0, [oMembraneZombie], 0x12c, 0x5);
                }],
            0x9: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oStrollZombie, b, 0xb, 0x0), PlaceZombie(oPushIceImp, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x12c, function () {
                        for (let c = 0x1; c < 0x6; c++) {
                            PlaceZombie(oMembraneZombie, c, 0xb, 0x0);
                        }
                    });
                }]
        }
    });
}