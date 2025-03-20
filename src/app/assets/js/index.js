class o {
  constructor(t, r, a, n = "POST", c = null) {
    this.opcode = t, this.blockType = r, this.text = a, this.serve_method = n, this.arguments = c;
  }
  async requestHandler(t, r = "POST", a = null) {
    try {
      const c = await (await fetch(
        `http://${O.robomaster_api.host}:${O.robomaster_api.port}/${t}`,
        {
          method: r,
          headers: { "Content-Type": "application/json" },
          body: a ? JSON.stringify(a) : {}
        }
      )).json();
      return console.log(c), c;
    } catch (n) {
      console.error(`Erreur lors de la requête ${t}:`, n);
    }
  }
  async run() {
    return await this.requestHandler(this.opcode, this.serve_method, this.arguments);
  }
}
const U = "robomaster_turbowarp_extension", $ = "0.0.1", O = {
  name: U,
  version: $,
  robomaster_api: {
    host: "127.0.0.1",
    port: 8e3
  },
  tabs: {
    RobomasterBasics: {
      color: "#202530",
      blocks: [
        new o(
          "start",
          Scratch.BlockType.COMMAND,
          "Start"
        ),
        new o(
          "stop",
          Scratch.BlockType.COMMAND,
          "Stop"
        ),
        new o(
          "move",
          Scratch.BlockType.COMMAND,
          "move x:[x], y:[y], z:[z], speed:[speed]",
          "POST",
          {
            x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
          }
        )
      ]
    },
    LedEffects: {
      color: "#58C0A6",
      blocks: [
        new o(
          "setFlash",
          Scratch.BlockType.COMMAND,
          "set [led] LED flash rate to [frequency]Hz",
          "POST",
          {
            led: { type: Scratch.ArgumentType.STRING, menu: "armorFlash", defaultValue: "all" },
            frequency: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
          }
        ),
        new o(
          "setBottomLed",
          Scratch.BlockType.COMMAND,
          "set chassis [led] LED color to [color] and effect to [effect]",
          "POST",
          {
            led: { type: Scratch.ArgumentType.STRING, menu: "armorBottomLed", defaultValue: "front" },
            color: { type: Scratch.ArgumentType.STRING, menu: "color", defaultValue: "blue" },
            effect: { type: Scratch.ArgumentType.STRING, menu: "effect", defaultValue: "solid" }
          }
        ),
        new o(
          "setTopLed",
          Scratch.BlockType.COMMAND,
          "set gimbal [led] LED color to [color] and effect to [effect]",
          "POST",
          {
            led: { type: Scratch.ArgumentType.STRING, menu: "armorTopLed", defaultValue: "top" },
            color: { type: Scratch.ArgumentType.STRING, menu: "color", defaultValue: "blue" },
            effect: { type: Scratch.ArgumentType.STRING, menu: "effect", defaultValue: "solid" }
          }
        ),
        new o(
          "setSignleLed",
          Scratch.BlockType.COMMAND,
          "set gimbal [led] LED sequence to [index] and effect to [effect]",
          "POST",
          {
            led: { type: Scratch.ArgumentType.STRING, menu: "armorTopLed", defaultValue: "bottomall" },
            index: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            effect: { type: Scratch.ArgumentType.STRING, menu: "effect", defaultValue: "solid" }
          }
        ),
        new o(
          "turnOff",
          Scratch.BlockType.COMMAND,
          "set gimbal [led] LED color to [color]",
          "POST",
          {
            led: { type: Scratch.ArgumentType.STRING, menu: "armorTopLed", defaultValue: "top" },
            color: { type: Scratch.ArgumentType.STRING, menu: "color", defaultValue: "blue" }
          }
        )
      ],
      menus: {
        armorFlash: ["all", "bottom front", "bottom back", "bottom left", "bottom right", "top left", "top right"],
        armorBottomLed: ["bottom all", "bottom front", "bottom back", "bottom left", "bottom right"],
        armorTopLed: ["top all", "top left", "top right"],
        color: ["red", "green", "blue", "yellow", "cyan", "purple", "white"],
        effect: ["solid", "breath", "flash", "off"]
      }
    },
    Chassis: {
      color: "#651FFF",
      blocks: [
        new o(
          "setPwmValue",
          Scratch.BlockType.COMMAND,
          "set [pwm] output to [value]%",
          "POST",
          {
            pwm: { type: Scratch.ArgumentType.STRING, menu: "pwn_port", defaultValue: "PWP_all" },
            value: { type: Scratch.ArgumentType.NUMBER, defaultValue: 7.5 }
          }
        ),
        new o(
          "enableStickOverlay",
          Scratch.BlockType.COMMAND,
          "[status] chassis acceleration",
          "POST",
          {
            status: { type: Scratch.ArgumentType.STRING, menu: "status", defaultValue: "Enable" }
          }
        ),
        new o(
          "setFollowGimbalOffset",
          Scratch.BlockType.COMMAND,
          "set chassis to follow gimbal at [degree]°",
          "POST",
          {
            degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
          }
        ),
        new o(
          "setTransSpeed",
          Scratch.BlockType.COMMAND,
          "set chassis translation speed to [speed]m/s",
          "POST",
          {
            speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
          }
        ),
        new o(
          "setRotateSpeed",
          Scratch.BlockType.COMMAND,
          "set chassis rotation speed to [speed]°/s",
          "POST",
          {
            speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 30 }
          }
        ),
        new o(
          "setWheelSpeed",
          Scratch.BlockType.COMMAND,
          "set wheel rotation speed (rpm) to front-left [fl] front-right [fr] rear-left [rl] rear-right [rr]",
          "POST",
          {
            fl: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
            fr: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
            rl: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
            rr: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
          }
        ),
        new o(
          "move",
          Scratch.BlockType.COMMAND,
          "set chassis to translate at [degree]°",
          "POST",
          {
            degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
          }
        ),
        new o(
          "moveWithTime",
          Scratch.BlockType.COMMAND,
          "set chassis to translate at [degree]° for [time]s",
          "POST",
          {
            degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            time: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
          }
        ),
        new o(
          "moveWithDistance",
          Scratch.BlockType.COMMAND,
          "set chassis to translate at [degree]° for [distance]m",
          "POST",
          {
            degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            distance: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
          }
        ),
        new o(
          "moveDegreeWithSpeed",
          Scratch.BlockType.COMMAND,
          "set chassis to translate [degree]° at [speed]m/s",
          "POST",
          {
            degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            speed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
          }
        ),
        new o(
          "rotate",
          Scratch.BlockType.COMMAND,
          "set chassis to rotate [direction]",
          "POST",
          {
            direction: { type: Scratch.ArgumentType.STRING, menu: "direction", defaultValue: "right" }
          }
        ),
        new o(
          "rotateWithTime",
          Scratch.BlockType.COMMAND,
          "set chassis to rotate [direction] for [time]s",
          "POST",
          {
            direction: { type: Scratch.ArgumentType.STRING, menu: "direction", defaultValue: "right" },
            time: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
          }
        ),
        new o(
          "rotateWithDegree",
          Scratch.BlockType.COMMAND,
          "set chassis to rotate [direction] for [degree]°",
          "POST",
          {
            direction: { type: Scratch.ArgumentType.STRING, menu: "direction", defaultValue: "right" },
            degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
          }
        ),
        new o(
          "moveAndRotate",
          Scratch.BlockType.COMMAND,
          "set robot to translate towards chassis front at [degree]° and rotate [direction]",
          "POST",
          {
            degree: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            direction: { type: Scratch.ArgumentType.STRING, menu: "direction", defaultValue: "right" }
          }
        ),
        new o(
          "moveWithSpeed",
          Scratch.BlockType.COMMAND,
          "set robot to translate at [xspeed]m/s along X axis and [yspeed] along Y axis and rotate along Z axis at [rotation]°/s",
          "POST",
          {
            xspeed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 },
            yspeed: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 },
            rotation: { type: Scratch.ArgumentType.NUMBER, defaultValue: 30 }
          }
        ),
        new o(
          "stop",
          Scratch.BlockType.COMMAND,
          "set chassis to stop moving",
          "POST"
        ),
        new o(
          "getAttitude",
          Scratch.BlockType.REPORTER,
          "chassis [attitude] axis attitude angle",
          "POST",
          {
            attitude: { type: Scratch.ArgumentType.STRING, menu: "attitude", defaultValue: "yaw" }
          }
        ),
        new o(
          "getPositionBasePowerOn",
          Scratch.BlockType.REPORTER,
          "current chassis position [action]",
          "POST",
          {
            action: { type: Scratch.ArgumentType.STRING, menu: "action", defaultValue: "X coordinate" }
          }
        ),
        new o(
          "chassisImpactDetection",
          Scratch.BlockType.EVENT,
          "when chassis hits an obstacle",
          "POST"
        ),
        new o(
          "isImpact",
          Scratch.BlockType.BOOLEAN,
          "chassis hits an obstacle",
          "POST"
        )
      ],
      menus: {
        pwm_port: ["PWP_all", "PWP_1", "PWP_2", "PWP_3", "PWP_4", "PWP_5", "PWP_6"],
        status: ["Enable", "Disable"],
        direction: ["right", "left"],
        attitude: ["yaw", "pitch", "roll"],
        action: ["orientation", "X coordinate", "Y coordinate", "Z coordinate"]
      }
    },
    ExtensionModule: {
      color: "#F24A88",
      blocks: [
        new o(
          "setGripper",
          Scratch.BlockType.COMMAND,
          "set gripper to [action]",
          "POST",
          {
            action: { type: Scratch.ArgumentType.STRING, menu: "gripperActions", defaultValue: "open" }
          }
        ),
        new o(
          "armMove",
          Scratch.BlockType.COMMAND,
          "move arm [direction] distance:[distance]mm",
          "POST",
          {
            direction: { type: Scratch.ArgumentType.STRING, menu: "armDirection", defaultValue: "forward" },
            distance: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
          }
        ),
        new o(
          "armMoveTo",
          Scratch.BlockType.COMMAND,
          "move arm to (X:[x] Y:[y])",
          "POST",
          {
            x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
          }
        )
      ],
      menus: {
        gripperActions: ["open", "close", "stop"],
        armDirection: ["forward", "backward", "up", "down"]
      }
    },
    Smart: {
      color: "#F19D38",
      blocks: []
    },
    Armor: {
      color: "#F5C343",
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
    Media: {
      color: "#67AD5B",
      blocks: []
    }
  }
};
var j = typeof global == "object" && global && global.Object === Object && global, G = typeof self == "object" && self && self.Object === Object && self, _ = j || G || Function("return this")(), p = _.Symbol, D = Object.prototype, z = D.hasOwnProperty, F = D.toString, f = p ? p.toStringTag : void 0;
function L(e) {
  var t = z.call(e, f), r = e[f];
  try {
    e[f] = void 0;
    var a = !0;
  } catch {
  }
  var n = F.call(e);
  return a && (t ? e[f] = r : delete e[f]), n;
}
var W = Object.prototype, H = W.toString;
function X(e) {
  return H.call(e);
}
var q = "[object Null]", K = "[object Undefined]", B = p ? p.toStringTag : void 0;
function V(e) {
  return e == null ? e === void 0 ? K : q : B && B in Object(e) ? L(e) : X(e);
}
function Z(e) {
  return e != null && typeof e == "object";
}
var Y = "[object Symbol]";
function A(e) {
  return typeof e == "symbol" || Z(e) && V(e) == Y;
}
function J(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, n = Array(a); ++r < a; )
    n[r] = t(e[r], r, e);
  return n;
}
var M = Array.isArray, R = p ? p.prototype : void 0, E = R ? R.toString : void 0;
function I(e) {
  if (typeof e == "string")
    return e;
  if (M(e))
    return J(e, I) + "";
  if (A(e))
    return E ? E.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function S(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Q = "[object AsyncFunction]", ee = "[object Function]", te = "[object GeneratorFunction]", re = "[object Proxy]";
function ae(e) {
  if (!S(e))
    return !1;
  var t = V(e);
  return t == ee || t == te || t == Q || t == re;
}
var b = _["__core-js_shared__"], v = function() {
  var e = /[^.]+$/.exec(b && b.keys && b.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function oe(e) {
  return !!v && v in e;
}
var ne = Function.prototype, ce = ne.toString;
function se(e) {
  if (e != null) {
    try {
      return ce.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ie = /[\\^$.*+?()[\]{}|]/g, le = /^\[object .+?Constructor\]$/, ue = Function.prototype, pe = Object.prototype, he = ue.toString, de = pe.hasOwnProperty, fe = RegExp(
  "^" + he.call(de).replace(ie, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ye(e) {
  if (!S(e) || oe(e))
    return !1;
  var t = ae(e) ? fe : le;
  return t.test(se(e));
}
function me(e, t) {
  return e == null ? void 0 : e[t];
}
function N(e, t) {
  var r = me(e, t);
  return ye(r) ? r : void 0;
}
var C = function() {
  try {
    var e = N(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Se = 9007199254740991, ge = /^(?:0|[1-9]\d*)$/;
function Te(e, t) {
  var r = typeof e;
  return t = t ?? Se, !!t && (r == "number" || r != "symbol" && ge.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function be(e, t, r) {
  t == "__proto__" && C ? C(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function k(e, t) {
  return e === t || e !== e && t !== t;
}
var Oe = Object.prototype, _e = Oe.hasOwnProperty;
function Ae(e, t, r) {
  var a = e[t];
  (!(_e.call(e, t) && k(a, r)) || r === void 0 && !(t in e)) && be(e, t, r);
}
var Me = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ne = /^\w*$/;
function Pe(e, t) {
  if (M(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || A(e) ? !0 : Ne.test(e) || !Me.test(e) || t != null && e in Object(t);
}
var y = N(Object, "create");
function we() {
  this.__data__ = y ? y(null) : {}, this.size = 0;
}
function Be(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Re = "__lodash_hash_undefined__", Ee = Object.prototype, ve = Ee.hasOwnProperty;
function Ce(e) {
  var t = this.__data__;
  if (y) {
    var r = t[e];
    return r === Re ? void 0 : r;
  }
  return ve.call(t, e) ? t[e] : void 0;
}
var De = Object.prototype, Ve = De.hasOwnProperty;
function Ie(e) {
  var t = this.__data__;
  return y ? t[e] !== void 0 : Ve.call(t, e);
}
var ke = "__lodash_hash_undefined__";
function xe(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = y && t === void 0 ? ke : t, this;
}
function i(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
i.prototype.clear = we;
i.prototype.delete = Be;
i.prototype.get = Ce;
i.prototype.has = Ie;
i.prototype.set = xe;
function Ue() {
  this.__data__ = [], this.size = 0;
}
function g(e, t) {
  for (var r = e.length; r--; )
    if (k(e[r][0], t))
      return r;
  return -1;
}
var $e = Array.prototype, je = $e.splice;
function Ge(e) {
  var t = this.__data__, r = g(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : je.call(t, r, 1), --this.size, !0;
}
function ze(e) {
  var t = this.__data__, r = g(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Fe(e) {
  return g(this.__data__, e) > -1;
}
function Le(e, t) {
  var r = this.__data__, a = g(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
function h(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
h.prototype.clear = Ue;
h.prototype.delete = Ge;
h.prototype.get = ze;
h.prototype.has = Fe;
h.prototype.set = Le;
var We = N(_, "Map");
function He() {
  this.size = 0, this.__data__ = {
    hash: new i(),
    map: new (We || h)(),
    string: new i()
  };
}
function Xe(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function T(e, t) {
  var r = e.__data__;
  return Xe(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function qe(e) {
  var t = T(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ke(e) {
  return T(this, e).get(e);
}
function Ze(e) {
  return T(this, e).has(e);
}
function Ye(e, t) {
  var r = T(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
function l(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
l.prototype.clear = He;
l.prototype.delete = qe;
l.prototype.get = Ke;
l.prototype.has = Ze;
l.prototype.set = Ye;
var Je = "Expected a function";
function P(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Je);
  var r = function() {
    var a = arguments, n = t ? t.apply(this, a) : a[0], c = r.cache;
    if (c.has(n))
      return c.get(n);
    var s = e.apply(this, a);
    return r.cache = c.set(n, s) || c, s;
  };
  return r.cache = new (P.Cache || l)(), r;
}
P.Cache = l;
var Qe = 500;
function et(e) {
  var t = P(e, function(a) {
    return r.size === Qe && r.clear(), a;
  }), r = t.cache;
  return t;
}
var tt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rt = /\\(\\)?/g, at = et(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(tt, function(r, a, n, c) {
    t.push(n ? c.replace(rt, "$1") : a || r);
  }), t;
});
function ot(e) {
  return e == null ? "" : I(e);
}
function nt(e, t) {
  return M(e) ? e : Pe(e, t) ? [e] : at(ot(e));
}
function ct(e) {
  if (typeof e == "string" || A(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function st(e, t, r, a) {
  if (!S(e))
    return e;
  t = nt(t, e);
  for (var n = -1, c = t.length, s = c - 1, d = e; d != null && ++n < c; ) {
    var u = ct(t[n]), m = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (n != s) {
      var w = d[u];
      m = void 0, m === void 0 && (m = S(w) ? w : Te(t[n + 1]) ? [] : {});
    }
    Ae(d, u, m), d = d[u];
  }
  return e;
}
function it(e, t, r) {
  return e == null ? e : st(e, t, r);
}
class lt {
  constructor(t = "NoName", r = "#000000", a = [], n = {}, c) {
    this.runtime = c, this.id = `${t.substring(0, 1).toLowerCase()}${t.substring(1)}`, this.name = t.match(/[A-Z][a-z]+/g).join(" "), this.color = r, this.blocks = a, this.menus = n;
    for (const s of this.blocks)
      it(this, s.opcode.toString(), async () => await s.run());
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
const x = [];
for (const [e, t] of Object.entries(O.tabs))
  x.push(new lt(e, t.color, t.blocks, t.menus));
x.forEach((e) => Scratch.extensions.register(e));
