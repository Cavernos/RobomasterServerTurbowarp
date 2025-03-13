class f {
  constructor(e, r, n = "", o = "POST", s = null) {
    this.opcode = e, this.blockType = r, this.text = c.getMessage(this.opcode) === "NoTranslation" ? n : c.getMessage(this.opcode), this.serve_method = o, this.arguments = s;
  }
  async requestHandler(e, r = "POST", n = null) {
    try {
      const s = await (await fetch(
        `http://${y.robomaster_api.host}:${y.robomaster_api.port}/${e}`,
        {
          method: r,
          headers: { "Content-Type": "application/json" },
          body: n ? JSON.stringify(n) : {}
        }
      )).json();
      return console.log(s), s;
    } catch (o) {
      console.error(`Erreur lors de la requête ${e}:`, o);
    }
  }
  async run() {
    return await this.requestHandler(this.opcode, this.serve_method, this.arguments);
  }
}
const D = "robomaster_turbowarp_extension", F = "0.0.1", L = { message: "RobomasterBasics", description: "name of tab" }, U = { message: "Start", description: "text on block" }, H = { message: "Stop", description: "text on block" }, G = { message: "Armor", description: "name of tab" }, V = { message: "Chassis", description: "name of tab" }, K = { message: "Move x: [x]m y: [y]m z: [z]m speed: [speed]m/s", description: "text on block" }, J = { message: "Rotate angle: [angle]°", description: "text on block" }, q = { message: "ExtensionModule", description: "name of tab" }, X = { message: "Move arm to [position]", description: "text on block" }, Z = { message: "Grabber [action]", description: "text on block" }, Q = { message: ["open", "close"], description: "text in menu" }, W = { message: ["up", "down"], description: "text in menu" }, Y = { message: "LedEffects", description: "name of tab" }, tt = { message: "Media", description: "name of tab" }, et = { message: "Sensor", description: "name of tab" }, rt = { message: "SensorAdapter", description: "name of tab" }, nt = { message: "Smart", description: "name of tab" }, ot = {
  RobomasterBasics: L,
  start: U,
  stop: H,
  Armor: G,
  Chassis: V,
  move: K,
  rotate: J,
  ExtensionModule: q,
  arm: X,
  grabber: Z,
  grabberActions: Q,
  armPositions: W,
  LedEffects: Y,
  Media: tt,
  Sensor: et,
  SensorAdapter: rt,
  Smart: nt
}, st = { message: "RobomasterBases", description: "name of tab" }, at = { message: "Commencer", description: "text on block" }, it = { message: "Arrêter", description: "text on block" }, ct = { message: "Armure", description: "name of tab" }, lt = { message: "Chassis", description: "name of tab" }, pt = { message: "Bouger x: [x]m y: [y]m z: [z]m Vitesse: [speed]m/s", description: "text on block" }, ut = { message: "Rotation d'un angle: [angle]°", description: "text on block" }, ft = { message: "ModuleExtension", description: "name of tab" }, ht = { message: "Bouger le bras vers [position]", description: "text on block" }, dt = { message: "Pince [action]", description: "text on block" }, mt = { message: ["ouvrir", "fermer"], description: "text in menu" }, gt = { message: ["monter", "descendre"], description: "text in menu" }, bt = { message: "EffetsDeLeds", description: "name of tab" }, yt = { message: "Media", description: "name of tab" }, _t = { message: "Capteurs", description: "name of tab" }, St = { message: "AdapteurCapteurs", description: "name of tab" }, vt = { message: "Intelligence", description: "name of tab" }, Ot = {
  RobomasterBasics: st,
  start: at,
  stop: it,
  Armor: ct,
  Chassis: lt,
  move: pt,
  rotate: ut,
  ExtensionModule: ft,
  arm: ht,
  grabber: dt,
  grabberActions: mt,
  armPositions: gt,
  LedEffects: bt,
  Media: yt,
  Sensor: _t,
  SensorAdapter: St,
  Smart: vt
};
class Tt {
  constructor(e = "en") {
    this.lang = e, this.available_language = {
      en: ot,
      fr: Ot
    }, this.translations = this.available_language[this.lang];
  }
  getMessage(e) {
    return this.translations.hasOwnProperty(e) ? this.translations[e].message : "NoTranslation";
  }
  generate_template() {
    const e = {};
    for (const [n, o] of Object.entries(y.tabs)) {
      if (e[n] = { message: this.getMessage(n), description: "name of tab" }, o.blocks.length !== 0)
        for (const s of o.blocks)
          e[s.opcode] = { message: s.text, description: "text on block" };
      if (o.hasOwnProperty("menus"))
        for (const [s, a] of Object.entries(o.menus))
          e[s] = { message: a, description: "text in menu" };
    }
    return ((n, o) => {
      const s = new Blob([JSON.stringify(n, null, 2)], {
        type: "application/json"
      }), a = URL.createObjectURL(s), i = document.createElement("a");
      i.href = a, i.download = `${o}.json`, i.click(), URL.revokeObjectURL(a);
    })(e, "messages.template");
  }
}
const c = new Tt(), y = {
  name: D,
  version: F,
  robomaster_api: {
    host: "localhost",
    port: 8e3
  },
  tabs: {
    RobomasterBasics: {
      color: "#202530",
      blocks: [
        new f("start", Scratch.BlockType.COMMAND),
        new f("stop", Scratch.BlockType.COMMAND)
      ]
    },
    Armor: {
      color: "#F5C343",
      blocks: []
    },
    Chassis: {
      color: "#651FFF",
      blocks: [
        new f(
          "move",
          Scratch.BlockType.COMMAND,
          "",
          "POST",
          {
            x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
          }
        ),
        new f(
          "rotate",
          Scratch.BlockType.COMMAND,
          "",
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
        new f(
          "arm",
          Scratch.BlockType.COMMAND,
          "",
          "POST",
          {
            position: { type: Scratch.ArgumentType.STRING, menu: "armPositions", defaultValue: c.getMessage("armPositions")[0] }
          }
        ),
        new f(
          "grabber",
          Scratch.BlockType.COMMAND,
          "",
          "POST",
          {
            action: { type: Scratch.ArgumentType.STRING, menu: "grabberActions", defaultValue: c.getMessage("grabberActions")[0] }
          }
        )
      ],
      menus: {
        grabberActions: c.getMessage("grabberActions"),
        armPositions: c.getMessage("armPositions")
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
var xt = typeof global == "object" && global && global.Object === Object && global, At = typeof self == "object" && self && self.Object === Object && self, T = xt || At || Function("return this")(), h = T.Symbol, R = Object.prototype, Mt = R.hasOwnProperty, $t = R.toString, m = h ? h.toStringTag : void 0;
function Pt(t) {
  var e = Mt.call(t, m), r = t[m];
  try {
    t[m] = void 0;
    var n = !0;
  } catch {
  }
  var o = $t.call(t);
  return n && (e ? t[m] = r : delete t[m]), o;
}
var Ct = Object.prototype, wt = Ct.toString;
function Et(t) {
  return wt.call(t);
}
var jt = "[object Null]", Nt = "[object Undefined]", C = h ? h.toStringTag : void 0;
function k(t) {
  return t == null ? t === void 0 ? Nt : jt : C && C in Object(t) ? Pt(t) : Et(t);
}
function Rt(t) {
  return t != null && typeof t == "object";
}
var kt = "[object Symbol]";
function x(t) {
  return typeof t == "symbol" || Rt(t) && k(t) == kt;
}
function zt(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, o = Array(n); ++r < n; )
    o[r] = e(t[r], r, t);
  return o;
}
var A = Array.isArray, w = h ? h.prototype : void 0, E = w ? w.toString : void 0;
function z(t) {
  if (typeof t == "string")
    return t;
  if (A(t))
    return zt(t, z) + "";
  if (x(t))
    return E ? E.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function _(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Bt = "[object AsyncFunction]", It = "[object Function]", Dt = "[object GeneratorFunction]", Ft = "[object Proxy]";
function Lt(t) {
  if (!_(t))
    return !1;
  var e = k(t);
  return e == It || e == Dt || e == Bt || e == Ft;
}
var O = T["__core-js_shared__"], j = function() {
  var t = /[^.]+$/.exec(O && O.keys && O.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Ut(t) {
  return !!j && j in t;
}
var Ht = Function.prototype, Gt = Ht.toString;
function Vt(t) {
  if (t != null) {
    try {
      return Gt.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Kt = /[\\^$.*+?()[\]{}|]/g, Jt = /^\[object .+?Constructor\]$/, qt = Function.prototype, Xt = Object.prototype, Zt = qt.toString, Qt = Xt.hasOwnProperty, Wt = RegExp(
  "^" + Zt.call(Qt).replace(Kt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yt(t) {
  if (!_(t) || Ut(t))
    return !1;
  var e = Lt(t) ? Wt : Jt;
  return e.test(Vt(t));
}
function te(t, e) {
  return t == null ? void 0 : t[e];
}
function M(t, e) {
  var r = te(t, e);
  return Yt(r) ? r : void 0;
}
var N = function() {
  try {
    var t = M(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), ee = 9007199254740991, re = /^(?:0|[1-9]\d*)$/;
function ne(t, e) {
  var r = typeof t;
  return e = e ?? ee, !!e && (r == "number" || r != "symbol" && re.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function oe(t, e, r) {
  e == "__proto__" && N ? N(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
function B(t, e) {
  return t === e || t !== t && e !== e;
}
var se = Object.prototype, ae = se.hasOwnProperty;
function ie(t, e, r) {
  var n = t[e];
  (!(ae.call(t, e) && B(n, r)) || r === void 0 && !(e in t)) && oe(t, e, r);
}
var ce = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, le = /^\w*$/;
function pe(t, e) {
  if (A(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || x(t) ? !0 : le.test(t) || !ce.test(t) || e != null && t in Object(e);
}
var g = M(Object, "create");
function ue() {
  this.__data__ = g ? g(null) : {}, this.size = 0;
}
function fe(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var he = "__lodash_hash_undefined__", de = Object.prototype, me = de.hasOwnProperty;
function ge(t) {
  var e = this.__data__;
  if (g) {
    var r = e[t];
    return r === he ? void 0 : r;
  }
  return me.call(e, t) ? e[t] : void 0;
}
var be = Object.prototype, ye = be.hasOwnProperty;
function _e(t) {
  var e = this.__data__;
  return g ? e[t] !== void 0 : ye.call(e, t);
}
var Se = "__lodash_hash_undefined__";
function ve(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = g && e === void 0 ? Se : e, this;
}
function l(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
l.prototype.clear = ue;
l.prototype.delete = fe;
l.prototype.get = ge;
l.prototype.has = _e;
l.prototype.set = ve;
function Oe() {
  this.__data__ = [], this.size = 0;
}
function S(t, e) {
  for (var r = t.length; r--; )
    if (B(t[r][0], e))
      return r;
  return -1;
}
var Te = Array.prototype, xe = Te.splice;
function Ae(t) {
  var e = this.__data__, r = S(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : xe.call(e, r, 1), --this.size, !0;
}
function Me(t) {
  var e = this.__data__, r = S(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function $e(t) {
  return S(this.__data__, t) > -1;
}
function Pe(t, e) {
  var r = this.__data__, n = S(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function d(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
d.prototype.clear = Oe;
d.prototype.delete = Ae;
d.prototype.get = Me;
d.prototype.has = $e;
d.prototype.set = Pe;
var Ce = M(T, "Map");
function we() {
  this.size = 0, this.__data__ = {
    hash: new l(),
    map: new (Ce || d)(),
    string: new l()
  };
}
function Ee(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function v(t, e) {
  var r = t.__data__;
  return Ee(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function je(t) {
  var e = v(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Ne(t) {
  return v(this, t).get(t);
}
function Re(t) {
  return v(this, t).has(t);
}
function ke(t, e) {
  var r = v(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function p(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
p.prototype.clear = we;
p.prototype.delete = je;
p.prototype.get = Ne;
p.prototype.has = Re;
p.prototype.set = ke;
var ze = "Expected a function";
function $(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(ze);
  var r = function() {
    var n = arguments, o = e ? e.apply(this, n) : n[0], s = r.cache;
    if (s.has(o))
      return s.get(o);
    var a = t.apply(this, n);
    return r.cache = s.set(o, a) || s, a;
  };
  return r.cache = new ($.Cache || p)(), r;
}
$.Cache = p;
var Be = 500;
function Ie(t) {
  var e = $(t, function(n) {
    return r.size === Be && r.clear(), n;
  }), r = e.cache;
  return e;
}
var De = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Fe = /\\(\\)?/g, Le = Ie(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(De, function(r, n, o, s) {
    e.push(o ? s.replace(Fe, "$1") : n || r);
  }), e;
});
function Ue(t) {
  return t == null ? "" : z(t);
}
function He(t, e) {
  return A(t) ? t : pe(t, e) ? [t] : Le(Ue(t));
}
function Ge(t) {
  if (typeof t == "string" || x(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Ve(t, e, r, n) {
  if (!_(t))
    return t;
  e = He(e, t);
  for (var o = -1, s = e.length, a = s - 1, i = t; i != null && ++o < s; ) {
    var u = Ge(e[o]), b = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (o != a) {
      var P = i[u];
      b = void 0, b === void 0 && (b = _(P) ? P : ne(e[o + 1]) ? [] : {});
    }
    ie(i, u, b), i = i[u];
  }
  return t;
}
function Ke(t, e, r) {
  return t == null ? t : Ve(t, e, r);
}
class Je {
  constructor(e = "NoName", r = "#000000", n = [], o = {}, s) {
    this.runtime = s, this.id = `${e.substring(0, 1).toLowerCase()}${e.substring(1)}`, this.name = e.match(/[A-Z][a-z]+/g).join(" "), this.color = r, this.blocks = n, this.menus = o;
    for (const a of this.blocks)
      Ke(this, a.opcode.toString(), async () => await a.run());
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
const I = [];
for (const [t, e] of Object.entries(y.tabs))
  I.push(new Je(c.getMessage(t), e.color, e.blocks, e.menus));
I.forEach((t) => Scratch.extensions.register(t));
