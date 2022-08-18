/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oIceAloe,
        oPepper,
        oSpikeweed,
        oKiwibeast,
        oJalapeno
    ],
    'ZName': [
        oConeheadZombie,
        oSadakoZombie,
        oCaskZombie,
        oBucketheadZombie,
        oMakeRifterZombie,
        oFootballZombie
    ],
    'LevelName': $__language_Array__['f229a27237467d5ff5ad186bba8ed384'],
    'LoadMusic': 'Bgm_Polar_Noise',
    'AudioArr': ['Bgm_Polar_23_NPC'],
    'DKind': 0x0,
    'SunNum': 0x12c,
    'CanSelectCard': 0x0,
    'StaticCard': 0x0,
    'FixedProps': 'disabled',
    'LoadAccess'(a) {
        NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll), (NewEle('PolarFire2', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')));
        let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function f() {
            d['onclick'] = f;
            switch (c) {
            case 0x0:
                d['onclick'] = null, e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['f82018b21a3426eb12f473749d153f4c']), oEffects['fadeIn'](b, 'slow', () => d['onclick'] = f), c++;
                break;
            case 0x1:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['bcf90436203199026f849670ae6ad2de']), c++;
                break;
            case 0x2:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), PlayMusic(oS['LoadMusic'] = 'Bgm_Polar_23_NPC'), innerText(d, $__language_Array__['87a44c83083e1e62fddc4e86d4022eb5']), c++;
                break;
            case 0x3:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['d02a38009f2232be358da286fba34741']), c++;
                break;
            case 0x4:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['9b782d51365046a2eb56a6b2398b1531']), c++;
                break;
            case 0x5:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['a93b5523bfe91a7e6f62dba8b22791b0']), c++;
                break;
            case 0x6:
                PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['9e016ac2c7c27245027d6f1748150c9a']), c++;
                break;
            case 0x7:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['1bd9db661ef724c44ce04f3ac51c203c']), c++;
                break;
            case 0x8:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, '……'), d['style']['fontSize'] = '16px', c++;
                break;
            case 0x9:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['52b9aaf25bbdf457d1e35c0c55cb4298']), d['style']['fontSize'] = '18px', c++;
                break;
            case 0xa:
                PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(d, '……'), c++;
                break;
            case 0xb:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['de2f65b9761bba92b5fd5dce9046b864']), c++;
                break;
            case 0xc:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['c8bcc40e4421835c2d163842eaf8b0e8']), c++;
                break;
            case 0xd:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['28697c230244061f078595b28b0b4b4e']), c++;
                break;
            case 0xe:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['7cf87e281e11882ee0f5455784df14c1']), c++;
                break;
            case 0xf:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['ad6b98510ec4e366697afa38bb91c482']), c++;
                break;
            case 0x10:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['ea483b4b3bcba3583d4152451d81b918']), c++;
                break;
            case 0x11:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['0899b4ece1120034033c8d19ed630920']), c++;
                break;
            case 0x12:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['330ffdb11123a1f482477a0d201e46c0']), c++;
                break;
            case 0x13:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['95778f07c805a8567c84b7ae0dde3efc']), c++;
                break;
            case 0x14:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['196435989152992a62cc6702914643db']), c++;
                break;
            case 0x15:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['778b7455a88fc24dec7e99a1e172eae0']), c++;
                break;
            case 0x16:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['d8673280da1cd86cc175962c3f369496']), c++;
                break;
            case 0x17:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['e85b06fcb6eb17e60ed3a3fc8407bb90']), c++;
                break;
            case 0x18:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(d, $__language_Array__['10874b04a31dfa883300475c13aa677e']), c++;
                break;
            case 0x19:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['a3268163a5edaba58c4cf3ff10566417']), c++;
                break;
            case 0x1a:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['1673b943b4535eef47267710034ef694']), c++;
                break;
            case 0x1b:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['9183d65fb516dd79446de585546f1954']);
                if (localStorage['getJsonItem']('JNG_TR_MarshRandomPlot', '52'))
                    c = 0x1c;
                else {
                    if (localStorage['getJsonItem']('JNG_TR_MarshRandomPlot', '28'))
                        c = 0x1d;
                    else {
                        if (localStorage['getJsonItem']('JNG_TR_MarshRandomPlot', '84'))
                            c = 0x1e;
                        else
                            localStorage['getJsonItem']('JNG_TR_MarshRandomPlot', '1') ? c = 0x1f : c = 0x20;
                    }
                }
                break;
            case 0x1c:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['b400d898ace6b8378bfc7b20c7cf3f09']), c = 0x20;
                break;
            case 0x1d:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['5d55bdaa356e5462e22c4304c6ca9c0e']), c = 0x20;
                break;
            case 0x1e:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['7db67702ae70322aaea1817b794ed72a']), c = 0x20;
                break;
            case 0x1f:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['0c73ab1bf9a12c64173e8f27e4d16e4c']), c = 0x20;
                break;
            case 0x20:
                PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['d7b8694b620b207bcceb389995ddad8a']), c++;
                break;
            case 0x21:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['4e85a2c6c4cebdec2ab8b0cd00d5f094']), c++;
                break;
            case 0x22:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['f06130812c3f82e520b4d78027fbb8b1']), c++;
                break;
            case 0x23:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(d, '……'), c++;
                break;
            case 0x24:
                PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(d, $__language_Array__['3c37e71e2a2e074d5be0c44c2d2bc3d5']), c++;
                break;
            case 0x25:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['884674817f007e1f71a4ce0cd3b3cb86']), c++;
                break;
            case 0x26:
                ClearChild(d, e), oEffects['fadeOut'](b, 'slow', g => {
                    ClearChild(g), a();
                });
            }
        }());
    },
    'StartGame': a => oMiniGames['ConveyorBelt']([
        oIceAloe,
        oPepper,
        oPepper,
        oSpikeweed,
        oSpikeweed,
        oKiwibeast
    ], undefined, undefined, [
        oKiwibeast,
        oKiwibeast,
        oKiwibeast
    ])
}, {
    'AZ': [
        [
            oConeheadZombie,
            0x2,
            0x1,
            [
                0x1,
                0x5
            ]
        ],
        [
            oSadakoZombie,
            0x2,
            0x1,
            [
                0x1,
                0x5
            ]
        ],
        [
            oCaskZombie,
            0x2,
            0x6,
            [
                0x6,
                0xa
            ]
        ],
        [
            oBucketheadZombie,
            0x3,
            0xa,
            [
                0xa,
                0xf,
                0x14
            ]
        ],
        [
            oMakeRifterZombie,
            0x2,
            0x6,
            [
                0x6,
                0xa,
                0xf,
                0x14
            ]
        ],
        [
            oFootballZombie,
            0x3,
            0xa,
            [
                0xa,
                0xf,
                0x14
            ]
        ]
    ],
    'FlagNum': 0x14,
    'FlagToSumNum': {
        'a1': [
            0x5,
            0xa,
            0xf,
            0x13,
            0x14
        ],
        'a2': [
            0x4,
            0x10,
            0x20,
            0x40,
            0x46
        ]
    },
    'FlagToEnd': function () {
        SelectModal('Polar23-1');
    }
});