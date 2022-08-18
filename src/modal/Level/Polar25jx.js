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
        oKiwibeast,
        oMiracleImitater,
        oJalapeno
    ],
    'ZName': [
        oImp,
        oCaskZombie,
        oMakeRifterZombie,
        oMembraneZombie,
        oBalloonZombie,
        oSkatingZombie,
        oStrollZombie,
        oZomboni,
        oBucketheadZombie,
        oCigarZombie
    ],
    'LevelName': $__language_Array__['f425e10df45c3c6114c4ae8a2150090d'],
    'LoadMusic': 'Bgm_Polar_Ready_JX_2',
    'StartGameMusic': 'Bgm_Polar_Fight_JX_2',
    'FixedProps': { 'LSP': { 'num': Infinity } },
    'LoadAccess'(a) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll), [
            [
                0x2,
                0x6,
                oPotatoMine
            ],
            [
                0x2,
                0x8,
                oApple
            ],
            [
                0x3,
                0x8,
                oApple
            ],
            [
                0x4,
                0x6,
                oPotatoMine
            ],
            [
                0x4,
                0x8,
                oApple
            ],
            [
                0x3,
                0x7,
                oPuffShroom
            ],
            [
                0x2,
                0x7,
                oPuffShroom
            ],
            [
                0x4,
                0x7,
                oPuffShroom
            ],
            [
                0x3,
                0x6,
                oPuffShroom
            ]
        ]['forEach'](b => {
            let [c, d, e] = b;
            e && CustomSpecial(e, c, d), NewEle(0x0, 'div', 'left:\x20' + (0x8c + (d - 0x1) * 0x50) + 'px;top:' + (0x50 + 0x64 * (c - 0x1)) + 'px;', { 'className': 'sos' }, FightingScene);
        }), [
            [
                oTallNut,
                0x3,
                0x1
            ],
            [
                oSpikeweed,
                0x3,
                0x2
            ],
            [
                oRandomIce,
                0x3,
                0x9
            ],
            [
                oGoDownIce,
                0x4,
                0x9
            ],
            [
                oGoUpIce,
                0x2,
                0x9
            ]
        ]['forEach'](b => CustomSpecial(...b));
        for (let b = 0x1; b < 0x6; b++) {
            CustomSpecial(oRandomIce, b, Math['abs'](b - 0x3) + 0x3), b > 0x1 && (CustomSpecial(oRifter, 0x5, b + 0x4), CustomSpecial(oRifter, 0x1, b + 0x4), b < 0x5 && CustomSpecial(oRifter, b, 0x5)), b % 0x2 && CustomSpecial(oRifter, b, 0x4), b != 0x3 && CustomSpecial(oRifter, b, 0x3);
        }
        NewEle(0x0, 'div', 'left:\x20' + 0x82 + 'px;top:' + (0x50 + 0x64 * 1.92) + 'px;height:100px;', { 'className': 'sos' }, FightingScene), NewEle(0x0, 'div', 'left:\x20' + 0xd7 + 'px;top:' + (0x50 + 0x64 * 1.92) + 'px;height:100px;', { 'className': 'sos' }, FightingScene), oSym['addTask'](0x5a, a);
    },
    'StartGame': function () {
        let a = {
                'oPotatoMine': 0x2,
                'oApple': 0x3,
                'oPuffShroom': 0x4,
                'oTallNut': 0x1,
                'oSpikeweed': 0x1
            }, b = {}, c = new Set();
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
                d(), oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
            });
        });
        function d() {
            for (let g of $P) {
                (g['EName'] == 'oFumeShroom' || g['EName'] == 'oRadish' || g['EName'] == 'olSPCase' || g['EName'] == 'oPepper') && ($Z['length'] < 0x50 && (PlaceZombie(oMembraneZombie, [
                    0x1,
                    0x2,
                    0x3,
                    0x4,
                    0x5
                ]['random'](), 0xc, 0x0)['HP'] += 0x3e8));
            }
            oSym['addTask'](0x64, d);
        }
    }
}, {
    'AZ': [
        [
            oBalloonZombie,
            0x1,
            0x7
        ],
        [
            oMembraneZombie,
            0x1,
            0x7
        ],
        [
            oImp,
            0x1,
            0x1,
            [0x1]
        ],
        [
            oCaskZombie,
            0x1,
            0x2,
            [0x2]
        ],
        [
            oSkatingZombie,
            0x1,
            0x3,
            [0x3]
        ],
        [
            oStrollZombie,
            0x1,
            0x5,
            [0x5]
        ],
        [
            oMakeRifterZombie,
            0x1,
            0x7
        ],
        [
            oZomboni,
            0x1,
            0x7,
            [0x7]
        ],
        [
            oBucketheadZombie,
            0x1,
            0x3
        ],
        [
            oCigarZombie,
            0x1,
            0x8
        ]
    ],
    'FlagNum': 0x6,
    'FlagToMonitor': {
        0x1: [a => {
                PlaceZombie(oZomboni, [
                    0x2,
                    0x4
                ]['random'](), 0xc, 0x0), oSym['addTask'](0x258, function () {
                    PlaceZombie(oZombie, 0x2, 0xb, 0x0), PlaceZombie(oZombie, 0x4, 0xb, 0x0);
                }), oSym['addTask'](0x3e8, function () {
                    PlaceZombie(oSkatingZombie, 0x1, 0xb, 0x0), PlaceZombie(oSkatingZombie, 0x5, 0xb, 0x0);
                });
            }],
        0x2: [a => {
                PlaceZombie(oStrollZombie, 0x1, 0xb, 0x0);
            }],
        0x3: [a => {
                for (let b = 0x2; b <= 0x4; b++) {
                    PlaceZombie(oBalloonZombie, b, 0xb, 0x0);
                }
            }],
        0x4: [a => {
                PlaceZombie(oMembraneZombie, [
                    0x1,
                    0x5
                ]['random'](), 0xb, 0x0)['HP'] -= 0x190;
            }],
        0x5: [a => {
                PlaceZombie(oCigarZombie, [
                    0x1,
                    0x5
                ]['random'](), 0xb, 0x0), PlaceZombie(oMembraneZombie, [
                    0x1,
                    0x5
                ]['random'](), 0xb, 0x0)['HP'] -= 0x190;
            }]
    },
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x2,
            0x3,
            0x4,
            0x5
        ],
        'a2': [
            0x1,
            0x2,
            0x3,
            0x5,
            0x7,
            0x8
        ]
    }
});