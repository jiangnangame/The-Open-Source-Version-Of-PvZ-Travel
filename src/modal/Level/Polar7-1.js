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
    'LoadMusic': '',
    'StartGameMusic': 'Bgm_Marsh_Ready',
    'backgroundImage': 'images/interface/Polar2.webp',
    'LevelEName': 0x1,
    'LoadAccess': function (b) {
        EDAll['scrollLeft'] = 0x73;
        let c = 0x0, d = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), e = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
        (function g() {
            d['onclick'] = g;
            switch (c) {
            case 0x0:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['efb00ea5d4acd45d70e1f9c6941f8212']), c++;
                break;
            case 0x1:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['5d0595e3a1a75ee47376b4285f641aea']), c++;
                break;
            case 0x2:
                d['onclick'] = null, e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['0834823b9256401b9d4e59d72978b453']), c++, setTimeout(g, 0x258);
                break;
            case 0x3:
                d['onclick'] = g, e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['804c35c62c0db53f656b6351ce3bca49']), c++;
                break;
            case 0x4:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['1050054ec8f83e25662e92a860f987fa']), c++;
                break;
            case 0x5:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['505ce2b328a43a1b5895b1b4afce554f']), c++;
                break;
            case 0x6:
                PlayAudio('Zomboss2'), innerText(d, $__language_Array__['5fe348abd6708937f5d4b243a9c9b343']), c++;
                break;
            case 0x7:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['4d01a26108b2eaf58e579c16424355e1']), c++;
                break;
            case 0x8:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['3e0c646e0fe84c4bfff945d8f4d78e82']), c++;
                break;
            case 0x9:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['ed1427014e6ab8aebe49fbbc7856efb2']), c++;
                break;
            case 0xa:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['505ce2b328a43a1b5895b1b4afce554f']), c++;
                break;
            case 0xb:
                PlayAudio('Zomboss3'), innerText(d, $__language_Array__['2f3129ae88a347a2865e1b068a579392']), c++;
                break;
            case 0xc:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['79be506e62ce5bc20e75b1db66f036d6']), c++;
                break;
            case 0xd:
                PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['abf2f03e650396454669595edc8c22eb']), c++;
                break;
            case 0xe:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss2'), innerText(d, $__language_Array__['81501f533eb762a27a75853840253c38']), c++;
                break;
            case 0xf:
                PlayAudio('Zomboss1'), innerText(d, $__language_Array__['1cbbdd4f2714ad20337794be1d084e35']), c++;
                break;
            case 0x10:
                PlayAudio('Zomboss2'), innerText(d, $__language_Array__['d8852b88894e300bb3e38ca0b01f6880']), c++;
                break;
            case 0x11:
                PlayAudio('Zomboss2'), innerText(d, $__language_Array__['0e24803c6bff49d3b0e302e30b4bd5c1']), c++;
                break;
            case 0x12:
                PlayAudio('Zomboss2'), innerText(d, $__language_Array__['66087b2eedf689b78b45f971d4f220dd']), c++;
                break;
            case 0x13:
                e['src'] = 'images/interface/Black_Dave.png', PlayAudio('realdaveextralong' + Math['floor'](Math['random']() * 0x4 + 0x1)), innerText(d, $__language_Array__['f4ee89f893aa8fd856e19698ac538007']), c++;
                break;
            case 0x14:
                e['src'] = 'images/interface/Zomboss.png', PlayAudio('Zomboss1'), innerText(d, $__language_Array__['7d83a408dbe3531c272bb1f00ddb7ca0']), c++;
                break;
            case 0x15:
                PlayAudio('Zomboss1'), innerText(d, $__language_Array__['2463dea700cef69d8f52e8398ebdd742']), c++;
                break;
            case 0x16:
                PlayAudio('Zomboss3'), innerText(d, $__language_Array__['c01b2a7f2970a1bda534e91d2e7062d9']), c++;
                break;
            case 0x17:
                ClearChild(d, e), oSym['addTask'](0x1e, f);
            }
        }());
        function f() {
            NewEle('DivA', 'div', 'position:absolute;width:900px;height:600px;background:#FFF;opacity:0;z-index:257;left:115px;', 0x0, EDAll), ShowWinItem(GetPlantCardDom(oIceAloe, EDAll, null, {
                'onclick': function () {
                    GetNewCard(this, oIceAloe, 'Polar8');
                }
            }));
        }
    }
});