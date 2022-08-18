/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
oS['Init']({
    'LoadMusic': '',
    'LoadAccess': function (b) {
        let c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:1;', 0x0, EDAll), d = 0x0, e = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), f = NewImg('dDave', '', 'left:0;top:81px', EDAll);
        (function g() {
            e['onclick'] = g;
            switch (d) {
            case 0x0:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(e, $__language_Array__['045112f17aab5c8b3a0e7507763c4402']), d++;
                break;
            case 0x1:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(e, $__language_Array__['42063f4a55d17e5c1611365a1ac017d3']), d++;
                break;
            case 0x2:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(e, $__language_Array__['2e66b191978e68e169848d943e5bc5aa']), d++;
                break;
            case 0x3:
                f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['b99e1a845d88f3e6f257cc15072e5af9']), d++;
                break;
            case 0x4:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(e, $__language_Array__['974e44d577f5e2b19c61e8c7da0ad0b7']), d++;
                break;
            case 0x5:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(e, $__language_Array__['eb65436192ef22df24a5572bcbee77fb']), d++;
                break;
            case 0x6:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(e, $__language_Array__['192bee16a39d8cdaf70353b82709b288']), d++;
                break;
            case 0x7:
                e['onclick'] = null, f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['8273b297c7583b28270043cbc54778c8']), oEffects['Animate'](c, 'NPCFade', 'fast', 'linear', () => {
                    oEffects['Animate'](c, { 'background': 'black' }, 'slow', 'linear', h => {
                        e['onclick'] = g;
                    });
                }, 0x0, 0x4), d++;
                break;
            case 0x8:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(e, $__language_Array__['05e6e295486edd77ad5297fe59ba3206']), d++;
                break;
            case 0x9:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['ea12847abf7a84e2788ffdb43b5ef44c']), d++;
                break;
            case 0xa:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(e, $__language_Array__['d6bbad7e703ccd4e5072e9c732f9f139']), d++;
                break;
            case 0xb:
                ClearChild(e), oEffects['Animate'](f, { 'opacity': 0x0 }, 0x1, 'linear', h => {
                    ClearChild(f), StopMusic(), NewEle('DivA', 'div', 'position:absolute;z-index:258;width:900px;height:600px;background:#FFF;opacity:0;', {}, EDAll);
                    const i = NewImg('newCard', 'images/interface/Black_Mirror2.webp', 'left:567px;top:315px;height:100px;width:auto;opacity:0;filter:brightness(300%);z-index:261;cursor:pointer;', EDAll);
                    oEffects['Animate'](i, {
                        'filter': '',
                        'opacity': 0x1
                    }, 0x1, 'linear', () => {
                        i['onclick'] = j => {
                            GetNewProp(j['target'], 'images/interface/Black_Mirror2.webp', $__language_Array__['bd4f33028848cc1d692f9b03fcae16e5'], 'This\x20is\x20a\x20wholesome\x20universe', 'Industry15', 'background-size:cover;z-index:233;width:120px;height:140px;top:30%;left:43%;');
                        };
                    });
                });
            }
        }());
    },
    'FlagToEnd'() {
    }
});