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
if (!_$jscoverage['editor.js']) {
    _$jscoverage['editor.js'] = [];
    _$jscoverage['editor.js'][1] = 0;
    _$jscoverage['editor.js'][3] = 0;
    _$jscoverage['editor.js'][5] = 0;
    _$jscoverage['editor.js'][7] = 0;
    _$jscoverage['editor.js'][9] = 0;
    _$jscoverage['editor.js'][11] = 0;
    _$jscoverage['editor.js'][13] = 0;
    _$jscoverage['editor.js'][15] = 0;
    _$jscoverage['editor.js'][17] = 0;
    _$jscoverage['editor.js'][19] = 0;
}
_$jscoverage['editor.js'].source = [
    "UEDITOR_CONFIG <span class=\"k\">=</span> window<span class=\"k\">.</span>UEDITOR_CONFIG <span class=\"k\">||</span> <span class=\"k\">{}</span><span class=\"k\">;</span>",
    "",
    "<span class=\"k\">var</span> baidu <span class=\"k\">=</span> window<span class=\"k\">.</span>baidu <span class=\"k\">||</span> <span class=\"k\">{}</span><span class=\"k\">;</span>",
    "",
    "window<span class=\"k\">.</span>baidu <span class=\"k\">=</span> baidu<span class=\"k\">;</span>",
    "",
    "window<span class=\"k\">.</span>UE <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor <span class=\"k\">=</span>  <span class=\"k\">{}</span><span class=\"k\">;</span>",
    "",
    "UE<span class=\"k\">.</span>plugins <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>",
    "",
    "UE<span class=\"k\">.</span>commands <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>",
    "",
    "UE<span class=\"k\">.</span>instants <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>",
    "",
    "UE<span class=\"k\">.</span>I18N <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>",
    "",
    "UE<span class=\"k\">.</span>version <span class=\"k\">=</span> <span class=\"s\">\"1.2.6.1\"</span><span class=\"k\">;</span>",
    "",
    "<span class=\"k\">var</span> dom <span class=\"k\">=</span> UE<span class=\"k\">.</span>dom <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>"
];
_$jscoverage['editor.js'][1]++;
UEDITOR_CONFIG = (window.UEDITOR_CONFIG || {});
_$jscoverage['editor.js'][3]++;
var baidu = (window.baidu || {});
_$jscoverage['editor.js'][5]++;
window.baidu = baidu;
_$jscoverage['editor.js'][7]++;
window.UE = (baidu.editor = {});
_$jscoverage['editor.js'][9]++;
UE.plugins = {};
_$jscoverage['editor.js'][11]++;
UE.commands = {};
_$jscoverage['editor.js'][13]++;
UE.instants = {};
_$jscoverage['editor.js'][15]++;
UE.I18N = {};
_$jscoverage['editor.js'][17]++;
UE.version = "1.2.6.1";
_$jscoverage['editor.js'][19]++;
var dom = (UE.dom = {});
