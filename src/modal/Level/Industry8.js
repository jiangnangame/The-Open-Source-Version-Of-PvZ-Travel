/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oRepeater,
        oCabbage,
        oTorchwood,
        oRadish,
        oIceAloe,
        oPlantern,
        oSpikeweed,
        oKiwibeast,
        oScaredyShroom,
        oBlover
    ],
    'ZName': [
        oZombie,
        oConeheadZombie,
        oImp,
        oSkatingZombie,
        oNewspaperZombie,
        oStrollZombie,
        oCaskZombie,
        oBucketheadZombie,
        oCigarZombie,
        oFootballZombie,
        oZomboni,
        oSculptorZombie,
        oBeetleCarZombie,
        oSculpture
    ],
    'LevelName': $__language_Array__['3654eb260d9090b87e45d472630dc590'],
    'StartGameMusic': 'Bgm_Industry_Fight_Challenge_1',
    'CanSelectCard': 0x0,
    'StaticCard': 0x0,
    'ControlFlagmeter': 0x0,
    'HaveFog': {
        'type': 'strongFog',
        'leftBorder': 0x4
    },
    'FixedProps': 'disabled',
    'LoadAccess'(a) {
        NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
        for (let f = 0x1; f < 0x6; f++) {
            CustomSpecial(oRifter, f, 0x9), PlaceZombie(oSculpture, f, 0x8), PlaceZombie(oSculpture, f, 0x7);
        }
        let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll), e = NewEle('effect', 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll);
        (function g() {
            c['onclick'] = g;
            switch (b) {
            case 0x0:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['503e1b0b430581a55458f445d367b73e']), b++;
                break;
            case 0x1:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['2ec55dcc01e18afbe26ffa13aced78b3']), b++;
                break;
            case 0x2:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['8752ed2c9f014481e07f202134e44129']), b++;
                break;
            case 0x3:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['eae675aac39bd16d52c0b0a4905351ce']), b++;
                break;
            case 0x4:
                c['onclick'] = null, d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['8597886d68870f91fc35590deb9c1751']), b++, oEffects['Animate'](e, 'NPCFade', 'fast', 'linear', () => c['onclick'] = g, 0x0, 0x4);
                break;
            case 0x5:
                c['onclick'] = null, d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['a13550b45d5f2e0b2f21929e93d61159']), b++, oEffects['fadeIn'](e, 'slow', () => c['onclick'] = g);
                break;
            case 0x6:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(c, $__language_Array__['76d2fad7a84bf78b0ae4ce9591753bdc']), b++;
                break;
            case 0x7:
                ClearChild(c, d), oEffects['fadeOut'](e, 'slow', h => {
                    ClearChild(h), a();
                });
            }
        }());
    },
    'StartGame'() {
        oMiniGames['WinWithScore']({
            'scoreMax': 0x32c8,
            'specialZombiesList': {
                '100': [
                    'oZomboni',
                    'oBeetleCarZombie',
                    'oSculpture'
                ],
                '90': [
                    'oSculptorZombie',
                    'oFootballZombie',
                    'oBucketheadZombie'
                ],
                '60': [
                    'oSkatingZombie',
                    'oCigarZombie',
                    'oCaskZombie'
                ]
            }
        }), oMiniGames['RainWithSeeds'](void 0x0, 0x190, 0x4, [
            oBlover,
            oIceAloe,
            oRepeater
        ]);
    }
}, {
    'AZ': [
        [
            oZombie,
            0x1,
            0x1
        ],
        [
            oConeheadZombie,
            0x1,
            0x1,
            [
                0x1,
                0x6
            ]
        ],
        [
            oImp,
            0x1,
            0x6
        ],
        [
            oSkatingZombie,
            0x1,
            0x1
        ],
        [
            oNewspaperZombie,
            0x1,
            0x6
        ],
        [
            oStrollZombie,
            0x1,
            0x6
        ],
        [
            oCaskZombie,
            0x1,
            0xb,
            [
                0xb,
                0x10
            ]
        ],
        [
            oBucketheadZombie,
            0x1,
            0x6,
            [
                0x6,
                0xb
            ]
        ],
        [
            oCigarZombie,
            0x1,
            0x1,
            [
                0x1,
                0x6,
                0xb
            ]
        ],
        [
            oFootballZombie,
            0x1,
            0x10
        ],
        [
            oZomboni,
            0x2,
            0xb,
            [
                0xb,
                0x10
            ]
        ],
        [
            oSculptorZombie,
            0x2,
            0x1,
            [
                0x1,
                0xb,
                0x10,
                0x14
            ]
        ],
        [
            oBeetleCarZombie,
            0x1,
            0x10,
            [
                0x10,
                0x11,
                0x12,
                0x13,
                0x14
            ]
        ]
    ],
    'FlagNum': 0x29a,
    'FlagToSumNum': {
        'a1': [
            0x2,
            0x5,
            0x7,
            0x9,
            0xc,
            0xf,
            0x13,
            0x14,
            0x19
        ],
        'a2': [
            0x2,
            0x8,
            0x11,
            0x17,
            0x1c,
            0x23,
            0x26,
            0x46,
            0x4b,
            0xc8
        ]
    },
    'FlagToEnd'() {
        ArCard['forEach'](a => oEffects['Animate'](a['Ele'], { 'transform': 'scale(0)' }, 0.2, 'linear')), setTimeout(() => {
            ShowWinItem(GetPlantCardDom(oBlover, EDAll));
        }, 0x3e8);
    }
});