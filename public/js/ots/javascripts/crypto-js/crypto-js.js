!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = !!e && "length" in e && e.length,
      n = oe.type(e);
    return (
      "function" !== n &&
      !oe.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function r(e, t, n) {
    if (oe.isFunction(t))
      return oe.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return oe.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (ge.test(t)) return oe.filter(t, e, n);
      t = oe.filter(t, e);
    }
    return oe.grep(e, function (e) {
      return Z.call(t, e) > -1 !== n;
    });
  }
  function i(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function o(e) {
    var t = {};
    return (
      oe.each(e.match(xe) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function a() {
    G.removeEventListener("DOMContentLoaded", a),
      e.removeEventListener("load", a),
      oe.ready();
  }
  function s() {
    this.expando = oe.expando + s.uid++;
  }
  function u(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(Ae, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : Se.test(n)
                ? oe.parseJSON(n)
                : n));
        } catch (e) {}
        Ce.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function c(e, t, n, r) {
    var i,
      o = 1,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return oe.css(e, t, "");
          },
      u = s(),
      c = (n && n[3]) || (oe.cssNumber[t] ? "" : "px"),
      l = (oe.cssNumber[t] || ("px" !== c && +u)) && He.exec(oe.css(e, t));
    if (l && l[3] !== c) {
      (c = c || l[3]), (n = n || []), (l = +u || 1);
      do {
        (o = o || ".5"), (l /= o), oe.style(e, t, l + c);
      } while (o !== (o = s() / u) && 1 !== o && --a);
    }
    return (
      n &&
        ((l = +l || +u || 0),
        (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = c), (r.start = l), (r.end = i))),
      i
    );
  }
  function l(e, t) {
    var n =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || "*")
        : void 0 !== e.querySelectorAll
        ? e.querySelectorAll(t || "*")
        : [];
    return void 0 === t || (t && oe.nodeName(e, t)) ? oe.merge([e], n) : n;
  }
  function f(e, t) {
    for (var n = 0, r = e.length; r > n; n++)
      ke.set(e[n], "globalEval", !t || ke.get(t[n], "globalEval"));
  }
  function d(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        c,
        d,
        p = t.createDocumentFragment(),
        h = [],
        g = 0,
        v = e.length;
      v > g;
      g++
    )
      if ((o = e[g]) || 0 === o)
        if ("object" === oe.type(o)) oe.merge(h, o.nodeType ? [o] : o);
        else if (Oe.test(o)) {
          for (
            a = a || p.appendChild(t.createElement("div")),
              s = (Fe.exec(o) || ["", ""])[1].toLowerCase(),
              u = Re[s] || Re._default,
              a.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2],
              d = u[0];
            d--;

          )
            a = a.lastChild;
          oe.merge(h, a.childNodes), (a = p.firstChild), (a.textContent = "");
        } else h.push(t.createTextNode(o));
    for (p.textContent = "", g = 0; (o = h[g++]); )
      if (r && oe.inArray(o, r) > -1) i && i.push(o);
      else if (
        ((c = oe.contains(o.ownerDocument, o)),
        (a = l(p.appendChild(o), "script")),
        c && f(a),
        n)
      )
        for (d = 0; (o = a[d++]); ) qe.test(o.type || "") && n.push(o);
    return p;
  }
  function p() {
    return !0;
  }
  function h() {
    return !1;
  }
  function g() {
    try {
      return G.activeElement;
    } catch (e) {}
  }
  function v(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && ((r = r || n), (n = void 0));
      for (s in t) v(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = h;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        (i = function (e) {
          return oe().off(e), a.apply(this, arguments);
        }),
        (i.guid = a.guid || (a.guid = oe.guid++))),
      e.each(function () {
        oe.event.add(this, t, i, r, n);
      })
    );
  }
  function m(e, t) {
    return oe.nodeName(e, "table") &&
      oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function y(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function b(e) {
    var t = $e.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function x(e, t) {
    var n, r, i, o, a, s, u, c;
    if (1 === t.nodeType) {
      if (
        ke.hasData(e) &&
        ((o = ke.access(e)), (a = ke.set(t, o)), (c = o.events))
      ) {
        delete a.handle, (a.events = {});
        for (i in c)
          for (n = 0, r = c[i].length; r > n; n++) oe.event.add(t, i, c[i][n]);
      }
      Ce.hasData(e) &&
        ((s = Ce.access(e)), (u = oe.extend({}, s)), Ce.set(t, u));
    }
  }
  function w(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && De.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function T(e, t, n, r) {
    t = Q.apply([], t);
    var i,
      o,
      a,
      s,
      u,
      c,
      f = 0,
      p = e.length,
      h = p - 1,
      g = t[0],
      v = oe.isFunction(g);
    if (v || (p > 1 && "string" == typeof g && !re.checkClone && Ue.test(g)))
      return e.each(function (i) {
        var o = e.eq(i);
        v && (t[0] = g.call(this, i, o.html())), T(o, t, n, r);
      });
    if (
      p &&
      ((i = d(t, e[0].ownerDocument, !1, e, r)),
      (o = i.firstChild),
      1 === i.childNodes.length && (i = o),
      o || r)
    ) {
      for (a = oe.map(l(i, "script"), y), s = a.length; p > f; f++)
        (u = i),
          f !== h &&
            ((u = oe.clone(u, !0, !0)), s && oe.merge(a, l(u, "script"))),
          n.call(e[f], u, f);
      if (s)
        for (c = a[a.length - 1].ownerDocument, oe.map(a, b), f = 0; s > f; f++)
          (u = a[f]),
            qe.test(u.type || "") &&
              !ke.access(u, "globalEval") &&
              oe.contains(c, u) &&
              (u.src
                ? oe._evalUrl && oe._evalUrl(u.src)
                : oe.globalEval(u.textContent.replace(We, "")));
    }
    return e;
  }
  function E(e, t, n) {
    for (var r, i = t ? oe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || oe.cleanData(l(r)),
        r.parentNode &&
          (n && oe.contains(r.ownerDocument, r) && f(l(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  function k(e, t) {
    var n = oe(t.createElement(e)).appendTo(t.body),
      r = oe.css(n[0], "display");
    return n.detach(), r;
  }
  function C(e) {
    var t = G,
      n = Xe[e];
    return (
      n ||
        ((n = k(e, t)),
        ("none" !== n && n) ||
          ((ze = (
            ze || oe("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(t.documentElement)),
          (t = ze[0].contentDocument),
          t.write(),
          t.close(),
          (n = k(e, t)),
          ze.detach()),
        (Xe[e] = n)),
      n
    );
  }
  function S(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Ge(e)),
      (a = n ? n.getPropertyValue(t) || n[t] : void 0),
      ("" !== a && void 0 !== a) ||
        oe.contains(e.ownerDocument, e) ||
        (a = oe.style(e, t)),
      n &&
        !re.pixelMarginRight() &&
        Ve.test(a) &&
        Ye.test(t) &&
        ((r = s.width),
        (i = s.minWidth),
        (o = s.maxWidth),
        (s.minWidth = s.maxWidth = s.width = a),
        (a = n.width),
        (s.width = r),
        (s.minWidth = i),
        (s.maxWidth = o)),
      void 0 !== a ? a + "" : a
    );
  }
  function A(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  function N(e) {
    if (e in nt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--; )
      if ((e = tt[n] + t) in nt) return e;
  }
  function H(e, t, n) {
    var r = He.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function j(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
      4 > o;
      o += 2
    )
      "margin" === n && (a += oe.css(e, n + je[o], !0, i)),
        r
          ? ("content" === n && (a -= oe.css(e, "padding" + je[o], !0, i)),
            "margin" !== n &&
              (a -= oe.css(e, "border" + je[o] + "Width", !0, i)))
          : ((a += oe.css(e, "padding" + je[o], !0, i)),
            "padding" !== n &&
              (a += oe.css(e, "border" + je[o] + "Width", !0, i)));
    return a;
  }
  function L(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = Ge(e),
      a = "border-box" === oe.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (
        ((i = S(e, t, o)), (0 > i || null == i) && (i = e.style[t]), Ve.test(i))
      )
        return i;
      (r = a && (re.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function D(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
      (r = e[a]),
        r.style &&
          ((o[a] = ke.get(r, "olddisplay")),
          (n = r.style.display),
          t
            ? (o[a] || "none" !== n || (r.style.display = ""),
              "" === r.style.display &&
                Le(r) &&
                (o[a] = ke.access(r, "olddisplay", C(r.nodeName))))
            : ((i = Le(r)),
              ("none" === n && i) ||
                ke.set(r, "olddisplay", i ? n : oe.css(r, "display"))));
    for (a = 0; s > a; a++)
      (r = e[a]),
        r.style &&
          ((t && "none" !== r.style.display && "" !== r.style.display) ||
            (r.style.display = t ? o[a] || "" : "none"));
    return e;
  }
  function F(e, t, n, r, i) {
    return new F.prototype.init(e, t, n, r, i);
  }
  function q() {
    return (
      e.setTimeout(function () {
        rt = void 0;
      }),
      (rt = oe.now())
    );
  }
  function R(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; 4 > r; r += 2 - t)
      (n = je[r]), (i["margin" + n] = i["padding" + n] = e);
    return t && (i.opacity = i.width = e), i;
  }
  function O(e, t, n) {
    for (
      var r,
        i = (_.tweeners[t] || []).concat(_.tweeners["*"]),
        o = 0,
        a = i.length;
      a > o;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function B(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      c,
      l = this,
      f = {},
      d = e.style,
      p = e.nodeType && Le(e),
      h = ke.get(e, "fxshow");
    n.queue ||
      ((s = oe._queueHooks(e, "fx")),
      null == s.unqueued &&
        ((s.unqueued = 0),
        (u = s.empty.fire),
        (s.empty.fire = function () {
          s.unqueued || u();
        })),
      s.unqueued++,
      l.always(function () {
        l.always(function () {
          s.unqueued--, oe.queue(e, "fx").length || s.empty.fire();
        });
      })),
      1 === e.nodeType &&
        ("height" in t || "width" in t) &&
        ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
        (c = oe.css(e, "display")),
        "inline" ===
          ("none" === c ? ke.get(e, "olddisplay") || C(e.nodeName) : c) &&
          "none" === oe.css(e, "float") &&
          (d.display = "inline-block")),
      n.overflow &&
        ((d.overflow = "hidden"),
        l.always(function () {
          (d.overflow = n.overflow[0]),
            (d.overflowX = n.overflow[1]),
            (d.overflowY = n.overflow[2]);
        }));
    for (r in t)
      if (((i = t[r]), ot.exec(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (p ? "hide" : "show"))
        ) {
          if ("show" !== i || !h || void 0 === h[r]) continue;
          p = !0;
        }
        f[r] = (h && h[r]) || oe.style(e, r);
      } else c = void 0;
    if (oe.isEmptyObject(f))
      "inline" === ("none" === c ? C(e.nodeName) : c) && (d.display = c);
    else {
      h ? "hidden" in h && (p = h.hidden) : (h = ke.access(e, "fxshow", {})),
        o && (h.hidden = !p),
        p
          ? oe(e).show()
          : l.done(function () {
              oe(e).hide();
            }),
        l.done(function () {
          var t;
          ke.remove(e, "fxshow");
          for (t in f) oe.style(e, t, f[t]);
        });
      for (r in f)
        (a = O(p ? h[r] : 0, r, l)),
          r in h ||
            ((h[r] = a.start),
            p &&
              ((a.end = a.start),
              (a.start = "width" === r || "height" === r ? 1 : 0)));
    }
  }
  function P(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = oe.camelCase(n)),
        (i = t[r]),
        (o = e[n]),
        oe.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = oe.cssHooks[r]) && "expand" in a)
      ) {
        (o = a.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function _(e, t, n) {
    var r,
      i,
      o = 0,
      a = _.prefilters.length,
      s = oe.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = rt || q(),
            n = Math.max(0, c.startTime + c.duration - t),
            r = n / c.duration || 0,
            o = 1 - r,
            a = 0,
            u = c.tweens.length;
          u > a;
          a++
        )
          c.tweens[a].run(o);
        return (
          s.notifyWith(e, [c, o, n]),
          1 > o && u ? n : (s.resolveWith(e, [c]), !1)
        );
      },
      c = s.promise({
        elem: e,
        props: oe.extend({}, t),
        opts: oe.extend(
          !0,
          { specialEasing: {}, easing: oe.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: rt || q(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = oe.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? c.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) c.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
              : s.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      l = c.props;
    for (P(l, c.opts.specialEasing); a > o; o++)
      if ((r = _.prefilters[o].call(c, e, l, c.opts)))
        return (
          oe.isFunction(r.stop) &&
            (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(r.stop, r)),
          r
        );
    return (
      oe.map(l, O, c),
      oe.isFunction(c.opts.start) && c.opts.start.call(e, c),
      oe.fx.timer(oe.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always)
    );
  }
  function M(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function I(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(xe) || [];
      if (oe.isFunction(n))
        for (; (r = o[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function U(e, t, n, r) {
    function i(s) {
      var u;
      return (
        (o[s] = !0),
        oe.each(e[s] || [], function (e, s) {
          var c = s(t, n, r);
          return "string" != typeof c || a || o[c]
            ? a
              ? !(u = c)
              : void 0
            : (t.dataTypes.unshift(c), i(c), !1);
        }),
        u
      );
    }
    var o = {},
      a = e === Ct;
    return i(t.dataTypes[0]) || (!o["*"] && i("*"));
  }
  function $(e, t) {
    var n,
      r,
      i = oe.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && oe.extend(!0, e, r), e;
  }
  function W(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
      u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
  }
  function z(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      c = {},
      l = e.dataTypes.slice();
    if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
    for (o = l.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = l.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (!(a = c[u + " " + o] || c["* " + o]))
            for (i in c)
              if (
                ((s = i.split(" ")),
                s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]]))
              ) {
                !0 === a
                  ? (a = c[i])
                  : !0 !== c[i] && ((o = s[0]), l.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e.throws) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  function X(e, t, n, r) {
    var i;
    if (oe.isArray(t))
      oe.each(t, function (t, i) {
        n || Ht.test(e)
          ? r(e, i)
          : X(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== oe.type(t)) r(e, t);
    else for (i in t) X(e + "[" + i + "]", t[i], n, r);
  }
  function Y(e) {
    return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  var V = [],
    G = e.document,
    J = V.slice,
    Q = V.concat,
    K = V.push,
    Z = V.indexOf,
    ee = {},
    te = ee.toString,
    ne = ee.hasOwnProperty,
    re = {},
    ie = "2.2.4",
    oe = function (e, t) {
      return new oe.fn.init(e, t);
    },
    ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    se = /^-ms-/,
    ue = /-([\da-z])/gi,
    ce = function (e, t) {
      return t.toUpperCase();
    };
  (oe.fn = oe.prototype =
    {
      jquery: ie,
      constructor: oe,
      selector: "",
      length: 0,
      toArray: function () {
        return J.call(this);
      },
      get: function (e) {
        return null != e
          ? 0 > e
            ? this[e + this.length]
            : this[e]
          : J.call(this);
      },
      pushStack: function (e) {
        var t = oe.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e) {
        return oe.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          oe.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(J.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: K,
      sort: V.sort,
      splice: V.splice,
    }),
    (oe.extend = oe.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          c = !1;
        for (
          "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || oe.isFunction(a) || (a = {}),
            s === u && ((a = this), s--);
          u > s;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                (r = e[t]),
                a !== r &&
                  (c && r && (oe.isPlainObject(r) || (i = oe.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && oe.isArray(n) ? n : []))
                        : (o = n && oe.isPlainObject(n) ? n : {}),
                      (a[t] = oe.extend(c, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    oe.extend({
      expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === oe.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = e && e.toString();
        return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0;
      },
      isPlainObject: function (e) {
        var t;
        if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
        if (
          e.constructor &&
          !ne.call(e, "constructor") &&
          !ne.call(e.constructor.prototype || {}, "isPrototypeOf")
        )
          return !1;
        for (t in e);
        return void 0 === t || ne.call(e, t);
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? ee[te.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        var t,
          n = eval;
        (e = oe.trim(e)) &&
          (1 === e.indexOf("use strict")
            ? ((t = G.createElement("script")),
              (t.text = e),
              G.head.appendChild(t).parentNode.removeChild(t))
            : n(e));
      },
      camelCase: function (e) {
        return e.replace(se, "ms-").replace(ue, ce);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var r,
          i = 0;
        if (n(e))
          for (r = e.length; r > i && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(ae, "");
      },
      makeArray: function (e, t) {
        var r = t || [];
        return (
          null != e &&
            (n(Object(e))
              ? oe.merge(r, "string" == typeof e ? [e] : e)
              : K.call(r, e)),
          r
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : Z.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; o > i; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, r) {
        var i,
          o,
          a = 0,
          s = [];
        if (n(e))
          for (i = e.length; i > a; a++)
            null != (o = t(e[a], a, r)) && s.push(o);
        else for (a in e) null != (o = t(e[a], a, r)) && s.push(o);
        return Q.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        return (
          "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
          oe.isFunction(e)
            ? ((r = J.call(arguments, 2)),
              (i = function () {
                return e.apply(t || this, r.concat(J.call(arguments)));
              }),
              (i.guid = e.guid = e.guid || oe.guid++),
              i)
            : void 0
        );
      },
      now: Date.now,
      support: re,
    }),
    "function" == typeof Symbol &&
      (oe.fn[Symbol.iterator] = V[Symbol.iterator]),
    oe.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var le = (function (e) {
    function t(e, t, n, r) {
      var i,
        o,
        a,
        s,
        c,
        f,
        d,
        p,
        h = t && t.ownerDocument,
        g = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== g && 9 !== g && 11 !== g))
      )
        return n;
      if (
        !r &&
        ((t ? t.ownerDocument || t : P) !== j && H(t), (t = t || j), D)
      ) {
        if (11 !== g && (f = ge.exec(e)))
          if ((i = f[1])) {
            if (9 === g) {
              if (!(a = t.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (h && (a = h.getElementById(i)) && O(t, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (f[2]) return J.apply(n, t.getElementsByTagName(e)), n;
            if (
              (i = f[3]) &&
              b.getElementsByClassName &&
              t.getElementsByClassName
            )
              return J.apply(n, t.getElementsByClassName(i)), n;
          }
        if (b.qsa && !$[e + " "] && (!F || !F.test(e))) {
          if (1 !== g) (h = t), (p = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (s = t.getAttribute("id"))
                ? (s = s.replace(me, "\\$&"))
                : t.setAttribute("id", (s = B)),
                d = E(e),
                o = d.length,
                c = le.test(s) ? "#" + s : "[id='" + s + "']";
              o--;

            )
              d[o] = c + " " + l(d[o]);
            (p = d.join(",")), (h = (ve.test(e) && u(t.parentNode)) || t);
          }
          if (p)
            try {
              return J.apply(n, h.querySelectorAll(p)), n;
            } catch (e) {
            } finally {
              s === B && t.removeAttribute("id");
            }
        }
      }
      return C(e.replace(oe, "$1"), t, n, r);
    }
    function n() {
      function e(n, r) {
        return (
          t.push(n + " ") > x.cacheLength && delete e[t.shift()],
          (e[n + " "] = r)
        );
      }
      var t = [];
      return e;
    }
    function r(e) {
      return (e[B] = !0), e;
    }
    function i(e) {
      var t = j.createElement("div");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) x.attrHandle[n[r]] = t;
    }
    function a(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || z) - (~e.sourceIndex || z);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function s(e) {
      return r(function (t) {
        return (
          (t = +t),
          r(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; )
              n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function u(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function c() {}
    function l(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r;
    }
    function f(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = M++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
          }
        : function (t, n, a) {
            var s,
              u,
              c,
              l = [_, o];
            if (a) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || i) {
                  if (
                    ((c = t[B] || (t[B] = {})),
                    (u = c[t.uniqueID] || (c[t.uniqueID] = {})),
                    (s = u[r]) && s[0] === _ && s[1] === o)
                  )
                    return (l[2] = s[2]);
                  if (((u[r] = l), (l[2] = e(t, n, a)))) return !0;
                }
          };
    }
    function d(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function p(e, n, r) {
      for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
      return r;
    }
    function h(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, c = null != t; u > s; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), c && t.push(s)));
      return a;
    }
    function g(e, t, n, i, o, a) {
      return (
        i && !i[B] && (i = g(i)),
        o && !o[B] && (o = g(o, a)),
        r(function (r, a, s, u) {
          var c,
            l,
            f,
            d = [],
            g = [],
            v = a.length,
            m = r || p(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!r && t) ? m : h(m, d, e, s, u),
            b = n ? (o || (r ? e : v || i) ? [] : a) : y;
          if ((n && n(y, b, s, u), i))
            for (c = h(b, g), i(c, [], s, u), l = c.length; l--; )
              (f = c[l]) && (b[g[l]] = !(y[g[l]] = f));
          if (r) {
            if (o || e) {
              if (o) {
                for (c = [], l = b.length; l--; )
                  (f = b[l]) && c.push((y[l] = f));
                o(null, (b = []), c, u);
              }
              for (l = b.length; l--; )
                (f = b[l]) &&
                  (c = o ? K(r, f) : d[l]) > -1 &&
                  (r[c] = !(a[c] = f));
            }
          } else (b = h(b === a ? b.splice(v, b.length) : b)), o ? o(null, a, b, u) : J.apply(a, b);
        })
      );
    }
    function v(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = x.relative[e[0].type],
          a = o || x.relative[" "],
          s = o ? 1 : 0,
          u = f(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          c = f(
            function (e) {
              return K(t, e) > -1;
            },
            a,
            !0
          ),
          p = [
            function (e, n, r) {
              var i =
                (!o && (r || n !== S)) ||
                ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
              return (t = null), i;
            },
          ];
        i > s;
        s++
      )
        if ((n = x.relative[e[s].type])) p = [f(d(p), n)];
        else {
          if (((n = x.filter[e[s].type].apply(null, e[s].matches)), n[B])) {
            for (r = ++s; i > r && !x.relative[e[r].type]; r++);
            return g(
              s > 1 && d(p),
              s > 1 &&
                l(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(oe, "$1"),
              n,
              r > s && v(e.slice(s, r)),
              i > r && v((e = e.slice(r))),
              i > r && l(e)
            );
          }
          p.push(n);
        }
      return d(p);
    }
    function m(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        a = function (r, a, s, u, c) {
          var l,
            f,
            d,
            p = 0,
            g = "0",
            v = r && [],
            m = [],
            y = S,
            b = r || (o && x.find.TAG("*", c)),
            w = (_ += null == y ? 1 : Math.random() || 0.1),
            T = b.length;
          for (
            c && (S = a === j || a || c);
            g !== T && null != (l = b[g]);
            g++
          ) {
            if (o && l) {
              for (
                f = 0, a || l.ownerDocument === j || (H(l), (s = !D));
                (d = e[f++]);

              )
                if (d(l, a || j, s)) {
                  u.push(l);
                  break;
                }
              c && (_ = w);
            }
            i && ((l = !d && l) && p--, r && v.push(l));
          }
          if (((p += g), i && g !== p)) {
            for (f = 0; (d = n[f++]); ) d(v, m, a, s);
            if (r) {
              if (p > 0) for (; g--; ) v[g] || m[g] || (m[g] = V.call(u));
              m = h(m);
            }
            J.apply(u, m),
              c && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(u);
          }
          return c && ((_ = w), (S = y)), v;
        };
      return i ? r(a) : a;
    }
    var y,
      b,
      x,
      w,
      T,
      E,
      k,
      C,
      S,
      A,
      N,
      H,
      j,
      L,
      D,
      F,
      q,
      R,
      O,
      B = "sizzle" + 1 * new Date(),
      P = e.document,
      _ = 0,
      M = 0,
      I = n(),
      U = n(),
      $ = n(),
      W = function (e, t) {
        return e === t && (N = !0), 0;
      },
      z = 1 << 31,
      X = {}.hasOwnProperty,
      Y = [],
      V = Y.pop,
      G = Y.push,
      J = Y.push,
      Q = Y.slice,
      K = function (e, t) {
        for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
        return -1;
      },
      Z =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ee = "[\\x20\\t\\r\\n\\f]",
      te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ne =
        "\\[" +
        ee +
        "*(" +
        te +
        ")(?:" +
        ee +
        "*([*^$|!~]?=)" +
        ee +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        te +
        "))|)" +
        ee +
        "*\\]",
      re =
        ":(" +
        te +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ne +
        ")*)|.*)\\)|)",
      ie = new RegExp(ee + "+", "g"),
      oe = new RegExp(
        "^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$",
        "g"
      ),
      ae = new RegExp("^" + ee + "*," + ee + "*"),
      se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
      ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
      ce = new RegExp(re),
      le = new RegExp("^" + te + "$"),
      fe = {
        ID: new RegExp("^#(" + te + ")"),
        CLASS: new RegExp("^\\.(" + te + ")"),
        TAG: new RegExp("^(" + te + "|[*])"),
        ATTR: new RegExp("^" + ne),
        PSEUDO: new RegExp("^" + re),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ee +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ee +
            "*(?:([+-]|)" +
            ee +
            "*(\\d+)|))" +
            ee +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + Z + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ee +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ee +
            "*((?:-\\d)?\\d*)" +
            ee +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      de = /^(?:input|select|textarea|button)$/i,
      pe = /^h\d$/i,
      he = /^[^{]+\{\s*\[native \w/,
      ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ve = /[+~]/,
      me = /'|\\/g,
      ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
      be = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n
          ? t
          : 0 > r
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      xe = function () {
        H();
      };
    try {
      J.apply((Y = Q.call(P.childNodes)), P.childNodes),
        Y[P.childNodes.length].nodeType;
    } catch (e) {
      J = {
        apply: Y.length
          ? function (e, t) {
              G.apply(e, Q.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    (b = t.support = {}),
      (T = t.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (H = t.setDocument =
        function (e) {
          var t,
            n,
            r = e ? e.ownerDocument || e : P;
          return r !== j && 9 === r.nodeType && r.documentElement
            ? ((j = r),
              (L = j.documentElement),
              (D = !T(j)),
              (n = j.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", xe, !1)
                  : n.attachEvent && n.attachEvent("onunload", xe)),
              (b.attributes = i(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (b.getElementsByTagName = i(function (e) {
                return (
                  e.appendChild(j.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (b.getElementsByClassName = he.test(j.getElementsByClassName)),
              (b.getById = i(function (e) {
                return (
                  (L.appendChild(e).id = B),
                  !j.getElementsByName || !j.getElementsByName(B).length
                );
              })),
              b.getById
                ? ((x.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && D) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }),
                  (x.filter.ID = function (e) {
                    var t = e.replace(ye, be);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete x.find.ID,
                  (x.filter.ID = function (e) {
                    var t = e.replace(ye, be);
                    return function (e) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })),
              (x.find.TAG = b.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : b.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (x.find.CLASS =
                b.getElementsByClassName &&
                function (e, t) {
                  return void 0 !== t.getElementsByClassName && D
                    ? t.getElementsByClassName(e)
                    : void 0;
                }),
              (q = []),
              (F = []),
              (b.qsa = he.test(j.querySelectorAll)) &&
                (i(function (e) {
                  (L.appendChild(e).innerHTML =
                    "<a id='" +
                    B +
                    "'></a><select id='" +
                    B +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      F.push("[*^$]=" + ee + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      F.push("\\[" + ee + "*(?:value|" + Z + ")"),
                    e.querySelectorAll("[id~=" + B + "-]").length ||
                      F.push("~="),
                    e.querySelectorAll(":checked").length || F.push(":checked"),
                    e.querySelectorAll("a#" + B + "+*").length ||
                      F.push(".#.+[+~]");
                }),
                i(function (e) {
                  var t = j.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      F.push("name" + ee + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length ||
                      F.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    F.push(",.*:");
                })),
              (b.matchesSelector = he.test(
                (R =
                  L.matches ||
                  L.webkitMatchesSelector ||
                  L.mozMatchesSelector ||
                  L.oMatchesSelector ||
                  L.msMatchesSelector)
              )) &&
                i(function (e) {
                  (b.disconnectedMatch = R.call(e, "div")),
                    R.call(e, "[s!='']:x"),
                    q.push("!=", re);
                }),
              (F = F.length && new RegExp(F.join("|"))),
              (q = q.length && new RegExp(q.join("|"))),
              (t = he.test(L.compareDocumentPosition)),
              (O =
                t || he.test(L.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (W = t
                ? function (e, t) {
                    if (e === t) return (N = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      ((n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1),
                      1 & n ||
                      (!b.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === j || (e.ownerDocument === P && O(P, e))
                          ? -1
                          : t === j || (t.ownerDocument === P && O(P, t))
                          ? 1
                          : A
                          ? K(A, e) - K(A, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (N = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      s = [e],
                      u = [t];
                    if (!i || !o)
                      return e === j
                        ? -1
                        : t === j
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : A
                        ? K(A, e) - K(A, t)
                        : 0;
                    if (i === o) return a(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) u.unshift(n);
                    for (; s[r] === u[r]; ) r++;
                    return r
                      ? a(s[r], u[r])
                      : s[r] === P
                      ? -1
                      : u[r] === P
                      ? 1
                      : 0;
                  }),
              j)
            : j;
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          ((e.ownerDocument || e) !== j && H(e),
          (n = n.replace(ue, "='$1']")),
          b.matchesSelector &&
            D &&
            !$[n + " "] &&
            (!q || !q.test(n)) &&
            (!F || !F.test(n)))
        )
          try {
            var r = R.call(e, n);
            if (
              r ||
              b.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) {}
        return t(n, j, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== j && H(e), O(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== j && H(e);
        var n = x.attrHandle[t.toLowerCase()],
          r = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
        return void 0 !== r
          ? r
          : b.attributes || !D
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((N = !b.detectDuplicates),
          (A = !b.sortStable && e.slice(0)),
          e.sort(W),
          N)
        ) {
          for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
          for (; r--; ) e.splice(n[r], 1);
        }
        return (A = null), e;
      }),
      (w = t.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += w(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += w(t);
          return n;
        }),
      (x = t.selectors =
        {
          cacheLength: 50,
          createPseudo: r,
          match: fe,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(ye, be)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return fe.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      ce.test(n) &&
                      (t = E(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(ye, be).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = I[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) &&
                  I(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, n, r) {
              return function (i) {
                var o = t.attr(i, e);
                return null == o
                  ? "!=" === n
                  : !n ||
                      ((o += ""),
                      "=" === n
                        ? o === r
                        : "!=" === n
                        ? o !== r
                        : "^=" === n
                        ? r && 0 === o.indexOf(r)
                        : "*=" === n
                        ? r && o.indexOf(r) > -1
                        : "$=" === n
                        ? r && o.slice(-r.length) === r
                        : "~=" === n
                        ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1
                        : "|=" === n &&
                          (o === r || o.slice(0, r.length + 1) === r + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var c,
                      l,
                      f,
                      d,
                      p,
                      h,
                      g = o !== a ? "nextSibling" : "previousSibling",
                      v = t.parentNode,
                      m = s && t.nodeName.toLowerCase(),
                      y = !u && !s,
                      b = !1;
                    if (v) {
                      if (o) {
                        for (; g; ) {
                          for (d = t; (d = d[g]); )
                            if (
                              s
                                ? d.nodeName.toLowerCase() === m
                                : 1 === d.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [a ? v.firstChild : v.lastChild]), a && y)) {
                        for (
                          d = v,
                            f = d[B] || (d[B] = {}),
                            l = f[d.uniqueID] || (f[d.uniqueID] = {}),
                            c = l[e] || [],
                            p = c[0] === _ && c[1],
                            b = p && c[2],
                            d = p && v.childNodes[p];
                          (d = (++p && d && d[g]) || (b = p = 0) || h.pop());

                        )
                          if (1 === d.nodeType && ++b && d === t) {
                            l[e] = [_, p, b];
                            break;
                          }
                      } else if (
                        (y &&
                          ((d = t),
                          (f = d[B] || (d[B] = {})),
                          (l = f[d.uniqueID] || (f[d.uniqueID] = {})),
                          (c = l[e] || []),
                          (p = c[0] === _ && c[1]),
                          (b = p)),
                        !1 === b)
                      )
                        for (
                          ;
                          (d = (++p && d && d[g]) || (b = p = 0) || h.pop()) &&
                          ((s
                            ? d.nodeName.toLowerCase() !== m
                            : 1 !== d.nodeType) ||
                            !++b ||
                            (y &&
                              ((f = d[B] || (d[B] = {})),
                              (l = f[d.uniqueID] || (f[d.uniqueID] = {})),
                              (l[e] = [_, b])),
                            d !== t));

                        );
                      return (b -= i) === r || (b % r == 0 && b / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var i,
                o =
                  x.pseudos[e] ||
                  x.setFilters[e.toLowerCase()] ||
                  t.error("unsupported pseudo: " + e);
              return o[B]
                ? o(n)
                : o.length > 1
                ? ((i = [e, e, "", n]),
                  x.setFilters.hasOwnProperty(e.toLowerCase())
                    ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                          (r = K(e, i[a])), (e[r] = !(t[r] = i[a]));
                      })
                    : function (e) {
                        return o(e, 0, i);
                      })
                : o;
            },
          },
          pseudos: {
            not: r(function (e) {
              var t = [],
                n = [],
                i = k(e.replace(oe, "$1"));
              return i[B]
                ? r(function (e, t, n, r) {
                    for (var o, a = i(e, null, r, []), s = e.length; s--; )
                      (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, r, o) {
                    return (
                      (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: r(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: r(function (e) {
              return (
                (e = e.replace(ye, be)),
                function (t) {
                  return (t.textContent || t.innerText || w(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: r(function (e) {
              return (
                le.test(e || "") || t.error("unsupported lang: " + e),
                (e = e.replace(ye, be).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = D
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === L;
            },
            focus: function (e) {
              return (
                e === j.activeElement &&
                (!j.hasFocus || j.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return !1 === e.disabled;
            },
            disabled: function (e) {
              return !0 === e.disabled;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !x.pseudos.empty(e);
            },
            header: function (e) {
              return pe.test(e.nodeName);
            },
            input: function (e) {
              return de.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: s(function () {
              return [0];
            }),
            last: s(function (e, t) {
              return [t - 1];
            }),
            eq: s(function (e, t, n) {
              return [0 > n ? n + t : n];
            }),
            even: s(function (e, t) {
              for (var n = 0; t > n; n += 2) e.push(n);
              return e;
            }),
            odd: s(function (e, t) {
              for (var n = 1; t > n; n += 2) e.push(n);
              return e;
            }),
            lt: s(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: s(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }),
      (x.pseudos.nth = x.pseudos.eq);
    for (y in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      x.pseudos[y] = (function (e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      })(y);
    for (y in { submit: !0, reset: !0 })
      x.pseudos[y] = (function (e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      })(y);
    return (
      (c.prototype = x.filters = x.pseudos),
      (x.setFilters = new c()),
      (E = t.tokenize =
        function (e, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            c,
            l = U[e + " "];
          if (l) return n ? 0 : l.slice(0);
          for (s = e, u = [], c = x.preFilter; s; ) {
            (r && !(i = ae.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (r = !1),
              (i = se.exec(s)) &&
                ((r = i.shift()),
                o.push({ value: r, type: i[0].replace(oe, " ") }),
                (s = s.slice(r.length)));
            for (a in x.filter)
              !(i = fe[a].exec(s)) ||
                (c[a] && !(i = c[a](i))) ||
                ((r = i.shift()),
                o.push({ value: r, type: a, matches: i }),
                (s = s.slice(r.length)));
            if (!r) break;
          }
          return n ? s.length : s ? t.error(e) : U(e, u).slice(0);
        }),
      (k = t.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = $[e + " "];
          if (!o) {
            for (t || (t = E(e)), n = t.length; n--; )
              (o = v(t[n])), o[B] ? r.push(o) : i.push(o);
            (o = $(e, m(i, r))), (o.selector = e);
          }
          return o;
        }),
      (C = t.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            c,
            f = "function" == typeof e && e,
            d = !r && E((e = f.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              ((o = d[0] = d[0].slice(0)),
              o.length > 2 &&
                "ID" === (a = o[0]).type &&
                b.getById &&
                9 === t.nodeType &&
                D &&
                x.relative[o[1].type])
            ) {
              if (!(t = (x.find.ID(a.matches[0].replace(ye, be), t) || [])[0]))
                return n;
              f && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = fe.needsContext.test(e) ? 0 : o.length;
              i-- && ((a = o[i]), !x.relative[(s = a.type)]);

            )
              if (
                (c = x.find[s]) &&
                (r = c(
                  a.matches[0].replace(ye, be),
                  (ve.test(o[0].type) && u(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && l(o))))
                  return J.apply(n, r), n;
                break;
              }
          }
          return (
            (f || k(e, d))(
              r,
              t,
              !D,
              n,
              !t || (ve.test(e) && u(t.parentNode)) || t
            ),
            n
          );
        }),
      (b.sortStable = B.split("").sort(W).join("") === B),
      (b.detectDuplicates = !!N),
      H(),
      (b.sortDetached = i(function (e) {
        return 1 & e.compareDocumentPosition(j.createElement("div"));
      })),
      i(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        o("type|href|height|width", function (e, t, n) {
          return n
            ? void 0
            : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (b.attributes &&
        i(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        o("value", function (e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue;
        }),
      i(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        o(Z, function (e, t, n) {
          var r;
          return n
            ? void 0
            : !0 === e[t]
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
        }),
      t
    );
  })(e);
  (oe.find = le),
    (oe.expr = le.selectors),
    (oe.expr[":"] = oe.expr.pseudos),
    (oe.uniqueSort = oe.unique = le.uniqueSort),
    (oe.text = le.getText),
    (oe.isXMLDoc = le.isXML),
    (oe.contains = le.contains);
  var fe = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && oe(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    de = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    pe = oe.expr.match.needsContext,
    he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    ge = /^.[^:#\[\.,]*$/;
  (oe.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? oe.find.matchesSelector(r, e)
          ? [r]
          : []
        : oe.find.matches(
            e,
            oe.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    oe.fn.extend({
      find: function (e) {
        var t,
          n = this.length,
          r = [],
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            oe(e).filter(function () {
              for (t = 0; n > t; t++) if (oe.contains(i[t], this)) return !0;
            })
          );
        for (t = 0; n > t; t++) oe.find(e, i[t], r);
        return (
          (r = this.pushStack(n > 1 ? oe.unique(r) : r)),
          (r.selector = this.selector ? this.selector + " " + e : e),
          r
        );
      },
      filter: function (e) {
        return this.pushStack(r(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(r(this, e || [], !0));
      },
      is: function (e) {
        return !!r(
          this,
          "string" == typeof e && pe.test(e) ? oe(e) : e || [],
          !1
        ).length;
      },
    });
  var ve,
    me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((oe.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || ve), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : me.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof oe ? t[0] : t),
          oe.merge(
            this,
            oe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : G, !0)
          ),
          he.test(r[1]) && oe.isPlainObject(t))
        )
          for (r in t)
            oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = G.getElementById(r[2])),
        i && i.parentNode && ((this.length = 1), (this[0] = i)),
        (this.context = G),
        (this.selector = e),
        this
      );
    }
    return e.nodeType
      ? ((this.context = this[0] = e), (this.length = 1), this)
      : oe.isFunction(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(oe)
      : (void 0 !== e.selector &&
          ((this.selector = e.selector), (this.context = e.context)),
        oe.makeArray(e, this));
  }).prototype = oe.fn),
    (ve = oe(G));
  var ye = /^(?:parents|prev(?:Until|All))/,
    be = { children: !0, contents: !0, next: !0, prev: !0 };
  oe.fn.extend({
    has: function (e) {
      var t = oe(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; n > e; e++) if (oe.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      for (
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = pe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0;
        i > r;
        r++
      )
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (a
              ? a.index(n) > -1
              : 1 === n.nodeType && oe.find.matchesSelector(n, e))
          ) {
            o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? Z.call(oe(e), this[0])
          : Z.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    oe.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return fe(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return fe(e, "parentNode", n);
        },
        next: function (e) {
          return i(e, "nextSibling");
        },
        prev: function (e) {
          return i(e, "previousSibling");
        },
        nextAll: function (e) {
          return fe(e, "nextSibling");
        },
        prevAll: function (e) {
          return fe(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return fe(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return fe(e, "previousSibling", n);
        },
        siblings: function (e) {
          return de((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return de(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || oe.merge([], e.childNodes);
        },
      },
      function (e, t) {
        oe.fn[e] = function (n, r) {
          var i = oe.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = oe.filter(r, i)),
            this.length > 1 &&
              (be[e] || oe.uniqueSort(i), ye.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var xe = /\S+/g;
  (oe.Callbacks = function (e) {
    e = "string" == typeof e ? o(e) : oe.extend({}, e);
    var t,
      n,
      r,
      i,
      a = [],
      s = [],
      u = -1,
      c = function () {
        for (i = e.once, r = t = !0; s.length; u = -1)
          for (n = s.shift(); ++u < a.length; )
            !1 === a[u].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((u = a.length), (n = !1));
        e.memory || (n = !1), (t = !1), i && (a = n ? [] : "");
      },
      l = {
        add: function () {
          return (
            a &&
              (n && !t && ((u = a.length - 1), s.push(n)),
              (function t(n) {
                oe.each(n, function (n, r) {
                  oe.isFunction(r)
                    ? (e.unique && l.has(r)) || a.push(r)
                    : r && r.length && "string" !== oe.type(r) && t(r);
                });
              })(arguments),
              n && !t && c()),
            this
          );
        },
        remove: function () {
          return (
            oe.each(arguments, function (e, t) {
              for (var n; (n = oe.inArray(t, a, n)) > -1; )
                a.splice(n, 1), u >= n && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? oe.inArray(e, a) > -1 : a.length > 0;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (i = s = []), (a = n = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (i = s = []), n || (a = n = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = n || []),
              (n = [e, n.slice ? n.slice() : n]),
              s.push(n),
              t || c()),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return l;
  }),
    oe.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
            ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
            ["notify", "progress", oe.Callbacks("memory")],
          ],
          n = "pending",
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return oe
                .Deferred(function (n) {
                  oe.each(t, function (t, o) {
                    var a = oe.isFunction(e[t]) && e[t];
                    i[o[1]](function () {
                      var e = a && a.apply(this, arguments);
                      e && oe.isFunction(e.promise)
                        ? e
                            .promise()
                            .progress(n.notify)
                            .done(n.resolve)
                            .fail(n.reject)
                        : n[o[0] + "With"](
                            this === r ? n.promise() : this,
                            a ? [e] : arguments
                          );
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? oe.extend(e, r) : r;
            },
          },
          i = {};
        return (
          (r.pipe = r.then),
          oe.each(t, function (e, o) {
            var a = o[2],
              s = o[3];
            (r[o[1]] = a.add),
              s &&
                a.add(
                  function () {
                    n = s;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[o[0]] = function () {
                return i[o[0] + "With"](this === i ? r : this, arguments), this;
              }),
              (i[o[0] + "With"] = a.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
      when: function (e) {
        var t,
          n,
          r,
          i = 0,
          o = J.call(arguments),
          a = o.length,
          s = 1 !== a || (e && oe.isFunction(e.promise)) ? a : 0,
          u = 1 === s ? e : oe.Deferred(),
          c = function (e, n, r) {
            return function (i) {
              (n[e] = this),
                (r[e] = arguments.length > 1 ? J.call(arguments) : i),
                r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
            };
          };
        if (a > 1)
          for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)
            o[i] && oe.isFunction(o[i].promise)
              ? o[i]
                  .promise()
                  .progress(c(i, n, t))
                  .done(c(i, r, o))
                  .fail(u.reject)
              : --s;
        return s || u.resolveWith(r, o), u.promise();
      },
    });
  var we;
  (oe.fn.ready = function (e) {
    return oe.ready.promise().done(e), this;
  }),
    oe.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? oe.readyWait++ : oe.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --oe.readyWait : oe.isReady) ||
          ((oe.isReady = !0),
          (!0 !== e && --oe.readyWait > 0) ||
            (we.resolveWith(G, [oe]),
            oe.fn.triggerHandler &&
              (oe(G).triggerHandler("ready"), oe(G).off("ready"))));
      },
    }),
    (oe.ready.promise = function (t) {
      return (
        we ||
          ((we = oe.Deferred()),
          "complete" === G.readyState ||
          ("loading" !== G.readyState && !G.documentElement.doScroll)
            ? e.setTimeout(oe.ready)
            : (G.addEventListener("DOMContentLoaded", a),
              e.addEventListener("load", a))),
        we.promise(t)
      );
    }),
    oe.ready.promise();
  var Te = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        c = null == n;
      if ("object" === oe.type(n)) {
        i = !0;
        for (s in n) Te(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        ((i = !0),
        oe.isFunction(r) || (a = !0),
        c &&
          (a
            ? (t.call(e, r), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(oe(e), n);
              }))),
        t)
      )
        for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
    },
    Ee = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (s.uid = 1),
    (s.prototype = {
      register: function (e, t) {
        var n = t || {};
        return (
          e.nodeType
            ? (e[this.expando] = n)
            : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0,
              }),
          e[this.expando]
        );
      },
      cache: function (e) {
        if (!Ee(e)) return {};
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Ee(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[t] = n;
        else for (r in t) i[r] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][t];
      },
      access: function (e, t, n) {
        var r;
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? ((r = this.get(e, t)),
            void 0 !== r ? r : this.get(e, oe.camelCase(t)))
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r,
          i,
          o = e[this.expando];
        if (void 0 !== o) {
          if (void 0 === t) this.register(e);
          else {
            oe.isArray(t)
              ? (r = t.concat(t.map(oe.camelCase)))
              : ((i = oe.camelCase(t)),
                t in o
                  ? (r = [t, i])
                  : ((r = i), (r = r in o ? [r] : r.match(xe) || []))),
              (n = r.length);
            for (; n--; ) delete o[r[n]];
          }
          (void 0 === t || oe.isEmptyObject(o)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !oe.isEmptyObject(t);
      },
    });
  var ke = new s(),
    Ce = new s(),
    Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ae = /[A-Z]/g;
  oe.extend({
    hasData: function (e) {
      return Ce.hasData(e) || ke.hasData(e);
    },
    data: function (e, t, n) {
      return Ce.access(e, t, n);
    },
    removeData: function (e, t) {
      Ce.remove(e, t);
    },
    _data: function (e, t, n) {
      return ke.access(e, t, n);
    },
    _removeData: function (e, t) {
      ke.remove(e, t);
    },
  }),
    oe.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = Ce.get(o)), 1 === o.nodeType && !ke.get(o, "hasDataAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                ((r = a[n].name),
                0 === r.indexOf("data-") &&
                  ((r = oe.camelCase(r.slice(5))), u(o, r, i[r])));
            ke.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              Ce.set(this, e);
            })
          : Te(
              this,
              function (t) {
                var n, r;
                if (o && void 0 === t) {
                  if (
                    void 0 !==
                    (n =
                      Ce.get(o, e) ||
                      Ce.get(o, e.replace(Ae, "-$&").toLowerCase()))
                  )
                    return n;
                  if (((r = oe.camelCase(e)), void 0 !== (n = Ce.get(o, r))))
                    return n;
                  if (void 0 !== (n = u(o, r, void 0))) return n;
                } else
                  (r = oe.camelCase(e)),
                    this.each(function () {
                      var n = Ce.get(this, r);
                      Ce.set(this, r, t),
                        e.indexOf("-") > -1 &&
                          void 0 !== n &&
                          Ce.set(this, e, t);
                    });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Ce.remove(this, e);
        });
      },
    }),
    oe.extend({
      queue: function (e, t, n) {
        var r;
        return e
          ? ((t = (t || "fx") + "queue"),
            (r = ke.get(e, t)),
            n &&
              (!r || oe.isArray(n)
                ? (r = ke.access(e, t, oe.makeArray(n)))
                : r.push(n)),
            r || [])
          : void 0;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = oe.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = oe._queueHooks(e, t),
          a = function () {
            oe.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          ke.get(e, n) ||
          ke.access(e, n, {
            empty: oe.Callbacks("once memory").add(function () {
              ke.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    oe.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? oe.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          oe.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = oe.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = ke.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    He = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
    je = ["Top", "Right", "Bottom", "Left"],
    Le = function (e, t) {
      return (
        (e = t || e),
        "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
      );
    },
    De = /^(?:checkbox|radio)$/i,
    Fe = /<([\w:-]+)/,
    qe = /^$|\/(?:java|ecma)script/i,
    Re = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (Re.optgroup = Re.option),
    (Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead),
    (Re.th = Re.td);
  var Oe = /<|&#?\w+;/;
  !(function () {
    var e = G.createDocumentFragment(),
      t = e.appendChild(G.createElement("div")),
      n = G.createElement("input");
    n.setAttribute("type", "radio"),
      n.setAttribute("checked", "checked"),
      n.setAttribute("name", "t"),
      t.appendChild(n),
      (re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
  })();
  var Be = /^key/,
    Pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    _e = /^([^.]*)(?:\.(.+)|)/;
  (oe.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        c,
        l,
        f,
        d,
        p,
        h,
        g,
        v = ke.get(e);
      if (v)
        for (
          n.handler && ((o = n), (n = o.handler), (i = o.selector)),
            n.guid || (n.guid = oe.guid++),
            (u = v.events) || (u = v.events = {}),
            (a = v.handle) ||
              (a = v.handle =
                function (t) {
                  return void 0 !== oe && oe.event.triggered !== t.type
                    ? oe.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            t = (t || "").match(xe) || [""],
            c = t.length;
          c--;

        )
          (s = _e.exec(t[c]) || []),
            (p = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            p &&
              ((f = oe.event.special[p] || {}),
              (p = (i ? f.delegateType : f.bindType) || p),
              (f = oe.event.special[p] || {}),
              (l = oe.extend(
                {
                  type: p,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && oe.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (d = u[p]) ||
                ((d = u[p] = []),
                (d.delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                  (e.addEventListener && e.addEventListener(p, a))),
              f.add &&
                (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)),
              i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
              (oe.event.global[p] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        c,
        l,
        f,
        d,
        p,
        h,
        g,
        v = ke.hasData(e) && ke.get(e);
      if (v && (u = v.events)) {
        for (t = (t || "").match(xe) || [""], c = t.length; c--; )
          if (
            ((s = _e.exec(t[c]) || []),
            (p = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            p)
          ) {
            for (
              f = oe.event.special[p] || {},
                p = (r ? f.delegateType : f.bindType) || p,
                d = u[p] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = d.length;
              o--;

            )
              (l = d[o]),
                (!i && g !== l.origType) ||
                  (n && n.guid !== l.guid) ||
                  (s && !s.test(l.namespace)) ||
                  (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                  (d.splice(o, 1),
                  l.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, l));
            a &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                oe.removeEvent(e, p, v.handle),
              delete u[p]);
          } else for (p in u) oe.event.remove(e, p + t[c], n, r, !0);
        oe.isEmptyObject(u) && ke.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      e = oe.event.fix(e);
      var t,
        n,
        r,
        i,
        o,
        a = [],
        s = J.call(arguments),
        u = (ke.get(this, "events") || {})[e.type] || [],
        c = oe.event.special[e.type] || {};
      if (
        ((s[0] = e),
        (e.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, e))
      ) {
        for (
          a = oe.event.handlers.call(this, e, u), t = 0;
          (i = a[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.rnamespace && !e.rnamespace.test(o.namespace)) ||
              ((e.handleObj = o),
              (e.data = o.data),
              void 0 !==
                (r = (
                  (oe.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (e.result = r) &&
                (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a = [],
        s = t.delegateCount,
        u = e.target;
      if (
        s &&
        u.nodeType &&
        ("click" !== e.type || isNaN(e.button) || e.button < 1)
      )
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
            for (r = [], n = 0; s > n; n++)
              (o = t[n]),
                (i = o.selector + " "),
                void 0 === r[i] &&
                  (r[i] = o.needsContext
                    ? oe(i, this).index(u) > -1
                    : oe.find(i, this, null, [u]).length),
                r[i] && r.push(o);
            r.length && a.push({ elem: u, handlers: r });
          }
      return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          r,
          i,
          o = t.button;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((n = e.target.ownerDocument || G),
            (r = n.documentElement),
            (i = n.body),
            (e.pageX =
              t.clientX +
              ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
              ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
              ((r && r.clientTop) || (i && i.clientTop) || 0))),
          e.which ||
            void 0 === o ||
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      },
    },
    fix: function (e) {
      if (e[oe.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        a = this.fixHooks[i];
      for (
        a ||
          (this.fixHooks[i] = a =
            Pe.test(i) ? this.mouseHooks : Be.test(i) ? this.keyHooks : {}),
          r = a.props ? this.props.concat(a.props) : this.props,
          e = new oe.Event(o),
          t = r.length;
        t--;

      )
        (n = r[t]), (e[n] = o[n]);
      return (
        e.target || (e.target = G),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        a.filter ? a.filter(e, o) : e
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== g() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === g() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            oe.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return oe.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (oe.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (oe.Event = function (e, t) {
      return this instanceof oe.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? p
                  : h))
            : (this.type = e),
          t && oe.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || oe.now()),
          void (this[oe.expando] = !0))
        : new oe.Event(e, t);
    }),
    (oe.Event.prototype = {
      constructor: oe.Event,
      isDefaultPrevented: h,
      isPropagationStopped: h,
      isImmediatePropagationStopped: h,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = p),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = p),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = p),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    oe.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        oe.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || oe.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    oe.fn.extend({
      on: function (e, t, n, r) {
        return v(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return v(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            oe(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = h),
          this.each(function () {
            oe.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Me =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Ie = /<script|<style|<link/i,
    Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
    $e = /^true\/(.*)/,
    We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  oe.extend({
    htmlPrefilter: function (e) {
      return e.replace(Me, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = oe.contains(e.ownerDocument, e);
      if (
        !(
          re.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          oe.isXMLDoc(e)
        )
      )
        for (a = l(s), o = l(e), r = 0, i = o.length; i > r; r++) w(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || l(e), a = a || l(s), r = 0, i = o.length; i > r; r++)
            x(o[r], a[r]);
        else x(e, s);
      return (
        (a = l(s, "script")), a.length > 0 && f(a, !u && l(e, "script")), s
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Ee(n)) {
          if ((t = n[ke.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, t.handle);
            n[ke.expando] = void 0;
          }
          n[Ce.expando] && (n[Ce.expando] = void 0);
        }
    },
  }),
    oe.fn.extend({
      domManip: T,
      detach: function (e) {
        return E(this, e, !0);
      },
      remove: function (e) {
        return E(this, e);
      },
      text: function (e) {
        return Te(
          this,
          function (e) {
            return void 0 === e
              ? oe.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return T(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            m(this, e).appendChild(e);
          }
        });
      },
      prepend: function () {
        return T(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = m(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return T(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return T(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (oe.cleanData(l(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return oe.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Te(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ie.test(e) &&
              !Re[(Fe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = oe.htmlPrefilter(e);
              try {
                for (; r > n; n++)
                  (t = this[n] || {}),
                    1 === t.nodeType &&
                      (oe.cleanData(l(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return T(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            oe.inArray(this, e) < 0 &&
              (oe.cleanData(l(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    oe.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        oe.fn[e] = function (e) {
          for (var n, r = [], i = oe(e), o = i.length - 1, a = 0; o >= a; a++)
            (n = a === o ? this : this.clone(!0)),
              oe(i[a])[t](n),
              K.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var ze,
    Xe = { HTML: "block", BODY: "block" },
    Ye = /^margin/,
    Ve = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
    Ge = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Je = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    },
    Qe = G.documentElement;
  !(function () {
    function t() {
      (s.style.cssText =
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
        (s.innerHTML = ""),
        Qe.appendChild(a);
      var t = e.getComputedStyle(s);
      (n = "1%" !== t.top),
        (o = "2px" === t.marginLeft),
        (r = "4px" === t.width),
        (s.style.marginRight = "50%"),
        (i = "4px" === t.marginRight),
        Qe.removeChild(a);
    }
    var n,
      r,
      i,
      o,
      a = G.createElement("div"),
      s = G.createElement("div");
    s.style &&
      ((s.style.backgroundClip = "content-box"),
      (s.cloneNode(!0).style.backgroundClip = ""),
      (re.clearCloneStyle = "content-box" === s.style.backgroundClip),
      (a.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      a.appendChild(s),
      oe.extend(re, {
        pixelPosition: function () {
          return t(), n;
        },
        boxSizingReliable: function () {
          return null == r && t(), r;
        },
        pixelMarginRight: function () {
          return null == r && t(), i;
        },
        reliableMarginLeft: function () {
          return null == r && t(), o;
        },
        reliableMarginRight: function () {
          var t,
            n = s.appendChild(G.createElement("div"));
          return (
            (n.style.cssText = s.style.cssText =
              "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (n.style.marginRight = n.style.width = "0"),
            (s.style.width = "1px"),
            Qe.appendChild(a),
            (t = !parseFloat(e.getComputedStyle(n).marginRight)),
            Qe.removeChild(a),
            s.removeChild(n),
            t
          );
        },
      }));
  })();
  var Ke = /^(none|table(?!-c[ea]).+)/,
    Ze = { position: "absolute", visibility: "hidden", display: "block" },
    et = { letterSpacing: "0", fontWeight: "400" },
    tt = ["Webkit", "O", "Moz", "ms"],
    nt = G.createElement("div").style;
  oe.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = S(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = oe.camelCase(t),
          u = e.style;
        return (
          (t = oe.cssProps[s] || (oe.cssProps[s] = N(s) || s)),
          (a = oe.cssHooks[t] || oe.cssHooks[s]),
          void 0 === n
            ? a && "get" in a && void 0 !== (i = a.get(e, !1, r))
              ? i
              : u[t]
            : ((o = typeof n),
              "string" === o &&
                (i = He.exec(n)) &&
                i[1] &&
                ((n = c(e, t, i)), (o = "number")),
              void (
                null != n &&
                n === n &&
                ("number" === o &&
                  (n += (i && i[3]) || (oe.cssNumber[s] ? "" : "px")),
                re.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (u[t] = n))
              ))
        );
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = oe.camelCase(t);
      return (
        (t = oe.cssProps[s] || (oe.cssProps[s] = N(s) || s)),
        (a = oe.cssHooks[t] || oe.cssHooks[s]),
        a && "get" in a && (i = a.get(e, !0, n)),
        void 0 === i && (i = S(e, t, r)),
        "normal" === i && t in et && (i = et[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    oe.each(["height", "width"], function (e, t) {
      oe.cssHooks[t] = {
        get: function (e, n, r) {
          return n
            ? Ke.test(oe.css(e, "display")) && 0 === e.offsetWidth
              ? Je(e, Ze, function () {
                  return L(e, t, r);
                })
              : L(e, t, r)
            : void 0;
        },
        set: function (e, n, r) {
          var i,
            o = r && Ge(e),
            a =
              r &&
              j(e, t, r, "border-box" === oe.css(e, "boxSizing", !1, o), o);
          return (
            a &&
              (i = He.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = oe.css(e, t))),
            H(e, n, a)
          );
        },
      };
    }),
    (oe.cssHooks.marginLeft = A(re.reliableMarginLeft, function (e, t) {
      return t
        ? (parseFloat(S(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Je(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        : void 0;
    })),
    (oe.cssHooks.marginRight = A(re.reliableMarginRight, function (e, t) {
      return t
        ? Je(e, { display: "inline-block" }, S, [e, "marginRight"])
        : void 0;
    })),
    oe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (oe.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            4 > r;
            r++
          )
            i[e + je[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        Ye.test(e) || (oe.cssHooks[e + t].set = H);
    }),
    oe.fn.extend({
      css: function (e, t) {
        return Te(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (oe.isArray(t)) {
              for (r = Ge(e), i = t.length; i > a; a++)
                o[t[a]] = oe.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return D(this, !0);
      },
      hide: function () {
        return D(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Le(this) ? oe(this).show() : oe(this).hide();
            });
      },
    }),
    (oe.Tween = F),
    (F.prototype = {
      constructor: F,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || oe.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (oe.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = F.propHooks[this.prop];
        return e && e.get ? e.get(this) : F.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = F.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                oe.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : F.propHooks._default.set(this),
          this
        );
      },
    }),
    (F.prototype.init.prototype = F.prototype),
    (F.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : ((t = oe.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
        },
        set: function (e) {
          oe.fx.step[e.prop]
            ? oe.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[oe.cssProps[e.prop]] &&
                !oe.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : oe.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (F.propHooks.scrollTop = F.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (oe.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (oe.fx = F.prototype.init),
    (oe.fx.step = {});
  var rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  (oe.Animation = oe.extend(_, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return c(n.elem, e, He.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      oe.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(xe));
      for (var n, r = 0, i = e.length; i > r; r++)
        (n = e[r]),
          (_.tweeners[n] = _.tweeners[n] || []),
          _.tweeners[n].unshift(t);
    },
    prefilters: [B],
    prefilter: function (e, t) {
      t ? _.prefilters.unshift(e) : _.prefilters.push(e);
    },
  })),
    (oe.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? oe.extend({}, e)
          : {
              complete: n || (!n && t) || (oe.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !oe.isFunction(t) && t),
            };
      return (
        (r.duration = oe.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in oe.fx.speeds
          ? oe.fx.speeds[r.duration]
          : oe.fx.speeds._default),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          oe.isFunction(r.old) && r.old.call(this),
            r.queue && oe.dequeue(this, r.queue);
        }),
        r
      );
    }),
    oe.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(Le)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = oe.isEmptyObject(e),
          o = oe.speed(t, n, r),
          a = function () {
            var t = _(this, oe.extend({}, e), o);
            (i || ke.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = oe.timers,
              a = ke.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && at.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || oe.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = ke.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = oe.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                oe.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; a > t; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    oe.each(["toggle", "show", "hide"], function (e, t) {
      var n = oe.fn[t];
      oe.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(R(t, !0), e, r, i);
      };
    }),
    oe.each(
      {
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        oe.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (oe.timers = []),
    (oe.fx.tick = function () {
      var e,
        t = 0,
        n = oe.timers;
      for (rt = oe.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || oe.fx.stop(), (rt = void 0);
    }),
    (oe.fx.timer = function (e) {
      oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop();
    }),
    (oe.fx.interval = 13),
    (oe.fx.start = function () {
      it || (it = e.setInterval(oe.fx.tick, oe.fx.interval));
    }),
    (oe.fx.stop = function () {
      e.clearInterval(it), (it = null);
    }),
    (oe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (oe.fn.delay = function (t, n) {
      return (
        (t = oe.fx ? oe.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = G.createElement("input"),
        t = G.createElement("select"),
        n = t.appendChild(G.createElement("option"));
      (e.type = "checkbox"),
        (re.checkOn = "" !== e.value),
        (re.optSelected = n.selected),
        (t.disabled = !0),
        (re.optDisabled = !n.disabled),
        (e = G.createElement("input")),
        (e.value = "t"),
        (e.type = "radio"),
        (re.radioValue = "t" === e.value);
    })();
  var st,
    ut = oe.expr.attrHandle;
  oe.fn.extend({
    attr: function (e, t) {
      return Te(this, oe.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        oe.removeAttr(this, e);
      });
    },
  }),
    oe.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? oe.prop(e, t, n)
            : ((1 === o && oe.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (i =
                  oe.attrHooks[t] ||
                  (oe.expr.match.bool.test(t) ? st : void 0))),
              void 0 !== n
                ? null === n
                  ? void oe.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : ((r = oe.find.attr(e, t)), null == r ? void 0 : r));
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(xe);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = oe.propFix[n] || n),
              oe.expr.match.bool.test(n) && (e[r] = !1),
              e.removeAttribute(n);
      },
    }),
    (st = {
      set: function (e, t, n) {
        return !1 === t ? oe.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ut[t] || oe.find.attr;
      ut[t] = function (e, t, r) {
        var i, o;
        return (
          r ||
            ((o = ut[t]),
            (ut[t] = i),
            (i = null != n(e, t, r) ? t.toLowerCase() : null),
            (ut[t] = o)),
          i
        );
      };
    });
  var ct = /^(?:input|select|textarea|button)$/i,
    lt = /^(?:a|area)$/i;
  oe.fn.extend({
    prop: function (e, t) {
      return Te(this, oe.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[oe.propFix[e] || e];
      });
    },
  }),
    oe.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && oe.isXMLDoc(e)) ||
              ((t = oe.propFix[t] || t), (i = oe.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = oe.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ct.test(e.nodeName) || (lt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    re.optSelected ||
      (oe.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    oe.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        oe.propFix[this.toLowerCase()] = this;
      }
    );
  var ft = /[\t\r\n\f]/g;
  oe.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (oe.isFunction(e))
        return this.each(function (t) {
          oe(this).addClass(e.call(this, t, M(this)));
        });
      if ("string" == typeof e && e)
        for (t = e.match(xe) || []; (n = this[u++]); )
          if (
            ((i = M(n)),
            (r = 1 === n.nodeType && (" " + i + " ").replace(ft, " ")))
          ) {
            for (a = 0; (o = t[a++]); )
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            (s = oe.trim(r)), i !== s && n.setAttribute("class", s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (oe.isFunction(e))
        return this.each(function (t) {
          oe(this).removeClass(e.call(this, t, M(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(xe) || []; (n = this[u++]); )
          if (
            ((i = M(n)),
            (r = 1 === n.nodeType && (" " + i + " ").replace(ft, " ")))
          ) {
            for (a = 0; (o = t[a++]); )
              for (; r.indexOf(" " + o + " ") > -1; )
                r = r.replace(" " + o + " ", " ");
            (s = oe.trim(r)), i !== s && n.setAttribute("class", s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : oe.isFunction(e)
        ? this.each(function (n) {
            oe(this).toggleClass(e.call(this, n, M(this), t), t);
          })
        : this.each(function () {
            var t, r, i, o;
            if ("string" === n)
              for (r = 0, i = oe(this), o = e.match(xe) || []; (t = o[r++]); )
                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
            else
              (void 0 !== e && "boolean" !== n) ||
                ((t = M(this)),
                t && ke.set(this, "__className__", t),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    t || !1 === e ? "" : ke.get(this, "__className__") || ""
                  ));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      for (t = " " + e + " "; (n = this[r++]); )
        if (
          1 === n.nodeType &&
          (" " + M(n) + " ").replace(ft, " ").indexOf(t) > -1
        )
          return !0;
      return !1;
    },
  });
  var dt = /\r/g,
    pt = /[\x20\t\r\n\f]+/g;
  oe.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = oe.isFunction(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              ((i = r ? e.call(this, n, oe(this).val()) : e),
              null == i
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : oe.isArray(i) &&
                  (i = oe.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                oe.valHooks[this.type] ||
                oe.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? ((t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()]),
          t && "get" in t && void 0 !== (n = t.get(i, "value"))
            ? n
            : ((n = i.value),
              "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n))
        : void 0;
    },
  }),
    oe.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = oe.find.attr(e, "value");
            return null != t ? t : oe.trim(oe.text(e)).replace(pt, " ");
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = "select-one" === e.type || 0 > i,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                u = 0 > i ? s : o ? i : 0;
              s > u;
              u++
            )
              if (
                ((n = r[u]),
                (n.selected || u === i) &&
                  (re.optDisabled
                    ? !n.disabled
                    : null === n.getAttribute("disabled")) &&
                  (!n.parentNode.disabled ||
                    !oe.nodeName(n.parentNode, "optgroup")))
              ) {
                if (((t = oe(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = oe.makeArray(t), a = i.length;
              a--;

            )
              (r = i[a]),
                (r.selected = oe.inArray(oe.valHooks.option.get(r), o) > -1) &&
                  (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    oe.each(["radio", "checkbox"], function () {
      (oe.valHooks[this] = {
        set: function (e, t) {
          return oe.isArray(t)
            ? (e.checked = oe.inArray(oe(e).val(), t) > -1)
            : void 0;
        },
      }),
        re.checkOn ||
          (oe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var ht = /^(?:focusinfocus|focusoutblur)$/;
  oe.extend(oe.event, {
    trigger: function (t, n, r, i) {
      var o,
        a,
        s,
        u,
        c,
        l,
        f,
        d = [r || G],
        p = ne.call(t, "type") ? t.type : t,
        h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = s = r = r || G),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !ht.test(p + oe.event.triggered) &&
          (p.indexOf(".") > -1 &&
            ((h = p.split(".")), (p = h.shift()), h.sort()),
          (c = p.indexOf(":") < 0 && "on" + p),
          (t = t[oe.expando] ? t : new oe.Event(p, "object" == typeof t && t)),
          (t.isTrigger = i ? 2 : 3),
          (t.namespace = h.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : oe.makeArray(n, [t])),
          (f = oe.event.special[p] || {}),
          i || !f.trigger || !1 !== f.trigger.apply(r, n)))
      ) {
        if (!i && !f.noBubble && !oe.isWindow(r)) {
          for (
            u = f.delegateType || p, ht.test(u + p) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            d.push(a), (s = a);
          s === (r.ownerDocument || G) &&
            d.push(s.defaultView || s.parentWindow || e);
        }
        for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); )
          (t.type = o > 1 ? u : f.bindType || p),
            (l = (ke.get(a, "events") || {})[t.type] && ke.get(a, "handle")),
            l && l.apply(a, n),
            (l = c && a[c]) &&
              l.apply &&
              Ee(a) &&
              ((t.result = l.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = p),
          i ||
            t.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(d.pop(), n)) ||
            !Ee(r) ||
            (c &&
              oe.isFunction(r[p]) &&
              !oe.isWindow(r) &&
              ((s = r[c]),
              s && (r[c] = null),
              (oe.event.triggered = p),
              r[p](),
              (oe.event.triggered = void 0),
              s && (r[c] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = oe.extend(new oe.Event(), n, { type: e, isSimulated: !0 });
      oe.event.trigger(r, null, t);
    },
  }),
    oe.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          oe.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? oe.event.trigger(e, t, n, !0) : void 0;
      },
    }),
    oe.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        oe.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    oe.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    (re.focusin = "onfocusin" in e),
    re.focusin ||
      oe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          oe.event.simulate(t, e.target, oe.event.fix(e));
        };
        oe.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = ke.access(r, t);
            i || r.addEventListener(e, n, !0), ke.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = ke.access(r, t) - 1;
            i
              ? ke.access(r, t, i)
              : (r.removeEventListener(e, n, !0), ke.remove(r, t));
          },
        };
      });
  var gt = e.location,
    vt = oe.now(),
    mt = /\?/;
  (oe.parseJSON = function (e) {
    return JSON.parse(e + "");
  }),
    (oe.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        n = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (e) {
        n = void 0;
      }
      return (
        (n && !n.getElementsByTagName("parsererror").length) ||
          oe.error("Invalid XML: " + t),
        n
      );
    });
  var yt = /#.*$/,
    bt = /([?&])_=[^&]*/,
    xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Tt = /^(?:GET|HEAD)$/,
    Et = /^\/\//,
    kt = {},
    Ct = {},
    St = "*/".concat("*"),
    At = G.createElement("a");
  (At.href = gt.href),
    oe.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: gt.href,
        type: "GET",
        isLocal: wt.test(gt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": St,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": oe.parseJSON,
          "text xml": oe.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $($(e, oe.ajaxSettings), t) : $(oe.ajaxSettings, e);
      },
      ajaxPrefilter: I(kt),
      ajaxTransport: I(Ct),
      ajax: function (t, n) {
        function r(t, n, r, s) {
          var c,
            f,
            y,
            b,
            w,
            E = n;
          2 !== x &&
            ((x = 2),
            u && e.clearTimeout(u),
            (i = void 0),
            (a = s || ""),
            (T.readyState = t > 0 ? 4 : 0),
            (c = (t >= 200 && 300 > t) || 304 === t),
            r && (b = W(d, T, r)),
            (b = z(d, b, T, c)),
            c
              ? (d.ifModified &&
                  ((w = T.getResponseHeader("Last-Modified")),
                  w && (oe.lastModified[o] = w),
                  (w = T.getResponseHeader("etag")) && (oe.etag[o] = w)),
                204 === t || "HEAD" === d.type
                  ? (E = "nocontent")
                  : 304 === t
                  ? (E = "notmodified")
                  : ((E = b.state), (f = b.data), (y = b.error), (c = !y)))
              : ((y = E), (!t && E) || ((E = "error"), 0 > t && (t = 0))),
            (T.status = t),
            (T.statusText = (n || E) + ""),
            c ? g.resolveWith(p, [f, E, T]) : g.rejectWith(p, [T, E, y]),
            T.statusCode(m),
            (m = void 0),
            l && h.trigger(c ? "ajaxSuccess" : "ajaxError", [T, d, c ? f : y]),
            v.fireWith(p, [T, E]),
            l &&
              (h.trigger("ajaxComplete", [T, d]),
              --oe.active || oe.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          o,
          a,
          s,
          u,
          c,
          l,
          f,
          d = oe.ajaxSetup({}, n),
          p = d.context || d,
          h = d.context && (p.nodeType || p.jquery) ? oe(p) : oe.event,
          g = oe.Deferred(),
          v = oe.Callbacks("once memory"),
          m = d.statusCode || {},
          y = {},
          b = {},
          x = 0,
          w = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === x) {
                if (!s)
                  for (s = {}; (t = xt.exec(a)); ) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === x ? a : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return x || ((e = b[n] = b[n] || e), (y[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return x || (d.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (2 > x) for (t in e) m[t] = [m[t], e[t]];
                else T.always(e[T.status]);
              return this;
            },
            abort: function (e) {
              var t = e || w;
              return i && i.abort(t), r(0, t), this;
            },
          };
        if (
          ((g.promise(T).complete = v.add),
          (T.success = T.done),
          (T.error = T.fail),
          (d.url = ((t || d.url || gt.href) + "")
            .replace(yt, "")
            .replace(Et, gt.protocol + "//")),
          (d.type = n.method || n.type || d.method || d.type),
          (d.dataTypes = oe
            .trim(d.dataType || "*")
            .toLowerCase()
            .match(xe) || [""]),
          null == d.crossDomain)
        ) {
          c = G.createElement("a");
          try {
            (c.href = d.url),
              (c.href = c.href),
              (d.crossDomain =
                At.protocol + "//" + At.host != c.protocol + "//" + c.host);
          } catch (e) {
            d.crossDomain = !0;
          }
        }
        if (
          (d.data &&
            d.processData &&
            "string" != typeof d.data &&
            (d.data = oe.param(d.data, d.traditional)),
          U(kt, d, n, T),
          2 === x)
        )
          return T;
        (l = oe.event && d.global),
          l && 0 == oe.active++ && oe.event.trigger("ajaxStart"),
          (d.type = d.type.toUpperCase()),
          (d.hasContent = !Tt.test(d.type)),
          (o = d.url),
          d.hasContent ||
            (d.data &&
              ((o = d.url += (mt.test(o) ? "&" : "?") + d.data), delete d.data),
            !1 === d.cache &&
              (d.url = bt.test(o)
                ? o.replace(bt, "$1_=" + vt++)
                : o + (mt.test(o) ? "&" : "?") + "_=" + vt++)),
          d.ifModified &&
            (oe.lastModified[o] &&
              T.setRequestHeader("If-Modified-Since", oe.lastModified[o]),
            oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])),
          ((d.data && d.hasContent && !1 !== d.contentType) || n.contentType) &&
            T.setRequestHeader("Content-Type", d.contentType),
          T.setRequestHeader(
            "Accept",
            d.dataTypes[0] && d.accepts[d.dataTypes[0]]
              ? d.accepts[d.dataTypes[0]] +
                  ("*" !== d.dataTypes[0] ? ", " + St + "; q=0.01" : "")
              : d.accepts["*"]
          );
        for (f in d.headers) T.setRequestHeader(f, d.headers[f]);
        if (d.beforeSend && (!1 === d.beforeSend.call(p, T, d) || 2 === x))
          return T.abort();
        w = "abort";
        for (f in { success: 1, error: 1, complete: 1 }) T[f](d[f]);
        if ((i = U(Ct, d, n, T))) {
          if (((T.readyState = 1), l && h.trigger("ajaxSend", [T, d]), 2 === x))
            return T;
          d.async &&
            d.timeout > 0 &&
            (u = e.setTimeout(function () {
              T.abort("timeout");
            }, d.timeout));
          try {
            (x = 1), i.send(y, r);
          } catch (e) {
            if (!(2 > x)) throw e;
            r(-1, e);
          }
        } else r(-1, "No Transport");
        return T;
      },
      getJSON: function (e, t, n) {
        return oe.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return oe.get(e, void 0, t, "script");
      },
    }),
    oe.each(["get", "post"], function (e, t) {
      oe[t] = function (e, n, r, i) {
        return (
          oe.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
          oe.ajax(
            oe.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              oe.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (oe._evalUrl = function (e) {
      return oe.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    oe.fn.extend({
      wrapAll: function (e) {
        var t;
        return oe.isFunction(e)
          ? this.each(function (t) {
              oe(this).wrapAll(e.call(this, t));
            })
          : (this[0] &&
              ((t = oe(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this);
      },
      wrapInner: function (e) {
        return oe.isFunction(e)
          ? this.each(function (t) {
              oe(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = oe(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = oe.isFunction(e);
        return this.each(function (n) {
          oe(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (oe.expr.filters.hidden = function (e) {
      return !oe.expr.filters.visible(e);
    }),
    (oe.expr.filters.visible = function (e) {
      return (
        e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
      );
    });
  var Nt = /%20/g,
    Ht = /\[\]$/,
    jt = /\r?\n/g,
    Lt = /^(?:submit|button|image|reset|file)$/i,
    Dt = /^(?:input|select|textarea|keygen)/i;
  (oe.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        (t = oe.isFunction(t) ? t() : null == t ? "" : t),
          (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional),
      oe.isArray(e) || (e.jquery && !oe.isPlainObject(e)))
    )
      oe.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) X(n, e[n], t, i);
    return r.join("&").replace(Nt, "+");
  }),
    oe.fn.extend({
      serialize: function () {
        return oe.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = oe.prop(this, "elements");
          return e ? oe.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !oe(this).is(":disabled") &&
              Dt.test(this.nodeName) &&
              !Lt.test(e) &&
              (this.checked || !De.test(e))
            );
          })
          .map(function (e, t) {
            var n = oe(this).val();
            return null == n
              ? null
              : oe.isArray(n)
              ? oe.map(n, function (e) {
                  return { name: t.name, value: e.replace(jt, "\r\n") };
                })
              : { name: t.name, value: n.replace(jt, "\r\n") };
          })
          .get();
      },
    }),
    (oe.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Ft = { 0: 200, 1223: 204 },
    qt = oe.ajaxSettings.xhr();
  (re.cors = !!qt && "withCredentials" in qt),
    (re.ajax = qt = !!qt),
    oe.ajaxTransport(function (t) {
      var n, r;
      return re.cors || (qt && !t.crossDomain)
        ? {
            send: function (i, o) {
              var a,
                s = t.xhr();
              if (
                (s.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (a in t.xhrFields) s[a] = t.xhrFields[a];
              t.mimeType &&
                s.overrideMimeType &&
                s.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest");
              for (a in i) s.setRequestHeader(a, i[a]);
              (n = function (e) {
                return function () {
                  n &&
                    ((n =
                      r =
                      s.onload =
                      s.onerror =
                      s.onabort =
                      s.onreadystatechange =
                        null),
                    "abort" === e
                      ? s.abort()
                      : "error" === e
                      ? "number" != typeof s.status
                        ? o(0, "error")
                        : o(s.status, s.statusText)
                      : o(
                          Ft[s.status] || s.status,
                          s.statusText,
                          "text" !== (s.responseType || "text") ||
                            "string" != typeof s.responseText
                            ? { binary: s.response }
                            : { text: s.responseText },
                          s.getAllResponseHeaders()
                        ));
                };
              }),
                (s.onload = n()),
                (r = s.onerror = n("error")),
                void 0 !== s.onabort
                  ? (s.onabort = r)
                  : (s.onreadystatechange = function () {
                      4 === s.readyState &&
                        e.setTimeout(function () {
                          n && r();
                        });
                    }),
                (n = n("abort"));
              try {
                s.send((t.hasContent && t.data) || null);
              } catch (e) {
                if (n) throw e;
              }
            },
            abort: function () {
              n && n();
            },
          }
        : void 0;
    }),
    oe.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return oe.globalEval(e), e;
        },
      },
    }),
    oe.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    oe.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (r, i) {
            (t = oe("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && i("error" === e.type ? 404 : 200, e.type);
                })
              )),
              G.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Rt = [],
    Ot = /(=)\?(?=&|$)|\?\?/;
  oe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Rt.pop() || oe.expando + "_" + vt++;
      return (this[e] = !0), e;
    },
  }),
    oe.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Ot.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ot.test(t.data) &&
              "data");
      return s || "jsonp" === t.dataTypes[0]
        ? ((i = t.jsonpCallback =
            oe.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Ot, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || oe.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? oe(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Rt.push(i)),
              a && oe.isFunction(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script")
        : void 0;
    }),
    (oe.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || G);
      var r = he.exec(e),
        i = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = d([e], t, i)),
          i && i.length && oe(i).remove(),
          oe.merge([], r.childNodes));
    });
  var Bt = oe.fn.load;
  (oe.fn.load = function (e, t, n) {
    if ("string" != typeof e && Bt) return Bt.apply(this, arguments);
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return (
      s > -1 && ((r = oe.trim(e.slice(s))), (e = e.slice(0, s))),
      oe.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (i = "POST"),
      a.length > 0 &&
        oe
          .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
          .done(function (e) {
            (o = arguments),
              a.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e);
          })
          .always(
            n &&
              function (e, t) {
                a.each(function () {
                  n.apply(this, o || [e.responseText, t, e]);
                });
              }
          ),
      this
    );
  }),
    oe.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        oe.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (oe.expr.filters.animated = function (e) {
      return oe.grep(oe.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (oe.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          c,
          l = oe.css(e, "position"),
          f = oe(e),
          d = {};
        "static" === l && (e.style.position = "relative"),
          (s = f.offset()),
          (o = oe.css(e, "top")),
          (u = oe.css(e, "left")),
          (c =
            ("absolute" === l || "fixed" === l) &&
            (o + u).indexOf("auto") > -1),
          c
            ? ((r = f.position()), (a = r.top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, s))),
          null != t.top && (d.top = t.top - s.top + a),
          null != t.left && (d.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, d) : f.css(d);
      },
    }),
    oe.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                oe.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0],
          i = { top: 0, left: 0 },
          o = r && r.ownerDocument;
        return o
          ? ((t = o.documentElement),
            oe.contains(t, r)
              ? ((i = r.getBoundingClientRect()),
                (n = Y(o)),
                {
                  top: i.top + n.pageYOffset - t.clientTop,
                  left: i.left + n.pageXOffset - t.clientLeft,
                })
              : i)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            r = { top: 0, left: 0 };
          return (
            "fixed" === oe.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                oe.nodeName(e[0], "html") || (r = e.offset()),
                (r.top += oe.css(e[0], "borderTopWidth", !0)),
                (r.left += oe.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - r.top - oe.css(n, "marginTop", !0),
              left: t.left - r.left - oe.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === oe.css(e, "position");

          )
            e = e.offsetParent;
          return e || Qe;
        });
      },
    }),
    oe.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function (r) {
          return Te(
            this,
            function (e, r, i) {
              var o = Y(e);
              return void 0 === i
                ? o
                  ? o[t]
                  : e[r]
                : void (o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i));
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    oe.each(["top", "left"], function (e, t) {
      oe.cssHooks[t] = A(re.pixelPosition, function (e, n) {
        return n
          ? ((n = S(e, t)), Ve.test(n) ? oe(e).position()[t] + "px" : n)
          : void 0;
      });
    }),
    oe.each({ Height: "height", Width: "width" }, function (e, t) {
      oe.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          oe.fn[r] = function (r, i) {
            var o = arguments.length && (n || "boolean" != typeof r),
              a = n || (!0 === r || !0 === i ? "margin" : "border");
            return Te(
              this,
              function (t, n, r) {
                var i;
                return oe.isWindow(t)
                  ? t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      i["scroll" + e],
                      t.body["offset" + e],
                      i["offset" + e],
                      i["client" + e]
                    ))
                  : void 0 === r
                  ? oe.css(t, n, a)
                  : oe.style(t, n, r, a);
              },
              t,
              o ? r : void 0,
              o,
              null
            );
          };
        }
      );
    }),
    oe.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      size: function () {
        return this.length;
      },
    }),
    (oe.fn.andSelf = oe.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return oe;
      });
  var Pt = e.jQuery,
    _t = e.$;
  return (
    (oe.noConflict = function (t) {
      return (
        e.$ === oe && (e.$ = _t), t && e.jQuery === oe && (e.jQuery = Pt), oe
      );
    }),
    t || (e.jQuery = e.$ = oe),
    oe
  );
});
var CryptoJS =
  CryptoJS ||
  (function (e, t) {
    var n = {},
      r = (n.lib = {}),
      o = function () {},
      a = (r.Base = {
        extend: function (e) {
          o.prototype = this;
          var t = new o();
          return (
            e && t.mixIn(e),
            t.hasOwnProperty("init") ||
              (t.init = function () {
                t.$super.init.apply(this, arguments);
              }),
            (t.init.prototype = t),
            (t.$super = this),
            t
          );
        },
        create: function () {
          var e = this.extend();
          return e.init.apply(e, arguments), e;
        },
        init: function () {},
        mixIn: function (e) {
          for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
          e.hasOwnProperty("toString") && (this.toString = e.toString);
        },
        clone: function () {
          return this.init.prototype.extend(this);
        },
      }),
      s = (r.WordArray = a.extend({
        init: function (e, t) {
          (e = this.words = e || []),
            (this.sigBytes = void 0 != t ? t : 4 * e.length);
        },
        toString: function (e) {
          return (e || c).stringify(this);
        },
        concat: function (e) {
          var t = this.words,
            n = e.words,
            r = this.sigBytes;
          if (((e = e.sigBytes), this.clamp(), r % 4))
            for (var i = 0; i < e; i++)
              t[(r + i) >>> 2] |=
                ((n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) <<
                (24 - ((r + i) % 4) * 8);
          else if (65535 < n.length)
            for (i = 0; i < e; i += 4) t[(r + i) >>> 2] = n[i >>> 2];
          else t.push.apply(t, n);
          return (this.sigBytes += e), this;
        },
        clamp: function () {
          var t = this.words,
            n = this.sigBytes;
          (t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)),
            (t.length = e.ceil(n / 4));
        },
        clone: function () {
          var e = a.clone.call(this);
          return (e.words = this.words.slice(0)), e;
        },
        random: function (t) {
          for (var n = [], r = 0; r < t; r += 4)
            n.push((4294967296 * e.random()) | 0);
          return new s.init(n, t);
        },
      })),
      u = (n.enc = {}),
      c = (u.Hex = {
        stringify: function (e) {
          var t = e.words;
          e = e.sigBytes;
          for (var n = [], r = 0; r < e; r++) {
            var i = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
            n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16));
          }
          return n.join("");
        },
        parse: function (e) {
          for (d = [], i = 1, b = 0; b < e.length; b += 2)
            (f = parseInt(e.substr(b, 2), 16)),
              (d[b >>> 3] |= f << (24 - (b % 8) * 4)),
              b >>> 3 != i && (i += 1);
          return new s.init(d, e.length / 2);
        },
      }),
      l = (u.Latin1 = {
        stringify: function (e) {
          var t = e.words;
          e = e.sigBytes;
          for (var n = [], r = 0; r < e; r++)
            n.push(
              String.fromCharCode((t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255)
            );
          return n.join("");
        },
        parse: function (e) {
          for (var t = e.length, n = [], r = 0; r < t; r++)
            n[r >>> 2] |= (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
          return new s.init(n, t);
        },
      }),
      f =
        ((u.Utf8 = {
          stringify: function (e) {
            try {
              return decodeURIComponent(escape(l.stringify(e)));
            } catch (e) {
              throw Error("Malformed UTF-8 data");
            }
          },
          parse: function (e) {
            return l.parse(unescape(encodeURIComponent(e)));
          },
        }),
        (r.BufferedBlockAlgorithm = a.extend({
          reset: function () {
            (this._data = new s.init()), (this._nDataBytes = 0);
          },
          _append: function (e) {
            "string" == typeof e && (e = l.parse(e)),
              this._data.concat(e),
              (this._nDataBytes += e.sigBytes);
          },
          _process: function (t) {
            var n = this._data,
              r = n.words,
              i = n.sigBytes,
              o = this.blockSize,
              a = i / (4 * o),
              a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0);
            if (((t = a * o), (i = e.min(4 * t, i)), t)) {
              var u,
                c = 0,
                l = this;
              (u = function () {
                if (!(c < t))
                  return (
                    (c = r.splice(0, t)),
                    (n.sigBytes -= i),
                    void l.fnsh(l._hash)
                  );
                for (var e = 0; e < t / o / 100; e++)
                  if ((l._doProcessBlock(r, c), !((c += o) < t)))
                    return void setTimeout(u, 0);
                l.cbk(c / t), setTimeout(u, 0);
              }),
                setTimeout(u, 0);
            }
            return new s.init(c, i);
          },
          clone: function () {
            var e = a.clone.call(this);
            return (e._data = this._data.clone()), e;
          },
          _minBufferSize: 0,
        })));
    r.Hasher = f.extend({
      cfg: a.extend(),
      init: function (e, t, n) {
        (this.cfg = this.cfg.extend(e)),
          (this.cbk = t),
          (this.fnsh = n),
          this.reset();
      },
      reset: function () {
        f.reset.call(this), this._doReset();
      },
      update: function (e) {
        return this._append(e), this._process(), this;
      },
      finalize: function (e) {
        return e && this._append(e), this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function (e) {
        return function (t, n, r, i) {
          return new e.init(i, n, r).finalize(t);
        };
      },
      _createHmacHelper: function (e) {
        return function (t, n) {
          return new p.HMAC.init(e, n).finalize(t);
        };
      },
    });
    var p = (n.algo = {});
    return n;
  })(Math);
!(function (e) {
  for (
    var t = CryptoJS,
      n = t.lib,
      r = n.WordArray,
      i = n.Hasher,
      n = t.algo,
      o = [],
      a = [],
      s = function (e) {
        return (4294967296 * (e - (0 | e))) | 0;
      },
      u = 2,
      c = 0;
    64 > c;

  ) {
    var l;
    e: {
      l = u;
      for (var f = e.sqrt(l), d = 2; d <= f; d++)
        if (!(l % d)) {
          l = !1;
          break e;
        }
      l = !0;
    }
    l && (8 > c && (o[c] = s(e.pow(u, 0.5))), (a[c] = s(e.pow(u, 1 / 3))), c++),
      u++;
  }
  var p = [],
    n = (n.SHA256 = i.extend({
      _doReset: function () {
        this._hash = new r.init(o.slice(0));
      },
      _doProcessBlock: function (e, t) {
        for (
          var n = this._hash.words,
            r = n[0],
            i = n[1],
            o = n[2],
            s = n[3],
            u = n[4],
            c = n[5],
            l = n[6],
            f = n[7],
            d = 0;
          64 > d;
          d++
        ) {
          if (16 > d) p[d] = 0 | e[t + d];
          else {
            var h = p[d - 15],
              g = p[d - 2];
            p[d] =
              (((h << 25) | (h >>> 7)) ^ ((h << 14) | (h >>> 18)) ^ (h >>> 3)) +
              p[d - 7] +
              (((g << 15) | (g >>> 17)) ^
                ((g << 13) | (g >>> 19)) ^
                (g >>> 10)) +
              p[d - 16];
          }
          (h =
            f +
            (((u << 26) | (u >>> 6)) ^
              ((u << 21) | (u >>> 11)) ^
              ((u << 7) | (u >>> 25))) +
            ((u & c) ^ (~u & l)) +
            a[d] +
            p[d]),
            (g =
              (((r << 30) | (r >>> 2)) ^
                ((r << 19) | (r >>> 13)) ^
                ((r << 10) | (r >>> 22))) +
              ((r & i) ^ (r & o) ^ (i & o))),
            (f = l),
            (l = c),
            (c = u),
            (u = (s + h) | 0),
            (s = o),
            (o = i),
            (i = r),
            (r = (h + g) | 0);
        }
        (n[0] = (n[0] + r) | 0),
          (n[1] = (n[1] + i) | 0),
          (n[2] = (n[2] + o) | 0),
          (n[3] = (n[3] + s) | 0),
          (n[4] = (n[4] + u) | 0),
          (n[5] = (n[5] + c) | 0),
          (n[6] = (n[6] + l) | 0),
          (n[7] = (n[7] + f) | 0);
      },
      _doFinalize: function () {
        var t = this._data,
          n = t.words,
          r = 8 * this._nDataBytes,
          i = 8 * t.sigBytes;
        return (
          (n[i >>> 5] |= 128 << (24 - (i % 32))),
          (n[14 + (((i + 64) >>> 9) << 4)] = e.floor(r / 4294967296)),
          (n[15 + (((i + 64) >>> 9) << 4)] = r),
          (t.sigBytes = 4 * n.length),
          this._process(),
          this._hash
        );
      },
      clone: function () {
        var e = i.clone.call(this);
        return (e._hash = this._hash.clone()), e;
      },
    }));
  (t.SHA256 = i._createHelper(n)), (t.HmacSHA256 = i._createHmacHelper(n));
})(Math),
  (function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
      var t;
      (t =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : this),
        (t.Clipboard = e());
    }
  })(function () {
    var e;
    return (function e(t, n, r) {
      function i(a, s) {
        if (!n[a]) {
          if (!t[a]) {
            var u = "function" == typeof require && require;
            if (!s && u) return u(a, !0);
            if (o) return o(a, !0);
            var c = new Error("Cannot find module '" + a + "'");
            throw ((c.code = "MODULE_NOT_FOUND"), c);
          }
          var l = (n[a] = { exports: {} });
          t[a][0].call(
            l.exports,
            function (e) {
              var n = t[a][1][e];
              return i(n || e);
            },
            l,
            l.exports,
            e,
            t,
            n,
            r
          );
        }
        return n[a].exports;
      }
      for (
        var o = "function" == typeof require && require, a = 0;
        a < r.length;
        a++
      )
        i(r[a]);
      return i;
    })(
      {
        1: [
          function (e, t, n) {
            function r(e, t) {
              for (; e && e.nodeType !== i; ) {
                if (e.matches(t)) return e;
                e = e.parentNode;
              }
            }
            var i = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
              var o = Element.prototype;
              o.matches =
                o.matchesSelector ||
                o.mozMatchesSelector ||
                o.msMatchesSelector ||
                o.oMatchesSelector ||
                o.webkitMatchesSelector;
            }
            t.exports = r;
          },
          {},
        ],
        2: [
          function (e, t, n) {
            function r(e, t, n, r, o) {
              var a = i.apply(this, arguments);
              return (
                e.addEventListener(n, a, o),
                {
                  destroy: function () {
                    e.removeEventListener(n, a, o);
                  },
                }
              );
            }
            function i(e, t, n, r) {
              return function (n) {
                (n.delegateTarget = o(n.target, t)),
                  n.delegateTarget && r.call(e, n);
              };
            }
            var o = e("./closest");
            t.exports = r;
          },
          { "./closest": 1 },
        ],
        3: [
          function (e, t, n) {
            (n.node = function (e) {
              return (
                void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
              );
            }),
              (n.nodeList = function (e) {
                var t = Object.prototype.toString.call(e);
                return (
                  void 0 !== e &&
                  ("[object NodeList]" === t ||
                    "[object HTMLCollection]" === t) &&
                  "length" in e &&
                  (0 === e.length || n.node(e[0]))
                );
              }),
              (n.string = function (e) {
                return "string" == typeof e || e instanceof String;
              }),
              (n.fn = function (e) {
                return (
                  "[object Function]" === Object.prototype.toString.call(e)
                );
              });
          },
          {},
        ],
        4: [
          function (e, t, n) {
            function r(e, t, n) {
              if (!e && !t && !n) throw new Error("Missing required arguments");
              if (!s.string(t))
                throw new TypeError("Second argument must be a String");
              if (!s.fn(n))
                throw new TypeError("Third argument must be a Function");
              if (s.node(e)) return i(e, t, n);
              if (s.nodeList(e)) return o(e, t, n);
              if (s.string(e)) return a(e, t, n);
              throw new TypeError(
                "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
              );
            }
            function i(e, t, n) {
              return (
                e.addEventListener(t, n),
                {
                  destroy: function () {
                    e.removeEventListener(t, n);
                  },
                }
              );
            }
            function o(e, t, n) {
              return (
                Array.prototype.forEach.call(e, function (e) {
                  e.addEventListener(t, n);
                }),
                {
                  destroy: function () {
                    Array.prototype.forEach.call(e, function (e) {
                      e.removeEventListener(t, n);
                    });
                  },
                }
              );
            }
            function a(e, t, n) {
              return u(document.body, e, t, n);
            }
            var s = e("./is"),
              u = e("delegate");
            t.exports = r;
          },
          { "./is": 3, delegate: 2 },
        ],
        5: [
          function (e, t, n) {
            function r(e) {
              var t;
              if ("SELECT" === e.nodeName) e.focus(), (t = e.value);
              else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                var n = e.hasAttribute("readonly");
                n || e.setAttribute("readonly", ""),
                  e.select(),
                  e.setSelectionRange(0, e.value.length),
                  n || e.removeAttribute("readonly"),
                  (t = e.value);
              } else {
                e.hasAttribute("contenteditable") && e.focus();
                var r = window.getSelection(),
                  i = document.createRange();
                i.selectNodeContents(e),
                  r.removeAllRanges(),
                  r.addRange(i),
                  (t = r.toString());
              }
              return t;
            }
            t.exports = r;
          },
          {},
        ],
        6: [
          function (e, t, n) {
            function r() {}
            (r.prototype = {
              on: function (e, t, n) {
                var r = this.e || (this.e = {});
                return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
              },
              once: function (e, t, n) {
                function r() {
                  i.off(e, r), t.apply(n, arguments);
                }
                var i = this;
                return (r._ = t), this.on(e, r, n);
              },
              emit: function (e) {
                var t = [].slice.call(arguments, 1),
                  n = ((this.e || (this.e = {}))[e] || []).slice(),
                  r = 0,
                  i = n.length;
                for (r; r < i; r++) n[r].fn.apply(n[r].ctx, t);
                return this;
              },
              off: function (e, t) {
                var n = this.e || (this.e = {}),
                  r = n[e],
                  i = [];
                if (r && t)
                  for (var o = 0, a = r.length; o < a; o++)
                    r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
                return i.length ? (n[e] = i) : delete n[e], this;
              },
            }),
              (t.exports = r);
          },
          {},
        ],
        7: [
          function (t, n, r) {
            !(function (i, o) {
              if ("function" == typeof e && e.amd) e(["module", "select"], o);
              else if (void 0 !== r) o(n, t("select"));
              else {
                var a = { exports: {} };
                o(a, i.select), (i.clipboardAction = a.exports);
              }
            })(this, function (e, t) {
              "use strict";
              function n(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              }
              var r = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(t),
                i =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                o = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                })(),
                a = (function () {
                  function e(t) {
                    n(this, e), this.resolveOptions(t), this.initSelection();
                  }
                  return (
                    o(e, [
                      {
                        key: "resolveOptions",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {};
                          (this.action = e.action),
                            (this.emitter = e.emitter),
                            (this.target = e.target),
                            (this.text = e.text),
                            (this.trigger = e.trigger),
                            (this.selectedText = "");
                        },
                      },
                      {
                        key: "initSelection",
                        value: function () {
                          this.text
                            ? this.selectFake()
                            : this.target && this.selectTarget();
                        },
                      },
                      {
                        key: "selectFake",
                        value: function () {
                          var e = this,
                            t =
                              "rtl" ==
                              document.documentElement.getAttribute("dir");
                          this.removeFake(),
                            (this.fakeHandlerCallback = function () {
                              return e.removeFake();
                            }),
                            (this.fakeHandler =
                              document.body.addEventListener(
                                "click",
                                this.fakeHandlerCallback
                              ) || !0),
                            (this.fakeElem =
                              document.createElement("textarea")),
                            (this.fakeElem.style.fontSize = "12pt"),
                            (this.fakeElem.style.border = "0"),
                            (this.fakeElem.style.padding = "0"),
                            (this.fakeElem.style.margin = "0"),
                            (this.fakeElem.style.position = "absolute"),
                            (this.fakeElem.style[t ? "right" : "left"] =
                              "-9999px");
                          var n =
                            window.pageYOffset ||
                            document.documentElement.scrollTop;
                          (this.fakeElem.style.top = n + "px"),
                            this.fakeElem.setAttribute("readonly", ""),
                            (this.fakeElem.value = this.text),
                            document.body.appendChild(this.fakeElem),
                            (this.selectedText = (0, r.default)(this.fakeElem)),
                            this.copyText();
                        },
                      },
                      {
                        key: "removeFake",
                        value: function () {
                          this.fakeHandler &&
                            (document.body.removeEventListener(
                              "click",
                              this.fakeHandlerCallback
                            ),
                            (this.fakeHandler = null),
                            (this.fakeHandlerCallback = null)),
                            this.fakeElem &&
                              (document.body.removeChild(this.fakeElem),
                              (this.fakeElem = null));
                        },
                      },
                      {
                        key: "selectTarget",
                        value: function () {
                          (this.selectedText = (0, r.default)(this.target)),
                            this.copyText();
                        },
                      },
                      {
                        key: "copyText",
                        value: function () {
                          var e = void 0;
                          try {
                            e = document.execCommand(this.action);
                          } catch (t) {
                            e = !1;
                          }
                          this.handleResult(e);
                        },
                      },
                      {
                        key: "handleResult",
                        value: function (e) {
                          this.emitter.emit(e ? "success" : "error", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this),
                          });
                        },
                      },
                      {
                        key: "clearSelection",
                        value: function () {
                          this.target && this.target.blur(),
                            window.getSelection().removeAllRanges();
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.removeFake();
                        },
                      },
                      {
                        key: "action",
                        set: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "copy";
                          if (
                            ((this._action = e),
                            "copy" !== this._action && "cut" !== this._action)
                          )
                            throw new Error(
                              'Invalid "action" value, use either "copy" or "cut"'
                            );
                        },
                        get: function () {
                          return this._action;
                        },
                      },
                      {
                        key: "target",
                        set: function (e) {
                          if (void 0 !== e) {
                            if (
                              !e ||
                              "object" !==
                                (void 0 === e ? "undefined" : i(e)) ||
                              1 !== e.nodeType
                            )
                              throw new Error(
                                'Invalid "target" value, use a valid Element'
                              );
                            if (
                              "copy" === this.action &&
                              e.hasAttribute("disabled")
                            )
                              throw new Error(
                                'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                              );
                            if (
                              "cut" === this.action &&
                              (e.hasAttribute("readonly") ||
                                e.hasAttribute("disabled"))
                            )
                              throw new Error(
                                'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                              );
                            this._target = e;
                          }
                        },
                        get: function () {
                          return this._target;
                        },
                      },
                    ]),
                    e
                  );
                })();
              e.exports = a;
            });
          },
          { select: 5 },
        ],
        8: [
          function (t, n, r) {
            !(function (i, o) {
              if ("function" == typeof e && e.amd)
                e(
                  [
                    "module",
                    "./clipboard-action",
                    "tiny-emitter",
                    "good-listener",
                  ],
                  o
                );
              else if (void 0 !== r)
                o(
                  n,
                  t("./clipboard-action"),
                  t("tiny-emitter"),
                  t("good-listener")
                );
              else {
                var a = { exports: {} };
                o(a, i.clipboardAction, i.tinyEmitter, i.goodListener),
                  (i.clipboard = a.exports);
              }
            })(this, function (e, t, n, r) {
              "use strict";
              function i(e) {
                return e && e.__esModule ? e : { default: e };
              }
              function o(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              }
              function a(e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" != typeof t && "function" != typeof t)
                  ? e
                  : t;
              }
              function s(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              }
              function u(e, t) {
                var n = "data-clipboard-" + e;
                if (t.hasAttribute(n)) return t.getAttribute(n);
              }
              var c = i(t),
                l = i(n),
                f = i(r),
                d = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                })(),
                p = (function (e) {
                  function t(e, n) {
                    o(this, t);
                    var r = a(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return r.resolveOptions(n), r.listenClick(e), r;
                  }
                  return (
                    s(t, e),
                    d(
                      t,
                      [
                        {
                          key: "resolveOptions",
                          value: function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                            (this.action =
                              "function" == typeof e.action
                                ? e.action
                                : this.defaultAction),
                              (this.target =
                                "function" == typeof e.target
                                  ? e.target
                                  : this.defaultTarget),
                              (this.text =
                                "function" == typeof e.text
                                  ? e.text
                                  : this.defaultText);
                          },
                        },
                        {
                          key: "listenClick",
                          value: function (e) {
                            var t = this;
                            this.listener = (0, f.default)(
                              e,
                              "click",
                              function (e) {
                                return t.onClick(e);
                              }
                            );
                          },
                        },
                        {
                          key: "onClick",
                          value: function (e) {
                            var t = e.delegateTarget || e.currentTarget;
                            this.clipboardAction &&
                              (this.clipboardAction = null),
                              (this.clipboardAction = new c.default({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                trigger: t,
                                emitter: this,
                              }));
                          },
                        },
                        {
                          key: "defaultAction",
                          value: function (e) {
                            return u("action", e);
                          },
                        },
                        {
                          key: "defaultTarget",
                          value: function (e) {
                            var t = u("target", e);
                            if (t) return document.querySelector(t);
                          },
                        },
                        {
                          key: "defaultText",
                          value: function (e) {
                            return u("text", e);
                          },
                        },
                        {
                          key: "destroy",
                          value: function () {
                            this.listener.destroy(),
                              this.clipboardAction &&
                                (this.clipboardAction.destroy(),
                                (this.clipboardAction = null));
                          },
                        },
                      ],
                      [
                        {
                          key: "isSupported",
                          value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : ["copy", "cut"],
                              t = "string" == typeof e ? [e] : e,
                              n = !!document.queryCommandSupported;
                            return (
                              t.forEach(function (e) {
                                n = n && !!document.queryCommandSupported(e);
                              }),
                              n
                            );
                          },
                        },
                      ]
                    ),
                    t
                  );
                })(l.default);
              e.exports = p;
            });
          },
          { "./clipboard-action": 7, "good-listener": 4, "tiny-emitter": 6 },
        ],
      },
      {},
      [8]
    )(8);
  });
var saveAs =
  saveAs ||
  (function (e) {
    "use strict";
    if (
      !(
        void 0 === e ||
        ("undefined" != typeof navigator &&
          /MSIE [1-9]\./.test(navigator.userAgent))
      )
    ) {
      var t = e.document,
        n = function () {
          return e.URL || e.webkitURL || e;
        },
        r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
        i = "download" in r,
        o = function (e) {
          var t = new MouseEvent("click");
          e.dispatchEvent(t);
        },
        a = /constructor/i.test(e.HTMLElement) || e.safari,
        s = /CriOS\/[\d]+/.test(navigator.userAgent),
        u = function (t) {
          (e.setImmediate || e.setTimeout)(function () {
            throw t;
          }, 0);
        },
        c = function (e) {
          var t = function () {
            "string" == typeof e ? n().revokeObjectURL(e) : e.remove();
          };
          setTimeout(t, 4e4);
        },
        l = function (e, t, n) {
          t = [].concat(t);
          for (var r = t.length; r--; ) {
            var i = e["on" + t[r]];
            if ("function" == typeof i)
              try {
                i.call(e, n || e);
              } catch (e) {
                u(e);
              }
          }
        },
        f = function (e) {
          return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
            e.type
          )
            ? new Blob([String.fromCharCode(65279), e], { type: e.type })
            : e;
        },
        d = function (t, u, d) {
          d || (t = f(t));
          var p,
            h = this,
            g = t.type,
            v = "application/octet-stream" === g,
            m = function () {
              l(h, "writestart progress write writeend".split(" "));
            };
          if (((h.readyState = h.INIT), i))
            return (
              (p = n().createObjectURL(t)),
              void setTimeout(function () {
                (r.href = p),
                  (r.download = u),
                  o(r),
                  m(),
                  c(p),
                  (h.readyState = h.DONE);
              })
            );
          !(function () {
            if ((s || (v && a)) && e.FileReader) {
              var r = new FileReader();
              return (
                (r.onloadend = function () {
                  var t = s
                    ? r.result
                    : r.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                  e.open(t, "_blank") || (e.location.href = t),
                    (t = void 0),
                    (h.readyState = h.DONE),
                    m();
                }),
                r.readAsDataURL(t),
                void (h.readyState = h.INIT)
              );
            }
            if ((p || (p = n().createObjectURL(t)), v)) e.location.href = p;
            else {
              e.open(p, "_blank") || (e.location.href = p);
            }
            (h.readyState = h.DONE), m(), c(p);
          })();
        },
        p = d.prototype,
        h = function (e, t, n) {
          return new d(e, t || e.name || "download", n);
        };
      return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
        ? function (e, t, n) {
            return (
              (t = t || e.name || "download"),
              n || (e = f(e)),
              navigator.msSaveOrOpenBlob(e, t)
            );
          }
        : ((p.abort = function () {}),
          (p.readyState = p.INIT = 0),
          (p.WRITING = 1),
          (p.DONE = 2),
          (p.error =
            p.onwritestart =
            p.onprogress =
            p.onwrite =
            p.onabort =
            p.onerror =
            p.onwriteend =
              null),
          h);
    }
  })(
    ("undefined" != typeof self && self) ||
      ("undefined" != typeof window && window) ||
      this.content
  );
"undefined" != typeof module && module.exports
  ? (module.exports.saveAs = saveAs)
  : "undefined" != typeof define &&
    null !== define &&
    null !== define.amd &&
    define("FileSaver.js", function () {
      return saveAs;
    }),
  (function (e) {
    function t(e, t, n) {
      var c,
        l,
        f,
        d,
        p,
        h,
        g,
        v,
        m,
        y = 0,
        w = [],
        T = 0,
        E = !1,
        k = [],
        C = [],
        S = !1;
      if (
        ((n = n || {}),
        (c = n.encoding || "UTF8"),
        (m = n.numRounds || 1) !== parseInt(m, 10) || 1 > m)
      )
        throw Error("numRounds must a integer >= 1");
      if (0 !== e.lastIndexOf("SHA-", 0))
        throw Error("Chosen SHA variant is not supported");
      if (
        ((h = function (t, n) {
          return x(t, n, e);
        }),
        (g = function (t, n, r, i) {
          var o, a;
          if ("SHA-224" !== e && "SHA-256" !== e)
            throw Error("Unexpected error in SHA-2 implementation");
          for (o = 15 + (((n + 65) >>> 9) << 4), a = 16; t.length <= o; )
            t.push(0);
          for (
            t[n >>> 5] |= 128 << (24 - (n % 32)),
              n += r,
              t[o] = 4294967295 & n,
              t[o - 1] = (n / 4294967296) | 0,
              r = t.length,
              n = 0;
            n < r;
            n += a
          )
            i = x(t.slice(n, n + a), i, e);
          if ("SHA-224" === e) t = [i[0], i[1], i[2], i[3], i[4], i[5], i[6]];
          else {
            if ("SHA-256" !== e)
              throw Error("Unexpected error in SHA-2 implementation");
            t = i;
          }
          return t;
        }),
        (v = function (e) {
          return e.slice();
        }),
        "SHA-224" === e)
      )
        (p = 512), (d = 224);
      else {
        if ("SHA-256" !== e) throw Error("Chosen SHA variant is not supported");
        (p = 512), (d = 256);
      }
      (f = u(t, c)),
        (l = b(e)),
        (this.setHMACKey = function (t, n, r) {
          var i;
          if (!0 === E) throw Error("HMAC key already set");
          if (!0 === S) throw Error("Cannot set HMAC key after calling update");
          if (
            ((c = (r || {}).encoding || "UTF8"),
            (n = u(n, c)(t)),
            (t = n.binLen),
            (n = n.value),
            (i = p >>> 3),
            (r = i / 4 - 1),
            i < t / 8)
          ) {
            for (n = g(n, t, 0, b(e)); n.length <= r; ) n.push(0);
            n[r] &= 4294967040;
          } else if (i > t / 8) {
            for (; n.length <= r; ) n.push(0);
            n[r] &= 4294967040;
          }
          for (t = 0; t <= r; t += 1)
            (k[t] = 909522486 ^ n[t]), (C[t] = 1549556828 ^ n[t]);
          (l = h(k, l)), (y = p), (E = !0);
        }),
        (this.update = function (e) {
          var t,
            n,
            r,
            i = 0,
            o = p >>> 5;
          for (
            t = f(e, w, T), e = t.binLen, n = t.value, t = e >>> 5, r = 0;
            r < t;
            r += o
          )
            i + p <= e && ((l = h(n.slice(r, r + o), l)), (i += p));
          (y += i), (w = n.slice(i >>> 5)), (T = e % p), (S = !0);
        }),
        (this.getHash = function (t, n) {
          var u, c, f, p;
          if (!0 === E)
            throw Error("Cannot call getHash after setting HMAC key");
          switch (((f = s(n)), t)) {
            case "HEX":
              u = function (e) {
                return r(e, d, f);
              };
              break;
            case "B64":
              u = function (e) {
                return i(e, d, f);
              };
              break;
            case "BYTES":
              u = function (e) {
                return o(e, d);
              };
              break;
            case "ARRAYBUFFER":
              try {
                c = new ArrayBuffer(0);
              } catch (e) {
                throw Error("ARRAYBUFFER not supported by this environment");
              }
              u = function (e) {
                return a(e, d);
              };
              break;
            default:
              throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER");
          }
          for (p = g(w.slice(), T, y, v(l)), c = 1; c < m; c += 1)
            p = g(p, d, 0, b(e));
          return u(p);
        }),
        (this.getHMAC = function (t, n) {
          var u, c, f, m;
          if (!1 === E)
            throw Error("Cannot call getHMAC without first setting HMAC key");
          switch (((f = s(n)), t)) {
            case "HEX":
              u = function (e) {
                return r(e, d, f);
              };
              break;
            case "B64":
              u = function (e) {
                return i(e, d, f);
              };
              break;
            case "BYTES":
              u = function (e) {
                return o(e, d);
              };
              break;
            case "ARRAYBUFFER":
              try {
                u = new ArrayBuffer(0);
              } catch (e) {
                throw Error("ARRAYBUFFER not supported by this environment");
              }
              u = function (e) {
                return a(e, d);
              };
              break;
            default:
              throw Error(
                "outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER"
              );
          }
          return (
            (c = g(w.slice(), T, y, v(l))),
            (m = h(C, b(e))),
            (m = g(c, d, p, m)),
            u(m)
          );
        });
    }
    function n() {}
    function r(e, t, n) {
      var r = "";
      t /= 8;
      var i, o;
      for (i = 0; i < t; i += 1)
        (o = e[i >>> 2] >>> (8 * (3 + (i % 4) * -1))),
          (r +=
            "0123456789abcdef".charAt((o >>> 4) & 15) +
            "0123456789abcdef".charAt(15 & o));
      return n.outputUpper ? r.toUpperCase() : r;
    }
    function i(e, t, n) {
      var r,
        i,
        o,
        a = "",
        s = t / 8;
      for (r = 0; r < s; r += 3)
        for (
          i = r + 1 < s ? e[(r + 1) >>> 2] : 0,
            o = r + 2 < s ? e[(r + 2) >>> 2] : 0,
            o =
              (((e[r >>> 2] >>> (8 * (3 + (r % 4) * -1))) & 255) << 16) |
              (((i >>> (8 * (3 + ((r + 1) % 4) * -1))) & 255) << 8) |
              ((o >>> (8 * (3 + ((r + 2) % 4) * -1))) & 255),
            i = 0;
          4 > i;
          i += 1
        )
          a +=
            8 * r + 6 * i <= t
              ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                  (o >>> (6 * (3 - i))) & 63
                )
              : n.b64Pad;
      return a;
    }
    function o(e, t) {
      var n,
        r,
        i = "",
        o = t / 8;
      for (n = 0; n < o; n += 1)
        (r = (e[n >>> 2] >>> (8 * (3 + (n % 4) * -1))) & 255),
          (i += String.fromCharCode(r));
      return i;
    }
    function a(e, t) {
      var n,
        r,
        i = t / 8,
        o = new ArrayBuffer(i);
      for (r = new Uint8Array(o), n = 0; n < i; n += 1)
        r[n] = (e[n >>> 2] >>> (8 * (3 + (n % 4) * -1))) & 255;
      return o;
    }
    function s(e) {
      var t = { outputUpper: !1, b64Pad: "=", shakeLen: -1 };
      if (
        ((e = e || {}),
        (t.outputUpper = e.outputUpper || !1),
        !0 === e.hasOwnProperty("b64Pad") && (t.b64Pad = e.b64Pad),
        "boolean" != typeof t.outputUpper)
      )
        throw Error("Invalid outputUpper formatting option");
      if ("string" != typeof t.b64Pad)
        throw Error("Invalid b64Pad formatting option");
      return t;
    }
    function u(e, t) {
      var n;
      switch (t) {
        case "UTF8":
        case "UTF16BE":
        case "UTF16LE":
          break;
        default:
          throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");
      }
      switch (e) {
        case "HEX":
          n = function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u = e.length;
            if (0 != u % 2)
              throw Error("String of HEX type must be in byte increments");
            for (t = t || [0], n = n || 0, s = n >>> 3, r = 0; r < u; r += 2) {
              if (((i = parseInt(e.substr(r, 2), 16)), isNaN(i)))
                throw Error("String of HEX type contains invalid characters");
              for (a = (r >>> 1) + s, o = a >>> 2; t.length <= o; ) t.push(0);
              t[o] |= i << (8 * (3 + (a % 4) * -1));
            }
            return { value: t, binLen: 4 * u + n };
          };
          break;
        case "TEXT":
          n = function (e, n, r) {
            var i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              d = 0;
            if (((n = n || [0]), (r = r || 0), (u = r >>> 3), "UTF8" === t))
              for (f = 3, a = 0; a < e.length; a += 1)
                for (
                  i = e.charCodeAt(a),
                    o = [],
                    128 > i
                      ? o.push(i)
                      : 2048 > i
                      ? (o.push(192 | (i >>> 6)), o.push(128 | (63 & i)))
                      : 55296 > i || 57344 <= i
                      ? o.push(
                          224 | (i >>> 12),
                          128 | ((i >>> 6) & 63),
                          128 | (63 & i)
                        )
                      : ((a += 1),
                        (i =
                          65536 +
                          (((1023 & i) << 10) | (1023 & e.charCodeAt(a)))),
                        o.push(
                          240 | (i >>> 18),
                          128 | ((i >>> 12) & 63),
                          128 | ((i >>> 6) & 63),
                          128 | (63 & i)
                        )),
                    s = 0;
                  s < o.length;
                  s += 1
                ) {
                  for (l = d + u, c = l >>> 2; n.length <= c; ) n.push(0);
                  (n[c] |= o[s] << (8 * (f + (l % 4) * -1))), (d += 1);
                }
            else if ("UTF16BE" === t || "UTF16LE" === t)
              for (
                f = 2,
                  o = ("UTF16LE" === t && !0) || ("UTF16LE" !== t && !1),
                  a = 0;
                a < e.length;
                a += 1
              ) {
                for (
                  i = e.charCodeAt(a),
                    !0 === o && ((s = 255 & i), (i = (s << 8) | (i >>> 8))),
                    l = d + u,
                    c = l >>> 2;
                  n.length <= c;

                )
                  n.push(0);
                (n[c] |= i << (8 * (f + (l % 4) * -1))), (d += 2);
              }
            return { value: n, binLen: 8 * d + r };
          };
          break;
        case "B64":
          n = function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              c,
              l = 0;
            if (-1 === e.search(/^[a-zA-Z0-9=+\/]+$/))
              throw Error("Invalid character in base-64 string");
            if (
              ((i = e.indexOf("=")),
              (e = e.replace(/\=/g, "")),
              -1 !== i && i < e.length)
            )
              throw Error("Invalid '=' found in base-64 string");
            for (
              t = t || [0], n = n || 0, u = n >>> 3, i = 0;
              i < e.length;
              i += 4
            ) {
              for (s = e.substr(i, 4), o = a = 0; o < s.length; o += 1)
                (r =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
                    s[o]
                  )),
                  (a |= r << (18 - 6 * o));
              for (o = 0; o < s.length - 1; o += 1) {
                for (c = l + u, r = c >>> 2; t.length <= r; ) t.push(0);
                (t[r] |=
                  ((a >>> (16 - 8 * o)) & 255) << (8 * (3 + (c % 4) * -1))),
                  (l += 1);
              }
            }
            return { value: t, binLen: 8 * l + n };
          };
          break;
        case "BYTES":
          n = function (e, t, n) {
            var r, i, o, a, s;
            for (
              t = t || [0], n = n || 0, o = n >>> 3, i = 0;
              i < e.length;
              i += 1
            )
              (r = e.charCodeAt(i)),
                (s = i + o),
                (a = s >>> 2),
                t.length <= a && t.push(0),
                (t[a] |= r << (8 * (3 + (s % 4) * -1)));
            return { value: t, binLen: 8 * e.length + n };
          };
          break;
        case "ARRAYBUFFER":
          try {
            n = new ArrayBuffer(0);
          } catch (e) {
            throw Error("ARRAYBUFFER not supported by this environment");
          }
          n = function (e, t, n) {
            var r, i, o, a, s;
            for (
              t = t || [0],
                n = n || 0,
                i = n >>> 3,
                s = new Uint8Array(e),
                r = 0;
              r < e.byteLength;
              r += 1
            )
              (a = r + i),
                (o = a >>> 2),
                t.length <= o && t.push(0),
                (t[o] |= s[r] << (8 * (3 + (a % 4) * -1)));
            return { value: t, binLen: 8 * e.byteLength + n };
          };
          break;
        default:
          throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER");
      }
      return n;
    }
    function c(e, t) {
      return (e >>> t) | (e << (32 - t));
    }
    function l(e, t, n) {
      return (e & t) ^ (~e & n);
    }
    function f(e, t, n) {
      return (e & t) ^ (e & n) ^ (t & n);
    }
    function d(e) {
      return c(e, 2) ^ c(e, 13) ^ c(e, 22);
    }
    function p(e) {
      return c(e, 6) ^ c(e, 11) ^ c(e, 25);
    }
    function h(e) {
      return c(e, 7) ^ c(e, 18) ^ (e >>> 3);
    }
    function g(e) {
      return c(e, 17) ^ c(e, 19) ^ (e >>> 10);
    }
    function v(e, t) {
      var n = (65535 & e) + (65535 & t);
      return (
        ((((e >>> 16) + (t >>> 16) + (n >>> 16)) & 65535) << 16) | (65535 & n)
      );
    }
    function m(e, t, n, r) {
      var i = (65535 & e) + (65535 & t) + (65535 & n) + (65535 & r);
      return (
        ((((e >>> 16) + (t >>> 16) + (n >>> 16) + (r >>> 16) + (i >>> 16)) &
          65535) <<
          16) |
        (65535 & i)
      );
    }
    function y(e, t, n, r, i) {
      var o =
        (65535 & e) + (65535 & t) + (65535 & n) + (65535 & r) + (65535 & i);
      return (
        ((((e >>> 16) +
          (t >>> 16) +
          (n >>> 16) +
          (r >>> 16) +
          (i >>> 16) +
          (o >>> 16)) &
          65535) <<
          16) |
        (65535 & o)
      );
    }
    function b(e) {
      var t,
        r = [];
      if (0 !== e.lastIndexOf("SHA-", 0))
        throw Error("No SHA variants supported");
      switch (
        ((r = [
          3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
          1694076839, 3204075428,
        ]),
        (t = [
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        e)
      ) {
        case "SHA-224":
          break;
        case "SHA-256":
          r = t;
          break;
        case "SHA-384":
        case "SHA-512":
          r = [
            new n(),
            new n(),
            new n(),
            new n(),
            new n(),
            new n(),
            new n(),
            new n(),
          ];
          break;
        default:
          throw Error("Unknown SHA variant");
      }
      return r;
    }
    function x(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        c,
        b,
        x,
        T,
        E,
        k,
        C,
        S,
        A,
        N,
        H,
        j,
        L,
        D,
        F,
        q,
        R,
        O = [];
      if ("SHA-224" !== n && "SHA-256" !== n)
        throw Error("Unexpected error in SHA-2 implementation");
      for (
        T = 64,
          k = 1,
          q = Number,
          C = v,
          S = m,
          A = y,
          N = h,
          H = g,
          j = d,
          L = p,
          F = f,
          D = l,
          R = w,
          n = t[0],
          r = t[1],
          i = t[2],
          o = t[3],
          a = t[4],
          s = t[5],
          u = t[6],
          c = t[7],
          E = 0;
        E < T;
        E += 1
      )
        16 > E
          ? ((x = E * k),
            (b = e.length <= x ? 0 : e[x]),
            (x = e.length <= x + 1 ? 0 : e[x + 1]),
            (O[E] = new q(b, x)))
          : (O[E] = S(H(O[E - 2]), O[E - 7], N(O[E - 15]), O[E - 16])),
          (b = A(c, L(a), D(a, s, u), R[E], O[E])),
          (x = C(j(n), F(n, r, i))),
          (c = u),
          (u = s),
          (s = a),
          (a = C(o, b)),
          (o = i),
          (i = r),
          (r = n),
          (n = C(b, x));
      return (
        (t[0] = C(n, t[0])),
        (t[1] = C(r, t[1])),
        (t[2] = C(i, t[2])),
        (t[3] = C(o, t[3])),
        (t[4] = C(a, t[4])),
        (t[5] = C(s, t[5])),
        (t[6] = C(u, t[6])),
        (t[7] = C(c, t[7])),
        t
      );
    }
    var w;
    (w = [
      1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
      2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
      1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
      264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
      2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
      113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
      1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
      3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
      430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
      1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
      2428436474, 2756734187, 3204031479, 3329325298,
    ]),
      "function" == typeof define && define.amd
        ? define(function () {
            return t;
          })
        : "undefined" != typeof exports
        ? ("undefined" != typeof module &&
            module.exports &&
            (module.exports = t),
          (exports = t))
        : (e.jsSHA = t);
  })(this),
  $(function () {
    var e = $(".example-tabs-i"),
      t = $(".example-content");
    e.on("click", function () {
      e.removeClass("active"),
        $(this).addClass("active"),
        t.removeClass("active"),
        $(".example-content_" + $(this).data("tab")).addClass("active");
    });
  }),
  $(function () {
    var e = $(".header-nav"),
      t = $("body"),
      n = function () {
        e.addClass("open"), t.on("click", r);
      },
      r = function () {
        e.removeClass("open"), t.off("click");
      };
    $(".header-nav-open").on("click", function (e) {
      e.stopPropagation(), n();
    });
  });
