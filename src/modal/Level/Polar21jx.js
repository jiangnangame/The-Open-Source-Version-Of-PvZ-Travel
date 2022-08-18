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
        oSpikeweed,
        oTorchwood,
        oMiracleImitater,
        oJalapeno
    ],
    'ZName': [
        oImp,
        oZombie,
        oSkatingZombie,
        oMakeRifterZombie,
        oZomboni,
        oStrollZombie,
        oFootballZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oCigarZombie
    ],
    'LevelName': $__language_Array__['436b211a295683f9954dc5581405d8c8'],
    'LoadMusic': 'Bgm_Polar_Ready_JX_2',
    'StartGameMusic': 'Bgm_Polar_Fight_JX_2',
    'FixedProps': { 'LSP': { 'num': Infinity } },
    'LoadAccess'(a) {
        [
            [
                oPotatoMine,
                0x3,
                0x1
            ],
            [
                oSpikeweed,
                0x3,
                0x3
            ],
            [
                oSpikeweed,
                0x3,
                0x5
            ],
            [
                oBegonia,
                0x3,
                0x6
            ]
        ]['forEach'](b => {
            const [c, d, e] = b;
            CustomSpecial(c, d, e);
        }), [
            [
                0x2,
                0x2,
                0x5
            ],
            [
                0x1,
                0x4,
                0x5
            ],
            [
                0x2,
                0x1,
                0x5
            ],
            [
                0x1,
                0x5,
                0x5
            ],
            [
                0x3,
                0x3,
                0x4
            ],
            [
                0x1,
                0x2,
                0x7
            ],
            [
                0x2,
                0x4,
                0x7
            ],
            [
                0x3,
                0x3,
                0x8
            ],
            [
                0x1,
                0x2,
                0x4
            ],
            [
                0x2,
                0x4,
                0x4
            ],
            [
                0x2,
                0x2,
                0x2
            ],
            [
                0x2,
                0x1,
                0x2
            ],
            [
                0x1,
                0x4,
                0x2
            ],
            [
                0x1,
                0x5,
                0x2
            ]
        ]['forEach'](b => {
            let [c, d, e] = b;
            c = c === 0x1 ? oGoUpIce : c === 0x2 ? oGoDownIce : oRandomIce, CustomSpecial(c, d, e);
        }), NewEle(0x0, 'div', 'left:\x20' + (0x8c - 0.1 * 0x50) + 'px;top:' + (-0x14 + 0x64 * 2.93) + 'px;', { 'className': 'sos' }, FightingScene), NewEle(0x0, 'div', 'left:\x20' + (0x8c + 1.9 * 0x50) + 'px;top:' + (-0x14 + 0x64 * 2.93) + 'px;', { 'className': 'sos' }, FightingScene), NewEle(0x0, 'div', 'left:\x20' + (0x8c + 3.9 * 0x50) + 'px;top:' + (-0x14 + 0x64 * 2.95) + 'px;', { 'className': 'sos' }, FightingScene), NewEle(0x0, 'div', 'left:\x20' + (0x8c + 0x5 * 0x50) + 'px;top:' + (-0x14 + 0x64 * 0x3) + 'px;', { 'className': 'sos' }, FightingScene), PlayAudio('Bgm_Polar_Noise', 0x1), oSym['addTask'](0x5a, a), NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll);
    },
    'StartGame': a => {
        const b = [
            'oSunShroom',
            'oSunFlower',
            'oWallNut',
            'oPuffShroom',
            'oDoomShroom',
            'oBambooUncle',
            'olSPCase',
            'oTallNut'
        ];
        let c = new MutationObserver(function (g) {
            g['forEach'](function (h) {
                for (let k = 0x0; k < h['addedNodes']['length']; k++) {
                    const l = h['addedNodes'][k]['id'], m = $P[l];
                    if (m)
                        for (let n = 0x0; n < b['length']; n++) {
                            if (m['EName'] == b[n]) {
                                const q = Math['random']() * 0xf;
                                if (n == 0x4 || n == 0x5 || n == 0x6 || q > 0x2 && q < 0xd) {
                                    if (n == 0x4 || n == 0x5)
                                        oSym['addTask'](0x190, r => {
                                            PlaceZombie(oZomboni, m['R'], 0xb, 0x0);
                                        }), oSym['addTask'](0x320, function () {
                                            PlaceZombie(oFootballZombie, (m['R'] + 0x1) % 0x5 + 0x1, 0xb, 0x0);
                                        }), oSym['addTask'](0x640, r => {
                                            PlaceZombie(oZomboni, 0x3, 0xb, 0x0);
                                        });
                                    else
                                        n == 0x6 && oSym['addTask'](Math['random']() * 0x190 + 0x190, r => {
                                            PlaceZombie([
                                                oFootballZombie,
                                                oZomboni,
                                                oBucketheadZombie
                                            ]['random'](), Math['floor'](Math['random']() * 0x5) + 0x1, 0xb, 0x0);
                                        });
                                    oSym['addTask'](n != 0x4 && n != 0x5 ? Math['floor'](Math['random']() * 0x7d0 + 0x708) : 0x0, r => {
                                        const s = Math['floor'](Math['random']() * 0x6) + 0x2;
                                        Math['random']() < 0.1 && (CustomSpecial(oRifterAnimate, m['R'], m['C']), s -= 0x1);
                                        for (let u = 0x0; n != 0x4 && n != 0x5 ? u < s : u < 0x82; u++) {
                                            let [w, x] = [
                                                Math['floor'](Math['random']() * 0x5) + 0x1,
                                                Math['floor'](Math['random']() * 0x9) + 0x1
                                            ];
                                            if (w == 0x3 && (x == 0x1 || x == 0x3 || x == 0x5 || x == 0x6))
                                                continue;
                                            CustomSpecial(oRifterAnimate, w, x);
                                        }
                                    });
                                }
                                break;
                            }
                        }
                }
            });
        });
        c['observe'](EDPZ, { 'childList': !![] });
        const d = {
            'oPotatoMine': 0x1,
            'oBegonia': 0x1,
            'oSpikeweed': 0x2
        };
        let e = {}, f = new Set();
        StopMusic(), PlayMusic(oS['LoadMusic'] = oS['StartGameMusic']), NewMusic(oS['LoadMusic'] = oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
            'fullValue': oP['FlagNum'] - 0x1,
            'curValue': 0x0
        });
        for (let g in $P) {
            let h = $P[g];
            d['hasOwnProperty'](h['EName']) && f['add'](h['R'] + '_' + h['C']);
        }
        PrepareGrowPlants(function () {
            oP['Monitor'](oS['Monitor']), BeginCool(), oS['DKind'] && AutoProduceSun(0x19), function i() {
                for (let j in d)
                    e[j] = 0x0;
                for (let k of $P)
                    e['hasOwnProperty'](k['EName']) && f['has'](k['R'] + '_' + k['C']) && ++e[k['EName']];
                for (let l in d) {
                    if (d[l] !== e[l]) {
                        toOver(0x2);
                        return;
                    }
                }
                oSym['addTask'](0xc8, i);
            }(), oSym['addTask'](0x5dc, j => {
                oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
            });
        });
    }
}, {
    'AZ': [
        [
            oCigarZombie,
            0x1,
            0x8
        ],
        [
            oImp,
            0x2,
            0x1
        ],
        [
            oZombie,
            0x4,
            0x2
        ],
        [
            oConeheadZombie,
            0x1,
            0x3
        ],
        [
            oBucketheadZombie,
            0x1,
            0x3
        ],
        [
            oStrollZombie,
            0x3,
            0x1
        ],
        [
            oSkatingZombie,
            0x2,
            0x5
        ],
        [
            oMakeRifterZombie,
            0x2,
            0x5
        ],
        [
            oFootballZombie,
            0x1,
            0x4
        ],
        [
            oZomboni,
            0x1,
            0xb
        ]
    ],
    'FlagNum': 0x7,
    'FlagToMonitor': {
        0x1: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    PlaceZombie(oZombie, b, 0xb, 0x0), CustomSpecial(oRifterAnimate, b, 0x9);
                }
            }],
        0x2: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    PlaceZombie(oSkatingZombie, b, 0xb, 0x0), PlaceZombie(oConeheadZombie, b, 0xb, 0x0);
                }
            }],
        0x3: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    b != 0x3 && oSym['addTask'](b * 0x2bc, function () {
                        PlaceZombie(oZomboni, b, 0xb, 0x0);
                    }), oSym['addTask'](b * 0x3e8 + 0x1f4, function () {
                        PlaceZombie(oBucketheadZombie, b, 0xb, 0x0);
                    });
                }
                for (let c = 0x0; c < 0x3; c++)
                    oSym['addTask'](c * 0x2bc, d => {
                        for (let e = 0x1; e < 0x6; e++) {
                            PlaceZombie([
                                oSkatingZombie,
                                oStrollZombie,
                                oConeheadZombie
                            ]['random'](), e, 0xb, 0x0);
                        }
                    });
            }],
        0x4: [a => {
                for (let b = 0x0; b < 0x19; b++) {
                    oSym['addTask'](0xc8 * b, PlaceZombie, [
                        oSkatingZombie,
                        b % 0x5 + 0x1,
                        0xb,
                        0x0
                    ]), oSym['addTask'](0xc8 * b, PlaceZombie, [
                        oSkatingZombie,
                        0x5 - b % 0x5,
                        0xb,
                        0x0
                    ]);
                }
                for (let c = 0x1; c < 0x6; c++) {
                    PlaceZombie(oSkatingZombie, c, 0xb, 0x0), PlaceZombie(oConeheadZombie, c, 0xb, 0x0);
                }
                oSym['addTask'](0x4b0, function () {
                    for (let d = 0x1; d < 0x6; d++) {
                        PlaceZombie(oBucketheadZombie, d, 0xb, 0x0), oSym['addTask'](0xc8 * d, PlaceZombie, [
                            oStrollZombie,
                            d % 0x5 + 0x1,
                            0xb,
                            0x0
                        ]);
                    }
                }), [
                    [
                        0x3,
                        0x2
                    ],
                    [
                        0x3,
                        0x7
                    ],
                    [
                        0x3,
                        0x9
                    ],
                    [
                        0x1,
                        0x9
                    ],
                    [
                        0x2,
                        0x9
                    ],
                    [
                        0x3,
                        0x9
                    ],
                    [
                        0x4,
                        0x9
                    ],
                    [
                        0x5,
                        0x9
                    ]
                ]['forEach'](d => {
                    const [e, f] = d;
                    CustomSpecial(oRifterAnimate, e, f);
                });
            }],
        0x5: [a => {
                for (let b = 0x0; b < 0x5; b++) {
                    oSym['addTask'](Math['random']() * 0x708, function () {
                        PlaceZombie(oCigarZombie, [
                            0x1,
                            0x5
                        ]['random'](), 0xb, 0x0);
                    });
                }
                PlaceZombie(oFootballZombie, 0x3, 0xb, 0x0);
                for (let c = 0x0; c < 0x3; c++) {
                    oSym['addTask'](c * 0x2bc, d => {
                        PlaceZombie(oMakeRifterZombie, 0x2, 0xb, 0x0), PlaceZombie(oMakeRifterZombie, 0x4, 0xb, 0x0);
                    });
                }
                for (let d = 0x1; d < 0x6; d++) {
                    d != 0x3 && CustomSpecial(oRifterAnimate, d, 0x6);
                }
                PlaceZombie(oSkatingZombie, 0x3, 0xb, 0x0), oSym['addTask'](0x4b0, function () {
                    PlaceZombie(oZomboni, 0x3, 0xb, 0x0);
                });
            }],
        0x6: [a => {
                for (let b = 0x1; b < 0x6; b += 0x2) {
                    b != 0x3 && oSym['addTask'](b * 0x64, c => {
                        PlaceZombie(oMakeRifterZombie, b, 0xb, 0x0);
                    });
                }
                for (let c = 0x0; c < 0xa; c++) {
                    oSym['addTask'](Math['random']() * 0x708, function () {
                        PlaceZombie(oCigarZombie, [
                            0x1,
                            0x5
                        ]['random'](), 0xb, 0x0);
                    });
                }
                PlaceZombie(oFootballZombie, 0x1, 0xb, 0x0), PlaceZombie(oFootballZombie, 0x5, 0xb, 0x0), PlaceZombie(oZomboni, [
                    0x1,
                    0x2,
                    0x4,
                    0x5
                ]['random'](), 0xb, 0x0);
                for (let d = 0x0; d < 0x5; d++) {
                    oSym['addTask'](0x64 * d, PlaceZombie, [
                        oStrollZombie,
                        d % 0x5 + 0x1,
                        0xb,
                        0x0
                    ]), oSym['addTask'](0x64 * d, PlaceZombie, [
                        oStrollZombie,
                        0x5 - d % 0x5,
                        0xb,
                        0x0
                    ]);
                }
            }]
    },
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x2,
            0x4,
            0x5
        ],
        'a2': [
            0x7,
            0x1,
            0x5,
            0xe,
            0x14
        ]
    }
});