/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let boomTimes = 0x0, noBeg = !![];
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
    let COPYZ = InheritO(oThiefZombie, {
        'EName': 'COPYZ',
        'HP': 0x0
    });
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
            oImp,
            oNewspaperZombie,
            oCaskZombie,
            oStrollZombie,
            oSkatingZombie,
            oMakeRifterZombie,
            oBeetleCarZombie,
            oGargantuar,
            oThiefZombie,
            oFootballZombie,
            COPYZ,
            oSculpture
        ],
        'LevelName': $__language_Array__['20f4f290b3574a1a5e4bfd0add7782ad'],
        'FixedProps': 'disabled',
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            for (let e = 0x1; e < 0x6; e++) {
                CustomSpecial(oZombieComeOnObs, e, 0x2);
                for (let f = 0x3; f < 0xa; f++) {
                    if (f % 0x3 == 0x0 && f != 0x9)
                        PlaceZombie(oSculpture, e, f);
                    else {
                        if ((Math['round'](Math['log'](e * f)) + e - f) % 0x3 == 0x0)
                            CustomSpecial(oRifter, e, f);
                        else
                            f == 0x9 && CustomSpecial(oRifter, e, f);
                    }
                }
            }
            let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function g() {
                c['onclick'] = g;
                switch (b) {
                case 0x0:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['9acc20ac4b8f752f8256b19c77038191']), b++;
                    break;
                case 0x1:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['590209b9084efab01dc6a572744f799b']), b++;
                    break;
                case 0x2:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['ea18d06179cbc2e88f1c093795d22aea']), b++;
                    break;
                case 0x3:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['412bdf10706135a58f9a8591be388f17']), b++;
                    break;
                case 0x4:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['836131eab9a002f453059e02386f38e0']), b++;
                    break;
                case 0x5:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['cc2b0a4e45eba8cca0c8513528508333']), b++;
                    break;
                case 0x6:
                    d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['746ca22095e8162a99f464b088824a09']), b++;
                    break;
                case 0x7:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['8144dae114f4af061d95d8ce54cc55c8']), b++;
                    break;
                case 0x8:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['ed11b66ea1c71f1a40cef2de0d927f0c']), b++;
                    break;
                case 0x9:
                    d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['7033e9b6ec58a56a2db9fb6f75d21de7']), b++;
                    break;
                case 0xa:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['934e10a68fe32d0165106c2e4b637e2c']), b++;
                    break;
                case 0xb:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['14bf2bc115443894f499498b460bb4ea']), b++;
                    break;
                case 0xc:
                    d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['d6b30ec5d29a596214187d6231cb94b4']), b++;
                    break;
                case 0xd:
                    ClearChild(c, d), oSym['addTask'](0xa, a);
                }
            }());
        },
        'HaveFog': {
            'leftBorder': 0x5,
            'type': 'strongFog'
        },
        'SunNum': 0x96,
        'StartGame'() {
            oMiniGames['GrowWithoutSun'](), oMiniGames['WinWithScore']({
                'scoreMax': 0x3a98,
                'useZombieExtraScore': !![],
                'specialZombiesList': {
                    '500': ['oGargantuar'],
                    '140': [
                        'oZomboni',
                        'oBeetleCarZombie'
                    ],
                    '80': [
                        'oSculptorZombie',
                        'oFootballZombie',
                        'oBucketheadZombie',
                        'oSculpture'
                    ],
                    '60': ['oCaskZombie']
                },
                'specialPlantsList': { '5000': ['oLawnCleaner'] }
            }), addEventListenerRecord('jng-event-startgame', function a() {
                new MutationObserver(b => b['forEach'](c => c['addedNodes']['forEach'](d => {
                    let e = d['id'], f = WIN[d['dataset']['jngConstructor']];
                    if (!f)
                        return;
                    let g = f['prototype']['EName'];
                    e['includes']('P_0.') && /oBegonia/['test'](g) && (noBeg = ![]);
                    if (e['includes']('P_0.') && $P[e]) {
                        if (/oDoomShroom|oBambooUncle|oCherryBomb/['test'](g)) {
                            var h;
                            if (!ArPCard[g])
                                return;
                            (function j() {
                                let k = NewEle('effect' + Math['random'](), 'div', 'pointer-events:none;position:absolute;z-index:257;width:1900px;height:600px;background:rgb(0,0,0);opacity:0;', 0x0, EDAll);
                                oEffects['Animate'](k, {
                                    'background': 'rgb(200,0,0)',
                                    'opacity': 0.05
                                }, 0.2, 'ease-out', l => {
                                    oSym['addTask'](0x1, m => {
                                        oEffects['Animate'](k, { 'opacity': 0x0 }, 0.4, 'linear', ClearChild);
                                    });
                                });
                            }());
                            let i = JSON['parse']((h = localStorage['JNG_TR_BoomPlants']) !== null && h !== void 0x0 ? h : '{}');
                            i[oS['Lvl']] = 0x1, localStorage['JNG_TR_BoomPlants'] = JSON['stringify'](i), ++boomTimes;
                        }
                    }
                })))['observe'](EDPZ, { 'childList': !![] });
            });
        }
    }, {
        'AZ': [
            [
                oFootballZombie,
                0x1,
                0x4
            ],
            [
                oImp,
                0x1,
                0x1
            ],
            [
                oNewspaperZombie,
                0x1,
                0x1
            ],
            [
                oCaskZombie,
                0x1,
                0x2
            ],
            [
                oStrollZombie,
                0x1,
                0x1
            ],
            [
                oSkatingZombie,
                0x1,
                0x3
            ],
            [
                oMakeRifterZombie,
                0x1,
                0x3
            ],
            [
                oBeetleCarZombie,
                0x1,
                0x5
            ],
            [
                oGargantuar,
                0x1,
                0x270f
            ],
            [
                oThiefZombie,
                0x1,
                0xe
            ]
        ],
        'FlagNum': 0x3e7,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x4,
                0x5,
                0x7,
                0x9,
                0xb,
                0xc,
                0xd,
                0x11,
                0x18,
                0x20,
                0x28,
                0x3c,
                0x7d,
                0x3e7
            ],
            'a2': [
                0x1,
                0x3,
                0x6,
                0x7,
                0x9,
                0xa,
                0xb,
                0xe,
                0x18,
                0x22,
                0x30,
                0x45,
                0x49,
                0x12c,
                0x3e7,
                0x416,
                0xbb8
            ]
        },
        'FlagToMonitor': (a => {
            let b = {};
            function c(e) {
                return (Math['sqrt'](e / 0x5) + (e / 0x46) ** 0x2) / 1.3;
            }
            function d(e) {
                for (let f = 0x1; f <= e; f++) {
                    oSym['addTask'](Math['random']() * 0x76c, g => {
                        PlaceZombie(oGargantuar, [
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]['random'](), 0xc, 0x0);
                    });
                }
            }
            for (let e = 0x9; e < 0x3e7; e++) {
                let f = c(e);
                (Math['round'](f) != Math['floor'](f) && e % 0x2 == 0x0 || e % 0x3 == 0x0) && (b[e] = [g => {
                        d(Math['round'](f));
                    }]);
            }
            return b;
        })(),
        'FlagToEnd'() {
            if (noBeg) {
                let b = function (c, d, e = $__language_Array__['e7ac5cbd946a6986cb699249ac190ad1']) {
                    PlaySubtitle('' + $__language_Array__['dd23d9d1475d4011e596fa1893b52cbe'][0x0] + e + $__language_Array__['dd23d9d1475d4011e596fa1893b52cbe'][0x1] + c), oSym['addTask'](0x1f4, function () {
                        PlaySubtitle();
                    }), DataManager['SetAchievement'](d, 0x1);
                };
                b($__language_Array__['a74bcd48f2889938256b0f54806bfd08'], 'The_No_Begonia_1');
            }
            oS['DefaultFlagToEnd']();
            if (boomTimes == 0x0) {
                var a;
                let c = JSON['parse']((a = localStorage['JNG_TR_BoomPlants']) !== null && a !== void 0x0 ? a : '{}');
                delete c[oS['Lvl']], localStorage['JNG_TR_BoomPlants'] = JSON['stringify'](c);
            }
        }
    });
}