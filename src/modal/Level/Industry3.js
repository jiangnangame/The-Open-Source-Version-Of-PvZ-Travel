/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oNutBowling,
        oBoomNutBowling
    ],
    'ZName': [
        oStrollZombie,
        oSadakoZombie,
        oSkatingZombie,
        oFootballZombie,
        oZomboni
    ],
    'LevelName': $__language_Array__['c9aafdf9d656e34128cf16d95c35b9fd'],
    'HaveFog': {
        'leftBorder': 0x3,
        'type': 'Fog'
    },
    'StartGameMusic': 'Bgm_Industry_Fight_Challenge_2',
    'FixedProps': 'disabled',
    'StaticCard': 0x0,
    'CanSelectCard': 0x0,
    'StartGame': a => {
        let b = [];
        for (let c = 0x1; c < 0x7; c++) {
            c % 0x3 == 0x0 ? b['push'](oBoomNutBowling) : b['push'](oNutBowling);
        }
        for (let d = 0x1; d < 0x5; d++) {
            b['push'](oNutBowling);
        }
        for (let e = 0x1; e < 0x3; e++) {
            b['push'](oBoomNutBowling);
        }
        for (let f = 0x1; f < 0x4; f++) {
            b['push'](oNutBowling);
        }
        for (let g = 0x1; g < 0x3; g++) {
            b['push'](oBoomNutBowling);
        }
        for (let h = 0x1; h < 0x6; h++) {
            b['push'](oNutBowling);
        }
        b['push'](oBoomNutBowling), b['push'](oBoomNutBowling), oMiniGames['ConveyorBelt']([
            oNutBowling,
            oNutBowling,
            oBoomNutBowling
        ], 0x177, 0x3, b);
    },
    'LoadAccess'(a) {
        NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll), NewEle(0x0, 'div', 'left:' + (0x179 - 0x50) + 'px;', { 'className': 'FlowerBed' }, FightingScene);
        let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll), e = NewEle('effect', 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll);
        (function f() {
            switch (b) {
            case 0x0:
                d['src'] = 'images/interface/Black_Dave.png', oEffects['fadeIn'](e, 'slow', () => c['onclick'] = f), PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['9baee9971b238f7e646f8540e9871dcd']), b++;
                break;
            case 0x1:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['f3ba64dbbf5ec63057938f662d87bbca']), b++;
                break;
            case 0x2:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(c, $__language_Array__['0e79bda2271c47d6ea00251e99f116e9']), b++;
                break;
            case 0x3:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(c, $__language_Array__['5b8ff091e8ecddea47e9bcc924a9240f']), b++;
                break;
            case 0x4:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(c, $__language_Array__['af40372dfc65f8f05fdf0c77916760ad']), b++;
                break;
            case 0x5:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['2b661d9f5d0c13327fa1285f83803751']), b++;
                break;
            case 0x6:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(c, $__language_Array__['32d7a32e329c1c872bc31d8ca00058ae']), b++;
                break;
            case 0x7:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['8b19bf4cb638fda641ae792fea12cee8']), b++;
                break;
            case 0x8:
                c['onclick'] = null, oEffects['fadeOut'](e, 'slow', g => {
                    ClearChild(g), c['onclick'] = f;
                }), d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['866128a3a8de9911cb2b7c92d87b8435']), b++;
                break;
            case 0x9:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['b18524265369bb443b0a844d5f191fdb']), b++;
                break;
            case 0xa:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['a0ece71bf3b1101231a6569492aa9a5f']), b++;
                break;
            case 0xb:
                ClearChild(c, d), oSym['addTask'](0x1e, a);
            }
        }());
    }
}, {
    'AZ': [
        [
            oStrollZombie,
            0x1,
            0x5
        ],
        [
            oSadakoZombie,
            0x1,
            0x1
        ],
        [
            oSkatingZombie,
            0x1,
            0x4
        ],
        [
            oFootballZombie,
            0x1,
            0x5
        ],
        [
            oZomboni,
            0x1,
            0x7
        ]
    ],
    'FlagNum': 0x9,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x5,
            0x7
        ],
        'a2': [
            0x2,
            0x1,
            0x7,
            0x9
        ]
    },
    'FlagToMonitor': {
        0x1: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    PlaceZombie(oStrollZombie, b, 0xb, 0x0);
                }
                for (let c = 0x0; c < 0x5; c++) {
                    oSym['addTask'](c * 0x190, d => {
                        PlaceZombie(oSadakoZombie, c % 0x5 + 0x1, 0xb, 0x0);
                    });
                }
                for (let d = 0x0; d < 0x5; d++) {
                    oSym['addTask'](d * 0x190, e => {
                        PlaceZombie(oSadakoZombie, 0x5 - d % 0x5, 0xb, 0x0);
                    });
                }
            }],
        0x2: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                }
                for (let c = 0x0; c < 0xa; c++) {
                    oSym['addTask'](c * 0x12c, d => {
                        PlaceZombie(oStrollZombie, c * c % 0x5 + 0x1, 0xb, 0x0);
                    });
                }
                for (let d = 0x0; d < 0xa; d++) {
                    oSym['addTask'](d * 0x12c, e => {
                        PlaceZombie(oStrollZombie, 0x5 - d * d % 0x5, 0xb, 0x0);
                    }), d % 0x2 == 0x0 && oSym['addTask'](d * 0x190, e => {
                        PlaceZombie(oStrollZombie, 0x3, 0xb, 0x0);
                    });
                }
            }],
        0x3: [a => {
                for (let b = 0x1; b < 0x6; b++) {
                    PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                }
                for (let c = 0x0; c < 0xa; c++) {
                    oSym['addTask'](c * 0x12c, d => {
                        PlaceZombie(oStrollZombie, c * c % 0x5 + 0x1, 0xb, 0x0);
                    });
                }
                for (let d = 0x0; d < 0x5; d++) {
                    oSym['addTask'](d * 0x190, e => {
                        PlaceZombie(oSadakoZombie, d % 0x5 + 0x1, 0xb, 0x0);
                    });
                }
                for (let e = 0x0; e < 0x5; e++) {
                    oSym['addTask'](e * 0x190, f => {
                        PlaceZombie(oSadakoZombie, 0x5 - e % 0x5, 0xb, 0x0);
                    });
                }
                for (let f = 0x0; f < 0xa; f++) {
                    oSym['addTask'](f * 0x12c, g => {
                        PlaceZombie(oStrollZombie, 0x5 - f * f % 0x5, 0xb, 0x0);
                    }), f % 0x2 == 0x0 && oSym['addTask'](f * 0x12c, g => {
                        PlaceZombie(oStrollZombie, 0x3, 0xb, 0x0);
                    });
                }
                for (let g = 0x1; g < 0xa; g++) {
                    oSym['addTask'](g * 0xfa, h => {
                        PlaceZombie(oSkatingZombie, Math['round'](Math['sqrt'](g * g * g)) % 0x5 + 0x1, 0xb, 0x0);
                    });
                }
            }],
        0x4: [a => {
                for (let b = 0x0; b < 0xa; b++) {
                    oSym['addTask'](b * 0x12c, c => {
                        PlaceZombie(oSkatingZombie, 0x5 - b * b % 0x5, 0xb, 0x0);
                    }), oSym['addTask'](b * 0x12c, c => {
                        PlaceZombie(oSkatingZombie, b * b % 0x5 + 0x1, 0xb, 0x0);
                    });
                }
                oSym['addTask'](0x1f4, c => {
                    PlaceZombie(oFootballZombie, 0x3, 0xb, 0x0);
                });
                for (let c = 0x0; c < 0x4; c++) {
                    oSym['addTask'](c * 0x190, d => {
                        PlaceZombie(oStrollZombie, 0x3, 0xb, 0x0);
                    });
                }
            }],
        0x5: [b => {
                for (let c = 0x0; c < 0x3; c++) {
                    oSym['addTask'](c * 0x258, d => {
                        for (let e = 0x1; e < 0x6; e++) {
                            e % (c + 0x1) == 0x0 && PlaceZombie(oSadakoZombie, e, 0xb, 0x0);
                        }
                    });
                }
            }],
        0x6: [a => {
                oSym['addTask'](0x12c, function b(c = 0x0) {
                    for (let d = 0x1; d < 0x6; d++) {
                        PlaceZombie(oZomboni, d, 0xc, 0x0);
                    }
                    c < 0x2 && oSym['addTask'](0x33e, b, [c + 0x1]);
                }), oSym['addTask'](0x320, function () {
                    for (let c = 0x0; c < 0x2; c++) {
                        oSym['addTask'](c * 0x190, d => {
                            PlaceZombie(oSkatingZombie, c % 0x5 + 0x1, 0xb, 0x0);
                        }), oSym['addTask'](c * 0x190, d => {
                            PlaceZombie(oSkatingZombie, 0x5 - c % 0x5, 0xb, 0x0);
                        });
                    }
                    oSym['addTask'](0x2 * 0x190, d => {
                        PlaceZombie(oSkatingZombie, 0x3, 0xb, 0x0);
                    });
                }), oSym['addTask'](0x190, c => {
                    PlaceZombie(oSkatingZombie, 0x1 % 0x5 + 0x1, 0xb, 0x0);
                }), oSym['addTask'](0x190, c => {
                    PlaceZombie(oSkatingZombie, 0x5 - 0x1 % 0x5, 0xb, 0x0);
                }), PlaceZombie(oSkatingZombie, 0x3, 0xb, 0x0);
            }],
        0x8: [a => {
                function b(c, d) {
                    oSym['addTask'](0x2 * d, function () {
                        for (let e = 0x0; e < 0x2; e++) {
                            oSym['addTask'](e * d, f => {
                                PlaceZombie(c, e % 0x5 + 0x1, 0xb, 0x0);
                            }), oSym['addTask'](e * d, f => {
                                PlaceZombie(c, 0x5 - e % 0x5, 0xb, 0x0);
                            });
                        }
                        oSym['addTask'](0x2 * d, f => {
                            PlaceZombie(c, 0x3, 0xb, 0x0);
                        });
                    }), oSym['addTask'](d, e => {
                        PlaceZombie(c, 0x1 % 0x5 + 0x1, 0xb, 0x0);
                    }), oSym['addTask'](d, e => {
                        PlaceZombie(c, 0x5 - 0x1 % 0x5, 0xb, 0x0);
                    }), PlaceZombie(c, 0x3, 0xb, 0x0);
                }
                for (let c = 0x0; c < 0x3; c++) {
                    oSym['addTask'](c * 0x258, b, [
                        oStrollZombie,
                        0x190
                    ]), oSym['addTask'](c * 0x258 + 0x12c, b, [
                        oSkatingZombie,
                        0x190
                    ]);
                }
                oSym['addTask'](0xc1c, b, [
                    oFootballZombie,
                    0x190
                ]);
                for (let d = 0x1; d < 0x6; d++) {
                    PlaceZombie(oSadakoZombie, d, 0x9, 0x0);
                }
            }]
    }
}, {
    'GrowPlant': function (m, n, o, p, q) {
        ZimuRQ['style']['display'] === 'block' && PlaySubtitle();
        if (n > 0x15b - 0x50)
            return PlaySubtitle($__language_Array__['ac57d2ae2f9a643b1c87152fb79a8a13']), CancelPlant(), ![];
        var r = oS['ChoseCard'], s = ArCard[r], t = s['PName'], u = t['prototype'], v = s['DID'], w, x = oGd['$LF'][p];
        u['CanGrow'](m, p, q) && (function () {
            PlayAudio(x != 0x2 ? 'plant' + Math['floor'](0x1 + Math['random']() * 0x2) : 'plant_water'), new t()['Birth'](n, o, p, q, m), oSym['addTask'](0x14, SetNone, [SetStyle($('imgGrowSoil'), {
                    'left': n - 0x1e + 'px',
                    'top': o - 0x28 + 'px',
                    'zIndex': 0x3 * p,
                    'visibility': 'visible'
                })]), ClearChild($('MovePlant'), $('MovePlantAlpha')), $('dCardList')['removeChild'](w = $(v)), w = null, ArCard['splice'](r, 0x1), oS['ChoseCard'] = '', oS['Chose'] = 0x0, GroundOnmousemove = function () {
            }, !Mobile && CancelPlant();
        }()), Mobile && CancelPlant();
    }
});