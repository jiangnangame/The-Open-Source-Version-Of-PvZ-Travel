/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oJalapeno,
        oTorchwood,
        oPepper,
        oPeashooter,
        oSnowPea
    ],
    'ZName': [
        oSkatingZombie,
        oSadakoZombie,
        oPushIceImp,
        oStrollZombie,
        oCigarZombie,
        oFootballZombie,
        oNewspaperZombie
    ],
    'LevelName': $__language_Array__['d0f563f5be2374090a2187bfff9855da'],
    'PicArr': [
        'images/Props/PolarPlots/Dave_CloseEye.png',
        'images/Props/PolarPlots/Dave_CloseMouse.png',
        'images/Props/PolarPlots/Dave_CloseEyeMouse.png'
    ],
    'LoadMusic': 'Bgm_Industry25_Ready',
    'StartGameMusic': 'Bgm_Polar_Fight_' + (0x2 + Math['round'](Math['random']() * 0x2)),
    'AudioArr': ['Bgm_Polar_4_NPC'],
    'DKind': 0x0,
    'CanSelectCard': 0x0,
    'StaticCard': 0x0,
    'FixedProps': 'disabled',
    'LoadAccess'(a) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll), NewEle('PolarFire2', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll);
        for (let h = 0x1; h < 0x6; h++) {
            CustomSpecial(oRifter, h, 0x5);
        }
        let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), c = 0x0, d = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), e = NewImg('dDave', '', 'left:0;top:81px', EDAll), f = ![], g = ![];
        oSym['addTask'](0x2, function j() {
            if (f)
                return;
            else
                g ? e['style']['transform'] = 'translate(' + (Math['random']() * 0x2 - 0x1) + 'px,' + (Math['random']() * 0x2 - 0x1) + 'px)' : e['style']['transform'] = '', oSym['addTask'](0x2, j);
        }), function k() {
            d['onclick'] = k;
            switch (c) {
            case 0x0:
                d['onclick'] = null, e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['8e763adc1a3c308c26676fa96d471196']), oEffects['fadeIn'](b, 'slow', () => d['onclick'] = k), c++;
                break;
            case 0x1:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['d3eb28b98c4387fcdd1fbe1dc066dae1']), c++;
                break;
            case 0x2:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['f7eccc1fe55cf066bf19af8845b6f0a0']), c++;
                break;
            case 0x3:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['941e04ec56a4f43ca9d0bd91e84c5afe']), c++;
                break;
            case 0x4:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['37269cb9f45cd8df5dbfd3f213184163']), c++;
                break;
            case 0x5:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, '……'), c++;
                break;
            case 0x6:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['1f9103ff96afeed853a534844d9351b3']), c++;
                break;
            case 0x7:
                PlayAudio('Zomboss1'), innerText(d, $__language_Array__['309d664354379de7adf9a25b760a0d66']), c++;
                break;
            case 0x8:
                PlayAudio('Zomboss1'), innerText(d, $__language_Array__['b9dd10c32f2b19c836c81881f4471dc6']), c++;
                break;
            case 0x9:
                PlayAudio('Zomboss3'), innerText(d, $__language_Array__['c23aefd37619981e3404212024d8f5fe']), c++;
                break;
            case 0xa:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['3e43b1fb0086a7bb53c9e6118803ef93']), c++;
                break;
            case 0xb:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(d, $__language_Array__['c63a18a46f8ba6988fba166bf08ec84c']), c++;
                break;
            case 0xc:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['f7d0eaa6e929466d3c25b54530838580']), c++;
                break;
            case 0xd:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['737d00facc0ac5df2cad9681701c1a06']), c++;
                break;
            case 0xe:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['25fc43dad348c78dccf49aee1ef2d278']), c++;
                break;
            case 0xf:
                PlayAudio('Zomboss1'), innerText(d, $__language_Array__['e2dc0545832939233ca8ff1ee99f0dda']), c++;
                break;
            case 0x10:
                PlayAudio('Zomboss2'), innerText(d, $__language_Array__['50993666b7308f88ff9a4fc9d386c818']), c++;
                break;
            case 0x11:
                PlayAudio('Zomboss3'), innerText(d, $__language_Array__['f5e2bc07654419bb3a86746c8adb9620']), c++;
                break;
            case 0x12:
                PlayAudio('Zomboss2'), innerText(d, '……'), c++;
                break;
            case 0x13:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, '……'), c++;
                break;
            case 0x14:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['e1bbac83335db4b7152acf20eeee94b3']), c++;
                break;
            case 0x15:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['610a4d0d0ce53ab3010438f47f74c6f0']), c++;
                break;
            case 0x16:
                d['onclick'] = null, StopMusic(), PlayMusic(oS['LoadMusic'] = 'Bgm_Polar_4_NPC'), e['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(d, $__language_Array__['8731dcf3cb909f18853c3f6dbef96049']), oEffects['ScreenShake'](), oEffects['fadeOut'](b, 'slow', () => d['onclick'] = k), c++;
                break;
            case 0x17:
                PlayAudio('crazydavelong2'), e['src'] = 'images/Props/PolarPlots/Dave_CloseEyeMouse.png', g = !![], e['style']['opacity'] = 0x0, e['style']['filter'] = 'brightness(0%)', d['onclick'] = null, oEffects['Animate'](e, {
                    'opacity': '',
                    'filter': ''
                }, 'slow', 'linear', () => d['onclick'] = k), innerText(d, $__language_Array__['a3971c91a6663cd137255479ab5e1793']), c++;
                break;
            case 0x18:
                PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['9a2ebc3b7423cb54e19369cba4f65b3a']), c++;
                break;
            case 0x19:
                g = ![], PlayAudio('crazydavelong1'), e['src'] = 'images/interface/Dave.png', innerText(d, $__language_Array__['483dd2a5f4241fb3e24adc94d4980d32']), c++;
                break;
            case 0x1a:
                PlayAudio('crazydavelong1'), innerText(d, $__language_Array__['8bbe5c51f8fbd9b92ebca2dedcf8684a']), c++;
                break;
            case 0x1b:
                f = !![], ClearChild(d, e), ClearChild(b), oSym['addTask'](0x1e, a);
            }
        }();
    },
    'StartGame': a => oMiniGames['ConveyorBelt'](oS['PName'], 0x1f4, 0x4)
}, {
    'AZ': [
        [
            oSkatingZombie,
            0x2,
            0x2
        ],
        [
            oSadakoZombie,
            0x2,
            0x1,
            [0x1]
        ],
        [
            oPushIceImp,
            0x1,
            0x2
        ],
        [
            oStrollZombie,
            0x2,
            0x2
        ],
        [
            oCigarZombie,
            0x1,
            0x2
        ],
        [
            oFootballZombie,
            0x1,
            0x8
        ],
        [
            oNewspaperZombie,
            0x2,
            0x1,
            [0x1]
        ]
    ],
    'FlagNum': 0x12,
    'FlagToSumNum': {
        'a1': [
            0x3,
            0x5,
            0x9,
            0xa,
            0xd,
            0x11
        ],
        'a2': [
            0x3,
            0xc,
            0x14,
            0x18,
            0x1e,
            0x24,
            0x3c
        ]
    },
    'FlagToEnd'() {
        let a = 0x0, b = NewEle('DivTeach', 'div', 'left:415px', 0x0, EDAll), c = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
        (function e() {
            b['onclick'] = e;
            switch (a) {
            case 0x0:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['0d7c0bd99072b9274c7e288de2727bcb']), a++;
                break;
            case 0x1:
                PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['1cdfd0943e5b451412457965909ba137']), a++;
                break;
            case 0x2:
                PlayAudio('crazydavelong1'), innerText(b, $__language_Array__['20fd0dfa6e3bc495c705be8346b58058']), a++;
                break;
            case 0x3:
                PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['a4076ed4fa2f81ab8c8124490e7f24f2']), a++;
                break;
            case 0x4:
                PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['d5fbf0c39acd8eeb97cf6134972bdc16']), a++;
                break;
            case 0x5:
                PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['d19e7a21f7de319287af4429984e95e3']), a++;
                break;
            case 0x6:
                PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['6e6358d1d47a89d9fa88232bc99d259b']), a++;
                break;
            case 0x7:
                PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['e15b59ad87d9cc88907d1cc95ef01263']), a++;
                break;
            case 0x8:
                PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['f952bc02c1a768f8462e63eb12c4548e']), a++;
                break;
            case 0x9:
                PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['3b09141cce9253b31fc3b7ae6efbd18e']), a++;
                break;
            case 0xa:
                PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['9e36c5c9671e8fae751910159fe620f9']), a++;
                break;
            case 0xb:
                PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['f62b6be0754be11daef6c1c1f484d0b0']), a++;
                break;
            case 0xc:
                PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['64388b661e8f68a4f5442a14fb3d14be']), a++;
                break;
            case 0xd:
                PlayAudio('crazydavelong1'), innerText(b, $__language_Array__['7ee0129bc3fe72e5731f70c5e608b8ae']), b['style']['fontSize'] = '24px', a++;
                break;
            case 0xe:
                PlayAudio('crazydavelong1'), b['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['726209b827f80ffd76c1982702b1b54b'],
                    'font_size': 0x12
                })[0x0] + '</p>', b['style']['fontSize'] = '18px', a++;
                break;
            case 0xf:
                PlayAudio('crazydavelong1'), innerText(b, $__language_Array__['48ab2f09a409244450a2ec50842efb3b']), a++;
                break;
            case 0x10:
                PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['00c310ad86c995d629ae8c5450d43734']), a++;
                break;
            case 0x11:
                PlayAudio('crazydavelong2'), PlayMusic(oS['StartGameMusic'] = 'Bgm_Industry25_Ready'), innerText(b, $__language_Array__['b3ea6ea01de2fb2302742d660d3d914b']), a++;
                break;
            case 0x12:
                PlayAudio('crazydavelong1'), innerText(b, $__language_Array__['42851c927fce811f6632736ebc9d09e1']), a++;
                break;
            case 0x13:
                PlayAudio('crazydavelong1'), innerText(b, $__language_Array__['fb642aac6e59b9fddb97078727ed8815']), a++;
                break;
            case 0x14:
                PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['4f434ed6df3290fbda70936c1a738372']), a++;
                break;
            case 0x15:
                PlayAudio('crazydavelong3'), b['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['b68a9584f7efc60b09dda6a50eacaa04'],
                    'font_size': 0x18
                })[0x0] + '</p>', b['style']['fontSize'] = '24px', a++;
                break;
            case 0x16:
                PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['fd0b4cb79511833a55286fb7d8d4f7f2']), b['style']['fontSize'] = '18px', a++;
                break;
            case 0x17:
                PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['cc98300277c466cf0f48dd9630e373b9']), a++;
                break;
            case 0x18:
                PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['dfe76a0646df53a3ccbead2165eece95']), a++;
                break;
            case 0x19:
                PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['f1e350cd5e5dc7084a78ea04e67bd7e8']), a++;
                break;
            case 0x1a:
                PlayAudio('crazydavelong1'), innerText(b, $__language_Array__['aa400a58d377dbc1d0db6e9768bf0009']), a++;
                break;
            case 0x1b:
                PlayAudio('crazydavelong1'), innerText(b, $__language_Array__['b79e73b50974d26ea8363c4ee3c0b09b']), a++;
                break;
            case 0x1c:
                PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['8420df86cb1aa18c9eda9cd92d227392']), a++;
                break;
            case 0x1d:
                PlayAudio('crazydavelong1'), innerText(b, $__language_Array__['88db9bbf84c680874d5701209a10df50']), a++;
                break;
            case 0x1e:
                PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['cf3d664758900055c0602f1e23c34026']), a++;
                break;
            case 0x1f:
                PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['ed1185d8259b84802f374e31323c8b4e']), a++;
                break;
            case 0x20:
                PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['3e7dea5e56f02ccaafb157b05d2ba088']), a++;
                break;
            case 0x21:
                ClearChild(b, c), setTimeout(d, 0x3e8);
            }
        }());
        function d() {
            ShowWinItem(GetPlantCardDom(oTorchwood));
        }
    }
});