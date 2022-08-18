/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS['Init']({
    'PicArr': (function () {
        let b = 'images/interface/';
        return [b + 'Polar.webp'];
    }()),
    'LoadMusic': '',
    'StartGameMusic': 'Bgm_Marsh_Ready',
    'backgroundImage': 'images/interface/Polar.webp',
    'LevelEName': 0x1,
    'LoadAccess': function (b) {
        let c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), d = 0x0, e = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), f = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function i() {
            e['onclick'] = i;
            switch (d) {
            case 0x0:
                e['onclick'] = null, f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['018ab1d601abe66b367140a85bec1897']), oEffects['fadeIn'](c, 'slow', () => e['onclick'] = i), d++;
                break;
            case 0x1:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), e['innerHTML'] = '<p\x20style=\x27position:absolute;top:-18px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['600b9fa2cf789fcf02515f2b9fe2129d'],
                    'font_size': 0x10
                })[0x0] + '</p>', e['style']['fontSize'] = '16px', d++;
                break;
            case 0x2:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, '……'), d++;
                break;
            case 0x3:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(e, '……'), e['style']['fontSize'] = '18px', d++;
                break;
            case 0x4:
                PlayAudio('Zomboss2'), innerText(e, $__language_Array__['3e581c698b78a2ad377e365b5337a93e']), d++;
                break;
            case 0x5:
                PlayAudio('Zomboss2'), e['onclick'] = null, innerText(e, $__language_Array__['96ac9f0bed892674faec980cf8458134']), oEffects['Animate'](c, { 'background': 'black' }, 'slow', 'linear', () => e['onclick'] = i), d++;
                break;
            case 0x6:
                PlayAudio('Zomboss2'), innerText(e, $__language_Array__['67a37b25b83345b4df02eba1c64d0db4']), d++;
                break;
            case 0x7:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['b641760735d47fde75eb0a8fac32d9df']), d++;
                break;
            case 0x8:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(e, $__language_Array__['df144433523ba441c8662a6cc84022f7']), d++;
                break;
            case 0x9:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['3bf91d7adfa87e71bc401da1924a41dd']), d++;
                break;
            case 0xa:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(e, $__language_Array__['9fc81f3524b1631b9ade488def5e9a40']), d++;
                break;
            case 0xb:
                PlayAudio('Zomboss1'), innerText(e, $__language_Array__['b1303e901968258c24da94477ff91a2d']), d++;
                break;
            case 0xc:
                PlayAudio('Zomboss1'), innerText(e, $__language_Array__['0461b6c7d9736a430fb3b6b9d3c83c77']), d++;
                break;
            case 0xd:
                PlayAudio('Zomboss3'), innerText(e, $__language_Array__['297cac05da17b0acb0d0c8ca9c41cb5e']), d++;
                break;
            case 0xe:
                PlayAudio('Zomboss2'), innerText(e, $__language_Array__['f89bb5783bc889043870237b45203e77']), d++;
                break;
            case 0xf:
                PlayAudio('Zomboss1'), innerText(e, $__language_Array__['e471fb6b4895087ad15388badb7d5ab3']), d++;
                break;
            case 0x10:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['388d52de7c7ec33e315612240caa7dd4']), d++;
                break;
            case 0x11:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['baad7dbfb44aa31ba6f947d66d8ef57a']), d++;
                break;
            case 0x12:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(e, $__language_Array__['4a55dcc6ec28808f0f0f46b11ea2afb3']), d++;
                break;
            case 0x13:
                PlayAudio('Zomboss3'), innerText(e, $__language_Array__['a4e96335a52a7b50d98a719f84744c0a']), d++;
                break;
            case 0x14:
                PlayAudio('Zomboss2'), innerText(e, $__language_Array__['bcd3e6ffcf9d735d73dda63e0b023d7a']), d++;
                break;
            case 0x15:
                e['onclick'] = () => {
                    f['style']['display'] = e['style']['display'] = 'none', g(e, i);
                }, f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['8aae17ea72ff8310d4f328125a34d0d4']), d++;
                break;
            case 0x16:
                f['style']['display'] = e['style']['display'] = '', f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(e, $__language_Array__['911441be4e27205e58525a04549854d7']), d++;
                break;
            case 0x17:
                PlayAudio('crazydavelong3'), innerText(e, $__language_Array__['7bd4f652b657713808337cd1be52e3c0']), d++;
                break;
            case 0x18:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['15b5640db270bc23c3eec8f9a98f52fd']), d++;
                break;
            case 0x19:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['99c84800b9f4cce990ebb794101ad1a2']), d++;
                break;
            case 0x1a:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(e, $__language_Array__['2f51bf3c4b9f044c84e8d2cfa271cb68']), d++;
                break;
            case 0x1b:
                PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['a4fac2dd105bda6ba2562e9fd3b5d65e']), d++;
                break;
            case 0x1c:
                PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['252293e2f364798e20311bcb898ec6b9']), d++;
                break;
            case 0x1d:
                ClearChild(e, f), ClearChild(c), h();
            }
        }());
        function g(j, k) {
            j['onclick'] = null;
            let l = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:299;width:900px;height:600px;background:white;opacity:0;pointer-events:none;', 0x0, EDAll);
            oEffects['fadeIn'](l, 'slow', () => {
                n();
                function m() {
                    oEffects['fadeOut'](l, 'slow', () => {
                        ClearChild(l), j['onclick'] = k;
                    }), k();
                }
                function n() {
                    let o = NewEle('talk' + Math['random'](), 'div', 'z-index:300;color:white;font-size:20px;position:absolute;padding-top:40px;bottom:0;left:150px;height:220px;width:600px;border:5px\x200\x200\x200;background:rgba(30,30,30,0.5);', 0x0, EDAll), p = NewEle('talk' + Math['random'](), 'div', 'cursor:pointer;word-break:break-all;z-index:300;padding:0;color:white;font-size:20px;position:absolute;top:30px;left:20px;height:200px;width:560px;', 0x0, o), q = NewEle('daveName', 'div', 'pointer-events:\x20none;\x20word-break:\x20break-all;\x20z-index:\x20300;\x20color:\x20white;\x20font-size:\x2020px;\x20position:\x20absolute;padding-left:20px;\x20bottom:\x20230px;\x20left:\x20150px;\x20height:\x2025px;\x20width:\x20600px;', 0x0, EDAll), r = [
                            [
                                $__language_Array__['69369554ccdab3d77a05f960a536cd05'],
                                $__language_Array__['f1a8a6e7dd595f41a214aa9e865ae0a7']
                            ],
                            [
                                $__language_Array__['69369554ccdab3d77a05f960a536cd05'],
                                $__language_Array__['9d7dd652d7c3a270fa1e4e61879f680f']
                            ],
                            [
                                $__language_Array__['69369554ccdab3d77a05f960a536cd05'],
                                '……'
                            ],
                            [
                                $__language_Array__['69369554ccdab3d77a05f960a536cd05'],
                                $__language_Array__['0daf44fead1c8ac188aa8b4787b9ad1c']
                            ],
                            [
                                $__language_Array__['69369554ccdab3d77a05f960a536cd05'],
                                $__language_Array__['fdbc82ea10d61893e2bb7237b99fa516']
                            ],
                            [
                                $__language_Array__['69369554ccdab3d77a05f960a536cd05'],
                                '……'
                            ],
                            [
                                $__language_Array__['69369554ccdab3d77a05f960a536cd05'],
                                $__language_Array__['66a48d83774b7f458c08934e94c6b69c']
                            ]
                        ], s = -0x1, t = 0x32, u = {
                            '，': 0xc8,
                            '…': 0x12c
                        }, v = ![];
                    p['onclick'] = function () {
                        if (s >= 0x0 && p['innerText']['length'] < r[s][0x1]['length']) {
                            let B = r[s][0x1]['split']($__language_Array__['0e48ac3462100bd1b9365228aa462731']);
                            p['innerText'] = B[B['length'] - 0x1] + '\x20', v = !![];
                            return;
                        }
                        v = ![], s++;
                        if (s >= r['length']) {
                            ClearChild(o, q), m();
                            return;
                        }
                        p['innerText'] = '', q['innerText'] = r[s][0x0];
                        let w = r[s][0x1], x = w instanceof Array ? w : w['split'](''), y = 0x0, z = '', A = s;
                        setTimeout(function C() {
                            if (s != A || y >= x['length'] || v) {
                                y >= x['length'] && !v && setTimeout(D => {
                                    s == A && !v && (v = !![], p['innerText'] = z += '\x20');
                                }, 0xc8);
                                return;
                            }
                            p['innerText'] = z += x[y++], setTimeout(C, u[x[y - 0x1]] ? u[x[y - 0x1]] : t);
                        }, t);
                    }, p['click']();
                }
            });
        }
        function h() {
            SelectModal('Polar6');
        }
    }
});