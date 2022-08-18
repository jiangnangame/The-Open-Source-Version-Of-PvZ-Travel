/*! 
 * Copyright 2022 JiangNanGame. All rights reserved.
 * Use of this source code is governed by The-Changjiang-River-License. 
 * The link of our license: https://github.com/jiangnangame/The-Changjiang-River-License/
 */
 'use strict';
{
    const staticInfs = oPropSym['staticInforms'];
    let userInfs = oPropSym['data'];
    const oShop = {
        'Init'() {
            NewEle('jngButton' + Math['random'](), 'a', 'left:1px;top:1px;z-index:258;position:\x20absolute;', {
                'className': 'jngButton\x20Homepage',
                'onclick': this['exit']['bind'](this)
            }, EDAll), SetBlock($('dShop')), this['check']() && (oCoinContent['show']()['canHide'] = ![], oCoinContent['__ele__']['style']['left'] = '550px', this['renderItems'](), this['listenBuyingEvents']());
        },
        'check'() {
            if (localStorage['JNG_TR_PropsUnlock'] === void 0x0 || localStorage['JNG_TR_PropsUnlock'] === '{}')
                return jngAlert['open']({
                    'text': $__language_Array__['62e4c35c796d1f1db2afa2920014b593'],
                    'type': 0x0,
                    'shade': !![],
                    'nextHandler': this['exit']['bind'](this)
                });
            return !![];
        },
        'exit'() {
            oCoinContent['__ele__']['style']['left'] = '', SetNone($('dShop')), SelectModal('index', 'Service');
        },
        'renderItem'(a) {
            var b;
            userInfs = oPropSym['data'];
            let {
                    cname: c,
                    price: d,
                    description: e,
                    shopImg: f,
                    css: g
                } = staticInfs[a], h = (b = userInfs[a]) !== null && b !== void 0x0 ? b : 0x0, i = NewEle('ShopItem_' + a, 'div', null, { 'className': 'item' });
            return i['innerHTML'] = '<div\x20class=\x27item\x27\x20\x20data-jng-propname=\x27' + a + '\x27><span\x20class=\x22prop_name\x22>' + c + $__language_Array__['678caadf667ed5d7b5475fea9096b6a9'][0x0] + h + $__language_Array__['678caadf667ed5d7b5475fea9096b6a9'][0x1] + f + '\x20style=\x27' + (g !== null && g !== void 0x0 ? g : '') + '\x27/></div><span\x20class=\x22prop_description\x22>' + e + $__language_Array__['678caadf667ed5d7b5475fea9096b6a9'][0x2] + d + $__language_Array__['678caadf667ed5d7b5475fea9096b6a9'][0x3], i;
        },
        'renderItems'() {
            userInfs = oPropSym['data'], $('dFlexWrap_ShopItem')['innerHTML'] = '';
            for (let a in staticInfs) {
                oPropSym['isPropUnlocked'](a) && $('dFlexWrap_ShopItem')['append'](this['renderItem'](a));
            }
        },
        'listenBuyingEvents'() {
            $('dFlexWrap_ShopItem')['addEventListener']('click', a => {
                const b = a['target'], c = b['parentNode'];
                if (b['className'] === 'button_buy') {
                    oCoinContent['update'](Number(localStorage['JNG_TR_Coins']));
                    let d = c['dataset']['jngPropname'], e = Number['parseInt'](b['dataset']['jngNum']), f = e * staticInfs[d]['price'];
                    $User['Coins'] >= f ? ($User['Coins'] -= f, oPropSym['addProp'](d, e), c['replaceChild'](this['renderItem'](d), b)) : jngAlert['open']({
                        'shade': 0x1,
                        'type': 0x0,
                        'text': $__language_Array__['8996abd08d98c7fc680fd26d7a5fca81']
                    }), a['stopPropagation']();
                }
            }, !![]);
        }
    };
    oS['Init']({
        'PicArr': ['images/Props/Shop/store.webp'],
        'LoadMusic': 'diary',
        'LoadAccess'() {
            oShop['Init']();
        }
    });
}