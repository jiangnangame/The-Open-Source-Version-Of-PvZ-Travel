/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'LoadMusic': 'Bgm_Industry25_Plot2',
    'PicArr': [
        'images/Props/Industry25/plan_note.png',
        'images/Props/Industry25/dave.png'
    ],
    async 'LoadAccess'(a) {
        CSpeed(0x1);
        const b = ({
            ele: s,
            properties: t,
            duration: u,
            ease: v,
            delay: w
        }) => new Promise(x => oEffects['Animate'](s, t, u, v, x, w));
        let c = NewEle('effect', 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#000;opacity:1;left:0px;', 0x0, EDAll);
        const d = NewEle('picture', 'div', 'position:absolute;background:\x20url(images/Props/Industry25/plan_note.png)\x20no-repeat;z-index:259;opacity:0;transform:scale(0.95);width:\x20900px;height:600px;left:140px;top:120px', 0x0, EDAll);
        let e = 'anim' + Math['random'](), f = ![], g = '<svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<filter\x20id=\x22' + e + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<feTurbulence\x20id=\x22turbulence\x22\x20baseFrequency=\x220.05\x22\x20numOctaves=\x223\x22\x20result=\x22noise\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<animate\x20id=\x22anim\x22\x20attributeName=\x22baseFrequency\x22\x20values=\x220.001;0.002;0.003;0.002;0.001\x22\x20keys=\x220;0.35;0.5;0.65;1\x22\x20dur=\x22300s\x22\x20\x20repeatCount=\x22indefinite\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</feTurbulence>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<feDisplacementMap\x20id=\x22displacement\x22\x20in=\x22SourceGraphic\x22\x20in2=\x22noise\x22\x20scale=\x226\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<animate\x20attributeName=\x22scale\x22\x20values=\x2230;45;30\x22\x20keys=\x220;0.5;1\x22\x20dur=\x225s\x22\x20repeatCount=\x22indefinite\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</feDisplacementMap>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</filter>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</svg>', h = '<svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<filter\x20id=\x22' + e + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<feTurbulence\x20id=\x22turbulence\x22\x20baseFrequency=\x220.01\x22\x20numOctaves=\x223\x22\x20result=\x22noise\x22></feTurbulence>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<feDisplacementMap\x20id=\x22displacement\x22\x20in=\x22SourceGraphic\x22\x20in2=\x22noise\x22\x20scale=\x2210\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</feDisplacementMap>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</filter>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</svg>';
        d['innerHTML'] = h, d['style']['filter'] = 'url(#' + e + ')', await b({
            'ele': d,
            'properties': {
                'opacity': 0x1,
                'top': '100px'
            },
            'ease': 'cubic-bezier(0.0,\x200.0,\x200.2,\x201)'
        });
        function i(s, t = 0x1) {
            let u = 'color' + Math['random']();
            function v() {
                return Math['random']() * s - s / 0x2;
            }
            let w = [];
            for (let x = 0x0; x < 0x6; x++) {
                w['push'](v());
            }
            return [
                u,
                '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<filter\x20id=\x22' + u + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<feColorMatrix\x20in=\x22SourceGraphic\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22matrix\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20values=\x221\x200\x200\x200\x200\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200\x200\x200\x200\x200\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200\x200\x200\x200\x200\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200\x200\x200\x201\x200\x22\x20result=\x22red\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<feOffset\x20in=\x22red\x22\x20dx=\x22' + w[0x0] + '\x22\x20dy=\x22' + w[0x1] + '\x22\x20result=\x22red_offset\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<animate\x20attributeName=\x22dx\x22\x20from=\x22' + w[0x0] + '\x22\x20to=\x220\x22\x20dur=\x22' + t + 's\x22\x20repeatCount=\x221\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<animate\x20attributeName=\x22dy\x22\x20from=\x22' + w[0x1] + '\x22\x20to=\x220\x22\x20dur=\x22' + t + 's\x22\x20repeatCount=\x221\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</feOffset>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<feColorMatrix\x20in=\x22SourceGraphic\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22matrix\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20values=\x220\x200\x200\x200\x200\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200\x201\x200\x200\x200\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200\x200\x200\x200\x200\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200\x200\x200\x201\x200\x22\x20result=\x22green\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<feOffset\x20in=\x22green\x22\x20dx=\x22' + w[0x2] + '\x22\x20dy=\x22' + w[0x3] + '\x22\x20result=\x22green_offset\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<animate\x20attributeName=\x22dx\x22\x20from=\x22' + w[0x2] + '\x22\x20to=\x220\x22\x20dur=\x22' + t + 's\x22\x20repeatCount=\x221\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<animate\x20attributeName=\x22dy\x22\x20from=\x22' + w[0x3] + '\x22\x20to=\x220\x22\x20dur=\x22' + t + 's\x22\x20repeatCount=\x221\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</feOffset>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<feColorMatrix\x20in=\x22SourceGraphic\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22matrix\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20values=\x220\x200\x200\x200\x200\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200\x200\x200\x200\x200\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200\x200\x201\x200\x200\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200\x200\x200\x201\x200\x22\x20result=\x22blue\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<feOffset\x20in=\x22blue\x22\x20dx=\x22' + w[0x4] + '\x22\x20dy=\x22' + w[0x5] + '\x22\x20result=\x22blue_offset\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<animate\x20attributeName=\x22dx\x22\x20from=\x22' + w[0x4] + '\x22\x20to=\x220\x22\x20dur=\x22' + t + 's\x22\x20repeatCount=\x221\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<animate\x20attributeName=\x22dy\x22\x20from=\x22' + w[0x5] + '\x22\x20to=\x220\x22\x20dur=\x22' + t + 's\x22\x20repeatCount=\x221\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</feOffset>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<feBlend\x20mode=\x22lighten\x22\x20in=\x22red_offset\x22\x20in2=\x22green_offset\x22\x20result\x20=\x22blend1\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<feBlend\x20mode=\x22lighten\x22\x20in=\x22blend1\x22\x20in2=\x22blue_offset\x22\x20result\x20=\x22blend1\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</filter>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'
            ];
        }
        function j(s, t) {
            let u = i(0x3e8, 0x2710), v = NewEle('', 'div', 'display:none;', {}, EDAll), w = NewEle('', 'span', 'z-index:258;position:absolute;color:white;top:' + t[0x1] + 'px;left:' + t[0x0] + 'px;font-size:18px;opacity:0;', { 'innerText': s }, EDAll);
            v['innerHTML'] = u[0x1], w['style']['filter'] = 'url(#' + u[0x0] + ')', oEffects['Animate'](w, { 'opacity': 0x1 }, 0.2);
            function x() {
                for (let y = 0x1; y < 0x4; y++) {
                    oSym['addTask']((0x5 - y) * Math['random']() + y * 0x5, z => {
                        u = i(0x3c - y * 0xf, 0.4), v['innerHTML'] = u[0x1], w['style']['filter'] = 'url(#' + u[0x0] + ')', y == 0x3 && oSym['addTask'](0x14, () => {
                            v['innerHTML'] = '';
                        });
                    });
                }
            }
            x(), oSym['addTask'](0x190, () => {
                oSym['addTask'](0xa, () => {
                    x();
                }), oEffects['Animate'](w, { 'opacity': 0x0 }, 0.3, 'linear', ClearChild);
            });
        }
        async function k(s, t) {
            f = !![], await b({
                'ele': d,
                'properties': {
                    'top': '40px',
                    'opacity': '0'
                },
                'ease': 'cubic-bezier(0.4,\x200.0,\x201,\x201)'
            }), d['style']['background'] = 'url(' + s + ')\x20no-repeat', SetStyle(d, Object['assign']({ 'top': '160px' }, t)), oSym['addTask'](0x1, async () => {
                await b({
                    'ele': d,
                    'properties': {
                        'top': '100px',
                        'opacity': '1'
                    },
                    'ease': 'cubic-bezier(0.0,\x200.0,\x200.2,\x201)'
                }), f = ![];
            });
        }
        let l = 0x1c, m = [0x0], n = [!![]];
        while (m[m['length'] - 0x1] + l + 0x5 < 0x258) {
            m['push'](m[m['length'] - 0x1] + l + 0x5), n['push'](!![]);
        }
        function o(s) {
            let t = 0x8, u = -0x1;
            for (let B = 0x0; B < m['length']; B++) {
                if (n[B]) {
                    u = B;
                    break;
                }
            }
            if (u == -0x1)
                return;
            let v = m[u], w = NewEle('text' + Math['random'](), 'div', 'top:' + v + 'px;white-space:nowrap;font-size:' + l + 'px;left:900px;height:' + (l + 0x5) + 'px;position:absolute;z-index:256;color:white;', 0x0, EDAll), x = q(s);
            w['innerHTML'] = x[0x0];
            let y = x[0x1] + 0x1e;
            oEffects['Animate'](w, { 'left': -y + 'px' }, t / oSym['NowSpeed'], 'linear', ClearChild), n[u] = ![];
            let z = 0x384 + y, A = y / (z / t) * 0x64;
            oSym['addTask'](A + 0xf, C => {
                n[u] = !![];
            });
        }
        r();
        let p = NewEle('daveName', 'div', 'pointer-events:\x20none;\x20word-break:\x20break-all;\x20z-index:\x20300;\x20color:\x20white;\x20font-size:\x2020px;\x20position:\x20absolute;padding-left:20px;\x20bottom:\x20230px;\x20left:\x20150px;\x20height:\x2025px;\x20width:\x20600px;', 0x0, EDAll);
        p['innerText'] = $__language_Array__['35f79b446325ebe7ec53e33d6f124c7c'];
        function q(s, t = 0x14, u = !![], v = 'Microsoft\x20YaHei,Arial') {
            let w = {
                'text': s,
                'font_size': t,
                'str': u,
                'font_family': v,
                'align_center': ![]
            };
            return oEffects['TextEffects']['ShakeText'](w);
        }
        function r() {
            let s = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:258;width:900px;height:600px;background:white;opacity:0;', 0x0, EDAll), t = NewEle('talk' + Math['random'](), 'div', 'z-index:300;color:white;font-size:20px;position:absolute;padding-top:40px;bottom:0;left:150px;height:220px;width:600px;border:5px\x200\x200\x200;background:rgba(30,30,30,0.5);', 0x0, EDAll), u = NewEle('talk' + Math['random'](), 'div', 'cursor:pointer;word-break:break-all;z-index:300;padding:0;color:white;font-size:20px;position:absolute;top:30px;left:20px;height:200px;width:560px;', 0x0, t), v = [
                    '……',
                    $__language_Array__['a48a98776046e4360bfd7443037187a3'],
                    $__language_Array__['7f764f8cdbc2b5741075c522b68bec0f'],
                    $__language_Array__['6ccebefad8a56549be1e12f888569711'],
                    '……',
                    $__language_Array__['f3b0174235c4f065dbc6aed9bf289980'],
                    $__language_Array__['6c9608abe94cc032f72a0bf01adb6886'],
                    $__language_Array__['46fc05f2fb523f7f2359b43b79a3b02e'],
                    $__language_Array__['47f65b186740675cab4290980dcd1ab9'],
                    $__language_Array__['66a458e331db1f02c179b5d60df4cb16'],
                    q($__language_Array__['10d0421de6276ccc5ce310b1e7c0a3c1'], 0x14, ![], ''),
                    q($__language_Array__['dcbfe9fd016f9a74ce8da07c00e57a89'], 0x14, ![], ''),
                    q($__language_Array__['b7e0d4f6659725ff2f9b1f858c1e1042'], 0x14, ![], ''),
                    $__language_Array__['d05af7d103d3b82d6f381a86693c052e'],
                    $__language_Array__['a9714da5c9040a6d2d5f56312be711e1'],
                    $__language_Array__['4a8542cda9fc85ef1d2b506d464a7e74'],
                    $__language_Array__['56766f06c00fe2e6dd7b4e2df6352b7a'],
                    $__language_Array__['e172b70dd3b0c411546d65dc9f0dd4ea'],
                    $__language_Array__['b4e66c4ff8373e40b484c4776fbc7dc9'],
                    $__language_Array__['aa0bb5c5c1f9be5b33baa1491ff95f16'],
                    $__language_Array__['ff5cf1f1f053ee5ba6f663501c9626d8'],
                    $__language_Array__['a628d04a6af405d1a78078f768b86449']
                ], w = -0x1, x = 0x32, y = {
                    '，': 0xc8,
                    '…': 0x12c
                }, z = ![];
            u['onclick'] = function () {
                if (f)
                    return;
                if (w >= 0x0 && u['innerHTML']['length'] < v[w]['length']) {
                    let E = v[w]['split']($__language_Array__['3aeaede5b8f6b3e2b1865f8cc73ac325']);
                    u['innerHTML'] = E[E['length'] - 0x1] + '\x20', z = !![];
                    return;
                }
                z = ![], w++;
                if (w >= v['length']) {
                    ClearChild(t, u, $('daveName')), oEffects['Animate'](s, { 'opacity': 0x1 }, 0x5 / oSym['NowSpeed'], 'ease', G => {
                        Exitlevel(oS['Lvl']);
                    }, 0x1);
                    let F = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:399;width:900px;height:600px;background:white;opacity:0;', 0x0, EDAll);
                    oEffects['Animate'](F, { 'opacity': 0x1 }, 2.5 / oSym['NowSpeed'], 'ease', ![], 3.5);
                    return;
                }
                w == 0xa && k('');
                w == 0xb && (d['innerHTML'] = g, k('images/Props/Industry25/dave.png', {
                    'backgroundSize': '376.75px\x20550px',
                    'left': '230px'
                }));
                if (w == 0xc)
                    for (let G = 0x1; G < 0xf; G++) {
                        oSym['addTask'](Math['random']() * 0x64, () => {
                            let H = [
                                    $__language_Array__['dc8f796923bf8a23aea2f8d894491403'],
                                    $__language_Array__['a15eab31b32925cdb030c7ffe370b0dc'],
                                    $__language_Array__['7403bd016d6b43e6a6a3afda29bf31e3'],
                                    $__language_Array__['2669b124fc65a54a15e8f71d58a89683'],
                                    $__language_Array__['ff851d71de35e3eef0d8dab8aff9cfce'],
                                    $__language_Array__['af224110261422158150578f7a0162ce']
                                ]['random'](), I = Math['random']() * (0x35c - H['length'] * 0x12);
                            j(H, [
                                I,
                                (G - 0x1) * 0x28
                            ]);
                        });
                    }
                u['innerText'] = '';
                let A = v[w], B = A instanceof Array ? A : A['split'](''), C = 0x0, D = w;
                setTimeout(function H() {
                    if (w != D || C >= B['length'] || z) {
                        C >= B['length'] && !z && setTimeout(I => {
                            w == D && !z && (z = !![], u['innerHTML'] += '\x20');
                        }, 0xc8);
                        return;
                    }
                    u['innerHTML'] += B[C++], setTimeout(H, y[B[C - 0x1]] ? y[B[C - 0x1]] : 0x32);
                }, 0x32);
            }, u['click']();
        }
    }
});