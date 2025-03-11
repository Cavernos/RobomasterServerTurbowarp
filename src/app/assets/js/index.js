class l {
  constructor(e, r, n, o = "POST", a = null) {
    this.opcode = e, this.blockType = r, this.text = n, this.serve_method = o, this.arguments = a;
  }
  async requestHandler(e, r = "POST", n = null) {
    try {
      const a = await (await fetch(`http://localhost:8000/${e}`, {
        method: r,
        headers: { "Content-Type": "application/json" },
        body: n ? JSON.stringify(n) : {}
      })).json();
      return console.log(a), a;
    } catch (o) {
      console.error(`Erreur lors de la requête ${e}:`, o);
    }
  }
  async run() {
    return await this.requestHandler(this.opcode, this.serve_method, this.arguments);
  }
}
const F = {
  tabs: {
    RobomasterBasics: {
      color: "#202530",
      blocks: [
        new l("start", Scratch.BlockType.COMMAND, "Start"),
        new l("stop", Scratch.BlockType.COMMAND, "Stop")
      ]
    },
    Armor: {
      color: "#F5C343",
      blocks: []
    },
    Chassis: {
      color: "#651FFF",
      blocks: [
        new l(
          "move",
          Scratch.BlockType.COMMAND,
          "Move x: [x]m y: [y]m z: [z]m speed: [speed]m/s",
          "POST",
          {
            x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
          }
        ),
        new l(
          "rotate",
          Scratch.BlockType.COMMAND,
          "Rotate angle: [angle]°",
          "POST",
          {
            angle: { type: Scratch.ArgumentType.NUMBER, defaultValue: 90 }
          }
        )
      ]
    },
    ExtensionModule: {
      color: "#F24A88",
      blocks: [
        new l(
          "arm",
          Scratch.BlockType.COMMAND,
          "Move arm to [position]",
          "POST",
          {
            position: { type: Scratch.ArgumentType.STRING, menu: "armPositions", defaultValue: "up" }
          }
        ),
        new l(
          "grabber",
          Scratch.BlockType.COMMAND,
          "Grabber [action]",
          "POST",
          {
            action: { type: Scratch.ArgumentType.STRING, menu: "grabberActions", defaultValue: "open" }
          }
        )
      ],
      menus: {
        grabberActions: ["open", "close"],
        armPositions: ["up", "down"]
      }
    },
    LedEffects: {
      color: "#58C0A6",
      blocks: []
    },
    Media: {
      color: "#67AD5B",
      blocks: []
    },
    Sensor: {
      color: "#6DD700",
      blocks: []
    },
    SensorAdapter: {
      color: "#00c87e",
      blocks: []
    },
    Smart: {
      color: "#F19D38",
      blocks: []
    }
  }
};
var R = typeof global == "object" && global && global.Object === Object && global, B = typeof self == "object" && self && self.Object === Object && self, T = R || B || Function("return this")(), h = T.Symbol, N = Object.prototype, H = N.hasOwnProperty, G = N.toString, d = h ? h.toStringTag : void 0;
function U(t) {
  var e = H.call(t, d), r = t[d];
  try {
    t[d] = void 0;
    var n = !0;
  } catch {
  }
  var o = G.call(t);
  return n && (e ? t[d] = r : delete t[d]), o;
}
var k = Object.prototype, V = k.toString;
function K(t) {
  return V.call(t);
}
var L = "[object Null]", q = "[object Undefined]", A = h ? h.toStringTag : void 0;
function x(t) {
  return t == null ? t === void 0 ? q : L : A && A in Object(t) ? U(t) : K(t);
}
function X(t) {
  return t != null && typeof t == "object";
}
var Z = "[object Symbol]";
function v(t) {
  return typeof t == "symbol" || X(t) && x(t) == Z;
}
function J(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, o = Array(n); ++r < n; )
    o[r] = e(t[r], r, t);
  return o;
}
var O = Array.isArray, M = h ? h.prototype : void 0, j = M ? M.toString : void 0;
function z(t) {
  if (typeof t == "string")
    return t;
  if (O(t))
    return J(t, z) + "";
  if (v(t))
    return j ? j.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function b(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Q = "[object AsyncFunction]", W = "[object Function]", Y = "[object GeneratorFunction]", tt = "[object Proxy]";
function et(t) {
  if (!b(t))
    return !1;
  var e = x(t);
  return e == W || e == Y || e == Q || e == tt;
}
var S = T["__core-js_shared__"], $ = function() {
  var t = /[^.]+$/.exec(S && S.keys && S.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function rt(t) {
  return !!$ && $ in t;
}
var nt = Function.prototype, ot = nt.toString;
function at(t) {
  if (t != null) {
    try {
      return ot.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var it = /[\\^$.*+?()[\]{}|]/g, st = /^\[object .+?Constructor\]$/, ct = Function.prototype, ut = Object.prototype, lt = ct.toString, ht = ut.hasOwnProperty, pt = RegExp(
  "^" + lt.call(ht).replace(it, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ft(t) {
  if (!b(t) || rt(t))
    return !1;
  var e = et(t) ? pt : st;
  return e.test(at(t));
}
function dt(t, e) {
  return t == null ? void 0 : t[e];
}
function P(t, e) {
  var r = dt(t, e);
  return ft(r) ? r : void 0;
}
var E = function() {
  try {
    var t = P(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), yt = 9007199254740991, gt = /^(?:0|[1-9]\d*)$/;
function bt(t, e) {
  var r = typeof t;
  return e = e ?? yt, !!e && (r == "number" || r != "symbol" && gt.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function _t(t, e, r) {
  e == "__proto__" && E ? E(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
function I(t, e) {
  return t === e || t !== t && e !== e;
}
var mt = Object.prototype, St = mt.hasOwnProperty;
function Tt(t, e, r) {
  var n = t[e];
  (!(St.call(t, e) && I(n, r)) || r === void 0 && !(e in t)) && _t(t, e, r);
}
var vt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ot = /^\w*$/;
function Pt(t, e) {
  if (O(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || v(t) ? !0 : Ot.test(t) || !vt.test(t) || e != null && t in Object(e);
}
var y = P(Object, "create");
function wt() {
  this.__data__ = y ? y(null) : {}, this.size = 0;
}
function Ct(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var At = "__lodash_hash_undefined__", Mt = Object.prototype, jt = Mt.hasOwnProperty;
function $t(t) {
  var e = this.__data__;
  if (y) {
    var r = e[t];
    return r === At ? void 0 : r;
  }
  return jt.call(e, t) ? e[t] : void 0;
}
var Et = Object.prototype, Nt = Et.hasOwnProperty;
function xt(t) {
  var e = this.__data__;
  return y ? e[t] !== void 0 : Nt.call(e, t);
}
var zt = "__lodash_hash_undefined__";
function It(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = y && e === void 0 ? zt : e, this;
}
function s(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
s.prototype.clear = wt;
s.prototype.delete = Ct;
s.prototype.get = $t;
s.prototype.has = xt;
s.prototype.set = It;
function Dt() {
  this.__data__ = [], this.size = 0;
}
function _(t, e) {
  for (var r = t.length; r--; )
    if (I(t[r][0], e))
      return r;
  return -1;
}
var Ft = Array.prototype, Rt = Ft.splice;
function Bt(t) {
  var e = this.__data__, r = _(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : Rt.call(e, r, 1), --this.size, !0;
}
function Ht(t) {
  var e = this.__data__, r = _(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function Gt(t) {
  return _(this.__data__, t) > -1;
}
function Ut(t, e) {
  var r = this.__data__, n = _(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function p(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
p.prototype.clear = Dt;
p.prototype.delete = Bt;
p.prototype.get = Ht;
p.prototype.has = Gt;
p.prototype.set = Ut;
var kt = P(T, "Map");
function Vt() {
  this.size = 0, this.__data__ = {
    hash: new s(),
    map: new (kt || p)(),
    string: new s()
  };
}
function Kt(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function m(t, e) {
  var r = t.__data__;
  return Kt(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Lt(t) {
  var e = m(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function qt(t) {
  return m(this, t).get(t);
}
function Xt(t) {
  return m(this, t).has(t);
}
function Zt(t, e) {
  var r = m(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function c(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
c.prototype.clear = Vt;
c.prototype.delete = Lt;
c.prototype.get = qt;
c.prototype.has = Xt;
c.prototype.set = Zt;
var Jt = "Expected a function";
function w(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Jt);
  var r = function() {
    var n = arguments, o = e ? e.apply(this, n) : n[0], a = r.cache;
    if (a.has(o))
      return a.get(o);
    var i = t.apply(this, n);
    return r.cache = a.set(o, i) || a, i;
  };
  return r.cache = new (w.Cache || c)(), r;
}
w.Cache = c;
var Qt = 500;
function Wt(t) {
  var e = w(t, function(n) {
    return r.size === Qt && r.clear(), n;
  }), r = e.cache;
  return e;
}
var Yt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, te = /\\(\\)?/g, ee = Wt(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Yt, function(r, n, o, a) {
    e.push(o ? a.replace(te, "$1") : n || r);
  }), e;
});
function re(t) {
  return t == null ? "" : z(t);
}
function ne(t, e) {
  return O(t) ? t : Pt(t, e) ? [t] : ee(re(t));
}
function oe(t) {
  if (typeof t == "string" || v(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function ae(t, e, r, n) {
  if (!b(t))
    return t;
  e = ne(e, t);
  for (var o = -1, a = e.length, i = a - 1, f = t; f != null && ++o < a; ) {
    var u = oe(e[o]), g = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (o != i) {
      var C = f[u];
      g = void 0, g === void 0 && (g = b(C) ? C : bt(e[o + 1]) ? [] : {});
    }
    Tt(f, u, g), f = f[u];
  }
  return t;
}
function ie(t, e, r) {
  return t == null ? t : ae(t, e, r);
}
class se {
  constructor(e = "NoName", r = "#000000", n = [], o = {}, a) {
    this.runtime = a, this.id = `${e.substring(0, 1).toLowerCase()}${e.substring(1)}`, this.name = e.match(/[A-Z][a-z]+/g).join(" "), this.color = r, this.blocks = n, this.menus = o;
    for (const i of this.blocks)
      ie(this, i.opcode.toString(), async () => await i.run());
  }
  getInfo() {
    return {
      id: this.id,
      name: this.name,
      color1: this.color,
      color2: this.color,
      blocks: this.blocks,
      menus: this.menus
    };
  }
}
const D = [];
for (const [t, e] of Object.entries(F.tabs))
  D.push(new se(t, e.color, e.blocks, e.menus));
D.forEach((t) => Scratch.extensions.register(t));
