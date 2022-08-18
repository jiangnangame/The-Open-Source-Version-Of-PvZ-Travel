/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    let saveSun = -0x1;
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
            oJalapeno
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
            oMembraneZombie
        ],
        'LevelName': $__language_Array__['f00be1d5b7687fe8a4e63dfa1151fb6c'],
        'FixedProps': { 'LSP': { 'num': Infinity } },
        'DKind': 0x0,
        'backgroundImage': 'images/interface/Polar2.webp',
        'StartGameMusic': 'Bgm_PolarJx_Lunatic',
        'InitLawnMover': a => {
        },
        'LoadAccess'(a) {
            sessionStorage['JNG_TR_USER_POLARDATA'] = '', PlayAudio('Bgm_Polar_Noise', 0x1), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll);
            let b = NewEle('BGBOX_WIN', 'div', 'width:1400px;height:600px;z-index:199;', 0x0, $('dAll'));
            b['classList']['add']('BgMask-PolarJX'), NewImg('imgKxK', 'images/interface/PolarJxStar.webp', 'left:0;top:0;animation:rotate2\x20130s\x20linear\x20infinite;', b), oSym['addTask'](0x1e, a);
        },
        'StartGame': a => {
            loadRes({ 'img': oZomboni['prototype']['PicArr'] }), StopMusic(), PlayMusic(oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), oS['InitLawnMover'](), oS['ControlFlagmeter'] && oFlagContent['init']({
                'fullValue': oP['FlagNum'] - 0x1,
                'curValue': 0x0
            }), PrepareGrowPlants(b => {
                oP['Monitor'](), BeginCool(), oS['DKind'] && AutoProduceSun(0x32), PlaySubtitle($__language_Array__['d4239a1f27d32953350691a141b61ce9']), oSym['addTask'](0x2bc, c => {
                    oP['AddZombiesFlag'](), oS['ControlFlagmeter'] && oFlagContent['show'](), PlaySubtitle();
                });
            });
        }
    }, {
        'AZ': [
            [
                oZombie,
                0x1,
                0x1,
                [0x1]
            ],
            [
                oBucketheadZombie,
                0x2,
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
                0x1
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
                0x1
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
            ]
        ],
        'FlagNum': 0x6,
        'FlagToSumNum': {
            'a1': [
                0x1,
                0x3,
                0x5,
                0x6
            ],
            'a2': [
                0x1,
                0x7,
                0xd,
                0x32
            ]
        },
        'FlagToMonitor': {
            0x5: [a => {
                    oSym['addTask'](0x1388, function b() {
                        saveSun = oS['SunNum'];
                    });
                }]
        },
        'FlagToEnd': function () {
            let a = hasPlants(![], c => {
                    return c['EName'] != 'olSPCase' && c['C'] > 0x0 && c['C'] < 0xa;
                }), b = {
                    'sun': saveSun == -0x1 ? oS['SunNum'] : Math['min'](saveSun, oS['SunNum']),
                    'plants': []
                };
            for (let c = 0x0; c < a['length']; c++) {
                b['plants']['push']({
                    'type': a[c]['EName'],
                    'deltaHP': a[c]['__proto__']['HP'] - a[c]['HP'],
                    'R': a[c]['R'],
                    'PKind': a[c]['PKind'],
                    'C': a[c]['C']
                });
            }
            sessionStorage['JNG_TR_USER_POLARDATA'] = JSON['stringify'](b), PlaySubtitle($__language_Array__['d43d08303067035a9449c1ba462a0959']), SetHidden($('dMenu')), setTimeout(d => {
                SelectModal('Polar29jx_Imagine');
            }, 0x1388);
        }
    });
}