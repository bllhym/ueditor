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
if (!_$jscoverage['ui/stateful.js']) {
    _$jscoverage['ui/stateful.js'] = [];
    _$jscoverage['ui/stateful.js'][1] = 0;
    _$jscoverage['ui/stateful.js'][2] = 0;
    _$jscoverage['ui/stateful.js'][6] = 0;
    _$jscoverage['ui/stateful.js'][15] = 0;
    _$jscoverage['ui/stateful.js'][19] = 0;
    _$jscoverage['ui/stateful.js'][20] = 0;
    _$jscoverage['ui/stateful.js'][23] = 0;
    _$jscoverage['ui/stateful.js'][25] = 0;
    _$jscoverage['ui/stateful.js'][28] = 0;
    _$jscoverage['ui/stateful.js'][29] = 0;
    _$jscoverage['ui/stateful.js'][30] = 0;
    _$jscoverage['ui/stateful.js'][31] = 0;
    _$jscoverage['ui/stateful.js'][35] = 0;
    _$jscoverage['ui/stateful.js'][36] = 0;
    _$jscoverage['ui/stateful.js'][37] = 0;
    _$jscoverage['ui/stateful.js'][38] = 0;
    _$jscoverage['ui/stateful.js'][42] = 0;
    _$jscoverage['ui/stateful.js'][43] = 0;
    _$jscoverage['ui/stateful.js'][44] = 0;
    _$jscoverage['ui/stateful.js'][48] = 0;
    _$jscoverage['ui/stateful.js'][49] = 0;
    _$jscoverage['ui/stateful.js'][50] = 0;
    _$jscoverage['ui/stateful.js'][54] = 0;
    _$jscoverage['ui/stateful.js'][55] = 0;
    _$jscoverage['ui/stateful.js'][59] = 0;
    _$jscoverage['ui/stateful.js'][60] = 0;
    _$jscoverage['ui/stateful.js'][64] = 0;
    _$jscoverage['ui/stateful.js'][65] = 0;
    _$jscoverage['ui/stateful.js'][69] = 0;
    _$jscoverage['ui/stateful.js'][72] = 0;
    _$jscoverage['ui/stateful.js'][73] = 0;
    _$jscoverage['ui/stateful.js'][77] = 0;
    _$jscoverage['ui/stateful.js'][78] = 0;
    _$jscoverage['ui/stateful.js'][82] = 0;
    _$jscoverage['ui/stateful.js'][85] = 0;
    _$jscoverage['ui/stateful.js'][88] = 0;
    _$jscoverage['ui/stateful.js'][89] = 0;
    _$jscoverage['ui/stateful.js'][91] = 0;
    _$jscoverage['ui/stateful.js'][95] = 0;
    _$jscoverage['ui/stateful.js'][98] = 0;
    _$jscoverage['ui/stateful.js'][99] = 0;
    _$jscoverage['ui/stateful.js'][100] = 0;
    _$jscoverage['ui/stateful.js'][101] = 0;
    _$jscoverage['ui/stateful.js'][102] = 0;
    _$jscoverage['ui/stateful.js'][104] = 0;
}
_$jscoverage['ui/stateful.js'].source = [
    "<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "    <span class=\"k\">var</span> browser <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>browser<span class=\"k\">,</span>",
    "        domUtils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>dom<span class=\"k\">.</span>domUtils<span class=\"k\">,</span>",
    "        uiUtils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>uiUtils<span class=\"k\">;</span>",
    "    ",
    "    <span class=\"k\">var</span> TPL_STATEFUL <span class=\"k\">=</span> <span class=\"s\">'onmousedown=\"$$.Stateful_onMouseDown(event, this);\"'</span> <span class=\"k\">+</span>",
    "        <span class=\"s\">' onmouseup=\"$$.Stateful_onMouseUp(event, this);\"'</span> <span class=\"k\">+</span>",
    "        <span class=\"k\">(</span> browser<span class=\"k\">.</span>ie <span class=\"k\">?</span> <span class=\"k\">(</span>",
    "        <span class=\"s\">' onmouseenter=\"$$.Stateful_onMouseEnter(event, this);\"'</span> <span class=\"k\">+</span>",
    "        <span class=\"s\">' onmouseleave=\"$$.Stateful_onMouseLeave(event, this);\"'</span> <span class=\"k\">)</span>",
    "        <span class=\"k\">:</span> <span class=\"k\">(</span>",
    "        <span class=\"s\">' onmouseover=\"$$.Stateful_onMouseOver(event, this);\"'</span> <span class=\"k\">+</span>",
    "        <span class=\"s\">' onmouseout=\"$$.Stateful_onMouseOut(event, this);\"'</span> <span class=\"k\">));</span>",
    "    ",
    "    baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>Stateful <span class=\"k\">=</span> <span class=\"k\">{</span>",
    "        alwalysHoverable<span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span>",
    "        target<span class=\"k\">:</span><span class=\"k\">null</span><span class=\"k\">,</span><span class=\"c\">//&#30446;&#26631;&#20803;&#32032;&#21644;this&#25351;&#21521;dom&#19981;&#19968;&#26679;</span>",
    "        Stateful_init<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>_Stateful_dGetHtmlTpl <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getHtmlTpl<span class=\"k\">;</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>getHtmlTpl <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>Stateful_getHtmlTpl<span class=\"k\">;</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        Stateful_getHtmlTpl<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">var</span> tpl <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>_Stateful_dGetHtmlTpl<span class=\"k\">();</span>",
    "            <span class=\"c\">// &#20351;&#29992;function&#36991;&#20813;$&#36716;&#20041;</span>",
    "            <span class=\"k\">return</span> tpl<span class=\"k\">.</span>replace<span class=\"k\">(</span><span class=\"s\">/stateful/g</span><span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span> <span class=\"k\">return</span> TPL_STATEFUL<span class=\"k\">;</span> <span class=\"k\">}</span><span class=\"k\">);</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        Stateful_onMouseEnter<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>evt<span class=\"k\">,</span> el<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>target<span class=\"k\">=</span>el<span class=\"k\">;</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(!</span><span class=\"k\">this</span><span class=\"k\">.</span>isDisabled<span class=\"k\">()</span> <span class=\"k\">||</span> <span class=\"k\">this</span><span class=\"k\">.</span>alwalysHoverable<span class=\"k\">)</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>addState<span class=\"k\">(</span><span class=\"s\">'hover'</span><span class=\"k\">);</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>fireEvent<span class=\"k\">(</span><span class=\"s\">'over'</span><span class=\"k\">);</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        Stateful_onMouseLeave<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>evt<span class=\"k\">,</span> el<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(!</span><span class=\"k\">this</span><span class=\"k\">.</span>isDisabled<span class=\"k\">()</span> <span class=\"k\">||</span> <span class=\"k\">this</span><span class=\"k\">.</span>alwalysHoverable<span class=\"k\">)</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>removeState<span class=\"k\">(</span><span class=\"s\">'hover'</span><span class=\"k\">);</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>removeState<span class=\"k\">(</span><span class=\"s\">'active'</span><span class=\"k\">);</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>fireEvent<span class=\"k\">(</span><span class=\"s\">'out'</span><span class=\"k\">);</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        Stateful_onMouseOver<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>evt<span class=\"k\">,</span> el<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">var</span> rel <span class=\"k\">=</span> evt<span class=\"k\">.</span>relatedTarget<span class=\"k\">;</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(!</span>uiUtils<span class=\"k\">.</span>contains<span class=\"k\">(</span>el<span class=\"k\">,</span> rel<span class=\"k\">)</span> <span class=\"k\">&amp;&amp;</span> el <span class=\"k\">!==</span> rel<span class=\"k\">)</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>Stateful_onMouseEnter<span class=\"k\">(</span>evt<span class=\"k\">,</span> el<span class=\"k\">);</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        Stateful_onMouseOut<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>evt<span class=\"k\">,</span> el<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">var</span> rel <span class=\"k\">=</span> evt<span class=\"k\">.</span>relatedTarget<span class=\"k\">;</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(!</span>uiUtils<span class=\"k\">.</span>contains<span class=\"k\">(</span>el<span class=\"k\">,</span> rel<span class=\"k\">)</span> <span class=\"k\">&amp;&amp;</span> el <span class=\"k\">!==</span> rel<span class=\"k\">)</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>Stateful_onMouseLeave<span class=\"k\">(</span>evt<span class=\"k\">,</span> el<span class=\"k\">);</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        Stateful_onMouseDown<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>evt<span class=\"k\">,</span> el<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(!</span><span class=\"k\">this</span><span class=\"k\">.</span>isDisabled<span class=\"k\">())</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>addState<span class=\"k\">(</span><span class=\"s\">'active'</span><span class=\"k\">);</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        Stateful_onMouseUp<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>evt<span class=\"k\">,</span> el<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(!</span><span class=\"k\">this</span><span class=\"k\">.</span>isDisabled<span class=\"k\">())</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>removeState<span class=\"k\">(</span><span class=\"s\">'active'</span><span class=\"k\">);</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        Stateful_postRender<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>disabled <span class=\"k\">&amp;&amp;</span> <span class=\"k\">!</span><span class=\"k\">this</span><span class=\"k\">.</span>hasState<span class=\"k\">(</span><span class=\"s\">'disabled'</span><span class=\"k\">))</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>addState<span class=\"k\">(</span><span class=\"s\">'disabled'</span><span class=\"k\">);</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        hasState<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>state<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">return</span> domUtils<span class=\"k\">.</span>hasClass<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>getStateDom<span class=\"k\">(),</span> <span class=\"s\">'edui-state-'</span> <span class=\"k\">+</span> state<span class=\"k\">);</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        addState<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>state<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(!</span><span class=\"k\">this</span><span class=\"k\">.</span>hasState<span class=\"k\">(</span>state<span class=\"k\">))</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>getStateDom<span class=\"k\">().</span>className <span class=\"k\">+=</span> <span class=\"s\">' edui-state-'</span> <span class=\"k\">+</span> state<span class=\"k\">;</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        removeState<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>state<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>hasState<span class=\"k\">(</span>state<span class=\"k\">))</span> <span class=\"k\">{</span>",
    "                domUtils<span class=\"k\">.</span>removeClasses<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>getStateDom<span class=\"k\">(),</span> <span class=\"k\">[</span><span class=\"s\">'edui-state-'</span> <span class=\"k\">+</span> state<span class=\"k\">]);</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        getStateDom<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>getDom<span class=\"k\">(</span><span class=\"s\">'state'</span><span class=\"k\">);</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        isChecked<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>hasState<span class=\"k\">(</span><span class=\"s\">'checked'</span><span class=\"k\">);</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        setChecked<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>checked<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(!</span><span class=\"k\">this</span><span class=\"k\">.</span>isDisabled<span class=\"k\">()</span> <span class=\"k\">&amp;&amp;</span> checked<span class=\"k\">)</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>addState<span class=\"k\">(</span><span class=\"s\">'checked'</span><span class=\"k\">);</span>",
    "            <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>removeState<span class=\"k\">(</span><span class=\"s\">'checked'</span><span class=\"k\">);</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        isDisabled<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>hasState<span class=\"k\">(</span><span class=\"s\">'disabled'</span><span class=\"k\">);</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        setDisabled<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>disabled<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(</span>disabled<span class=\"k\">)</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>removeState<span class=\"k\">(</span><span class=\"s\">'hover'</span><span class=\"k\">);</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>removeState<span class=\"k\">(</span><span class=\"s\">'checked'</span><span class=\"k\">);</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>removeState<span class=\"k\">(</span><span class=\"s\">'active'</span><span class=\"k\">);</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>addState<span class=\"k\">(</span><span class=\"s\">'disabled'</span><span class=\"k\">);</span>",
    "            <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>",
    "                <span class=\"k\">this</span><span class=\"k\">.</span>removeState<span class=\"k\">(</span><span class=\"s\">'disabled'</span><span class=\"k\">);</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span>",
    "    <span class=\"k\">}</span><span class=\"k\">;</span>",
    "<span class=\"k\">}</span><span class=\"k\">)();</span>"
];
_$jscoverage['ui/stateful.js'][1]++;
(function () {
    _$jscoverage['ui/stateful.js'][2]++;
    var browser = baidu.editor.browser, domUtils = baidu.editor.dom.domUtils, uiUtils = baidu.editor.ui.uiUtils;
    _$jscoverage['ui/stateful.js'][6]++;
    var TPL_STATEFUL = ("onmousedown=\"$$.Stateful_onMouseDown(event, this);\"" + " onmouseup=\"$$.Stateful_onMouseUp(event, this);\"" + (browser.ie ? " onmouseenter=\"$$.Stateful_onMouseEnter(event, this);\" onmouseleave=\"$$.Stateful_onMouseLeave(event, this);\"" : " onmouseover=\"$$.Stateful_onMouseOver(event, this);\" onmouseout=\"$$.Stateful_onMouseOut(event, this);\""));
    _$jscoverage['ui/stateful.js'][15]++;
    baidu.editor.ui.Stateful = {
        alwalysHoverable: false, target: null, Stateful_init: (function () {
            _$jscoverage['ui/stateful.js'][19]++;
            this._Stateful_dGetHtmlTpl = this.getHtmlTpl;
            _$jscoverage['ui/stateful.js'][20]++;
            this.getHtmlTpl = this.Stateful_getHtmlTpl;
        }), Stateful_getHtmlTpl: (function () {
            _$jscoverage['ui/stateful.js'][23]++;
            var tpl = this._Stateful_dGetHtmlTpl();
            _$jscoverage['ui/stateful.js'][25]++;
            return tpl.replace(/stateful/g, (function () {
                _$jscoverage['ui/stateful.js'][25]++;
                return TPL_STATEFUL;
            }));
        }), Stateful_onMouseEnter: (function (evt, el) {
            _$jscoverage['ui/stateful.js'][28]++;
            this.target = el;
            _$jscoverage['ui/stateful.js'][29]++;
            if (((!this.isDisabled()) || this.alwalysHoverable)) {
                _$jscoverage['ui/stateful.js'][30]++;
                this.addState("hover");
                _$jscoverage['ui/stateful.js'][31]++;
                this.fireEvent("over");
            }
        }), Stateful_onMouseLeave: (function (evt, el) {
            _$jscoverage['ui/stateful.js'][35]++;
            if (((!this.isDisabled()) || this.alwalysHoverable)) {
                _$jscoverage['ui/stateful.js'][36]++;
                this.removeState("hover");
                _$jscoverage['ui/stateful.js'][37]++;
                this.removeState("active");
                _$jscoverage['ui/stateful.js'][38]++;
                this.fireEvent("out");
            }
        }), Stateful_onMouseOver: (function (evt, el) {
            _$jscoverage['ui/stateful.js'][42]++;
            var rel = evt.relatedTarget;
            _$jscoverage['ui/stateful.js'][43]++;
            if (((!uiUtils.contains(el, rel)) && (el !== rel))) {
                _$jscoverage['ui/stateful.js'][44]++;
                this.Stateful_onMouseEnter(evt, el);
            }
        }), Stateful_onMouseOut: (function (evt, el) {
            _$jscoverage['ui/stateful.js'][48]++;
            var rel = evt.relatedTarget;
            _$jscoverage['ui/stateful.js'][49]++;
            if (((!uiUtils.contains(el, rel)) && (el !== rel))) {
                _$jscoverage['ui/stateful.js'][50]++;
                this.Stateful_onMouseLeave(evt, el);
            }
        }), Stateful_onMouseDown: (function (evt, el) {
            _$jscoverage['ui/stateful.js'][54]++;
            if ((!this.isDisabled())) {
                _$jscoverage['ui/stateful.js'][55]++;
                this.addState("active");
            }
        }), Stateful_onMouseUp: (function (evt, el) {
            _$jscoverage['ui/stateful.js'][59]++;
            if ((!this.isDisabled())) {
                _$jscoverage['ui/stateful.js'][60]++;
                this.removeState("active");
            }
        }), Stateful_postRender: (function () {
            _$jscoverage['ui/stateful.js'][64]++;
            if ((this.disabled && (!this.hasState("disabled")))) {
                _$jscoverage['ui/stateful.js'][65]++;
                this.addState("disabled");
            }
        }), hasState: (function (state) {
            _$jscoverage['ui/stateful.js'][69]++;
            return domUtils.hasClass(this.getStateDom(), ("edui-state-" + state));
        }), addState: (function (state) {
            _$jscoverage['ui/stateful.js'][72]++;
            if ((!this.hasState(state))) {
                _$jscoverage['ui/stateful.js'][73]++;
                this.getStateDom().className += (" edui-state-" + state);
            }
        }), removeState: (function (state) {
            _$jscoverage['ui/stateful.js'][77]++;
            if (this.hasState(state)) {
                _$jscoverage['ui/stateful.js'][78]++;
                domUtils.removeClasses(this.getStateDom(), [("edui-state-" + state)]);
            }
        }), getStateDom: (function () {
            _$jscoverage['ui/stateful.js'][82]++;
            return this.getDom("state");
        }), isChecked: (function () {
            _$jscoverage['ui/stateful.js'][85]++;
            return this.hasState("checked");
        }), setChecked: (function (checked) {
            _$jscoverage['ui/stateful.js'][88]++;
            if (((!this.isDisabled()) && checked)) {
                _$jscoverage['ui/stateful.js'][89]++;
                this.addState("checked");
            } else {
                _$jscoverage['ui/stateful.js'][91]++;
                this.removeState("checked");
            }
        }), isDisabled: (function () {
            _$jscoverage['ui/stateful.js'][95]++;
            return this.hasState("disabled");
        }), setDisabled: (function (disabled) {
            _$jscoverage['ui/stateful.js'][98]++;
            if (disabled) {
                _$jscoverage['ui/stateful.js'][99]++;
                this.removeState("hover");
                _$jscoverage['ui/stateful.js'][100]++;
                this.removeState("checked");
                _$jscoverage['ui/stateful.js'][101]++;
                this.removeState("active");
                _$jscoverage['ui/stateful.js'][102]++;
                this.addState("disabled");
            } else {
                _$jscoverage['ui/stateful.js'][104]++;
                this.removeState("disabled");
            }
        })
    };
})();
