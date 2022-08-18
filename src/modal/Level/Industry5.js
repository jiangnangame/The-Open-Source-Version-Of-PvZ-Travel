/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
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
        oCabbage
    ],
    'ZName': [
        oSculpture,
        oSculptorZombie,
        oImp,
        oNewspaperZombie,
        oCaskZombie,
        oStrollZombie,
        oSkatingZombie,
        oBucketheadZombie
    ],
    'PicArr': [
        'images/interface/Industry.webp',
        'images/interface/Industry_Mask.png',
        'images/interface/IndustryClue1_1.webp'
    ],
    'LevelName': $__language_Array__['496000fc998e91c91ce783e8fcdbeacb'],
    'StartGameMusic': 'Bgm_Industry_Fight_Challenge_1',
    'LoadAccess'(a) {
        NewImg('BgMask' + Math['random'](), 'images/interface/Industry_Mask.png', 'left:0;top:469px;position:absolute;z-index:23;', EDAll);
        const b = [
            [
                0x2,
                0x5
            ],
            [
                0x3,
                0x6
            ],
            [
                0x3,
                0x4
            ],
            [
                0x4,
                0x5
            ]
        ];
        b['forEach'](f => {
            let [g, h] = f;
            CustomSpecial(oApple, g, h), NewEle(0x0, 'div', 'left:' + (0x3c + 79.5 * h) + 'px;top:' + (0x64 * g - 0x14) + 'px;', { 'className': 'sos' }, FightingScene);
        }), CustomSpecial(oZombieComeOnObs, 0x3, 0x7), CustomSpecial(oSummonZombieObs, 0x2, 0x6), CustomSpecial(oSummonZombieObs, 0x4, 0x6), PlaceZombie(oSculpture, 0x1, 0x8), PlaceZombie(oSculpture, 0x1, 0x9), PlaceZombie(oSculpture, 0x5, 0x8), PlaceZombie(oSculpture, 0x5, 0x9);
        let c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function f() {
            d['onclick'] = f;
            switch (c) {
            case 0x0:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['4b3a07f5af10b3e8f19a1ef602f63668']), c++;
                break;
            case 0x1:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['dd6fd7d4a24da707254032e8cd2440ab']), c++;
                break;
            case 0x2:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['95064c0958844c0621e873d9b596a1e0']), c++;
                break;
            case 0x3:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['ea409066568fde1c4e73cb4804693c5d']), c++;
                break;
            case 0x4:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['91095d76c60595cb46ffcabf04352a9c']), c++;
                break;
            case 0x5:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['3012533d6f7e3fde5def8031de919d26']), c++;
                break;
            case 0x6:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['db91168a0f495fc51bfc7d2824db43e5']), c++;
                break;
            case 0x7:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['1ff392f5d4c7d88ca9c557d4564bc52d']), c++;
                break;
            case 0x8:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['0666aa6a56d7b9f39e2be9f0c0fe3ffc']), c++;
                break;
            case 0x9:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['e554aaf299e96cf91927fd55b4c3c318']), c++;
                break;
            case 0xa:
                ClearChild(d, e), oSym['addTask'](0x1e, a);
            }
        }());
    },
    'HaveFog': {
        'type': 'Fog',
        'leftBorder': 0x3
    },
    'StartGame': a => oMiniGames['ProtectPlants']({ 'oApple': 0x4 })
}, {
    'AZ': [
        [
            oSculptorZombie,
            0x2,
            0x5,
            [
                0x5,
                0xa,
                0xf,
                0x10,
                0x11
            ]
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
            0xa
        ],
        [
            oStrollZombie,
            0x1,
            0xa
        ],
        [
            oSkatingZombie,
            0x1,
            0xa
        ],
        [
            oBucketheadZombie,
            0x2,
            0xf,
            [
                0xf,
                0x10,
                0x11
            ]
        ]
    ],
    'FlagNum': 0x11,
    'FlagToSumNum': {
        'a1': [
            0x4,
            0x5,
            0x7,
            0xa,
            0xd,
            0xf,
            0x11
        ],
        'a2': [
            0x3,
            0x5,
            0xa,
            0xc,
            0x19,
            0x23,
            0x3c
        ]
    },
    'FlagToEnd'() {
        ShowWinItem(NewImg('imgSF', 'images/interface/IndustryClue1_1.webp', 'left:\x20550px;transform:scale(0.12);width:546px;height:448px;', EDAll, {
            'onclick'() {
                GetNewProp(this, 'images/interface/IndustryClue1_1.webp', $__language_Array__['d24f653f35d6436a523aa24106879b21'], $__language_Array__['3302798ee32fc291bc0be7274ba518fe'], 'Industry5-1', 'top:\x20-5%;left:\x2025px;transform:\x20scale(0.15);width:\x20900px;height:\x20597px;');
            }
        }));
    }
});