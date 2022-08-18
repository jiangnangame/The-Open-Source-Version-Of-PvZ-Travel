/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS['Init']({
    'PicArr': (function () {
        let b = 'images/interface/';
        return [
            b + 'Polar2.webp',
            b + 'Marsh.webp',
            'images/Props/PolarPlots/hand_c.webp'
        ];
    }()),
    'LoadMusic': '',
    'AudioArr': ['Bgm_Marsh_Plot2'],
    'StartGameMusic': 'Bgm_Marsh_Ready',
    'backgroundImage': 'images/interface/Polar2.webp',
    'LoadAccess': function (b) {
        CSpeed(0x1), EDAll['scrollLeft'] = 0x73;
        let c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:259;width:900px;height:600px;opacity:0;left:115px;', 0x0, EDAll), d = NewEle('effect' + Math['random'](), 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:rgba(0,0,0,0);opacity:1;left:115px;', 0x0, EDAll), e = NewEle('effect' + Math['random'](), 'div', 'font-size:28px;position:absolute;color:white;text-align:center;line-height:600px;z-index:257;width:900px;left:115px;height:600px;opacity:0;', 0x0, EDAll), f = [
                'images/interface/Marsh.webp',
                ''
            ];
        function g(l, m) {
            oEffects['Animate'](c, {
                'background': 'black',
                'opacity': 0x1
            }, 0.1, 'linear', () => {
                oSym['addTask'](0x1, () => {
                    d['style']['backgroundImage'] = 'url(' + f[l] + ')', l == 0x0 ? EDAll['style']['filter'] = 'grayscale(1)' : EDAll['style']['filter'] = '', oEffects['Animate'](c, { 'opacity': 0x0 }, 0.1, 'linear', () => {
                        m();
                    });
                });
            });
        }
        oEffects['Animate'](d, { 'background': 'rgba(0,0,0,1)' }, 'slow', 'linear', () => {
            e['innerText'] = $__language_Array__['911a22358ff7ece10b481ef262ff7a12'], oEffects['fadeIn'](e, 0x2, () => {
                oSym['addTask'](0x64, function () {
                    oEffects['Animate'](d, { 'background': 'rgba(0,0,0,0)' }, 0x2), oEffects['fadeOut'](e, 0x2, () => {
                        ClearChild(e), h();
                    });
                });
            });
        });
        function h() {
            let l = 0x0, m = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), n = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
            (function o() {
                m['onclick'] = o;
                switch (l) {
                case 0x0:
                    n['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(m, $__language_Array__['1a2a859ec2279ec613bd3395acb2fd31']), l++;
                    break;
                case 0x1:
                    PlayAudio('crazydavelong1'), innerText(m, $__language_Array__['0fc18b883dad072f6decfead7ee585ba']), l++;
                    break;
                case 0x2:
                    PlayAudio('crazydavelong2'), innerText(m, $__language_Array__['c100260bda59a11d3d37e8bb79dc4736']), l++;
                    break;
                case 0x3:
                    PlayAudio('crazydavelong3'), innerText(m, $__language_Array__['c2756a75cbfb2f8ea5840a5b99eea09a']), l++;
                    break;
                case 0x4:
                    PlayAudio('crazydavelong3'), innerText(m, $__language_Array__['bed6a84b86fdcb0bb97fa525d0f13c27']), l++;
                    break;
                case 0x5:
                    PlayAudio('crazydavelong1'), innerText(m, $__language_Array__['427137cd1c52b512a1d26499659b0453']), l++;
                    break;
                case 0x6:
                    n['style']['display'] = m['style']['display'] = 'none', g(0x0, () => {
                        n['style']['display'] = m['style']['display'] = '', PlayAudio('crazydavelong3'), innerText(m, $__language_Array__['32a32294e347fe4abf3582e37cdf212c']), l++;
                    });
                    break;
                case 0x7:
                    PlayAudio('crazydavelong1'), innerText(m, $__language_Array__['f8573a2b9ff6c7e7e8962fb97382b321']), l++;
                    break;
                case 0x8:
                    n['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(m, $__language_Array__['1bb38dbdbf2972a62ca1ac5028cd9295']), l++;
                    break;
                case 0x9:
                    n['style']['display'] = m['style']['display'] = 'none', g(0x1, () => {
                        n['style']['display'] = m['style']['display'] = '', n['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(m, $__language_Array__['66d7245ad7cb8cbaed3656f776ebb430']), l++;
                    });
                    break;
                case 0xa:
                    n['style']['display'] = m['style']['display'] = 'none', g(0x0, () => {
                        n['style']['display'] = m['style']['display'] = '', PlayAudio('crazydavelong3'), m['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                            'text': $__language_Array__['68d5295e54c167478fd636d31f4aba6b'],
                            'font_size': 0x12
                        })[0x0] + '</p>', l++;
                    });
                    break;
                case 0xb:
                    n['style']['display'] = m['style']['display'] = 'none', g(0x1, () => {
                        n['style']['display'] = m['style']['display'] = '', PlayAudio('crazydavelong2'), innerText(m, $__language_Array__['08ec1e31351199d6f559cb14ebdae16d']), l++;
                    });
                    break;
                case 0xc:
                    PlayAudio('crazydavelong1'), innerText(m, $__language_Array__['695acb8ff6c56e9e99881d46825b4a83']), l++;
                    break;
                case 0xd:
                    n['style']['display'] = m['style']['display'] = 'none', g(0x0, () => {
                        n['style']['display'] = m['style']['display'] = '', PlayAudio('crazydavelong3'), m['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                            'text': $__language_Array__['fc65ebdfdc4f6d9e573f882cb2191bdd'],
                            'font_size': 0x12
                        })[0x0] + '</p>', l++;
                    });
                    break;
                case 0xe:
                    n['style']['display'] = m['style']['display'] = 'none', g(0x1, () => {
                        n['style']['display'] = m['style']['display'] = '', PlayAudio('crazydavelong2'), innerText(m, $__language_Array__['9744b9980d4c7a88bc3b7e276f767767']), l++;
                    });
                    break;
                case 0xf:
                    PlayAudio('crazydavelong3'), innerText(m, $__language_Array__['0982a1121b1a2197ffd5db4fc4b457c3']), l++;
                    break;
                case 0x10:
                    PlayAudio('crazydavelong2'), innerText(m, '……'), l++;
                    break;
                case 0x11:
                    PlayAudio('crazydaveshort1'), innerText(m, '……'), l++;
                    break;
                case 0x12:
                    innerText(m, '……'), l++;
                    break;
                case 0x13:
                    PlayAudio('crazydavelong2'), innerText(m, $__language_Array__['78a7e47a51b13ec9727e77acd98c8285']), l++;
                    break;
                case 0x14:
                    PlayAudio('crazydavelong2'), PlayMusic(oS['LoadMusic'] = 'Bgm_Marsh_Plot2'), innerText(m, $__language_Array__['b6dbc9e2438ac43a38773faad1e055f9']), l++;
                    break;
                case 0x15:
                    ClearChild(m, n), k(i);
                }
            }());
        }
        function i() {
            let l = 0x0, m = NewEle('DivTeach', 'div', 'left:415px', 0x0, EDAll), n = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
            (function o() {
                m['onclick'] = o;
                switch (l) {
                case 0x0:
                    n['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(m, $__language_Array__['e6c66f3c621ead0c576100bc2c95cc30']), l++;
                    break;
                case 0x1:
                    PlayAudio('crazydavelong2'), innerText(m, $__language_Array__['e294c21756c3bc7a15f225c6f849fc26']), l++;
                    break;
                case 0x2:
                    PlayAudio('crazydavelong3'), innerText(m, $__language_Array__['629743fa892318fb28e407c93902c4f1']), l++;
                    break;
                case 0x3:
                    PlayAudio('crazydavelong3'), innerText(m, $__language_Array__['a227f1cfbc2f7f0c372d9280397b3f59']), l++;
                    break;
                case 0x4:
                    PlayAudio('crazydavelong2'), innerText(m, $__language_Array__['48536afdaf9fbe64229bcb438decfae5']), l++;
                    break;
                case 0x5:
                    PlayAudio('crazydavelong3'), innerText(m, $__language_Array__['ee8b568d2f90180028134228c13e56d6']), l++;
                    break;
                case 0x6:
                    PlayAudio('crazydavelong1'), innerText(m, $__language_Array__['01cb532ba913e8fbbb7d89e6a5688fd1']), l++;
                    break;
                case 0x7:
                    ClearChild(m, n, d, c), j();
                }
            }());
        }
        function j() {
            toWin();
        }
        function k(l) {
            let m = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:299;width:900px;height:600px;left:115px;background:black;opacity:0;', 0x0, EDAll), n = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:299;width:900px;top:60px;height:600px;left:115px;background:url(images/Props/PolarPlots/hand_c.webp);opacity:0;', 0x0, EDAll);
            oEffects['fadeIn'](m, 'slow', () => {
                oEffects['Animate'](n, {
                    'opacity': 0x1,
                    'top': 0x0
                }, 'slow', 'ease-out', () => {
                    p();
                    function o() {
                        oEffects['fadeOut'](n, 'slow', () => {
                            ClearChild(n);
                        }), oEffects['fadeOut'](m, 'slow', () => {
                            ClearChild(m), l();
                        });
                    }
                    function p() {
                        let q = NewEle('talk' + Math['random'](), 'div', 'z-index:300;color:white;font-size:20px;position:absolute;padding-top:40px;bottom:0;left:265px;height:220px;width:600px;border:5px\x200\x200\x200;background:rgba(30,30,30,0.5);', 0x0, EDAll), r = NewEle('talk' + Math['random'](), 'div', 'cursor:pointer;word-break:break-all;z-index:300;padding:0;color:white;font-size:20px;position:absolute;top:30px;left:20px;height:200px;width:560px;', 0x0, q), s = NewEle('daveName', 'div', 'pointer-events:\x20none;\x20word-break:\x20break-all;\x20z-index:\x20300;\x20color:\x20white;\x20font-size:\x2020px;\x20position:\x20absolute;padding-left:20px;\x20bottom:\x20230px;\x20left:\x20265px;\x20height:\x2025px;\x20width:\x20600px;', 0x0, EDAll), t = [
                                $__language_Array__['50646d617f8f5452bd0f14d1def55ff5'],
                                $__language_Array__['2bd9faccbf0b271d96f50649a7887ec1'],
                                $__language_Array__['bd3bbf23b7593c3b500f45c16b691725'],
                                $__language_Array__['abd896b36d2c4244a55f9a5725f3a2ee'],
                                $__language_Array__['e21506b097716ba08319f25be20671c7'],
                                $__language_Array__['e47784ef4eab5d6853929592b769d26e'],
                                $__language_Array__['9614f86ee33174cdc40cac2675fd8ae0'],
                                $__language_Array__['7189d64bd00a1c4b7a27d785f2ea69ed'],
                                $__language_Array__['e13b4a64c612c4f0d1675a24c9cba8c5']
                            ], u = -0x1, v = 0x32, w = {
                                '，': 0xc8,
                                '…': 0x12c
                            }, x = ![];
                        r['onclick'] = function () {
                            if (u >= 0x0 && r['innerHTML']['length'] < t[u]['length']) {
                                let D = t[u]['split']($__language_Array__['8f6661968a52c1978a603909ab57af0e']);
                                r['innerHTML'] = D[D['length'] - 0x1] + '\x20', x = !![];
                                return;
                            }
                            x = ![], u++;
                            if (u >= t['length']) {
                                ClearChild(q, s), o();
                                return;
                            }
                            r['innerHTML'] = '', s['innerHTML'] = $__language_Array__['d3d54c59aad489d37ebb8d71a1ed0d8f'];
                            let y = t[u], z = y instanceof Array ? y : y['split'](''), A = 0x0, B = '', C = u;
                            setTimeout(function E() {
                                if (u != C || A >= z['length'] || x) {
                                    A >= z['length'] && !x && setTimeout(F => {
                                        u == C && !x && (x = !![], r['innerHTML'] = B += '\x20');
                                    }, 0xc8);
                                    return;
                                }
                                r['innerHTML'] = B += z[A++], setTimeout(E, w[z[A - 0x1]] ? w[z[A - 0x1]] : v);
                            }, v);
                        }, r['click']();
                    }
                });
            });
        }
    }
});