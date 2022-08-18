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
    'PicArr': ['images/interface/PolarClue2.webp'],
    'LevelName': $__language_Array__['46ac545246108ff50a44c28c3aca4bd8'],
    'LoadMusic': 'Bgm_Polar_Noise',
    'DKind': 0x0,
    'LF': [
        0x0,
        0x3,
        0x3,
        0x3,
        0x3,
        0x3
    ],
    'ZF': [
        0x0,
        0x1,
        0x0,
        0x0,
        0x0,
        0x1
    ],
    'InitLawnMover': a => {
    },
    'LoadAccess'(a) {
        NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll), NewEle(0x0, 'div', 'width:780px;height:535px;position:absolute;z-index:1;background:url(images/interface/Encirclement_and_annihilation4.webp);left:225px;top:65px;', 0x0, $('tGround')), [
            [
                0x2,
                0x1
            ],
            [
                0x3,
                0x1
            ],
            [
                0x5,
                0x1
            ],
            [
                0x2,
                0x2
            ],
            [
                0x3,
                0x2
            ],
            [
                0x2,
                0x3
            ],
            [
                0x4,
                0x3
            ],
            [
                0x1,
                0x5
            ],
            [
                0x1,
                0x6
            ],
            [
                0x1,
                0x7
            ],
            [
                0x4,
                0x5
            ],
            [
                0x4,
                0x6
            ],
            [
                0x4,
                0x7
            ],
            [
                0x5,
                0x5
            ],
            [
                0x5,
                0x6
            ],
            [
                0x5,
                0x7
            ],
            [
                0x2,
                0x9
            ],
            [
                0x3,
                0x9
            ],
            [
                0x4,
                0x9
            ],
            [
                0x2,
                0x7
            ],
            [
                0x3,
                0x3
            ]
        ]['forEach'](e => CustomSpecial(oInvisibleFlowerPot, ...e)), [
            [
                0x1,
                0x4
            ],
            [
                0x2,
                0x6
            ],
            [
                0x3,
                0x8
            ],
            [
                0x4,
                0x2
            ],
            [
                0x5,
                0x4
            ]
        ]['forEach'](e => CustomSpecial(oGoLeft, ...e)), [
            [
                0x5,
                0x8
            ],
            [
                0x5,
                0x2
            ],
            [
                0x2,
                0x4
            ]
        ]['forEach'](e => CustomSpecial(oGoUp, ...e)), [
            [
                0x1,
                0x8
            ],
            [
                0x3,
                0x4
            ]
        ]['forEach'](e => CustomSpecial(oGoDown, ...e)), CustomSpecial(oGoUp2, 0x3, 0x6);
        for (let e = 0x1; e <= 0x5; e++) {
            for (let f = 0x1; f < 0xa; f++) {
                let g = !![];
                for (let h = 0x0; h <= PKindUpperLimit; h++) {
                    if (oGd['$'][e + '_' + f + '_' + h]) {
                        g = ![];
                        break;
                    }
                }
                g && CustomSpecial(oObstacle, e, f);
            }
        }
        let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function l() {
            c['onclick'] = l;
            switch (b) {
            case 0x0:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(c, '……The\x20Plant\x20is\x20absorbing\x20the\x20water\x20rapidly'), b++;
                break;
            case 0x1:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(c, 'Looking\x20like\x20it\x20can\x20use\x20some\x20more\x20watering\x20soon.'), b++;
                break;
            case 0x2:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(c, $__language_Array__['65364f6dd1d89394641daff8337008cc']), b++;
                break;
            case 0x3:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(c, 'oh,\x20it\x27s\x203:26'), b++;
                break;
            case 0x4:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(c, $__language_Array__['06a7de409623d2344064aea9eb7e0085']), b++;
                break;
            case 0x5:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(c, $__language_Array__['daeea3b7627015520560244543e2d08d']), c['style']['fontSize'] = '16px', b++;
                break;
            case 0x6:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(c, $__language_Array__['1cc2372f24fac0b6c1f03a36cc8c7802']), c['style']['fontSize'] = '18px', b++;
                break;
            case 0x7:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(c, $__language_Array__['ce901a2e06d5440ac04b38680228ebe7']), b++;
                break;
            case 0x8:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(c, $__language_Array__['b3e3371872a3079309457db919bd46f6']), b++;
                break;
            case 0x9:
                ClearChild(c, d), oSym['addTask'](0x1e, a);
            }
        }());
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
    'FlagNum': 0x19,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x3,
            0x5,
            0x9,
            0xa,
            0xd,
            0xf,
            0x13,
            0x14,
            0x17,
            0x18
        ],
        'a2': [
            0x4,
            0x1,
            0x4,
            0x9,
            0x19,
            0xf,
            0x10,
            0x11,
            0x12,
            0x13,
            0x14,
            0x28
        ]
    },
    'FlagToEnd'() {
        PlayMusic(oS['StartGameMusic'] = 'Bgm_Polar_Noise');
        let a = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:299;width:900px;height:600px;left:115px;background:black;transition:background\x200.5s;opacity:0;', 0x0, EDAll), b = ![], c = 0x0, d = null, e = 0x0, f = NewEle('DivTeach', 'div', 'left:415px', 0x0, EDAll), g = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
        (function i() {
            f['onclick'] = i;
            switch (e) {
            case 0x0:
                g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['b3e3371872a3079309457db919bd46f6']), e++;
                break;
            case 0x1:
                g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['c73111dab7009ab7fd8876840490eeb2']), e++;
                break;
            case 0x2:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['1800dd4d8cba226010aa9c1fb43b5077']), e++;
                break;
            case 0x3:
                g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['239d9151675cbe131f9315c3fc12967c']), e++;
                break;
            case 0x4:
                g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['c326776604c0e9e6a98df692d8d82318']), e++;
                break;
            case 0x5:
                g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['78190caad3ef70d3d3f942aea92ff5de']), e++;
                break;
            case 0x6:
                g['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['5c6ef9a1aa6baedf31821a1d8bda34fe']), e++;
                break;
            case 0x7:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['47773c3bbc86194e325eb7450a2235ea']), e++;
                break;
            case 0x8:
                StopMusic(), PlayMusic(oS['StartGameMusic'] = 'Bgm_Polar_24_NPC_2'), g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['8c2bc8051de53ef3a94a0c2a82ed7776']), e++;
                break;
            case 0x9:
                b = !![], f['onclick'] = null, oEffects['fadeIn'](a, 'slow', () => {
                    a['style']['transition'] = 'background\x200.25s', d = setInterval(function () {
                        b && (a['style']['background'] = c ? 'rgb(110,0,0)' : 'black', c ^= 0x1);
                    }, 0xfa), f['onclick'] = i;
                }), PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), f['innerHTML'] = $__language_Array__['33d49b4058c18a2e5eb3cb28c612c583'], e++;
                break;
            case 0xa:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), f['innerHTML'] = $__language_Array__['c58b72e56fe32f4276bd7ee43921b72d'], e++;
                break;
            case 0xb:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), f['innerHTML'] = $__language_Array__['3f8b3864f146161efd9e50328ef14fc0'] + '<span>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['7370c5ca393cc08e5f7aa3065a9da7e6'],
                    'font_size': 0x12,
                    'align_center': ![],
                    'relative': !![]
                })[0x0] + '</span>', e++;
                break;
            case 0xc:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['7d0f880e9e6b4839ee29229684c42930']), e++;
                break;
            case 0xd:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), f['innerHTML'] = $__language_Array__['7fb38446771748f6c1a31ac68b1ac17d'] + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['b9b5a1e3724a0d844b5c967579d84c75'],
                    'font_size': 0x12,
                    'relative': !![]
                })[0x0] + '</span>', e++;
                break;
            case 0xe:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['1a80dd058e9b48735714794b6890720b']), e++;
                break;
            case 0xf:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['e31af7d9945f64580b1505942e6287a9']), clearInterval(d);
                a['style']['background'] != 'black' && (f['onclick'] = null, oEffects['Animate'](a, { 'background': '#000' }, 'slow', 'linear', () => {
                    f['onclick'] = i;
                }));
                e++;
                break;
            case 0x10:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['654a8385a794bddc2ca8af511484afd1']), e++;
                break;
            case 0x11:
                ClearChild(f, g), oEffects['fadeOut'](a, 'slow', () => {
                    h(), ClearChild(a);
                });
            }
        }());
        function h() {
            oS['DefaultFlagToEnd']();
        }
    }
});