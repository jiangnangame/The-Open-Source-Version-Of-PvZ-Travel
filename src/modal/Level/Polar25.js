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
        oCaskZombie,
        oSadakoZombie,
        oMakeRifterZombie,
        oSkatingZombie,
        oStrollZombie,
        oZomboni,
        oFootballZombie,
        oBucketheadZombie,
        oCigarZombie
    ],
    'LevelName': $__language_Array__['dfd402a18a8f33d03109cd4306adc861'],
    'LoadMusic': 'Bgm_Polar_25_NPC_1',
    'DKind': 0x0,
    'StartGame': a => oMiniGames['ProtectPlants']({ 'oApple': 0x5 }),
    'LoadAccess'(a) {
        PlayAudio('Bgm_Polar_Noise', 0x1), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll), (NewEle('PolarFire2', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround'))), [
            [
                0x2,
                0x4
            ],
            [
                0x2,
                0x6
            ],
            [
                0x4,
                0x4
            ],
            [
                0x4,
                0x6
            ],
            [
                0x3,
                0x5
            ]
        ]['forEach'](e => {
            const [f, g] = e;
            CustomSpecial(oApple, f, g), NewEle(0x0, 'div', 'left:\x20' + (0x8c + (g - 0x1) * 0x4f) + 'px;top:' + (0x50 + 0x64 * (f - 0x1)) + 'px;', { 'className': 'sos' }, FightingScene);
        }), [
            [
                0x2,
                0x5
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
                0x3,
                0x6
            ]
        ]['forEach'](e => CustomSpecial(oRifter, ...e));
        function b(e) {
            let f = NewEle('effect' + Math['random'](), 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:rgba(0,0,0,0);opacity:1;', 0x0, EDAll), g = NewEle('effect' + Math['random'](), 'div', 'font-size:28px;position:absolute;color:black;text-align:center;line-height:600px;z-index:257;width:900px;height:600px;opacity:0;', 0x0, EDAll);
            oEffects['Animate'](f, { 'background': 'rgba(255,255,255,1)' }, 'slow', 'linear', () => {
                g['innerText'] = $__language_Array__['2b2414ea7ecc95aa7706b1b5a603d3f8'], oEffects['fadeIn'](g, 0x2, () => {
                    oSym['addTask'](0x64, function () {
                        oEffects['fadeOut'](f, 0x2), oEffects['fadeOut'](g, 0x2, () => {
                            ClearChild(f, g), e();
                        });
                    });
                });
            });
        }
        localStorage['getJsonItem']('JNG_TR_MarshRandomPlot', '84') ? c() : d();
        function c() {
            let e = 0x0, f = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), g = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function h() {
                f['onclick'] = h;
                switch (e) {
                case 0x0:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['2aa73b1eb887702b742f2f813ff635df']), e++;
                    break;
                case 0x1:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['53ace053f77257cd8b371d4e1d698882']), e++;
                    break;
                case 0x2:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['d13a8e249257f581de37f36cb0f4634a']), e++;
                    break;
                case 0x3:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(f, $__language_Array__['695d880cbf145ac1b185bc7b877cefe7']), e++;
                    break;
                case 0x4:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['a3f0ec4edbb88425c1fc597716b9b947']), e++;
                    break;
                case 0x5:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['5a08f6e71283557c53332f71823c9002']), e++;
                    break;
                case 0x6:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['130f13b8c7c294706e133c05db14ab0e']), e++;
                    break;
                case 0x7:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['6c6da655a0f5250e70bd57834da9cbc5']), e++;
                    break;
                case 0x8:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(f, $__language_Array__['b1d6b1eceedc4c3d0d90ef0bc63384a3']), e++;
                    break;
                case 0x9:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['59ec5456b932a7e6a71ddea74d75dc7c']), e++;
                    break;
                case 0xa:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['df76a8c7cac6039bf90d0434b4a7b829']), e++;
                    break;
                case 0xb:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['83f31b562f97e91b643d5bd9ea36a274']), e++;
                    break;
                case 0xc:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(f, $__language_Array__['4bf4d99291204c2d2f08e82362b33c3c']), e++;
                    break;
                case 0xd:
                    g['style']['display'] = f['style']['display'] = 'none', b(() => {
                        g['style']['display'] = f['style']['display'] = '', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2));
                    }), innerText(f, $__language_Array__['6456125314afd7af774bf2e51edfd12f']), e++;
                    break;
                case 0xe:
                    g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['f4c8211be039a9e253cfa83031a5be7d']), e++;
                    break;
                case 0xf:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, '……'), e++;
                    break;
                case 0x10:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['d14af9b9dcaa12b6f896acc9089120bd']), e++;
                    break;
                case 0x11:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['8d37f345148a83bd5814dbd8fce51f18']), e++;
                    break;
                case 0x12:
                    g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['4d4957f1c7dd2f0bedc33ce8649f31fc']), e++;
                    break;
                case 0x13:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['3d00e38c22b51bab2ae6852257febf7d']), e++;
                    break;
                case 0x14:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(f, $__language_Array__['de48b7d46bad67db927b832fd63d34d5']), e++;
                    break;
                case 0x15:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['81c6b6932028ab08198b0bbbdff02db8']), e++;
                    break;
                case 0x16:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['dbfa9e2213754a759b45aa71849d0d7f']), e++;
                    break;
                case 0x17:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['6ebf98dc0733e9d5c09a0308d5eea07a']), e++;
                    break;
                case 0x18:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['3b12cacdf449eeb0c7b41268555fee78']), e++;
                    break;
                case 0x19:
                    g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['f94f748afd73440c1c3fc37851c17abd']), e++;
                    break;
                case 0x1a:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), f['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['82858e83a9f5d2f524136ee5da28b267'],
                        'font_size': 0x18
                    })[0x0] + '</p>', f['style']['fontSize'] = '24px', e++;
                    break;
                case 0x1b:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['2238bf0b01b6bb7440eb8bf2ea6a0d86']), f['style']['fontSize'] = '18px', e++;
                    break;
                case 0x1c:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['2af94f5ba14bfe8981518a74647d7f39']), e++;
                    break;
                case 0x1d:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['f9174662626c35f4847cf2f80231c7a0']), e++;
                    break;
                case 0x1e:
                    ClearChild(f, g), oSym['addTask'](0x1e, a);
                }
            }());
        }
        function d() {
            let e = 0x0, f = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), g = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function h() {
                f['onclick'] = h;
                switch (e) {
                case 0x0:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['2aa73b1eb887702b742f2f813ff635df']), e++;
                    break;
                case 0x1:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdavelong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['f9b4a6f7686af4e04a15a375318f5b5c']), e++;
                    break;
                case 0x2:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['a3f0ec4edbb88425c1fc597716b9b947']), e++;
                    break;
                case 0x3:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['5a08f6e71283557c53332f71823c9002']), e++;
                    break;
                case 0x4:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['130f13b8c7c294706e133c05db14ab0e']), e++;
                    break;
                case 0x5:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['6ace86c08a35a5573479b5cf9d9534fe']), e++;
                    break;
                case 0x6:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['a3dd1fe22f9c7d9e6ff1426fbe16c118']), e++;
                    break;
                case 0x7:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['95a8f0553127f9317c921f6a26234820']), e++;
                    break;
                case 0x8:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(f, '……'), e++;
                    break;
                case 0x9:
                    g['style']['display'] = f['style']['display'] = 'none', b(() => {
                        g['style']['display'] = f['style']['display'] = '', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2));
                    }), innerText(f, '……'), e++;
                    break;
                case 0xa:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['10eb29e4d203eede0a934b820be95397']), e++;
                    break;
                case 0xb:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['c085936961dee620b0fcf5ffdd2e367e']), e++;
                    break;
                case 0xc:
                    g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['c5dec71f5c916f698d815fbdc4564cc5']), e++;
                    break;
                case 0xd:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['55df70aafb9c46491227e3ce99d8e3a8']), e++;
                    break;
                case 0xe:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['eec90a613b9e4ec2f9446701ab07aef5']), e++;
                    break;
                case 0xf:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveshort' + Math['floor'](0x1 + Math['random']() * 0x2)), innerText(f, $__language_Array__['3443d2e8bac9ad4bded75db8d6db9c30']), e++;
                    break;
                case 0x10:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['967b06fac1ffa829b58b88bff9830363']), e++;
                    break;
                case 0x11:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['664d7c0ecc921fab88cd8a3566a10c2c']), e++;
                    break;
                case 0x12:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['0e5d633ed052d16a66b87c086a96cd1b']), e++;
                    break;
                case 0x13:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['223f3165cc66a768dacdd346e27f2710']), e++;
                    break;
                case 0x14:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['7d106f233cfd912913382bae9a419a7b']), e++;
                    break;
                case 0x15:
                    g['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](0x1 + Math['random']() * 0x4)), innerText(f, $__language_Array__['80893f9addac278b0a42d4f4fb6b5a5b']), e++;
                    break;
                case 0x16:
                    g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['50fc89d641f22fdf8db5976452c8f568']), e++;
                    break;
                case 0x17:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['0e7d0618e9fd34209f9f17901ecf3350']), e++;
                    break;
                case 0x18:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['d94af0e0c8f6145d48159c634ed06da4']), f['style']['fontSize'] = '24px', e++;
                    break;
                case 0x19:
                    g['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['e70d7619721de6cfa72161967d13fe50']), f['style']['fontSize'] = '18px', e++;
                    break;
                case 0x1a:
                    g['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['19ff9e5740dae0c490351a6bcb2333c2']), e++;
                    break;
                case 0x1b:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['923c58997e0ba557274af53d6bde64a3']), e++;
                    break;
                case 0x1c:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['1bbfd17d82f24dd7e025ea1a16736e6a']), e++;
                    break;
                case 0x1d:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['c188fc789625276dd4b835209bcef9eb']), e++;
                    break;
                case 0x1e:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['3cd33e5383b219684caf3b7b9bd382d3']), e++;
                    break;
                case 0x1f:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(f, $__language_Array__['01ff716332c26e23f231d2e4f912a3f0']), e++;
                    break;
                case 0x20:
                    ClearChild(f, g), oSym['addTask'](0x1e, a);
                }
            }());
        }
    }
}, {
    'AZ': [
        [
            oImp,
            0x1,
            0x1,
            [0x1]
        ],
        [
            oCaskZombie,
            0x1,
            0x2,
            [0x2]
        ],
        [
            oSkatingZombie,
            0x1,
            0x3,
            [0x3]
        ],
        [
            oSadakoZombie,
            0x1,
            0x4,
            [0x4]
        ],
        [
            oStrollZombie,
            0x1,
            0x5,
            [0x5]
        ],
        [
            oMakeRifterZombie,
            0x2,
            0x6,
            [0x6]
        ],
        [
            oZomboni,
            0x2,
            0x7,
            [0x7]
        ],
        [
            oFootballZombie,
            0x2,
            0x7,
            [
                0x7,
                0xa,
                0xf,
                0x15,
                0x16
            ]
        ],
        [
            oBucketheadZombie,
            0x2,
            0x1
        ],
        [
            oCigarZombie,
            0x2,
            0x5
        ]
    ],
    'FlagNum': 0x16,
    'FlagToSumNum': {
        'a1': [
            0x3,
            0x5,
            0x9,
            0xa,
            0xd,
            0xf,
            0x12,
            0x15
        ],
        'a2': [
            0x3,
            0x6,
            0xf,
            0x14,
            0x1e,
            0x23,
            0x2d,
            0x3c,
            0x46
        ]
    },
    'FlagToEnd'() {
        SelectModal('Polar25-1');
    }
});