UE.parse.register("insertcode", function (utils) {
    var pres = this.root.getElementsByTagName("code");
    if (pres.length) {
        if (typeof Prism == "undefined") {
            var jsurl, cssurl;
            if (this.rootPath !== undefined) {
                jsurl =
                    utils.removeLastbs(this.rootPath) +
                    "/third-party/prism/prism.js";
                cssurl =
                    utils.removeLastbs(this.rootPath) +
                    "/third-party/prism/prism.css";
            } else {
                jsurl = this.highlightJsUrl;
                cssurl = this.highlightCssUrl;
            }
            utils.loadFile(document, {
                id: "prism-css",
                tag: "link",
                rel: "stylesheet",
                type: "text/css",
                href: cssurl
            });
            utils.loadFile(
                document,
                {
                    id: "prism-js",
                    src: jsurl,
                    tag: "script",
                    type: "text/javascript",
                    'data-manual':true
                },
                function () {
                    utils.each(pres, function (pi) {
                        if (pi && /language-/i.test(pi.className)) {
                            console.log('1',pi.className);
                            Prism.highlightElement(pi);
                        }
                    });
                }
            );
        } else {
            utils.each(pres, function (pi) {
                if (pi && /language-/i.test(pi.className)) {
                    console.log('2',pi.className);
                    Prism.highlightElement(pi);
                }
            });
        }
    }
});
