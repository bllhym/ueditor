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
if (!_$jscoverage['plugins/iframe.js']) {
    _$jscoverage['plugins/iframe.js'] = [];
    _$jscoverage['plugins/iframe.js'][8] = 0;
    _$jscoverage['plugins/iframe.js'][9] = 0;
    _$jscoverage['plugins/iframe.js'][10] = 0;
    _$jscoverage['plugins/iframe.js'][11] = 0;
    _$jscoverage['plugins/iframe.js'][14] = 0;
    _$jscoverage['plugins/iframe.js'][15] = 0;
}
_$jscoverage['plugins/iframe.js'].source = [
    "<span class=\"c\">///import core</span>",
    "<span class=\"c\">///import plugins\\inserthtml.js</span>",
    "<span class=\"c\">///commands &#25554;&#20837;&#26694;&#26550;</span>",
    "<span class=\"c\">///commandsName  InsertFrame</span>",
    "<span class=\"c\">///commandsTitle  &#25554;&#20837;Iframe</span>",
    "<span class=\"c\">///commandsDialog  dialogs\\insertframe</span>",
    "",
    "UE<span class=\"k\">.</span>plugins<span class=\"k\">[</span><span class=\"s\">'insertframe'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>",
    "   <span class=\"k\">var</span> me <span class=\"k\">=</span><span class=\"k\">this</span><span class=\"k\">;</span>",
    "    <span class=\"k\">function</span> deleteIframe<span class=\"k\">()</span><span class=\"k\">{</span>",
    "        me<span class=\"k\">.</span>_iframe <span class=\"k\">&amp;&amp;</span> <span class=\"k\">delete</span> me<span class=\"k\">.</span>_iframe<span class=\"k\">;</span>",
    "    <span class=\"k\">}</span>",
    "",
    "    me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">\"selectionchange\"</span><span class=\"k\">,</span><span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>",
    "        deleteIframe<span class=\"k\">();</span>",
    "    <span class=\"k\">}</span><span class=\"k\">);</span>",
    "",
    "<span class=\"k\">}</span><span class=\"k\">;</span>",
    ""
];
_$jscoverage['plugins/iframe.js'][8]++;
UE.plugins.insertframe = (function () {
    _$jscoverage['plugins/iframe.js'][9]++;
    var me = this;
    _$jscoverage['plugins/iframe.js'][10]++;

    function deleteIframe() {
        _$jscoverage['plugins/iframe.js'][11]++;
        (me._iframe && (delete me._iframe));
    }

    _$jscoverage['plugins/iframe.js'][14]++;
    me.addListener("selectionchange", (function () {
        _$jscoverage['plugins/iframe.js'][15]++;
        deleteIframe();
    }));
});
