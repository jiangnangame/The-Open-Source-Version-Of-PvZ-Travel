/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let Zombies1 = function (a) {
            PlaceZombie(oImp, a, 0xb, 0x0), oSym['addTask'](0x5dc, function () {
                PlaceZombie(oStrollZombie, a, 0xb, 0x0);
            }), oSym['addTask'](0x4b0, function () {
                PlaceZombie(oBucketheadZombie, a, 0xb, 0x0);
            });
        }, Zombies2 = function (a = Math['floor'](Math['random']() * 0x5) + 0x1, b = 0x0) {
            let c = [
                    oSkatingZombie,
                    oZombie,
                    oBalloonZombie,
                    oBucketheadZombie,
                    oFootballZombie,
                    oZomboni
                ], d = c['length'], e = PlaceZombie(c[b], a, 0xb, 0x0);
            oSym['addTask'](0x28a, function () {
                $Z[e['id']] && Zombies2(a % 0x5 + 0x1, b == d - 0x1 ? 0x0 : b + 0x1);
            });
        }, oCantShovelPotato = InheritO(oPotatoMine, {
            'EName': 'oCantShovelPotato',
            'HP': 0x2,
            'Die': function (a) {
                const b = new Set(['JNG_TICKET_ShovelPlant']);
                !b['has'](a) ? CPlants['prototype']['Die']['call'](this) : SetAlpha($(this['id'])['childNodes'][0x1], 0x1);
            }
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
            oMonotropa
        ],
        'ZName': [
            oBucketheadZombie,
            oFootballZombie,
            oStrollZombie,
            oImp,
            oPushIceImp,
            oZombie,
            oSkatingZombie,
            oBalloonZombie,
            oZomboni,
            oSadakoZombie
        ],
        'PicArr': ['images/interface/Polar2.webp'],
        'LevelName': $__language_Array__['c73ad39bdba28c48d3b33fa76f796c57'],
        'LoadMusic': 'Bgm_Polar_Fight_JX_3',
        'StartGameMusic': 'Bgm_Polar_Fight_JX_3',
        'DKind': 0x0,
        'FixedProps': { 'LSP': { 'num': Infinity } },
        'LoadAccess': function (b) {
            PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll), !oS['DKind'] && (NewEle('PolarFire2', 'div', null, 0x0, $('tGround')), NewEle('PolarFire', 'div', null, 0x0, $('tGround')));
            let c = NewEle('BGBOX_WIN', 'div', 'width:1400px;height:600px;z-index:199;', 0x0, $('dAll'));
            c['classList']['add']('BgMask-PolarJX'), NewImg('imgKK', 'images/interface/PolarJxStar.webp', 'left:0;top:0;' + (!$User['LowPerformanceMode'] ? 'animation:rotate2\x20130s\x20linear\x20infinite;' : ''), c), NewEle(0x0, 'div', 'left:570px;', { 'className': 'Mould' }, $('tGround')), NewEle(0x0, 'div', 'left:490px;', { 'className': 'Mould' }, $('tGround')), NewEle(0x0, 'div', 'left:410px;', { 'className': 'Mould' }, $('tGround')), NewEle(0x0, 'div', 'left:\x20620px;top:\x2080px;', { 'className': 'sos' }, FightingScene), NewEle(0x0, 'div', 'left:\x20620px;top:\x20280px;', { 'className': 'sos' }, FightingScene), NewEle(0x0, 'div', 'left:\x20620px;top:\x20480px;', { 'className': 'sos' }, FightingScene);
            for (let d = 0x1, e = 0x6; d < e; d++) {
                for (let f = 0x3; f <= 0x5; f++)
                    CustomSpecial(oObstacle, d, f);
            }
            for (let g = 0x6; g < 0xa; g++) {
                for (let h = 0x1; h < 0x6; h++) {
                    h % 0x2 && g == 0x7 ? CustomSpecial(oCantShovelPotato, h, g) : CustomSpecial(oRifter, h, g);
                }
            }
            oSym['addTask'](0x5a, b);
        },
        'StartGame': function () {
            (function a(b) {
                let d = {}, e = new Set();
                NewMusic(oS['LoadMusic'] = oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                    'fullValue': oP['FlagNum'] - 0x1,
                    'curValue': 0x0
                });
                for (let f in $P) {
                    let g = $P[f];
                    b['hasOwnProperty'](g['EName']) && e['add'](g['R'] + '_' + g['C']);
                }
                PrepareGrowPlants(function () {
                    oP['Monitor'](oS['Monitor']), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), function h() {
                        for (let j in b)
                            d[j] = 0x0;
                        for (let k of $P)
                            d['hasOwnProperty'](k['EName']) && e['has'](k['R'] + '_' + k['C']) && ++d[k['EName']];
                        for (let l in b) {
                            if (b[l] !== d[l]) {
                                toOver(0x2);
                                return;
                            }
                        }
                        oSym['addTask'](0xc8, h);
                    }(), oSym['addTask'](0x9c4, i => {
                        oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
                    });
                });
            }({ 'oCantShovelPotato': 0x3 }), oSym['addTask'](0x9c4, function () {
                PlaceZombie(oZombie, [
                    0x1,
                    0x3,
                    0x5
                ]['random'](), 0xb, 0x0);
            }), oSym['addTask'](0x1f40, function b() {
                let d = hasPlants(!![], e => {
                    return e['EName'] != 'oRifter' && e['EName'] != 'oCantShovelPotato';
                });
                d['length'] > 0x10 && PlaceZombie(oZomboni, 0x3, 0xb, 0x0), oSym['addTask'](0x960, b);
            }));
        }
    }, {
        'AZ': [
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
                oZomboni,
                0x1,
                0x1
            ],
            [
                oBucketheadZombie,
                0x3,
                0x2
            ],
            [
                oFootballZombie,
                0x2,
                0x8
            ],
            [
                oStrollZombie,
                0x1,
                0x8
            ],
            [
                oPushIceImp,
                0x2,
                0x1
            ],
            [
                oZombie,
                0x1,
                0x1
            ],
            [
                oSkatingZombie,
                0x2,
                0x1
            ],
            [
                oBalloonZombie,
                0x1,
                0x1
            ]
        ],
        'FlagNum': 0x8,
        'FlagToSumNum': {
            'a1': [0x1],
            'a2': [
                0x0,
                0x0
            ]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    for (let b = 0x1; b <= 0x5; b++) {
                        if (b % 0x2 == 0x0)
                            PlaceZombie(oSkatingZombie, b, 0xb, 0x0);
                        else
                            PlaceZombie(oBalloonZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x3e8, function () {
                        for (let c = 0x1; c <= 0x5; c += 0x2) {
                            PlaceZombie(oStrollZombie, c, 0xb, 0x0);
                        }
                    });
                }],
            0x2: [a => {
                    let b = [];
                    for (let c = 0x2; c <= 0x5; c += 0x2) {
                        b['push'](PlaceZombie(oBucketheadZombie, c, 0xb, 0x0));
                    }
                    for (let d = 0x1; d <= 0x5; d += 0x2) {
                        Zombies1(d);
                    }
                    oSym['addTask'](0x3e8, function () {
                        for (let e = 0x0; e < b['length']; e++) {
                            $Z[b[e]['id']] && PlaceZombie(oZomboni, b[e]['R'], 0xb, 0x0);
                        }
                    });
                }],
            0x3: [a => {
                    for (let b = 0x2; b <= 0x5; b += 0x2) {
                        Zombies2(b);
                    }
                    oSym['addTask'](0x320, function () {
                        for (let c = 0x1; c <= 0x5; c++) {
                            PlaceZombie(oPushIceImp, c, 0xb, 0x0);
                        }
                    }), oSym['addTask'](0x4b0, function () {
                        for (let c = 0x2; c < 0x5; c += 0x2) {
                            Zombies2(c);
                        }
                    });
                }],
            0x4: [a => {
                    for (let b = 0x1; b <= 0x5; b++) {
                        PlaceZombie(oBalloonZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0xc8, function () {
                        for (let c = 0x2; c < 0x5; c++) {
                            PlaceZombie(oFootballZombie, c, 0xb, 0x0), Zombies2(c);
                        }
                    });
                    for (let c = 0x2; c < 0x5; c += 0x2) {
                        for (let d = 0x1; d <= 0x3; d++)
                            oSym['addTask']((d + 0x1) * 0x384, function () {
                                Zombies2(c);
                            });
                    }
                    oSym['addTask'](0x3e8, function () {
                        for (let e = 0x1; e <= 0x5; e++) {
                            e % 0x2 ? PlaceZombie(oZombie, e, 0xb, 0x0) : PlaceZombie(oSadakoZombie, e, 0xb, 0x0);
                        }
                    });
                }],
            0x5: [a => {
                    let b = [];
                    for (let c = 0x1; c <= 0x5; c++) {
                        b['push'](PlaceZombie(oImp, c, 0xb, 0x0));
                    }
                    oSym['addTask'](0x29e, function () {
                        for (let d = 0x0; d < b['length']; d++) {
                            $Z[b[d]['id']] && PlaceZombie(oStrollZombie, b[d]['R'], 0xb, 0x0);
                        }
                    }), Zombies2(0x1), Zombies2(0x5);
                }],
            0x6: [a => {
                    for (let b = 0x2; b <= 0x5; b += 0x2) {
                        PlaceZombie(oFootballZombie, b, 0xb, 0x0);
                    }
                    oSym['addTask'](0x12c, function () {
                        for (let c = 0x1; c <= 0x5; c++) {
                            PlaceZombie(oBalloonZombie, c, 0xb, 0x0);
                        }
                    }), oSym['addTask'](0x3b6, function () {
                        for (let c = 0x2; c < 0x5; c += 0x2) {
                            PlaceZombie(oZomboni, c, 0xb, 0x0), Zombies2();
                        }
                    });
                }],
            0x7: [a => {
                    let b = [];
                    for (let c = 0x1; c <= 0x5; c++) {
                        b['push'](PlaceZombie(oZombie, c, 0xb, 0x0));
                    }
                    oSym['addTask'](0x190, function () {
                        PlaceZombie(oImp, 0x3, 0xb, 0x0);
                    }), oSym['addTask'](0x384, function () {
                        for (let d = 0x1; d <= 0x5; d++) {
                            $Z[b[d - 0x1]['id']] && Zombies2(d);
                        }
                    });
                }]
        }
    });
}