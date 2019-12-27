! function (e) {
    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }
    var t = {};
    return n.m = e, n.c = t, n.p = "", n(0)
}([function (e, n, t) {
    e.exports = t(1)
}, function (e, n, t) {
    "use strict";
    window.guacImage = t(2), window.guacDefer = t(3), window.markVisuallyComplete = t(4)
}, function (e, n) {
    "use strict";

    function t(e, n, t, o) {
        t = t || {};
        var a, u, d, c, s, w, l = t.delay || 500,
            f = t.cellSize || {
                x: 20,
                y: 20
            },
            g = function (e, r) {
                var i = 'url("' + e + '")',
                    o = i;
                if (t.backgroundLayers && t.backgroundLayers.constructor === Array) {
                    var a = t.backgroundLayers.map(function (e) {
                        return e.replace(/{width}/g, r.w).replace(/{height}/g, r.h)
                    });
                    o = [].concat(a, [i]).join(", ")
                }
                n.style.backgroundImage = o, setTimeout(function () {
                    n.style.opacity = 1
                }, 300)
            }.bind(this),
            h = function () {
                o ? o(u, d) : t.useTreatmentData ? g(u, d) : n.style.backgroundImage = 'url("' + u + '")', t.shouldMarkVisuallyComplete && window && window.markVisuallyComplete(), n.setAttribute("data-guac-image", "loaded")
            }.bind(this),
            m = function () {
                n.setAttribute("data-guac-image", "loading"), a = null;
                var t = r(n, f);
                if (!t) return s();
                if (d || (d = t), t.w !== d.w || t.h !== d.h) return d = t, s(1);
                if (u = i(e, t, f), u !== c) {
                    c = u;
                    var o = document.createElement("img");
                    o.src = u, o.complete || !o.addEventListener ? h() : o.addEventListener("load", h)
                }
            }.bind(this);
        s = function (e) {
            a && clearTimeout(a), a = setTimeout(m, isNaN(e) ? l : e)
        }.bind(this), this.unmount = function () {
            a && (clearTimeout(a), a = null), window.removeEventListener("resize", s)
        }, w = function () {
            n.removeEventListener("load", w), window.addEventListener("resize", s), m()
        }, window.guacDefer && !t.loadEagerly ? (n.addEventListener("load", w), window.guacDefer.background(n)) : w()
    }

    function r(e, n) {
        var t = {
            w: n.x,
            h: n.y
        };
        if ("undefined" != typeof window && e) {
            var r = Math.min(window.devicePixelRatio || 1, 3),
                i = window.getComputedStyle(e);
            if (t.w = Math.round(parseInt(i.width, 10) * r), t.h = Math.round(parseInt(i.height, 10) * r), isNaN(t.w) || isNaN(t.h)) return
        }
        return t
    }

    function i(e, n, t) {
        var r = n.w % t.x,
            i = n.h % t.y,
            o = Math.max(r ? n.w + (t.x - r) : n.w, t.x),
            a = Math.max(i ? n.h + (t.y - i) : n.h, t.y);
        return e.replace(/\{width\}/g, o).replace(/\{height\}/g, a)
    }
    t.getUrl = function (e, n, t) {
        if (!n) throw new Error("cellSize is required");
        var o = r(t, n);
        if (o) return i(e, o, n)
    }, e.exports = t
}, function (e, n) {
    "use strict";
    var t = "50%",
        r = [],
        i = !1,
        o = function (e) {
            e.dispatchEvent(new Event("load"))
        },
        a = {
            background: new IntersectionObserver(function (e, n) {
                e.forEach(function (e) {
                    e.isIntersecting && (n.unobserve(e.target), o(e.target))
                })
            }, {
                rootMargin: "".concat(t, " 0%")
            })
        };
    window.addEventListener("load", function () {
        r.forEach(function (e) {
            window.requestIdleCallback(function () {
                a.background.unobserve(e), o(e)
            })
        }), i = !0, r = []
    }), e.exports = {
        background: function (e) {
            if (window.requestIdleCallback) {
                if (i) return void o(e);
                r.push(e)
            }
            a.background.observe(e)
        }
    }
}, function (e, n) {
    "use strict";
    e.exports = function () {
        window.vctElements--, window.performance && window._trfd && !window.VISUAL_COMPLETE && !window.vctElements && (window.VISUAL_COMPLETE = window.performance.now(), window._trfd.push({
            vct: window.VISUAL_COMPLETE
        }))
    }
}]);