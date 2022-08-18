/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
window['__run__Plot__'] = function (a, b) {
    console['log']('done');
    function c(v, w = 0x14, x = !![], y = 'Microsoft\x20YaHei,Arial', z = 0.2, A = 0x1d6) {
        let B = {
            'text': v,
            'font_size': w,
            'str': x,
            'font_family': y,
            'time_range': z,
            'width': A
        };
        return oEffects['TextEffects']['ShakeText'](B);
    }
    let d = [], e = localStorage['JNG_TR_MarshRandomPlot'] ? JSON['parse'](localStorage['JNG_TR_MarshRandomPlot']) : {};
    for (let v = 0x1; v < 0x65; v++) {
        !e[v] && d['push'](v);
    }
    let f = d['random'](), g = [
            0x5,
            0x34,
            0x2,
            0x1c,
            0x8,
            0x54,
            0x4,
            0x31,
            0x9,
            0x5b,
            0x1
        ];
    localStorage['JNG_DEV'] && (f = Number['parseInt'](prompt('Number:', '5')));
    for (let w of g) {
        if (w === f) {
            var h;
            e[f] = !![];
            f === 0x9 && e[0x5b] && (e['Plot1_Judge3'] = !![]);
            if (f === 0x9 || f === 0x5b) {
                var j;
                e['maxday'] = Math['max'](a, (j = e['maxday']) !== null && j !== void 0x0 ? j : 0x0);
            }
            f === 0x1 && (((h = e['maxday']) !== null && h !== void 0x0 ? h : 0x0) > a || !e[0x9] && !e[0x5b] || e[0x4]) && (delete e[f], f = -0x1);
            localStorage['JNG_TR_MarshRandomPlot'] = JSON['stringify'](e);
            break;
        }
    }
    switch (f) {
    case 0x5:
        k();
        break;
    case 0x34:
        l();
        break;
    case 0x2:
        m();
        break;
    case 0x1c:
        n();
        break;
    case 0x8:
        o();
        break;
    case 0x54:
        p();
        break;
    case 0x4:
        q();
        break;
    case 0x31:
        r();
        break;
    case 0x9:
        s();
        break;
    case 0x5b:
        t();
        break;
    case 0x1:
        u();
        break;
    default:
        oSym['addTask'](0x1e, b);
    }
    function k() {
        let x = 0x0, y = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), z = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function A() {
            y['onclick'] = A;
            switch (x) {
            case 0x0:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['007c2f43a6e94dcc54477ba4ac6fb093']), x++;
                break;
            case 0x1:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(y, $__language_Array__['5f24421ea5b4520ce8f31c18f448c1ab']), x++;
                break;
            case 0x2:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['06a5cb4de39c5a7dfc92d7219385dd55']), x++;
                break;
            case 0x3:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['ea77ca492ff97afb2d684fcde3f857d6']), x++;
                break;
            case 0x4:
                ClearChild(y, z), oSym['addTask'](0x1e, b);
            }
        }());
    }
    function l() {
        let x = 0x0, y = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), z = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function A() {
            y['onclick'] = A;
            switch (x) {
            case 0x0:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['1a1d28c0a45a795f05b14a5af50d897f']), x++;
                break;
            case 0x1:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['c4546d03c1aec419aa30af421e653013']), x++;
                break;
            case 0x2:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(y, $__language_Array__['27982038e9f6b7a1138051802daa39dc']), x++;
                break;
            case 0x3:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['b39d069293ea84a95202e9d78d579b02']), x++;
                break;
            case 0x4:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['799e1af93c93c5a1d37f194975b21b08']), x++;
                break;
            case 0x5:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['9fff6f71334136595b72345a6107c97a']), x++;
                break;
            case 0x6:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, '……'), x++;
                break;
            case 0x7:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['0463b95e18c9ea656d95c689f9621100']), x++;
                break;
            case 0x8:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['ca4eb45b4f776edbfcdfe294f2156fbc']), x++;
                break;
            case 0x9:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(y, $__language_Array__['d5039d1c45701f0705b2a163f4e29519']), x++;
                break;
            case 0xa:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['e5083f918ceaccda8e368e082e7c72af']), x++;
                break;
            case 0xb:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, '……'), x++;
                break;
            case 0xc:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['bfd31a75050b56911b1e659c8f4bcbaa']), x++;
                break;
            case 0xd:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(y, '……'), x++;
                break;
            case 0xe:
                PlayAudio('Zomboss3'), innerText(y, $__language_Array__['12d89f74747f5cbfef57a19f020a77a7']), x++;
                break;
            case 0xf:
                ClearChild(y, z), oSym['addTask'](0x1e, b);
            }
        }());
    }
    function m() {
        let x = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), y = 0x0, z = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), A = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function B() {
            z['onclick'] = B;
            switch (y) {
            case 0x0:
                z['onclick'] = null, A['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(z, '……'), oEffects['fadeIn'](x, 'slow', () => z['onclick'] = B), y++;
                break;
            case 0x1:
                PlayAudio('Zomboss3'), innerText(z, $__language_Array__['51dbac4c20e43fac26f5de5ecc42a5da']), y++;
                break;
            case 0x2:
                PlayAudio('Zomboss1'), innerText(z, $__language_Array__['1657a5376a735504ba904600274e3ce2']), y++;
                break;
            case 0x3:
                PlayAudio('Zomboss2'), innerText(z, $__language_Array__['4cdd3898562a7ff9013c68cecbc74e1b']), y++;
                break;
            case 0x4:
                PlayAudio('Zomboss3'), innerText(z, $__language_Array__['88b0766111d21036f782391e8aed6cbe']), y++;
                break;
            case 0x5:
                PlayAudio('Zomboss2'), innerText(z, $__language_Array__['124774daef373deb6fc5e3399e3e9772']), y++;
                break;
            case 0x6:
                z['onclick'] = null, A['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(z, $__language_Array__['b06af37b2d0cae181c2103ea838278d3']), oEffects['fadeOut'](x, 0.1, () => {
                    z['onclick'] = B;
                }), y++;
                break;
            case 0x7:
                z['onclick'] = null, A['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(z, $__language_Array__['c3e7aa4633d7b7a3a2fa31db6594e6bb']), y++, oEffects['fadeIn'](x, 0.1, () => {
                    z['onclick'] = B;
                });
                break;
            case 0x8:
                PlayAudio('Zomboss3'), innerText(z, $__language_Array__['6728317bd1fd881bf78684bf0fa62fa9']), y++;
                break;
            case 0x9:
                PlayAudio('Zomboss3'), innerText(z, $__language_Array__['6ab29e2c93743d163132735b97010e1b']), y++;
                break;
            case 0xa:
                PlayAudio('Zomboss1'), innerText(z, $__language_Array__['1d2d67c443cb56c8c7489ca1ab9135eb']), y++;
                break;
            case 0xb:
                PlayAudio('Zomboss2'), innerText(z, $__language_Array__['f930a9ced13a5485b38aab8c7b7fe4df']), y++;
                break;
            case 0xc:
                PlayAudio('Zomboss3'), innerText(z, $__language_Array__['34561e1469a564b43564969d5d22a496']), y++;
                break;
            case 0xd:
                PlayAudio('Zomboss2'), innerText(z, $__language_Array__['4e0e5b0264ed6bba16f6775117cd8e57']), y++;
                break;
            case 0xe:
                PlayAudio('Zomboss2'), innerText(z, $__language_Array__['9ac61d8a66efbf99d909c5cfd372dc6c']), y++;
                break;
            case 0xf:
                ClearChild(z, A), oEffects['fadeOut'](x, 'slow', C => {
                    ClearChild(C), b();
                });
            }
        }());
    }
    function n() {
        let x = 0x0, y = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), z = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function A() {
            y['onclick'] = A;
            switch (x) {
            case 0x0:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['8731f978a0caea0685e92cc90ff7d109']), x++;
                break;
            case 0x1:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(y, $__language_Array__['226a073a023547db1c4663f7ff36ca83']), x++;
                break;
            case 0x2:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['c0306aa6f694258983eb938a5f9222ad']), x++;
                break;
            case 0x3:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['b01fe99c1a19134dd2b9a4240abe0fbf']), x++;
                break;
            case 0x4:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(y, $__language_Array__['e7d298dc3fb2b7fea4fca98f9d3faf8b']), x++;
                break;
            case 0x5:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['399b7a86cb997cea48bc75ffee384d29']), x++;
                break;
            case 0x6:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['987e93319d41d786c2da7db252fe766a']), x++;
                break;
            case 0x7:
                PlayAudio('Zomboss2'), innerText(y, $__language_Array__['6655f573fc0e0aa127b96766321c4bb8']), x++;
                break;
            case 0x8:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['f63edc94108736948cb30e23ec330bef']), x++;
                break;
            case 0x9:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['d8c2a82f518e68e013acb5794faf80d0']), x++;
                break;
            case 0xa:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(y, $__language_Array__['e7b85a0f432babf3bac473d731f6552d']), x++;
                break;
            case 0xb:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['25b4317a3652e60d1cdfcd2adb94e543']), x++;
                break;
            case 0xc:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(y, $__language_Array__['0e7aedc12a5d2d781ceed194f64fe3e3']), x++;
                break;
            case 0xd:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['1ea298cf09c673a19f79cab14755648e']), x++;
                break;
            case 0xe:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, '……'), x++;
                break;
            case 0xf:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['c00ab21f25191a1d50b44e866f6f3836']), x++;
                break;
            case 0x10:
                ClearChild(y, z), oSym['addTask'](0x1e, b);
            }
        }());
    }
    function o() {
        let x = 0x0, y = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), z = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function D() {
            y['onclick'] = D;
            switch (x) {
            case 0x0:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['3c20515c98370ad23d34d893ef1134e2']), x++;
                break;
            case 0x1:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(y, $__language_Array__['09163a2fca4adc79f687fcb4ed61b1e4']), x++;
                break;
            case 0x2:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['12f806f93b9f0ac3a8b4661936537ac7']), x++;
                break;
            case 0x3:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(y, $__language_Array__['5d64ea23955035a254c8111f538416d8']), x++;
                break;
            case 0x4:
                PlayAudio('Zomboss3'), innerText(y, $__language_Array__['d0bddf867842b88bf11ba05d6db9d3ed']), x++;
                break;
            case 0x5:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['378f8ae43b7294a4b9a01b280ae758e3']), x++;
                break;
            case 0x6:
                x = 0x0;
                if (!e[0x1] && !e[0x4])
                    A();
                else {
                    if (e[0x4])
                        B();
                    else
                        e[0x1] && C();
                }
            }
        }());
        function A() {
            y['onclick'] = A;
            switch (x) {
            case 0x0:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(y, $__language_Array__['382f02c1fd4a1f93dbc95509a7a19cf2']), x++;
                break;
            case 0x1:
                PlayAudio('Zomboss3'), innerText(y, $__language_Array__['8e793f77771c3bd6b1849624da0e878b']), x++;
                break;
            case 0x2:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, '……'), x++;
                break;
            case 0x3:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['6cfb8a6024dc23cb6c67569522e76b7a']), x++;
                break;
            case 0x4:
                ClearChild(y, z), oSym['addTask'](0x1e, b);
            }
        }
        function B() {
            y['onclick'] = B;
            switch (x) {
            case 0x0:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(y, $__language_Array__['b90fbe095ae01e5e8fb3512d9bea1608']), x++;
                break;
            case 0x1:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['a06e6921794f29c5b6f1b2d495b6e73f']), x++;
                break;
            case 0x2:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['6cfb8a6024dc23cb6c67569522e76b7a']), x++;
                break;
            case 0x3:
                ClearChild(y, z), oSym['addTask'](0x1e, b);
            }
        }
        function C() {
            oS['LoadMusic'] != 'Bgm_Marsh_Plot' && (StopMusic(), PlayMusic(oS['LoadMusic'] = 'Bgm_Marsh_Plot'), NewMusic(oS['LoadMusic'] = 'Bgm_Marsh_Plot'));
            y['onclick'] = C;
            switch (x) {
            case 0x0:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(y, '……'), x++;
                break;
            case 0x1:
                PlayAudio('Zomboss3'), innerText(y, $__language_Array__['35b7a31a3c00cedfa70fdcb0dff7099c']), x++;
                break;
            case 0x2:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['1a3fb0cee9df89dcd79f9624963068e8']), x++;
                break;
            case 0x3:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(y, $__language_Array__['2278d8aaa0d820078cb49c29daad0f7b']), x++;
                break;
            case 0x4:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['2a1435a8aeceea7c682660e85e7bc7f6']), x++;
                break;
            case 0x5:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['bd2ac400ad42a5b9c0bc9d7018cf9398']), x++;
                break;
            case 0x6:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['568e0a88974e63256c271e8cad0f0e36']), x++;
                break;
            case 0x7:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(y, $__language_Array__['084776fe2f5de76d762fecf009f03c49']), x++;
                break;
            case 0x8:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['ae61028f26e2151fd9de5ae2414e14d9']), x++;
                break;
            case 0x9:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['0f1c1cd8c0bd1c9f72a6aed5c334fe9d']), x++;
                break;
            case 0xa:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(y, $__language_Array__['51f2b42bb61ee41e0a01fe8345ef1c30']), x++;
                break;
            case 0xb:
                PlayAudio('Zomboss2'), innerText(y, $__language_Array__['882d1be1b69706fe14076c05e9f1dfaa']), x++;
                break;
            case 0xc:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['dcd1f3b8f44ae0a51b74ca5a27c985bd']), x++;
                break;
            case 0xd:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['f401901a23857b08d1d2ca8268b4b6e3']), x++;
                break;
            case 0xe:
                PlayAudio('Zomboss3'), innerText(y, $__language_Array__['45cbeedf43904af48255831cbb5a43ea']), x++;
                break;
            case 0xf:
                PlayAudio('Zomboss3'), innerText(y, $__language_Array__['a274b9143c497bf08d8cbac5ed8f56e4']), x++;
                break;
            case 0x10:
                PlayAudio('Zomboss2'), innerText(y, $__language_Array__['9e28f186d3d03266a6fc6a63617a9bcd']), x++;
                break;
            case 0x11:
                PlayAudio('Zomboss2'), innerText(y, $__language_Array__['6f9b379056e28ed3d8feb19468273f15']), x++;
                break;
            case 0x12:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['a5b630be6741f74d5d768f20c88ba28f']), x++;
                break;
            case 0x13:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(y, $__language_Array__['f3e54f8a6786dd960849293b421d4a91']), x++;
                break;
            case 0x14:
                PlayAudio('Zomboss2'), innerText(y, $__language_Array__['23d36d8c7068301bb0f222663ae551cb']), x++;
                break;
            case 0x15:
                PlayAudio('Zomboss2'), innerText(y, $__language_Array__['7b4afb742aa7e1b25f17609387dbc3b5']), x++;
                break;
            case 0x16:
                PlayAudio('Zomboss1'), y['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:20px;\x27>' + c($__language_Array__['e320c1c5454fc65edfeba7b5daedc47e'], 0x12, !![], '')[0x0] + '</p>', x++;
                break;
            case 0x17:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), y['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:20px;\x27>' + c('……emm……', 0x12, !![], '')[0x0] + '</p>', x++;
                break;
            case 0x18:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), y['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:20px;\x27>' + c($__language_Array__['12c5c2be45490c8441d8ea5d6907d102'], 0x12, !![], '')[0x0] + '</p>', x++;
                break;
            case 0x19:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['61e658e80c37581bef002dac405a12e6']), x++;
                break;
            case 0x1a:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(y, $__language_Array__['b4d17f8389869e1804742687639799e7']), x++;
                break;
            case 0x1b:
                ClearChild(y, z), oSym['addTask'](0x1e, b);
            }
        }
    }
    function p() {
        let x = 0x0, y = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), z = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function A() {
            y['onclick'] = A;
            switch (x) {
            case 0x0:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['4ebee13447aca4a65cf20cce9fd5e991']), x++;
                break;
            case 0x1:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(y, $__language_Array__['cf86abfe02c4393bbc2d43c34d364166']), x++;
                break;
            case 0x2:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['6244139a1790b3ffd34fb04a7640f82a']), x++;
                break;
            case 0x3:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['af878a21e25b52df60fd8fb7aaa91d79']), x++;
                break;
            case 0x4:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(y, $__language_Array__['416c1abe6a36395b6e0ff13021b1b35e']), x++;
                break;
            case 0x5:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['e6647dce22f5068e456ab785a4523805']), x++;
                break;
            case 0x6:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(y, $__language_Array__['3d5cd098b131923f02dc6b89ba706a9c']), x++;
                break;
            case 0x7:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['65d5fcfe91e3d8f7b738194067f25a21']), x++;
                break;
            case 0x8:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(y, $__language_Array__['4a5d22ff9dbdd5c6c5e06a72067991b2']), x++;
                break;
            case 0x9:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['eebabacaa3a1ad3911ba42c89619eea7']), x++;
                break;
            case 0xa:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(y, $__language_Array__['d29f9e2663b40ddcdcf0ffb702154d89']), x++;
                break;
            case 0xb:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['44efe5b6d95f168781f0047a21216f35']), x++;
                break;
            case 0xc:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['1c1afbd98d61275e93a401190fecbc52']), x++;
                break;
            case 0xd:
                PlayAudio('Zomboss3'), innerText(y, $__language_Array__['c21a94e3bdf08906bb114e2dd0f8cdf7']), x++;
                break;
            case 0xe:
                PlayAudio('Zomboss3'), innerText(y, $__language_Array__['5289a9fe658c3282201a06c76852abb2']), x++;
                break;
            case 0xf:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['c6cff45fd5ad69101bd07fdfcdf2d665']), x++;
                break;
            case 0x10:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['35b5b60f3fce72995f536e965d31b9f5']), x++;
                break;
            case 0x11:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(y, $__language_Array__['deb6dd3bf1fc3e6a655406c8eb86c96a']), x++;
                break;
            case 0x12:
                PlayAudio('Zomboss2'), innerText(y, $__language_Array__['7b2c459d1a763a3a790ec68c163cbaa6']), x++;
                break;
            case 0x13:
                PlayAudio('Zomboss2'), innerText(y, $__language_Array__['c975fbc08bfd5ea0a086ec8cceaaac4b']), x++;
                break;
            case 0x14:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['c6cb97e983209994f9cbe47f36ce3eb9']), x++;
                break;
            case 0x15:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(y, $__language_Array__['4be2a407a22461ce346c1808dfd7aa88']), x++;
                break;
            case 0x16:
                PlayAudio('Zomboss2'), innerText(y, $__language_Array__['0896539087a0b1dd4c1a2ff30d2514dc']), x++;
                break;
            case 0x17:
                PlayAudio('Zomboss3'), innerText(y, $__language_Array__['e49a0dfb10f1a9f649c7d2b955e3dbed']), x++;
                break;
            case 0x18:
                PlayAudio('Zomboss2'), innerText(y, $__language_Array__['e6a319f47c05ad8fa324a273dd8815e5']), x++;
                break;
            case 0x19:
                PlayAudio('Zomboss2'), innerText(y, $__language_Array__['4fe4492acb25cc5ac3348d6d0c97f8de']), x++;
                break;
            case 0x1a:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['e38670a76787f4489d53212cee1bd0b2']), x++;
                break;
            case 0x1b:
                PlayAudio('Zomboss2'), innerText(y, $__language_Array__['47c93f8fcb81db5826133730b6c9a831']), x++;
                break;
            case 0x1c:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, '……'), x++;
                break;
            case 0x1d:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(y, $__language_Array__['7a7be9e7a358637ecdd221873cc4995b']), x++;
                break;
            case 0x1e:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['eaed11023c71490b9e6872fc95481746']), x++;
                break;
            case 0x1f:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(y, $__language_Array__['2c9d471b19fb679b69fb98f4e33c84c3']), x++;
                break;
            case 0x20:
                ClearChild(y, z), oSym['addTask'](0x1e, b);
            }
        }());
    }
    function q() {
        let x = 0x0, y = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), z = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function A() {
            y['onclick'] = A;
            switch (x) {
            case 0x0:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(y, $__language_Array__['0b4f0392771a01ed88c06b8c823f55f0']), x++;
                break;
            case 0x1:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['ec06183e784fb3c5fe7dc5e43d1c89b8']), x++;
                break;
            case 0x2:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['410b073fa56b276efe9a9ce888ff6f9c']), x++;
                break;
            case 0x3:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['217a471183f53dc462c4e95a0589b58b']), x++;
                break;
            case 0x4:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(y, $__language_Array__['ac96f215873005886cc49e1d9dcf6f87']), x++;
                break;
            case 0x5:
                PlayAudio('Zomboss2'), innerText(y, $__language_Array__['86d545c06b25614b16aa414e934af88c']), x++;
                break;
            case 0x6:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['7dd9296ea0492d2544d8f6ce8abde134']), x++;
                break;
            case 0x7:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['cc026f5d8d705c53f073111881977d8d']), x++;
                break;
            case 0x8:
                ClearChild(y, z), oSym['addTask'](0x1e, b);
            }
        }());
    }
    function r() {
        let x = 0x0, y = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), z = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function A() {
            y['onclick'] = A;
            switch (x) {
            case 0x0:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(y, $__language_Array__['0b9798abff339b3181a110a053922ea3']), x++;
                break;
            case 0x1:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['057e40f0a12dd104df0f1a37276dbe23']), x++;
                break;
            case 0x2:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['157b89aa7f676e8ff7fc79bacfd46530']), x++;
                break;
            case 0x3:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['71eaede721e52aa1e5d8935fc41230c5']), x++;
                break;
            case 0x4:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['d10ca60b45fde92ba5344a1904178ed1']), x++;
                break;
            case 0x5:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['fb17fa8e63dc4f31b278dbc26ec62832']), x++;
                break;
            case 0x6:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['c669a084cec6daab8f3bff91d5b491f1']), x++;
                break;
            case 0x7:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(y, $__language_Array__['b886c35c9c763645d1529746db83802c']), x++;
                break;
            case 0x8:
                z['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['cecc22019087400eb031e1c6bd77b5a3']), x++;
                break;
            case 0x9:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['64f6abc6262cf7de3ff63fc2cf4bd3df']), x++;
                break;
            case 0xa:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(y, $__language_Array__['d23cbf0244d3b94509e2ced746956bd0']), x++;
                break;
            case 0xb:
                z['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(y, $__language_Array__['d0bf6ba7e0b1de236d0cd5e8ae19b093']), x++;
                break;
            case 0xc:
                PlayAudio('Zomboss1'), innerText(y, $__language_Array__['6cc3adee5cfeb78ffc2ba4c8953ba058']), x++;
                break;
            case 0xd:
                ClearChild(y, z), oSym['addTask'](0x1e, b);
            }
        }());
    }
    function s() {
        let x = 0x0, y = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), z = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function A() {
            y['onclick'] = A;
            switch (x) {
            case 0x0:
                z['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(y, $__language_Array__['45199ca94316d8b5f32e16f234ecfca3']), x++;
                break;
            case 0x1:
                PlayAudio('crazydavelong1'), innerText(y, $__language_Array__['38ae0388640472ba0ec1ba36c4ac0ff8']), x++;
                break;
            case 0x2:
                PlayAudio('crazydavelong1'), innerText(y, $__language_Array__['863ac8704f242eeee2d86c673d2efbdf']), x++;
                break;
            case 0x3:
                PlayAudio('crazydavelong1'), innerText(y, $__language_Array__['0b6ec62117f3196678f36fc67036a857']), x++;
                break;
            case 0x4:
                PlayAudio('crazydavelong2'), innerText(y, '…'), x++;
                break;
            case 0x5:
                PlayAudio('crazydavelong1'), innerText(y, '…'), x++;
                break;
            case 0x6:
                PlayAudio('crazydavelong1'), innerText(y, $__language_Array__['ad881fb37b0b59c07015e075c803e0a9']), x++;
                break;
            case 0x7:
                PlayAudio('crazydavelong2'), innerText(y, $__language_Array__['0496bb4fbe899cfcbe419d8f4946db6a']), x++;
                break;
            case 0x8:
                PlayAudio('crazydavelong3'), innerText(y, $__language_Array__['6d910b7c4bf77fc830abc55cf424818b']), x++;
                break;
            case 0x9:
                PlayAudio('crazydavelong2'), innerText(y, $__language_Array__['beca868437bf4a107c806074820b6507']), x++;
                break;
            case 0xa:
                PlayAudio('crazydavelong3'), innerText(y, $__language_Array__['22bf0eaa3a2118a20f6f190eeef2f35a']), x++;
                break;
            case 0xb:
                PlayAudio('crazydavelong3'), innerText(y, $__language_Array__['e83ecd354283963e57119ab887f927cf']), x++;
                break;
            case 0xc:
                PlayAudio('crazydavelong2'), innerText(y, $__language_Array__['ec8222e7b04c793e46c58c50673c44b8']), x++;
                break;
            case 0xd:
                PlayAudio('crazydavelong2'), innerText(y, $__language_Array__['2c89d4bab999c8849cb7558c85a6027d']), x++;
                break;
            case 0xe:
                PlayAudio('crazydavelong2'), innerText(y, $__language_Array__['2da136c2f618f05c7c27d22e824f9524']), x++;
                break;
            case 0xf:
                PlayAudio('crazydavelong1'), innerText(y, $__language_Array__['e82e0e8596e2d54cb1f5d1348d817393']), x++;
                break;
            case 0x10:
                PlayAudio('crazydavelong2'), innerText(y, $__language_Array__['b936ca0fb003d97f4af9bacbe8dd8281']), x++;
                break;
            case 0x11:
                PlayAudio('crazydavelong2'), innerText(y, $__language_Array__['b187d5a385630d6dfd4a8fc10f54eb63']), x++;
                break;
            case 0x12:
                PlayAudio('crazydavelong2'), innerText(y, $__language_Array__['e1a8f0bc2ce3d1c97de8292d1982ab8c']), x++;
                break;
            case 0x13:
                ClearChild(y, z), oSym['addTask'](0x1e, b);
            }
        }());
    }
    function t() {
        let x = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#000;opacity:0;', 0x0, EDAll), y = 0x0, z = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), A = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function B() {
            z['onclick'] = B;
            switch (y) {
            case 0x0:
                A['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(z, '……'), y++;
                break;
            case 0x1:
                PlayAudio('crazydavelong3'), innerText(z, $__language_Array__['4962eddce77574251719b0163f965bbc']), y++;
                break;
            case 0x2:
                PlayAudio('crazydavelong2'), innerText(z, $__language_Array__['a0080a550f6aae13cba7ade743073a71']), y++;
                break;
            case 0x3:
                PlayAudio('crazydavelong3'), innerText(z, $__language_Array__['59181b3d5584b6ac4583037c4555f6ba']), y++;
                break;
            case 0x4:
                PlayAudio('crazydavelong2'), innerText(z, $__language_Array__['8feca44bcd43513949a3e101d5e43a48']), y++;
                break;
            case 0x5:
                PlayAudio('crazydavelong2'), innerText(z, $__language_Array__['5854679a6a60f36d2c117422bd99aae9']), y++;
                break;
            case 0x6:
                PlayAudio('crazydavelong3'), innerText(z, $__language_Array__['10f10c9ebcba21e3c632c7ea8ad0b6fa']), y++;
                break;
            case 0x7:
                PlayAudio('crazydavelong2'), innerText(z, $__language_Array__['14966450f2d1afd5ea2672141ee37162']), y++;
                break;
            case 0x8:
                PlayAudio('crazydavelong1'), innerText(z, '……'), y++;
                break;
            case 0x9:
                PlayAudio('crazydavelong2'), innerText(z, $__language_Array__['a88bfbb05cb144c73441d86640c6c64e']), y++;
                break;
            case 0xa:
                PlayAudio('crazydavelong2'), innerText(z, $__language_Array__['48ec597ccbcf8dd88101cdcbd557e910']), y++;
                break;
            case 0xb:
                PlayAudio('crazydavelong2'), innerText(z, $__language_Array__['03e7236908d54f806be1a12cc7f35587']), y++;
                break;
            case 0xc:
                PlayAudio('crazydavelong2'), innerText(z, $__language_Array__['9a605d98e05d43e3d7dc39c70cbeba0c']), y++;
                break;
            case 0xd:
                PlayAudio('crazydavelong2'), innerText(z, $__language_Array__['c3d3d39ec6d6f784c4c391c95eaa8148']), y++;
                break;
            case 0xe:
                PlayAudio('crazydavelong3'), innerText(z, $__language_Array__['112e8e7b211bb66449285055bed093c7']), y++;
                break;
            case 0xf:
                PlayAudio('crazydavelong2'), innerText(z, $__language_Array__['9782f3595f2203e6a00e7e1ae8f443ed']), y++;
                break;
            case 0x10:
                PlayAudio('crazydavelong1'), innerText(z, $__language_Array__['eafdb8ee59cd33604d6343cf635c99bf']), y++;
                break;
            case 0x11:
                PlayAudio('crazydavelong2'), z['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:20px;\x27>' + c($__language_Array__['831d4cac996c97c19fc8f1b0f76e2f99'], 0x12, !![], '')[0x0] + '</p>', y++;
                break;
            case 0x12:
                PlayAudio('crazydavelong2'), z['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:20px;\x27>' + c($__language_Array__['910564990afe460a1572c9af960ea302'], 0x12, !![], '')[0x0] + '</p>', y++;
                break;
            case 0x13:
                PlayAudio('crazydavelong2'), z['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:20px;\x27>' + c($__language_Array__['bb855b976b00fa90b51e855c15b5ae06'], 0x12, !![], '')[0x0] + '</p>', y++;
                break;
            case 0x14:
                PlayAudio('crazydavelong2'), z['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:20px;\x27>' + c($__language_Array__['18f54d19dc4c5cea7ab74fdc923dd169'], 0x12, !![], '')[0x0] + '</p>', y++;
                break;
            case 0x15:
                PlayAudio('crazydavelong3'), z['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:40px;\x27>' + c($__language_Array__['6fd3043d14e4cb0f9c0f7be007e20788'], 0x12, !![], '', 0.1)[0x0] + '</p>', y++;
                break;
            case 0x16:
                z['onclick'] = null, PlayAudio('crazydavelong2'), z['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:40px;\x27>' + c($__language_Array__['b2f9a241e9f4b424d287e22026074624'], 0x12, !![], '', 0.05)[0x0] + '</p>', oEffects['fadeIn'](x, 'slow', () => z['onclick'] = B), y++;
                break;
            case 0x17:
                innerText(z, '【……】'), y++;
                break;
            case 0x18:
                innerText(z, $__language_Array__['606491982950f0aeec25a2f39e7867bd']), y++;
                break;
            case 0x19:
                innerText(z, $__language_Array__['1e8355148cc331bb1157eeb89921d9a6']), y++;
                break;
            case 0x1a:
                innerText(z, $__language_Array__['9d7f48628e6efe160d166f39416ed2b8']), y++;
                break;
            case 0x1b:
                ClearChild(z, A), oEffects['fadeOut'](x, 'slow', C => {
                    ClearChild(C), b();
                });
            }
        }());
    }
    function u() {
        let x = a - 0x8 + 0x1c, y = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), z = 0x0, A = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), B = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function I() {
            A['onclick'] = I;
            switch (z) {
            case 0x0:
                B['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(A, '' + $__language_Array__['ffc5972310763e9a3c8acfa02d3d0c5d'][0x0] + x + $__language_Array__['ffc5972310763e9a3c8acfa02d3d0c5d'][0x1]), z++;
                break;
            case 0x1:
                PlayAudio('crazydavelong3'), innerText(A, '……'), z++;
                break;
            case 0x2:
                PlayAudio('crazydavelong2'), innerText(A, $__language_Array__['f7b32d75ab7ac6f3b252adc0005baf99']), z++;
                break;
            case 0x3:
                PlayAudio('crazydavelong2'), innerText(A, $__language_Array__['702a780f45cded8add780f1f49aeaacc']), z++;
                break;
            case 0x4:
                z = 0x0;
                if (e[0x9] && !e[0x5b])
                    C();
                else {
                    if (e[0x5b] && !e[0x9])
                        D();
                    else
                        e['Plot1_Judge3'] ? E() : F();
                }
            }
        }());
        function C() {
            A['onclick'] = C;
            switch (z) {
            case 0x0:
                B['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(A, $__language_Array__['500e49b0d8982260977f8e6f7be8313b']), z++;
                break;
            case 0x1:
                PlayAudio('crazydavelong1'), innerText(A, $__language_Array__['ba4c765396150d0433a89b32c0f262f2']), z++;
                break;
            case 0x2:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['7acfe1cb79c08b209ea3c0140edebfd2']), z++;
                break;
            case 0x3:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['c1b388e854675474d5b270aaa020f280']), z++;
                break;
            case 0x4:
                PlayAudio('crazydavelong3'), innerText(A, '……'), z++;
                break;
            case 0x5:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['35a9df23d88b49bcd633e3910135d1a4']), z++;
                break;
            case 0x6:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['b642bf02e9bbd0f49b4c3ad0514065a3']), z++;
                break;
            case 0x7:
                PlayAudio('crazydavelong1'), innerText(A, $__language_Array__['80390ec16e38170d96866eac036958b4']), z++;
                break;
            case 0x8:
                PlayAudio('crazydavelong2'), innerText(A, $__language_Array__['daa3cac338225cee388866d46c28d243']), z++;
                break;
            case 0x9:
                PlayAudio('crazydavelong1'), innerText(A, $__language_Array__['eed34ce8dac79d2aa1c1d07ffc3e2133']), z++;
                break;
            case 0xa:
                z = 0x0, F();
            }
        }
        function D() {
            A['onclick'] = D;
            switch (z) {
            case 0x0:
                B['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(A, $__language_Array__['28813a1a1f8838dada6becc51821ed06']), z++;
                break;
            case 0x1:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['f768944d6a7f53ebc0cc920b9323076b']), z++;
                break;
            case 0x2:
                PlayAudio('crazydavelong1'), innerText(A, $__language_Array__['45ae52d980b1d490ba84ca1a4ef72cc3']), z++;
                break;
            case 0x3:
                PlayAudio('crazydavelong1'), innerText(A, $__language_Array__['607fa957ffc3e1222be8796aba337371']), z++;
                break;
            case 0x4:
                PlayAudio('crazydavelong3'), innerText(A, '……'), z++;
                break;
            case 0x5:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['094b7c9a18bb7418188c17253fd39acd']), z++;
                break;
            case 0x6:
                PlayAudio('crazydavelong1'), innerText(A, '……'), z++;
                break;
            case 0x7:
                PlayAudio('crazydavelong2'), innerText(A, $__language_Array__['09715d79e8aac6c327bb381475c4a613']), z++;
                break;
            case 0x8:
                PlayAudio('crazydavelong2'), innerText(A, $__language_Array__['fa4204194088aa924e7ba12124930db4']), z++;
                break;
            case 0x9:
                PlayAudio('crazydavelong2'), innerText(A, $__language_Array__['893da2ed7dd4d8c29c83b6f2d25addfa']), z++;
                break;
            case 0xa:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['30acd7ed09627a11a006d522ad5d6199']), z++;
                break;
            case 0xb:
                PlayAudio('crazydavelong1'), innerText(A, $__language_Array__['71cf0feaa5d3f0efa31c225788463d76']), z++;
                break;
            case 0xc:
                z = 0x0, F();
            }
        }
        function E() {
            A['onclick'] = E;
            switch (z) {
            case 0x0:
                B['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(A, $__language_Array__['eef19013f2766c3a253fb9b23c55ebd9']), z++;
                break;
            case 0x1:
                PlayAudio('crazydavelong1'), innerText(A, $__language_Array__['f8eec151d80083064c06627a5f1baa90']), z++;
                break;
            case 0x2:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['cd1e287b065d4cc07f8fa56202bc1aeb']), z++;
                break;
            case 0x3:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['0311360cb170dfbc29c45231c55a0292']), z++;
                break;
            case 0x4:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['19986af177b8d7ee09601f4ce8974cc7']), z++;
                break;
            case 0x5:
                PlayAudio('crazydavelong2'), innerText(A, '……'), z++;
                break;
            case 0x6:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['f8048509bde54a9d35205e0347fa4500']), z++;
                break;
            case 0x7:
                PlayAudio('crazydavelong1'), innerText(A, $__language_Array__['b8039db8a8e0be5c32898379f38a9563']), z++;
                break;
            case 0x8:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['a4ad53e93384e4831e68033fdf12b2c0']), z++;
                break;
            case 0x9:
                PlayAudio('crazydavelong3'), innerText(A, '……'), z++;
                break;
            case 0xa:
                PlayAudio('crazydavelong2'), innerText(A, $__language_Array__['a30fe09c0681bfbc596763f16a4981a6']), z++;
                break;
            case 0xb:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['7b2383909943e59841ea91c851161131']), z++;
                break;
            case 0xc:
                PlayAudio('crazydavelong2'), innerText(A, $__language_Array__['a1117f402cbd6d943b0d12c2a0f4a7c4']), z++;
                break;
            case 0xd:
                PlayAudio('crazydavelong3'), innerText(A, $__language_Array__['b3ca1a1e16ff7d15f87c73145ee47afb']), z++;
                break;
            case 0xe:
                z = 0x0, F();
            }
        }
        function F() {
            A['onclick'] = F;
            switch (z) {
            case 0x0:
                A['onclick'] = null, B['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(A, $__language_Array__['8de743a078880b4760965eea280874fb']), oEffects['fadeIn'](y, 'slow', () => A['onclick'] = F), z++;
                break;
            case 0x1:
                B['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(A, $__language_Array__['67100ff5b76deddb716eeed6a4ad2bca']), z++;
                break;
            case 0x2:
                B['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(A, $__language_Array__['1e747a12caecc2855cbf485d2495a6b8']), z++;
                break;
            case 0x3:
                PlayAudio('Zomboss1'), innerText(A, $__language_Array__['379c824de65ac968cad75a53bd232c01']), z++;
                break;
            case 0x4:
                PlayAudio('Zomboss1'), innerText(A, $__language_Array__['00496c519c83bded909eba7e405ccc85']), z++;
                break;
            case 0x5:
                PlayAudio('Zomboss1'), innerText(A, $__language_Array__['e8d3607b04ecc5f11cb256492cfa2e56']), z++;
                break;
            case 0x6:
                PlayAudio('Zomboss3'), innerText(A, $__language_Array__['06046150a9a62140c3f39cda55ef065b']), z++;
                break;
            case 0x7:
                B['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(A, $__language_Array__['634ff5b93431db6a512b56e6dad5d477']), z++;
                break;
            case 0x8:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(A, $__language_Array__['16677a9eb51ca488d1f5f575dadf429a']), z++;
                break;
            case 0x9:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(A, $__language_Array__['0825c9a1d722eb45abd027acfedf564d']), z++;
                break;
            case 0xa:
                B['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(A, $__language_Array__['ac48b5af45cf2315ab6ed37360fab1d2']), z++;
                break;
            case 0xb:
                B['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(A, $__language_Array__['b8c57630de409519fac9b2dae46463d6']), z++;
                break;
            case 0xc:
                B['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(A, $__language_Array__['524ba6028c955e1063ece547c4d01ae6']), z++;
                break;
            case 0xd:
                z = 0x0;
                a === 0xb ? G() : H();
            }
        }
        function G() {
            A['onclick'] = G;
            switch (z) {
            case 0x0:
                B['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(A, $__language_Array__['ed751e521d20c679435837757f53c3b2']), z++;
                break;
            case 0x1:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(A, $__language_Array__['e60eef91fee8393b650c01e59f75a0d5']), z++;
                break;
            case 0x2:
                A['onclick'] = null, B['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(A, '……'), oEffects['fadeOut'](y, 'slow', () => A['onclick'] = G), z++;
                break;
            case 0x3:
                ClearChild(A, B), ClearChild(y), oSym['addTask'](0x1e, b);
            }
        }
        function H() {
            A['onclick'] = H;
            switch (z) {
            case 0x0:
                B['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(A, $__language_Array__['965c2debb9ad7fef7cb9ff362ccd17a7']), z++;
                break;
            case 0x1:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(A, $__language_Array__['e5869b54ba332f1e86bbaea12911eab8']), z++;
                break;
            case 0x2:
                B['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(A, $__language_Array__['c9814f854ce7f66086f4d351403cdb9f']), z++;
                break;
            case 0x3:
                B['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(A, $__language_Array__['9b7149437e81ba22ca575b0a74e69a3b']), z++;
                break;
            case 0x4:
                B['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(A, $__language_Array__['c0f988d2dd159230bab26e8d0c684b44']), z++;
                break;
            case 0x5:
                PlayAudio('Zomboss3'), innerText(A, $__language_Array__['cb1fb415f70e1f97730e4479db53085e']), z++;
                break;
            case 0x6:
                B['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(A, $__language_Array__['f4d09e4b2cd7439dc04c0e35c0e71602']), z++;
                break;
            case 0x7:
                ClearChild(A, B), oEffects['fadeOut'](y, 'slow', J => {
                    ClearChild(J), b();
                });
            }
        }
    }
};