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
            oKernelPult,
            oXshooter,
            oMacintosh
        ],
        'ZName': [
            oBalloonZombie,
            oSculpture,
            oPushIceImp,
            oSculptorZombie,
            oMembraneZombie,
            oZombie,
            oConeheadZombie,
            oCigarZombie,
            oZomboni,
            oThiefZombie,
            oBeetleCarZombie,
            oGargantuar,
            oImp
        ],
        'LevelName': $__language_Array__['9c59b1fefc6cc0646b80a25adb0e23b6'],
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            for (let f = 0x1; f < 0x6; f++) {
                for (let g = 0x8; g < 0xa; g++) {
                    PlaceZombie(oSculpture, f, g);
                }
            }
            NewEle(0x0, 'div', 'left:330px;', { 'className': 'Mould' }, $('tGround'));
            for (let h = 0x1; h < 0x6; h++) {
                CustomSpecial(oObstacle, h, 0x2), CustomSpecial(oRifter, h, 0x1);
            }
            let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function k() {
                d['onclick'] = k;
                switch (c) {
                case 0x0:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['29c926dc131e3094b78e70aedf64f213']), c++;
                    break;
                case 0x1:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['41397d74fb10ebca5b230ac3e967ac60']), c++;
                    break;
                case 0x2:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['72355c491fc695299845235a4a253bed']), c++;
                    break;
                case 0x3:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['e9180988540bdb4330f065fe4ebceb77']), c++;
                    break;
                case 0x4:
                    d['onclick'] = null, e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['65fb68f779c6bc9745a43a20a6fdfef1']), oEffects['Animate'](b, {
                        'background': 'black',
                        'opacity': 0x1
                    }, 'slow', 'linear', () => d['onclick'] = k), c++;
                    break;
                case 0x5:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['47a61074554ae2f2dbb4e8408519d4c1']), c++;
                    break;
                case 0x6:
                    ClearChild(d, e), oEffects['fadeOut'](b, 'slow', l => {
                        ClearChild(l), oSym['addTask'](0xa, a);
                    });
                }
            }());
        },
        'HaveFog': {
            'leftBorder': 0x3,
            'type': 'strongFog'
        },
        'SunNum': 0x96,
        'StartGame'() {
            StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(a => {
                oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x5dc, b => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
                    let c = 0x0;
                    new MutationObserver(d => d['forEach'](e => e['addedNodes']['forEach'](f => {
                        let g = f['id'], h = WIN[f['dataset']['jngConstructor']];
                        if (!h)
                            return;
                        let i = h['prototype']['EName'];
                        if (g['includes']('P_0.') && $P[g]) {
                            if (/oDoomShroom|oBambooUncle|oCherryBomb/['test'](i)) {
                                var j;
                                if (!ArPCard[i])
                                    return;
                                (function l() {
                                    let m = NewEle('effect' + Math['random'](), 'div', 'pointer-events:none;position:absolute;z-index:257;width:1900px;height:600px;background:rgb(0,0,0);opacity:0;', 0x0, EDAll);
                                    oEffects['Animate'](m, {
                                        'background': 'rgb(200,0,0)',
                                        'opacity': 0.05
                                    }, 0.2, 'ease-out', n => {
                                        oSym['addTask'](0x1, o => {
                                            oEffects['Animate'](m, { 'opacity': 0x0 }, 0.4, 'linear', ClearChild);
                                        });
                                    });
                                }());
                                let k = JSON['parse']((j = localStorage['JNG_TR_BoomPlants']) !== null && j !== void 0x0 ? j : '{}');
                                k[oS['Lvl']] = 0x1, localStorage['JNG_TR_BoomPlants'] = JSON['stringify'](k), ++c;
                            } else
                                /oSunFlower|oSunShroom/['test'](i) && oSym['addTask'](0x5dc * Math['random']() + 0x258, function () {
                                    $P[g] && Math['random']() > 0.8 && PlaceZombie(oThiefZombie, $P[g]['R'], $P[g]['C'], 0x0);
                                });
                        }
                    })))['observe'](EDPZ, { 'childList': !![] });
                });
            });
        }
    }, {
        'AZ': [
            [
                oPushIceImp,
                0x1,
                0x3
            ],
            [
                oSculptorZombie,
                0x1,
                0x5
            ],
            [
                oMembraneZombie,
                0x1,
                0x7
            ],
            [
                oBalloonZombie,
                0x1,
                0x2
            ],
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
                oCigarZombie,
                0x1,
                0x3
            ],
            [
                oZomboni,
                0x1,
                0x6
            ],
            [
                oThiefZombie,
                0x1,
                0x8,
                [
                    0x7,
                    0xb,
                    0xc,
                    0xd
                ]
            ],
            [
                oBeetleCarZombie,
                0x1,
                0x5
            ],
            [
                oGargantuar,
                0x1,
                0xa,
                [0x8]
            ]
        ],
        'FlagNum': 0xd,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x4,
                0x5,
                0x7,
                0x9,
                0xb,
                0xc,
                0xd
            ],
            'a2': [
                0x1,
                0x3,
                0x6,
                0x8,
                0xc,
                0x7,
                0x3,
                0xf
            ]
        },
        'FlagToMonitor': {
            0x3: [a => {
                    let b = hasPlants(!![], function (c) {
                        return c['Tools'] != !![] && c['canEat'] == !![];
                    });
                    for (let c = 0x0; c < 0x2; c++) {
                        let d = Math['floor'](Math['random']() * b['length']), e, f;
                        if (b['length'] > 0x0 && Math['random']() > 0.1) {
                            let g = b[d];
                            [e, f] = [
                                g['R'],
                                g['C']
                            ], b['splice'](d, 0x1);
                        } else
                            e = [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), f = Math['floor'](Math['random']() * 0x2 + 0x1);
                        PlaceZombie(oThiefZombie, e, f, 0x0);
                    }
                }],
            0x5: [a => {
                    let b = hasPlants(!![], function (c) {
                        return c['Tools'] != !![] && c['canEat'] == !![];
                    });
                    for (let c = 0x0; c < 0x3; c++) {
                        let d = Math['floor'](Math['random']() * b['length']), e, f;
                        if (b['length'] > 0x0 && Math['random']() > 0.3) {
                            let g = b[d];
                            [e, f] = [
                                g['R'],
                                g['C']
                            ], b['splice'](d, 0x1);
                        } else
                            e = [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), f = Math['floor'](Math['random']() * 0x2 + 0x1);
                        PlaceZombie(oThiefZombie, e, f, 0x0);
                    }
                }],
            0x9: [a => {
                    let b = hasPlants(!![], function (c) {
                        return c['Tools'] != !![] && c['canEat'] == !![];
                    });
                    for (let c = 0x0; c < 0x5; c++) {
                        let d = Math['floor'](Math['random']() * b['length']), e, f;
                        if (b['length'] > 0x0 && Math['random']() > 0.5) {
                            let g = b[d];
                            [e, f] = [
                                g['R'],
                                g['C']
                            ], b['splice'](d, 0x1);
                        } else
                            e = [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), f = Math['floor'](Math['random']() * 0x2 + 0x1);
                        PlaceZombie(oThiefZombie, e, f, 0x0);
                    }
                }],
            0xc: [a => {
                    let b = hasPlants(!![], function (c) {
                        return c['Tools'] != !![] && c['canEat'] == !![];
                    });
                    for (let c = 0x0; c < 0x8; c++) {
                        let d = Math['floor'](Math['random']() * b['length']), e, f;
                        if (b['length'] > 0x0 && Math['random']() > 0.6) {
                            let g = b[d];
                            [e, f] = [
                                g['R'],
                                g['C']
                            ], b['splice'](d, 0x1);
                        } else
                            e = [
                                0x1,
                                0x2,
                                0x3,
                                0x4,
                                0x5
                            ]['random'](), f = Math['floor'](Math['random']() * 0x3 + 0x1);
                        PlaceZombie(oThiefZombie, e, f, 0x0);
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