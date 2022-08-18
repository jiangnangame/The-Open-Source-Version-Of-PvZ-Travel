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
    'LoadMusic': 'Bgm_Marsh_Plot3',
    'StartGameMusic': 'Bgm_Marsh_Ready',
    'backgroundImage': 'images/interface/Polar.webp',
    'LevelEName': 0x1,
    'LoadAccess': function (b) {
        EDAll['scrollLeft'] = 0x73;
        let c = NewEle('effect' + Math['random'](), 'div', 'position:absolute;z-index:257;width:900px;height:600px;background:#000;opacity:0;left:115px;', 0x0, EDAll), d = 0x0, e = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), f = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
        (function g() {
            e['onclick'] = g;
            switch (d) {
            case 0x0:
                e['onclick'] = null, f['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['f1aeba0e3c6946260542f8422f61a55e']), oEffects['fadeIn'](c, 'slow', () => e['onclick'] = g), d++;
                break;
            case 0x1:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['60aa032df429bf078b354ee52e7160ef']), d++;
                break;
            case 0x2:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['52b3320aa1ab61024418b43eaa31c7ec']), d++;
                break;
            case 0x3:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['fb61e2c482e3212ea7053322e97a184b']), d++;
                break;
            case 0x4:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['d8c4b010da05926b4db6a4fca7913de6']), d++;
                break;
            case 0x5:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, '…'), d++;
                break;
            case 0x6:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['35803779c954dcd35a9111d25c5213ab']), d++;
                break;
            case 0x7:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(e, $__language_Array__['7a19bbdbfd23d7f33619e7934030c3d0']), d++;
                break;
            case 0x8:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['1a11bda3467bdf8e1bd2a688c51dac4d']), d++;
                break;
            case 0x9:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(e, $__language_Array__['124b546b4df0d521dbce43bb0f1913b9']), d++;
                break;
            case 0xa:
                PlayAudio('Zomboss1'), innerText(e, $__language_Array__['f9a9d9909c533a7d79bd4d0fd35ff735']), d++;
                break;
            case 0xb:
                PlayAudio('Zomboss2'), innerText(e, $__language_Array__['b2341043177d47eae0156259e12ae193']), d++;
                break;
            case 0xc:
                PlayAudio('Zomboss1'), innerText(e, $__language_Array__['3459d77564579b1afc1ebe89f61f6a67']), d++;
                break;
            case 0xd:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['a17a5bb01985339efcd00a31ad5be518']), d++;
                break;
            case 0xe:
                PlayAudio('crazydavelong1'), innerText(e, $__language_Array__['0ed4347776be5c0bf9a536ffaa299503']), d++;
                break;
            case 0xf:
                PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['43eb93d6db60ba289b454070108e227d']), d++;
                break;
            case 0x10:
                PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['54dc22ef827eeca3a65956a2609e248a']), d++;
                break;
            case 0x11:
                PlayAudio('crazydavelong1'), innerText(e, $__language_Array__['c0379bcebdaf8032e823f7c0f1b8e7b5']), d++;
                break;
            case 0x12:
                PlayAudio('crazydavelong3'), innerText(e, $__language_Array__['f4f689ab0d00b2fd78d040a83a755b47']), d++;
                break;
            case 0x13:
                PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['ba42256f3cc2e59ed46dddd74843a97d']), d++;
                break;
            case 0x14:
                PlayAudio('crazydavelong1'), innerText(e, $__language_Array__['4b50422a57b38b1e0b2b27eb66172227']), d++;
                break;
            case 0x15:
                PlayAudio('crazydavelong1'), innerText(e, $__language_Array__['f660b0cf1258b59ec272eb77f7777035']), d++;
                break;
            case 0x16:
                PlayAudio('crazydavelong3'), e['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['20a88ae99c7023c9c501a9c2d21d2dd6'],
                    'font_size': 0x17
                })[0x0] + '</p>', e['style']['fontSize'] = '23px', d++;
                break;
            case 0x17:
                ClearChild(e, f), oEffects['Animate'](c, { 'background': 'white' }, 'slow');
                let h = NewEle('233', 'div', 'position:absolute;width:900px;height:600px;z-index:258;top:252px;left:115px;text-align:center;color:black;font-size:36px;', { 'className': 'LvlUI_Industry20Div' }, EDAll), i = 0x0, j = 0x0;
                (function k(l = -0x64) {
                    i = Math['floor'](Math['random']() * 0xc + 0x1), j = Math['floor'](Math['random']() * 0x1c + 0x1);
                    l < 0x14 && (i = 0x4);
                    l < 0x2c && (j = 0x17);
                    l > 0x1f4 && (i = 0x7);
                    l > 0x226 && (j = 0x17);
                    let m = Math['max'](0x1, 0x2 + Math['floor'](l / 0x1f4 * 0x6));
                    h['innerText'] = '' + i + $__language_Array__['40ddd575f60581bbaf032bda062f02a6'] + j + $__language_Array__['b6c6dd6639257cef5212fdbd340a968f'], l < 0x28a ? oSym['addTask'](m, k, [l + m]) : oEffects['Animate'](c, { 'background': 'black' }, 0x3, 'linear', n => {
                        ClearChild(h), toWin();
                    }, 0x1);
                }());
            }
        }());
    }
});