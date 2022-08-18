/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let numRif = -0x1, rowRight = 0x3;
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
            oZombie,
            oBucketheadZombie,
            oConeheadZombie,
            oFootballZombie,
            oStrollZombie,
            oCigarZombie,
            oImp,
            oSadakoZombie,
            oSkatingZombie,
            oMakeRifterZombie,
            oPushIceImp,
            oMembraneZombie,
            oZomboni
        ],
        'LevelName': $__language_Array__['cb8899edd1ef1b14cc96c18aca388425'],
        'DKind': 0x0,
        'backgroundImage': 'images/interface/Polar2.webp',
        'LoadMusic': 'Bgm_PolarJx_Lunatic',
        'InitLawnMover': a => {
        },
        'FixedProps': { 'LSP': { 'num': Infinity } },
        'LoadAccess'(a) {
            PlayAudio('Bgm_Polar_Noise', 0x1), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll);
            let b = NewEle('BGBOX_WIN', 'div', 'width:1400px;height:600px;z-index:199;', 0x0, $('dAll'));
            b['classList']['add']('BgMask-PolarJX'), NewImg('imgKxK', 'images/interface/PolarJxStar.webp', 'left:0;top:0;animation:rotate2\x20130s\x20linear\x20infinite;', b);
            let c = JSON['parse'](sessionStorage['JNG_TR_USER_POLARDATA']);
            oS['SunNum'] = Math['floor'](c['sun'] / 0xa);
            for (let d = 0x0; d < c['plants']['length']; d++) {
                let e = oGd['$'][(c['plants'][d]['R'] + c['plants'][d]['C']) % 0x5 + 0x1 + '_' + (Math['abs'](c['plants'][d]['C'] - c['plants'][d]['R']) % 0x9 + 0x1) + '_' + c['plants'][d]['PKind']];
                !e && (CustomSpecial(window[c['plants'][d]['type']], (c['plants'][d]['R'] + c['plants'][d]['C']) % 0x5 + 0x1, Math['abs'](c['plants'][d]['C'] - c['plants'][d]['R']) % 0x9 + 0x1), c['plants'][d]['type'] == 'oRifter' && numRif++, e = oGd['$'][(c['plants'][d]['R'] + c['plants'][d]['C']) % 0x5 + 0x1 + '_' + (Math['abs'](c['plants'][d]['C'] - c['plants'][d]['R']) % 0x9 + 0x1) + '_' + c['plants'][d]['PKind']], e && e['getHurt'](null, 0x0, c['plants'][d]['deltaHP']));
            }
            oSym['addTask'](0x5a, a), oS['Lvl'] = 'Polar29jx';
        },
        'StartGame': a => {
            let b = ![], c = new MutationObserver(function (d) {
                    d['forEach'](function (e) {
                        for (let f = 0x0; f < e['addedNodes']['length']; f++) {
                            const g = e['addedNodes'][f]['id'], h = $P[g];
                            if (h && (h['EName'] == 'oCherryBomb' || h['EName'] == 'oBambooUncle' || h['EName'] == 'oMiracleImitater' || h['EName'] == 'oJalapeno' || h['EName'] == 'oDoomShroom' || h['EName'] == 'oPepper')) {
                                if (oP['FlagZombies'] == oP['FlagNum'] && h['EName'] == 'oDoomShroom') {
                                    if (!b)
                                        b = !![];
                                    else
                                        continue;
                                } else {
                                    if (oP['FlagZombies'] == 0x2 && h['EName'] == 'oDoomShroom')
                                        continue;
                                }
                                !(oP['FlagZombies'] == oP['FlagNum'] && h['EName'] == 'oDoomShroom') && oSym['addTask'](0x64, k => {
                                    for (let l = 0x1; l <= 0x5; l++) {
                                        for (let m = 0x2; m < 0xa; m += 0x2) {
                                            CustomSpecial(oRifterAnimate, l, m);
                                        }
                                        oSym['addTask'](0x1f4, function n(o = 0x0) {
                                            for (let q = 0x1; q < 0x6; q++) {
                                                PlaceZombie(oZomboni, q, 0xc, 0x0);
                                            }
                                            o < 0x3 && oSym['addTask'](0x33e, n, [o + 0x1]);
                                        }), oSym['addTask'](0x64, function o(q = 0x0) {
                                            for (let r = 0x1; r <= 0x5; r += 0x2) {
                                                PlaceZombie(oFootballZombie, r, 0xb, 0x0);
                                            }
                                            q < 0x28 && oSym['addTask'](0x12c, o, [q + 0x1]);
                                        }), PlaceZombie(oSkatingZombie, l, 0xb, 0x0), oSym['addTask'](Math['floor'](Math['random']() * 0x1f4), q => {
                                            PlaceZombie(oMembraneZombie, [
                                                0x1,
                                                0x2,
                                                0x3,
                                                0x4,
                                                0x5
                                            ]['random'](), 0xb, 0x0);
                                        }), oSym['addTask'](Math['floor'](Math['random']() * 0x3e8), q => {
                                            PlaceZombie(oMembraneZombie, [
                                                0x1,
                                                0x2,
                                                0x3,
                                                0x4,
                                                0x5
                                            ]['random'](), 0xb, 0x0);
                                        });
                                    }
                                    for (let q of $Z) {
                                        q['HP'] += 0x2bc;
                                    }
                                }), oSym['addTask'](Math['floor'](Math['random']() * 0x1f4) + 0x384, k => {
                                    for (let l = 0x1; l <= 0x5; l++) {
                                        for (let m = 0x1; m < 0xa; m += 0x2) {
                                            CustomSpecial(oRifterAnimate, l, m);
                                        }
                                        CustomSpecial(oRifterAnimate, l, 0x4), CustomSpecial(oRifterAnimate, l, 0x6), CustomSpecial(oRifterAnimate, l, 0x8), PlaceZombie(oSkatingZombie, l, 0xb, 0x0), oSym['addTask'](0x1a4, n => {
                                            let o = PlaceZombie(oSkatingZombie, l, 0xb, 0x0);
                                            o['HP'] += 0x5dc;
                                        }), oSym['addTask'](Math['floor'](Math['random']() * 0x1f4), n => {
                                            PlaceZombie(oFootballZombie, [
                                                0x1,
                                                0x2,
                                                0x3,
                                                0x4,
                                                0x5
                                            ]['random'](), 0xb, 0x0);
                                        }), oP['FlagZombies'] < oP['FlagNum'] - 0x1 && oSym['addTask'](Math['floor'](Math['random']() * 0x3e8), n => {
                                            PlaceZombie(oFootballZombie, [
                                                0x1,
                                                0x2,
                                                0x3,
                                                0x4,
                                                0x5
                                            ]['random'](), 0xb, 0x0);
                                        });
                                    }
                                    for (let n of $Z) {
                                        n['HP'] += 0x258;
                                    }
                                });
                            }
                        }
                    });
                });
            c['observe'](EDPZ, { 'childList': !![] });
            for (let d = 0x0; d < numRif; d++) {
                for (let e = 0x1; e <= 0x5; e++) {
                    for (let f = rowRight; f < 0xa; f++) {
                        e % rowRight == f % rowRight && (!oGd['$'][e + '_' + f + '_1'] || oGd['$'][e + '_' + f + '_1']['EName'] != 'oRifter') && CustomSpecial(oRifterAnimate, e, f);
                    }
                }
                if (rowRight-- == 0x1)
                    break;
            }
            SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(g => {
                oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x384, h => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
                }), oSym['addTask'](0x384, h => {
                    for (let k = 0x2; k < 0x5; k++) {
                        PlaceZombie(oBucketheadZombie, k, 0xb, 0x0);
                    }
                });
            });
        }
    }, {
        'AZ': [
            [
                oZombie,
                0x1,
                0x1
            ],
            [
                oBucketheadZombie,
                0x1,
                0x1
            ],
            [
                oConeheadZombie,
                0x1,
                0x1
            ],
            [
                oFootballZombie,
                0x2,
                0x6
            ],
            [
                oStrollZombie,
                0x1,
                0x1
            ],
            [
                oCigarZombie,
                0x2,
                0x1
            ],
            [
                oImp,
                0x1,
                0x1
            ],
            [
                oSadakoZombie,
                0x1,
                0x1
            ],
            [
                oSkatingZombie,
                0x1,
                0x1
            ],
            [
                oMakeRifterZombie,
                0x1,
                0x6
            ],
            [
                oPushIceImp,
                0x1,
                0x1
            ],
            [
                oMembraneZombie,
                0x3,
                0x1,
                [0x1]
            ],
            [
                oZomboni,
                0x1,
                0x2,
                [0x2]
            ]
        ],
        'FlagNum': 0x6,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x2,
                0x3,
                0x5,
                0x6
            ],
            'a2': [
                0x1,
                0x6,
                0xc,
                0x14,
                0xf
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    for (let b = 0x1; b < 0x1e; b++) {
                        oSym['addTask'](0xc8 * b, PlaceZombie, [
                            oCigarZombie,
                            b % 0x5 + 0x1,
                            0xb,
                            0x0
                        ]);
                    }
                }],
            0x2: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oMembraneZombie, b, 0xb, 0x0);
                    }
                }],
            0x3: [a => {
                    oSym['addTask'](0x12c, function () {
                        for (let b = 0x1; b < 0x6; b++) {
                            for (let c = 0x8; c < 0xa; c++) {
                                b % 0x2 != c % 0x2 && CustomSpecial(oRifterAnimate, b, c);
                            }
                            PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                        }
                    });
                }],
            0x4: [a => {
                    oSym['addTask'](0xcd, function b(c = 0x0) {
                        for (let d = 0x1; d < 0x6; d++) {
                            PlaceZombie(oSkatingZombie, d, 0xc, 0x0);
                        }
                        c < 0x3 && oSym['addTask'](0x12c, b, [c + 0x1]);
                    });
                    for (let c = 0x1; c < 0x6; c += 0x2) {
                        oSym['addTask'](0x258 * c, function () {
                            PlaceZombie(oZomboni, c, 0xc, 0x0);
                        });
                    }
                }],
            0x5: [a => {
                    oSym['addTask'](0x25d, function b(c = 0x0) {
                        for (let d = 0x1 + c % 0x2; d < 0x6; d += 0x2) {
                            PlaceZombie(oZomboni, d, 0xc, 0x0);
                        }
                        c < 0x3 && oSym['addTask'](0x33e, b, [c + 0x1]);
                    });
                }]
        },
        'FlagToEnd': function () {
            oS['DefaultFlagToEnd']();
        }
    });
}