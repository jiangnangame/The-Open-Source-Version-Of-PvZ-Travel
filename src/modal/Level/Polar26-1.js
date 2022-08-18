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
            b + 'Polar2.webp'
        ];
    }()),
    'LoadMusic': 'Bgm_Industry25_Plot1',
    'StartGameMusic': 'Bgm_Marsh_Ready',
    'backgroundImage': 'images/interface/Marsh.webp',
    'LoadAccess': function (b) {
        CSpeed(0x1);
        let c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:url(images/interface/Polar2.webp);opacity:1;', 0x0, EDAll), d = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#fff;opacity:0;', 0x0, EDAll), e = NewEle('effect' + Math['random'](), 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:rgba(0,0,0,0);opacity:1;', 0x0, EDAll), f = NewEle('effect' + Math['random'](), 'div', 'font-size:28px;position:absolute;color:white;text-align:center;line-height:600px;z-index:257;width:900px;height:600px;opacity:0;', 0x0, EDAll);
        g();
        function g() {
            let i = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll), j = 0x0, k = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), l = NewImg('dDave', '', 'left:0;top:81px', EDAll);
            (function m() {
                k['onclick'] = m;
                switch (j) {
                case 0x0:
                    k['onclick'] = null, l['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['f2d36d613cda09b08c043f6c1f7bddff']), oEffects['fadeIn'](i, 'slow', () => {
                        ClearChild(c), k['onclick'] = m;
                    }), j++;
                    break;
                case 0x1:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['3c1027478acaaf8dd74745c1e59f5a33']), j++;
                    break;
                case 0x2:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['b1e330f209b4e230b8e96827541d83ec']), j++;
                    break;
                case 0x3:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['41086bb3dd099a08715a72e233447a7e']), j++;
                    break;
                case 0x4:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['fd369127b6937a252c293c8ad03ad9cf']), j++;
                    break;
                case 0x5:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['08562ff6702ddbfa4a94acc6ce7b76e0']), j++;
                    break;
                case 0x6:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['1622b99bcece5bf709a7604819cb6f5a']), j++;
                    break;
                case 0x7:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['84e67dbdc639ad3bd25ce27216c67df9']), j++;
                    break;
                case 0x8:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['1dcb3a3081a922410675a95ae1416017']), j++;
                    break;
                case 0x9:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['bfcc1e978322b2fd267569426901786c']), j++;
                    break;
                case 0xa:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['8f4d5bf5d15f70dd091d74a011eaabdb']), j++;
                    break;
                case 0xb:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['62e121abaac7f93b11d33bb1b4d9f6da']), j++;
                    break;
                case 0xc:
                    k['onclick'] = null, PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['b974c1d812ca3f91fe5607b9ca98f6d0']), oEffects['fadeOut'](i, 'slow', () => k['onclick'] = m), j++;
                    break;
                case 0xd:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['e3be8110ed455581e3b8b8f1a4b77458']), j++;
                    break;
                case 0xe:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['25d894c356507dad156c2e8a1b18deac']), j++;
                    break;
                case 0xf:
                    PlayAudio('Zomboss' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(k, $__language_Array__['c809129f8e5579ca421befc40b5cd166']), j++;
                    break;
                case 0x10:
                    ClearChild(k, l), oSym['addTask'](0x64, () => {
                        oEffects['Animate'](e, { 'background': 'rgba(0,0,0,1)' }, 0x2, 'linear', () => {
                            f['innerText'] = $__language_Array__['86e35a3d8bad7a55c21d54291fbbe9df'], oEffects['fadeIn'](f, 0x2, () => {
                                oSym['addTask'](0x64, function () {
                                    oEffects['Animate'](e, { 'background': 'rgba(0,0,0,0)' }, 0x2), oEffects['fadeOut'](f, 0x2, () => {
                                        f['style']['display'] = e['style']['display'] = 'none', h();
                                    });
                                });
                            });
                        });
                    });
                }
            }());
        }
        function h() {
            let i = $('shadeb')['style']['cssText'], j = $('shadeb');
            j['style']['display'] = 'block', j['style']['zIndex'] = '30000', j['style']['opacity'] = 0x0, oEffects['Animate'](j, {
                'backgroundColor': 'white',
                'opacity': 0x1
            }, 'fast', 'linear', () => {
                setTimeout(function () {
                    oEffects['Animate'](j, { 'opacity': 0x0 }, 'fast', 'linear', () => {
                        j['style']['cssText'] = i;
                    });
                }, 0x12c / oSym['NowSpeed']), ClearChild(d), SelectModal(NextLevel());
            });
        }
    }
});