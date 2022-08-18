/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 oS['Init']({
    'PicArr': (function () {
        let b = 'images/interface/', c = [];
        for (let d = 0x0; d <= 0x3; d++) {
            c['push']('images/Props/PolarPlots/dave_' + d + '.webp');
        }
        return c['concat']([
            b + 'Polar2.webp',
            'images/Props/PolarPlots/witch_hunting.webp',
            'images/Props/PolarPlots/daveUnderTree.webp',
            'images/Props/PolarPlots/hand_c.webp',
            'images/Props/PolarPlots/hand_lt.webp',
            'images/Props/PolarPlots/hand_lb.webp',
            'images/Props/PolarPlots/hand_rt.webp',
            'images/Props/PolarPlots/hand_rb.webp'
        ]);
    }()),
    'LoadMusic': 'Bgm_Polar_4_NPC',
    'AudioArr': ['Bgm_Polar_25_NPC_2'],
    'StartGameMusic': 'Bgm_Marsh_Ready',
    'backgroundImage': 'images/interface/Polar2.webp',
    'LoadAccess': function (b) {
        CSpeed(0x1), EDAll['scrollLeft'] = 0x73;
        let c = [
                'images/Props/PolarPlots/hand_c.webp',
                'images/Props/PolarPlots/hand_lt.webp',
                'images/Props/PolarPlots/hand_lb.webp',
                'images/Props/PolarPlots/hand_rt.webp',
                'images/Props/PolarPlots/hand_rb.webp'
            ], d = NewEle('effect' + Math['random'](), 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:rgba(0,0,0,0);opacity:1;left:115px;', 0x0, EDAll), e = NewEle('effect' + Math['random'](), 'div', 'position:absolute;color:white;z-index:257;pointer-events:none;width:900px;height:600px;opacity:0;left:115px;', 0x0, EDAll);
        NewEle('blackbg', 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:rgba(0,0,0,1);opacity:1;', 0x0, e), NewEle('hand_lt', 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:url(' + c[0x1] + ');opacity:0;', 0x0, e), NewEle('hand_rt', 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:url(' + c[0x3] + ');opacity:0;', 0x0, e), NewEle('hand_c', 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:url(' + c[0x0] + ');opacity:0;', 0x0, e), NewEle('hand_lb', 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:url(' + c[0x2] + ');opacity:0;', 0x0, e), NewEle('hand_rb', 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:url(' + c[0x4] + ');opacity:0;', 0x0, e), NewEle('blackbgcover', 'div', 'position:absolute;color:white;z-index:257;width:900px;height:600px;background:rgba(0,0,0,1);opacity:0;', 0x0, e), NewEle('videoPV', 'video', 'z-index:300;position:absolute;height:600px;top:0;left:-83px;opacity:0;', {
            'src': 'images/Props/PolarPlots/mouth.mp4',
            'loop': !![],
            'controls': ![],
            'autoplay': ![],
            'preload': 'auto',
            'muted': !![]
        }, e), NewEle('', 'video', 'position:absolute;top:0;left:0;opacity:0;display:none;', {
            'src': 'images/Props/PolarPlots/pv.mp4',
            'preload': 'auto'
        }), NewEle('textbox', 'div', 'font-size:50px;position:absolute;color:white;text-align:center;line-height:600px;z-index:257;width:900px;height:600px;opacity:0;', { 'className': 'LvlUI_Industry20Div' }, e);
        let f = NewEle('effect' + Math['random'](), 'div', 'font-size:28px;position:absolute;color:white;text-align:center;line-height:600px;z-index:257;width:900px;left:115px;height:600px;opacity:0;', 0x0, EDAll);
        function g(o, p) {
            return o['querySelector'](p);
        }
        oEffects['Animate'](d, { 'background': 'rgba(0,0,0,1)' }, 'slow', 'linear', () => {
            f['innerText'] = $__language_Array__['019cbf97dd657f0897a14c91268509f7'], oEffects['fadeIn'](f, 0x2, () => {
                oSym['addTask'](0x64, function () {
                    e['style']['opacity'] = '1', oEffects['Animate'](d, { 'background': 'rgba(0,0,0,0)' }, 0x2), oEffects['fadeOut'](f, 0x2, () => {
                        f['style']['display'] = 'none', ClearChild(f, d), h();
                    });
                });
            });
        });
        function h() {
            let o = g(e, '#hand_c');
            o['style']['top'] = '60px', oEffects['Animate'](o, {
                'opacity': 0x1,
                'top': 0x0
            }, 'slow', 'ease-out', () => {
                j();
            });
        }
        function i(o, p, q) {
            let r = g(e, '#' + p);
            r['style']['top'] = o + 'px', oEffects['Animate'](r, {
                'opacity': 0x1,
                'top': 0x0
            }, 'slow', 'ease-out', () => {
                q();
            });
        }
        function j() {
            let o = 0x0, p = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), q = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
            (function r() {
                p['onclick'] = r;
                switch (o) {
                case 0x0:
                    q['src'] = 'images/interface/Dave.png', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['a58066b6da9e1d0036d747cd5d8c71d7']), o++;
                    break;
                case 0x1:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['d255de1b889387dafb69e76626a16207']), o++;
                    break;
                case 0x2:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['1c1628dcc2b8b7f775ab3c9ab6ce4de5']), o++;
                    break;
                case 0x3:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, '……'), o++;
                    break;
                case 0x4:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['6b6315c2fd90b8b85d6cdf013df2848c']), o++;
                    break;
                case 0x5:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), p['onclick'] = null, i(-0x3c, 'hand_lt', () => {
                        p['onclick'] = r;
                    }), innerText(p, $__language_Array__['e0f0adcfb7c8ff41dd4c8ea205178d73']), o++;
                    break;
                case 0x6:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), p['onclick'] = null, i(-0x3c, 'hand_rt', () => {
                        p['onclick'] = r;
                    }), innerText(p, $__language_Array__['323ca2ba312e3bec144ab79e58ca814b']), o++;
                    break;
                case 0x7:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), p['onclick'] = null, i(0x3c, 'hand_lb', () => {
                        p['onclick'] = r;
                    }), innerText(p, $__language_Array__['1fbb3c2a0191f80bd920411219421a9e']), o++;
                    break;
                case 0x8:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), p['onclick'] = null, i(0x3c, 'hand_rb', () => {
                        p['onclick'] = r;
                    }), innerText(p, $__language_Array__['ed460fa2e8715a2a2273459997436564']), o++;
                    break;
                case 0x9:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['9ba444b742b1f9d1be5b9bcfa00ccc37']), o++;
                    break;
                case 0xa:
                    q['style']['display'] = p['style']['display'] = 'none';
                    {
                        g(e, '#blackbgcover')['style']['opacity'] = 0x1;
                        let s = g(e, '#textbox');
                        s['innerText'] = $__language_Array__['656fc25a098f1cf44a9485833524d5eb'], StopMusic(), oEffects['fadeIn'](s, 0x2, () => {
                            oSym['addTask'](0x64, function () {
                                let t = g(e, '#videoPV');
                                t['play'](), oEffects['fadeIn'](t, 0x2, () => {
                                    s['style']['opacity'] = '0', g(e, '#blackbgcover')['style']['background'] = 'url(images/Props/PolarPlots/witch_hunting.webp)', g(e, '#hand_c')['style']['opacity'] = 0x0, g(e, '#hand_lb')['style']['opacity'] = 0x0, g(e, '#hand_lt')['style']['opacity'] = 0x0, g(e, '#hand_rb')['style']['opacity'] = 0x0, g(e, '#hand_rt')['style']['opacity'] = 0x0, r();
                                });
                            });
                        });
                    }
                    ;
                    o++;
                    break;
                case 0xb:
                    q['style']['display'] = p['style']['display'] = '', PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['8fc735ba3c23fcae9ed5c19055bfc237']), o++;
                    break;
                case 0xc:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['04a9406efb91914ffc2c4d82edf659f8']), o++;
                    break;
                case 0xd:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['5c78f7b1d1132a43d668ba13ae303934']), o++;
                    break;
                case 0xe: {
                        p['onclick'] = null;
                        let t = g(e, '#videoPV');
                        oEffects['fadeOut'](t, 0x2, () => {
                            t['src'] = '', p['onclick'] = r, PlayMusic(oS['LoadMusic'] = 'Bgm_Polar_25_NPC_2');
                        });
                    }
                    ;
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['30418068025cd41b91857ad4fea25f9e']), o++;
                    break;
                case 0xf:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['91810438d07d820aa46d381ed7578009']), o++;
                    break;
                case 0x10:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['7bf5297cb3865e833262ae69574cbcd6']), o++;
                    break;
                case 0x11:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['d01d6507e26ef623c9cd552d20854447']), o++;
                    break;
                case 0x12: {
                        p['onclick'] = null;
                        let u = g(e, '#blackbgcover');
                        oEffects['fadeOut'](u, 'slow', () => {
                            p['onclick'] = r;
                        });
                    }
                    ;
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['425cd77ed35d9d24573fe5bab2382c6c']), o++;
                    break;
                case 0x13:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['5a9c59acc67a40c124ae12622bfe0a77']), o++;
                    break;
                case 0x14:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['2434dc7596c1108d00d7106ad04a382f']), o++;
                    break;
                case 0x15:
                    ClearChild(p, q);
                    {
                        let v = g(e, '#blackbgcover');
                        v['style']['background'] = 'url(images/Props/PolarPlots/dave_0.webp)', oEffects['fadeIn'](v, 'slow', () => {
                            for (let w = 0x0; w <= 0x4; w++) {
                                if (w == 0x4) {
                                    oSym['addTask'](w * 0x28 + 0x64, () => {
                                        oEffects['fadeOut'](v, 'slow', () => {
                                            k();
                                        });
                                    });
                                    break;
                                }
                                oSym['addTask'](w * 0x28, () => {
                                    v['style']['background'] = 'url(images/Props/PolarPlots/dave_' + w + '.webp)';
                                });
                            }
                        });
                    }
                    ;
                }
            }());
        }
        function k() {
            let o = g(e, '#videoPV');
            o['style']['opacity'] = 0x1, o['src'] = 'images/Props/PolarPlots/pv.mp4', o['loop'] = ![], o['muted'] = ![], o['style']['left'] = '0', o['currentTime'] = 0x0, o['play']();
            function p(r) {
                r['which'] == 0x30 && (o['playbackRate'] = 0x5), r['preventDefault']();
            }
            ;
            function q(r) {
                r['which'] == 0x30 && (o['playbackRate'] = 0x1), r['preventDefault']();
            }
            ;
            localStorage['JNG_DEV'] && (document['addEventListener']('keydown', p), document['addEventListener']('keyup', q)), o['addEventListener']('ended', () => {
                document['removeEventListener']('keydown', p), document['removeEventListener']('keyup', q), oEffects['fadeOut'](o, 0x2, () => {
                    m();
                });
            }, { 'once': !![] });
        }
        function l(o, p = 0x14, q = !![]) {
            let r = {
                'text': o,
                'font_size': p,
                'str': q,
                'align_center': !![],
                'width': 0x384
            };
            return oEffects['TextEffects']['ShakeText'](r);
        }
        function m() {
            let o = 0x0, p = NewEle('DivTeach', 'div', 'left:415px;', 0x0, EDAll), q = NewImg('dDave', '', 'left:115px;top:81px', EDAll);
            (function r() {
                p['onclick'] = r;
                switch (o) {
                case 0x0: {
                        p['onclick'] = null;
                        let s = g(e, '#blackbgcover');
                        s['style']['background'] = 'url(images/Props/PolarPlots/daveUnderTree.webp)', oEffects['fadeIn'](s, 'slow', () => {
                            p['onclick'] = r;
                        });
                    }
                    ;
                    q['src'] = 'images/interface/Dave.png', PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, '……'), o++;
                    break;
                case 0x1:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['e96cbaae2f87b5b675bc89c0e5536da5']), o++;
                    break;
                case 0x2:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['65ffcaec8aae6561fceca523bc7cbdd6']), o++;
                    break;
                case 0x3:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['2409ac44addcbf9bd80b92e74bb1598d']), o++;
                    break;
                case 0x4:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['1c18079dd31082d9091d90184410fa4d']), o++;
                    break;
                case 0x5:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['b3d667504200963c579fd9c563aa63e5']), o++;
                    break;
                case 0x6:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['ffba4f53db1c5e887040d036456f11ae']), o++;
                    break;
                case 0x7:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['8035ca0e27f3c809cf1daa6b2666c8fb']), o++;
                    break;
                case 0x8:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['0a5d5a0638c1bb33952b6a007287f243']), o++;
                    break;
                case 0x9:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['17a984ed7acf14f6fec39aa26f8a2d83']), o++;
                    break;
                case 0xa:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), p['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['1ec198be982cf5af66f89f94a9c584b4'],
                        'font_size': 0x18
                    })[0x0] + '</p>', p['style']['fontSize'] = '24px', o++;
                    break;
                case 0xb:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), p['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['4be4742b89e1aa9c3cc4e76bbdc22553'],
                        'font_size': 0x18
                    })[0x0] + '</p>', o++;
                    break;
                case 0xc:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['cb5c911584226edad1bb947cf069b02a']), p['style']['fontSize'] = '18px', o++;
                    break;
                case 0xd:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['86d0c65076ea1394943f5b4c44ea789f']), o++;
                    break;
                case 0xe:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), p['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['fbfa987cf5f4c68d61067732f3308b7f'],
                        'font_size': 0x12
                    })[0x0] + '</p>', o++;
                    break;
                case 0xf:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), p['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['fe84c8cb1b9d60ec2e0af5a18f6f6d70'],
                        'font_size': 0x18
                    })[0x0] + '</p>', p['style']['fontSize'] = '24px', o++;
                    break;
                case 0x10:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3));
                    {
                        let t = g(e, '#textbox');
                        t['style']['opacity'] = 0x1, q['style']['display'] = p['style']['display'] = 'none', t['innerHTML'] = l($__language_Array__['9f071f72123fc2949013b6229906468e'], 0x18)[0x0];
                        let u = EDAll['onclick'];
                        setTimeout(function () {
                            EDAll['onclick'] = function () {
                                r(), EDAll['onclick'] = u;
                            };
                        }, 0x12c);
                    }
                    ;
                    o++;
                    break;
                case 0x11: {
                        q['style']['display'] = p['style']['display'] = '';
                        let v = g(e, '#textbox');
                        v['style']['opacity'] = 0x0;
                    }
                    ;
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), p['innerHTML'] = '<p\x20style=\x27position:absolute;top:-35px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['10e209e49baeae198c6be9f5fb5d18a7'],
                        'font_size': 0x16
                    })[0x0] + '</p>', o++;
                    break;
                case 0x12:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), p['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['fd9bb8bc8d0a579f100946499d4040f7'],
                        'font_size': 0x18
                    })[0x0] + '</p>', o++;
                    break;
                case 0x13:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), p['innerHTML'] = '<p\x20style=\x27position:absolute;top:-26px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['e49463e61e0c68b46502677a50c7699d'],
                        'font_size': 0x18
                    })[0x0] + '</p>', o++;
                    break;
                case 0x14:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['f12f5f179fe7a23d3791a2c4fc8f89b8']), p['style']['fontSize'] = '16px', o++;
                    break;
                case 0x15:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3));
                    {
                        let w = g(e, '#textbox');
                        w['style']['opacity'] = 0x1, q['style']['display'] = p['style']['display'] = 'none', w['innerHTML'] = l($__language_Array__['fe84c8cb1b9d60ec2e0af5a18f6f6d70'], 0x18)[0x0];
                        let x = EDAll['onclick'];
                        setTimeout(function () {
                            EDAll['onclick'] = function () {
                                r(), EDAll['onclick'] = x;
                            };
                        }, 0x12c);
                    }
                    ;
                    o++;
                    break;
                case 0x16: {
                        q['style']['display'] = p['style']['display'] = '';
                        let y = g(e, '#textbox');
                        y['style']['opacity'] = 0x0;
                    }
                    ;
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), p['innerHTML'] = '<p\x20style=\x27position:absolute;top:-18px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['677e4abb6b0c00633924bbd933b316d6'],
                        'font_size': 0x10
                    })[0x0] + '</p>', p['style']['fontSize'] = '16px', o++;
                    break;
                case 0x17:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['8184de3fbf6e8487a3b1303fa0e10cbe']), o++;
                    break;
                case 0x18:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['15e29551fb99928f3dc62a25c4c74c8c']), p['style']['fontSize'] = '18px', o++;
                    break;
                case 0x19:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3));
                    {
                        let z = g(e, '#textbox');
                        z['style']['opacity'] = 0x1, q['style']['display'] = p['style']['display'] = 'none', z['innerHTML'] = l($__language_Array__['fe84c8cb1b9d60ec2e0af5a18f6f6d70'], 0x32)[0x0];
                        let A = EDAll['onclick'];
                        setTimeout(function () {
                            EDAll['onclick'] = function () {
                                r(), EDAll['onclick'] = A;
                            };
                        }, 0x12c);
                    }
                    ;
                    o++;
                    break;
                case 0x1a: {
                        q['style']['display'] = p['style']['display'] = '';
                        let B = g(e, '#textbox');
                        B['style']['opacity'] = 0x0;
                    }
                    ;
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), p['innerHTML'] = '<p\x20style=\x27position:absolute;top:-20px;left:15px;\x27>' + oEffects['TextEffects']['ShakeText']({
                        'text': $__language_Array__['75466fae2d0e8bcf0120ee8d70a2417e'],
                        'font_size': 0x12
                    })[0x0] + '</p>', p['style']['fontSize'] = '18px', o++;
                    break;
                case 0x1b:
                    PlayAudio('crazydavelong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['28c6cf225d9fe8a138c1953979a7ca27']), p['style']['fontSize'] = '60px', o++;
                    break;
                case 0x1c:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), p['style']['fontSize'] = '18px', innerText(p, '……'), o++;
                    break;
                case 0x1d:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['52922b39b94f056e2918c0867de49336']), o++;
                    break;
                case 0x1e:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['51b01e5ab3d952350b8cc34b8c5bd95c']), o++;
                    break;
                case 0x1f:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, '……'), o++;
                    break;
                case 0x20:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['6f927e8c50bb3ea750b4b00ee3b00c05']), o++;
                    break;
                case 0x21:
                    PlayAudio('crazydaveextralong' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['2926c2b462db7ff450874e9b011c0a87'] + ($User['Name'] && $User['Name'] != 'local' ? $User['Name'] : $__language_Array__['7b69b80394f13831421fe0cac92df68b']) + $__language_Array__['7149064796f3fdb3ae0360a11e298b26']), o++;
                    break;
                case 0x22:
                    PlayAudio('crazydaveshort' + Math['floor'](0x1 + Math['random']() * 0x3)), innerText(p, $__language_Array__['af02368f9102257f79f67b42a079b8bd']), o++;
                    break;
                case 0x23:
                    ClearChild(p, q), oSym['addTask'](0x1e, n);
                }
            }());
        }
        function n() {
            toWin();
        }
    }
});