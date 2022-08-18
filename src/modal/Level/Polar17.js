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
        oMiracleImitater,
        oJalapeno
    ],
    'ZName': [
        oZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oStrollZombie,
        oSadakoZombie
    ],
    'LevelName': $__language_Array__['6f114218a660bc699dfc6e9f85627a80'],
    'LoadMusic': 'Bgm_Polar_3_NPC',
    'StartGameMusic': 'Bgm_Polar_Fight_' + (0x2 + Math['round'](Math['random']() * 0x2)),
    'AudioArr': ['Bgm_Marsh_Plot3'],
    'DKind': 0x0,
    'SunNum': 0x12c,
    'LoadAccess': function (a) {
        NewEle('PolarFire2', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll), PlayAudio('Bgm_Polar_Noise', 0x1);
        let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function e() {
            c['onclick'] = e;
            switch (b) {
            case 0x0:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['1cb7972f80f32cea436009d0e4a2130e']), b++;
                break;
            case 0x1:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['51c72c71e9e702a39ae26524a408748a']), b++;
                break;
            case 0x2:
                PlayAudio('crazydavelong3'), c['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['32bce59c1108139a64865d0e0136d7b0'],
                    'font_size': 0x18
                })[0x0] + '</p>', c['style']['fontSize'] = '24px', oEffects['ScreenShake'](), b++;
                break;
            case 0x3:
                PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['6f0a6906c281e5e8ab50ba2bcb50e3ea']), c['style']['fontSize'] = '18px', b++;
                break;
            case 0x4:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['caf9cac657aac46bfc3e0287c69e77b7']), b++;
                break;
            case 0x5:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(c, $__language_Array__['6b729f6679677d9ff21f00b73078ba67']), b++;
                break;
            case 0x6:
                PlayAudio('Zomboss3'), innerText(c, $__language_Array__['79caf2b1d17f52a1632d04c877666510']), b++;
                break;
            case 0x7:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['4924d4c5b5a1e83fdabd734a0234cb1b']), b++;
                break;
            case 0x8:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['33b04a0e12b0d863d5f75a196a80a59f']), b++;
                break;
            case 0x9:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), c['innerHTML'] = '<p\x20style=\x27position:absolute;top:-18px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['7fb18794808f6f40616111f323047434'],
                    'font_size': 0x10
                })[0x0] + '</p>', c['style']['fontSize'] = '16px', b++;
                break;
            case 0xa:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['e607356f91dd3e84cb46f8682da21473']), c['style']['fontSize'] = '18px', b++;
                break;
            case 0xb:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(c, $__language_Array__['b2711781b55eb0ca438ecd608b11688e']), b++;
                break;
            case 0xc:
                PlayAudio('Zomboss1'), c['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['0ca47745a6b719b2c7c7a6d0a206f59b'],
                    'font_size': 0x12
                })[0x0] + '</p>', b++;
                break;
            case 0xd:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, '……'), b++;
                break;
            case 0xe:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['040365ce4ba10153c5e160c6181f3b97']), b++;
                break;
            case 0xf:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['2637b32761a80957e86b897fc942a41a']), b++;
                break;
            case 0x10:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(c, $__language_Array__['78fcdc270250b5c38cbcace6a533fdb7']), b++;
                break;
            case 0x11:
                PlayAudio('Zomboss1'), innerText(c, $__language_Array__['b524ecf5815b3c97619e8ace3a01602c']), b++;
                break;
            case 0x12:
                c['onclick'] = null, PlayAudio('Zomboss3'), oEffects['AudioFadeOut'](oS['LoadMusic'], 0x0, 1.5, () => {
                    c['onclick'] = e;
                }), innerText(c, $__language_Array__['b4cffbe311aca8e7d9ae7082d78e529e']), b++;
                break;
            case 0x13:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['8287586b253e913f4772ae4ff925378c']), b++;
                break;
            case 0x14:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['4779ca7c5130520a0c9c369108b8d569']), b++;
                break;
            case 0x15:
                PlayAudio('Zomboss2'), innerText(c, $__language_Array__['f5989d9e8ef60a0c4ec1cf8a361d43a3']), b++;
                break;
            case 0x16:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['574c01f8862ec04f768dd72b52275d94']), b++;
                break;
            case 0x17:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['6c35349a534ef0d2e59a4d8e43254744']), b++;
                break;
            case 0x18:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['f9534d5fa44012299cb5638fdbca6446']), b++;
                break;
            case 0x19:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['60a298376c0e5b6e54c220e2f9f0d5fc']), b++;
                break;
            case 0x1a:
                d['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(c, $__language_Array__['8f1f701d5bbb524435e782460d109866']), b++;
                break;
            case 0x1b:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['e856b9fb6407085d672593d0e0a54323']), b++;
                break;
            case 0x1c:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['0c5a563c4153f887f2151ea4c6a9d57e']), b++;
                break;
            case 0x1d:
                ClearChild(c, d), oSym['addTask'](0x1e, a);
            }
        }());
    },
    'StartGame': a => oMiniGames['Frostbite'](0xbb8, 0x50)
}, {
    'AZ': [
        [
            oZombie,
            0x2,
            0x1
        ],
        [
            oConeheadZombie,
            0x2,
            0x1
        ],
        [
            oBucketheadZombie,
            0x1,
            0x1
        ],
        [
            oStrollZombie,
            0x1,
            0x1
        ],
        [
            oSadakoZombie,
            0x1,
            0x1
        ]
    ],
    'FlagNum': 0xf,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x3,
            0x7,
            0x9,
            0xa,
            0xc,
            0xe
        ],
        'a2': [
            0x1,
            0x3,
            0x5,
            0x8,
            0x10,
            0xc,
            0xe,
            0x18
        ]
    },
    'FlagToEnd'() {
        let a = 0x0, b = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), c = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
        (function e() {
            b['onclick'] = e;
            switch (a) {
            case 0x0:
                c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(b, $__language_Array__['1bb30673771cf2108de66d9ea7bf7865']), a++;
                break;
            case 0x1:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['3034166fdded93967c7efaa77936eabe']), a++;
                break;
            case 0x2:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['a399eabb1a161c7d9da4d69cdbd822b0']), a++;
                break;
            case 0x3:
                c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(b, $__language_Array__['a3980dd2ca20f3b3e142903a7a0d4711']), a++;
                break;
            case 0x4:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['8c9566faff75c7261bf8c2694457b55e']), a++;
                break;
            case 0x5:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['3c46c4fa83dc45247f857ae16bcb8572']), a++;
                break;
            case 0x6:
                c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(b, $__language_Array__['72d37ba9a10dec6ac0e4d46fea646926']), a++;
                break;
            case 0x7:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['5a7cc357bebd8652a0e6f2f337e278b4']), a++;
                break;
            case 0x8:
                c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(b, $__language_Array__['ca15e20b3cbcbdab62e9fbc8d3ab9c58']), a++;
                break;
            case 0x9:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['accb1dc8a6c00fcbf03cb6c5d815c5a9']), a++;
                break;
            case 0xa:
                c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), PlayMusic(oS['StartGameMusic'] = 'Bgm_Marsh_Plot3'), innerText(b, $__language_Array__['fa54df2425c0573931a2124a59ad927d']), a++;
                break;
            case 0xb:
                PlayAudio('Zomboss1'), innerText(b, $__language_Array__['62bb71d14b61101811f1e5ab2efdd575']), a++;
                break;
            case 0xc:
                PlayAudio('Zomboss1'), innerText(b, $__language_Array__['0bcae39f65dbab8437e7b37e68ed37bd']), a++;
                break;
            case 0xd:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['72d37ba9a10dec6ac0e4d46fea646926']), a++;
                break;
            case 0xe:
                c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(b, $__language_Array__['dd7c93856a58649af4d007ccbb027e94']), a++;
                break;
            case 0xf:
                PlayAudio('Zomboss2'), innerText(b, $__language_Array__['23d3359fb0e79a56eb71787712339563']), a++;
                break;
            case 0x10:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['f1d01ff128d759285c98ac344af1cf65']), a++;
                break;
            case 0x11:
                c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(b, $__language_Array__['ee05f172a8ebedb4bf726fc226d4f8fa']), a++;
                break;
            case 0x12:
                PlayAudio('Zomboss1'), innerText(b, $__language_Array__['42ba777d50ff3c5bd2a50b54d4b9c569']), a++;
                break;
            case 0x13:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['f0c6a4c8d50aef493b8ba180f664890f']), a++;
                break;
            case 0x14:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['4d268cc7e6e19916050f72a640b3dcee']), a++;
                break;
            case 0x15:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['55cf6a0ee8493c3fbc8fadd9dc86e2b7']), a++;
                break;
            case 0x16:
                c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(b, $__language_Array__['ef92ab171c5fdf67503db3f69e7849e8']), a++;
                break;
            case 0x17:
                PlayAudio('Zomboss3'), innerText(b, $__language_Array__['18f6ed92c6a786d818b7d0ba621d1383']), a++;
                break;
            case 0x18:
                PlayAudio('Zomboss1'), innerText(b, $__language_Array__['90b844b95a1e8b12230d63de7605f154']), a++;
                break;
            case 0x19:
                ClearChild(b, c), setTimeout(d, 0x12c);
            }
        }());
        function d() {
            oS['DefaultFlagToEnd']();
        }
    }
});