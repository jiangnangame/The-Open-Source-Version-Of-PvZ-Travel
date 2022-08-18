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
        oImp,
        oSadakoZombie,
        oZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oPushIceImp,
        oSkatingZombie,
        oNewspaperZombie,
        oMembraneZombie
    ],
    'LevelName': $__language_Array__['faacfe6330890e849b3753276c193de9'],
    'LoadMusic': 'Bgm_Marsh_Plot3',
    'DKind': 0x0,
    'PicArr': [
        'images/interface/Polar.webp',
        'images/interface/Marsh.webp'
    ],
    'LoadAccess'(a) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll), (NewEle('PolarFire2', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')));
        for (let i = 0x1; i < 0x6; i++) {
            for (let j = 0x1; j < 0xa; j++) {
                (i % 0x2 === 0x0 && j % 0x2 !== 0x0 || i % 0x2 !== 0x0 && j % 0x2 === 0x0) && CustomSpecial(oRifter, i, j);
            }
        }
        let b = [
                'images/interface/Polar.webp',
                'images/interface/Marsh.webp'
            ], c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;opacity:1;', 0x0, EDAll), d = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), e = 0x0, f = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), g = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        function h(k, l = ![], m = () => {
        }) {
            f['onclick'] = null, oSym['addTask'](0x1, () => {
                c['style']['backgroundImage'] = 'url(' + b[k] + ')', l ? EDAll['style']['filter'] = 'grayscale(1)' : EDAll['style']['filter'] = '', m();
            });
        }
        (function k() {
            f['onclick'] = k;
            switch (e) {
            case 0x0:
                f['onclick'] = null, g['src'] = 'images/interface/Black_Dave.png', EDAll['style']['filter'] = 'grayscale(1)', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), f['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['a238f2f2f6907ae694e970351556bc92'],
                    'font_size': 0x12
                })[0x0] + '</p>', oEffects['fadeIn'](d, 'slow', () => f['onclick'] = k), e++;
                break;
            case 0x1:
                g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), f['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['537c27de3363c5d09557700a5f48f5d4'],
                    'font_size': 0x12
                })[0x0] + '</p>', e++;
                break;
            case 0x2:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), f['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['1c6af2c3dc6e4ac016bdda013806d19a'],
                    'font_size': 0x12
                })[0x0] + '</p>', e++;
                break;
            case 0x3:
                f['onclick'] = null, EDAll['style']['filter'] = '', g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['903d74ce11722ad816a1e2e2583f2543']), oEffects['Animate'](d, { 'background': 'black' }, 'slow', 'linear', () => f['onclick'] = k), e++;
                break;
            case 0x4:
                f['onclick'] = null, PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(f, $__language_Array__['0318b516cbd2d99908a7098a600e1522']), EDAll['style']['filter'] = 'grayscale(1)', oEffects['Animate'](d, { 'background': 'white' }, 'slow', 'linear', () => f['onclick'] = k), e++;
                break;
            case 0x5:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['4ca68cde6a9f5a41d8caf397b9811a9a']), e++;
                break;
            case 0x6:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['a58f450f1dd32a476d6c5102afd0bd1e']), e++;
                break;
            case 0x7:
                g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['77e0168f58c200ab0790843fd89afd3a']), e++;
                break;
            case 0x8:
                g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['1ec10b988ea41e040462454a5916148a']), e++;
                break;
            case 0x9:
                g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['96bc34701b54ac6e6f7c9b605a2611b8']), e++;
                break;
            case 0xa:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['aadbfbcfbdd034aad4d788493936bb65']), e++;
                break;
            case 0xb:
                g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['a73f7515c96123f98246170c3d88b313']), e++;
                break;
            case 0xc:
                f['onclick'] = null, PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), EDAll['style']['filter'] = '', innerText(f, $__language_Array__['3aac2e0e01e807cbdc12e577348eac27']), oEffects['Animate'](d, { 'background': 'black' }, 'slow', 'linear', () => f['onclick'] = k), e++;
                break;
            case 0xd:
                f['onclick'] = null, oEffects['fadeOut'](d, 'slow', () => f['onclick'] = k), EDAll['style']['filter'] = 'grayscale(1)', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['b3b548ad888e78470d3063f01a42d1f4']), e++;
                break;
            case 0xe:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['3a068313948d406aceda3c3642e656f6']), e++;
                break;
            case 0xf:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['fe9eaf37ebc91cbd5894bebd1918ef19']), e++;
                break;
            case 0x10:
                PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), f['onclick'] = null, g['style']['display'] = f['style']['display'] = 'none', oEffects['fadeIn'](d, 'slow', () => {
                    g['style']['display'] = f['style']['display'] = '', f['onclick'] = k, EDAll['style']['filter'] = '';
                }), innerText(f, '……'), e++;
                break;
            case 0x11:
                f['onclick'] = null, oEffects['fadeOut'](d, 'slow', () => f['onclick'] = k), EDAll['style']['filter'] = 'grayscale(1)', g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['04d7fd55ea7f5bdfc9ab4db88e4fd7df']), e++;
                break;
            case 0x12:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), f['onclick'] = null, g['style']['display'] = f['style']['display'] = 'none', oEffects['fadeIn'](d, 'slow', () => {
                    g['style']['display'] = f['style']['display'] = '', f['onclick'] = k, EDAll['style']['filter'] = '';
                }), innerText(f, $__language_Array__['52288503aea3d89f421282d02bf0a93b']), e++;
                break;
            case 0x13:
                g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(f, $__language_Array__['60be5c7157044bae5fb3ddefc85d63a0']), e++;
                break;
            case 0x14:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['0b6fc2c5dbf4339b8a31b14da3784810']), e++;
                break;
            case 0x15:
                PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['4beb9537eab08c90d07b86c9dc2dd50d']), e++;
                break;
            case 0x16:
                oEffects['fadeOut'](d, 0.5), h(0x1, !![], () => {
                    f['onclick'] = k;
                }), PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['5c0c856643441f64e31ad36d80cbb01a']), e++;
                break;
            case 0x17:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['4c7df6ebf5ac0212a14df8b0bdb46700']), e++;
                break;
            case 0x18:
                f['onclick'] = null, PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['6ee9925773bdb63e110d05e3f197abf9']), d['style']['background'] = 'white', oEffects['fadeIn'](d, 'fast', () => f['onclick'] = k), e++;
                break;
            case 0x19:
                g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['babf162c03652fb9142d41d147e9813b']), e++;
                break;
            case 0x1a:
                g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['b5682343149be865061dca124a4d69c7']), f['style']['fontSize'] = '16px', e++;
                break;
            case 0x1b:
                f['onclick'] = null, g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['030c59a3c282d20edaffd7b6062c82f3']), oEffects['Animate'](d, { 'background': 'black' }, 'slow', 'linear', () => f['onclick'] = k), f['style']['fontSize'] = '18px', e++;
                break;
            case 0x1c:
                g['src'] = 'images/interface/Zomboss.png', EDAll['style']['filter'] = 'grayscale(1)', f['onclick'] = null, oEffects['fadeOut'](d, 'slow', () => f['onclick'] = k), PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['1d1fce4792839c0df947736a203cb7b9']), e++;
                break;
            case 0x1d:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['42036135ba88d565fce73994429fb39f']), e++;
                break;
            case 0x1e:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['80564fad30b32a64897e2b872afe0e20']), e++;
                break;
            case 0x1f:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['1b99c4a2ca951585d6b4db7b3bb93f92']), e++;
                break;
            case 0x20:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, '……'), e++;
                break;
            case 0x21:
                g['src'] = 'images/interface/Black_Dave.png', f['onclick'] = null, oEffects['fadeIn'](d, 'slow', () => f['onclick'] = k), PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['7d73ac08cd0869625b665be4909121d2']), e++;
                break;
            case 0x22:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['f95cc2ba3a1ef7579728c27b264742ab']), e++;
                break;
            case 0x23:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['0acc98f48b483b80e2b4c533086baf82']), e++;
                break;
            case 0x24:
                g['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['94d8434ace85b40e335c12d7ae5eb673']), e++;
                break;
            case 0x25:
                g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['45f48cfff16f8a22b520e44ab3b68b76']), e++;
                break;
            case 0x26:
                PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['3ed767bb4612e1b7d54d9980811b9ef2']), e++;
                break;
            case 0x27:
                oEffects['fadeOut'](d, 0.5), h(0x0, !![], () => {
                    f['onclick'] = k;
                }), g['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['d6106ee9888d9c73843b5db03a9a4966']), e++;
                break;
            case 0x28:
                g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['6822b923904d75e258ad90220611cd86']), e++;
                break;
            case 0x29:
                g['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['e0c778d4de34c59d397d7118ee436d75']), e++;
                break;
            case 0x2a:
                f['onclick'] = null, g['style']['display'] = f['style']['display'] = 'none', oEffects['fadeIn'](d, 'slow', () => {
                    g['style']['display'] = f['style']['display'] = '', f['onclick'] = k, EDAll['style']['filter'] = '';
                }), g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(f, $__language_Array__['37961a65c26e1c7f4e9136c0e8073351']), e++;
                break;
            case 0x2b:
                oEffects['fadeOut'](d, 0.5), h(0x1, !![], () => {
                    f['onclick'] = k;
                }), g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['d003d174c383379768de0b60cbf25370']), e++;
                break;
            case 0x2c:
                PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), f['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['eccbdc4d8fb4066482b15a6875722f0c'],
                    'font_size': 0x12
                })[0x0] + '</p>', e++;
                break;
            case 0x2d:
                g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), f['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': '……emm……',
                    'font_size': 0x12
                })[0x0] + '</p>', e++;
                break;
            case 0x2e:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), f['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['b37aaae578962affe325996ce5892073'],
                    'font_size': 0x12
                })[0x0] + '</p>', e++;
                break;
            case 0x2f:
                PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(f, $__language_Array__['f8937af6308345c97a9bff9188682909']), e++;
                break;
            case 0x30:
                g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['7c82297cf320578e9a1cca90692b3d4c']), e++;
                break;
            case 0x31:
                f['onclick'] = null, g['style']['display'] = f['style']['display'] = 'none', oEffects['fadeIn'](d, 'slow', () => {
                    g['style']['display'] = f['style']['display'] = '', f['onclick'] = k, EDAll['style']['filter'] = '';
                }), g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['74d1d07ca9560a04b4e3e64cd91cd162']), e++;
                break;
            case 0x32:
                PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(f, '……'), e++;
                break;
            case 0x33:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['cb58f69a4594400935d79622a94462b6']), e++;
                break;
            case 0x34:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['dcc55c5a436446091ee62f0ec9d5d610']), e++;
                break;
            case 0x35:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['ebd0f92320de11f6c04db0bd4568a552']), e++;
                break;
            case 0x36:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['522d790aa4c8b0451ee4beda11e4332a']), e++;
                break;
            case 0x37:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['8fabf0e3347cd07697803e49ea86a244']), e++;
                break;
            case 0x38:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['a841367e2034b635fd05f9e02278e8db']), e++;
                break;
            case 0x39:
                ClearChild(f, g), ClearChild(c), oEffects['fadeOut'](d, 'slow', l => {
                    ClearChild(l), a();
                });
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
            0x1
        ],
        [
            oZombie,
            0x1,
            0x1
        ],
        [
            oConeheadZombie,
            0x2,
            0x1
        ],
        [
            oBucketheadZombie,
            0x2,
            0x1
        ],
        [
            oPushIceImp,
            0x2,
            0x6
        ],
        [
            oSkatingZombie,
            0x2,
            0x1
        ],
        [
            oNewspaperZombie,
            0x1,
            0x1
        ],
        [
            oMembraneZombie,
            0x3,
            0x1
        ]
    ],
    'FlagNum': 0x18,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x2,
            0x3,
            0x4,
            0x5,
            0x7,
            0x9,
            0xa,
            0xf,
            0x14,
            0x17,
            0x18
        ],
        'a2': [
            0x5,
            0x4,
            0x3,
            0x2,
            0x1,
            0xa,
            0xf,
            0x14,
            0x19,
            0x32,
            0x3c,
            0x46
        ]
    },
    'FlagToEnd'() {
        let a = 0x0, b = NewEle('DivTeach', 'div', 'left:415px', 0x0, EDAll), c = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
        (function e() {
            b['onclick'] = e;
            switch (a) {
            case 0x0:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['0c922e676a9568bf21c7d518386adc2a']), a++;
                break;
            case 0x1:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['aae7ea864dcf9400fadc10c85d571786']), a++;
                break;
            case 0x2:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['22c8b91298c655a6b3c6eeec9e4470a6']), a++;
                break;
            case 0x3:
                PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, '……'), a++;
                break;
            case 0x4:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['02c04bb56318a24280d4b8e9c4eb6d42']), a++;
                break;
            case 0x5:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['45bb921e2de773b2830c50309e52d430']), a++;
                break;
            case 0x6:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['36f1e51d29c69a68ad2df91f31203120']), a++;
                break;
            case 0x7:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['8f13ddfb2b6b22e55bcfbff237ce40e7']), a++;
                break;
            case 0x8:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['6eec8ce2dfdec336934245a5f2b15a1d']), a++;
                break;
            case 0x9:
                PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['7ee8cba7ada9d78ac0bab0459cdd2ff7']), a++;
                break;
            case 0xa:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['c1d857fda3ec01b62ae0ea2ebfd8b939']), a++;
                break;
            case 0xb:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['eb673d847f2dc5626294a601e41c4447']), a++;
                break;
            case 0xc:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['ef51c68d7d4a1f11dd995cbf5cc5ac49']), a++;
                break;
            case 0xd:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['618b73ef42ba033400a3ed53566f4222']), a++;
                break;
            case 0xe:
                PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['e802503620edef9c4943a5fdc162428d']), a++;
                break;
            case 0xf:
                PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(b, $__language_Array__['071149fd937386235ed25504876e08bb']), a++;
                break;
            case 0x10:
                ClearChild(b, c), d();
            }
        }());
        function d() {
            oS['DefaultFlagToEnd']();
        }
    }
});