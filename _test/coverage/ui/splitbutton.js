/* automatically generated by JSCoverage - do not edit */
try {
    if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
        // this is a browser window that was opened from another window
        if (!top.opener._$jscoverage) {
            top.opener._$jscoverage = {};
        }
    }
} catch (e) {}
try {
    if (typeof top === 'object' && top !== null) {
        // this is a browser window
        try {
            if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
                top._$jscoverage = top.opener._$jscoverage;
            }
        } catch (e) {}
        if (!top._$jscoverage) {
            top._$jscoverage = {};
        }
    }
} catch (e) {}
try {
    if (typeof top === 'object' && top !== null && top._$jscoverage) {
        _$jscoverage = top._$jscoverage;
    }
} catch (e) {}
if (typeof _$jscoverage !== 'object') {
    _$jscoverage = {};
}
if (!_$jscoverage['ui/splitbutton.js']) {
    _$jscoverage['ui/splitbutton.js'] = [];
    _$jscoverage['ui/splitbutton.js'][4] = 0;
    _$jscoverage['ui/splitbutton.js'][5] = 0;
    _$jscoverage['ui/splitbutton.js'][11] = 0;
    _$jscoverage['ui/splitbutton.js'][12] = 0;
    _$jscoverage['ui/splitbutton.js'][14] = 0;
    _$jscoverage['ui/splitbutton.js'][19] = 0;
    _$jscoverage['ui/splitbutton.js'][20] = 0;
    _$jscoverage['ui/splitbutton.js'][21] = 0;
    _$jscoverage['ui/splitbutton.js'][22] = 0;
    _$jscoverage['ui/splitbutton.js'][23] = 0;
    _$jscoverage['ui/splitbutton.js'][24] = 0;
    _$jscoverage['ui/splitbutton.js'][25] = 0;
    _$jscoverage['ui/splitbutton.js'][30] = 0;
    _$jscoverage['ui/splitbutton.js'][31] = 0;
    _$jscoverage['ui/splitbutton.js'][34] = 0;
    _$jscoverage['ui/splitbutton.js'][35] = 0;
    _$jscoverage['ui/splitbutton.js'][36] = 0;
    _$jscoverage['ui/splitbutton.js'][38] = 0;
    _$jscoverage['ui/splitbutton.js'][39] = 0;
    _$jscoverage['ui/splitbutton.js'][40] = 0;
    _$jscoverage['ui/splitbutton.js'][41] = 0;
    _$jscoverage['ui/splitbutton.js'][46] = 0;
    _$jscoverage['ui/splitbutton.js'][48] = 0;
    _$jscoverage['ui/splitbutton.js'][51] = 0;
    _$jscoverage['ui/splitbutton.js'][54] = 0;
    _$jscoverage['ui/splitbutton.js'][57] = 0;
    _$jscoverage['ui/splitbutton.js'][68] = 0;
    _$jscoverage['ui/splitbutton.js'][69] = 0;
    _$jscoverage['ui/splitbutton.js'][70] = 0;
    _$jscoverage['ui/splitbutton.js'][71] = 0;
    _$jscoverage['ui/splitbutton.js'][74] = 0;
    _$jscoverage['ui/splitbutton.js'][75] = 0;
    _$jscoverage['ui/splitbutton.js'][79] = 0;
    _$jscoverage['ui/splitbutton.js'][80] = 0;
    _$jscoverage['ui/splitbutton.js'][84] = 0;
    _$jscoverage['ui/splitbutton.js'][85] = 0;
}
_$jscoverage['ui/splitbutton.js'].source = [
    "<span class=\"c\">///import core</span>",
    "<span class=\"c\">///import uicore</span>",
    "<span class=\"c\">///import ui/stateful.js</span>",
    "<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "    <span class=\"k\">var</span> utils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>utils<span class=\"k\">,</span>",
    "        uiUtils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>uiUtils<span class=\"k\">,</span>",
    "        domUtils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>dom<span class=\"k\">.</span>domUtils<span class=\"k\">,</span>",
    "        UIBase <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>UIBase<span class=\"k\">,</span>",
    "        Stateful <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>Stateful<span class=\"k\">,</span>",
    "        SplitButton <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>SplitButton <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">(</span>options<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>initOptions<span class=\"k\">(</span>options<span class=\"k\">);</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>initSplitButton<span class=\"k\">();</span>",
    "        <span class=\"k\">}</span><span class=\"k\">;</span>",
    "    SplitButton<span class=\"k\">.</span>prototype <span class=\"k\">=</span> <span class=\"k\">{</span>",
    "        popup<span class=\"k\">:</span> <span class=\"k\">null</span><span class=\"k\">,</span>",
    "        uiName<span class=\"k\">:</span> <span class=\"s\">'splitbutton'</span><span class=\"k\">,</span>",
    "        title<span class=\"k\">:</span> <span class=\"s\">''</span><span class=\"k\">,</span>",
    "        initSplitButton<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>initUIBase<span class=\"k\">();</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>Stateful_init<span class=\"k\">();</span>",
    "            <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>popup <span class=\"k\">!=</span> <span class=\"k\">null</span><span class=\"k\">)</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">var</span> popup <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>popup<span class=\"k\">;</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>popup <span class=\"k\">=</span> <span class=\"k\">null</span><span class=\"k\">;</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>setPopup<span class=\"k\">(</span>popup<span class=\"k\">);</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        _UIBase_postRender<span class=\"k\">:</span> UIBase<span class=\"k\">.</span>prototype<span class=\"k\">.</span>postRender<span class=\"k\">,</span>",
    "        postRender<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>Stateful_postRender<span class=\"k\">();</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>_UIBase_postRender<span class=\"k\">();</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        setPopup<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>popup<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>popup <span class=\"k\">===</span> popup<span class=\"k\">)</span> <span class=\"k\">return</span><span class=\"k\">;</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>popup <span class=\"k\">!=</span> <span class=\"k\">null</span><span class=\"k\">)</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>popup<span class=\"k\">.</span>dispose<span class=\"k\">();</span>",
    "            <span class=\"k\">}</span>",
    "            popup<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'show'</span><span class=\"k\">,</span> utils<span class=\"k\">.</span>bind<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>_onPopupShow<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">));</span>",
    "            popup<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'hide'</span><span class=\"k\">,</span> utils<span class=\"k\">.</span>bind<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>_onPopupHide<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">));</span>",
    "            popup<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'postrender'</span><span class=\"k\">,</span> utils<span class=\"k\">.</span>bind<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "                popup<span class=\"k\">.</span>getDom<span class=\"k\">(</span><span class=\"s\">'body'</span><span class=\"k\">).</span>appendChild<span class=\"k\">(</span>",
    "                    uiUtils<span class=\"k\">.</span>createElementByHtml<span class=\"k\">(</span><span class=\"s\">'&lt;div id=\"'</span> <span class=\"k\">+</span>",
    "                        <span class=\"k\">this</span><span class=\"k\">.</span>popup<span class=\"k\">.</span>id <span class=\"k\">+</span> <span class=\"s\">'_bordereraser\" class=\"edui-bordereraser edui-background\" style=\"width:'</span> <span class=\"k\">+</span>",
    "                        <span class=\"k\">(</span>uiUtils<span class=\"k\">.</span>getClientRect<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>getDom<span class=\"k\">()).</span>width <span class=\"k\">+</span> <span class=\"s\">20</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">'px\"&gt;&lt;/div&gt;'</span><span class=\"k\">)</span>",
    "                    <span class=\"k\">);</span>",
    "                popup<span class=\"k\">.</span>getDom<span class=\"k\">().</span>className <span class=\"k\">+=</span> <span class=\"s\">' '</span> <span class=\"k\">+</span> <span class=\"k\">this</span><span class=\"k\">.</span>className<span class=\"k\">;</span>",
    "            <span class=\"k\">}</span><span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">));</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>popup <span class=\"k\">=</span> popup<span class=\"k\">;</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        _onPopupShow<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>addState<span class=\"k\">(</span><span class=\"s\">'opened'</span><span class=\"k\">);</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        _onPopupHide<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>removeState<span class=\"k\">(</span><span class=\"s\">'opened'</span><span class=\"k\">);</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        getHtmlTpl<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">return</span> <span class=\"s\">'&lt;div id=\"##\" class=\"edui-box %%\"&gt;'</span> <span class=\"k\">+</span>",
    "                <span class=\"s\">'&lt;div '</span><span class=\"k\">+</span> <span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>title <span class=\"k\">?</span> <span class=\"s\">'title=\"'</span> <span class=\"k\">+</span> <span class=\"k\">this</span><span class=\"k\">.</span>title <span class=\"k\">+</span> <span class=\"s\">'\"'</span> <span class=\"k\">:</span> <span class=\"s\">''</span><span class=\"k\">)</span> <span class=\"k\">+</span><span class=\"s\">' id=\"##_state\" stateful&gt;&lt;div class=\"%%-body\"&gt;'</span> <span class=\"k\">+</span>",
    "                <span class=\"s\">'&lt;div id=\"##_button_body\" class=\"edui-box edui-button-body\" onclick=\"$$._onButtonClick(event, this);\"&gt;'</span> <span class=\"k\">+</span>",
    "                <span class=\"s\">'&lt;div class=\"edui-box edui-icon\"&gt;&lt;/div&gt;'</span> <span class=\"k\">+</span>",
    "                <span class=\"s\">'&lt;/div&gt;'</span> <span class=\"k\">+</span>",
    "                <span class=\"s\">'&lt;div class=\"edui-box edui-splitborder\"&gt;&lt;/div&gt;'</span> <span class=\"k\">+</span>",
    "                <span class=\"s\">'&lt;div class=\"edui-box edui-arrow\" onclick=\"$$._onArrowClick();\"&gt;&lt;/div&gt;'</span> <span class=\"k\">+</span>",
    "                <span class=\"s\">'&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;'</span><span class=\"k\">;</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        showPopup<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"c\">// &#24403;popup&#24448;&#19978;&#24377;&#20986;&#30340;&#26102;&#20505;&#65292;&#20570;&#29305;&#27530;&#22788;&#29702;</span>",
    "            <span class=\"k\">var</span> rect <span class=\"k\">=</span> uiUtils<span class=\"k\">.</span>getClientRect<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>getDom<span class=\"k\">());</span>",
    "            rect<span class=\"k\">.</span>top <span class=\"k\">-=</span> <span class=\"k\">this</span><span class=\"k\">.</span>popup<span class=\"k\">.</span>SHADOW_RADIUS<span class=\"k\">;</span>",
    "            rect<span class=\"k\">.</span>height <span class=\"k\">+=</span> <span class=\"k\">this</span><span class=\"k\">.</span>popup<span class=\"k\">.</span>SHADOW_RADIUS<span class=\"k\">;</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>popup<span class=\"k\">.</span>showAnchorRect<span class=\"k\">(</span>rect<span class=\"k\">);</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        _onArrowClick<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>event<span class=\"k\">,</span> el<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(!</span><span class=\"k\">this</span><span class=\"k\">.</span>isDisabled<span class=\"k\">())</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>showPopup<span class=\"k\">();</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        _onButtonClick<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(!</span><span class=\"k\">this</span><span class=\"k\">.</span>isDisabled<span class=\"k\">())</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>fireEvent<span class=\"k\">(</span><span class=\"s\">'buttonclick'</span><span class=\"k\">);</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span>",
    "    <span class=\"k\">}</span><span class=\"k\">;</span>",
    "    utils<span class=\"k\">.</span>inherits<span class=\"k\">(</span>SplitButton<span class=\"k\">,</span> UIBase<span class=\"k\">);</span>",
    "    utils<span class=\"k\">.</span>extend<span class=\"k\">(</span>SplitButton<span class=\"k\">.</span>prototype<span class=\"k\">,</span> Stateful<span class=\"k\">,</span> <span class=\"k\">true</span><span class=\"k\">);</span>",
    "",
    "<span class=\"k\">}</span><span class=\"k\">)();</span>"
];
_$jscoverage['ui/splitbutton.js'][4]++;
(function () {
    _$jscoverage['ui/splitbutton.js'][5]++;
    var utils = baidu.editor.utils, uiUtils = baidu.editor.ui.uiUtils, domUtils = baidu.editor.dom.domUtils, UIBase = baidu.editor.ui.UIBase, Stateful = baidu.editor.ui.Stateful, SplitButton = (baidu.editor.ui.SplitButton = (function (options) {
        _$jscoverage['ui/splitbutton.js'][11]++;
        this.initOptions(options);
        _$jscoverage['ui/splitbutton.js'][12]++;
        this.initSplitButton();
    }));
    _$jscoverage['ui/splitbutton.js'][14]++;
    SplitButton.prototype = {
        popup: null, uiName: "splitbutton", title: "", initSplitButton: (function () {
            _$jscoverage['ui/splitbutton.js'][19]++;
            this.initUIBase();
            _$jscoverage['ui/splitbutton.js'][20]++;
            this.Stateful_init();
            _$jscoverage['ui/splitbutton.js'][21]++;
            var me = this;
            _$jscoverage['ui/splitbutton.js'][22]++;
            if ((this.popup != null)) {
                _$jscoverage['ui/splitbutton.js'][23]++;
                var popup = this.popup;
                _$jscoverage['ui/splitbutton.js'][24]++;
                this.popup = null;
                _$jscoverage['ui/splitbutton.js'][25]++;
                this.setPopup(popup);
            }
        }), _UIBase_postRender: UIBase.prototype.postRender, postRender: (function () {
            _$jscoverage['ui/splitbutton.js'][30]++;
            this.Stateful_postRender();
            _$jscoverage['ui/splitbutton.js'][31]++;
            this._UIBase_postRender();
        }), setPopup: (function (popup) {
            _$jscoverage['ui/splitbutton.js'][34]++;
            if ((this.popup === popup)) {
                _$jscoverage['ui/splitbutton.js'][34]++;
                return;
            }
            _$jscoverage['ui/splitbutton.js'][35]++;
            if ((this.popup != null)) {
                _$jscoverage['ui/splitbutton.js'][36]++;
                this.popup.dispose();
            }
            _$jscoverage['ui/splitbutton.js'][38]++;
            popup.addListener("show", utils.bind(this._onPopupShow, this));
            _$jscoverage['ui/splitbutton.js'][39]++;
            popup.addListener("hide", utils.bind(this._onPopupHide, this));
            _$jscoverage['ui/splitbutton.js'][40]++;
            popup.addListener("postrender", utils.bind((function () {
                _$jscoverage['ui/splitbutton.js'][41]++;
                popup.getDom("body")
                     .appendChild(uiUtils.createElementByHtml(("<div id=\"" + this.popup.id + "_bordereraser\" class=\"edui-bordereraser edui-background\" style=\"width:" + (uiUtils.getClientRect(this.getDom()).width + 20) + "px\"></div>")));
                _$jscoverage['ui/splitbutton.js'][46]++;
                popup.getDom().className += (" " + this.className);
            }), this));
            _$jscoverage['ui/splitbutton.js'][48]++;
            this.popup = popup;
        }), _onPopupShow: (function () {
            _$jscoverage['ui/splitbutton.js'][51]++;
            this.addState("opened");
        }), _onPopupHide: (function () {
            _$jscoverage['ui/splitbutton.js'][54]++;
            this.removeState("opened");
        }), getHtmlTpl: (function () {
            _$jscoverage['ui/splitbutton.js'][57]++;
            return ("<div id=\"##\" class=\"edui-box %%\">" + "<div " + (this.title ? ("title=\"" + this.title + "\"") : "") + " id=\"##_state\" stateful><div class=\"%%-body\">" + "<div id=\"##_button_body\" class=\"edui-box edui-button-body\" onclick=\"$$._onButtonClick(event, this);\">" + "<div class=\"edui-box edui-icon\"></div>" + "</div>" + "<div class=\"edui-box edui-splitborder\"></div>" + "<div class=\"edui-box edui-arrow\" onclick=\"$$._onArrowClick();\"></div>" + "</div></div></div>");
        }), showPopup: (function () {
            _$jscoverage['ui/splitbutton.js'][68]++;
            var rect = uiUtils.getClientRect(this.getDom());
            _$jscoverage['ui/splitbutton.js'][69]++;
            rect.top -= this.popup.SHADOW_RADIUS;
            _$jscoverage['ui/splitbutton.js'][70]++;
            rect.height += this.popup.SHADOW_RADIUS;
            _$jscoverage['ui/splitbutton.js'][71]++;
            this.popup.showAnchorRect(rect);
        }), _onArrowClick: (function (event, el) {
            _$jscoverage['ui/splitbutton.js'][74]++;
            if ((!this.isDisabled())) {
                _$jscoverage['ui/splitbutton.js'][75]++;
                this.showPopup();
            }
        }), _onButtonClick: (function () {
            _$jscoverage['ui/splitbutton.js'][79]++;
            if ((!this.isDisabled())) {
                _$jscoverage['ui/splitbutton.js'][80]++;
                this.fireEvent("buttonclick");
            }
        })
    };
    _$jscoverage['ui/splitbutton.js'][84]++;
    utils.inherits(SplitButton, UIBase);
    _$jscoverage['ui/splitbutton.js'][85]++;
    utils.extend(SplitButton.prototype, Stateful, true);
})();
