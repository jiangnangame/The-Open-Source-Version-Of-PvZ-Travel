/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let numRif = -0x2, rowRight = 0x7;
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
            oJalapeno,
            oLSP
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
        'LevelName': $__language_Array__['b3c1e8490c08ef02db3b002ea2fd94ac'],
        'DKind': 0x0,
        'backgroundImage': 'images/interface/Polar2.webp',
        'LoadMusic': 'Bgm_PolarJx_Lunatic',
        'InitLawnMover': a => {
        },
        'LoadAccess'(a) {
            PlayAudio('Bgm_Polar_Noise', 0x1), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll);
            let b = NewEle('BGBOX_WIN', 'div', 'width:1400px;height:600px;z-index:199;', 0x0, $('dAll'));
            b['classList']['add']('BgMask-PolarJX'), NewImg('imgKxK', 'images/interface/PolarJxStar.webp', 'left:0;top:0;animation:rotate2\x20130s\x20linear\x20infinite;', b), oSym['addTask'](0x5a, a), oS['Lvl'] = 'Polar29jx';
        },
        'StartGame': a => {
            let b = ![], c = new MutationObserver(function (d) {
                    d['forEach'](function (e) {
                        for (let f = 0x0; f < e['addedNodes']['length']; f++) {
                            if (oP['NumZombies'] != $Z['length'])
                                break;
                        }
                    });
                });
            c['observe'](EDPZ, { 'childList': !![] });
            for (let d = 0x0; d < numRif; d++) {
                for (let e = 0x1; e <= 0x5; e++) {
                    for (let f = rowRight; f < 0xa; f++) {
                        e % rowRight == f % rowRight && (!oGd['$'][e + '_' + f + '_1'] || oGd['$'][e + '_' + f + '_1']['EName'] != 'oRifter') && CustomSpecial(oRifterAnimate, e, f);
                    }
                }
                if (rowRight-- == 0x1)
                    break;
            }
            SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(g => {
                oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), oSym['addTask'](0x320, h => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show']();
                }), oSym['addTask'](0x320, h => {
                    for (let k = 0x1; k < 0x6; k++) {
                        PlaceZombie(oBucketheadZombie, k, 0xb, 0x0);
                    }
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
                0x6
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
                0x6
            ],
            [
                oPushIceImp,
                0x1,
                0x1
            ],
            [
                oMembraneZombie,
                0x3,
                0x1
            ],
            [
                oZomboni,
                0x1,
                0x2
            ]
        ],
        'FlagNum': 0x6,
        'FlagToSumNum': {
            'a1': [0x6],
            'a2': [0x1]
        },
        'FlagToMonitor': {
            0x1: [a => {
                    oP['FlagZombies'] = 0x3;
                }],
            0x4: [a => {
                    for (let b = 0x1; b < 0x6; b += 0x2) {
                        oSym['addTask'](0x258 * b, function () {
                            PlaceZombie(oZomboni, b, 0xc, 0x0);
                        });
                    }
                }],
            0x5: [a => {
                    oSym['addTask'](0x25d, function b(c = 0x0) {
                        for (let d = 0x1; d < 0x6; d++) {
                            PlaceZombie(oZomboni, d, 0xc, 0x0);
                        }
                        c < 0x3 && oSym['addTask'](0x33e, b, [c + 0x1]);
                    });
                }]
        },
        'FlagToEnd': function () {
            NewImg('imgSF', 'images/interface/Clearance_reward.png', 'left:535px;top:200px;', EDAll, { 'onclick': a => oS['Lvl']['indexOf']('jx') < 0x0 ? GetNewProp(a['target'], 'Clearance_reward', $__language_Array__['ef34e5d70832ecab349fa0aa033b4cbc'], $__language_Array__['099127326b49965cae3b04e3460e4efc'], NextLevel(), '30%', '43%') : GetWin(a['target'], Exitlevel(oS['Lvl'], 0x1)) });
        }
    });
}