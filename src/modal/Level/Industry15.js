/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let boomTimes = 0x0, failedNum = sessionStorage['TMP_FN'] ? sessionStorage['TMP_FN'] : -0x1;
    sessionStorage['TMP_FN'] = failedNum = Number['parseInt'](failedNum) + 0x1, oS['Init']({
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
            oImp,
            oZomboni,
            oGargantuar,
            oBeetleCarZombie,
            oFootballZombie,
            oMembraneZombie,
            oCigarZombie,
            oStrollZombie,
            oPushIceImp,
            oCaskZombie,
            oNewspaperZombie,
            oSculptorZombie
        ],
        'LevelName': $__language_Array__['01041eedd632ac498edc7f01ba61e029'],
        'DKind': 0x0,
        'SunNum': 0xe10,
        'StartGameMusic': 'Time_Is_Money',
        'FixedProps': 'disabled',
        'LockedCards': [
            [
                oSunShroom,
                0x0
            ],
            [
                oSunFlower,
                0x0
            ],
            [
                oMonotropa,
                0x0
            ]
        ],
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function f() {
                d['onclick'] = f;
                switch (c) {
                case 0x0:
                    e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['c648301772b2049b022f4c11aaff8b7d']), c++;
                    break;
                case 0x1:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['e5a4a4f0dbc4470ab598a119eabb00f5']), c++;
                    break;
                case 0x2:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['46ccdcc0ce25f0a5ba7eed4430e39b24']), c++;
                    break;
                case 0x3:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['771880cbc629d034be268375dff131cc']), c++;
                    break;
                case 0x4:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['59dee4fb36470c14238aabfc76283b83']), c++;
                    break;
                case 0x5:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['ff9146dfac75c1a9c2524470f6788b98']), c++;
                    break;
                case 0x6:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['b8979593abf17f2a1f3526a0be855ddb']), c++;
                    break;
                case 0x7:
                    e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['e47b09ef731224287b14444efe20abe8']), c++;
                    break;
                case 0x8:
                    d['onclick'] = null, e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['dfe4d32a35cedd9bd26f6b5588249a77']), oEffects['fadeIn'](b, 'slow', () => d['onclick'] = f), c++;
                    break;
                case 0x9:
                    e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['b1f62c19b521220c3f29207c41237c93']), c++;
                    break;
                case 0xa:
                    ClearChild(d, e), oEffects['fadeOut'](b, 'slow', g => {
                        ClearChild(g), oSym['addTask'](0xa, a);
                    });
                }
            }());
            for (let g = 0x7; g < 0xa; g++) {
                oSym['addTask']((g - 0x7) * 0xa, function () {
                    for (let h = 0x1; h < 0x6; h++)
                        PlaceZombie(oSculpture, h, g);
                });
            }
        },
        'StartGame': function () {
            PlaySubtitle($__language_Array__['60ba88bd90fff30b3f8452d199282e87'], 0x190), $('Zimu')['style']['cssText'] = 'font-size:\x2032px;line-height:60px;', setTimeout(function () {
                $('Zimu')['style']['cssText'] = '';
            }, 0xfa1), oMiniGames['LimitedTimeNoCool'](Mobile ? 0xfa0 : 0x1388), new MutationObserver(a => a['forEach'](b => b['addedNodes']['forEach'](c => {
                let d = c['id'], e = WIN[c['dataset']['jngConstructor']];
                if (!e)
                    return;
                let f = e['prototype']['EName'];
                if (d['includes']('P_0.') && $P[d]) {
                    if (/oDoomShroom|oBambooUncle|oCherryBomb/['test'](f)) {
                        if (!ArPCard[f])
                            return;
                        (function h() {
                            let i = NewEle('effect' + Math['random'](), 'div', 'pointer-events:none;position:absolute;z-index:257;width:1900px;height:600px;background:rgb(0,0,0);opacity:0;', 0x0, EDAll);
                            oEffects['Animate'](i, {
                                'background': 'rgb(200,0,0)',
                                'opacity': 0.05
                            }, 0.2, 'ease-out', j => {
                                oSym['addTask'](0x1, k => {
                                    oEffects['Animate'](i, { 'opacity': 0x0 }, 0.4, 'linear', ClearChild);
                                });
                            });
                        }());
                        if (/oDoomShroom/['test'](f) || oP['FlagZombies'] < 0x2 && /oBambooUncle|oCherryBomb/['test'](f)) {
                            var g;
                            let i = JSON['parse']((g = localStorage['JNG_TR_BoomPlants']) !== null && g !== void 0x0 ? g : '{}');
                            i[oS['Lvl']] = 0x1, localStorage['JNG_TR_BoomPlants'] = JSON['stringify'](i);
                        }
                        ++boomTimes;
                    }
                }
            })))['observe'](EDPZ, { 'childList': !![] });
        }
    }, {
        'AZ': [
            [
                oZomboni,
                0x1,
                0x7
            ],
            [
                oGargantuar,
                0x1,
                0x9,
                [0x1]
            ],
            [
                oBeetleCarZombie,
                0x1,
                0x5
            ],
            [
                oFootballZombie,
                0x1,
                0x6
            ],
            [
                oMembraneZombie,
                0x1,
                0x9
            ],
            [
                oCigarZombie,
                0x2,
                0x1
            ],
            [
                oStrollZombie,
                0x3,
                0x1
            ],
            [
                oPushIceImp,
                0x2,
                0x3
            ],
            [
                oCaskZombie,
                0x1,
                0x4
            ],
            [
                oNewspaperZombie,
                0x4,
                0x1
            ],
            [
                oSculptorZombie,
                0x2,
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
                0x4,
                0x5,
                0x6
            ],
            'a2': (function () {
                let a = [
                    0x3,
                    0x3,
                    0x5,
                    0x11,
                    0x1d,
                    0xc
                ];
                for (let b = 0x0; b < a['length']; b++) {
                    a[b] -= Math['round'](failedNum * 1.5), a[b] = Math['max'](a[b], 0x0);
                }
                return a;
            }())
        },
        'FlagToMonitor': {
            0x1: [a => {
                    for (let b = 0x0; b < 0xf - failedNum * 1.5; b++) {
                        oSym['addTask'](0x12c * b, c => {
                            PlaceZombie(oStrollZombie, b % 0x5 + 0x1, 0xb, 0x0), PlaceZombie(oNewspaperZombie, 0x5 - b % 0x5, 0xb, 0x0);
                        });
                    }
                }],
            0x2: [a => {
                    for (let b = 0x1; b < 0x6; b += 0x2) {
                        PlaceZombie(oZomboni, b, 0xb, 0x0), oSym['addTask'](0x96 * b, c => {
                            for (let d = 0x0; d < 0x3 - failedNum; d++) {
                                oSym['addTask'](0x64 * b * d, e => {
                                    PlaceZombie(oPushIceImp, b, 0xb, 0x0);
                                });
                            }
                        });
                    }
                    oSym['addTask'](0x190, function () {
                        for (let c = 0x1; c < 0x6; c++) {
                            failedNum < 0x3 && PlaceZombie(oSculptorZombie, c, 0xc, 0x0), c % 0x2 == 0x0 && PlaceZombie(oMembraneZombie, c, 0xb, 0x0);
                        }
                    });
                }],
            0x3: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        b % 0x2 == 0x0 ? PlaceZombie(oGargantuar, b, 0xb, 0x0) : PlaceZombie(oCigarZombie, b, 0xb, 0x0);
                    }
                    if (failedNum > 0x3)
                        for (let c = 0x1; c < 0x6; c++) {
                            PlaceZombie(oSculptorZombie, c, 0xc, 0x0), failedNum < 0x3 && c % 0x2 == 0x0 && PlaceZombie(oMembraneZombie, c, 0xb, 0x0);
                        }
                    for (let d = 0x1; d < 0x6; d += 0x2) {
                        PlaceZombie(oBeetleCarZombie, d, 0xb, 0x0), oSym['addTask'](0x12c * d, e => {
                            for (let f = 0x0; f < 0x2; f++) {
                                oSym['addTask'](0x12c * d * f, g => {
                                    PlaceZombie(oNewspaperZombie, d, 0xb, 0x0);
                                });
                            }
                        });
                    }
                }],
            0x5: [a => {
                    failedNum < 0x2 && PlaceZombie(oGargantuar, 0x3, 0xb, 0x0);
                    for (let b = 0x1; b < 0x6; b++) {
                        failedNum < 0x5 && PlaceZombie(oSculptorZombie, b, 0xc, 0x0), failedNum < 0x3 && b % 0x2 == 0x0 && PlaceZombie(oFootballZombie, b, 0xb, 0x0), b % 0x2 == 0x0 && b != 0x3 && PlaceZombie(oCigarZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x190, function () {
                        failedNum < 0x4 && PlaceZombie(oMembraneZombie, [
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]['random'](), 0xb, 0x0);
                        for (let c = 0x0; c < 0x2; c++) {
                            oSym['addTask'](0x32 * c, d => {
                                PlaceZombie(oStrollZombie, c % 0x5 + 0x1, 0xb, 0x0), PlaceZombie(oNewspaperZombie, 0x5 - c % 0x5, 0xb, 0x0);
                            });
                        }
                    });
                }]
        },
        'FlagToEnd'() {
            oS['DefaultFlagToEnd']();
            if (boomTimes == 0x0) {
                var a;
                let b = JSON['parse']((a = localStorage['JNG_TR_BoomPlants']) !== null && a !== void 0x0 ? a : '{}');
                delete b[oS['Lvl']], localStorage['JNG_TR_BoomPlants'] = JSON['stringify'](b), delete sessionStorage['TMP_FN'];
            }
        }
    });
}