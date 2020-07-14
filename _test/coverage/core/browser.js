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
if (!_$jscoverage['core/browser.js']) {
    _$jscoverage['core/browser.js'] = [];
    _$jscoverage['core/browser.js'][13] = 0;
    _$jscoverage['core/browser.js'][14] = 0;
    _$jscoverage['core/browser.js'][83] = 0;
    _$jscoverage['core/browser.js'][85] = 0;
    _$jscoverage['core/browser.js'][88] = 0;
    _$jscoverage['core/browser.js'][89] = 0;
    _$jscoverage['core/browser.js'][100] = 0;
    _$jscoverage['core/browser.js'][112] = 0;
    _$jscoverage['core/browser.js'][124] = 0;
    _$jscoverage['core/browser.js'][136] = 0;
    _$jscoverage['core/browser.js'][149] = 0;
    _$jscoverage['core/browser.js'][154] = 0;
    _$jscoverage['core/browser.js'][155] = 0;
    _$jscoverage['core/browser.js'][156] = 0;
    _$jscoverage['core/browser.js'][158] = 0;
    _$jscoverage['core/browser.js'][159] = 0;
    _$jscoverage['core/browser.js'][173] = 0;
    _$jscoverage['core/browser.js'][174] = 0;
    _$jscoverage['core/browser.js'][187] = 0;
    _$jscoverage['core/browser.js'][188] = 0;
    _$jscoverage['core/browser.js'][193] = 0;
    _$jscoverage['core/browser.js'][194] = 0;
    _$jscoverage['core/browser.js'][197] = 0;
    _$jscoverage['core/browser.js'][198] = 0;
    _$jscoverage['core/browser.js'][213] = 0;
    _$jscoverage['core/browser.js'][224] = 0;
    _$jscoverage['core/browser.js'][232] = 0;
    _$jscoverage['core/browser.js'][235] = 0;
}
_$jscoverage['core/browser.js'].source = [
    "<span class=\"c\">/**</span>",
    "<span class=\"c\"> * &#27983;&#35272;&#22120;&#21028;&#26029;&#27169;&#22359;</span>",
    "<span class=\"c\"> * @file</span>",
    "<span class=\"c\"> * @module UE.browser</span>",
    "<span class=\"c\"> * @since 1.2.6.1</span>",
    "<span class=\"c\"> */</span>",
    "",
    "<span class=\"c\">/**</span>",
    "<span class=\"c\"> * &#25552;&#20379;&#27983;&#35272;&#22120;&#26816;&#27979;&#30340;&#27169;&#22359;</span>",
    "<span class=\"c\"> * @unfile</span>",
    "<span class=\"c\"> * @module UE.browser</span>",
    "<span class=\"c\"> */</span>",
    "<span class=\"k\">var</span> browser <span class=\"k\">=</span> UE<span class=\"k\">.</span>browser <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>",
    "    <span class=\"k\">var</span> agent <span class=\"k\">=</span> navigator<span class=\"k\">.</span>userAgent<span class=\"k\">.</span>toLowerCase<span class=\"k\">(),</span>",
    "        opera <span class=\"k\">=</span> window<span class=\"k\">.</span>opera<span class=\"k\">,</span>",
    "        browser <span class=\"k\">=</span> <span class=\"k\">{</span>",
    "",
    "        <span class=\"c\">/**</span>",
    "<span class=\"c\">         * @property {boolean} ie &#26816;&#27979;&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;&#21542;&#20026;IE</span>",
    "<span class=\"c\">         * @example</span>",
    "<span class=\"c\">         * ```javascript</span>",
    "<span class=\"c\">         * if ( UE.browser.ie ) {</span>",
    "<span class=\"c\">         *     console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;IE' );</span>",
    "<span class=\"c\">         * }</span>",
    "<span class=\"c\">         * ```</span>",
    "<span class=\"c\">         */</span>",
    "        ie\t\t<span class=\"k\">:</span> <span class=\"k\">!!</span>window<span class=\"k\">.</span>ActiveXObject<span class=\"k\">,</span>",
    "",
    "        <span class=\"c\">/**</span>",
    "<span class=\"c\">         * @property {boolean} opera &#26816;&#27979;&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;&#21542;&#20026;Opera</span>",
    "<span class=\"c\">         * @example</span>",
    "<span class=\"c\">         * ```javascript</span>",
    "<span class=\"c\">         * if ( UE.browser.opera ) {</span>",
    "<span class=\"c\">         *     console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;Opera' );</span>",
    "<span class=\"c\">         * }</span>",
    "<span class=\"c\">         * ```</span>",
    "<span class=\"c\">         */</span>",
    "        opera\t<span class=\"k\">:</span> <span class=\"k\">(</span> <span class=\"k\">!!</span>opera <span class=\"k\">&amp;&amp;</span> opera<span class=\"k\">.</span>version <span class=\"k\">),</span>",
    "",
    "        <span class=\"c\">/**</span>",
    "<span class=\"c\">         * @property {boolean} webkit &#26816;&#27979;&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;&#21542;&#26159;webkit&#20869;&#26680;&#30340;&#27983;&#35272;&#22120;</span>",
    "<span class=\"c\">         * @example</span>",
    "<span class=\"c\">         * ```javascript</span>",
    "<span class=\"c\">         * if ( UE.browser.webkit ) {</span>",
    "<span class=\"c\">         *     console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;webkit&#20869;&#26680;&#27983;&#35272;&#22120;' );</span>",
    "<span class=\"c\">         * }</span>",
    "<span class=\"c\">         * ```</span>",
    "<span class=\"c\">         */</span>",
    "        webkit\t<span class=\"k\">:</span> <span class=\"k\">(</span> agent<span class=\"k\">.</span>indexOf<span class=\"k\">(</span> <span class=\"s\">' applewebkit/'</span> <span class=\"k\">)</span> <span class=\"k\">&gt;</span> <span class=\"k\">-</span><span class=\"s\">1</span> <span class=\"k\">),</span>",
    "",
    "        <span class=\"c\">/**</span>",
    "<span class=\"c\">         * @property {boolean} mac &#26816;&#27979;&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;&#21542;&#26159;&#36816;&#34892;&#22312;mac&#24179;&#21488;&#19979;</span>",
    "<span class=\"c\">         * @example</span>",
    "<span class=\"c\">         * ```javascript</span>",
    "<span class=\"c\">         * if ( UE.browser.mac ) {</span>",
    "<span class=\"c\">         *     console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#36816;&#34892;&#22312;mac&#24179;&#21488;&#19979;' );</span>",
    "<span class=\"c\">         * }</span>",
    "<span class=\"c\">         * ```</span>",
    "<span class=\"c\">         */</span>",
    "        mac\t<span class=\"k\">:</span> <span class=\"k\">(</span> agent<span class=\"k\">.</span>indexOf<span class=\"k\">(</span> <span class=\"s\">'macintosh'</span> <span class=\"k\">)</span> <span class=\"k\">&gt;</span> <span class=\"k\">-</span><span class=\"s\">1</span> <span class=\"k\">),</span>",
    "",
    "        <span class=\"c\">/**</span>",
    "<span class=\"c\">         * @property {boolean} quirks &#26816;&#27979;&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;&#21542;&#22788;&#20110;&#8220;&#24618;&#24322;&#27169;&#24335;&#8221;&#19979;</span>",
    "<span class=\"c\">         * @example</span>",
    "<span class=\"c\">         * ```javascript</span>",
    "<span class=\"c\">         * if ( UE.browser.quirks ) {</span>",
    "<span class=\"c\">         *     console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#36816;&#34892;&#22788;&#20110;&#8220;&#24618;&#24322;&#27169;&#24335;&#8221;' );</span>",
    "<span class=\"c\">         * }</span>",
    "<span class=\"c\">         * ```</span>",
    "<span class=\"c\">         */</span>",
    "        quirks <span class=\"k\">:</span> <span class=\"k\">(</span> document<span class=\"k\">.</span>compatMode <span class=\"k\">==</span> <span class=\"s\">'BackCompat'</span> <span class=\"k\">)</span>",
    "    <span class=\"k\">}</span><span class=\"k\">;</span>",
    "",
    "    <span class=\"c\">/**</span>",
    "<span class=\"c\">    * @property {boolean} gecko &#26816;&#27979;&#24403;&#21069;&#27983;&#35272;&#22120;&#20869;&#26680;&#26159;&#21542;&#26159;gecko&#20869;&#26680;</span>",
    "<span class=\"c\">    * @example</span>",
    "<span class=\"c\">    * ```javascript</span>",
    "<span class=\"c\">    * if ( UE.browser.gecko ) {</span>",
    "<span class=\"c\">    *     console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#20869;&#26680;&#26159;gecko&#20869;&#26680;' );</span>",
    "<span class=\"c\">    * }</span>",
    "<span class=\"c\">    * ```</span>",
    "<span class=\"c\">    */</span>",
    "    browser<span class=\"k\">.</span>gecko <span class=\"k\">=(</span> navigator<span class=\"k\">.</span>product <span class=\"k\">==</span> <span class=\"s\">'Gecko'</span> <span class=\"k\">&amp;&amp;</span> <span class=\"k\">!</span>browser<span class=\"k\">.</span>webkit <span class=\"k\">&amp;&amp;</span> <span class=\"k\">!</span>browser<span class=\"k\">.</span>opera <span class=\"k\">);</span>",
    "",
    "    <span class=\"k\">var</span> version <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>",
    "",
    "    <span class=\"c\">// Internet Explorer 6.0+</span>",
    "    <span class=\"k\">if</span> <span class=\"k\">(</span> browser<span class=\"k\">.</span>ie <span class=\"k\">)</span><span class=\"k\">{</span>",
    "        version <span class=\"k\">=</span> parseFloat<span class=\"k\">(</span> agent<span class=\"k\">.</span>match<span class=\"k\">(</span> <span class=\"s\">/msie (\\d+)/</span> <span class=\"k\">)[</span><span class=\"s\">1</span><span class=\"k\">]</span> <span class=\"k\">);</span>",
    "        <span class=\"c\">/**</span>",
    "<span class=\"c\">         * @property { boolean } ie9Compat &#26816;&#27979;&#27983;&#35272;&#22120;&#27169;&#24335;&#26159;&#21542;&#20026; IE9 &#20860;&#23481;&#27169;&#24335;</span>",
    "<span class=\"c\">         * @warning &#22914;&#26524;&#27983;&#35272;&#22120;&#19981;&#26159;IE&#65292; &#21017;&#35813;&#20540;&#20026;undefined</span>",
    "<span class=\"c\">         * @example</span>",
    "<span class=\"c\">         * ```javascript</span>",
    "<span class=\"c\">         * if ( UE.browser.ie9Compat ) {</span>",
    "<span class=\"c\">         *     console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#36816;&#34892;&#22312;IE9&#20860;&#23481;&#27169;&#24335;&#19979;' );</span>",
    "<span class=\"c\">         * }</span>",
    "<span class=\"c\">         * ```</span>",
    "<span class=\"c\">         */</span>",
    "        browser<span class=\"k\">.</span>ie9Compat <span class=\"k\">=</span> document<span class=\"k\">.</span>documentMode <span class=\"k\">==</span> <span class=\"s\">9</span><span class=\"k\">;</span>",
    "",
    "        <span class=\"c\">/**</span>",
    "<span class=\"c\">         * @property { boolean } ie8 &#26816;&#27979;&#27983;&#35272;&#22120;&#26159;&#21542;&#26159;IE8&#27983;&#35272;&#22120;</span>",
    "<span class=\"c\">         * @warning &#22914;&#26524;&#27983;&#35272;&#22120;&#19981;&#26159;IE&#65292; &#21017;&#35813;&#20540;&#20026;undefined</span>",
    "<span class=\"c\">         * @example</span>",
    "<span class=\"c\">         * ```javascript</span>",
    "<span class=\"c\">         * if ( UE.browser.ie8 ) {</span>",
    "<span class=\"c\">         *     console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;IE8&#27983;&#35272;&#22120;' );</span>",
    "<span class=\"c\">         * }</span>",
    "<span class=\"c\">         * ```</span>",
    "<span class=\"c\">         */</span>",
    "        browser<span class=\"k\">.</span>ie8 <span class=\"k\">=</span> <span class=\"k\">!!</span>document<span class=\"k\">.</span>documentMode<span class=\"k\">;</span>",
    "",
    "        <span class=\"c\">/**</span>",
    "<span class=\"c\">         * @property { boolean } ie8Compat &#26816;&#27979;&#27983;&#35272;&#22120;&#27169;&#24335;&#26159;&#21542;&#20026; IE8 &#20860;&#23481;&#27169;&#24335;</span>",
    "<span class=\"c\">         * @warning &#22914;&#26524;&#27983;&#35272;&#22120;&#19981;&#26159;IE&#65292; &#21017;&#35813;&#20540;&#20026;undefined</span>",
    "<span class=\"c\">         * @example</span>",
    "<span class=\"c\">         * ```javascript</span>",
    "<span class=\"c\">         * if ( UE.browser.ie8Compat ) {</span>",
    "<span class=\"c\">         *     console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#36816;&#34892;&#22312;IE8&#20860;&#23481;&#27169;&#24335;&#19979;' );</span>",
    "<span class=\"c\">         * }</span>",
    "<span class=\"c\">         * ```</span>",
    "<span class=\"c\">         */</span>",
    "        browser<span class=\"k\">.</span>ie8Compat <span class=\"k\">=</span> document<span class=\"k\">.</span>documentMode <span class=\"k\">==</span> <span class=\"s\">8</span><span class=\"k\">;</span>",
    "",
    "        <span class=\"c\">/**</span>",
    "<span class=\"c\">         * @property { boolean } ie7Compat &#26816;&#27979;&#27983;&#35272;&#22120;&#27169;&#24335;&#26159;&#21542;&#20026; IE7 &#20860;&#23481;&#27169;&#24335;</span>",
    "<span class=\"c\">         * @warning &#22914;&#26524;&#27983;&#35272;&#22120;&#19981;&#26159;IE&#65292; &#21017;&#35813;&#20540;&#20026;undefined</span>",
    "<span class=\"c\">         * @example</span>",
    "<span class=\"c\">         * ```javascript</span>",
    "<span class=\"c\">         * if ( UE.browser.ie7Compat ) {</span>",
    "<span class=\"c\">         *     console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#36816;&#34892;&#22312;IE7&#20860;&#23481;&#27169;&#24335;&#19979;' );</span>",
    "<span class=\"c\">         * }</span>",
    "<span class=\"c\">         * ```</span>",
    "<span class=\"c\">         */</span>",
    "        browser<span class=\"k\">.</span>ie7Compat <span class=\"k\">=</span> <span class=\"k\">(</span> <span class=\"k\">(</span> version <span class=\"k\">==</span> <span class=\"s\">7</span> <span class=\"k\">&amp;&amp;</span> <span class=\"k\">!</span>document<span class=\"k\">.</span>documentMode <span class=\"k\">)</span>",
    "                <span class=\"k\">||</span> document<span class=\"k\">.</span>documentMode <span class=\"k\">==</span> <span class=\"s\">7</span> <span class=\"k\">);</span>",
    "",
    "        <span class=\"c\">/**</span>",
    "<span class=\"c\">         * @property { boolean } ie6Compat &#26816;&#27979;&#27983;&#35272;&#22120;&#27169;&#24335;&#26159;&#21542;&#20026; IE6 &#27169;&#24335; &#25110;&#32773;&#24618;&#24322;&#27169;&#24335;</span>",
    "<span class=\"c\">         * @warning &#22914;&#26524;&#27983;&#35272;&#22120;&#19981;&#26159;IE&#65292; &#21017;&#35813;&#20540;&#20026;undefined</span>",
    "<span class=\"c\">         * @example</span>",
    "<span class=\"c\">         * ```javascript</span>",
    "<span class=\"c\">         * if ( UE.browser.ie6Compat ) {</span>",
    "<span class=\"c\">         *     console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#36816;&#34892;&#22312;IE6&#27169;&#24335;&#25110;&#32773;&#24618;&#24322;&#27169;&#24335;&#19979;' );</span>",
    "<span class=\"c\">         * }</span>",
    "<span class=\"c\">         * ```</span>",
    "<span class=\"c\">         */</span>",
    "        browser<span class=\"k\">.</span>ie6Compat <span class=\"k\">=</span> <span class=\"k\">(</span> version <span class=\"k\">&lt;</span> <span class=\"s\">7</span> <span class=\"k\">||</span> browser<span class=\"k\">.</span>quirks <span class=\"k\">);</span>",
    "",
    "    <span class=\"k\">}</span>",
    "",
    "    <span class=\"c\">// Gecko.</span>",
    "    <span class=\"k\">if</span> <span class=\"k\">(</span> browser<span class=\"k\">.</span>gecko <span class=\"k\">)</span><span class=\"k\">{</span>",
    "        <span class=\"k\">var</span> geckoRelease <span class=\"k\">=</span> agent<span class=\"k\">.</span>match<span class=\"k\">(</span> <span class=\"s\">/rv:([\\d\\.]+)/</span> <span class=\"k\">);</span>",
    "        <span class=\"k\">if</span> <span class=\"k\">(</span> geckoRelease <span class=\"k\">)</span>",
    "        <span class=\"k\">{</span>",
    "            geckoRelease <span class=\"k\">=</span> geckoRelease<span class=\"k\">[</span><span class=\"s\">1</span><span class=\"k\">].</span>split<span class=\"k\">(</span> <span class=\"s\">'.'</span> <span class=\"k\">);</span>",
    "            version <span class=\"k\">=</span> geckoRelease<span class=\"k\">[</span><span class=\"s\">0</span><span class=\"k\">]</span> <span class=\"k\">*</span> <span class=\"s\">10000</span> <span class=\"k\">+</span> <span class=\"k\">(</span> geckoRelease<span class=\"k\">[</span><span class=\"s\">1</span><span class=\"k\">]</span> <span class=\"k\">||</span> <span class=\"s\">0</span> <span class=\"k\">)</span> <span class=\"k\">*</span> <span class=\"s\">100</span> <span class=\"k\">+</span> <span class=\"k\">(</span> geckoRelease<span class=\"k\">[</span><span class=\"s\">2</span><span class=\"k\">]</span> <span class=\"k\">||</span> <span class=\"s\">0</span> <span class=\"k\">)</span> <span class=\"k\">*</span> <span class=\"s\">1</span><span class=\"k\">;</span>",
    "        <span class=\"k\">}</span>",
    "    <span class=\"k\">}</span>",
    "",
    "    <span class=\"c\">/**</span>",
    "<span class=\"c\">     * @property { Number } chrome &#26816;&#27979;&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;&#21542;&#20026;Chrome, &#22914;&#26524;&#26159;&#65292;&#21017;&#36820;&#22238;Chrome&#30340;&#22823;&#29256;&#26412;&#21495;</span>",
    "<span class=\"c\">     * @warning &#22914;&#26524;&#27983;&#35272;&#22120;&#19981;&#26159;chrome&#65292; &#21017;&#35813;&#20540;&#20026;undefined</span>",
    "<span class=\"c\">     * @example</span>",
    "<span class=\"c\">     * ```javascript</span>",
    "<span class=\"c\">     * if ( UE.browser.chrome ) {</span>",
    "<span class=\"c\">     *     console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;Chrome' );</span>",
    "<span class=\"c\">     * }</span>",
    "<span class=\"c\">     * ```</span>",
    "<span class=\"c\">     */</span>",
    "    <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"s\">/chrome\\/(\\d+\\.\\d)/i</span><span class=\"k\">.</span>test<span class=\"k\">(</span>agent<span class=\"k\">))</span> <span class=\"k\">{</span>",
    "        browser<span class=\"k\">.</span>chrome <span class=\"k\">=</span> <span class=\"k\">+</span> RegExp<span class=\"k\">[</span><span class=\"s\">'</span><span class=\"t\">\\x</span><span class=\"s\">241'</span><span class=\"k\">];</span>",
    "    <span class=\"k\">}</span>",
    "",
    "    <span class=\"c\">/**</span>",
    "<span class=\"c\">     * @property { Number } safari &#26816;&#27979;&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;&#21542;&#20026;Safari, &#22914;&#26524;&#26159;&#65292;&#21017;&#36820;&#22238;Safari&#30340;&#22823;&#29256;&#26412;&#21495;</span>",
    "<span class=\"c\">     * @warning &#22914;&#26524;&#27983;&#35272;&#22120;&#19981;&#26159;safari&#65292; &#21017;&#35813;&#20540;&#20026;undefined</span>",
    "<span class=\"c\">     * @example</span>",
    "<span class=\"c\">     * ```javascript</span>",
    "<span class=\"c\">     * if ( UE.browser.safari ) {</span>",
    "<span class=\"c\">     *     console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;Safari' );</span>",
    "<span class=\"c\">     * }</span>",
    "<span class=\"c\">     * ```</span>",
    "<span class=\"c\">     */</span>",
    "    <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"s\">/(\\d+\\.\\d)?(?:\\.\\d)?\\s+safari\\/?(\\d+\\.\\d+)?/i</span><span class=\"k\">.</span>test<span class=\"k\">(</span>agent<span class=\"k\">)</span> <span class=\"k\">&amp;&amp;</span> <span class=\"k\">!</span><span class=\"s\">/chrome/i</span><span class=\"k\">.</span>test<span class=\"k\">(</span>agent<span class=\"k\">))</span><span class=\"k\">{</span>",
    "    \tbrowser<span class=\"k\">.</span>safari <span class=\"k\">=</span> <span class=\"k\">+</span> <span class=\"k\">(</span>RegExp<span class=\"k\">[</span><span class=\"s\">'</span><span class=\"t\">\\x</span><span class=\"s\">241'</span><span class=\"k\">]</span> <span class=\"k\">||</span> RegExp<span class=\"k\">[</span><span class=\"s\">'</span><span class=\"t\">\\x</span><span class=\"s\">242'</span><span class=\"k\">]);</span>",
    "    <span class=\"k\">}</span>",
    "",
    "",
    "    <span class=\"c\">// Opera 9.50+</span>",
    "    <span class=\"k\">if</span> <span class=\"k\">(</span> browser<span class=\"k\">.</span>opera <span class=\"k\">)</span>",
    "        version <span class=\"k\">=</span> parseFloat<span class=\"k\">(</span> opera<span class=\"k\">.</span>version<span class=\"k\">()</span> <span class=\"k\">);</span>",
    "",
    "    <span class=\"c\">// WebKit 522+ (Safari 3+)</span>",
    "    <span class=\"k\">if</span> <span class=\"k\">(</span> browser<span class=\"k\">.</span>webkit <span class=\"k\">)</span>",
    "        version <span class=\"k\">=</span> parseFloat<span class=\"k\">(</span> agent<span class=\"k\">.</span>match<span class=\"k\">(</span> <span class=\"s\">/ applewebkit\\/(\\d+)/</span> <span class=\"k\">)[</span><span class=\"s\">1</span><span class=\"k\">]</span> <span class=\"k\">);</span>",
    "",
    "    <span class=\"c\">/**</span>",
    "<span class=\"c\">     * @property { Number } version &#26816;&#27979;&#24403;&#21069;&#27983;&#35272;&#22120;&#29256;&#26412;&#21495;</span>",
    "<span class=\"c\">     * @remind</span>",
    "<span class=\"c\">     * &lt;ul&gt;</span>",
    "<span class=\"c\">     *     &lt;li&gt;IE&#31995;&#21015;&#36820;&#22238;&#20540;&#20026;5,6,7,8,9,10&#31561;&lt;/li&gt;</span>",
    "<span class=\"c\">     *     &lt;li&gt;gecko&#31995;&#21015;&#20250;&#36820;&#22238;10900&#65292;158900&#31561;&lt;/li&gt;</span>",
    "<span class=\"c\">     *     &lt;li&gt;webkit&#31995;&#21015;&#20250;&#36820;&#22238;&#20854;build&#21495; (&#22914; 522&#31561;)&lt;/li&gt;</span>",
    "<span class=\"c\">     * &lt;/ul&gt;</span>",
    "<span class=\"c\">     * @example</span>",
    "<span class=\"c\">     * ```javascript</span>",
    "<span class=\"c\">     * console.log( '&#24403;&#21069;&#27983;&#35272;&#22120;&#29256;&#26412;&#21495;&#26159;&#65306; ' + UE.browser.version );</span>",
    "<span class=\"c\">     * ```</span>",
    "<span class=\"c\">     */</span>",
    "    browser<span class=\"k\">.</span>version <span class=\"k\">=</span> version<span class=\"k\">;</span>",
    "",
    "    <span class=\"c\">/**</span>",
    "<span class=\"c\">     * @property { boolean } isCompatible &#26816;&#27979;&#24403;&#21069;&#27983;&#35272;&#22120;&#26159;&#21542;&#33021;&#22815;&#19982;UEditor&#33391;&#22909;&#20860;&#23481;</span>",
    "<span class=\"c\">     * @example</span>",
    "<span class=\"c\">     * ```javascript</span>",
    "<span class=\"c\">     * if ( UE.browser.isCompatible ) {</span>",
    "<span class=\"c\">     *     console.log( '&#27983;&#35272;&#22120;&#19982;UEditor&#33021;&#22815;&#33391;&#22909;&#20860;&#23481;' );</span>",
    "<span class=\"c\">     * }</span>",
    "<span class=\"c\">     * ```</span>",
    "<span class=\"c\">     */</span>",
    "    browser<span class=\"k\">.</span>isCompatible <span class=\"k\">=</span>",
    "        <span class=\"k\">!</span>browser<span class=\"k\">.</span>mobile <span class=\"k\">&amp;&amp;</span> <span class=\"k\">(</span>",
    "        <span class=\"k\">(</span> browser<span class=\"k\">.</span>ie <span class=\"k\">&amp;&amp;</span> version <span class=\"k\">&gt;=</span> <span class=\"s\">6</span> <span class=\"k\">)</span> <span class=\"k\">||</span>",
    "        <span class=\"k\">(</span> browser<span class=\"k\">.</span>gecko <span class=\"k\">&amp;&amp;</span> version <span class=\"k\">&gt;=</span> <span class=\"s\">10801</span> <span class=\"k\">)</span> <span class=\"k\">||</span>",
    "        <span class=\"k\">(</span> browser<span class=\"k\">.</span>opera <span class=\"k\">&amp;&amp;</span> version <span class=\"k\">&gt;=</span> <span class=\"s\">9.5</span> <span class=\"k\">)</span> <span class=\"k\">||</span>",
    "        <span class=\"k\">(</span> browser<span class=\"k\">.</span>air <span class=\"k\">&amp;&amp;</span> version <span class=\"k\">&gt;=</span> <span class=\"s\">1</span> <span class=\"k\">)</span> <span class=\"k\">||</span>",
    "        <span class=\"k\">(</span> browser<span class=\"k\">.</span>webkit <span class=\"k\">&amp;&amp;</span> version <span class=\"k\">&gt;=</span> <span class=\"s\">522</span> <span class=\"k\">)</span> <span class=\"k\">||</span>",
    "        <span class=\"k\">false</span> <span class=\"k\">);</span>",
    "    <span class=\"k\">return</span> browser<span class=\"k\">;</span>",
    "<span class=\"k\">}</span><span class=\"k\">();</span>",
    "<span class=\"c\">//&#24555;&#25463;&#26041;&#24335;</span>",
    "<span class=\"k\">var</span> ie <span class=\"k\">=</span> browser<span class=\"k\">.</span>ie<span class=\"k\">,</span>",
    "    webkit <span class=\"k\">=</span> browser<span class=\"k\">.</span>webkit<span class=\"k\">,</span>",
    "    gecko <span class=\"k\">=</span> browser<span class=\"k\">.</span>gecko<span class=\"k\">,</span>",
    "    opera <span class=\"k\">=</span> browser<span class=\"k\">.</span>opera<span class=\"k\">;</span>"
];
_$jscoverage['core/browser.js'][13]++;
var browser = (UE.browser = (function () {
    _$jscoverage['core/browser.js'][14]++;
    var agent = navigator.userAgent.toLowerCase(), opera = window.opera, browser = {
        ie: (!(!window.ActiveXObject)),
        opera: ((!(!opera)) && opera.version),
        webkit: (agent.indexOf(" applewebkit/") > -1),
        mac: (agent.indexOf("macintosh") > -1),
        quirks: (document.compatMode == "BackCompat")
    };
    _$jscoverage['core/browser.js'][83]++;
    browser.gecko = ((navigator.product == "Gecko") && (!browser.webkit) && (!browser.opera));
    _$jscoverage['core/browser.js'][85]++;
    var version = 0;
    _$jscoverage['core/browser.js'][88]++;
    if (browser.ie) {
        _$jscoverage['core/browser.js'][89]++;
        version = parseFloat(agent.match(/msie (\d+)/)[1]);
        _$jscoverage['core/browser.js'][100]++;
        browser.ie9Compat = (document.documentMode == 9);
        _$jscoverage['core/browser.js'][112]++;
        browser.ie8 = (!(!document.documentMode));
        _$jscoverage['core/browser.js'][124]++;
        browser.ie8Compat = (document.documentMode == 8);
        _$jscoverage['core/browser.js'][136]++;
        browser.ie7Compat = (((version == 7) && (!document.documentMode)) || (document.documentMode == 7));
        _$jscoverage['core/browser.js'][149]++;
        browser.ie6Compat = ((version < 7) || browser.quirks);
    }
    _$jscoverage['core/browser.js'][154]++;
    if (browser.gecko) {
        _$jscoverage['core/browser.js'][155]++;
        var geckoRelease = agent.match(/rv:([\d\.]+)/);
        _$jscoverage['core/browser.js'][156]++;
        if (geckoRelease) {
            _$jscoverage['core/browser.js'][158]++;
            geckoRelease = geckoRelease[1].split(".");
            _$jscoverage['core/browser.js'][159]++;
            version = ((geckoRelease[0] * 10000) + ((geckoRelease[1] || 0) * 100) + ((geckoRelease[2] || 0) * 1));
        }
    }
    _$jscoverage['core/browser.js'][173]++;
    if (/chrome\/(\d+\.\d)/i.test(agent)) {
        _$jscoverage['core/browser.js'][174]++;
        browser.chrome = (+RegExp.$1);
    }
    _$jscoverage['core/browser.js'][187]++;
    if ((/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && (!/chrome/i.test(agent)))) {
        _$jscoverage['core/browser.js'][188]++;
        browser.safari = (+(RegExp.$1 || RegExp.$2));
    }
    _$jscoverage['core/browser.js'][193]++;
    if (browser.opera) {
        _$jscoverage['core/browser.js'][194]++;
        version = parseFloat(opera.version());
    }
    _$jscoverage['core/browser.js'][197]++;
    if (browser.webkit) {
        _$jscoverage['core/browser.js'][198]++;
        version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);
    }
    _$jscoverage['core/browser.js'][213]++;
    browser.version = version;
    _$jscoverage['core/browser.js'][224]++;
    browser.isCompatible = ((!browser.mobile) && ((browser.ie && (version >= 6)) || (browser.gecko && (version >= 10801)) || (browser.opera && (version >= 9.5)) || (browser.air && (version >= 1)) || (browser.webkit && (version >= 522)) || false));
    _$jscoverage['core/browser.js'][232]++;
    return browser;
})());
_$jscoverage['core/browser.js'][235]++;
var ie = browser.ie, webkit = browser.webkit, gecko = browser.gecko, opera = browser.opera;
