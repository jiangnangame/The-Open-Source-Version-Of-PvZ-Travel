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
        oBegonia
    ],
    'ZName': [
        oZombie,
        oSadakoZombie,
        oCaskZombie,
        oCigarZombie,
        oSkatingZombie
    ],
    'PicArr': (function () {
        let c = oLSP['prototype'], d = c['PicArr'];
        return [
            d[c['CardGif']],
            d[c['StaticGif']]
        ];
    }()),
    'LevelName': $__language_Array__['e53b79825ef51de09c137a37b98a3a36'],
    'LoadMusic': 'Bgm_Polar_Ready_1',
    'StartGameMusic': 'Bgm_Polar_Fight_1',
    'LoadAccess': function (a) {
        NewImg('imgKK', 'images/interface/Polar_Mask2.webp', 'left:1131px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask1.webp', 'left:167px;top:546px;', EDAll);
        for (let e = 0x3; e < 0x8; e++) {
            CustomSpecial(oRifter, 0x1, e);
        }
        for (let f = 0x3; f < 0x8; f++) {
            CustomSpecial(oRifter, 0x5, f);
        }
        CustomSpecial(oRifter, 0x2, 0x6), CustomSpecial(oRifter, 0x3, 0x5), CustomSpecial(oRifter, 0x4, 0x4), PlayAudio('Bgm_Polar_Noise', 0x1);
        let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function g() {
            c['onclick'] = g;
            switch (b) {
            case 0x0:
                d['src'] = 'images/interface/Dave.png', innerText(c, '……'), b++;
                break;
            case 0x1:
                d['src'] = 'images/interface/Black_Dave.png', innerText(c, '……'), b++;
                break;
            case 0x2:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['69dec8b297b9a4d40d2b37a7fa7fbf53']), c['style']['fontSize'] = '16px', b++;
                break;
            case 0x3:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['d080e1d17038b50cb4e0c83868f17e2e']), b++;
                break;
            case 0x4:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['d1c88c0c29bf44c987cc575835a17b0c']), c['style']['fontSize'] = '18px', b++;
                break;
            case 0x5:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['b459ecb9a893cef3c3ad2f9b104dbe51']), b++;
                break;
            case 0x6:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['4c9c04c6abbf7e2a35875810284c96a9']), b++;
                break;
            case 0x7:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['ee46d751c026a54636d8ea18d860757e']), b++;
                break;
            case 0x8:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['a0b71fcd1aeb5cb497af7c9fba452517']), b++;
                break;
            case 0x9:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['72460f2f8a72b05c560ba6f46587fa8d']), b++;
                break;
            case 0xa:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['dec0270de18135b6fb0065097b80b90f']), b++;
                break;
            case 0xb:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['80b6e7717ae3c3dc69ead200b2299892']), b++;
                break;
            case 0xc:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['02427d8f529867b85112e251d866b0dc']), b++;
                break;
            case 0xd:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['2cceb3fac06eb9f942347c1fb0346e4e']), b++;
                {
                    let h = b;
                    oSym['addTask'](0xc8, () => {
                        b == h && g();
                    });
                }
                ;
                break;
            case 0xe:
                d['src'] = 'images/interface/Dave.png', innerText(c, '……'), b++;
                break;
            case 0xf:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['a0a38db1da85aba8c4bb6862139c5888']), b++;
                break;
            case 0x10:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['d9ea6ea8d711a9bba9e0cff92cee562b']), b++;
                break;
            case 0x11:
                PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['23501dac778598452a227e9cfb8f25cc']), b++;
                break;
            case 0x12:
                innerText(c, '……'), b++;
                break;
            case 0x13:
                d['src'] = 'images/interface/Black_Dave.png', innerText(c, '……'), b++;
                break;
            case 0x14:
                ClearChild(c, d), oSym['addTask'](0x1e, a);
            }
        }());
    }
}, {
    'AZ': [
        [
            oZombie,
            0x4,
            0x1
        ],
        [
            oSadakoZombie,
            0x2,
            0x5
        ],
        [
            oCaskZombie,
            0x2,
            0x2
        ],
        [
            oCigarZombie,
            0x1,
            0x5,
            [0x5]
        ],
        [
            oSkatingZombie,
            0x1,
            0x1
        ]
    ],
    'FlagNum': 0xd,
    'FlagToSumNum': {
        'a1': [
            0x2,
            0x3,
            0x5,
            0x7,
            0x9,
            0xc
        ],
        'a2': [
            0x1,
            0x2,
            0x5,
            0x9,
            0xf,
            0x14,
            0x24
        ]
    },
    'FlagToEnd': function () {
        localStorage['JNG_TR_PropsUnlock'] = JSON['stringify'](Object['assign'](localStorage['JNG_TR_PropsUnlock'] ? JSON['parse'](localStorage['JNG_TR_PropsUnlock']) : {}, { 'LSP': 0x1 })), ShowWinItem(NewImg('imgSF', 'images/Props/PropsIcon/protect.webp', 'left:767px;top:330px;width:60px;height:60px;', EDAll, {
            'onclick': function () {
                GetNewProp(this, 'images/Props/LSP/LSP.gif', $__language_Array__['c4af7bd5e4ba3b5bfc7d7ceed11a2a95'], $__language_Array__['3ba12eeb4518a9478059ddd2c93408c3'], NextLevel(), '100px', '350px');
            }
        }));
    }
});