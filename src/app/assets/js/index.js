var G = Object.defineProperty;
var U = (e, t, o) => t in e ? G(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var i = (e, t, o) => U(e, typeof t != "symbol" ? t + "" : t, o);
class r {
  constructor(t, o, s = "", n = "POST", a = void 0) {
    /**
     * Opcode (equivalent of id) of the block
     * @property {string} opcode
     * */
    i(this, "opcode");
    /**
     *
     * Type of the block
     *
     * For more information with BlockType
     * @see {@link Scratch.BlockType}
     *
     *@property {Scratch.BlockType} BlockType
     * */
    i(this, "blockType");
    /**
     *  Text display on block
     * @property {string | string[]} text
     * */
    i(this, "text");
    /**
     * HTTP Method of the server (GET | POST)
     * @property {string} serve_method
     * */
    i(this, "serve_method");
    /**
     * Supplementaries arguments for the block
     * For  more information on arguments
     * @see {@link Scratch.ArgumentType}
     * @property {undefined | object} arguments
     */
    i(this, "arguments");
    this.opcode = t, this.blockType = o, this.text = c.getMessage(this.opcode) === "NoTranslation" ? s : c.getMessage(this.opcode), this.serve_method = n, this.arguments = a;
  }
  /**
   * @param {string} url - Block api call slug
   * @param {string} request_method - If it is (POST or GET)
   * @param {undefined | object} request_body - (Arguments for the request)
   * @returns json or return error
   */
  async requestHandler(t, o = "POST", s = void 0) {
    try {
      const a = await (await fetch(
        `http${g.env === "production" ? "s" : ""}://${g.robomaster_api.host}:${g.robomaster_api.port}/${t}`,
        {
          method: o,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(s || {})
        }
      )).json();
      return console.log(a), a;
    } catch (n) {
      console.error(`Erreur lors de la requête ${t}:`, n);
    }
  }
  /**
   *
   */
  async run(t) {
    return await this.requestHandler(this.opcode, this.serve_method, t);
  }
}
const j = "robomaster_turbowarp_extension", F = "0.0.1", z = { message: "RobomasterBasics", description: "name of tab" }, H = { message: "Start", description: "text on block" }, X = { message: "Stop", description: "text on block" }, q = { message: ["192.168.0.2"], description: "text in menu" }, Y = { message: "Armor", description: "name of tab" }, Z = { message: "Chassis", description: "name of tab" }, J = { message: "Move x: [x]m y: [y]m z: [z]m speed: [speed]m/s", description: "text on block" }, K = { message: "Rotate angle: [angle]°", description: "text on block" }, Q = { message: "set [pwm] output to [value]%", description: "text on block" }, ee = { message: "[status] chassis acceleration", description: "text on block" }, te = { message: "set chassis to follow gimbal at [degree]°", description: "text on block" }, oe = { message: "set chassis translation speed to [speed]m/s", description: "text on block" }, se = { message: "set chassis rotation speed to [speed]°/s", description: "text on block" }, re = { message: "set wheel rotation speed (rpm) to front-left [fl] front-right [fr] rear-left [rl] rear-right [rr]", description: "text on block" }, ne = { message: "set chassis to translate at [degree]° for [time]s", description: "text on block" }, ae = { message: "set chassis to translate at [degree]° for [distance]m", description: "text on block" }, ce = { message: "set chassis to translate [degree]° at [speed]m/s", description: "text on block" }, ie = { message: "set chassis to rotate [direction] for [time]s", description: "text on block" }, le = { message: "set chassis to rotate [direction] for [degree]°", description: "text on block" }, pe = { message: "set robot to translate towards chassis front at [degree]° and rotate [direction]", description: "text on block" }, de = { message: "set robot to translate at [xspeed]m/s along X axis and [yspeed] along Y axis and rotate along Z axis at [rotation]°/s", description: "text on block" }, me = { message: "chassis [attitude] axis attitude angle", description: "text on block" }, ue = { message: "current chassis position [action]", description: "text on block" }, ge = { message: "when chassis hits an obstacle", description: "text on block" }, he = { message: "chassis hits an obstacle", description: "text on block" }, fe = { message: ["PWP_all", "PWP_1", "PWP_2", "PWP_3", "PWP_4", "PWP_5", "PWP_6"], description: "text in menu" }, be = { message: ["Enable", "Disable"], description: "text in menu" }, ye = { message: ["right", "left"], description: "text in menu" }, Se = { message: ["yaw", "pitch", "roll"], description: "text in menu" }, Te = { message: ["orientation", "X coordinate", "Y coordinate", "Z coordinate"], description: "text in menu" }, xe = { message: "ExtensionModule", description: "name of tab" }, Me = { message: "Move arm to [position]", description: "text on block" }, Ae = { message: "Grabber [action]", description: "text on block" }, Oe = { message: "set gripper to [action]", description: "text on block" }, _e = { message: "move arm [direction] distance:[distance]mm", description: "text on block" }, ke = { message: "move arm to (X:[x] Y:[y])", description: "text on block" }, Pe = { message: ["open", "close", "stop"], description: "text in menu" }, ve = { message: ["up", "down"], description: "text in menu" }, we = { message: ["forward", "backward", "up", "bottom"], description: "text in menu" }, Ne = { message: "LedEffects", description: "name of tab" }, Be = { message: "set [led] LED flash rate to [frequency]Hz", description: "text on block" }, Re = { message: "set chassis [led] LED color to [color] and effect to [effect]", description: "text on block" }, $e = { message: "set gimbal [led] LED color to [color] and effect to [effect]", description: "text on block" }, De = { message: "set gimbal [led] LED sequence to [index] and effect to [effect]", description: "text on block" }, Ee = { message: "set gimbal [led] LED color to [color]", description: "text on block" }, Ce = { message: ["all", "bottom front", "bottom back", "bottom left", "bottom right", "top left", "top right"], description: "text in menu" }, Ve = { message: ["bottom all", "bottom front", "bottom back", "bottom left", "bottom right"], description: "text in menu" }, Ie = { message: ["top all", "top left", "top right"], description: "text in menu" }, Le = { message: ["red", "green", "blue", "yellow", "cyan", "purple", "white"], description: "text in menu" }, We = { message: ["solid", "breath", "flash", "off"], description: "text in menu" }, Ge = { message: "Media", description: "name of tab" }, Ue = { message: "Say [say]", description: "text on block" }, je = { message: "Sensor", description: "name of tab" }, Fe = { message: "SensorAdapter", description: "name of tab" }, ze = { message: "Smart", description: "name of tab" }, He = {
  RobomasterBasics: z,
  start: H,
  stop: X,
  robotIp: q,
  Armor: Y,
  Chassis: Z,
  move: J,
  rotate: K,
  setPwmValue: Q,
  enableStickOverlay: ee,
  setFollowGimbalOffset: te,
  setTransSpeed: oe,
  setRotateSpeed: se,
  setWheelSpeed: re,
  moveWithTime: ne,
  moveWithDistance: ae,
  moveDegreeWithSpeed: ce,
  rotateWithTime: ie,
  rotateWithDegree: le,
  moveAndRotate: pe,
  moveWithSpeed: de,
  getAttitude: me,
  getPositionBasePowerOn: ue,
  chassisImpactDetection: ge,
  isImpact: he,
  pwm_port: fe,
  status: be,
  direction: ye,
  attitude: Se,
  action: Te,
  ExtensionModule: xe,
  arm: Me,
  grabber: Ae,
  setGripper: Oe,
  armMove: _e,
  armMoveTo: ke,
  gripperActions: Pe,
  armPositions: ve,
  armDirection: we,
  LedEffects: Ne,
  setFlash: Be,
  setBottomLed: Re,
  setTopLed: $e,
  setSignleLed: De,
  turnOff: Ee,
  armorFlash: Ce,
  armorBottomLed: Ve,
  armorTopLed: Ie,
  color: Le,
  effect: We,
  Media: Ge,
  say: Ue,
  Sensor: je,
  SensorAdapter: Fe,
  Smart: ze
}, Xe = { message: "RobomasterBases", description: "name of tab" }, qe = { message: "Démarrer", description: "text on block" }, Ye = { message: "Stopper", description: "text on block" }, Ze = { message: ["192.168.0.2"], description: "text in menu" }, Je = { message: "Armure", description: "name of tab" }, Ke = { message: "Chassis", description: "name of tab" }, Qe = { message: "Se déplacer de x: [x]m y: [y]m z: [z]m speed: [speed]m/s", description: "text on block" }, et = { message: "Tourner d'un angle: [angle]°", description: "text on block" }, tt = { message: "régler [pwm] la sortie pwm à [value]%", description: "text on block" }, ot = { message: "[status] accélération du chassis", description: "text on block" }, st = { message: "Suivre un stabilisateur [degree]°", description: "text on block" }, rt = { message: "Vitesse de translation [speed]m/s", description: "text on block" }, nt = { message: "Vitesse de rotation [speed]°/s", description: "text on block" }, at = { message: "vitesse de rotation des roues (rpm) avant gauche [fl] avant droit [fr] arrière gauche [rl] arrière droit [rr]", description: "text on block" }, ct = { message: "se déplacer à [degree]° pour [time]s", description: "text on block" }, it = { message: "se déplacer à [degree]° sur [distance]m", description: "text on block" }, lt = { message: "se déplacer à [degree]° à [speed]m/s", description: "text on block" }, pt = { message: "tourner [direction] pendant [time]s", description: "text on block" }, dt = { message: "tourner [direction] à [degree]°", description: "text on block" }, mt = { message: "Avancer de [degree]° en tournant à [direction]", description: "text on block" }, ut = { message: "Se déplacer à [xspeed]m/s sur l'axe X et à [yspeed] sur l'axe Y et tourne sur l'axe Z à [rotation]°/s", description: "text on block" }, gt = { message: "Attitude de l'angle [attitude]", description: "text on block" }, ht = { message: "Position courante [action]", description: "text on block" }, ft = { message: "Impact détecté ?", description: "text on block" }, bt = { message: "collision ?", description: "text on block" }, yt = { message: ["PWP_all", "PWP_1", "PWP_2", "PWP_3", "PWP_4", "PWP_5", "PWP_6"], description: "text in menu" }, St = { message: ["Activé", "Désactivé"], description: "text in menu" }, Tt = { message: ["droite", "gauche"], description: "text in menu" }, xt = { message: ["perdu", "terrain", "rouler"], description: "text in menu" }, Mt = { message: ["orientation", "coordonnée X", "coordonnée Y", "coordonnée Z"], description: "text in menu" }, At = { message: "ModuleExtension", description: "name of tab" }, Ot = { message: "Bouger le bras vers le [position]", description: "text on block" }, _t = { message: "Pince [action]", description: "text on block" }, kt = { message: "Pince [action]", description: "text on block" }, Pt = { message: "bouger le bras vers le [direction] de [distance]mm", description: "text on block" }, vt = { message: "bouger le bras au coordonnées (X:[x] Y:[y])", description: "text on block" }, wt = { message: ["ouverte", "fermée", "stoppée"], description: "text in menu" }, Nt = { message: ["haut", "bas"], description: "text in menu" }, Bt = { message: ["avant", "arrière", "haut", "bas"], description: "text in menu" }, Rt = { message: "EffetsDeLeds", description: "name of tab" }, $t = { message: "set [led] LED flash rate to [frequency]Hz", description: "text on block" }, Dt = { message: "set chassis [led] LED color to [color] and effect to [effect]", description: "text on block" }, Et = { message: "set gimbal [led] LED color to [color] and effect to [effect]", description: "text on block" }, Ct = { message: "set gimbal [led] LED sequence to [index] and effect to [effect]", description: "text on block" }, Vt = { message: "set gimbal [led] LED color to [color]", description: "text on block" }, It = { message: ["all", "bottom front", "bottom back", "bottom left", "bottom right", "top left", "top right"], description: "text in menu" }, Lt = { message: ["bottom all", "bottom front", "bottom back", "bottom left", "bottom right"], description: "text in menu" }, Wt = { message: ["top all", "top left", "top right"], description: "text in menu" }, Gt = { message: ["red", "green", "blue", "yellow", "cyan", "purple", "white"], description: "text in menu" }, Ut = { message: ["solid", "breath", "flash", "off"], description: "text in menu" }, jt = { message: "Media", description: "name of tab" }, Ft = { message: "Say [say]", description: "text on block" }, zt = { message: "Capteurs", description: "name of tab" }, Ht = { message: "AdapteurCapteurs", description: "name of tab" }, Xt = { message: "Intelligence", description: "name of tab" }, qt = {
  RobomasterBasics: Xe,
  start: qe,
  stop: Ye,
  robotIp: Ze,
  Armor: Je,
  Chassis: Ke,
  move: Qe,
  rotate: et,
  setPwmValue: tt,
  enableStickOverlay: ot,
  setFollowGimbalOffset: st,
  setTransSpeed: rt,
  setRotateSpeed: nt,
  setWheelSpeed: at,
  moveWithTime: ct,
  moveWithDistance: it,
  moveDegreeWithSpeed: lt,
  rotateWithTime: pt,
  rotateWithDegree: dt,
  moveAndRotate: mt,
  moveWithSpeed: ut,
  getAttitude: gt,
  getPositionBasePowerOn: ht,
  chassisImpactDetection: ft,
  isImpact: bt,
  pwm_port: yt,
  status: St,
  direction: Tt,
  attitude: xt,
  action: Mt,
  ExtensionModule: At,
  arm: Ot,
  grabber: _t,
  setGripper: kt,
  armMove: Pt,
  armMoveTo: vt,
  gripperActions: wt,
  armPositions: Nt,
  armDirection: Bt,
  LedEffects: Rt,
  setFlash: $t,
  setBottomLed: Dt,
  setTopLed: Et,
  setSignleLed: Ct,
  turnOff: Vt,
  armorFlash: It,
  armorBottomLed: Lt,
  armorTopLed: Wt,
  color: Gt,
  effect: Ut,
  Media: jt,
  say: Ft,
  Sensor: zt,
  SensorAdapter: Ht,
  Smart: Xt
};
class Yt {
  /**
   * @param lang
   */
  constructor(t = "en") {
    /**
     * Language's name
     * @property {string} lang
     */
    i(this, "lang");
    /**
     * List of the available language from src/locales
     * @property {string | LanguageObject } available_language
     */
    i(this, "available_language");
    /**
     *
     * For more information about this property
     * @see {LanguageObject}
     */
    i(this, "translations");
    this.lang = t, this.available_language = {
      en: He,
      fr: qt
    }, this.translations = this.available_language[this.lang];
  }
  /**
   *
   * @param {string[] | string} message
   * @returns {string} the result of the translation
   */
  getMessage(t) {
    return t in this.translations ? this.translations[t].message : "NoTranslation";
  }
  /**
   * @returns {void} - Generate new message template in json file
   */
  generate_template() {
    const t = {};
    for (const [s, n] of Object.entries(g.tabs)) {
      if (t[s] = {
        message: this.getMessage(s),
        description: "name of tab"
      }, n.blocks.length !== 0)
        for (const a of n.blocks)
          t[a.opcode] = {
            message: a.text,
            description: "text on block"
          };
      if ("menus" in n)
        for (const [a, l] of Object.entries(n.menus))
          t[a] = {
            message: l,
            description: "text in menu"
          };
    }
    return ((s, n) => {
      const a = new Blob([JSON.stringify(s, null, 2)], {
        type: "application/json"
      }), l = URL.createObjectURL(a), p = document.createElement("a");
      p.href = l, p.download = `${n}.json`, p.click(), URL.revokeObjectURL(l);
    })(
      t,
      `messages.${this.lang}.template`
    );
  }
}
let Zt = Scratch.vm.getLocale();
const c = new Yt(Zt), g = {
  /**
   * Name of the application
   * @type {string}
   * */
  name: j,
  /**
   * Version of the application
   * @type {string}
   * */
  version: F,
  env: "dev",
  /**
   * Robomaster Api represent host and port for fetch api connection
   * @param {string} host - api host like http://localhost/
   * @param {int} port - api port like :8000
   * @memberOf config
   * */
  robomaster_api: {
    /**
     * host
     * api host like http://localhost/
     * @type {string}
     * */
    //host: 'localhost',
    host: "",
    /**
     * port
     * api port like :8000
     * @type {int}
     * */
    port: 8e3
  },
  /**
   * Tabs
   * It's an object that contain all the tab of the app
   * @memberOf config
   * */
  tabs: {
    /**
     *  Tabs represent a
     *  tab in turbowarp
     *  @param {string} color The color of the tab
     *  @param {Block[]} blocks in the tab
     *  @param {object} menus for a tab
     *  */
    RobomasterBasics: {
      color: "#202530",
      blocks: [
        new r("start", Scratch.BlockType.COMMAND, "", "POST", {
          type: Scratch.ArgumentType.STRING,
          menu: "robotIp",
          defaultValue: "192.168.0.2"
        }),
        new r("stop", Scratch.BlockType.COMMAND)
      ],
      menus: {
        robotIp: ["192.168.0.2"]
      }
    },
    Armor: {
      color: "#F5C343",
      blocks: []
    },
    Chassis: {
      color: "#651FFF",
      blocks: [
        new r("move", Scratch.BlockType.COMMAND, "", "POST", {
          x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
          y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
          z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
          speed: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: 0.5
          }
        }),
        new r("rotate", Scratch.BlockType.COMMAND, "", "POST", {
          angle: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: 90
          }
        }),
        new r(
          "setPwmValue",
          Scratch.BlockType.COMMAND,
          "set [pwm] output to [value]%",
          "POST",
          {
            pwm: {
              type: Scratch.ArgumentType.STRING,
              menu: "pwm_port",
              defaultValue: c.getMessage("pwm_port")[0]
            },
            value: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7.5
            }
          }
        ),
        new r(
          "enableStickOverlay",
          Scratch.BlockType.COMMAND,
          "[status] chassis acceleration",
          "POST",
          {
            status: {
              type: Scratch.ArgumentType.STRING,
              menu: "status",
              defaultValue: c.getMessage("status")[0]
            }
          }
        ),
        new r(
          "setFollowGimbalOffset",
          Scratch.BlockType.COMMAND,
          "set chassis to follow gimbal at [degree]°",
          "POST",
          {
            degree: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        ),
        new r(
          "setTransSpeed",
          Scratch.BlockType.COMMAND,
          "set chassis translation speed to [speed]m/s",
          "POST",
          {
            speed: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        ),
        new r(
          "setRotateSpeed",
          Scratch.BlockType.COMMAND,
          "set chassis rotation speed to [speed]°/s",
          "POST",
          {
            speed: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 30
            }
          }
        ),
        new r(
          "setWheelSpeed",
          Scratch.BlockType.COMMAND,
          "set wheel rotation speed (rpm) to front-left [fl] front-right [fr] rear-left [rl] rear-right [rr]",
          "POST",
          {
            fl: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100
            },
            fr: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100
            },
            rl: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100
            },
            rr: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100
            }
          }
        ),
        new r(
          "move",
          Scratch.BlockType.COMMAND,
          "set chassis to translate at [degree]°",
          "POST",
          {
            degree: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        ),
        new r(
          "moveWithTime",
          Scratch.BlockType.COMMAND,
          "set chassis to translate at [degree]° for [time]s",
          "POST",
          {
            degree: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            time: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        ),
        new r(
          "moveWithDistance",
          Scratch.BlockType.COMMAND,
          "set chassis to translate at [degree]° for [distance]m",
          "POST",
          {
            degree: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            distance: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        ),
        new r(
          "moveDegreeWithSpeed",
          Scratch.BlockType.COMMAND,
          "set chassis to translate [degree]° at [speed]m/s",
          "POST",
          {
            degree: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            speed: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0.5
            }
          }
        ),
        new r(
          "rotate",
          Scratch.BlockType.COMMAND,
          "set chassis to rotate [direction]",
          "POST",
          {
            direction: {
              type: Scratch.ArgumentType.STRING,
              menu: "direction",
              defaultValue: "right"
            }
          }
        ),
        new r(
          "rotateWithTime",
          Scratch.BlockType.COMMAND,
          "set chassis to rotate [direction] for [time]s",
          "POST",
          {
            direction: {
              type: Scratch.ArgumentType.STRING,
              menu: "direction",
              defaultValue: "right"
            },
            time: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        ),
        new r(
          "rotateWithDegree",
          Scratch.BlockType.COMMAND,
          "set chassis to rotate [direction] for [degree]°",
          "POST",
          {
            direction: {
              type: Scratch.ArgumentType.STRING,
              menu: "direction",
              defaultValue: "right"
            },
            degree: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        ),
        new r(
          "moveAndRotate",
          Scratch.BlockType.COMMAND,
          "set robot to translate towards chassis front at [degree]° and rotate [direction]",
          "POST",
          {
            degree: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            direction: {
              type: Scratch.ArgumentType.STRING,
              menu: "direction",
              defaultValue: "right"
            }
          }
        ),
        new r(
          "moveWithSpeed",
          Scratch.BlockType.COMMAND,
          "set robot to translate at [xspeed]m/s along X axis and [yspeed] along Y axis and rotate along Z axis at [rotation]°/s",
          "POST",
          {
            xspeed: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0.5
            },
            yspeed: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0.5
            },
            rotation: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 30
            }
          }
        ),
        new r(
          "stop",
          Scratch.BlockType.COMMAND,
          "set chassis to stop moving",
          "POST"
        ),
        new r(
          "getAttitude",
          Scratch.BlockType.REPORTER,
          "chassis [attitude] axis attitude angle",
          "POST",
          {
            attitude: {
              type: Scratch.ArgumentType.STRING,
              menu: "attitude",
              defaultValue: "yaw"
            }
          }
        ),
        new r(
          "getPositionBasePowerOn",
          Scratch.BlockType.REPORTER,
          "current chassis position [action]",
          "POST",
          {
            action: {
              type: Scratch.ArgumentType.STRING,
              menu: "action",
              defaultValue: "X coordinate"
            }
          }
        ),
        new r(
          "chassisImpactDetection",
          Scratch.BlockType.EVENT,
          "when chassis hits an obstacle",
          "POST"
        ),
        new r(
          "isImpact",
          Scratch.BlockType.BOOLEAN,
          "chassis hits an obstacle",
          "POST"
        )
      ],
      menus: {
        pwm_port: c.getMessage("pwm_port"),
        status: c.getMessage("status"),
        direction: c.getMessage("direction"),
        attitude: c.getMessage("attitude"),
        action: c.getMessage("action")
      }
    },
    ExtensionModule: {
      color: "#F24A88",
      blocks: [
        new r("arm", Scratch.BlockType.COMMAND, "", "POST", {
          position: {
            type: Scratch.ArgumentType.STRING,
            menu: "armPositions",
            defaultValue: c.getMessage("armPositions")[0]
          }
        }),
        new r("grabber", Scratch.BlockType.COMMAND, "", "POST", {
          action: {
            type: Scratch.ArgumentType.STRING,
            menu: "gripperActions",
            defaultValue: c.getMessage("gripperActions")[0]
          }
        }),
        new r(
          "setGripper",
          Scratch.BlockType.COMMAND,
          "set gripper to [action]",
          "POST",
          {
            action: {
              type: Scratch.ArgumentType.STRING,
              menu: "gripperActions",
              defaultValue: c.getMessage("gripperActions")[0]
            }
          }
        ),
        new r(
          "armMove",
          Scratch.BlockType.COMMAND,
          "move arm [direction] distance:[distance]mm",
          "POST",
          {
            direction: {
              type: Scratch.ArgumentType.STRING,
              menu: "armDirection",
              defaultValue: c.getMessage("armDirection")[0]
            },
            distance: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        ),
        new r(
          "armMoveTo",
          Scratch.BlockType.COMMAND,
          "move arm to (X:[x] Y:[y])",
          "POST",
          {
            x: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        )
      ],
      menus: {
        gripperActions: c.getMessage("gripperActions"),
        armPositions: c.getMessage("armPositions"),
        armDirection: c.getMessage("armDirection")
      }
    },
    LedEffects: {
      color: "#58C0A6",
      blocks: [
        new r(
          "setFlash",
          Scratch.BlockType.COMMAND,
          "set [led] LED flash rate to [frequency]Hz",
          "POST",
          {
            led: {
              type: Scratch.ArgumentType.STRING,
              menu: "armorFlash",
              defaultValue: "all"
            },
            frequency: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            }
          }
        ),
        new r(
          "setBottomLed",
          Scratch.BlockType.COMMAND,
          "set chassis [led] LED color to [color] and effect to [effect]",
          "POST",
          {
            led: {
              type: Scratch.ArgumentType.STRING,
              menu: "armorBottomLed",
              defaultValue: "front"
            },
            color: {
              type: Scratch.ArgumentType.STRING,
              menu: "color",
              defaultValue: "blue"
            },
            effect: {
              type: Scratch.ArgumentType.STRING,
              menu: "effect",
              defaultValue: "solid"
            }
          }
        ),
        new r(
          "setTopLed",
          Scratch.BlockType.COMMAND,
          "set gimbal [led] LED color to [color] and effect to [effect]",
          "POST",
          {
            led: {
              type: Scratch.ArgumentType.STRING,
              menu: "armorTopLed",
              defaultValue: "top"
            },
            color: {
              type: Scratch.ArgumentType.STRING,
              menu: "color",
              defaultValue: "blue"
            },
            effect: {
              type: Scratch.ArgumentType.STRING,
              menu: "effect",
              defaultValue: "solid"
            }
          }
        ),
        new r(
          "setSignleLed",
          Scratch.BlockType.COMMAND,
          "set gimbal [led] LED sequence to [index] and effect to [effect]",
          "POST",
          {
            led: {
              type: Scratch.ArgumentType.STRING,
              menu: "armorTopLed",
              defaultValue: "bottomall"
            },
            index: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            effect: {
              type: Scratch.ArgumentType.STRING,
              menu: "effect",
              defaultValue: "solid"
            }
          }
        ),
        new r(
          "turnOff",
          Scratch.BlockType.COMMAND,
          "set gimbal [led] LED color to [color]",
          "POST",
          {
            led: {
              type: Scratch.ArgumentType.STRING,
              menu: "armorTopLed",
              defaultValue: "top"
            },
            color: {
              type: Scratch.ArgumentType.STRING,
              menu: "color",
              defaultValue: "blue"
            }
          }
        )
      ],
      menus: {
        armorFlash: [
          "all",
          "bottom front",
          "bottom back",
          "bottom left",
          "bottom right",
          "top left",
          "top right"
        ],
        armorBottomLed: [
          "bottom all",
          "bottom front",
          "bottom back",
          "bottom left",
          "bottom right"
        ],
        armorTopLed: ["top all", "top left", "top right"],
        color: [
          "red",
          "green",
          "blue",
          "yellow",
          "cyan",
          "purple",
          "white"
        ],
        effect: ["solid", "breath", "flash", "off"]
      }
    },
    Media: {
      color: "#67AD5B",
      blocks: [
        new r("say", Scratch.BlockType.COMMAND, "", "POST", {
          say: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: "Hello"
          }
        })
      ]
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
g.robomaster_api.host = "localhost";
var Jt = typeof global == "object" && global && global.Object === Object && global, Kt = typeof self == "object" && self && self.Object === Object && self, O = Jt || Kt || Function("return this")(), h = O.Symbol, C = Object.prototype, Qt = C.hasOwnProperty, eo = C.toString, b = h ? h.toStringTag : void 0;
function to(e) {
  var t = Qt.call(e, b), o = e[b];
  try {
    e[b] = void 0;
    var s = !0;
  } catch {
  }
  var n = eo.call(e);
  return s && (t ? e[b] = o : delete e[b]), n;
}
var oo = Object.prototype, so = oo.toString;
function ro(e) {
  return so.call(e);
}
var no = "[object Null]", ao = "[object Undefined]", N = h ? h.toStringTag : void 0;
function V(e) {
  return e == null ? e === void 0 ? ao : no : N && N in Object(e) ? to(e) : ro(e);
}
function co(e) {
  return e != null && typeof e == "object";
}
var io = "[object Symbol]";
function _(e) {
  return typeof e == "symbol" || co(e) && V(e) == io;
}
function lo(e, t) {
  for (var o = -1, s = e == null ? 0 : e.length, n = Array(s); ++o < s; )
    n[o] = t(e[o], o, e);
  return n;
}
var k = Array.isArray, B = h ? h.prototype : void 0, R = B ? B.toString : void 0;
function I(e) {
  if (typeof e == "string")
    return e;
  if (k(e))
    return lo(e, I) + "";
  if (_(e))
    return R ? R.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function T(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var po = "[object AsyncFunction]", mo = "[object Function]", uo = "[object GeneratorFunction]", go = "[object Proxy]";
function ho(e) {
  if (!T(e))
    return !1;
  var t = V(e);
  return t == mo || t == uo || t == po || t == go;
}
var A = O["__core-js_shared__"], $ = function() {
  var e = /[^.]+$/.exec(A && A.keys && A.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function fo(e) {
  return !!$ && $ in e;
}
var bo = Function.prototype, yo = bo.toString;
function So(e) {
  if (e != null) {
    try {
      return yo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var To = /[\\^$.*+?()[\]{}|]/g, xo = /^\[object .+?Constructor\]$/, Mo = Function.prototype, Ao = Object.prototype, Oo = Mo.toString, _o = Ao.hasOwnProperty, ko = RegExp(
  "^" + Oo.call(_o).replace(To, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Po(e) {
  if (!T(e) || fo(e))
    return !1;
  var t = ho(e) ? ko : xo;
  return t.test(So(e));
}
function vo(e, t) {
  return e == null ? void 0 : e[t];
}
function P(e, t) {
  var o = vo(e, t);
  return Po(o) ? o : void 0;
}
var D = function() {
  try {
    var e = P(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), wo = 9007199254740991, No = /^(?:0|[1-9]\d*)$/;
function Bo(e, t) {
  var o = typeof e;
  return t = t ?? wo, !!t && (o == "number" || o != "symbol" && No.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ro(e, t, o) {
  t == "__proto__" && D ? D(e, t, {
    configurable: !0,
    enumerable: !0,
    value: o,
    writable: !0
  }) : e[t] = o;
}
function L(e, t) {
  return e === t || e !== e && t !== t;
}
var $o = Object.prototype, Do = $o.hasOwnProperty;
function Eo(e, t, o) {
  var s = e[t];
  (!(Do.call(e, t) && L(s, o)) || o === void 0 && !(t in e)) && Ro(e, t, o);
}
var Co = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Vo = /^\w*$/;
function Io(e, t) {
  if (k(e))
    return !1;
  var o = typeof e;
  return o == "number" || o == "symbol" || o == "boolean" || e == null || _(e) ? !0 : Vo.test(e) || !Co.test(e) || t != null && e in Object(t);
}
var y = P(Object, "create");
function Lo() {
  this.__data__ = y ? y(null) : {}, this.size = 0;
}
function Wo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Go = "__lodash_hash_undefined__", Uo = Object.prototype, jo = Uo.hasOwnProperty;
function Fo(e) {
  var t = this.__data__;
  if (y) {
    var o = t[e];
    return o === Go ? void 0 : o;
  }
  return jo.call(t, e) ? t[e] : void 0;
}
var zo = Object.prototype, Ho = zo.hasOwnProperty;
function Xo(e) {
  var t = this.__data__;
  return y ? t[e] !== void 0 : Ho.call(t, e);
}
var qo = "__lodash_hash_undefined__";
function Yo(e, t) {
  var o = this.__data__;
  return this.size += this.has(e) ? 0 : 1, o[e] = y && t === void 0 ? qo : t, this;
}
function d(e) {
  var t = -1, o = e == null ? 0 : e.length;
  for (this.clear(); ++t < o; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
d.prototype.clear = Lo;
d.prototype.delete = Wo;
d.prototype.get = Fo;
d.prototype.has = Xo;
d.prototype.set = Yo;
function Zo() {
  this.__data__ = [], this.size = 0;
}
function x(e, t) {
  for (var o = e.length; o--; )
    if (L(e[o][0], t))
      return o;
  return -1;
}
var Jo = Array.prototype, Ko = Jo.splice;
function Qo(e) {
  var t = this.__data__, o = x(t, e);
  if (o < 0)
    return !1;
  var s = t.length - 1;
  return o == s ? t.pop() : Ko.call(t, o, 1), --this.size, !0;
}
function es(e) {
  var t = this.__data__, o = x(t, e);
  return o < 0 ? void 0 : t[o][1];
}
function ts(e) {
  return x(this.__data__, e) > -1;
}
function os(e, t) {
  var o = this.__data__, s = x(o, e);
  return s < 0 ? (++this.size, o.push([e, t])) : o[s][1] = t, this;
}
function f(e) {
  var t = -1, o = e == null ? 0 : e.length;
  for (this.clear(); ++t < o; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
f.prototype.clear = Zo;
f.prototype.delete = Qo;
f.prototype.get = es;
f.prototype.has = ts;
f.prototype.set = os;
var ss = P(O, "Map");
function rs() {
  this.size = 0, this.__data__ = {
    hash: new d(),
    map: new (ss || f)(),
    string: new d()
  };
}
function ns(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function M(e, t) {
  var o = e.__data__;
  return ns(t) ? o[typeof t == "string" ? "string" : "hash"] : o.map;
}
function as(e) {
  var t = M(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function cs(e) {
  return M(this, e).get(e);
}
function is(e) {
  return M(this, e).has(e);
}
function ls(e, t) {
  var o = M(this, e), s = o.size;
  return o.set(e, t), this.size += o.size == s ? 0 : 1, this;
}
function m(e) {
  var t = -1, o = e == null ? 0 : e.length;
  for (this.clear(); ++t < o; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
m.prototype.clear = rs;
m.prototype.delete = as;
m.prototype.get = cs;
m.prototype.has = is;
m.prototype.set = ls;
var ps = "Expected a function";
function v(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ps);
  var o = function() {
    var s = arguments, n = t ? t.apply(this, s) : s[0], a = o.cache;
    if (a.has(n))
      return a.get(n);
    var l = e.apply(this, s);
    return o.cache = a.set(n, l) || a, l;
  };
  return o.cache = new (v.Cache || m)(), o;
}
v.Cache = m;
var ds = 500;
function ms(e) {
  var t = v(e, function(s) {
    return o.size === ds && o.clear(), s;
  }), o = t.cache;
  return t;
}
var us = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gs = /\\(\\)?/g, hs = ms(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(us, function(o, s, n, a) {
    t.push(n ? a.replace(gs, "$1") : s || o);
  }), t;
});
function fs(e) {
  return e == null ? "" : I(e);
}
function bs(e, t) {
  return k(e) ? e : Io(e, t) ? [e] : hs(fs(e));
}
function ys(e) {
  if (typeof e == "string" || _(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ss(e, t, o, s) {
  if (!T(e))
    return e;
  t = bs(t, e);
  for (var n = -1, a = t.length, l = a - 1, p = e; p != null && ++n < a; ) {
    var u = ys(t[n]), S = o;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (n != l) {
      var w = p[u];
      S = void 0, S === void 0 && (S = T(w) ? w : Bo(t[n + 1]) ? [] : {});
    }
    Eo(p, u, S), p = p[u];
  }
  return e;
}
function Ts(e, t, o) {
  return e == null ? e : Ss(e, t, o);
}
class E {
  constructor(t = "NoName", o = "#000000", s = [], n = {}) {
    /**
     * ID of the tab
     * @property {string} id
     **/
    i(this, "id");
    /**
     * Tab's name
     * @property {string} name
     **/
    i(this, "name");
    /**
     * Tab's color
     * @property {string} color
     */
    i(this, "color");
    /**
     * A list of block(s) having in the tab
     * @property {list} blocks
     */
    i(this, "blocks");
    /**
     * Define tab's menu (side bar)
     * @property {string | string[]} menus
     */
    i(this, "menus");
    this.id = `${t.substring(0, 1).toLowerCase()}${t.substring(1)}`, this.name = t.match(/[A-Z][a-z]+/g).join(" "), this.color = o, this.blocks = s, this.menus = n;
    for (const a of this.blocks)
      Ts(
        this,
        a.opcode.toString(),
        async (l) => await a.run(l)
      );
  }
  /**
   * Return this tab's informations
   * @return {string} id
   * @return {string} name
   * @return {string} color
   * @return {list} blocks
   * @return {} menus
   */
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
const W = [];
for (const [e, t] of Object.entries(g.tabs)) {
  let o;
  "menus" in t ? o = new E(
    c.getMessage(e),
    t.color,
    t.blocks,
    t.menus
  ) : o = new E(
    c.getMessage(e),
    t.color,
    t.blocks
  ), W.push(o);
}
W.forEach((e) => Scratch.extensions.register(e));
