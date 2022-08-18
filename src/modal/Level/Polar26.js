/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oSunFlower,
        oPotatoMine,
        oStoneFlower,
        oRadish,
        oSunShroom,
        oPuffShroom,
        oIceAloe,
        oMonotropa
    ],
    'ZName': [
        oImp,
        oSadakoZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oCaskZombie,
        oZomboni,
        oFootballZombie,
        oMembraneZombie
    ],
    'LevelName': $__language_Array__['df299dd4e01c5ea18789ef06aabf63a1'],
    'LoadMusic': 'Bgm_Polar_24_NPC_1',
    'DKind': 0x0,
    'CanSelectCard': 0x0,
    'FixedProps': 'disabled',
    'LoadAccess'(a) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll), (NewEle('PolarFire2', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')));
        let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function f() {
            d['onclick'] = f;
            switch (c) {
            case 0x0:
                d['onclick'] = null, e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['ee0344bb5fec76eacffdf3961c24c27b']), oEffects['fadeIn'](b, 'slow', () => d['onclick'] = f), c++;
                break;
            case 0x1:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(d, '……'), c++;
                break;
            case 0x2:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['551d0f159beecc7ff2c544b79de3cdec']), c++;
                break;
            case 0x3:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['daa26da5b7d2ee8f2bdfa2a00e6892db']), c++;
                break;
            case 0x4:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['0078a600406258d338217c31ed10222c']), c++;
                break;
            case 0x5:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['310826a3c70b66a875b4d3ca9c3df1d3']), c++;
                break;
            case 0x6:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['2f6dfe536ecf4f579cb11e49ef86fd85']), c++;
                break;
            case 0x7:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), d['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['b46249a1f35bcd264d76cb384d932cfe'],
                    'font_size': 0x18
                })[0x0] + '</p>', d['style']['fontSize'] = '24px', c++;
                break;
            case 0x8:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['2eb669be1767d40492ddf274cf5d0da7']), d['style']['fontSize'] = '18px', c++;
                break;
            case 0x9:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['21dfad821f06083e312051155723ba38']), c++;
                break;
            case 0xa:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['0efc32cc4eceaa649d12254822d8735c']), c++;
                break;
            case 0xb:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['0d0be1b41862241c9852fb37e90ae3d4']), c++;
                break;
            case 0xc:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['0a9a272af5efd93dfcd8275f2a329bfe']), c++;
                break;
            case 0xd:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['c31ca56751351d2fdb958194de4cda17']), c++;
                break;
            case 0xe:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['79731e7552bcbba7cb29d099330976e2']), d['style']['fontSize'] = '16px', c++;
                break;
            case 0xf:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['ef2510cb2c209f69395156ba58f27113']), d['style']['fontSize'] = '18px', c++;
                break;
            case 0x10:
                d['onclick'] = null, e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['4962922cf08155d3a1ebaf896930cb89']), oEffects['Animate'](b, { 'background': 'black' }, 'slow', 'linear', () => d['onclick'] = f), c++;
                break;
            case 0x11:
                d['onclick'] = null, oSym['addTask'](0xc8, f), innerText(d, '……'), c++;
                break;
            case 0x12:
                oSym['addTask'](0x64, f), d['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': '……',
                    'font_size': 0x12
                })[0x0] + '</p>', c++;
                break;
            case 0x13:
                d['onclick'] = null, e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['2b63019bda078c89d457f9ba2821e61f']), oEffects['Animate'](b, { 'background': 'white' }, 'slow', 'linear', () => d['onclick'] = f), c++;
                break;
            case 0x14:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['97625eeb6431a5c2c43ce54e4a2c893a']), c++;
                break;
            case 0x15:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['3727c76ac2bb4104ba193cdc94186a56']), c++;
                break;
            case 0x16:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['5f0903286db3ca72cacc022dfdf02190']), c++;
                break;
            case 0x17:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['1fcac80125a5514db657605324345414']), c++;
                break;
            case 0x18:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['8806aa10e36063828009d88c0525ebcf']), c++;
                break;
            case 0x19:
                PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(d, $__language_Array__['893792ab58afd2adddf8d31d9292a2d0']), c++;
                break;
            case 0x1a:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), d['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['8a25d462e2c56be9e1d174a4a2dfd752'],
                    'font_size': 0x12
                })[0x0] + '</p>', c++;
                break;
            case 0x1b:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), d['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['0ef6b0ddff45dfcd2ca5423c967732f8'],
                    'font_size': 0x12
                })[0x0] + '</p>', c++;
                break;
            case 0x1c:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), d['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['883f925939c0ada8295b9a5c994f8346'],
                    'font_size': 0x12
                })[0x0] + '</p>', c++;
                break;
            case 0x1d:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), d['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['d35d50aefbd2298f662b5e490d93dbae'],
                    'font_size': 0x12,
                    'time_range': 0.1
                })[0x0] + '</p>', c++;
                break;
            case 0x1e:
                d['onclick'] = null, e['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['c9550b196c773e44cb7ea493a7aed1ae']), oEffects['fadeOut'](b, 'slow', () => d['onclick'] = f), c++;
                break;
            case 0x1f:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['edfee1c113f8fbbf8886ad3533118e26']), c++;
                break;
            case 0x20:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['4e2933fa1d9e013a70e2bf8acef8b047']), c++;
                break;
            case 0x21:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['2ef90cf06ce17764cc54d79b67aca8a2']), c++;
                break;
            case 0x22:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(d, $__language_Array__['dc2e291776a3b553d01a3b23584123a4']), c++;
                break;
            case 0x23:
                ClearChild(d, e), ClearChild(b), oSym['addTask'](0x1e, a);
            }
        }());
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
            0x1,
            [
                0x1,
                0x2,
                0x3,
                0x4,
                0x5
            ]
        ],
        [
            oConeheadZombie,
            0x2,
            0x6
        ],
        [
            oBucketheadZombie,
            0x2,
            0x6,
            [
                0x14,
                0x17
            ]
        ],
        [
            oCaskZombie,
            0x2,
            0x6
        ],
        [
            oZomboni,
            0x3,
            0x15,
            [
                0x15,
                0x16,
                0x17
            ]
        ],
        [
            oFootballZombie,
            0x2,
            0x6,
            [0x14]
        ],
        [
            oMembraneZombie,
            0x3,
            0xf,
            [0x14]
        ]
    ],
    'FlagNum': 0x17,
    'FlagToSumNum': {
        'a1': [
            0x5,
            0x7,
            0x9,
            0xa,
            0xd,
            0xf,
            0x12,
            0x14,
            0x16,
            0x17
        ],
        'a2': [
            0x2,
            0xa,
            0x10,
            0x19,
            0x23,
            0x28,
            0x2d,
            0x32,
            0x1e,
            0x46
        ]
    },
    'FlagToEnd'() {
        ShowWinItem(NewImg('imgSF', 'images/interface/Clearance_reward.png', 'left:535px;top:200px;width:116px;height:119px;', EDAll, { 'onclick': a => GetWin(a['target'], 'Polar26-1') }));
    }
});