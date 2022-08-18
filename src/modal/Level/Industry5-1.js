/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    function change(a, b) {
        PlayAudio('frostbite'), oEffects['Animate']($('tGround'), { 'transform': 'scale(0)\x20rotate(180deg)' }, 1.2, void 0x0, c => {
            let d = {
                'background': 'url(images/interface/' + a + '.webp)\x20no-repeat',
                'transform': 'matrix(6,\x200,\x200,\x206,\x200,\x200)',
                'display': 'block'
            };
            SetStyle($('tGround'), d), requestAnimationFrame(() => {
                oEffects['Animate']($('tGround'), { 'transform': 'matrix(1,\x200,\x200,\x201,\x200,\x200)' }, 0.4, void 0x0, e => {
                    $('tGround')['style']['cssText'] = 'background:\x20url(images/interface/' + a + '.webp)\x20no-repeat;visibility:\x20visible;position:absolute;', b();
                });
            });
        });
    }
    oS['Init']({
        'PicArr': [
            'Industry.webp',
            'Marsh.webp',
            'Polar.webp',
            'IndustryClue1_1.webp'
        ]['map'](a => 'images/interface/' + a),
        'AudioArr': ['frostbite'],
        'LoadAccess'() {
            NewEle(0x0, 'div', 'width:546px;height:448px;position:\x20absolute;left:\x200;right:\x200;top:\x200;bottom:\x200;margin:\x20auto;background:\x20url(images/interface/IndustryClue1_1.webp)\x20no-repeat;left:\x208%;', 0x0, EDAll), NewEle('jngButton' + Math['random'](), 'a', 'left:780px;top:540px;z-index:258;position:absolute;', {
                'className': 'voidButton\x20oneLineVoidButton\x20jngButton',
                'onclick': () => SelectModal(NextLevel()),
                'innerText': oButtons['GetName']('continue')
            }, EDAll), NewEle('jngButton' + Math['random'](), 'a', 'left:1px;top:1px;z-index:258;position:absolute;', {
                'className': 'jngButton\x20Homepage',
                'onclick': () => Exitlevel()
            }, EDAll);
            let a = 0x0, b = NewEle('DivTeach', 'div', 0x0, 0x0, EDAll), c = NewImg('dDave', '', 'left:0;top:81px', EDAll), d = NewEle('effect', 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#FFF;opacity:0;', 0x0, EDAll);
            (function e() {
                b['onclick'] = e;
                switch (a) {
                case 0x0:
                    c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(b, $__language_Array__['bd2377502278bda121baa445bd65cd0e']), a++;
                    break;
                case 0x1:
                    b['onclick'] = null, c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(b, $__language_Array__['8daf0a53c92ad9ccff0cd7119eec3672']), a++, change('Marsh', () => b['onclick'] = e);
                    break;
                case 0x2:
                    c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['03e084e77c8e1ab83208853691a96954']), a++;
                    break;
                case 0x3:
                    c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(b, $__language_Array__['12b8ef4cf98255bacbd910ff47aa496e']), a++;
                    break;
                case 0x4:
                    c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['313377de74da10cf9937a2a439c325ab']), a++;
                    break;
                case 0x5:
                    c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(b, $__language_Array__['6a34d6d3c59188de244a03b18df6366b']), a++;
                    break;
                case 0x6:
                    b['onclick'] = null, c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(b, $__language_Array__['09d3a625abc216c93b7481f08c7de787']), a++, change('Polar', () => b['onclick'] = e);
                    break;
                case 0x7:
                    c['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(b, $__language_Array__['bc07730b5223560e56b9b91c5567a3d5']), a++;
                    break;
                case 0x8:
                    c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['fa596ddae2396dc5da2d3e4c67a96528']), a++;
                    break;
                case 0x9:
                    c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(b, $__language_Array__['21b9fb301fe76d0d238a11fa18e43110']), a++;
                    break;
                case 0xa:
                    c['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(b, $__language_Array__['0847b6985b1e57a58aa186ff4b5048bb']), a++;
                    break;
                case 0xb:
                    c['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(b, $__language_Array__['5b01336f1f336683725c5749419683d0']), a++;
                    break;
                case 0xc:
                    ClearChild(b, c), oEffects['fadeOut'](d, 'slow', ClearChild);
                }
            }());
        }
    });
}