/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    function Cube(a, b) {
        oSym['addTask'](0x2 * b, function () {
            for (let c = 0x0; c < 0x2; c++) {
                oSym['addTask'](c * b, d => {
                    PlaceZombie(a, c % 0x5 + 0x1, 0xb, 0x0);
                }), oSym['addTask'](c * b, d => {
                    PlaceZombie(a, 0x5 - c % 0x5, 0xb, 0x0);
                });
            }
            oSym['addTask'](0x2 * b, d => {
                PlaceZombie(a, 0x3, 0xb, 0x0);
            });
        }), oSym['addTask'](b, c => {
            PlaceZombie(a, 0x1 % 0x5 + 0x1, 0xb, 0x0);
        }), oSym['addTask'](b, c => {
            PlaceZombie(a, 0x5 - 0x1 % 0x5, 0xb, 0x0);
        }), PlaceZombie(a, 0x3, 0xb, 0x0);
    }
    function Cube2(a, b, c, d) {
        oSym['addTask'](0x2 * d, function () {
            for (let e = 0x0; e < 0x2; e++) {
                oSym['addTask'](e * d, f => {
                    a && PlaceZombie(a, e % 0x5 + 0x1, 0xb, 0x0), b && PlaceZombie(b, (e + 0x1) % 0x5 + 0x1, 0xb, 0x0);
                }), oSym['addTask'](e * d, f => {
                    a && PlaceZombie(a, 0x5 - e % 0x5, 0xb, 0x0), b && e < 0x1 && PlaceZombie(b, 0x5 - (e + 0x1) % 0x5, 0xb, 0x0);
                });
            }
            c && PlaceZombie(c, 0x3, 0xb, 0x0), oSym['addTask'](0x2 * d, f => {
                a && PlaceZombie(a, 0x3, 0xb, 0x0);
            });
        }), oSym['addTask'](d, e => {
            a && PlaceZombie(a, 0x1 % 0x5 + 0x1, 0xb, 0x0);
        }), oSym['addTask'](d, e => {
            b && PlaceZombie(b, 0x3, 0xb, 0x0);
        }), oSym['addTask'](d, e => {
            a && PlaceZombie(a, 0x5 - 0x1 % 0x5, 0xb, 0x0);
        }), a && PlaceZombie(a, 0x3, 0xb, 0x0);
    }
    function Line(b, c, d = 0x12c, e = 0x3) {
        let f = 0x0;
        oSym['addTask'](0x0, function g() {
            PlaceZombie(b, c, 0xb, 0x0), ++f < e && oSym['addTask'](d, g);
        });
    }
    function X(a, b) {
        for (let c = 0x0; c < 0x2; c++) {
            PlaceZombie(a, c * 0x4 + 0x1, 0xb, 0x0), oSym['addTask'](c ? b : 0x3 * b, d => {
                for (let e = 0x1; e < 0x3; e++) {
                    PlaceZombie(a, e * 0x2, 0xb, 0x0);
                }
            });
        }
        oSym['addTask'](0x4 * b, d => {
            for (let e = 0x0; e < 0x2; e++) {
                PlaceZombie(a, e * 0x4 + 0x1, 0xb, 0x0);
            }
        }), oSym['addTask'](0x2 * b, d => {
            PlaceZombie(a, 0x3, 0xb, 0x0);
        });
    }
    let boomTimes = 0x0;
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
            oPlantern,
            oCabbage,
            oBlover,
            oShiitake,
            oKernelPult
        ],
        'ZName': [
            oSculpture,
            oZombie,
            oConeheadZombie,
            oImp,
            oMakeRifterZombie,
            oSculptorZombie,
            oSkatingZombie,
            oStrollZombie,
            oBucketheadZombie,
            oFootballZombie,
            oMembraneZombie,
            oZomboni,
            oBeetleCarZombie
        ],
        'LevelName': $__language_Array__['5ce5f6e2fd3a53627b45cb7d19553a63'],
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            for (let b = 0x1; b < 0x6; b++) {
                for (let c = 0x0; c < 0x2; c++) {
                    PlaceZombie(oSculpture, b, Math['abs'](b - 0x3) + 0x7 - c), CustomSpecial(oRifter, b, -Math['abs'](b - 0x3) + 0x3 + c);
                }
            }
            oSym['addTask'](0x5a, a);
        },
        'SunNum': 0x96,
        'StartGame'() {
            StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(a => {
                oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x5dc, b => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show'](), PlaceZombie(oSculptorZombie, 0x3, 0xb, 0x0), oSym['addTask'](0x3e8, function () {
                        X(oZombie, 0x2bc), Cube2(oZombie, oImp, oSkatingZombie, 0x2bc), new MutationObserver(c => c['forEach'](d => d['addedNodes']['forEach'](e => {
                            let f = e['id'], g = WIN[e['dataset']['jngConstructor']];
                            if (!g)
                                return;
                            let h = g['prototype']['EName'];
                            if (f['includes']('P_0.') && $P[f]) {
                                if (/oDoomShroom|oBambooUncle|oCherryBomb/['test'](h)) {
                                    var i;
                                    if (!ArPCard[h])
                                        return;
                                    (function k() {
                                        let l = NewEle('effect' + Math['random'](), 'div', 'pointer-events:none;position:absolute;z-index:257;width:1900px;height:600px;background:rgb(0,0,0);opacity:0;', 0x0, EDAll);
                                        oEffects['Animate'](l, {
                                            'background': 'rgb(200,0,0)',
                                            'opacity': 0.05
                                        }, 0.2, 'ease-out', m => {
                                            oSym['addTask'](0x1, n => {
                                                oEffects['Animate'](l, { 'opacity': 0x0 }, 0.4, 'linear', ClearChild);
                                            });
                                        });
                                    }());
                                    let j = JSON['parse']((i = localStorage['JNG_TR_BoomPlants']) !== null && i !== void 0x0 ? i : '{}');
                                    j[oS['Lvl']] = 0x1, localStorage['JNG_TR_BoomPlants'] = JSON['stringify'](j), boomTimes++;
                                }
                            }
                        })))['observe'](EDPZ, { 'childList': !![] });
                    });
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
                oConeheadZombie,
                0x1,
                0x2
            ],
            [
                oImp,
                0x1,
                0x1
            ],
            [
                oMakeRifterZombie,
                0x1,
                0x4
            ],
            [
                oSculptorZombie,
                0x1,
                0x5
            ],
            [
                oSkatingZombie,
                0x1,
                0x1
            ],
            [
                oStrollZombie,
                0x1,
                0x4
            ],
            [
                oBucketheadZombie,
                0x1,
                0x9
            ],
            [
                oFootballZombie,
                0x1,
                0x9
            ],
            [
                oMembraneZombie,
                0x1,
                0x9
            ],
            [
                oZomboni,
                0x1,
                0x9
            ],
            [
                oBeetleCarZombie,
                0x1,
                0xa
            ]
        ],
        'FlagNum': 0x8,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x4,
                0x5,
                0x7,
                0x8
            ],
            'a2': [
                0x1,
                0x5,
                0x9,
                0xc,
                0x16
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        b % 0x2 == 0x0 ? PlaceZombie(oConeheadZombie, b, 0xb, 0x0) : PlaceZombie(oZombie, b, 0xb, 0x0);
                        ;
                    }
                    oSym['addTask'](0x384, c => {
                        for (let d = 0x1; d < 0x6; d += 0x2) {
                            Line(oStrollZombie, d, 0x2bc, 0xf);
                        }
                    }), oSym['addTask'](0x483, c => {
                        X(oImp, 0x190), Cube(oImp, 0x190);
                    });
                }],
            0x3: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oSculptorZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0xc8, function () {
                        for (let c = 0x1; c < 0x6; c += 0x2) {
                            PlaceZombie(oMakeRifterZombie, c, 0xb, 0x0);
                        }
                    });
                }],
            0x4: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oBeetleCarZombie, b, 0xb, 0x0), Line(oStrollZombie, b, 0xb, 0x0);
                    }
                    for (let c = 0x1; c < 0x5; c++) {
                        oSym['addTask'](0x834 * (c - 0x1), d => {
                            c % 0x2 == 0x0 ? X(oImp, 0x2bc) : Cube(oImp, 0x2bc);
                        });
                    }
                }],
            0x5: [a => {
                    oSym['addTask'](0x384, b => {
                        for (let c = 0x1; c < 0x6; c += 0x2) {
                            Line(oMakeRifterZombie, c, 0x2bc, 0x2);
                        }
                    }), Cube2(oImp, oMembraneZombie, oZomboni, 0x2bc);
                }],
            0x6: [a => {
                    for (let b = 0x1; b < 0x6; b += 0x2) {
                        PlaceZombie(oConeheadZombie, b, 0xb, 0x0);
                    }
                }],
            0x7: [a => {
                    for (let b = 0x2; b < 0x6; b += 0x2) {
                        PlaceZombie(oBeetleCarZombie, b, 0xb, 0x0);
                    }
                    for (let c = 0x1; c < 0x6; c++) {
                        PlaceZombie(oStrollZombie, c, 0xb, 0x0);
                    }
                    oSym['addTask'](0x5dc, function () {
                        PlaceZombie(oFootballZombie, [
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]['random'](), 0xb, 0x0);
                    });
                }]
        },
        'FlagToEnd'() {
            oS['DefaultFlagToEnd']();
            if (boomTimes == 0x0) {
                var a;
                let b = JSON['parse']((a = localStorage['JNG_TR_BoomPlants']) !== null && a !== void 0x0 ? a : '{}');
                delete b[oS['Lvl']], localStorage['JNG_TR_BoomPlants'] = JSON['stringify'](b);
            }
        }
    });
}