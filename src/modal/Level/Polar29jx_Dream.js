/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let saveSun = -0x1;
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
        'LevelName': $__language_Array__['f0f301428c7f05c39576d7a0ca2543fd'],
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
            oS['SunNum'] = c['sun'];
            for (let d = 0x0; d < c['plants']['length']; d++) {
                CustomSpecial(window[c['plants'][d]['type']], -c['plants'][d]['R'] + 0x6, 0xa - c['plants'][d]['C']);
                let e = oGd['$'][-c['plants'][d]['R'] + 0x6 + '_' + (0xa - c['plants'][d]['C']) + '_' + c['plants'][d]['PKind']];
                e && e['getHurt'](null, 0x0, c['plants'][d]['deltaHP']);
            }
            oS['Lvl'] = 'Polar29jx', oSym['addTask'](0x1e, a);
        },
        'StartGame': a => {
            let b = 0x0, c = new MutationObserver(function (d) {
                    d['forEach'](function (e) {
                        for (let f = 0x0; f < e['addedNodes']['length']; f++) {
                            const g = e['addedNodes'][f]['id'], h = $P[g];
                            if (h && (h['EName'] == 'oCherryBomb' || h['EName'] == 'oBambooUncle' || h['EName'] == 'oMiracleImitater' || h['EName'] == 'oJalapeno' || h['EName'] == 'oDoomShroom' || h['EName'] == 'oPepper')) {
                                if (h['EName'] == 'oDoomShroom' && b < 0x3) {
                                    b++;
                                    continue;
                                }
                                oSym['addTask'](0x64, j => {
                                    PlaceZombie(oFootballZombie, [
                                        0x1,
                                        0x2,
                                        0x3,
                                        0x4,
                                        0x5
                                    ]['random'](), 0xc);
                                }), oSym['addTask'](0xc8, j => {
                                    PlaceZombie(oFootballZombie, [
                                        0x1,
                                        0x2,
                                        0x3,
                                        0x4,
                                        0x5
                                    ]['random'](), 0xc);
                                }), oSym['addTask'](0x12c, j => {
                                    PlaceZombie(oFootballZombie, [
                                        0x1,
                                        0x2,
                                        0x3,
                                        0x4,
                                        0x5
                                    ]['random'](), 0xc);
                                }), oSym['addTask'](Math['floor'](Math['random']() * 0x1f4) + 0x384, k => {
                                    for (let l = 0x1; l <= 0x5; l++) {
                                        for (let m = 0x2; m < 0xa; m++) {
                                            CustomSpecial(oRifterAnimate, l, m);
                                        }
                                        for (let n = 0x0; n < 0x3; n++) {
                                            oSym['addTask'](0xfa * n, o => {
                                                PlaceZombie(oSkatingZombie, l, 0xb, 0x0), oSym['addTask'](Math['floor'](Math['random']() * 0x1f4), q => {
                                                    PlaceZombie(oFootballZombie, [
                                                        0x1,
                                                        0x2,
                                                        0x3,
                                                        0x4,
                                                        0x5
                                                    ]['random'](), 0xb, 0x0);
                                                });
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    });
                });
            c['observe'](EDPZ, { 'childList': !![] }), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(d => {
                oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x6a4, e => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
                }), oSym['addTask'](0x6a9, e => {
                    for (let f = 0x1; f < 0x6; f++) {
                        PlaceZombie(oZomboni, f, 0xc, 0x0);
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
                0x1
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
                0x1,
                [0x1]
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
                0x5,
                0x28,
                0x3c,
                0x10
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    let b = [
                        0x1,
                        0x2,
                        0x3,
                        0x4,
                        0x5
                    ]['random']();
                    for (let c = 0x1; c < 0x4; c++) {
                        oSym['addTask'](0x12c * c, d => {
                            PlaceZombie(oFootballZombie, b, 0xb, 0x0);
                        });
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
                    }), oSym['addTask'](0x5dc, function () {
                        for (let c = 0x1; c < 0x6; c += 0x2)
                            PlaceZombie(oFootballZombie, c, 0xb, 0x0);
                    });
                }],
            0x5: [a => {
                    oSym['addTask'](0x25d, function b(c = 0x0) {
                        for (let d = 0x1; d < 0x6; d++) {
                            d % (c + 0x1) == 0x0 && PlaceZombie(oZomboni, d, 0xc, 0x0);
                        }
                        c < 0x3 && oSym['addTask'](0x2ee, b, [c + 0x1]);
                    }), oSym['addTask'](0x2328, function c() {
                        saveSun = oS['SunNum'];
                    });
                }]
        },
        'FlagToEnd': function () {
            let a = hasPlants(![], c => {
                    return c['EName'] != 'olSPCase' && c['C'] > 0x0 && c['C'] < 0xa;
                }), b = {
                    'sun': saveSun == -0x1 ? oS['SunNum'] : Math['min'](saveSun, oS['SunNum']),
                    'plants': []
                };
            for (let c = 0x0; c < a['length']; c++) {
                b['plants']['push']({
                    'type': a[c]['EName'],
                    'deltaHP': a[c]['__proto__']['HP'] - a[c]['HP'],
                    'R': a[c]['R'],
                    'PKind': a[c]['PKind'],
                    'C': a[c]['C']
                });
            }
            sessionStorage['JNG_TR_USER_POLARDATA'] = JSON['stringify'](b), PlaySubtitle($__language_Array__['f0d8a5d5eeadccd4574b2920170852af']), SetHidden($('dMenu')), setTimeout(d => {
                SelectModal('Polar29jx_Lunatic');
            }, 0x1388);
        }
    });
}