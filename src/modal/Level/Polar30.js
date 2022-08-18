/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [
        oStoneFlower,
        oRadish,
        oSnowPea,
        oRepeater,
        oCherryBomb,
        oTallNut,
        oFumeShroom,
        oSporeShroom,
        oBambooUncle,
        oDoomShroom,
        oBegonia,
        oPepper,
        oIceAloe,
        oSpikeweed,
        oKiwibeast,
        oMiracleImitater,
        oJalapeno
    ],
    'ZName': [
        oBossB,
        oZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oBalloonZombie,
        oNewspaperZombie,
        oStrollZombie,
        oCigarZombie,
        oSkatingZombie,
        oMakeRifterZombie,
        oFootballZombie,
        oImp,
        oCaskZombie,
        oSadakoZombie,
        oIceBlock,
        oPushIceImp,
        oMembraneZombie
    ],
    'LevelName': $__language_Array__['892a0daba4a975de3643c2f2f715edf1'],
    'LoadMusic': 'Bgm_Polar_Noise',
    'StaticCard': 0x0,
    'CanSelectCard': 0x0,
    'DKind': 0x0,
    'InitLawnMover': a => {
    },
    'StartGameMusic': 'Fuben_Winter_Fight2',
    'FixedProps': 'disabled',
    'ControlFlagmeter': 0x0,
    'LoadAccess'(a) {
        NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll);
        let b = 0x0, c = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), d = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function e() {
            c['onclick'] = e;
            switch (b) {
            case 0x0:
                d['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['52c299234a5a7172dd49c309fa0cc0b7']), b++;
                break;
            case 0x1:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['264f3a8a53911f731822f6aa518f8b34']), b++;
                break;
            case 0x2:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['0db57778c47aff45b76cd2edb9691302']), b++;
                break;
            case 0x3:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['ddebfb01904d493d68e46628c17a74b7']), b++;
                break;
            case 0x4:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['83c273366338bd55e1d53e9443b6761f']), c['style']['fontSize'] = '24px', c['style']['fontWeight'] = 'bold', b++;
                break;
            case 0x5:
                PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(c, '……'), c['style']['fontSize'] = '18px', c['style']['fontWeight'] = '', b++;
                break;
            case 0x6:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['1e30ceb7fe008b3bfa724cfb1becc858']), b++;
                break;
            case 0x7:
                PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(c, '……'), b++;
                break;
            case 0x8:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['68ac89290527a7af0f5d9b4bb3ff9b00']), b++;
                break;
            case 0x9:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['ed6fbe754ab4e9ea08b0b0805dbde139']), b++;
                break;
            case 0xa:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), c['innerHTML'] = $__language_Array__['744c19626cc67e1f49223f97455844be'], b++;
                break;
            case 0xb:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['bb44cdeac505e43b2533f8cb7972b528']), b++;
                break;
            case 0xc:
                PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(c, '……'), b++;
                break;
            case 0xd:
                PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['c56c91feb508a2b9a6cf590a8d254712']), b++;
                break;
            case 0xe:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['81434f3dce4a6af26f5f05107448f655']), c['onclick'] = () => {
                    b = 0x18, e(), c['onclick'] = e;
                }, oSym['addTask'](0x12c, () => {
                    b < 0x18 && e();
                }), b++;
                break;
            case 0xf:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['3d30b7ae9c507ef82a55cff1fb2b05dc']), oSym['addTask'](0xc8, () => {
                    b < 0x18 && e();
                }), b++;
                break;
            case 0x10:
                StopMusic(), PlayMusic(oS['LoadMusic'] = 'Bgm_Industry25_Plot1'), PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), c['onclick'] = e, innerText(c, $__language_Array__['af9408e1eef10ba6b295bd486a6f3499']), b++;
                break;
            case 0x11:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['a8af2a2855b3adee1940c7d8b075ea0a']), b++;
                break;
            case 0x12:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['5760df333e478abb22604665dd83a1fc']), b++;
                break;
            case 0x13:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['d852d79d721a8cb278ef968da5e0183e']), b++;
                break;
            case 0x14:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['f64b1beaf79eb58904d27092adb8cc21']), b++;
                break;
            case 0x15:
                PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(c, '……'), b++;
                break;
            case 0x16:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['51bb8bd2428828de4871c138e30e9182']), b++;
                break;
            case 0x17:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['b6213b3721f8757aca1b1f257ad8b182']), b = 0x21;
                break;
            case 0x18:
                StopMusic(), PlayMusic(oS['LoadMusic'] = 'Bgm_Industry25_Ready'), PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['8a0d6aea2ff76a43e0d8489e4bf2714c']), b++;
                break;
            case 0x19:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['952a4309656fe69b028b64f483c61d85']);
                Mobile ? b += 0x2 : b++;
                break;
            case 0x1a:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['9d869e34db7b843e4083f375d385bdf6']), b += 0x2;
                break;
            case 0x1b:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['9343049855e2708e824b6d8a619210bc']), b++;
                break;
            case 0x1c:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['ad3197d8933a45b603bccb3cf270bef5']), b++;
                break;
            case 0x1d:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['77011a21e081afa157f3988cf44caac1']), b++;
                break;
            case 0x1e:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['754ab71a792ba9757067ed81728879b9']), b++;
                break;
            case 0x1f:
                PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['81fbdca7e5d769e3acf3d13414be8870']), b++;
                break;
            case 0x20:
                PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(c, $__language_Array__['20f3d5e642e49a379f9cb9cdb8648999']), b++;
                break;
            case 0x21:
                ClearChild(c, d), oSym['addTask'](0x1e, a);
            }
        }());
    },
    'StartGame'() {
        oMiniGames['IceStorm'](0x1, 0x5, 0x0);
        for (let b = 0x1; b <= 0x5; ++b) {
            for (let c = 0x8; c < 0xa; ++c) {
                CustomSpecial(oRifter, b, c), CustomSpecial(oBegonia, b, c), oSym['addTask'](0x1, d => CustomSpecial(oRifter, b, c));
            }
        }
        oSym['addTask'](0x1194, function d() {
            if (Math['random']() * 0x3 < 0x2) {
                const e = Math['floor'](Math['random']() * 0x5) + 0x1;
                oMiniGames['IceStorm'](e, e, Math['floor'](Math['random']() * 0x3) + 0x1);
            } else {
                const f = [
                        [
                            0x1,
                            0x4
                        ],
                        [
                            0x3,
                            0x4
                        ],
                        [
                            0x4,
                            0x5
                        ],
                        [
                            0x1,
                            0x3
                        ],
                        [
                            0x3,
                            0x5
                        ],
                        [
                            0x2,
                            0x4
                        ],
                        [
                            0x1,
                            0x2
                        ],
                        [
                            0x2,
                            0x3
                        ]
                    ], g = f[Math['floor'](Math['random']() * f['length'])];
                oMiniGames['IceStorm'](g[0x0], g[0x1], Math['floor'](Math['random']() * 0x2) + 0x1);
            }
            oSym['addTask'](Math['random']() * 0xfa0 + 0x1b58, d);
        }), oMiniGames['ConveyorBelt'](undefined, 0x12c, 0x1, [
            oSporeShroom,
            oSporeShroom,
            oSporeShroom,
            oSporeShroom,
            oCherryBomb,
            oDoomShroom,
            oDoomShroom
        ]);
        let a = PlaceZombie(oBossB, 0x4, 0x8, 0x0);
        oFlagContent['init']({
            'MeterType': 'LeftBar\x20RedBar',
            'HeadType': 'BOSSHead',
            'fullValue': a['HP'],
            'curValue': 0x0
        })['show']()['update']({
            'curValue': a['HP'],
            'animConfig': {
                'duration': 0x1 / oSym['NowSpeed'],
                'ease': 'ease-out'
            }
        });
    }
}, {
    'AZ': [
        [
            oZombie,
            0x1,
            0x1
        ],
        [
            oConeheadZombie,
            0x1,
            0x1
        ],
        [
            oBucketheadZombie,
            0x1,
            0x1
        ],
        [
            oBalloonZombie,
            0x1,
            0x1
        ],
        [
            oNewspaperZombie,
            0x1,
            0x1
        ],
        [
            oStrollZombie,
            0x1,
            0x1
        ],
        [
            oCigarZombie,
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
            oFootballZombie,
            0x1,
            0x1
        ],
        [
            oImp,
            0x1,
            0x1
        ],
        [
            oCaskZombie,
            0x1,
            0x1
        ],
        [
            oSadakoZombie,
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
            0x1,
            0x1
        ]
    ],
    'FlagNum': 0x1,
    'FlagToSumNum': {
        'a1': [0x1],
        'a2': [0x0]
    },
    'FlagToEnd'() {
        SelectModal('Polar30-1');
    }
});