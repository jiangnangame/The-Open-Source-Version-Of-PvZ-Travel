/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oPuffShroom,
        oFumeShroom,
        oCherryBomb,
        oDoomShroom,
        oBegonia,
        oMonotropa,
        oSpikeweed,
        oRadish,
        oPotatoMine
    ],
    'ZName': [
        oZombie,
        oImp,
        oBalloonZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oPushIceImp,
        oNewspaperZombie,
        oSkatingZombie,
        oMakeRifterZombie,
        oZomboni
    ],
    'LevelName': $__language_Array__['3ec39cf0dd976dc0e14e3c67d37a026c'],
    'LoadMusic': 'Bgm_Polar_Ready_JX_2',
    'StartGameMusic': 'Bgm_Polar_Fight_JX_2',
    'FixedProps': { 'LSP': { 'num': Infinity } },
    'CanSelectCard': ![],
    'LoadAccess'(a) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll);
        for (let b = 0x1; b < 0x8; b++) {
            b > 0x5 || b < 0x4 ? NewEle(0x0, 'div', 'left:' + (0x87 + (b - 0x1) * 0x50) + 'px;', { 'className': 'Mould' }, FightingScene) : CustomSpecial(oRifter, 0x3, b);
        }
        for (let c = 0x1; c < 0x6; c++) {
            for (let d = 0x1; d < 0x8; d++) {
                (d > 0x5 || d < 0x4) && CustomSpecial(oObstacle, c, d);
            }
            NewEle(0x0, 'div', 'left:\x20' + (0x8c + 0x7 * 0x50) + 'px;top:' + (-0x14 + 0x64 * c) + 'px;', { 'className': 'sos' }, FightingScene), CustomSpecial(oBegonia, c, 0x8), CustomSpecial(oRifter, c, 0x9);
        }
        oSym['addTask'](0x5a, e => {
            a();
        });
    },
    'StartGame': function () {
        let a = { 'oBegonia': 0x5 };
        for (let d of $P) {
            d['HP'] += 0x258;
        }
        let b = {}, c = new Set();
        StopMusic(), PlayMusic(oS['LoadMusic'] = oS['StartGameMusic']), NewMusic(oS['LoadMusic'] = oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
            'fullValue': oP['FlagNum'] - 0x1,
            'curValue': 0x0
        });
        for (let e in $P) {
            let f = $P[e];
            a['hasOwnProperty'](f['EName']) && c['add'](f['R'] + '_' + f['C']);
        }
        PrepareGrowPlants(function () {
            oP['Monitor'](oS['Monitor']), BeginCool(), oS['DKind'] && AutoProduceSun(0x19), function g() {
                for (let h in a)
                    b[h] = 0x0;
                for (let j of $P)
                    b['hasOwnProperty'](j['EName']) && c['has'](j['R'] + '_' + j['C']) && ++b[j['EName']];
                for (let k in a) {
                    if (a[k] !== b[k]) {
                        toOver(0x2);
                        return;
                    }
                }
                oSym['addTask'](0xc8, g);
            }(), oSym['addTask'](0x5dc, h => {
                oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
            });
        }), oSym['addTask'](0x708, g => {
            PlaceZombie(oSkatingZombie, 0x2, 0xb, 0x0), PlaceZombie(oSkatingZombie, 0x4, 0xb, 0x0), PlaceZombie(oImp, 0x3, 0xb, 0x0);
        });
    }
}, {
    'AZ': [
        [
            oZombie,
            0x2,
            0x2
        ],
        [
            oImp,
            0x2,
            0x2
        ],
        [
            oBalloonZombie,
            0x2,
            0x2
        ],
        [
            oPushIceImp,
            0x1,
            0xa
        ],
        [
            oConeheadZombie,
            0x1,
            0x4
        ],
        [
            oBucketheadZombie,
            0x1,
            0xa
        ],
        [
            oNewspaperZombie,
            0x1,
            0x7
        ],
        [
            oSkatingZombie,
            0x2,
            0x1
        ],
        [
            oMakeRifterZombie,
            0x2,
            0xa
        ],
        [
            oZomboni,
            0x2,
            0xa
        ]
    ],
    'FlagNum': 0x8,
    'FlagToSumNum': {
        'a1': [
            0x6,
            0x7
        ],
        'a2': [
            0x0,
            0x5
        ]
    },
    'FlagToMonitor': {
        0x1: [a => {
                for (let b = 0x1; b <= 0x5; b += 0x2) {
                    PlaceZombie(oConeheadZombie, b, 0xb, 0x0);
                }
            }],
        0x2: [a => {
                for (let b = 0x1; b <= 0x5; b++) {
                    b % 0x2 == 0x0 ? PlaceZombie(oBalloonZombie, b, 0xb, 0x0) : PlaceZombie(oBucketheadZombie, b, 0xb, 0x0);
                }
            }],
        0x3: [a => {
                for (let b = 0x2; b < 0x5; b++) {
                    PlaceZombie(oPushIceImp, b, 0xb, 0x0);
                }
                PlaceZombie(oBalloonZombie, 0x1, 0xb, 0x0), PlaceZombie(oBalloonZombie, 0x5, 0xb, 0x0), PlaceZombie(oSkatingZombie, 0x1, 0xb, 0x0), PlaceZombie(oSkatingZombie, 0x5, 0xb, 0x0), oSym['addTask'](0x190, function () {
                    for (let c = 0x2; c < 0x5; c++) {
                        PlaceZombie(oNewspaperZombie, c, 0xb, 0x0);
                    }
                });
            }],
        0x4: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    PlaceZombie(oConeheadZombie, b, 0xb, 0x0);
                }
                PlaceZombie(oMakeRifterZombie, [
                    0x1,
                    0x2,
                    0x3,
                    0x4,
                    0x5
                ]['random'](), 0xb, 0x0), oSym['addTask'](0x258, function () {
                    PlaceZombie(oZomboni, [
                        0x3,
                        0x4,
                        0x5,
                        0x1
                    ]['random'](), 0xb, 0x0);
                }), oSym['addTask'](0x3e8, function () {
                    PlaceZombie(oMakeRifterZombie, 0x2, 0xb, 0x0), PlaceZombie(oBalloonZombie, 0x2, 0xb, 0x0), PlaceZombie(oPushIceImp, 0x2, 0xb, 0x0);
                });
            }],
        0x5: [a => {
                for (let b = 0x0; b < 0x3; b++) {
                    oSym['addTask'](b * 0x1f4, c => {
                        for (let d = 0x1; d < 0x6; d++) {
                            PlaceZombie(oSkatingZombie, d, 0xb, 0x0);
                        }
                    });
                }
                oSym['addTask'](Math['random']() * 0x2bc + 0x2bc, c => {
                    PlaceZombie(oMakeRifterZombie, [
                        0x1,
                        0x3,
                        0x5
                    ]['random'](), 0xb, 0x0);
                }), oSym['addTask'](0x5dc, function () {
                    for (let c = [
                                0x1,
                                0x3
                            ]['random'](), d = c + 0x3; c < d; c++) {
                        PlaceZombie(oZomboni, c, 0xb, 0x0);
                    }
                });
            }],
        0x6: [a => {
                let b = [
                        0x1,
                        0x3
                    ]['random'](), c = b + 0x3;
                function d(e) {
                    for (; b < c; b++) {
                        PlaceZombie(e, b, 0xb, 0x0);
                    }
                    b = (b - 0x1) % 0x5 + 0x1, b == 0x4 && b--, c = b + 0x3;
                }
                for (let e = 0x0; e < 0x8; e++) {
                    oSym['addTask'](0x12c * e, f => {
                        d([
                            oImp,
                            oImp,
                            oImp,
                            oZombie,
                            oBalloonZombie,
                            oBalloonZombie,
                            oNewspaperZombie,
                            oSkatingZombie,
                            oSkatingZombie,
                            oConeheadZombie,
                            oBucketheadZombie,
                            oPushIceImp,
                            oConeheadZombie
                        ][e]);
                    });
                }
                oSym['addTask'](0x578, function () {
                    for (let g = 0x1; g < 0x6; g++) {
                        PlaceZombie(oMakeRifterZombie, g, 0xb, 0x0);
                    }
                });
            }],
        0x7: [a => {
                oSym['addTask'](0x1f4, b => {
                    for (let c = 0x1; c < 0x6; c += 0x2) {
                        PlaceZombie(oZomboni, c, 0xb, 0x0);
                    }
                });
                for (let b = 0x0; b < 0xa; b++) {
                    oSym['addTask'](0x708 * Math['random'](), c => {
                        PlaceZombie([
                            oZombie,
                            oImp,
                            oNewspaperZombie,
                            oSkatingZombie,
                            oZombie,
                            oConeheadZombie,
                            oNewspaperZombie,
                            oSkatingZombie
                        ]['random'](), [
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]['random'](), 0xb, 0x0);
                    });
                }
            }]
    }
});