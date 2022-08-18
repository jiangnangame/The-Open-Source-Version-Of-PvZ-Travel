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
        oMiracleImitater,
        oJalapeno
    ],
    'ZName': [
        oZombie,
        oSkatingZombie,
        oMakeRifterZombie,
        oZomboni,
        oStrollZombie,
        oMembraneZombie,
        oFootballZombie
    ],
    'LevelName': $__language_Array__['488b842865e8429742af5a4488b0fc34'],
    'LoadMusic': 'Bgm_Polar_11_NPC_3',
    'StartGameMusic': 'Bgm_Polar_Fight_' + (0x2 + Math['round'](Math['random']() * 0x2)),
    'DKind': 0x0,
    'SunNum': 0x12c,
    'LoadAccess'(a) {
        for (let e = 0x6; e < 0xa; e++) {
            for (let f = 0x1; f < 0x6; f++) {
                f % 0x2 === 0x0 && CustomSpecial(oRifter, f, e);
            }
        }
        for (let g = 0x1; g < 0x6; g++) {
            CustomSpecial(oRifter, 0x3, g);
        }
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll), NewEle('PolarFire2', 'div', 0x0, { 'className': 'PolarFire' }, Ground), NewEle('PolarFire', 'div', 0x0, { 'className': 'PolarFire' }, Ground);
        let b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:rgba(0,0,0,0);opacity:1;', 0x0, EDAll), c = NewEle('effect' + Math['random'](), 'div', 'font-size:28px;position:absolute;color:white;text-align:center;line-height:600px;z-index:257;width:900px;height:600px;opacity:0;', 0x0, EDAll);
        oEffects['Animate'](b, { 'background': 'rgba(0,0,0,1)' }, 'slow', 'linear', () => {
            c['innerText'] = $__language_Array__['b5db327479b1ac6dd4ac5454641548f6'], oEffects['fadeIn'](c, 0x2, () => {
                oSym['addTask'](0x64, function () {
                    oEffects['fadeOut'](b, 0x2), oEffects['fadeOut'](c, 0x2, () => {
                        ClearChild(b, c), d();
                    });
                });
            });
        });
        function d() {
            let h = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), i = 0x0, j = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), k = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function l() {
                j['onclick'] = l;
                switch (i) {
                case 0x0:
                    j['onclick'] = null, k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, '……'), oEffects['fadeIn'](h, 'slow', () => j['onclick'] = l), i++;
                    break;
                case 0x1:
                    PlayAudio('Zomboss2'), innerText(j, $__language_Array__['57bfd2477f6f57d0e1fbab7ddc9d2fba']), i++;
                    break;
                case 0x2:
                    PlayAudio('Zomboss2'), innerText(j, $__language_Array__['78b77598814f0f207c963b8019764a03']), i++;
                    break;
                case 0x3:
                    PlayAudio('Zomboss3'), innerText(j, $__language_Array__['2eb7e679b0237104d1266316b82c6b9c']), i++;
                    break;
                case 0x4:
                    k['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['af2e2b587c7f2f96759bcb5d1316b164']), i++;
                    break;
                case 0x5:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(j, '……'), i++;
                    break;
                case 0x6:
                    PlayAudio('Zomboss2'), innerText(j, $__language_Array__['630be4031854aeb07ba9456af78dd374']), i++;
                    break;
                case 0x7:
                    k['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['fa7ffb8018006588805017efc16101fb']), i++;
                    break;
                case 0x8:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, '……'), i++;
                    break;
                case 0x9:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['70dcf65e98300e1192e097c9c408d687']), i++;
                    break;
                case 0xa:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, $__language_Array__['508b84b8f86014c7d5a09611fa65c57e']), i++;
                    break;
                case 0xb:
                    PlayAudio('Zomboss3'), innerText(j, '……'), i++;
                    break;
                case 0xc:
                    PlayAudio('Zomboss3'), innerText(j, $__language_Array__['915218016a31de88aaca635f9fc43802']), i++;
                    break;
                case 0xd:
                    k['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['9c24ee055811e259bd00caf3bf60eb2b']), i++;
                    break;
                case 0xe:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['0fe8029a852615b9d6215be6f9434e5b']), i++;
                    break;
                case 0xf:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['d86f7fb1b268fd92d22c89ca010ad6f4']), i++;
                    break;
                case 0x10:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['21bf36850d528eec8ee3d868ba2121f7']), i++;
                    break;
                case 0x11:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, '……'), i++;
                    break;
                case 0x12:
                    PlayAudio('Zomboss1'), innerText(j, $__language_Array__['90049512a9a91598c5d574d38841a271']), i++;
                    break;
                case 0x13:
                    k['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['b048d3a95326e5f98155ec583ae78cfb']), i++;
                    break;
                case 0x14:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['804e87a1730cad6cb93b52e679c30083']), i++;
                    break;
                case 0x15:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['65b63503ffde4689116b0dd515dc54d0']), i++;
                    break;
                case 0x16:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['050adff8a7fee0a7e571be29fc08f23a']), i++;
                    break;
                case 0x17:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(j, $__language_Array__['6168acd445bfcbc53950cf2bd8a2e444']), i++;
                    break;
                case 0x18:
                    k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, $__language_Array__['e309ce27e11795ba9d5177fe4b4c1c2d']), i++;
                    break;
                case 0x19:
                    j['onclick'] = null, PlayAudio('Zomboss1'), innerText(j, $__language_Array__['3af1bba99e91b15584aa4e8281788249']), oEffects['fadeOut'](h, 'slow', () => j['onclick'] = l), i++;
                    break;
                case 0x1a:
                    k['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(j, $__language_Array__['2adcf0db05ef88b0981686928327abef']), i++;
                    break;
                case 0x1b:
                    PlayAudio('crazydavelong1'), innerText(j, $__language_Array__['c8d2a073bd24d8bb387762fdaabb8e0f']), i++;
                    break;
                case 0x1c:
                    PlayAudio('crazydavelong2'), innerText(j, $__language_Array__['2c0efbf2af64787ea5223431bd24d516']), i++;
                    break;
                case 0x1d:
                    j['onclick'] = null, k['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(j, $__language_Array__['26ac769406df8c127490f6d0ba1b7b9c']), oEffects['fadeIn'](h, 'slow', () => j['onclick'] = l), i++;
                    break;
                case 0x1e:
                    PlayAudio('Zomboss3'), innerText(j, $__language_Array__['8416b93c85c55d0408b2c42fe7dbb9da']), i++;
                    break;
                case 0x1f:
                    ClearChild(j, k), oEffects['fadeOut'](h, 'slow', m => {
                        ClearChild(m), a();
                    });
                }
            }());
        }
    }
}, {
    'AZ': [
        [
            oZombie,
            0x4,
            0x2,
            [0x2]
        ],
        [
            oStrollZombie,
            0x3,
            0x2,
            [0x2]
        ],
        [
            oSkatingZombie,
            0x2,
            0x3,
            [0x3]
        ],
        [
            oMakeRifterZombie,
            0x2,
            0xa,
            [
                0xa,
                0x12
            ]
        ],
        [
            oMembraneZombie,
            0x1,
            0x5,
            [
                0x5,
                0x12
            ]
        ],
        [
            oFootballZombie,
            0x1,
            0x7,
            [
                0x7,
                0x12
            ]
        ],
        [
            oZomboni,
            0x1,
            0x1,
            [
                0x1,
                0xa,
                0x12
            ]
        ]
    ],
    'FlagNum': 0x12,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x2,
            0x4,
            0x5,
            0x9,
            0xa,
            0xf,
            0x10,
            0x11
        ],
        'a2': [
            0x2,
            0x4,
            0x6,
            0xa,
            0xe,
            0x10,
            0x14,
            0x18,
            0x23
        ]
    },
    'FlagToEnd'() {
        SelectModal('Polar21-1');
    }
});