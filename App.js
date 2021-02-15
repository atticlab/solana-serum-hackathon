/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-get-random-values';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

var solanaWeb3 = (function (t) {
  "use strict";
  var r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function n(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  function e(t, r) {
    return t((r = { exports: {} }), r.exports), r.exports;
  }
  var o = n(
    e(function (t, r) {
      (r.__esModule = !0),
        (r.default = function (t, r) {
          if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
        });
    })
    ),
    i = e(function (t) {
      var r = (t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
      "number" == typeof __g && (__g = r);
    }),
    u = Object.freeze({ default: i, __moduleExports: i }),
    a = e(function (t) {
      var r = (t.exports = { version: "2.5.5" });
      "number" == typeof __e && (__e = r);
    }),
    f = Object.freeze({ default: a, __moduleExports: a, version: a.version }),
    c = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    },
    s = Object.freeze({ default: c, __moduleExports: c }),
    l = (s && c) || s,
    h = function (t, r, n) {
      if ((l(t), void 0 === r)) return t;
      switch (n) {
        case 1:
          return function (n) {
            return t.call(r, n);
          };
        case 2:
          return function (n, e) {
            return t.call(r, n, e);
          };
        case 3:
          return function (n, e, o) {
            return t.call(r, n, e, o);
          };
      }
      return function () {
        return t.apply(r, arguments);
      };
    },
    p = Object.freeze({ default: h, __moduleExports: h }),
    v = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    y = Object.freeze({ default: v, __moduleExports: v }),
    d = (y && v) || y,
    g = function (t) {
      if (!d(t)) throw TypeError(t + " is not an object!");
      return t;
    },
    _ = Object.freeze({ default: g, __moduleExports: g }),
    b = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    w = Object.freeze({ default: b, __moduleExports: b }),
    m = (w && b) || w,
    E = !m(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
    x = Object.freeze({ default: E, __moduleExports: E }),
    A = (u && i) || u,
    j = A.document,
    O = d(j) && d(j.createElement),
    S = function (t) {
      return O ? j.createElement(t) : {};
    },
    R = Object.freeze({ default: S, __moduleExports: S }),
    k = (x && E) || x,
    T = (R && S) || R,
    z =
      !k &&
      !m(function () {
        return (
          7 !=
          Object.defineProperty(T("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    U = Object.freeze({ default: z, __moduleExports: z }),
    P = function (t, r) {
      if (!d(t)) return t;
      var n, e;
      if (r && "function" == typeof (n = t.toString) && !d((e = n.call(t)))) return e;
      if ("function" == typeof (n = t.valueOf) && !d((e = n.call(t)))) return e;
      if (!r && "function" == typeof (n = t.toString) && !d((e = n.call(t)))) return e;
      throw TypeError("Can't convert object to primitive value");
    },
    L = Object.freeze({ default: P, __moduleExports: P }),
    I = (_ && g) || _,
    M = (U && z) || U,
    B = (L && P) || L,
    C = Object.defineProperty,
    D = k
      ? Object.defineProperty
      : function (t, r, n) {
        if ((I(t), (r = B(r, !0)), I(n), M))
          try {
            return C(t, r, n);
          } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[r] = n.value), t;
      },
    F = { f: D },
    Y = Object.freeze({ default: F, __moduleExports: F, f: D }),
    N = function (t, r) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: r };
    },
    $ = Object.freeze({ default: N, __moduleExports: N }),
    W = (Y && F) || Y,
    q = ($ && N) || $,
    K = k
      ? function (t, r, n) {
        return W.f(t, r, q(1, n));
      }
      : function (t, r, n) {
        return (t[r] = n), t;
      },
    G = Object.freeze({ default: K, __moduleExports: K }),
    V = {}.hasOwnProperty,
    Z = function (t, r) {
      return V.call(t, r);
    },
    H = Object.freeze({ default: Z, __moduleExports: Z }),
    J = (f && a) || f,
    X = (p && h) || p,
    Q = (G && K) || G,
    tt = (H && Z) || H,
    rt = function (t, r, n) {
      var e,
        o,
        i,
        u = t & rt.F,
        a = t & rt.G,
        f = t & rt.S,
        c = t & rt.P,
        s = t & rt.B,
        l = t & rt.W,
        h = a ? J : J[r] || (J[r] = {}),
        p = h.prototype,
        v = a ? A : f ? A[r] : (A[r] || {}).prototype;
      for (e in (a && (n = r), n))
        ((o = !u && v && void 0 !== v[e]) && tt(h, e)) ||
        ((i = o ? v[e] : n[e]),
          (h[e] =
            a && "function" != typeof v[e]
              ? n[e]
              : s && o
              ? X(i, A)
              : l && v[e] == i
                ? (function (t) {
                  var r = function (r, n, e) {
                    if (this instanceof t) {
                      switch (arguments.length) {
                        case 0:
                          return new t();
                        case 1:
                          return new t(r);
                        case 2:
                          return new t(r, n);
                      }
                      return new t(r, n, e);
                    }
                    return t.apply(this, arguments);
                  };
                  return (r.prototype = t.prototype), r;
                })(i)
                : c && "function" == typeof i
                  ? X(Function.call, i)
                  : i),
        c && (((h.virtual || (h.virtual = {}))[e] = i), t & rt.R && p && !p[e] && Q(p, e, i)));
    };
  (rt.F = 1), (rt.G = 2), (rt.S = 4), (rt.P = 8), (rt.B = 16), (rt.W = 32), (rt.U = 64), (rt.R = 128);
  var nt = rt,
    et = Object.freeze({ default: nt, __moduleExports: nt }),
    ot = (et && nt) || et;
  ot(ot.S + ot.F * !k, "Object", { defineProperty: W.f });
  var it = J.Object,
    ut = function (t, r, n) {
      return it.defineProperty(t, r, n);
    },
    at = Object.freeze({ default: ut, __moduleExports: ut }),
    ft = (at && ut) || at,
    ct = e(function (t) {
      t.exports = { default: ft, __esModule: !0 };
    }),
    st = n(ct),
    lt = Object.freeze({ default: st, __moduleExports: ct }),
    ht = (lt && st) || lt,
    pt = n(
      e(function (t, r) {
        r.__esModule = !0;
        var n,
          e = (n = ht) && n.__esModule ? n : { default: n };
        r.default = (function () {
          function t(t, r) {
            for (var n = 0; r.length > n; n++) {
              var o = r[n];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), (0, e.default)(t, o.key, o);
            }
          }
          return function (r, n, e) {
            return n && t(r.prototype, n), e && t(r, e), r;
          };
        })();
      })
    ),
    vt = {},
    yt = Object.freeze({ default: vt }),
    dt = (yt && vt) || yt,
    gt = e(function (t) {
      !(function (t) {
        var r = function (t) {
            var r,
              n = new Float64Array(16);
            if (t) for (r = 0; t.length > r; r++) n[r] = t[r];
            return n;
          },
          n = function () {
            throw Error("no PRNG");
          },
          e = new Uint8Array(16),
          o = new Uint8Array(32);
        o[0] = 9;
        var i = r(),
          u = r([1]),
          a = r([56129, 1]),
          f = r([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
          c = r([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
          s = r([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
          l = r([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
          h = r([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function p(t, r, n, e) {
          (t[r] = (n >> 24) & 255), (t[r + 1] = (n >> 16) & 255), (t[r + 2] = (n >> 8) & 255), (t[r + 3] = 255 & n), (t[r + 4] = (e >> 24) & 255), (t[r + 5] = (e >> 16) & 255), (t[r + 6] = (e >> 8) & 255), (t[r + 7] = 255 & e);
        }
        function v(t, r, n, e, o) {
          var i,
            u = 0;
          for (i = 0; o > i; i++) u |= t[r + i] ^ n[e + i];
          return (1 & ((u - 1) >>> 8)) - 1;
        }
        function y(t, r, n, e) {
          return v(t, r, n, e, 16);
        }
        function d(t, r, n, e) {
          return v(t, r, n, e, 32);
        }
        function g(t, r, n, e) {
          !(function (t, r, n, e) {
            for (
              var o,
                i = (255 & e[0]) | ((255 & e[1]) << 8) | ((255 & e[2]) << 16) | ((255 & e[3]) << 24),
                u = (255 & n[0]) | ((255 & n[1]) << 8) | ((255 & n[2]) << 16) | ((255 & n[3]) << 24),
                a = (255 & n[4]) | ((255 & n[5]) << 8) | ((255 & n[6]) << 16) | ((255 & n[7]) << 24),
                f = (255 & n[8]) | ((255 & n[9]) << 8) | ((255 & n[10]) << 16) | ((255 & n[11]) << 24),
                c = (255 & n[12]) | ((255 & n[13]) << 8) | ((255 & n[14]) << 16) | ((255 & n[15]) << 24),
                s = (255 & e[4]) | ((255 & e[5]) << 8) | ((255 & e[6]) << 16) | ((255 & e[7]) << 24),
                l = (255 & r[0]) | ((255 & r[1]) << 8) | ((255 & r[2]) << 16) | ((255 & r[3]) << 24),
                h = (255 & r[4]) | ((255 & r[5]) << 8) | ((255 & r[6]) << 16) | ((255 & r[7]) << 24),
                p = (255 & r[8]) | ((255 & r[9]) << 8) | ((255 & r[10]) << 16) | ((255 & r[11]) << 24),
                v = (255 & r[12]) | ((255 & r[13]) << 8) | ((255 & r[14]) << 16) | ((255 & r[15]) << 24),
                y = (255 & e[8]) | ((255 & e[9]) << 8) | ((255 & e[10]) << 16) | ((255 & e[11]) << 24),
                d = (255 & n[16]) | ((255 & n[17]) << 8) | ((255 & n[18]) << 16) | ((255 & n[19]) << 24),
                g = (255 & n[20]) | ((255 & n[21]) << 8) | ((255 & n[22]) << 16) | ((255 & n[23]) << 24),
                _ = (255 & n[24]) | ((255 & n[25]) << 8) | ((255 & n[26]) << 16) | ((255 & n[27]) << 24),
                b = (255 & n[28]) | ((255 & n[29]) << 8) | ((255 & n[30]) << 16) | ((255 & n[31]) << 24),
                w = (255 & e[12]) | ((255 & e[13]) << 8) | ((255 & e[14]) << 16) | ((255 & e[15]) << 24),
                m = i,
                E = u,
                x = a,
                A = f,
                j = c,
                O = s,
                S = l,
                R = h,
                k = p,
                T = v,
                z = y,
                U = d,
                P = g,
                L = _,
                I = b,
                M = w,
                B = 0;
              20 > B;
              B += 2
            )
              (m ^= ((o = ((P ^= ((o = ((k ^= ((o = ((j ^= ((o = (m + P) | 0) << 7) | (o >>> 25)) + m) | 0) << 9) | (o >>> 23)) + j) | 0) << 13) | (o >>> 19)) + k) | 0) << 18) | (o >>> 14)),
                (O ^= ((o = ((E ^= ((o = ((L ^= ((o = ((T ^= ((o = (O + E) | 0) << 7) | (o >>> 25)) + O) | 0) << 9) | (o >>> 23)) + T) | 0) << 13) | (o >>> 19)) + L) | 0) << 18) | (o >>> 14)),
                (z ^= ((o = ((S ^= ((o = ((x ^= ((o = ((I ^= ((o = (z + S) | 0) << 7) | (o >>> 25)) + z) | 0) << 9) | (o >>> 23)) + I) | 0) << 13) | (o >>> 19)) + x) | 0) << 18) | (o >>> 14)),
                (M ^= ((o = ((U ^= ((o = ((R ^= ((o = ((A ^= ((o = (M + U) | 0) << 7) | (o >>> 25)) + M) | 0) << 9) | (o >>> 23)) + A) | 0) << 13) | (o >>> 19)) + R) | 0) << 18) | (o >>> 14)),
                (m ^= ((o = ((A ^= ((o = ((x ^= ((o = ((E ^= ((o = (m + A) | 0) << 7) | (o >>> 25)) + m) | 0) << 9) | (o >>> 23)) + E) | 0) << 13) | (o >>> 19)) + x) | 0) << 18) | (o >>> 14)),
                (O ^= ((o = ((j ^= ((o = ((R ^= ((o = ((S ^= ((o = (O + j) | 0) << 7) | (o >>> 25)) + O) | 0) << 9) | (o >>> 23)) + S) | 0) << 13) | (o >>> 19)) + R) | 0) << 18) | (o >>> 14)),
                (z ^= ((o = ((T ^= ((o = ((k ^= ((o = ((U ^= ((o = (z + T) | 0) << 7) | (o >>> 25)) + z) | 0) << 9) | (o >>> 23)) + U) | 0) << 13) | (o >>> 19)) + k) | 0) << 18) | (o >>> 14)),
                (M ^= ((o = ((I ^= ((o = ((L ^= ((o = ((P ^= ((o = (M + I) | 0) << 7) | (o >>> 25)) + M) | 0) << 9) | (o >>> 23)) + P) | 0) << 13) | (o >>> 19)) + L) | 0) << 18) | (o >>> 14));
            (E = (E + u) | 0),
              (x = (x + a) | 0),
              (A = (A + f) | 0),
              (j = (j + c) | 0),
              (O = (O + s) | 0),
              (S = (S + l) | 0),
              (R = (R + h) | 0),
              (k = (k + p) | 0),
              (T = (T + v) | 0),
              (z = (z + y) | 0),
              (U = (U + d) | 0),
              (P = (P + g) | 0),
              (L = (L + _) | 0),
              (I = (I + b) | 0),
              (M = (M + w) | 0),
              (t[0] = ((m = (m + i) | 0) >>> 0) & 255),
              (t[1] = (m >>> 8) & 255),
              (t[2] = (m >>> 16) & 255),
              (t[3] = (m >>> 24) & 255),
              (t[4] = (E >>> 0) & 255),
              (t[5] = (E >>> 8) & 255),
              (t[6] = (E >>> 16) & 255),
              (t[7] = (E >>> 24) & 255),
              (t[8] = (x >>> 0) & 255),
              (t[9] = (x >>> 8) & 255),
              (t[10] = (x >>> 16) & 255),
              (t[11] = (x >>> 24) & 255),
              (t[12] = (A >>> 0) & 255),
              (t[13] = (A >>> 8) & 255),
              (t[14] = (A >>> 16) & 255),
              (t[15] = (A >>> 24) & 255),
              (t[16] = (j >>> 0) & 255),
              (t[17] = (j >>> 8) & 255),
              (t[18] = (j >>> 16) & 255),
              (t[19] = (j >>> 24) & 255),
              (t[20] = (O >>> 0) & 255),
              (t[21] = (O >>> 8) & 255),
              (t[22] = (O >>> 16) & 255),
              (t[23] = (O >>> 24) & 255),
              (t[24] = (S >>> 0) & 255),
              (t[25] = (S >>> 8) & 255),
              (t[26] = (S >>> 16) & 255),
              (t[27] = (S >>> 24) & 255),
              (t[28] = (R >>> 0) & 255),
              (t[29] = (R >>> 8) & 255),
              (t[30] = (R >>> 16) & 255),
              (t[31] = (R >>> 24) & 255),
              (t[32] = (k >>> 0) & 255),
              (t[33] = (k >>> 8) & 255),
              (t[34] = (k >>> 16) & 255),
              (t[35] = (k >>> 24) & 255),
              (t[36] = (T >>> 0) & 255),
              (t[37] = (T >>> 8) & 255),
              (t[38] = (T >>> 16) & 255),
              (t[39] = (T >>> 24) & 255),
              (t[40] = (z >>> 0) & 255),
              (t[41] = (z >>> 8) & 255),
              (t[42] = (z >>> 16) & 255),
              (t[43] = (z >>> 24) & 255),
              (t[44] = (U >>> 0) & 255),
              (t[45] = (U >>> 8) & 255),
              (t[46] = (U >>> 16) & 255),
              (t[47] = (U >>> 24) & 255),
              (t[48] = (P >>> 0) & 255),
              (t[49] = (P >>> 8) & 255),
              (t[50] = (P >>> 16) & 255),
              (t[51] = (P >>> 24) & 255),
              (t[52] = (L >>> 0) & 255),
              (t[53] = (L >>> 8) & 255),
              (t[54] = (L >>> 16) & 255),
              (t[55] = (L >>> 24) & 255),
              (t[56] = (I >>> 0) & 255),
              (t[57] = (I >>> 8) & 255),
              (t[58] = (I >>> 16) & 255),
              (t[59] = (I >>> 24) & 255),
              (t[60] = (M >>> 0) & 255),
              (t[61] = (M >>> 8) & 255),
              (t[62] = (M >>> 16) & 255),
              (t[63] = (M >>> 24) & 255);
          })(t, r, n, e);
        }
        function _(t, r, n, e) {
          !(function (t, r, n, e) {
            for (
              var o,
                i = (255 & e[0]) | ((255 & e[1]) << 8) | ((255 & e[2]) << 16) | ((255 & e[3]) << 24),
                u = (255 & n[0]) | ((255 & n[1]) << 8) | ((255 & n[2]) << 16) | ((255 & n[3]) << 24),
                a = (255 & n[4]) | ((255 & n[5]) << 8) | ((255 & n[6]) << 16) | ((255 & n[7]) << 24),
                f = (255 & n[8]) | ((255 & n[9]) << 8) | ((255 & n[10]) << 16) | ((255 & n[11]) << 24),
                c = (255 & n[12]) | ((255 & n[13]) << 8) | ((255 & n[14]) << 16) | ((255 & n[15]) << 24),
                s = (255 & e[4]) | ((255 & e[5]) << 8) | ((255 & e[6]) << 16) | ((255 & e[7]) << 24),
                l = (255 & r[0]) | ((255 & r[1]) << 8) | ((255 & r[2]) << 16) | ((255 & r[3]) << 24),
                h = (255 & r[4]) | ((255 & r[5]) << 8) | ((255 & r[6]) << 16) | ((255 & r[7]) << 24),
                p = (255 & r[8]) | ((255 & r[9]) << 8) | ((255 & r[10]) << 16) | ((255 & r[11]) << 24),
                v = (255 & r[12]) | ((255 & r[13]) << 8) | ((255 & r[14]) << 16) | ((255 & r[15]) << 24),
                y = (255 & e[8]) | ((255 & e[9]) << 8) | ((255 & e[10]) << 16) | ((255 & e[11]) << 24),
                d = (255 & n[16]) | ((255 & n[17]) << 8) | ((255 & n[18]) << 16) | ((255 & n[19]) << 24),
                g = (255 & n[20]) | ((255 & n[21]) << 8) | ((255 & n[22]) << 16) | ((255 & n[23]) << 24),
                _ = (255 & n[24]) | ((255 & n[25]) << 8) | ((255 & n[26]) << 16) | ((255 & n[27]) << 24),
                b = (255 & n[28]) | ((255 & n[29]) << 8) | ((255 & n[30]) << 16) | ((255 & n[31]) << 24),
                w = (255 & e[12]) | ((255 & e[13]) << 8) | ((255 & e[14]) << 16) | ((255 & e[15]) << 24),
                m = 0;
              20 > m;
              m += 2
            )
              (i ^= ((o = ((g ^= ((o = ((p ^= ((o = ((c ^= ((o = (i + g) | 0) << 7) | (o >>> 25)) + i) | 0) << 9) | (o >>> 23)) + c) | 0) << 13) | (o >>> 19)) + p) | 0) << 18) | (o >>> 14)),
                (s ^= ((o = ((u ^= ((o = ((_ ^= ((o = ((v ^= ((o = (s + u) | 0) << 7) | (o >>> 25)) + s) | 0) << 9) | (o >>> 23)) + v) | 0) << 13) | (o >>> 19)) + _) | 0) << 18) | (o >>> 14)),
                (y ^= ((o = ((l ^= ((o = ((a ^= ((o = ((b ^= ((o = (y + l) | 0) << 7) | (o >>> 25)) + y) | 0) << 9) | (o >>> 23)) + b) | 0) << 13) | (o >>> 19)) + a) | 0) << 18) | (o >>> 14)),
                (w ^= ((o = ((d ^= ((o = ((h ^= ((o = ((f ^= ((o = (w + d) | 0) << 7) | (o >>> 25)) + w) | 0) << 9) | (o >>> 23)) + f) | 0) << 13) | (o >>> 19)) + h) | 0) << 18) | (o >>> 14)),
                (i ^= ((o = ((f ^= ((o = ((a ^= ((o = ((u ^= ((o = (i + f) | 0) << 7) | (o >>> 25)) + i) | 0) << 9) | (o >>> 23)) + u) | 0) << 13) | (o >>> 19)) + a) | 0) << 18) | (o >>> 14)),
                (s ^= ((o = ((c ^= ((o = ((h ^= ((o = ((l ^= ((o = (s + c) | 0) << 7) | (o >>> 25)) + s) | 0) << 9) | (o >>> 23)) + l) | 0) << 13) | (o >>> 19)) + h) | 0) << 18) | (o >>> 14)),
                (y ^= ((o = ((v ^= ((o = ((p ^= ((o = ((d ^= ((o = (y + v) | 0) << 7) | (o >>> 25)) + y) | 0) << 9) | (o >>> 23)) + d) | 0) << 13) | (o >>> 19)) + p) | 0) << 18) | (o >>> 14)),
                (w ^= ((o = ((b ^= ((o = ((_ ^= ((o = ((g ^= ((o = (w + b) | 0) << 7) | (o >>> 25)) + w) | 0) << 9) | (o >>> 23)) + g) | 0) << 13) | (o >>> 19)) + _) | 0) << 18) | (o >>> 14));
            (t[0] = (i >>> 0) & 255),
              (t[1] = (i >>> 8) & 255),
              (t[2] = (i >>> 16) & 255),
              (t[3] = (i >>> 24) & 255),
              (t[4] = (s >>> 0) & 255),
              (t[5] = (s >>> 8) & 255),
              (t[6] = (s >>> 16) & 255),
              (t[7] = (s >>> 24) & 255),
              (t[8] = (y >>> 0) & 255),
              (t[9] = (y >>> 8) & 255),
              (t[10] = (y >>> 16) & 255),
              (t[11] = (y >>> 24) & 255),
              (t[12] = (w >>> 0) & 255),
              (t[13] = (w >>> 8) & 255),
              (t[14] = (w >>> 16) & 255),
              (t[15] = (w >>> 24) & 255),
              (t[16] = (l >>> 0) & 255),
              (t[17] = (l >>> 8) & 255),
              (t[18] = (l >>> 16) & 255),
              (t[19] = (l >>> 24) & 255),
              (t[20] = (h >>> 0) & 255),
              (t[21] = (h >>> 8) & 255),
              (t[22] = (h >>> 16) & 255),
              (t[23] = (h >>> 24) & 255),
              (t[24] = (p >>> 0) & 255),
              (t[25] = (p >>> 8) & 255),
              (t[26] = (p >>> 16) & 255),
              (t[27] = (p >>> 24) & 255),
              (t[28] = (v >>> 0) & 255),
              (t[29] = (v >>> 8) & 255),
              (t[30] = (v >>> 16) & 255),
              (t[31] = (v >>> 24) & 255);
          })(t, r, n, e);
        }
        var b = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
        function w(t, r, n, e, o, i, u) {
          var a,
            f,
            c = new Uint8Array(16),
            s = new Uint8Array(64);
          for (f = 0; 16 > f; f++) c[f] = 0;
          for (f = 0; 8 > f; f++) c[f] = i[f];
          for (; o >= 64; ) {
            for (g(s, c, u, b), f = 0; 64 > f; f++) t[r + f] = n[e + f] ^ s[f];
            for (a = 1, f = 8; 16 > f; f++) (c[f] = 255 & (a = (a + (255 & c[f])) | 0)), (a >>>= 8);
            (o -= 64), (r += 64), (e += 64);
          }
          if (o > 0) for (g(s, c, u, b), f = 0; o > f; f++) t[r + f] = n[e + f] ^ s[f];
          return 0;
        }
        function m(t, r, n, e, o) {
          var i,
            u,
            a = new Uint8Array(16),
            f = new Uint8Array(64);
          for (u = 0; 16 > u; u++) a[u] = 0;
          for (u = 0; 8 > u; u++) a[u] = e[u];
          for (; n >= 64; ) {
            for (g(f, a, o, b), u = 0; 64 > u; u++) t[r + u] = f[u];
            for (i = 1, u = 8; 16 > u; u++) (a[u] = 255 & (i = (i + (255 & a[u])) | 0)), (i >>>= 8);
            (n -= 64), (r += 64);
          }
          if (n > 0) for (g(f, a, o, b), u = 0; n > u; u++) t[r + u] = f[u];
          return 0;
        }
        function E(t, r, n, e, o) {
          var i = new Uint8Array(32);
          _(i, e, o, b);
          for (var u = new Uint8Array(8), a = 0; 8 > a; a++) u[a] = e[a + 16];
          return m(t, r, n, u, i);
        }
        function x(t, r, n, e, o, i, u) {
          var a = new Uint8Array(32);
          _(a, i, u, b);
          for (var f = new Uint8Array(8), c = 0; 8 > c; c++) f[c] = i[c + 16];
          return w(t, r, n, e, o, f, a);
        }
        var A = function (t) {
          var r, n, e, o, i, u, a, f;
          (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.leftover = 0),
            (this.fin = 0),
            (this.r[0] = 8191 & (r = (255 & t[0]) | ((255 & t[1]) << 8))),
            (this.r[1] = 8191 & ((r >>> 13) | ((n = (255 & t[2]) | ((255 & t[3]) << 8)) << 3))),
            (this.r[2] = 7939 & ((n >>> 10) | ((e = (255 & t[4]) | ((255 & t[5]) << 8)) << 6))),
            (this.r[3] = 8191 & ((e >>> 7) | ((o = (255 & t[6]) | ((255 & t[7]) << 8)) << 9))),
            (this.r[4] = 255 & ((o >>> 4) | ((i = (255 & t[8]) | ((255 & t[9]) << 8)) << 12))),
            (this.r[5] = (i >>> 1) & 8190),
            (this.r[6] = 8191 & ((i >>> 14) | ((u = (255 & t[10]) | ((255 & t[11]) << 8)) << 2))),
            (this.r[7] = 8065 & ((u >>> 11) | ((a = (255 & t[12]) | ((255 & t[13]) << 8)) << 5))),
            (this.r[8] = 8191 & ((a >>> 8) | ((f = (255 & t[14]) | ((255 & t[15]) << 8)) << 8))),
            (this.r[9] = (f >>> 5) & 127),
            (this.pad[0] = (255 & t[16]) | ((255 & t[17]) << 8)),
            (this.pad[1] = (255 & t[18]) | ((255 & t[19]) << 8)),
            (this.pad[2] = (255 & t[20]) | ((255 & t[21]) << 8)),
            (this.pad[3] = (255 & t[22]) | ((255 & t[23]) << 8)),
            (this.pad[4] = (255 & t[24]) | ((255 & t[25]) << 8)),
            (this.pad[5] = (255 & t[26]) | ((255 & t[27]) << 8)),
            (this.pad[6] = (255 & t[28]) | ((255 & t[29]) << 8)),
            (this.pad[7] = (255 & t[30]) | ((255 & t[31]) << 8));
        };
        function j(t, r, n, e, o, i) {
          var u = new A(i);
          return u.update(n, e, o), u.finish(t, r), 0;
        }
        function O(t, r, n, e, o, i) {
          var u = new Uint8Array(16);
          return j(u, 0, n, e, o, i), y(t, r, u, 0);
        }
        function S(t, r, n, e, o) {
          var i;
          if (32 > n) return -1;
          for (x(t, 0, r, 0, n, e, o), j(t, 16, t, 32, n - 32, t), i = 0; 16 > i; i++) t[i] = 0;
          return 0;
        }
        function R(t, r, n, e, o) {
          var i,
            u = new Uint8Array(32);
          if (32 > n) return -1;
          if ((E(u, 0, 32, e, o), 0 !== O(r, 16, r, 32, n - 32, u))) return -1;
          for (x(t, 0, r, 0, n, e, o), i = 0; 32 > i; i++) t[i] = 0;
          return 0;
        }
        function k(t, r) {
          var n;
          for (n = 0; 16 > n; n++) t[n] = 0 | r[n];
        }
        function T(t) {
          var r,
            n,
            e = 1;
          for (r = 0; 16 > r; r++) t[r] = (n = t[r] + e + 65535) - 65536 * (e = Math.floor(n / 65536));
          t[0] += e - 1 + 37 * (e - 1);
        }
        function z(t, r, n) {
          for (var e, o = ~(n - 1), i = 0; 16 > i; i++) (t[i] ^= e = o & (t[i] ^ r[i])), (r[i] ^= e);
        }
        function U(t, n) {
          var e,
            o,
            i,
            u = r(),
            a = r();
          for (e = 0; 16 > e; e++) a[e] = n[e];
          for (T(a), T(a), T(a), o = 0; 2 > o; o++) {
            for (u[0] = a[0] - 65517, e = 1; 15 > e; e++) (u[e] = a[e] - 65535 - ((u[e - 1] >> 16) & 1)), (u[e - 1] &= 65535);
            (u[15] = a[15] - 32767 - ((u[14] >> 16) & 1)), (i = (u[15] >> 16) & 1), (u[14] &= 65535), z(a, u, 1 - i);
          }
          for (e = 0; 16 > e; e++) (t[2 * e] = 255 & a[e]), (t[2 * e + 1] = a[e] >> 8);
        }
        function P(t, r) {
          var n = new Uint8Array(32),
            e = new Uint8Array(32);
          return U(n, t), U(e, r), d(n, 0, e, 0);
        }
        function L(t) {
          var r = new Uint8Array(32);
          return U(r, t), 1 & r[0];
        }
        function I(t, r) {
          var n;
          for (n = 0; 16 > n; n++) t[n] = r[2 * n] + (r[2 * n + 1] << 8);
          t[15] &= 32767;
        }
        function M(t, r, n) {
          for (var e = 0; 16 > e; e++) t[e] = r[e] + n[e];
        }
        function B(t, r, n) {
          for (var e = 0; 16 > e; e++) t[e] = r[e] - n[e];
        }
        function C(t, r, n) {
          var e,
            o,
            i = 0,
            u = 0,
            a = 0,
            f = 0,
            c = 0,
            s = 0,
            l = 0,
            h = 0,
            p = 0,
            v = 0,
            y = 0,
            d = 0,
            g = 0,
            _ = 0,
            b = 0,
            w = 0,
            m = 0,
            E = 0,
            x = 0,
            A = 0,
            j = 0,
            O = 0,
            S = 0,
            R = 0,
            k = 0,
            T = 0,
            z = 0,
            U = 0,
            P = 0,
            L = 0,
            I = 0,
            M = n[0],
            B = n[1],
            C = n[2],
            D = n[3],
            F = n[4],
            Y = n[5],
            N = n[6],
            $ = n[7],
            W = n[8],
            q = n[9],
            K = n[10],
            G = n[11],
            V = n[12],
            Z = n[13],
            H = n[14],
            J = n[15];
          (i += (e = r[0]) * M),
            (u += e * B),
            (a += e * C),
            (f += e * D),
            (c += e * F),
            (s += e * Y),
            (l += e * N),
            (h += e * $),
            (p += e * W),
            (v += e * q),
            (y += e * K),
            (d += e * G),
            (g += e * V),
            (_ += e * Z),
            (b += e * H),
            (w += e * J),
            (u += (e = r[1]) * M),
            (a += e * B),
            (f += e * C),
            (c += e * D),
            (s += e * F),
            (l += e * Y),
            (h += e * N),
            (p += e * $),
            (v += e * W),
            (y += e * q),
            (d += e * K),
            (g += e * G),
            (_ += e * V),
            (b += e * Z),
            (w += e * H),
            (m += e * J),
            (a += (e = r[2]) * M),
            (f += e * B),
            (c += e * C),
            (s += e * D),
            (l += e * F),
            (h += e * Y),
            (p += e * N),
            (v += e * $),
            (y += e * W),
            (d += e * q),
            (g += e * K),
            (_ += e * G),
            (b += e * V),
            (w += e * Z),
            (m += e * H),
            (E += e * J),
            (f += (e = r[3]) * M),
            (c += e * B),
            (s += e * C),
            (l += e * D),
            (h += e * F),
            (p += e * Y),
            (v += e * N),
            (y += e * $),
            (d += e * W),
            (g += e * q),
            (_ += e * K),
            (b += e * G),
            (w += e * V),
            (m += e * Z),
            (E += e * H),
            (x += e * J),
            (c += (e = r[4]) * M),
            (s += e * B),
            (l += e * C),
            (h += e * D),
            (p += e * F),
            (v += e * Y),
            (y += e * N),
            (d += e * $),
            (g += e * W),
            (_ += e * q),
            (b += e * K),
            (w += e * G),
            (m += e * V),
            (E += e * Z),
            (x += e * H),
            (A += e * J),
            (s += (e = r[5]) * M),
            (l += e * B),
            (h += e * C),
            (p += e * D),
            (v += e * F),
            (y += e * Y),
            (d += e * N),
            (g += e * $),
            (_ += e * W),
            (b += e * q),
            (w += e * K),
            (m += e * G),
            (E += e * V),
            (x += e * Z),
            (A += e * H),
            (j += e * J),
            (l += (e = r[6]) * M),
            (h += e * B),
            (p += e * C),
            (v += e * D),
            (y += e * F),
          (d += e * Y),
          (g += e * N),
          (_ += e * $),
          (b += e * W),
          (w += e * q),
          (m += e * K),
          (E += e * G),
          (x += e * V),
          (A += e * Z),
          (j += e * H),
          (O += e * J),
          (h += (e = r[7]) * M),
          (p += e * B),
          (v += e * C),
          (y += e * D),
          (d += e * F),
          (g += e * Y),
          (_ += e * N),
          (b += e * $),
          (w += e * W),
          (m += e * q),
          (E += e * K),
          (x += e * G),
          (A += e * V),
          (j += e * Z),
          (O += e * H),
          (S += e * J),
          (p += (e = r[8]) * M),
          (v += e * B),
          (y += e * C),
          (d += e * D),
          (g += e * F),
          (_ += e * Y),
          (b += e * N),
          (w += e * $),
          (m += e * W),
          (E += e * q),
          (x += e * K),
          (A += e * G),
          (j += e * V),
          (O += e * Z),
          (S += e * H),
          (R += e * J),
          (v += (e = r[9]) * M),
          (y += e * B),
          (d += e * C),
          (g += e * D),
          (_ += e * F),
          (b += e * Y),
          (w += e * N),
          (m += e * $),
          (E += e * W),
          (x += e * q),
          (A += e * K),
          (j += e * G),
          (O += e * V),
          (S += e * Z),
          (R += e * H),
          (k += e * J),
          (y += (e = r[10]) * M),
          (d += e * B),
          (g += e * C),
          (_ += e * D),
          (b += e * F),
          (w += e * Y),
          (m += e * N),
          (E += e * $),
          (x += e * W),
          (A += e * q),
          (j += e * K),
          (O += e * G),
          (S += e * V),
          (R += e * Z),
          (k += e * H),
          (T += e * J),
          (d += (e = r[11]) * M),
          (g += e * B),
          (_ += e * C),
          (b += e * D),
          (w += e * F),
          (m += e * Y),
          (E += e * N),
          (x += e * $),
          (A += e * W),
          (j += e * q),
          (O += e * K),
          (S += e * G),
          (R += e * V),
          (k += e * Z),
          (T += e * H),
          (z += e * J),
          (g += (e = r[12]) * M),
          (_ += e * B),
          (b += e * C),
          (w += e * D),
          (m += e * F),
          (E += e * Y),
          (x += e * N),
          (A += e * $),
          (j += e * W),
          (O += e * q),
          (S += e * K),
          (R += e * G),
          (k += e * V),
          (T += e * Z),
          (z += e * H),
          (U += e * J),
          (_ += (e = r[13]) * M),
          (b += e * B),
          (w += e * C),
          (m += e * D),
          (E += e * F),
          (x += e * Y),
          (A += e * N),
          (j += e * $),
          (O += e * W),
          (S += e * q),
          (R += e * K),
          (k += e * G),
          (T += e * V),
          (z += e * Z),
          (U += e * H),
          (P += e * J),
          (b += (e = r[14]) * M),
          (w += e * B),
          (m += e * C),
          (E += e * D),
          (x += e * F),
          (A += e * Y),
          (j += e * N),
          (O += e * $),
          (S += e * W),
          (R += e * q),
          (k += e * K),
          (T += e * G),
          (z += e * V),
          (U += e * Z),
          (P += e * H),
          (L += e * J),
          (w += (e = r[15]) * M),
          (u += 38 * (E += e * C)),
          (a += 38 * (x += e * D)),
          (f += 38 * (A += e * F)),
          (c += 38 * (j += e * Y)),
          (s += 38 * (O += e * N)),
          (l += 38 * (S += e * $)),
          (h += 38 * (R += e * W)),
          (p += 38 * (k += e * q)),
          (v += 38 * (T += e * K)),
          (y += 38 * (z += e * G)),
          (d += 38 * (U += e * V)),
          (g += 38 * (P += e * Z)),
          (_ += 38 * (L += e * H)),
          (b += 38 * (I += e * J)),
          (i = (e = (i += 38 * (m += e * B)) + (o = 1) + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (u = (e = u + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (a = (e = a + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (f = (e = f + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (c = (e = c + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (s = (e = s + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (l = (e = l + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (h = (e = h + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (p = (e = p + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (v = (e = v + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (y = (e = y + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (d = (e = d + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (g = (e = g + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (_ = (e = _ + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (b = (e = b + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (w = (e = w + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (i = (e = (i += o - 1 + 37 * (o - 1)) + (o = 1) + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (u = (e = u + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (a = (e = a + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (f = (e = f + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (c = (e = c + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (s = (e = s + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (l = (e = l + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (h = (e = h + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (p = (e = p + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (v = (e = v + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (y = (e = y + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (d = (e = d + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (g = (e = g + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (_ = (e = _ + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (b = (e = b + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (w = (e = w + o + 65535) - 65536 * (o = Math.floor(e / 65536))),
          (t[0] = i += o - 1 + 37 * (o - 1)),
          (t[1] = u),
          (t[2] = a),
          (t[3] = f),
          (t[4] = c),
          (t[5] = s),
          (t[6] = l),
          (t[7] = h),
          (t[8] = p),
          (t[9] = v),
          (t[10] = y),
          (t[11] = d),
          (t[12] = g),
          (t[13] = _),
          (t[14] = b),
          (t[15] = w);
        }
        function D(t, r) {
          C(t, r, r);
        }
        function F(t, n) {
          var e,
            o = r();
          for (e = 0; 16 > e; e++) o[e] = n[e];
          for (e = 253; e >= 0; e--) D(o, o), 2 !== e && 4 !== e && C(o, o, n);
          for (e = 0; 16 > e; e++) t[e] = o[e];
        }
        function Y(t, n, e) {
          var o,
            i,
            u = new Uint8Array(32),
            f = new Float64Array(80),
            c = r(),
            s = r(),
            l = r(),
            h = r(),
            p = r(),
            v = r();
          for (i = 0; 31 > i; i++) u[i] = n[i];
          for (u[31] = (127 & n[31]) | 64, u[0] &= 248, I(f, e), i = 0; 16 > i; i++) (s[i] = f[i]), (h[i] = c[i] = l[i] = 0);
          for (c[0] = h[0] = 1, i = 254; i >= 0; --i)
            z(c, s, (o = (u[i >>> 3] >>> (7 & i)) & 1)),
              z(l, h, o),
              M(p, c, l),
              B(c, c, l),
              M(l, s, h),
              B(s, s, h),
              D(h, p),
              D(v, c),
              C(c, l, c),
              C(l, s, p),
              M(p, c, l),
              B(c, c, l),
              D(s, c),
              B(l, h, v),
              C(c, l, a),
              M(c, c, h),
              C(l, l, c),
              C(c, h, v),
              C(h, s, f),
              D(s, p),
              z(c, s, o),
              z(l, h, o);
          for (i = 0; 16 > i; i++) (f[i + 16] = c[i]), (f[i + 32] = l[i]), (f[i + 48] = s[i]), (f[i + 64] = h[i]);
          var y = f.subarray(32),
            d = f.subarray(16);
          return F(y, y), C(d, d, y), U(t, d), 0;
        }
        function N(t, r) {
          return Y(t, r, o);
        }
        function $(t, r) {
          return n(r, 32), N(t, r);
        }
        function W(t, r, n) {
          var o = new Uint8Array(32);
          return Y(o, n, r), _(t, e, o, b);
        }
        (A.prototype.blocks = function (t, r, n) {
          for (
            var e,
              o,
              i,
              u,
              a,
              f,
              c,
              s,
              l,
              h,
              p,
              v,
              y,
              d,
              g,
              _,
              b,
              w,
              m,
              E = this.fin ? 0 : 2048,
              x = this.h[0],
              A = this.h[1],
              j = this.h[2],
              O = this.h[3],
              S = this.h[4],
              R = this.h[5],
              k = this.h[6],
              T = this.h[7],
              z = this.h[8],
              U = this.h[9],
              P = this.r[0],
              L = this.r[1],
              I = this.r[2],
              M = this.r[3],
              B = this.r[4],
              C = this.r[5],
              D = this.r[6],
              F = this.r[7],
              Y = this.r[8],
              N = this.r[9];
            n >= 16;
          
          )
            (h = l = 0),
              (h += (x += 8191 & (e = (255 & t[r + 0]) | ((255 & t[r + 1]) << 8))) * P),
              (h += (A += 8191 & ((e >>> 13) | ((o = (255 & t[r + 2]) | ((255 & t[r + 3]) << 8)) << 3))) * (5 * N)),
              (h += (j += 8191 & ((o >>> 10) | ((i = (255 & t[r + 4]) | ((255 & t[r + 5]) << 8)) << 6))) * (5 * Y)),
              (h += (O += 8191 & ((i >>> 7) | ((u = (255 & t[r + 6]) | ((255 & t[r + 7]) << 8)) << 9))) * (5 * F)),
              (l = (h += (S += 8191 & ((u >>> 4) | ((a = (255 & t[r + 8]) | ((255 & t[r + 9]) << 8)) << 12))) * (5 * D)) >>> 13),
              (h &= 8191),
              (h += (R += (a >>> 1) & 8191) * (5 * C)),
              (h += (k += 8191 & ((a >>> 14) | ((f = (255 & t[r + 10]) | ((255 & t[r + 11]) << 8)) << 2))) * (5 * B)),
              (h += (T += 8191 & ((f >>> 11) | ((c = (255 & t[r + 12]) | ((255 & t[r + 13]) << 8)) << 5))) * (5 * M)),
              (h += (z += 8191 & ((c >>> 8) | ((s = (255 & t[r + 14]) | ((255 & t[r + 15]) << 8)) << 8))) * (5 * I)),
              (p = l += (h += (U += (s >>> 5) | E) * (5 * L)) >>> 13),
              (p += x * L),
              (p += A * P),
              (p += j * (5 * N)),
              (p += O * (5 * Y)),
              (l = (p += S * (5 * F)) >>> 13),
              (p &= 8191),
              (p += R * (5 * D)),
              (p += k * (5 * C)),
              (p += T * (5 * B)),
              (p += z * (5 * M)),
              (l += (p += U * (5 * I)) >>> 13),
              (p &= 8191),
              (v = l),
              (v += x * I),
              (v += A * L),
              (v += j * P),
              (v += O * (5 * N)),
              (l = (v += S * (5 * Y)) >>> 13),
              (v &= 8191),
              (v += R * (5 * F)),
              (v += k * (5 * D)),
              (v += T * (5 * C)),
              (v += z * (5 * B)),
              (y = l += (v += U * (5 * M)) >>> 13),
              (y += x * M),
              (y += A * I),
              (y += j * L),
              (y += O * P),
              (l = (y += S * (5 * N)) >>> 13),
              (y &= 8191),
              (y += R * (5 * Y)),
              (y += k * (5 * F)),
              (y += T * (5 * D)),
              (y += z * (5 * C)),
              (d = l += (y += U * (5 * B)) >>> 13),
              (d += x * B),
              (d += A * M),
              (d += j * I),
              (d += O * L),
              (l = (d += S * P) >>> 13),
              (d &= 8191),
              (d += R * (5 * N)),
              (d += k * (5 * Y)),
              (d += T * (5 * F)),
              (d += z * (5 * D)),
              (g = l += (d += U * (5 * C)) >>> 13),
              (g += x * C),
              (g += A * B),
              (g += j * M),
              (g += O * I),
              (l = (g += S * L) >>> 13),
              (g &= 8191),
              (g += R * P),
              (g += k * (5 * N)),
              (g += T * (5 * Y)),
              (g += z * (5 * F)),
              (_ = l += (g += U * (5 * D)) >>> 13),
              (_ += x * D),
              (_ += A * C),
              (_ += j * B),
              (_ += O * M),
              (l = (_ += S * I) >>> 13),
              (_ &= 8191),
              (_ += R * L),
              (_ += k * P),
              (_ += T * (5 * N)),
              (_ += z * (5 * Y)),
              (b = l += (_ += U * (5 * F)) >>> 13),
              (b += x * F),
              (b += A * D),
              (b += j * C),
              (b += O * B),
              (l = (b += S * M) >>> 13),
              (b &= 8191),
              (b += R * I),
              (b += k * L),
              (b += T * P),
              (b += z * (5 * N)),
              (w = l += (b += U * (5 * Y)) >>> 13),
              (w += x * Y),
              (w += A * F),
              (w += j * D),
              (w += O * C),
              (l = (w += S * B) >>> 13),
              (w &= 8191),
              (w += R * M),
              (w += k * I),
              (w += T * L),
              (w += z * P),
            (m = l += (w += U * (5 * N)) >>> 13),
            (m += x * N),
            (m += A * Y),
            (m += j * F),
            (m += O * D),
            (l = (m += S * C) >>> 13),
            (m &= 8191),
            (m += R * B),
            (m += k * M),
            (m += T * I),
            (m += z * L),
            (x = h = 8191 & (l = ((l = (((l += (m += U * P) >>> 13) << 2) + l) | 0) + (h &= 8191)) | 0)),
            (A = p += l >>>= 13),
            (j = v &= 8191),
            (O = y &= 8191),
            (S = d &= 8191),
            (R = g &= 8191),
            (k = _ &= 8191),
            (T = b &= 8191),
            (z = w &= 8191),
            (U = m &= 8191),
            (r += 16),
            (n -= 16);
          (this.h[0] = x), (this.h[1] = A), (this.h[2] = j), (this.h[3] = O), (this.h[4] = S), (this.h[5] = R), (this.h[6] = k), (this.h[7] = T), (this.h[8] = z), (this.h[9] = U);
        }),
          (A.prototype.finish = function (t, r) {
            var n,
              e,
              o,
              i,
              u = new Uint16Array(10);
            if (this.leftover) {
              for (i = this.leftover, this.buffer[i++] = 1; 16 > i; i++) this.buffer[i] = 0;
              (this.fin = 1), this.blocks(this.buffer, 0, 16);
            }
            for (n = this.h[1] >>> 13, this.h[1] &= 8191, i = 2; 10 > i; i++) (this.h[i] += n), (n = this.h[i] >>> 13), (this.h[i] &= 8191);
            for (this.h[0] += 5 * n, n = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += n, n = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += n, u[0] = this.h[0] + 5, n = u[0] >>> 13, u[0] &= 8191, i = 1; 10 > i; i++)
              (u[i] = this.h[i] + n), (n = u[i] >>> 13), (u[i] &= 8191);
            for (u[9] -= 8192, e = (1 ^ n) - 1, i = 0; 10 > i; i++) u[i] &= e;
            for (e = ~e, i = 0; 10 > i; i++) this.h[i] = (this.h[i] & e) | u[i];
            for (
              this.h[0] = 65535 & (this.h[0] | (this.h[1] << 13)),
                this.h[1] = 65535 & ((this.h[1] >>> 3) | (this.h[2] << 10)),
                this.h[2] = 65535 & ((this.h[2] >>> 6) | (this.h[3] << 7)),
                this.h[3] = 65535 & ((this.h[3] >>> 9) | (this.h[4] << 4)),
                this.h[4] = 65535 & ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)),
                this.h[5] = 65535 & ((this.h[6] >>> 2) | (this.h[7] << 11)),
                this.h[6] = 65535 & ((this.h[7] >>> 5) | (this.h[8] << 8)),
                this.h[7] = 65535 & ((this.h[8] >>> 8) | (this.h[9] << 5)),
                this.h[0] = 65535 & (o = this.h[0] + this.pad[0]),
                i = 1;
              8 > i;
              i++
            )
              this.h[i] = 65535 & (o = (((this.h[i] + this.pad[i]) | 0) + (o >>> 16)) | 0);
            (t[r + 0] = (this.h[0] >>> 0) & 255),
              (t[r + 1] = (this.h[0] >>> 8) & 255),
              (t[r + 2] = (this.h[1] >>> 0) & 255),
              (t[r + 3] = (this.h[1] >>> 8) & 255),
              (t[r + 4] = (this.h[2] >>> 0) & 255),
              (t[r + 5] = (this.h[2] >>> 8) & 255),
              (t[r + 6] = (this.h[3] >>> 0) & 255),
              (t[r + 7] = (this.h[3] >>> 8) & 255),
              (t[r + 8] = (this.h[4] >>> 0) & 255),
              (t[r + 9] = (this.h[4] >>> 8) & 255),
              (t[r + 10] = (this.h[5] >>> 0) & 255),
              (t[r + 11] = (this.h[5] >>> 8) & 255),
              (t[r + 12] = (this.h[6] >>> 0) & 255),
              (t[r + 13] = (this.h[6] >>> 8) & 255),
              (t[r + 14] = (this.h[7] >>> 0) & 255),
              (t[r + 15] = (this.h[7] >>> 8) & 255);
          }),
          (A.prototype.update = function (t, r, n) {
            var e, o;
            if (this.leftover) {
              for ((o = 16 - this.leftover) > n && (o = n), e = 0; o > e; e++) this.buffer[this.leftover + e] = t[r + e];
              if (((n -= o), (r += o), (this.leftover += o), 16 > this.leftover)) return;
              this.blocks(this.buffer, 0, 16), (this.leftover = 0);
            }
            if ((16 > n || (this.blocks(t, r, (o = n - (n % 16))), (r += o), (n -= o)), n)) {
              for (e = 0; n > e; e++) this.buffer[this.leftover + e] = t[r + e];
              this.leftover += n;
            }
          });
        var q = S,
          K = R;
        var G = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591,
        ];
        function V(t, r, n, e) {
          for (
            var o,
              i,
              u,
              a,
              f,
              c,
              s,
              l,
              h,
              p,
              v,
              y,
              d,
              g,
              _,
              b,
              w,
              m,
              E,
              x,
              A,
              j,
              O = new Int32Array(16),
              S = new Int32Array(16),
              R = t[0],
              k = t[1],
              T = t[2],
              z = t[3],
              U = t[4],
              P = t[5],
              L = t[6],
              I = t[7],
              M = r[0],
              B = r[1],
              C = r[2],
              D = r[3],
              F = r[4],
              Y = r[5],
              N = r[6],
              $ = r[7],
              W = 0;
            e >= 128;
          
          ) {
            for (_ = 0; 16 > _; _++) (O[_] = (n[(b = 8 * _ + W) + 0] << 24) | (n[b + 1] << 16) | (n[b + 2] << 8) | n[b + 3]), (S[_] = (n[b + 4] << 24) | (n[b + 5] << 16) | (n[b + 6] << 8) | n[b + 7]);
            for (_ = 0; 80 > _; _++)
              if (
                ((o = k),
                  (i = T),
                  (u = U),
                  (a = P),
                  (f = L),
                  (c = I),
                  (s = B),
                  (l = C),
                  (h = F),
                  (p = Y),
                  (v = N),
                  (y = $),
                  (E = 65535 & (m = $)),
                  (x = m >>> 16),
                  (A = 65535 & (w = I)),
                  (j = w >>> 16),
                  (E += 65535 & (m = ((F >>> 14) | (U << 18)) ^ ((F >>> 18) | (U << 14)) ^ ((U >>> 9) | (F << 23)))),
                  (x += m >>> 16),
                  (A += 65535 & (w = ((U >>> 14) | (F << 18)) ^ ((U >>> 18) | (F << 14)) ^ ((F >>> 9) | (U << 23)))),
                  (j += w >>> 16),
                  (E += 65535 & (m = (F & Y) ^ (~F & N))),
                  (x += m >>> 16),
                  (A += 65535 & (w = (U & P) ^ (~U & L))),
                  (j += w >>> 16),
                  (E += 65535 & (m = G[2 * _ + 1])),
                  (x += m >>> 16),
                  (A += 65535 & (w = G[2 * _])),
                  (j += w >>> 16),
                  (x += (m = S[_ % 16]) >>> 16),
                  (A += 65535 & (w = O[_ % 16])),
                  (j += w >>> 16),
                  (A += (x += (E += 65535 & m) >>> 16) >>> 16),
                  (E = 65535 & (m = g = (65535 & E) | (x << 16))),
                  (x = m >>> 16),
                  (A = 65535 & (w = d = (65535 & A) | ((j += A >>> 16) << 16))),
                  (j = w >>> 16),
                  (E += 65535 & (m = ((M >>> 28) | (R << 4)) ^ ((R >>> 2) | (M << 30)) ^ ((R >>> 7) | (M << 25)))),
                  (x += m >>> 16),
                  (A += 65535 & (w = ((R >>> 28) | (M << 4)) ^ ((M >>> 2) | (R << 30)) ^ ((M >>> 7) | (R << 25)))),
                  (j += w >>> 16),
                  (x += (m = (M & B) ^ (M & C) ^ (B & C)) >>> 16),
                  (A += 65535 & (w = (R & k) ^ (R & T) ^ (k & T))),
                  (j += w >>> 16),
                  (c = (65535 & (A += (x += (E += 65535 & m) >>> 16) >>> 16)) | ((j += A >>> 16) << 16)),
                  (y = (65535 & E) | (x << 16)),
                  (E = 65535 & (m = D)),
                  (x = m >>> 16),
                  (A = 65535 & (w = z)),
                  (j = w >>> 16),
                  (x += (m = g) >>> 16),
                  (A += 65535 & (w = d)),
                  (j += w >>> 16),
                  (k = R),
                  (T = o),
                  (z = i),
                  (U = (65535 & (A += (x += (E += 65535 & m) >>> 16) >>> 16)) | ((j += A >>> 16) << 16)),
                  (P = u),
                  (L = a),
                  (I = f),
                  (R = c),
                  (B = M),
                  (C = s),
                  (D = l),
                  (F = (65535 & E) | (x << 16)),
                  (Y = h),
                  (N = p),
                  ($ = v),
                  (M = y),
                _ % 16 == 15)
              )
                for (b = 0; 16 > b; b++)
                  (E = 65535 & (m = S[b])),
                    (x = m >>> 16),
                    (A = 65535 & (w = O[b])),
                    (j = w >>> 16),
                    (E += 65535 & (m = S[(b + 9) % 16])),
                    (x += m >>> 16),
                    (A += 65535 & (w = O[(b + 9) % 16])),
                    (j += w >>> 16),
                    (E += 65535 & (m = (((g = S[(b + 1) % 16]) >>> 1) | ((d = O[(b + 1) % 16]) << 31)) ^ ((g >>> 8) | (d << 24)) ^ ((g >>> 7) | (d << 25)))),
                    (x += m >>> 16),
                    (A += 65535 & (w = ((d >>> 1) | (g << 31)) ^ ((d >>> 8) | (g << 24)) ^ (d >>> 7))),
                    (j += w >>> 16),
                    (x += (m = (((g = S[(b + 14) % 16]) >>> 19) | ((d = O[(b + 14) % 16]) << 13)) ^ ((d >>> 29) | (g << 3)) ^ ((g >>> 6) | (d << 26))) >>> 16),
                    (A += 65535 & (w = ((d >>> 19) | (g << 13)) ^ ((g >>> 29) | (d << 3)) ^ (d >>> 6))),
                    (j += w >>> 16),
                    (O[b] = (65535 & (A += (x += (E += 65535 & m) >>> 16) >>> 16)) | ((j += A >>> 16) << 16)),
                    (S[b] = (65535 & E) | (x << 16));
            (E = 65535 & (m = M)),
              (x = m >>> 16),
              (A = 65535 & (w = R)),
              (j = w >>> 16),
              (x += (m = r[0]) >>> 16),
              (A += 65535 & (w = t[0])),
              (j += w >>> 16),
              (t[0] = R = (65535 & (A += (x += (E += 65535 & m) >>> 16) >>> 16)) | ((j += A >>> 16) << 16)),
              (r[0] = M = (65535 & E) | (x << 16)),
              (E = 65535 & (m = B)),
              (x = m >>> 16),
              (A = 65535 & (w = k)),
              (j = w >>> 16),
              (x += (m = r[1]) >>> 16),
              (A += 65535 & (w = t[1])),
              (j += w >>> 16),
              (t[1] = k = (65535 & (A += (x += (E += 65535 & m) >>> 16) >>> 16)) | ((j += A >>> 16) << 16)),
              (r[1] = B = (65535 & E) | (x << 16)),
              (E = 65535 & (m = C)),
              (x = m >>> 16),
              (A = 65535 & (w = T)),
              (j = w >>> 16),
              (x += (m = r[2]) >>> 16),
              (A += 65535 & (w = t[2])),
              (j += w >>> 16),
              (t[2] = T = (65535 & (A += (x += (E += 65535 & m) >>> 16) >>> 16)) | ((j += A >>> 16) << 16)),
              (r[2] = C = (65535 & E) | (x << 16)),
              (E = 65535 & (m = D)),
              (x = m >>> 16),
              (A = 65535 & (w = z)),
              (j = w >>> 16),
              (x += (m = r[3]) >>> 16),
              (A += 65535 & (w = t[3])),
              (j += w >>> 16),
              (t[3] = z = (65535 & (A += (x += (E += 65535 & m) >>> 16) >>> 16)) | ((j += A >>> 16) << 16)),
              (r[3] = D = (65535 & E) | (x << 16)),
              (E = 65535 & (m = F)),
              (x = m >>> 16),
              (A = 65535 & (w = U)),
              (j = w >>> 16),
              (x += (m = r[4]) >>> 16),
              (A += 65535 & (w = t[4])),
              (j += w >>> 16),
              (t[4] = U = (65535 & (A += (x += (E += 65535 & m) >>> 16) >>> 16)) | ((j += A >>> 16) << 16)),
              (r[4] = F = (65535 & E) | (x << 16)),
              (E = 65535 & (m = Y)),
              (x = m >>> 16),
              (A = 65535 & (w = P)),
              (j = w >>> 16),
              (x += (m = r[5]) >>> 16),
              (A += 65535 & (w = t[5])),
              (j += w >>> 16),
              (t[5] = P = (65535 & (A += (x += (E += 65535 & m) >>> 16) >>> 16)) | ((j += A >>> 16) << 16)),
              (r[5] = Y = (65535 & E) | (x << 16)),
              (E = 65535 & (m = N)),
              (x = m >>> 16),
              (A = 65535 & (w = L)),
              (j = w >>> 16),
              (x += (m = r[6]) >>> 16),
              (A += 65535 & (w = t[6])),
              (j += w >>> 16),
              (t[6] = L = (65535 & (A += (x += (E += 65535 & m) >>> 16) >>> 16)) | ((j += A >>> 16) << 16)),
              (r[6] = N = (65535 & E) | (x << 16)),
              (E = 65535 & (m = $)),
              (x = m >>> 16),
              (A = 65535 & (w = I)),
              (j = w >>> 16),
              (x += (m = r[7]) >>> 16),
              (A += 65535 & (w = t[7])),
              (j += w >>> 16),
              (t[7] = I = (65535 & (A += (x += (E += 65535 & m) >>> 16) >>> 16)) | ((j += A >>> 16) << 16)),
              (r[7] = $ = (65535 & E) | (x << 16)),
              (W += 128),
              (e -= 128);
          }
          return e;
        }
        function Z(t, r, n) {
          var e,
            o = new Int32Array(8),
            i = new Int32Array(8),
            u = new Uint8Array(256),
            a = n;
          for (
            o[0] = 1779033703,
              o[1] = 3144134277,
              o[2] = 1013904242,
              o[3] = 2773480762,
              o[4] = 1359893119,
              o[5] = 2600822924,
              o[6] = 528734635,
              o[7] = 1541459225,
              i[0] = 4089235720,
              i[1] = 2227873595,
              i[2] = 4271175723,
              i[3] = 1595750129,
              i[4] = 2917565137,
              i[5] = 725511199,
              i[6] = 4215389547,
              i[7] = 327033209,
              V(o, i, r, n),
              n %= 128,
              e = 0;
            n > e;
            e++
          )
            u[e] = r[a - n + e];
          for (u[n] = 128, u[(n = 256 - 128 * (112 > n ? 1 : 0)) - 9] = 0, p(u, n - 8, (a / 536870912) | 0, a << 3), V(o, i, u, n), e = 0; 8 > e; e++) p(t, 8 * e, o[e], i[e]);
          return 0;
        }
        function H(t, n) {
          var e = r(),
            o = r(),
            i = r(),
            u = r(),
            a = r(),
            f = r(),
            s = r(),
            l = r(),
            h = r();
          B(e, t[1], t[0]),
            B(h, n[1], n[0]),
            C(e, e, h),
            M(o, t[0], t[1]),
            M(h, n[0], n[1]),
            C(o, o, h),
            C(i, t[3], n[3]),
            C(i, i, c),
            C(u, t[2], n[2]),
            M(u, u, u),
            B(a, o, e),
            B(f, u, i),
            M(s, u, i),
            M(l, o, e),
            C(t[0], a, f),
            C(t[1], l, s),
            C(t[2], s, f),
            C(t[3], a, l);
        }
        function J(t, r, n) {
          var e;
          for (e = 0; 4 > e; e++) z(t[e], r[e], n);
        }
        function X(t, n) {
          var e = r(),
            o = r(),
            i = r();
          F(i, n[2]), C(e, n[0], i), C(o, n[1], i), U(t, o), (t[31] ^= L(e) << 7);
        }
        function Q(t, r, n) {
          var e, o;
          for (k(t[0], i), k(t[1], u), k(t[2], u), k(t[3], i), o = 255; o >= 0; --o) J(t, r, (e = (n[(o / 8) | 0] >> (7 & o)) & 1)), H(r, t), H(t, t), J(t, r, e);
        }
        function tt(t, n) {
          var e = [r(), r(), r(), r()];
          k(e[0], s), k(e[1], l), k(e[2], u), C(e[3], s, l), Q(t, e, n);
        }
        function rt(t, e, o) {
          var i,
            u = new Uint8Array(64),
            a = [r(), r(), r(), r()];
          for (o || n(e, 32), Z(u, e, 32), u[0] &= 248, u[31] &= 127, u[31] |= 64, tt(a, u), X(t, a), i = 0; 32 > i; i++) e[i + 32] = t[i];
          return 0;
        }
        var nt = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function et(t, r) {
          var n, e, o, i;
          for (e = 63; e >= 32; --e) {
            for (n = 0, o = e - 32, i = e - 12; i > o; ++o) (r[o] += n - 16 * r[e] * nt[o - (e - 32)]), (r[o] -= 256 * (n = (r[o] + 128) >> 8));
            (r[o] += n), (r[e] = 0);
          }
          for (n = 0, o = 0; 32 > o; o++) (r[o] += n - (r[31] >> 4) * nt[o]), (n = r[o] >> 8), (r[o] &= 255);
          for (o = 0; 32 > o; o++) r[o] -= n * nt[o];
          for (e = 0; 32 > e; e++) (r[e + 1] += r[e] >> 8), (t[e] = 255 & r[e]);
        }
        function ot(t) {
          var r,
            n = new Float64Array(64);
          for (r = 0; 64 > r; r++) n[r] = t[r];
          for (r = 0; 64 > r; r++) t[r] = 0;
          et(t, n);
        }
        function it(t, n, e, o) {
          var i,
            u,
            a = new Uint8Array(64),
            f = new Uint8Array(64),
            c = new Uint8Array(64),
            s = new Float64Array(64),
            l = [r(), r(), r(), r()];
          Z(a, o, 32), (a[0] &= 248), (a[31] &= 127), (a[31] |= 64);
          var h = e + 64;
          for (i = 0; e > i; i++) t[64 + i] = n[i];
          for (i = 0; 32 > i; i++) t[32 + i] = a[32 + i];
          for (Z(c, t.subarray(32), e + 32), ot(c), tt(l, c), X(t, l), i = 32; 64 > i; i++) t[i] = o[i];
          for (Z(f, t, e + 64), ot(f), i = 0; 64 > i; i++) s[i] = 0;
          for (i = 0; 32 > i; i++) s[i] = c[i];
          for (i = 0; 32 > i; i++) for (u = 0; 32 > u; u++) s[i + u] += f[i] * a[u];
          return et(t.subarray(32), s), h;
        }
        function ut(t, n) {
          var e = r(),
            o = r(),
            a = r(),
            c = r(),
            s = r(),
            l = r(),
            p = r();
          return (
            k(t[2], u),
              I(t[1], n),
              D(a, t[1]),
              C(c, a, f),
              B(a, a, t[2]),
              M(c, t[2], c),
              D(s, c),
              D(l, s),
              C(p, l, s),
              C(e, p, a),
              C(e, e, c),
              (function (t, n) {
                var e,
                  o = r();
                for (e = 0; 16 > e; e++) o[e] = n[e];
                for (e = 250; e >= 0; e--) D(o, o), 1 !== e && C(o, o, n);
                for (e = 0; 16 > e; e++) t[e] = o[e];
              })(e, e),
              C(e, e, a),
              C(e, e, c),
              C(e, e, c),
              C(t[0], e, c),
              D(o, t[0]),
              C(o, o, c),
            P(o, a) && C(t[0], t[0], h),
              D(o, t[0]),
              C(o, o, c),
              P(o, a) ? -1 : (L(t[0]) === n[31] >> 7 && B(t[0], i, t[0]), C(t[3], t[0], t[1]), 0)
          );
        }
        function at(t, n, e, o) {
          var i,
            u = new Uint8Array(32),
            a = new Uint8Array(64),
            f = [r(), r(), r(), r()],
            c = [r(), r(), r(), r()];
          if ((-1, 64 > e)) return -1;
          if (ut(c, o)) return -1;
          for (i = 0; e > i; i++) t[i] = n[i];
          for (i = 0; 32 > i; i++) t[i + 32] = o[i];
          if ((Z(a, t, e), ot(a), Q(f, c, a), tt(c, n.subarray(32)), H(f, c), X(u, f), (e -= 64), d(n, 0, u, 0))) {
            for (i = 0; e > i; i++) t[i] = 0;
            return -1;
          }
          for (i = 0; e > i; i++) t[i] = n[i + 64];
          return e;
        }
        var ft = 32,
          ct = 24,
          st = 32,
          lt = 32,
          ht = ct;
        function pt(t, r) {
          if (t.length !== ft) throw Error("bad key size");
          if (r.length !== ct) throw Error("bad nonce size");
        }
        function vt() {
          for (var t = 0; arguments.length > t; t++) if (!(arguments[t] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array");
        }
        function yt(t) {
          for (var r = 0; t.length > r; r++) t[r] = 0;
        }
        (t.lowlevel = {
          crypto_core_hsalsa20: _,
          crypto_stream_xor: x,
          crypto_stream: E,
          crypto_stream_salsa20_xor: w,
          crypto_stream_salsa20: m,
          crypto_onetimeauth: j,
          crypto_onetimeauth_verify: O,
          crypto_verify_16: y,
          crypto_verify_32: d,
          crypto_secretbox: S,
          crypto_secretbox_open: R,
          crypto_scalarmult: Y,
          crypto_scalarmult_base: N,
          crypto_box_beforenm: W,
          crypto_box_afternm: q,
          crypto_box: function (t, r, n, e, o, i) {
            var u = new Uint8Array(32);
            return W(u, o, i), q(t, r, n, e, u);
          },
          crypto_box_open: function (t, r, n, e, o, i) {
            var u = new Uint8Array(32);
            return W(u, o, i), K(t, r, n, e, u);
          },
          crypto_box_keypair: $,
          crypto_hash: Z,
          crypto_sign: it,
          crypto_sign_keypair: rt,
          crypto_sign_open: at,
          crypto_secretbox_KEYBYTES: ft,
          crypto_secretbox_NONCEBYTES: ct,
          crypto_secretbox_ZEROBYTES: 32,
          crypto_secretbox_BOXZEROBYTES: 16,
          crypto_scalarmult_BYTES: 32,
          crypto_scalarmult_SCALARBYTES: 32,
          crypto_box_PUBLICKEYBYTES: st,
          crypto_box_SECRETKEYBYTES: lt,
          crypto_box_BEFORENMBYTES: 32,
          crypto_box_NONCEBYTES: ht,
          crypto_box_ZEROBYTES: 32,
          crypto_box_BOXZEROBYTES: 16,
          crypto_sign_BYTES: 64,
          crypto_sign_PUBLICKEYBYTES: 32,
          crypto_sign_SECRETKEYBYTES: 64,
          crypto_sign_SEEDBYTES: 32,
          crypto_hash_BYTES: 64,
        }),
          (t.randomBytes = function (t) {
            var r = new Uint8Array(t);
            return n(r, t), r;
          }),
          (t.secretbox = function (t, r, n) {
            vt(t, r, n), pt(n, r);
            for (var e = new Uint8Array(32 + t.length), o = new Uint8Array(e.length), i = 0; t.length > i; i++) e[i + 32] = t[i];
            return S(o, e, e.length, r, n), o.subarray(16);
          }),
          (t.secretbox.open = function (t, r, n) {
            vt(t, r, n), pt(n, r);
            for (var e = new Uint8Array(16 + t.length), o = new Uint8Array(e.length), i = 0; t.length > i; i++) e[i + 16] = t[i];
            return 32 > e.length ? null : 0 !== R(o, e, e.length, r, n) ? null : o.subarray(32);
          }),
          (t.secretbox.keyLength = ft),
          (t.secretbox.nonceLength = ct),
          (t.secretbox.overheadLength = 16),
          (t.scalarMult = function (t, r) {
            if ((vt(t, r), 32 !== t.length)) throw Error("bad n size");
            if (32 !== r.length) throw Error("bad p size");
            var n = new Uint8Array(32);
            return Y(n, t, r), n;
          }),
          (t.scalarMult.base = function (t) {
            if ((vt(t), 32 !== t.length)) throw Error("bad n size");
            var r = new Uint8Array(32);
            return N(r, t), r;
          }),
          (t.scalarMult.scalarLength = 32),
          (t.scalarMult.groupElementLength = 32),
          (t.box = function (r, n, e, o) {
            var i = t.box.before(e, o);
            return t.secretbox(r, n, i);
          }),
          (t.box.before = function (t, r) {
            vt(t, r),
              (function (t, r) {
                if (t.length !== st) throw Error("bad public key size");
                if (r.length !== lt) throw Error("bad secret key size");
              })(t, r);
            var n = new Uint8Array(32);
            return W(n, t, r), n;
          }),
          (t.box.after = t.secretbox),
          (t.box.open = function (r, n, e, o) {
            var i = t.box.before(e, o);
            return t.secretbox.open(r, n, i);
          }),
          (t.box.open.after = t.secretbox.open),
          (t.box.keyPair = function () {
            var t = new Uint8Array(st),
              r = new Uint8Array(lt);
            return $(t, r), { publicKey: t, secretKey: r };
          }),
          (t.box.keyPair.fromSecretKey = function (t) {
            if ((vt(t), t.length !== lt)) throw Error("bad secret key size");
            var r = new Uint8Array(st);
            return N(r, t), { publicKey: r, secretKey: new Uint8Array(t) };
          }),
          (t.box.publicKeyLength = st),
          (t.box.secretKeyLength = lt),
          (t.box.sharedKeyLength = 32),
          (t.box.nonceLength = ht),
          (t.box.overheadLength = t.secretbox.overheadLength),
          (t.sign = function (t, r) {
            if ((vt(t, r), 64 !== r.length)) throw Error("bad secret key size");
            var n = new Uint8Array(64 + t.length);
            return it(n, t, t.length, r), n;
          }),
          (t.sign.open = function (t, r) {
            if ((vt(t, r), 32 !== r.length)) throw Error("bad public key size");
            var n = new Uint8Array(t.length),
              e = at(n, t, t.length, r);
            if (0 > e) return null;
            for (var o = new Uint8Array(e), i = 0; o.length > i; i++) o[i] = n[i];
            return o;
          }),
          (t.sign.detached = function (r, n) {
            for (var e = t.sign(r, n), o = new Uint8Array(64), i = 0; o.length > i; i++) o[i] = e[i];
            return o;
          }),
          (t.sign.detached.verify = function (t, r, n) {
            if ((vt(t, r, n), 64 !== r.length)) throw Error("bad signature size");
            if (32 !== n.length) throw Error("bad public key size");
            var e,
              o = new Uint8Array(64 + t.length),
              i = new Uint8Array(64 + t.length);
            for (e = 0; 64 > e; e++) o[e] = r[e];
            for (e = 0; t.length > e; e++) o[e + 64] = t[e];
            return at(i, o, o.length, n) >= 0;
          }),
          (t.sign.keyPair = function () {
            var t = new Uint8Array(32),
              r = new Uint8Array(64);
            return rt(t, r), { publicKey: t, secretKey: r };
          }),
          (t.sign.keyPair.fromSecretKey = function (t) {
            if ((vt(t), 64 !== t.length)) throw Error("bad secret key size");
            for (var r = new Uint8Array(32), n = 0; r.length > n; n++) r[n] = t[32 + n];
            return { publicKey: r, secretKey: new Uint8Array(t) };
          }),
          (t.sign.keyPair.fromSeed = function (t) {
            if ((vt(t), 32 !== t.length)) throw Error("bad seed size");
            for (var r = new Uint8Array(32), n = new Uint8Array(64), e = 0; 32 > e; e++) n[e] = t[e];
            return rt(r, n, !0), { publicKey: r, secretKey: n };
          }),
          (t.sign.publicKeyLength = 32),
          (t.sign.secretKeyLength = 64),
          (t.sign.seedLength = 32),
          (t.sign.signatureLength = 64),
          (t.hash = function (t) {
            vt(t);
            var r = new Uint8Array(64);
            return Z(r, t, t.length), r;
          }),
          (t.hash.hashLength = 64),
          (t.verify = function (t, r) {
            return vt(t, r), 0 !== t.length && 0 !== r.length && t.length === r.length && 0 === v(t, 0, r, 0, t.length);
          }),
          (t.setPRNG = function (t) {
            n = t;
          }),
          (function () {
            var r = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
            if (r && r.getRandomValues) {
              t.setPRNG(function (t, n) {
                var e,
                  o = new Uint8Array(n);
                for (e = 0; n > e; e += 65536) r.getRandomValues(o.subarray(e, e + Math.min(n - e, 65536)));
                for (e = 0; n > e; e++) t[e] = o[e];
                yt(o);
              });
            } else
              (r = dt) &&
              r.randomBytes &&
              t.setPRNG(function (t, n) {
                var e,
                  o = r.randomBytes(n);
                for (e = 0; n > e; e++) t[e] = o[e];
                yt(o);
              });
          })();
      })(t.exports ? t.exports : (self.nacl = self.nacl || {}));
    }),
    _t = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
    bt = [],
    wt = [],
    mt = "undefined" != typeof Uint8Array ? Uint8Array : Array,
    Et = !1;
  function xt() {
    Et = !0;
    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0; 64 > r; ++r) (bt[r] = t[r]), (wt[t.charCodeAt(r)] = r);
    (wt[45] = 62), (wt[95] = 63);
  }
  function At(t, r, n) {
    for (var e, o = [], i = r; n > i; i += 3) o.push(bt[((e = (t[i] << 16) + (t[i + 1] << 8) + t[i + 2]) >> 18) & 63] + bt[(e >> 12) & 63] + bt[(e >> 6) & 63] + bt[63 & e]);
    return o.join("");
  }
  function jt(t) {
    var r;
    Et || xt();
    for (var n = t.length, e = n % 3, o = "", i = [], u = 0, a = n - e; a > u; u += 16383) i.push(At(t, u, u + 16383 > a ? a : u + 16383));
    return (
      1 === e ? ((o += bt[(r = t[n - 1]) >> 2]), (o += bt[(r << 4) & 63]), (o += "==")) : 2 === e && ((o += bt[(r = (t[n - 2] << 8) + t[n - 1]) >> 10]), (o += bt[(r >> 4) & 63]), (o += bt[(r << 2) & 63]), (o += "=")),
        i.push(o),
        i.join("")
    );
  }
  function Ot(t, r, n, e, o) {
    var i,
      u,
      a = 8 * o - e - 1,
      f = (1 << a) - 1,
      c = f >> 1,
      s = -7,
      l = n ? o - 1 : 0,
      h = n ? -1 : 1,
      p = t[r + l];
    for (l += h, i = p & ((1 << -s) - 1), p >>= -s, s += a; s > 0; i = 256 * i + t[r + l], l += h, s -= 8);
    for (u = i & ((1 << -s) - 1), i >>= -s, s += e; s > 0; u = 256 * u + t[r + l], l += h, s -= 8);
    if (0 === i) i = 1 - c;
    else {
      if (i === f) return u ? NaN : (1 / 0) * (p ? -1 : 1);
      (u += Math.pow(2, e)), (i -= c);
    }
    return (p ? -1 : 1) * u * Math.pow(2, i - e);
  }
  function St(t, r, n, e, o, i) {
    var u,
      a,
      f,
      c = 8 * i - o - 1,
      s = (1 << c) - 1,
      l = s >> 1,
      h = 23 === o ? 5.960464477539062e-8 : 0,
      p = e ? 0 : i - 1,
      v = e ? 1 : -1,
      y = 0 > r || (0 === r && 0 > 1 / r) ? 1 : 0;
    for (
      isNaN((r = Math.abs(r))) || r === 1 / 0
        ? ((a = isNaN(r) ? 1 : 0), (u = s))
        : (1 > r * (f = Math.pow(2, -(u = Math.floor(Math.log(r) / Math.LN2)))) && (u--, (f *= 2)),
        2 > (r += 1 > u + l ? h * Math.pow(2, 1 - l) : h / f) * f || (u++, (f /= 2)),
          s > u + l ? (1 > u + l ? ((a = r * Math.pow(2, l - 1) * Math.pow(2, o)), (u = 0)) : ((a = (r * f - 1) * Math.pow(2, o)), (u += l))) : ((a = 0), (u = s)));
      o >= 8;
      t[n + p] = 255 & a, p += v, a /= 256, o -= 8
    );
    for (u = (u << o) | a, c += o; c > 0; t[n + p] = 255 & u, p += v, u /= 256, c -= 8);
    t[n + p - v] |= 128 * y;
  }
  var Rt = {}.toString,
    kt =
      Array.isArray ||
      function (t) {
        return "[object Array]" == Rt.call(t);
      };
  Pt.TYPED_ARRAY_SUPPORT = void 0 === _t.TYPED_ARRAY_SUPPORT || _t.TYPED_ARRAY_SUPPORT;
  var Tt = zt();
  function zt() {
    return Pt.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }
  function Ut(t, r) {
    if (zt() < r) throw new RangeError("Invalid typed array length");
    return Pt.TYPED_ARRAY_SUPPORT ? ((t = new Uint8Array(r)).__proto__ = Pt.prototype) : (null === t && (t = new Pt(r)), (t.length = r)), t;
  }
  function Pt(t, r, n) {
    if (!(Pt.TYPED_ARRAY_SUPPORT || this instanceof Pt)) return new Pt(t, r, n);
    if ("number" == typeof t) {
      if ("string" == typeof r) throw Error("If encoding is specified then the first argument must be a string");
      return Mt(this, t);
    }
    return Lt(this, t, r, n);
  }
  function Lt(t, r, n, e) {
    if ("number" == typeof r) throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer
      ? (function (t, r, n, e) {
        if (0 > n || n > r.byteLength) throw new RangeError("'offset' is out of bounds");
        if (n + (e || 0) > r.byteLength) throw new RangeError("'length' is out of bounds");
        r = void 0 === n && void 0 === e ? new Uint8Array(r) : void 0 === e ? new Uint8Array(r, n) : new Uint8Array(r, n, e);
        Pt.TYPED_ARRAY_SUPPORT ? ((t = r).__proto__ = Pt.prototype) : (t = Bt(t, r));
        return t;
      })(t, r, n, e)
      : "string" == typeof r
        ? (function (t, r, n) {
          ("string" == typeof n && "" !== n) || (n = "utf8");
          if (!Pt.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
          var e = 0 | Ft(r, n),
            o = (t = Ut(t, e)).write(r, n);
          o !== e && (t = t.slice(0, o));
          return t;
        })(t, r, n)
        : (function (t, r) {
          if (Dt(r)) {
            var n = 0 | Ct(r.length);
            return 0 === (t = Ut(t, n)).length ? t : (r.copy(t, 0, 0, n), t);
          }
          if (r) {
            if (("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer) || "length" in r) return "number" != typeof r.length || (e = r.length) != e ? Ut(t, 0) : Bt(t, r);
            if ("Buffer" === r.type && kt(r.data)) return Bt(t, r.data);
          }
          var e;
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        })(t, r);
  }
  function It(t) {
    if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
    if (0 > t) throw new RangeError('"size" argument must not be negative');
  }
  function Mt(t, r) {
    if ((It(r), (t = Ut(t, 0 > r ? 0 : 0 | Ct(r))), !Pt.TYPED_ARRAY_SUPPORT)) for (var n = 0; r > n; ++n) t[n] = 0;
    return t;
  }
  function Bt(t, r) {
    var n = 0 > r.length ? 0 : 0 | Ct(r.length);
    t = Ut(t, n);
    for (var e = 0; n > e; e += 1) t[e] = 255 & r[e];
    return t;
  }
  function Ct(t) {
    if (t >= zt()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + zt().toString(16) + " bytes");
    return 0 | t;
  }
  function Dt(t) {
    return !(null == t || !t._isBuffer);
  }
  function Ft(t, r) {
    if (Dt(t)) return t.length;
    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
    "string" != typeof t && (t = "" + t);
    var n = t.length;
    if (0 === n) return 0;
    for (var e = !1; ; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
        case void 0:
          return hr(t).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * n;
        case "hex":
          return n >>> 1;
        case "base64":
          return pr(t).length;
        default:
          if (e) return hr(t).length;
          (r = ("" + r).toLowerCase()), (e = !0);
      }
  }
  function Yt(t, r, n) {
    var e = t[r];
    (t[r] = t[n]), (t[n] = e);
  }
  function Nt(t, r, n, e, o) {
    if (0 === t.length) return -1;
    if (("string" == typeof n ? ((e = n), (n = 0)) : n > 2147483647 ? (n = 2147483647) : -2147483648 > n && (n = -2147483648), isNaN((n = +n)) && (n = o ? 0 : t.length - 1), 0 > n && (n = t.length + n), t.length > n)) {
      if (0 > n) {
        if (!o) return -1;
        n = 0;
      }
    } else {
      if (o) return -1;
      n = t.length - 1;
    }
    if (("string" == typeof r && (r = Pt.from(r, e)), Dt(r))) return 0 === r.length ? -1 : $t(t, r, n, e, o);
    if ("number" == typeof r)
      return (r &= 255), Pt.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? (o ? Uint8Array.prototype.indexOf.call(t, r, n) : Uint8Array.prototype.lastIndexOf.call(t, r, n)) : $t(t, [r], n, e, o);
    throw new TypeError("val must be string, number or Buffer");
  }
  function $t(t, r, n, e, o) {
    var i,
      u = 1,
      a = t.length,
      f = r.length;
    if (void 0 !== e && ("ucs2" === (e = (e + "").toLowerCase()) || "ucs-2" === e || "utf16le" === e || "utf-16le" === e)) {
      if (2 > t.length || 2 > r.length) return -1;
      (u = 2), (a /= 2), (f /= 2), (n /= 2);
    }
    function c(t, r) {
      return 1 === u ? t[r] : t.readUInt16BE(r * u);
    }
    if (o) {
      var s = -1;
      for (i = n; a > i; i++)
        if (c(t, i) === c(r, -1 === s ? 0 : i - s)) {
          if ((-1 === s && (s = i), i - s + 1 === f)) return s * u;
        } else -1 !== s && (i -= i - s), (s = -1);
    } else
      for (n + f > a && (n = a - f), i = n; i >= 0; i--) {
        for (var l = !0, h = 0; f > h; h++)
          if (c(t, i + h) !== c(r, h)) {
            l = !1;
            break;
          }
        if (l) return i;
      }
    return -1;
  }
  function Wt(t, r, n, e) {
    var o = t.length - (n = +n || 0);
    e ? (e = +e) > o && (e = o) : (e = o);
    var i = r.length;
    if (i % 2 != 0) throw new TypeError("Invalid hex string");
    e > i / 2 && (e = i / 2);
    for (var u = 0; e > u; ++u) {
      var a = parseInt(r.substr(2 * u, 2), 16);
      if (isNaN(a)) return u;
      t[n + u] = a;
    }
    return u;
  }
  function qt(t, r, n, e) {
    return vr(hr(r, t.length - n), t, n, e);
  }
  function Kt(t, r, n, e) {
    return vr(
      (function (t) {
        for (var r = [], n = 0; t.length > n; ++n) r.push(255 & t.charCodeAt(n));
        return r;
      })(r),
      t,
      n,
      e
    );
  }
  function Gt(t, r, n, e) {
    return Kt(t, r, n, e);
  }
  function Vt(t, r, n, e) {
    return vr(pr(r), t, n, e);
  }
  function Zt(t, r, n, e) {
    return vr(
      (function (t, r) {
        for (var n, e, o = [], i = 0; t.length > i && 0 <= (r -= 2); ++i) (n = t.charCodeAt(i)), (e = n >> 8), o.push(n % 256), o.push(e);
        return o;
      })(r, t.length - n),
      t,
      n,
      e
    );
  }
  function Ht(t, r, n) {
    return jt(0 === r && n === t.length ? t : t.slice(r, n));
  }
  function Jt(t, r, n) {
    n = Math.min(t.length, n);
    for (var e = [], o = r; n > o; ) {
      var i,
        u,
        a,
        f,
        c = t[o],
        s = null,
        l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
      if (n >= o + l)
        switch (l) {
          case 1:
            128 > c && (s = c);
            break;
          case 2:
            128 == (192 & (i = t[o + 1])) && (f = ((31 & c) << 6) | (63 & i)) > 127 && (s = f);
            break;
          case 3:
            (u = t[o + 2]), 128 == (192 & (i = t[o + 1])) && 128 == (192 & u) && (f = ((15 & c) << 12) | ((63 & i) << 6) | (63 & u)) > 2047 && (55296 > f || f > 57343) && (s = f);
            break;
          case 4:
            (u = t[o + 2]), (a = t[o + 3]), 128 == (192 & (i = t[o + 1])) && 128 == (192 & u) && 128 == (192 & a) && (f = ((15 & c) << 18) | ((63 & i) << 12) | ((63 & u) << 6) | (63 & a)) > 65535 && 1114112 > f && (s = f);
        }
      null === s ? ((s = 65533), (l = 1)) : s > 65535 && (e.push((((s -= 65536) >>> 10) & 1023) | 55296), (s = 56320 | (1023 & s))), e.push(s), (o += l);
    }
    return (function (t) {
      var r = t.length;
      if (Xt >= r) return String.fromCharCode.apply(String, t);
      var n = "",
        e = 0;
      for (; r > e; ) n += String.fromCharCode.apply(String, t.slice(e, (e += Xt)));
      return n;
    })(e);
  }
  (Pt.poolSize = 8192),
    (Pt._augment = function (t) {
      return (t.__proto__ = Pt.prototype), t;
    }),
    (Pt.from = function (t, r, n) {
      return Lt(null, t, r, n);
    }),
  Pt.TYPED_ARRAY_SUPPORT && ((Pt.prototype.__proto__ = Uint8Array.prototype), (Pt.__proto__ = Uint8Array)),
    (Pt.alloc = function (t, r, n) {
      return (function (t, r, n, e) {
        return It(r), r > 0 && void 0 !== n ? ("string" == typeof e ? Ut(t, r).fill(n, e) : Ut(t, r).fill(n)) : Ut(t, r);
      })(null, t, r, n);
    }),
    (Pt.allocUnsafe = function (t) {
      return Mt(null, t);
    }),
    (Pt.allocUnsafeSlow = function (t) {
      return Mt(null, t);
    }),
    (Pt.isBuffer = yr),
    (Pt.compare = function (t, r) {
      if (!Dt(t) || !Dt(r)) throw new TypeError("Arguments must be Buffers");
      if (t === r) return 0;
      for (var n = t.length, e = r.length, o = 0, i = Math.min(n, e); i > o; ++o)
        if (t[o] !== r[o]) {
          (n = t[o]), (e = r[o]);
          break;
        }
      return e > n ? -1 : n > e ? 1 : 0;
    }),
    (Pt.isEncoding = function (t) {
      switch ((t + "").toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }),
    (Pt.concat = function (t, r) {
      if (!kt(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t.length) return Pt.alloc(0);
      var n;
      if (void 0 === r) for (r = 0, n = 0; t.length > n; ++n) r += t[n].length;
      var e = Pt.allocUnsafe(r),
        o = 0;
      for (n = 0; t.length > n; ++n) {
        var i = t[n];
        if (!Dt(i)) throw new TypeError('"list" argument must be an Array of Buffers');
        i.copy(e, o), (o += i.length);
      }
      return e;
    }),
    (Pt.byteLength = Ft),
    (Pt.prototype._isBuffer = !0),
    (Pt.prototype.swap16 = function () {
      var t = this.length;
      if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var r = 0; t > r; r += 2) Yt(this, r, r + 1);
      return this;
    }),
    (Pt.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var r = 0; t > r; r += 4) Yt(this, r, r + 3), Yt(this, r + 1, r + 2);
      return this;
    }),
    (Pt.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var r = 0; t > r; r += 8) Yt(this, r, r + 7), Yt(this, r + 1, r + 6), Yt(this, r + 2, r + 5), Yt(this, r + 3, r + 4);
      return this;
    }),
    (Pt.prototype.toString = function () {
      var t = 0 | this.length;
      return 0 === t
        ? ""
        : 0 === arguments.length
          ? Jt(this, 0, t)
          : function (t, r, n) {
            var e = !1;
            if (((void 0 === r || 0 > r) && (r = 0), r > this.length)) return "";
            if (((void 0 === n || n > this.length) && (n = this.length), 0 >= n)) return "";
            if ((r >>>= 0) >= (n >>>= 0)) return "";
            for (t || (t = "utf8"); ; )
              switch (t) {
                case "hex":
                  return rr(this, r, n);
                case "utf8":
                case "utf-8":
                  return Jt(this, r, n);
                case "ascii":
                  return Qt(this, r, n);
                case "latin1":
                case "binary":
                  return tr(this, r, n);
                case "base64":
                  return Ht(this, r, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return nr(this, r, n);
                default:
                  if (e) throw new TypeError("Unknown encoding: " + t);
                  (t = (t + "").toLowerCase()), (e = !0);
              }
          }.apply(this, arguments);
    }),
    (Pt.prototype.equals = function (t) {
      if (!Dt(t)) throw new TypeError("Argument must be a Buffer");
      return this === t || 0 === Pt.compare(this, t);
    }),
    (Pt.prototype.inspect = function () {
      var t = "";
      return this.length > 0 && ((t = this.toString("hex", 0, 50).match(/.{2}/g).join(" ")), this.length > 50 && (t += " ... ")), "<Buffer " + t + ">";
    }),
    (Pt.prototype.compare = function (t, r, n, e, o) {
      if (!Dt(t)) throw new TypeError("Argument must be a Buffer");
      if ((void 0 === r && (r = 0), void 0 === n && (n = t ? t.length : 0), void 0 === e && (e = 0), void 0 === o && (o = this.length), 0 > r || n > t.length || 0 > e || o > this.length)) throw new RangeError("out of range index");
      if (e >= o && r >= n) return 0;
      if (e >= o) return -1;
      if (r >= n) return 1;
      if (((r >>>= 0), (n >>>= 0), (e >>>= 0), (o >>>= 0), this === t)) return 0;
      for (var i = o - e, u = n - r, a = Math.min(i, u), f = this.slice(e, o), c = t.slice(r, n), s = 0; a > s; ++s)
        if (f[s] !== c[s]) {
          (i = f[s]), (u = c[s]);
          break;
        }
      return u > i ? -1 : i > u ? 1 : 0;
    }),
    (Pt.prototype.includes = function (t, r, n) {
      return -1 !== this.indexOf(t, r, n);
    }),
    (Pt.prototype.indexOf = function (t, r, n) {
      return Nt(this, t, r, n, !0);
    }),
    (Pt.prototype.lastIndexOf = function (t, r, n) {
      return Nt(this, t, r, n, !1);
    }),
    (Pt.prototype.write = function (t, r, n, e) {
      if (void 0 === r) (e = "utf8"), (n = this.length), (r = 0);
      else if (void 0 === n && "string" == typeof r) (e = r), (n = this.length), (r = 0);
      else {
        if (!isFinite(r)) throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        (r |= 0), isFinite(n) ? ((n |= 0), void 0 === e && (e = "utf8")) : ((e = n), (n = void 0));
      }
      var o = this.length - r;
      if (((void 0 === n || n > o) && (n = o), (t.length > 0 && (0 > n || 0 > r)) || r > this.length)) throw new RangeError("Attempt to write outside buffer bounds");
      e || (e = "utf8");
      for (var i = !1; ; )
        switch (e) {
          case "hex":
            return Wt(this, t, r, n);
          case "utf8":
          case "utf-8":
            return qt(this, t, r, n);
          case "ascii":
            return Kt(this, t, r, n);
          case "latin1":
          case "binary":
            return Gt(this, t, r, n);
          case "base64":
            return Vt(this, t, r, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Zt(this, t, r, n);
          default:
            if (i) throw new TypeError("Unknown encoding: " + e);
            (e = ("" + e).toLowerCase()), (i = !0);
        }
    }),
    (Pt.prototype.toJSON = function () {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    });
  var Xt = 4096;
  function Qt(t, r, n) {
    var e = "";
    n = Math.min(t.length, n);
    for (var o = r; n > o; ++o) e += String.fromCharCode(127 & t[o]);
    return e;
  }
  function tr(t, r, n) {
    var e = "";
    n = Math.min(t.length, n);
    for (var o = r; n > o; ++o) e += String.fromCharCode(t[o]);
    return e;
  }
  function rr(t, r, n) {
    var e = t.length;
    (r && r >= 0) || (r = 0), (!n || 0 > n || n > e) && (n = e);
    for (var o = "", i = r; n > i; ++i) o += lr(t[i]);
    return o;
  }
  function nr(t, r, n) {
    for (var e = t.slice(r, n), o = "", i = 0; e.length > i; i += 2) o += String.fromCharCode(e[i] + 256 * e[i + 1]);
    return o;
  }
  function er(t, r, n) {
    if (t % 1 != 0 || 0 > t) throw new RangeError("offset is not uint");
    if (t + r > n) throw new RangeError("Trying to access beyond buffer length");
  }
  function or(t, r, n, e, o, i) {
    if (!Dt(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > o || i > r) throw new RangeError('"value" argument is out of bounds');
    if (n + e > t.length) throw new RangeError("Index out of range");
  }
  function ir(t, r, n, e) {
    0 > r && (r = 65535 + r + 1);
    for (var o = 0, i = Math.min(t.length - n, 2); i > o; ++o) t[n + o] = (r & (255 << (8 * (e ? o : 1 - o)))) >>> (8 * (e ? o : 1 - o));
  }
  function ur(t, r, n, e) {
    0 > r && (r = 4294967295 + r + 1);
    for (var o = 0, i = Math.min(t.length - n, 4); i > o; ++o) t[n + o] = (r >>> (8 * (e ? o : 3 - o))) & 255;
  }
  function ar(t, r, n, e, o, i) {
    if (n + e > t.length) throw new RangeError("Index out of range");
    if (0 > n) throw new RangeError("Index out of range");
  }
  function fr(t, r, n, e, o) {
    return o || ar(t, 0, n, 4), St(t, r, n, e, 23, 4), n + 4;
  }
  function cr(t, r, n, e, o) {
    return o || ar(t, 0, n, 8), St(t, r, n, e, 52, 8), n + 8;
  }
  (Pt.prototype.slice = function (t, r) {
    var n,
      e = this.length;
    if (((t = ~~t), (r = void 0 === r ? e : ~~r), 0 > t ? 0 > (t += e) && (t = 0) : t > e && (t = e), 0 > r ? 0 > (r += e) && (r = 0) : r > e && (r = e), t > r && (r = t), Pt.TYPED_ARRAY_SUPPORT))
      (n = this.subarray(t, r)).__proto__ = Pt.prototype;
    else {
      var o = r - t;
      n = new Pt(o, void 0);
      for (var i = 0; o > i; ++i) n[i] = this[i + t];
    }
    return n;
  }),
    (Pt.prototype.readUIntLE = function (t, r, n) {
      (t |= 0), (r |= 0), n || er(t, r, this.length);
      for (var e = this[t], o = 1, i = 0; ++i < r && (o *= 256); ) e += this[t + i] * o;
      return e;
    }),
    (Pt.prototype.readUIntBE = function (t, r, n) {
      (t |= 0), (r |= 0), n || er(t, r, this.length);
      for (var e = this[t + --r], o = 1; r > 0 && (o *= 256); ) e += this[t + --r] * o;
      return e;
    }),
    (Pt.prototype.readUInt8 = function (t, r) {
      return r || er(t, 1, this.length), this[t];
    }),
    (Pt.prototype.readUInt16LE = function (t, r) {
      return r || er(t, 2, this.length), this[t] | (this[t + 1] << 8);
    }),
    (Pt.prototype.readUInt16BE = function (t, r) {
      return r || er(t, 2, this.length), (this[t] << 8) | this[t + 1];
    }),
    (Pt.prototype.readUInt32LE = function (t, r) {
      return r || er(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
    }),
    (Pt.prototype.readUInt32BE = function (t, r) {
      return r || er(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
    }),
    (Pt.prototype.readIntLE = function (t, r, n) {
      (t |= 0), (r |= 0), n || er(t, r, this.length);
      for (var e = this[t], o = 1, i = 0; ++i < r && (o *= 256); ) e += this[t + i] * o;
      return (o *= 128) > e || (e -= Math.pow(2, 8 * r)), e;
    }),
    (Pt.prototype.readIntBE = function (t, r, n) {
      (t |= 0), (r |= 0), n || er(t, r, this.length);
      for (var e = r, o = 1, i = this[t + --e]; e > 0 && (o *= 256); ) i += this[t + --e] * o;
      return (o *= 128) > i || (i -= Math.pow(2, 8 * r)), i;
    }),
    (Pt.prototype.readInt8 = function (t, r) {
      return r || er(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
    }),
    (Pt.prototype.readInt16LE = function (t, r) {
      r || er(t, 2, this.length);
      var n = this[t] | (this[t + 1] << 8);
      return 32768 & n ? 4294901760 | n : n;
    }),
    (Pt.prototype.readInt16BE = function (t, r) {
      r || er(t, 2, this.length);
      var n = this[t + 1] | (this[t] << 8);
      return 32768 & n ? 4294901760 | n : n;
    }),
    (Pt.prototype.readInt32LE = function (t, r) {
      return r || er(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
    }),
    (Pt.prototype.readInt32BE = function (t, r) {
      return r || er(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
    }),
    (Pt.prototype.readFloatLE = function (t, r) {
      return r || er(t, 4, this.length), Ot(this, t, !0, 23, 4);
    }),
    (Pt.prototype.readFloatBE = function (t, r) {
      return r || er(t, 4, this.length), Ot(this, t, !1, 23, 4);
    }),
    (Pt.prototype.readDoubleLE = function (t, r) {
      return r || er(t, 8, this.length), Ot(this, t, !0, 52, 8);
    }),
    (Pt.prototype.readDoubleBE = function (t, r) {
      return r || er(t, 8, this.length), Ot(this, t, !1, 52, 8);
    }),
    (Pt.prototype.writeUIntLE = function (t, r, n, e) {
      ((t = +t), (r |= 0), (n |= 0), e) || or(this, t, r, n, Math.pow(2, 8 * n) - 1, 0);
      var o = 1,
        i = 0;
      for (this[r] = 255 & t; ++i < n && (o *= 256); ) this[r + i] = (t / o) & 255;
      return r + n;
    }),
    (Pt.prototype.writeUIntBE = function (t, r, n, e) {
      ((t = +t), (r |= 0), (n |= 0), e) || or(this, t, r, n, Math.pow(2, 8 * n) - 1, 0);
      var o = n - 1,
        i = 1;
      for (this[r + o] = 255 & t; --o >= 0 && (i *= 256); ) this[r + o] = (t / i) & 255;
      return r + n;
    }),
    (Pt.prototype.writeUInt8 = function (t, r, n) {
      return (t = +t), (r |= 0), n || or(this, t, r, 1, 255, 0), Pt.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), (this[r] = 255 & t), r + 1;
    }),
    (Pt.prototype.writeUInt16LE = function (t, r, n) {
      return (t = +t), (r |= 0), n || or(this, t, r, 2, 65535, 0), Pt.TYPED_ARRAY_SUPPORT ? ((this[r] = 255 & t), (this[r + 1] = t >>> 8)) : ir(this, t, r, !0), r + 2;
    }),
    (Pt.prototype.writeUInt16BE = function (t, r, n) {
      return (t = +t), (r |= 0), n || or(this, t, r, 2, 65535, 0), Pt.TYPED_ARRAY_SUPPORT ? ((this[r] = t >>> 8), (this[r + 1] = 255 & t)) : ir(this, t, r, !1), r + 2;
    }),
    (Pt.prototype.writeUInt32LE = function (t, r, n) {
      return (t = +t), (r |= 0), n || or(this, t, r, 4, 4294967295, 0), Pt.TYPED_ARRAY_SUPPORT ? ((this[r + 3] = t >>> 24), (this[r + 2] = t >>> 16), (this[r + 1] = t >>> 8), (this[r] = 255 & t)) : ur(this, t, r, !0), r + 4;
    }),
    (Pt.prototype.writeUInt32BE = function (t, r, n) {
      return (t = +t), (r |= 0), n || or(this, t, r, 4, 4294967295, 0), Pt.TYPED_ARRAY_SUPPORT ? ((this[r] = t >>> 24), (this[r + 1] = t >>> 16), (this[r + 2] = t >>> 8), (this[r + 3] = 255 & t)) : ur(this, t, r, !1), r + 4;
    }),
    (Pt.prototype.writeIntLE = function (t, r, n, e) {
      if (((t = +t), (r |= 0), !e)) {
        var o = Math.pow(2, 8 * n - 1);
        or(this, t, r, n, o - 1, -o);
      }
      var i = 0,
        u = 1,
        a = 0;
      for (this[r] = 255 & t; ++i < n && (u *= 256); ) 0 > t && 0 === a && 0 !== this[r + i - 1] && (a = 1), (this[r + i] = (((t / u) >> 0) - a) & 255);
      return r + n;
    }),
    (Pt.prototype.writeIntBE = function (t, r, n, e) {
      if (((t = +t), (r |= 0), !e)) {
        var o = Math.pow(2, 8 * n - 1);
        or(this, t, r, n, o - 1, -o);
      }
      var i = n - 1,
        u = 1,
        a = 0;
      for (this[r + i] = 255 & t; --i >= 0 && (u *= 256); ) 0 > t && 0 === a && 0 !== this[r + i + 1] && (a = 1), (this[r + i] = (((t / u) >> 0) - a) & 255);
      return r + n;
    }),
    (Pt.prototype.writeInt8 = function (t, r, n) {
      return (t = +t), (r |= 0), n || or(this, t, r, 1, 127, -128), Pt.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 0 > t && (t = 255 + t + 1), (this[r] = 255 & t), r + 1;
    }),
    (Pt.prototype.writeInt16LE = function (t, r, n) {
      return (t = +t), (r |= 0), n || or(this, t, r, 2, 32767, -32768), Pt.TYPED_ARRAY_SUPPORT ? ((this[r] = 255 & t), (this[r + 1] = t >>> 8)) : ir(this, t, r, !0), r + 2;
    }),
    (Pt.prototype.writeInt16BE = function (t, r, n) {
      return (t = +t), (r |= 0), n || or(this, t, r, 2, 32767, -32768), Pt.TYPED_ARRAY_SUPPORT ? ((this[r] = t >>> 8), (this[r + 1] = 255 & t)) : ir(this, t, r, !1), r + 2;
    }),
    (Pt.prototype.writeInt32LE = function (t, r, n) {
      return (t = +t), (r |= 0), n || or(this, t, r, 4, 2147483647, -2147483648), Pt.TYPED_ARRAY_SUPPORT ? ((this[r] = 255 & t), (this[r + 1] = t >>> 8), (this[r + 2] = t >>> 16), (this[r + 3] = t >>> 24)) : ur(this, t, r, !0), r + 4;
    }),
    (Pt.prototype.writeInt32BE = function (t, r, n) {
      return (
        (t = +t),
          (r |= 0),
        n || or(this, t, r, 4, 2147483647, -2147483648),
        0 > t && (t = 4294967295 + t + 1),
          Pt.TYPED_ARRAY_SUPPORT ? ((this[r] = t >>> 24), (this[r + 1] = t >>> 16), (this[r + 2] = t >>> 8), (this[r + 3] = 255 & t)) : ur(this, t, r, !1),
        r + 4
      );
    }),
    (Pt.prototype.writeFloatLE = function (t, r, n) {
      return fr(this, t, r, !0, n);
    }),
    (Pt.prototype.writeFloatBE = function (t, r, n) {
      return fr(this, t, r, !1, n);
    }),
    (Pt.prototype.writeDoubleLE = function (t, r, n) {
      return cr(this, t, r, !0, n);
    }),
    (Pt.prototype.writeDoubleBE = function (t, r, n) {
      return cr(this, t, r, !1, n);
    }),
    (Pt.prototype.copy = function (t, r, n, e) {
      if ((n || (n = 0), e || 0 === e || (e = this.length), t.length > r || (r = t.length), r || (r = 0), e > 0 && n > e && (e = n), e === n)) return 0;
      if (0 === t.length || 0 === this.length) return 0;
      if (0 > r) throw new RangeError("targetStart out of bounds");
      if (0 > n || n >= this.length) throw new RangeError("sourceStart out of bounds");
      if (0 > e) throw new RangeError("sourceEnd out of bounds");
      e > this.length && (e = this.length), e - n > t.length - r && (e = t.length - r + n);
      var o,
        i = e - n;
      if (this === t && r > n && e > r) for (o = i - 1; o >= 0; --o) t[o + r] = this[o + n];
      else if (1e3 > i || !Pt.TYPED_ARRAY_SUPPORT) for (o = 0; i > o; ++o) t[o + r] = this[o + n];
      else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), r);
      return i;
    }),
    (Pt.prototype.fill = function (t, r, n, e) {
      if ("string" == typeof t) {
        if (("string" == typeof r ? ((e = r), (r = 0), (n = this.length)) : "string" == typeof n && ((e = n), (n = this.length)), 1 === t.length)) {
          var o = t.charCodeAt(0);
          256 > o && (t = o);
        }
        if (void 0 !== e && "string" != typeof e) throw new TypeError("encoding must be a string");
        if ("string" == typeof e && !Pt.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
      } else "number" == typeof t && (t &= 255);
      if (0 > r || r > this.length || n > this.length) throw new RangeError("Out of range index");
      if (r >= n) return this;
      var i;
      if (((r >>>= 0), (n = void 0 === n ? this.length : n >>> 0), t || (t = 0), "number" == typeof t)) for (i = r; n > i; ++i) this[i] = t;
      else {
        var u = Dt(t) ? t : hr("" + new Pt(t, e)),
          a = u.length;
        for (i = 0; n - r > i; ++i) this[i + r] = u[i % a];
      }
      return this;
    });
  var sr = /[^+\/0-9A-Za-z-_]/g;
  function lr(t) {
    return 16 > t ? "0" + t.toString(16) : t.toString(16);
  }
  function hr(t, r) {
    var n;
    r = r || 1 / 0;
    for (var e = t.length, o = null, i = [], u = 0; e > u; ++u) {
      if ((n = t.charCodeAt(u)) > 55295 && 57344 > n) {
        if (!o) {
          if (n > 56319) {
            (r -= 3) > -1 && i.push(239, 191, 189);
            continue;
          }
          if (u + 1 === e) {
            (r -= 3) > -1 && i.push(239, 191, 189);
            continue;
          }
          o = n;
          continue;
        }
        if (56320 > n) {
          (r -= 3) > -1 && i.push(239, 191, 189), (o = n);
          continue;
        }
        n = 65536 + (((o - 55296) << 10) | (n - 56320));
      } else o && (r -= 3) > -1 && i.push(239, 191, 189);
      if (((o = null), 128 > n)) {
        if (0 > (r -= 1)) break;
        i.push(n);
      } else if (2048 > n) {
        if (0 > (r -= 2)) break;
        i.push((n >> 6) | 192, (63 & n) | 128);
      } else if (65536 > n) {
        if (0 > (r -= 3)) break;
        i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
      } else {
        if (n >= 1114112) throw Error("Invalid code point");
        if (0 > (r -= 4)) break;
        i.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
      }
    }
    return i;
  }
  function pr(t) {
    return (function (t) {
      var r, n, e, o, i, u;
      Et || xt();
      var a = t.length;
      if (a % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
      (u = new mt((3 * a) / 4 - (i = "=" === t[a - 2] ? 2 : "=" === t[a - 1] ? 1 : 0))), (e = i > 0 ? a - 4 : a);
      var f = 0;
      for (r = 0, n = 0; e > r; r += 4, n += 3)
        (o = (wt[t.charCodeAt(r)] << 18) | (wt[t.charCodeAt(r + 1)] << 12) | (wt[t.charCodeAt(r + 2)] << 6) | wt[t.charCodeAt(r + 3)]), (u[f++] = (o >> 16) & 255), (u[f++] = (o >> 8) & 255), (u[f++] = 255 & o);
      return (
        2 === i
          ? ((o = (wt[t.charCodeAt(r)] << 2) | (wt[t.charCodeAt(r + 1)] >> 4)), (u[f++] = 255 & o))
          : 1 === i && ((o = (wt[t.charCodeAt(r)] << 10) | (wt[t.charCodeAt(r + 1)] << 4) | (wt[t.charCodeAt(r + 2)] >> 2)), (u[f++] = (o >> 8) & 255), (u[f++] = 255 & o)),
          u
      );
    })(
      (function (t) {
        if (
          2 >
          (t = (function (t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
          })(t).replace(sr, "")).length
        )
          return "";
        for (; t.length % 4 != 0; ) t += "=";
        return t;
      })(t)
    );
  }
  function vr(t, r, n, e) {
    for (var o = 0; e > o && o + n < r.length && o < t.length; ++o) r[o + n] = t[o];
    return o;
  }
  function yr(t) {
    return (
      null != t &&
      (!!t._isBuffer ||
        dr(t) ||
        (function (t) {
          return "function" == typeof t.readFloatLE && "function" == typeof t.slice && dr(t.slice(0, 0));
        })(t))
    );
  }
  function dr(t) {
    return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
  }
  var gr = Object.freeze({
      INSPECT_MAX_BYTES: 50,
      kMaxLength: Tt,
      Buffer: Pt,
      SlowBuffer: function (t) {
        return +t != t && (t = 0), Pt.alloc(+t);
      },
      isBuffer: yr,
    }),
    _r = e(function (t, r) {
      var n = gr.Buffer;
      function e(t, r) {
        for (var n in t) r[n] = t[n];
      }
      function o(t, r, e) {
        return n(t, r, e);
      }
      n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? (t.exports = gr) : (e(gr, r), (r.Buffer = o)),
        e(n, o),
        (o.from = function (t, r, e) {
          if ("number" == typeof t) throw new TypeError("Argument must not be a number");
          return n(t, r, e);
        }),
        (o.alloc = function (t, r, e) {
          if ("number" != typeof t) throw new TypeError("Argument must be a number");
          var o = n(t);
          return void 0 !== r ? ("string" == typeof e ? o.fill(r, e) : o.fill(r)) : o.fill(0), o;
        }),
        (o.allocUnsafe = function (t) {
          if ("number" != typeof t) throw new TypeError("Argument must be a number");
          return n(t);
        }),
        (o.allocUnsafeSlow = function (t) {
          if ("number" != typeof t) throw new TypeError("Argument must be a number");
          return gr.SlowBuffer(t);
        });
    }),
    br = Object.freeze({ default: _r, __moduleExports: _r, Buffer: _r.Buffer }),
    wr = ((br && _r) || br).Buffer,
    mr = function (t) {
      for (var r = {}, n = t.length, e = t.charAt(0), o = 0; t.length > o; o++) {
        var i = t.charAt(o);
        if (void 0 !== r[i]) throw new TypeError(i + " is ambiguous");
        r[i] = o;
      }
      function u(t) {
        if ("string" != typeof t) throw new TypeError("Expected String");
        if (0 === t.length) return wr.allocUnsafe(0);
        for (var o = [0], i = 0; t.length > i; i++) {
          var u = r[t[i]];
          if (void 0 === u) return;
          for (var a = 0, f = u; o.length > a; ++a) (o[a] = 255 & (f += o[a] * n)), (f >>= 8);
          for (; f > 0; ) o.push(255 & f), (f >>= 8);
        }
        for (var c = 0; t[c] === e && t.length - 1 > c; ++c) o.push(0);
        return wr.from(o.reverse());
      }
      return {
        encode: function (r) {
          if (0 === r.length) return "";
          for (var o = [0], i = 0; r.length > i; ++i) {
            for (var u = 0, a = r[i]; o.length > u; ++u) (o[u] = (a += o[u] << 8) % n), (a = (a / n) | 0);
            for (; a > 0; ) o.push(a % n), (a = (a / n) | 0);
          }
          for (var f = "", c = 0; 0 === r[c] && r.length - 1 > c; ++c) f += e;
          for (var s = o.length - 1; s >= 0; --s) f += t[o[s]];
          return f;
        },
        decodeUnsafe: u,
        decode: function (t) {
          var r = u(t);
          if (r) return r;
          throw Error("Non-base" + n + " character");
        },
      };
    },
    Er = Object.freeze({ default: mr, __moduleExports: mr }),
    xr = ((Er && mr) || Er)("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
    Ar = (function () {
      function t() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        o(this, t), (this._keypair = r ? gt.sign.keyPair.fromSecretKey(r) : gt.sign.keyPair());
      }
      return (
        pt(t, [
          {
            key: "publicKey",
            get: function () {
              return xr.encode(this._keypair.publicKey);
            },
          },
          {
            key: "secretKey",
            get: function () {
              return this._keypair.secretKey;
            },
          },
        ]),
          t
      );
    })(),
    jr = Math.ceil,
    Or = Math.floor,
    Sr = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? Or : jr)(t);
    },
    Rr = Object.freeze({ default: Sr, __moduleExports: Sr }),
    kr = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t;
    },
    Tr = Object.freeze({ default: kr, __moduleExports: kr }),
    zr = (Rr && Sr) || Rr,
    Ur = (Tr && kr) || Tr,
    Pr = function (t) {
      return function (r, n) {
        var e,
          o,
          i = Ur(r) + "",
          u = zr(n),
          a = i.length;
        return 0 > u || u >= a
          ? t
            ? ""
            : void 0
          : 55296 > (e = i.charCodeAt(u)) || e > 56319 || u + 1 === a || 56320 > (o = i.charCodeAt(u + 1)) || o > 57343
            ? t
              ? i.charAt(u)
              : e
            : t
              ? i.slice(u, u + 2)
              : o - 56320 + ((e - 55296) << 10) + 65536;
      };
    },
    Lr = Object.freeze({ default: Pr, __moduleExports: Pr }),
    Ir = Object.freeze({ default: !0, __moduleExports: !0 }),
    Mr = Q,
    Br = Object.freeze({ default: Mr, __moduleExports: Mr }),
    Cr = {},
    Dr = Object.freeze({ default: Cr, __moduleExports: Cr }),
    Fr = {}.toString,
    Yr = function (t) {
      return Fr.call(t).slice(8, -1);
    },
    Nr = Object.freeze({ default: Yr, __moduleExports: Yr }),
    $r = (Nr && Yr) || Nr,
    Wr = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (t) {
        return "String" == $r(t) ? t.split("") : Object(t);
      },
    qr = Object.freeze({ default: Wr, __moduleExports: Wr }),
    Kr = (qr && Wr) || qr,
    Gr = function (t) {
      return Kr(Ur(t));
    },
    Vr = Object.freeze({ default: Gr, __moduleExports: Gr }),
    Zr = Math.min,
    Hr = function (t) {
      return t > 0 ? Zr(zr(t), 9007199254740991) : 0;
    },
    Jr = Object.freeze({ default: Hr, __moduleExports: Hr }),
    Xr = Math.max,
    Qr = Math.min,
    tn = function (t, r) {
      return 0 > (t = zr(t)) ? Xr(t + r, 0) : Qr(t, r);
    },
    rn = Object.freeze({ default: tn, __moduleExports: tn }),
    nn = (Vr && Gr) || Vr,
    en = (Jr && Hr) || Jr,
    on = (rn && tn) || rn,
    un = function (t) {
      return function (r, n, e) {
        var o,
          i = nn(r),
          u = en(i.length),
          a = on(e, u);
        if (t && n != n) {
          for (; u > a; ) if ((o = i[a++]) != o) return !0;
        } else for (; u > a; a++) if ((t || a in i) && i[a] === n) return t || a || 0;
        return !t && -1;
      };
    },
    an = Object.freeze({ default: un, __moduleExports: un }),
    fn = A["__core-js_shared__"] || (A["__core-js_shared__"] = {}),
    cn = function (t) {
      return fn[t] || (fn[t] = {});
    },
    sn = Object.freeze({ default: cn, __moduleExports: cn }),
    ln = 0,
    hn = Math.random(),
    pn = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++ln + hn).toString(36));
    },
    vn = Object.freeze({ default: pn, __moduleExports: pn }),
    yn = (sn && cn) || sn,
    dn = (vn && pn) || vn,
    gn = yn("keys"),
    _n = function (t) {
      return gn[t] || (gn[t] = dn(t));
    },
    bn = Object.freeze({ default: _n, __moduleExports: _n }),
    wn = (bn && _n) || bn,
    mn = ((an && un) || an)(!1),
    En = wn("IE_PROTO"),
    xn = function (t, r) {
      var n,
        e = nn(t),
        o = 0,
        i = [];
      for (n in e) n != En && tt(e, n) && i.push(n);
      for (; r.length > o; ) tt(e, (n = r[o++])) && (~mn(i, n) || i.push(n));
      return i;
    },
    An = Object.freeze({ default: xn, __moduleExports: xn }),
    jn = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
    On = Object.freeze({ default: jn, __moduleExports: jn }),
    Sn = (An && xn) || An,
    Rn = (On && jn) || On,
    kn =
      Object.keys ||
      function (t) {
        return Sn(t, Rn);
      },
    Tn = Object.freeze({ default: kn, __moduleExports: kn }),
    zn = (Tn && kn) || Tn,
    Un = k
      ? Object.defineProperties
      : function (t, r) {
        I(t);
        for (var n, e = zn(r), o = e.length, i = 0; o > i; ) W.f(t, (n = e[i++]), r[n]);
        return t;
      },
    Pn = Object.freeze({ default: Un, __moduleExports: Un }),
    Ln = A.document,
    In = Ln && Ln.documentElement,
    Mn = Object.freeze({ default: In, __moduleExports: In }),
    Bn = (Pn && Un) || Pn,
    Cn = (Mn && In) || Mn,
    Dn = wn("IE_PROTO"),
    Fn = function () {},
    Yn = function () {
      var t,
        r = T("iframe"),
        n = Rn.length;
      for (r.style.display = "none", Cn.appendChild(r), r.src = "javascript:", (t = r.contentWindow.document).open(), t.write("<script>document.F=Object</script>"), t.close(), Yn = t.F; n--; ) delete Yn.prototype[Rn[n]];
      return Yn();
    },
    Nn =
      Object.create ||
      function (t, r) {
        var n;
        return null !== t ? ((Fn.prototype = I(t)), (n = new Fn()), (Fn.prototype = null), (n[Dn] = t)) : (n = Yn()), void 0 === r ? n : Bn(n, r);
      },
    $n = Object.freeze({ default: Nn, __moduleExports: Nn }),
    Wn = e(function (t) {
      var r = yn("wks"),
        n = A.Symbol,
        e = "function" == typeof n;
      (t.exports = function (t) {
        return r[t] || (r[t] = (e && n[t]) || (e ? n : dn)("Symbol." + t));
      }).store = r;
    }),
    qn = Object.freeze({ default: Wn, __moduleExports: Wn }),
    Kn = (qn && Wn) || qn,
    Gn = W.f,
    Vn = Kn("toStringTag"),
    Zn = function (t, r, n) {
      t && !tt((t = n ? t : t.prototype), Vn) && Gn(t, Vn, { configurable: !0, value: r });
    },
    Hn = Object.freeze({ default: Zn, __moduleExports: Zn }),
    Jn = ($n && Nn) || $n,
    Xn = (Hn && Zn) || Hn,
    Qn = {};
  Q(Qn, Kn("iterator"), function () {
    return this;
  });
  var te = function (t, r, n) {
      (t.prototype = Jn(Qn, { next: q(1, n) })), Xn(t, r + " Iterator");
    },
    re = Object.freeze({ default: te, __moduleExports: te }),
    ne = function (t) {
      return Object(Ur(t));
    },
    ee = Object.freeze({ default: ne, __moduleExports: ne }),
    oe = (ee && ne) || ee,
    ie = wn("IE_PROTO"),
    ue = Object.prototype,
    ae =
      Object.getPrototypeOf ||
      function (t) {
        return (t = oe(t)), tt(t, ie) ? t[ie] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? ue : null;
      },
    fe = Object.freeze({ default: ae, __moduleExports: ae }),
    ce = !!Ir || Ir,
    se = (Br && Mr) || Br,
    le = (Dr && Cr) || Dr,
    he = (re && te) || re,
    pe = (fe && ae) || fe,
    ve = Kn("iterator"),
    ye = !([].keys && "next" in [].keys()),
    de = function () {
      return this;
    },
    ge = function (t, r, n, e, o, i, u) {
      he(n, r, e);
      var a,
        f,
        c,
        s = function (t) {
          if (!ye && t in v) return v[t];
          switch (t) {
            case "keys":
            case "values":
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this, t);
          };
        },
        l = r + " Iterator",
        h = "values" == o,
        p = !1,
        v = t.prototype,
        y = v[ve] || v["@@iterator"] || (o && v[o]),
        d = y || s(o),
        g = o ? (h ? s("entries") : d) : void 0,
        _ = ("Array" == r && v.entries) || y;
      if (
        (_ && (c = pe(_.call(new t()))) !== Object.prototype && c.next && (Xn(c, l, !0), ce || "function" == typeof c[ve] || Q(c, ve, de)),
        h &&
        y &&
        "values" !== y.name &&
        ((p = !0),
          (d = function () {
            return y.call(this);
          })),
        (ce && !u) || (!ye && !p && v[ve]) || Q(v, ve, d),
          (le[r] = d),
          (le[l] = de),
          o)
      )
        if (((a = { values: h ? d : s("values"), keys: i ? d : s("keys"), entries: g }), u)) for (f in a) f in v || se(v, f, a[f]);
        else ot(ot.P + ot.F * (ye || p), r, a);
      return a;
    },
    _e = Object.freeze({ default: ge, __moduleExports: ge }),
    be = (_e && ge) || _e,
    we = ((Lr && Pr) || Lr)(!0);
  be(
    String,
    "String",
    function (t) {
      (this._t = t + ""), (this._i = 0);
    },
    function () {
      var t,
        r = this._t,
        n = this._i;
      return r.length > n ? ((t = we(r, n)), (this._i += t.length), { value: t, done: !1 }) : { value: void 0, done: !0 };
    }
  );
  var me = function (t, r, n, e) {
      try {
        return e ? r(I(n)[0], n[1]) : r(n);
      } catch (r) {
        var o = t.return;
        throw (void 0 !== o && I(o.call(t)), r);
      }
    },
    Ee = Object.freeze({ default: me, __moduleExports: me }),
    xe = Kn("iterator"),
    Ae = Array.prototype,
    je = function (t) {
      return void 0 !== t && (le.Array === t || Ae[xe] === t);
    },
    Oe = Object.freeze({ default: je, __moduleExports: je }),
    Se = function (t, r, n) {
      r in t ? W.f(t, r, q(0, n)) : (t[r] = n);
    },
    Re = Object.freeze({ default: Se, __moduleExports: Se }),
    ke = Kn("toStringTag"),
    Te =
      "Arguments" ==
      $r(
        (function () {
          return arguments;
        })()
      ),
    ze = function (t) {
      var r, n, e;
      return void 0 === t
        ? "Undefined"
        : null === t
          ? "Null"
          : "string" ==
          typeof (n = (function (t, r) {
            try {
              return t[r];
            } catch (t) {}
          })((r = Object(t)), ke))
            ? n
            : Te
              ? $r(r)
              : "Object" == (e = $r(r)) && "function" == typeof r.callee
                ? "Arguments"
                : e;
    },
    Ue = Object.freeze({ default: ze, __moduleExports: ze }),
    Pe = (Ue && ze) || Ue,
    Le = Kn("iterator"),
    Ie = (J.getIteratorMethod = function (t) {
      if (void 0 != t) return t[Le] || t["@@iterator"] || le[Pe(t)];
    }),
    Me = Object.freeze({ default: Ie, __moduleExports: Ie }),
    Be = Kn("iterator"),
    Ce = !1;
  try {
    [7][Be]().return = function () {
      Ce = !0;
    };
  } catch (t) {}
  var De = function (t, r) {
      if (!r && !Ce) return !1;
      var n = !1;
      try {
        var e = [7],
          o = e[Be]();
        (o.next = function () {
          return { done: (n = !0) };
        }),
          (e[Be] = function () {
            return o;
          }),
          t(e);
      } catch (t) {}
      return n;
    },
    Fe = Object.freeze({ default: De, __moduleExports: De }),
    Ye = (Ee && me) || Ee,
    Ne = (Oe && je) || Oe,
    $e = (Re && Se) || Re,
    We = (Me && Ie) || Me,
    qe = (Fe && De) || Fe;
  ot(ot.S + ot.F * !qe(function (t) {}), "Array", {
    from: function (t) {
      var r,
        n,
        e,
        o,
        i = oe(t),
        u = "function" == typeof this ? this : Array,
        a = arguments.length,
        f = a > 1 ? arguments[1] : void 0,
        c = void 0 !== f,
        s = 0,
        l = We(i);
      if ((c && (f = X(f, a > 2 ? arguments[2] : void 0, 2)), void 0 == l || (u == Array && Ne(l)))) for (n = new u((r = en(i.length))); r > s; s++) $e(n, s, c ? f(i[s], s) : i[s]);
      else for (o = l.call(i), n = new u(); !(e = o.next()).done; s++) $e(n, s, c ? Ye(o, f, [e.value, s], !0) : e.value);
      return (n.length = s), n;
    },
  });
  var Ke = J.Array.from,
    Ge = Object.freeze({ default: Ke, __moduleExports: Ke }),
    Ve = (Ge && Ke) || Ge,
    Ze = e(function (t) {
      t.exports = { default: Ve, __esModule: !0 };
    }),
    He = n(Ze),
    Je = Object.freeze({ default: He, __moduleExports: Ze }),
    Xe = (Je && He) || Je,
    Qe = n(
      e(function (t, r) {
        r.__esModule = !0;
        var n,
          e = (n = Xe) && n.__esModule ? n : { default: n };
        r.default = function (t) {
          if (Array.isArray(t)) {
            for (var r = 0, n = Array(t.length); t.length > r; r++) n[r] = t[r];
            return n;
          }
          return (0, e.default)(t);
        };
      })
    ),
    to = function () {},
    ro = Object.freeze({ default: to, __moduleExports: to }),
    no = function (t, r) {
      return { value: r, done: !!t };
    },
    eo = Object.freeze({ default: no, __moduleExports: no }),
    oo = (ro && to) || ro,
    io = (eo && no) || eo;
  be(
    Array,
    "Array",
    function (t, r) {
      (this._t = nn(t)), (this._i = 0), (this._k = r);
    },
    function () {
      var t = this._t,
        r = this._k,
        n = this._i++;
      return t && t.length > n ? io(0, "keys" == r ? n : "values" == r ? t[n] : [n, t[n]]) : ((this._t = void 0), io(1));
    },
    "values"
  );
  (le.Arguments = le.Array), oo("keys"), oo("values"), oo("entries");
  for (
    var uo = Kn("toStringTag"),
      ao = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
        ","
      ),
      fo = 0;
    ao.length > fo;
    fo++
  ) {
    var co = ao[fo],
      so = A[co],
      lo = so && so.prototype;
    lo && !lo[uo] && Q(lo, uo, co), (le[co] = le.Array);
  }
  var ho,
    po,
    vo,
    yo = function (t, r, n, e) {
      if (!(t instanceof r) || (void 0 !== e && e in t)) throw TypeError(n + ": incorrect invocation!");
      return t;
    },
    go = Object.freeze({ default: yo, __moduleExports: yo }),
    _o = e(function (t) {
      var r = {},
        n = {},
        e = (t.exports = function (t, e, o, i, u) {
          var a,
            f,
            c,
            s,
            l = u
              ? function () {
                return t;
              }
              : We(t),
            h = X(o, i, e ? 2 : 1),
            p = 0;
          if ("function" != typeof l) throw TypeError(t + " is not iterable!");
          if (Ne(l)) {
            for (a = en(t.length); a > p; p++) if ((s = e ? h(I((f = t[p]))[0], f[1]) : h(t[p])) === r || s === n) return s;
          } else for (c = l.call(t); !(f = c.next()).done; ) if ((s = Ye(c, h, f.value, e)) === r || s === n) return s;
        });
      (e.BREAK = r), (e.RETURN = n);
    }),
    bo = Object.freeze({ default: _o, __moduleExports: _o }),
    wo = Kn("species"),
    mo = function (t, r) {
      var n,
        e = I(t).constructor;
      return void 0 === e || void 0 == (n = I(e)[wo]) ? r : l(n);
    },
    Eo = Object.freeze({ default: mo, __moduleExports: mo }),
    xo = function (t, r, n) {
      var e = void 0 === n;
      switch (r.length) {
        case 0:
          return e ? t() : t.call(n);
        case 1:
          return e ? t(r[0]) : t.call(n, r[0]);
        case 2:
          return e ? t(r[0], r[1]) : t.call(n, r[0], r[1]);
        case 3:
          return e ? t(r[0], r[1], r[2]) : t.call(n, r[0], r[1], r[2]);
        case 4:
          return e ? t(r[0], r[1], r[2], r[3]) : t.call(n, r[0], r[1], r[2], r[3]);
      }
      return t.apply(n, r);
    },
    Ao = Object.freeze({ default: xo, __moduleExports: xo }),
    jo = (Ao && xo) || Ao,
    Oo = A.process,
    So = A.setImmediate,
    Ro = A.clearImmediate,
    ko = A.MessageChannel,
    To = A.Dispatch,
    zo = 0,
    Uo = {},
    Po = function () {
      var t = +this;
      if (Uo.hasOwnProperty(t)) {
        var r = Uo[t];
        delete Uo[t], r();
      }
    },
    Lo = function (t) {
      Po.call(t.data);
    };
  (So && Ro) ||
  ((So = function (t) {
    for (var r = [], n = 1; arguments.length > n; ) r.push(arguments[n++]);
    return (
      (Uo[++zo] = function () {
        jo("function" == typeof t ? t : Function(t), r);
      }),
        ho(zo),
        zo
    );
  }),
    (Ro = function (t) {
      delete Uo[t];
    }),
    "process" == $r(Oo)
      ? (ho = function (t) {
        Oo.nextTick(X(Po, t, 1));
      })
      : To && To.now
      ? (ho = function (t) {
        To.now(X(Po, t, 1));
      })
      : ko
        ? ((vo = (po = new ko()).port2), (po.port1.onmessage = Lo), (ho = X(vo.postMessage, vo, 1)))
        : A.addEventListener && "function" == typeof postMessage && !A.importScripts
          ? ((ho = function (t) {
            A.postMessage(t + "", "*");
          }),
            A.addEventListener("message", Lo, !1))
          : (ho =
            "onreadystatechange" in T("script")
              ? function (t) {
                Cn.appendChild(T("script")).onreadystatechange = function () {
                  Cn.removeChild(this), Po.call(t);
                };
              }
              : function (t) {
                setTimeout(X(Po, t, 1), 0);
              }));
  var Io = { set: So, clear: Ro },
    Mo = Object.freeze({ default: Io, __moduleExports: Io, set: Io.set, clear: Io.clear }),
    Bo = (Mo && Io) || Mo,
    Co = Bo.set,
    Do = A.MutationObserver || A.WebKitMutationObserver,
    Fo = A.process,
    Yo = A.Promise,
    No = "process" == $r(Fo),
    $o = function () {
      var t,
        r,
        n,
        e = function () {
          var e, o;
          for (No && (e = Fo.domain) && e.exit(); t; ) {
            (o = t.fn), (t = t.next);
            try {
              o();
            } catch (e) {
              throw (t ? n() : (r = void 0), e);
            }
          }
          (r = void 0), e && e.enter();
        };
      if (No)
        n = function () {
          Fo.nextTick(e);
        };
      else if (!Do || (A.navigator && A.navigator.standalone))
        if (Yo && Yo.resolve) {
          var o = Yo.resolve();
          n = function () {
            o.then(e);
          };
        } else
          n = function () {
            Co.call(A, e);
          };
      else {
        var i = !0,
          u = document.createTextNode("");
        new Do(e).observe(u, { characterData: !0 }),
          (n = function () {
            u.data = i = !i;
          });
      }
      return function (e) {
        var o = { fn: e, next: void 0 };
        r && (r.next = o), t || ((t = o), n()), (r = o);
      };
    },
    Wo = Object.freeze({ default: $o, __moduleExports: $o });
  var qo,
    Ko,
    Go,
    Vo,
    Zo = function (t) {
      return new (function (t) {
        var r, n;
        (this.promise = new t(function (t, e) {
          if (void 0 !== r || void 0 !== n) throw TypeError("Bad Promise constructor");
          (r = t), (n = e);
        })),
          (this.resolve = l(r)),
          (this.reject = l(n));
      })(t);
    },
    Ho = { f: Zo },
    Jo = Object.freeze({ default: Ho, __moduleExports: Ho, f: Zo }),
    Xo = function (t) {
      try {
        return { e: !1, v: t() };
      } catch (t) {
        return { e: !0, v: t };
      }
    },
    Qo = Object.freeze({ default: Xo, __moduleExports: Xo }),
    ti = (Jo && Ho) || Jo,
    ri = function (t, r) {
      if ((I(t), d(r) && r.constructor === t)) return r;
      var n = ti.f(t);
      return (0, n.resolve)(r), n.promise;
    },
    ni = Object.freeze({ default: ri, __moduleExports: ri }),
    ei = function (t, r, n) {
      for (var e in r) n && t[e] ? (t[e] = r[e]) : Q(t, e, r[e]);
      return t;
    },
    oi = Object.freeze({ default: ei, __moduleExports: ei }),
    ii = Kn("species"),
    ui = function (t) {
      var r = "function" == typeof J[t] ? J[t] : A[t];
      k &&
      r &&
      !r[ii] &&
      W.f(r, ii, {
        configurable: !0,
        get: function () {
          return this;
        },
      });
    },
    ai = Object.freeze({ default: ui, __moduleExports: ui }),
    fi = (go && yo) || go,
    ci = (bo && _o) || bo,
    si = (Eo && mo) || Eo,
    li = (Qo && Xo) || Qo,
    hi = (ni && ri) || ni,
    pi = (oi && ei) || oi,
    vi = (ai && ui) || ai,
    yi = Bo.set,
    di = ((Wo && $o) || Wo)(),
    gi = A.TypeError,
    _i = A.process,
    bi = A.Promise,
    wi = "process" == Pe(_i),
    mi = function () {},
    Ei = (Ko = ti.f),
    xi = !!(function () {
      try {
        var t = bi.resolve(1),
          r = ((t.constructor = {})[Kn("species")] = function (t) {
            t(mi, mi);
          });
        return (wi || "function" == typeof PromiseRejectionEvent) && t.then(mi) instanceof r;
      } catch (t) {}
    })(),
    Ai = function (t) {
      var r;
      return !(!d(t) || "function" != typeof (r = t.then)) && r;
    },
    ji = function (t, r) {
      if (!t._n) {
        t._n = !0;
        var n = t._c;
        di(function () {
          for (
            var e = t._v,
              o = 1 == t._s,
              i = 0,
              u = function (r) {
                var n,
                  i,
                  u,
                  a = o ? r.ok : r.fail,
                  f = r.resolve,
                  c = r.reject,
                  s = r.domain;
                try {
                  a
                    ? (o || (2 == t._h && Ri(t), (t._h = 1)),
                      !0 === a ? (n = e) : (s && s.enter(), (n = a(e)), s && (s.exit(), (u = !0))),
                      n === r.promise ? c(gi("Promise-chain cycle")) : (i = Ai(n)) ? i.call(n, f, c) : f(n))
                    : c(e);
                } catch (t) {
                  s && !u && s.exit(), c(t);
                }
              };
            n.length > i;
          
          )
            u(n[i++]);
          (t._c = []), (t._n = !1), r && !t._h && Oi(t);
        });
      }
    },
    Oi = function (t) {
      yi.call(A, function () {
        var r,
          n,
          e,
          o = t._v,
          i = Si(t);
        if (
          (i &&
          ((r = li(function () {
            wi ? _i.emit("unhandledRejection", o, t) : (n = A.onunhandledrejection) ? n({ promise: t, reason: o }) : (e = A.console) && e.error && e.error("Unhandled promise rejection", o);
          })),
            (t._h = wi || Si(t) ? 2 : 1)),
            (t._a = void 0),
          i && r.e)
        )
          throw r.v;
      });
    },
    Si = function (t) {
      return 1 !== t._h && 0 === (t._a || t._c).length;
    },
    Ri = function (t) {
      yi.call(A, function () {
        var r;
        wi ? _i.emit("rejectionHandled", t) : (r = A.onrejectionhandled) && r({ promise: t, reason: t._v });
      });
    },
    ki = function (t) {
      var r = this;
      r._d || ((r._d = !0), ((r = r._w || r)._v = t), (r._s = 2), r._a || (r._a = r._c.slice()), ji(r, !0));
    },
    Ti = function (t) {
      var r,
        n = this;
      if (!n._d) {
        (n._d = !0), (n = n._w || n);
        try {
          if (n === t) throw gi("Promise can't be resolved itself");
          (r = Ai(t))
            ? di(function () {
              var e = { _w: n, _d: !1 };
              try {
                r.call(t, X(Ti, e, 1), X(ki, e, 1));
              } catch (t) {
                ki.call(e, t);
              }
            })
            : ((n._v = t), (n._s = 1), ji(n, !1));
        } catch (t) {
          ki.call({ _w: n, _d: !1 }, t);
        }
      }
    };
  xi ||
  ((bi = function (t) {
    fi(this, bi, "Promise", "_h"), l(t), qo.call(this);
    try {
      t(X(Ti, this, 1), X(ki, this, 1));
    } catch (t) {
      ki.call(this, t);
    }
  }),
    ((qo = function (t) {
      (this._c = []), (this._a = void 0), (this._s = 0), (this._d = !1), (this._v = void 0), (this._h = 0), (this._n = !1);
    }).prototype = pi(bi.prototype, {
      then: function (t, r) {
        var n = Ei(si(this, bi));
        return (n.ok = "function" != typeof t || t), (n.fail = "function" == typeof r && r), (n.domain = wi ? _i.domain : void 0), this._c.push(n), this._a && this._a.push(n), this._s && ji(this, !1), n.promise;
      },
      catch: function (t) {
        return this.then(void 0, t);
      },
    })),
    (Go = function () {
      var t = new qo();
      (this.promise = t), (this.resolve = X(Ti, t, 1)), (this.reject = X(ki, t, 1));
    }),
    (ti.f = Ei = function (t) {
      return t === bi || t === Vo ? new Go(t) : Ko(t);
    })),
    ot(ot.G + ot.W + ot.F * !xi, { Promise: bi }),
    Xn(bi, "Promise"),
    vi("Promise"),
    (Vo = J.Promise),
    ot(ot.S + ot.F * !xi, "Promise", {
      reject: function (t) {
        var r = Ei(this);
        return (0, r.reject)(t), r.promise;
      },
    }),
    ot(ot.S + ot.F * (ce || !xi), "Promise", {
      resolve: function (t) {
        return hi(ce && this === Vo ? bi : this, t);
      },
    }),
    ot(
      ot.S +
      ot.F *
      !(
        xi &&
        qe(function (t) {
          bi.all(t).catch(mi);
        })
      ),
      "Promise",
      {
        all: function (t) {
          var r = this,
            n = Ei(r),
            e = n.resolve,
            o = n.reject,
            i = li(function () {
              var n = [],
                i = 0,
                u = 1;
              ci(t, !1, function (t) {
                var a = i++,
                  f = !1;
                n.push(void 0),
                  u++,
                  r.resolve(t).then(function (t) {
                    f || ((f = !0), (n[a] = t), --u || e(n));
                  }, o);
              }),
              --u || e(n);
            });
          return i.e && o(i.v), n.promise;
        },
        race: function (t) {
          var r = this,
            n = Ei(r),
            e = n.reject,
            o = li(function () {
              ci(t, !1, function (t) {
                r.resolve(t).then(n.resolve, e);
              });
            });
          return o.e && e(o.v), n.promise;
        },
      }
    ),
    ot(ot.P + ot.R, "Promise", {
      finally: function (t) {
        var r = si(this, J.Promise || A.Promise),
          n = "function" == typeof t;
        return this.then(
          n
            ? function (n) {
              return hi(r, t()).then(function () {
                return n;
              });
            }
            : t,
          n
            ? function (n) {
              return hi(r, t()).then(function () {
                throw n;
              });
            }
            : t
        );
      },
    }),
    ot(ot.S, "Promise", {
      try: function (t) {
        var r = ti.f(this),
          n = li(t);
        return (n.e ? r.reject : r.resolve)(n.v), r.promise;
      },
    });
  var zi = J.Promise,
    Ui = Object.freeze({ default: zi, __moduleExports: zi }),
    Pi = (Ui && zi) || Ui,
    Li = e(function (t) {
      t.exports = { default: Pi, __esModule: !0 };
    }),
    Ii = n(Li),
    Mi = Object.freeze({ default: Ii, __moduleExports: Li }),
    Bi = e(function (t) {
      !(function (r) {
        var n,
          e = Object.prototype,
          o = e.hasOwnProperty,
          i = "function" == typeof Symbol ? Symbol : {},
          u = i.iterator || "@@iterator",
          a = i.asyncIterator || "@@asyncIterator",
          f = i.toStringTag || "@@toStringTag",
          c = r.regeneratorRuntime;
        if (c) t.exports = c;
        else {
          (c = r.regeneratorRuntime = t.exports).wrap = b;
          var s = "suspendedStart",
            l = "suspendedYield",
            h = "executing",
            p = "completed",
            v = {},
            y = {};
          y[u] = function () {
            return this;
          };
          var d = Object.getPrototypeOf,
            g = d && d(d(T([])));
          g && g !== e && o.call(g, u) && (y = g);
          var _ = (x.prototype = m.prototype = Object.create(y));
          (E.prototype = _.constructor = x),
            (x.constructor = E),
            (x[f] = E.displayName = "GeneratorFunction"),
            (c.isGeneratorFunction = function (t) {
              var r = "function" == typeof t && t.constructor;
              return !!r && (r === E || "GeneratorFunction" === (r.displayName || r.name));
            }),
            (c.mark = function (t) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : ((t.__proto__ = x), f in t || (t[f] = "GeneratorFunction")), (t.prototype = Object.create(_)), t;
            }),
            (c.awrap = function (t) {
              return { __await: t };
            }),
            A(j.prototype),
            (j.prototype[a] = function () {
              return this;
            }),
            (c.AsyncIterator = j),
            (c.async = function (t, r, n, e) {
              var o = new j(b(t, r, n, e));
              return c.isGeneratorFunction(r)
                ? o
                : o.next().then(function (t) {
                  return t.done ? t.value : o.next();
                });
            }),
            A(_),
            (_[f] = "Generator"),
            (_[u] = function () {
              return this;
            }),
            (_.toString = function () {
              return "[object Generator]";
            }),
            (c.keys = function (t) {
              var r = [];
              for (var n in t) r.push(n);
              return (
                r.reverse(),
                  function n() {
                    for (; r.length; ) {
                      var e = r.pop();
                      if (e in t) return (n.value = e), (n.done = !1), n;
                    }
                    return (n.done = !0), n;
                  }
              );
            }),
            (c.values = T),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = n), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = n), this.tryEntries.forEach(R), !t))
                  for (var r in this) "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = n);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var r = this;
                function e(e, o) {
                  return (a.type = "throw"), (a.arg = t), (r.next = e), o && ((r.method = "next"), (r.arg = n)), !!o;
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var u = this.tryEntries[i],
                    a = u.completion;
                  if ("root" === u.tryLoc) return e("end");
                  if (this.prev >= u.tryLoc) {
                    var f = o.call(u, "catchLoc"),
                      c = o.call(u, "finallyLoc");
                    if (f && c) {
                      if (u.catchLoc > this.prev) return e(u.catchLoc, !0);
                      if (u.finallyLoc > this.prev) return e(u.finallyLoc);
                    } else if (f) {
                      if (u.catchLoc > this.prev) return e(u.catchLoc, !0);
                    } else {
                      if (!c) throw Error("try statement without catch or finally");
                      if (u.finallyLoc > this.prev) return e(u.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, r) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var e = this.tryEntries[n];
                  if (this.prev >= e.tryLoc && o.call(e, "finallyLoc") && e.finallyLoc > this.prev) {
                    var i = e;
                    break;
                  }
                }
                !i || ("break" !== t && "continue" !== t) || i.tryLoc > r || r > i.finallyLoc || (i = null);
                var u = i ? i.completion : {};
                return (u.type = t), (u.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(u);
              },
              complete: function (t, r) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                    : "normal" === t.type && r && (this.next = r),
                    v
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var n = this.tryEntries[r];
                  if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), R(n), v;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var n = this.tryEntries[r];
                  if (n.tryLoc === t) {
                    var e = n.completion;
                    if ("throw" === e.type) {
                      var o = e.arg;
                      R(n);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function (t, r, e) {
                return (this.delegate = { iterator: T(t), resultName: r, nextLoc: e }), "next" === this.method && (this.arg = n), v;
              },
            });
        }
        function b(t, r, n, e) {
          var o = Object.create((r && r.prototype instanceof m ? r : m).prototype),
            i = new k(e || []);
          return (
            (o._invoke = (function (t, r, n) {
              var e = s;
              return function (o, i) {
                if (e === h) throw Error("Generator is already running");
                if (e === p) {
                  if ("throw" === o) throw i;
                  return z();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var u = n.delegate;
                  if (u) {
                    var a = O(u, n);
                    if (a) {
                      if (a === v) continue;
                      return a;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if (e === s) throw ((e = p), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  e = h;
                  var f = w(t, r, n);
                  if ("normal" === f.type) {
                    if (((e = n.done ? p : l), f.arg === v)) continue;
                    return { value: f.arg, done: n.done };
                  }
                  "throw" === f.type && ((e = p), (n.method = "throw"), (n.arg = f.arg));
                }
              };
            })(t, n, i)),
              o
          );
        }
        function w(t, r, n) {
          try {
            return { type: "normal", arg: t.call(r, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        function m() {}
        function E() {}
        function x() {}
        function A(t) {
          ["next", "throw", "return"].forEach(function (r) {
            t[r] = function (t) {
              return this._invoke(r, t);
            };
          });
        }
        function j(t) {
          var r;
          this._invoke = function (n, e) {
            function i() {
              return new Promise(function (r, i) {
                !(function r(n, e, i, u) {
                  var a = w(t[n], t, e);
                  if ("throw" !== a.type) {
                    var f = a.arg,
                      c = f.value;
                    return c && "object" == typeof c && o.call(c, "__await")
                      ? Promise.resolve(c.__await).then(
                        function (t) {
                          r("next", t, i, u);
                        },
                        function (t) {
                          r("throw", t, i, u);
                        }
                      )
                      : Promise.resolve(c).then(function (t) {
                        (f.value = t), i(f);
                      }, u);
                  }
                  u(a.arg);
                })(n, e, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function O(t, r) {
          var e = t.iterator[r.method];
          if (e === n) {
            if (((r.delegate = null), "throw" === r.method)) {
              if (t.iterator.return && ((r.method = "return"), (r.arg = n), O(t, r), "throw" === r.method)) return v;
              (r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return v;
          }
          var o = w(e, t.iterator, r.arg);
          if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), v;
          var i = o.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value), (r.next = t.nextLoc), "return" !== r.method && ((r.method = "next"), (r.arg = n)), (r.delegate = null), v)
              : i
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), v);
        }
        function S(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
        }
        function R(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(S, this), this.reset(!0);
        }
        function T(t) {
          if (t) {
            var r = t[u];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var e = -1,
                i = function r() {
                  for (; ++e < t.length; ) if (o.call(t, e)) return (r.value = t[e]), (r.done = !1), r;
                  return (r.value = n), (r.done = !0), r;
                };
              return (i.next = i);
            }
          }
          return { next: z };
        }
        function z() {
          return { value: n, done: !0 };
        }
      })(
        (function () {
          return this;
        })() || Function("return this")()
      );
    }),
    Ci = Object.freeze({ default: Bi, __moduleExports: Bi }),
    Di = (Ci && Bi) || Ci,
    Fi =
      (function () {
        return this;
      })() || Function("return this")(),
    Yi = Fi.regeneratorRuntime && Object.getOwnPropertyNames(Fi).indexOf("regeneratorRuntime") >= 0,
    Ni = Yi && Fi.regeneratorRuntime;
  Fi.regeneratorRuntime = void 0;
  var $i = Di;
  if (Yi) Fi.regeneratorRuntime = Ni;
  else
    try {
      delete Fi.regeneratorRuntime;
    } catch (t) {
      Fi.regeneratorRuntime = void 0;
    }
  var Wi = Object.freeze({ default: $i, __moduleExports: $i }),
    qi = (Wi && $i) || Wi,
    Ki = (Mi && Ii) || Mi,
    Gi = n(
      e(function (t, r) {
        r.__esModule = !0;
        var n,
          e = (n = Ki) && n.__esModule ? n : { default: n };
        r.default = function (t) {
          return function () {
            var r = t.apply(this, arguments);
            return new e.default(function (t, n) {
              return (function o(i, u) {
                try {
                  var a = r[i](u),
                    f = a.value;
                } catch (t) {
                  return void n(t);
                }
                if (!a.done)
                  return e.default.resolve(f).then(
                    function (t) {
                      o("next", t);
                    },
                    function (t) {
                      o("throw", t);
                    }
                  );
                t(f);
              })("next");
            });
          };
        };
      })
    ),
    Vi =
      "function" == typeof Object.create
        ? function (t, r) {
          (t.super_ = r), (t.prototype = Object.create(r.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }));
        }
        : function (t, r) {
          t.super_ = r;
          var n = function () {};
          (n.prototype = r.prototype), (t.prototype = new n()), (t.prototype.constructor = t);
        };
  function Zi(t, r) {
    var n = { seen: [], stylize: Ji };
    return (
      3 > arguments.length || (n.depth = arguments[2]),
      4 > arguments.length || (n.colors = arguments[3]),
        ru(r)
          ? (n.showHidden = r)
          : r &&
          (function (t, r) {
            if (!r || !uu(r)) return t;
            var n = Object.keys(r),
              e = n.length;
            for (; e--; ) t[n[e]] = r[n[e]];
          })(n, r),
      ou(n.showHidden) && (n.showHidden = !1),
      ou(n.depth) && (n.depth = 2),
      ou(n.colors) && (n.colors = !1),
      ou(n.customInspect) && (n.customInspect = !0),
      n.colors && (n.stylize = Hi),
        Xi(n, t, n.depth)
    );
  }
  function Hi(t, r) {
    var n = Zi.styles[r];
    return n ? "[" + Zi.colors[n][0] + "m" + t + "[" + Zi.colors[n][1] + "m" : t;
  }
  function Ji(t, r) {
    return t;
  }
  function Xi(t, r, n) {
    if (t.customInspect && r && cu(r.inspect) && r.inspect !== Zi && (!r.constructor || r.constructor.prototype !== r)) {
      var e = r.inspect(n, t);
      return eu(e) || (e = Xi(t, e, n)), e;
    }
    var o = (function (t, r) {
      if (ou(r)) return t.stylize("undefined", "undefined");
      if (eu(r)) {
        var n = "'" + JSON.stringify(r).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return t.stylize(n, "string");
      }
      if (((e = r), "number" == typeof e)) return t.stylize("" + r, "number");
      var e;
      if (ru(r)) return t.stylize("" + r, "boolean");
      if (nu(r)) return t.stylize("null", "null");
    })(t, r);
    if (o) return o;
    var i = Object.keys(r),
      u = (function (t) {
        var r = {};
        return (
          t.forEach(function (t, n) {
            r[t] = !0;
          }),
            r
        );
      })(i);
    if ((t.showHidden && (i = Object.getOwnPropertyNames(r)), fu(r) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0))) return Qi(r);
    if (0 === i.length) {
      if (cu(r)) return t.stylize("[Function" + (r.name ? ": " + r.name : "") + "]", "special");
      if (iu(r)) return t.stylize(RegExp.prototype.toString.call(r), "regexp");
      if (au(r)) return t.stylize(Date.prototype.toString.call(r), "date");
      if (fu(r)) return Qi(r);
    }
    var a,
      f = "",
      c = !1,
      s = ["{", "}"];
    (Array.isArray(r) && ((c = !0), (s = ["[", "]"])), cu(r)) && (f = " [Function" + (r.name ? ": " + r.name : "") + "]");
    return (
      iu(r) && (f = " " + RegExp.prototype.toString.call(r)),
      au(r) && (f = " " + Date.prototype.toUTCString.call(r)),
      fu(r) && (f = " " + Qi(r)),
        0 !== i.length || (c && 0 != r.length)
          ? 0 > n
          ? iu(r)
            ? t.stylize(RegExp.prototype.toString.call(r), "regexp")
            : t.stylize("[Object]", "special")
          : (t.seen.push(r),
            (a = c
              ? (function (t, r, n, e, o) {
                for (var i = [], u = 0, a = r.length; a > u; ++u) hu(r, u + "") ? i.push(tu(t, r, n, e, u + "", !0)) : i.push("");
                return (
                  o.forEach(function (o) {
                    o.match(/^\d+$/) || i.push(tu(t, r, n, e, o, !0));
                  }),
                    i
                );
              })(t, r, n, u, i)
              : i.map(function (e) {
                return tu(t, r, n, u, e, c);
              })),
            t.seen.pop(),
            (function (t, r, n) {
              if (
                t.reduce(function (t, r) {
                  return 0, 0 > r.indexOf("\n") || 0, t + r.replace(/\u001b\[\d\d?m/g, "").length + 1;
                }, 0) > 60
              )
                return n[0] + ("" === r ? "" : r + "\n ") + " " + t.join(",\n  ") + " " + n[1];
              return n[0] + r + " " + t.join(", ") + " " + n[1];
            })(a, f, s))
          : s[0] + f + s[1]
    );
  }
  function Qi(t) {
    return "[" + Error.prototype.toString.call(t) + "]";
  }
  function tu(t, r, n, e, o, i) {
    var u, a, f;
    if (
      ((f = Object.getOwnPropertyDescriptor(r, o) || { value: r[o] }).get ? (a = t.stylize(f.set ? "[Getter/Setter]" : "[Getter]", "special")) : f.set && (a = t.stylize("[Setter]", "special")),
      hu(e, o) || (u = "[" + o + "]"),
      a ||
      (0 > t.seen.indexOf(f.value)
        ? (a = nu(n) ? Xi(t, f.value, null) : Xi(t, f.value, n - 1)).indexOf("\n") > -1 &&
        (a = i
          ? a
            .split("\n")
            .map(function (t) {
              return "  " + t;
            })
            .join("\n")
            .substr(2)
          : "\n" +
          a
            .split("\n")
            .map(function (t) {
              return "   " + t;
            })
            .join("\n"))
        : (a = t.stylize("[Circular]", "special"))),
        ou(u))
    ) {
      if (i && o.match(/^\d+$/)) return a;
      (u = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
        ? ((u = u.substr(1, u.length - 2)), (u = t.stylize(u, "name")))
        : ((u = u
          .replace(/'/g, "\\'")
          .replace(/\\"/g, '"')
          .replace(/(^"|"$)/g, "'")),
          (u = t.stylize(u, "string")));
    }
    return u + ": " + a;
  }
  function ru(t) {
    return "boolean" == typeof t;
  }
  function nu(t) {
    return null === t;
  }
  function eu(t) {
    return "string" == typeof t;
  }
  function ou(t) {
    return void 0 === t;
  }
  function iu(t) {
    return uu(t) && "[object RegExp]" === lu(t);
  }
  function uu(t) {
    return "object" == typeof t && null !== t;
  }
  function au(t) {
    return uu(t) && "[object Date]" === lu(t);
  }
  function fu(t) {
    return uu(t) && ("[object Error]" === lu(t) || t instanceof Error);
  }
  function cu(t) {
    return "function" == typeof t;
  }
  function su(t) {
    return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t;
  }
  function lu(t) {
    return Object.prototype.toString.call(t);
  }
  function hu(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }
  function pu(t, r) {
    if (t === r) return 0;
    for (var n = t.length, e = r.length, o = 0, i = Math.min(n, e); i > o; ++o)
      if (t[o] !== r[o]) {
        (n = t[o]), (e = r[o]);
        break;
      }
    return e > n ? -1 : n > e ? 1 : 0;
  }
  (Zi.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39],
  }),
    (Zi.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" });
  var vu,
    yu = Object.prototype.hasOwnProperty,
    du =
      Object.keys ||
      function (t) {
        var r = [];
        for (var n in t) yu.call(t, n) && r.push(n);
        return r;
      },
    gu = Array.prototype.slice;
  function _u() {
    return void 0 !== vu ? vu : (vu = "foo" === function () {}.name);
  }
  function bu(t) {
    return Object.prototype.toString.call(t);
  }
  function wu(t) {
    return !yr(t) && "function" == typeof _t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer)));
  }
  function mu(t, r) {
    t || Su(t, !0, r, "==", Ru);
  }
  var Eu = /\s*function\s+([^\(\s]*)\s*/;
  function xu(t) {
    if (cu(t)) {
      if (_u()) return t.name;
      var r = ("" + t).match(Eu);
      return r && r[1];
    }
  }
  function Au(t) {
    var r;
    (this.name = "AssertionError"),
      (this.actual = t.actual),
      (this.expected = t.expected),
      (this.operator = t.operator),
      t.message ? ((this.message = t.message), (this.generatedMessage = !1)) : ((this.message = ju(Ou((r = this).actual), 128) + " " + r.operator + " " + ju(Ou(r.expected), 128)), (this.generatedMessage = !0));
    var n = t.stackStartFunction || Su;
    if (Error.captureStackTrace) Error.captureStackTrace(this, n);
    else {
      var e = Error();
      if (e.stack) {
        var o = e.stack,
          i = xu(n),
          u = o.indexOf("\n" + i);
        if (u >= 0) {
          var a = o.indexOf("\n", u + 1);
          o = o.substring(a + 1);
        }
        this.stack = o;
      }
    }
  }
  function ju(t, r) {
    return "string" == typeof t ? (r > t.length ? t : t.slice(0, r)) : t;
  }
  function Ou(t) {
    if (_u() || !cu(t)) return Zi(t);
    var r = xu(t);
    return "[Function" + (r ? ": " + r : "") + "]";
  }
  function Su(t, r, n, e, o) {
    throw new Au({ message: n, actual: t, expected: r, operator: e, stackStartFunction: o });
  }
  function Ru(t, r) {
    t || Su(t, !0, r, "==", Ru);
  }
  function ku(t, r, n, e) {
    if (t === r) return !0;
    if (yr(t) && yr(r)) return 0 === pu(t, r);
    if (au(t) && au(r)) return t.getTime() === r.getTime();
    if (iu(t) && iu(r)) return t.source === r.source && t.global === r.global && t.multiline === r.multiline && t.lastIndex === r.lastIndex && t.ignoreCase === r.ignoreCase;
    if ((null !== t && "object" == typeof t) || (null !== r && "object" == typeof r)) {
      if (wu(t) && wu(r) && bu(t) === bu(r) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === pu(new Uint8Array(t.buffer), new Uint8Array(r.buffer));
      if (yr(t) !== yr(r)) return !1;
      var o = (e = e || { actual: [], expected: [] }).actual.indexOf(t);
      return (
        (-1 !== o && o === e.expected.indexOf(r)) ||
        (e.actual.push(t),
          e.expected.push(r),
          (function (t, r, n, e) {
            if (null === t || void 0 === t || null === r || void 0 === r) return !1;
            if (su(t) || su(r)) return t === r;
            if (n && Object.getPrototypeOf(t) !== Object.getPrototypeOf(r)) return !1;
            var o = Tu(t),
              i = Tu(r);
            if ((o && !i) || (!o && i)) return !1;
            if (o) return (t = gu.call(t)), (r = gu.call(r)), ku(t, r, n);
            var u,
              a,
              f = du(t),
              c = du(r);
            if (f.length !== c.length) return !1;
            for (f.sort(), c.sort(), a = f.length - 1; a >= 0; a--) if (f[a] !== c[a]) return !1;
            for (a = f.length - 1; a >= 0; a--) if (!ku(t[(u = f[a])], r[u], n, e)) return !1;
            return !0;
          })(t, r, n, e))
      );
    }
    return n ? t === r : t == r;
  }
  function Tu(t) {
    return "[object Arguments]" == Object.prototype.toString.call(t);
  }
  function zu(t, r) {
    if (!t || !r) return !1;
    if ("[object RegExp]" == Object.prototype.toString.call(r)) return r.test(t);
    try {
      if (t instanceof r) return !0;
    } catch (t) {}
    return !Error.isPrototypeOf(r) && !0 === r.call({}, t);
  }
  function Uu(t, r, n, e) {
    var o;
    if ("function" != typeof r) throw new TypeError('"block" argument must be a function');
    "string" == typeof n && ((e = n), (n = null)),
      (o = (function (t) {
        var r;
        try {
          t();
        } catch (t) {
          r = t;
        }
        return r;
      })(r)),
      (e = (n && n.name ? " (" + n.name + ")." : ".") + (e ? " " + e : ".")),
    t && !o && Su(o, n, "Missing expected exception" + e);
    var i = "string" == typeof e,
      u = !t && fu(o),
      a = !t && o && !n;
    if ((((u && i && zu(o, n)) || a) && Su(o, n, "Got unwanted exception" + e), (t && o && n && !zu(o, n)) || (!t && o))) throw o;
  }
  (mu.AssertionError = Au),
    Vi(Au, Error),
    (mu.fail = Su),
    (mu.ok = Ru),
    (mu.equal = function t(r, n, e) {
      r != n && Su(r, n, e, "==", t);
    }),
    (mu.notEqual = function t(r, n, e) {
      r == n && Su(r, n, e, "!=", t);
    }),
    (mu.deepEqual = function t(r, n, e) {
      ku(r, n, !1) || Su(r, n, e, "deepEqual", t);
    }),
    (mu.deepStrictEqual = function t(r, n, e) {
      ku(r, n, !0) || Su(r, n, e, "deepStrictEqual", t);
    }),
    (mu.notDeepEqual = function t(r, n, e) {
      ku(r, n, !1) && Su(r, n, e, "notDeepEqual", t);
    }),
    (mu.notDeepStrictEqual = function t(r, n, e) {
      ku(r, n, !0) && Su(r, n, e, "notDeepStrictEqual", t);
    }),
    (mu.strictEqual = function t(r, n, e) {
      r !== n && Su(r, n, e, "===", t);
    }),
    (mu.notStrictEqual = function t(r, n, e) {
      r === n && Su(r, n, e, "!==", t);
    }),
    (mu.throws = function (t, r, n) {
      Uu(!0, t, r, n);
    }),
    (mu.doesNotThrow = function (t, r, n) {
      Uu(!1, t, r, n);
    }),
    (mu.ifError = function (t) {
      if (t) throw t;
    });
  for (
    var Pu = e(function (t, r) {
        (t.exports = r = self.fetch), (r.default = self.fetch.bind(self)), (r.Headers = self.Headers), (r.Request = self.Request), (r.Response = self.Response);
      }),
      Lu = e(function (t, n) {
        !(function () {
          var e,
            o = 200,
            i = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            u = "Expected a function",
            a = "__lodash_hash_undefined__",
            f = 500,
            c = "__lodash_placeholder__",
            s = 1,
            l = 2,
            h = 4,
            p = 1,
            v = 2,
            y = 1,
            d = 2,
            g = 4,
            _ = 8,
            b = 16,
            w = 32,
            m = 64,
            E = 128,
            x = 256,
            A = 512,
            j = 30,
            O = "...",
            S = 800,
            R = 16,
            k = 1,
            T = 2,
            z = 1 / 0,
            U = 9007199254740991,
            P = 1.7976931348623157e308,
            L = NaN,
            I = 4294967295,
            M = I - 1,
            B = I >>> 1,
            C = [
              ["ary", E],
              ["bind", y],
              ["bindKey", d],
              ["curry", _],
              ["curryRight", b],
              ["flip", A],
              ["partial", w],
              ["partialRight", m],
              ["rearg", x],
            ],
            D = "[object Arguments]",
            F = "[object Array]",
            Y = "[object AsyncFunction]",
            N = "[object Boolean]",
            $ = "[object Date]",
            W = "[object DOMException]",
            q = "[object Error]",
            K = "[object Function]",
            G = "[object GeneratorFunction]",
            V = "[object Map]",
            Z = "[object Number]",
            H = "[object Null]",
            J = "[object Object]",
            X = "[object Proxy]",
            Q = "[object RegExp]",
            tt = "[object Set]",
            rt = "[object String]",
            nt = "[object Symbol]",
            et = "[object Undefined]",
            ot = "[object WeakMap]",
            it = "[object WeakSet]",
            ut = "[object ArrayBuffer]",
            at = "[object DataView]",
            ft = "[object Float32Array]",
            ct = "[object Float64Array]",
            st = "[object Int8Array]",
            lt = "[object Int16Array]",
            ht = "[object Int32Array]",
            pt = "[object Uint8Array]",
            vt = "[object Uint8ClampedArray]",
            yt = "[object Uint16Array]",
            dt = "[object Uint32Array]",
            gt = /\b__p \+= '';/g,
            _t = /\b(__p \+=) '' \+/g,
            bt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            wt = /&(?:amp|lt|gt|quot|#39);/g,
            mt = /[&<>"']/g,
            Et = RegExp(wt.source),
            xt = RegExp(mt.source),
            At = /<%-([\s\S]+?)%>/g,
            jt = /<%([\s\S]+?)%>/g,
            Ot = /<%=([\s\S]+?)%>/g,
            St = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Rt = /^\w*$/,
            kt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Tt = /[\\^$.*+?()[\]{}|]/g,
            zt = RegExp(Tt.source),
            Ut = /^\s+|\s+$/g,
            Pt = /^\s+/,
            Lt = /\s+$/,
            It = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            Mt = /\{\n\/\* \[wrapped with (.+)\] \*/,
            Bt = /,? & /,
            Ct = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            Dt = /\\(\\)?/g,
            Ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            Yt = /\w*$/,
            Nt = /^[-+]0x[0-9a-f]+$/i,
            $t = /^0b[01]+$/i,
            Wt = /^\[object .+?Constructor\]$/,
            qt = /^0o[0-7]+$/i,
            Kt = /^(?:0|[1-9]\d*)$/,
            Gt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Vt = /($^)/,
            Zt = /['\n\r\u2028\u2029\\]/g,
            Ht = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            Jt =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Xt = "[\\ud800-\\udfff]",
            Qt = "[" + Jt + "]",
            tr = "[" + Ht + "]",
            rr = "\\d+",
            nr = "[\\u2700-\\u27bf]",
            er = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
            or = "[^\\ud800-\\udfff" + Jt + rr + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
            ir = "\\ud83c[\\udffb-\\udfff]",
            ur = "[^\\ud800-\\udfff]",
            ar = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            fr = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            cr = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
            sr = "(?:" + er + "|" + or + ")",
            lr = "(?:" + cr + "|" + or + ")",
            hr = "(?:" + tr + "|" + ir + ")" + "?",
            pr = "[\\ufe0e\\ufe0f]?" + hr + ("(?:\\u200d(?:" + [ur, ar, fr].join("|") + ")[\\ufe0e\\ufe0f]?" + hr + ")*"),
            vr = "(?:" + [nr, ar, fr].join("|") + ")" + pr,
            yr = "(?:" + [ur + tr + "?", tr, ar, fr, Xt].join("|") + ")",
            dr = /['â€™]/g,
            gr = RegExp(tr, "g"),
            _r = RegExp(ir + "(?=" + ir + ")|" + yr + pr, "g"),
            br = RegExp(
              [
                cr + "?" + er + "+(?:['â€™](?:d|ll|m|re|s|t|ve))?(?=" + [Qt, cr, "$"].join("|") + ")",
                lr + "+(?:['â€™](?:D|LL|M|RE|S|T|VE))?(?=" + [Qt, cr + sr, "$"].join("|") + ")",
                cr + "?" + sr + "+(?:['â€™](?:d|ll|m|re|s|t|ve))?",
                cr + "+(?:['â€™](?:D|LL|M|RE|S|T|VE))?",
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                rr,
                vr,
              ].join("|"),
              "g"
            ),
            wr = RegExp("[\\u200d\\ud800-\\udfff" + Ht + "\\ufe0e\\ufe0f]"),
            mr = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            Er = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            xr = -1,
            Ar = {};
          (Ar[ft] = Ar[ct] = Ar[st] = Ar[lt] = Ar[ht] = Ar[pt] = Ar[vt] = Ar[yt] = Ar[dt] = !0), (Ar[D] = Ar[F] = Ar[ut] = Ar[N] = Ar[at] = Ar[$] = Ar[q] = Ar[K] = Ar[V] = Ar[Z] = Ar[J] = Ar[Q] = Ar[tt] = Ar[rt] = Ar[ot] = !1);
          var jr = {};
          (jr[D] = jr[F] = jr[ut] = jr[at] = jr[N] = jr[$] = jr[ft] = jr[ct] = jr[st] = jr[lt] = jr[ht] = jr[V] = jr[Z] = jr[J] = jr[Q] = jr[tt] = jr[rt] = jr[nt] = jr[pt] = jr[vt] = jr[yt] = jr[dt] = !0),
            (jr[q] = jr[K] = jr[ot] = !1);
          var Or = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
            Sr = parseFloat,
            Rr = parseInt,
            kr = "object" == typeof r && r && r.Object === Object && r,
            Tr = "object" == typeof self && self && self.Object === Object && self,
            zr = kr || Tr || Function("return this")(),
            Ur = n && !n.nodeType && n,
            Pr = Ur && t && !t.nodeType && t,
            Lr = Pr && Pr.exports === Ur,
            Ir = Lr && kr.process,
            Mr = (function () {
              try {
                return Ir && Ir.binding && Ir.binding("util");
              } catch (t) {}
            })(),
            Br = Mr && Mr.isArrayBuffer,
            Cr = Mr && Mr.isDate,
            Dr = Mr && Mr.isMap,
            Fr = Mr && Mr.isRegExp,
            Yr = Mr && Mr.isSet,
            Nr = Mr && Mr.isTypedArray;
          function $r(t, r, n) {
            switch (n.length) {
              case 0:
                return t.call(r);
              case 1:
                return t.call(r, n[0]);
              case 2:
                return t.call(r, n[0], n[1]);
              case 3:
                return t.call(r, n[0], n[1], n[2]);
            }
            return t.apply(r, n);
          }
          function Wr(t, r, n, e) {
            for (var o = -1, i = null == t ? 0 : t.length; ++o < i; ) {
              var u = t[o];
              r(e, u, n(u), t);
            }
            return e;
          }
          function qr(t, r) {
            for (var n = -1, e = null == t ? 0 : t.length; ++n < e && !1 !== r(t[n], n, t); );
            return t;
          }
          function Kr(t, r) {
            for (var n = null == t ? 0 : t.length; n-- && !1 !== r(t[n], n, t); );
            return t;
          }
          function Gr(t, r) {
            for (var n = -1, e = null == t ? 0 : t.length; ++n < e; ) if (!r(t[n], n, t)) return !1;
            return !0;
          }
          function Vr(t, r) {
            for (var n = -1, e = null == t ? 0 : t.length, o = 0, i = []; ++n < e; ) {
              var u = t[n];
              r(u, n, t) && (i[o++] = u);
            }
            return i;
          }
          function Zr(t, r) {
            return !!(null == t ? 0 : t.length) && un(t, r, 0) > -1;
          }
          function Hr(t, r, n) {
            for (var e = -1, o = null == t ? 0 : t.length; ++e < o; ) if (n(r, t[e])) return !0;
            return !1;
          }
          function Jr(t, r) {
            for (var n = -1, e = null == t ? 0 : t.length, o = Array(e); ++n < e; ) o[n] = r(t[n], n, t);
            return o;
          }
          function Xr(t, r) {
            for (var n = -1, e = r.length, o = t.length; ++n < e; ) t[o + n] = r[n];
            return t;
          }
          function Qr(t, r, n, e) {
            var o = -1,
              i = null == t ? 0 : t.length;
            for (e && i && (n = t[++o]); ++o < i; ) n = r(n, t[o], o, t);
            return n;
          }
          function tn(t, r, n, e) {
            var o = null == t ? 0 : t.length;
            for (e && o && (n = t[--o]); o--; ) n = r(n, t[o], o, t);
            return n;
          }
          function rn(t, r) {
            for (var n = -1, e = null == t ? 0 : t.length; ++n < e; ) if (r(t[n], n, t)) return !0;
            return !1;
          }
          var nn = sn("length");
          function en(t, r, n) {
            var e;
            return (
              n(t, function (t, n, o) {
                if (r(t, n, o)) return (e = n), !1;
              }),
                e
            );
          }
          function on(t, r, n, e) {
            for (var o = t.length, i = n + (e ? 1 : -1); e ? i-- : ++i < o; ) if (r(t[i], i, t)) return i;
            return -1;
          }
          function un(t, r, n) {
            return r == r
              ? (function (t, r, n) {
                var e = n - 1,
                  o = t.length;
                for (; ++e < o; ) if (t[e] === r) return e;
                return -1;
              })(t, r, n)
              : on(t, fn, n);
          }
          function an(t, r, n, e) {
            for (var o = n - 1, i = t.length; ++o < i; ) if (e(t[o], r)) return o;
            return -1;
          }
          function fn(t) {
            return t != t;
          }
          function cn(t, r) {
            var n = null == t ? 0 : t.length;
            return n ? pn(t, r) / n : L;
          }
          function sn(t) {
            return function (r) {
              return null == r ? e : r[t];
            };
          }
          function ln(t) {
            return function (r) {
              return null == t ? e : t[r];
            };
          }
          function hn(t, r, n, e, o) {
            return (
              o(t, function (t, o, i) {
                n = e ? ((e = !1), t) : r(n, t, o, i);
              }),
                n
            );
          }
          function pn(t, r) {
            for (var n, o = -1, i = t.length; ++o < i; ) {
              var u = r(t[o]);
              u !== e && (n = n === e ? u : n + u);
            }
            return n;
          }
          function vn(t, r) {
            for (var n = -1, e = Array(t); ++n < t; ) e[n] = r(n);
            return e;
          }
          function yn(t) {
            return function (r) {
              return t(r);
            };
          }
          function dn(t, r) {
            return Jr(r, function (r) {
              return t[r];
            });
          }
          function gn(t, r) {
            return t.has(r);
          }
          function _n(t, r) {
            for (var n = -1, e = t.length; ++n < e && un(r, t[n], 0) > -1; );
            return n;
          }
          function bn(t, r) {
            for (var n = t.length; n-- && un(r, t[n], 0) > -1; );
            return n;
          }
          var wn = ln({
              "Ã€": "A",
              "Ã": "A",
              "Ã‚": "A",
              Ãƒ: "A",
              "Ã„": "A",
              "Ã…": "A",
              "Ã ": "a",
              "Ã¡": "a",
              "Ã¢": "a",
              "Ã£": "a",
              "Ã¤": "a",
              "Ã¥": "a",
              "Ã‡": "C",
              "Ã§": "c",
              "Ã": "D",
              "Ã°": "d",
              Ãˆ: "E",
              "Ã‰": "E",
              ÃŠ: "E",
              "Ã‹": "E",
              "Ã¨": "e",
              "Ã©": "e",
              Ãª: "e",
              "Ã«": "e",
              ÃŒ: "I",
              "Ã": "I",
              ÃŽ: "I",
              "Ã": "I",
              "Ã¬": "i",
              "Ã­": "i",
              "Ã®": "i",
              "Ã¯": "i",
              "Ã‘": "N",
              "Ã±": "n",
              "Ã’": "O",
              "Ã“": "O",
              "Ã”": "O",
              "Ã•": "O",
              "Ã–": "O",
              "Ã˜": "O",
              "Ã²": "o",
              "Ã³": "o",
              "Ã´": "o",
              Ãµ: "o",
              "Ã¶": "o",
              "Ã¸": "o",
              "Ã™": "U",
              Ãš: "U",
              "Ã›": "U",
              Ãœ: "U",
              "Ã¹": "u",
              Ãº: "u",
              "Ã»": "u",
              "Ã¼": "u",
              "Ã": "Y",
              "Ã½": "y",
              "Ã¿": "y",
              "Ã†": "Ae",
              "Ã¦": "ae",
              Ãž: "Th",
              "Ã¾": "th",
              ÃŸ: "ss",
              "Ä€": "A",
              "Ä‚": "A",
              "Ä„": "A",
              "Ä": "a",
              Äƒ: "a",
              "Ä…": "a",
              "Ä†": "C",
              Äˆ: "C",
              ÄŠ: "C",
              ÄŒ: "C",
              "Ä‡": "c",
              "Ä‰": "c",
              "Ä‹": "c",
              "Ä": "c",
              ÄŽ: "D",
              "Ä": "D",
              "Ä": "d",
              "Ä‘": "d",
              "Ä’": "E",
              "Ä”": "E",
              "Ä–": "E",
              "Ä˜": "E",
              Äš: "E",
              "Ä“": "e",
              "Ä•": "e",
              "Ä—": "e",
              "Ä™": "e",
              "Ä›": "e",
              Äœ: "G",
              Äž: "G",
              "Ä ": "G",
              "Ä¢": "G",
              "Ä": "g",
              ÄŸ: "g",
              "Ä¡": "g",
              "Ä£": "g",
              "Ä¤": "H",
              "Ä¦": "H",
              "Ä¥": "h",
              "Ä§": "h",
              "Ä¨": "I",
              Äª: "I",
              "Ä¬": "I",
              "Ä®": "I",
              "Ä°": "I",
              "Ä©": "i",
              "Ä«": "i",
              "Ä­": "i",
              "Ä¯": "i",
              "Ä±": "i",
              "Ä´": "J",
              Äµ: "j",
              "Ä¶": "K",
              "Ä·": "k",
              "Ä¸": "k",
              "Ä¹": "L",
              "Ä»": "L",
              "Ä½": "L",
              "Ä¿": "L",
              "Å": "L",
              Äº: "l",
              "Ä¼": "l",
              "Ä¾": "l",
              "Å€": "l",
              "Å‚": "l",
              Åƒ: "N",
              "Å…": "N",
              "Å‡": "N",
              ÅŠ: "N",
              "Å„": "n",
              "Å†": "n",
              Åˆ: "n",
              "Å‹": "n",
              ÅŒ: "O",
              ÅŽ: "O",
              "Å": "O",
              "Å": "o",
              "Å": "o",
              "Å‘": "o",
              "Å”": "R",
              "Å–": "R",
              "Å˜": "R",
              "Å•": "r",
              "Å—": "r",
              "Å™": "r",
              Åš: "S",
              Åœ: "S",
              Åž: "S",
              "Å ": "S",
              "Å›": "s",
              "Å": "s",
              ÅŸ: "s",
              "Å¡": "s",
              "Å¢": "T",
              "Å¤": "T",
              "Å¦": "T",
              "Å£": "t",
              "Å¥": "t",
              "Å§": "t",
              "Å¨": "U",
              Åª: "U",
              "Å¬": "U",
              "Å®": "U",
              "Å°": "U",
              "Å²": "U",
              "Å©": "u",
              "Å«": "u",
              "Å­": "u",
              "Å¯": "u",
              "Å±": "u",
              "Å³": "u",
              "Å´": "W",
              Åµ: "w",
              "Å¶": "Y",
              "Å·": "y",
              "Å¸": "Y",
              "Å¹": "Z",
              "Å»": "Z",
              "Å½": "Z",
              Åº: "z",
              "Å¼": "z",
              "Å¾": "z",
              "Ä²": "IJ",
              "Ä³": "ij",
              "Å’": "Oe",
              "Å“": "oe",
              "Å‰": "'n",
              "Å¿": "s",
            }),
            mn = ln({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
          function En(t) {
            return "\\" + Or[t];
          }
          function xn(t) {
            return wr.test(t);
          }
          function An(t) {
            var r = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t, e) {
                n[++r] = [e, t];
              }),
                n
            );
          }
          function jn(t, r) {
            return function (n) {
              return t(r(n));
            };
          }
          function On(t, r) {
            for (var n = -1, e = t.length, o = 0, i = []; ++n < e; ) {
              var u = t[n];
              (u !== r && u !== c) || ((t[n] = c), (i[o++] = n));
            }
            return i;
          }
          function Sn(t, r) {
            return "__proto__" == r ? e : t[r];
          }
          function Rn(t) {
            var r = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++r] = t;
              }),
                n
            );
          }
          function kn(t) {
            var r = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++r] = [t, t];
              }),
                n
            );
          }
          function Tn(t) {
            return xn(t)
              ? (function (t) {
                var r = (_r.lastIndex = 0);
                for (; _r.test(t); ) ++r;
                return r;
              })(t)
              : nn(t);
          }
          function zn(t) {
            return xn(t)
              ? (function (t) {
                return t.match(_r) || [];
              })(t)
              : (function (t) {
                return t.split("");
              })(t);
          }
          var Un = ln({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" });
          var Pn = (function t(r) {
            var n,
              Ht = (r = null == r ? zr : Pn.defaults(zr.Object(), r, Pn.pick(zr, Er))).Array,
              Jt = r.Date,
              Xt = r.Error,
              Qt = r.Function,
              tr = r.Math,
              rr = r.Object,
              nr = r.RegExp,
              er = r.String,
              or = r.TypeError,
              ir = Ht.prototype,
              ur = rr.prototype,
              ar = r["__core-js_shared__"],
              fr = Qt.prototype.toString,
              cr = ur.hasOwnProperty,
              sr = 0,
              lr = (n = /[^.]+$/.exec((ar && ar.keys && ar.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + n : "",
              hr = ur.toString,
              pr = fr.call(rr),
              vr = zr._,
              yr = nr(
                "^" +
                fr
                  .call(cr)
                  .replace(Tt, "\\$&")
                  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                "$"
              ),
              _r = Lr ? r.Buffer : e,
              wr = r.Symbol,
              Or = r.Uint8Array,
              kr = _r ? _r.allocUnsafe : e,
              Tr = jn(rr.getPrototypeOf, rr),
              Ur = rr.create,
              Pr = ur.propertyIsEnumerable,
              Ir = ir.splice,
              Mr = wr ? wr.isConcatSpreadable : e,
              nn = wr ? wr.iterator : e,
              ln = wr ? wr.toStringTag : e,
              Ln = (function () {
                try {
                  var t = Di(rr, "defineProperty");
                  return t({}, "", {}), t;
                } catch (t) {}
              })(),
              In = r.clearTimeout !== zr.clearTimeout && r.clearTimeout,
              Mn = Jt && Jt.now !== zr.Date.now && Jt.now,
              Bn = r.setTimeout !== zr.setTimeout && r.setTimeout,
              Cn = tr.ceil,
              Dn = tr.floor,
              Fn = rr.getOwnPropertySymbols,
              Yn = _r ? _r.isBuffer : e,
              Nn = r.isFinite,
              $n = ir.join,
              Wn = jn(rr.keys, rr),
              qn = tr.max,
              Kn = tr.min,
              Gn = Jt.now,
              Vn = r.parseInt,
              Zn = tr.random,
              Hn = ir.reverse,
              Jn = Di(r, "DataView"),
              Xn = Di(r, "Map"),
              Qn = Di(r, "Promise"),
              te = Di(r, "Set"),
              re = Di(r, "WeakMap"),
              ne = Di(rr, "create"),
              ee = re && new re(),
              oe = {},
              ie = su(Jn),
              ue = su(Xn),
              ae = su(Qn),
              fe = su(te),
              ce = su(re),
              se = wr ? wr.prototype : e,
              le = se ? se.valueOf : e,
              he = se ? se.toString : e;
            function pe(t) {
              if (Sa(t) && !da(t) && !(t instanceof ge)) {
                if (t instanceof de) return t;
                if (cr.call(t, "__wrapped__")) return lu(t);
              }
              return new de(t);
            }
            var ve = (function () {
              function t() {}
              return function (r) {
                if (!Oa(r)) return {};
                if (Ur) return Ur(r);
                t.prototype = r;
                var n = new t();
                return (t.prototype = e), n;
              };
            })();
            function ye() {}
            function de(t, r) {
              (this.__wrapped__ = t), (this.__actions__ = []), (this.__chain__ = !!r), (this.__index__ = 0), (this.__values__ = e);
            }
            function ge(t) {
              (this.__wrapped__ = t), (this.__actions__ = []), (this.__dir__ = 1), (this.__filtered__ = !1), (this.__iteratees__ = []), (this.__takeCount__ = I), (this.__views__ = []);
            }
            function _e(t) {
              var r = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++r < n; ) {
                var e = t[r];
                this.set(e[0], e[1]);
              }
            }
            function be(t) {
              var r = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++r < n; ) {
                var e = t[r];
                this.set(e[0], e[1]);
              }
            }
            function we(t) {
              var r = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++r < n; ) {
                var e = t[r];
                this.set(e[0], e[1]);
              }
            }
            function me(t) {
              var r = -1,
                n = null == t ? 0 : t.length;
              for (this.__data__ = new we(); ++r < n; ) this.add(t[r]);
            }
            function Ee(t) {
              var r = (this.__data__ = new be(t));
              this.size = r.size;
            }
            function xe(t, r) {
              var n = da(t),
                e = !n && ya(t),
                o = !n && !e && wa(t),
                i = !n && !e && !o && Ia(t),
                u = n || e || o || i,
                a = u ? vn(t.length, er) : [],
                f = a.length;
              for (var c in t) (!r && !cr.call(t, c)) || (u && ("length" == c || (o && ("offset" == c || "parent" == c)) || (i && ("buffer" == c || "byteLength" == c || "byteOffset" == c)) || Ki(c, f))) || a.push(c);
              return a;
            }
            function Ae(t) {
              var r = t.length;
              return r ? t[Eo(0, r - 1)] : e;
            }
            function je(t, r) {
              return au(ei(t), Le(r, 0, t.length));
            }
            function Oe(t) {
              return au(ei(t));
            }
            function Se(t, r, n) {
              ((n === e || ha(t[r], n)) && (n !== e || (r in t))) || Ue(t, r, n);
            }
            function Re(t, r, n) {
              var o = t[r];
              (cr.call(t, r) && ha(o, n) && (n !== e || (r in t))) || Ue(t, r, n);
            }
            function ke(t, r) {
              for (var n = t.length; n--; ) if (ha(t[n][0], r)) return n;
              return -1;
            }
            function Te(t, r, n, e) {
              return (
                De(t, function (t, o, i) {
                  r(e, t, n(t), i);
                }),
                  e
              );
            }
            function ze(t, r) {
              return t && oi(r, ef(r), t);
            }
            function Ue(t, r, n) {
              "__proto__" == r && Ln ? Ln(t, r, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[r] = n);
            }
            function Pe(t, r) {
              for (var n = -1, o = r.length, i = Ht(o), u = null == t; ++n < o; ) i[n] = u ? e : Xa(t, r[n]);
              return i;
            }
            function Le(t, r, n) {
              return t == t && (n !== e && (t = t > n ? n : t), r !== e && (t = r > t ? r : t)), t;
            }
            function Ie(t, r, n, o, i, u) {
              var a,
                f = r & s,
                c = r & l,
                p = r & h;
              if ((n && (a = i ? n(t, o, i, u) : n(t)), a !== e)) return a;
              if (!Oa(t)) return t;
              var v = da(t);
              if (v) {
                if (
                  ((a = (function (t) {
                    var r = t.length,
                      n = new t.constructor(r);
                    return r && "string" == typeof t[0] && cr.call(t, "index") && ((n.index = t.index), (n.input = t.input)), n;
                  })(t)),
                    !f)
                )
                  return ei(t, a);
              } else {
                var y = Ni(t),
                  d = y == K || y == G;
                if (wa(t)) return Jo(t, f);
                if (y == J || y == D || (d && !i)) {
                  if (((a = c || d ? {} : Wi(t)), !f))
                    return c
                      ? (function (t, r) {
                        return oi(t, Yi(t), r);
                      })(
                        t,
                        (function (t, r) {
                          return t && oi(r, of(r), t);
                        })(a, t)
                      )
                      : (function (t, r) {
                        return oi(t, Fi(t), r);
                      })(t, ze(a, t));
                } else {
                  if (!jr[y]) return i ? t : {};
                  a = (function (t, r, n) {
                    var e,
                      o,
                      i = t.constructor;
                    switch (r) {
                      case ut:
                        return Xo(t);
                      case N:
                      case $:
                        return new i(+t);
                      case at:
                        return (function (t, r) {
                          var n = r ? Xo(t.buffer) : t.buffer;
                          return new t.constructor(n, t.byteOffset, t.byteLength);
                        })(t, n);
                      case ft:
                      case ct:
                      case st:
                      case lt:
                      case ht:
                      case pt:
                      case vt:
                      case yt:
                      case dt:
                        return Qo(t, n);
                      case V:
                        return new i();
                      case Z:
                      case rt:
                        return new i(t);
                      case Q:
                        return ((o = new (e = t).constructor(e.source, Yt.exec(e))).lastIndex = e.lastIndex), o;
                      case tt:
                        return new i();
                      case nt:
                        return le ? rr(le.call(t)) : {};
                    }
                  })(t, y, f);
                }
              }
              u || (u = new Ee());
              var g = u.get(t);
              if (g) return g;
              if ((u.set(t, a), Ua(t)))
                return (
                  t.forEach(function (e) {
                    a.add(Ie(e, r, n, e, t, u));
                  }),
                    a
                );
              if (Ra(t))
                return (
                  t.forEach(function (e, o) {
                    a.set(o, Ie(e, r, n, o, t, u));
                  }),
                    a
                );
              var _ = v ? e : (p ? (c ? Ui : zi) : c ? of : ef)(t);
              return (
                qr(_ || t, function (e, o) {
                  _ && (e = t[(o = e)]), Re(a, o, Ie(e, r, n, o, t, u));
                }),
                  a
              );
            }
            function Me(t, r, n) {
              var o = n.length;
              if (null == t) return !o;
              for (t = rr(t); o--; ) {
                var i = n[o],
                  u = t[i];
                if ((u === e && !(i in t)) || !(0, r[i])(u)) return !1;
              }
              return !0;
            }
            function Be(t, r, n) {
              if ("function" != typeof t) throw new or(u);
              return eu(function () {
                t.apply(e, n);
              }, r);
            }
            function Ce(t, r, n, e) {
              var i = -1,
                u = Zr,
                a = !0,
                f = t.length,
                c = [],
                s = r.length;
              if (!f) return c;
              n && (r = Jr(r, yn(n))), e ? ((u = Hr), (a = !1)) : o > r.length || ((u = gn), (a = !1), (r = new me(r)));
              t: for (; ++i < f; ) {
                var l = t[i],
                  h = null == n ? l : n(l);
                if (((l = e || 0 !== l ? l : 0), a && h == h)) {
                  for (var p = s; p--; ) if (r[p] === h) continue t;
                  c.push(l);
                } else u(r, h, e) || c.push(l);
              }
              return c;
            }
            (pe.templateSettings = { escape: At, evaluate: jt, interpolate: Ot, variable: "", imports: { _: pe } }),
              ((pe.prototype = ye.prototype).constructor = pe),
              ((de.prototype = ve(ye.prototype)).constructor = de),
              ((ge.prototype = ve(ye.prototype)).constructor = ge),
              (_e.prototype.clear = function () {
                (this.__data__ = ne ? ne(null) : {}), (this.size = 0);
              }),
              (_e.prototype.delete = function (t) {
                var r = this.has(t) && delete this.__data__[t];
                return (this.size -= r ? 1 : 0), r;
              }),
              (_e.prototype.get = function (t) {
                var r = this.__data__;
                if (ne) {
                  var n = r[t];
                  return n === a ? e : n;
                }
                return cr.call(r, t) ? r[t] : e;
              }),
              (_e.prototype.has = function (t) {
                var r = this.__data__;
                return ne ? r[t] !== e : cr.call(r, t);
              }),
              (_e.prototype.set = function (t, r) {
                var n = this.__data__;
                return (this.size += this.has(t) ? 0 : 1), (n[t] = ne && r === e ? a : r), this;
              }),
              (be.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (be.prototype.delete = function (t) {
                var r = this.__data__,
                  n = ke(r, t);
                return n >= 0 && (n == r.length - 1 ? r.pop() : Ir.call(r, n, 1), --this.size, !0);
              }),
              (be.prototype.get = function (t) {
                var r = this.__data__,
                  n = ke(r, t);
                return 0 > n ? e : r[n][1];
              }),
              (be.prototype.has = function (t) {
                return ke(this.__data__, t) > -1;
              }),
              (be.prototype.set = function (t, r) {
                var n = this.__data__,
                  e = ke(n, t);
                return 0 > e ? (++this.size, n.push([t, r])) : (n[e][1] = r), this;
              }),
              (we.prototype.clear = function () {
                (this.size = 0), (this.__data__ = { hash: new _e(), map: new (Xn || be)(), string: new _e() });
              }),
              (we.prototype.delete = function (t) {
                var r = Bi(this, t).delete(t);
                return (this.size -= r ? 1 : 0), r;
              }),
              (we.prototype.get = function (t) {
                return Bi(this, t).get(t);
              }),
              (we.prototype.has = function (t) {
                return Bi(this, t).has(t);
              }),
              (we.prototype.set = function (t, r) {
                var n = Bi(this, t),
                  e = n.size;
                return n.set(t, r), (this.size += n.size == e ? 0 : 1), this;
              }),
              (me.prototype.add = me.prototype.push = function (t) {
                return this.__data__.set(t, a), this;
              }),
              (me.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (Ee.prototype.clear = function () {
                (this.__data__ = new be()), (this.size = 0);
              }),
              (Ee.prototype.delete = function (t) {
                var r = this.__data__,
                  n = r.delete(t);
                return (this.size = r.size), n;
              }),
              (Ee.prototype.get = function (t) {
                return this.__data__.get(t);
              }),
              (Ee.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (Ee.prototype.set = function (t, r) {
                var n = this.__data__;
                if (n instanceof be) {
                  var e = n.__data__;
                  if (!Xn || o - 1 > e.length) return e.push([t, r]), (this.size = ++n.size), this;
                  n = this.__data__ = new we(e);
                }
                return n.set(t, r), (this.size = n.size), this;
              });
            var De = ai(Ge),
              Fe = ai(Ve, !0);
            function Ye(t, r) {
              var n = !0;
              return (
                De(t, function (t, e, o) {
                  return (n = !!r(t, e, o));
                }),
                  n
              );
            }
            function Ne(t, r, n) {
              for (var o = -1, i = t.length; ++o < i; ) {
                var u = t[o],
                  a = r(u);
                if (null != a && (f === e ? a == a && !La(a) : n(a, f)))
                  var f = a,
                    c = u;
              }
              return c;
            }
            function $e(t, r) {
              var n = [];
              return (
                De(t, function (t, e, o) {
                  r(t, e, o) && n.push(t);
                }),
                  n
              );
            }
            function We(t, r, n, e, o) {
              var i = -1,
                u = t.length;
              for (n || (n = qi), o || (o = []); ++i < u; ) {
                var a = t[i];
                r > 0 && n(a) ? (r > 1 ? We(a, r - 1, n, e, o) : Xr(o, a)) : e || (o[o.length] = a);
              }
              return o;
            }
            var qe = fi(),
              Ke = fi(!0);
            function Ge(t, r) {
              return t && qe(t, r, ef);
            }
            function Ve(t, r) {
              return t && Ke(t, r, ef);
            }
            function Ze(t, r) {
              return Vr(r, function (r) {
                return xa(t[r]);
              });
            }
            function He(t, r) {
              for (var n = 0, o = (r = Go(r, t)).length; null != t && o > n; ) t = t[cu(r[n++])];
              return n && n == o ? t : e;
            }
            function Je(t, r, n) {
              var e = r(t);
              return da(t) ? e : Xr(e, n(t));
            }
            function Xe(t) {
              return null == t
                ? t === e
                  ? et
                  : H
                : ln && (ln in rr(t))
                  ? (function (t) {
                    var r = cr.call(t, ln),
                      n = t[ln];
                    try {
                      t[ln] = e;
                      var o = !0;
                    } catch (t) {}
                    var i = hr.call(t);
                    return o && (r ? (t[ln] = n) : delete t[ln]), i;
                  })(t)
                  : (function (t) {
                    return hr.call(t);
                  })(t);
            }
            function Qe(t, r) {
              return t > r;
            }
            function to(t, r) {
              return null != t && cr.call(t, r);
            }
            function ro(t, r) {
              return null != t && (r in rr(t));
            }
            function no(t, r, n) {
              for (var o = n ? Hr : Zr, i = t[0].length, u = t.length, a = u, f = Ht(u), c = 1 / 0, s = []; a--; ) {
                var l = t[a];
                a && r && (l = Jr(l, yn(r))), (c = Kn(l.length, c)), (f[a] = n || (!r && (120 > i || 120 > l.length)) ? e : new me(a && l));
              }
              l = t[0];
              var h = -1,
                p = f[0];
              t: for (; ++h < i && c > s.length; ) {
                var v = l[h],
                  y = r ? r(v) : v;
                if (((v = n || 0 !== v ? v : 0), !(p ? gn(p, y) : o(s, y, n)))) {
                  for (a = u; --a; ) {
                    var d = f[a];
                    if (!(d ? gn(d, y) : o(t[a], y, n))) continue t;
                  }
                  p && p.push(y), s.push(v);
                }
              }
              return s;
            }
            function eo(t, r, n) {
              var o = null == (t = ru(t, (r = Go(r, t)))) ? t : t[cu(Eu(r))];
              return null == o ? e : $r(o, t, n);
            }
            function oo(t) {
              return Sa(t) && Xe(t) == D;
            }
            function io(t, r, n, o, i) {
              return (
                t === r ||
                (null == t || null == r || (!Sa(t) && !Sa(r))
                  ? t != t && r != r
                  : (function (t, r, n, o, i, u) {
                    var a = da(t),
                      f = da(r),
                      c = a ? F : Ni(t),
                      s = f ? F : Ni(r),
                      l = (c = c == D ? J : c) == J,
                      h = (s = s == D ? J : s) == J,
                      y = c == s;
                    if (y && wa(t)) {
                      if (!wa(r)) return !1;
                      (a = !0), (l = !1);
                    }
                    if (y && !l)
                      return (
                        u || (u = new Ee()),
                          a || Ia(t)
                            ? ki(t, r, n, o, i, u)
                            : (function (t, r, n, e, o, i, u) {
                              switch (n) {
                                case at:
                                  if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset) return !1;
                                  (t = t.buffer), (r = r.buffer);
                                case ut:
                                  return !(t.byteLength != r.byteLength || !i(new Or(t), new Or(r)));
                                case N:
                                case $:
                                case Z:
                                  return ha(+t, +r);
                                case q:
                                  return t.name == r.name && t.message == r.message;
                                case Q:
                                case rt:
                                  return t == r + "";
                                case V:
                                  var a = An;
                                case tt:
                                  var f = e & p;
                                  if ((a || (a = Rn), t.size != r.size && !f)) return !1;
                                  var c = u.get(t);
                                  if (c) return c == r;
                                  (e |= v), u.set(t, r);
                                  var s = ki(a(t), a(r), e, o, i, u);
                                  return u.delete(t), s;
                                case nt:
                                  if (le) return le.call(t) == le.call(r);
                              }
                              return !1;
                            })(t, r, c, n, o, i, u)
                      );
                    if (!(n & p)) {
                      var d = l && cr.call(t, "__wrapped__"),
                        g = h && cr.call(r, "__wrapped__");
                      if (d || g) {
                        var _ = d ? t.value() : t,
                          b = g ? r.value() : r;
                        return u || (u = new Ee()), i(_, b, n, o, u);
                      }
                    }
                    return (
                      !!y &&
                      (u || (u = new Ee()),
                        (function (t, r, n, o, i, u) {
                          var a = n & p,
                            f = zi(t),
                            c = f.length,
                            s = zi(r);
                          if (c != s.length && !a) return !1;
                          for (var l = c; l--; ) {
                            var h = f[l];
                            if (!(a ? (h in r) : cr.call(r, h))) return !1;
                          }
                          var v = u.get(t);
                          if (v && u.get(r)) return v == r;
                          var y = !0;
                          u.set(t, r), u.set(r, t);
                          for (var d = a; ++l < c; ) {
                            var g = t[(h = f[l])],
                              _ = r[h];
                            if (o) var b = a ? o(_, g, h, r, t, u) : o(g, _, h, t, r, u);
                            if (!(b === e ? g === _ || i(g, _, n, o, u) : b)) {
                              y = !1;
                              break;
                            }
                            d || (d = "constructor" == h);
                          }
                          if (y && !d) {
                            var w = t.constructor,
                              m = r.constructor;
                            w != m && ("constructor" in t) && ("constructor" in r) && !("function" == typeof w && w instanceof w && "function" == typeof m && m instanceof m) && (y = !1);
                          }
                          return u.delete(t), u.delete(r), y;
                        })(t, r, n, o, i, u))
                    );
                  })(t, r, n, o, io, i))
              );
            }
            function uo(t, r, n, o) {
              var i = n.length,
                u = i,
                a = !o;
              if (null == t) return !u;
              for (t = rr(t); i--; ) {
                var f = n[i];
                if (a && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1;
              }
              for (; ++i < u; ) {
                var c = (f = n[i])[0],
                  s = t[c],
                  l = f[1];
                if (a && f[2]) {
                  if (s === e && !(c in t)) return !1;
                } else {
                  var h = new Ee();
                  if (o) var y = o(s, l, c, t, r, h);
                  if (!(y === e ? io(l, s, p | v, o, h) : y)) return !1;
                }
              }
              return !0;
            }
            function ao(t) {
              return !(!Oa(t) || (lr && (lr in t))) && (xa(t) ? yr : Wt).test(su(t));
            }
            function fo(t) {
              return "function" == typeof t ? t : null == t ? Tf : "object" == typeof t ? (da(t) ? vo(t[0], t[1]) : po(t)) : Df(t);
            }
            function co(t) {
              if (!Ji(t)) return Wn(t);
              var r = [];
              for (var n in rr(t)) cr.call(t, n) && "constructor" != n && r.push(n);
              return r;
            }
            function so(t) {
              if (!Oa(t))
                return (function (t) {
                  var r = [];
                  if (null != t) for (var n in rr(t)) r.push(n);
                  return r;
                })(t);
              var r = Ji(t),
                n = [];
              for (var e in t) ("constructor" != e || (!r && cr.call(t, e))) && n.push(e);
              return n;
            }
            function lo(t, r) {
              return r > t;
            }
            function ho(t, r) {
              var n = -1,
                e = _a(t) ? Ht(t.length) : [];
              return (
                De(t, function (t, o, i) {
                  e[++n] = r(t, o, i);
                }),
                  e
              );
            }
            function po(t) {
              var r = Ci(t);
              return 1 == r.length && r[0][2]
                ? Qi(r[0][0], r[0][1])
                : function (n) {
                  return n === t || uo(n, t, r);
                };
            }
            function vo(t, r) {
              return Vi(t) && Xi(r)
                ? Qi(cu(t), r)
                : function (n) {
                  var o = Xa(n, t);
                  return o === e && o === r ? Qa(n, t) : io(r, o, p | v);
                };
            }
            function yo(t, r, n, o, i) {
              t !== r &&
              qe(
                r,
                function (u, a) {
                  if (Oa(u))
                    i || (i = new Ee()),
                      (function (t, r, n, o, i, u, a) {
                        var f = Sn(t, n),
                          c = Sn(r, n),
                          s = a.get(c);
                        if (s) Se(t, n, s);
                        else {
                          var l = u ? u(f, c, n + "", t, r, a) : e,
                            h = l === e;
                          if (h) {
                            var p = da(c),
                              v = !p && wa(c),
                              y = !p && !v && Ia(c);
                            (l = c),
                              p || v || y
                                ? da(f)
                                ? (l = f)
                                : ba(f)
                                  ? (l = ei(f))
                                  : v
                                    ? ((h = !1), (l = Jo(c, !0)))
                                    : y
                                      ? ((h = !1), (l = Qo(c, !0)))
                                      : (l = [])
                                : Ta(c) || ya(c)
                                ? ((l = f), ya(f) ? (l = $a(f)) : (!Oa(f) || (o && xa(f))) && (l = Wi(c)))
                                : (h = !1);
                          }
                          h && (a.set(c, l), i(l, c, o, u, a), a.delete(c)), Se(t, n, l);
                        }
                      })(t, r, a, n, yo, o, i);
                  else {
                    var f = o ? o(Sn(t, a), u, a + "", t, r, i) : e;
                    f === e && (f = u), Se(t, a, f);
                  }
                },
                of
              );
            }
            function go(t, r) {
              var n = t.length;
              if (n) return Ki((r += 0 > r ? n : 0), n) ? t[r] : e;
            }
            function _o(t, r, n) {
              var e = -1;
              return (
                (r = Jr(r.length ? r : [Tf], yn(Mi()))),
                  (function (t, r) {
                    var n = t.length;
                    for (t.sort(r); n--; ) t[n] = t[n].value;
                    return t;
                  })(
                    ho(t, function (t, n, o) {
                      return {
                        criteria: Jr(r, function (r) {
                          return r(t);
                        }),
                        index: ++e,
                        value: t,
                      };
                    }),
                    function (t, r) {
                      return (function (t, r, n) {
                        for (var e = -1, o = t.criteria, i = r.criteria, u = o.length, a = n.length; ++e < u; ) {
                          var f = ti(o[e], i[e]);
                          if (f) {
                            if (e >= a) return f;
                            var c = n[e];
                            return f * ("desc" == c ? -1 : 1);
                          }
                        }
                        return t.index - r.index;
                      })(t, r, n);
                    }
                  )
              );
            }
            function bo(t, r, n) {
              for (var e = -1, o = r.length, i = {}; ++e < o; ) {
                var u = r[e],
                  a = He(t, u);
                n(a, u) && So(i, Go(u, t), a);
              }
              return i;
            }
            function wo(t, r, n, e) {
              var o = e ? an : un,
                i = -1,
                u = r.length,
                a = t;
              for (t === r && (r = ei(r)), n && (a = Jr(t, yn(n))); ++i < u; ) for (var f = 0, c = r[i], s = n ? n(c) : c; (f = o(a, s, f, e)) > -1; ) a !== t && Ir.call(a, f, 1), Ir.call(t, f, 1);
              return t;
            }
            function mo(t, r) {
              for (var n = t ? r.length : 0, e = n - 1; n--; ) {
                var o = r[n];
                if (n == e || o !== i) {
                  var i = o;
                  Ki(o) ? Ir.call(t, o, 1) : Do(t, o);
                }
              }
              return t;
            }
            function Eo(t, r) {
              return t + Dn(Zn() * (r - t + 1));
            }
            function xo(t, r) {
              var n = "";
              if (!t || 1 > r || r > U) return n;
              do {
                r % 2 && (n += t), (r = Dn(r / 2)) && (t += t);
              } while (r);
              return n;
            }
            function Ao(t, r) {
              return ou(tu(t, r, Tf), t + "");
            }
            function jo(t) {
              return Ae(pf(t));
            }
            function Oo(t, r) {
              var n = pf(t);
              return au(n, Le(r, 0, n.length));
            }
            function So(t, r, n, o) {
              if (!Oa(t)) return t;
              for (var i = -1, u = (r = Go(r, t)).length, a = u - 1, f = t; null != f && ++i < u; ) {
                var c = cu(r[i]),
                  s = n;
                if (i != a) {
                  var l = f[c];
                  (s = o ? o(l, c, f) : e) === e && (s = Oa(l) ? l : Ki(r[i + 1]) ? [] : {});
                }
                Re(f, c, s), (f = f[c]);
              }
              return t;
            }
            var Ro = ee
              ? function (t, r) {
                return ee.set(t, r), t;
              }
              : Tf,
              ko = Ln
                ? function (t, r) {
                  return Ln(t, "toString", { configurable: !0, enumerable: !1, value: Sf(r), writable: !0 });
                }
                : Tf;
            function To(t) {
              return au(pf(t));
            }
            function zo(t, r, n) {
              var e = -1,
                o = t.length;
              0 > r && (r = -r > o ? 0 : o + r), 0 > (n = n > o ? o : n) && (n += o), (o = r > n ? 0 : (n - r) >>> 0), (r >>>= 0);
              for (var i = Ht(o); ++e < o; ) i[e] = t[e + r];
              return i;
            }
            function Uo(t, r) {
              var n;
              return (
                De(t, function (t, e, o) {
                  return !(n = r(t, e, o));
                }),
                  !!n
              );
            }
            function Po(t, r, n) {
              var e = 0,
                o = null == t ? e : t.length;
              if ("number" == typeof r && r == r && B >= o) {
                for (; o > e; ) {
                  var i = (e + o) >>> 1,
                    u = t[i];
                  null === u || La(u) || (n ? u > r : u >= r) ? (o = i) : (e = i + 1);
                }
                return o;
              }
              return Lo(t, r, Tf, n);
            }
            function Lo(t, r, n, o) {
              r = n(r);
              for (var i = 0, u = null == t ? 0 : t.length, a = r != r, f = null === r, c = La(r), s = r === e; u > i; ) {
                var l = Dn((i + u) / 2),
                  h = n(t[l]),
                  p = h !== e,
                  v = null === h,
                  y = h == h,
                  d = La(h);
                if (a) var g = o || y;
                else g = s ? y && (o || p) : f ? y && p && (o || !v) : c ? y && p && !v && (o || !d) : !v && !d && (o ? r >= h : r > h);
                g ? (i = l + 1) : (u = l);
              }
              return Kn(u, M);
            }
            function Io(t, r) {
              for (var n = -1, e = t.length, o = 0, i = []; ++n < e; ) {
                var u = t[n],
                  a = r ? r(u) : u;
                if (!n || !ha(a, f)) {
                  var f = a;
                  i[o++] = 0 === u ? 0 : u;
                }
              }
              return i;
            }
            function Mo(t) {
              return "number" == typeof t ? t : La(t) ? L : +t;
            }
            function Bo(t) {
              if ("string" == typeof t) return t;
              if (da(t)) return Jr(t, Bo) + "";
              if (La(t)) return he ? he.call(t) : "";
              var r = t + "";
              return "0" == r && 1 / t == -z ? "-0" : r;
            }
            function Co(t, r, n) {
              var e = -1,
                i = Zr,
                u = t.length,
                a = !0,
                f = [],
                c = f;
              if (n) (a = !1), (i = Hr);
              else if (o > u) c = r ? [] : f;
              else {
                var s = r ? null : xi(t);
                if (s) return Rn(s);
                (a = !1), (i = gn), (c = new me());
              }
              t: for (; ++e < u; ) {
                var l = t[e],
                  h = r ? r(l) : l;
                if (((l = n || 0 !== l ? l : 0), a && h == h)) {
                  for (var p = c.length; p--; ) if (c[p] === h) continue t;
                  r && c.push(h), f.push(l);
                } else i(c, h, n) || (c !== f && c.push(h), f.push(l));
              }
              return f;
            }
            function Do(t, r) {
              return null == (t = ru(t, (r = Go(r, t)))) || delete t[cu(Eu(r))];
            }
            function Fo(t, r, n, e) {
              return So(t, r, n(He(t, r)), e);
            }
            function Yo(t, r, n, e) {
              for (var o = t.length, i = e ? o : -1; (e ? i-- : ++i < o) && r(t[i], i, t); );
              return n ? zo(t, e ? 0 : i, e ? i + 1 : o) : zo(t, e ? i + 1 : 0, e ? o : i);
            }
            function No(t, r) {
              var n = t;
              return (
                n instanceof ge && (n = n.value()),
                  Qr(
                    r,
                    function (t, r) {
                      return r.func.apply(r.thisArg, Xr([t], r.args));
                    },
                    n
                  )
              );
            }
            function $o(t, r, n) {
              var e = t.length;
              if (2 > e) return e ? Co(t[0]) : [];
              for (var o = -1, i = Ht(e); ++o < e; ) for (var u = t[o], a = -1; ++a < e; ) a != o && (i[o] = Ce(i[o] || u, t[a], r, n));
              return Co(We(i, 1), r, n);
            }
            function Wo(t, r, n) {
              for (var o = -1, i = t.length, u = r.length, a = {}; ++o < i; ) n(a, t[o], u > o ? r[o] : e);
              return a;
            }
            function qo(t) {
              return ba(t) ? t : [];
            }
            function Ko(t) {
              return "function" == typeof t ? t : Tf;
            }
            function Go(t, r) {
              return da(t) ? t : Vi(t, r) ? [t] : fu(Wa(t));
            }
            var Vo = Ao;
            function Zo(t, r, n) {
              var o = t.length;
              return (n = n === e ? o : n), r || o > n ? zo(t, r, n) : t;
            }
            var Ho =
              In ||
              function (t) {
                return zr.clearTimeout(t);
              };
            function Jo(t, r) {
              if (r) return t.slice();
              var n = t.length,
                e = kr ? kr(n) : new t.constructor(n);
              return t.copy(e), e;
            }
            function Xo(t) {
              var r = new t.constructor(t.byteLength);
              return new Or(r).set(new Or(t)), r;
            }
            function Qo(t, r) {
              var n = r ? Xo(t.buffer) : t.buffer;
              return new t.constructor(n, t.byteOffset, t.length);
            }
            function ti(t, r) {
              if (t !== r) {
                var n = t !== e,
                  o = null === t,
                  i = t == t,
                  u = La(t),
                  a = r !== e,
                  f = null === r,
                  c = r == r,
                  s = La(r);
                if ((!f && !s && !u && t > r) || (u && a && c && !f && !s) || (o && a && c) || (!n && c) || !i) return 1;
                if ((!o && !u && !s && r > t) || (s && n && i && !o && !u) || (f && n && i) || (!a && i) || !c) return -1;
              }
              return 0;
            }
            function ri(t, r, n, e) {
              for (var o = -1, i = t.length, u = n.length, a = -1, f = r.length, c = qn(i - u, 0), s = Ht(f + c), l = !e; ++a < f; ) s[a] = r[a];
              for (; ++o < u; ) (l || i > o) && (s[n[o]] = t[o]);
              for (; c--; ) s[a++] = t[o++];
              return s;
            }
            function ni(t, r, n, e) {
              for (var o = -1, i = t.length, u = -1, a = n.length, f = -1, c = r.length, s = qn(i - a, 0), l = Ht(s + c), h = !e; ++o < s; ) l[o] = t[o];
              for (var p = o; ++f < c; ) l[p + f] = r[f];
              for (; ++u < a; ) (h || i > o) && (l[p + n[u]] = t[o++]);
              return l;
            }
            function ei(t, r) {
              var n = -1,
                e = t.length;
              for (r || (r = Ht(e)); ++n < e; ) r[n] = t[n];
              return r;
            }
            function oi(t, r, n, o) {
              var i = !n;
              n || (n = {});
              for (var u = -1, a = r.length; ++u < a; ) {
                var f = r[u],
                  c = o ? o(n[f], t[f], f, n, t) : e;
                c === e && (c = t[f]), i ? Ue(n, f, c) : Re(n, f, c);
              }
              return n;
            }
            function ii(t, r) {
              return function (n, e) {
                var o = da(n) ? Wr : Te,
                  i = r ? r() : {};
                return o(n, t, Mi(e, 2), i);
              };
            }
            function ui(t) {
              return Ao(function (r, n) {
                var o = -1,
                  i = n.length,
                  u = i > 1 ? n[i - 1] : e,
                  a = i > 2 ? n[2] : e;
                for (u = t.length > 3 && "function" == typeof u ? (i--, u) : e, a && Gi(n[0], n[1], a) && ((u = 3 > i ? e : u), (i = 1)), r = rr(r); ++o < i; ) {
                  var f = n[o];
                  f && t(r, f, o, u);
                }
                return r;
              });
            }
            function ai(t, r) {
              return function (n, e) {
                if (null == n) return n;
                if (!_a(n)) return t(n, e);
                for (var o = n.length, i = r ? o : -1, u = rr(n); (r ? i-- : ++i < o) && !1 !== e(u[i], i, u); );
                return n;
              };
            }
            function fi(t) {
              return function (r, n, e) {
                for (var o = -1, i = rr(r), u = e(r), a = u.length; a--; ) {
                  var f = u[t ? a : ++o];
                  if (!1 === n(i[f], f, i)) break;
                }
                return r;
              };
            }
            function ci(t) {
              return function (r) {
                var n = xn((r = Wa(r))) ? zn(r) : e,
                  o = n ? n[0] : r.charAt(0),
                  i = n ? Zo(n, 1).join("") : r.slice(1);
                return o[t]() + i;
              };
            }
            function si(t) {
              return function (r) {
                return Qr(Af(df(r).replace(dr, "")), t, "");
              };
            }
            function li(t) {
              return function () {
                var r = arguments;
                switch (r.length) {
                  case 0:
                    return new t();
                  case 1:
                    return new t(r[0]);
                  case 2:
                    return new t(r[0], r[1]);
                  case 3:
                    return new t(r[0], r[1], r[2]);
                  case 4:
                    return new t(r[0], r[1], r[2], r[3]);
                  case 5:
                    return new t(r[0], r[1], r[2], r[3], r[4]);
                  case 6:
                    return new t(r[0], r[1], r[2], r[3], r[4], r[5]);
                  case 7:
                    return new t(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
                }
                var n = ve(t.prototype),
                  e = t.apply(n, r);
                return Oa(e) ? e : n;
              };
            }
            function hi(t) {
              return function (r, n, o) {
                var i = rr(r);
                if (!_a(r)) {
                  var u = Mi(n, 3);
                  (r = ef(r)),
                    (n = function (t) {
                      return u(i[t], t, i);
                    });
                }
                var a = t(r, n, o);
                return a > -1 ? i[u ? r[a] : a] : e;
              };
            }
            function pi(t) {
              return Ti(function (r) {
                var n = r.length,
                  o = n,
                  i = de.prototype.thru;
                for (t && r.reverse(); o--; ) {
                  var a = r[o];
                  if ("function" != typeof a) throw new or(u);
                  if (i && !f && "wrapper" == Li(a)) var f = new de([], !0);
                }
                for (o = f ? o : n; ++o < n; ) {
                  var c = Li((a = r[o])),
                    s = "wrapper" == c ? Pi(a) : e;
                  f = s && Zi(s[0]) && s[1] == (E | _ | w | x) && !s[4].length && 1 == s[9] ? f[Li(s[0])].apply(f, s[3]) : 1 == a.length && Zi(a) ? f[c]() : f.thru(a);
                }
                return function () {
                  var t = arguments,
                    e = t[0];
                  if (f && 1 == t.length && da(e)) return f.plant(e).value();
                  for (var o = 0, i = n ? r[o].apply(this, t) : e; ++o < n; ) i = r[o].call(this, i);
                  return i;
                };
              });
            }
            function vi(t, r, n, o, i, u, a, f, c, s) {
              var l = r & E,
                h = r & y,
                p = r & d,
                v = r & (_ | b),
                g = r & A,
                w = p ? e : li(t);
              return function y() {
                for (var d = arguments.length, _ = Ht(d), b = d; b--; ) _[b] = arguments[b];
                if (v)
                  var m = Ii(y),
                    E = (function (t, r) {
                      for (var n = t.length, e = 0; n--; ) t[n] === r && ++e;
                      return e;
                    })(_, m);
                if ((o && (_ = ri(_, o, i, v)), u && (_ = ni(_, u, a, v)), (d -= E), v && s > d)) {
                  var x = On(_, m);
                  return mi(t, r, vi, y.placeholder, n, _, x, f, c, s - d);
                }
                var A = h ? n : this,
                  j = p ? A[t] : t;
                return (
                  (d = _.length),
                    f
                      ? (_ = (function (t, r) {
                        for (var n = t.length, o = Kn(r.length, n), i = ei(t); o--; ) {
                          var u = r[o];
                          t[o] = Ki(u, n) ? i[u] : e;
                        }
                        return t;
                      })(_, f))
                      : g && d > 1 && _.reverse(),
                  l && d > c && (_.length = c),
                  this && this !== zr && this instanceof y && (j = w || li(j)),
                    j.apply(A, _)
                );
              };
            }
            function yi(t, r) {
              return function (n, e) {
                return (function (t, r, n, e) {
                  return (
                    Ge(t, function (t, o, i) {
                      r(e, n(t), o, i);
                    }),
                      e
                  );
                })(n, t, r(e), {});
              };
            }
            function di(t, r) {
              return function (n, o) {
                var i;
                if (n === e && o === e) return r;
                if ((n !== e && (i = n), o !== e)) {
                  if (i === e) return o;
                  "string" == typeof n || "string" == typeof o ? ((n = Bo(n)), (o = Bo(o))) : ((n = Mo(n)), (o = Mo(o))), (i = t(n, o));
                }
                return i;
              };
            }
            function gi(t) {
              return Ti(function (r) {
                return (
                  (r = Jr(r, yn(Mi()))),
                    Ao(function (n) {
                      var e = this;
                      return t(r, function (t) {
                        return $r(t, e, n);
                      });
                    })
                );
              });
            }
            function _i(t, r) {
              var n = (r = r === e ? " " : Bo(r)).length;
              if (2 > n) return n ? xo(r, t) : r;
              var o = xo(r, Cn(t / Tn(r)));
              return xn(r) ? Zo(zn(o), 0, t).join("") : o.slice(0, t);
            }
            function bi(t) {
              return function (r, n, o) {
                return (
                  o && "number" != typeof o && Gi(r, n, o) && (n = o = e),
                    (r = Da(r)),
                    n === e ? ((n = r), (r = 0)) : (n = Da(n)),
                    (function (t, r, n, e) {
                      for (var o = -1, i = qn(Cn((r - t) / (n || 1)), 0), u = Ht(i); i--; ) (u[e ? i : ++o] = t), (t += n);
                      return u;
                    })(r, n, (o = o === e ? (n > r ? 1 : -1) : Da(o)), t)
                );
              };
            }
            function wi(t) {
              return function (r, n) {
                return ("string" == typeof r && "string" == typeof n) || ((r = Na(r)), (n = Na(n))), t(r, n);
              };
            }
            function mi(t, r, n, o, i, u, a, f, c, s) {
              var l = r & _;
              (r |= l ? w : m), (r &= ~(l ? m : w)) & g || (r &= ~(y | d));
              var h = [t, r, i, l ? u : e, l ? a : e, l ? e : u, l ? e : a, f, c, s],
                p = n.apply(e, h);
              return Zi(t) && nu(p, h), (p.placeholder = o), iu(p, t, r);
            }
            function Ei(t) {
              var r = tr[t];
              return function (t, n) {
                if (((t = Na(t)), (n = null == n ? 0 : Kn(Fa(n), 292)))) {
                  var e = (Wa(t) + "e").split("e");
                  return +((e = (Wa(r(e[0] + "e" + (+e[1] + n))) + "e").split("e"))[0] + "e" + (+e[1] - n));
                }
                return r(t);
              };
            }
            var xi =
              te && 1 / Rn(new te([, -0]))[1] == z
                ? function (t) {
                  return new te(t);
                }
                : If;
            function Ai(t) {
              return function (r) {
                var n = Ni(r);
                return n == V
                  ? An(r)
                  : n == tt
                    ? kn(r)
                    : (function (t, r) {
                      return Jr(r, function (r) {
                        return [r, t[r]];
                      });
                    })(r, t(r));
              };
            }
            function ji(t, r, n, o, i, a, f, s) {
              var l = r & d;
              if (!l && "function" != typeof t) throw new or(u);
              var h = o ? o.length : 0;
              if ((h || ((r &= ~(w | m)), (o = i = e)), (f = f === e ? f : qn(Fa(f), 0)), (s = s === e ? s : Fa(s)), (h -= i ? i.length : 0), r & m)) {
                var p = o,
                  v = i;
                o = i = e;
              }
              var A = l ? e : Pi(t),
                j = [t, r, n, o, i, p, v, a, f, s];
              if (
                (A &&
                (function (t, r) {
                  var n = t[1],
                    e = r[1],
                    o = n | e;
                  if (!((y | d | E) > o || (e == E && n == _) || (e == E && n == x && r[8] >= t[7].length) || (e == (E | x) && r[8] >= r[7].length && n == _))) return t;
                  e & y && ((t[2] = r[2]), (o |= n & y ? 0 : g));
                  var i = r[3];
                  if (i) {
                    var u = t[3];
                    (t[3] = u ? ri(u, i, r[4]) : i), (t[4] = u ? On(t[3], c) : r[4]);
                  }
                  (i = r[5]) && ((t[5] = (u = t[5]) ? ni(u, i, r[6]) : i), (t[6] = u ? On(t[5], c) : r[6])),
                  (i = r[7]) && (t[7] = i),
                  e & E && (t[8] = null == t[8] ? r[8] : Kn(t[8], r[8])),
                  null == t[9] && (t[9] = r[9]),
                    (t[0] = r[0]),
                    (t[1] = o);
                })(j, A),
                  (t = j[0]),
                  (r = j[1]),
                  (n = j[2]),
                  (o = j[3]),
                  (i = j[4]),
                !(s = j[9] = j[9] === e ? (l ? 0 : t.length) : qn(j[9] - h, 0)) && r & (_ | b) && (r &= ~(_ | b)),
                r && r != y)
              )
                O =
                  r == _ || r == b
                    ? (function (t, r, n) {
                      var o = li(t);
                      return function i() {
                        for (var u = arguments.length, a = Ht(u), f = u, c = Ii(i); f--; ) a[f] = arguments[f];
                        var s = 3 > u && a[0] !== c && a[u - 1] !== c ? [] : On(a, c);
                        return n > (u -= s.length) ? mi(t, r, vi, i.placeholder, e, a, s, e, e, n - u) : $r(this && this !== zr && this instanceof i ? o : t, this, a);
                      };
                    })(t, r, s)
                    : (r != w && r != (y | w)) || i.length
                    ? vi.apply(e, j)
                    : (function (t, r, n, e) {
                      var o = r & y,
                        i = li(t);
                      return function r() {
                        for (var u = -1, a = arguments.length, f = -1, c = e.length, s = Ht(c + a), l = this && this !== zr && this instanceof r ? i : t; ++f < c; ) s[f] = e[f];
                        for (; a--; ) s[f++] = arguments[++u];
                        return $r(l, o ? n : this, s);
                      };
                    })(t, r, n, o);
              else
                var O = (function (t, r, n) {
                  var e = r & y,
                    o = li(t);
                  return function r() {
                    return (this && this !== zr && this instanceof r ? o : t).apply(e ? n : this, arguments);
                  };
                })(t, r, n);
              return iu((A ? Ro : nu)(O, j), t, r);
            }
            function Oi(t, r, n, o) {
              return t === e || (ha(t, ur[n]) && !cr.call(o, n)) ? r : t;
            }
            function Si(t, r, n, o, i, u) {
              return Oa(t) && Oa(r) && (u.set(r, t), yo(t, r, e, Si, u), u.delete(r)), t;
            }
            function Ri(t) {
              return Ta(t) ? e : t;
            }
            function ki(t, r, n, o, i, u) {
              var a = n & p,
                f = t.length,
                c = r.length;
              if (!(f == c || (a && c > f))) return !1;
              var s = u.get(t);
              if (s && u.get(r)) return s == r;
              var l = -1,
                h = !0,
                y = n & v ? new me() : e;
              for (u.set(t, r), u.set(r, t); ++l < f; ) {
                var d = t[l],
                  g = r[l];
                if (o) var _ = a ? o(g, d, l, r, t, u) : o(d, g, l, t, r, u);
                if (_ !== e) {
                  if (_) continue;
                  h = !1;
                  break;
                }
                if (y) {
                  if (
                    !rn(r, function (t, r) {
                      if (!gn(y, r) && (d === t || i(d, t, n, o, u))) return y.push(r);
                    })
                  ) {
                    h = !1;
                    break;
                  }
                } else if (d !== g && !i(d, g, n, o, u)) {
                  h = !1;
                  break;
                }
              }
              return u.delete(t), u.delete(r), h;
            }
            function Ti(t) {
              return ou(tu(t, e, gu), t + "");
            }
            function zi(t) {
              return Je(t, ef, Fi);
            }
            function Ui(t) {
              return Je(t, of, Yi);
            }
            var Pi = ee
              ? function (t) {
                return ee.get(t);
              }
              : If;
            function Li(t) {
              for (var r = t.name + "", n = oe[r], e = cr.call(oe, r) ? n.length : 0; e--; ) {
                var o = n[e],
                  i = o.func;
                if (null == i || i == t) return o.name;
              }
              return r;
            }
            function Ii(t) {
              return (cr.call(pe, "placeholder") ? pe : t).placeholder;
            }
            function Mi() {
              var t = pe.iteratee || zf;
              return (t = t === zf ? fo : t), arguments.length ? t(arguments[0], arguments[1]) : t;
            }
            function Bi(t, r) {
              var n,
                e,
                o = t.__data__;
              return ("string" == (e = typeof (n = r)) || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== n : null === n) ? o["string" == typeof r ? "string" : "hash"] : o.map;
            }
            function Ci(t) {
              for (var r = ef(t), n = r.length; n--; ) {
                var e = r[n],
                  o = t[e];
                r[n] = [e, o, Xi(o)];
              }
              return r;
            }
            function Di(t, r) {
              var n = (function (t, r) {
                return null == t ? e : t[r];
              })(t, r);
              return ao(n) ? n : e;
            }
            var Fi = Fn
              ? function (t) {
                return null == t
                  ? []
                  : ((t = rr(t)),
                    Vr(Fn(t), function (r) {
                      return Pr.call(t, r);
                    }));
              }
              : Nf,
              Yi = Fn
                ? function (t) {
                  for (var r = []; t; ) Xr(r, Fi(t)), (t = Tr(t));
                  return r;
                }
                : Nf,
              Ni = Xe;
            function $i(t, r, n) {
              for (var e = -1, o = (r = Go(r, t)).length, i = !1; ++e < o; ) {
                var u = cu(r[e]);
                if (!(i = null != t && n(t, u))) break;
                t = t[u];
              }
              return i || ++e != o ? i : !!(o = null == t ? 0 : t.length) && ja(o) && Ki(u, o) && (da(t) || ya(t));
            }
            function Wi(t) {
              return "function" != typeof t.constructor || Ji(t) ? {} : ve(Tr(t));
            }
            function qi(t) {
              return da(t) || ya(t) || !!(Mr && t && t[Mr]);
            }
            function Ki(t, r) {
              var n = typeof t;
              return !!(r = null == r ? U : r) && ("number" == n || ("symbol" != n && Kt.test(t))) && t > -1 && t % 1 == 0 && r > t;
            }
            function Gi(t, r, n) {
              if (!Oa(n)) return !1;
              var e = typeof r;
              return !!("number" == e ? _a(n) && Ki(r, n.length) : "string" == e && (r in n)) && ha(n[r], t);
            }
            function Vi(t, r) {
              if (da(t)) return !1;
              var n = typeof t;
              return !("number" != n && "symbol" != n && "boolean" != n && null != t && !La(t)) || Rt.test(t) || !St.test(t) || (null != r && (t in rr(r)));
            }
            function Zi(t) {
              var r = Li(t),
                n = pe[r];
              if ("function" != typeof n || !(r in ge.prototype)) return !1;
              if (t === n) return !0;
              var e = Pi(n);
              return !!e && t === e[0];
            }
            ((Jn && Ni(new Jn(new ArrayBuffer(1))) != at) || (Xn && Ni(new Xn()) != V) || (Qn && "[object Promise]" != Ni(Qn.resolve())) || (te && Ni(new te()) != tt) || (re && Ni(new re()) != ot)) &&
            (Ni = function (t) {
              var r = Xe(t),
                n = r == J ? t.constructor : e,
                o = n ? su(n) : "";
              if (o)
                switch (o) {
                  case ie:
                    return at;
                  case ue:
                    return V;
                  case ae:
                    return "[object Promise]";
                  case fe:
                    return tt;
                  case ce:
                    return ot;
                }
              return r;
            });
            var Hi = ar ? xa : $f;
            function Ji(t) {
              var r = t && t.constructor;
              return t === (("function" == typeof r && r.prototype) || ur);
            }
            function Xi(t) {
              return t == t && !Oa(t);
            }
            function Qi(t, r) {
              return function (n) {
                return null != n && n[t] === r && (r !== e || (t in rr(n)));
              };
            }
            function tu(t, r, n) {
              return (
                (r = qn(r === e ? t.length - 1 : r, 0)),
                  function () {
                    for (var e = arguments, o = -1, i = qn(e.length - r, 0), u = Ht(i); ++o < i; ) u[o] = e[r + o];
                    o = -1;
                    for (var a = Ht(r + 1); ++o < r; ) a[o] = e[o];
                    return (a[r] = n(u)), $r(t, this, a);
                  }
              );
            }
            function ru(t, r) {
              return 2 > r.length ? t : He(t, zo(r, 0, -1));
            }
            var nu = uu(Ro),
              eu =
                Bn ||
                function (t, r) {
                  return zr.setTimeout(t, r);
                },
              ou = uu(ko);
            function iu(t, r, n) {
              var e = r + "";
              return ou(
                t,
                (function (t, r) {
                  var n = r.length;
                  if (!n) return t;
                  var e = n - 1;
                  return (r[e] = (n > 1 ? "& " : "") + r[e]), (r = r.join(n > 2 ? ", " : " ")), t.replace(It, "{\n/* [wrapped with " + r + "] */\n");
                })(
                  e,
                  (function (t, r) {
                    return (
                      qr(C, function (n) {
                        var e = "_." + n[0];
                        r & n[1] && !Zr(t, e) && t.push(e);
                      }),
                        t.sort()
                    );
                  })(
                    (function (t) {
                      var r = t.match(Mt);
                      return r ? r[1].split(Bt) : [];
                    })(e),
                    n
                  )
                )
              );
            }
            function uu(t) {
              var r = 0,
                n = 0;
              return function () {
                var o = Gn(),
                  i = R - (o - n);
                if (((n = o), i > 0)) {
                  if (++r >= S) return arguments[0];
                } else r = 0;
                return t.apply(e, arguments);
              };
            }
            function au(t, r) {
              var n = -1,
                o = t.length,
                i = o - 1;
              for (r = r === e ? o : r; ++n < r; ) {
                var u = Eo(n, i),
                  a = t[u];
                (t[u] = t[n]), (t[n] = a);
              }
              return (t.length = r), t;
            }
            var fu = (function (t) {
              var r = ua(t, function (t) {
                  return n.size === f && n.clear(), t;
                }),
                n = r.cache;
              return r;
            })(function (t) {
              var r = [];
              return (
                46 === t.charCodeAt(0) && r.push(""),
                  t.replace(kt, function (t, n, e, o) {
                    r.push(e ? o.replace(Dt, "$1") : n || t);
                  }),
                  r
              );
            });
            function cu(t) {
              if ("string" == typeof t || La(t)) return t;
              var r = t + "";
              return "0" == r && 1 / t == -z ? "-0" : r;
            }
            function su(t) {
              if (null != t) {
                try {
                  return fr.call(t);
                } catch (t) {}
                try {
                  return t + "";
                } catch (t) {}
              }
              return "";
            }
            function lu(t) {
              if (t instanceof ge) return t.clone();
              var r = new de(t.__wrapped__, t.__chain__);
              return (r.__actions__ = ei(t.__actions__)), (r.__index__ = t.__index__), (r.__values__ = t.__values__), r;
            }
            var hu = Ao(function (t, r) {
                return ba(t) ? Ce(t, We(r, 1, ba, !0)) : [];
              }),
              pu = Ao(function (t, r) {
                var n = Eu(r);
                return ba(n) && (n = e), ba(t) ? Ce(t, We(r, 1, ba, !0), Mi(n, 2)) : [];
              }),
              vu = Ao(function (t, r) {
                var n = Eu(r);
                return ba(n) && (n = e), ba(t) ? Ce(t, We(r, 1, ba, !0), e, n) : [];
              });
            function yu(t, r, n) {
              var e = null == t ? 0 : t.length;
              if (!e) return -1;
              var o = null == n ? 0 : Fa(n);
              return 0 > o && (o = qn(e + o, 0)), on(t, Mi(r, 3), o);
            }
            function du(t, r, n) {
              var o = null == t ? 0 : t.length;
              if (!o) return -1;
              var i = o - 1;
              return n !== e && ((i = Fa(n)), (i = 0 > n ? qn(o + i, 0) : Kn(i, o - 1))), on(t, Mi(r, 3), i, !0);
            }
            function gu(t) {
              return null != t && t.length ? We(t, 1) : [];
            }
            function _u(t) {
              return t && t.length ? t[0] : e;
            }
            var bu = Ao(function (t) {
                var r = Jr(t, qo);
                return r.length && r[0] === t[0] ? no(r) : [];
              }),
              wu = Ao(function (t) {
                var r = Eu(t),
                  n = Jr(t, qo);
                return r === Eu(n) ? (r = e) : n.pop(), n.length && n[0] === t[0] ? no(n, Mi(r, 2)) : [];
              }),
              mu = Ao(function (t) {
                var r = Eu(t),
                  n = Jr(t, qo);
                return (r = "function" == typeof r ? r : e) && n.pop(), n.length && n[0] === t[0] ? no(n, e, r) : [];
              });
            function Eu(t) {
              var r = null == t ? 0 : t.length;
              return r ? t[r - 1] : e;
            }
            var xu = Ao(Au);
            function Au(t, r) {
              return t && t.length && r && r.length ? wo(t, r) : t;
            }
            var ju = Ti(function (t, r) {
              var n = null == t ? 0 : t.length,
                e = Pe(t, r);
              return (
                mo(
                  t,
                  Jr(r, function (t) {
                    return Ki(t, n) ? +t : t;
                  }).sort(ti)
                ),
                  e
              );
            });
            function Ou(t) {
              return null == t ? t : Hn.call(t);
            }
            var Su = Ao(function (t) {
                return Co(We(t, 1, ba, !0));
              }),
              Ru = Ao(function (t) {
                var r = Eu(t);
                return ba(r) && (r = e), Co(We(t, 1, ba, !0), Mi(r, 2));
              }),
              ku = Ao(function (t) {
                var r = Eu(t);
                return (r = "function" == typeof r ? r : e), Co(We(t, 1, ba, !0), e, r);
              });
            function Tu(t) {
              if (!t || !t.length) return [];
              var r = 0;
              return (
                (t = Vr(t, function (t) {
                  if (ba(t)) return (r = qn(t.length, r)), !0;
                })),
                  vn(r, function (r) {
                    return Jr(t, sn(r));
                  })
              );
            }
            function zu(t, r) {
              if (!t || !t.length) return [];
              var n = Tu(t);
              return null == r
                ? n
                : Jr(n, function (t) {
                  return $r(r, e, t);
                });
            }
            var Uu = Ao(function (t, r) {
                return ba(t) ? Ce(t, r) : [];
              }),
              Pu = Ao(function (t) {
                return $o(Vr(t, ba));
              }),
              Lu = Ao(function (t) {
                var r = Eu(t);
                return ba(r) && (r = e), $o(Vr(t, ba), Mi(r, 2));
              }),
              Iu = Ao(function (t) {
                var r = Eu(t);
                return (r = "function" == typeof r ? r : e), $o(Vr(t, ba), e, r);
              }),
              Mu = Ao(Tu);
            var Bu = Ao(function (t) {
              var r = t.length,
                n = r > 1 ? t[r - 1] : e;
              return zu(t, (n = "function" == typeof n ? (t.pop(), n) : e));
            });
            function Cu(t) {
              var r = pe(t);
              return (r.__chain__ = !0), r;
            }
            function Du(t, r) {
              return r(t);
            }
            var Fu = Ti(function (t) {
              var r = t.length,
                n = r ? t[0] : 0,
                o = this.__wrapped__,
                i = function (r) {
                  return Pe(r, t);
                };
              return 1 >= r && !this.__actions__.length && o instanceof ge && Ki(n)
                ? ((o = o.slice(n, +n + (r ? 1 : 0))).__actions__.push({ func: Du, args: [i], thisArg: e }),
                  new de(o, this.__chain__).thru(function (t) {
                    return r && !t.length && t.push(e), t;
                  }))
                : this.thru(i);
            });
            var Yu = ii(function (t, r, n) {
              cr.call(t, n) ? ++t[n] : Ue(t, n, 1);
            });
            var Nu = hi(yu),
              $u = hi(du);
            function Wu(t, r) {
              return (da(t) ? qr : De)(t, Mi(r, 3));
            }
            function qu(t, r) {
              return (da(t) ? Kr : Fe)(t, Mi(r, 3));
            }
            var Ku = ii(function (t, r, n) {
              cr.call(t, n) ? t[n].push(r) : Ue(t, n, [r]);
            });
            var Gu = Ao(function (t, r, n) {
                var e = -1,
                  o = "function" == typeof r,
                  i = _a(t) ? Ht(t.length) : [];
                return (
                  De(t, function (t) {
                    i[++e] = o ? $r(r, t, n) : eo(t, r, n);
                  }),
                    i
                );
              }),
              Vu = ii(function (t, r, n) {
                Ue(t, n, r);
              });
            function Zu(t, r) {
              return (da(t) ? Jr : ho)(t, Mi(r, 3));
            }
            var Hu = ii(
              function (t, r, n) {
                t[n ? 0 : 1].push(r);
              },
              function () {
                return [[], []];
              }
            );
            var Ju = Ao(function (t, r) {
                if (null == t) return [];
                var n = r.length;
                return n > 1 && Gi(t, r[0], r[1]) ? (r = []) : n > 2 && Gi(r[0], r[1], r[2]) && (r = [r[0]]), _o(t, We(r, 1), []);
              }),
              Xu =
                Mn ||
                function () {
                  return zr.Date.now();
                };
            function Qu(t, r, n) {
              return (r = n ? e : r), ji(t, E, e, e, e, e, (r = t && null == r ? t.length : r));
            }
            function ta(t, r) {
              var n;
              if ("function" != typeof r) throw new or(u);
              return (
                (t = Fa(t)),
                  function () {
                    return --t > 0 && (n = r.apply(this, arguments)), t > 1 || (r = e), n;
                  }
              );
            }
            var ra = Ao(function (t, r, n) {
                var e = y;
                if (n.length) {
                  var o = On(n, Ii(ra));
                  e |= w;
                }
                return ji(t, e, r, n, o);
              }),
              na = Ao(function (t, r, n) {
                var e = y | d;
                if (n.length) {
                  var o = On(n, Ii(na));
                  e |= w;
                }
                return ji(r, e, t, n, o);
              });
            function ea(t, r, n) {
              var o,
                i,
                a,
                f,
                c,
                s,
                l = 0,
                h = !1,
                p = !1,
                v = !0;
              if ("function" != typeof t) throw new or(u);
              function y(r) {
                var n = o,
                  u = i;
                return (o = i = e), (l = r), (f = t.apply(u, n));
              }
              function d(t) {
                var n = t - s;
                return s === e || n >= r || 0 > n || (p && t - l >= a);
              }
              function g() {
                var t = Xu();
                if (d(t)) return _(t);
                c = eu(
                  g,
                  (function (t) {
                    var n = r - (t - s);
                    return p ? Kn(n, a - (t - l)) : n;
                  })(t)
                );
              }
              function _(t) {
                return (c = e), v && o ? y(t) : ((o = i = e), f);
              }
              function b() {
                var t = Xu(),
                  n = d(t);
                if (((o = arguments), (i = this), (s = t), n)) {
                  if (c === e)
                    return (function (t) {
                      return (l = t), (c = eu(g, r)), h ? y(t) : f;
                    })(s);
                  if (p) return (c = eu(g, r)), y(s);
                }
                return c === e && (c = eu(g, r)), f;
              }
              return (
                (r = Na(r) || 0),
                Oa(n) && ((h = !!n.leading), (a = (p = ("maxWait" in n)) ? qn(Na(n.maxWait) || 0, r) : a), (v = ("trailing" in n) ? !!n.trailing : v)),
                  (b.cancel = function () {
                    c !== e && Ho(c), (l = 0), (o = s = i = c = e);
                  }),
                  (b.flush = function () {
                    return c === e ? f : _(Xu());
                  }),
                  b
              );
            }
            var oa = Ao(function (t, r) {
                return Be(t, 1, r);
              }),
              ia = Ao(function (t, r, n) {
                return Be(t, Na(r) || 0, n);
              });
            function ua(t, r) {
              if ("function" != typeof t || (null != r && "function" != typeof r)) throw new or(u);
              var n = function () {
                var e = arguments,
                  o = r ? r.apply(this, e) : e[0],
                  i = n.cache;
                if (i.has(o)) return i.get(o);
                var u = t.apply(this, e);
                return (n.cache = i.set(o, u) || i), u;
              };
              return (n.cache = new (ua.Cache || we)()), n;
            }
            function aa(t) {
              if ("function" != typeof t) throw new or(u);
              return function () {
                var r = arguments;
                switch (r.length) {
                  case 0:
                    return !t.call(this);
                  case 1:
                    return !t.call(this, r[0]);
                  case 2:
                    return !t.call(this, r[0], r[1]);
                  case 3:
                    return !t.call(this, r[0], r[1], r[2]);
                }
                return !t.apply(this, r);
              };
            }
            ua.Cache = we;
            var fa = Vo(function (t, r) {
                var n = (r = 1 == r.length && da(r[0]) ? Jr(r[0], yn(Mi())) : Jr(We(r, 1), yn(Mi()))).length;
                return Ao(function (e) {
                  for (var o = -1, i = Kn(e.length, n); ++o < i; ) e[o] = r[o].call(this, e[o]);
                  return $r(t, this, e);
                });
              }),
              ca = Ao(function (t, r) {
                var n = On(r, Ii(ca));
                return ji(t, w, e, r, n);
              }),
              sa = Ao(function (t, r) {
                var n = On(r, Ii(sa));
                return ji(t, m, e, r, n);
              }),
              la = Ti(function (t, r) {
                return ji(t, x, e, e, e, r);
              });
            function ha(t, r) {
              return t === r || (t != t && r != r);
            }
            var pa = wi(Qe),
              va = wi(function (t, r) {
                return t >= r;
              }),
              ya = oo(
                (function () {
                  return arguments;
                })()
              )
                ? oo
                : function (t) {
                  return Sa(t) && cr.call(t, "callee") && !Pr.call(t, "callee");
                },
              da = Ht.isArray,
              ga = Br
                ? yn(Br)
                : function (t) {
                  return Sa(t) && Xe(t) == ut;
                };
            function _a(t) {
              return null != t && ja(t.length) && !xa(t);
            }
            function ba(t) {
              return Sa(t) && _a(t);
            }
            var wa = Yn || $f,
              ma = Cr
                ? yn(Cr)
                : function (t) {
                  return Sa(t) && Xe(t) == $;
                };
            function Ea(t) {
              if (!Sa(t)) return !1;
              var r = Xe(t);
              return r == q || r == W || ("string" == typeof t.message && "string" == typeof t.name && !Ta(t));
            }
            function xa(t) {
              if (!Oa(t)) return !1;
              var r = Xe(t);
              return r == K || r == G || r == Y || r == X;
            }
            function Aa(t) {
              return "number" == typeof t && t == Fa(t);
            }
            function ja(t) {
              return "number" == typeof t && t > -1 && t % 1 == 0 && U >= t;
            }
            function Oa(t) {
              var r = typeof t;
              return null != t && ("object" == r || "function" == r);
            }
            function Sa(t) {
              return null != t && "object" == typeof t;
            }
            var Ra = Dr
              ? yn(Dr)
              : function (t) {
                return Sa(t) && Ni(t) == V;
              };
            function ka(t) {
              return "number" == typeof t || (Sa(t) && Xe(t) == Z);
            }
            function Ta(t) {
              if (!Sa(t) || Xe(t) != J) return !1;
              var r = Tr(t);
              if (null === r) return !0;
              var n = cr.call(r, "constructor") && r.constructor;
              return "function" == typeof n && n instanceof n && fr.call(n) == pr;
            }
            var za = Fr
              ? yn(Fr)
              : function (t) {
                return Sa(t) && Xe(t) == Q;
              };
            var Ua = Yr
              ? yn(Yr)
              : function (t) {
                return Sa(t) && Ni(t) == tt;
              };
            function Pa(t) {
              return "string" == typeof t || (!da(t) && Sa(t) && Xe(t) == rt);
            }
            function La(t) {
              return "symbol" == typeof t || (Sa(t) && Xe(t) == nt);
            }
            var Ia = Nr
              ? yn(Nr)
              : function (t) {
                return Sa(t) && ja(t.length) && !!Ar[Xe(t)];
              };
            var Ma = wi(lo),
              Ba = wi(function (t, r) {
                return r >= t;
              });
            function Ca(t) {
              if (!t) return [];
              if (_a(t)) return Pa(t) ? zn(t) : ei(t);
              if (nn && t[nn])
                return (function (t) {
                  for (var r, n = []; !(r = t.next()).done; ) n.push(r.value);
                  return n;
                })(t[nn]());
              var r = Ni(t);
              return (r == V ? An : r == tt ? Rn : pf)(t);
            }
            function Da(t) {
              return t ? ((t = Na(t)) === z || t === -z ? (0 > t ? -1 : 1) * P : t == t ? t : 0) : 0 === t ? t : 0;
            }
            function Fa(t) {
              var r = Da(t),
                n = r % 1;
              return r == r ? (n ? r - n : r) : 0;
            }
            function Ya(t) {
              return t ? Le(Fa(t), 0, I) : 0;
            }
            function Na(t) {
              if ("number" == typeof t) return t;
              if (La(t)) return L;
              if (Oa(t)) {
                var r = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = Oa(r) ? r + "" : r;
              }
              if ("string" != typeof t) return 0 === t ? t : +t;
              t = t.replace(Ut, "");
              var n = $t.test(t);
              return n || qt.test(t) ? Rr(t.slice(2), n ? 2 : 8) : Nt.test(t) ? L : +t;
            }
            function $a(t) {
              return oi(t, of(t));
            }
            function Wa(t) {
              return null == t ? "" : Bo(t);
            }
            var qa = ui(function (t, r) {
                if (Ji(r) || _a(r)) oi(r, ef(r), t);
                else for (var n in r) cr.call(r, n) && Re(t, n, r[n]);
              }),
              Ka = ui(function (t, r) {
                oi(r, of(r), t);
              }),
              Ga = ui(function (t, r, n, e) {
                oi(r, of(r), t, e);
              }),
              Va = ui(function (t, r, n, e) {
                oi(r, ef(r), t, e);
              }),
              Za = Ti(Pe);
            var Ha = Ao(function (t, r) {
                t = rr(t);
                var n = -1,
                  o = r.length,
                  i = o > 2 ? r[2] : e;
                for (i && Gi(r[0], r[1], i) && (o = 1); ++n < o; )
                  for (var u = r[n], a = of(u), f = -1, c = a.length; ++f < c; ) {
                    var s = a[f],
                      l = t[s];
                    (l === e || (ha(l, ur[s]) && !cr.call(t, s))) && (t[s] = u[s]);
                  }
                return t;
              }),
              Ja = Ao(function (t) {
                return t.push(e, Si), $r(af, e, t);
              });
            function Xa(t, r, n) {
              var o = null == t ? e : He(t, r);
              return o === e ? n : o;
            }
            function Qa(t, r) {
              return null != t && $i(t, r, ro);
            }
            var tf = yi(function (t, r, n) {
                null != r && "function" != typeof r.toString && (r = hr.call(r)), (t[r] = n);
              }, Sf(Tf)),
              rf = yi(function (t, r, n) {
                null != r && "function" != typeof r.toString && (r = hr.call(r)), cr.call(t, r) ? t[r].push(n) : (t[r] = [n]);
              }, Mi),
              nf = Ao(eo);
            function ef(t) {
              return _a(t) ? xe(t) : co(t);
            }
            function of(t) {
              return _a(t) ? xe(t, !0) : so(t);
            }
            var uf = ui(function (t, r, n) {
                yo(t, r, n);
              }),
              af = ui(function (t, r, n, e) {
                yo(t, r, n, e);
              }),
              ff = Ti(function (t, r) {
                var n = {};
                if (null == t) return n;
                var e = !1;
                (r = Jr(r, function (r) {
                  return (r = Go(r, t)), e || (e = r.length > 1), r;
                })),
                  oi(t, Ui(t), n),
                e && (n = Ie(n, s | l | h, Ri));
                for (var o = r.length; o--; ) Do(n, r[o]);
                return n;
              });
            var cf = Ti(function (t, r) {
              return null == t
                ? {}
                : (function (t, r) {
                  return bo(t, r, function (r, n) {
                    return Qa(t, n);
                  });
                })(t, r);
            });
            function sf(t, r) {
              if (null == t) return {};
              var n = Jr(Ui(t), function (t) {
                return [t];
              });
              return (
                (r = Mi(r)),
                  bo(t, n, function (t, n) {
                    return r(t, n[0]);
                  })
              );
            }
            var lf = Ai(ef),
              hf = Ai(of);
            function pf(t) {
              return null == t ? [] : dn(t, ef(t));
            }
            var vf = si(function (t, r, n) {
              return (r = r.toLowerCase()), t + (n ? yf(r) : r);
            });
            function yf(t) {
              return xf(Wa(t).toLowerCase());
            }
            function df(t) {
              return (t = Wa(t)) && t.replace(Gt, wn).replace(gr, "");
            }
            var gf = si(function (t, r, n) {
                return t + (n ? "-" : "") + r.toLowerCase();
              }),
              _f = si(function (t, r, n) {
                return t + (n ? " " : "") + r.toLowerCase();
              }),
              bf = ci("toLowerCase");
            var wf = si(function (t, r, n) {
              return t + (n ? "_" : "") + r.toLowerCase();
            });
            var mf = si(function (t, r, n) {
              return t + (n ? " " : "") + xf(r);
            });
            var Ef = si(function (t, r, n) {
                return t + (n ? " " : "") + r.toUpperCase();
              }),
              xf = ci("toUpperCase");
            function Af(t, r, n) {
              return (
                (t = Wa(t)),
                  (r = n ? e : r) === e
                    ? (function (t) {
                      return mr.test(t);
                    })(t)
                    ? (function (t) {
                      return t.match(br) || [];
                    })(t)
                    : (function (t) {
                      return t.match(Ct) || [];
                    })(t)
                    : t.match(r) || []
              );
            }
            var jf = Ao(function (t, r) {
                try {
                  return $r(t, e, r);
                } catch (t) {
                  return Ea(t) ? t : new Xt(t);
                }
              }),
              Of = Ti(function (t, r) {
                return (
                  qr(r, function (r) {
                    (r = cu(r)), Ue(t, r, ra(t[r], t));
                  }),
                    t
                );
              });
            function Sf(t) {
              return function () {
                return t;
              };
            }
            var Rf = pi(),
              kf = pi(!0);
            function Tf(t) {
              return t;
            }
            function zf(t) {
              return fo("function" == typeof t ? t : Ie(t, s));
            }
            var Uf = Ao(function (t, r) {
                return function (n) {
                  return eo(n, t, r);
                };
              }),
              Pf = Ao(function (t, r) {
                return function (n) {
                  return eo(t, n, r);
                };
              });
            function Lf(t, r, n) {
              var e = ef(r),
                o = Ze(r, e);
              null != n || (Oa(r) && (o.length || !e.length)) || ((n = r), (r = t), (t = this), (o = Ze(r, ef(r))));
              var i = !(Oa(n) && ("chain" in n) && !n.chain),
                u = xa(t);
              return (
                qr(o, function (n) {
                  var e = r[n];
                  (t[n] = e),
                  u &&
                  (t.prototype[n] = function () {
                    var r = this.__chain__;
                    if (i || r) {
                      var n = t(this.__wrapped__);
                      return (n.__actions__ = ei(this.__actions__)).push({ func: e, args: arguments, thisArg: t }), (n.__chain__ = r), n;
                    }
                    return e.apply(t, Xr([this.value()], arguments));
                  });
                }),
                  t
              );
            }
            function If() {}
            var Mf = gi(Jr),
              Bf = gi(Gr),
              Cf = gi(rn);
            function Df(t) {
              return Vi(t)
                ? sn(cu(t))
                : (function (t) {
                  return function (r) {
                    return He(r, t);
                  };
                })(t);
            }
            var Ff = bi(),
              Yf = bi(!0);
            function Nf() {
              return [];
            }
            function $f() {
              return !1;
            }
            var Wf = di(function (t, r) {
                return t + r;
              }, 0),
              qf = Ei("ceil"),
              Kf = di(function (t, r) {
                return t / r;
              }, 1),
              Gf = Ei("floor");
            var Vf,
              Zf = di(function (t, r) {
                return t * r;
              }, 1),
              Hf = Ei("round"),
              Jf = di(function (t, r) {
                return t - r;
              }, 0);
            return (
              (pe.after = function (t, r) {
                if ("function" != typeof r) throw new or(u);
                return (
                  (t = Fa(t)),
                    function () {
                      if (1 > --t) return r.apply(this, arguments);
                    }
                );
              }),
                (pe.ary = Qu),
                (pe.assign = qa),
                (pe.assignIn = Ka),
                (pe.assignInWith = Ga),
                (pe.assignWith = Va),
                (pe.at = Za),
                (pe.before = ta),
                (pe.bind = ra),
                (pe.bindAll = Of),
                (pe.bindKey = na),
                (pe.castArray = function () {
                  if (!arguments.length) return [];
                  var t = arguments[0];
                  return da(t) ? t : [t];
                }),
                (pe.chain = Cu),
                (pe.chunk = function (t, r, n) {
                  r = (n ? Gi(t, r, n) : r === e) ? 1 : qn(Fa(r), 0);
                  var o = null == t ? 0 : t.length;
                  if (!o || 1 > r) return [];
                  for (var i = 0, u = 0, a = Ht(Cn(o / r)); o > i; ) a[u++] = zo(t, i, (i += r));
                  return a;
                }),
                (pe.compact = function (t) {
                  for (var r = -1, n = null == t ? 0 : t.length, e = 0, o = []; ++r < n; ) {
                    var i = t[r];
                    i && (o[e++] = i);
                  }
                  return o;
                }),
                (pe.concat = function () {
                  var t = arguments.length;
                  if (!t) return [];
                  for (var r = Ht(t - 1), n = arguments[0], e = t; e--; ) r[e - 1] = arguments[e];
                  return Xr(da(n) ? ei(n) : [n], We(r, 1));
                }),
                (pe.cond = function (t) {
                  var r = null == t ? 0 : t.length,
                    n = Mi();
                  return (
                    (t = r
                      ? Jr(t, function (t) {
                        if ("function" != typeof t[1]) throw new or(u);
                        return [n(t[0]), t[1]];
                      })
                      : []),
                      Ao(function (n) {
                        for (var e = -1; ++e < r; ) {
                          var o = t[e];
                          if ($r(o[0], this, n)) return $r(o[1], this, n);
                        }
                      })
                  );
                }),
                (pe.conforms = function (t) {
                  return (function (t) {
                    var r = ef(t);
                    return function (n) {
                      return Me(n, t, r);
                    };
                  })(Ie(t, s));
                }),
                (pe.constant = Sf),
                (pe.countBy = Yu),
                (pe.create = function (t, r) {
                  var n = ve(t);
                  return null == r ? n : ze(n, r);
                }),
                (pe.curry = function t(r, n, o) {
                  var i = ji(r, _, e, e, e, e, e, (n = o ? e : n));
                  return (i.placeholder = t.placeholder), i;
                }),
                (pe.curryRight = function t(r, n, o) {
                  var i = ji(r, b, e, e, e, e, e, (n = o ? e : n));
                  return (i.placeholder = t.placeholder), i;
                }),
                (pe.debounce = ea),
                (pe.defaults = Ha),
                (pe.defaultsDeep = Ja),
                (pe.defer = oa),
                (pe.delay = ia),
                (pe.difference = hu),
                (pe.differenceBy = pu),
                (pe.differenceWith = vu),
                (pe.drop = function (t, r, n) {
                  var o = null == t ? 0 : t.length;
                  return o ? zo(t, 0 > (r = n || r === e ? 1 : Fa(r)) ? 0 : r, o) : [];
                }),
                (pe.dropRight = function (t, r, n) {
                  var o = null == t ? 0 : t.length;
                  return o ? zo(t, 0, 0 > (r = o - (r = n || r === e ? 1 : Fa(r))) ? 0 : r) : [];
                }),
                (pe.dropRightWhile = function (t, r) {
                  return t && t.length ? Yo(t, Mi(r, 3), !0, !0) : [];
                }),
                (pe.dropWhile = function (t, r) {
                  return t && t.length ? Yo(t, Mi(r, 3), !0) : [];
                }),
                (pe.fill = function (t, r, n, o) {
                  var i = null == t ? 0 : t.length;
                  return i
                    ? (n && "number" != typeof n && Gi(t, r, n) && ((n = 0), (o = i)),
                      (function (t, r, n, o) {
                        var i = t.length;
                        for (0 > (n = Fa(n)) && (n = -n > i ? 0 : i + n), 0 > (o = o === e || o > i ? i : Fa(o)) && (o += i), o = n > o ? 0 : Ya(o); o > n; ) t[n++] = r;
                        return t;
                      })(t, r, n, o))
                    : [];
                }),
                (pe.filter = function (t, r) {
                  return (da(t) ? Vr : $e)(t, Mi(r, 3));
                }),
                (pe.flatMap = function (t, r) {
                  return We(Zu(t, r), 1);
                }),
                (pe.flatMapDeep = function (t, r) {
                  return We(Zu(t, r), z);
                }),
                (pe.flatMapDepth = function (t, r, n) {
                  return (n = n === e ? 1 : Fa(n)), We(Zu(t, r), n);
                }),
                (pe.flatten = gu),
                (pe.flattenDeep = function (t) {
                  return null != t && t.length ? We(t, z) : [];
                }),
                (pe.flattenDepth = function (t, r) {
                  return null != t && t.length ? We(t, (r = r === e ? 1 : Fa(r))) : [];
                }),
                (pe.flip = function (t) {
                  return ji(t, A);
                }),
                (pe.flow = Rf),
                (pe.flowRight = kf),
                (pe.fromPairs = function (t) {
                  for (var r = -1, n = null == t ? 0 : t.length, e = {}; ++r < n; ) {
                    var o = t[r];
                    e[o[0]] = o[1];
                  }
                  return e;
                }),
                (pe.functions = function (t) {
                  return null == t ? [] : Ze(t, ef(t));
                }),
                (pe.functionsIn = function (t) {
                  return null == t ? [] : Ze(t, of(t));
                }),
                (pe.groupBy = Ku),
                (pe.initial = function (t) {
                  return null != t && t.length ? zo(t, 0, -1) : [];
                }),
                (pe.intersection = bu),
                (pe.intersectionBy = wu),
                (pe.intersectionWith = mu),
                (pe.invert = tf),
                (pe.invertBy = rf),
                (pe.invokeMap = Gu),
                (pe.iteratee = zf),
                (pe.keyBy = Vu),
                (pe.keys = ef),
                (pe.keysIn = of),
                (pe.map = Zu),
                (pe.mapKeys = function (t, r) {
                  var n = {};
                  return (
                    (r = Mi(r, 3)),
                      Ge(t, function (t, e, o) {
                        Ue(n, r(t, e, o), t);
                      }),
                      n
                  );
                }),
                (pe.mapValues = function (t, r) {
                  var n = {};
                  return (
                    (r = Mi(r, 3)),
                      Ge(t, function (t, e, o) {
                        Ue(n, e, r(t, e, o));
                      }),
                      n
                  );
                }),
                (pe.matches = function (t) {
                  return po(Ie(t, s));
                }),
                (pe.matchesProperty = function (t, r) {
                  return vo(t, Ie(r, s));
                }),
                (pe.memoize = ua),
                (pe.merge = uf),
                (pe.mergeWith = af),
                (pe.method = Uf),
                (pe.methodOf = Pf),
                (pe.mixin = Lf),
                (pe.negate = aa),
                (pe.nthArg = function (t) {
                  return (
                    (t = Fa(t)),
                      Ao(function (r) {
                        return go(r, t);
                      })
                  );
                }),
                (pe.omit = ff),
                (pe.omitBy = function (t, r) {
                  return sf(t, aa(Mi(r)));
                }),
                (pe.once = function (t) {
                  return ta(2, t);
                }),
                (pe.orderBy = function (t, r, n, o) {
                  return null == t ? [] : (da(r) || (r = null == r ? [] : [r]), da((n = o ? e : n)) || (n = null == n ? [] : [n]), _o(t, r, n));
                }),
                (pe.over = Mf),
                (pe.overArgs = fa),
                (pe.overEvery = Bf),
                (pe.overSome = Cf),
                (pe.partial = ca),
                (pe.partialRight = sa),
                (pe.partition = Hu),
                (pe.pick = cf),
                (pe.pickBy = sf),
                (pe.property = Df),
                (pe.propertyOf = function (t) {
                  return function (r) {
                    return null == t ? e : He(t, r);
                  };
                }),
                (pe.pull = xu),
                (pe.pullAll = Au),
                (pe.pullAllBy = function (t, r, n) {
                  return t && t.length && r && r.length ? wo(t, r, Mi(n, 2)) : t;
                }),
                (pe.pullAllWith = function (t, r, n) {
                  return t && t.length && r && r.length ? wo(t, r, e, n) : t;
                }),
                (pe.pullAt = ju),
                (pe.range = Ff),
                (pe.rangeRight = Yf),
                (pe.rearg = la),
                (pe.reject = function (t, r) {
                  return (da(t) ? Vr : $e)(t, aa(Mi(r, 3)));
                }),
                (pe.remove = function (t, r) {
                  var n = [];
                  if (!t || !t.length) return n;
                  var e = -1,
                    o = [],
                    i = t.length;
                  for (r = Mi(r, 3); ++e < i; ) {
                    var u = t[e];
                    r(u, e, t) && (n.push(u), o.push(e));
                  }
                  return mo(t, o), n;
                }),
                (pe.rest = function (t, r) {
                  if ("function" != typeof t) throw new or(u);
                  return Ao(t, (r = r === e ? r : Fa(r)));
                }),
                (pe.reverse = Ou),
              (pe.sampleSize = function (t, r, n) {
                return (r = (n ? Gi(t, r, n) : r === e) ? 1 : Fa(r)), (da(t) ? je : Oo)(t, r);
              }),
              (pe.set = function (t, r, n) {
                return null == t ? t : So(t, r, n);
              }),
              (pe.setWith = function (t, r, n, o) {
                return (o = "function" == typeof o ? o : e), null == t ? t : So(t, r, n, o);
              }),
              (pe.shuffle = function (t) {
                return (da(t) ? Oe : To)(t);
              }),
              (pe.slice = function (t, r, n) {
                var o = null == t ? 0 : t.length;
                return o ? (n && "number" != typeof n && Gi(t, r, n) ? ((r = 0), (n = o)) : ((r = null == r ? 0 : Fa(r)), (n = n === e ? o : Fa(n))), zo(t, r, n)) : [];
              }),
              (pe.sortBy = Ju),
              (pe.sortedUniq = function (t) {
                return t && t.length ? Io(t) : [];
              }),
              (pe.sortedUniqBy = function (t, r) {
                return t && t.length ? Io(t, Mi(r, 2)) : [];
              }),
              (pe.split = function (t, r, n) {
                return (
                  n && "number" != typeof n && Gi(t, r, n) && (r = n = e),
                    (n = n === e ? I : n >>> 0) ? ((t = Wa(t)) && ("string" == typeof r || (null != r && !za(r))) && !(r = Bo(r)) && xn(t) ? Zo(zn(t), 0, n) : t.split(r, n)) : []
                );
              }),
              (pe.spread = function (t, r) {
                if ("function" != typeof t) throw new or(u);
                return (
                  (r = null == r ? 0 : qn(Fa(r), 0)),
                    Ao(function (n) {
                      var e = n[r],
                        o = Zo(n, 0, r);
                      return e && Xr(o, e), $r(t, this, o);
                    })
                );
              }),
              (pe.tail = function (t) {
                var r = null == t ? 0 : t.length;
                return r ? zo(t, 1, r) : [];
              }),
              (pe.take = function (t, r, n) {
                return t && t.length ? zo(t, 0, 0 > (r = n || r === e ? 1 : Fa(r)) ? 0 : r) : [];
              }),
              (pe.takeRight = function (t, r, n) {
                var o = null == t ? 0 : t.length;
                return o ? zo(t, 0 > (r = o - (r = n || r === e ? 1 : Fa(r))) ? 0 : r, o) : [];
              }),
              (pe.takeRightWhile = function (t, r) {
                return t && t.length ? Yo(t, Mi(r, 3), !1, !0) : [];
              }),
              (pe.takeWhile = function (t, r) {
                return t && t.length ? Yo(t, Mi(r, 3)) : [];
              }),
              (pe.tap = function (t, r) {
                return r(t), t;
              }),
              (pe.throttle = function (t, r, n) {
                var e = !0,
                  o = !0;
                if ("function" != typeof t) throw new or(u);
                return Oa(n) && ((e = ("leading" in n) ? !!n.leading : e), (o = ("trailing" in n) ? !!n.trailing : o)), ea(t, r, { leading: e, maxWait: r, trailing: o });
              }),
              (pe.thru = Du),
              (pe.toArray = Ca),
              (pe.toPairs = lf),
              (pe.toPairsIn = hf),
              (pe.toPath = function (t) {
                return da(t) ? Jr(t, cu) : La(t) ? [t] : ei(fu(Wa(t)));
              }),
              (pe.toPlainObject = $a),
              (pe.transform = function (t, r, n) {
                var e = da(t),
                  o = e || wa(t) || Ia(t);
                if (((r = Mi(r, 4)), null == n)) {
                  var i = t && t.constructor;
                  n = o ? (e ? new i() : []) : Oa(t) && xa(i) ? ve(Tr(t)) : {};
                }
                return (
                  (o ? qr : Ge)(t, function (t, e, o) {
                    return r(n, t, e, o);
                  }),
                    n
                );
              }),
              (pe.unary = function (t) {
                return Qu(t, 1);
              }),
              (pe.union = Su),
              (pe.unionBy = Ru),
              (pe.unionWith = ku),
              (pe.uniq = function (t) {
                return t && t.length ? Co(t) : [];
              }),
              (pe.uniqBy = function (t, r) {
                return t && t.length ? Co(t, Mi(r, 2)) : [];
              }),
              (pe.uniqWith = function (t, r) {
                return (r = "function" == typeof r ? r : e), t && t.length ? Co(t, e, r) : [];
              }),
              (pe.unset = function (t, r) {
                return null == t || Do(t, r);
              }),
              (pe.unzip = Tu),
              (pe.unzipWith = zu),
              (pe.update = function (t, r, n) {
                return null == t ? t : Fo(t, r, Ko(n));
              }),
              (pe.updateWith = function (t, r, n, o) {
                return (o = "function" == typeof o ? o : e), null == t ? t : Fo(t, r, Ko(n), o);
              }),
              (pe.values = pf),
              (pe.valuesIn = function (t) {
                return null == t ? [] : dn(t, of(t));
              }),
              (pe.without = Uu),
              (pe.words = Af),
              (pe.wrap = function (t, r) {
                return ca(Ko(r), t);
              }),
              (pe.xor = Pu),
              (pe.xorBy = Lu),
              (pe.xorWith = Iu),
              (pe.zip = Mu),
              (pe.zipObject = function (t, r) {
                return Wo(t || [], r || [], Re);
              }),
              (pe.zipObjectDeep = function (t, r) {
                return Wo(t || [], r || [], So);
              }),
              (pe.zipWith = Bu),
              (pe.entries = lf),
              (pe.entriesIn = hf),
              (pe.extend = Ka),
              (pe.extendWith = Ga),
              Lf(pe, pe),
              (pe.add = Wf),
              (pe.attempt = jf),
              (pe.camelCase = vf),
              (pe.capitalize = yf),
              (pe.ceil = qf),
              (pe.clamp = function (t, r, n) {
                return n === e && ((n = r), (r = e)), n !== e && (n = (n = Na(n)) == n ? n : 0), r !== e && (r = (r = Na(r)) == r ? r : 0), Le(Na(t), r, n);
              }),
              (pe.clone = function (t) {
                return Ie(t, h);
              }),
              (pe.cloneDeep = function (t) {
                return Ie(t, s | h);
              }),
              (pe.cloneDeepWith = function (t, r) {
                return Ie(t, s | h, (r = "function" == typeof r ? r : e));
              }),
              (pe.cloneWith = function (t, r) {
                return Ie(t, h, (r = "function" == typeof r ? r : e));
              }),
              (pe.conformsTo = function (t, r) {
                return null == r || Me(t, r, ef(r));
              }),
              (pe.deburr = df),
              (pe.defaultTo = function (t, r) {
                return null == t || t != t ? r : t;
              }),
              (pe.divide = Kf),
              (pe.endsWith = function (t, r, n) {
                (t = Wa(t)), (r = Bo(r));
                var o = t.length,
                  i = (n = n === e ? o : Le(Fa(n), 0, o));
                return (n -= r.length) >= 0 && t.slice(n, i) == r;
              }),
              (pe.eq = ha),
              (pe.escape = function (t) {
                return (t = Wa(t)) && xt.test(t) ? t.replace(mt, mn) : t;
              }),
              (pe.escapeRegExp = function (t) {
                return (t = Wa(t)) && zt.test(t) ? t.replace(Tt, "\\$&") : t;
              }),
              (pe.every = function (t, r, n) {
                var o = da(t) ? Gr : Ye;
                return n && Gi(t, r, n) && (r = e), o(t, Mi(r, 3));
              }),
              (pe.find = Nu),
              (pe.findIndex = yu),
              (pe.findKey = function (t, r) {
                return en(t, Mi(r, 3), Ge);
              }),
              (pe.findLast = $u),
              (pe.findLastIndex = du),
              (pe.findLastKey = function (t, r) {
                return en(t, Mi(r, 3), Ve);
              }),
              (pe.floor = Gf),
              (pe.forEach = Wu),
              (pe.forEachRight = qu),
              (pe.forIn = function (t, r) {
                return null == t ? t : qe(t, Mi(r, 3), of);
              }),
              (pe.forInRight = function (t, r) {
                return null == t ? t : Ke(t, Mi(r, 3), of);
              }),
              (pe.forOwn = function (t, r) {
                return t && Ge(t, Mi(r, 3));
              }),
              (pe.forOwnRight = function (t, r) {
                return t && Ve(t, Mi(r, 3));
              }),
              (pe.get = Xa),
              (pe.gt = pa),
              (pe.gte = va),
              (pe.has = function (t, r) {
                return null != t && $i(t, r, to);
              }),
              (pe.hasIn = Qa),
              (pe.head = _u),
              (pe.identity = Tf),
              (pe.includes = function (t, r, n, e) {
                (t = _a(t) ? t : pf(t)), (n = n && !e ? Fa(n) : 0);
                var o = t.length;
                return 0 > n && (n = qn(o + n, 0)), Pa(t) ? o >= n && t.indexOf(r, n) > -1 : !!o && un(t, r, n) > -1;
              }),
              (pe.indexOf = function (t, r, n) {
                var e = null == t ? 0 : t.length;
                if (!e) return -1;
                var o = null == n ? 0 : Fa(n);
                return 0 > o && (o = qn(e + o, 0)), un(t, r, o);
              }),
              (pe.inRange = function (t, r, n) {
                return (
                  (r = Da(r)),
                    n === e ? ((n = r), (r = 0)) : (n = Da(n)),
                    (function (t, r, n) {
                      return t >= Kn(r, n) && t < qn(r, n);
                    })((t = Na(t)), r, n)
                );
              }),
              (pe.invoke = nf),
              (pe.isArguments = ya),
              (pe.isArray = da),
              (pe.isArrayBuffer = ga),
              (pe.isArrayLike = _a),
              (pe.isArrayLikeObject = ba),
              (pe.isBoolean = function (t) {
                return !0 === t || !1 === t || (Sa(t) && Xe(t) == N);
              }),
              (pe.isBuffer = wa),
              (pe.isDate = ma),
              (pe.isElement = function (t) {
                return Sa(t) && 1 === t.nodeType && !Ta(t);
              }),
              (pe.isEmpty = function (t) {
                if (null == t) return !0;
                if (_a(t) && (da(t) || "string" == typeof t || "function" == typeof t.splice || wa(t) || Ia(t) || ya(t))) return !t.length;
                var r = Ni(t);
                if (r == V || r == tt) return !t.size;
                if (Ji(t)) return !co(t).length;
                for (var n in t) if (cr.call(t, n)) return !1;
                return !0;
              }),
              (pe.isEqual = function (t, r) {
                return io(t, r);
              }),
              (pe.isEqualWith = function (t, r, n) {
                var o = (n = "function" == typeof n ? n : e) ? n(t, r) : e;
                return o === e ? io(t, r, e, n) : !!o;
              }),
              (pe.isError = Ea),
              (pe.isFinite = function (t) {
                return "number" == typeof t && Nn(t);
              }),
              (pe.isFunction = xa),
              (pe.isInteger = Aa),
              (pe.isLength = ja),
              (pe.isMap = Ra),
              (pe.isMatch = function (t, r) {
                return t === r || uo(t, r, Ci(r));
              }),
              (pe.isMatchWith = function (t, r, n) {
                return (n = "function" == typeof n ? n : e), uo(t, r, Ci(r), n);
              }),
              (pe.isNaN = function (t) {
                return ka(t) && t != +t;
              }),
              (pe.isNative = function (t) {
                if (Hi(t)) throw new Xt(i);
                return ao(t);
              }),
              (pe.isNil = function (t) {
                return null == t;
              }),
              (pe.isNull = function (t) {
                return null === t;
              }),
              (pe.isNumber = ka),
              (pe.isObject = Oa),
              (pe.isObjectLike = Sa),
              (pe.isPlainObject = Ta),
              (pe.isRegExp = za),
              (pe.isSafeInteger = function (t) {
                return Aa(t) && t >= -U && U >= t;
              }),
              (pe.isSet = Ua),
              (pe.isString = Pa),
              (pe.isSymbol = La),
              (pe.isTypedArray = Ia),
              (pe.isUndefined = function (t) {
                return t === e;
              }),
              (pe.isWeakMap = function (t) {
                return Sa(t) && Ni(t) == ot;
              }),
              (pe.isWeakSet = function (t) {
                return Sa(t) && Xe(t) == it;
              }),
              (pe.join = function (t, r) {
                return null == t ? "" : $n.call(t, r);
              }),
              (pe.kebabCase = gf),
              (pe.last = Eu),
              (pe.lastIndexOf = function (t, r, n) {
                var o = null == t ? 0 : t.length;
                if (!o) return -1;
                var i = o;
                return (
                  n !== e && (i = 0 > (i = Fa(n)) ? qn(o + i, 0) : Kn(i, o - 1)),
                    r == r
                      ? (function (t, r, n) {
                        for (var e = n + 1; e--; ) if (t[e] === r) return e;
                        return e;
                      })(t, r, i)
                      : on(t, fn, i, !0)
                );
              }),
              (pe.lowerCase = _f),
              (pe.lowerFirst = bf),
              (pe.lt = Ma),
              (pe.lte = Ba),
              (pe.max = function (t) {
                return t && t.length ? Ne(t, Tf, Qe) : e;
              }),
              (pe.maxBy = function (t, r) {
                return t && t.length ? Ne(t, Mi(r, 2), Qe) : e;
              }),
              (pe.mean = function (t) {
                return cn(t, Tf);
              }),
              (pe.meanBy = function (t, r) {
                return cn(t, Mi(r, 2));
              }),
              (pe.min = function (t) {
                return t && t.length ? Ne(t, Tf, lo) : e;
              }),
              (pe.minBy = function (t, r) {
                return t && t.length ? Ne(t, Mi(r, 2), lo) : e;
              }),
              (pe.stubArray = Nf),
              (pe.stubFalse = $f),
              (pe.stubObject = function () {
                return {};
              }),
              (pe.stubString = function () {
                return "";
              }),
              (pe.stubTrue = function () {
                return !0;
              }),
              (pe.multiply = Zf),
              (pe.nth = function (t, r) {
                return t && t.length ? go(t, Fa(r)) : e;
              }),
              (pe.noConflict = function () {
                return zr._ === this && (zr._ = vr), this;
              }),
              (pe.noop = If),
              (pe.now = Xu),
              (pe.pad = function (t, r, n) {
                t = Wa(t);
                var e = (r = Fa(r)) ? Tn(t) : 0;
                if (!r || e >= r) return t;
                var o = (r - e) / 2;
                return _i(Dn(o), n) + t + _i(Cn(o), n);
              }),
              (pe.padEnd = function (t, r, n) {
                t = Wa(t);
                var e = (r = Fa(r)) ? Tn(t) : 0;
                return r && r > e ? t + _i(r - e, n) : t;
              }),
              (pe.padStart = function (t, r, n) {
                t = Wa(t);
                var e = (r = Fa(r)) ? Tn(t) : 0;
                return r && r > e ? _i(r - e, n) + t : t;
              }),
              (pe.parseInt = function (t, r, n) {
                return n || null == r ? (r = 0) : r && (r = +r), Vn(Wa(t).replace(Pt, ""), r || 0);
              }),
              (pe.random = function (t, r, n) {
                if (
                  (n && "boolean" != typeof n && Gi(t, r, n) && (r = n = e),
                  n === e && ("boolean" == typeof r ? ((n = r), (r = e)) : "boolean" == typeof t && ((n = t), (t = e))),
                    t === e && r === e ? ((t = 0), (r = 1)) : ((t = Da(t)), r === e ? ((r = t), (t = 0)) : (r = Da(r))),
                  t > r)
                ) {
                  var o = t;
                  (t = r), (r = o);
                }
                if (n || t % 1 || r % 1) {
                  var i = Zn();
                  return Kn(t + i * (r - t + Sr("1e-" + ((i + "").length - 1))), r);
                }
                return Eo(t, r);
              }),
              (pe.reduce = function (t, r, n) {
                var e = da(t) ? Qr : hn,
                  o = 3 > arguments.length;
                return e(t, Mi(r, 4), n, o, De);
              }),
              (pe.reduceRight = function (t, r, n) {
                var e = da(t) ? tn : hn,
                  o = 3 > arguments.length;
                return e(t, Mi(r, 4), n, o, Fe);
              }),
              (pe.repeat = function (t, r, n) {
                return (r = (n ? Gi(t, r, n) : r === e) ? 1 : Fa(r)), xo(Wa(t), r);
              }),
              (pe.replace = function () {
                var t = arguments,
                  r = Wa(t[0]);
                return 3 > t.length ? r : r.replace(t[1], t[2]);
              }),
              (pe.result = function (t, r, n) {
                var o = -1,
                  i = (r = Go(r, t)).length;
                for (i || ((i = 1), (t = e)); ++o < i; ) {
                  var u = null == t ? e : t[cu(r[o])];
                  u === e && ((o = i), (u = n)), (t = xa(u) ? u.call(t) : u);
                }
                return t;
              }),
              (pe.round = Hf),
              (pe.runInContext = t),
              (pe.sample = function (t) {
                return (da(t) ? Ae : jo)(t);
              }),
              (pe.size = function (t) {
                if (null == t) return 0;
                if (_a(t)) return Pa(t) ? Tn(t) : t.length;
                var r = Ni(t);
                return r == V || r == tt ? t.size : co(t).length;
              }),
              (pe.snakeCase = wf),
              (pe.some = function (t, r, n) {
                var o = da(t) ? rn : Uo;
                return n && Gi(t, r, n) && (r = e), o(t, Mi(r, 3));
              }),
              (pe.sortedIndex = function (t, r) {
                return Po(t, r);
              }),
              (pe.sortedIndexBy = function (t, r, n) {
                return Lo(t, r, Mi(n, 2));
              }),
              (pe.sortedIndexOf = function (t, r) {
                var n = null == t ? 0 : t.length;
                if (n) {
                  var e = Po(t, r);
                  if (n > e && ha(t[e], r)) return e;
                }
                return -1;
              }),
              (pe.sortedLastIndex = function (t, r) {
                return Po(t, r, !0);
              }),
              (pe.sortedLastIndexBy = function (t, r, n) {
                return Lo(t, r, Mi(n, 2), !0);
              }),
              (pe.sortedLastIndexOf = function (t, r) {
                if (null != t && t.length) {
                  var n = Po(t, r, !0) - 1;
                  if (ha(t[n], r)) return n;
                }
                return -1;
              }),
              (pe.startCase = mf),
              (pe.startsWith = function (t, r, n) {
                return (t = Wa(t)), (n = null == n ? 0 : Le(Fa(n), 0, t.length)), (r = Bo(r)), t.slice(n, n + r.length) == r;
              }),
              (pe.subtract = Jf),
              (pe.sum = function (t) {
                return t && t.length ? pn(t, Tf) : 0;
              }),
              (pe.sumBy = function (t, r) {
                return t && t.length ? pn(t, Mi(r, 2)) : 0;
              }),
              (pe.template = function (t, r, n) {
                var o = pe.templateSettings;
                n && Gi(t, r, n) && (r = e), (t = Wa(t)), (r = Ga({}, r, o, Oi));
                var i,
                  u,
                  a = Ga({}, r.imports, o.imports, Oi),
                  f = ef(a),
                  c = dn(a, f),
                  s = 0,
                  l = r.interpolate || Vt,
                  h = "__p += '",
                  p = nr((r.escape || Vt).source + "|" + l.source + "|" + (l === Ot ? Ft : Vt).source + "|" + (r.evaluate || Vt).source + "|$", "g"),
                  v = "//# sourceURL=" + (("sourceURL" in r) ? r.sourceURL : "lodash.templateSources[" + ++xr + "]") + "\n";
                t.replace(p, function (r, n, e, o, a, f) {
                  return (
                    e || (e = o),
                      (h += t.slice(s, f).replace(Zt, En)),
                    n && ((i = !0), (h += "' +\n__e(" + n + ") +\n'")),
                    a && ((u = !0), (h += "';\n" + a + ";\n__p += '")),
                    e && (h += "' +\n((__t = (" + e + ")) == null ? '' : __t) +\n'"),
                      (s = f + r.length),
                      r
                  );
                }),
                  (h += "';\n");
                var y = r.variable;
                y || (h = "with (obj) {\n" + h + "\n}\n"),
                  (h = (u ? h.replace(gt, "") : h).replace(_t, "$1").replace(bt, "$1;")),
                  (h =
                    "function(" +
                    (y || "obj") +
                    ") {\n" +
                    (y ? "" : "obj || (obj = {});\n") +
                    "var __t, __p = ''" +
                    (i ? ", __e = _.escape" : "") +
                    (u ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") +
                    h +
                    "return __p\n}");
                var d = jf(function () {
                  return Qt(f, v + "return " + h).apply(e, c);
                });
                if (((d.source = h), Ea(d))) throw d;
                return d;
              }),
              (pe.times = function (t, r) {
                if (1 > (t = Fa(t)) || t > U) return [];
                var n = I,
                  e = Kn(t, I);
                (r = Mi(r)), (t -= I);
                for (var o = vn(e, r); ++n < t; ) r(n);
                return o;
              }),
              (pe.toFinite = Da),
              (pe.toInteger = Fa),
              (pe.toLength = Ya),
              (pe.toLower = function (t) {
                return Wa(t).toLowerCase();
              }),
              (pe.toNumber = Na),
              (pe.toSafeInteger = function (t) {
                return t ? Le(Fa(t), -U, U) : 0 === t ? t : 0;
              }),
              (pe.toString = Wa),
              (pe.toUpper = function (t) {
                return Wa(t).toUpperCase();
              }),
              (pe.trim = function (t, r, n) {
                if ((t = Wa(t)) && (n || r === e)) return t.replace(Ut, "");
                if (!t || !(r = Bo(r))) return t;
                var o = zn(t),
                  i = zn(r);
                return Zo(o, _n(o, i), bn(o, i) + 1).join("");
              }),
              (pe.trimEnd = function (t, r, n) {
                if ((t = Wa(t)) && (n || r === e)) return t.replace(Lt, "");
                if (!t || !(r = Bo(r))) return t;
                var o = zn(t);
                return Zo(o, 0, bn(o, zn(r)) + 1).join("");
              }),
              (pe.trimStart = function (t, r, n) {
                if ((t = Wa(t)) && (n || r === e)) return t.replace(Pt, "");
                if (!t || !(r = Bo(r))) return t;
                var o = zn(t);
                return Zo(o, _n(o, zn(r))).join("");
              }),
              (pe.truncate = function (t, r) {
                var n = j,
                  o = O;
                if (Oa(r)) {
                  var i = ("separator" in r) ? r.separator : i;
                  (n = ("length" in r) ? Fa(r.length) : n), (o = ("omission" in r) ? Bo(r.omission) : o);
                }
                var u = (t = Wa(t)).length;
                if (xn(t)) {
                  var a = zn(t);
                  u = a.length;
                }
                if (n >= u) return t;
                var f = n - Tn(o);
                if (1 > f) return o;
                var c = a ? Zo(a, 0, f).join("") : t.slice(0, f);
                if (i === e) return c + o;
                if ((a && (f += c.length - f), za(i))) {
                  if (t.slice(f).search(i)) {
                    var s,
                      l = c;
                    for (i.global || (i = nr(i.source, Wa(Yt.exec(i)) + "g")), i.lastIndex = 0; (s = i.exec(l)); ) var h = s.index;
                    c = c.slice(0, h === e ? f : h);
                  }
                } else if (t.indexOf(Bo(i), f) != f) {
                  var p = c.lastIndexOf(i);
                  p > -1 && (c = c.slice(0, p));
                }
                return c + o;
              }),
              (pe.unescape = function (t) {
                return (t = Wa(t)) && Et.test(t) ? t.replace(wt, Un) : t;
              }),
              (pe.uniqueId = function (t) {
                var r = ++sr;
                return Wa(t) + r;
              }),
              (pe.upperCase = Ef),
              (pe.upperFirst = xf),
              (pe.each = Wu),
              (pe.eachRight = qu),
              (pe.first = _u),
              Lf(
                pe,
                ((Vf = {}),
                  Ge(pe, function (t, r) {
                    cr.call(pe.prototype, r) || (Vf[r] = t);
                  }),
                  Vf),
                { chain: !1 }
              ),
              (pe.VERSION = "4.17.5"),
              qr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
                pe[t].placeholder = pe;
              }),
              qr(["drop", "take"], function (t, r) {
                (ge.prototype[t] = function (n) {
                  n = n === e ? 1 : qn(Fa(n), 0);
                  var o = this.__filtered__ && !r ? new ge(this) : this.clone();
                  return o.__filtered__ ? (o.__takeCount__ = Kn(n, o.__takeCount__)) : o.__views__.push({ size: Kn(n, I), type: t + (0 > o.__dir__ ? "Right" : "") }), o;
                }),
                  (ge.prototype[t + "Right"] = function (r) {
                    return this.reverse()[t](r).reverse();
                  });
              }),
              qr(["filter", "map", "takeWhile"], function (t, r) {
                var n = r + 1,
                  e = n == k || 3 == n;
                ge.prototype[t] = function (t) {
                  var r = this.clone();
                  return r.__iteratees__.push({ iteratee: Mi(t, 3), type: n }), (r.__filtered__ = r.__filtered__ || e), r;
                };
              }),
              qr(["head", "last"], function (t, r) {
                var n = "take" + (r ? "Right" : "");
                ge.prototype[t] = function () {
                  return this[n](1).value()[0];
                };
              }),
              qr(["initial", "tail"], function (t, r) {
                var n = "drop" + (r ? "" : "Right");
                ge.prototype[t] = function () {
                  return this.__filtered__ ? new ge(this) : this[n](1);
                };
              }),
              (ge.prototype.compact = function () {
                return this.filter(Tf);
              }),
              (ge.prototype.find = function (t) {
                return this.filter(t).head();
              }),
              (ge.prototype.findLast = function (t) {
                return this.reverse().find(t);
              }),
              (ge.prototype.invokeMap = Ao(function (t, r) {
                return "function" == typeof t
                  ? new ge(this)
                  : this.map(function (n) {
                    return eo(n, t, r);
                  });
              })),
              (ge.prototype.reject = function (t) {
                return this.filter(aa(Mi(t)));
              }),
              (ge.prototype.slice = function (t, r) {
                t = Fa(t);
                var n = this;
                return n.__filtered__ && (t > 0 || 0 > r) ? new ge(n) : (0 > t ? (n = n.takeRight(-t)) : t && (n = n.drop(t)), r !== e && (n = 0 > (r = Fa(r)) ? n.dropRight(-r) : n.take(r - t)), n);
              }),
              (ge.prototype.takeRightWhile = function (t) {
                return this.reverse().takeWhile(t).reverse();
              }),
              (ge.prototype.toArray = function () {
                return this.take(I);
              }),
              Ge(ge.prototype, function (t, r) {
                var n = /^(?:filter|find|map|reject)|While$/.test(r),
                  o = /^(?:head|last)$/.test(r),
                  i = pe[o ? "take" + ("last" == r ? "Right" : "") : r],
                  u = o || /^find/.test(r);
                i &&
                (pe.prototype[r] = function () {
                  var r = this.__wrapped__,
                    a = o ? [1] : arguments,
                    f = r instanceof ge,
                    c = a[0],
                    s = f || da(r),
                    l = function (t) {
                      var r = i.apply(pe, Xr([t], a));
                      return o && h ? r[0] : r;
                    };
                  s && n && "function" == typeof c && 1 != c.length && (f = s = !1);
                  var h = this.__chain__,
                    p = u && !h,
                    v = f && !this.__actions__.length;
                  if (!u && s) {
                    r = v ? r : new ge(this);
                    var y = t.apply(r, a);
                    return y.__actions__.push({ func: Du, args: [l], thisArg: e }), new de(y, h);
                  }
                  return p && v ? t.apply(this, a) : ((y = this.thru(l)), p ? (o ? y.value()[0] : y.value()) : y);
                });
              }),
              qr(["pop", "push", "shift", "sort", "splice", "unshift"], function (t) {
                var r = ir[t],
                  n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                  e = /^(?:pop|shift)$/.test(t);
                pe.prototype[t] = function () {
                  var t = arguments;
                  if (e && !this.__chain__) {
                    var o = this.value();
                    return r.apply(da(o) ? o : [], t);
                  }
                  return this[n](function (n) {
                    return r.apply(da(n) ? n : [], t);
                  });
                };
              }),
              Ge(ge.prototype, function (t, r) {
                var n = pe[r];
                if (n) {
                  var e = n.name + "";
                  (oe[e] || (oe[e] = [])).push({ name: r, func: n });
                }
              }),
              (oe[vi(e, d).name] = [{ name: "wrapper", func: e }]),
              (ge.prototype.clone = function () {
                var t = new ge(this.__wrapped__);
                return (
                  (t.__actions__ = ei(this.__actions__)),
                    (t.__dir__ = this.__dir__),
                    (t.__filtered__ = this.__filtered__),
                    (t.__iteratees__ = ei(this.__iteratees__)),
                    (t.__takeCount__ = this.__takeCount__),
                    (t.__views__ = ei(this.__views__)),
                    t
                );
              }),
              (ge.prototype.reverse = function () {
                if (this.__filtered__) {
                  var t = new ge(this);
                  (t.__dir__ = -1), (t.__filtered__ = !0);
                } else (t = this.clone()).__dir__ *= -1;
                return t;
              }),
              (ge.prototype.value = function () {
                var t = this.__wrapped__.value(),
                  r = this.__dir__,
                  n = da(t),
                  e = 0 > r,
                  o = n ? t.length : 0,
                  i = (function (t, r, n) {
                    for (var e = -1, o = n.length; ++e < o; ) {
                      var i = n[e],
                        u = i.size;
                      switch (i.type) {
                        case "drop":
                          t += u;
                          break;
                        case "dropRight":
                          r -= u;
                          break;
                        case "take":
                          r = Kn(r, t + u);
                          break;
                        case "takeRight":
                          t = qn(t, r - u);
                      }
                    }
                    return { start: t, end: r };
                  })(0, o, this.__views__),
                  u = i.start,
                  a = i.end,
                  f = a - u,
                  c = e ? a : u - 1,
                  s = this.__iteratees__,
                  l = s.length,
                  h = 0,
                  p = Kn(f, this.__takeCount__);
                if (!n || (!e && o == f && p == f)) return No(t, this.__actions__);
                var v = [];
                t: for (; f-- && p > h; ) {
                  for (var y = -1, d = t[(c += r)]; ++y < l; ) {
                    var g = s[y],
                      _ = g.type,
                      b = (0, g.iteratee)(d);
                    if (_ == T) d = b;
                    else if (!b) {
                      if (_ == k) continue t;
                      break t;
                    }
                  }
                  v[h++] = d;
                }
                return v;
              }),
              (pe.prototype.at = Fu),
              (pe.prototype.chain = function () {
                return Cu(this);
              }),
              (pe.prototype.commit = function () {
                return new de(this.value(), this.__chain__);
              }),
              (pe.prototype.next = function () {
                this.__values__ === e && (this.__values__ = Ca(this.value()));
                var t = this.__index__ >= this.__values__.length;
                return { done: t, value: t ? e : this.__values__[this.__index__++] };
              }),
              (pe.prototype.plant = function (t) {
                for (var r, n = this; n instanceof ye; ) {
                  var o = lu(n);
                  (o.__index__ = 0), (o.__values__ = e), r ? (i.__wrapped__ = o) : (r = o);
                  var i = o;
                  n = n.__wrapped__;
                }
                return (i.__wrapped__ = t), r;
              }),
              (pe.prototype.reverse = function () {
                var t = this.__wrapped__;
                if (t instanceof ge) {
                  var r = t;
                  return this.__actions__.length && (r = new ge(this)), (r = r.reverse()).__actions__.push({ func: Du, args: [Ou], thisArg: e }), new de(r, this.__chain__);
                }
                return this.thru(Ou);
              }),
              (pe.prototype.toJSON = pe.prototype.valueOf = pe.prototype.value = function () {
                return No(this.__wrapped__, this.__actions__);
              }),
              (pe.prototype.first = pe.prototype.head),
              nn &&
              (pe.prototype[nn] = function () {
                return this;
              }),
              pe
            );
          })();
          "function" == typeof e && "object" == typeof e.amd && e.amd
            ? ((zr._ = Pn),
              e(function () {
                return Pn;
              }))
            : Pr
            ? (((Pr.exports = Pn)._ = Pn), (Ur._ = Pn))
            : (zr._ = Pn);
        })();
      }),
      Iu = Object.freeze({ default: Lu, __moduleExports: Lu }),
      Mu = [],
      Bu = 0;
    256 > Bu;
    ++Bu
  )
    Mu[Bu] = (Bu + 256).toString(16).substr(1);
  var Cu = function (t, r) {
      var n = r || 0;
      return (
        Mu[t[n++]] +
        Mu[t[n++]] +
        Mu[t[n++]] +
        Mu[t[n++]] +
        "-" +
        Mu[t[n++]] +
        Mu[t[n++]] +
        "-" +
        Mu[t[n++]] +
        Mu[t[n++]] +
        "-" +
        Mu[t[n++]] +
        Mu[t[n++]] +
        "-" +
        Mu[t[n++]] +
        Mu[t[n++]] +
        Mu[t[n++]] +
        Mu[t[n++]] +
        Mu[t[n++]] +
        Mu[t[n++]]
      );
    },
    Du = Object.freeze({ default: Cu, __moduleExports: Cu }),
    Fu = e(function (t) {
      var r = ("undefined" != typeof crypto && crypto.getRandomValues.bind(crypto)) || ("undefined" != typeof msCrypto && msCrypto.getRandomValues.bind(msCrypto));
      if (r) {
        var n = new Uint8Array(16);
        t.exports = function () {
          return r(n), n;
        };
      } else {
        var e = Array(16);
        t.exports = function () {
          for (var t, r = 0; 16 > r; r++) 0 == (3 & r) && (t = 4294967296 * Math.random()), (e[r] = (t >>> ((3 & r) << 3)) & 255);
          return e;
        };
      }
    }),
    Yu = Object.freeze({ default: Fu, __moduleExports: Fu }),
    Nu = (Yu && Fu) || Yu,
    $u = (Du && Cu) || Du;
  var Wu = function (t, r, n) {
      var e = (r && n) || 0;
      "string" == typeof t && ((r = "binary" === t ? Array(16) : null), (t = null));
      var o = (t = t || {}).random || (t.rng || Nu)();
      if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), r)) for (var i = 0; 16 > i; ++i) r[e + i] = o[i];
      return r || $u(o);
    },
    qu = Object.freeze({ default: Wu, __moduleExports: Wu }),
    Ku = (Iu && Lu) || Iu,
    Gu = (qu && Wu) || qu,
    Vu = function (t, r, n, e) {
      if (!Ku.isString(t)) throw new TypeError(t + " must be a string");
      var o = { method: t };
      if (((Ku.isUndefined((e = e || {}).version) || 1 !== e.version) && (o.jsonrpc = "2.0"), r)) {
        if (!Ku.isObject(r) && !Ku.isArray(r)) throw new TypeError(r + " must be an object, array or omitted");
        o.params = r;
      }
      if (void 0 === n) {
        var i = Ku.isFunction(e.generator)
          ? e.generator
          : function () {
            return Gu();
          };
        o.id = i(o, e);
      } else o.id = n;
      return o;
    },
    Zu = Object.freeze({ default: Vu, __moduleExports: Vu }),
    Hu = (Zu && Vu) || Zu,
    Ju = function (t, r) {
      if (!(this instanceof Ju)) return new Ju(t, r);
      (this.options = Ku.extend(
        {
          reviver: null,
          replacer: null,
          generator: function () {
            return Gu();
          },
          version: 2,
        },
        r || {}
      )),
        (this.callServer = t);
    },
    Xu = Ju;
  (Ju.prototype.request = function (t, r, n, e) {
    var o = this,
      i = null,
      u = Ku.isArray(t) && Ku.isFunction(r);
    if (1 === this.options.version && u) throw new TypeError("JSON-RPC 1.0 does not support batching");
    var a,
      f = !u && t && Ku.isObject(t) && Ku.isFunction(r);
    if (u || f) (e = r), (i = t);
    else {
      Ku.isFunction(n) && ((e = n), (n = void 0));
      var c = Ku.isFunction(e);
      try {
        i = Hu(t, r, n, { generator: this.options.generator, version: this.options.version });
      } catch (t) {
        if (c) return e(t);
        throw t;
      }
      if (!c) return i;
    }
    try {
      a = JSON.stringify(i, this.options.replacer);
    } catch (t) {
      return e(t);
    }
    return (
      this.callServer(a, function (t, r) {
        o._parseResponse(t, r, e);
      }),
        i
    );
  }),
    (Ju.prototype._parseResponse = function (t, r, n) {
      if (t) return n(t);
      if (!r) return n();
      var e;
      try {
        e = JSON.parse(r, this.options.reviver);
      } catch (t) {
        return n(t);
      }
      if (3 === n.length) {
        if (Ku.isArray(e)) {
          var o = function (t) {
            Ku.isUndefined(t.error);
          };
          return n(null, e.filter(o), e.filter(Ku.negate(o)));
        }
        return n(null, e.error, e.result);
      }
      return n(null, e);
    });
  class Qu extends TypeError {
    static format(t) {
      const { type: r, path: n, value: e } = t;
      return `Expected a value of type \`${r}\`${n.length ? ` for \`${n.join(".")}\`` : ""} but received \`${JSON.stringify(e)}\`.`;
    }
    constructor(t) {
      super(Qu.format(t));
      const { data: r, path: n, value: e, reason: o, type: i, errors: u = [] } = t;
      (this.data = r),
        (this.path = n),
        (this.value = e),
        (this.reason = o),
        (this.type = i),
        (this.errors = u),
      u.length || u.push(this),
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = Error().stack);
    }
  }
  var ta = Object.prototype.toString,
    ra = function (t) {
      if (void 0 === t) return "undefined";
      if (null === t) return "null";
      var r = typeof t;
      if ("boolean" === r) return "boolean";
      if ("string" === r) return "string";
      if ("number" === r) return "number";
      if ("symbol" === r) return "symbol";
      if ("function" === r) return "GeneratorFunction" === na(t) ? "generatorfunction" : "function";
      if (
        (function (t) {
          return Array.isArray ? Array.isArray(t) : t instanceof Array;
        })(t)
      )
        return "array";
      if (
        (function (t) {
          if (t.constructor && "function" == typeof t.constructor.isBuffer) return t.constructor.isBuffer(t);
          return !1;
        })(t)
      )
        return "buffer";
      if (
        (function (t) {
          try {
            if ("number" == typeof t.length && "function" == typeof t.callee) return !0;
          } catch (t) {
            if (-1 !== t.message.indexOf("callee")) return !0;
          }
          return !1;
        })(t)
      )
        return "arguments";
      if (
        (function (t) {
          return t instanceof Date || ("function" == typeof t.toDateString && "function" == typeof t.getDate && "function" == typeof t.setDate);
        })(t)
      )
        return "date";
      if (
        (function (t) {
          return t instanceof Error || ("string" == typeof t.message && t.constructor && "number" == typeof t.constructor.stackTraceLimit);
        })(t)
      )
        return "error";
      if (
        (function (t) {
          return t instanceof RegExp || ("string" == typeof t.flags && "boolean" == typeof t.ignoreCase && "boolean" == typeof t.multiline && "boolean" == typeof t.global);
        })(t)
      )
        return "regexp";
      switch (na(t)) {
        case "Symbol":
          return "symbol";
        case "Promise":
          return "promise";
        case "WeakMap":
          return "weakmap";
        case "WeakSet":
          return "weakset";
        case "Map":
          return "map";
        case "Set":
          return "set";
        case "Int8Array":
          return "int8array";
        case "Uint8Array":
          return "uint8array";
        case "Uint8ClampedArray":
          return "uint8clampedarray";
        case "Int16Array":
          return "int16array";
        case "Uint16Array":
          return "uint16array";
        case "Int32Array":
          return "int32array";
        case "Uint32Array":
          return "uint32array";
        case "Float32Array":
          return "float32array";
        case "Float64Array":
          return "float64array";
      }
      if (
        (function (t) {
          return "function" == typeof t.throw && "function" == typeof t.return && "function" == typeof t.next;
        })(t)
      )
        return "generator";
      switch ((r = ta.call(t))) {
        case "[object Object]":
          return "object";
        case "[object Map Iterator]":
          return "mapiterator";
        case "[object Set Iterator]":
          return "setiterator";
        case "[object String Iterator]":
          return "stringiterator";
        case "[object Array Iterator]":
          return "arrayiterator";
      }
      return r.slice(8, -1).toLowerCase().replace(/\s/g, "");
    };
  function na(t) {
    return t.constructor ? t.constructor.name : null;
  }
  const ea = "@@__STRUCT__@@",
    oa = "@@__KIND__@@";
  function ia(t) {
    return !(!t || !t[ea]);
  }
  function ua(t, r) {
    return "function" == typeof t ? t(r) : t;
  }
  var aa =
    Object.assign ||
    function (t) {
      for (var r = 1; arguments.length > r; r++) {
        var n = arguments[r];
        for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
      }
      return t;
    };
  class fa {
    constructor(t, r, n) {
      (this.name = t), (this.type = r), (this.validate = n);
    }
  }
  function ca(t, r, n) {
    if (ia(t)) return t[oa];
    if (t instanceof fa) return t;
    switch (ra(t)) {
      case "array":
        return t.length > 1 ? da(t, r, n) : ha(t, r, n);
      case "function":
        return la(t, r, n);
      case "object":
        return pa(t, r, n);
      case "string": {
        let e,
          o = !0;
        if ((t.endsWith("?") && ((o = !1), (t = t.slice(0, -1))), t.includes("|"))) {
          e = ga(t.split(/\s*\|\s*/g), r, n);
        } else if (t.includes("&")) {
          e = _a(t.split(/\s*&\s*/g), r, n);
        } else e = ya(t, r, n);
        return o || (e = va(e, void 0, n)), e;
      }
    }
    throw Error(`Invalid schema: ${t}`);
  }
  function sa(t, r, n) {
    if ("array" !== ra(t)) throw Error(`Invalid schema: ${t}`);
    const e = t
      .map((t) => {
        try {
          return JSON.stringify(t);
        } catch (r) {
          return t + "";
        }
      })
      .join(" | ");
    return new fa("enum", e, (n = ua(r)) => (t.includes(n) ? [void 0, n] : [{ data: n, path: [], value: n, type: e }]));
  }
  function la(t, r, n) {
    if ("function" !== ra(t)) throw Error(`Invalid schema: ${t}`);
    return new fa("function", "<function>", (n = ua(r), e) => {
      const o = t(n, e);
      let i,
        u = { path: [], reason: null };
      switch (ra(o)) {
        case "boolean":
          i = o;
          break;
        case "string":
          (i = !1), (u.reason = o);
          break;
        case "object":
          (i = !1), (u = aa({}, u, o));
          break;
        default:
          throw Error(`Invalid result: ${o}`);
      }
      return i ? [void 0, n] : [aa({ type: "<function>", value: n, data: n }, u)];
    });
  }
  function ha(t, r, n) {
    if ("array" !== ra(t) || 1 !== t.length) throw Error(`Invalid schema: ${t}`);
    const e = ya("array", void 0, n),
      o = ca(t[0], void 0, n),
      i = `[${o.type}]`;
    return new fa("list", i, (t = ua(r)) => {
      const [n, u] = e.validate(t);
      if (n) return (n.type = i), [n];
      t = u;
      const a = [],
        f = [];
      for (let r = 0; t.length > r; r++) {
        const n = t[r],
          [e, i] = o.validate(n);
        e ? ((e.path = [r].concat(e.path)), (e.data = t), a.push(e)) : (f[r] = i);
      }
      if (a.length) {
        const t = a[0];
        return (t.errors = a), [t];
      }
      return [void 0, f];
    });
  }
  function pa(t, r, n) {
    if ("object" !== ra(t)) throw Error(`Invalid schema: ${t}`);
    const e = ya("object", void 0, n),
      o = [],
      i = {};
    for (const r in t) {
      o.push(r);
      const e = ca(t[r], void 0, n);
      i[r] = e;
    }
    const u = `{${o.join()}}`;
    return new fa("object", u, (t = ua(r)) => {
      const [n] = e.validate(t);
      if (n) return (n.type = u), [n];
      const o = [],
        a = {};
      if (
        (new Set(Object.keys(t).concat(Object.keys(i))).forEach((n) => {
          let e = t[n];
          const u = i[n];
          if ((void 0 === e && (e = ua(r && r[n], t)), !u)) return void o.push({ data: t, path: [n], value: e });
          const [f, c] = u.validate(e, t);
          if (f) return (f.path = [n].concat(f.path)), (f.data = t), void o.push(f);
          (n in t || void 0 !== c) && (a[n] = c);
        }),
          o.length)
      ) {
        const t = o[0];
        return (t.errors = o), [t];
      }
      return [void 0, a];
    });
  }
  function va(t, r, n) {
    return ga([t, "undefined"], r, n);
  }
  function ya(t, r, n) {
    if ("string" !== ra(t)) throw Error(`Invalid schema: ${t}`);
    const { types: e } = n,
      o = e[t];
    if ("function" !== ra(o)) throw Error(`Invalid type: ${t}`);
    const i = la(o, r),
      u = t;
    return new fa("scalar", u, (t) => {
      const [r, n] = i.validate(t);
      return r ? ((r.type = u), [r]) : [void 0, n];
    });
  }
  function da(t, r, n) {
    if ("array" !== ra(t)) throw Error(`Invalid schema: ${t}`);
    const e = t.map((t) => ca(t, void 0, n)),
      o = ya("array", void 0, n),
      i = `[${e.map((t) => t.type).join()}]`;
    return new fa("tuple", i, (t = ua(r)) => {
      const [n] = o.validate(t);
      if (n) return (n.type = i), [n];
      const u = [],
        a = [],
        f = Math.max(t.length, e.length);
      for (let r = 0; f > r; r++) {
        const n = e[r],
          o = t[r];
        if (!n) {
          a.push({ data: t, path: [r], value: o });
          continue;
        }
        const [i, f] = n.validate(o);
        i ? ((i.path = [r].concat(i.path)), (i.data = t), a.push(i)) : (u[r] = f);
      }
      if (a.length) {
        const t = a[0];
        return (t.errors = a), [t];
      }
      return [void 0, u];
    });
  }
  function ga(t, r, n) {
    if ("array" !== ra(t)) throw Error(`Invalid schema: ${t}`);
    const e = t.map((t) => ca(t, void 0, n)),
      o = e.map((t) => t.type).join(" | ");
    return new fa("union", o, (t = ua(r)) => {
      const n = [];
      for (const r of e) {
        const [e, o] = r.validate(t);
        if (!e) return [void 0, o];
        n.push(e);
      }
      return (n[0].type = o), n;
    });
  }
  function _a(t, r, n) {
    if ("array" !== ra(t)) throw Error(`Invalid schema: ${t}`);
    const e = t.map((t) => ca(t, void 0, n)),
      o = e.map((t) => t.type).join(" & ");
    return new fa("intersection", o, (t = ua(r)) => {
      let n = t;
      for (const t of e) {
        const [r, e] = t.validate(n);
        if (r) return (r.type = o), [r];
        n = e;
      }
      return [void 0, n];
    });
  }
  const ba = {
      any: ca,
      dict: function (t, r, n) {
        if ("array" !== ra(t) || 2 !== t.length) throw Error(`Invalid schema: ${t}`);
        const e = ya("object", void 0, n),
          o = ca(t[0], void 0, n),
          i = ca(t[1], void 0, n),
          u = `dict<${o.type},${i.type}>`;
        return new fa("dict", u, (t) => {
          const n = ua(r);
          t = n ? aa({}, n, t) : t;
          const [a] = e.validate(t);
          if (a) return (a.type = u), [a];
          const f = {},
            c = [];
          for (let r in t) {
            const n = t[r],
              [e, u] = o.validate(r);
            if (e) {
              (e.path = [r].concat(e.path)), (e.data = t), c.push(e);
              continue;
            }
            r = u;
            const [a, s] = i.validate(n);
            a ? ((a.path = [r].concat(a.path)), (a.data = t), c.push(a)) : (f[r] = s);
          }
          if (c.length) {
            const t = c[0];
            return (t.errors = c), [t];
          }
          return [void 0, f];
        });
      },
      enum: sa,
      enums: function (t, r, n) {
        return ha([sa(t, void 0)], r, n);
      },
      function: la,
      instance: function (t, r, n) {
        const e = `instance<${t.name}>`;
        return new fa("instance", e, (n = ua(r)) => (n instanceof t ? [void 0, n] : [{ data: n, path: [], value: n, type: e }]));
      },
      interface: function (t, r, n) {
        if ("object" !== ra(t)) throw Error(`Invalid schema: ${t}`);
        const e = [],
          o = {};
        for (const r in t) {
          e.push(r);
          const i = ca(t[r], void 0, n);
          o[r] = i;
        }
        const i = `{${e.join()}}`;
        return new fa("interface", i, (t) => {
          const n = ua(r),
            e = [],
            i = (t = n ? aa({}, n, t) : t);
          for (const n in o) {
            let u = t[n];
            const a = o[n];
            void 0 === u && (u = ua(r && r[n], t));
            const [f, c] = a.validate(u, t);
            f ? ((f.path = [n].concat(f.path)), (f.data = t), e.push(f)) : (n in t || void 0 !== c) && (i[n] = c);
          }
          if (e.length) {
            const t = e[0];
            return (t.errors = e), [t];
          }
          return [void 0, i];
        });
      },
      lazy: function (t, r, n) {
        if ("function" !== ra(t)) throw Error(`Invalid schema: ${t}`);
        let e, o;
        return (e = new fa("lazy", "lazy...", (r) => ((o = t()), (e.name = o.kind), (e.type = o.type), (e.validate = o.validate), e.validate(r))));
      },
      list: ha,
      literal: function (t, r, n) {
        const e = `literal: ${JSON.stringify(t)}`;
        return new fa("literal", e, (n = ua(r)) => (n === t ? [void 0, n] : [{ data: n, path: [], value: n, type: e }]));
      },
      object: pa,
      optional: va,
      partial: function (t, r, n) {
        if ("object" !== ra(t)) throw Error(`Invalid schema: ${t}`);
        const e = ya("object", void 0, n),
          o = [],
          i = {};
        for (const r in t) {
          o.push(r);
          const e = ca(t[r], void 0, n);
          i[r] = e;
        }
        const u = `{${o.join()},...}`;
        return new fa("partial", u, (t = ua(r)) => {
          const [n] = e.validate(t);
          if (n) return (n.type = u), [n];
          const o = [],
            a = {};
          for (const n in i) {
            let e = t[n];
            const u = i[n];
            void 0 === e && (e = ua(r && r[n], t));
            const [f, c] = u.validate(e, t);
            f ? ((f.path = [n].concat(f.path)), (f.data = t), o.push(f)) : (n in t || void 0 !== c) && (a[n] = c);
          }
          if (o.length) {
            const t = o[0];
            return (t.errors = o), [t];
          }
          return [void 0, a];
        });
      },
      scalar: ya,
      tuple: da,
      union: ga,
      intersection: _a,
    },
    wa = { any: (t) => void 0 !== t };
  [
    "arguments",
    "array",
    "boolean",
    "buffer",
    "date",
    "error",
    "float32array",
    "float64array",
    "function",
    "generatorfunction",
    "int16array",
    "int32array",
    "int8array",
    "map",
    "null",
    "number",
    "object",
    "promise",
    "regexp",
    "set",
    "string",
    "symbol",
    "uint16array",
    "uint32array",
    "uint8array",
    "uint8clampedarray",
    "undefined",
    "weakmap",
    "weakset",
  ].forEach((t) => {
    wa[t] = (r) => ra(r) === t;
  });
  const ma = (function (t = {}) {
    const r = aa({}, wa, t.types || {});
    function n(t, n, e = {}) {
      ia(t) && (t = t.schema);
      const o = ba.any(t, n, aa({}, e, { types: r }));
      function i(t) {
        if (this instanceof i) throw Error("Invalid `new` keyword!");
        return i.assert(t);
      }
      return (
        Object.defineProperty(i, ea, { value: !0 }),
          Object.defineProperty(i, oa, { value: o }),
          (i.kind = o.name),
          (i.type = o.type),
          (i.schema = t),
          (i.defaults = n),
          (i.options = e),
          (i.assert = (t) => {
            const [r, n] = o.validate(t);
            if (r) throw new Qu(r);
            return n;
          }),
          (i.test = (t) => {
            const [r] = o.validate(t);
            return !r;
          }),
          (i.validate = (t) => {
            const [r, n] = o.validate(t);
            return r ? [new Qu(r)] : [void 0, n];
          }),
          i
      );
    }
    return (
      Object.keys(ba).forEach((t) => {
        const e = ba[t];
        n[t] = (t, o, i) => n(e(t, o, aa({}, i, { types: r })), o, i);
      }),
        n
    );
  })();
  var Ea = (J.getIterator = function (t) {
      var r = We(t);
      if ("function" != typeof r) throw TypeError(t + " is not iterable!");
      return I(r.call(t));
    }),
    xa = Object.freeze({ default: Ea, __moduleExports: Ea }),
    Aa = (xa && Ea) || xa,
    ja = Object.freeze({ default: Aa, __moduleExports: Aa }),
    Oa = (ja && Aa) || ja,
    Sa = n(
      e(function (t) {
        t.exports = { default: Oa, __esModule: !0 };
      })
    );
  function Ra(t) {
    var r = Pt.from(xr.decode(t));
    return mu(32 === r.length), r;
  }
  var ka = (function () {
    function t() {
      o(this, t), (this.keys = []), (this.fee = 0), (this.userdata = Pt.alloc(0));
    }
    return (
      pt(t, [
        {
          key: "_getSignData",
          value: function () {
            var t = this.lastId;
            if (!t) throw Error("Transaction lastId required");
            var r = Pt.alloc(2048),
              n = 0;
            r.writeUInt32LE(this.keys.length, n), (n += 8);
            var e = !0,
              o = !1,
              i = void 0;
            try {
              for (var u, a = Sa(this.keys); !(e = (u = a.next()).done); e = !0) {
                Ra(u.value).copy(r, n), (n += 32);
              }
            } catch (t) {
              (o = !0), (i = t);
            } finally {
              try {
                !e && a.return && a.return();
              } finally {
                if (o) throw i;
              }
            }
            var f = Pt.from(xr.decode(t));
            return mu(32 === f.length), f.copy(r, n), r.writeUInt32LE(this.fee, (n += 32)), (n += 8), this.userdata.length > 0 && (this.userdata.copy(r, n), (n += this.userdata.length)), r.slice(0, n);
          },
        },
        {
          key: "sign",
          value: function (t) {
            var r = this._getSignData();
            (this.signature = gt.sign.detached(r, t.secretKey)), mu(64 === this.signature.length);
          },
        },
        {
          key: "serialize",
          value: function () {
            var t = this.signature;
            if (!t) throw Error("Transaction has not been signed");
            var r = this._getSignData(),
              n = Pt.alloc(t.length + r.length);
            return Pt.from(t).copy(n, 0), r.copy(n, t.length), n;
          },
        },
      ]),
        t
    );
  })();
  var Ta = ma({ jsonrpc: ma.literal("2.0"), id: "string", error: "any?", result: "number?" }),
    za = ma({ jsonrpc: ma.literal("2.0"), id: "string", error: "any?", result: "boolean?" }),
    Ua = ma({ jsonrpc: ma.literal("2.0"), id: "string", error: "any?", result: "number?" }),
    Pa = ma({ jsonrpc: ma.literal("2.0"), id: "string", error: "any?", result: "string?" }),
    La = ma({ jsonrpc: ma.literal("2.0"), id: "string", error: "any?", result: "number?" }),
    Ia = ma({ jsonrpc: ma.literal("2.0"), id: "string", error: "any?", result: "string?" }),
    Ma = ma({ jsonrpc: ma.literal("2.0"), id: "string", error: "any?", result: "string?" }),
    Ba = (function () {
      function t(r) {
        if ((o(this, t), "string" != typeof r)) throw Error("Connection endpoint not specified");
        this._rpcRequest = (function (t) {
          var r,
            n = this,
            e = Xu(
              ((r = Gi(
                qi.mark(function r(e, o) {
                  var i, u;
                  return qi.wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (i = { method: "POST", body: e, headers: { "Content-Type": "application/json" } }), (r.prev = 1), (r.next = 4), Pu(t, i);
                          case 4:
                            return (u = r.sent), (r.next = 7), u.text();
                          case 7:
                            o(null, r.sent), (r.next = 14);
                            break;
                          case 11:
                            (r.prev = 11), (r.t0 = r.catch(1)), o(r.t0);
                          case 14:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    n,
                    [[1, 11]]
                  );
                })
              )),
                function (t, n) {
                  return r.apply(this, arguments);
                })
            );
          return function (t, r) {
            return new Ii(function (n, o) {
              e.request(t, r, function (t, r) {
                t ? o(t) : n(r);
              });
            });
          };
        })(r);
      }
      return (
        pt(t, [
          {
            key: "getBalance",
            value: (function () {
              var t = Gi(
                qi.mark(function t(r) {
                  var n;
                  return qi.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), this._rpcRequest("getBalance", [r]);
                          case 2:
                            if (!(n = Ta(t.sent)).error) {
                              t.next = 6;
                              break;
                            }
                            throw Error(n.error.message);
                          case 6:
                            return mu(void 0 !== n.result), t.abrupt("return", n.result);
                          case 8:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (r) {
                return t.apply(this, arguments);
              };
            })(),
          },
          {
            key: "confirmTransaction",
            value: (function () {
              var t = Gi(
                qi.mark(function t(r) {
                  var n;
                  return qi.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), this._rpcRequest("confirmTransaction", [r]);
                          case 2:
                            if (!(n = za(t.sent)).error) {
                              t.next = 6;
                              break;
                            }
                            throw Error(n.error.message);
                          case 6:
                            return mu(void 0 !== n.result), t.abrupt("return", n.result);
                          case 8:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (r) {
                return t.apply(this, arguments);
              };
            })(),
          },
          {
            key: "getTransactionCount",
            value: (function () {
              var t = Gi(
                qi.mark(function t() {
                  var r;
                  return qi.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), this._rpcRequest("getTransactionCount", []);
                          case 2:
                            if (!(r = Ua(t.sent)).error) {
                              t.next = 6;
                              break;
                            }
                            throw Error(r.error.message);
                          case 6:
                            return mu(void 0 !== r.result), t.abrupt("return", +r.result);
                          case 8:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
          },
          {
            key: "getLastId",
            value: (function () {
              var t = Gi(
                qi.mark(function t() {
                  var r;
                  return qi.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), this._rpcRequest("getLastId", []);
                          case 2:
                            if (!(r = Pa(t.sent)).error) {
                              t.next = 6;
                              break;
                            }
                            throw Error(r.error.message);
                          case 6:
                            return mu(void 0 !== r.result), t.abrupt("return", r.result);
                          case 8:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
          },
          {
            key: "getFinality",
            value: (function () {
              var t = Gi(
                qi.mark(function t() {
                  var r;
                  return qi.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), this._rpcRequest("getFinality", []);
                          case 2:
                            if (!(r = La(t.sent)).error) {
                              t.next = 6;
                              break;
                            }
                            throw Error(r.error.message);
                          case 6:
                            return mu(void 0 !== r.result), t.abrupt("return", +r.result);
                          case 8:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
          },
          {
            key: "requestAirdrop",
            value: (function () {
              var t = Gi(
                qi.mark(function t(r, n) {
                  var e;
                  return qi.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), this._rpcRequest("requestAirdrop", [r, n]);
                          case 2:
                            if (!(e = Ia(t.sent)).error) {
                              t.next = 6;
                              break;
                            }
                            throw Error(e.error.message);
                          case 6:
                            return mu(void 0 !== e.result), t.abrupt("return", e.result);
                          case 8:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (r, n) {
                return t.apply(this, arguments);
              };
            })(),
          },
          {
            key: "sendTokens",
            value: (function () {
              var t = Gi(
                qi.mark(function t(r, n, e) {
                  var o, i, u, a;
                  return qi.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return ((o = new ka()).fee = 0), (t.next = 4), this.getLastId();
                          case 4:
                            return (
                              (o.lastId = t.sent),
                                (o.keys[0] = r.publicKey),
                                (o.keys[1] = n),
                                (i = Pt.alloc(68)).writeUInt32LE(60, 0),
                                i.writeUInt32LE(e, 12),
                                i.writeUInt32LE(e, 28),
                                Ra(n).copy(i, 36),
                                (o.userdata = i),
                                o.sign(r),
                                (u = o.serialize()),
                                (t.next = 18),
                                this._rpcRequest("sendTransaction", [[].concat(Qe(u))])
                            );
                          case 18:
                            if (!(a = Ma(t.sent)).error) {
                              t.next = 22;
                              break;
                            }
                            throw Error(a.error.message);
                          case 22:
                            return mu(void 0 !== a.result), mu(a.result), t.abrupt("return", a.result);
                          case 25:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              return function (r, n, e) {
                return t.apply(this, arguments);
              };
            })(),
          },
        ]),
          t
      );
    })();
  return (t.Account = Ar), (t.Connection = Ba), (t.Transaction = ka), t;
})({});

const App: () => React$Node = () => {
  
  console.log("<<tt:", solanaWeb3);
  
  const account = new solanaWeb3.Account();
  console.log("<<tt account :", account.publicKey.toString());
  const connection1 = new solanaWeb3.Connection('https://devnet.solana.com');
  console.log("<<tt connection1 :", connection1);
  
  connection1.getVersion().then((version) => {
    console.log("<<tt version :", version);
  });
  
  
  let url;
  url = 'http://devnet.solana.com';
//url = 'http://localhost:8899';
  const connection = new solanaWeb3.Connection(url);
  
  connection.getBalance(account.publicKey).then(balance => {
    console.log(`<<tt ${account.publicKey} has a balance of ${balance}`);
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
