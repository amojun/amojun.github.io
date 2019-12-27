!function (e)
{
    var t = {};
    function n(r)
    {
        if (t[r]) return t[r].exports;
        var o = t[r] = { i: r, l: !1, exports: {} };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r }) }, n.n = function (e)
    {
        var t = e && e.__esModule ? function ()
        {
            return e.default
} :
        function ()
        {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 58)
}([function (e, t)
         {
             e.exports = React
         }, function (e, t)
{
    e.exports = PropTypes
}, function (e, t)
{
    e.exports = Core
}, function (e, t, n)
{
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
var r, o = n(135), i = (r = o) && r.__esModule ? r : { default:
                               r
                                                             };
    t.default = (0, i.default)({ RSS_SECTION_BACKGROUND: null, RSS_SECTION_TITLE_RENDERED: null, RSS_SECTION_INTRO_RENDERED: null, RSS_SCROLL_LEFT_ARROW: null, RSS_SCROLL_RIGHT_ARROW: null, RSS_FEEDS_RENDERED: null, RSS_CAROUSEL_COUNTER: null, RSS_FEED_RENDERED: null, RSS_FEED_CATEGORIES_RENDERED: null, RSS_FEED_CATEGORY_RENDERED: null, RSS_FEED_POST_DATE_RENDERED: null, RSS_FEED_POST_CATEGORIES_RENDERED: null, RSS_FEED_POST_SEPARATOR_RENDERED: null, RSS_FEED_POST_CONTENT_RENDERED: null, RSS_NO_POSTS: null, RSS_READ_MORE: null, RSS_BLOG_CTA_RENDERED: null, RSS_BTN_CTA_RENDERED: null, RSS_VIEWPOST_SIDEBAR: null, RSS_VIEWPOST_EMAIL: null, RSS_POST_DATE: null, RSS_POST_CATEGORIES: null, RSS_SOCIAL_SHARE_TOP_FACEBOOK: null, RSS_SOCIAL_SHARE_TOP_TWITTER: null, RSS_SOCIAL_SHARE_BOTTOM_FACEBOOK: null, RSS_SOCIAL_SHARE_BOTTOM_TWITTER: null }), e.exports = t.default
}, function (e, t)
{
    e.exports = function (e)
    {
        return null != e && "object" == typeof e
    }
}, function (e, t)
{
    e.exports = function (e)
    {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function (e, t, n)
{
    var r = n(19), o = n(68), i = n(69), a = "[object Null]", u = "[object Undefined]", l = r ? r.toStringTag : void 0;
    e.exports = function (e)
    {
        return null == e ? void 0 === e ? u : a : l && l in Object(e) ? o(e) : i(e)
    }
}, function (e, t, n)
{
    var r = n(30), o = "object" == typeof self && self && self.Object === Object && self, i = r || o || Function("return this")();
    e.exports = i
}, function (e, t, n)
{
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.FRIENDLY_URL_PATH = void 0, t.getPagePath = function () { var e = new URL(window.location.href); e.searchParams.delete(r.SLUG_PARAM); var t = a(e.pathname); t > -1 && (e.pathname = e.pathname.substr(0, t)); return e.toString() }, t.buildPostPath = function (e, t, n)
    {
        if (n) return n;
        var a = new URL(window.location.href);
        if (a.searchParams.delete(r.ALL_POSTS_PARAM), a.searchParams.delete(r.SLUG_PARAM), t) a.pathname = (t + "/" + o + "/" + e).replace(/\/ {2,}/g, "/");
        else
        {
            for (var u = [o, i], l = 0; l < u.length; l++)
            {
                var s = u[l], c = a.pathname.indexOf("/" + s + "/");
                if (c > -1)
                {
                    a.pathname = a.pathname.substr(0, c);
                    break
                }
            }
            a.pathname = (a.pathname + "/" + o + "/" + e).replace(/\/ {2,}/g, "/")
        }
        return a.toString()
    }, t.pathContainsFriendlySlug = function () { return window.location && window.location.pathname && window.location.pathname.includes("/" + o + "/") }, t.getFriendlySlug = function () { if (window && window._BLOG_DATA && window._BLOG_DATA.post) return window._BLOG_DATA.post.slug; var e = window.location.pathname; return e.substr(a(e) + ("/" + o + "/").length) }, t.getSearchParam = u, t.updateSearchParam = l, t.getSlugParam = function () { return u(r.SLUG_PARAM) }, t.setSlugParam = s, t.getAllPostsParam = function () { return !!u(r.ALL_POSTS_PARAM) }, t.setAllPostsParam = function ()
    {
        return s(null, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href)
    };
    var r = n(12), o = t.FRIENDLY_URL_PATH = "f", i = "ola/services";
    function a(e)
    {
        return e.indexOf("/" + o + "/")
    }
    function u(e)
    {
        return new URLSearchParams(window.location.search).get(e)
    }
    function l(e, t)
    {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.location.href, r = new URL(n);
        return t ? r.searchParams.set(e, t) : r.searchParams.delete(e), r.toString()
    }
    function s(e)
    {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href, n = l(r.SLUG_PARAM, e, t), o = e ? null : r.ALL_POSTS_VALUE;
        return l(r.ALL_POSTS_PARAM, o, n)
    }
}, function (e, t, n)
{ "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.filterFeedByCategory = void 0, t.getAllCategories = function (e)
    {
        return e.reduce(function (e, t)
        {
            var n = t.categories;
            return n && n.length && n.forEach(function (t)
            {
                t && !e.includes(t) && e.push(t)
            }), e
        }, []).sort()
    }, t.getCategoryParam = function () { return (0, o.getSearchParam)(r.CATEGORY_PARAM) }, t.setCategoryParam = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, o.getPagePath)(); return (0, o.updateSearchParam)(r.CATEGORY_PARAM, e, t) }, t.hasCategories = function (e)
    {
        return !(!e || !e.length)
    };
    var r = n(12), o = n(8);
    t.filterFeedByCategory = function (e, t)
    {
        return t ? e.filter(function (e)
        {
            var n = e.categories;
            return n && n.includes(t)
        }) : e
    }
}, function (e, t)
{
    var n = Array.isArray;
    e.exports = n
}, function (e, t)
{
    e.exports = function (e, t)
    {
        return e === t || e != e && t != t
    }
}, function (e, t, n)
{ "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.INTERNAL = "internal", t.EXTERNAL = "external", t.SLUG_PARAM = "blogpost", t.CATEGORY_PARAM = "blogcategory", t.ALL_POSTS_PARAM = "blog", t.ALL_POSTS_VALUE = "y"
}, function (e, t, n)
{
    var r = n(20)(Object, "create");
    e.exports = r
}, function (e, t, n)
{
    var r = n(85), o = n(86), i = n(87), a = n(88), u = n(89);
    function l(e)
    {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;)
        {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    l.prototype.clear = r, l.prototype.delete = o, l.prototype.get = i, l.prototype.has = a, l.prototype.set = u, e.exports = l
}, function (e, t, n)
{
    var r = n(11);
    e.exports = function (e, t)
    {
        for (var n = e.length; n--;)if (r(e[n][0], t)) return n;
        return -1
    }
}, function (e, t, n)
{
    var r = n(91);
    e.exports = function (e, t)
    {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    }
}, function (e, t, n)
{
    var r = n(21), o = n(39);
    e.exports = function (e)
    {
        return null != e && o(e.length) && !r(e)
    }
}, function (e, t, n)
{
    var r = n(6), o = n(4), i = "[object Symbol]";
    e.exports = function (e)
    {
        return "symbol" == typeof e || o(e) && r(e) == i
    }
}, function (e, t, n)
{
    var r = n(7).Symbol;
    e.exports = r
}, function (e, t, n)
{
    var r = n(76), o = n(80);
    e.exports = function (e, t)
    {
        var n = o(e, t);
        return r(n) ? n : void 0
    }
}, function (e, t, n)
{
    var r = n(6), o = n(5), i = "[object AsyncFunction]", a = "[object Function]", u = "[object GeneratorFunction]", l = "[object Proxy]";
    e.exports = function (e)
    {
        if (!o(e)) return !1;
        var t = r(e);
        return t == a || t == u || t == i || t == l
    }
}, function (e, t, n)
{
    var r = n(95);
    e.exports = function (e)
    {
        return null == e ? "" : r(e)
    }
}, function (e, t, n)
{
    var r = n(35);
    e.exports = function (e, t, n)
    { "__proto__" == t && r ? r(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : e[t] = n
    }
}, function (e, t)
{
    e.exports = function (e)
    {
        return e.webpackPolyfill || (e.deprecate = function () { }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function ()
        {
            return e.l
        }
                                                                                                                                                      }), Object.defineProperty(e, "id", { enumerable: !0, get: function ()
        {
            return e.i
        }
                                                                                                                                                                                         }), e.webpackPolyfill = 1), e
    }
}, function (e, t)
{
    var n = Object.prototype;
    e.exports = function (e)
    {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || n)
    }
}, function (e, t, n)
{
    var r = n(45), o = n(124), i = n(17);
    e.exports = function (e)
    {
        return i(e) ? r(e, !0) : o(e)
    }
}, function (e, t, n)
{ "use strict";
    e.exports = { formatDate:
                  function ()
    {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US", t = arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "long";
        if (!t || !t.endsWith("Z")) return t;
        var r = { year: "numeric", month: n, day: "numeric" };
        return new Intl.DateTimeFormat(e, r).format(new Date(t))
    }
                }
}, function (e, t, n)
{ "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.existsAndIsSame = function (e, t, n)
    {
        return n.every(function (n)
        {
            return (t[n] || e[n]) && t[n] === e[n]
        })
    }, t.isSame = function (e, t, n)
    {
        return n.every(function (n)
        {
            return t[n] === e[n]
        })
    }
}, function (e, t, n)
{
    var r = n(64);
    e.exports = function (e, t, n)
    {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o
    }
}, function (e, t, n)
{
    (function (t)
    {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n
    }).call(t, n(67))
}, function (e, t, n)
{
    var r = n(73), o = n(90), i = n(92), a = n(93), u = n(94);
    function l(e)
    {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;)
        {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    l.prototype.clear = r, l.prototype.delete = o, l.prototype.get = i, l.prototype.has = a, l.prototype.set = u, e.exports = l
}, function (e, t, n)
{
    var r = n(20)(n(7), "Map");
    e.exports = r
}, function (e, t)
{
    e.exports = function (e, t)
    {
        for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;)o[n] = t(e[n], n, e);
        return o
    }
}, function (e, t, n)
{
    var r = n(23), o = n(11);
    e.exports = function (e, t, n)
    {
        (void 0 === n || o(e[t], n)) && (void 0 !== n || t in e) || r(e, t, n)
    }
}, function (e, t, n)
{
    var r = n(20), o = function ()
    {
        try
        {
            var e = r(Object, "defineProperty");
            return e({}, "", {}), e
        }
        catch (e) { }
    }();
    e.exports = o
}, function (e, t, n)
{
    var r = n(37)(Object.getPrototypeOf, Object);
    e.exports = r
}, function (e, t)
{
    e.exports = function (e, t)
    {
        return function (n)
        {
            return e(t(n))
        }
    }
}, function (e, t, n)
{
    var r = n(115), o = n(4), i = Object.prototype, a = i.hasOwnProperty, u = i.propertyIsEnumerable, l = r(function ()
    {
        return arguments
    }()) ? r : function (e)
    {
        return o(e) && a.call(e, "callee") && !u.call(e, "callee")
    };
    e.exports = l
}, function (e, t)
{
    var n = 9007199254740991;
    e.exports = function (e)
    {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
    }
}, function (e, t, n)
{
    (function (e)
    {
        var r = n(7), o = n(117), i = "object" == typeof t && t && !t.nodeType && t, a = i && "object" == typeof e && e && !e.nodeType && e, u = a && a.exports === i ? r.Buffer : void 0, l = (u ? u.isBuffer : void 0) || o;
        e.exports = l
    }).call(t, n(24)(e))
}, function (e, t, n)
{
    var r = n(6), o = n(36), i = n(4), a = "[object Object]", u = Function.prototype, l = Object.prototype, s = u.toString, c = l.hasOwnProperty, f = s.call(Object);
    e.exports = function (e)
    {
        if (!i(e) || r(e) != a) return !1;
        var t = o(e);
        if (null === t) return !0;
        var n = c.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == f
    }
}, function (e, t, n)
{
    var r = n(118), o = n(119), i = n(120), a = i && i.isTypedArray, u = a ? o(a) : r;
    e.exports = u
}, function (e, t)
{
    e.exports = function (e, t)
    {
        if ("__proto__" != t) return e[t]
        }
}, function (e, t, n)
{
    var r = n(122), o = n(23);
    e.exports = function (e, t, n, i)
    {
        var a = !n;
        n || (n = {});
        for (var u = -1, l = t.length; ++u < l;)
        {
            var s = t[u], c = i ? i(n[s], e[s], s, n, e) : void 0;
            void 0 === c && (c = e[s]), a ? o(n, s, c) : r(n, s, c)
        }
        return n
    }
}, function (e, t, n)
{
    var r = n(123), o = n(38), i = n(10), a = n(40), u = n(46), l = n(42), s = Object.prototype.hasOwnProperty;
    e.exports = function (e, t)
    {
        var n = i(e), c = !n && o(e), f = !n && !c && a(e), d = !n && !c && !f && l(e), p = n || c || f || d, g = p ? r(e.length, String) : [], y = g.length;
        for (var h in e) !t && !s.call(e, h) || p && ("length" == h || f && ("offset" == h || "parent" == h) || d && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || u(h, y)) || g.push(h);
        return g
    }
}, function (e, t)
{
    var n = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
    e.exports = function (e, t)
    {
        var o = typeof e;
        return !!(t = null == t ? n : t) && ("number" == o || "symbol" != o && r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, function (e, t, n)
{
    var r = n(48), o = n(51);
    e.exports = function (e)
    {
        return r(function (t, n)
        {
            var r = -1, i = n.length, a = i > 1 ? n[i - 1] : void 0, u = i > 2 ? n[2] : void 0;
            for (a = e.length > 3 && "function" == typeof a ? (i--, a) : void 0, u && o(n[0], n[1], u) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++r < i;)
            {
                var l = n[r];
                l && e(t, l, r, a)
            }
            return t
        })
    }
}, function (e, t, n)
{
    var r = n(49), o = n(126), i = n(127);
    e.exports = function (e, t)
    {
        return i(o(e, t, r), e + "")
    }
}, function (e, t)
{
    e.exports = function (e)
    {
        return e
    }
}, function (e, t)
{
    e.exports = function (e, t, n)
    {
        switch (n.length)
        {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
}, function (e, t, n)
{
    var r = n(11), o = n(17), i = n(46), a = n(5);
    e.exports = function (e, t, n)
    {
        if (!a(n)) return !1;
        var u = typeof t;
        return !!("number" == u ? o(n) && i(t, n.length) : "string" == u && t in n) && r(n[t], e)
    }
}, function (e, t, n)
{ "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = u(n(131)), o = u(n(132)), i = u(n(133)), a = u(n(134));
    function u(e)
    {
    return e && e.__esModule ? e : { default:
                                             e
                                           }
        }
    t.default = { local: r.default, development: o.default, test: i.default, production: a.default }, e.exports = t.default
}, function (e, t, n)
{ "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = /mobile/i;
    t.feedUrlValidationRegex = "^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,18})+", t.convertViewDevice = function (e)
    {
        return r.test(e) ? "mobile" : "tablet"
    }
}, function (e, t, n)
{ "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t) { if (!t) return e; var n = e.endsWith("/") ? "" : "/", r = e.indexOf("/:/") >= 0 ? "" : ":/"; return "" + e + n + r + t }, e.exports = t.default
}, function (e, t, n)
{ "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = Object.assign || function (e)
    {
        for (var t = 1; t < arguments.length; t++)
        {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
        return e
    }, o = function ()
    {
        function e(e, t)
        {
            for (var n = 0; n < t.length; n++)
            {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r)
        {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), i = n(0), a = f(i), u = f(n(1)), l = n(2), s = f(n(3)), c = n(9);
    function f(e)
    {
    return e && e.__esModule ? e : { default:
                                             e
                                           }
        }
    var d = function (e)
    {
        function t()
        {
            !function (e, t)
            {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
            var e = function (e, t)
            {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            return e.renderCategory = e.renderCategory.bind(e), e
        }
        return function (e, t)
        {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, i.Component), o(t, null, [ { key: "propTypes", get: function ()
          {
              return { categories: u.default.array.isRequired, categoryClickHandler: u.default.func.isRequired, selectedCategory: u.default.string, staticContent: u.default.object, styles: u.default.shape({ container: u.default.object, link: u.default.object }) }
          }
                                        }]), o(t, [ { key: "onCategoryClick", value: function (e, t)
        {
            t.preventDefault(), this.props.categoryClickHandler(e)
        }
                                                    }, { key: "renderCategory", value: function (e, t)
        {
            var n = this.props, o = n.selectedCategory, i = n.staticContent, u = n.styles, f = void 0 === u ? {} :
                                    u, d = !e, p = d && !o || e === o, g = d ? i.allPosts : e, y = r({ marginHorizontal: "0.5rem", marginBottom: "0.5rem", textTransform: "uppercase", textDecoration: p ? "underline" : "none", "@md": { marginHorizontal: "1rem" } }, f.link || {});
            return a.default.createElement(l.UX2.Element.Link, { key: e, "data-aid": s.default.RSS_FEED_CATEGORY_RENDERED + "_" + t, style: y, href: (0, c.setCategoryParam)(e), onClick: this.onCategoryClick.bind(this, e) }, g)
        }
                                                       }, { key: "render", value: function ()
        {
            var e = this.props, t = e.categories, n = e.styles, o = void 0 === n ? {} :
                                    n, i = t.length ? [""].concat(t) : [], u = r({ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", alignContent: "center" }, o.container || {});
            return a.default.createElement(l.UX2.Group.Group, { "data-aid": s.default.RSS_FEED_CATEGORIES_RENDERED, style: u }, i.map(this.renderCategory))
        }
                                                          }]), t
    }();
    t.default = d, e.exports = t.default
}, function (e, t, n)
{
    var r = n(6), o = n(4), i = n(41), a = "[object DOMException]", u = "[object Error]";
    e.exports = function (e)
    {
        if (!o(e)) return !1;
        var t = r(e);
        return t == u || t == a || "string" == typeof e.message && "string" == typeof e.name && !i(e)
    }
}, function (e, t)
{
    e.exports = /<%=([\s\S]+?)%>/g
}, function (e, t, n)
{ "use strict";
    window.wsb = window.wsb || {}, window.wsb.BlogRouter = n(59)
}, function (e, t, n)
{ "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n(60)), o = i(n(62));
    function i(e)
    {
    return e && e.__esModule ? e : { default:
                                             e
                                           }
        }
    var a = function (e)
    {
        function t()
        {
            !function (e, t)
            {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
            var e = function (e, t)
            {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            return e.RssFeeds = o.default, e.imgParams = "rs=w:200", e
        }
        return function (e, t)
        {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, r.default), t
    }();
    t.default = a, e.exports = t.default
}, function (e, t, n)
{ "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = Object.assign || function (e)
    {
        for (var t = 1; t < arguments.length; t++)
        {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
        return e
    }, o = function ()
    {
        function e(e, t)
        {
            for (var n = 0; n < t.length; n++)
            {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r)
        {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), i = n(0), a = p(i), u = p(n(1)), l = n(12), s = n(8), c = n(9), f = n(28), d = p(n(61));
    function p(e)
    {
    return e && e.__esModule ? e : { default:
                                             e
                                           }
        }
    var g = function () { return "undefined" == typeof window }, y = function (e)
    {
        function t()
        {
            !function (e, t)
            {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
            var e = function (e, t)
            {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            return e.state = {}, e.filterCategory = e.filterCategory.bind(e), e.navigate = e.navigate.bind(e), e.updateStateFromLocation = e.updateStateFromLocation.bind(e), e.getContainerNode = e.getContainerNode.bind(e), e.scrollIntoView = e.scrollIntoView.bind(e), e
        }
        return function (e, t)
        {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, i.Component), o(t, null, [ { key: "propTypes", get: function ()
          {
              return { env: u.default.string, websiteId: u.default.string.isRequired, pageId: u.default.string, locale: u.default.string, section: u.default.string, category: u.default.string, renderMode: u.default.string.isRequired, viewDevice: u.default.string.isRequired, id: u.default.string, rssFeed: u.default.string, categoriesFilter: u.default.array, blogType: u.default.string.isRequired, layout: u.default.string.isRequired, staticContent: u.default.object.isRequired, backgroundImage: u.default.string, visitorMode: u.default.bool.isRequired, detachedMode: u.default.bool.isRequired, currentPageRoute: u.default.string }
          }
                                        }]), o(t, [ { key: "getContainerNode", value: function ()
        {
            return document.getElementById(this.props.id)
        }
                                                    }, { key: "scrollIntoView", value: function (e)
        {
            this.shouldScrollIntoView(e) && this.scrollTracker.startTracking()
        }
                                                       }, { key: "shouldScrollIntoView", value: function (e)
        {
            if ("PUBLISH" !== this.props.renderMode) return !1;
            var t = e || this.state, n = t.slug, r = t.selectedCategory, o = window.location.hash, i = (0, s.getAllPostsParam)();
            return !!(n || r || i || o)
        }
                                                          }, { key: "componentDidMount", value: function ()
        {
            var e = { slug: this.getSlug(), selectedCategory: this.getSelectedCategory() };
            e.slug ? this.setState(r({}, e, { previousScrollPosition: window.scrollY })) : e.selectedCategory && this.setState(e), this.scrollIntoView(e), window.addEventListener("popstate", this.updateStateFromLocation), "PUBLISH" !== this.props.renderMode && window.addEventListener("blog-navigate", this.updateStateFromLocation)
        }
                                                             }, { key: "componentWillUnmount", value: function ()
        {
            window.removeEventListener("popstate", this.updateStateFromLocation), window.removeEventListener("blog-navigate", this.updateStateFromLocation)
        }
                                                                }, { key: "componentDidUpdate", value: function (e)
        {
            this.props.renderMode !== e.renderMode && this.updateStateFromLocation()
        }
                                                                   }, { key: "shouldComponentUpdate", value: function (e, t)
        {
            return this.props.blogType !== e.blogType || e.blogType !== l.INTERNAL || "EDIT" === e.renderMode || !(0, f.existsAndIsSame)(this.state, t, ["slug"]) || !(0, f.isSame)(this.state, t, ["selectedCategory"])
        }
                                                                      }, { key: "updateStateFromLocation", value: function ()
        {
            this.setState({ slug: this.getSlug(), selectedCategory: this.getSelectedCategory() })
        }
                                                                         }, { key: "getSlug", value: function ()
        {
            if (!g()) return "PUBLISH" === this.props.renderMode && (0, s.pathContainsFriendlySlug)() ? (0, s.getFriendlySlug)() : (0, s.getSlugParam)()
            }
                                                                            }, { key: "getSelectedCategory", value: function ()
        {
            if (!g()) return (0, c.getCategoryParam)()
            }
                                                                               }, { key: "generateNavigateEvent", value: function ()
        {
            if (window.Event.prototype.initEvent)
            {
                var e = document.createEvent("Event");
                return e.initEvent("blog-navigate", !0, !0), e
            }
            return new window.Event("blog-navigate")
        }
                                                                                  }, { key: "goToUrl", value: function (e)
        {
            e && !g() && e !== window.location.href && ("PUBLISH" === this.props.renderMode ? window.location.assign(e) : (window.history.pushState({}, null, e), window.dispatchEvent(this.generateNavigateEvent())))
        }
                                                                                     }, { key: "filterCategory", value: function (e)
        {
            var t = this.getSelectedCategory(), n = (0, c.setCategoryParam)(e);
            e || (n = (0, s.setAllPostsParam)(n)), t === e && null !== e || this.goToUrl(n)
        }
                                                                                        }, { key: "navigate", value: function (e)
        {
            if (!g())
            {
                var t = this.props, n = t.renderMode, r = t.currentPageRoute, o = void 0;
                o = "PUBLISH" === n ? e ? (0, s.buildPostPath)(e, r) : (0, s.setAllPostsParam)((0, s.getPagePath)()) : (0, s.setSlugParam)(e), this.goToUrl(o)
            }
        }
                                                                                           }, { key: "render", value: function ()
        {
            var e = this;
            return a.default.createElement(d.default, { ref: function (t)
            {
                e.scrollTracker = t
            }, getTarget: this.getContainerNode
                                                      }, a.default.createElement(this.RssFeeds, r({ slug: this.state.slug || "", navigate: this.navigate, imgParams: this.imgParams, filterCategory: this.filterCategory, selectedCategory: this.state.selectedCategory || "", onFeedLoaded: this.scrollIntoView }, this.props)))
        }
                                                                                              }]), t
    }();
    t.default = y, e.exports = t.default
}, function (e, t, n)
{ "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function ()
    {
        function e(e, t)
        {
            for (var n = 0; n < t.length; n++)
            {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r)
        {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), o = n(0), i = u(o), a = u(n(1));
    function u(e)
    {
    return e && e.__esModule ? e : { default:
                                             e
                                           }
        }
    var l = function (e)
    {
        function t(e)
        {
            !function (e, t)
            {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
            var n = function (e, t)
            {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.requestScrollFrame = n.requestScrollFrame.bind(n), n.startTracking = n.startTracking.bind(n), n.onScroll = n.onScroll.bind(n), n.scrolling = !1, n.scrolledTimes = 0, n.lastScrollHeight = 0, n
        }
        return function (e, t)
        {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), r(t, null, [ { key: "propTypes", get: function ()
          {
              return { getTarget: a.default.func.isRequired, children: a.default.node }
          }
                                        }]), r(t, [ { key: "componentWillUnmount", value: function ()
        {
            window.removeEventListener("scroll", this.onScroll)
        }
                                                    }, { key: "startTracking", value: function ()
        {
            window.addEventListener("scroll", this.onScroll), this.requestScrollFrame()
        }
                                                       }, { key: "isScrollingNode", value: function ()
        {
            var e = (0, this.props.getTarget)();
            return void 0 === window.scrollingNode && (window.scrollingNode = e), window.scrollingNode === e
        }
                                                          }, { key: "onScroll", value: function ()
        {
            this.scrolling ? this.scrolling = !1 : (this.scrolledTimes++, this.scrolledTimes > t.USER_SCROLL_THROTTLE && window.removeEventListener("scroll", this.onScroll))
        }
                                                             }, { key: "requestScrollFrame", value: function ()
        {
            var e = this.props.getTarget, n = document.documentElement.scrollHeight;
            if (document.scrollingElement)
            {
                var r = document.scrollingElement.scrollTop, o = e(), i = o;
        if (/^#post-\d+$/.test(window.location.hash) && (i = o.querySelector("#disqus_thread") || o), this.scrolledTimes <= t.USER_SCROLL_THROTTLE && this.isScrollingNode()) { if (this.lastScrollHeight !== n) { this.scrolling = !0; var a = Math.floor(i.getBoundingClientRect().top); document.scrollingElement.scrollTop = r + a, this.lastScrollHeight = n } requestAnimationFrame(this.requestScrollFrame) } } } }, { key: "render", value: function () { var e = this.props.children; return i.default.createElement("div", null, e) } }]), t }(); l.USER_SCROLL_THROTTLE = 5, t.default = l, e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = i(n(63)), o = i(n(161)); function i(e) { return e && e.__esModule ? e : { default: e } } var a = function (e) { function t() { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var e = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)); return e.cardGroupComponent = o.default, e } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, r.default), t }(); t.default = a, e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, o = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(), i = n(0), a = b(i), u = n(1), l = b(n(29)), s = b(n(97)), c = n(2), f = b(n(52)), d = n(53), p = b(n(3)), g = b(n(136)), y = n(9), h = n(28), v = n(12), m = n(160); function b(e) { return e && e.__esModule ? e : { default: e } } var _ = function (e) { function t() { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var e = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)); return e.regex = new RegExp(d.feedUrlValidationRegex, "i"), e.state = { feed: [], categories: [], blogType: e.props.blogType, feedURL: e.props.rssFeed, categoriesFilter: e.props.categoriesFilter, feedLoading: !0, postLoading: !1, unfetchableFeed: !1 }, e } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, i.Component), o(t, null, [{ key: "propTypes", get: function () { return { env: u.PropTypes.string, appDomain: u.PropTypes.string, websiteId: u.PropTypes.string.isRequired, pageId: u.PropTypes.string, locale: u.PropTypes.string, section: u.PropTypes.string, category: u.PropTypes.string, renderMode: u.PropTypes.string.isRequired, viewDevice: u.PropTypes.string.isRequired, id: u.PropTypes.string, rssFeed: u.PropTypes.string, categoriesFilter: u.PropTypes.array, blogType: u.PropTypes.string.isRequired, layout: u.PropTypes.string.isRequired, staticContent: u.PropTypes.object.isRequired, backgroundImage: u.PropTypes.string, visitorMode: u.PropTypes.bool.isRequired, detachedMode: u.PropTypes.bool.isRequired, slug: u.PropTypes.string, navigate: u.PropTypes.func, imgParams: u.PropTypes.string, filterCategory: u.PropTypes.func, selectedCategory: u.PropTypes.string, onFeedLoaded: u.PropTypes.func, currentPageRoute: u.PropTypes.string } } }]), o(t, [{ key: "componentDidMount", value: function () { "undefined" == typeof window || (0, l.default)(window, "wsb.cache.blog") || (0, s.default)(window, { wsb: { cache: { blog: {} } } }), this._isMounted = !0; var e = this.props, t = e.blogType, n = e.slug; t === v.INTERNAL && n && this.getPost(this.props, n), this.getFeed() } }, { key: "shouldComponentUpdate", value: function (e, t) { return this.props.blogType !== e.blogType || e.blogType !== v.INTERNAL || "EDIT" === e.renderMode || !(0, h.existsAndIsSame)(this.props, e, ["slug"]) || !(0, h.isSame)(this.state, t, ["post", "feed", "selectedCategory"]) } }, { key: "componentDidUpdate", value: function (e) { var t = this.props, n = t.blogType, r = t.slug, o = t.rssFeed, i = t.categoriesFilter; n === v.INTERNAL ? r && r !== e.slug ? this.getPost(this.props, r) : (!r && e.slug || e.categoriesFilter !== i) && this.getFeed() : n === e.blogType && o === e.rssFeed || this.getFeed(), this.checkSettings(this.props) } }, { key: "checkSettings", value: function (e) { var t = !1, n = e.blogType, r = e.rssFeed, o = e.categoriesFilter; n !== this.state.blogType && (this.setState({ blogType: e.blogType }), t = !0), r !== this.state.feedURL && (this.setState({ feedURL: r }), t = !0), o !== this.state.categoriesFilter && (this.setState({ categoriesFilter: o }), t = !0), t && this.getFeed() } }, { key: "getFeed", value: function () { this.getDataFromApi(this.getApiFeedUrl(this.props)) } }, { key: "getPost", value: function (e, t) { if (t) if (window._BLOG_DATA && window._BLOG_DATA.post) this.setState({ post: window._BLOG_DATA.post, postLoading: !1 }); else { this.setState({ post: null, postLoading: !0 }); var n = e.env, r = e.websiteId, o = (f.default && f.default[n] || {}).blogDomain + "/v1/website/" + r + "/feed/post/" + t; this.getDataFromApi(o, t) } } }, { key: "componentWillUnmount", value: function () { this._isMounted = !1 } }, { key: "getApiFeedUrl", value: function (e) { var t = e.env, n = e.websiteId, r = e.pageId, o = e.id, i = e.locale, a = e.blogType, u = e.rssFeed, l = e.categoriesFilter, s = e.renderMode, c = void 0, d = {}, p = f.default && f.default[t] || {}, g = p.blogDomain, y = p.rssDomain; if (a === v.INTERNAL && "DISPLAY" !== s) { c = g + "/v1/website/" + n + "/feed", "ADD" === s && "en-US" === i && (d.source = "editorAdd"), l && l.length && (d.categories = l.join(",")); var h = Object.keys(d).map(function (e) { return e + "=" + d[e] }).join("&"); c = h ? c + "?" + h : c } else { if (!this.regex.test(u)) return void this.setState({ feedLoading: !1, feed: [], categories: [] }); c = y + "/v1/feed/" + n + "/" + r + "/" + o + "?feedUrl=" + encodeURIComponent(u) + "&locale=" + i } return c } }, { key: "getDataFromApi", value: function (e, t) { var n = this; this._isMounted && e && this.getPromise(e).then(function (r) { t && e.indexOf(t) > -1 ? n.setState({ slug: t, post: r, postLoading: !1 }) : n.setState({ feed: r, categories: (0, y.getAllCategories)(r), feedLoading: !1 }, n.props.onFeedLoaded) }).catch(function () { t && e.indexOf(t) > -1 ? n.setState({ unfetchableFeed: !0, slug: t, post: {}, postLoading: !1 }) : n.setState({ unfetchableFeed: !0, feed: [], categories: [], feedLoading: !1 }) }) } }, { key: "retrievePromise", value: function (e, t) { if ("undefined" != typeof window && (window.wsb.cache.blog.hasOwnProperty(e) && t <= window.wsb.cache.blog[e].time + 600)) return window.wsb.cache.blog[e].promise; return null } }, { key: "getPromise", value: function (e) { var t = Math.floor((new Date).getTime() / 1e3), n = this.retrievePromise(e, t); if (n) return n; var r = new Promise(function (t, n) { var r = new XMLHttpRequest; r.open("GET", e, !0), r.send(), r.onreadystatechange = function () { if (4 === r.readyState) if (200 === r.status || 304 === r.status) { var e = JSON.parse(r.responseText); t(e.feed || e.post) } else n() } }); return "undefined" != typeof window && (window.wsb.cache.blog[e] = { promise: r, time: t }), r } }, { key: "renderEditorPlaceholderMessage", value: function () { var e = this.props, t = e.section, n = e.category, r = e.staticContent, o = e.appDomain, i = e.websiteId; return a.default.createElement(c.components.WidgetPlaceholder, { buttonDataAid: p.default.RSS_BTN_CTA_RENDERED, buttonLabel: r.edit_mode_cta.btn_label, buttonClass: m.AB_BLOG_WIDGET_SETUP_BUTTON, category: n, containerDataAid: p.default.RSS_BLOG_CTA_RENDERED, href: "https://blogging." + o + "/website/" + i, section: t, subtitle: r.edit_mode_cta.sub_title, title: r.edit_mode_cta.title, titleClass: m.AB_BLOG_WIDGET_SETUP_TITLE, subTitleClass: m.AB_BLOG_WIDGET_SETUP_SUBTITLE, trafficId: "pandc.vnext.edit_site.rss_widget.start_writing.click", windowWidth: this.state.windowWidth }) } }, { key: "renderPlaceholderMessage", value: function () { var e = this.props, t = e.visitorMode, n = e.staticContent, o = e.category, i = e.section, u = e.backgroundImage, l = n.noPosts, s = n.feedNotFetchable, f = this.state.unfetchableFeed && !t ? s : l, d = { category: u ? "accent" : o, section: u ? "overlay" : i }; return a.default.createElement(c.UX2.Group.Card, r({}, d, { style: { display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "auto", paddingVertical: "medium", paddingHorizontal: "medium", margin: "0 auto", "@sm": { width: "400px" } } }), a.default.createElement(c.UX2.Element.Text, { "data-aid": p.default.RSS_NO_POSTS, style: { maxWidth: "100%", textAlign: "center", margin: "0", fontSize: "large", fontColor: "highContrast" } }, f)) } }, { key: "renderLoadingAnimation", value: function () { var e = r({ position: "relative" }, this.extraLoadingContainerStyles && this.extraLoadingContainerStyles); return a.default.createElement(c.UX2.Element.Block, { style: e }, a.default.createElement(c.UX2.Element.Loader, { size: "medium", style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", paddingTop: "medium", fontColor: "lowContrast" } })) } }, { key: "renderPost", value: function () { var e = this.props, t = e.env, n = e.locale, r = e.navigate, o = e.renderMode, i = e.viewDevice, u = e.staticContent, l = e.websiteId, s = e.filterCategory, c = e.selectedCategory, f = e.currentPageRoute, d = this.state, p = d.post, y = d.feed, h = d.categories; return a.default.createElement(g.default, { post: p, locale: n, feed: y, staticContent: u, backClickHandler: r, viewDevice: i, renderMode: o, websiteId: l, env: t, categoryClickHandler: s, categories: h, selectedCategory: c, currentPageRoute: f }) } }, { key: "renderFeed", value: function () { var e = this.props, t = e.locale, n = e.section, r = e.category, o = e.renderMode, i = e.viewDevice, u = e.detachedMode, l = e.staticContent, s = e.backgroundImage, c = e.blogType, f = e.navigate, d = e.filterCategory, p = e.selectedCategory, g = e.currentPageRoute, h = c === v.INTERNAL && "DISPLAY" === o ? "" : this.props.imgParams; return a.default.createElement(this.cardGroupComponent, { locale: t, feeds: (0, y.filterFeedByCategory)(this.state.feed, p), viewDevice: i, renderMode: o, section: n, category: r, detachedMode: u, staticContent: l, backgroundImage: s, imgParams: h, blogType: c, cardClickHandler: c === v.INTERNAL ? f : void 0, categoryClickHandler: d, categories: this.state.categories, selectedCategory: p, currentPageRoute: g }) } }, { key: "render", value: function () { var e = this.props, t = e.renderMode, n = e.blogType, r = e.slug, o = this.state, i = o.feed, a = o.postLoading, u = o.feedLoading; return a || u ? this.renderLoadingAnimation() : window._BLOG_DATA || r && r.length > 0 ? this.renderPost() : i.length > 0 ? this.renderFeed() : n === v.INTERNAL && "EDIT" === t ? this.renderEditorPlaceholderMessage() : this.renderPlaceholderMessage() } }]), t }(); t.default = _, e.exports = t.default }, function (e, t, n) { var r = n(65), o = n(96); e.exports = function (e, t) { for (var n = 0, i = (t = r(t, e)).length; null != e && n < i;)e = e[o(t[n++])]; return n && n == i ? e : void 0 } }, function (e, t, n) { var r = n(10), o = n(66), i = n(70), a = n(22); e.exports = function (e, t) { return r(e) ? e : o(e, t) ? [e] : i(a(e)) } }, function (e, t, n) { var r = n(10), o = n(18), i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/; e.exports = function (e, t) { if (r(e)) return !1; var n = typeof e; return !("number" != n && "symbol" != n && "boolean" != n && null != e && !o(e)) || a.test(e) || !i.test(e) || null != t && e in Object(t) } }, function (e, t) { var n; n = function () { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (n = window) } e.exports = n }, function (e, t, n) { var r = n(19), o = Object.prototype, i = o.hasOwnProperty, a = o.toString, u = r ? r.toStringTag : void 0; e.exports = function (e) { var t = i.call(e, u), n = e[u]; try { e[u] = void 0; var r = !0 } catch (e) { } var o = a.call(e); return r && (t ? e[u] = n : delete e[u]), o } }, function (e, t) { var n = Object.prototype.toString; e.exports = function (e) { return n.call(e) } }, function (e, t, n) { var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, o = /\\(\\)?/g, i = n(71)(function (e) { var t = []; return 46 === e.charCodeAt(0) && t.push(""), e.replace(r, function (e, n, r, i) { t.push(r ? i.replace(o, "$1") : n || e) }), t }); e.exports = i }, function (e, t, n) { var r = n(72), o = 500; e.exports = function (e) { var t = r(e, function (e) { return n.size === o && n.clear(), e }), n = t.cache; return t } }, function (e, t, n) { var r = n(31), o = "Expected a function"; function i(e, t) { if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(o); var n = function () { var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache; if (i.has(o)) return i.get(o); var a = e.apply(this, r); return n.cache = i.set(o, a) || i, a }; return n.cache = new (i.Cache || r), n } i.Cache = r, e.exports = i }, function (e, t, n) { var r = n(74), o = n(14), i = n(32); e.exports = function () { this.size = 0, this.__data__ = { hash: new r, map: new (i || o), string: new r } } }, function (e, t, n) { var r = n(75), o = n(81), i = n(82), a = n(83), u = n(84); function l(e) { var t = -1, n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) { var r = e[t]; this.set(r[0], r[1]) } } l.prototype.clear = r, l.prototype.delete = o, l.prototype.get = i, l.prototype.has = a, l.prototype.set = u, e.exports = l }, function (e, t, n) { var r = n(13); e.exports = function () { this.__data__ = r ? r(null) : {}, this.size = 0 } }, function (e, t, n) { var r = n(21), o = n(77), i = n(5), a = n(79), u = /^\[object .+?Constructor\]$/, l = Function.prototype, s = Object.prototype, c = l.toString, f = s.hasOwnProperty, d = RegExp("^" + c.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"); e.exports = function (e) { return !(!i(e) || o(e)) && (r(e) ? d : u).test(a(e)) } }, function (e, t, n) { var r, o = n(78), i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : ""; e.exports = function (e) { return !!i && i in e } }, function (e, t, n) { var r = n(7)["__core-js_shared__"]; e.exports = r }, function (e, t) { var n = Function.prototype.toString; e.exports = function (e) { if (null != e) { try { return n.call(e) } catch (e) { } try { return e + "" } catch (e) { } } return "" } }, function (e, t) { e.exports = function (e, t) { return null == e ? void 0 : e[t] } }, function (e, t) { e.exports = function (e) { var t = this.has(e) && delete this.__data__[e]; return this.size -= t ? 1 : 0, t } }, function (e, t, n) { var r = n(13), o = "__lodash_hash_undefined__", i = Object.prototype.hasOwnProperty; e.exports = function (e) { var t = this.__data__; if (r) { var n = t[e]; return n === o ? void 0 : n } return i.call(t, e) ? t[e] : void 0 } }, function (e, t, n) { var r = n(13), o = Object.prototype.hasOwnProperty; e.exports = function (e) { var t = this.__data__; return r ? void 0 !== t[e] : o.call(t, e) } }, function (e, t, n) { var r = n(13), o = "__lodash_hash_undefined__"; e.exports = function (e, t) { var n = this.__data__; return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? o : t, this } }, function (e, t) { e.exports = function () { this.__data__ = [], this.size = 0 } }, function (e, t, n) { var r = n(15), o = Array.prototype.splice; e.exports = function (e) { var t = this.__data__, n = r(t, e); return !(n < 0 || (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, 0)) } }, function (e, t, n) { var r = n(15); e.exports = function (e) { var t = this.__data__, n = r(t, e); return n < 0 ? void 0 : t[n][1] } }, function (e, t, n) { var r = n(15); e.exports = function (e) { return r(this.__data__, e) > -1 } }, function (e, t, n) { var r = n(15); e.exports = function (e, t) { var n = this.__data__, o = r(n, e); return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this } }, function (e, t, n) { var r = n(16); e.exports = function (e) { var t = r(this, e).delete(e); return this.size -= t ? 1 : 0, t } }, function (e, t) { e.exports = function (e) { var t = typeof e; return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e } }, function (e, t, n) { var r = n(16); e.exports = function (e) { return r(this, e).get(e) } }, function (e, t, n) { var r = n(16); e.exports = function (e) { return r(this, e).has(e) } }, function (e, t, n) { var r = n(16); e.exports = function (e, t) { var n = r(this, e), o = n.size; return n.set(e, t), this.size += n.size == o ? 0 : 1, this } }, function (e, t, n) { var r = n(19), o = n(33), i = n(10), a = n(18), u = 1 / 0, l = r ? r.prototype : void 0, s = l ? l.toString : void 0; e.exports = function e(t) { if ("string" == typeof t) return t; if (i(t)) return o(t, e) + ""; if (a(t)) return s ? s.call(t) : ""; var n = t + ""; return "0" == n && 1 / t == -u ? "-0" : n } }, function (e, t, n) { var r = n(18), o = 1 / 0; e.exports = function (e) { if ("string" == typeof e || r(e)) return e; var t = e + ""; return "0" == t && 1 / e == -o ? "-0" : t } }, function (e, t, n) { var r = n(98), o = n(47)(function (e, t, n) { r(e, t, n) }); e.exports = o }, function (e, t, n) { var r = n(99), o = n(34), i = n(105), a = n(107), u = n(5), l = n(26), s = n(43); e.exports = function e(t, n, c, f, d) { t !== n && i(n, function (i, l) { if (u(i)) d || (d = new r), a(t, n, l, c, e, f, d); else { var p = f ? f(s(t, l), i, l + "", t, n, d) : void 0; void 0 === p && (p = i), o(t, l, p) } }, l) } }, function (e, t, n) { var r = n(14), o = n(100), i = n(101), a = n(102), u = n(103), l = n(104); function s(e) { var t = this.__data__ = new r(e); this.size = t.size } s.prototype.clear = o, s.prototype.delete = i, s.prototype.get = a, s.prototype.has = u, s.prototype.set = l, e.exports = s }, function (e, t, n) { var r = n(14); e.exports = function () { this.__data__ = new r, this.size = 0 } }, function (e, t) { e.exports = function (e) { var t = this.__data__, n = t.delete(e); return this.size = t.size, n } }, function (e, t) { e.exports = function (e) { return this.__data__.get(e) } }, function (e, t) { e.exports = function (e) { return this.__data__.has(e) } }, function (e, t, n) { var r = n(14), o = n(32), i = n(31), a = 200; e.exports = function (e, t) { var n = this.__data__; if (n instanceof r) { var u = n.__data__; if (!o || u.length < a - 1) return u.push([e, t]), this.size = ++n.size, this; n = this.__data__ = new i(u) } return n.set(e, t), this.size = n.size, this } }, function (e, t, n) { var r = n(106)(); e.exports = r }, function (e, t) { e.exports = function (e) { return function (t, n, r) { for (var o = -1, i = Object(t), a = r(t), u = a.length; u--;) { var l = a[e ? u : ++o]; if (!1 === n(i[l], l, i)) break } return t } } }, function (e, t, n) { var r = n(34), o = n(108), i = n(109), a = n(112), u = n(113), l = n(38), s = n(10), c = n(116), f = n(40), d = n(21), p = n(5), g = n(41), y = n(42), h = n(43), v = n(121); e.exports = function (e, t, n, m, b, _, E) { var w = h(e, n), S = h(t, n), O = E.get(S); if (O) r(e, n, O); else { var T = _ ? _(w, S, n + "", e, t, E) : void 0, R = void 0 === T; if (R) { var P = s(S), C = !P && f(S), x = !P && !C && y(S); T = S, P || C || x ? s(w) ? T = w : c(w) ? T = a(w) : C ? (R = !1, T = o(S, !0)) : x ? (R = !1, T = i(S, !0)) : T = [] : g(S) || l(S) ? (T = w, l(w) ? T = v(w) : p(w) && !d(w) || (T = u(S))) : R = !1 } R && (E.set(S, T), b(T, S, m, _, E), E.delete(S)), r(e, n, T) } } }, function (e, t, n) { (function (e) { var r = n(7), o = "object" == typeof t && t && !t.nodeType && t, i = o && "object" == typeof e && e && !e.nodeType && e, a = i && i.exports === o ? r.Buffer : void 0, u = a ? a.allocUnsafe : void 0; e.exports = function (e, t) { if (t) return e.slice(); var n = e.length, r = u ? u(n) : new e.constructor(n); return e.copy(r), r } }).call(t, n(24)(e)) }, function (e, t, n) { var r = n(110); e.exports = function (e, t) { var n = t ? r(e.buffer) : e.buffer; return new e.constructor(n, e.byteOffset, e.length) } }, function (e, t, n) { var r = n(111); e.exports = function (e) { var t = new e.constructor(e.byteLength); return new r(t).set(new r(e)), t } }, function (e, t, n) { var r = n(7).Uint8Array; e.exports = r }, function (e, t) { e.exports = function (e, t) { var n = -1, r = e.length; for (t || (t = Array(r)); ++n < r;)t[n] = e[n]; return t } }, function (e, t, n) { var r = n(114), o = n(36), i = n(25); e.exports = function (e) { return "function" != typeof e.constructor || i(e) ? {} : r(o(e)) } }, function (e, t, n) { var r = n(5), o = Object.create, i = function () { function e() { } return function (t) { if (!r(t)) return {}; if (o) return o(t); e.prototype = t; var n = new e; return e.prototype = void 0, n } }(); e.exports = i }, function (e, t, n) { var r = n(6), o = n(4), i = "[object Arguments]"; e.exports = function (e) { return o(e) && r(e) == i } }, function (e, t, n) { var r = n(17), o = n(4); e.exports = function (e) { return o(e) && r(e) } }, function (e, t) { e.exports = function () { return !1 } }, function (e, t, n) { var r = n(6), o = n(39), i = n(4), a = {}; a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function (e) { return i(e) && o(e.length) && !!a[r(e)] } }, function (e, t) { e.exports = function (e) { return function (t) { return e(t) } } }, function (e, t, n) { (function (e) { var r = n(30), o = "object" == typeof t && t && !t.nodeType && t, i = o && "object" == typeof e && e && !e.nodeType && e, a = i && i.exports === o && r.process, u = function () { try { var e = i && i.require && i.require("util").types; return e || a && a.binding && a.binding("util") } catch (e) { } }(); e.exports = u }).call(t, n(24)(e)) }, function (e, t, n) { var r = n(44), o = n(26); e.exports = function (e) { return r(e, o(e)) } }, function (e, t, n) { var r = n(23), o = n(11), i = Object.prototype.hasOwnProperty; e.exports = function (e, t, n) { var a = e[t]; i.call(e, t) && o(a, n) && (void 0 !== n || t in e) || r(e, t, n) } }, function (e, t) { e.exports = function (e, t) { for (var n = -1, r = Array(e); ++n < e;)r[n] = t(n); return r } }, function (e, t, n) { var r = n(5), o = n(25), i = n(125), a = Object.prototype.hasOwnProperty; e.exports = function (e) { if (!r(e)) return i(e); var t = o(e), n = []; for (var u in e) ("constructor" != u || !t && a.call(e, u)) && n.push(u); return n } }, function (e, t) { e.exports = function (e) { var t = []; if (null != e) for (var n in Object(e)) t.push(n); return t } }, function (e, t, n) { var r = n(50), o = Math.max; e.exports = function (e, t, n) { return t = o(void 0 === t ? e.length - 1 : t, 0), function () { for (var i = arguments, a = -1, u = o(i.length - t, 0), l = Array(u); ++a < u;)l[a] = i[t + a]; a = -1; for (var s = Array(t + 1); ++a < t;)s[a] = i[a]; return s[t] = n(l), r(e, this, s) } } }, function (e, t, n) { var r = n(128), o = n(130)(r); e.exports = o }, function (e, t, n) { var r = n(129), o = n(35), i = n(49), a = o ? function (e, t) { return o(e, "toString", { configurable: !0, enumerable: !1, value: r(t), writable: !0 }) } : i; e.exports = a }, function (e, t) { e.exports = function (e) { return function () { return e } } }, function (e, t) { var n = 800, r = 16, o = Date.now; e.exports = function (e) { var t = 0, i = 0; return function () { var a = o(), u = r - (a - i); if (i = a, u > 0) { if (++t >= n) return arguments[0] } else t = 0; return e.apply(void 0, arguments) } } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { blogDomain: "https://blog.apps.dev-secureserver.net", rssDomain: "https://rss.apps.dev-secureserver.net", subscribersDomain: "https://gem.dev-godaddy.com" }, e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { blogDomain: "https://blog.apps.dev-secureserver.net", rssDomain: "https://rss.apps.dev-secureserver.net", subscribersDomain: "https://gem.dev-godaddy.com" }, e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { blogDomain: "https://blog.apps.test-secureserver.net", rssDomain: "https://rss.apps.test-secureserver.net", subscribersDomain: "https://gem.test-godaddy.com" }, e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { blogDomain: "https://blog.apps.secureserver.net", rssDomain: "https://rss.apps.secureserver.net", subscribersDomain: "https://emailmarketing.secureserver.net" }, e.exports = t.default }, function (e, t) { e.exports = keyMirror }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(), o = n(0), i = y(o), a = y(n(1)), u = n(2), l = n(27), s = y(n(137)), c = y(n(3)), f = n(8), d = y(n(141)), p = y(n(142)), g = y(n(158)); function y(e) { return e && e.__esModule ? e : { default: e } } var h = function (e) { function t() { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var e = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)); return e.onBackClick = e.onBackClick.bind(e), e.renderCategories = e.renderCategories.bind(e), e.renderSubHeading = e.renderSubHeading.bind(e), e } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, o.Component), r(t, [{ key: "onBackClick", value: function (e) { var t = this.props.backClickHandler; t && (e.preventDefault(), t()) } }, { key: "renderCategories", value: function (e) { if (e && 0 !== e.length) return e.join(", ") } }, { key: "renderSubHeading", value: function () { var e = this.props, t = e.post, n = e.viewDevice, r = e.locale; return t.categories && 0 !== t.categories.length ? "MOBILE_RENDER_DEVICE" === n ? i.default.createElement(u.UX2.Element.Heading.Sub, { key: "date" }, i.default.createElement(u.UX2.Element.Text, { "data-aid": c.default.RSS_POST_DATE }, (0, l.formatDate)(r, t.date)), i.default.createElement(u.UX2.Element.Text, { "data-aid": c.default.RSS_POST_CATEGORIES, style: { textTransform: "uppercase" } }, this.renderCategories(t.categories))) : i.default.createElement(u.UX2.Element.Heading.Sub, { key: "date" }, i.default.createElement(u.UX2.Element.Text, { tag: "span", "data-aid": c.default.RSS_POST_DATE }, (0, l.formatDate)(r, t.date)), i.default.createElement(u.UX2.Element.Text, { tag: "span", style: { margin: "0 1rem" } }, "|"), i.default.createElement(u.UX2.Element.Text, { tag: "span", "data-aid": c.default.RSS_POST_CATEGORIES, style: { textTransform: "uppercase" } }, this.renderCategories(t.categories))) : i.default.createElement(u.UX2.Element.Heading.Sub, { key: "date" }, i.default.createElement(u.UX2.Element.Text, { "data-aid": c.default.RSS_POST_DATE }, (0, l.formatDate)(r, t.date))) } }, { key: "renderMain", value: function () { var e = this.props, t = e.post, n = e.staticContent, r = n.allPosts, o = n.socialSharing, a = (o = void 0 === o ? { sharePost: "Share this post" } : o).sharePost, l = e.viewDevice, s = e.renderMode, c = this.chooseSideBarPostsToDisplay(), y = "MOBILE_RENDER_DEVICE" === l, h = [i.default.createElement(u.UX2.Element.Link.Arrow, { href: (0, f.setAllPostsParam)((0, f.getPagePath)()), onClick: this.onBackClick, key: "backLink" }, r.toUpperCase())]; return t && h.push(i.default.createElement(u.UX2.Element.Heading, { level: "3", key: "title" }, t.title), this.renderSubHeading(), i.default.createElement(u.UX2.Group.Blog.Content, { style: { wordBreak: "break-word" }, richtext: !0, imgOptions: { outputWidth: 1280 }, key: "content" }, (0, d.default)(t.fullContent)), i.default.createElement(p.default, { post: t, label: a + ":", mobile: y, renderMode: s }), i.default.createElement(g.default, { post: t })), c.length > 0 ? i.default.createElement(u.UX2.Group.Blog.Main, { style: { borderBottom: "1px solid #e8eae8", marginBottom: "small", "@md": { borderRight: "1px solid #e8eae8", borderBottom: "none", marginRight: "large" } } }, h) : i.default.createElement(u.UX2.Group.Blog.Main, null, h) } }, { key: "chooseSideBarPostsToDisplay", value: function () { var e = this.props, t = e.feed, n = e.post; return n && t ? t.filter(function (e) { return e.slug !== n.slug }).slice(0, 3) : [] } }, { key: "render", value: function () { var e = u.UX2.Component, t = e.Grid, n = e.Grid.Cell, r = this.props, o = r.env, a = r.feed, l = r.locale, c = r.post, f = r.backClickHandler, d = r.viewDevice, p = r.renderMode, g = r.staticContent, y = r.websiteId, h = r.categoryClickHandler, v = r.categories, m = r.selectedCategory, b = r.currentPageRoute; return i.default.createElement(u.UX2.Group.Section, { section: "default", category: "neutral", style: { opacity: .95, paddingTop: 0, "@md": { paddingTop: "medium" } } }, i.default.createElement(u.UX2.Element.Container, null, i.default.createElement(t, { xs: 1, md: 12, gutter: !1, style: { justifyContent: "center" } }, i.default.createElement(n, { md: 8 }, this.renderMain()), i.default.createElement(n, { md: 4, style: { "@md": { paddingRight: "xlarge" } } }, i.default.createElement(s.default, { feed: a, post: c, locale: l, backClickHandler: f, viewDevice: d, renderMode: p, staticContent: g, websiteId: y, env: o, categoryClickHandler: h, categories: v, selectedCategory: m, currentPageRoute: b }))))) } }], [{ key: "propTypes", get: function () { return { env: a.default.string, locale: a.default.string, staticContent: a.default.object.isRequired, post: a.default.object.isRequired, feed: a.default.array, backClickHandler: a.default.func.isRequired, viewDevice: a.default.string.isRequired, renderMode: a.default.string.isRequired, websiteId: a.default.string.isRequired, categoryClickHandler: a.default.func, categories: a.default.array, selectedCategory: a.default.string, currentPageRoute: a.default.string } } }]), t }(); t.default = h, e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, o = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(), i = n(0), a = g(i), u = g(n(1)), l = n(2), s = g(n(138)), c = g(n(55)), f = n(9), d = g(n(139)), p = g(n(3)); function g(e) { return e && e.__esModule ? e : { default: e } } var y = { textAlign: "left", marginLeft: "0", marginBottom: "large" }, h = function (e) { function t() { return function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t), function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, i.Component), o(t, [{ key: "chooseSideBarPostsToDisplay", value: function () { var e = this.props, t = e.feed, n = e.post; return n && t ? t.filter(function (e) { return e.slug !== n.slug }).slice(0, 3) : [] } }, { key: "renderCategories", value: function () { var e = this.props, t = e.staticContent, n = e.categories, r = e.categoryClickHandler, o = e.selectedCategory; return (0, f.hasCategories)(n) ? a.default.createElement(l.UX2.Element.Block, { style: { marginBottom: "large" } }, a.default.createElement(l.UX2.Element.Heading.Sub, { style: y }, t.categories), a.default.createElement(c.default, { categoryClickHandler: r, categories: n, selectedCategory: o, staticContent: t, styles: { container: { flexDirection: "column", flexWrap: "nowrap", justifyContent: "flex-start", alignItems: "stretch", alignContent: "stretch", overflow: "hidden" }, link: { marginBottom: "small", marginHorizontal: "0", "@md": { marginHorizontal: "0" } } } })) : null } }, { key: "render", value: function () { var e = this.chooseSideBarPostsToDisplay(), t = this.props, n = t.locale, o = t.backClickHandler, i = t.renderMode, u = t.viewDevice, c = t.staticContent, f = t.websiteId, g = t.env, h = t.currentPageRoute, v = t.post, m = (v = void 0 === v ? {} : v).featureFlags, b = (m = void 0 === m ? {} : m).rssToEmail, _ = void 0 !== b && b, E = r({}, y); return _ && (E.marginTop = "large"), a.default.createElement("div", { "data-aid": p.default.RSS_VIEWPOST_SIDEBAR }, this.renderCategories(), _ && a.default.createElement(d.default, { websiteId: f, env: g, staticContent: c }), e.length > 0 && a.default.createElement(l.UX2.Element.Block, null, a.default.createElement(l.UX2.Element.Heading.Sub, { style: E, key: "recent" }, c.recentPosts), e.map(function (e, t) { return a.default.createElement(s.default, { key: t, locale: n, clickHandler: o, post: e, viewDevice: u, renderMode: i, currentPageRoute: h }) }))) } }], [{ key: "propTypes", get: function () { return { locale: u.default.string, env: u.default.string, feed: u.default.array.isRequired, post: u.default.object.isRequired, backClickHandler: u.default.func, renderMode: u.default.string.isRequired, viewDevice: u.default.string.isRequired, staticContent: u.default.object.isRequired, websiteId: u.default.string.isRequired, categoryClickHandler: u.default.func, categories: u.default.array, selectedCategory: u.default.string, currentPageRoute: u.default.string } } }]), t }(); t.default = h, e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(), o = n(0), i = f(o), a = f(n(1)), u = n(2), l = n(27), s = f(n(54)), c = n(8); function f(e) { return e && e.__esModule ? e : { default: e } } var d = function (e) { function t() { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var e = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)); return e.onPostClick = e.onPostClick.bind(e), e } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, o.Component), r(t, [{ key: "onPostClick", value: function () { var e = this.props, t = e.clickHandler, n = e.post; t && t(n.slug) } }, { key: "getImageBlock", value: function (e) { if (!e) return null; var t = { float: "left", height: "110px", width: "110px", marginRight: "small", marginBottom: "xsmall" }; return i.default.createElement(u.UX2.Element.Block, null, i.default.createElement(u.UX2.Component.Background, { backgroundImage: (0, s.default)(e, "rs=h:110,m,cg:true/cr=w:110"), style: t })) } }, { key: "render", value: function () { var e = this.props, t = e.post, n = e.renderMode, r = e.currentPageRoute, o = e.locale, a = { container: { overflow: "auto", marginTop: "medium", marginBottom: "medium" }, title: { fontSize: "medium", fontWeight: "bold", "-webkit-line-clamp": "2", "-webkit-box-orient": "vertical", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box" }, date: { marginTop: "small", fontSize: "small" } }; if (t) return i.default.createElement(u.UX2.Element.Block, { style: a.container }, i.default.createElement(u.UX2.Element.Link, { href: "PUBLISH" === n ? (0, c.buildPostPath)(t.slug, r) : null, onClick: this.onPostClick }, this.getImageBlock(t.featuredImage), i.default.createElement(u.UX2.Element.Text, { style: a.title }, t.title), i.default.createElement(u.UX2.Element.Text, { style: a.date }, (0, l.formatDate)(o, t.date, "short")))) } }], [{ key: "propTypes", get: function () { return { post: a.default.object.isRequired, locale: a.default.object.isRequired, clickHandler: a.default.func.isRequired, viewDevice: a.default.string.isRequired, renderMode: a.default.string.isRequired, currentPageRoute: a.default.string } } }]), t }(); t.default = d, e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(), o = n(0), i = f(o), a = f(n(1)), u = n(2), l = f(n(3)), s = f(n(140)), c = f(n(52)); function f(e) { return e && e.__esModule ? e : { default: e } } var d = function (e) { function t() { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var e = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)); return e.onEmailFieldType = e.onEmailFieldType.bind(e), e.onSubmit = e.onSubmit.bind(e), e.renderForm = e.renderForm.bind(e), e.sendForm = e.sendForm.bind(e), e.renderConfirmation = e.renderConfirmation.bind(e), e.state = { email: "", formSubmitted: !1 }, e } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, o.Component), r(t, [{ key: "sendForm", value: function () { var e = this.props, t = e.websiteId, n = e.env, r = c.default && c.default[n] || {}, o = { websiteId: t, email: this.state.email }, i = (0, s.default)("POST", r.subscribersDomain + "/api/v3/website/rssToEmail/subscribe"); return i.setRequestHeader("Content-Type", "application/json; charset=UTF-8"), i.onreadystatechange = this.handleSubmitResponse, i.send(JSON.stringify(o)), !0 } }, { key: "onSubmit", value: function (e) { e.preventDefault(), this.state.email && (this.setState({ formSubmitted: !0 }), this.sendForm()) } }, { key: "onEmailFieldType", value: function (e) { this.setState({ email: e }) } }, { key: "renderConfirmation", value: function () { var e = this.props.staticContent.rssToEmail, t = e.confirmation_2, n = e.confirmation_3; return i.default.createElement("div", { style: { paddingTop: "xsmall" } }, i.default.createElement(u.UX2.Element.Text, null, t, i.default.createElement("br", null), i.default.createElement("br", null), n)) } }, { key: "renderForm", value: function () { var e = this, t = this.state.email, n = this.props.staticContent; return i.default.createElement("form", { onSubmit: this.onSubmit }, i.default.createElement(u.UX2.Element.Input, { value: t, onChange: function (t) { return e.onEmailFieldType(t.target.value) }, type: "email", placeholder: n.rssToEmail.placeholder }), i.default.createElement(u.UX2.Element.Button, { type: "submit", style: { marginTop: "small" } }, n.rssToEmail.signUp)) } }, { key: "render", value: function () { var e = this.state.formSubmitted, t = this.props.staticContent.rssToEmail, n = t.confirmation_1, r = t.cta, o = t.cta_subhed, a = { title: { marginBottom: "xsmall", textAlign: "left", marginLeft: 0 }, tagline: { marginBottom: "small", fontSize: "small" } }; return i.default.createElement(u.UX2.Group.Group, null, i.default.createElement(u.UX2.Element.Block, { "data-aid": l.default.RSS_VIEWPOST_EMAIL }, i.default.createElement(u.UX2.Element.Heading.Sub, { style: a.title }, e ? n : r), i.default.createElement(u.UX2.Element.Text, { style: a.tagline }, e ? "" : o), e ? this.renderConfirmation() : this.renderForm())) } }], [{ key: "propTypes", get: function () { return { websiteId: a.default.string.isRequired, env: a.default.string, staticContent: a.default.object.isRequired } } }]), t }(); t.default = d, e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t) { var n = new XMLHttpRequest; return "withCredentials" in n ? n.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (n = new XDomainRequest).open(e, t) : n = null, n }, e.exports = t.default }, function (e, t, n) { "use strict"; function r(e) { return "unstyled" !== e.type || e.text.trim() } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) { var t = function (e) { try { return JSON.parse(e) } catch (e) { return null } }(e); if (!t || !t.blocks) return e; var n = t.blocks, o = n.findIndex(r); o > 0 && (n = n.slice(o)); var i = n.slice().reverse().findIndex(r); i > 0 && (n = n.slice(0, -i)); return t.blocks = n, JSON.stringify(t) }, e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, o = c(n(0)), i = n(2), a = c(n(143)), u = c(n(29)), l = c(n(1)), s = c(n(3)); function c(e) { return e && e.__esModule ? e : { default: e } } var f = function (e) { return { facebook: { url: (0, a.default)("https://www.facebook.com/sharer/sharer.php?u=<%- href %>") }, twitter: { url: (0, a.default)("https://twitter.com/share?url=<%- href %>&text=<%- title %>" + (e ? "&via=<%- profile %>" : "")) } } }, d = { default: { display: "flex", alignItems: "center", fontWeight: "bold", color: "black", marginRight: "-xsmall", marginTop: "medium", clear: "both" }, mobile: { position: "relative", width: "100%" } }, p = { marginRight: "medium" }, g = { default: { display: "block", cursor: "pointer", marginRight: "xsmall" }, facebook: { color: "#3b5998" }, twitter: { color: "#1DA1F2" } }, y = function (e) { var t = e.label, n = e.mobile, a = e.post, l = e.renderMode, c = a.featureFlags, y = (c = void 0 === c ? {} : c).showSocial, h = a.socialSharing, v = a.title; if (!y) return null; var m = Object.keys(f()).filter(function (e) { return (0, u.default)(h, [e, "enabled"], !0) }); return 0 === m.length ? null : o.default.createElement(i.UX2.Element.Text, { style: r({}, d.default, n ? d.mobile : {}) }, t && o.default.createElement(i.UX2.Element.Block, { style: p }, t), m.map(function (e) { return o.default.createElement(i.UX2.Element.Icon, { key: e, size: "medium", icon: e, style: r({}, g.default, g[e]), onClick: "PUBLISH" === l ? function (e) { var t = e.socialNetwork, n = e.title, r = e.profile; return function () { var e = f(r)[t].url, o = window.location.href; window.open(e({ href: encodeURI(o), title: encodeURI(n), profile: encodeURI(r) }), "Share", "width=585, height=368, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0").opener = null } }({ title: v, socialNetwork: e, profile: (0, u.default)(h, [e, "profile"]) }) : null, "data-aid": s.default["RSS_SOCIAL_SHARE_BOTTOM_" + e.toUpperCase()] }) })) }; y.propTypes = { mobile: l.default.bool, label: l.default.string, renderMode: l.default.string, post: l.default.shape({ featureFlags: l.default.shape({ showSocial: l.default.bool.isRequired }).isRequired, socialSharing: l.default.objectOf(l.default.shape({ enabled: l.default.bool.isRequired, profile: l.default.string })), title: l.default.string.isRequired }).isRequired }, t.default = y, e.exports = t.default }, function (e, t, n) { var r = n(144), o = n(145), i = n(146), a = n(147), u = n(148), l = n(56), s = n(51), c = n(149), f = n(57), d = n(152), p = n(22), g = /\b__p \+= '';/g, y = /\b(__p \+=) '' \+/g, h = /(__e\(.*?\)|\b__t\)) \+\n'';/g, v = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, m = /($^)/, b = /['\n\r\u2028\u2029\\]/g; e.exports = function (e, t, n) { var _ = d.imports._.templateSettings || d; n && s(e, t, n) && (t = void 0), e = p(e), t = r({}, t, _, a); var E, w, S = r({}, t.imports, _.imports, a), O = c(S), T = i(S, O), R = 0, P = t.interpolate || m, C = "__p += '", x = RegExp((t.escape || m).source + "|" + P.source + "|" + (P === f ? v : m).source + "|" + (t.evaluate || m).source + "|$", "g"), j = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : ""; e.replace(x, function (t, n, r, o, i, a) { return r || (r = o), C += e.slice(R, a).replace(b, u), n && (E = !0, C += "' +\n__e(" + n + ") +\n'"), i && (w = !0, C += "';\n" + i + ";\n__p += '"), r && (C += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), R = a + t.length, t }), C += "';\n"; var k = t.variable; k || (C = "with (obj) {\n" + C + "\n}\n"), C = (w ? C.replace(g, "") : C).replace(y, "$1").replace(h, "$1;"), C = "function(" + (k || "obj") + ") {\n" + (k ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (E ? ", __e = _.escape" : "") + (w ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + C + "return __p\n}"; var D = o(function () { return Function(O, j + "return " + C).apply(void 0, T) }); if (D.source = C, l(D)) throw D; return D } }, function (e, t, n) { var r = n(44), o = n(47), i = n(26), a = o(function (e, t, n, o) { r(t, i(t), e, o) }); e.exports = a }, function (e, t, n) { var r = n(50), o = n(48), i = n(56), a = o(function (e, t) { try { return r(e, void 0, t) } catch (e) { return i(e) ? e : new Error(e) } }); e.exports = a }, function (e, t, n) { var r = n(33); e.exports = function (e, t) { return r(t, function (t) { return e[t] }) } }, function (e, t, n) { var r = n(11), o = Object.prototype, i = o.hasOwnProperty; e.exports = function (e, t, n, a) { return void 0 === e || r(e, o[n]) && !i.call(a, n) ? t : e } }, function (e, t) { var n = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }; e.exports = function (e) { return "\\" + n[e] } }, function (e, t, n) { var r = n(45), o = n(150), i = n(17); e.exports = function (e) { return i(e) ? r(e) : o(e) } }, function (e, t, n) { var r = n(25), o = n(151), i = Object.prototype.hasOwnProperty; e.exports = function (e) { if (!r(e)) return o(e); var t = []; for (var n in Object(e)) i.call(e, n) && "constructor" != n && t.push(n); return t } }, function (e, t, n) { var r = n(37)(Object.keys, Object); e.exports = r }, function (e, t, n) { var r = n(153), o = { escape: n(156), evaluate: n(157), interpolate: n(57), variable: "", imports: { _: { escape: r } } }; e.exports = o }, function (e, t, n) { var r = n(154), o = n(22), i = /[&<>"']/g, a = RegExp(i.source); e.exports = function (e) { return (e = o(e)) && a.test(e) ? e.replace(i, r) : e } }, function (e, t, n) { var r = n(155)({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }); e.exports = r }, function (e, t) { e.exports = function (e) { return function (t) { return null == e ? void 0 : e[t] } } }, function (e, t) { e.exports = /<%-([\s\S]+?)%>/g }, function (e, t) { e.exports = /<%([\s\S]+?)%>/g }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(), o = n(0), i = s(o), a = s(n(1)), u = n(2), l = function (e) { if (e && e.__esModule) return e; var t = {}; if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t }(n(159)); function s(e) { return e && e.__esModule ? e : { default: e } } var c = function (e) { function t() { return function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t), function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, o.Component), r(t, [{ key: "componentDidMount", value: function () { l.shouldRenderWidget(this.props) && l.loadLibrary(this.props.post) } }, { key: "componentWillUnmount", value: function () { l.removeLibrary() } }, { key: "render", value: function () { return l.shouldRenderWidget(this.props) ? i.default.createElement(u.UX2.Element.Block, { style: { marginTop: "medium" } }, i.default.createElement("div", { id: "disqus_thread" })) : null } }]), t }(); c.propTypes = { post: a.default.shape({ postId: a.default.string, blogId: a.default.string, hideCommenting: a.default.bool }), featureFlags: a.default.shape({ commenting: a.default.bool }) }, t.default = c, e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.loadLibrary = function (e) { var t = e.blogId, n = e.postId; n = JSON.stringify(n); var o = document.createElement("script"); o.setAttribute("type", "text/javascript"), o.setAttribute("class", r), o.setAttribute("async", ""), o.innerHTML = 'var disqus_config = function(){ this.page.url = "' + window.location.href + '"; this.page.identifier = ' + n + "; }", document.head.appendChild(o); var i = document.createElement("script"); i.setAttribute("type", "text/javascript"), i.setAttribute("class", r), i.setAttribute("async", ""), i.src = "https://" + t + ".disqus.com/embed.js", document.body.appendChild(i) }, t.removeLibrary = function () { [].concat(function (e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++)n[t] = e[t]; return n } return Array.from(e) }(document.getElementsByClassName(r))).forEach(function (e) { e.parentNode.removeChild(e) }) }, t.shouldRenderWidget = function (e) { var t = e.post, n = t.hideCommenting, r = t.featureFlags.commenting; return !n && r }; var r = t.WIDGET_CSS_CLASS = "disquswidget-js" }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); t.AB_BLOG_WIDGET_SETUP_SUBTITLE = "ab-blog-widget-setup-subtitle", t.AB_BLOG_WIDGET_SETUP_TITLE = "ab-blog-widget-setup-title", t.AB_BLOG_WIDGET_SETUP_BUTTON = "ab-blog-widget-setup-button" }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, o = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(), i = n(0), a = y(i), u = y(n(1)), l = n(2), s = y(n(55)), c = n(9), f = y(n(162)), d = y(n(3)), p = y(n(163)), g = y(n(164)); function y(e) { return e && e.__esModule ? e : { default: e } } var h = function (e) { function t() { return function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t), function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, i.Component), o(t, [{ key: "onHandleStyles", value: function (e) { return { container: { display: "flex", flexDirection: "column", paddingBottom: "xlarge", marginBottom: e ? "0" : "xlarge", borderBottomWidth: e ? "0" : "1px", borderBottomStyle: "solid", borderColor: "section", "@sm": { flexDirection: "row", alignItems: "start" } }, content: { "@sm": { display: "flex", minWidth: "1px", flexDirection: "column", justifyContent: "space-between" } }, text: { paddingBottom: "small" }, backgroundContainer: { display: "flex", height: "200px", flexShrink: "0", marginBottom: "large", "@sm": { width: "200px", marginBottom: "0", marginRight: "large" } }, background: { width: "100%", backgroundSize: "auto", backgroundRepeat: "no-repeat", "@sm": { backgroundPosition: "top" } } } } }, { key: "renderCategories", value: function () { var e = this.props, t = e.categories, n = e.categoryClickHandler, r = e.selectedCategory, o = e.staticContent; return a.default.createElement(l.UX2.Component.Grid.Cell, { xs: "12", md: "3", style: { marginBottom: "small", "@md": { order: "1", borderLeftWidth: "1px", borderLeftStyle: "solid", borderColor: "section" } } }, a.default.createElement(l.UX2.Element.Heading.Sub, { style: { display: "none", "@md": { display: "block", marginHorizontal: "0", marginBottom: "small", textAlign: "left" } } }, o.categories), a.default.createElement(s.default, { categoryClickHandler: n, categories: t, selectedCategory: r, staticContent: o, styles: { container: { "@md": { flexDirection: "column", flexWrap: "nowrap", justifyContent: "flex-start", alignItems: "stretch", alignContent: "stretch", overflow: "hidden" } }, link: { "@md": { marginHorizontal: "0" } } } })) } }, { key: "renderCards", value: function (e) { var t = this, n = this.props, o = n.feeds, i = n.locale, u = n.detachedMode, s = n.staticContent, c = n.cardClickHandler, p = n.imgParams, g = n.viewDevice, y = n.currentPageRoute, h = n.device, v = u ? o.slice(0, 2) : o; return v.map(function (n, o) { var u = o === v.length - 1, m = t.onHandleStyles(u); return a.default.createElement(l.UX2.Component.Grid.Cell, r({ key: o }, e), a.default.createElement(f.default, { feed: n, style: m, locale: i, showContent: !0, staticContent: s, dataAid: d.default.RSS_FEED_RENDERED + "_" + o, cardClickHandler: c, imgParams: p, viewDevice: g, currentPageRoute: y, showCategories: !0, device: h, isRss3: !0 })) }) } }, { key: "render", value: function () { var e = (0, c.hasCategories)(this.props.categories); return a.default.createElement(l.UX2.Component.Grid, { bottom: !1, "data-aid": d.default.RSS_FEEDS_RENDERED, "data-route": p.default.FEED_URL }, e && this.renderCategories(), e ? a.default.createElement(l.UX2.Component.Grid.Cell, { xs: "12", md: "9" }, this.renderCards({ xs: "12" })) : this.renderCards({ xs: "12", md: "8", pushMd: "2" })) } }], [{ key: "propTypes", get: function () { return { feeds: u.default.array.isRequired, detachedMode: u.default.bool.isRequired, staticContent: u.default.object.isRequired, device: u.default.string.isRequired, size: u.default.string.isRequired, cardClickHandler: u.default.func, categoryClickHandler: u.default.func, categories: u.default.array, selectedCategory: u.default.string, imgParams: u.default.string, viewDevice: u.default.string.isRequired, currentPageRoute: u.default.string, locale: u.default.string } } }]), t }(); t.default = (0, g.default)(h), e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, o = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(), i = n(0), a = p(i), u = p(n(1)), l = n(2), s = p(n(3)), c = n(27), f = p(n(54)), d = n(8); function p(e) { return e && e.__esModule ? e : { default: e } } var g = function (e) { function t() { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var e = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)); return e.onCardClick = e.onCardClick.bind(e), e.renderSubHeading = e.renderSubHeading.bind(e), e } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, i.Component), o(t, [{ key: "onCardClick", value: function (e) { var t = this.props, n = t.feed, r = t.cardClickHandler; r && (e.preventDefault(), r(n.slug)) } }, { key: "renderSubHeading", value: function (e, t) { var n = this.props, o = n.showCategories, i = n.device, u = n.isRss3, f = n.locale, d = { textTransform: "uppercase", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", display: "block", maxWidth: "65%", position: "relative", bottom: "0", left: "0" }, p = { height: "1.5em", position: "relative", display: "flex", justifyContent: "flex-start" }; return o && t && 0 !== t.length ? "mobile" === i ? a.default.createElement(l.UX2.Element.Block, { style: p }, a.default.createElement(l.UX2.Element.Block, null, a.default.createElement(l.UX2.Element.Text, { tag: "span", "data-aid": s.default.RSS_FEED_POST_DATE_RENDERED }, (0, c.formatDate)(f, e))), a.default.createElement(l.UX2.Element.Text, { tag: "span", "data-aid": s.default.RSS_FEED_POST_CATEGORIES_RENDERED, style: r({}, d, u ? { maxWidth: "46%", marginLeft: "1em" } : { maxWidth: "37%", position: "relative", bottom: "0", marginLeft: "1em" }) }, t.join(", "))) : a.default.createElement(l.UX2.Element.Block, { style: p }, a.default.createElement(l.UX2.Element.Text, { tag: "span", "data-aid": s.default.RSS_FEED_POST_DATE_RENDERED }, (0, c.formatDate)(f, e)), a.default.createElement(l.UX2.Element.Text, { tag: "span", "data-aid": s.default.RSS_FEED_POST_SEPARATOR_RENDERED, style: { margin: "0 1rem" } }, "|"), a.default.createElement(l.UX2.Element.Text, { tag: "span", "data-aid": s.default.RSS_FEED_POST_CATEGORIES_RENDERED, style: d }, t.join(", "))) : a.default.createElement(l.UX2.Element.Text, { "data-aid": s.default.RSS_FEED_POST_DATE_RENDERED }, (0, c.formatDate)(f, e)) } }, { key: "render", value: function () { var e = this.props, t = e.feed, n = e.style, o = e.showContent, i = e.dataAid, u = e.staticContent, c = e.isCard, p = e.cardClickHandler, g = e.imgParams, y = void 0 === g ? "" : g, h = e.currentPageRoute, v = t.content, m = t.date, b = t.featuredImage, _ = t.title, E = t.url, w = t.slug, S = t.categories, O = c ? l.UX2.Group.Card.Link : l.UX2.Group.Group, T = (0, l.UX2.utils.TCCLUtils.getTCCLString)({ eid: "ux2.rss.read_more_link.click", type: "click" }); return a.default.createElement(l.UX2.Element.Link, { href: (0, d.buildPostPath)(w, h, E), target: E && "_blank", onClick: p && this.onCardClick }, a.default.createElement(O, { "data-aid": i, style: n.container }, b && a.default.createElement(l.UX2.Element.Block, { style: n.backgroundContainer }, a.default.createElement(l.UX2.Component.Background, { backgroundImage: (0, f.default)(b, y), style: n.background })), a.default.createElement(l.UX2.Element.Block, { style: r({}, n.content, { overflow: "hidden", flexGrow: 1 }) }, m && a.default.createElement(l.UX2.Element.Text, { style: n.text }, this.renderSubHeading(m, S)), a.default.createElement(l.UX2.Element.Block, null, a.default.createElement(l.UX2.Element.Heading, { style: r({}, n.text, n.title, { lineHeight: "1.125" }) }, _), o && v && a.default.createElement(l.UX2.Element.Text, { "data-aid": s.default.RSS_FEED_POST_CONTENT_RENDERED, style: n.text }, v)), a.default.createElement(l.UX2.Element.Block, null, a.default.createElement(l.UX2.Element.Link.CTA, { tag: "span", "data-aid": s.default.RSS_READ_MORE, "data-tccl": T }, u.readMore))))) } }], [{ key: "propTypes", get: function () { return { feed: u.default.object.isRequired, locale: u.default.string, style: u.default.object.isRequired, showContent: u.default.bool.isRequired, isCard: u.default.bool, dataAid: u.default.string, staticContent: u.default.object.isRequired, cardClickHandler: u.default.func, imgParams: u.default.string, viewDevice: u.default.string.isRequired, showCategories: u.default.bool.isRequired, currentPageRoute: u.default.string, device: u.default.string, isRss3: u.default.bool } } }]), t }(); t.default = g, e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); t.default = { SECTION_TITLE: "sectionTitle", SECTION_INTRO: "sectionIntro", FEED_URL: "rssFeed", CATEGORIES_FILTER: "categoriesFilter" }, e.exports = t.default }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, o = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(); t.default = function (e) { return function (t) { function n(e) { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, n); var t = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments)); t.handleMatchMedia = t.handleMatchMedia.bind(t); var r = {}; return e.renderMode !== d && (r.device = (0, l.convertViewDevice)(e.viewDevice)), t.state = r, t } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(n, t), o(n, null, [{ key: "propTypes", get: function () { return { renderMode: u.default.string, viewDevice: u.default.string } } }]), o(n, [{ key: "componentDidUpdate", value: function (e) { e.renderMode !== d && e.renderMode !== this.props.renderMode && this.setState({ device: (0, l.convertViewDevice)(this.props.viewDevice) }) } }, { key: "handleMatchMedia", value: function (e) { this.setState({ size: e.size }) } }, { key: "render", value: function () { var t = this.state.size, n = this.state.device; return n || (n = "xs" === t ? "mobile" : "tablet"), a.default.createElement(s.UX2.Element.Block, null, a.default.createElement(e, r({}, this.props, { device: n, size: t })), a.default.createElement(f, { onChange: this.handleMatchMedia })) } }]), n }(i.Component) }; var i = n(0), a = c(i), u = c(n(1)), l = n(53), s = n(2); function c(e) { return e && e.__esModule ? e : { default: e } } var f = s.UX.MatchMedia, d = "PUBLISH"; e.exports = t.default }]);