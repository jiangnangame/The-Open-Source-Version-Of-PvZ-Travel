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
            'images/Props/PolarPlots/Dave_CloseEye.png',
            'images/Props/PolarPlots/Dave_CloseMouse.png',
            'images/Props/PolarPlots/Dave_CloseEyeMouse.png'
        ];
    }()),
    'LoadMusic': 'Bgm_Polar_4_NPC',
    'StartGameMusic': 'Bgm_Marsh_Ready',
    'backgroundImage': 'images/interface/Polar2.webp',
    'LoadAccess': function (b) {
        CSpeed(0x1), EDAll['scrollLeft'] = 0x73;
        let c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#000;opacity:0;left:115px;', 0x0, EDAll), d = NewEle('effect' + Math['random'](), 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:rgba(0,0,0,0);opacity:1;left:115px;', 0x0, EDAll), e = NewEle('effect' + Math['random'](), 'div', 'font-size:28px;position:absolute;color:white;text-align:center;line-height:600px;z-index:257;width:900px;left:115px;height:600px;opacity:0;', 0x0, EDAll), f = [
                'images/interface/Dave.png',
                'images/Props/PolarPlots/Dave_CloseEye.png',
                'images/Props/PolarPlots/Dave_CloseMouse.png',
                'images/Props/PolarPlots/Dave_CloseEyeMouse.png'
            ];
        oEffects['Animate'](d, { 'background': 'rgba(0,0,0,1)' }, 'slow', 'linear', () => {
            e['innerText'] = $__language_Array__['56e73f3ae303c7d502e07f78c1bbcc5e'], oEffects['fadeIn'](e, 0x2, () => {
                oSym['addTask'](0x64, function () {
                    oEffects['Animate'](d, { 'background': 'rgba(0,0,0,0)' }, 0x2), oEffects['fadeOut'](e, 0x2, () => {
                        e['style']['display'] = d['style']['display'] = 'none', g();
                    });
                });
            });
        });
        function g() {
            let k = 0x0, l = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), m = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
            (function n() {
                l['onclick'] = n;
                switch (k) {
                case 0x0:
                    m['src'] = f[0x2], PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['d482c3c950a28954ddb9e43de18589de']), k++;
                    break;
                case 0x1:
                    m['src'] = f[0x0], PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['58bd08edde2a607e9f3c29dc5e81f97b']), k++;
                    break;
                case 0x2:
                    m['src'] = f[0x2], PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['174f18dd1cf7a072e19ede225dd6dc33']), k++;
                    break;
                case 0x3:
                    m['src'] = f[0x0], PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['48d3fc7e1428b785856ea2d1e30ef95f']), k++;
                    break;
                case 0x4:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['5b522426f345af65f1339d75e50e52bd']), k++;
                    break;
                case 0x5:
                    m['src'] = f[0x2], PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['53659b03f02149b88daa66ac5fc88d54']), k++;
                    break;
                case 0x6:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['edf9cb2d91f9ebcb21ad9c3b4a1c1763']), k++;
                    break;
                case 0x7:
                    m['src'] = f[0x0], PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['53e12af9285cf7926b6d9c5961403963']), k++;
                    break;
                case 0x8:
                    m['src'] = f[0x2], PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['4e38009132ec4d5f15bf9ebc1788763c']), k++;
                    break;
                case 0x9:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['f13f350c4916339e18d5f4780c989b21']), k++;
                    break;
                case 0xa:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['7475ec2d57fd431c73d30364c208b097']), k++;
                    break;
                case 0xb:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['03927837660e4caa41a4c09d3ebc0391']), k++;
                    break;
                case 0xc:
                    m['src'] = f[0x0], PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['63748b8be43da07a5fb21888d50f6713']), k++;
                    break;
                case 0xd:
                    m['src'] = f[0x2], PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['9904d647584c9dfa25a34a9727853087']), k++;
                    break;
                case 0xe:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['5623b925b0dfd2aed15ac1d21838b921']), k++;
                    break;
                case 0xf:
                    m['src'] = f[0x0], PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['ccc5a82ebed45f6348d536ea3c2a1d50']), k++;
                    break;
                case 0x10:
                    m['src'] = f[0x2], PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['c71a216a8e1bffd6ea5c8edd6dba4a95']), k++;
                    break;
                case 0x11:
                    m['src'] = f[0x0], PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['e7774f649895d7bfaa4b79fbffcaccbc']), k++;
                    break;
                case 0x12:
                    m['src'] = f[0x2], PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), l['innerHTML'] = $__language_Array__['58f38eab10e739aef4564b33a4d7a2f4'], k++;
                    break;
                case 0x13:
                    m['src'] = f[0x3], PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['26076065bb308cb0ae4cf287092f8cc1']), k++;
                    break;
                case 0x14:
                    m['src'] = f[0x0], PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['cbc82b2fd3449064ea2d6d5bbde0bbad']), k++;
                    break;
                case 0x15:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['34639b54e047c5e995f6ec882f325ba1']), k++;
                    break;
                case 0x16:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['d6ffda2df150a991466dd71c4103fc84']), k++;
                    break;
                case 0x17:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['b608474849d4806ac69fd380ef577518']), k++;
                    break;
                case 0x18:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['ee0bdb741caa1fd9f249474103426a7b']), k++;
                    break;
                case 0x19:
                    m['src'] = f[0x2], PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['dd4ccbc2f95d1e08604482b07f6f5476']), k++;
                    break;
                case 0x1a:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['0b417998abe6dc6dd1f37ef8698548d8']), k++;
                    break;
                case 0x1b:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['6be1c343bdf2e4d919e9f07a85b36601']), k++;
                    break;
                case 0x1c:
                    l['onclick'] = null, m['src'] = f[0x3], PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(l, $__language_Array__['baa0b4cf6ee3f99b03d3a082b22ca2b0']), oEffects['fadeIn'](c, 'slow', () => l['onclick'] = n), k++;
                    break;
                case 0x1d:
                    ClearChild(l, m), ClearChild(c), h();
                }
            }());
        }
        function h() {
            d['style']['background'] = 'rgba(0,0,0,1)', e['style']['display'] = d['style']['display'] = '', e['innerText'] = $__language_Array__['3946a86a9be1b8c411c792ed61970e60'], oEffects['fadeIn'](e, 0x2, () => {
                oSym['addTask'](0x64, function () {
                    oEffects['fadeOut'](e, 0x2, () => {
                        e['style']['display'] = 'none', i();
                    });
                });
            });
        }
        function i(k) {
            m();
            function l() {
                NewEle('DivA', 'div', 'position:absolute;width:900px;height:600px;background:#FFF;opacity:0;z-index:257;left:115px;', 0x0, EDAll), ShowWinItem(GetPlantCardDom(oKiwibeast));
            }
            function m() {
                let n = NewEle('talk' + Math['random'](), 'div', 'z-index:300;color:white;font-size:20px;position:absolute;padding-top:40px;bottom:0;left:265px;height:220px;width:600px;border:5px\x200\x200\x200;background:rgba(30,30,30,0.5);', 0x0, EDAll), o = NewEle('talk' + Math['random'](), 'div', 'cursor:pointer;word-break:break-all;z-index:300;padding:0;color:white;font-size:20px;position:absolute;top:30px;left:20px;height:200px;width:560px;', 0x0, n), p = NewEle('daveName', 'div', 'pointer-events:\x20none;\x20word-break:\x20break-all;\x20z-index:\x20300;\x20color:\x20white;\x20font-size:\x2020px;\x20position:\x20absolute;padding-left:20px;\x20bottom:\x20230px;\x20left:\x20265px;\x20height:\x2025px;\x20width:\x20600px;', 0x0, EDAll), q = [
                        $__language_Array__['89d20ccc5ca7f8b57b25eb5ebdce92a9'],
                        $__language_Array__['e8c369a964e71f629ef50f96f08f19ac'],
                        $__language_Array__['037bed19b0dceb8b8f96463585c212f3'],
                        $__language_Array__['eff9c624fb87a96f6c907c165022fe3c']
                    ], r = -0x1, s = 0x32, t = {
                        '，': 0xc8,
                        '…': 0x12c
                    }, u = ![];
                o['onclick'] = function () {
                    if (r >= 0x0 && o['innerHTML']['length'] < q[r]['length']) {
                        let A = q[r]['split']($__language_Array__['481698af20c491019bcad87be9aba4ef']);
                        o['innerHTML'] = A[A['length'] - 0x1] + '\x20', u = !![];
                        return;
                    }
                    u = ![], r++;
                    if (r >= q['length']) {
                        ClearChild(n, p), l();
                        return;
                    }
                    o['innerHTML'] = '', p['innerHTML'] = $__language_Array__['21a8c264572eabf880865948aded7f1d'];
                    let v = q[r], w = v instanceof Array ? v : v['split'](''), x = 0x0, y = '', z = r;
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
        }
        function j() {
            toWin();
        }
    }
});