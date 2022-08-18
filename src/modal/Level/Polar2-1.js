/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS['Init']({
    'PicArr': (function () {
        let b = 'images/interface/';
        return [
            b + 'Marsh.webp',
            b + 'Forest.webp'
        ];
    }()),
    'LoadMusic': '',
    'StartGameMusic': 'Bgm_Marsh_Ready',
    'backgroundImage': '',
    'LevelEName': 0x1,
    'LoadAccess': function (b) {
        localStorage['getJsonItem']('JNG_TR_MarshRandomPlot', '28') ? c() : d();
        function c() {
            EDAll['scrollLeft'] = 0x73;
            let f = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:1211px;height:600px;background:#FFF;opacity:1;', 0x0, EDAll), g = 0x0, h = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), i = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
            (function j() {
                h['onclick'] = j;
                switch (g) {
                case 0x0:
                    i['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(h, $__language_Array__['717c01141385cce7730ee01cd043bec7']), g++;
                    break;
                case 0x1:
                    PlayAudio('Zomboss3'), innerText(h, $__language_Array__['703a951800f4db383fdde03bce6d17e1']), g++;
                    break;
                case 0x2:
                    PlayAudio('Zomboss2'), innerText(h, $__language_Array__['4b7e792238768a0da509a79fa45c592d']), g++;
                    break;
                case 0x3:
                    PlayAudio('Zomboss1'), innerText(h, $__language_Array__['325a3916fc94b3a29e40b7070cfc088a']), g++;
                    break;
                case 0x4:
                    i['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['c4cb03397e2d3d46bc98ce2e4a4bca7a']), g++, h['onclick'] = null, oSym['addTask'](0x64, () => {
                        j(), h['onclick'] = j;
                    });
                    break;
                case 0x5:
                    i['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(h, $__language_Array__['0d7abaceaffb73695d05ebc3a3c0386e']), g++;
                    break;
                case 0x6:
                    i['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['b7041376dd420861d5217c4affbf40fb']), g++;
                    break;
                case 0x7:
                    i['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(h, $__language_Array__['a8a24cfaf36eed5c524e075731079d3e']), g++;
                    break;
                case 0x8:
                    PlayAudio('Zomboss3'), innerText(h, $__language_Array__['d55b855bc5258a017f77d44542d60b3b']), g++;
                    break;
                case 0x9:
                    PlayAudio('Zomboss1'), innerText(h, $__language_Array__['96909ed9682b49400e1b8aa41929e063']), g++;
                    break;
                case 0xa:
                    PlayAudio('Zomboss2'), innerText(h, $__language_Array__['d29dd57267cf7a9f06c1e20ee8c193c6']), g++;
                    break;
                case 0xb:
                    i['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(h, $__language_Array__['e4114fc86f46952d58c7bb5974a89ef2']), g++;
                    break;
                case 0xc:
                    i['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['3ba7816f4250aa681d7fae34791958af']), g++;
                    break;
                case 0xd:
                    i['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(h, $__language_Array__['bfa19e0f143ddfe6d9b4b2b1c6b6b160']), g++;
                    break;
                case 0xe:
                    i['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(h, $__language_Array__['f5ad593cf5d9981cf249771d0a9da2d9']), g++;
                    break;
                case 0xf:
                    i['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(h, $__language_Array__['be5e2260b4549c75d60c8d4e5c3b6653']), g++;
                    break;
                case 0x10:
                    PlayAudio('Zomboss3'), innerText(h, $__language_Array__['03a775900c8ac4d035b86c744c20729b']), g++;
                    break;
                case 0x11:
                    ClearChild(h, i), oSym['addTask'](0x1e, e);
                }
            }());
        }
        function d() {
            let f = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:0;width:1211px;height:600px;background:#FFF;opacity:1;', 0x0, EDAll);
            f['style']['background'] = 'url(images/interface/Forest.webp)', EDAll['scrollLeft'] = 0x73;
            let g = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:1211px;height:600px;background:#FFF;opacity:1;', 0x0, EDAll), h = 0x0, i = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), j = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
            (function k() {
                i['onclick'] = k;
                switch (h) {
                case 0x0:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(i, $__language_Array__['717c01141385cce7730ee01cd043bec7']), h++;
                    break;
                case 0x1:
                    PlayAudio('Zomboss2'), innerText(i, $__language_Array__['703a951800f4db383fdde03bce6d17e1']), h++;
                    break;
                case 0x2:
                    PlayAudio('Zomboss1'), innerText(i, $__language_Array__['4b7e792238768a0da509a79fa45c592d']), h++;
                    break;
                case 0x3:
                    PlayAudio('Zomboss3'), innerText(i, $__language_Array__['325a3916fc94b3a29e40b7070cfc088a']), h++;
                    break;
                case 0x4:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['c4cb03397e2d3d46bc98ce2e4a4bca7a']), h++, i['onclick'] = null, oSym['addTask'](0x64, () => {
                        k(), i['onclick'] = k;
                    });
                    break;
                case 0x5:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(i, $__language_Array__['de82077bcb6faf19ab17de0e6b645c2d']), h++;
                    break;
                case 0x6:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['6a843ff6ab5f3e786b09bce513490e21']), h++;
                    break;
                case 0x7:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(i, $__language_Array__['2aa162f15149f962cea8c58af2a72b0d']), h++;
                    break;
                case 0x8:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['6e5ddea64d345adb85ecbb296ff5614e']), h++;
                    break;
                case 0x9:
                    i['onclick'] = null, oEffects['fadeOut'](g, 'slow', () => i['onclick'] = k), j['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(i, $__language_Array__['1a1ce727c1bf525b887a497d3c94c362']), h++;
                    break;
                case 0xa:
                    i['onclick'] = null, j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['cc6a8c9fc5162d518883b5cdebf015a8']), oEffects['fadeIn'](g, 'slow', () => {
                        i['onclick'] = k;
                    }), h++;
                    break;
                case 0xb:
                    f['style']['background'] = 'url(images/interface/Marsh.webp)', i['onclick'] = null, oEffects['fadeOut'](g, 'slow', () => i['onclick'] = k), j['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(i, $__language_Array__['94180e8990d911f599dbe883647d5533']), h++;
                    break;
                case 0xc:
                    PlayAudio('crazydavelong3'), innerText(i, $__language_Array__['5b9101502c577e55f484806d3014baa2']), h++;
                    break;
                case 0xd:
                    PlayAudio('crazydavelong1'), innerText(i, '.......'), h++;
                    break;
                case 0xe:
                    i['onclick'] = function () {
                        i['onclick'] = null, oEffects['fadeIn'](g, 'slow', () => {
                            i['onclick'] = k, k();
                        });
                    }, PlayAudio('crazydavelong1'), innerText(i, $__language_Array__['0f6d3d4443c59229bf1347581cc889dc']), h++;
                    break;
                case 0xf:
                    f['style']['background'] = 'url(images/interface/Polar.webp)', j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['4ff957a54969422fa542b45237c3a5b5']), h++;
                    break;
                case 0x10:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(i, $__language_Array__['5fabb65b3d1e57c258488655d6ca3417']), h++;
                    break;
                case 0x11:
                    PlayAudio('Zomboss2'), innerText(i, $__language_Array__['f33aaaa30e718e5bc0d186b7679eb781']), h++;
                    break;
                case 0x12:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['5ac7b6163a059bc2692ac719f781aa63']), h++;
                    break;
                case 0x13:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(i, $__language_Array__['a8dd66e4dc19b61e942e7be81f58de6c']), h++;
                    break;
                case 0x14:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['47184d2dcf047acd15b68e6d6f7613c4']), h++;
                    break;
                case 0x15:
                    PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['36fbb95d4d294f743ffb3aaa691f75d5']), h++;
                    break;
                case 0x16:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(i, $__language_Array__['c999f7ba26a17f439df90032cfb827d6']), h++;
                    break;
                case 0x17:
                    PlayAudio('Zomboss2'), innerText(i, $__language_Array__['bed216558a7f06681007c950d9bfe555']), h++;
                    break;
                case 0x18:
                    PlayAudio('Zomboss1'), innerText(i, $__language_Array__['c4621f5c174e9747317b8954bdcf796f']), h++;
                    break;
                case 0x19:
                    PlayAudio('Zomboss2'), innerText(i, $__language_Array__['5bc7417663704b2ce25c5c83c9d817c8']), h++;
                    break;
                case 0x1a:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(i, $__language_Array__['e4114fc86f46952d58c7bb5974a89ef2']), h++;
                    break;
                case 0x1b:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['2955ad8cc51a6a39a49a19ae87fe808f']), h++;
                    break;
                case 0x1c:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(i, $__language_Array__['bfa19e0f143ddfe6d9b4b2b1c6b6b160']), h++;
                    break;
                case 0x1d:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['480eb8d3354978a797bfec139ffacd27']), h++;
                    break;
                case 0x1e:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(i, $__language_Array__['f366dc9b2f76a0e32ce44b2c40e4fd39']), h++;
                    break;
                case 0x1f:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(i, $__language_Array__['03a775900c8ac4d035b86c744c20729b']), h++;
                    break;
                case 0x20:
                    ClearChild(i, j), oSym['addTask'](0x1e, e);
                }
            }());
        }
        function e() {
            NewEle('DivA', 'div', 'position:absolute;width:900px;height:600px;background:#FFF;opacity:0;z-index:257;left:115px;', 0x0, EDAll), ShowWinItem(GetPlantCardDom(oBegonia, EDAll, null, {
                'onclick': function () {
                    GetNewCard(this, oBegonia, 'Polar3');
                }
            }));
        }
    }
});