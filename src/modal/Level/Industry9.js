/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
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
            oKiwibeastStrong,
            oPlantern,
            oCabbage,
            oBlover
        ],
        'ZName': [
            oBalloonZombie,
            oZombie,
            oSculpture,
            oSculptorZombie,
            oImp,
            oStrollZombie,
            oNewspaperZombie,
            oCigarZombie,
            oConeheadZombie,
            oBucketheadZombie,
            oCaskZombie,
            oZomboni,
            oFootballZombie,
            oMembraneZombie
        ],
        'LevelName': $__language_Array__['21b75fadde83e9dc0ebe42708bdc91ce'],
        'DynamicDifficulty': ![],
        'AllowUserCard': ![],
        'LoadAccess'(b) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll), oSym['addTask'](0x1e, b), addEventListenerRecord('jng-event-startgame', () => {
                oSym['addTask'](0x1f4, c => {
                    AppearSun(GetX(Math['floor'](0x1 + Math['random']() * oS['C'])), GetY(Math['floor'](0x1 + Math['random']() * oS['R'])), 0x32, 0x1);
                }), new MutationObserver(c => c['forEach'](d => d['addedNodes']['forEach'](e => {
                    let f = e['id'], g = WIN[e['dataset']['jngConstructor']];
                    if (!g)
                        return;
                    let h = g['prototype']['EName'];
                    if (f['includes']('P_0.')) {
                        if (/oDoomShroom|oBambooUncle|oCherryBomb/['test'](h)) {
                            var i;
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
                            j[oS['Lvl']] = 0x1, localStorage['JNG_TR_BoomPlants'] = JSON['stringify'](j), ++boomTimes;
                        }
                    }
                })))['observe'](EDPZ, { 'childList': !![] });
            }, { 'once': !![] });
        },
        'HaveFog': {
            'type': 'Fog',
            'leftBorder': 0x4
        }
    }, {
        'AZ': [
            [
                oBalloonZombie,
                0x1,
                0x1
            ],
            [
                oImp,
                0x1,
                0x1,
                [0x1]
            ],
            [
                oConeheadZombie,
                0x1,
                0x6
            ],
            [
                oCigarZombie,
                0x1,
                0x1
            ],
            [
                oSculptorZombie,
                0x1,
                0xa
            ],
            [
                oZombie,
                0x1,
                0x1,
                [0x1]
            ],
            [
                oStrollZombie,
                0x1,
                0x1
            ],
            [
                oNewspaperZombie,
                0x1,
                0x1
            ],
            [
                oBucketheadZombie,
                0x1,
                0x6,
                [
                    0x14,
                    0x17
                ]
            ],
            [
                oCaskZombie,
                0x1,
                0x6
            ],
            [
                oZomboni,
                0x1,
                0x15,
                [
                    0x15,
                    0x16,
                    0x17
                ]
            ],
            [
                oFootballZombie,
                0x1,
                0x6,
                [0x14]
            ],
            [
                oMembraneZombie,
                0x1,
                0xf,
                [0x14]
            ]
        ],
        'FlagNum': 0xa,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x7,
                0x9,
                0xa
            ],
            'a2': [
                0x2,
                0xa,
                0x10,
                0x19
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    X(oBalloonZombie, 0x1f4), Cube2(oImp, oCigarZombie, oFootballZombie, 0x2bc);
                }],
            0x2: [a => {
                    for (let b = 0x0; b < 0xa; b++) {
                        oSym['addTask'](b * 0x12c, c => {
                            PlaceZombie(oStrollZombie, 0x5 - b * b % 0x5, 0xb, 0x0);
                        }), b % 0x2 == 0x0 && oSym['addTask'](b * 0x12c, c => {
                            PlaceZombie(oStrollZombie, 0x3, 0xb, 0x0);
                        });
                    }
                }],
            0x3: [a => {
                    X(oBalloonZombie, 0x1f4), Cube2(oBalloonZombie, oCaskZombie, oFootballZombie, 0x2bc), oSym['addTask'](0x2bc, b => {
                        X(oNewspaperZombie, 0x190);
                    });
                }],
            0x4: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        Line(oConeheadZombie, b, 0x258, 0x5), b % 0x2 == 0x1 && X(oBalloonZombie, b * 0x1f4);
                    }
                    Cube2(oNewspaperZombie, oNewspaperZombie, oBucketheadZombie, 0x2bc), oSym['addTask'](0x258, c => {
                        for (let d = 0x2; d < 0x6; d += 0x2) {
                            PlaceZombie(oCaskZombie, d, 0xb, 0x0);
                        }
                    });
                }],
            0x5: [a => {
                    X(oBalloonZombie, 0x2bc), PlaceZombie(oFootballZombie, 0x1, 0xb, 0x0), PlaceZombie(oFootballZombie, 0x5, 0xb, 0x0);
                    for (let b = 0x1; b < 0x6; b++) {
                        Line(oStrollZombie, b, 0x258, 0x5);
                    }
                }],
            0x6: [a => {
                    for (let b = 0x1; b < 0x6; b++)
                        PlaceZombie(oSculpture, b, 0xb, 0x0);
                    for (let c = 0x1; c < 0x6; c++)
                        PlaceZombie(oSculptorZombie, c, 0xc, 0x0);
                    oSym['addTask'](0x1f4, d => {
                        for (let e = 0x1; e < 0x6; e++)
                            !oGd['$LockingGrid'][e + '_11'] && PlaceZombie(oSculpture, e, 0xb, 0x0);
                    }), oSym['addTask'](0xc8, d => {
                        for (let e = 0x1; e < 0x6; e++)
                            !oGd['$LockingGrid'][e + '_11'] && PlaceZombie(oSculpture, e, 0xb, 0x0);
                    });
                }],
            0x7: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        Line(oBucketheadZombie, b, 0x1f4, 0x2);
                    }
                    X(oZombie, 0x1f4), Cube2(oBalloonZombie, oCaskZombie, oFootballZombie, 0x2bc);
                }],
            0x8: [a => {
                    Cube2(oCigarZombie, oMembraneZombie, oCaskZombie, 0x2bc), Cube2(oNewspaperZombie, oCaskZombie, oCaskZombie, 0x2bc);
                    for (let b = 0x1; b < 0x6; b++)
                        PlaceZombie(oSculptorZombie, b, 0xc, 0x0);
                }],
            0x9: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oZomboni, b, 0xb, 0x0), b % 0x2 == 0x0 ? PlaceZombie(oMembraneZombie, b, 0xb, 0x0) : (Line(oFootballZombie, b, 0x12c, 0x1), Line(oBucketheadZombie, b, 0x12c, 0x2));
                    }
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