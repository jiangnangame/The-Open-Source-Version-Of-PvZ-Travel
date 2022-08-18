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
        (function h() {
            e['onclick'] = h;
            switch (d) {
            case 0x0:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong1'), innerText(e, $__language_Array__['c6f2f9e0578d408debfe8df74c4abdb0']), d++;
                break;
            case 0x1:
                PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['c3108438e42acdff27700c3c0b026d6d']), d++;
                break;
            case 0x2:
                PlayAudio('crazydavelong3'), innerText(e, $__language_Array__['0f6a14dcc99c1d62f82b7151fb4e6783']), d++;
                break;
            case 0x3:
                e['onclick'] = null, f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), e['innerHTML'] = '<p\x20style=\x27position:absolute;top:-18px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['c134a40bba07de6610cf538ad15ab4df'],
                    'font_size': 0x10
                })[0x0] + '</p>', oEffects['fadeIn'](c, 'slow', () => e['onclick'] = h), e['style']['fontSize'] = '16px', d++;
                break;
            case 0x4:
                PlayAudio('Zomboss3'), innerText(e, $__language_Array__['2cd8c05aa5ab7281c89e98d1b285c8d9']), e['style']['fontSize'] = '18px', d++;
                break;
            case 0x5:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['4add035c22311f0ee184bd56554b31c5']), d++;
                break;
            case 0x6:
                PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['dd16f36ffb6ee5101bd504b97767d676']), d++;
                break;
            case 0x7:
                PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['5868fab4e4126fca2118c787b97f4821']), d++;
                break;
            case 0x8:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), e['innerHTML'] = '<p\x20style=\x27position:absolute;top:-18px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['8dcc46c5a07697326902b11b39f492e7'],
                    'font_size': 0x10
                })[0x0] + '</p>', e['style']['fontSize'] = '16px', d++;
                break;
            case 0x9:
                PlayAudio('Zomboss1'), e['innerHTML'] = '<p\x20style=\x27position:absolute;top:-18px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['48776ffec5132629e289d06dded4a4a9'],
                    'font_size': 0x10
                })[0x0] + '</p>', d++;
                break;
            case 0xa:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['936518f1486bffad1ae592cf7382fa11']), e['style']['fontSize'] = '18px', d++;
                break;
            case 0xb:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), e['innerHTML'] = '<p\x20style=\x27position:absolute;top:-18px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['f32b0f13ad7edf9b05dd7ed15037785b'],
                    'font_size': 0x10
                })[0x0] + '</p>', e['style']['fontSize'] = '16px', d++;
                break;
            case 0xc:
                PlayAudio('Zomboss3'), e['innerHTML'] = '<p\x20style=\x27position:absolute;top:-18px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['c30f99e1a7890f11dd5741dce2629291'],
                    'font_size': 0x10
                })[0x0] + '</p>', d++;
                break;
            case 0xd:
                PlayAudio('Zomboss1'), e['innerHTML'] = '<p\x20style=\x27position:absolute;top:-18px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['ca5e2e4eeff1ddf2de5f20b69d84778a'],
                    'font_size': 0x10
                })[0x0] + '</p>', d++;
                break;
            case 0xe:
                PlayAudio('Zomboss2'), e['innerHTML'] = '<p\x20style=\x27position:absolute;top:-18px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                    'text': $__language_Array__['a8249ff92770a81c3db7777cf2678fa4'],
                    'font_size': 0x10
                })[0x0] + '</p>', d++;
                break;
            case 0xf:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['c2a65849047384a74e8e216969ccd72a']), e['style']['fontSize'] = '18px', d++;
                break;
            case 0x10:
                PlayAudio('crazydavelong1'), innerText(e, $__language_Array__['1d2891616c2d861db2fc16c2f01794a5']), d++;
                break;
            case 0x11:
                PlayAudio('crazydavelong3'), innerText(e, $__language_Array__['e6a899f9d29c0c28e88033c10620320e']), d++;
                break;
            case 0x12:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(e, $__language_Array__['a5685aabc03df3d6ea503b00c3a8ce22']), d++;
                break;
            case 0x13:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(e, $__language_Array__['81e3169df0eb3499bc2956ae6fbefc00']), d++;
                break;
            case 0x14:
                PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['d581899d671e74977e04547f2615b6e5']), d++;
                break;
            case 0x15:
                PlayAudio('crazydavelong3'), innerText(e, $__language_Array__['0467e80ee8011277e147c04f5abb8657']), d++;
                break;
            case 0x16:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(e, $__language_Array__['ba6abd9798126ab78f46f1e94ac004e0']), d++, e['onclick'] = null, oSym['addTask'](0x14, () => {
                    e['onclick'] = h, h();
                });
                break;
            case 0x17:
                PlayAudio('Zomboss3'), innerText(e, $__language_Array__['21e915ee6d0e7cdeb3b8b2de1b08a243']), d++;
                break;
            case 0x18:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong3'), innerText(e, $__language_Array__['76b739fbf50675ada405eba113d9a866']), d++;
                break;
            case 0x19:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss3'), innerText(e, $__language_Array__['465e11295a773686eb5e8109421cbe4f']), d++;
                break;
            case 0x1a:
                PlayAudio('Zomboss2'), innerText(e, $__language_Array__['f5f184d8a6b3455a6884d8593b23440c']), d++;
                break;
            case 0x1b:
                f['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong2'), innerText(e, $__language_Array__['c1bb1635d8ced69982e4292fa0bf7db8']), d++;
                break;
            case 0x1c:
                PlayAudio('crazydavelong1'), innerText(e, $__language_Array__['72f78be9208daa31e7ef108bd80e54d0']), d++;
                break;
            case 0x1d:
                f['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(e, $__language_Array__['b23451f605a76e43492b688e616c8e39']), d++;
                break;
            case 0x1e:
                ClearChild(e, f);
                let i = $('shadeb')['style']['cssText'], j = $('shadeb');
                j['style']['display'] = 'block', j['style']['zIndex'] = '30000', j['style']['backgroundColor'] = 'white', j['style']['opacity'] = 0x1, CSpeed(0x1), setTimeout(function () {
                    oEffects['Animate'](j, { 'opacity': 0x0 }, 0x1, 'linear', () => {
                        j['style']['cssText'] = i;
                    });
                }, 0x12c / oSym['NowSpeed']), ClearChild(c), g();
            }
        }());
        function g() {
            SelectModal('Polar6');
        }
    }
});