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
            oKernelPult,
            oXshooter,
            oMacintosh
        ],
        'ZName': [
            oBeetleCarZombie,
            oSculpture,
            oBucketheadZombie,
            oSkatingZombie,
            oSculptorZombie,
            oNewspaperZombie,
            oPushIceImp,
            oCigarZombie,
            oFootballZombie,
            oZomboni,
            oGargantuar,
            oImp,
            oMakeRifterZombie
        ],
        'LevelName': $__language_Array__['02988ebca6a175208743be0cf2d42d9e'],
        'DynamicDifficulty': ![],
        'LockedCards': [
            oXshooter,
            oMacintosh
        ],
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            for (let f = 0x1; f < 0x6; f++) {
                PlaceZombie(oSculpture, f, 0x9), f % 0x2 == 0x0 && CustomSpecial(oRifter, f, 0x6);
                let g = f % 0x2 + 0x5;
                CustomSpecial(oSpikeweed, f, g), NewEle(0x0, 'div', 'left:\x20' + (0x8c + 0x50 * (g - 0x1)) + 'px;top:\x20' + (0x50 + (f - 0x1) * 0x64) + 'px;', { 'className': 'sos' }, FightingScene);
            }
            CustomSpecial(oXshooter, 0x3, 0x3);
            let b = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function h() {
                d['onclick'] = h;
                switch (b) {
                case 0x0:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['2fdcc2f838a6ab5e6ddee7ed3c0817db']), b++;
                    break;
                case 0x1:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['57fab1e9d72e0be10423b939c3c62747']), b++;
                    break;
                case 0x2:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['0baab8b79879eeda872f9d2be1b16435']), b++;
                    break;
                case 0x3:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['25353802c04358f827cd2f542625bee3']), b++;
                    break;
                case 0x4:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['bceca9f38c8b8b1116686eb8bbbdffb0']), b++;
                    break;
                case 0x5:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['2c4ad5cbf4512bbfd2385da855c9d75c']), b++;
                    break;
                case 0x6:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['016cc17d00b7fff28165e96a0ba499bb']), b++;
                    break;
                case 0x7:
                    ClearChild(d, e), oSym['addTask'](0x1e, a);
                }
            }());
        },
        'SunNum': 0x96,
        'StartGame'() {
            oMiniGames['ProtectPlants']({ 'oSpikeweed': 0x5 }), oSym['addTask'](0x514, function () {
                PlaceZombie(oBucketheadZombie, 0x3, 0xb, 0x0);
            });
        }
    }, {
        'AZ': [
            [
                oBucketheadZombie,
                0x1,
                0x1
            ],
            [
                oSkatingZombie,
                0x1,
                0x1
            ],
            [
                oBeetleCarZombie,
                0x1,
                0x50
            ],
            [
                oSculptorZombie,
                0x1,
                0x7
            ],
            [
                oNewspaperZombie,
                0x1,
                0x1
            ],
            [
                oPushIceImp,
                0x1,
                0x1
            ],
            [
                oCigarZombie,
                0x1,
                0x32
            ],
            [
                oFootballZombie,
                0x1,
                0x46
            ],
            [
                oZomboni,
                0x1,
                0x5a
            ],
            [
                oGargantuar,
                0x1,
                0x64
            ],
            [
                oMakeRifterZombie,
                0x1,
                0x4
            ]
        ],
        'FlagNum': 0xa,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x4,
                0x5,
                0x7,
                0x8,
                0x9,
                0xa
            ],
            'a2': [
                0x0,
                0x2,
                0x4,
                0x8,
                0x10,
                0x4,
                0x14
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    oSym['addTask'](0x384, b => {
                        for (let c = 0x1; c < 0x6; c++) {
                            Line(c % 0x2 == 0x0 ? oBucketheadZombie : oNewspaperZombie, c, 0x6a4, 0xf);
                        }
                    }), Line(oSkatingZombie, 0x2, 0x12c, 0x4), Line(oSkatingZombie, 0x4, 0x12c, 0x4);
                }],
            0x3: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        PlaceZombie(oSculptorZombie, b, 0xc, 0x0);
                    }
                    oSym['addTask'](0x190, function () {
                        for (let c = 0x1; c < 0x6; c++) {
                            PlaceZombie(oFootballZombie, c, 0xc, 0x0);
                        }
                    });
                }],
            0x4: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        oSym['addTask'](0x3e80 * Math['random'](), c => {
                            PlaceZombie(oZomboni, [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), 0xc, 0x0);
                        });
                    }
                    for (let c = 0x1; c < 0x6; c++) {
                        oSym['addTask'](0x640 * Math['random'](), d => {
                            PlaceZombie(oSculptorZombie, c, 0xc, 0x0);
                        });
                    }
                }],
            0x5: [a => {
                    oSym['addTask'](0x384, b => {
                        for (let c = 0x1; c < 0x6; c += 0x2) {
                            Line(oMakeRifterZombie, c, 0x2bc, 0x2);
                        }
                    }), Cube2(oMakeRifterZombie, oCigarZombie, oFootballZombie, 0x2bc);
                }],
            0x6: [a => {
                    for (let b = 0x1; b < 0x4; b++) {
                        oSym['addTask'](Math['random']() * 0x384, function () {
                            PlaceZombie(oZomboni, [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), 0xb, 0x0);
                        });
                    }
                    Line(oGargantuar, 0x2, 0x1770, 0x1), Line(oGargantuar, 0x4, 0x1770, 0x1);
                }],
            0x7: [a => {
                    for (let b = 0x1; b < 0x6; b += 0x4) {
                        PlaceZombie(oBeetleCarZombie, b, 0xb, 0x0), oSym['addTask'](Math['random']() * 0x5dc, function () {
                            PlaceZombie(oFootballZombie, [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), 0xb, 0x0);
                        });
                    }
                }],
            0x8: [a => {
                    PlaceZombie(oGargantuar, 0x3, 0xb, 0x0);
                    for (let b = 0x1; b < 0x6; b++) {
                        !oGd['$Sculpture'][b + '_' + 0xb] && PlaceZombie(oSculpture, b, 0xb, 0x0), PlaceZombie(oSculptorZombie, b, 0xc, 0x0);
                    }
                    oSym['addTask'](0x6a4, c => {
                        for (let d = 0x1; d < 0x6; d++) {
                            !oGd['$Sculpture'][d + '_' + 0xb] && PlaceZombie(oSculpture, d, 0xb, 0x0);
                        }
                    }), Cube2(oPushIceImp, oMakeRifterZombie, oGargantuar, 0x2bc);
                }],
            0x9: [a => {
                    for (let b = 0x1; b < 0x6; b += 0x4) {
                        PlaceZombie(oFootballZombie, b, 0xb, 0x0);
                    }
                }]
        },
        'FlagToEnd': function () {
            let a = NewEle('', 'div', 'position:absolute;left:300px;top:300px;overflow:visible;width:167px;height:108px;', {}, EDAll), b = NewImg('PointerUD2', 'images/interface/down.gif', 'left:67px;top:-50px;', a);
            NewImg('imgSF', 'images/interface/Conical_flask.png', 'left:0px;top:-124px', a, {
                'onclick': function () {
                    ClearChild(b), GetNewProp(this, 'Conical_flask', $__language_Array__['2cfebf8eaf64b89861bd86a00825690d'], $__language_Array__['1aea0f0dc5735f374c7aedc278dea7e8'], NextLevel(), '60px', '360px');
                }
            }), ShowWinItem(a);
        }
    });
}