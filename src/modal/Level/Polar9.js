/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oRadish,
        oSunShroom,
        oPuffShroom,
        oSnowPea,
        oIceAloe,
        oPepper,
        oTallNut
    ],
    'ZName': [
        oSadakoZombie,
        oImp,
        oFootballZombie,
        oMakeRifterZombie,
        oSkatingZombie
    ],
    'PicArr': ['images/interface/Polar.webp'],
    'LevelName': $__language_Array__['063ece1a176a6effdc705ee65cedaca3'],
    'LoadMusic': 'Bgm_Polar_Ready_1',
    'StartGameMusic': 'Bgm_Polar_Fight_Challenge',
    'CanSelectCard': 0x0,
    'FixedProps': 'disabled',
    'LoadAccess': function (b) {
        NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll);
        for (let f = 0x1; f < 0x5; f++) {
            for (let g = 0x1; g < 0x6; g++) {
                CustomSpecial(oRifter, g, f);
            }
        }
        PlayAudio('Bgm_Polar_Noise', 0x1);
        let c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function h() {
            d['onclick'] = h;
            switch (c) {
            case 0x0:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['8c75c43bcec112eb545386167a238e2d']), c++;
                break;
            case 0x1:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['9315ab81b640cc01403bb12f65d015ee']), c++;
                break;
            case 0x2:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['b1fdd9ff4e4d609a0d61d31016c1aa30']), c++;
                break;
            case 0x3:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['9a9b54a9b7a5ef6f08f4b780a08603ec']), c++;
                break;
            case 0x4:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(d, $__language_Array__['082fe9311612e445b97f62b209bb66fe']), c++;
                break;
            case 0x5:
                e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['6192b33ba4af33481b717942ee4b1821']), c++;
                break;
            case 0x6:
                ClearChild(d, e), oSym['addTask'](0x1e, b);
            }
        }());
    },
    'StartGame': oMiniGames['GrowWithoutSun']
}, {
    'AZ': [
        [
            oSkatingZombie,
            0x3,
            0x1
        ],
        [
            oSadakoZombie,
            0x3,
            0x5
        ],
        [
            oImp,
            0x3,
            0x1
        ],
        [
            oFootballZombie,
            0x2,
            0xc,
            [
                0xc,
                0xd,
                0xe,
                0xf
            ]
        ],
        [
            oMakeRifterZombie,
            0x2,
            0xa,
            [
                0xa,
                0xb,
                0xc,
                0xd,
                0xe,
                0xf
            ]
        ]
    ],
    'FlagNum': 0xf,
    'FlagToSumNum': {
        'a1': [
            0x3,
            0x5,
            0xa
        ],
        'a2': [
            0x2,
            0xc,
            0x1e,
            0x28
        ]
    }
});