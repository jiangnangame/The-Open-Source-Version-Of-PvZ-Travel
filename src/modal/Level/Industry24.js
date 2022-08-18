/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    typeof option__isCheatEngineStart !== 'undefined' && (localStorage['JNG_TR_CHEATINDUSTRYPART3__'] = !![]);
    let failedNum = localStorage['JNG_TR_TMP_FN_INDUSTRY24'] ? localStorage['JNG_TR_TMP_FN_INDUSTRY24'] : -0x1;
    localStorage['JNG_TR_TMP_FN_INDUSTRY24'] = failedNum = Number['parseInt'](failedNum) + 0x1, failedNum = Math['min'](failedNum, 0x9), oS['Init']({
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
            oMacintosh,
            oCranberry,
            oMelonPult
        ],
        'ZName': [
            oImp,
            oSculpture,
            oZomboni,
            oGargantuar,
            oBeetleCarZombie,
            oFootballZombie,
            oCigarZombie,
            oStrollZombie,
            oPushIceImp,
            oCaskZombie,
            oNewspaperZombie,
            oSculptorZombie
        ],
        'LevelName': $__language_Array__['eafb4bc3bb44a08aecacda60e2c530ed'],
        'DKind': 0x0,
        'SunNum': 0xfa0,
        'DynamicDifficulty': ![],
        'AllowUserCard': ![],
        'PicArr': ['images/Card/ElecTurnip.webp'],
        'StartGameMusic': 'Bgm_Industry_Fight_Challenge_4',
        'FixedProps': 'disabled',
        'LockedCards': (function () {
            let a = [
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
                    ],
                    [
                        oCherryBomb,
                        0x0
                    ],
                    [
                        oBambooUncle,
                        0x0
                    ],
                    [
                        oDoomShroom,
                        0x0
                    ]
                ], b = [
                    oPeashooter,
                    oWallNut,
                    oPotatoMine,
                    oStoneFlower,
                    oRadish,
                    oSnowPea,
                    oRepeater,
                    oTallNut,
                    oPuffShroom,
                    oScaredyShroom,
                    oFumeShroom,
                    oSporeShroom,
                    oBegonia,
                    oPepper,
                    oIceAloe,
                    oImitater,
                    oSpikeweed,
                    oTorchwood,
                    oKiwibeast,
                    oPlantern,
                    oCabbage,
                    oBlover,
                    oShiitake,
                    oKernelPult,
                    oXshooter,
                    oMacintosh,
                    oCranberry,
                    oMelonPult
                ];
            return b['forEach']((c, d) => {
                b[d] = [
                    c,
                    0x2
                ];
            }), a['concat'](b);
        }()),
        'LoadAccess'(a) {
            NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
            let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:256;width:1400px;height:600px;background:#000;opacity:1;', 0x0, EDAll), c = !![];
            PlayAudio('rain', !![]), oAudio['rain']['volume'] = 0.5, oSym['addTask'](0x1, function h() {
                oAudio['rain']['currentTime'] > oAudio['rain']['duration'] - 0.4 && (oAudio['rain']['currentTime'] = 0x0), c && oSym['addTask'](0x1, h);
            });
            let d = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), e = 0x0, f = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), g = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function k() {
                f['onclick'] = k;
                switch (e) {
                case 0x0:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(f, $__language_Array__['cca051dc57c895351a1c8b0d34362b40']), e++;
                    break;
                case 0x1:
                    f['onclick'] = null, oEffects['fadeIn'](d, 'slow', () => f['onclick'] = k), g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(f, $__language_Array__['1cf3ba37015c6f94eb60733f1acef98e']), e++;
                    break;
                case 0x2:
                    g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(f, $__language_Array__['f16710b91a6d7d10b05c3318a517b111']), e++;
                    break;
                case 0x3:
                    PlayAudio('Zomboss2'), innerText(f, $__language_Array__['ffbea13b79585b218c4ea659c811b84a']), e++;
                    break;
                case 0x4:
                    PlayAudio('Zomboss1'), innerText(f, $__language_Array__['63841aea841068393c1631742af09722']), e++;
                    break;
                case 0x5:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(f, $__language_Array__['5806056c02f1fe1a4f872ac8faadf513']), e++;
                    break;
                case 0x6:
                    g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(f, $__language_Array__['d17d3dd7b89c52a1b73635a5a70aabd6']), e++;
                    break;
                case 0x7:
                    PlayAudio('Zomboss1'), innerText(f, $__language_Array__['0f0338c24cb260c1615b62848b2b02db']), e++;
                    break;
                case 0x8:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(f, $__language_Array__['02908cf213e19786ee3a8b5c79aaa39c']), e++;
                    break;
                case 0x9:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(f, $__language_Array__['272f2d20c95f63091086dca4b20f6ce2']), e++;
                    break;
                case 0xa:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(f, $__language_Array__['200d8a50253b13898747d98dd368f673']), e++;
                    break;
                case 0xb:
                    f['onclick'] = null, oEffects['fadeOut'](d, 'slow', () => f['onclick'] = k), g['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(f, $__language_Array__['d81195782e76b39c0fc48654a52ff1cc']), e++;
                    break;
                case 0xc:
                    f['onclick'] = null, ClearChild(f, g, d), jngAlert['open']({
                        'text': $__language_Array__['f4d4a8011ca91b175cb658e3b2a3d549'],
                        'type': 0x0,
                        'shade': 0x1,
                        'nextHandler': m => {
                            oEffects['fadeOut'](b, 0x1, ClearChild), c = ![], oSym['addTask'](0xa, a), oMiniGames['DarkRain'](0x5, 0x4, 0x4);
                        }
                    });
                }
            }());
            for (let m = 0x6; m < 0x9; m++) {
                oSym['addTask']((m - 0x2) * 0x5, function () {
                    for (let n = 0x1; n < 0x6; n++) {
                        PlaceZombie(oSculpture, n, m - 0x5 + Math['abs'](n - 0x3));
                    }
                });
                if (m >= 0x7)
                    for (let n = 0x1; n < 0x6; n++) {
                        PlaceZombie(oSculpture, n, m - 0x3 + Math['abs'](n - 0x3) * 0x2);
                    }
            }
        },
        'StartGame': function () {
            oMiniGames['LimitedTimeNoCool'](Mobile ? 0x2bc : 0x3e8, null, function (b) {
                return b > 0.2 ? 0x1 - (0x1 - b) / 2.7 : (0x1 - 0.8 / 2.7) / 0.2 * b;
            });
            if (hasPlants()['length'] >= 0x6)
                for (let a in oP['FlagToSumNum']['a2']) {
                    oP['FlagToSumNum']['a2'][a] *= 0x2;
                }
            if (ArCard['length'] > 0x4)
                for (let b in oP['FlagToSumNum']['a2']) {
                    oP['FlagToSumNum']['a2'][b] = Math['floor'](oP['FlagToSumNum']['a2'][b] * 1.7 * (ArCard['length'] - 0x4));
                }
            for (let c = 0x1; c <= oP['FlagNum']; c++) {
                oP['SpecialJudgment']['delays'][c] = 0x1e + failedNum * 0x14;
            }
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
                0xe,
                [
                    0xd,
                    0xe
                ]
            ],
            [
                oBeetleCarZombie,
                0x2,
                0x5
            ],
            [
                oFootballZombie,
                0x2,
                0x6
            ],
            [
                oCigarZombie,
                0x1,
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
                0x3,
                0x4
            ],
            [
                oNewspaperZombie,
                0x4,
                0x1
            ],
            [
                oSculptorZombie,
                0x3,
                0x2,
                [0x2]
            ]
        ],
        'FlagNum': 0xe,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x2,
                0x4,
                0x8,
                0xa,
                0xc,
                0xf
            ],
            'a2': (function () {
                let a = [
                    0x1,
                    0x3,
                    0x5,
                    0x11,
                    0x1d,
                    0xf,
                    0x24
                ];
                for (let b = 0x0; b < a['length']; b++) {
                    a[b] += Math['round'](a[b] * (0x4 - failedNum < 0x5 ? 0x0 : failedNum - 0x4) / 0x5), a[b] = Math['max'](a[b], 0x0);
                }
                return a;
            }())
        },
        'FlagToMonitor': {
            0x1: [a => {
                    for (let b = 0x1; b < 0x6; b++) {
                        !oGd['$LockingGrid'][b + '_11'] && PlaceZombie(oSculpture, b, 0xb, 0x0), !oGd['$LockingGrid'][b + '_12'] && PlaceZombie(oSculpture, b, 0xc, 0x0);
                    }
                }],
            0x2: [a => {
                    PlaceZombie(oSculptorZombie, 0x2, 0xc, 0x0), PlaceZombie(oSculptorZombie, 0x4, 0xc, 0x0);
                }]
        },
        'FlagToEnd': function () {
            ShowWinItem(GetPlantCardDom(oMelonPult, EDAll, null, {
                'onclick'(a) {
                    var b;
                    GetNewCard(this, oElecTurnip, NextLevel());
                    let c = JSON['parse']((b = localStorage['JNG_TR_OPTIONS_INDUSTRYPART3']) !== null && b !== void 0x0 ? b : '{}');
                    c['fail24'] = Number(localStorage['JNG_TR_TMP_FN_INDUSTRY24']), localStorage['JNG_TR_OPTIONS_INDUSTRYPART3'] = JSON['stringify'](c), delete localStorage['JNG_TR_TMP_FN_INDUSTRY24'];
                }
            }));
        }
    });
}