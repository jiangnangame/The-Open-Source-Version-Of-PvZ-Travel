/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'PName': [oNutBowling],
    'ZName': [oZomboni],
    'PicArr': [
        'images/interface/Forest.webp',
        'images/interface/Marsh.webp',
        'images/interface/Polar2.webp',
        'images/interface/PolarClue1.webp',
        'images/Props/PolarPlots/StarryNight.webp'
    ],
    'LevelName': $__language_Array__['678f861992f3f323a9dde9c4a361a26f'],
    'LoadMusic': 'Bgm_Polar_18_NPC_1',
    'StartGameMusic': 'Bgm_Polar_Fight_' + (0x2 + Math['round'](Math['random']() * 0x2)),
    'AudioArr': ['Bgm_Polar_18_NPC_2'],
    'CanSelectCard': 0x0,
    'StaticCard': 0x0,
    'DKind': 0x0,
    'ControlFlagmeter': 0x0,
    'InitLawnMover': a => {
    },
    'FixedProps': 'disabled',
    'LoadAccess': function (a) {
        NewEle('PolarFire2', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewEle('PolarFire', 'div', null, { 'className': 'PolarFire' }, $('tGround')), NewEle(0x0, 'div', 'left:490px;', { 'className': 'FlowerBed' }, $('tGround')), NewImg('imgKK', 'images/interface/Polar_Mask4.webp', 'left:1100px;', EDAll), NewImg('imgKK', 'images/interface/Polar_Mask3.webp', 'left:167px;top:546px;', EDAll), PlayAudio('Bgm_Polar_Noise', 0x1);
        let b = [
                'images/interface/Forest.webp',
                'images/interface/Marsh.webp',
                'images/interface/Polar2.webp',
                'images/Props/PolarPlots/StarryNight.webp',
                ''
            ], c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:url(images/Props/PolarPlots/StarryNight.webp);opacity:0;', 0x0, EDAll), d = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll);
        function e(j, k) {
            oEffects['Animate'](d, {
                'background': 'black',
                'opacity': 0x1
            }, 0.5, 'linear', () => {
                oSym['addTask'](0x1, () => {
                    c['style']['backgroundImage'] = 'url(' + b[j] + ')', oEffects['Animate'](d, { 'opacity': 0x0 }, 0.5, 'linear', () => {
                        k();
                    });
                });
            });
        }
        oEffects['Animate'](d, { 'opacity': 0x1 }, 'slow', 'linear', () => {
            oSym['addTask'](0x1, () => {
                c['style']['opacity'] = 0x1, oEffects['Animate'](d, { 'opacity': 0x0 }, 'slow', 'linear', () => {
                    f();
                });
            });
        });
        function f() {
            let i = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), j = 0x0, k = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), l = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function m() {
                k['onclick'] = m;
                switch (j) {
                case 0x0:
                    l['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(k, $__language_Array__['7c72bcec489ce7d8046c20743ac5714b']), j++;
                    break;
                case 0x1:
                    l['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), k['onclick'] = null, e(0x1, () => {
                        k['onclick'] = m;
                    }), innerText(k, $__language_Array__['8dcf481999e3e5237a038af343de98b8']), j++;
                    break;
                case 0x2:
                    PlayAudio('crazydavelong2'), innerText(k, $__language_Array__['61a1255923591d7b46bebbd5ee703f4f']), j++;
                    break;
                case 0x3:
                    PlayAudio('crazydavelong1'), k['onclick'] = null, e(0x4, () => {
                        k['onclick'] = m;
                    }), innerText(k, $__language_Array__['ff10a230f7940b007fd2780f7864e105']), j++;
                    break;
                case 0x4:
                    l['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), k['onclick'] = null, e(0x3, () => {
                        k['onclick'] = m;
                    }), innerText(k, $__language_Array__['f2667e79f19a83b403b86cb82233fd10']), j++;
                    break;
                case 0x5:
                    PlayAudio('Zomboss1'), innerText(k, $__language_Array__['6e50f2cf99440226f266a09f96ba71c5']), j++;
                    break;
                case 0x6:
                    k['onclick'] = null, l['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(k, $__language_Array__['9c681aaf5dbc4045865ce86bfe4be6d9']), oEffects['fadeIn'](i, 'slow', () => k['onclick'] = m), j++;
                    break;
                case 0x7:
                    l['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(k, $__language_Array__['10986dd5966d6012723bb2a4a4962e31']), j++;
                    break;
                case 0x8:
                    PlayAudio('Zomboss3'), innerText(k, $__language_Array__['52e0d6bf65c5cc34ff41125aaa62e46b']), j++;
                    break;
                case 0x9:
                    k['onclick'] = null, PlayAudio('Zomboss1'), innerText(k, $__language_Array__['7c72bcec489ce7d8046c20743ac5714b']), oEffects['fadeOut'](i, 'slow', () => {
                        k['onclick'] = () => {
                            h(k, m), k['style']['display'] = l['style']['display'] = 'none';
                        };
                    }), j++;
                    break;
                case 0xa:
                    k['style']['display'] = l['style']['display'] = '', l['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(k, $__language_Array__['69de8840d0065267b7f18279740d44fe']), oEffects['fadeIn'](i, 'fast', () => k['onclick'] = m), j++;
                    break;
                case 0xb:
                    l['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(k, $__language_Array__['12e66a3529e28ba2e7211a1c147fb15e']), j++;
                    break;
                case 0xc:
                    l['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(k, $__language_Array__['6d34d3dce64af830a50575e483ca6868']), j++;
                    break;
                case 0xd:
                    l['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), k['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['2fea1e1a8f9df65d9024675e13a373fc'],
                        'font_size': 0x12
                    })[0x0] + '</p>', j++;
                    break;
                case 0xe:
                    l['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), k['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['ac2a5106d37a2b81edb62c8993d923b6'],
                        'font_size': 0x12
                    })[0x0] + '</p>', j++;
                    break;
                case 0xf:
                    l['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), k['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['e0650d330052a8048245007b0b7da3fe'],
                        'font_size': 0x18
                    })[0x0] + '</p>', k['style']['fontSize'] = '24px', j++;
                    break;
                case 0x10:
                    ClearChild(k, l, c, d), oEffects['fadeOut'](i, 'slow', n => {
                        ClearChild(n), a();
                    });
                }
            }());
        }
        function g(i, j = 0x14, k = ![], l = '') {
            let m = {
                'text': i,
                'font_size': j,
                'str': k,
                'font_family': l,
                'align_center': ![]
            };
            return oEffects['TextEffects']['ShakeText'](m);
        }
        function h(i, j) {
            i['onclick'] = null;
            let k = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:299;width:900px;height:600px;background:url(images/interface/Forest.webp);opacity:0;', 0x0, EDAll);
            oEffects['fadeIn'](k, 'slow', () => {
                m();
                function l() {
                    oEffects['fadeOut'](k, 'slow', () => {
                        ClearChild(k), i['onclick'] = j;
                    }), j();
                }
                function m() {
                    let n = NewEle('talk' + Math['random'](), 'div', 'z-index:300;color:white;font-size:20px;position:absolute;padding-top:40px;bottom:0;left:150px;height:220px;width:600px;border:5px\x200\x200\x200;background:rgba(30,30,30,0.5);', 0x0, EDAll), o = NewEle('talk' + Math['random'](), 'div', 'cursor:pointer;word-break:break-all;z-index:300;padding:0;color:white;font-size:20px;position:absolute;top:30px;left:20px;height:200px;width:560px;', 0x0, n), p = NewEle('daveName', 'div', 'pointer-events:\x20none;\x20word-break:\x20break-all;\x20z-index:\x20300;\x20color:\x20white;\x20font-size:\x2020px;\x20position:\x20absolute;padding-left:20px;\x20bottom:\x20230px;\x20left:\x20150px;\x20height:\x2025px;\x20width:\x20600px;', 0x0, EDAll), q = [
                            [
                                $__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],
                                $__language_Array__['36a20e210830c5013ed6925e05b36fe8']
                            ],
                            [
                                $__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],
                                $__language_Array__['2a5dfe062a1aede643a4e8c7a8bd57b5']
                            ],
                            [
                                $__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],
                                $__language_Array__['915c5a76bc3bccd06c57267b24a132f5']
                            ],
                            [
                                $__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],
                                $__language_Array__['5dbf94e2eac99979caf929757c8b5ffc']
                            ],
                            [
                                $__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],
                                $__language_Array__['0b8646d5ec71f61b14f38518fb580db1']
                            ],
                            [
                                $__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],
                                g($__language_Array__['07faa8f482ae3abad557175778c3ae25'])
                            ],
                            [
                                $__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],
                                $__language_Array__['d40e9c2a8e76d773da1bea1fc0683b2f']
                            ],
                            [
                                $__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],
                                $__language_Array__['8b5ee9f0574508e911ef6c8c9f333c87']
                            ],
                            [
                                $__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],
                                $__language_Array__['b13f8574e5b464c09df06912fa7f65cb']
                            ],
                            [
                                $__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],
                                $__language_Array__['6a2fba20c61332156d9740b4baebcbc7']
                            ],
                            [
                                $__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],
                                $__language_Array__['9b86d0fabd3423becbd68e8e1fa95e21']
                            ],
                            [
                                $__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],
                                $__language_Array__['958ca428ac702426de19c75ced9cd583']
                            ],
                            [
                                $__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],
                                $__language_Array__['309a1c343cc37eb422d8a31e14374c15']
                            ],
                            [
                                $__language_Array__['84768823b5c65a5877b34d0b8a65dba9'],
                                $__language_Array__['630cac12eae7a4ec300ceac0cad65842']
                            ],
                            [
                                $__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],
                                '……'
                            ],
                            [
                                $__language_Array__['1c30f9e940efe672e3ad7ad32dd7d767'],
                                $__language_Array__['6701601161390a6dc02bcafb54ba7c6f']
                            ]
                        ], r = -0x1, s = 0x32, t = {
                            '，': 0xc8,
                            '…': 0x12c
                        }, u = ![];
                    o['onclick'] = function () {
                        if (r >= 0x0 && o['innerHTML']['length'] < q[r][0x1]['length']) {
                            let A = q[r][0x1]['split']($__language_Array__['515e0edf6e794194b8ff61c61204a83f']);
                            o['innerHTML'] = A[A['length'] - 0x1] + '\x20', u = !![];
                            return;
                        }
                        u = ![], r++;
                        if (r >= q['length']) {
                            ClearChild(n, p), l();
                            return;
                        }
                        o['innerHTML'] = '', p['innerHTML'] = q[r][0x0];
                        let v = q[r][0x1], w = v instanceof Array ? v : v['split'](''), x = 0x0, y = '', z = r;
                        setTimeout(function B() {
                            if (r != z || x >= w['length'] || u) {
                                x >= w['length'] && !u && setTimeout(C => {
                                    r == z && !u && (u = !![], o['innerHTML'] = y += '\x20');
                                }, 0xc8);
                                return;
                            }
                            o['innerHTML'] = y += w[x++], setTimeout(B, t[w[x - 0x1]] ? t[w[x - 0x1]] : s);
                        }, s);
                    }, o['click']();
                }
            });
        }
    },
    'StartGame': function () {
        NewImg('imgKK', 'images/interface/ConveyorBelt.webp', 'left:0px;top:0px;z-index:0;\x20', $('dCardList')), StopMusic(), PlayMusic(oS['LoadMusic'] = oS['StartGameMusic']), SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')), SetHidden($('dSunNum')), oMiniGames['WinWithScore']({
            'scoreMax': 0x2710,
            'zombieFunc': a => 0xc8
        }), PrepareGrowPlants(a => {
            oP['Monitor']({
                'f'() {
                    (function b() {
                        const c = ArCard['length'];
                        if (c < 0xa) {
                            const d = oS['PName']['random'](), e = d['prototype'], f = 'dCard' + Math['random']();
                            ArCard[c] = {
                                'DID': f,
                                'PName': d,
                                'PixelTop': 0x258
                            }, NewImg(f, e['PicArr'][e['CardGif']], 'top:600px;width:100px;height:120px;cursor:pointer;clip:rect(auto,auto,60px,auto)', $('dCardList'), {
                                'onmousedown': g => {
                                    ChosePlant(g, GetChoseCard(f)), g['stopPropagation'](), g['preventDefault']();
                                }
                            });
                        }
                        oSym['addTask'](0x320, b);
                    }(), function c() {
                        let d = ArCard['length'];
                        while (d--) {
                            let e = ArCard[d];
                            e['PixelTop'] > 0x3c * d && e['PixelTop'] >= 0x5 && ($(e['DID'])['style']['top'] = (e['PixelTop'] -= 0x1) + 'px');
                        }
                        oSym['addTask'](0x4, c);
                    }());
                },
                'ar': []
            }), oP['AddZombiesFlag']();
        });
    }
}, {
    'AZ': [[
            oZomboni,
            0x3,
            0x1
        ]],
    'FlagNum': 0x29a,
    'FlagToSumNum': {
        'a1': [
            0x2,
            0x5,
            0x7,
            0x9,
            0xc,
            0xf,
            0x19,
            0x1e,
            0x2d,
            0x32,
            0x46,
            0x5a
        ],
        'a2': [
            0x2,
            0x6,
            0xb,
            0x12,
            0x16,
            0x1c,
            0x1f,
            0x23,
            0x28,
            0x32,
            0x64,
            0x96,
            0xc8
        ]
    },
    'FlagToEnd': () => {
        PlayMusic(oS['StartGameMusic'] = 'Bgm_Polar_18_NPC_2');
        let a = 0x0, b = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), c = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
        (function e() {
            b['onclick'] = e;
            switch (a) {
            case 0x0:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['7e1c65b8ebc261dbf03c4ebeb58ccaa4']), a++;
                break;
            case 0x1:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['0f668ffef5114ac1a056d6b4191de72a']), a++;
                break;
            case 0x2:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['0e3555c069978b43b35707ce8924818e']), a++;
                break;
            case 0x3:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(b, $__language_Array__['9939d81e062fa54e812aa00f5a24f05a']), a++;
                break;
            case 0x4:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['adbabd3ce6cc6acd9ff25f2477c90d11']), a++;
                break;
            case 0x5:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['2513ffc1ff9d7984bb9cc18cc75206a1']), a++;
                break;
            case 0x6:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['7f4fb48afc648e94e96b3a6232ec408b']), a++;
                break;
            case 0x7:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['bfc5836da1ef6581fb53e4ba51aac1a3']), a++;
                break;
            case 0x8:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['d984aba97a2fc079c115c6893b85697b']), a++;
                break;
            case 0x9:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['e9911d290eece5692d166f540da03368']), a++;
                break;
            case 0xa:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['c4f24facb59ffd347d5f244351dcedeb']), a++;
                break;
            case 0xb:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['5bb614dba2274162aa6dc14da37256a9']), a++;
                break;
            case 0xc:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['aebdbbde7feebcff93a42b98962ecefe']), a++;
                break;
            case 0xd:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['b1036ce2991ada74b8f09e9ae9c16a69']), a++;
                break;
            case 0xe:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['cb0e0ca5b0f2a1d33e8d8f069ae5eacb']), a++;
                break;
            case 0xf:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['a2acd23106078d62ac60bf338b11d829']), a++;
                break;
            case 0x10:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['9a05e4595e7a808a037b6b2a95604eee']), a++;
                break;
            case 0x11:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['02553c7ce6960ac62964135c9d551294']), a++;
                break;
            case 0x12:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(b, $__language_Array__['0a5d862495b8be9936294d8c73427644']), a++;
                break;
            case 0x13:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['e5bed5a4b5f513cc6bb87c4176dd2a70']), a++;
                break;
            case 0x14:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['ccc9c24875e0d2deb7f14a71ba795827']), a++;
                break;
            case 0x15:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['9f614f33b89e38559a3cccc4650c1073']), a++;
                break;
            case 0x16:
                c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['157327f0862379997d3b95e20aa6e2f4']), a++;
                break;
            case 0x17:
                PlayAudio('crazydavelong1'), innerText(b, $__language_Array__['e5d4c0b9c913bff1ee43913b55244ef1']), a++;
                break;
            case 0x18:
                PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['f326b3351812864cf7ce4ec76d316217']), a++;
                break;
            case 0x19:
                c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['e4d19b58be3599610ec0310f03b967de']), setTimeout(() => {
                    PlayAudio('Rifter_Summon2');
                }, 0x1f4), a++;
                break;
            case 0x1a:
                ClearChild(b, c), setTimeout(d, 0x3e8);
            }
        }());
        function d() {
            ShowWinItem(NewImg('imgSF', 'images/interface/PolarClue1.webp', 'left:420px;top:200px;transform-origin:left\x20top;transform:\x20scale(0.15);', EDAll, {
                'onclick': function () {
                    GetNewProp(this, 'images/interface/PolarClue1.webp', $__language_Array__['9ef19251eebffeb1cd87b93cb11233b5'], $__language_Array__['de0a1be2a744d319539d584afd9f58af'], NextLevel(), 'top:\x20-10%;transform:\x20scale(0.15);width:900px;height:\x20597px;');
                }
            }));
        }
    }
}, {
    'GetChoseCard': function (c) {
        if (oS['Chose'])
            return;
        var d = ArCard['length'];
        while (d--) {
            ArCard[d]['DID'] == c && (oS['ChoseCard'] = d, d = 0x0);
        }
        return oS['ChoseCard'];
    },
    'ChosePlant'(a, b = null) {
        oS['Chose'] === -0x1 && CancelShovel();
        if (oS['Chose'] === 0x1 || $('MovePlant')) {
            CancelPlant();
            return;
        }
        if (b !== null) {
            if (b + 0x1 > ArCard['length'] || b < 0x0)
                return;
            b === -0x1 && (b = 0x9), oS['ChoseCard'] = b;
        }
        oS['Chose'] = 0x1, $('MovePlant') && ClearChild($('MovePlant')), PlayAudio('seedlift');
        let c = ArCard[oS['ChoseCard']], d = a['clientX'] - EDAlloffsetLeft, e = a['clientY'], f = c['PName']['prototype'], g = NewImg('MovePlant', f['PicArr'][f['StaticGif']], 'left:' + d + 'px;top:' + (e + 0x14 - f['height']) + 'px;z-index:258;', FightingScene);
        SetStyle(g, f['ImgStyle']), EditImg(g['cloneNode'](![]), 'MovePlantAlpha', '', {
            'visibility': 'hidden',
            'opacity': 0.4,
            'zIndex': 0x1e
        }, FightingScene), EditCompositeStyle({
            'ele': g,
            'addFuncs': [[
                    'translateX',
                    '-50%'
                ]],
            'option': 0x2
        }), SetAlpha($(c['DID']), 0.5), SetHidden($('dTitle')), GroundOnmousemove = GroundOnmousemove1;
    },
    'CancelPlant': function () {
        ClearChild($('MovePlant'), $('MovePlantAlpha')), oS['Chose'] = 0x0, ArCard[oS['ChoseCard']] && SetAlpha($(ArCard[oS['ChoseCard']]['DID']), 0x64, 0x1), oS['ChoseCard'] = '', GroundOnmousemove = function () {
        };
    },
    'GrowPlant': function (m, n, o, p, q) {
        ZimuRQ['style']['display'] === 'block' && PlaySubtitle();
        if (n > 0x15b)
            return PlaySubtitle($__language_Array__['22e54dbbf076113366f09c279484c0f3']), CancelPlant(), ![];
        var r = oS['ChoseCard'], s = ArCard[r], t = s['PName'], u = t['prototype'], v = s['DID'], w, x = oGd['$LF'][p];
        u['CanGrow'](m, p, q) && (function () {
            PlayAudio(x != 0x2 ? 'plant' + Math['floor'](0x1 + Math['random']() * 0x2) : 'plant_water'), new t()['Birth'](n, o, p, q, m), oSym['addTask'](0x14, SetNone, [SetStyle($('imgGrowSoil'), {
                    'left': n - 0x1e + 'px',
                    'top': o - 0x28 + 'px',
                    'zIndex': 0x3 * p,
                    'visibility': 'visible'
                })]), ClearChild($('MovePlant'), $('MovePlantAlpha')), $('dCardList')['removeChild'](w = $(v)), w = null, ArCard['splice'](r, 0x1), oS['ChoseCard'] = '', oS['Chose'] = 0x0, GroundOnmousemove = function () {
            }, !Mobile && CancelPlant();
        }()), Mobile && CancelPlant();
    },
    'ViewPlantTitle': function () {
    }
});