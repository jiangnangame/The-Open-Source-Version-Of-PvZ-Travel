/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS['Init']({
    'PicArr': (function () {
        let b = 'images/interface/';
        return [b + 'Polar2.webp'];
    }()),
    'LoadMusic': 'Bgm_Polar_Noise',
    'StartGameMusic': 'Bgm_Polar_Noise',
    'backgroundImage': 'images/interface/Polar2.webp',
    'LoadAccess': function (b) {
        CSpeed(0x1), EDAll['scrollLeft'] = 0x73;
        let c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;left:115px;', 0x0, EDAll), d = NewEle('effect' + Math['random'](), 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:rgba(0,0,0,0);opacity:1;left:115px;', 0x0, EDAll), e = NewEle('effect' + Math['random'](), 'div', 'font-size:28px;position:absolute;color:black;text-align:center;line-height:600px;z-index:257;width:900px;left:115px;height:600px;opacity:0;', 0x0, EDAll);
        oEffects['Animate'](d, { 'background': 'rgba(255,255,255,1)' }, 'slow', 'linear', () => {
            e['innerText'] = $__language_Array__['e03e915ce89c69689b281257e06459c6'], oEffects['fadeIn'](e, 0x2, () => {
                oSym['addTask'](0x64, function () {
                    c['style']['opacity'] = 0x1, oEffects['Animate'](d, { 'background': 'rgba(0,0,0,0)' }, 0x2), oEffects['fadeOut'](e, 0x2, () => {
                        ClearChild(e, d), f();
                    });
                });
            });
        });
        function f() {
            let h = 0x0, i = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), j = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
            (function k() {
                i['onclick'] = k;
                switch (h) {
                case 0x0:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(i, $__language_Array__['936e9f15664d18ea2c32af842bbbc032']), h++;
                    break;
                case 0x1:
                    PlayAudio('Zomboss3'), innerText(i, $__language_Array__['4b44be770d9d789e8e7460f003e4ee6e']), h++;
                    break;
                case 0x2:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['45dcdf60f11eab2fca7a423643b76b28']), h++;
                    break;
                case 0x3:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(i, $__language_Array__['8e4790dbdda6cffaa7050690cb48fea7']), h++;
                    break;
                case 0x4:
                    PlayAudio('Zomboss2'), innerText(i, $__language_Array__['f4c0b50eefbe1082c83ec10eeb13c974']), h++;
                    break;
                case 0x5:
                    PlayAudio('Zomboss2'), innerText(i, $__language_Array__['d296b850142cde21f7ffb9851e37c530']), h++;
                    break;
                case 0x6:
                    PlayAudio('Zomboss3'), innerText(i, $__language_Array__['62c59f137155f08f6a66d93683ebd0ee']), oEffects['Animate'](c, 'NPCFade', 0.5, 'linear', 0x0, 0x0, 'infinite'), c['style']['animationDirection'] = 'alternate', h++;
                    break;
                case 0x7:
                    PlayAudio('Zomboss2'), innerText(i, $__language_Array__['a422fd0dd728c97e1e5f7acc2e94e193']), h++;
                    break;
                case 0x8:
                    PlayAudio('Zomboss2'), innerText(i, $__language_Array__['ca3167480c8b149f5cdd9d0988606702']), h++;
                    break;
                case 0x9:
                    PlayAudio('Zomboss3'), c['style']['animation'] = '', innerText(i, $__language_Array__['4605d254f0cb1a5ecaf6153f86b37d54']), h++;
                    break;
                case 0xa:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['347e13fdc0baa470aadc6e805886d1f5']), h++;
                    break;
                case 0xb:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(i, '……'), h++;
                    break;
                case 0xc:
                    PlayAudio('Zomboss3'), innerText(i, $__language_Array__['a0fbf9ffecf4d05d7fd5e5827c205d21']), h++;
                    break;
                case 0xd:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['0451c2efee6b40938709876b307998b7']), h++;
                    break;
                case 0xe:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(i, $__language_Array__['5d3744e1e2a6d38c8aa875f503a0be8f']), h++;
                    break;
                case 0xf:
                    PlayAudio('Zomboss3'), innerText(i, $__language_Array__['5e4f42c03b9ee76f247b843a0b33ff60']), h++;
                    break;
                case 0x10:
                    PlayAudio('Zomboss2'), innerText(i, $__language_Array__['b29fe42fdd9f97d49ed9bb4e4d5a2664']), h++;
                    break;
                case 0x11:
                    PlayAudio('Zomboss3'), innerText(i, $__language_Array__['f67338de168bc407f0a90e212eb35eda']), h++;
                    break;
                case 0x12:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['eb0931bb4ac6ffd0dcc2fe4a73370727']), h++;
                    break;
                case 0x13:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(i, $__language_Array__['51934907f11668d448656d8ba400c266']), h++;
                    break;
                case 0x14:
                    j['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(i, $__language_Array__['0cfb6979a002ac0da9255d86239b5392']), h++;
                    break;
                case 0x15:
                    j['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(i, $__language_Array__['16a3c2467236f4c592173bf3b35becc0']), h++;
                    break;
                case 0x16:
                    PlayAudio('Zomboss1'), innerText(i, $__language_Array__['76a5ae00c833f10c44078d6e4e90013a']), h++;
                    break;
                case 0x17:
                    ClearChild(i, j), g();
                }
            }());
        }
        function g() {
            toWin();
        }
    }
});