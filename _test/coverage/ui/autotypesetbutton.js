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
if (!_$jscoverage['ui/autotypesetbutton.js']) {
    _$jscoverage['ui/autotypesetbutton.js'] = [];
    _$jscoverage['ui/autotypesetbutton.js'][6] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][7] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][12] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][13] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][15] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][16] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][22] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][24] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][26] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][27] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][28] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][29] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][30] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][31] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][32] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][33] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][35] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][36] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][37] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][38] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][39] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][44] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][49] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][50] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][51] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][52] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][55] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][57] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][59] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][60] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][66] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][67] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][68] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][69] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][70] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][74] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][75] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][76] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][77] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][78] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][81] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][82] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][83] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][84] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][86] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][88] = 0;
    _$jscoverage['ui/autotypesetbutton.js'][91] = 0;
}
_$jscoverage['ui/autotypesetbutton.js'].source = [
    "<span class=\"c\">///import core</span>",
    "<span class=\"c\">///import uicore</span>",
    "<span class=\"c\">///import ui/popup.js</span>",
    "<span class=\"c\">///import ui/autotypesetpicker.js</span>",
    "<span class=\"c\">///import ui/splitbutton.js</span>",
    "<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "    <span class=\"k\">var</span> utils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>utils<span class=\"k\">,</span>",
    "        Popup <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>Popup<span class=\"k\">,</span>",
    "        AutoTypeSetPicker <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>AutoTypeSetPicker<span class=\"k\">,</span>",
    "        SplitButton <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>SplitButton<span class=\"k\">,</span>",
    "        AutoTypeSetButton <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>AutoTypeSetButton <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">(</span>options<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>initOptions<span class=\"k\">(</span>options<span class=\"k\">);</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>initAutoTypeSetButton<span class=\"k\">();</span>",
    "        <span class=\"k\">}</span><span class=\"k\">;</span>",
    "    <span class=\"k\">function</span> getPara<span class=\"k\">(</span>me<span class=\"k\">)</span><span class=\"k\">{</span>",
    "        <span class=\"k\">var</span> opt <span class=\"k\">=</span> me<span class=\"k\">.</span>editor<span class=\"k\">.</span>options<span class=\"k\">.</span>autotypeset<span class=\"k\">,</span>",
    "            cont <span class=\"k\">=</span> me<span class=\"k\">.</span>getDom<span class=\"k\">(),</span>",
    "            editorId <span class=\"k\">=</span> me<span class=\"k\">.</span>editor<span class=\"k\">.</span>uid<span class=\"k\">,</span>",
    "            inputType <span class=\"k\">=</span> <span class=\"k\">null</span><span class=\"k\">,</span>",
    "            attrName <span class=\"k\">=</span> <span class=\"k\">null</span><span class=\"k\">,</span>",
    "            ipts <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>getElementsByTagName<span class=\"k\">(</span>cont<span class=\"k\">,</span><span class=\"s\">\"input\"</span><span class=\"k\">);</span>",
    "        <span class=\"k\">for</span><span class=\"k\">(</span><span class=\"k\">var</span> i<span class=\"k\">=</span>ipts<span class=\"k\">.</span>length<span class=\"k\">-</span><span class=\"s\">1</span><span class=\"k\">,</span>ipt<span class=\"k\">;</span>ipt<span class=\"k\">=</span>ipts<span class=\"k\">[</span>i<span class=\"k\">--];)</span><span class=\"k\">{</span>",
    "",
    "            inputType <span class=\"k\">=</span> ipt<span class=\"k\">.</span>getAttribute<span class=\"k\">(</span><span class=\"s\">\"type\"</span><span class=\"k\">);</span>",
    "",
    "            <span class=\"k\">if</span><span class=\"k\">(</span>inputType<span class=\"k\">==</span><span class=\"s\">\"checkbox\"</span><span class=\"k\">)</span><span class=\"k\">{</span>",
    "                attrName <span class=\"k\">=</span> ipt<span class=\"k\">.</span>getAttribute<span class=\"k\">(</span><span class=\"s\">\"name\"</span><span class=\"k\">);</span>",
    "                opt<span class=\"k\">[</span>attrName<span class=\"k\">]</span> <span class=\"k\">&amp;&amp;</span> <span class=\"k\">delete</span> opt<span class=\"k\">[</span>attrName<span class=\"k\">];</span>",
    "                <span class=\"k\">if</span><span class=\"k\">(</span>ipt<span class=\"k\">.</span>checked<span class=\"k\">)</span><span class=\"k\">{</span>",
    "                    <span class=\"k\">var</span> attrValue <span class=\"k\">=</span> document<span class=\"k\">.</span>getElementById<span class=\"k\">(</span> attrName<span class=\"k\">+</span><span class=\"s\">\"Value\"</span> <span class=\"k\">+</span> editorId <span class=\"k\">);</span>",
    "                    <span class=\"k\">if</span><span class=\"k\">(</span>attrValue<span class=\"k\">)</span><span class=\"k\">{</span>",
    "                        <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"s\">/input/ig</span><span class=\"k\">.</span>test<span class=\"k\">(</span>attrValue<span class=\"k\">.</span>tagName<span class=\"k\">))</span><span class=\"k\">{</span>",
    "                            opt<span class=\"k\">[</span>attrName<span class=\"k\">]</span> <span class=\"k\">=</span> attrValue<span class=\"k\">.</span>value<span class=\"k\">;</span>",
    "                        <span class=\"k\">}</span><span class=\"k\">else</span><span class=\"k\">{</span>",
    "                            <span class=\"k\">var</span> iptChilds <span class=\"k\">=</span> attrValue<span class=\"k\">.</span>getElementsByTagName<span class=\"k\">(</span><span class=\"s\">\"input\"</span><span class=\"k\">);</span>",
    "                            <span class=\"k\">for</span><span class=\"k\">(</span><span class=\"k\">var</span> j<span class=\"k\">=</span>iptChilds<span class=\"k\">.</span>length<span class=\"k\">-</span><span class=\"s\">1</span><span class=\"k\">,</span>iptchild<span class=\"k\">;</span>iptchild<span class=\"k\">=</span>iptChilds<span class=\"k\">[</span>j<span class=\"k\">--];)</span><span class=\"k\">{</span>",
    "                                <span class=\"k\">if</span><span class=\"k\">(</span>iptchild<span class=\"k\">.</span>checked<span class=\"k\">)</span><span class=\"k\">{</span>",
    "                                    opt<span class=\"k\">[</span>attrName<span class=\"k\">]</span> <span class=\"k\">=</span> iptchild<span class=\"k\">.</span>value<span class=\"k\">;</span>",
    "                                    <span class=\"k\">break</span><span class=\"k\">;</span>",
    "                                <span class=\"k\">}</span>",
    "                            <span class=\"k\">}</span>",
    "                        <span class=\"k\">}</span>",
    "                    <span class=\"k\">}</span><span class=\"k\">else</span><span class=\"k\">{</span>",
    "                        opt<span class=\"k\">[</span>attrName<span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">true</span><span class=\"k\">;</span>",
    "                    <span class=\"k\">}</span>",
    "                <span class=\"k\">}</span>",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span>",
    "        <span class=\"k\">var</span> selects <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>getElementsByTagName<span class=\"k\">(</span>cont<span class=\"k\">,</span><span class=\"s\">\"select\"</span><span class=\"k\">);</span>",
    "        <span class=\"k\">for</span><span class=\"k\">(</span><span class=\"k\">var</span> i<span class=\"k\">=</span><span class=\"s\">0</span><span class=\"k\">,</span>si<span class=\"k\">;</span>si<span class=\"k\">=</span>selects<span class=\"k\">[</span>i<span class=\"k\">++];)</span><span class=\"k\">{</span>",
    "            <span class=\"k\">var</span> attr <span class=\"k\">=</span> si<span class=\"k\">.</span>getAttribute<span class=\"k\">(</span><span class=\"s\">'name'</span><span class=\"k\">);</span>",
    "            opt<span class=\"k\">[</span>attr<span class=\"k\">]</span> <span class=\"k\">=</span> opt<span class=\"k\">[</span>attr<span class=\"k\">]</span> <span class=\"k\">?</span> si<span class=\"k\">.</span>value <span class=\"k\">:</span> <span class=\"s\">''</span><span class=\"k\">;</span>",
    "        <span class=\"k\">}</span>",
    "",
    "        me<span class=\"k\">.</span>editor<span class=\"k\">.</span>options<span class=\"k\">.</span>autotypeset <span class=\"k\">=</span> opt<span class=\"k\">;</span>",
    "    <span class=\"k\">}</span>",
    "    AutoTypeSetButton<span class=\"k\">.</span>prototype <span class=\"k\">=</span> <span class=\"k\">{</span>",
    "        initAutoTypeSetButton<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>popup <span class=\"k\">=</span> <span class=\"k\">new</span> Popup<span class=\"k\">(</span><span class=\"k\">{</span>",
    "                <span class=\"c\">//&#20256;&#20837;&#37197;&#32622;&#21442;&#25968;</span>",
    "                content<span class=\"k\">:</span> <span class=\"k\">new</span> AutoTypeSetPicker<span class=\"k\">(</span><span class=\"k\">{</span>editor<span class=\"k\">:</span>me<span class=\"k\">.</span>editor<span class=\"k\">}</span><span class=\"k\">),</span>",
    "                <span class=\"s\">'editor'</span><span class=\"k\">:</span>me<span class=\"k\">.</span>editor<span class=\"k\">,</span>",
    "                hide <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>",
    "",
    "                    <span class=\"k\">if</span> <span class=\"k\">(!</span><span class=\"k\">this</span><span class=\"k\">.</span>_hidden <span class=\"k\">&amp;&amp;</span> <span class=\"k\">this</span><span class=\"k\">.</span>getDom<span class=\"k\">())</span> <span class=\"k\">{</span>",
    "                        getPara<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">);</span>",
    "                        <span class=\"k\">this</span><span class=\"k\">.</span>getDom<span class=\"k\">().</span>style<span class=\"k\">.</span>display <span class=\"k\">=</span> <span class=\"s\">'none'</span><span class=\"k\">;</span>",
    "                        <span class=\"k\">this</span><span class=\"k\">.</span>_hidden <span class=\"k\">=</span> <span class=\"k\">true</span><span class=\"k\">;</span>",
    "                        <span class=\"k\">this</span><span class=\"k\">.</span>fireEvent<span class=\"k\">(</span><span class=\"s\">'hide'</span><span class=\"k\">);</span>",
    "                    <span class=\"k\">}</span>",
    "                <span class=\"k\">}</span>",
    "            <span class=\"k\">}</span><span class=\"k\">);</span>",
    "            <span class=\"k\">var</span> flag <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>popup<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'postRenderAfter'</span><span class=\"k\">,</span><span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>",
    "                <span class=\"k\">var</span> popupUI <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>",
    "                <span class=\"k\">if</span><span class=\"k\">(</span>flag<span class=\"k\">)</span><span class=\"k\">return</span><span class=\"k\">;</span>",
    "                <span class=\"k\">var</span> cont <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getDom<span class=\"k\">(),</span>",
    "                    btn <span class=\"k\">=</span> cont<span class=\"k\">.</span>getElementsByTagName<span class=\"k\">(</span><span class=\"s\">'button'</span><span class=\"k\">)[</span><span class=\"s\">0</span><span class=\"k\">];</span>",
    "",
    "                btn<span class=\"k\">.</span>onclick <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>",
    "                    getPara<span class=\"k\">(</span>popupUI<span class=\"k\">);</span>",
    "                    me<span class=\"k\">.</span>editor<span class=\"k\">.</span>execCommand<span class=\"k\">(</span><span class=\"s\">'autotypeset'</span><span class=\"k\">);</span>",
    "                    popupUI<span class=\"k\">.</span>hide<span class=\"k\">()</span>",
    "                <span class=\"k\">}</span><span class=\"k\">;</span>",
    "                flag <span class=\"k\">=</span> <span class=\"s\">1</span><span class=\"k\">;</span>",
    "            <span class=\"k\">}</span><span class=\"k\">);</span>",
    "            <span class=\"k\">this</span><span class=\"k\">.</span>initSplitButton<span class=\"k\">();</span>",
    "        <span class=\"k\">}</span>",
    "    <span class=\"k\">}</span><span class=\"k\">;</span>",
    "    utils<span class=\"k\">.</span>inherits<span class=\"k\">(</span>AutoTypeSetButton<span class=\"k\">,</span> SplitButton<span class=\"k\">);</span>",
    "",
    "<span class=\"k\">}</span><span class=\"k\">)();</span>"
];
_$jscoverage['ui/autotypesetbutton.js'][6]++;
(function () {
    _$jscoverage['ui/autotypesetbutton.js'][7]++;
    var utils = baidu.editor.utils, Popup = baidu.editor.ui.Popup, AutoTypeSetPicker = baidu.editor.ui.AutoTypeSetPicker, SplitButton = baidu.editor.ui.SplitButton, AutoTypeSetButton = (baidu.editor.ui.AutoTypeSetButton = (function (options) {
        _$jscoverage['ui/autotypesetbutton.js'][12]++;
        this.initOptions(options);
        _$jscoverage['ui/autotypesetbutton.js'][13]++;
        this.initAutoTypeSetButton();
    }));
    _$jscoverage['ui/autotypesetbutton.js'][15]++;

    function getPara(me) {
        _$jscoverage['ui/autotypesetbutton.js'][16]++;
        var opt = me.editor.options.autotypeset, cont = me.getDom(), editorId = me.editor.uid, inputType = null, attrName = null, ipts = domUtils.getElementsByTagName(cont, "input");
        _$jscoverage['ui/autotypesetbutton.js'][22]++;
        for (var i = (ipts.length - 1), ipt; (ipt = ipts[(i--)]);) {
            _$jscoverage['ui/autotypesetbutton.js'][24]++;
            inputType = ipt.getAttribute("type");
            _$jscoverage['ui/autotypesetbutton.js'][26]++;
            if ((inputType == "checkbox")) {
                _$jscoverage['ui/autotypesetbutton.js'][27]++;
                attrName = ipt.getAttribute("name");
                _$jscoverage['ui/autotypesetbutton.js'][28]++;
                (opt[attrName] && (delete opt[attrName]));
                _$jscoverage['ui/autotypesetbutton.js'][29]++;
                if (ipt.checked) {
                    _$jscoverage['ui/autotypesetbutton.js'][30]++;
                    var attrValue = document.getElementById((attrName + "Value" + editorId));
                    _$jscoverage['ui/autotypesetbutton.js'][31]++;
                    if (attrValue) {
                        _$jscoverage['ui/autotypesetbutton.js'][32]++;
                        if (/input/gi.test(attrValue.tagName)) {
                            _$jscoverage['ui/autotypesetbutton.js'][33]++;
                            opt[attrName] = attrValue.value;
                        } else {
                            _$jscoverage['ui/autotypesetbutton.js'][35]++;
                            var iptChilds = attrValue.getElementsByTagName("input");
                            _$jscoverage['ui/autotypesetbutton.js'][36]++;
                            for (var j = (iptChilds.length - 1), iptchild; (iptchild = iptChilds[(j--)]);) {
                                _$jscoverage['ui/autotypesetbutton.js'][37]++;
                                if (iptchild.checked) {
                                    _$jscoverage['ui/autotypesetbutton.js'][38]++;
                                    opt[attrName] = iptchild.value;
                                    _$jscoverage['ui/autotypesetbutton.js'][39]++;
                                    break;
                                }
                            }
                        }
                    } else {
                        _$jscoverage['ui/autotypesetbutton.js'][44]++;
                        opt[attrName] = true;
                    }
                }
            }
        }
        _$jscoverage['ui/autotypesetbutton.js'][49]++;
        var selects = domUtils.getElementsByTagName(cont, "select");
        _$jscoverage['ui/autotypesetbutton.js'][50]++;
        for (var i = 0, si; (si = selects[(i++)]);) {
            _$jscoverage['ui/autotypesetbutton.js'][51]++;
            var attr = si.getAttribute("name");
            _$jscoverage['ui/autotypesetbutton.js'][52]++;
            opt[attr] = (opt[attr] ? si.value : "");
        }
        _$jscoverage['ui/autotypesetbutton.js'][55]++;
        me.editor.options.autotypeset = opt;
    }

    _$jscoverage['ui/autotypesetbutton.js'][57]++;
    AutoTypeSetButton.prototype = {
        initAutoTypeSetButton: (function () {
            _$jscoverage['ui/autotypesetbutton.js'][59]++;
            var me = this;
            _$jscoverage['ui/autotypesetbutton.js'][60]++;
            this.popup = new Popup({
                content: new AutoTypeSetPicker({editor: me.editor}), "editor": me.editor, hide: (function () {
                    _$jscoverage['ui/autotypesetbutton.js'][66]++;
                    if (((!this._hidden) && this.getDom())) {
                        _$jscoverage['ui/autotypesetbutton.js'][67]++;
                        getPara(this);
                        _$jscoverage['ui/autotypesetbutton.js'][68]++;
                        this.getDom().style.display = "none";
                        _$jscoverage['ui/autotypesetbutton.js'][69]++;
                        this._hidden = true;
                        _$jscoverage['ui/autotypesetbutton.js'][70]++;
                        this.fireEvent("hide");
                    }
                })
            });
            _$jscoverage['ui/autotypesetbutton.js'][74]++;
            var flag = 0;
            _$jscoverage['ui/autotypesetbutton.js'][75]++;
            this.popup.addListener("postRenderAfter", (function () {
                _$jscoverage['ui/autotypesetbutton.js'][76]++;
                var popupUI = this;
                _$jscoverage['ui/autotypesetbutton.js'][77]++;
                if (flag) {
                    _$jscoverage['ui/autotypesetbutton.js'][77]++;
                    return;
                }
                _$jscoverage['ui/autotypesetbutton.js'][78]++;
                var cont = this.getDom(), btn = cont.getElementsByTagName("button")[0];
                _$jscoverage['ui/autotypesetbutton.js'][81]++;
                btn.onclick = (function () {
                    _$jscoverage['ui/autotypesetbutton.js'][82]++;
                    getPara(popupUI);
                    _$jscoverage['ui/autotypesetbutton.js'][83]++;
                    me.editor.execCommand("autotypeset");
                    _$jscoverage['ui/autotypesetbutton.js'][84]++;
                    popupUI.hide();
                });
                _$jscoverage['ui/autotypesetbutton.js'][86]++;
                flag = 1;
            }));
            _$jscoverage['ui/autotypesetbutton.js'][88]++;
            this.initSplitButton();
        })
    };
    _$jscoverage['ui/autotypesetbutton.js'][91]++;
    utils.inherits(AutoTypeSetButton, SplitButton);
})();
