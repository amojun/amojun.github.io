/* Disable minification (remove `.min` from URL path) for more info */

(function (undefined)
{
    if (!(// In IE8, defineProperty could only act on DOM elements, so full support
                // for the feature requires the ability to set a property on an arbitrary object
                'defineProperty' in Object && (function ()
{
    try
    {
        var a = {};
        Object.defineProperty(a, 'test', { value: 42 });
            return true;
        }
        catch (e)
        {
            return false
        }
    }())))
    {
        !function (e)
        {
            var t = Object.prototype.hasOwnProperty("__defineGetter__"), r = "A property cannot both have accessors and be writable or have a value";
            Object.defineProperty = function (n, o, i)
            {
                if (e && (n === window || n === document || n === Element.prototype || n instanceof Element)) return e(n, o, i);
                if (null === n || !(n instanceof Object || "object" == typeof n)) throw new TypeError("Object.defineProperty called on non-object");
                if (!(i instanceof Object)) throw new TypeError("Property description must be an object");
                var c = String(o), a = "value" in i || "writable" in i, f = "get" in i && typeof i.get, p = "set" in i && typeof i.set;
                if (f)
                {
                    if ("function" !== f) throw new TypeError("Getter must be a function");
                    if (!t) throw new TypeError("Getters & setters cannot be defined on this javascript engine");
                    if (a) throw new TypeError(r);
                    Object.__defineGetter__.call(n, c, i.get)
                }
                else n[c] = i.value;
                if (p)
                {
                    if ("function" !== p) throw new TypeError("Setter must be a function");
                    if (!t) throw new TypeError("Getters & setters cannot be defined on this javascript engine");
                    if (a) throw new TypeError(r);
                    Object.__defineSetter__.call(n, c, i.set)
                }
                return "value" in i && (n[c] = i.value), n
            }
        }(Object.defineProperty);
    }
    if (!('bind' in Function.prototype))
    {
        Object.defineProperty(Function.prototype, "bind", { value: function (t)
        {
            var n, o = Array, r = Object, e = r.prototype, i = o.prototype, c = function () { }, p = e.toString, l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, a = Function.prototype.toString, u = function (t)
            {
                try
                {
                    return a.call(t), !0
                }
                catch (n)
                {
                    return !1
                }
            };
            n = function (t)
            {
                if ("function" != typeof t) return !1;
                if (l) return u(t);
                var n = p.call(t);
                return "[object Function]" === n || "[object GeneratorFunction]" === n
            };
            var y = i.slice, f = i.concat, b = i.push, h = Math.max, s = this;
            if (!n(s)) throw new TypeError("Function.prototype.bind called on incompatible " + s);
            for (var g, d = y.call(arguments, 1), m = function ()
        {
            if (this instanceof g)
                {
                    var n = s.apply(this, f.call(d, y.call(arguments)));
                    return r(n) === n ? n : this
                }
                return s.apply(t, f.call(d, y.call(arguments)))
            }, v = h(0, s.length - d.length), F = [], j = 0; j < v; j++)b.call(F, "$" + j);
            return g = Function("binder", "return function (" + F.join(",") + "){ return binder.apply(this, arguments); }")(m), s.prototype && (c.prototype = s.prototype, g.prototype = new c, c.prototype = null), g
        }
                                                          });
    }
    if (!('getOwnPropertyDescriptor' in Object && typeof Object.getOwnPropertyDescriptor === 'function' && (function ()
{
    try
    {
        var object = {};
        object.test = 0;
        return Object.getOwnPropertyDescriptor(
                   object,
                   "test"
               ).value === 0;
        }
        catch (exception)
        {
            return false
        }
    }())))
    {
        !function ()
        {
            function e(e)
            {
                try
                {
                    return e.sentinel = 0, 0 === Object.getOwnPropertyDescriptor(e, "sentinel").value
                }
                catch (t) { }
            } var t, r, o, n = Function.prototype.call, c = Object.prototype, i = n.bind(c.hasOwnProperty);
            if ((o = i(c, "__defineGetter__")) && (t = n.bind(c.__lookupGetter__), r = n.bind(c.__lookupSetter__)), Object.defineProperty)
            {
                var p = e({});
                if (!("undefined" == typeof document || e(document.createElement("div"))) || !p) var _ = Object.getOwnPropertyDescriptor
                }
            if (!Object.getOwnPropertyDescriptor || _)
            {
                Object.getOwnPropertyDescriptor = function (e, n)
                {
                    if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + e);
                    if (_) try
                        {
                            return _.call(Object, e, n)
                        }
                        catch (l) { } if (i(e, n))
                    {
                        var p = { enumerable: !0, configurable: !0 };
                        if (o)
                        {
                            var a = e.__proto__;
                            e.__proto__ = c;
                            var f = t(e, n), u = r(e, n);
                            if (e.__proto__ = a, f || u) return f && (p.get = f), u && (p.set = u), p
                            }
                        return p.value = e[n], p.writable = !0, p
                    }
                }
            }
        }();
    }
    if (!('keys' in Object && (function ()
{
    // Safari 5.0 bug where Object.keys doesn't work with arguments
    return (Object.keys(arguments)).length === 2;
    }(1, 2)) && (function ()
    {
        try
        {
            // In ES6 Object.keys works on all object except `null` and `undefined`.
            Object.keys('');
            return true;
        }
        catch (e)
        {
            return false;
        }
    }())))
    {
        Object.keys = function ()
        { "use strict";
            function t(t)
            {
                var e = r.call(t), n = "[object Arguments]" === e;
                return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)), n
            }
            var e = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = Object.prototype.propertyIsEnumerable, o = !n.call({ toString: null }, "toString"), l = n.call(function () { }, "prototype"), c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], i = function (t) { var e = t.constructor; return e && e.prototype === t }, u = { $console: !0, $external: !0, $frame: !0, $frameElement: !0, $frames: !0, $innerHeight: !0, $innerWidth: !0, $outerHeight: !0, $outerWidth: !0, $pageXOffset: !0, $pageYOffset: !0, $parent: !0, $scrollLeft: !0, $scrollTop: !0, $scrollX: !0, $scrollY: !0, $self: !0, $webkitIndexedDB: !0, $webkitStorageInfo: !0, $window: !0 }, a = function ()
            {
                if ("undefined" == typeof window) return !1;
                for (var t in window) try
                    {
                        if (!u["$" + t] && e.call(window, t) && null !== window[t] && "object" == typeof window[t]) try
                            {
                                i(window[t])
                            }
                            catch (r)
                            {
                                return !0
                            }
                    }
                    catch (r)
                    {
                        return !0
                    }
                return !1
            }(), f = function (t)
            {
                if ("undefined" == typeof window || !a) return i(t);
                try
                {
                    return i(t)
                }
                catch (e)
                {
                    return !1
                }
            };
            return function (n)
            {
                var i = "[object Function]" === r.call(n), u = t(n), a = "[object String]" === r.call(n), p = [];
                if (n === undefined || null === n) throw new TypeError("Cannot convert undefined or null to object");
                var s = l && i;
                if (a && n.length > 0 && !e.call(n, 0)) for (var g = 0; g < n.length; ++g)p.push(String(g));
                if (u && n.length > 0) for (var w = 0; w < n.length; ++w)p.push(String(w));
                else for (var y in n) s && "prototype" === y || !e.call(n, y) || p.push(String(y));
                if (o) for (var h = f(n), $ = 0; $ < c.length; ++$)h && "constructor" === c[$] || !e.call(n, c[$]) || p.push(c[$]);
                return p
            }
        }();
    }
    if (!('assign' in Object))
    {
        !function ()
        {
            function e(e)
            {
                if (null === e || e === undefined) throw new TypeError("Cannot call method on " + e);
                return Object(e)
            }
            Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function (n, r)
            {
                var t = e(n);
                if (1 === arguments.length) return t;
                var l, o, a, i, u = Array.prototype.slice.call(arguments, 1);
                for (l = 0; l < u.length; l++)
                {
                    var c = u[l];
                    for (c === undefined || null === c ? a = [] : (i = e(c), a = Object.keys(i)), o = 0; o < a.length; o++)
                    {
                        var f = a[o], b = Object.getOwnPropertyDescriptor(i, f);
                        if (b !== undefined && b.enumerable)
                        {
                            var d = i[f];
                            t[f] = d
                        }
                    }
                }
                return t
            }
                                                    })
        }();
    }
    if (!('defineProperties' in Object))
    {
        Object.defineProperties = function (e, r)
        {
            for (var n in r) r.hasOwnProperty(n) && Object.defineProperty(e, n, r[n]);
            return e
        };
    }
    if (!('forEach' in Array.prototype))
    {
        Array.prototype.forEach = function (t)
        {
            if (this === undefined || null === this) throw new TypeError(this + " is not an object");
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            for (var n = Object(this), i = arguments[1], o = n instanceof String ? n.split("") : n, r = Math.max(Math.min(o.length, 9007199254740991), 0) || 0, e = -1; ++e < r;)e in o && t.call(i, o[e], e, n)
            };
    }
    if (!('filter' in Array.prototype))
    {
        Array.prototype.filter = function (t)
        {
            if (this === undefined || null === this) throw new TypeError(this + " is not an object");
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            for (var n, i = Object(this), r = arguments[1], o = i instanceof String ? i.split("") : i, e = Math.max(Math.min(o.length, 9007199254740991), 0) || 0, f = -1, h = []; ++f < e;)n = o[f], f in o && t.call(r, n, f, i) && h.push(n);
            return h
        };
    }
    if (!('map' in Array.prototype))
    {
        Array.prototype.map = function (t)
        {
            if (this === undefined || null === this) throw new TypeError(this + " is not an object");
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            for (var n = Object(this), i = arguments[1], r = n instanceof String ? n.split("") : n, o = Math.max(Math.min(r.length, 9007199254740991), 0) || 0, e = -1, a = []; ++e < o;)e in r && (a[e] = t.call(i, r[e], e, n));
            return a
        };
    }
    if (!('create' in Object))
    {
        !function ()
        {
            function t(t)
            {
                return null == t || "object" != typeof t && "function" != typeof t
            }
            Object.create = function (e, n)
            {
                if (null !== e && t(e)) throw new TypeError("Object prototype may only be an Object or null");
                var o = new Function("e", "function Object() {}Object.prototype=e;return new Object")(e);
                return o.constructor.prototype = e, 1 in arguments && Object.defineProperties(o, n), o
            }
        }();
    }
    if (!('getOwnPropertyNames' in Object))
    {
        Object.getOwnPropertyNames = function (e)
        {
            var r, n = [], t = ["length", "name", "arguments", "caller", "prototype", "observe", "unobserve"];
            if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
            e = Object(e);
            for (r in e) Object.prototype.hasOwnProperty.call(e, r) && n.push(r);
            for (var o = 0, l = t.length; o < l; o++)t[o] in e && n.push(t[o]);
            return n
        };
    }
    if (!('freeze' in Object))
    {
        Object.freeze = function (e)
        {
            return e
        };
    }
    if (!('Symbol' in this))
    {
        !function (e, n, t)
        {
            var r, o = 0, u = "" + Math.random(), a = "__symbol:", c = a.length, l = "__symbol@@" + u, i = "defineProperty", f = "defineProperties", v = "getOwnPropertyNames", s = "getOwnPropertyDescriptor", b = "propertyIsEnumerable", y = e.prototype, h = y.hasOwnProperty, m = y[b], p = y.toString, w = Array.prototype.concat, g = "object" == typeof window ? e.getOwnPropertyNames(window) : [], d = e[v], P = function (e)
            {
                if ("[object Window]" === p.call(e)) try
                    {
                        return d(e)
                    }
                    catch (n)
                    {
                        return w.call([], g)
                    }
                return d(e)
            }, S = e[s], O = e.create, j = e.keys, E = e.freeze || e, _ = e[i], k = e[f], N = S(e, v), T = function (e, n, t)
            {
                if (!h.call(e, l)) try
                    {
                        _(e, l, { enumerable: !1, configurable: !1, writable: !1, value: {} })
                    }
                    catch (r)
                    {
                        e[l] = {}
                    }
                e[l]["@@" + n] = t
            }, z = function (e, n)
            {
                var t = O(e);
                return P(n).forEach(function (e)
                {
                    M.call(n, e) && G(t, e, n[e])
                }), t
            }, A = function (e) { var n = O(e); return n.enumerable = !1, n }, D = function () { }, F = function (e) { return e != l && !h.call(x, e) }, I = function (e) { return e != l && h.call(x, e) }, M = function (e) { var n = "" + e; return I(n) ? h.call(this, n) && this[l]["@@" + n] : m.call(this, e) }, W = function (n)
            {
                var t = { enumerable:
                          !1, configurable:
                          !0, get:
                          D, set:
                          function (e)
                {
                    r(this, n, { enumerable: !1, configurable: !0, writable: !0, value: e }), T(this, n, !0)
                }
                        };
                try
                {
                    _(y, n, t)
                }
                catch (o)
                {
                    y[n] = t.value
                }
                return E(x[n] = _(e(n), "constructor", B))
            }, q = function K(e) { if (this instanceof K) throw new TypeError("Symbol is not a constructor"); return W(a.concat(e || "", u, ++o)) }, x = O(null), B = { value: q }, C = function (e) { return x[e] }, G = function (e, n, t) { var o = "" + n; return I(o) ? (r(e, o, t.enumerable ? A(t) : t), T(e, o, !!t.enumerable)) : _(e, n, t), e }, H = function (e)
            {
                return function (n)
                {
                    return h.call(e, l) && h.call(e[l], "@@" + n)
                }
            }, J = function (e)
            {
                return P(e).filter(e === y ? H(e) : I).map(C)
            };
            N.value = G, _(e, i, N), N.value = J, _(e, "getOwnPropertySymbols", N), N.value = function (e) { return P(e).filter(F) }, _(e, v, N), N.value = function (e, n)
            {
                var t = J(n);
                return t.length ? j(n).concat(t).forEach(function (t)
                {
                    M.call(n, t) && G(e, t, n[t])
                }) : k(e, n), e
                }, _(e, f, N), N.value = M, _(y, b, N), N.value = q, _(t, "Symbol", N), N.value = function (e) { var n = a.concat(a, e, u); return n in y ? x[n] : W(n) }, _(q, "for", N), N.value = function (e) { if (F(e)) throw new TypeError(e + " is not a symbol"); return h.call(x, e) ? e.slice(2 * c, -u.length) : void 0 }, _(q, "keyFor", N), N.value = function (e, n) { var t = S(e, n); return t && I(n) && (t.enumerable = M.call(e, n)), t }, _(e, s, N), N.value = function (e, n) { return 1 === arguments.length || void 0 === n ? O(e) : z(e, n) }, _(e, "create", N), N.value = function () { var e = p.call(this); return "[object String]" === e && I(this) ? "[object Symbol]" : e }, _(y, "toString", N), r = function (e, n, t)
            {
                var r = S(y, n);
                delete y[n], _(e, n, t), e !== y && _(y, n, r)
            }
        }(Object, 0, this);
    }
    if (!('Symbol' in this && 'iterator' in this.Symbol))
    {
        Object.defineProperty(Symbol, "iterator", { value: Symbol("iterator") });
    }
    if (!('Symbol' in this && 'toStringTag' in this.Symbol))
    {
        Object.defineProperty(Symbol, "toStringTag", { value: Symbol("toStringTag") });
    }
    var Iterator = function ()
    {
        var e = function () { return this.length = 0, this }, t = function (e) { if ("function" != typeof e) throw new TypeError(e + " is not a function"); return e }, _ = function (e, n)
        {
            if (!(this instanceof _)) return new _(e, n);
            Object.defineProperties(this, { __list__: { writable: !0, value: e }, __context__: { writable: !0, value: n }, __nextIndex__: { writable: !0, value: 0 } }), n && (t(n.on), n.on("_add", this._onAdd.bind(this)), n.on("_delete", this._onDelete.bind(this)), n.on("_clear", this._onClear.bind(this)))
        };
        return Object.defineProperties(_.prototype, Object.assign({ constructor: { value: _, configurable: !0, enumerable: !1, writable: !0 }, _next: { value: function ()
        {
            var e;
            if (this.__list__) return this.__redo__ && (e = this.__redo__.shift()) !== undefined ? e : this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind()
            }, configurable: !0, enumerable: !1, writable: !0
                                                                                                                                                      }, next: { value: function ()
        {
            return this._createResult(this._next())
        }, configurable: !0, enumerable: !1, writable: !0
                                                                                                                                                               }, _createResult: { value: function (e)
        {
            return e === undefined ? { done: !0, value: undefined } :
                         {
                             done:
                             !1, value:
                             this._resolve(e)
                         }
        }, configurable: !0, enumerable: !1, writable: !0
                                                                                                                                                                                 }, _resolve: { value: function (e)
        {
            return this.__list__[e]
        }, configurable: !0, enumerable: !1, writable: !0
                                                                                                                                                                                              }, _unBind: { value: function ()
        {
            this.__list__ = null, delete this.__redo__, this.__context__ && (this.__context__.off("_add", this._onAdd.bind(this)), this.__context__.off("_delete", this._onDelete.bind(this)), this.__context__.off("_clear", this._onClear.bind(this)), this.__context__ = null)
        }, configurable: !0, enumerable: !1, writable: !0
                                                                                                                                                                                                          }, toString: { value: function ()
        {
            return "[object Iterator]"
        }, configurable: !0, enumerable: !1, writable: !0
                                                                                                                                                                                                                       }
                                                                  }, { _onAdd: { value: function (e)
        {
            if (!(e >= this.__nextIndex__))
            {
                if (++this.__nextIndex__, !this.__redo__) return void Object.defineProperty(this, "__redo__", { value: [e], configurable: !0, enumerable: !1, writable: !1 });
                this.__redo__.forEach(function (t, _)
                {
                    t >= e && (this.__redo__[_] = ++t)
                }, this), this.__redo__.push(e)
            }
        }, configurable: !0, enumerable: !1, writable: !0
                                                                               }, _onDelete: { value: function (e)
        {
            var t;
            e >= this.__nextIndex__ || (--this.__nextIndex__, this.__redo__ && (t = this.__redo__.indexOf(e), -1 !== t && this.__redo__.splice(t, 1), this.__redo__.forEach(function (t, _)
            {
                t > e && (this.__redo__[_] = --t)
            }, this)))
        }, configurable: !0, enumerable: !1, writable: !0
                                                                                             }, _onClear: { value: function ()
        {
            this.__redo__ && e.call(this.__redo__), this.__nextIndex__ = 0
        }, configurable: !0, enumerable: !1, writable: !0
                                                                                                          }
                                                                     })), Object.defineProperty(_.prototype, Symbol.iterator, { value: function ()
        {
            return this
        }, configurable: !0, enumerable: !1, writable: !0
                                                                                                                              }), Object.defineProperty(_.prototype, Symbol.toStringTag, { value: "Iterator", configurable: !1, enumerable: !1, writable: !0 }), _
    }();
    if (!('getPrototypeOf' in Object))
    {
        Object.getPrototypeOf = function (t)
        {
            if (t !== Object(t)) throw new TypeError("Object.getPrototypeOf called on non-object");
            var o = t.__proto__;
            return o || null === o ? o : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Object.prototype : null
        };
    } !function ()
    {
        if (!Object.setPrototypeOf)
        {
            var t, e, o = Object.getOwnPropertyNames, r = Object.getOwnPropertyDescriptor, n = Object.create, c = Object.defineProperty, _ = Object.getPrototypeOf, f = Object.prototype, O = function (t, e)
            {
                return o(e).forEach(function (o)
                {
                    c(t, o, r(e, o))
                }), t
            }, p = function (t, e)
            {
                return O(n(e), t)
            };
            try
            {
                t = r(f, "__proto__").set, t.call({}, null), e = function (e, o)
                {
                    return t.call(e, o), e
                }
            }
            catch (u)
            {
                t = { __proto__: null }, t instanceof Object ? e = p : (t.__proto__ = f, e = t instanceof Object ? function (t, e)
                {
                    return t.__proto__ = e, t
                } : function (t, e)
                {
                    return _(t) ? (t.__proto__ = e, t) : p(t, e)
                })
            }
            Object.setPrototypeOf = e
        }
    }();
    if (!('includes' in String.prototype))
    {
        String.prototype.includes = function (t, e)
        {
            if ("object" == typeof t && t instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            return -1 !== this.indexOf(t, e)
        };
    }
    if (!('contains' in String.prototype))
    {
        String.prototype.contains = String.prototype.includes;
    }
    var ArrayIterator = function ()
    {
        var e = function (t, r)
        {
            if (!(this instanceof e)) return new e(t, r);
            Iterator.call(this, t), r = r ? String.prototype.contains.call(r, "key+value") ? "key+value" : String.prototype.contains.call(r, "key") ? "key" : "value" : "value", Object.defineProperty(this, "__kind__", { value: r, configurable: !1, enumerable: !1, writable: !1 })
        };
        return Object.setPrototypeOf && Object.setPrototypeOf(e, Iterator.prototype), e.prototype = Object.create(Iterator.prototype, { constructor: { value: e, configurable: !0, enumerable: !1, writable: !0 }, _resolve: { value: function (e)
        {
            return "value" === this.__kind__ ? this.__list__[e] : "key+value" === this.__kind__ ? [e, this.__list__[e]] : e
        }, configurable: !0, enumerable: !1, writable: !0
                                                                                                                                                                                                                             }, toString: { value: function ()
        {
            return "[object Array Iterator]"
        }, configurable: !0, enumerable: !1, writable: !0
                                                                                                                                                                                                                                          }
                                                                                                                                      }), e
    }();
    if (!('Symbol' in this && 'iterator' in this.Symbol && !!Array.prototype[Symbol.iterator]))
    {
        Array.prototype[Symbol.iterator] = function ()
        {
            return new ArrayIterator(this)
        };
    }
    if (!('find' in Array.prototype))
    {
        Object.defineProperty(Array.prototype, "find", { configurable: !0, value: function (t)
        {
            if (this === undefined || null === this) throw new TypeError(this + " is not an object");
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            for (var n, i = Object(this), e = arguments[1], r = i instanceof String ? i.split("") : i, o = Math.max(Math.min(r.length, 9007199254740991), 0) || 0, f = -1; ++f < o;)if (f in r && (n = r[f], t.call(e, n, f, i))) return n
                }, writable: !0
                                                       });
    }
    if (!('findIndex' in Array.prototype))
    {
        Object.defineProperty(Array.prototype, "findIndex", { configurable: !0, value: function (t)
        {
            if (this === undefined || null === this) throw new TypeError(this + " is not an object");
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            for (var n = Object(this), e = arguments[1], i = n instanceof String ? n.split("") : n, r = Math.max(Math.min(i.length, 9007199254740991), 0) || 0, o = -1; ++o < r;)if (o in i && t.call(e, i[o], o, n)) return o;
            return -1
        }, writable: !0
                                                            });
    }
    if (!('includes' in Array.prototype))
    {
        !function ()
        {
            Object.defineProperty(Array.prototype, "includes", { configurable: !0, value: function (r)
            { "use strict";
                var e = Object(this), t = parseInt(e.length) || 0;
                if (0 === t) return !1;
                var n, i = parseInt(arguments[1]) || 0;
                i >= 0 ? n = i : (n = t + i) < 0 && (n = 0);
                for (var a; n < t;)
                {
                    if (a = e[n], r === a || r !== r && a !== a) return !0;
                    n++
                }
                return !1
            }, writable: !0
                                                               })
        }();
    }
    if (!('name' in Function.prototype && (function x() { }).name === 'x'))
    {
        !function ()
        {
            var n = /^\s*function\s+([^\(\s]*)\s*/, t = Function, e = t.prototype, r = e.constructor, o = function (o)
            {
                var c, u;
                return o === t || o === r ? u = "Function" : o !== e && (c = ("" + o).match(n), u = c && c[1]), u || ""
            }; Object.defineProperty(e, "name", { get: function ()
            {
                var n = this, t = o(n);
                return n !== e && Object.defineProperty(n, "name", { value: t, configurable: !0 }), t
            }, configurable: !0
                                                })
        }();
    }
    if (!('Window' in this))
    { "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function (o)
        {
            o.constructor ? o.Window = o.constructor : (o.Window = o.constructor = new Function("return function Window() {}")()).prototype = this
        }(this);
    }
    if (!('getComputedStyle' in this))
    {
        !function (t)
        {
            function e(t, o, r)
            {
                var n, i = t.document && t.currentStyle[o].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/) || [0, 0, ""], l = i[1], u = i[2];
                return r = r ? /%|em/.test(u) && t.parentElement ? e(t.parentElement, "fontSize", null) : 16 : r, n = "fontSize" == o ? r : /width/i.test(o) ? t.clientWidth : t.clientHeight, "%" == u ? l / 100 * n : "cm" == u ? .3937 * l * 96 : "em" == u ? l * r : "in" == u ? 96 * l : "mm" == u ? .3937 * l * 96 / 10 : "pc" == u ? 12 * l * 96 / 72 : "pt" == u ? 96 * l / 72 : l
            }
            function o(t, e)
            {
                var o = "border" == e ? "Width" : "", r = e + "Top" + o, n = e + "Right" + o, i = e + "Bottom" + o, l = e + "Left" + o;
                t[e] = (t[r] == t[n] && t[r] == t[i] && t[r] == t[l] ? [t[r]] : t[r] == t[i] && t[l] == t[n] ? [t[r], t[n]] : t[l] == t[n] ? [t[r], t[n], t[i]] : [t[r], t[n], t[i], t[l]]).join(" ")
            }
            function r(t)
            {
                var r, n = this, i = t.currentStyle, l = e(t, "fontSize"), u = function (t)
                {
                    return "-" + t.toLowerCase()
                };
                for (r in i) if (Array.prototype.push.call(n, "styleFloat" == r ? "float" : r.replace(/[A-Z]/, u)), "width" == r) n[r] = t.offsetWidth + "px";
                    else if ("height" == r) n[r] = t.offsetHeight + "px";
                    else if ("styleFloat" == r) n["float"] = i[r];
                    else if (/margin.|padding.|border.+W/.test(r) && "auto" != n[r]) n[r] = Math.round(e(t, r, l)) + "px";
                    else if (/^outline/.test(r)) try
                        {
                            n[r] = i[r]
                        }
                        catch (c)
                        {
                            n.outlineColor = i.color, n.outlineStyle = n.outlineStyle || "none", n.outlineWidth = n.outlineWidth || "0px", n.outline = [n.outlineColor, n.outlineWidth, n.outlineStyle].join(" ")
                        }
                    else n[r] = i[r];
                o(n, "margin"), o(n, "padding"), o(n, "border"), n.fontSize = Math.round(l) + "px"
            }
            r.prototype = { constructor:
                            r, getPropertyPriority:
            function () { throw new Error("NotSupportedError: DOM Exception 9") }, getPropertyValue:
            function (t)
            {
                return this[t.replace(/-\w/g, function (t)
                                  {
                                      return t[1].toUpperCase()
                                  })]
            }, item:
            function (t) { return this[t] }, removeProperty:
            function () { throw new Error("NoModificationAllowedError: DOM Exception 7") }, setProperty:
            function () { throw new Error("NoModificationAllowedError: DOM Exception 7") }, getPropertyCSSValue:
            function ()
            {
                throw new Error("NotSupportedError: DOM Exception 9")
            }
                          }, t.getComputedStyle = function (t)
            {
                return new r(t)
            }
        }(this);
    }
    if (!('isArray' in Array))
    {
        !function (r)
        {
            Object.defineProperty(Array, "isArray", { configurable: !0, value: function (t)
            {
                return "[object Array]" === r.call(t)
            }, writable: !0
                                                    })
        }(Object.prototype.toString);
    }
    if (!('indexOf' in Array.prototype))
    {
        Array.prototype.indexOf = function (t)
        {
            if (this === undefined || null === this) throw new TypeError(this + " is not an object");
            var i = this instanceof String ? this.split("") : this, n = Math.max(Math.min(i.length, 9007199254740991), 0) || 0, r = Number(arguments[1]) || 0;
            for (r = (r < 0 ? Math.max(n + r, 0) : r) - 1; ++r < n;)if (r in i && i[r] === t) return r;
            return -1
        };
    }
    if (!('some' in Array.prototype))
    {
        Array.prototype.some = function (t)
        {
            if (this === undefined || null === this) throw new TypeError(this + " is not an object");
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            for (var n = Object(this), i = arguments[1], r = n instanceof String ? n.split("") : n, o = Math.max(Math.min(r.length, 9007199254740991), 0) || 0, e = -1; ++e < o;)if (e in r && t.call(i, r[e], e, n)) return !0;
            return !1
        };
    }
    if (!("Document" in this))
    { "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document));
    }
    if (!('Element' in this && 'HTMLElement' in this))
    {
        !function ()
        {
            function e()
            {
                return a-- || clearTimeout(t), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (m(document, !0), t && document.body.prototype && clearTimeout(t), !!document.body.prototype)
            }
            if (window.Element && !window.HTMLElement) return void (window.HTMLElement = window.Element);
            window.Element = window.HTMLElement = new Function("return function Element() {}")();
            var t, n = document.appendChild(document.createElement("body")), o = n.appendChild(document.createElement("iframe")), r = o.contentWindow.document, c = Element.prototype = r.appendChild(r.createElement("*")), d = {}, m = function (e, t)
            {
                var n, o, r, c = e.childNodes || [], u = -1;
                if (1 === e.nodeType && e.constructor !== Element)
                {
                    e.constructor = Element;
                    for (n in d) o = d[n], e[n] = o
                    }
                for (; r = t && c[++u];)m(r, t);
                return e
            }, u = document.getElementsByTagName("*"), i = document.createElement, a = 100;
            c.attachEvent("onpropertychange", function (e)
            {
                for (var t, n = e.propertyName, o = !d.hasOwnProperty(n), r = c[n], m = d[n], i = -1; t = u[++i];)1 === t.nodeType && (o || t[n] === m) && (t[n] = r);
                d[n] = r
            }), c.constructor = Element, c.hasAttribute || (c.hasAttribute = function (e)
            {
                return null !== this.getAttribute(e)
            }), e() || (document.onreadystatechange = e, t = setInterval(e, 25)), document.createElement = function (e) { var t = i(String(e).toLowerCase()); return m(t) }, document.removeChild(n)
        }();
    }
    if (!((function (global)
{

    if (!('Event' in global)) return false;
        if (typeof global.Event === 'function') return true;

        try
        {

            // In IE 9-11, the Event object exists but cannot be instantiated
            new Event('click');
            return true;
        }
        catch (e)
        {
            return false;
        }
    }(this))))
    {
        !function ()
        {
            function e(e, t)
            {
                for (var n = -1, o = e.length; ++n < o;)if (n in e && e[n] === t) return n;
                return -1
            }
            var t = { click: 1, dblclick: 1, keyup: 1, keypress: 1, keydown: 1, mousedown: 1, mouseup: 1, mousemove: 1, mouseover: 1, mouseenter: 1, mouseleave: 1, mouseout: 1, storage: 1, storagecommit: 1, textinput: 1 };
            if ("undefined" != typeof document && "undefined" != typeof window)
            {
                var n = window.Event && window.Event.prototype || null;
                window.Event = Window.prototype.Event = function (e, t)
                {
                    if (!e) throw new Error("Not enough arguments");
                    var n;
                    if ("createEvent" in document)
                    {
                        n = document.createEvent("Event");
                        var o = !(!t || t.bubbles === undefined) && t.bubbles, i = !(!t || t.cancelable === undefined) && t.cancelable;
                        return n.initEvent(e, o, i), n
                    }
                    return n = document.createEventObject(), n.type = e, n.bubbles = !(!t || t.bubbles === undefined) && t.bubbles, n.cancelable = !(!t || t.cancelable === undefined) && t.cancelable, n
                }, n && Object.defineProperty(window.Event, "prototype", { configurable: !1, enumerable: !1, writable: !0, value: n }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function ()
                {
                    var n = this, o = arguments[0], i = arguments[1];
                    if (n === window && o in t) throw new Error("In IE8 the event: " + o + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                    n._events || (n._events = {}), n._events[o] || (n._events[o] = function (t)
                    {
                        var o, i = n._events[t.type].list, r = i.slice(), c = -1, a = r.length;
                        for (t.preventDefault = function ()
                    {
                        !1 !== t.cancelable && (t.returnValue = !1)
                        }, t.stopPropagation = function ()
                        {
                            t.cancelBubble = !0
                        }, t.stopImmediatePropagation = function ()
                        {
                            t.cancelBubble = !0, t.cancelImmediate = !0
                        }, t.currentTarget = n, t.relatedTarget = t.fromElement || null, t.target = t.target || t.srcElement || n, t.timeStamp = (new Date).getTime(), t.clientX && (t.pageX = t.clientX + document.documentElement.scrollLeft, t.pageY = t.clientY + document.documentElement.scrollTop); ++c < a && !t.cancelImmediate;)c in r && (o = r[c], -1 !== e(i, o) && "function" == typeof o && o.call(n, t))
                    }, n._events[o].list = [], n.attachEvent && n.attachEvent("on" + o, n._events[o])), n._events[o].list.push(i)
                }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function ()
                {
                    var t, n = this, o = arguments[0], i = arguments[1];
                    n._events && n._events[o] && n._events[o].list && -1 !== (t = e(n._events[o].list, i)) && (n._events[o].list.splice(t, 1), n._events[o].list.length || (n.detachEvent && n.detachEvent("on" + o, n._events[o]), delete n._events[o]))
                }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function (e)
                {
                    if (!arguments.length) throw new Error("Not enough arguments");
                    if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
                    var t = this, n = e.type;
                    try
                    {
                        if (!e.bubbles)
                        {
                            e.cancelBubble = !0;
                            var o = function (e)
                            {
                                e.cancelBubble = !0, (t || window).detachEvent("on" + n, o)
                            };
                            this.attachEvent("on" + n, o)
                        }
                        this.fireEvent("on" + n, e)
                    }
                    catch (i)
                    {
                        e.target = t;
                        do
                        {
                            e.currentTarget = t, "_events" in t && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), t = 9 === t.nodeType ? t.parentWindow : t.parentNode
                        }
                        while (t && !e.cancelBubble)
                        }
                    return !0
                }, document.attachEvent("onreadystatechange", function ()
                { "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: !0 }))
                }))
            }
        }();
    }
    if (!('IntersectionObserver' in this &&
            'IntersectionObserverEntry' in this))
    {
        !function (t, e)
        { "use strict";
            function n(t)
            {
                this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || a();
                try
                {
                    this.isIntersecting = !!t.intersectionRect
                }
                catch (r) { } var e = this.boundingClientRect, n = e.width * e.height, o = this.intersectionRect, i = o.width * o.height;
                this.intersectionRatio = n ? i / n : this.isIntersecting ? 1 : 0
            }
            function o(t, e)
            {
                var n = e || {};
                if ("function" != typeof t) throw new Error("callback must be a function");
                if (n.root && 1 != n.root.nodeType) throw new Error("root must be an Element");
                this._checkForIntersections = r(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map(function (t)
                {
                    return t.value + t.unit
                }).join(" ")
            }
            function i()
            {
                return t.performance && performance.now && performance.now()
            }
            function r(t, e)
            {
                var n = null;
                return function ()
                {
                    n || (n = setTimeout(function ()
                    {
                        t(), n = null
                    }, e))
                }
            }
            function s(t, e, n, o)
            { "function" == typeof t.addEventListener ? t.addEventListener(e, n, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
            }
            function h(t, e, n, o)
            { "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
            }
            function c(t, e)
            {
                var n = Math.max(t.top, e.top), o = Math.min(t.bottom, e.bottom), i = Math.max(t.left, e.left), r = Math.min(t.right, e.right), s = r - i, h = o - n;
                return s >= 0 && h >= 0 && { top: n, bottom: o, left: i, right: r, width: s, height: h }
            }
            function u(t)
            {
                var e;
                try
                {
                    e = t.getBoundingClientRect()
                }
                catch (n) { } return e ? (e.width && e.height || (e = { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: e.right - e.left, height: e.bottom - e.top }), e) : a()
            }
            function a()
            {
                return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }
            }
            function l(t, e)
            {
                for (var n = e; n;)
                {
                    if (n == t) return !0;
                    n = p(n)
                }
                return !1
            }
            function p(t)
            {
                var e = t.parentNode;
                return e && 11 == e.nodeType && e.host ? e.host : e
            }
            if (!("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype))
            {
                var f = [];
                o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.observe = function (t)
                {
                    if (!this._observationTargets.some(function (e)
                {
                    return e.element == t
                }))
                    {
                        if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                        this._registerInstance(), this._observationTargets.push({ element: t, entry: null }), this._monitorIntersections()
                    }
                }, o.prototype.unobserve = function (t)
                {
                    this._observationTargets = this._observationTargets.filter(function (e)
                    {
                        return e.element != t
                    }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                }, o.prototype.disconnect = function () { this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance() }, o.prototype.takeRecords = function () { var t = this._queuedEntries.slice(); return this._queuedEntries = [], t }, o.prototype._initThresholds = function (t)
                {
                    var e = t || [0];
                    return Array.isArray(e) || (e = [e]), e.sort().filter(function (t, e, n)
                    {
                        if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return t !== n[e - 1]
                    })
                }, o.prototype._parseRootMargin = function (t)
                {
                    var e = t || "0px", n = e.split(/\s+/).map(function (t)
                    {
                        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                        if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                        return { value: parseFloat(e[1]), unit: e[2] }
                    });
                    return n[1] = n[1] || n[0], n[2] = n[2] || n[0], n[3] = n[3] || n[1], n
                }, o.prototype._monitorIntersections = function () { this._monitoringIntersections || (this._monitoringIntersections = !0, this._checkForIntersections(), this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(t, "resize", this._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })))) }, o.prototype._unmonitorIntersections = function () { this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, h(t, "resize", this._checkForIntersections, !0), h(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null)) }, o.prototype._checkForIntersections = function ()
                {
                    var t = this._rootIsInDom(), e = t ? this._getRootRect() : a();
                    this._observationTargets.forEach(function (o)
                    {
                        var r = o.element, s = u(r), h = this._rootContainsTarget(r), c = o.entry, a = t && h && this._computeTargetAndRootIntersection(r, e), l = o.entry = new n({ time: i(), target: r, boundingClientRect: s, rootBounds: e, intersectionRect: a });
                        c ? t && h ? this._hasCrossedThreshold(c, l) && this._queuedEntries.push(l) : c && c.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
                    }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }, o.prototype._computeTargetAndRootIntersection = function (n, o)
                {
                    if ("none" != t.getComputedStyle(n).display)
                    {
                        for (var i = u(n), r = i, s = p(n), h = !1; !h;)
                        {
                            var a = null, l = 1 == s.nodeType ? t.getComputedStyle(s) : {};
                            if ("none" == l.display) return;
                            if (s == this.root || s == e ? (h = !0, a = o) : s != e.body && s != e.documentElement && "visible" != l.overflow && (a = u(s)), a && !(r = c(a, r))) break;
                            s = p(s)
                        }
                        return r
                    }
                }, o.prototype._getRootRect = function ()
                {
                    var t;
                    if (this.root) t = u(this.root);
                    else
                    {
                        var n = e.documentElement, o = e.body;
                        t = { top: 0, left: 0, right: n.clientWidth || o.clientWidth, width: n.clientWidth || o.clientWidth, bottom: n.clientHeight || o.clientHeight, height: n.clientHeight || o.clientHeight }
                    }
                    return this._expandRectByRootMargin(t)
                }, o.prototype._expandRectByRootMargin = function (t)
                {
                    var e = this._rootMarginValues.map(function (e, n)
                    {
                        return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                    }), n = { top: t.top - e[0], right: t.right + e[1], bottom: t.bottom + e[2], left: t.left - e[3] };
                    return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                }, o.prototype._hasCrossedThreshold = function (t, e)
                {
                    var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1, o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                    if (n !== o) for (var i = 0; i < this.thresholds.length; i++)
                        {
                            var r = this.thresholds[i];
                            if (r == n || r == o || r < n != r < o) return !0
                            }
                }, o.prototype._rootIsInDom = function () { return !this.root || l(e, this.root) }, o.prototype._rootContainsTarget = function (t) { return l(this.root || e, t) }, o.prototype._registerInstance = function () { f.indexOf(this) < 0 && f.push(this) }, o.prototype._unregisterInstance = function () { var t = f.indexOf(this); -1 != t && f.splice(t, 1) }, t.IntersectionObserver = o, t.IntersectionObserverEntry = n
            }
        }(window, document);
    }
    if (!('Intl' in this))
    {
        !function (e, r)
        { "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : e.IntlPolyfill = r()
        }(this, function ()
        {
            "use strict";
            function e(e)
            {
                if ("function" == typeof Math.log10) return Math.floor(Math.log10(e));
                var r = Math.round(Math.log(e) * Math.LOG10E);
                return r - (Number("1e" + r) > e)
            }
            function r(e)
            {
                for (var t in e) (e instanceof r || Me.call(e, t)) && Ie(this, t, { value: e[t], enumerable: !0, writable: !0, configurable: !0 })
                }
            function t()
            {
                Ie(this, "length", { writable: !0, value: 0 }), arguments.length && Ge.apply(this, qe.call(arguments))
            }
            function n()
            {
                if ($e.disableRegExpRestore) return function () { };
                for (var e = { lastMatch: RegExp.lastMatch || "", leftContext: RegExp.leftContext, multiline: RegExp.multiline, input: RegExp.input }, r = !1, n = 1; n <= 9; n++)r = (e["$" + n] = RegExp["$" + n]) || r;
                return function ()
                {
                    var n = /[.?*+^$[\]\\() {}|-]/g, a = e.lastMatch.replace(n, "\\$&"), i = new t;
                    if (r) for (var o = 1; o <= 9; o++)
                        {
                            var s = e["$" + o];
                            s ? (s = s.replace(n, "\\$&"), a = a.replace(s, "(" + s + ")")) : a = "()" + a, Ge.call(i, a.slice(0, a.indexOf("(") + 1)), a = a.slice(a.indexOf("(") + 1)
                        }
                    var l = Ze.call(i, "") + a;
                    l = l.replace(/(\\\(|\\\)|[^()])+/g, function (e)
                    {
                        return "[\\s\\S]{" + e.replace("\\", "").length + "}"
                    });
                    var c = new RegExp(l, e.multiline ? "gm" : "g");
                    c.lastIndex = e.leftContext.length, c.exec(e.input)
                }
            }
            function a(e)
            {
                if (null === e) throw new TypeError("Cannot convert null or undefined to object");
                return "object" === ("undefined" == typeof e ? "undefined" : Ne.typeof(e)) ? e : Object(e)
            }
            function i(e)
            {
                return "number" == typeof e ? e : Number(e)
            }
            function o(e)
            {
                var r = i(e);
                return isNaN(r) ? 0 : 0 === r || r === -0 || r === +(1 / 0) || r === -(1 / 0) ? r : r < 0 ? Math.floor(Math.abs(r)) * -1 : Math.floor(Math.abs(r))
            }
            function s(e)
            {
                var r = o(e);
                return r <= 0 ? 0 : r === 1 / 0 ? Math.pow(2, 53) - 1 : Math.min(r, Math.pow(2, 53) - 1)
            }
            function l(e)
            {
                return Me.call(e, "__getInternalProperties") ? e.__getInternalProperties(Ke) : Re(null)
            }
            function c(e)
            {
                cr = e
            }
            function u(e)
            {
                for (var r = e.length; r--;)
                {
                    var t = e.charAt(r);
                    t >= "a" && t <= "z" && (e = e.slice(0, r) + t.toUpperCase() + e.slice(r + 1))
                }
                return e
            }
            function g(e)
            {
                return !!ir.test(e) && (!or.test(e) && !sr.test(e))
            }
            function f(e)
            {
                var r = void 0, t = void 0;
                e = e.toLowerCase(), t = e.split("-");
                for (var n = 1, a = t.length; n < a; n++)if (2 === t[n].length) t[n] = t[n].toUpperCase();
                    else if (4 === t[n].length) t[n] = t[n].charAt(0).toUpperCase() + t[n].slice(1);
                    else if (1 === t[n].length && "x" !== t[n]) break;
                e = Ze.call(t, "-"), (r = e.match(lr)) && r.length > 1 && (r.sort(), e = e.replace(RegExp("(?:" + lr.source + ")+", "i"), Ze.call(r, ""))), Me.call(ur.tags, e) && (e = ur.tags[e]), t = e.split("-");
                for (var i = 1, o = t.length; i < o; i++)Me.call(ur.subtags, t[i]) ? t[i] = ur.subtags[t[i]] : Me.call(ur.extLang, t[i]) && (t[i] = ur.extLang[t[i]][0], 1 === i && ur.extLang[t[1]][1] === t[0] && (t = qe.call(t, i++), o -= 1));
                return Ze.call(t, "-")
            }
            function m()
            {
                return cr
            }
            function v(e)
            {
                var r = String(e), t = u(r);
                return gr.test(t) !== !1
            }
            function d(e)
            {
                if (void 0 === e) return new t;
                var r = new t;
                e = "string" == typeof e ? [e] : e;
                for (var n = a(e), i = s(n.length), o = 0; o < i;)
                {
                    var l = String(o), c = l in n;
                    if (c)
                    {
                        var u = n[l];
                        if (null === u || "string" != typeof u && "object" !== ("undefined" == typeof u ? "undefined" : Ne.typeof(u))) throw new TypeError("String or Object type expected");
                        var m = String(u);
                        if (!g(m)) throw new RangeError("'" + m + "' is not a structurally valid language tag");
                        m = f(m), Ae.call(r, m) === -1 && Ge.call(r, m)
                    }
                    o++
                }
                return r
            }
            function h(e, r)
            {
                for (var t = r; t;)
                {
                    if (Ae.call(e, t) > -1) return t;
                    var n = t.lastIndexOf("-");
                    if (n < 0) return;
                    n >= 2 && "-" === t.charAt(n - 2) && (n -= 2), t = t.substring(0, n)
                }
            }
            function p(e, t)
            {
                for (var n = 0, a = t.length, i = void 0, o = void 0, s = void 0; n < a && !i;)o = t[n], s = String(o).replace(fr, ""), i = h(e, s), n++;
                var l = new r;
                if (void 0 !== i)
                {
                    if (l["[[locale]]"] = i, String(o) !== String(s))
                    {
                        var c = o.match(fr)[0], u = o.indexOf("-u-");
                        l["[[extension]]"] = c, l["[[extensionIndex]]"] = u
                    }
                }
                else l["[[locale]]"] = m();
                return l
            }
            function y(e, r)
            {
                return p(e, r)
            }
            function b(e, t, n, a, i)
            {
                if (0 === e.length) throw new ReferenceError("No locale data has been provided for this object yet.");
                var o = n["[[localeMatcher]]"], s = void 0;
                s = "lookup" === o ? p(e, t) : y(e, t);
                var l = s["[[locale]]"], c = void 0, u = void 0;
                if (Me.call(s, "[[extension]]"))
                {
                    var g = s["[[extension]]"], m = String.prototype.split;
                    c = m.call(g, "-"), u = c.length
                }
                var v = new r;
                v["[[dataLocale]]"] = l;
                for (var d = "-u", h = 0, b = a.length; h < b;)
                {
                    var w = a[h], x = i[l], j = x[w], D = j[0], z = "", k = Ae;
                    if (void 0 !== c)
                    {
                        var O = k.call(c, w);
                        if (O !== -1) if (O + 1 < u && c[O + 1].length > 2)
                            {
                                var F = c[O + 1], S = k.call(j, F);
                                S !== -1 && (D = F, z = "-" + w + "-" + D)
                            }
                            else
                            {
                                var E = k(j, "true");
                                E !== -1 && (D = "true")
                            }
                    }
                    if (Me.call(n, "[[" + w + "]]"))
                    {
                        var L = n["[[" + w + "]]"];
                        k.call(j, L) !== -1 && L !== D && (D = L, z = "")
                    }
                    v["[[" + w + "]]"] = D, d += z, h++
                }
                if (d.length > 2)
                {
                    var P = l.indexOf("-x-");
                    if (P === -1) l += d;
                    else
                    {
                        var N = l.substring(0, P), T = l.substring(P);
                        l = N + d + T
                    }
                    l = f(l)
                }
                return v["[[locale]]"] = l, v
            }
            function w(e, r)
            {
                for (var n = r.length, a = new t, i = 0; i < n;)
                {
                    var o = r[i], s = String(o).replace(fr, ""), l = h(e, s);
                    void 0 !== l && Ge.call(a, o), i++
                }
                var c = qe.call(a);
                return c
            }
            function x(e, r)
            {
                return w(e, r)
            }
            function j(e, t, n)
            {
                var i = void 0, o = void 0;
                if (void 0 !== n && (n = new r(a(n)), i = n.localeMatcher, void 0 !== i && (i = String(i), "lookup" !== i && "best fit" !== i))) throw new RangeError('matcher should be "lookup" or "best fit"');
                o = void 0 === i || "best fit" === i ? x(e, t) : w(e, t);
                for (var s in o) Me.call(o, s) && Ie(o, s, { writable: !1, configurable: !1, value: o[s] });
                return Ie(o, "length", { writable: !1 }), o
            }
            function D(e, r, t, n, a)
            {
                var i = e[r];
                if (void 0 !== i)
                {
                    if (i = "boolean" === t ? Boolean(i) : "string" === t ? String(i) : i, void 0 !== n && Ae.call(n, i) === -1) throw new RangeError("'" + i + "' is not an allowed value for `" + r + "`");
                    return i
                }
                return a
            }
            function z(e, r, t, n, a)
            {
                var i = e[r];
                if (void 0 !== i)
                {
                    if (i = Number(i), isNaN(i) || i < t || i > n) throw new RangeError("Value is not a number or outside accepted range");
                    return Math.floor(i)
                }
                return a
            }
            function k(e)
            {
                for (var r = d(e), t = [], n = r.length, a = 0; a < n;)t[a] = r[a], a++;
                return t
            }
            function O()
            {
                var e = arguments[0], r = arguments[1];
                return this && this !== mr ? F(a(this), e, r) : new mr.NumberFormat(e, r)
            }
            function F(e, i, o)
            {
                var s = l(e), c = n();
                if (s["[[initializedIntlObject]]"] === !0) throw new TypeError("`this` object has already been initialized as an Intl object");
                Ie(e, "__getInternalProperties", { value: function ()
                {
                    if (arguments[0] === Ke) return s
                    }
                                                 }), s["[[initializedIntlObject]]"] = !0;
                var u = d(i);
                o = void 0 === o ? {} :
                               a(o);
                var g = new r, f = D(o, "localeMatcher", "string", new t("lookup", "best fit"), "best fit");
                g["[[localeMatcher]]"] = f;
                var m = $e.NumberFormat["[[localeData]]"], h = b($e.NumberFormat["[[availableLocales]]"], u, g, $e.NumberFormat["[[relevantExtensionKeys]]"], m);
                s["[[locale]]"] = h["[[locale]]"], s["[[numberingSystem]]"] = h["[[nu]]"], s["[[dataLocale]]"] = h["[[dataLocale]]"];
                var p = h["[[dataLocale]]"], y = D(o, "style", "string", new t("decimal", "percent", "currency"), "decimal");
                s["[[style]]"] = y;
                var w = D(o, "currency", "string");
                if (void 0 !== w && !v(w)) throw new RangeError("'" + w + "' is not a valid currency code");
                if ("currency" === y && void 0 === w) throw new TypeError("Currency code is required when style is currency");
                var x = void 0; "currency"
                === y && (w = w.toUpperCase(), s["[[currency]]"] = w, x = S(w));
                var j = D(o, "currencyDisplay", "string", new t("code", "symbol", "name"), "symbol"); "currency"
                === y && (s["[[currencyDisplay]]"] = j);
                var k = z(o, "minimumIntegerDigits", 1, 21, 1);
                s["[[minimumIntegerDigits]]"] = k;
                var O = "currency" === y ? x : 0, F = z(o, "minimumFractionDigits", 0, 20, O);
                s["[[minimumFractionDigits]]"] = F;
                var L = "currency" === y ? Math.max(F, x) : "percent" === y ? Math.max(F, 0) : Math.max(F, 3), P = z(o, "maximumFractionDigits", F, 20, L);
                s["[[maximumFractionDigits]]"] = P;
                var N = o.minimumSignificantDigits, T = o.maximumSignificantDigits;
                void 0 === N && void 0 === T || (N = z(o, "minimumSignificantDigits", 1, 21, 1), T = z(o, "maximumSignificantDigits", N, 21, 21), s["[[minimumSignificantDigits]]"] = N, s["[[maximumSignificantDigits]]"] = T);
                var _ = D(o, "useGrouping", "boolean", void 0, !0);
                s["[[useGrouping]]"] = _;
                var M = m[p], I = M.patterns, A = I[y];
                return s["[[positivePattern]]"] = A.positivePattern, s["[[negativePattern]]"] = A.negativePattern, s["[[boundFormat]]"] = void 0, s["[[initializedNumberFormat]]"] = !0, _e && (e.format = E.call(e)), c(), e
            }
            function S(e)
            {
                return void 0 !== vr[e] ? vr[e] : 2
            }
            function E()
            {
                var e = null !== this && "object" === Ne.typeof(this) && l(this);
                if (!e || !e["[[initializedNumberFormat]]"]) throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
                if (void 0 === e["[[boundFormat]]"])
                {
                    var r = function (e) { return T(this, Number(e)) }, t = Ue.call(r, this);
                    e["[[boundFormat]]"] = t
                }
                return e["[[boundFormat]]"]
            }
            function L()
            {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0], r = null !== this && "object" === Ne.typeof(this) && l(this);
                if (!r || !r["[[initializedNumberFormat]]"]) throw new TypeError("`this` value for formatToParts() is not an initialized Intl.NumberFormat object.");
                var t = Number(e);
                return P(this, t)
            }
            function P(e, r)
            {
                for (var t = N(e, r), n = [], a = 0, i = 0; t.length > i; i++)
                {
                    var o = t[i], s = {};
                    s.type = o["[[type]]"], s.value = o["[[value]]"], n[a] = s, a += 1
                }
                return n
            }
            function N(e, r)
            {
                var n = l(e), a = n["[[dataLocale]]"], i = n["[[numberingSystem]]"], o = $e.NumberFormat["[[localeData]]"][a], s = o.symbols[i] || o.symbols.latn, c = void 0;
                !isNaN(r) && r < 0 ? (r = -r, c = n["[[negativePattern]]"]) : c = n["[[positivePattern]]"];
                for (var u = new t, g = c.indexOf("{", 0), f = 0, m = 0, v = c.length; g > -1 && g < v;)
                {
                    if (f = c.indexOf("}", g), f === -1) throw new Error;
                    if (g > m)
                    {
                        var d = c.substring(m, g);
                        Ge.call(u, { "[[type]]": "literal", "[[value]]": d })
                    }
                    var h = c.substring(g + 1, f);
                    if ("number" === h) if (isNaN(r))
                        {
                            var p = s.nan;
                            Ge.call(u, { "[[type]]": "nan", "[[value]]": p })
                        }
                        else if (isFinite(r))
                        { "percent" === n["[[style]]"] && isFinite(r) && (r *= 100);
                            var y = void 0;
                            y = Me.call(n, "[[minimumSignificantDigits]]") && Me.call(n, "[[maximumSignificantDigits]]") ? _(r, n["[[minimumSignificantDigits]]"], n["[[maximumSignificantDigits]]"]) : M(r, n["[[minimumIntegerDigits]]"], n["[[minimumFractionDigits]]"], n["[[maximumFractionDigits]]"]), dr[i] ? !function ()
                            {
                                var e = dr[i];
                                y = String(y).replace(/\d/g, function (r)
                                {
                                    return e[r]
                                })
                            }() : y = String(y);
                                var b = void 0, w = void 0, x = y.indexOf(".", 0);
                                if (x > 0 ? (b = y.substring(0, x), w = y.substring(x + 1, x.length)) : (b = y, w = void 0), n["[[useGrouping]]"] === !0)
                            {
                                var j = s.group, D = [], z = o.patterns.primaryGroupSize || 3, k = o.patterns.secondaryGroupSize || z;
                                if (b.length > z)
                                {
                                    var O = b.length - z, F = O % k, S = b.slice(0, F);
                                    for (S.length && Ge.call(D, S); F < O;)Ge.call(D, b.slice(F, F + k)), F += k;
                                    Ge.call(D, b.slice(O))
                                }
                                else Ge.call(D, b);
                                if (0 === D.length) throw new Error;
                                for (; D.length;)
                                {
                                    var E = Be.call(D);
                                    Ge.call(u, { "[[type]]": "integer", "[[value]]": E }), D.length && Ge.call(u, { "[[type]]": "group", "[[value]]": j })
                                }
                            }
                            else Ge.call(u, { "[[type]]": "integer", "[[value]]": b });
                            if (void 0 !== w)
                            {
                                var L = s.decimal;
                                Ge.call(u, { "[[type]]": "decimal", "[[value]]": L }), Ge.call(u, { "[[type]]": "fraction", "[[value]]": w })
                            }
                        }
                        else
                        {
                            var P = s.infinity;
                            Ge.call(u, { "[[type]]": "infinity", "[[value]]": P })
                        }
                    else if ("plusSign" === h)
                    {
                        var N = s.plusSign;
                        Ge.call(u, { "[[type]]": "plusSign", "[[value]]": N })
                    }
                    else if ("minusSign" === h)
                    {
                        var T = s.minusSign;
                        Ge.call(u, { "[[type]]": "minusSign", "[[value]]": T })
                    }
                    else if ("percentSign" === h && "percent" === n["[[style]]"])
                    {
                        var I = s.percentSign;
                        Ge.call(u, { "[[type]]": "literal", "[[value]]": I })
                    }
                    else if ("currency" === h && "currency" === n["[[style]]"])
                    {
                        var A = n["[[currency]]"], R = void 0; "code"
                        === n["[[currencyDisplay]]"] ? R = A : "symbol" === n["[[currencyDisplay]]"] ? R = o.currencies[A] || A : "name" === n["[[currencyDisplay]]"] && (R = A), Ge.call(u, { "[[type]]": "currency", "[[value]]": R })
                    }
                    else
                    {
                        var q = c.substring(g, f);
                        Ge.call(u, { "[[type]]": "literal", "[[value]]": q })
                    }
                    m = f + 1, g = c.indexOf("{", m)
                }
                if (m < v)
                {
                    var C = c.substring(m, v);
                    Ge.call(u, { "[[type]]": "literal", "[[value]]": C })
                }
                return u
            }
            function T(e, r)
            {
                for (var t = N(e, r), n = "", a = 0; t.length > a; a++)
                {
                    var i = t[a];
                    n += i["[[value]]"]
                }
                return n
            }
            function _(r, t, n)
            {
                var a = n, i = void 0, o = void 0;
                if (0 === r) i = Ze.call(Array(a + 1), "0"), o = 0;
                else
                {
                    o = e(Math.abs(r));
                    var s = Math.round(Math.exp(Math.abs(o - a + 1) * Math.LN10));
                    i = String(Math.round(o - a + 1 < 0 ? r * s : r / s))
                }
                if (o >= a) return i + Ze.call(Array(o - a + 1 + 1), "0");
                if (o === a - 1) return i;
                if (o >= 0 ? i = i.slice(0, o + 1) + "." + i.slice(o + 1) : o < 0 && (i = "0." + Ze.call(Array(-(o + 1) + 1), "0") + i), i.indexOf(".") >= 0 && n > t)
                {
                    for (var l = n - t; l > 0 && "0" === i.charAt(i.length - 1);)i = i.slice(0, -1), l--; "."
                    === i.charAt(i.length - 1) && (i = i.slice(0, -1))
                }
                return i
            }
            function M(e, r, t, n)
            {
                var a = n, i = Math.pow(10, a) * e, o = 0 === i ? "0" : i.toFixed(0), s = void 0, l = (s = o.indexOf("e")) > -1 ? o.slice(s + 1) : 0;
                l && (o = o.slice(0, s).replace(".", ""), o += Ze.call(Array(l - (o.length - 1) + 1), "0"));
                var c = void 0;
                if (0 !== a)
                {
                    var u = o.length;
                    if (u <= a)
                    {
                        var g = Ze.call(Array(a + 1 - u + 1), "0");
                        o = g + o, u = a + 1
                    }
                    var f = o.substring(0, u - a), m = o.substring(u - a, o.length);
                    o = f + "." + m, c = f.length
                }
                else c = o.length;
                for (var v = n - t; v > 0 && "0" === o.slice(-1);)o = o.slice(0, -1), v--;
                if ("." === o.slice(-1) && (o = o.slice(0, -1)), c < r)
                {
                    var d = Ze.call(Array(r - c + 1), "0");
                    o = d + o
                }
                return o
            }
            function I(e)
            {
                for (var r = 0; r < wr.length; r += 1)if (e.hasOwnProperty(wr[r])) return !1;
                return !0
            }
            function A(e)
            {
                for (var r = 0; r < br.length; r += 1)if (e.hasOwnProperty(br[r])) return !1;
                return !0
            }
            function R(e, r)
            {
                for (var t = { _: {} }, n = 0; n < br.length; n += 1)e[br[n]] && (t[br[n]] = e[br[n]]), e._[br[n]] && (t._[br[n]] = e._[br[n]]);
                for (var a = 0; a < wr.length; a += 1)r[wr[a]] && (t[wr[a]] = r[wr[a]]), r._[wr[a]] && (t._[wr[a]] = r._[wr[a]]);
                return t
            }
            function q(e)
            {
                return e.pattern12 = e.extendedPattern.replace(/'([^']*)'/g, function (e, r) { return r ? r : "'" }), e.pattern = e.pattern12.replace(" {ampm}", "").replace(pr, ""), e } function C(e, r) { switch (e.charAt(0)) { case "G": return r.era = ["short", "short", "short", "long", "narrow"][e.length - 1], " {era}"; case "y": case "Y": case "u": case "U": case "r": return r.year = 2 === e.length ? "2-digit" : "numeric", " {year}"; case "Q": case "q": return r.quarter = ["numeric", "2-digit", "short", "long", "narrow"][e.length - 1], " {quarter}"; case "M": case "L": return r.month = ["numeric", "2-digit", "short", "long", "narrow"][e.length - 1], " {month}"; case "w": return r.week = 2 === e.length ? "2-digit" : "numeric", " {weekday}"; case "W": return r.week = "numeric", " {weekday}"; case "d": return r.day = 2 === e.length ? "2-digit" : "numeric", " {day}"; case "D": case "F": case "g": return r.day = "numeric", " {day}"; case "E": return r.weekday = ["short", "short", "short", "long", "narrow", "short"][e.length - 1], " {weekday}"; case "e": return r.weekday = ["numeric", "2-digit", "short", "long", "narrow", "short"][e.length - 1], " {weekday}"; case "c": return r.weekday = ["numeric", void 0, "short", "long", "narrow", "short"][e.length - 1], " {weekday}"; case "a": case "b": case "B": return r.hour12 = !0, " {ampm}"; case "h": case "H": return r.hour = 2 === e.length ? "2-digit" : "numeric", " {hour}"; case "k": case "K": return r.hour12 = !0, r.hour = 2 === e.length ? "2-digit" : "numeric", " {hour}"; case "m": return r.minute = 2 === e.length ? "2-digit" : "numeric", " {minute}"; case "s": return r.second = 2 === e.length ? "2-digit" : "numeric", " {second}"; case "S": case "A": return r.second = "numeric", " {second}"; case "z": case "Z": case "O": case "v": case "V": case "X": case "x": return r.timeZoneName = e.length < 4 ? "short" : "long", " {timeZoneName}" } } function G(e, r) { if (!yr.test(r)) { var t = { originalPattern: r, _: {} }; return t.extendedPattern = r.replace(hr, function (e) { return C(e, t._) }), e.replace(hr, function (e) { return C(e, t) }), q(t) } } function Z(e) { var r = e.availableFormats, t = e.timeFormats, n = e.dateFormats, a = [], i = void 0, o = void 0, s = void 0, l = void 0, c = void 0, u = [], g = []; for (i in r) r.hasOwnProperty(i) && (o = r[i], s = G(i, o), s && (a.push(s), I(s) ? g.push(s) : A(s) && u.push(s))); for (i in t) t.hasOwnProperty(i) && (o = t[i], s = G(i, o), s && (a.push(s), u.push(s))); for (i in n) n.hasOwnProperty(i) && (o = n[i], s = G(i, o), s && (a.push(s), g.push(s))); for (l = 0; l < u.length; l += 1)for (c = 0; c < g.length; c += 1)o = "long" === g[c].month ? g[c].weekday ? e.full : e.long : "short" === g[c].month ? e.medium : e.short, s = R(g[c], u[l]), s.originalPattern = o, s.extendedPattern = o.replace(" {0}", u[l].extendedPattern).replace(" {1}", g[c].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi, ""), a.push(q(s)); return a } function B(e, r) { if (xr[e] && xr[e][r]) { var t; return t = { originalPattern: xr[e][r], _: ge({}, e, r), extendedPattern: " {" + e + "}" }, ge(t, e, r), ge(t, "pattern12", " {" + e + "}"), ge(t, "pattern", " {" + e + "}"), t } } function U(e, r, t, n, a) { var i = e[r] && e[r][t] ? e[r][t] : e.gregory[t], o = { narrow: ["short", "long"], short: ["long", "narrow"], long: ["short", "narrow"] }, s = Me.call(i, n) ? i[n] : Me.call(i, o[n][0]) ? i[o[n][0]] : i[o[n][1]]; return null !== a ? s[a] : s } function $() { var e = arguments[0], r = arguments[1]; return this && this !== mr ? K(a(this), e, r) : new mr.DateTimeFormat(e, r) } function K(e, a, i) { var o = l(e), s = n(); if (o["[[initializedIntlObject]]"] === !0) throw new TypeError("`this` object has already been initialized as an Intl object"); Ie(e, "__getInternalProperties", { value: function () { if (arguments[0] === Ke) return o } }), o["[[initializedIntlObject]]"] = !0; var c = d(a); i = H(i, "any", "date"); var g = new r, f = D(i, "localeMatcher", "string", new t("lookup", "best fit"), "best fit"); g["[[localeMatcher]]"] = f; var m = $e.DateTimeFormat, v = m["[[localeData]]"], h = b(m["[[availableLocales]]"], c, g, m["[[relevantExtensionKeys]]"], v); o["[[locale]]"] = h["[[locale]]"], o["[[calendar]]"] = h["[[ca]]"], o["[[numberingSystem]]"] = h["[[nu]]"], o["[[dataLocale]]"] = h["[[dataLocale]]"]; var p = h["[[dataLocale]]"], y = i.timeZone; if (void 0 !== y && (y = u(y), "UTC" !== y)) throw new RangeError("timeZone is not supported."); o["[[timeZone]]"] = y, g = new r; for (var w in Dr) if (Me.call(Dr, w)) { var x = D(i, w, "string", Dr[w]); g["[[" + w + "]]"] = x } var j = void 0, z = v[p], k = Y(z.formats); if (f = D(i, "formatMatcher", "string", new t("basic", "best fit"), "best fit"), z.formats = k, "basic" === f) j = W(g, k); else { var O = D(i, "hour12", "boolean"); g.hour12 = void 0 === O ? z.hour12 : O, j = X(g, k) } for (var F in Dr) if (Me.call(Dr, F) && Me.call(j, F)) { var S = j[F]; S = j._ && Me.call(j._, F) ? j._[F] : S, o["[[" + F + "]]"] = S } var E = void 0, L = D(i, "hour12", "boolean"); if (o["[[hour]]"]) if (L = void 0 === L ? z.hour12 : L, o["[[hour12]]"] = L, L === !0) { var P = z.hourNo0; o["[[hourNo0]]"] = P, E = j.pattern12 } else E = j.pattern; else E = j.pattern; return o["[[pattern]]"] = E, o["[[boundFormat]]"] = void 0, o["[[initializedDateTimeFormat]]"] = !0, _e && (e.format = V.call(e)), s(), e } function Y(e) { return "[object Array]" === Object.prototype.toString.call(e) ? e : Z(e) } function H(e, t, n) { if (void 0 === e) e = null; else { var i = a(e); e = new r; for (var o in i) e[o] = i[o] } var s = Re; e = s(e); var l = !0; return "date" !== t && "any" !== t || void 0 === e.weekday && void 0 === e.year && void 0 === e.month && void 0 === e.day || (l = !1), "time" !== t && "any" !== t || void 0 === e.hour && void 0 === e.minute && void 0 === e.second || (l = !1), !l || "date" !== n && "all" !== n || (e.year = e.month = e.day = "numeric"), !l || "time" !== n && "all" !== n || (e.hour = e.minute = e.second = "numeric"), e } function W(e, r) { for (var t = 120, n = 20, a = 8, i = 6, o = 6, s = 3, l = -(1 / 0), c = void 0, u = 0, g = r.length; u < g;) { var f = r[u], m = 0; for (var v in Dr) if (Me.call(Dr, v)) { var d = e["[[" + v + "]]"], h = Me.call(f, v) ? f[v] : void 0; if (void 0 === d && void 0 !== h) m -= n; else if (void 0 !== d && void 0 === h) m -= t; else { var p = ["2-digit", "numeric", "narrow", "short", "long"], y = Ae.call(p, d), b = Ae.call(p, h), w = Math.max(Math.min(b - y, 2), -2); 2 === w ? m -= i : 1 === w ? m -= s : w === -1 ? m -= o : w === -2 && (m -= a) } } m > l && (l = m, c = f), u++ } return c } function X(e, r) { var t = []; for (var n in Dr) Me.call(Dr, n) && void 0 !== e["[[" + n + "]]"] && t.push(n); if (1 === t.length) { var a = B(t[0], e["[[" + t[0] + "]]"]); if (a) return a } for (var i = 120, o = 20, s = 8, l = 6, c = 6, u = 3, g = 2, f = 1, m = -(1 / 0), v = void 0, d = 0, h = r.length; d < h;) { var p = r[d], y = 0; for (var b in Dr) if (Me.call(Dr, b)) { var w = e["[[" + b + "]]"], x = Me.call(p, b) ? p[b] : void 0, j = Me.call(p._, b) ? p._[b] : void 0; if (w !== j && (y -= g), void 0 === w && void 0 !== x) y -= o; else if (void 0 !== w && void 0 === x) y -= i; else { var D = ["2-digit", "numeric", "narrow", "short", "long"], z = Ae.call(D, w), k = Ae.call(D, x), O = Math.max(Math.min(k - z, 2), -2); k <= 1 && z >= 2 || k >= 2 && z <= 1 ? O > 0 ? y -= l : O < 0 && (y -= s) : O > 1 ? y -= u : O < -1 && (y -= c) } } p._.hour12 !== e.hour12 && (y -= f), y > m && (m = y, v = p), d++ } return v } function V() { var e = null !== this && "object" === Ne.typeof(this) && l(this); if (!e || !e["[[initializedDateTimeFormat]]"]) throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object."); if (void 0 === e["[[boundFormat]]"]) { var r = function () { var e = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0], r = void 0 === e ? Date.now() : i(e); return ee(this, r) }, t = Ue.call(r, this); e["[[boundFormat]]"] = t } return e["[[boundFormat]]"] } function J() { var e = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0], r = null !== this && "object" === Ne.typeof(this) && l(this); if (!r || !r["[[initializedDateTimeFormat]]"]) throw new TypeError("`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object."); var t = void 0 === e ? Date.now() : i(e); return re(this, t) } function Q(e, r) { if (!isFinite(r)) throw new RangeError("Invalid valid date passed to format"); var a = e.__getInternalProperties(Ke); n(); for (var i = a["[[locale]]"], o = new mr.NumberFormat([i], { useGrouping: !1 }), s = new mr.NumberFormat([i], { minimumIntegerDigits: 2, useGrouping: !1 }), l = te(r, a["[[calendar]]"], a["[[timeZone]]"]), c = a["[[pattern]]"], u = new t, g = 0, f = c.indexOf(" {"), m = 0, v = a["[[dataLocale]]"], d = $e.DateTimeFormat["[[localeData]]"][v].calendars, h = a["[[calendar]]"]; f !== -1;) { var p = void 0; if (m = c.indexOf("}", f), m === -1) throw new Error("Unclosed pattern"); f > g && Ge.call(u, { type: "literal", value: c.substring(g, f) }); var y = c.substring(f + 1, m); if (Dr.hasOwnProperty(y)) { var b = a["[[" + y + "]]"], w = l["[[" + y + "]]"]; if ("year" === y && w <= 0 ? w = 1 - w : "month" === y ? w++ : "hour" === y && a["[[hour12]]"] === !0 && (w %= 12, 0 === w && a["[[hourNo0]]"] === !0 && (w = 12)), "numeric" === b) p = T(o, w); else if ("2-digit" === b) p = T(s, w), p.length > 2 && (p = p.slice(-2)); else if (b in jr) switch (y) { case "month": p = U(d, h, "months", b, l["[[" + y + "]]"]); break; case "weekday": try { p = U(d, h, "days", b, l["[[" + y + "]]"]) } catch (e) { throw new Error("Could not find weekday data for locale " + i) } break; case "timeZoneName": p = ""; break; case "era": try { p = U(d, h, "eras", b, l["[[" + y + "]]"]) } catch (e) { throw new Error("Could not find era data for locale " + i) } break; default: p = l["[[" + y + "]]"] }Ge.call(u, { type: y, value: p }) } else if ("ampm" === y) { var x = l["[[hour]]"]; p = U(d, h, "dayPeriods", x > 11 ? "pm" : "am", null), Ge.call(u, { type: "dayPeriod", value: p }) } else Ge.call(u, { type: "literal", value: c.substring(f, m + 1) }); g = m + 1, f = c.indexOf(" {", g) } return m < c.length - 1 && Ge.call(u, { type: "literal", value: c.substr(m + 1) }), u } function ee(e, r) { for (var t = Q(e, r), n = "", a = 0; t.length > a; a++) { var i = t[a]; n += i.value } return n } function re(e, r) { for (var t = Q(e, r), n = [], a = 0; t.length > a; a++) { var i = t[a]; n.push({ type: i.type, value: i.value }) } return n } function te(e, t, n) { var a = new Date(e), i = "get" + (n || ""); return new r({ "[[weekday]]": a[i + "Day"](), "[[era]]": +(a[i + "FullYear"]() >= 0), "[[year]]": a[i + "FullYear"](), "[[month]]": a[i + "Month"](), "[[day]]": a[i + "Date"](), "[[hour]]": a[i + "Hours"](), "[[minute]]": a[i + "Minutes"](), "[[second]]": a[i + "Seconds"](), "[[inDST]]": !1 }) } function ne(e, r) { if (!e.number) throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat"); var t = void 0, n = [r], a = r.split("-"); for (a.length > 2 && 4 === a[1].length && Ge.call(n, a[0] + "-" + a[2]); t = Be.call(n);)Ge.call($e.NumberFormat["[[availableLocales]]"], t), $e.NumberFormat["[[localeData]]"][t] = e.number, e.date && (e.date.nu = e.number.nu, Ge.call($e.DateTimeFormat["[[availableLocales]]"], t), $e.DateTimeFormat["[[localeData]]"][t] = e.date); void 0 === cr && c(r) } var ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e }, ie = function () { var e = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103; return function (r, t, n, a) { var i = r && r.defaultProps, o = arguments.length - 3; if (t || 0 === o || (t = {}), t && i) for (var s in i) void 0 === t[s] && (t[s] = i[s]); else t || (t = i || {}); if (1 === o) t.children = a; else if (o > 1) { for (var l = Array(o), c = 0; c < o; c++)l[c] = arguments[c + 3]; t.children = l } return { $$typeof: e, type: r, key: void 0 === n ? null : "" + n, ref: null, props: t, _owner: null } } }(), oe = function (e) { return function () { var r = e.apply(this, arguments); return new Promise(function (e, t) { function n(a, i) { try { var o = r[a](i), s = o.value } catch (e) { return void t(e) } return o.done ? void e(s) : Promise.resolve(s).then(function (e) { return n("next", e) }, function (e) { return n("throw", e) }) } return n("next") }) } }, se = function (e, r) { if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function") }, le = function () { function e(e, r) { for (var t = 0; t < r.length; t++) { var n = r[t]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function (r, t, n) { return t && e(r.prototype, t), n && e(r, n), r } }(), ce = function (e, r) { for (var t in r) { var n = r[t]; n.configurable = n.enumerable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, t, n) } return e }, ue = function (e, r) { for (var t = Object.getOwnPropertyNames(r), n = 0; n < t.length; n++) { var a = t[n], i = Object.getOwnPropertyDescriptor(r, a); i && i.configurable && void 0 === e[a] && Object.defineProperty(e, a, i) } return e }, ge = function (e, r, t) { return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e }, fe = Object.assign || function (e) { for (var r = 1; r < arguments.length; r++) { var t = arguments[r]; for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) } return e }, me = function e(r, t, n) { null === r && (r = Function.prototype); var a = Object.getOwnPropertyDescriptor(r, t); if (void 0 === a) { var i = Object.getPrototypeOf(r); return null === i ? void 0 : e(i, t, n) } if ("value" in a) return a.value; var o = a.get; if (void 0 !== o) return o.call(n) }, ve = function (e, r) { if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r); e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r) }, de = function (e, r) { return null != r && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? r[Symbol.hasInstance](e) : e instanceof r }, he = function (e) { return e && e.__esModule ? e : { default: e } }, pe = function (e) { if (e && e.__esModule) return e; var r = {}; if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]); return r.default = e, r }, ye = function (e, r) { if (e !== r) throw new TypeError("Cannot instantiate an arrow function") }, be = function (e) { if (null == e) throw new TypeError("Cannot destructure undefined") }, we = function (e, r) { var t = {}; for (var n in e) r.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t }, xe = function (e, r) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !r || "object" != typeof r && "function" != typeof r ? e : r }, je = "undefined" == typeof global ? self : global, De = function e(r, t, n, a) { var i = Object.getOwnPropertyDescriptor(r, t); if (void 0 === i) { var o = Object.getPrototypeOf(r); null !== o && e(o, t, n, a) } else if ("value" in i && i.writable) i.value = n; else { var s = i.set; void 0 !== s && s.call(a, n) } return n }, ze = function () { function e(e, r) { var t = [], n = !0, a = !1, i = void 0; try { for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0); } catch (e) { a = !0, i = e } finally { try { !n && s.return && s.return() } finally { if (a) throw i } } return t } return function (r, t) { if (Array.isArray(r)) return r; if (Symbol.iterator in Object(r)) return e(r, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(), ke = function (e, r) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) { for (var t, n = [], a = e[Symbol.iterator](); !(t = a.next()).done && (n.push(t.value), !r || n.length !== r);); return n } throw new TypeError("Invalid attempt to destructure non-iterable instance") }, Oe = function (e, r) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(r) } })) }, Fe = function (e, r) { return e.raw = r, e }, Se = function (e, r, t) { if (e === t) throw new ReferenceError(r + " is not defined - temporal dead zone"); return e }, Ee = {}, Le = function (e) { return Array.isArray(e) ? e : Array.from(e) }, Pe = function (e) { if (Array.isArray(e)) { for (var r = 0, t = Array(e.length); r < e.length; r++)t[r] = e[r]; return t } return Array.from(e) }, Ne = Object.freeze({ jsx: ie, asyncToGenerator: oe, classCallCheck: se, createClass: le, defineEnumerableProperties: ce, defaults: ue, defineProperty: ge, get: me, inherits: ve, interopRequireDefault: he, interopRequireWildcard: pe, newArrowCheck: ye, objectDestructuringEmpty: be, objectWithoutProperties: we, possibleConstructorReturn: xe, selfGlobal: je, set: De, slicedToArray: ze, slicedToArrayLoose: ke, taggedTemplateLiteral: Oe, taggedTemplateLiteralLoose: Fe, temporalRef: Se, temporalUndefined: Ee, toArray: Le, toConsumableArray: Pe, typeof: ae, extends: fe, instanceof: de }), Te = function () { var e = function () { }; try { return Object.defineProperty(e, "a", { get: function () { return 1 } }), Object.defineProperty(e, "prototype", { writable: !1 }), 1 === e.a && e.prototype instanceof Object } catch (e) { return !1 } }(), _e = !Te && !Object.prototype.__defineGetter__, Me = Object.prototype.hasOwnProperty, Ie = Te ? Object.defineProperty : function (e, r, t) { "get" in t && e.__defineGetter__ ? e.__defineGetter__(r, t.get) : (!Me.call(e, r) || "value" in t) && (e[r] = t.value) }, Ae = Array.prototype.indexOf || function (e) { var r = this; if (!r.length) return -1; for (var t = arguments[1] || 0, n = r.length; t < n; t++)if (r[t] === e) return t; return -1 }, Re = Object.create || function (e, r) { function t() { } var n = void 0; t.prototype = e, n = new t; for (var a in r) Me.call(r, a) && Ie(n, a, r[a]); return n }, qe = Array.prototype.slice, Ce = Array.prototype.concat, Ge = Array.prototype.push, Ze = Array.prototype.join, Be = Array.prototype.shift, Ue = Function.prototype.bind || function (e) { var r = this, t = qe.call(arguments, 1); return 1 === r.length ? function () { return r.apply(e, Ce.call(t, qe.call(arguments))) } : function () { return r.apply(e, Ce.call(t, qe.call(arguments))) } }, $e = Re(null), Ke = Math.random(); r.prototype = Re(null), t.prototype = Re(null); var Ye = "[a-z]{3}(?:-[a-z]{3}){0,2}", He = "(?:[a-z]{2,3}(?:-" + Ye + ")?|[a-z]{4}|[a-z]{5,8})", We = "[a-z]{4}", Xe = "(?:[a-z]{2}|\\d{3})", Ve = "(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})", Je = "[0-9a-wy-z]", Qe = Je + "(?:-[a-z0-9]{2,8})+", er = "x(?:-[a-z0-9]{1,8})+", rr = "(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))", tr = "(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))", nr = "(?:" + rr + "|" + tr + ")", ar = He + "(?:-" + We + ")?(?:-" + Xe + ")?(?:-" + Ve + ")*(?:-" + Qe + ")*(?:-" + er + ")?", ir = RegExp("^(?:" + ar + "|" + er + "|" + nr + ")$", "i"), or = RegExp("^(?!x).*?-(" + Ve + ")-(?:\\w{4,8}-(?!x-))*\\1\\b", "i"), sr = RegExp("^(?!x).*?-(" + Je + ")-(?:\\w+-(?!x-))*\\1\\b", "i"), lr = RegExp("-" + Qe, "ig"), cr = void 0, ur = {
        tags:
                            { "art-lojban": "jbo", "i-ami": "ami", "i-bnn": "bnn", "i-hak": "hak", "i-klingon": "tlh", "i-lux": "lb", "i-navajo": "nv", "i-pwn": "pwn", "i-tao": "tao", "i-tay": "tay", "i-tsu": "tsu", "no-bok": "nb", "no-nyn": "nn", "sgn-BE-FR": "sfb", "sgn-BE-NL": "vgt", "sgn-CH-DE": "sgg", "zh-guoyu": "cmn", "zh-hakka": "hak", "zh-min-nan": "nan", "zh-xiang": "hsn", "sgn-BR": "bzs", "sgn-CO": "csn", "sgn-DE": "gsg", "sgn-DK": "dsl", "sgn-ES": "ssp", "sgn-FR": "fsl", "sgn-GB": "bfi", "sgn-GR": "gss", "sgn-IE": "isg", "sgn-IT": "ise", "sgn-JP": "jsl", "sgn-MX": "mfs", "sgn-NI": "ncs", "sgn-NL": "dse", "sgn-NO": "nsl", "sgn-PT": "psr", "sgn-SE": "swl", "sgn-US": "ase", "sgn-ZA": "sfs", "zh-cmn": "cmn", "zh-cmn-Hans": "cmn-Hans", "zh-cmn-Hant": "cmn-Hant", "zh-gan": "gan", "zh-wuu": "wuu", "zh-yue": "yue" }, subtags:
                { BU: "MM", DD: "DE", FX: "FR", TP: "TL", YD: "YE", ZR: "CD", heploc: "alalc97", in: "id", iw: "he", ji: "yi", jw: "jv", mo: "ro", ayx: "nun", bjd: "drl", ccq: "rki", cjr: "mom", cka: "cmr", cmk: "xch", drh: "khk", drw: "prs", gav: "dev", hrr: "jal", ibi: "opa", kgh: "kml", lcq: "ppr", mst: "mry", myt: "mry", sca: "hle", tie: "ras", tkk: "twm", tlw: "weo", tnf: "prs", ybd: "rki", yma: "lrr" }, extLang:
                {
aao:
["aao", "ar"], abh:
["abh", "ar"], abv:
["abv", "ar"], acm:
["acm", "ar"], acq:
["acq", "ar"], acw:
["acw", "ar"], acx:
["acx", "ar"], acy:
["acy", "ar"], adf:
["adf", "ar"], ads:
["ads", "sgn"], aeb:
["aeb", "ar"], aec:
["aec", "ar"], aed:
["aed", "sgn"], aen:
["aen", "sgn"], afb:
["afb", "ar"], afg:
["afg", "sgn"], ajp:
["ajp", "ar"], apc:
["apc", "ar"], apd:
["apd", "ar"], arb:
["arb", "ar"], arq:
["arq", "ar"], ars:
["ars", "ar"], ary:
["ary", "ar"], arz:
["arz", "ar"], ase:
["ase", "sgn"], asf:
["asf", "sgn"], asp:
["asp", "sgn"], asq:
["asq", "sgn"], asw:
["asw", "sgn"], auz:
["auz", "ar"], avl:
["avl", "ar"], ayh:
["ayh", "ar"], ayl:
["ayl", "ar"], ayn:
["ayn", "ar"], ayp:
["ayp", "ar"], bbz:
["bbz", "ar"], bfi:
["bfi", "sgn"], bfk:
["bfk", "sgn"], bjn:
["bjn", "ms"], bog:
["bog", "sgn"], bqn:
["bqn", "sgn"], bqy:
["bqy", "sgn"], btj:
["btj", "ms"], bve:
["bve", "ms"], bvl:
["bvl", "sgn"], bvu:
["bvu", "ms"], bzs:
["bzs", "sgn"], cdo:
["cdo", "zh"], cds:
["cds", "sgn"], cjy:
["cjy", "zh"], cmn:
["cmn", "zh"], coa:
["coa", "ms"], cpx:
["cpx", "zh"], csc:
["csc", "sgn"], csd:
["csd", "sgn"], cse:
["cse", "sgn"], csf:
["csf", "sgn"], csg:
["csg", "sgn"], csl:
["csl", "sgn"], csn:
["csn", "sgn"], csq:
["csq", "sgn"], csr:
["csr", "sgn"], czh:
["czh", "zh"], czo:
["czo", "zh"], doq:
["doq", "sgn"], dse:
["dse", "sgn"], dsl:
["dsl", "sgn"], dup:
["dup", "ms"], ecs:
["ecs", "sgn"], esl:
["esl", "sgn"], esn:
["esn", "sgn"], eso:
["eso", "sgn"], eth:
["eth", "sgn"], fcs:
["fcs", "sgn"], fse:
["fse", "sgn"], fsl:
["fsl", "sgn"], fss:
["fss", "sgn"], gan:
["gan", "zh"], gds:
["gds", "sgn"], gom:
["gom", "kok"], gse:
["gse", "sgn"], gsg:
["gsg", "sgn"], gsm:
["gsm", "sgn"], gss:
["gss", "sgn"], gus:
["gus", "sgn"], hab:
["hab", "sgn"], haf:
["haf", "sgn"], hak:
["hak", "zh"], hds:
["hds", "sgn"], hji:
["hji", "ms"], hks:
["hks", "sgn"], hos:
["hos", "sgn"], hps:
["hps", "sgn"], hsh:
["hsh", "sgn"], hsl:
["hsl", "sgn"], hsn:
["hsn", "zh"], icl:
["icl", "sgn"], ils:
["ils", "sgn"], inl:
["inl", "sgn"], ins:
                    ["ins", "sgn"],
ise:
["ise", "sgn"], isg:
["isg", "sgn"], isr:
["isr", "sgn"], jak:
["jak", "ms"], jax:
["jax", "ms"], jcs:
["jcs", "sgn"], jhs:
["jhs", "sgn"], jls:
["jls", "sgn"], jos:
["jos", "sgn"], jsl:
["jsl", "sgn"], jus:
["jus", "sgn"], kgi:
["kgi", "sgn"], knn:
["knn", "kok"], kvb:
["kvb", "ms"], kvk:
["kvk", "sgn"], kvr:
["kvr", "ms"], kxd:
["kxd", "ms"], lbs:
["lbs", "sgn"], lce:
["lce", "ms"], lcf:
["lcf", "ms"], liw:
["liw", "ms"], lls:
["lls", "sgn"], lsg:
["lsg", "sgn"], lsl:
["lsl", "sgn"], lso:
["lso", "sgn"], lsp:
["lsp", "sgn"], lst:
["lst", "sgn"], lsy:
["lsy", "sgn"], ltg:
["ltg", "lv"], lvs:
["lvs", "lv"], lzh:
["lzh", "zh"], max:
["max", "ms"], mdl:
["mdl", "sgn"], meo:
["meo", "ms"], mfa:
["mfa", "ms"], mfb:
["mfb", "ms"], mfs:
["mfs", "sgn"], min:
["min", "ms"], mnp:
["mnp", "zh"], mqg:
["mqg", "ms"], mre:
["mre", "sgn"], msd:
["msd", "sgn"], msi:
["msi", "ms"], msr:
["msr", "sgn"], mui:
["mui", "ms"], mzc:
["mzc", "sgn"], mzg:
["mzg", "sgn"], mzy:
["mzy", "sgn"], nan:
["nan", "zh"], nbs:
["nbs", "sgn"], ncs:
["ncs", "sgn"], nsi:
["nsi", "sgn"], nsl:
["nsl", "sgn"], nsp:
["nsp", "sgn"], nsr:
["nsr", "sgn"], nzs:
["nzs", "sgn"], okl:
["okl", "sgn"], orn:
["orn", "ms"], ors:
["ors", "ms"], pel:
["pel", "ms"], pga:
["pga", "ar"], pks:
["pks", "sgn"], prl:
["prl", "sgn"], prz:
["prz", "sgn"], psc:
["psc", "sgn"], psd:
["psd", "sgn"], pse:
["pse", "ms"], psg:
["psg", "sgn"], psl:
["psl", "sgn"], pso:
["pso", "sgn"], psp:
["psp", "sgn"], psr:
["psr", "sgn"], pys:
["pys", "sgn"], rms:
["rms", "sgn"], rsi:
["rsi", "sgn"], rsl:
["rsl", "sgn"], sdl:
["sdl", "sgn"], sfb:
["sfb", "sgn"], sfs:
["sfs", "sgn"], sgg:
["sgg", "sgn"], sgx:
["sgx", "sgn"], shu:
["shu", "ar"], slf:
["slf", "sgn"], sls:
["sls", "sgn"], sqk:
["sqk", "sgn"], sqs:
["sqs", "sgn"], ssh:
["ssh", "ar"], ssp:
["ssp", "sgn"], ssr:
["ssr", "sgn"], svk:
["svk", "sgn"], swc:
["swc", "sw"], swh:
["swh", "sw"], swl:
["swl", "sgn"], syy:
["syy", "sgn"], tmw:
["tmw", "ms"], tse:
["tse", "sgn"], tsm:
["tsm", "sgn"], tsq:
["tsq", "sgn"], tss:
["tss", "sgn"], tsy:
["tsy", "sgn"], tza:
["tza", "sgn"], ugn:
["ugn", "sgn"], ugy:
["ugy", "sgn"], ukl:
["ukl", "sgn"], uks:
["uks", "sgn"], urk:
["urk", "ms"], uzn:
["uzn", "uz"], uzs:
["uzs", "uz"], vgt:
["vgt", "sgn"], vkk:
["vkk", "ms"], vkt:
["vkt", "ms"], vsi:
["vsi", "sgn"], vsl:
["vsl", "sgn"], vsv:
["vsv", "sgn"], wuu:
["wuu", "zh"], xki:
["xki", "sgn"], xml:
["xml", "sgn"], xmm:
["xmm", "ms"], xms:
["xms", "sgn"], yds:
["yds", "sgn"], ysl:
["ysl", "sgn"], yue:
["yue", "zh"], zib:
["zib", "sgn"], zlm:
["zlm", "ms"], zmi:
["zmi", "ms"], zsl:
["zsl", "sgn"], zsm:
                    ["zsm", "ms"]
                }
                }, gr = /^[A-Z] {3}$/, fr = /-u(?:-[0-9a-z] {2,8})+/gi, mr = {};
                Object.defineProperty(mr, "getCanonicalLocales", { enumerable: !1, configurable: !0, writable: !0, value: k });
                var vr = { BHD: 3, BYR: 0, XOF: 0, BIF: 0, XAF: 0, CLF: 4, CLP: 0, KMF: 0, DJF: 0, XPF: 0, GNF: 0, ISK: 0, IQD: 3, JPY: 0, JOD: 3, KRW: 0, KWD: 3, LYD: 3, OMR: 3, PYG: 0, RWF: 0, TND: 3, UGX: 0, UYI: 0, VUV: 0, VND: 0 };
Ie(mr, "NumberFormat", { configurable: !0, writable: !0, value: O }), Ie(mr.NumberFormat, "prototype", { writable: !1 }), $e.NumberFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["nu"], "[[localeData]]": {} }, Ie(mr.NumberFormat, "supportedLocalesOf", { configurable: !0, writable: !0, value: Ue.call(function (e)
                {
                    if (!Me.call(this, "[[availableLocales]]")) throw new TypeError("supportedLocalesOf() is not a constructor");
                    var r = n(), t = arguments[1], a = this["[[availableLocales]]"], i = d(e);
                    return r(), j(a, i, t)
                }, $e.NumberFormat)
                                                                                                                                                                                                                                                                                                 }), Ie(mr.NumberFormat.prototype, "format", { configurable: !0, get: E }), Object.defineProperty(mr.NumberFormat.prototype, "formatToParts", { configurable: !0, enumerable: !1, writable: !0, value: L });
var dr = { arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"], arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"], bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"], beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"], deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"], fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"], gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"], guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"], hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"], khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"], knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"], laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"], latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"], mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"], mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"], mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"], orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"], tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"], telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"], thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"], tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"] };
                Ie(mr.NumberFormat.prototype, "resolvedOptions", { configurable: !0, writable: !0, value: function ()
                {
                    var e = void 0, t = new r, n = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping"], a = null !== this && "object" === Ne.typeof(this) && l(this);
                    if (!a || !a["[[initializedNumberFormat]]"]) throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
                    for (var i = 0, o = n.length; i < o; i++)Me.call(a, e = "[[" + n[i] + "]]") && (t[n[i]] = { value: a[e], writable: !0, configurable: !0, enumerable: !0 });
                    return Re({}, t)
                }
                                                                 });
                var hr = /(?:[Eec] {1,6}|G{1,5}|[Qq] {1,5}|(?:[yYur]+|U{1,5})|[ML] {1,5}|d{1,2}|D{1,3}|F{1}|[abB] {1,5}|[hkHK] {1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX] {1,4})(?=([^']*'[^']*')*[^']*$)/g, pr = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, yr = /[rqQASjJgwWIQq]/, br = ["era", "year", "month", "day", "weekday", "quarter"], wr = ["hour", "minute", "second", "hour12", "timeZoneName"], xr = { second: { numeric: "s", "2-digit": "ss" }, minute: { numeric: "m", "2-digit": "mm" }, year: { numeric: "y", "2-digit": "yy" }, day: { numeric: "d", "2-digit": "dd" }, month: { numeric: "L", "2-digit": "LL", narrow: "LLLLL", short: "LLL", long: "LLLL" }, weekday: { narrow: "ccccc", short: "ccc", long: "cccc" } }, jr = Re(null, { narrow: {}, short: {}, long: {} }); Ie(mr, "DateTimeFormat", { configurable: !0, writable: !0, value: $ }), Ie($, "prototype", { writable: !1 }); var Dr = { weekday: ["narrow", "short", "long"], era: ["narrow", "short", "long"], year: ["2-digit", "numeric"], month: ["2-digit", "numeric", "narrow", "short", "long"], day: ["2-digit", "numeric"], hour: ["2-digit", "numeric"], minute: ["2-digit", "numeric"], second: ["2-digit", "numeric"], timeZoneName: ["short", "long"] }; $e.DateTimeFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["ca", "nu"], "[[localeData]]": {} }, Ie(mr.DateTimeFormat, "supportedLocalesOf", { configurable: !0, writable: !0, value: Ue.call(function (e) { if (!Me.call(this, "[[availableLocales]]")) throw new TypeError("supportedLocalesOf() is not a constructor"); var r = n(), t = arguments[1], a = this["[[availableLocales]]"], i = d(e); return r(), j(a, i, t) }, $e.NumberFormat) }), Ie(mr.DateTimeFormat.prototype, "format", { configurable: !0, get: V }), Object.defineProperty(mr.DateTimeFormat.prototype, "formatToParts", { enumerable: !1, writable: !0, configurable: !0, value: J }), Ie(mr.DateTimeFormat.prototype, "resolvedOptions", { writable: !0, configurable: !0, value: function () { var e = void 0, t = new r, n = ["locale", "calendar", "numberingSystem", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"], a = null !== this && "object" === Ne.typeof(this) && l(this); if (!a || !a["[[initializedDateTimeFormat]]"]) throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object."); for (var i = 0, o = n.length; i < o; i++)Me.call(a, e = "[[" + n[i] + "]]") && (t[n[i]] = { value: a[e], writable: !0, configurable: !0, enumerable: !0 }); return Re({}, t) } }); var zr = mr.__localeSensitiveProtos = { Number: {}, Date: {} }; if (zr.Number.toLocaleString = function () { if ("[object Number]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a number for Number.prototype.toLocaleString()"); return T(new O(arguments[0], arguments[1]), this) }, zr.Date.toLocaleString = function () { if ("[object Date]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()"); var e = +this; if (isNaN(e)) return "Invalid Date"; var r = arguments[0], t = arguments[1]; t = H(t, "any", "all"); var n = new $(r, t); return ee(n, e) }, zr.Date.toLocaleDateString = function () { if ("[object Date]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()"); var e = +this; if (isNaN(e)) return "Invalid Date"; var r = arguments[0], t = arguments[1]; t = H(t, "date", "date"); var n = new $(r, t); return ee(n, e) }, zr.Date.toLocaleTimeString = function () { if ("[object Date]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()"); var e = +this; if (isNaN(e)) return "Invalid Date"; var r = arguments[0], t = arguments[1]; t = H(t, "time", "time"); var n = new $(r, t); return ee(n, e) }, Ie(mr, "__applyLocaleSensitivePrototypes", { writable: !0, configurable: !0, value: function () { Ie(Number.prototype, "toLocaleString", { writable: !0, configurable: !0, value: zr.Number.toLocaleString }), Ie(Date.prototype, "toLocaleString", { writable: !0, configurable: !0, value: zr.Date.toLocaleString }); for (var e in zr.Date) Me.call(zr.Date, e) && Ie(Date.prototype, e, { writable: !0, configurable: !0, value: zr.Date[e] }) } }), Ie(mr, "__addLocaleData", { value: function (e) { if (!g(e.locale)) throw new Error("Object passed doesn't identify itself with a valid language tag"); ne(e, e.locale) } }), Ie(mr, "__disableRegExpRestore", { value: function () { $e.disableRegExpRestore = !0 } }), "undefined" == typeof Intl) try { window.Intl = mr, mr.__applyLocaleSensitivePrototypes() } catch (e) { } return mr
            });

        }
                  if (!('Intl' in this &&
                        Intl.Collator &&
                        Intl.Collator.supportedLocalesOf &&
                        Intl.Collator.supportedLocalesOf('zh').length === 1 &&
                                Intl.DateTimeFormat &&
                                Intl.DateTimeFormat.supportedLocalesOf &&
                                Intl.DateTimeFormat.supportedLocalesOf('zh').length === 1 &&
                                        Intl.NumberFormat &&
                                        Intl.NumberFormat.supportedLocalesOf &&
                                        Intl.NumberFormat.supportedLocalesOf('zh').length === 1))
    {
        IntlPolyfill.__addLocaleData({ locale: "zh", date: { ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"], hourNo0: true, hour12: true, formats: { short: "{1} {0}", medium: "{1} {0}", full: "{1} {0}", long: "{1} {0}", availableFormats: { "d": "d日", "E": "ccc", Ed: "d日E", Ehm: "E ah:mm", EHm: "EHH:mm", Ehms: "E ah:mm:ss", EHms: "EHH:mm:ss", Gy: "Gy年", GyMMM: "Gy年M月", GyMMMd: "Gy年M月d日", GyMMMEd: "Gy年M月d日E", "h": "ah时", "H": "H时", hm: "ah:mm", Hm: "HH:mm", hms: "ah:mm:ss", Hms: "HH:mm:ss", hmsv: "v ah:mm:ss", Hmsv: "v HH:mm:ss", hmv: "v ah:mm", Hmv: "v HH:mm", "M": "M月", Md: "M/d", MEd: "M/dE", MMdd: "MM/dd", MMM: "LLL", MMMd: "M月d日", MMMEd: "M月d日E", MMMMd: "M月d日", ms: "mm:ss", "y": "y年", yM: "y年M月", yMd: "y/M/d", yMEd: "y/M/dE", yMM: "y年M月", yMMM: "y年M月", yMMMd: "y年M月d日", yMMMEd: "y年M月d日E", yMMMM: "y年M月", yQQQ: "y年第Q季度", yQQQQ: "y年第Q季度" }, dateFormats: { yMMMMEEEEd: "y年M月d日EEEE", yMMMMd: "y年M月d日", yMMMd: "y年M月d日", yMd: "y/M/d" }, timeFormats: { hmmsszzzz: "zzzz ah:mm:ss", hmsz: "z ah:mm:ss", hms: "ah:mm:ss", hm: "ah:mm" } }, calendars: { buddhist: { months: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, eras: { narrow: ["佛历"], short: ["佛历"], long: ["佛历"] }, dayPeriods: { am: "上午", pm: "下午" } }, chinese: { months: { narrow: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], short: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"], long: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, dayPeriods: { am: "上午", pm: "下午" } }, coptic: { months: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"], short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月"], long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", "十三月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, eras: { narrow: ["ERA0", "ERA1"], short: ["ERA0", "ERA1"], long: ["ERA0", "ERA1"] }, dayPeriods: { am: "上午", pm: "下午" } }, dangi: { months: { narrow: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], short: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"], long: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, dayPeriods: { am: "上午", pm: "下午" } }, ethiopic: { months: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"], short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月"], long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", "十三月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, eras: { narrow: ["ERA0", "ERA1"], short: ["ERA0", "ERA1"], long: ["ERA0", "ERA1"] }, dayPeriods: { am: "上午", pm: "下午" } }, ethioaa: { months: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"], short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月"], long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", "十三月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, eras: { narrow: ["ERA0"], short: ["ERA0"], long: ["ERA0"] }, dayPeriods: { am: "上午", pm: "下午" } }, generic: { months: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"], long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, eras: { narrow: ["ERA0", "ERA1"], short: ["ERA0", "ERA1"], long: ["ERA0", "ERA1"] }, dayPeriods: { am: "上午", pm: "下午" } }, gregory: { months: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, eras: { narrow: ["公元前", "公元", "西元前", "西元"], short: ["公元前", "公元", "西元前", "西元"], long: ["公元前", "公元", "西元前", "西元"] }, dayPeriods: { am: "上午", pm: "下午" } }, hebrew: { months: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"], short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月", "闰7月"], long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", "十三月", "闰七月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, eras: { narrow: ["希伯来历"], short: ["希伯来历"], long: ["希伯来历"] }, dayPeriods: { am: "上午", pm: "下午" } }, indian: { months: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, eras: { narrow: ["印度历"], short: ["印度历"], long: ["印度历"] }, dayPeriods: { am: "上午", pm: "下午" } }, islamic: { months: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, eras: { narrow: ["伊斯兰历"], short: ["伊斯兰历"], long: ["伊斯兰历"] }, dayPeriods: { am: "上午", pm: "下午" } }, islamicc: { months: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, eras: { narrow: ["伊斯兰历"], short: ["伊斯兰历"], long: ["伊斯兰历"] }, dayPeriods: { am: "上午", pm: "下午" } }, japanese: { months: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, eras: { narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"], short: ["大化 (645–650)", "白雉 (650–671)", "白凤 (672–686)", "朱鸟 (686–701)", "大宝 (701–704)", "庆云 (704–708)", "和铜 (708–715)", "灵龟 (715–717)", "养老 (717–724)", "神龟 (724–729)", "天平 (729–749)", "天平感宝 (749–749)", "天平胜宝 (749–757)", "天平宝字 (757–765)", "天平神护 (765–767)", "神护景云 (767–770)", "宝龟 (770–780)", "天应 (781–782)", "延历 (782–806)", "大同 (806–810)", "弘仁 (810–824)", "天长 (824–834)", "承和 (834–848)", "嘉祥 (848–851)", "仁寿 (851–854)", "齐衡 (854–857)", "天安 (857–859)", "贞观 (859–877)", "元庆 (877–885)", "仁和 (885–889)", "宽平 (889–898)", "昌泰 (898–901)", "延喜 (901–923)", "延长 (923–931)", "承平 (931–938)", "天庆 (938–947)", "天历 (947–957)", "天德 (957–961)", "应和 (961–964)", "康保 (964–968)", "安和 (968–970)", "天禄 (970–973)", "天延 (973–976)", "贞元 (976–978)", "天元 (978–983)", "永观 (983–985)", "宽和 (985–987)", "永延 (987–989)", "永祚 (989–990)", "正历 (990–995)", "长德 (995–999)", "长保 (999–1004)", "宽弘 (1004–1012)", "长和 (1012–1017)", "宽仁 (1017–1021)", "治安 (1021–1024)", "万寿 (1024–1028)", "长元 (1028–1037)", "长历 (1037–1040)", "长久 (1040–1044)", "宽德 (1044–1046)", "永承 (1046–1053)", "天喜 (1053–1058)", "康平 (1058–1065)", "治历 (1065–1069)", "延久 (1069–1074)", "承保 (1074–1077)", "正历 (1077–1081)", "永保 (1081–1084)", "应德 (1084–1087)", "宽治 (1087–1094)", "嘉保 (1094–1096)", "永长 (1096–1097)", "承德 (1097–1099)", "康和 (1099–1104)", "长治 (1104–1106)", "嘉承 (1106–1108)", "天仁 (1108–1110)", "天永 (1110–1113)", "永久 (1113–1118)", "元永 (1118–1120)", "保安 (1120–1124)", "天治 (1124–1126)", "大治 (1126–1131)", "天承 (1131–1132)", "长承 (1132–1135)", "保延 (1135–1141)", "永治 (1141–1142)", "康治 (1142–1144)", "天养 (1144–1145)", "久安 (1145–1151)", "仁平 (1151–1154)", "久寿 (1154–1156)", "保元 (1156–1159)", "平治 (1159–1160)", "永历 (1160–1161)", "应保 (1161–1163)", "长宽 (1163–1165)", "永万 (1165–1166)", "仁安 (1166–1169)", "嘉应 (1169–1171)", "承安 (1171–1175)", "安元 (1175–1177)", "治承 (1177–1181)", "养和 (1181–1182)", "寿永 (1182–1184)", "元历 (1184–1185)", "文治 (1185–1190)", "建久 (1190–1199)", "正治 (1199–1201)", "建仁 (1201–1204)", "元久 (1204–1206)", "建永 (1206–1207)", "承元 (1207–1211)", "建历 (1211–1213)", "建保 (1213–1219)", "承久 (1219–1222)", "贞应 (1222–1224)", "元仁 (1224–1225)", "嘉禄 (1225–1227)", "安贞 (1227–1229)", "宽喜 (1229–1232)", "贞永 (1232–1233)", "天福 (1233–1234)", "文历 (1234–1235)", "嘉祯 (1235–1238)", "历仁 (1238–1239)", "延应 (1239–1240)", "仁治 (1240–1243)", "宽元 (1243–1247)", "宝治 (1247–1249)", "建长 (1249–1256)", "康元 (1256–1257)", "正嘉 (1257–1259)", "正元 (1259–1260)", "文应 (1260–1261)", "弘长 (1261–1264)", "文永 (1264–1275)", "建治 (1275–1278)", "弘安 (1278–1288)", "正应 (1288–1293)", "永仁 (1293–1299)", "正安 (1299–1302)", "干元 (1302–1303)", "嘉元 (1303–1306)", "德治 (1306–1308)", "延庆 (1308–1311)", "应长 (1311–1312)", "正和 (1312–1317)", "文保 (1317–1319)", "元应 (1319–1321)", "元亨 (1321–1324)", "正中 (1324–1326)", "嘉历 (1326–1329)", "元德 (1329–1331)", "元弘 (1331–1334)", "建武 (1334–1336)", "延元 (1336–1340)", "兴国 (1340–1346)", "正平 (1346–1370)", "建德 (1370–1372)", "文中 (1372–1375)", "天授 (1375–1379)", "康历 (1379–1381)", "弘和 (1381–1384)", "元中 (1384–1392)", "至德 (1384–1387)", "嘉庆 (1387–1389)", "康应 (1389–1390)", "明德 (1390–1394)", "应永 (1394–1428)", "正长 (1428–1429)", "永享 (1429–1441)", "嘉吉 (1441–1444)", "文安 (1444–1449)", "宝德 (1449–1452)", "享德 (1452–1455)", "康正 (1455–1457)", "长禄 (1457–1460)", "宽正 (1460–1466)", "文正 (1466–1467)", "应仁 (1467–1469)", "文明 (1469–1487)", "长享 (1487–1489)", "延德 (1489–1492)", "明应 (1492–1501)", "文龟 (1501–1504)", "永正 (1504–1521)", "大永 (1521–1528)", "享禄 (1528–1532)", "天文 (1532–1555)", "弘治 (1555–1558)", "永禄 (1558–1570)", "元龟 (1570–1573)", "天正 (1573–1592)", "文禄 (1592–1596)", "庆长 (1596–1615)", "元和 (1615–1624)", "宽永 (1624–1644)", "正保 (1644–1648)", "庆安 (1648–1652)", "承应 (1652–1655)", "明历 (1655–1658)", "万治 (1658–1661)", "宽文 (1661–1673)", "延宝 (1673–1681)", "天和 (1681–1684)", "贞享 (1684–1688)", "元禄 (1688–1704)", "宝永 (1704–1711)", "正德 (1711–1716)", "享保 (1716–1736)", "元文 (1736–1741)", "宽保 (1741–1744)", "延享 (1744–1748)", "宽延 (1748–1751)", "宝历 (1751–1764)", "明和 (1764–1772)", "安永 (1772–1781)", "天明 (1781–1789)", "宽政 (1789–1801)", "享和 (1801–1804)", "文化 (1804–1818)", "文政 (1818–1830)", "天保 (1830–1844)", "弘化 (1844–1848)", "嘉永 (1848–1854)", "安政 (1854–1860)", "万延 (1860–1861)", "文久 (1861–1864)", "元治 (1864–1865)", "庆应 (1865–1868)", "明治", "大正", "昭和", "平成"], long: ["大化 (645–650)", "白雉 (650–671)", "白凤 (672–686)", "朱鸟 (686–701)", "大宝 (701–704)", "庆云 (704–708)", "和铜 (708–715)", "灵龟 (715–717)", "养老 (717–724)", "神龟 (724–729)", "天平 (729–749)", "天平感宝 (749–749)", "天平胜宝 (749–757)", "天平宝字 (757–765)", "天平神护 (765–767)", "神护景云 (767–770)", "宝龟 (770–780)", "天应 (781–782)", "延历 (782–806)", "大同 (806–810)", "弘仁 (810–824)", "天长 (824–834)", "承和 (834–848)", "嘉祥 (848–851)", "仁寿 (851–854)", "齐衡 (854–857)", "天安 (857–859)", "贞观 (859–877)", "元庆 (877–885)", "仁和 (885–889)", "宽平 (889–898)", "昌泰 (898–901)", "延喜 (901–923)", "延长 (923–931)", "承平 (931–938)", "天庆 (938–947)", "天历 (947–957)", "天德 (957–961)", "应和 (961–964)", "康保 (964–968)", "安和 (968–970)", "天禄 (970–973)", "天延 (973–976)", "贞元 (976–978)", "天元 (978–983)", "永观 (983–985)", "宽和 (985–987)", "永延 (987–989)", "永祚 (989–990)", "正历 (990–995)", "长德 (995–999)", "长保 (999–1004)", "宽弘 (1004–1012)", "长和 (1012–1017)", "宽仁 (1017–1021)", "治安 (1021–1024)", "万寿 (1024–1028)", "长元 (1028–1037)", "长历 (1037–1040)", "长久 (1040–1044)", "宽德 (1044–1046)", "永承 (1046–1053)", "天喜 (1053–1058)", "康平 (1058–1065)", "治历 (1065–1069)", "延久 (1069–1074)", "承保 (1074–1077)", "正历 (1077–1081)", "永保 (1081–1084)", "应德 (1084–1087)", "宽治 (1087–1094)", "嘉保 (1094–1096)", "永长 (1096–1097)", "承德 (1097–1099)", "康和 (1099–1104)", "长治 (1104–1106)", "嘉承 (1106–1108)", "天仁 (1108–1110)", "天永 (1110–1113)", "永久 (1113–1118)", "元永 (1118–1120)", "保安 (1120–1124)", "天治 (1124–1126)", "大治 (1126–1131)", "天承 (1131–1132)", "长承 (1132–1135)", "保延 (1135–1141)", "永治 (1141–1142)", "康治 (1142–1144)", "天养 (1144–1145)", "久安 (1145–1151)", "仁平 (1151–1154)", "久寿 (1154–1156)", "保元 (1156–1159)", "平治 (1159–1160)", "永历 (1160–1161)", "应保 (1161–1163)", "长宽 (1163–1165)", "永万 (1165–1166)", "仁安 (1166–1169)", "嘉应 (1169–1171)", "承安 (1171–1175)", "安元 (1175–1177)", "治承 (1177–1181)", "养和 (1181–1182)", "寿永 (1182–1184)", "元历 (1184–1185)", "文治 (1185–1190)", "建久 (1190–1199)", "正治 (1199–1201)", "建仁 (1201–1204)", "元久 (1204–1206)", "建永 (1206–1207)", "承元 (1207–1211)", "建历 (1211–1213)", "建保 (1213–1219)", "承久 (1219–1222)", "贞应 (1222–1224)", "元仁 (1224–1225)", "嘉禄 (1225–1227)", "安贞 (1227–1229)", "宽喜 (1229–1232)", "贞永 (1232–1233)", "天福 (1233–1234)", "文历 (1234–1235)", "嘉祯 (1235–1238)", "历仁 (1238–1239)", "延应 (1239–1240)", "仁治 (1240–1243)", "宽元 (1243–1247)", "宝治 (1247–1249)", "建长 (1249–1256)", "康元 (1256–1257)", "正嘉 (1257–1259)", "正元 (1259–1260)", "文应 (1260–1261)", "弘长 (1261–1264)", "文永 (1264–1275)", "建治 (1275–1278)", "弘安 (1278–1288)", "正应 (1288–1293)", "永仁 (1293–1299)", "正安 (1299–1302)", "干元 (1302–1303)", "嘉元 (1303–1306)", "德治 (1306–1308)", "延庆 (1308–1311)", "应长 (1311–1312)", "正和 (1312–1317)", "文保 (1317–1319)", "元应 (1319–1321)", "元亨 (1321–1324)", "正中 (1324–1326)", "嘉历 (1326–1329)", "元德 (1329–1331)", "元弘 (1331–1334)", "建武 (1334–1336)", "延元 (1336–1340)", "兴国 (1340–1346)", "正平 (1346–1370)", "建德 (1370–1372)", "文中 (1372–1375)", "天授 (1375–1379)", "康历 (1379–1381)", "弘和 (1381–1384)", "元中 (1384–1392)", "至德 (1384–1387)", "嘉庆 (1387–1389)", "康应 (1389–1390)", "明德 (1390–1394)", "应永 (1394–1428)", "正长 (1428–1429)", "永享 (1429–1441)", "嘉吉 (1441–1444)", "文安 (1444–1449)", "宝德 (1449–1452)", "享德 (1452–1455)", "康正 (1455–1457)", "长禄 (1457–1460)", "宽正 (1460–1466)", "文正 (1466–1467)", "应仁 (1467–1469)", "文明 (1469–1487)", "长享 (1487–1489)", "延德 (1489–1492)", "明应 (1492–1501)", "文龟 (1501–1504)", "永正 (1504–1521)", "大永 (1521–1528)", "享禄 (1528–1532)", "天文 (1532–1555)", "弘治 (1555–1558)", "永禄 (1558–1570)", "元龟 (1570–1573)", "天正 (1573–1592)", "文禄 (1592–1596)", "庆长 (1596–1615)", "元和 (1615–1624)", "宽永 (1624–1644)", "正保 (1644–1648)", "庆安 (1648–1652)", "承应 (1652–1655)", "明历 (1655–1658)", "万治 (1658–1661)", "宽文 (1661–1673)", "延宝 (1673–1681)", "天和 (1681–1684)", "贞享 (1684–1688)", "元禄 (1688–1704)", "宝永 (1704–1711)", "正德 (1711–1716)", "享保 (1716–1736)", "元文 (1736–1741)", "宽保 (1741–1744)", "延享 (1744–1748)", "宽延 (1748–1751)", "宝历 (1751–1764)", "明和 (1764–1772)", "安永 (1772–1781)", "天明 (1781–1789)", "宽政 (1789–1801)", "享和 (1801–1804)", "文化 (1804–1818)", "文政 (1818–1830)", "天保 (1830–1844)", "弘化 (1844–1848)", "嘉永 (1848–1854)", "安政 (1854–1860)", "万延 (1860–1861)", "文久 (1861–1864)", "元治 (1864–1865)", "庆应 (1865–1868)", "明治", "大正", "昭和", "平成"] }, dayPeriods: { am: "上午", pm: "下午" } }, persian: { months: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, eras: { narrow: ["波斯历"], short: ["波斯历"], long: ["波斯历"] }, dayPeriods: { am: "上午", pm: "下午" } }, roc: { months: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, days: { narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] }, eras: { narrow: ["民国前", "民国"], short: ["民国前", "民国"], long: ["民国前", "民国"] }, dayPeriods: { am: "上午", pm: "下午" } } } }, number: { nu: ["latn"], patterns: { decimal: { positivePattern: "{number}", negativePattern: "{minusSign}{number}" }, currency: { positivePattern: "{currency}{number}", negativePattern: "{minusSign}{currency}{number}" }, percent: { positivePattern: "{number}{percentSign}", negativePattern: "{minusSign}{number}{percentSign}" } }, symbols: { hanidec: { decimal: ".", group: ",", nan: "NaN", plusSign: "+", minusSign: "-", percentSign: "%", infinity: "∞" }, latn: { decimal: ".", group: ",", nan: "NaN", plusSign: "+", minusSign: "-", percentSign: "%", infinity: "∞" } }, currencies: { AUD: "AU$", BRL: "R$", CAD: "CA$", CNY: "￥", EUR: "€", GBP: "£", HKD: "HK$", ILR: "ILS", ILS: "₪", INR: "₹", JPY: "JP¥", KRW: "￦", MXN: "MX$", NZD: "NZ$", TWD: "NT$", USD: "US$", VND: "₫", XAF: "FCFA", XCD: "EC$", XOF: "CFA", XPF: "CFPF" } } });
        }
        if (!('sign' in Math))
    {
        Math.sign = function (n)
            {
                return (n = Number(n)) ? n > 0 ? 1 : -1 : n
            };
        }
        if (!('trunc' in Math))
    {
        Math.trunc = function (t)
            {
                return t < 0 ? Math.ceil(t) : Math.floor(t)
            };
        }
        if (!('isFinite' in Number))
    {
        Number.isFinite = Number.isFinite || function (i)
            {
                return "number" == typeof i && isFinite(i)
            };
        }
        if (!('reduce' in Array.prototype))
    {
        Array.prototype.reduce = function (t)
            {
                if (this === undefined || null === this) throw new TypeError(this + " is not an object");
                if ("function" != typeof t) throw new TypeError(t + " is not a function");
                var n, i = Object(this), r = i instanceof String ? i.split("") : i, e = Math.max(Math.min(r.length, 9007199254740991), 0) || 0, o = -1;
                if (1 in arguments) n = arguments[1];
                else
                {
                    for (; ++o < e && !(o in r););
                    if (o >= e) throw new TypeError("Reduce of empty array with no initial value");
                    n = r[o]
                }
                for (; ++o < e;)o in r && (n = t(n, r[o], o, i));
                return n
            };
        }
        if (!('entries' in Object))
    {
        Object.entries = function (e)
            {
                return Object.keys(e).reduce(function (r, t)
                {
                    var n = "string" == typeof t && e.propertyIsEnumerable(t) ? [[t, e[t]]] : [];
                    return r.concat(n)
                }, [])
            };
        }
        if (!('values' in Object))
    {
        !function ()
            {
                Object.defineProperty(Object, "values", { configurable: !0, enumerable: !1, value: function (e)
                {
                    return Object.keys(e).map(function (n)
                    {
                        return e[n]
                    })
                }, writable: !0
                                                        })
            }();
        }
        if (!('Promise' in this))
    {
        !function (n)
            {
                function t(e)
                {
                    if (r[e]) return r[e].exports;
                    var o = r[e] = { exports: {}, id: e, loaded: !1 };
                    return n[e].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
                }
                var r = {};
                t.m = n, t.c = r, t.p = "", t(0)
            }({ 0: function (n, t, r)
            {
                (function (n)
                {
                    var t = r(80);
                    try
                    {
                        (n || {}).Promise = t, window.Promise = t
                    }
                    catch (e) { }
                }).call(t, function ()
                {
                    return this
                }())
            }, 80: function (n, t)
            {
                (function (t)
                {
                    !function ()
                    { "use strict";
                        function r()
                        {
                            return en[B][G] || J
                        }
                        function e(n, t)
                        {
                            for (var r in t) n[r] = t[r]
                            }
                        function o(n)
                        {
                            return n && "object" == typeof n
                        }
                        function i(n)
                        {
                            return "function" == typeof n
                        }
                        function u(n, t)
                        {
                            return n instanceof t
                        }
                        function c(n)
                        {
                            return u(n, U)
                        }
                        function f(n, t, r)
                        {
                            if (!t(n)) throw v(r)
                            }
                        function s()
                        {
                            try
                            {
                                return C.apply(F, arguments)
                            }
                            catch (e)
                            {
                                return nn.e = e, nn
                            }
                        }
                        function a(n, t)
                        {
                            return C = n, F = t, s
                        }
                        function l(n, t)
                        {
                            function r()
                            {
                                for (var r = 0; r < o;)t(e[r], e[r + 1]), e[r++] = S, e[r++] = S;
                                o = 0, e.length > n && (e.length = n)
                            }
                            var e = O(n), o = 0;
                            return function (n, t)
                            {
                                e[o++] = n, e[o++] = t, 2 === o && en.nextTick(r)
                            }
                        }
                        function h(n, t)
                        {
                            var r, e, o, c, f = 0;
                            if (!n) throw v(V);
                            var s = n[en[B][D]];
                            if (i(s)) e = s.call(n);
                            else
                            {
                                if (!i(n.next))
                                {
                                    if (u(n, O))
                                    {
                                        for (r = n.length; f < r;)t(n[f], f++);
                                        return f
                                    }
                                    throw v(V)
                                }
                                e = n
                            }
                            for (; !(o = e.next()).done;)if ((c = a(t)(o.value, f++)) === nn) throw i(e[K]) && e[K](), c.e;
                            return f
                        }
                        function v(n)
                        {
                            return new TypeError(n)
                        }
                        function _(n)
                        {
                            return (n ? "" : W) + (new U).stack
                        }
                        function d(n, t)
                        {
                            var r = "on" + n.toLowerCase(), e = H[r];
                            I && I.listeners(n).length ? n === Z ? I.emit(n, t._v, t) : I.emit(n, t) : e ? e({ reason: t._v, promise: t }) : en[n](t._v, t)
                        }
                        function p(n)
                        {
                            return n && n._s
                        }
                        function w(n)
                        {
                            if (p(n)) return new n(tn);
                            var t, r, e;
                            return t = new n(function (n, o)
                            {
                                if (t) throw v();
                                r = n, e = o
                            }), f(r, i), f(e, i), t
                        }
                        function m(n, t)
                        {
                            return function (r)
                            {
                                A && (n[Q] = _(!0)), t === q ? T(n, r) : k(n, t, r)
                            }
                        }
                        function y(n, t, r, e)
                        {
                            return i(r) && (t._onFulfilled = r), i(e) && (n[M] && d(Y, n), t._onRejected = e), A && (t._p = n), n[n._c++] = t, n._s !== z && on(n, t), t
                        }
                        function j(n)
                        {
                            if (n._umark) return !0;
                            n._umark = !0;
                            for (var t, r = 0, e = n._c; r < e;)if (t = n[r++], t._onRejected || j(t)) return !0
                                }
                        function x(n, t)
                        {
                            function r(n)
                            {
                                return e.push(n.replace(/^\s+|\s+$/g, ""))
                            }
                            var e = [];
                            return A && (t[Q] && r(t[Q]), function o(n)
                            {
                                n && N in n && (o(n._next), r(n[N] + ""), o(n._p))
                            }(t)), (n && n.stack ? n.stack : n) + ("\n" + e.join("\n")).replace(rn, "")
                        }
                        function g(n, t)
                        {
                            return n(t)
                        }
                        function k(n, t, r)
                        {
                            var e = 0, o = n._c;
                            if (n._s === z) for (n._s = t, n._v = r, t === $ && (A && c(r) && (r.longStack = x(r, n)), un(n)); e < o;)on(n, n[e++]);
                            return n
                        }
                        function T(n, t)
                        {
                            if (t === n && t) return k(n, $, v(X)), n;
                            if (t !== P && (i(t) || o(t)))
                            {
                                var r = a(b)(t);
                                if (r === nn) return k(n, $, r.e), n;
                                i(r) ? (A && p(t) && (n._next = t), p(t) ? R(n, t, r) : en.nextTick(function ()
                                {
                                    R(n, t, r)
                                })) : k(n, q, t)
                                }
                                else k(n, q, t);
                                return n
                            }
                            function b(n)
                        {
                            return n.then
                        }
                        function R(n, t, r)
                        {
                            var e = a(r, t)(function (r)
                            {
                                t && (t = P, T(n, r))
                            }, function (r)
                            {
                                t && (t = P, k(n, $, r))
                            });
                            e === nn && t && (k(n, $, e.e), t = P)
                        }
                        var S, C, F, P = null, E = "object" == typeof window, H = E ? window : t, I = H.process, L = H.console, A = !1, O = Array, U = Error, $ = 1, q = 2, z = 3, B = "Symbol", D = "iterator", G = "species", J = B + "(" + G + ")", K = "return", M = "_uh", N = "_pt", Q = "_st", V = "Invalid argument", W = "\nFrom previous ", X = "Chaining cycle detected for promise", Y = "rejectionHandled", Z = "unhandledRejection", nn = { e: P }, tn = function () { }, rn = /^.+\/node_modules\/yaku\/.+\n?/gm, en = n.exports = function (n)
                        {
                            var t, r = this;
                            if (!o(r) || r._s !== S) throw v("Invalid this");
                            if (r._s = z, A && (r[N] = _()), n !== tn)
                            {
                                if (!i(n)) throw v(V);
                                (t = a(n)(m(r, q), m(r, $))) === nn && k(r, $, t.e)
                            }
                        };
                        en["default"] = en, e(en.prototype, { then: function (n, t)
                        {
                            if (void 0 === this._s) throw v();
                            return y(this, w(en.speciesConstructor(this, en)), n, t)
                        }, "catch": function (n)
                        {
                            return this.then(S, n)
                        }, "finally": function (n)
                        {
                            function t(t)
                            {
                                return en.resolve(n()).then(function ()
                                {
                                    return t
                                })
                            }
                            return this.then(t, t)
                        }, _c: 0, _p: P
                        }), en.resolve = function (n) { return p(n) ? n : T(w(this), n) }, en.reject = function (n) { return k(w(this), $, n) }, en.race = function (n)
                        {
                            var t = this, r = w(t), e = function (n) { k(r, q, n) }, o = function (n) { k(r, $, n) }, i = a(h)(n, function (n)
                            {
                                t.resolve(n).then(e, o)
                            });
                            return i === nn ? t.reject(i.e) : r
                        }, en.all = function (n)
                        {
                            function t(n)
                            {
                                k(o, $, n)
                            }
                            var r, e = this, o = w(e), i = [];
                            return r = a(h)(n, function (n, u)
                            {
                                e.resolve(n).then(function (n)
                                {
                                    i[u] = n, --r || k(o, q, i)
                                }, t)
                            }), r === nn ? e.reject(r.e) : (r || k(o, q, []), o)
                        }, en.Symbol = H[B] || {}, a(function ()
                        {
                            Object.defineProperty(en, r(), { get: function ()
                            {
                                return this
                            }
                                                           })
                        })(), en.speciesConstructor = function (n, t) { var e = n.constructor; return e ? e[r()] || t : t }, en.unhandledRejection = function (n, t) { L && L.error("Uncaught (in promise)", A ? t.longStack : x(n, t)) }, en.rejectionHandled = tn, en.enableLongStackTrace = function () { A = !0 }, en.nextTick = E ? function (n)
                        {
                            setTimeout(n)
} :
                        I.nextTick, en._s = 1;
                        var on = l(999, function (n, t)
                        {
                            var r, e;
                            return e = n._s !== $ ? t._onFulfilled : t._onRejected, e === S ? void k(t, n._s, n._v) : (r = a(g)(e, n._v), r === nn ? void k(t, $, r.e) : void T(t, r))
                        }), un = l(9, function (n)
                        {
                            j(n) || (n[M] = 1, d(Z, n))
                        })
                    }()
                }).call(t, function ()
                {
                    return this
                }())
            }
              });
        }
        if (!('repeat' in String.prototype))
    {
        String.prototype.repeat = function (t)
            { "use strict";
                if (this === undefined || null === this) throw new TypeError(this + " is not an object");
                if (t < 0 || t === Infinity) throw new RangeError(t + " is less than zero or equal to infinity");
                return new Array((parseInt(t, 10) || 0) + 1).join(this)
            };
        }
        if (!('XMLHttpRequest' in this && 'prototype' in this.XMLHttpRequest && 'addEventListener' in this.XMLHttpRequest.prototype))
    {
        !function (e, t)
            {
                e.XMLHttpRequest = function ()
                {
                    var e = this, n = e._request = t ? new t : new ActiveXObject("MSXML2.XMLHTTP.3.0");
                    n.onreadystatechange = function () { e.readyState = n.readyState; var t = 4 === e.readyState; e.response = e.responseText = t ? n.responseText : null, e.status = t ? n.status : null, e.statusText = t ? n.statusText : null, e.dispatchEvent(new Event("readystatechange")), t && e.dispatchEvent(new Event("load")) }, "onerror" in n && (n.onerror = function ()
                    {
                        e.dispatchEvent(new Event("error"))
                    })
                }, e.XMLHttpRequest.UNSENT = 0, e.XMLHttpRequest.OPENED = 1, e.XMLHttpRequest.HEADERS_RECEIVED = 2, e.XMLHttpRequest.LOADING = 3, e.XMLHttpRequest.DONE = 4;
                var n = e.XMLHttpRequest.prototype;
                n.addEventListener = e.addEventListener, n.removeEventListener = e.removeEventListener, n.dispatchEvent = e.dispatchEvent, n.abort = function () { return this._request() }, n.getAllResponseHeaders = function () { return this._request.getAllResponseHeaders() }, n.getResponseHeader = function (e) { return this._request.getResponseHeader(e) }, n.open = function (e, t) { this._request.open(e, t, arguments[2], arguments[3], arguments[4]) }, n.overrideMimeType = function (e) { this._request.overrideMimeType(e) }, n.send = function () { this._request.send(0 in arguments ? arguments[0] : null) }, n.setRequestHeader = function (e, t)
                {
                    this._request.setRequestHeader(e, t)
                }
            }(this, this.XMLHttpRequest);
        }
        if (!('fetch' in this))
    {
        !function (t)
            { "use strict";
                function e(t)
                {
                    if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name"); return t.toLowerCase() } function r(t) { return "string" != typeof t && (t = String(t)), t } function o(t) { var e = { next: function () { var e = t.shift(); return { done: e === undefined, value: e } } }; return m.iterable && (e[Symbol.iterator] = function () { return e }), e } function n(t) { this.map = {}, t instanceof n ? t.forEach(function (t, e) { this.append(e, t) }, this) : Array.isArray(t) ? t.forEach(function (t) { this.append(t[0], t[1]) }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) { this.append(e, t[e]) }, this) } function i(t) { if (t.bodyUsed) return Promise.reject(new TypeError("Already read")); t.bodyUsed = !0 } function s(t) { return new Promise(function (e, r) { t.onload = function () { e(t.result) }, t.onerror = function () { r(t.error) } }) } function a(t) { var e = new FileReader, r = s(e); return e.readAsArrayBuffer(t), r } function u(t) { var e = new FileReader, r = s(e); return e.readAsText(t), r } function h(t) { for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++)r[o] = String.fromCharCode(e[o]); return r.join("") } function f(t) { if (t.slice) return t.slice(0); var e = new Uint8Array(t.byteLength); return e.set(new Uint8Array(t)), e.buffer } function d() { return this.bodyUsed = !1, this._initBody = function (t) { if (this._bodyInit = t, t) if ("string" == typeof t) this._bodyText = t; else if (m.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t; else if (m.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t; else if (m.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString(); else if (m.arrayBuffer && m.blob && v(t)) this._bodyArrayBuffer = f(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]); else { if (!m.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !B(t)) throw new Error("unsupported BodyInit type"); this._bodyArrayBuffer = f(t) } else this._bodyText = ""; this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : m.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")) }, m.blob && (this.blob = function () { var t = i(this); if (t) return t; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function () { return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a) }), this.text = function () { var t = i(this); if (t) return t; if (this._bodyBlob) return u(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(h(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, m.formData && (this.formData = function () { return this.text().then(p) }), this.json = function () { return this.text().then(JSON.parse) }, this } function y(t) { var e = t.toUpperCase(); return _.indexOf(e) > -1 ? e : t } function l(t, e) { e = e || {}; var r = e.body; if (t instanceof l) { if (t.bodyUsed) throw new TypeError("Already read"); this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new n(t.headers)), this.method = t.method, this.mode = t.mode, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0) } else this.url = String(t); if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new n(e.headers)), this.method = y(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests"); this._initBody(r) } function p(t) { var e = new FormData; return t.trim().split("&").forEach(function (t) { if (t) { var r = t.split("="), o = r.shift().replace(/\+/g, " "), n = r.join("=").replace(/\+/g, " "); e.append(decodeURIComponent(o), decodeURIComponent(n)) } }), e } function c(t) { var e = new n; return t.split(/\r?\n/).forEach(function (t) { var r = t.split(":"), o = r.shift().trim(); if (o) { var n = r.join(":").trim(); e.append(o, n) } }), e } function b(t, e) { e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new n(e.headers), this.url = e.url || "", this._initBody(t) } var m = { searchParams: "URLSearchParams" in t, iterable: "Symbol" in t && "iterator" in Symbol, blob: "FileReader" in t && "Blob" in t && function () { try { return new Blob, !0 } catch (t) { return !1 } }(), formData: "FormData" in t, arrayBuffer: "ArrayBuffer" in t }; if (m.arrayBuffer) var w = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], v = function (t) { return t && DataView.prototype.isPrototypeOf(t) }, B = ArrayBuffer.isView || function (t) { return t && w.indexOf(Object.prototype.toString.call(t)) > -1 }; n.prototype.append = function (t, o) { t = e(t), o = r(o); var n = this.map[t]; this.map[t] = n ? n + "," + o : o }, n.prototype["delete"] = function (t) { delete this.map[e(t)] }, n.prototype.get = function (t) { return t = e(t), this.has(t) ? this.map[t] : null }, n.prototype.has = function (t) { return this.map.hasOwnProperty(e(t)) }, n.prototype.set = function (t, o) { this.map[e(t)] = r(o) }, n.prototype.forEach = function (t, e) { for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this) }, n.prototype.keys = function () { var t = []; return this.forEach(function (e, r) { t.push(r) }), o(t) }, n.prototype.values = function () { var t = []; return this.forEach(function (e) { t.push(e) }), o(t) }, n.prototype.entries = function () { var t = []; return this.forEach(function (e, r) { t.push([r, e]) }), o(t) }, m.iterable && (n.prototype[Symbol.iterator] = n.prototype.entries); var _ = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]; l.prototype.clone = function () { return new l(this, { body: this._bodyInit }) }, d.call(l.prototype), d.call(b.prototype), b.prototype.clone = function () { return new b(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new n(this.headers), url: this.url }) }, b.error = function () { var t = new b(null, { status: 0, statusText: "" }); return t.type = "error", t }; var A = [301, 302, 303, 307, 308]; b.redirect = function (t, e) { if (-1 === A.indexOf(e)) throw new RangeError("Invalid status code"); return new b(null, { status: e, headers: { location: t } }) }, t.Headers = n, t.Request = l, t.Response = b, t.fetch = function (t, e) { return new Promise(function (r, o) { var n = new l(t, e), i = new XMLHttpRequest; i.onload = function () { var t = { status: i.status, statusText: i.statusText, headers: c(i.getAllResponseHeaders() || "") }; t.url = "responseURL" in i ? i.responseURL : t.headers.get("X-Request-URL"); var e = "response" in i ? i.response : i.responseText; r(new b(e, t)) }, i.onerror = function () { o(new TypeError("Network request failed")) }, i.ontimeout = function () { o(new TypeError("Network request failed")) }, i.open(n.method, n.url, !0), "include" === n.credentials && (i.withCredentials = !0), "responseType" in i && m.blob && (i.responseType = "blob"), n.headers.forEach(function (t, e) { i.setRequestHeader(e, t) }), i.send("undefined" == typeof n._bodyInit ? null : n._bodyInit) }) }, t.fetch.polyfill = !0 }("undefined" != typeof self ? self : this); } if (!('isNaN' in Number)) { Number.isNaN = Number.isNaN || function (N) { return "number" == typeof N && isNaN(N) }; } if (!('from' in Array && (function () {
                                                                try
                                                    {
                                    Array.from({ length: -Infinity });

                        return true;
                    }
                    catch (e)
                    {
                        return false;
                    }
                }())))
                {
                    !function ()
                    { "use strict";
                        function t(t)
                        {
                            var e = Number(t);
                            return r(e) * Math.floor(Math.abs(Math.min(Math.max(e || 0, 0), 9007199254740991)))
                        }
                        function r(t)
                        {
                            return t >= 0 ? 1 : -1
                        }
                        function e(t)
                        {
                            return "string" == typeof t || "object" == typeof t && (y ? i(t) : f.call(t) === l)
                        }
                        function n(t)
                        {
                            if (!t) return !1;
                            if ("function" != typeof t && "object" != typeof t) return !1;
                            if (y) return s(t);
                            if (b(t)) return !1;
                            var r = f.call(t);
                            return r === g || r === d
                        }
                        var o, a, u = Object.prototype.hasOwnProperty, c = String.prototype.valueOf, i = function (t)
                        {
                            try
                            {
                                return c.call(t), !0
                            }
                            catch (r)
                            {
                                return !1
                            }
                        }, f = Object.prototype.toString, l = "[object String]", p = "function" == typeof Symbol, y = p && "toStringTag" in Symbol, v = Function.prototype.toString, h = /^\s*class /, b = function (t)
                        {
                            try
                            {
                                var r = v.call(t), e = r.replace(/\/\/.*\n/g, ""), n = e.replace(/\/\*[.\s\S]*\*\//g, ""), o = n.replace(/\n/gm, " ").replace(/ {2}/g, " "); return h.test(o) } catch (a) { return !1 } }, s = function (t) { try { return !b(t) && (v.call(t), !0) } catch (r) { return !1 } }, g = "[object Function]", d = "[object GeneratorFunction]", S = Array.isArray, j = function (t) { var r, e = !1, n = []; if (t && "function" == typeof t.next) for (; !e;) { if (r = t.next(), !u.call(r, "value") || !u.call(r, "done")) { if (!0 === r.done) { e = !0; break } break } if (!0 === r.done) { e = !0; break } if (!1 !== r.done) break; n.push(r.value) } return !!e && n }, m = "function" == typeof Set, w = "function" == typeof Map; if (p) o = Symbol.iterator; else { var F; try { F = Function("iterable", "var arr = []; for (var value of iterable) arr.push(value); return arr;") } catch (q) { } if (function () { try { var t = !1; return F({ "@@iterator": function () { return { next: function () { return t = !0, { done: !0, value: undefined } } } } }), t } catch (q) { return !1 } }()) o = "@@iterator"; else if ("function" == typeof Set) { var O = new Set; O.add(0); try { 1 === F(O).length && (a = F) } catch (q) { } } } var D; if (m) { var M = Object.getOwnPropertyDescriptor(Set.prototype, "size").get; D = function (t) { try { return M.call(t), !0 } catch (q) { return !1 } } } var x; if (w) { var A = Object.getOwnPropertyDescriptor(Map.prototype, "size").get; x = function (t) { try { return A.call(t), !0 } catch (q) { return !1 } } } var k = m && Set.prototype.forEach, P = w && Map.prototype.forEach, E = function (t) { var r = []; return u.call(t, o) ? t[o]() : k && D(t) ? (k.call(t, function (t) { r.push(t) }), { next: function () { return 0 === r.length ? { done: !0 } : { value: r.splice(0, 1)[0], done: !1 } } }) : P && x(t) ? (P.call(t, function (t, e) { r.push([e, t]) }), { next: function () { return 0 === r.length ? { done: !0 } : { value: r.splice(0, 1)[0], done: !1 } } }) : t }, T = String.prototype.match, z = function (t) { var r = j(E(t)); if (!r) if (e(t)) r = T.call(t, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || []; else if (a && !S(t)) try { r = a(t) } catch (q) { } return r || t }; Object.defineProperty(Array, "from", { configurable: !0, value: function (r) { var e = this; if (null === r || void 0 === r) throw new TypeError("`Array.from` requires an array-like object, not `null` or `undefined`"); var o, a; if ("undefined" != typeof arguments[1]) { if (o = arguments[1], !n(o)) throw new TypeError("When provided, the second argument to `Array.from` must be a function"); arguments.length > 2 && (a = arguments[2]) } for (var u, c, i = Object(z(r)), f = t(i.length), l = n(e) ? Object(new e(f)) : new Array(f), p = 0; p < f;)u = i[p], c = o ? void 0 === a ? o(u, p) : o.apply(a, [u, p]) : u, Object.defineProperty(l, p, { configurable: !0, enumerable: !0, value: c, writable: !0 }), p += 1; return l.length = f, l }, writable: !0 }) }(); } if (!('of' in Array)) { !function () { "use strict"; var r = function () { try { var r = {}, e = Object.defineProperty, n = e(r, r, r) && e } catch (t) { } return n }(), e = function (r) { try { return !!new r } catch (e) { return !1 } }, n = function () { for (var n, t = arguments, a = t.length, u = this, c = e(u) ? new u(a) : new Array(a), i = 0; i < a;)n = t[i], r ? r(c, i, { value: n, writable: !0, enumerable: !0, configurable: !0 }) : c[i] = n, i += 1; return c.length = a, c }; r ? r(Array, "of", { value: n, configurable: !0, writable: !0 }) : Array.of = n }(); } if (!('every' in Array.prototype)) { Array.prototype.every = function (t) { if (this === undefined || null === this) throw new TypeError(this + " is not an object"); if ("function" != typeof t) throw new TypeError(t + " is not a function"); for (var n = Object(this), r = arguments[1], e = n instanceof String ? n.split("") : n, i = Number(e.length) || 0, o = -1; ++o < i;)if (o in e && !t.call(r, e[o], o, n)) return !1; return !0 }; } if (!('fill' in Array.prototype)) { Object.defineProperty(Array.prototype, "fill", { configurable: !0, value: function (t) { if (this === undefined || null === this) throw new TypeError(this + " is not an object"); var e = Object(this), n = Math.max(Math.min(e.length, 9007199254740991), 0) || 0, r = 1 in arguments ? parseInt(Number(arguments[1]), 10) || 0 : 0; r = r < 0 ? Math.max(n + r, 0) : Math.min(r, n); var a = 2 in arguments && arguments[2] !== undefined ? parseInt(Number(arguments[2]), 10) || 0 : n; for (a = a < 0 ? Math.max(n + arguments[2], 0) : Math.min(a, n); r < a;)e[r] = t, ++r; return e }, writable: !0 }); } if (!('lastIndexOf' in Array.prototype)) { Array.prototype.lastIndexOf = function (t) { if (this === undefined || null === this) throw new TypeError(this + " is not an object"); var n = this instanceof String ? this.split("") : this, i = Math.max(Math.min(n.length, 9007199254740991), 0) || 0, r = Number(arguments[1]) || 0; r = 1 in arguments ? (r < 0 ? Math.max(i + r, 0) : r) + 1 : i; for (; --r >= 0;)if (r in n && n[r] === t) return r; return -1 }; } if (!('reduceRight' in Array.prototype)) { Array.prototype.reduceRight = function (t) { if (this === undefined || null === this) throw new TypeError(this + " is not an object"); if ("function" != typeof t) throw new TypeError(t + " is not a function"); var i, n = Object(this), r = n instanceof String ? n.split("") : n, e = Math.max(Math.min(r.length, 9007199254740991), 0) || 0; if (1 in arguments) i = arguments[1]; else { for (; --e > -1 && !(e in r);); if (e <= -1) throw new TypeError("Reduce of empty array with no initial value"); i = r[e] } for (; --e > -1;)e in r && (i = t(i, r[e], e, n)); return i }; } if (!('CustomEvent' in this &&

                                                       // In Safari, typeof CustomEvent == 'object' but it otherwise works fine
                                                       (typeof this.CustomEvent === 'function' ||
                                                               (this.CustomEvent.toString().indexOf('CustomEventConstructor') > -1))))
                                {
                                    this.CustomEvent = function (e, t)
                                    {
                                        if (!e) throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
                                        var n;
                                        if (t = t || { bubbles: !1, cancelable: !1, detail: null }, "createEvent" in document) try
                                            {
                                                n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail)
                                            }
                                            catch (l)
                                            {
                                                n = document.createEvent("Event"), n.initEvent(e, t.bubbles, t.cancelable), n.detail = t.detail
                                            }
                                        else n = new Event(e, t), n.detail = t && t.detail || null;
                                        return n
                                    }, CustomEvent.prototype = Event.prototype;
                                }
                                var _DOMTokenList = function ()
                                {
                                    var n = !0, t = function (t, e, r, o)
                                    {
                                        Object.defineProperty ? Object.defineProperty(t, e, { configurable: !1 === n || !!o, get: r }) : t.__defineGetter__(e, r)
                                    };
                                    try
                                    {
                                        t({}, "support")
                                    }
                                    catch (e)
                                    {
                                        n = !1
                                    }
                                    return function (n, e)
                                    {
                                        var r = this, o = [], i = {}, a = 0, c = 0, f = function (n)
                                        {
                                            t(r, n, function ()
                                            {
                                                return u(), o[n]
                                            }, !1)
                                        }, l = function () { if (a >= c) for (; c < a; ++c)f(c) }, u = function ()
                                        {
                                            var t, r, c = arguments, f = /\s+/;
                                            if (c.length) for (r = 0; r < c.length; ++r)if (f.test(c[r])) throw t = new SyntaxError('String "' + c[r] + '" contains an invalid character'), t.code = 5, t.name = "InvalidCharacterError", t;
                                            for (o = "object" == typeof n[e] ? ("" + n[e].baseVal).replace(/^\s+|\s+$/g, "").split(f) : ("" + n[e]).replace(/^\s+|\s+$/g, "").split(f), "" === o[0] && (o = []), i = {}, r = 0; r < o.length; ++r)i[o[r]] = !0;
                                            a = o.length, l()
                                        };
                                        return u(), t(r, "length", function ()
                                        {
                                            return u(), a
                                        }), r.toLocaleString = r.toString = function () { return u(), o.join(" ") }, r.item = function (n) { return u(), o[n] }, r.contains = function (n) { return u(), !!i[n] }, r.add = function () { u.apply(r, t = arguments); for (var t, c, f = 0, g = t.length; f < g; ++f)c = t[f], i[c] || (o.push(c), i[c] = !0); a !== o.length && (a = o.length >>> 0, "object" == typeof n[e] ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "), l()) }, r.remove = function () { u.apply(r, t = arguments); for (var t, c = {}, f = 0, g = []; f < t.length; ++f)c[t[f]] = !0, delete i[t[f]]; for (f = 0; f < o.length; ++f)c[o[f]] || g.push(o[f]); o = g, a = g.length >>> 0, "object" == typeof n[e] ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "), l() }, r.toggle = function (n, t) { return u.apply(r, [n]), undefined !== t ? t ? (r.add(n), !0) : (r.remove(n), !1) : i[n] ? (r.remove(n), !1) : (r.add(n), !0) }, r
                                    }
                                }();
                                if (!('DOMTokenList' in this && (function (x)
                            {
                                return 'classList' in x ? !x.classList.toggle('x', false) && !x.className :
                                           true;
                                })(document.createElement('x'))))
                                {
                                    !function (t)
                                    { "DOMTokenList" in t && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = _DOMTokenList), function ()
                                        {
                                            var t = document.createElement("span"); "classList"
                                            in t && (t.classList.toggle("x", !1), t.classList.contains("x") && (t.classList.constructor.prototype.toggle = function (t)
                                            {
                                                var s = arguments[1];
                                                if (s === undefined)
                                                {
                                                    var e = !this.contains(t);
                                                    return this[e ? "add" : "remove"](t), e
                                                }
                                                return s = !!s, this[s ? "add" : "remove"](t), s
                                            }))
                                        }(), function ()
                                        {
                                            var t = document.createElement("span");
                                            if ("classList" in t && (t.classList.add("a", "b"), !t.classList.contains("b")))
                                            {
                                                var s = t.classList.constructor.prototype.add;
                                                t.classList.constructor.prototype.add = function ()
                                                {
                                                    for (var t = arguments, e = arguments.length, n = 0; n < e; n++)s.call(this, t[n])
                                                    }
                                            }
                                        }(), function ()
                                        {
                                            var t = document.createElement("span");
                                            if ("classList" in t && (t.classList.add("a"), t.classList.add("b"), t.classList.remove("a", "b"), t.classList.contains("b")))
                                            {
                                                var s = t.classList.constructor.prototype.remove;
                                                t.classList.constructor.prototype.remove = function ()
                                                {
                                                    for (var t = arguments, e = arguments.length, n = 0; n < e; n++)s.call(this, t[n])
                                                    }
                                            }
                                        }()
                                    }(this);
                                }
                                if (!('Date' in this && 'now' in this.Date && 'getTime' in this.Date.prototype))
                                {
                                    Date.now = function ()
                                    {
                                        return (new Date).getTime()
                                    };
                                }
                                if (!('Date' in this && 'toISOString' in Date.prototype))
                                {
                                    Date.prototype.toISOString = function ()
                                    {
                                        function t(t, e)
                                        {
                                            return t = "" + t, "0000".substr(0, e - t.length) + t
                                        }
                                        var e = this;
                                        return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1, 2) + "-" + t(e.getUTCDate(), 2) + "T" + t(e.getUTCHours(), 2) + ":" + t(e.getUTCMinutes(), 2) + ":" + t(e.getUTCSeconds(), 2) + "." + t(e.getUTCMilliseconds(), 3) + "Z"
                                    };
                                }
                                if (!('DocumentFragment' in this && this.DocumentFragment === document.createDocumentFragment().constructor))
                                {
                                    this.DocumentFragment = document.createDocumentFragment().constructor;
                                }
                                var _mutation = function ()
                                {
                                    function e(e)
                                    {
                                        return "function" == typeof Node ? e instanceof Node : e && "object" == typeof e && e.nodeName && e.nodeType >= 1 && e.nodeType <= 12
                                    }
                                    return function (n)
                                    {
                                        if (1 === n.length) return e(n[0]) ? n[0] : document.createTextNode(n[0] + "");
                                        for (var t = document.createDocumentFragment(), o = 0; o < n.length; o++)t.appendChild(e(n[o]) ? n[o] : document.createTextNode(n[o] + ""));
                                        return t
                                    }
                                }();
                                if (!('DocumentFragment' in this && 'append' in DocumentFragment.prototype))
                                {
                                    DocumentFragment.prototype.append = function ()
                                    {
                                        this.appendChild(_mutation(arguments))
                                    };
                                }
                                if (!('DocumentFragment' in this && 'prepend' in DocumentFragment.prototype))
                                {
                                    DocumentFragment.prototype.prepend = function ()
                                    {
                                        this.insertBefore(_mutation(arguments), this.firstChild)
                                    };
                                }
                                if (!('Element' in this && 'after' in Element.prototype))
                                {
                                    Document.prototype.after = Element.prototype.after = function ()
                                    {
                                        if (this.parentNode)
                                        {
                                            for (var t = Array.prototype.slice.call(arguments), e = this.nextSibling, o = e ? t.indexOf(e) : -1; -1 !== o && (e = e.nextSibling);)o = t.indexOf(e);
                                            this.parentNode.insertBefore(_mutation(arguments), e)
                                        }
                                    }, "Text" in this && (Text.prototype.after = Element.prototype.after);
                                }
                                if (!('Element' in this && 'append' in Element.prototype))
                                {
                                    Document.prototype.append = Element.prototype.append = function ()
                                    {
                                        this.appendChild(_mutation(arguments))
                                    };
                                }
                                if (!('Element' in this && 'before' in Element.prototype))
                                {
                                    Document.prototype.before = Element.prototype.before = function ()
                                    {
                                        if (this.parentNode)
                                        {
                                            for (var e = Array.prototype.slice.call(arguments), t = this.previousSibling, o = t ? e.indexOf(t) : -1; -1 !== o && (t = t.previousSibling);)o = e.indexOf(t);
                                            this.parentNode.insertBefore(_mutation(arguments), t ? t.nextSibling : this.parentNode.firstChild)
                                        }
                                    }, "Text" in this && (Text.prototype.before = Element.prototype.before);
                                }
                                if (!('document' in this && "classList" in document.documentElement && 'Element' in this && 'classList' in Element.prototype && (function ()
                            {
                                var e = document.createElement('span');
                                    e.classList.add('a', 'b');
                                    return e.classList.contains('b');
                                }())))
                                {
                                    !function (e)
                                    {
                                        var t = !0, r = function (e, r, n, i)
                                        {
                                            Object.defineProperty ? Object.defineProperty(e, r, { configurable: !1 === t || !!i, get: n }) : e.__defineGetter__(r, n)
                                        };
                                        try
                                        {
                                            r({}, "support")
                                        }
                                        catch (i)
                                        {
                                            t = !1
                                        }
                                        var n = function (e, i, l)
                                        {
                                            r(e.prototype, i, function ()
                                            {
                                                var e, c = this, s = "__defineGetter__DEFINE_PROPERTY" + i;
                                                if (c[s]) return e;
                                                if (c[s] = !0, !1 === t)
                                                {
                                                    for (var o, a = n.mirror || document.createElement("div"), f = a.childNodes, d = f.length, m = 0; m < d; ++m)if (f[m]._R === c)
                                                        {
                                                            o = f[m];
                                                            break
                                                        }
                                                    o || (o = a.appendChild(document.createElement("div"))), e = DOMTokenList.call(o, c, l)
                                                }
                                                else e = new DOMTokenList(c, l);
                                                return r(c, i, function ()
                                                {
                                                    return e
                                                }), delete c[s], e
                                            }, !0)
                                        };
                                        n(e.Element, "classList", "className"), n(e.HTMLElement, "classList", "className"), n(e.HTMLLinkElement, "relList", "rel"), n(e.HTMLAnchorElement, "relList", "rel"), n(e.HTMLAreaElement, "relList", "rel")
                                    }(this);
                                }
                                if (!('document' in this && "cloneNode" in document.documentElement && (function ()
                            {
                                var div = document.createElement('div'), test = document.createElement('input');
                                    test.type = "radio";
                                    test.checked = true;
                                    div.appendChild(test);
                                    var result = test.cloneNode(false), result2;
                                    try
                                    {
                                        result2 = div.cloneNode();
                                    }
                                    catch (e) { }
                                    return !!result.checked && (!result2 || result2.childNodes.length === 0);
                                })()))
                                {
                                    Element.prototype.cloneNode = function (e, t)
                                    {
                                        return function (t)
                                        {
                                            void 0 === t && (t = !1);
                                            var c = e.call(this, t);
                                            return "checked" in this && (c.checked = this.checked), c
                                        }
                                    }(Element.prototype.cloneNode);
                                }
                                if (!('document' in this && 'querySelector' in this.document))
                                {
                                    !function ()
                                    {
                                        function e(e, n, o)
                                        {
                                            var l, u, c = document.createElement("div"), i = "qsa" + String(Math.random()).slice(3);
                                            return c.innerHTML = "x<style>" + n + "{qsa:" + i + ";}", l = r.appendChild(c.lastChild), u = t(e, n, o, i), r.removeChild(l), o ? u[0] : u
                                        }
                                        function t(e, r, n, o)
                                        {
                                            var l, u = /1|9/.test(e.nodeType), c = e.childNodes, i = [], a = -1;
                                            if (u && e.currentStyle && e.currentStyle.qsa === o && i.push(e) && n) return i;
                                            for (; l = c[++a];)if (i = i.concat(t(l, r, n, o)), n && i.length) return i;
                                            return i
                                        }
                                        var r = document.getElementsByTagName("head")[0];
                                        Document.prototype.querySelector = Element.prototype.querySelector = function (t) { return e(this, t, !0) }, Document.prototype.querySelectorAll = Element.prototype.querySelectorAll = function (t)
                                        {
                                            return e(this, t, !1)
                                        }
                                    }();
                                }
                                if (!('document' in this && "matches" in document.documentElement))
                                {
                                    Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function (e)
                                    {
                                        for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), r = 0; o[r] && o[r] !== t;)++r;
                                        return !!o[r]
                                    };
                                }
                                if (!('document' in this && "closest" in document.documentElement))
                                {
                                    Element.prototype.closest = function (e)
                                    {
                                        for (var n = this; n;)
                                        {
                                            if (n.matches(e)) return n;
                                            n = "SVGElement" in window && n instanceof SVGElement ? n.parentNode : n.parentElement
                                        }
                                        return null
                                    };
                                }
                                if (!('Element' in this && 'prepend' in Element.prototype))
                                {
                                    Document.prototype.prepend = Element.prototype.prepend = function ()
                                    {
                                        this.insertBefore(_mutation(arguments), this.firstChild)
                                    };
                                }
                                if (!('Element' in this && 'remove' in Element.prototype))
                                {
                                    Document.prototype.remove = Element.prototype.remove = function () { this.parentNode && this.parentNode.removeChild(this) }, "Text" in this && (Text.prototype.remove = Element.prototype.remove);
                                }
                                if (!('Element' in this && 'replaceWith' in Element.prototype))
                                {
                                    Document.prototype.replaceWith = Element.prototype.replaceWith = function () { this.parentNode && this.parentNode.replaceChild(_mutation(arguments), this) }, "Text" in this && (Text.prototype.replaceWith = Element.prototype.replaceWith);
                                }
                                this.addEventListener("focus", function (e)
                                {
                                    e.target.dispatchEvent(new Event("focusin", { bubbles: !0, cancelable: !0 }))
                                }, !0), this.addEventListener("blur", function (e)
                                {
                                    e.target.dispatchEvent(new Event("focusout", { bubbles: !0, cancelable: !0 }))
                                }, !0);
                                if (!('onhashchange' in this && (this.onhashchange == null || typeof this.onhashchange === 'function')))
                                {
                                    !function (n)
                                    {
                                        function h()
                                        {
                                            a !== n.location.hash && (a = n.location.hash, n.dispatchEvent(new Event("hashchange"))), setTimeout(h, 500)
                                        }
                                        var a = n.location.hash;
                                        n.onhashchange = function () { }, h()
                                    }(this);
                                }
                                if (!('JSON' in this))
                                {
                                    (function ()
                                    {
                                        function t(e, n)
                                        {
                                            function c(t)
                                            {
                                                if (c[t] !== b) return c[t];
                                                var e;
                                                if ("bug-string-char-index" == t) e = "a" != "a"[0];
                                                else if ("json" == t) e = c("json-stringify") && c("json-parse");
                                                else
                                                {
                                                    var r, o = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                                    if ("json-stringify" == t)
                                                    {
                                                        var l = n.stringify, u = "function" == typeof l && v;
                                                        if (u)
                                                        {
                                                            (r = function ()
                                                            {
                                                                return 1
                                                            }).toJSON = r;
                                                            try
                                                            {
                                                                u = "0" === l(0) && "0" === l(new i) && '""' == l(new a) && l(d) === b && l(b) === b && l() === b && "1" === l(r) && "[1]" == l([r]) && "[null]" == l([b]) && "null" == l(null) && "[null,null,null]" == l([b, d, null]) && l({ a: [r, !0, !1, null, "\0\b\n\f\r\t"] }) == o && "1" === l(null, r) && "[\n 1,\n 2\n]" == l([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == l(new f(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == l(new f(864e13)) && '"-000001-01-01T00:00:00.000Z"' == l(new f(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == l(new f(-1))
                                                            }
                                                            catch (p)
                                                            {
                                                                u = !1
                                                            }
                                                        }
                                                        e = u
                                                    }
                                                    if ("json-parse" == t)
                                                    {
                                                        var s = n.parse;
                                                        if ("function" == typeof s) try
                                                            {
                                                                if (0 === s("0") && !s(!1))
                                                                {
                                                                    r = s(o);
                                                                    var h = 5 == r.a.length && 1 === r.a[0];
                                                                    if (h)
                                                                    {
                                                                        try
                                                                        {
                                                                            h = !s('"\t"')
                                                                        }
                                                                        catch (p) { } if (h) try
                                                                            {
                                                                                h = 1 !== s("01")
                                                                            }
                                                                            catch (p) { } if (h) try
                                                                            {
                                                                                h = 1 !== s("1.")
                                                                            }
                                                                            catch (p) { }
                                                                    }
                                                                }
                                                            }
                                                            catch (p)
                                                            {
                                                                h = !1
                                                            }
                                                        e = h
                                                    }
                                                }
                                                return c[t] = !!e
                                            }
                                            e || (e = o.Object()), n || (n = o.Object());
                                            var i = e.Number || o.Number, a = e.String || o.String, l = e.Object || o.Object, f = e.Date || o.Date, u = e.SyntaxError || o.SyntaxError, s = e.TypeError || o.TypeError, h = e.Math || o.Math, p = e.JSON || o.JSON; "object"
                                            == typeof p && p && (n.stringify = p.stringify, n.parse = p.parse);
                                            var g, y, b, j = l.prototype, d = j.toString, v = new f(-0xc782b5b800cec);
                                            try
                                            {
                                                v = -109252 == v.getUTCFullYear() && 0 === v.getUTCMonth() && 1 === v.getUTCDate() && 10 == v.getUTCHours() && 37 == v.getUTCMinutes() && 6 == v.getUTCSeconds() && 708 == v.getUTCMilliseconds()
                                            }
                                            catch (P) { } if (!c("json"))
                                            {
                                                var C = c("bug-string-char-index");
                                                if (!v) var S = h.floor, O = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], A = function (t, e)
                                                {
                                                    return O[e] + 365 * (t - 1970) + S((t - 1969 + (e = +(e > 1))) / 4) - S((t - 1901 + e) / 100) + S((t - 1601 + e) / 400)
                                                };
                                                if ((g = j.hasOwnProperty) || (g = function (t)
                                            {
                                                var e, r = {};
                                                return (r.__proto__ = null, r.__proto__ = { toString: 1 }, r).toString != d ? g = function (t)
                                                    {
                                                        var e = this.__proto__, r = t in (this.__proto__ = null, this);
                                                        return this.__proto__ = e, r
} :
                                                    (e = r.constructor, g = function (t)
                                                    {
                                                        var r = (this.constructor || e).prototype;
                                                        return t in this && !(t in r && this[t] === r[t])
                                                    }), r = null, g.call(this, t)
                                                }), y = function (t, e)
                                                {
                                                    var n, o, c, i = 0;
                                                    (n = function ()
                                                    {
                                                        this.valueOf = 0
                                                    }).prototype.valueOf = 0, o = new n;
                                                    for (c in o) g.call(o, c) && i++;
                                                    return n = o = null, i ? y = 2 == i ? function (t, e)
                                                    {
                                                        var r, n = {}, o = "[object Function]" == d.call(t);
                                                        for (r in t) o && "prototype" == r || g.call(n, r) || !(n[r] = 1) || !g.call(t, r) || e(r)
} :
                                                    function (t, e)
                                                    {
                                                        var r, n, o = "[object Function]" == d.call(t);
                                                        for (r in t) o && "prototype" == r || !g.call(t, r) || (n = "constructor" === r) || e(r);
                                                        (n || g.call(t, r = "constructor")) && e(r)
} :
                                                    (o = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], y = function (t, e)
                                                    {
                                                        var n, c, i = "[object Function]" == d.call(t), a = !i && "function" != typeof t.constructor && r[typeof t.hasOwnProperty] && t.hasOwnProperty || g;
                                                        for (n in t) i && "prototype" == n || !a.call(t, n) || e(n);
                                                        for (c = o.length; n = o[--c]; a.call(t, n) && e(n));
                                                    }), y(t, e)
                                                }, !c("json-stringify"))
                                                {
                                                    var w = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" }, T = function (t, e) { return ("000000" + (e || 0)).slice(-t) }, _ = function (t)
                                                    {
                                                        for (var e = '"', r = 0, n = t.length, o = !C || n > 10, c = o && (C ? t.split("") : t); r < n; r++)
                                                        {
                                                            var i = t.charCodeAt(r);
                                                            switch (i)
                                                            {
                                                                case 8:
                                                                case 9:
                                                                case 10:
                                                                case 12:
                                                                case 13:
                                                                case 34:
                                                                case 92:
                                                                    e += w[i];
                                                                    break;
                                                                default:
                                                                    if (i < 32)
                                                                    {
                                                                        e += "\\u00" + T(2, i.toString(16));
                                                                        break
                                                                    }
                                                                    e += o ? c[r] : t.charAt(r)
                                                            }
                                                        }
                                                        return e + '"'
                                                    }, N = function (t, e, r, n, o, c, i)
                                                    {
                                                        var a, l, f, u, h, p, j, v, C, O, w, U, J, m, x, M;
                                                        try
                                                        {
                                                            a = e[t]
                                                        }
                                                        catch (P) { } if ("object" == typeof a && a) if ("[object Date]" != (l = d.call(a)) || g.call(a, "toJSON")) "function" == typeof a.toJSON && ("[object Number]" != l && "[object String]" != l && "[object Array]" != l || g.call(a, "toJSON")) && (a = a.toJSON(t));
                                                            else if (a > -1 / 0 && a < 1 / 0)
                                                            {
                                                                if (A)
                                                                {
                                                                    for (h = S(a / 864e5), f = S(h / 365.2425) + 1970 - 1; A(f + 1, 0) <= h; f++);
                                                                    for (u = S((h - A(f, 0)) / 30.42); A(f, u + 1) <= h; u++);
                                                                    h = 1 + h - A(f, u), p = (a % 864e5 + 864e5) % 864e5, j = S(p / 36e5) % 24, v = S(p / 6e4) % 60, C = S(p / 1e3) % 60, O = p % 1e3
                                                                }
                                                                else f = a.getUTCFullYear(), u = a.getUTCMonth(), h = a.getUTCDate(), j = a.getUTCHours(), v = a.getUTCMinutes(), C = a.getUTCSeconds(), O = a.getUTCMilliseconds();
                                                                a = (f <= 0 || f >= 1e4 ? (f < 0 ? "-" : "+") + T(6, f < 0 ? -f : f) : T(4, f)) + "-" + T(2, u + 1) + "-" + T(2, h) + "T" + T(2, j) + ":" + T(2, v) + ":" + T(2, C) + "." + T(3, O) + "Z"
                                                            }
                                                            else a = null;
                                                        if (r && (a = r.call(e, t, a)), null === a) return "null";
                                                        if ("[object Boolean]" == (l = d.call(a))) return "" + a;
                                                        if ("[object Number]" == l) return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                                                        if ("[object String]" == l) return _("" + a);
                                                        if ("object" == typeof a)
                                                        {
                                                            for (m = i.length; m--;)if (i[m] === a) throw s();
                                                            if (i.push(a), w = [], x = c, c += o, "[object Array]" == l)
                                                            {
                                                                for (J = 0, m = a.length; J < m; J++)U = N(J, a, r, n, o, c, i), w.push(U === b ? "null" : U);
                                                                M = w.length ? o ? "[\n" + c + w.join(",\n" + c) + "\n" + x + "]" : "[" + w.join(",") + "]" : "[]"
                                                            }
                                                            else y(n || a, function (t)
                                                            {
                                                                var e = N(t, a, r, n, o, c, i);
                                                                e !== b && w.push(_(t) + ":" + (o ? " " : "") + e)
                                                            }), M = w.length ? o ? "{\n" + c + w.join(",\n" + c) + "\n" + x + "}" : "{" + w.join(",") + "}" : "{}";
                                                            return i.pop(), M
                                                        }
                                                    };
                                                    n.stringify = function (t, e, n)
                                                    {
                                                        var o, c, i, a;
                                                        if (r[typeof e] && e) if ("[object Function]" == (a = d.call(e))) c = e;
                                                            else if ("[object Array]" == a)
                                                            {
                                                                i = {};
                                                                for (var l, f = 0, u = e.length; f < u; l = e[f++], ("[object String]" == (a = d.call(l)) || "[object Number]" == a) && (i[l] = 1));
                                                            }
                                                        if (n) if ("[object Number]" == (a = d.call(n)))
                                                            {
                                                                if ((n -= n % 1) > 0) for (o = "", n > 10 && (n = 10); o.length < n; o += " ");
                                                            }
                                                            else "[object String]" == a && (o = n.length <= 10 ? n : n.slice(0, 10));
                                                        return N("", (l = {}, l[""] = t, l), c, i, o, "", [])
                                                    }
                                                }
                                                if (!c("json-parse"))
                                                {
                                                    var U, J, m = a.fromCharCode, x = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r" }, M = function () { throw U = J = null, u() }, F = function ()
                                                    {
                                                        for (var t, e, r, n, o, c = J, i = c.length; U < i;)switch (o = c.charCodeAt(U))
                                                            {
                                                                case 9:
                                                                case 10:
                                                                case 13:
                                                                case 32:
                                                                    U++;
                                                                    break;
                                                                case 123:
                                                                case 125:
                                                                case 91:
                                                                case 93:
                                                                case 58:
                                                                case 44:
                                                                    return t = C ? c.charAt(U) : c[U], U++, t;
                                                                case 34:
                                                                    for (t = "@", U++; U < i;)if ((o = c.charCodeAt(U)) < 32) M();
                                                                        else if (92 == o) switch (o = c.charCodeAt(++U))
                                                                            {
                                                                                case 92:
                                                                                case 34:
                                                                                case 47:
                                                                                case 98:
                                                                                case 116:
                                                                                case 110:
                                                                                case 102:
                                                                                case 114:
                                                                                    t += x[o], U++;
                                                                                    break;
                                                                                case 117:
                                                                                    for (e = ++U, r = U + 4; U < r; U++)(o = c.charCodeAt(U)) >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || M();
                                                                                    t += m("0x" + c.slice(e, U));
                                                                                    break;
                                                                                default:
                                                                                    M()
                                                                            }
                                                                        else
                                                                        {
                                                                            if (34 == o) break;
                                                                            for (o = c.charCodeAt(U), e = U; o >= 32 && 92 != o && 34 != o;)o = c.charCodeAt(++U);
                                                                            t += c.slice(e, U)
                                                                        }
                                                                    if (34 == c.charCodeAt(U)) return U++, t;
                                                                    M();
                                                                default:
                                                                    if (e = U, 45 == o && (n = !0, o = c.charCodeAt(++U)), o >= 48 && o <= 57)
                                                                    {
                                                                        for (48 == o && (o = c.charCodeAt(U + 1)) >= 48 && o <= 57 && M(), n = !1; U < i && (o = c.charCodeAt(U)) >= 48 && o <= 57; U++);
                                                                        if (46 == c.charCodeAt(U))
                                                                        {
                                                                            for (r = ++U; r < i && (o = c.charCodeAt(r)) >= 48 && o <= 57; r++);
                                                                            r == U && M(), U = r
                                                                        }
                                                                        if (101 == (o = c.charCodeAt(U)) || 69 == o)
                                                                        {
                                                                            for (o = c.charCodeAt(++U), 43 != o && 45 != o || U++, r = U; r < i && (o = c.charCodeAt(r)) >= 48 && o <= 57; r++);
                                                                            r == U && M(), U = r
                                                                        }
                                                                        return +c.slice(e, U)
                                                                    }
                                                                    if (n && M(), "true" == c.slice(U, U + 4)) return U += 4, !0;
                                                                    if ("false" == c.slice(U, U + 5)) return U += 5, !1;
                                                                    if ("null" == c.slice(U, U + 4)) return U += 4, null;
                                                                    M()
                                                            }
                                                        return "$"
                                                    }, k = function (t)
                                                    {
                                                        var e, r;
                                                        if ("$" == t && M(), "string" == typeof t)
                                                        {
                                                            if ("@" == (C ? t.charAt(0) : t[0])) return t.slice(1);
                                                            if ("[" == t)
                                                            {
                                                                for (e = []; "]" != (t = F()); r || (r = !0))r && ("," == t ? "]" == (t = F()) && M() : M()), "," == t && M(), e.push(k(t));
                                                                return e
                                                            }
                                                            if ("{" == t)
                                                            {
                                                                for (e = {}; "}" != (t = F()); r || (r = !0))r && ("," == t ? "}" == (t = F()) && M() : M()), "," != t && "string" == typeof t && "@" == (C ? t.charAt(0) : t[0]) && ":" == F() || M(), e[t.slice(1)] = k(F());
                                                                return e
                                                            }
                                                            M()
                                                        }
                                                        return t
                                                    }, D = function (t, e, r) { var n = E(t, e, r); n === b ? delete t[e] : t[e] = n }, E = function (t, e, r)
                                                    {
                                                        var n, o = t[e];
                                                        if ("object" == typeof o && o) if ("[object Array]" == d.call(o)) for (n = o.length; n--;)D(o, n, r);
                                                            else y(o, function (t)
                                                            {
                                                                D(o, t, r)
                                                            });
                                                        return r.call(t, e, o)
                                                    };
                                                    n.parse = function (t, e)
                                                    {
                                                        var r, n;
                                                        return U = 0, J = "" + t, r = k(F()), "$" != F() && M(), U = J = null, e && "[object Function]" == d.call(e) ? E((n = {}, n[""] = r, n), "", e) : r
                                                    }
                                                }
                                            }
                                            return n.runInContext = t, n
                                        }
                                        var e = "function" == typeof define && define.amd, r = { "function": !0, object: !0 }, n = r[typeof exports] && exports && !exports.nodeType && exports, o = r[typeof window] && window || this, c = n && r[typeof module] && module && !module.nodeType && "object" == typeof global && global;
                                        if (!c || c.global !== c && c.window !== c && c.self !== c || (o = c), n && !e) t(o, n);
                                        else
                                        {
                                            var i = o.JSON, a = o.JSON3, l = !1, f = t(o, o.JSON3 = { noConflict: function ()
                                            {
                                                return l || (l = !0, o.JSON = i, o.JSON3 = a, i = a = null), f
                                            }
                                                                                                    });
                                            o.JSON = { parse: f.parse, stringify: f.stringify }
                                        }
                                        e && define(function ()
                                        {
                                            return f
                                        })
                                    }).call(this);
                                }
                                if (!('Symbol' in this && 'species' in this.Symbol))
                                {
                                    Object.defineProperty(Symbol, "species", { value: Symbol("species") });
                                }
                                if (!('Map' in this && (function ()
                            {
                                try
                                {
                                    return (new Map([[1, 1], [2, 2]])).size === 2;
                                    }
                                    catch (e)
                                    {
                                        return false;
                                    }
                                }())))
                                {
                                    !function (e)
                                    {
                                        function t(e, t)
                                        {
                                            var r = e[t];
                                            if (null === r || r === undefined) return undefined;
                                            if ("function" != typeof r) throw new TypeError("Method not callable: " + t);
                                            return r
                                        }
                                        function r(e)
                                        {
                                            if (!(1 in arguments)) var r = t(e, Symbol.iterator);
                                            var o = r.call(e);
                                            if ("object" != typeof o) throw new TypeError("bad iterator");
                                            var n = o.next, a = Object.create(null);
                                            return a["[[Iterator]]"] = o, a["[[NextMethod]]"] = n, a["[[Done]]"] = !1, a
                                        }
                                        function o(e)
                                        {
                                            if (1 in arguments) var t = e["[[NextMethod]]"].call(e["[[Iterator]]"], arguments[1]);
                                            else var t = e["[[NextMethod]]"].call(e["[[Iterator]]"]);
                                            if ("object" != typeof t) throw new TypeError("bad iterator");
                                            return t
                                        }
                                        function n(e)
                                        {
                                            if ("object" != typeof e) throw new Error(Object.prototype.toString.call(e) + "is not an Object.");
                                            return Boolean(e.done)
                                        }
                                        function a(e)
                                        {
                                            if ("object" != typeof e) throw new Error(Object.prototype.toString.call(e) + "is not an Object.");
                                            return e.value
                                        }
                                        function i(e)
                                        {
                                            var t = o(e);
                                            return !0 !== n(t) && t
                                        }
                                        function l(e, r)
                                        {
                                            if ("object" != typeof e["[[Iterator]]"]) throw new Error(Object.prototype.toString.call(e["[[Iterator]]"]) + "is not an Object.");
                                            var o = e["[[Iterator]]"], n = t(o, "return");
                                            if (n === undefined) return r;
                                            try
                                            {
                                                var a = n.call(o)
                                            }
                                            catch (l)
                                            {
                                                var i = l
                                            }
                                            if (r) return r;
                                            if (i) throw i;
                                            if ("object" == typeof a) throw new TypeError("Iterator's return method returned a non-object.");
                                            return r
                                        }
                                        function c(e, t)
                                        {
                                            if ("boolean" != typeof t) throw new Error;
                                            var r = {};
                                            return r.value = e, r.done = t, r
                                        }
                                        function p(e, t)
                                        {
                                            if ("object" != typeof e) throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
                                            if (!0 !== e._es6Map) throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
                                            var r = Object.create(v);
                                            return Object.defineProperty(r, "[[Map]]", { configurable: !0, enumerable: !1, writable: !0, value: e }), Object.defineProperty(r, "[[MapNextIndex]]", { configurable: !0, enumerable: !1, writable: !0, value: 0 }), Object.defineProperty(r, "[[MapIterationKind]]", { configurable: !0, enumerable: !1, writable: !0, value: t }), r
                                        }
                                        var u = function (e, t) { return typeof e == typeof t && ("number" == typeof e ? !(!isNaN(e) || !isNaN(t)) || (0 === e && -0 === t || (-0 === e && 0 === t || e === t)) : e === t) }, f = function (e, t) { var r = arguments[2] || {}, o = Object.getPrototypeOf(e), n = Object.create(o); for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && Object.defineProperty(n, a, { configurable: !0, enumerable: !1, writable: !0, value: r[a] }); return n }, y = Symbol("undef"), b = function ()
                                        {
                                            try
                                            {
                                                var e = {};
                                                return Object.defineProperty(e, "t", { configurable: !0, enumerable: !1, get: function ()
                                                {
                                                    return !0
                                                }, set: undefined
                                                                                     }), !!e.t
                                            }
                                            catch (t)
                                            {
                                                return !1
                                            }
                                        }(), s = function (e) { return "function" == typeof e }, d = function w()
                                        {
                                            if (!(this instanceof w)) throw new TypeError('Constructor Map requires "new"');
                                            var e = f(this, "%MapPrototype%", { _keys: [], _values: [], _size: 0, _es6Map: !0 });
                                            b || Object.defineProperty(e, "size", { configurable: !0, enumerable: !1, writable: !0, value: 0 });
                                            var t = arguments[0] || undefined;
                                            if (null === t || t === undefined) return e;
                                            var o = e.set;
                                            if (!s(o)) throw new TypeError("Map.prototype.set is not a function");
                                            try
                                            {
                                                for (var n = r(t); ;)
                                                {
                                                    var c = i(n);
                                                    if (!1 === c) return e;
                                                    var p = a(c);
                                                    if ("object" != typeof p) try
                                                        {
                                                            throw new TypeError("Iterator value " + p + " is not an entry object")
                                                        }
                                                        catch (h)
                                                        {
                                                            return l(n, h)
                                                        }
                                                    try
                                                    {
                                                        var u = p[0], y = p[1];
                                                        o.call(e, u, y)
                                                    }
                                                    catch (j)
                                                    {
                                                        return l(n, j)
                                                    }
                                                }
                                            }
                                            catch (j)
                                            {
                                                if (Array.isArray(t) || "[object Arguments]" === Object.prototype.toString.call(t) || t.callee)
                                                {
                                                    var d, v = t.length;
                                                    for (d = 0; d < v; d++)o.call(e, t[d][0], t[d][1])
                                                    }
                                            }
                                            return e
                                        };
                                        Object.defineProperty(d, "prototype", { configurable: !1, enumerable: !1, writable: !1, value: {} }), b ? Object.defineProperty(d, Symbol.species, { configurable: !0, enumerable: !1, get: function ()
                                        {
                                            return this
                                        }, set: undefined
                                                                                                                                                   }) : Object.defineProperty(d, Symbol.species, { configurable: !0, enumerable: !1, writable: !0, value: d }), Object.defineProperty(d.prototype, "clear", { configurable: !0, enumerable: !1, writable: !0, value: function ()
                                        {
                                            var e = this;
                                            if ("object" != typeof e) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
                                            if (!0 !== e._es6Map) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
                                            for (var t = e._keys, r = 0; r < t.length; r++)e._keys[r] = y, e._values[r] = y;
                                            return this._size = 0, b || (this.size = this._size), undefined
                                        }
                                                                                                                                                                                                                                                                                                                                                    }), Object.defineProperty(d.prototype, "constructor", { configurable: !0, enumerable: !1, writable: !0, value: d }), Object.defineProperty(d.prototype, "delete", { configurable: !0, enumerable: !1, writable: !0, value: function (e)
                                        {
                                            var t = this;
                                            if ("object" != typeof t) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
                                            if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
                                            for (var r = t._keys, o = 0; o < r.length; o++)if (t._keys[o] !== y && u(t._keys[o], e)) return this._keys[o] = y, this._values[o] = y, --this._size, b || (this.size = this._size), !0;
                                            return !1
                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }), Object.defineProperty(d.prototype, "entries", { configurable: !0, enumerable: !1, writable: !0, value: function ()
                                        {
                                            return p(this, "key+value")
                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }), Object.defineProperty(d.prototype, "forEach", { configurable: !0, enumerable: !1, writable: !0, value: function (e)
                                        {
                                            var t = this;
                                            if ("object" != typeof t) throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
                                            if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
                                            if (!s(e)) throw new TypeError(Object.prototype.toString.call(e) + " is not a function.");
                                            if (arguments[1]) var r = arguments[1];
                                            for (var o = t._keys, n = 0; n < o.length; n++)t._keys[n] !== y && t._values[n] !== y && e.call(r, t._values[n], t._keys[n], t);
                                            return undefined
                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }), Object.defineProperty(d.prototype, "get", { configurable: !0, enumerable: !1, writable: !0, value: function (e)
                                        {
                                            var t = this;
                                            if ("object" != typeof t) throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t));
                                            if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t));
                                            for (var r = t._keys, o = 0; o < r.length; o++)if (t._keys[o] !== y && u(t._keys[o], e)) return t._values[o];
                                            return undefined
                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }), Object.defineProperty(d.prototype, "has", { configurable: !0, enumerable: !1, writable: !0, value: function (e)
                                        {
                                            var t = this;
                                            if ("object" != typeof t) throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
                                            if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
                                            for (var r = t._keys, o = 0; o < r.length; o++)if (t._keys[o] !== y && u(t._keys[o], e)) return !0;
                                            return !1
                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }), Object.defineProperty(d.prototype, "keys", { configurable: !0, enumerable: !1, writable: !0, value: function ()
                                        {
                                            return p(this, "key")
                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     }), Object.defineProperty(d.prototype, "set", { configurable: !0, enumerable: !1, writable: !0, value: function (e, t)
                                        {
                                            var r = this;
                                            if ("object" != typeof r) throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(r));
                                            if (!0 !== r._es6Map) throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(r));
                                            for (var o = r._keys, n = 0; n < o.length; n++)if (r._keys[n] !== y && u(r._keys[n], e)) return r._values[n] = t, r;
                                            -0 === e && (e = 0);
                                            var a = {};
                                            return a["[[Key]]"] = e, a["[[Value]]"] = t, r._keys.push(a["[[Key]]"]), r._values.push(a["[[Value]]"]), ++r._size, b || (r.size = r._size), r
                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   }), b && Object.defineProperty(d.prototype, "size", { configurable: !0, enumerable: !1, get: function ()
                                        {
                                            var e = this;
                                            if ("object" != typeof e) throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
                                            if (!0 !== e._es6Map) throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
                                            for (var t = e._keys, r = 0, o = 0; o < t.length; o++)e._keys[o] !== y && (r += 1);
                                            return r
                                        }, set: undefined
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       }), Object.defineProperty(d.prototype, "values", { configurable: !0, enumerable: !1, writable: !0, value: function ()
                                        {
                                            return p(this, "value")
                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }), Object.defineProperty(d.prototype, Symbol.iterator, { configurable: !0, enumerable: !1, writable: !0, value: d.prototype.entries }), "name" in d || Object.defineProperty(d, "name", { configurable: !0, enumerable: !1, writable: !1, value: "Map" });
                                        var v = { isMapIterator:
                                                  !0, next:
                                                  function ()
                                        {
                                            var e = this;
                                            if ("object" != typeof e) throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
                                            if (!e.isMapIterator) throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
                                            var t = e["[[Map]]"], r = e["[[MapNextIndex]]"], o = e["[[MapIterationKind]]"];
                                            if (t === undefined) return c(undefined, !0);
                                            if (!t._es6Map) throw new Error;
                                            for (var n = t._keys, a = n.length; r < a;)
                                            {
                                                var i = Object.create(null);
                                                if (i["[[Key]]"] = t._keys[r], i["[[Value]]"] = t._values[r], r += 1, e["[[MapNextIndex]]"] = r, i["[[Key]]"] !== y)
                                                {
                                                    if ("key" === o) var l = i["[[Key]]"];
                                                    else if ("value" === o) var l = i["[[Value]]"];
                                                    else
                                                    {
                                                        if ("key+value" !== o) throw new Error;
                                                        var l = [i["[[Key]]"], i["[[Value]]"]]
                                                    }
                                                    return c(l, !1)
                                                }
                                            }
                                            return e["[[Map]]"] = undefined, c(undefined, !0)
                                        }
                                                };
                                        Object.defineProperty(v, Symbol.iterator, { configurable: !0, enumerable: !1, writable: !0, value: function ()
                                        {
                                            return this
                                        }
                                                                                  });
                                        try
                                        {
                                            Object.defineProperty(e, "Map", { configurable: !0, enumerable: !1, writable: !0, value: d })
                                        }
                                        catch (h)
                                        {
                                            e.Map = d
                                        }
                                    }(this);
                                }
                                if (!(document.contains))
                                {
                                    !function ()
                                    {
                                        function t(t)
                                        {
                                            if (!(0 in arguments)) throw new TypeError("1 argument is required");
                                            do
                                            {
                                                if (this === t) return !0
                                                }
                                            while (t = t && t.parentNode);
                                            return !1
                                        }
                                        if ("HTMLElement" in this && "contains" in HTMLElement.prototype) try
                                            {
                                                delete HTMLElement.prototype.contains
                                            }
                                            catch (e) { } "Node" in this ? Node.prototype.contains = t : document.contains = Element.prototype.contains = t
                                    }();
                                }
                                if (!('Set' in this && (function ()
                            {
                                return (new Set([1, 2])).size === 2;
                                }())))
                                {
                                    !function (t)
                                    {
                                        function e(t)
                                        {
                                            return Number.isNaN(t) ? r : t
                                        }
                                        function i(t)
                                        {
                                            return t === r ? NaN : t
                                        }
                                        function n(t, e)
                                        {
                                            var i = 0;
                                            return { next:
                                                     function ()
                                            {
                                                for (; t._values[i] === o;)i++;
                                                return i === t._values.length ? { value: void 0, done: !0 } :
                                                             {
                                                                 value:
                                                                 e.call(t, i++), done:
                                                                 !1
                                                             }
                                            } }
                                        }
                                        var o = Symbol("undef"), r = Symbol("NaN"), s = function ()
                                        {
                                            var t = arguments[0];
                                            this._values = [], this.size = this._size = 0, t && "function" == typeof t.forEach && t.forEach(function (t)
                                            {
                                                this.add.call(this, t)
                                            }, this)
                                        };
                                        try
                                        {
                                            Object.defineProperty(s.prototype, "size", { get: function ()
                                            {
                                                return this._size
                                            }
                                                                                       })
                                        }
                                        catch (u) { } s.prototype.add = function (t) { return t = e(t), -1 === this._values.indexOf(t) && (this._values.push(t), this.size = ++this._size), this }, s.prototype.has = function (t) { return -1 !== this._values.indexOf(e(t)) }, s.prototype["delete"] = function (t) { var i = this._values.indexOf(e(t)); return -1 !== i && (this._values[i] = o, this.size = --this._size, !0) }, s.prototype.clear = function () { this._values = [], this.size = this._size = 0 }, s.prototype[Symbol.iterator] = s.prototype.values = s.prototype.keys = function ()
                                        {
                                            var t = n(this, function (t)
                                            {
                                                return i(this._values[t])
                                            });
                                            return t[Symbol.iterator] = this.keys.bind(this), t
                                        }, s.prototype.entries = function ()
                                        {
                                            var t = n(this, function (t)
                                            {
                                                return [i(this._values[t]), i(this._values[t])]
                                            });
                                            return t[Symbol.iterator] = this.entries.bind(this), t
                                        }, s.prototype.forEach = function (e, i) { i = i || t; for (var n = this.entries(), o = n.next(); !1 === o.done;)e.call(i, o.value[1], o.value[0], this), o = n.next() }, s.prototype.constructor = s.prototype[Symbol.species] = s, s.prototype.constructor = s, s.name = "Set", t.Set = s
                                    }(this);
                                }
                                if (!('endsWith' in String.prototype))
                                {
                                    String.prototype.endsWith = function (t)
                                    {
                                        var n = arguments.length < 2 ? this.length : arguments[1], e = this.lastIndexOf(t);
                                        return -1 !== e && e === n - t.length
                                    };
                                }
                                if (!('startsWith' in String.prototype))
                                {
                                    String.prototype.startsWith = function (t)
                                    {
                                        var i = arguments.length < 2 ? 0 : arguments[1];
                                        return 0 === this.slice(i).indexOf(t)
                                    };
                                }
                                if (!('trim' in String.prototype))
                                {
                                    String.prototype.trim = function ()
                                    {
                                        return this.replace(/^\s+|\s+$/g, "")
                                    };
                                }
                                if (!((function (global)
                            {
                                /*
                                 * Browsers may have:
                                 * No global URL object
                                 * URL with static methods only - may have a dummy constructor
                                 * URL with members except searchParams
                                 * Full URL API support
                                 */
                                'use strict';

                                try
                                {
                                    var nativeURL = new global.URL('http://example.com');

                                        return 'href' in nativeURL && 'searchParams' in nativeURL;
                                    }
                                    catch (error)
                                    {
                                        return false;
                                    }
                                }(this))))
                                {
                                    !function (e)
                                    { "use strict";
                                        function t(t)
                                        {
                                            return !!t && ("Symbol" in e && "iterator" in e.Symbol && "function" == typeof t[Symbol.iterator] || !!Array.isArray(t))
                                        }
                                        function n(e)
                                        {
                                            return "from" in Array ? Array.from(e) : Array.prototype.slice.call(e)
                                        } !function ()
                                        {
                                            function r(e)
                                            {
                                                var t = "", n = !0;
                                                return e.forEach(function (e)
                                                {
                                                    var r = encodeURIComponent(e.name), a = encodeURIComponent(e.value);
                                                    n || (t += "&"), t += r + "=" + a, n = !1
                                                }), t.replace(/%20/g, "+")
                                            }
                                            function a(e, t)
                                            {
                                                var n = e.split("&");
                                                t && -1 === n[0].indexOf("=") && (n[0] = "=" + n[0]);
                                                var r = [];
                                                n.forEach(function (e)
                                                {
                                                    if (0 !== e.length)
                                                    {
                                                        var t = e.indexOf("=");
                                                        if (-1 !== t) var n = e.substring(0, t), a = e.substring(t + 1);
                                                        else n = e, a = "";
                                                        n = n.replace(/\+/g, " "), a = a.replace(/\+/g, " "), r.push({ name: n, value: a })
                                                    }
                                                });
                                                var a = [];
                                                return r.forEach(function (e)
                                                {
                                                    a.push({ name: decodeURIComponent(e.name), value: decodeURIComponent(e.value) })
                                                }), a
                                            }
                                            function i(e)
                                            {
                                                if (c) return new s(e);
                                                var t = document.createElement("a");
                                                return t.href = e, t
                                            }
                                            function o(e)
                                            {
                                                var i = this;
                                                this._list = [], e === undefined || null === e || (e instanceof o ? this._list = a(String(e)) : "object" == typeof e && t(e) ? n(e).forEach(function (e)
                                                {
                                                    if (!t(e)) throw TypeError();
                                                    var r = n(e);
                                                    if (2 !== r.length) throw TypeError();
                                                    i._list.push({ name: String(r[0]), value: String(r[1]) })
                                                }) : "object" == typeof e && e ? Object.keys(e).forEach(function (t)
                                                {
                                                    i._list.push({ name: String(t), value: String(e[t]) })
                                                }) : (e = String(e), "?" === e.substring(0, 1) && (e = e.substring(1)), this._list = a(e))), this._url_object = null, this._setList = function (e)
                                                {
                                                    u || (i._list = e)
                                                };
                                                var u = !1;
                                                this._update_steps = function ()
                                                {
                                                    u || (u = !0, i._url_object && ("about:" === i._url_object.protocol && -1 !== i._url_object.pathname.indexOf("?") && (i._url_object.pathname = i._url_object.pathname.split("?")[0]), i._url_object.search = r(i._list), u = !1))
                                                }
                                            }
                                            function u(e, t)
                                            {
                                                var n = 0;
                                                this.next = function ()
                                                {
                                                    if (n >= e.length) return { done: !0, value: undefined };
                                                    var r = e[n++];
                                                    return { done: !1, value: "key" === t ? r.name : "value" === t ? r.value : [r.name, r.value] }
                                                }
                                            }
                                            function l(t, n)
                                            {
                                                function r()
                                                {
                                                    var e = l.href.replace(/#$|\?$|\?(?=#)/g, ""); l.href !== e && (l.href = e) } function u() { m._setList(l.search ? a(l.search.substring(1)) : []), m._update_steps() } if (!(this instanceof e.URL)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator."); n && (t = function () { if (c) return new s(t, n).href; var e; try { var r; if ("[object OperaMini]" === Object.prototype.toString.call(window.operamini) ? (e = document.createElement("iframe"), e.style.display = "none", document.documentElement.appendChild(e), r = e.contentWindow.document) : document.implementation && document.implementation.createHTMLDocument ? r = document.implementation.createHTMLDocument("") : document.implementation && document.implementation.createDocument ? (r = document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", null), r.documentElement.appendChild(r.createElement("head")), r.documentElement.appendChild(r.createElement("body"))) : window.ActiveXObject && (r = new window.ActiveXObject("htmlfile"), r.write("<head></head><body></body>"), r.close()), !r) throw Error("base not supported"); var a = r.createElement("base"); a.href = n, r.getElementsByTagName("head")[0].appendChild(a); var i = r.createElement("a"); return i.href = t, i.href } finally { e && e.parentNode.removeChild(e) } }()); var l = i(t || ""), f = function () { if (!("defineProperties" in Object)) return !1; try { var e = {}; return Object.defineProperties(e, { prop: { get: function () { return !0 } } }), e.prop } catch (t) { return !1 } }(), h = f ? this : document.createElement("a"), m = new o(l.search ? l.search.substring(1) : null); return m._url_object = h, Object.defineProperties(h, { href: { get: function () { return l.href }, set: function (e) { l.href = e, r(), u() }, enumerable: !0, configurable: !0 }, origin: { get: function () { return "origin" in l ? l.origin : this.protocol + "//" + this.host }, enumerable: !0, configurable: !0 }, protocol: { get: function () { return l.protocol }, set: function (e) { l.protocol = e }, enumerable: !0, configurable: !0 }, username: { get: function () { return l.username }, set: function (e) { l.username = e }, enumerable: !0, configurable: !0 }, password: { get: function () { return l.password }, set: function (e) { l.password = e }, enumerable: !0, configurable: !0 }, host: { get: function () { var e = { "http:": /:80$/, "https:": /:443$/, "ftp:": /:21$/ }[l.protocol]; return e ? l.host.replace(e, "") : l.host }, set: function (e) { l.host = e }, enumerable: !0, configurable: !0 }, hostname: { get: function () { return l.hostname }, set: function (e) { l.hostname = e }, enumerable: !0, configurable: !0 }, port: { get: function () { return l.port }, set: function (e) { l.port = e }, enumerable: !0, configurable: !0 }, pathname: { get: function () { return "/" !== l.pathname.charAt(0) ? "/" + l.pathname : l.pathname }, set: function (e) { l.pathname = e }, enumerable: !0, configurable: !0 }, search: { get: function () { return l.search }, set: function (e) { l.search !== e && (l.search = e, r(), u()) }, enumerable: !0, configurable: !0 }, searchParams: { get: function () { return m }, enumerable: !0, configurable: !0 }, hash: { get: function () { return l.hash }, set: function (e) { l.hash = e, r() }, enumerable: !0, configurable: !0 }, toString: { value: function () { return l.toString() }, enumerable: !1, configurable: !0 }, valueOf: { value: function () { return l.valueOf() }, enumerable: !1, configurable: !0 } }), h } var c, s = e.URL; try { if (s) { if ("searchParams" in (c = new e.URL("http://example.com"))) return; "href" in c || (c = undefined) } } catch (h) { } if (Object.defineProperties(o.prototype, { append: { value: function (e, t) { this._list.push({ name: e, value: t }), this._update_steps() }, writable: !0, enumerable: !0, configurable: !0 }, "delete": { value: function (e) { for (var t = 0; t < this._list.length;)this._list[t].name === e ? this._list.splice(t, 1) : ++t; this._update_steps() }, writable: !0, enumerable: !0, configurable: !0 }, get: { value: function (e) { for (var t = 0; t < this._list.length; ++t)if (this._list[t].name === e) return this._list[t].value; return null }, writable: !0, enumerable: !0, configurable: !0 }, getAll: { value: function (e) { for (var t = [], n = 0; n < this._list.length; ++n)this._list[n].name === e && t.push(this._list[n].value); return t }, writable: !0, enumerable: !0, configurable: !0 }, has: { value: function (e) { for (var t = 0; t < this._list.length; ++t)if (this._list[t].name === e) return !0; return !1 }, writable: !0, enumerable: !0, configurable: !0 }, set: { value: function (e, t) { for (var n = !1, r = 0; r < this._list.length;)this._list[r].name === e ? n ? this._list.splice(r, 1) : (this._list[r].value = t, n = !0, ++r) : ++r; n || this._list.push({ name: e, value: t }), this._update_steps() }, writable: !0, enumerable: !0, configurable: !0 }, entries: { value: function () { return new u(this._list, "key+value") }, writable: !0, enumerable: !0, configurable: !0 }, keys: { value: function () { return new u(this._list, "key") }, writable: !0, enumerable: !0, configurable: !0 }, values: { value: function () { return new u(this._list, "value") }, writable: !0, enumerable: !0, configurable: !0 }, forEach: { value: function (e) { var t = arguments.length > 1 ? arguments[1] : undefined; this._list.forEach(function (n, r) { e.call(t, n.value, n.name) }) }, writable: !0, enumerable: !0, configurable: !0 }, toString: { value: function () { return r(this._list) }, writable: !0, enumerable: !1, configurable: !0 } }), "Symbol" in e && "iterator" in e.Symbol && (Object.defineProperty(o.prototype, e.Symbol.iterator, { value: o.prototype.entries, writable: !0, enumerable: !0, configurable: !0 }), Object.defineProperty(u.prototype, e.Symbol.iterator, { value: function () { return this }, writable: !0, enumerable: !0, configurable: !0 })), s) for (var f in s) s.hasOwnProperty(f) && "function" == typeof s[f] && (l[f] = s[f]); e.URL = l, e.URLSearchParams = o }(), function () { if ("1" !== new e.URLSearchParams([["a", 1]]).get("a") || "1" !== new e.URLSearchParams({ a: 1 }).get("a")) { var r = e.URLSearchParams; e.URLSearchParams = function (e) { if (e && "object" == typeof e && t(e)) { var a = new r; return n(e).forEach(function (e) { if (!t(e)) throw TypeError(); var r = n(e); if (2 !== r.length) throw TypeError(); a.append(r[0], r[1]) }), a } return e && "object" == typeof e ? (a = new r, Object.keys(e).forEach(function (t) { a.set(t, e[t]) }), a) : new r(e) } } }() }(self); } if (!('atob' in this)) { !function () { function e(e) { this.message = e } var t = "undefined" != typeof exports ? exports : "undefined" != typeof self ? self : $.global, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; e.prototype = new Error, e.prototype.name = "InvalidCharacterError", t.btoa || (t.btoa = function (t) { for (var o, n, a = String(t), i = 0, f = r, c = ""; a.charAt(0 | i) || (f = "=", i % 1); c += f.charAt(63 & o >> 8 - i % 1 * 8)) { if ((n = a.charCodeAt(i += .75)) > 255) throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."); o = o << 8 | n } return c }), t.atob || (t.atob = function (t) { var o = String(t).replace(/[=]+$/, ""); if (o.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded."); for (var n, a, i = 0, f = 0, c = ""; a = o.charAt(f++); ~a && (n = i % 4 ? 64 * n + a : a, i++ % 4) ? c += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0)a = r.indexOf(a); return c }) }(); } if (!('document' in this && 'hidden' in document && 'visibilityState' in document)) { !function () { function i() { document.hidden = document[t + "Hidden"], document.visibilityState = document[t + "VisibilityState"] } var t = document.webkitVisibilityState ? "webkit" : document.mozVisibilityState ? "moz" : null; t && (i(), document.addEventListener(t + "visibilitychange", function () { i(), document.dispatchEvent(new CustomEvent("visibilitychange")) })) }(); } if (!('location' in this && 'origin' in this.location)) { try { Object.defineProperty(window.location, "origin", { enumerable: !0, writable: !1, value: window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""), configurable: !1 }) } catch (e) { window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "") } } if (!('performance' in this && 'now' in this.performance)) { !function (n) { var e = Date.now(); n.performance || (n.performance = {}), n.performance.now = function () { return Date.now() - e } }(this); } if (!('requestAnimationFrame' in this)) { !function (n) { var e; if ("mozRequestAnimationFrame" in n ? e = "moz" : "webkitRequestAnimationFrame" in n && (e = "webkit"), e) n.requestAnimationFrame = function (t) { return n[e + "RequestAnimationFrame"](function () { t(performance.now()) }) }, n.cancelAnimationFrame = n[e + "CancelAnimationFrame"]; else { var t = Date.now(); n.requestAnimationFrame = function (n) { if ("function" != typeof n) throw new TypeError(n + " is not a function"); var e = Date.now(), i = 16 + t - e; return i < 0 && (i = 0), t = e, setTimeout(function () { t = Date.now(), n(performance.now()) }, i) }, n.cancelAnimationFrame = function (n) { clearTimeout(n) } } }(this); } if (!(// Primitive detect for HTML5 element support - add a <section> element and check that it acquires block display mode by default
                                            (function ()
                            {
                                var p = document.createElement('p');
                                    var result = false;
                                    p.innerHTML = '<section></section>';
                                    document.documentElement.appendChild(p);
                                    if (p.firstChild)
                                    {
                                        if ('getComputedStyle' in window)
                                        {
                                            result = (getComputedStyle(p.firstChild).display === 'block');
                                        }
                                        else if (p.firstChild.currentStyle)
                                        {
                                            result = (p.firstChild.currentStyle.display === 'block');
                                        }
                                    }
                                    document.documentElement.removeChild(p);
                                    return result;
                                })()))
                                {
                                    !function (e, t)
                                    {
                                        function n(e, t)
                                        {
                                            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
                                            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                                        }
                                        function r()
                                        {
                                            var e = y.elements;
                                            return "string" == typeof e ? e.split(" ") : e
                                        }
                                        function a(e, t)
                                        {
                                            var n = y.elements; "string"
                                            != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), y.elements = n + " " + e, m(t)
                                        }
                                        function o(e)
                                        {
                                            var t = v[e[p]];
                                            return t || (t = {}, g++, e[p] = g, v[g] = t), t
                                        }
                                        function c(e, n, r)
                                        {
                                            if (n || (n = t), s) return n.createElement(e);
                                            r || (r = o(n));
                                            var a;
                                            return a = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || f.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
                                        }
                                        function i(e, n)
                                        {
                                            if (e || (e = t), s) return e.createDocumentFragment();
                                            n = n || o(e);
                                            for (var a = n.frag.cloneNode(), c = 0, i = r(), l = i.length; l > c; c++)a.createElement(i[c]);
                                            return a
                                        }
                                        function l(e, t)
                                        {
                                            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) { return y.shivMethods ? c(n, e, t) : t.createElem(n) }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e)
                                            {
                                                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                                            }) + ");return n}")(y, t.frag)
                                        }
                                        function m(e)
                                        {
                                            e || (e = t);
                                            var r = o(e);
                                            return !y.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), s || l(e, r), e
                                        }
                                        var u, s, d = e.html5 || {}, f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, p = "_html5shiv", g = 0, v = {};
                                        !function ()
                                        {
                                            try
                                            {
                                                var e = t.createElement("a");
                                                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, s = 1 == e.childNodes.length || function ()
                                                {
                                                    t.createElement("a");
                                                    var e = t.createDocumentFragment();
                                                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                                                }()
                                            }
                                            catch (n)
                                            {
                                                u = !0, s = !0
                                            }
                                        }();
                                        var y = { elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: "3.7.3-pre", shivCSS: !1 !== d.shivCSS, supportsUnknownElements: s, shivMethods: !1 !== d.shivMethods, type: "default", shivDocument: m, createElement: c, createDocumentFragment: i, addElements: a };
                                        e.html5 = y, m(t), "object" == typeof module && module.exports && (module.exports = y)
                                    }("undefined" != typeof window ? window : this, document);
                                }
                            }).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});