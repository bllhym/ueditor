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
if (!_$jscoverage['plugins/link.js']) {
    _$jscoverage['plugins/link.js'] = [];
    _$jscoverage['plugins/link.js'][66] = 0;
    _$jscoverage['plugins/link.js'][67] = 0;
    _$jscoverage['plugins/link.js'][68] = 0;
    _$jscoverage['plugins/link.js'][70] = 0;
    _$jscoverage['plugins/link.js'][71] = 0;
    _$jscoverage['plugins/link.js'][73] = 0;
    _$jscoverage['plugins/link.js'][74] = 0;
    _$jscoverage['plugins/link.js'][79] = 0;
    _$jscoverage['plugins/link.js'][81] = 0;
    _$jscoverage['plugins/link.js'][83] = 0;
    _$jscoverage['plugins/link.js'][84] = 0;
    _$jscoverage['plugins/link.js'][86] = 0;
    _$jscoverage['plugins/link.js'][87] = 0;
    _$jscoverage['plugins/link.js'][88] = 0;
    _$jscoverage['plugins/link.js'][91] = 0;
    _$jscoverage['plugins/link.js'][95] = 0;
    _$jscoverage['plugins/link.js'][96] = 0;
    _$jscoverage['plugins/link.js'][98] = 0;
    _$jscoverage['plugins/link.js'][99] = 0;
    _$jscoverage['plugins/link.js'][100] = 0;
    _$jscoverage['plugins/link.js'][101] = 0;
    _$jscoverage['plugins/link.js'][102] = 0;
    _$jscoverage['plugins/link.js'][103] = 0;
    _$jscoverage['plugins/link.js'][107] = 0;
    _$jscoverage['plugins/link.js'][108] = 0;
    _$jscoverage['plugins/link.js'][109] = 0;
    _$jscoverage['plugins/link.js'][112] = 0;
    _$jscoverage['plugins/link.js'][113] = 0;
    _$jscoverage['plugins/link.js'][115] = 0;
    _$jscoverage['plugins/link.js'][117] = 0;
    _$jscoverage['plugins/link.js'][118] = 0;
    _$jscoverage['plugins/link.js'][120] = 0;
    _$jscoverage['plugins/link.js'][123] = 0;
    _$jscoverage['plugins/link.js'][124] = 0;
    _$jscoverage['plugins/link.js'][125] = 0;
    _$jscoverage['plugins/link.js'][126] = 0;
    _$jscoverage['plugins/link.js'][129] = 0;
    _$jscoverage['plugins/link.js'][130] = 0;
    _$jscoverage['plugins/link.js'][132] = 0;
    _$jscoverage['plugins/link.js'][136] = 0;
    _$jscoverage['plugins/link.js'][138] = 0;
    _$jscoverage['plugins/link.js'][139] = 0;
    _$jscoverage['plugins/link.js'][140] = 0;
    _$jscoverage['plugins/link.js'][141] = 0;
    _$jscoverage['plugins/link.js'][142] = 0;
    _$jscoverage['plugins/link.js'][144] = 0;
    _$jscoverage['plugins/link.js'][148] = 0;
    _$jscoverage['plugins/link.js'][150] = 0;
    _$jscoverage['plugins/link.js'][153] = 0;
    _$jscoverage['plugins/link.js'][154] = 0;
    _$jscoverage['plugins/link.js'][156] = 0;
    _$jscoverage['plugins/link.js'][158] = 0;
    _$jscoverage['plugins/link.js'][162] = 0;
    _$jscoverage['plugins/link.js'][163] = 0;
    _$jscoverage['plugins/link.js'][166] = 0;
    _$jscoverage['plugins/link.js'][167] = 0;
    _$jscoverage['plugins/link.js'][169] = 0;
    _$jscoverage['plugins/link.js'][172] = 0;
    _$jscoverage['plugins/link.js'][173] = 0;
    _$jscoverage['plugins/link.js'][174] = 0;
    _$jscoverage['plugins/link.js'][178] = 0;
    _$jscoverage['plugins/link.js'][179] = 0;
    _$jscoverage['plugins/link.js'][183] = 0;
    _$jscoverage['plugins/link.js'][190] = 0;
    _$jscoverage['plugins/link.js'][192] = 0;
}
_$jscoverage['plugins/link.js'].source = [
    "<span class=\"c\">/**</span>",
    "<span class=\"c\"> * &#36229;&#38142;&#25509;</span>",
    "<span class=\"c\"> * @file</span>",
    "<span class=\"c\"> * @since 1.2.6.1</span>",
    "<span class=\"c\"> */</span>",
    "",
    "<span class=\"c\">/**</span>",
    "<span class=\"c\"> * &#25554;&#20837;&#36229;&#38142;&#25509;</span>",
    "<span class=\"c\"> * @command link</span>",
    "<span class=\"c\"> * @method execCommand</span>",
    "<span class=\"c\"> * @param { String } cmd &#21629;&#20196;&#23383;&#31526;&#20018;</span>",
    "<span class=\"c\"> * @param { Object } options   url&#22320;&#22336;&#65292;title&#26631;&#39064;&#65292;target&#26159;&#21542;&#25171;&#24320;&#26032;&#39029;</span>",
    "<span class=\"c\"> * @example</span>",
    "<span class=\"c\"> * ```javascript</span>",
    "<span class=\"c\"> * editor.execCommand( 'link', '{</span>",
    "<span class=\"c\"> *     url:'ueditor.baidu.com',</span>",
    "<span class=\"c\"> *     title:'ueditor&#23448;&#32593;',</span>",
    "<span class=\"c\"> *     target:'_blank'</span>",
    "<span class=\"c\"> * }' );</span>",
    "<span class=\"c\"> * ```</span>",
    "<span class=\"c\"> */</span>",
    "<span class=\"c\">/**</span>",
    "<span class=\"c\"> * &#22914;&#26524;&#36873;&#21306;&#25152;&#22312;&#20301;&#32622;&#26159;&#21306;&#22495;&#65292;&#36820;&#22238;&#24403;&#21069;&#36229;&#38142;&#25509;&#33410;&#28857;</span>",
    "<span class=\"c\"> * @command link</span>",
    "<span class=\"c\"> * @method queryCommandValue</span>",
    "<span class=\"c\"> * @param { String } cmd &#21629;&#20196;&#23383;&#31526;&#20018;</span>",
    "<span class=\"c\"> * @return { Element } &#36229;&#38142;&#25509;&#33410;&#28857;</span>",
    "<span class=\"c\"> * @example</span>",
    "<span class=\"c\"> * ```javascript</span>",
    "<span class=\"c\"> * editor.queryCommandValue( 'link' );</span>",
    "<span class=\"c\"> * ```</span>",
    "<span class=\"c\"> */</span>",
    "<span class=\"c\">/**</span>",
    "<span class=\"c\"> * &#36820;&#22238;&#24403;&#21069;&#36873;&#21306;&#20301;&#32622;&#26159;&#21542;&#26159;&#36229;&#38142;&#25509;</span>",
    "<span class=\"c\"> * @command link</span>",
    "<span class=\"c\"> * @method queryCommandState</span>",
    "<span class=\"c\"> * @param { String } cmd &#21629;&#20196;&#23383;&#31526;&#20018;</span>",
    "<span class=\"c\"> * @return { Int } 0&#20026;&#26159;&#65292;-1&#20026;&#19981;&#26159;</span>",
    "<span class=\"c\"> * @example</span>",
    "<span class=\"c\"> * ```javascript</span>",
    "<span class=\"c\"> * editor.queryCommandState( 'link' );</span>",
    "<span class=\"c\"> * ```</span>",
    "<span class=\"c\"> */</span>",
    "",
    "<span class=\"c\">/**</span>",
    "<span class=\"c\"> * &#26681;&#25454;&#24403;&#21069;&#36873;&#21306;&#21462;&#28040;&#36229;&#38142;&#25509;</span>",
    "<span class=\"c\"> * @command unlink</span>",
    "<span class=\"c\"> * @method execCommand</span>",
    "<span class=\"c\"> * @param { String } cmd &#21629;&#20196;&#23383;&#31526;&#20018;</span>",
    "<span class=\"c\"> * @example</span>",
    "<span class=\"c\"> * ```javascript</span>",
    "<span class=\"c\"> * editor.execCommand( 'unlink');</span>",
    "<span class=\"c\"> * ```</span>",
    "<span class=\"c\"> */</span>",
    "<span class=\"c\">/**</span>",
    "<span class=\"c\"> * &#36820;&#22238;&#24403;&#21069;&#36873;&#21306;&#20301;&#32622;&#26159;&#21542;&#26159;&#36229;&#38142;&#25509;</span>",
    "<span class=\"c\"> * @command unlink</span>",
    "<span class=\"c\"> * @method queryCommandState</span>",
    "<span class=\"c\"> * @param { String } cmd &#21629;&#20196;&#23383;&#31526;&#20018;</span>",
    "<span class=\"c\"> * @return { Int } 0&#20026;&#26159;&#65292;-1&#20026;&#19981;&#26159;</span>",
    "<span class=\"c\"> * @example</span>",
    "<span class=\"c\"> * ```javascript</span>",
    "<span class=\"c\"> * editor.queryCommandState( 'unlink' );</span>",
    "<span class=\"c\"> * ```</span>",
    "<span class=\"c\"> */</span>",
    "UE<span class=\"k\">.</span>plugins<span class=\"k\">[</span><span class=\"s\">'link'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>",
    "    <span class=\"k\">function</span> optimize<span class=\"k\">(</span> range <span class=\"k\">)</span> <span class=\"k\">{</span>",
    "        <span class=\"k\">var</span> start <span class=\"k\">=</span> range<span class=\"k\">.</span>startContainer<span class=\"k\">,</span>end <span class=\"k\">=</span> range<span class=\"k\">.</span>endContainer<span class=\"k\">;</span>",
    "",
    "        <span class=\"k\">if</span> <span class=\"k\">(</span> start <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>findParentByTagName<span class=\"k\">(</span> start<span class=\"k\">,</span> <span class=\"s\">'a'</span><span class=\"k\">,</span> <span class=\"k\">true</span> <span class=\"k\">)</span> <span class=\"k\">)</span> <span class=\"k\">{</span>",
    "            range<span class=\"k\">.</span>setStartBefore<span class=\"k\">(</span> start <span class=\"k\">);</span>",
    "        <span class=\"k\">}</span>",
    "        <span class=\"k\">if</span> <span class=\"k\">(</span> end <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>findParentByTagName<span class=\"k\">(</span> end<span class=\"k\">,</span> <span class=\"s\">'a'</span><span class=\"k\">,</span> <span class=\"k\">true</span> <span class=\"k\">)</span> <span class=\"k\">)</span> <span class=\"k\">{</span>",
    "            range<span class=\"k\">.</span>setEndAfter<span class=\"k\">(</span> end <span class=\"k\">);</span>",
    "        <span class=\"k\">}</span>",
    "    <span class=\"k\">}</span>",
    "",
    "",
    "    UE<span class=\"k\">.</span>commands<span class=\"k\">[</span><span class=\"s\">'unlink'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">{</span>",
    "        execCommand <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>",
    "            <span class=\"k\">var</span> range <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>selection<span class=\"k\">.</span>getRange<span class=\"k\">(),</span>",
    "                bookmark<span class=\"k\">;</span>",
    "            <span class=\"k\">if</span><span class=\"k\">(</span>range<span class=\"k\">.</span>collapsed <span class=\"k\">&amp;&amp;</span> <span class=\"k\">!</span>domUtils<span class=\"k\">.</span>findParentByTagName<span class=\"k\">(</span> range<span class=\"k\">.</span>startContainer<span class=\"k\">,</span> <span class=\"s\">'a'</span><span class=\"k\">,</span> <span class=\"k\">true</span> <span class=\"k\">))</span><span class=\"k\">{</span>",
    "                <span class=\"k\">return</span><span class=\"k\">;</span>",
    "            <span class=\"k\">}</span>",
    "            bookmark <span class=\"k\">=</span> range<span class=\"k\">.</span>createBookmark<span class=\"k\">();</span>",
    "            optimize<span class=\"k\">(</span> range <span class=\"k\">);</span>",
    "            range<span class=\"k\">.</span>removeInlineStyle<span class=\"k\">(</span> <span class=\"s\">'a'</span> <span class=\"k\">).</span>moveToBookmark<span class=\"k\">(</span> bookmark <span class=\"k\">).</span>select<span class=\"k\">();</span>",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        queryCommandState <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>",
    "            <span class=\"k\">return</span> <span class=\"k\">!</span><span class=\"k\">this</span><span class=\"k\">.</span>highlight <span class=\"k\">&amp;&amp;</span> <span class=\"k\">this</span><span class=\"k\">.</span>queryCommandValue<span class=\"k\">(</span><span class=\"s\">'link'</span><span class=\"k\">)</span> <span class=\"k\">?</span>  <span class=\"s\">0</span> <span class=\"k\">:</span> <span class=\"k\">-</span><span class=\"s\">1</span><span class=\"k\">;</span>",
    "        <span class=\"k\">}</span>",
    "",
    "    <span class=\"k\">}</span><span class=\"k\">;</span>",
    "    <span class=\"k\">function</span> doLink<span class=\"k\">(</span>range<span class=\"k\">,</span>opt<span class=\"k\">,</span>me<span class=\"k\">)</span><span class=\"k\">{</span>",
    "        <span class=\"k\">var</span> rngClone <span class=\"k\">=</span> range<span class=\"k\">.</span>cloneRange<span class=\"k\">(),</span>",
    "            link <span class=\"k\">=</span> me<span class=\"k\">.</span>queryCommandValue<span class=\"k\">(</span><span class=\"s\">'link'</span><span class=\"k\">);</span>",
    "        optimize<span class=\"k\">(</span> range <span class=\"k\">=</span> range<span class=\"k\">.</span>adjustmentBoundary<span class=\"k\">()</span> <span class=\"k\">);</span>",
    "        <span class=\"k\">var</span> start <span class=\"k\">=</span> range<span class=\"k\">.</span>startContainer<span class=\"k\">;</span>",
    "        <span class=\"k\">if</span><span class=\"k\">(</span>start<span class=\"k\">.</span>nodeType <span class=\"k\">==</span> <span class=\"s\">1</span> <span class=\"k\">&amp;&amp;</span> link<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            start <span class=\"k\">=</span> start<span class=\"k\">.</span>childNodes<span class=\"k\">[</span>range<span class=\"k\">.</span>startOffset<span class=\"k\">];</span>",
    "            <span class=\"k\">if</span><span class=\"k\">(</span>start <span class=\"k\">&amp;&amp;</span> start<span class=\"k\">.</span>nodeType <span class=\"k\">==</span> <span class=\"s\">1</span> <span class=\"k\">&amp;&amp;</span> start<span class=\"k\">.</span>tagName <span class=\"k\">==</span> <span class=\"s\">'A'</span> <span class=\"k\">&amp;&amp;</span> <span class=\"s\">/^(?:https?|ftp|file)\\s*:\\s*\\/\\//</span><span class=\"k\">.</span>test<span class=\"k\">(</span>start<span class=\"k\">[</span>browser<span class=\"k\">.</span>ie<span class=\"k\">?</span><span class=\"s\">'innerText'</span><span class=\"k\">:</span><span class=\"s\">'textContent'</span><span class=\"k\">]))</span><span class=\"k\">{</span>",
    "                start<span class=\"k\">[</span>browser<span class=\"k\">.</span>ie <span class=\"k\">?</span> <span class=\"s\">'innerText'</span> <span class=\"k\">:</span> <span class=\"s\">'textContent'</span><span class=\"k\">]</span> <span class=\"k\">=</span>  utils<span class=\"k\">.</span>html<span class=\"k\">(</span>opt<span class=\"k\">.</span>textValue<span class=\"k\">||</span>opt<span class=\"k\">.</span>href<span class=\"k\">);</span>",
    "",
    "            <span class=\"k\">}</span>",
    "        <span class=\"k\">}</span>",
    "        <span class=\"k\">if</span><span class=\"k\">(</span> <span class=\"k\">!</span>rngClone<span class=\"k\">.</span>collapsed <span class=\"k\">||</span> link<span class=\"k\">)</span><span class=\"k\">{</span>",
    "            range<span class=\"k\">.</span>removeInlineStyle<span class=\"k\">(</span> <span class=\"s\">'a'</span> <span class=\"k\">);</span>",
    "            rngClone <span class=\"k\">=</span> range<span class=\"k\">.</span>cloneRange<span class=\"k\">();</span>",
    "        <span class=\"k\">}</span>",
    "",
    "        <span class=\"k\">if</span> <span class=\"k\">(</span> rngClone<span class=\"k\">.</span>collapsed <span class=\"k\">)</span> <span class=\"k\">{</span>",
    "            <span class=\"k\">var</span> a <span class=\"k\">=</span> range<span class=\"k\">.</span>document<span class=\"k\">.</span>createElement<span class=\"k\">(</span> <span class=\"s\">'a'</span><span class=\"k\">),</span>",
    "                text <span class=\"k\">=</span> <span class=\"s\">''</span><span class=\"k\">;</span>",
    "            <span class=\"k\">if</span><span class=\"k\">(</span>opt<span class=\"k\">.</span>textValue<span class=\"k\">)</span><span class=\"k\">{</span>",
    "",
    "                text <span class=\"k\">=</span>   utils<span class=\"k\">.</span>html<span class=\"k\">(</span>opt<span class=\"k\">.</span>textValue<span class=\"k\">);</span>",
    "                <span class=\"k\">delete</span> opt<span class=\"k\">.</span>textValue<span class=\"k\">;</span>",
    "            <span class=\"k\">}</span><span class=\"k\">else</span><span class=\"k\">{</span>",
    "                text <span class=\"k\">=</span>   utils<span class=\"k\">.</span>html<span class=\"k\">(</span>opt<span class=\"k\">.</span>href<span class=\"k\">);</span>",
    "",
    "            <span class=\"k\">}</span>",
    "            domUtils<span class=\"k\">.</span>setAttributes<span class=\"k\">(</span> a<span class=\"k\">,</span> opt <span class=\"k\">);</span>",
    "            start <span class=\"k\">=</span>  domUtils<span class=\"k\">.</span>findParentByTagName<span class=\"k\">(</span> rngClone<span class=\"k\">.</span>startContainer<span class=\"k\">,</span> <span class=\"s\">'a'</span><span class=\"k\">,</span> <span class=\"k\">true</span> <span class=\"k\">);</span>",
    "            <span class=\"k\">if</span><span class=\"k\">(</span>start <span class=\"k\">&amp;&amp;</span> domUtils<span class=\"k\">.</span>isInNodeEndBoundary<span class=\"k\">(</span>rngClone<span class=\"k\">,</span>start<span class=\"k\">))</span><span class=\"k\">{</span>",
    "                range<span class=\"k\">.</span>setStartAfter<span class=\"k\">(</span>start<span class=\"k\">).</span>collapse<span class=\"k\">(</span><span class=\"k\">true</span><span class=\"k\">);</span>",
    "",
    "            <span class=\"k\">}</span>",
    "            a<span class=\"k\">[</span>browser<span class=\"k\">.</span>ie <span class=\"k\">?</span> <span class=\"s\">'innerText'</span> <span class=\"k\">:</span> <span class=\"s\">'textContent'</span><span class=\"k\">]</span> <span class=\"k\">=</span> text<span class=\"k\">;</span>",
    "            range<span class=\"k\">.</span>insertNode<span class=\"k\">(</span>a<span class=\"k\">).</span>selectNode<span class=\"k\">(</span> a <span class=\"k\">);</span>",
    "        <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>",
    "            range<span class=\"k\">.</span>applyInlineStyle<span class=\"k\">(</span> <span class=\"s\">'a'</span><span class=\"k\">,</span> opt <span class=\"k\">);</span>",
    "",
    "        <span class=\"k\">}</span>",
    "    <span class=\"k\">}</span>",
    "    UE<span class=\"k\">.</span>commands<span class=\"k\">[</span><span class=\"s\">'link'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">{</span>",
    "        execCommand <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span> cmdName<span class=\"k\">,</span> opt <span class=\"k\">)</span> <span class=\"k\">{</span>",
    "            <span class=\"k\">var</span> range<span class=\"k\">;</span>",
    "            opt<span class=\"k\">.</span>_href <span class=\"k\">&amp;&amp;</span> <span class=\"k\">(</span>opt<span class=\"k\">.</span>_href <span class=\"k\">=</span> utils<span class=\"k\">.</span>unhtml<span class=\"k\">(</span>opt<span class=\"k\">.</span>_href<span class=\"k\">,</span><span class=\"s\">/[&lt;\"&gt;]/g</span><span class=\"k\">));</span>",
    "            opt<span class=\"k\">.</span>href <span class=\"k\">&amp;&amp;</span> <span class=\"k\">(</span>opt<span class=\"k\">.</span>href <span class=\"k\">=</span> utils<span class=\"k\">.</span>unhtml<span class=\"k\">(</span>opt<span class=\"k\">.</span>href<span class=\"k\">,</span><span class=\"s\">/[&lt;\"&gt;]/g</span><span class=\"k\">));</span>",
    "            opt<span class=\"k\">.</span>textValue <span class=\"k\">&amp;&amp;</span> <span class=\"k\">(</span>opt<span class=\"k\">.</span>textValue <span class=\"k\">=</span> utils<span class=\"k\">.</span>unhtml<span class=\"k\">(</span>opt<span class=\"k\">.</span>textValue<span class=\"k\">,</span><span class=\"s\">/[&lt;\"&gt;]/g</span><span class=\"k\">));</span>",
    "            doLink<span class=\"k\">(</span>range<span class=\"k\">=</span><span class=\"k\">this</span><span class=\"k\">.</span>selection<span class=\"k\">.</span>getRange<span class=\"k\">(),</span>opt<span class=\"k\">,</span><span class=\"k\">this</span><span class=\"k\">);</span>",
    "            <span class=\"c\">//&#38381;&#21512;&#37117;&#19981;&#21152;&#21344;&#20301;&#31526;&#65292;&#22914;&#26524;&#21152;&#20102;&#20250;&#22312;a&#21518;&#36793;&#22810;&#20010;&#21344;&#20301;&#31526;&#33410;&#28857;&#65292;&#23548;&#33268;a&#26159;&#22270;&#29255;&#32972;&#26223;&#32452;&#25104;&#30340;&#21015;&#34920;&#65292;&#20986;&#29616;&#31354;&#30333;&#38382;&#39064;</span>",
    "            range<span class=\"k\">.</span>collapse<span class=\"k\">().</span>select<span class=\"k\">(</span><span class=\"k\">true</span><span class=\"k\">);</span>",
    "",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        queryCommandValue <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>",
    "            <span class=\"k\">var</span> range <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>selection<span class=\"k\">.</span>getRange<span class=\"k\">(),</span>",
    "                node<span class=\"k\">;</span>",
    "            <span class=\"k\">if</span> <span class=\"k\">(</span> range<span class=\"k\">.</span>collapsed <span class=\"k\">)</span> <span class=\"k\">{</span>",
    "<span class=\"c\">//                    node = this.selection.getStart();</span>",
    "                <span class=\"c\">//&#22312;ie&#19979;getstart()&#21462;&#20540;&#20559;&#19978;&#20102;</span>",
    "                node <span class=\"k\">=</span> range<span class=\"k\">.</span>startContainer<span class=\"k\">;</span>",
    "                node <span class=\"k\">=</span> node<span class=\"k\">.</span>nodeType <span class=\"k\">==</span> <span class=\"s\">1</span> <span class=\"k\">?</span> node <span class=\"k\">:</span> node<span class=\"k\">.</span>parentNode<span class=\"k\">;</span>",
    "",
    "                <span class=\"k\">if</span> <span class=\"k\">(</span> node <span class=\"k\">&amp;&amp;</span> <span class=\"k\">(</span>node <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>findParentByTagName<span class=\"k\">(</span> node<span class=\"k\">,</span> <span class=\"s\">'a'</span><span class=\"k\">,</span> <span class=\"k\">true</span> <span class=\"k\">))</span> <span class=\"k\">&amp;&amp;</span> <span class=\"k\">!</span> domUtils<span class=\"k\">.</span>isInNodeEndBoundary<span class=\"k\">(</span>range<span class=\"k\">,</span>node<span class=\"k\">))</span> <span class=\"k\">{</span>",
    "",
    "                    <span class=\"k\">return</span> node<span class=\"k\">;</span>",
    "                <span class=\"k\">}</span>",
    "            <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>",
    "                <span class=\"c\">//trace:1111  &#22914;&#26524;&#26159;&lt;p&gt;&lt;a&gt;xx&lt;/a&gt;&lt;/p&gt; startContainer&#26159;p&#23601;&#20250;&#25214;&#19981;&#21040;a</span>",
    "                range<span class=\"k\">.</span>shrinkBoundary<span class=\"k\">();</span>",
    "                <span class=\"k\">var</span> start <span class=\"k\">=</span> range<span class=\"k\">.</span>startContainer<span class=\"k\">.</span>nodeType  <span class=\"k\">==</span> <span class=\"s\">3</span> <span class=\"k\">||</span> <span class=\"k\">!</span>range<span class=\"k\">.</span>startContainer<span class=\"k\">.</span>childNodes<span class=\"k\">[</span>range<span class=\"k\">.</span>startOffset<span class=\"k\">]</span> <span class=\"k\">?</span> range<span class=\"k\">.</span>startContainer <span class=\"k\">:</span> range<span class=\"k\">.</span>startContainer<span class=\"k\">.</span>childNodes<span class=\"k\">[</span>range<span class=\"k\">.</span>startOffset<span class=\"k\">],</span>",
    "                    end <span class=\"k\">=</span>  range<span class=\"k\">.</span>endContainer<span class=\"k\">.</span>nodeType <span class=\"k\">==</span> <span class=\"s\">3</span> <span class=\"k\">||</span> range<span class=\"k\">.</span>endOffset <span class=\"k\">==</span> <span class=\"s\">0</span> <span class=\"k\">?</span> range<span class=\"k\">.</span>endContainer <span class=\"k\">:</span> range<span class=\"k\">.</span>endContainer<span class=\"k\">.</span>childNodes<span class=\"k\">[</span>range<span class=\"k\">.</span>endOffset<span class=\"k\">-</span><span class=\"s\">1</span><span class=\"k\">],</span>",
    "                    common <span class=\"k\">=</span> range<span class=\"k\">.</span>getCommonAncestor<span class=\"k\">();</span>",
    "                node <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>findParentByTagName<span class=\"k\">(</span> common<span class=\"k\">,</span> <span class=\"s\">'a'</span><span class=\"k\">,</span> <span class=\"k\">true</span> <span class=\"k\">);</span>",
    "                <span class=\"k\">if</span> <span class=\"k\">(</span> <span class=\"k\">!</span>node <span class=\"k\">&amp;&amp;</span> common<span class=\"k\">.</span>nodeType <span class=\"k\">==</span> <span class=\"s\">1</span><span class=\"k\">)</span><span class=\"k\">{</span>",
    "",
    "                    <span class=\"k\">var</span> as <span class=\"k\">=</span> common<span class=\"k\">.</span>getElementsByTagName<span class=\"k\">(</span> <span class=\"s\">'a'</span> <span class=\"k\">),</span>",
    "                        ps<span class=\"k\">,</span>pe<span class=\"k\">;</span>",
    "",
    "                    <span class=\"k\">for</span> <span class=\"k\">(</span> <span class=\"k\">var</span> i <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">,</span>ci<span class=\"k\">;</span> ci <span class=\"k\">=</span> as<span class=\"k\">[</span>i<span class=\"k\">++];</span> <span class=\"k\">)</span> <span class=\"k\">{</span>",
    "                        ps <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>getPosition<span class=\"k\">(</span> ci<span class=\"k\">,</span> start <span class=\"k\">),</span>pe <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>getPosition<span class=\"k\">(</span> ci<span class=\"k\">,</span>end<span class=\"k\">);</span>",
    "                        <span class=\"k\">if</span> <span class=\"k\">(</span> <span class=\"k\">(</span>ps <span class=\"k\">&amp;</span> domUtils<span class=\"k\">.</span>POSITION_FOLLOWING <span class=\"k\">||</span> ps <span class=\"k\">&amp;</span> domUtils<span class=\"k\">.</span>POSITION_CONTAINS<span class=\"k\">)</span>",
    "                            <span class=\"k\">&amp;&amp;</span>",
    "                            <span class=\"k\">(</span>pe <span class=\"k\">&amp;</span> domUtils<span class=\"k\">.</span>POSITION_PRECEDING <span class=\"k\">||</span> pe <span class=\"k\">&amp;</span> domUtils<span class=\"k\">.</span>POSITION_CONTAINS<span class=\"k\">)</span>",
    "                            <span class=\"k\">)</span> <span class=\"k\">{</span>",
    "                            node <span class=\"k\">=</span> ci<span class=\"k\">;</span>",
    "                            <span class=\"k\">break</span><span class=\"k\">;</span>",
    "                        <span class=\"k\">}</span>",
    "                    <span class=\"k\">}</span>",
    "                <span class=\"k\">}</span>",
    "                <span class=\"k\">return</span> node<span class=\"k\">;</span>",
    "            <span class=\"k\">}</span>",
    "",
    "        <span class=\"k\">}</span><span class=\"k\">,</span>",
    "        queryCommandState <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>",
    "            <span class=\"c\">//&#21028;&#26029;&#22914;&#26524;&#26159;&#35270;&#39057;&#30340;&#35805;&#36830;&#25509;&#19981;&#21487;&#29992;</span>",
    "            <span class=\"c\">//fix 853</span>",
    "            <span class=\"k\">var</span> img <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>selection<span class=\"k\">.</span>getRange<span class=\"k\">().</span>getClosedNode<span class=\"k\">(),</span>",
    "                flag <span class=\"k\">=</span> img <span class=\"k\">&amp;&amp;</span> <span class=\"k\">(</span>img<span class=\"k\">.</span>className <span class=\"k\">==</span> <span class=\"s\">\"edui-faked-video\"</span><span class=\"k\">);</span>",
    "            <span class=\"k\">return</span> flag <span class=\"k\">?</span> <span class=\"k\">-</span><span class=\"s\">1</span> <span class=\"k\">:</span> <span class=\"s\">0</span><span class=\"k\">;</span>",
    "        <span class=\"k\">}</span>",
    "    <span class=\"k\">}</span><span class=\"k\">;</span>",
    "<span class=\"k\">}</span><span class=\"k\">;</span>"
];
_$jscoverage['plugins/link.js'][66]++;
UE.plugins.link = (function () {
    _$jscoverage['plugins/link.js'][67]++;

    function optimize(range) {
        _$jscoverage['plugins/link.js'][68]++;
        var start = range.startContainer, end = range.endContainer;
        _$jscoverage['plugins/link.js'][70]++;
        if ((start = domUtils.findParentByTagName(start, "a", true))) {
            _$jscoverage['plugins/link.js'][71]++;
            range.setStartBefore(start);
        }
        _$jscoverage['plugins/link.js'][73]++;
        if ((end = domUtils.findParentByTagName(end, "a", true))) {
            _$jscoverage['plugins/link.js'][74]++;
            range.setEndAfter(end);
        }
    }

    _$jscoverage['plugins/link.js'][79]++;
    UE.commands.unlink = {
        execCommand: (function () {
            _$jscoverage['plugins/link.js'][81]++;
            var range = this.selection.getRange(), bookmark;
            _$jscoverage['plugins/link.js'][83]++;
            if ((range.collapsed && (!domUtils.findParentByTagName(range.startContainer, "a", true)))) {
                _$jscoverage['plugins/link.js'][84]++;
                return;
            }
            _$jscoverage['plugins/link.js'][86]++;
            bookmark = range.createBookmark();
            _$jscoverage['plugins/link.js'][87]++;
            optimize(range);
            _$jscoverage['plugins/link.js'][88]++;
            range.removeInlineStyle("a").moveToBookmark(bookmark).select();
        }), queryCommandState: (function () {
            _$jscoverage['plugins/link.js'][91]++;
            return (((!this.highlight) && this.queryCommandValue("link")) ? 0 : -1);
        })
    };
    _$jscoverage['plugins/link.js'][95]++;

    function doLink(range, opt, me) {
        _$jscoverage['plugins/link.js'][96]++;
        var rngClone = range.cloneRange(), link = me.queryCommandValue("link");
        _$jscoverage['plugins/link.js'][98]++;
        optimize((range = range.adjustmentBoundary()));
        _$jscoverage['plugins/link.js'][99]++;
        var start = range.startContainer;
        _$jscoverage['plugins/link.js'][100]++;
        if (((start.nodeType == 1) && link)) {
            _$jscoverage['plugins/link.js'][101]++;
            start = start.childNodes[range.startOffset];
            _$jscoverage['plugins/link.js'][102]++;
            if ((start && (start.nodeType == 1) && (start.tagName == "A") && /^(?:https?|ftp|file)\s*:\s*\/\//.test(start[(browser.ie ? "innerText" : "textContent")]))) {
                _$jscoverage['plugins/link.js'][103]++;
                start[(browser.ie ? "innerText" : "textContent")] = utils.html((opt.textValue || opt.href));
            }
        }
        _$jscoverage['plugins/link.js'][107]++;
        if (((!rngClone.collapsed) || link)) {
            _$jscoverage['plugins/link.js'][108]++;
            range.removeInlineStyle("a");
            _$jscoverage['plugins/link.js'][109]++;
            rngClone = range.cloneRange();
        }
        _$jscoverage['plugins/link.js'][112]++;
        if (rngClone.collapsed) {
            _$jscoverage['plugins/link.js'][113]++;
            var a = range.document.createElement("a"), text = "";
            _$jscoverage['plugins/link.js'][115]++;
            if (opt.textValue) {
                _$jscoverage['plugins/link.js'][117]++;
                text = utils.html(opt.textValue);
                _$jscoverage['plugins/link.js'][118]++;
                (delete opt.textValue);
            } else {
                _$jscoverage['plugins/link.js'][120]++;
                text = utils.html(opt.href);
            }
            _$jscoverage['plugins/link.js'][123]++;
            domUtils.setAttributes(a, opt);
            _$jscoverage['plugins/link.js'][124]++;
            start = domUtils.findParentByTagName(rngClone.startContainer, "a", true);
            _$jscoverage['plugins/link.js'][125]++;
            if ((start && domUtils.isInNodeEndBoundary(rngClone, start))) {
                _$jscoverage['plugins/link.js'][126]++;
                range.setStartAfter(start).collapse(true);
            }
            _$jscoverage['plugins/link.js'][129]++;
            a[(browser.ie ? "innerText" : "textContent")] = text;
            _$jscoverage['plugins/link.js'][130]++;
            range.insertNode(a).selectNode(a);
        } else {
            _$jscoverage['plugins/link.js'][132]++;
            range.applyInlineStyle("a", opt);
        }
    }

    _$jscoverage['plugins/link.js'][136]++;
    UE.commands.link = {
        execCommand: (function (cmdName, opt) {
            _$jscoverage['plugins/link.js'][138]++;
            var range;
            _$jscoverage['plugins/link.js'][139]++;
            (opt._href && (opt._href = utils.unhtml(opt._href, /[<">]/g)));
            _$jscoverage['plugins/link.js'][140]++;
            (opt.href && (opt.href = utils.unhtml(opt.href, /[<">]/g)));
            _$jscoverage['plugins/link.js'][141]++;
            (opt.textValue && (opt.textValue = utils.unhtml(opt.textValue, /[<">]/g)));
            _$jscoverage['plugins/link.js'][142]++;
            doLink((range = this.selection.getRange()), opt, this);
            _$jscoverage['plugins/link.js'][144]++;
            range.collapse().select(true);
        }), queryCommandValue: (function () {
            _$jscoverage['plugins/link.js'][148]++;
            var range = this.selection.getRange(), node;
            _$jscoverage['plugins/link.js'][150]++;
            if (range.collapsed) {
                _$jscoverage['plugins/link.js'][153]++;
                node = range.startContainer;
                _$jscoverage['plugins/link.js'][154]++;
                node = ((node.nodeType == 1) ? node : node.parentNode);
                _$jscoverage['plugins/link.js'][156]++;
                if ((node && (node = domUtils.findParentByTagName(node, "a", true)) && (!domUtils.isInNodeEndBoundary(range, node)))) {
                    _$jscoverage['plugins/link.js'][158]++;
                    return node;
                }
            } else {
                _$jscoverage['plugins/link.js'][162]++;
                range.shrinkBoundary();
                _$jscoverage['plugins/link.js'][163]++;
                var start = (((range.startContainer.nodeType == 3) || (!range.startContainer.childNodes[range.startOffset])) ? range.startContainer : range.startContainer.childNodes[range.startOffset]), end = (((range.endContainer.nodeType == 3) || (range.endOffset == 0)) ? range.endContainer : range.endContainer.childNodes[(range.endOffset - 1)]), common = range.getCommonAncestor();
                _$jscoverage['plugins/link.js'][166]++;
                node = domUtils.findParentByTagName(common, "a", true);
                _$jscoverage['plugins/link.js'][167]++;
                if (((!node) && (common.nodeType == 1))) {
                    _$jscoverage['plugins/link.js'][169]++;
                    var as = common.getElementsByTagName("a"), ps, pe;
                    _$jscoverage['plugins/link.js'][172]++;
                    for (var i = 0, ci; (ci = as[(i++)]);) {
                        _$jscoverage['plugins/link.js'][173]++;
                        ((ps = domUtils.getPosition(ci, start)), (pe = domUtils.getPosition(ci, end)));
                        _$jscoverage['plugins/link.js'][174]++;
                        if ((((ps & domUtils.POSITION_FOLLOWING) || (ps & domUtils.POSITION_CONTAINS)) && ((pe & domUtils.POSITION_PRECEDING) || (pe & domUtils.POSITION_CONTAINS)))) {
                            _$jscoverage['plugins/link.js'][178]++;
                            node = ci;
                            _$jscoverage['plugins/link.js'][179]++;
                            break;
                        }
                    }
                }
                _$jscoverage['plugins/link.js'][183]++;
                return node;
            }
        }), queryCommandState: (function () {
            _$jscoverage['plugins/link.js'][190]++;
            var img = this.selection.getRange().getClosedNode(), flag = (img && (img.className == "edui-faked-video"));
            _$jscoverage['plugins/link.js'][192]++;
            return (flag ? -1 : 0);
        })
    };
});
