/**
 * 插入音乐命令
 * @file
 */
UE.plugin.register("music", function () {
    var me = this;

    function creatInsertStr(url, width, cssfloat) {
        return '<audio controls preload="meta" class="edui-faked-music" ' +
            ' src="' + url + '" _src="' + url + '" width="' + width + '" ' +
            (cssfloat ? 'style="float:' + cssfloat + '"' : "") +
            '></audio>';
    }

    me.addOutputRule(function (root) {
        utils.each(root.getNodesByTagName("img"), function (node) {
            var html;
            if (node.getAttr("class") == "edui-faked-music") {
                var cssfloat = node.getStyle("float");
                html = creatInsertStr(
                    node.getAttr("_url"),
                    node.getAttr("width"),
                    cssfloat
                );
                var embed = UE.uNode.createElement(html);
                node.parentNode.replaceChild(embed, node);
            }
        });
    });
    me.addInputRule(function (root) {
        utils.each(root.getNodesByTagName("audio"), function (node) {
            if (node.getAttr("class") == "edui-faked-music") {
                var cssfloat = node.getStyle("float");
                html = creatInsertStr(
                    node.getAttr("src"),
                    node.getAttr("width"),
                    cssfloat
                );
                var img = UE.uNode.createElement(html);
                node.parentNode.replaceChild(img, node);
            }
        });
    });

    me.commands["insertmusic"] = {
        execCommand: function (cmd, musicObjs) {
            musicObjs = utils.isArray(musicObjs) ? musicObjs : [musicObjs];
            var html = [];
            for (var i = 0, vi, len = musicObjs.length; i < len; i++) {
                vi = musicObjs[i];
                html.push(
                    creatInsertStr(
                        vi.url,
                        vi.width || 300,
                        vi.align
                    )
                );

            }
            me.execCommand("inserthtml", html.join(""), true);
        },
        queryCommandState: function () {
            var me = this,
                img = me.selection.getRange().getClosedNode(),
                flag = img && img.className == "edui-faked-music";
            return flag ? 1 : 0;
        }
    };

});
