/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let oRifterAnimate2 = InheritO(oRifterAnimate, { 'Pepper': ![] }), saveSun = -0x1;
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
        'LevelName': $__language_Array__['bcd39058d741a54e51a74a061d5e92f1'],
        'DKind': 0x0,
        'backgroundImage': 'images/interface/Polar2.webp',
        'LoadMusic': 'Bgm_PolarJx_Lunatic',
        'FixedProps': { 'LSP': { 'num': Infinity } },
        'InitLawnMover': a => {
        },
        'LoadAccess'(a) {
            PlayAudio('Bgm_Polar_Noise', 0x1), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll);
            let b = NewEle('BGBOX_WIN', 'div', 'width:1400px;height:600px;z-index:199;', 0x0, $('dAll'));
            b['classList']['add']('BgMask-PolarJX'), NewImg('imgKxK', 'images/interface/PolarJxStar.webp', 'left:0;top:0;animation:rotate2\x20130s\x20linear\x20infinite;', b);
            let c = JSON['parse'](sessionStorage['JNG_TR_USER_POLARDATA']);
            oS['SunNum'] = c['sun'];
            for (let d = 0x0; d < c['plants']['length']; d++) {
                CustomSpecial(window[c['plants'][d]['type']], c['plants'][d]['R'], c['plants'][d]['C']);
                let e = oGd['$'][c['plants'][d]['R'] + '_' + c['plants'][d]['C'] + '_' + c['plants'][d]['PKind']];
                e && e['getHurt'](null, 0x0, c['plants'][d]['deltaHP']);
            }
            oS['Lvl'] = 'Polar29jx', oSym['addTask'](0x1e, a);
        },
        'StartGame': a => {
            SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(c => {
                oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x2bc, d => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
                });
            });
            let b = hasPlants();
            for (let c = 0x0; c < b['length']; c++) {
                Math['random']() < 0.2 && CustomSpecial(oRifterAnimate2, b[c]['R'], b[c]['C']);
            }
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
                0x3,
                0x5,
                0x6
            ],
            'a2': [
                0xc,
                0x28,
                0x3a,
                0x5a
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oSkatingZombie, b, 0xb, 0x0), CustomSpecial(oRifterAnimate, b, 0x9);
                    }
                    oSym['addTask'](0x1f4, c => {
                        for (let d = 0x1; d < 0x6; d += 0x2) {
                            PlaceZombie(oBucketheadZombie, d, 0xb, 0x0);
                        }
                    }), oSym['addTask'](0x4b0, c => {
                        for (let d = 0x1; d < 0x6; d++) {
                            PlaceZombie(oFootballZombie, d, 0xb, 0x0);
                        }
                    });
                }],
            0x2: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oMembraneZombie, b, 0xc, 0x0), oSym['addTask'](0x2bc, c => {
                            PlaceZombie(oMembraneZombie, b, 0xc, 0x0);
                        });
                    }
                    oSym['addTask'](0x708, c => {
                        PlaceZombie(oFootballZombie, [
                            0x1,
                            0x2,
                            0x5
                        ]['random'](), 0xb, 0x0);
                    });
                }],
            0x3: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oMembraneZombie, b, 0xc, 0x0);
                    }
                    oSym['addTask'](0x1f4, c => {
                        for (let d = 0x1; d < 0x3; d++) {
                            PlaceZombie(oZomboni, [
                                0x2,
                                0x3,
                                0x4
                            ]['random'](), 0xc, 0x0);
                        }
                    }), oSym['addTask'](0x5dc, c => {
                        for (let d = 0x0; d < 0x6; d++) {
                            oSym['addTask'](0xc8 * d, PlaceZombie, [
                                oFootballZombie,
                                d % 0x5 + 0x1,
                                0xb,
                                0x0
                            ]), oSym['addTask'](0xc8 * d, PlaceZombie, [
                                oFootballZombie,
                                0x5 - d % 0x5,
                                0xb,
                                0x0
                            ]);
                        }
                    });
                }],
            0x4: [a => {
                    oSym['addTask'](0x12c, function b(c = 0x0) {
                        for (let d = 0x1; d < 0x6; d++) {
                            PlaceZombie(oZomboni, d, 0xc, 0x0);
                        }
                        c < 0x2 && oSym['addTask'](0x33e, b, [c + 0x1]);
                    });
                }],
            0x5: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oMembraneZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x1b58, function c() {
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
            sessionStorage['JNG_TR_USER_POLARDATA'] = JSON['stringify'](b), PlaySubtitle($__language_Array__['321c6cbd2051ed48a0fb0a91062d4046']), SetHidden($('dMenu')), setTimeout(d => {
                SelectModal('Polar29jx_Dream');
            }, 0x1388);
        }
    });
}