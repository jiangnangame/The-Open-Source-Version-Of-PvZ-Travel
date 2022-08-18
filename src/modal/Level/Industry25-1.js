/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'LoadMusic': 'Bgm_Industry25_Plot1',
    'LoadAccess': function (b) {
        CSpeed(0x1), c();
        function c() {
            let g = $('loading')['cloneNode'](!![]);
            EditEle(g, {
                'className': '',
                'id': ''
            }, {
                'display': 'block',
                'background': 'url(./images/interface/loading.webp)',
                'backgroundPosition': '0\x20600px'
            }, EDAll);
            let h = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:256;width:900px;height:600px;background:black;opacity:0;', 0x0, EDAll), j = 0x0;
            for (let q = 0x1; q <= 0xb; q++) {
                j += Math['random']() * (0x14 - q) * 0x2, oSym['addTask'](j, r => {
                    h['style']['opacity'] = q % 0x2;
                });
            }
            oSym['addTask'](j + 0xa, r => {
                ClearChild(g), o();
            });
            let k = 0x1c, l = [0x0], m = [!![]];
            while (l[l['length'] - 0x1] + k + 0x5 < 0x258) {
                l['push'](l[l['length'] - 0x1] + k + 0x5), m['push'](!![]);
            }
            function n(r) {
                let s = 0x8, t = -0x1;
                for (let A = 0x0; A < l['length']; A++) {
                    if (m[A]) {
                        t = A;
                        break;
                    }
                }
                if (t == -0x1)
                    return;
                let u = l[t], v = NewEle('text' + Math['random'](), 'div', 'top:' + u + 'px;white-space:nowrap;font-size:' + k + 'px;left:900px;height:' + (k + 0x5) + 'px;position:absolute;z-index:256;color:white;', 0x0, EDAll), w = p(r);
                v['innerHTML'] = w[0x0];
                let x = w[0x1] + 0x1e;
                oEffects['Animate'](v, { 'left': -x + 'px' }, s / oSym['NowSpeed'], 'linear', ClearChild), m[t] = ![];
                let y = 0x384 + x, z = x / (y / s) * 0x64;
                oSym['addTask'](z + 0xf, B => {
                    m[t] = !![];
                });
            }
            function o() {
                function r() {
                    oSym['addTask'](Math['random']() * 0x50 + 0x1e, s => {
                        n([
                            $__language_Array__['5e91bd83358593edc86731cbd21f5791'],
                            $__language_Array__['a2aacaa39d12d91b03dc3cf6098670cf'],
                            $__language_Array__['52b73f509510f1d9b00ad9e940a6964c'],
                            $__language_Array__['bad8e254c1fa66da7d8fd82787713107'],
                            $__language_Array__['603003149fdb20c3b310d89178bfa4f4'],
                            $__language_Array__['7637f4daa200d0ffbc9f667742bd9a1e']
                        ]['random']()), r();
                    });
                }
                r(), oSym['addTask'](0x258, s => {
                    let t = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:258;width:900px;height:600px;background:black;opacity:1;', 0x0, EDAll), u = 0x0;
                    for (let v = 0x1; v <= 0xf; v++) {
                        u += Math['random']() * (0x14 - v) * 0x3, oSym['addTask'](u, w => {
                            t['style']['opacity'] = v % 0x2;
                        });
                    }
                    oSym['addTask'](u + 0xa, () => {
                        ClearChild(t), e();
                    });
                });
            }
            function p(r) {
                let s = {
                        'text': r,
                        'font_size': k,
                        'align_center': ![],
                        'width': 0x1bf52
                    }, t = oEffects['TextEffects']['ShakeText'](s);
                return t;
            }
        }
        function d(g) {
            let h = [
                $__language_Array__['e34154a42245f47e7a6c8f99b32b64b5'],
                $__language_Array__['1f208e619fb14dca340ba3b5749982af'],
                $__language_Array__['2f4bd74be004c985d1a305bcf235feee'],
                $__language_Array__['d71e21dd0560aeae61172942acfa4694'],
                $__language_Array__['fbc3251eff01a29c91357b544f7dff08'],
                $__language_Array__['af434730ecb13ecaf532cf379a78fa0f'],
                $__language_Array__['1d044e47f48141b9efc60a6d8bcc2047'],
                $__language_Array__['e27e0f63c6e3ca376dcdc6bef09f67fd']
            ];
            function i(j = Infinity) {
                let l = g['innerText'];
                if (/Job/['test'](l))
                    return;
                let m = '';
                for (let n of l) {
                    m['length'] < j && n != $__language_Array__['2b80aef4107262fd054354107add03a7'] && n != ':' && (n = h['random']()), m += n;
                }
                g['innerText'] = m, oSym['addTask'](0x5, i);
            }
            i(0x1);
        }
        function e() {
            f();
            let g = NewEle('daveName', 'div', 'pointer-events:\x20none;\x20word-break:\x20break-all;\x20z-index:\x20300;\x20color:\x20white;\x20font-size:\x2020px;\x20position:\x20absolute;padding-left:20px;\x20bottom:\x20225px;\x20left:\x20150px;\x20height:\x2025px;\x20width:\x20600px;', 0x0, EDAll);
            g['innerText'] = $__language_Array__['7821eeb6b8a47c816b4e20b6aeb635e2'];
        }
        function f() {
            let g = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:258;width:900px;height:600px;background:white;opacity:0;', 0x0, EDAll), h = NewEle('talk' + Math['random'](), 'div', 'cursor:pointer;word-break:break-all;z-index:300;padding:20px;color:white;font-size:20px;position:absolute;padding-top:40px;bottom:0;left:150px;height:200px;width:600px;border:5px\x200\x200\x200;background:rgba(30,30,30,0.5);', 0x0, EDAll), i = [
                    '……',
                    $__language_Array__['1aaf25e3645b18ce2fc73ca790bd2c05'],
                    $__language_Array__['f864e59427891680a63916b9b6c7f46c'],
                    $__language_Array__['57f33ee1163602c11b1f38d3cad0d40e'],
                    $__language_Array__['84eb459ebb860e1f9e8031b13725b6e8'],
                    $__language_Array__['a263b75898531adcb9287722c62b7434'],
                    $__language_Array__['b9e46ed62ee9581cde84f713d3dc27bf'],
                    $__language_Array__['f47379c4e8ce761c29356fa4601d1435'],
                    $__language_Array__['6fc5f8f2ad1c53c6e24611f43c0e9d3b'],
                    $__language_Array__['0840c1f766b7aca12074bd3d83f62d44'],
                    $__language_Array__['cd037bf4bff53d8d22a25c033035ddb5'],
                    $__language_Array__['012b3f6c50aed958f76d6d39346509bd'],
                    $__language_Array__['2f8fa02d12b514c568c34325cba86ac7'],
                    $__language_Array__['7d569f718059fcaac821b6f8e291fe9a'],
                    $__language_Array__['9c75942980343b5d54098a415a87739c'],
                    $__language_Array__['a0670bc20e1777b89ced5504aeb33f14'],
                    $__language_Array__['239a053d320e1936da6a71f3ecc121dd'],
                    $__language_Array__['85cfddaf0c4fd3444d177f0767421707']
                ], j = '', k = -0x1, l = 0x32, m = {
                    '，': 0xc8,
                    '…': 0x12c
                }, n = ![];
            h['onclick'] = function () {
                if (k >= 0x0 && h['innerText']['length'] < i[k]['length'] + j['length']) {
                    let s = i[k]['split']($__language_Array__['2b80aef4107262fd054354107add03a7']);
                    h['innerText'] = (j ? j + $__language_Array__['2b80aef4107262fd054354107add03a7'] : '') + s[s['length'] - 0x1] + '\x20\x20', n = !![];
                    return;
                }
                n = ![], k++;
                if (k >= i['length']) {
                    ClearChild(h, $('daveName')), oEffects['Animate'](g, { 'opacity': 0x1 }, 0x2 / oSym['NowSpeed'], 'ease', t => {
                        Exitlevel(oS['Lvl']);
                    }, 0x1);
                    return;
                }
                k == 0x5 && d($('daveName'));
                k == 0xa && ($('daveName')['innerText'] = $__language_Array__['0f9c946608aa5b5010b38fefcc93a2bd']);
                (k == 0xb || k == 0xf) && (oEffects['Animate'](g, { 'opacity': 0x1 }, 0.2 / oSym['NowSpeed']), oSym['addTask'](0x15, t => {
                    oEffects['Animate'](g, { 'opacity': 0x0 }, 0.6 / oSym['NowSpeed']);
                }), l = 0x14);
                (k == 0xc || k == 0x10) && (l = 0x32);
                let o = i[k]['split']($__language_Array__['2b80aef4107262fd054354107add03a7']);
                o['length'] == 0x1 && (o = [
                    j,
                    i[k]
                ]);
                o[0x0] != j && (j = o[0x0]);
                h['innerText'] = j ? j + $__language_Array__['2b80aef4107262fd054354107add03a7'] : '';
                let p = o[0x1]['split'](''), q = 0x0, r = k;
                setTimeout(function t() {
                    if (k != r || q >= p['length'] || n) {
                        q >= p['length'] && !n && setTimeout(u => {
                            k == r && !n && (n = !![], h['innerText'] += '\x20\x20');
                        }, 0xc8);
                        return;
                    }
                    h['innerText'] += p[q++], setTimeout(t, m[p[q - 0x1]] ? m[p[q - 0x1]] : l);
                }, l);
            }, h['click']();
        }
    }
});