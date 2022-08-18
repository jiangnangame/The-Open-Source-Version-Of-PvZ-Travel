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
        oMonotropa
    ],
    'ZName': [
        oBucketheadZombie,
        oFootballZombie,
        oStrollZombie,
        oPushIceImp
    ],
    'PicArr': [
        'images/interface/Polar.webp',
        'images/interface/Marsh.webp'
    ],
    'LevelName': $__language_Array__['ada6eaf26d0e3b65af4baef5b7f6f812'],
    'LoadMusic': 'Bgm_Polar_Ready_1',
    'StartGameMusic': 'Bgm_Polar_Fight_1',
    'AudioArr': ['Bgm_Polar_3_NPC'],
    'LoadAccess'(a) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '2' : '4') + '.webp', 'left:' + (oS['DKind'] ? 0x46b : 0x44c) + 'px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask' + (oS['DKind'] ? '1' : '3') + '.webp', 'left:167px;top:546px;', EDAll), NewEle(0x0, 'div', 'left:570px;', { 'className': 'Mould' }, $('tGround'));
        for (let e = 0x1, f = 0x6; e < f; e++) {
            CustomSpecial(oObstacle, e, 0x5);
        }
        for (let g = 0x6; g < 0xa; g++) {
            for (let h = 0x1; h < 0x6; h++) {
                CustomSpecial(oRifter, h, g);
            }
        }
        let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function i() {
            c['onclick'] = i;
            switch (b) {
            case 0x0:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['cc7f52951094d474dfc132de8e94cd25']), b++;
                break;
            case 0x1:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, '……'), b++;
                break;
            case 0x2:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['98bdd07620471f9c75a7acd9aecebe3b']), b++;
                break;
            case 0x3:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['3cf7ac2c49daecf4e54afbd424cff418']), b++;
                break;
            case 0x4:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['2fab5de97f1ef7f426cfd5b28b2f937f']), b++;
                break;
            case 0x5:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['02c11e87f5d35537910d010f8ec49e90']), b++;
                break;
            case 0x6:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['70d79be3b29270173bbef2da2118387c']), b++;
                break;
            case 0x7:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['9f382248f77733db1d5bf57a17db3cf6']), b++;
                break;
            case 0x8:
                PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['046c354bb29964481b0cd287218eb809']), c['style']['fontSize'] = '16px', b++;
                break;
            case 0x9:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['58c773ea21d4652688c0945c37288553']), c['style']['fontSize'] = '18px', b++;
                break;
            case 0xa:
                StopMusic(), PlayMusic(oS['LoadMusic'] = 'Bgm_Polar_3_NPC'), PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['6961d1c488a464c4bb88bf7e72b7d8cd']), b++;
                break;
            case 0xb:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['5ba782d172e10b319bffe6bb477ef696']), b++;
                break;
            case 0xc:
                PlayAudio('crazydavelong2'), innerText(c, $__language_Array__['8813d3221fae9f079a27fb7ecc1efb2f']), b++;
                break;
            case 0xd:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['998fcb161d025eb4ed0c68026bc91485']), b++;
                break;
            case 0xe:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['1013a0d9269d747af6109fbade38b3b7']), b++;
                break;
            case 0xf:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['b1089dfd04f7db679613be0ac4a26b06']), b++;
                break;
            case 0x10:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(c, $__language_Array__['3cf7ac2c49daecf4e54afbd424cff418']), b++;
                break;
            case 0x11:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(c, $__language_Array__['e376914fb386a1a3a528eb0dd3a77254']), b++;
                break;
            case 0x12:
                d['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(c, $__language_Array__['1730625a835ef5c192fcbf64d2610193']), b++;
                break;
            case 0x13:
                ClearChild(c, d), oSym['addTask'](0x1e, a);
            }
        }());
    }
}, {
    'AZ': [
        [
            oBucketheadZombie,
            0x3,
            0x2,
            [
                0x2,
                0xa,
                0x12
            ]
        ],
        [
            oFootballZombie,
            0x2,
            0x8,
            [
                0xa,
                0x12
            ]
        ],
        [
            oStrollZombie,
            0x1,
            0x8,
            [
                0x8,
                0xa,
                0x12
            ]
        ],
        [
            oPushIceImp,
            0x2,
            0x1,
            [
                0x1,
                0xa,
                0x12
            ]
        ]
    ],
    'FlagNum': 0xe,
    'FlagToSumNum': {
        'a1': [
            0x1,
            0x3,
            0x5,
            0x8,
            0xa,
            0xd
        ],
        'a2': [
            0x3,
            0x1,
            0x6,
            0x14,
            0xf,
            0x14,
            0x2d
        ]
    },
    'FlagToEnd': function () {
        let a = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:1300px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), b = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:1300px;height:600px;background:url(images/interface/Marsh.webp);opacity:0;', 0x0, EDAll), c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:3000;width:1300px;height:600px;background:#000;opacity:0;pointer-events:none;', 0x0, EDAll), d = 0x0, e = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), f = NewImg('dDave', '', 'left:115px;top:81px', EDAll), g = ![], h = () => {
                g = !![], function j() {
                    SetStyle(EDAll, { 'marginLeft': -0x1c2 + 0x1 + 'px' }), setTimeout(k => {
                        SetStyle(EDAll, {
                            'marginLeft': '-450px',
                            'top': 0x1 + 'px'
                        }), setTimeout(l => SetStyle(EDAll, { 'top': 0x0 }), 0x14);
                    }, 0x14), g && setTimeout(j, 0x3c);
                }();
            };
        (function j() {
            e['onclick'] = j;
            switch (d) {
            case 0x0:
                e['onclick'] = null, f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(e, $__language_Array__['6c71500a1d8ce74030c536e440339d2d']), oEffects['fadeIn'](a, 'slow', () => e['onclick'] = j), d++;
                break;
            case 0x1:
                PlayAudio('Zomboss1'), innerText(e, $__language_Array__['11861a3a58361f6982a65bbaac1cb989']), d++;
                break;
            case 0x2:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['4b391a1d62076c601f265be5d0d2f733']), d++;
                break;
            case 0x3:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['9e9b1fbc834a259fb5de2c8b13a20dff']), d++;
                break;
            case 0x4:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(e, $__language_Array__['f1b404b2da2b1bf9738db1a84ea46149']), d++;
                break;
            case 0x5:
                PlayAudio('Zomboss2'), innerText(e, $__language_Array__['9c8ddf618928388b1298682aa95369ab']), d++;
                break;
            case 0x6:
                PlayAudio('Zomboss2'), innerText(e, $__language_Array__['fbd70fe112c3a878feb14f705c443a20']), d++;
                break;
            case 0x7:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['31127b82144e51a0213cdbebaa139c95']), d++;
                break;
            case 0x8:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(e, $__language_Array__['1d701c747938a976561243f7ec6b9f1c']), d++;
                break;
            case 0x9:
                PlayAudio('Zomboss1'), innerText(e, $__language_Array__['762b5d396c808433062998b27ccd00b0']), d++;
                break;
            case 0xa:
                e['onclick'] = null, f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(e, $__language_Array__['6bc85ffd08878f0f65ebd557d477fed0']), d++, oEffects['Animate'](a, { 'background': 'black' }, 'slow', 'linear', () => {
                    oEffects['Animate'](b, { 'opacity': 0x1 }, 'slow', 'linear', () => e['onclick'] = j), h();
                }), oEffects['Animate'](c, { 'opacity': '0.5' }, 'slow');
                break;
            case 0xb:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(e, $__language_Array__['d2a78277381fd2d8803f1fe4fbb3c5de']), d++;
                break;
            case 0xc:
                PlayAudio('Zomboss2'), innerText(e, '......'), d++;
                break;
            case 0xd:
                PlayAudio('Zomboss1'), innerText(e, $__language_Array__['790cb4f1c676990874814c0d70833751']), d++;
                break;
            case 0xe:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(e, $__language_Array__['4d6bdcbe5cc9f10d5d4b1e84ee5e25a9']), d++;
                break;
            case 0xf:
                e['onclick'] = null, f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), g = ![], oEffects['Animate'](c, { 'opacity': '0' }, 'slow'), innerText(e, $__language_Array__['315ceacf4bbdebde85e2205f8b5f07f4']), oEffects['Animate'](b, { 'opacity': 0x0 }, 'slow', 'linear'), oEffects['Animate'](a, { 'background': 'white' }, 'slow', 'linear', () => e['onclick'] = j), d++;
                break;
            case 0x10:
                PlayAudio('Zomboss2'), innerText(e, $__language_Array__['334faf49a8b8b7f9a62bb6f10e8c0047']), e['onclick'] = null, setTimeout(j, 0xc8), d++;
                break;
            case 0x11:
                e['onclick'] = j, PlayAudio('Zomboss1'), innerText(e, $__language_Array__['62fa5d84c1230645c003de9cb4a364f1']), d++;
                break;
            case 0x12:
                PlayAudio('Zomboss2'), innerText(e, $__language_Array__['b75b6bf2ab069cb598a47882153961f1']), d++;
                break;
            case 0x13:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['b0e812ef7376c4613d344344d51a2991']), d++;
                break;
            case 0x14:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(e, '……'), d++;
                break;
            case 0x15:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, '……'), d++;
                break;
            case 0x16:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['e111624b602969f2c8a3ec6b9bfbc544']), d++;
                break;
            case 0x17:
                ClearChild(e, f), oEffects['fadeOut'](a, 'slow', k => {
                    ClearChild(k), i();
                });
            }
        }());
        function i() {
            let k = NewEle('', 'div', 'position:absolute;left:300px;top:300px;overflow:visible;width:167px;height:108px;', {}, EDAll), l = NewImg('PointerUD2', 'images/interface/down.gif', 'left:67px;top:-50px;', k);
            NewImg('imgSF', 'images/interface/Conical_flask.png', 'left:0px;top:-124px', k, {
                'onclick': function () {
                    ClearChild(l), GetNewProp(this, 'Conical_flask', $__language_Array__['48baa4d03b1104c8afd90cd4fca58d93'], $__language_Array__['cfa40a5907a39689d56d164bb309d366'], NextLevel(), '60px', '360px');
                }
            }), ShowWinItem(k);
        }
    }
});