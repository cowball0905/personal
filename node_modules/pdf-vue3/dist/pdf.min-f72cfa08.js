var vr = Object.defineProperty;
var br = (k, d, t) => d in k ? vr(k, d, { enumerable: !0, configurable: !0, writable: !0, value: t }) : k[d] = t;
var It = (k, d, t) => (br(k, typeof d != "symbol" ? d + "" : d, t), t), ye = (k, d, t) => {
  if (!d.has(k))
    throw TypeError("Cannot " + t);
};
var T = (k, d, t) => (ye(k, d, "read from private field"), t ? t.call(k) : d.get(k)), et = (k, d, t) => {
  if (d.has(k))
    throw TypeError("Cannot add the same private member more than once");
  d instanceof WeakSet ? d.add(k) : d.set(k, t);
}, ut = (k, d, t, e) => (ye(k, d, "write to private field"), e ? e.call(k, t) : d.set(k, t), t), ue = (k, d, t, e) => ({
  set _(a) {
    ut(k, d, a, t);
  },
  get _() {
    return T(k, d, e);
  }
}), nt = (k, d, t) => (ye(k, d, "access private method"), t);
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(k) {
  return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k;
}
function getAugmentedNamespace(k) {
  if (k.__esModule)
    return k;
  var d = k.default;
  if (typeof d == "function") {
    var t = function e() {
      if (this instanceof e) {
        var a = [null];
        a.push.apply(a, arguments);
        var y = Function.bind.apply(d, a);
        return new y();
      }
      return d.apply(this, arguments);
    };
    t.prototype = d.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(k).forEach(function(e) {
    var a = Object.getOwnPropertyDescriptor(k, e);
    Object.defineProperty(t, e, a.get ? a : {
      enumerable: !0,
      get: function() {
        return k[e];
      }
    });
  }), t;
}
function commonjsRequire(k) {
  throw new Error('Could not dynamically require "' + k + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pdf_min$2 = { exports: {} };
const __viteBrowserExternal = {}, __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" })), require$$6 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var path2dPolyfill_min = {}, hasRequiredPath2dPolyfill_min;
function requirePath2dPolyfill_min() {
  return hasRequiredPath2dPolyfill_min || (hasRequiredPath2dPolyfill_min = 1, function() {
    function k(l, c, b) {
      if (b || arguments.length === 2)
        for (var L, m = 0, M = c.length; m < M; m++)
          !L && m in c || (L || (L = Array.prototype.slice.call(c, 0, m)), L[m] = c[m]);
      return l.concat(L || Array.prototype.slice.call(c));
    }
    var d = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 }, t = /([astvzqmhlc])([^astvzqmhlc]*)/gi, e = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
    function a(l) {
      var c = [], b = String(l).trim();
      return b[0] !== "M" && b[0] !== "m" || b.replace(t, function(L, m, M) {
        var x = function(i) {
          var A = i.match(e);
          return A ? A.map(Number) : [];
        }(M), I = m.toLowerCase(), v = m;
        if (I === "m" && x.length > 2 && (c.push(k([v], x.splice(0, 2), !0)), I = "l", v = v === "m" ? "l" : "L"), x.length < d[I])
          return "";
        for (c.push(k([v], x.splice(0, d[I]), !0)); x.length >= d[I] && x.length && d[I]; )
          c.push(k([v], x.splice(0, d[I]), !0));
        return "";
      }), c;
    }
    function y(l, c) {
      var b = l.x * Math.cos(c) - l.y * Math.sin(c), L = l.y * Math.cos(c) + l.x * Math.sin(c);
      l.x = b, l.y = L;
    }
    function w(l, c) {
      l.x *= c, l.y *= c;
    }
    var O = function() {
      function l(c) {
        var b;
        this.commands = [], c && c instanceof l ? (b = this.commands).push.apply(b, c.commands) : c && (this.commands = a(c));
      }
      return l.prototype.addPath = function(c) {
        var b;
        c && c instanceof l && (b = this.commands).push.apply(b, c.commands);
      }, l.prototype.moveTo = function(c, b) {
        this.commands.push(["M", c, b]);
      }, l.prototype.lineTo = function(c, b) {
        this.commands.push(["L", c, b]);
      }, l.prototype.arc = function(c, b, L, m, M, x) {
        this.commands.push(["AC", c, b, L, m, M, !!x]);
      }, l.prototype.arcTo = function(c, b, L, m, M) {
        this.commands.push(["AT", c, b, L, m, M]);
      }, l.prototype.ellipse = function(c, b, L, m, M, x, I, v) {
        this.commands.push(["E", c, b, L, m, M, x, I, !!v]);
      }, l.prototype.closePath = function() {
        this.commands.push(["Z"]);
      }, l.prototype.bezierCurveTo = function(c, b, L, m, M, x) {
        this.commands.push(["C", c, b, L, m, M, x]);
      }, l.prototype.quadraticCurveTo = function(c, b, L, m) {
        this.commands.push(["Q", c, b, L, m]);
      }, l.prototype.rect = function(c, b, L, m) {
        this.commands.push(["R", c, b, L, m]);
      }, l.prototype.roundRect = function(c, b, L, m, M) {
        M === void 0 ? this.commands.push(["RR", c, b, L, m, 0]) : this.commands.push(["RR", c, b, L, m, M]);
      }, l;
    }();
    function p(l, c) {
      var b, L, m, M, x, I, v, i, A, n, s, r, u, C, D, o, F, z, q, J, $, S, f, P, g = 0, _ = 0, U = null, N = null, G = null, V = null, W = null, X = null;
      l.beginPath();
      for (var K = 0; K < c.length; ++K) {
        (z = c[K][0]) !== "S" && z !== "s" && z !== "C" && z !== "c" && (U = null, N = null), z !== "T" && z !== "t" && z !== "Q" && z !== "q" && (G = null, V = null);
        var H = void 0;
        switch (z) {
          case "m":
          case "M":
            H = c[K], z === "m" ? (g += H[1], _ += H[2]) : (g = H[1], _ = H[2]), z !== "M" && W || (W = { x: g, y: _ }), l.moveTo(g, _);
            break;
          case "l":
            g += (H = c[K])[1], _ += H[2], l.lineTo(g, _);
            break;
          case "L":
            g = (H = c[K])[1], _ = H[2], l.lineTo(g, _);
            break;
          case "H":
            g = (H = c[K])[1], l.lineTo(g, _);
            break;
          case "h":
            g += (H = c[K])[1], l.lineTo(g, _);
            break;
          case "V":
            _ = (H = c[K])[1], l.lineTo(g, _);
            break;
          case "v":
            _ += (H = c[K])[1], l.lineTo(g, _);
            break;
          case "a":
          case "A":
            if (H = c[K], X === null)
              throw new Error("This should never happen");
            z === "a" ? (g += H[6], _ += H[7]) : (g = H[6], _ = H[7]), C = H[1], D = H[2], v = H[3] * Math.PI / 180, m = !!H[4], M = !!H[5], x = { x: g, y: _ }, y(I = { x: (X.x - x.x) / 2, y: (X.y - x.y) / 2 }, -v), (i = I.x * I.x / (C * C) + I.y * I.y / (D * D)) > 1 && (C *= i = Math.sqrt(i), D *= i), A = C * C * D * D, n = C * C * I.y * I.y + D * D * I.x * I.x, w(q = { x: C * I.y / D, y: -D * I.x / C }, M !== m ? Math.sqrt((A - n) / n) || 0 : -Math.sqrt((A - n) / n) || 0), L = Math.atan2((I.y - q.y) / D, (I.x - q.x) / C), b = Math.atan2(-(I.y + q.y) / D, -(I.x + q.x) / C), y(q, v), S = q, f = (x.x + X.x) / 2, P = (x.y + X.y) / 2, S.x += f, S.y += P, l.save(), l.translate(q.x, q.y), l.rotate(v), l.scale(C, D), l.arc(0, 0, 1, L, b, !M), l.restore();
            break;
          case "C":
            U = (H = c[K])[3], N = H[4], g = H[5], _ = H[6], l.bezierCurveTo(H[1], H[2], U, N, g, _);
            break;
          case "c":
            H = c[K], l.bezierCurveTo(H[1] + g, H[2] + _, H[3] + g, H[4] + _, H[5] + g, H[6] + _), U = H[3] + g, N = H[4] + _, g += H[5], _ += H[6];
            break;
          case "S":
            H = c[K], U !== null && N !== null || (U = g, N = _), l.bezierCurveTo(2 * g - U, 2 * _ - N, H[1], H[2], H[3], H[4]), U = H[1], N = H[2], g = H[3], _ = H[4];
            break;
          case "s":
            H = c[K], U !== null && N !== null || (U = g, N = _), l.bezierCurveTo(2 * g - U, 2 * _ - N, H[1] + g, H[2] + _, H[3] + g, H[4] + _), U = H[1] + g, N = H[2] + _, g += H[3], _ += H[4];
            break;
          case "Q":
            G = (H = c[K])[1], V = H[2], g = H[3], _ = H[4], l.quadraticCurveTo(G, V, g, _);
            break;
          case "q":
            G = (H = c[K])[1] + g, V = H[2] + _, g += H[3], _ += H[4], l.quadraticCurveTo(G, V, g, _);
            break;
          case "T":
            G !== null && V !== null || (G = g, V = _), G = 2 * g - G, V = 2 * _ - V, g = (H = c[K])[1], _ = H[2], l.quadraticCurveTo(G, V, g, _);
            break;
          case "t":
            G !== null && V !== null || (G = g, V = _), G = 2 * g - G, V = 2 * _ - V, g += (H = c[K])[1], _ += H[2], l.quadraticCurveTo(G, V, g, _);
            break;
          case "z":
          case "Z":
            W && (g = W.x, _ = W.y), W = null, l.closePath();
            break;
          case "AC":
            g = (H = c[K])[1], _ = H[2], u = H[3], L = H[4], b = H[5], J = H[6], l.arc(g, _, u, L, b, J);
            break;
          case "AT":
            s = (H = c[K])[1], r = H[2], g = H[3], _ = H[4], u = H[5], l.arcTo(s, r, g, _, u);
            break;
          case "E":
            g = (H = c[K])[1], _ = H[2], C = H[3], D = H[4], v = H[5], L = H[6], b = H[7], J = H[8], l.save(), l.translate(g, _), l.rotate(v), l.scale(C, D), l.arc(0, 0, 1, L, b, J), l.restore();
            break;
          case "R":
            g = (H = c[K])[1], _ = H[2], o = H[3], F = H[4], W = { x: g, y: _ }, l.rect(g, _, o, F);
            break;
          case "RR":
            g = (H = c[K])[1], _ = H[2], o = H[3], F = H[4], $ = H[5], W = { x: g, y: _ }, l.roundRect(g, _, o, F, $);
        }
        X ? (X.x = g, X.y = _) : X = { x: g, y: _ };
      }
    }
    function h(l, c, b, L, m) {
      var M = this;
      if (m === void 0 && (m = 0), typeof m == "number" && (m = [m]), Array.isArray(m)) {
        if (m.length === 0 || m.length > 4)
          throw new RangeError("Failed to execute 'roundRect' on '".concat(this.constructor.name, "': ").concat(m.length, " radii provided. Between one and four radii are necessary."));
        if (m.forEach(function(n) {
          if (n < 0)
            throw new RangeError("Failed to execute 'roundRect' on '".concat(M.constructor.name, "': Radius value ").concat(n, " is negative."));
        }), m.length === 1 && m[0] === 0)
          return this.rect(l, c, b, L);
        var x, I, v, i = Math.min(b, L) / 2, A = x = I = v = Math.min(i, m[0]);
        m.length === 2 && (x = v = Math.min(i, m[1])), m.length === 3 && (x = v = Math.min(i, m[1]), I = Math.min(i, m[2])), m.length === 4 && (x = Math.min(i, m[1]), I = Math.min(i, m[2]), v = Math.min(i, m[3])), this.moveTo(l, c + L - v), this.arcTo(l, c, l + A, c, A), this.arcTo(l + b, c, l + b, c + x, x), this.arcTo(l + b, c + L, l + b - I, c + L, I), this.arcTo(l, c + L, l, c + L - v, v), this.moveTo(l, c);
      }
    }
    (function(l) {
      if (l && l.CanvasRenderingContext2D && !l.Path2D) {
        var c = l.CanvasRenderingContext2D, b = c.prototype.fill, L = c.prototype.stroke, m = c.prototype.isPointInPath;
        c.prototype.fill = function() {
          for (var M = [], x = 0; x < arguments.length; x++)
            M[x] = arguments[x];
          if (!(M[0] instanceof O))
            return v = M[0] || "nonzero", b.apply(this, [v]);
          var I = M[0], v = M[1] || "nonzero";
          p(this, I.commands), b.apply(this, [v]);
        }, c.prototype.stroke = function(M) {
          M && p(this, M.commands), L.apply(this);
        }, c.prototype.isPointInPath = function() {
          for (var M = [], x = 0; x < arguments.length; x++)
            M[x] = arguments[x];
          if (M[0] instanceof O) {
            var I = M[0], v = M[1], i = M[2], A = M[3] || "nonzero";
            return p(this, I.commands), m.apply(this, [v, i, A]);
          }
          return m.apply(this, M);
        }, l.Path2D = O;
      }
    })(window), function(l) {
      if (l && l.CanvasRenderingContext2D) {
        var c = l.CanvasRenderingContext2D, b = l.Path2D;
        c && !c.prototype.roundRect && (c.prototype.roundRect = h), b && !b.prototype.roundRect && (b.prototype.roundRect = h);
      }
    }(window);
  }()), path2dPolyfill_min;
}
(function(module, exports) {
  (function(d, t) {
    module.exports = t();
  })(globalThis, () => (() => {
    var __webpack_modules__ = [, (k, d, t) => {
      var x, I;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.VerbosityLevel = d.Util = d.UnknownErrorException = d.UnexpectedResponseException = d.TextRenderingMode = d.RenderingIntentFlag = d.PromiseCapability = d.PermissionFlag = d.PasswordResponses = d.PasswordException = d.PageActionEventType = d.OPS = d.MissingPDFException = d.MAX_IMAGE_SIZE_TO_CACHE = d.LINE_FACTOR = d.LINE_DESCENT_FACTOR = d.InvalidPDFException = d.ImageKind = d.IDENTITY_MATRIX = d.FormatError = d.FeatureTest = d.FONT_IDENTITY_MATRIX = d.DocumentActionEventType = d.CMapCompressionType = d.BaseException = d.BASELINE_FACTOR = d.AnnotationType = d.AnnotationStateModelType = d.AnnotationReviewState = d.AnnotationReplyType = d.AnnotationMode = d.AnnotationMarkedState = d.AnnotationFlag = d.AnnotationFieldFlag = d.AnnotationEditorType = d.AnnotationEditorPrefix = d.AnnotationEditorParamsType = d.AnnotationBorderStyleType = d.AnnotationActionEventType = d.AbortException = void 0, d.assert = function(i, A) {
        i || w(A);
      }, d.bytesToString = function(i) {
        typeof i == "object" && (i == null ? void 0 : i.length) !== void 0 || w("Invalid argument for bytesToString");
        const A = i.length, n = 8192;
        if (A < n)
          return String.fromCharCode.apply(null, i);
        const s = [];
        for (let r = 0; r < A; r += n) {
          const u = Math.min(r + n, A), C = i.subarray(r, u);
          s.push(String.fromCharCode.apply(null, C));
        }
        return s.join("");
      }, d.createValidAbsoluteUrl = function(i) {
        let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (!i)
          return null;
        try {
          if (n && typeof i == "string") {
            if (n.addDefaultProtocol && i.startsWith("www.")) {
              const r = i.match(/\./g);
              (r == null ? void 0 : r.length) >= 2 && (i = `http://${i}`);
            }
            if (n.tryConvertEncoding)
              try {
                i = L(i);
              } catch {
              }
          }
          const s = A ? new URL(i, A) : new URL(i);
          if (function(u) {
            switch (u == null ? void 0 : u.protocol) {
              case "http:":
              case "https:":
              case "ftp:":
              case "mailto:":
              case "tel:":
                return !0;
              default:
                return !1;
            }
          }(s))
            return s;
        } catch {
        }
        return null;
      }, d.getModificationDate = function() {
        let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Date();
        return [i.getUTCFullYear().toString(), (i.getUTCMonth() + 1).toString().padStart(2, "0"), i.getUTCDate().toString().padStart(2, "0"), i.getUTCHours().toString().padStart(2, "0"), i.getUTCMinutes().toString().padStart(2, "0"), i.getUTCSeconds().toString().padStart(2, "0")].join("");
      }, d.getVerbosityLevel = function() {
        return a;
      }, d.info = function(i) {
        a >= e.INFOS && console.log(`Info: ${i}`);
      }, d.isArrayBuffer = function(i) {
        return typeof i == "object" && (i == null ? void 0 : i.byteLength) !== void 0;
      }, d.isArrayEqual = function(i, A) {
        if (i.length !== A.length)
          return !1;
        for (let n = 0, s = i.length; n < s; n++)
          if (i[n] !== A[n])
            return !1;
        return !0;
      }, d.normalizeUnicode = function(i) {
        return m || (m = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, M = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), i.replaceAll(m, (A, n, s) => n ? n.normalize("NFKC") : M.get(s));
      }, d.objectFromMap = function(i) {
        const A = /* @__PURE__ */ Object.create(null);
        for (const [n, s] of i)
          A[n] = s;
        return A;
      }, d.objectSize = function(i) {
        return Object.keys(i).length;
      }, d.setVerbosityLevel = function(i) {
        Number.isInteger(i) && (a = i);
      }, d.shadow = O, d.string32 = function(i) {
        return String.fromCharCode(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i);
      }, d.stringToBytes = h, d.stringToPDFString = function(i) {
        if (i[0] >= "ï") {
          let n;
          if (i[0] === "þ" && i[1] === "ÿ" ? n = "utf-16be" : i[0] === "ÿ" && i[1] === "þ" ? n = "utf-16le" : i[0] === "ï" && i[1] === "»" && i[2] === "¿" && (n = "utf-8"), n)
            try {
              const s = new TextDecoder(n, { fatal: !0 }), r = h(i);
              return s.decode(r);
            } catch (s) {
              y(`stringToPDFString: "${s}".`);
            }
        }
        const A = [];
        for (let n = 0, s = i.length; n < s; n++) {
          const r = b[i.charCodeAt(n)];
          A.push(r ? String.fromCharCode(r) : i.charAt(n));
        }
        return A.join("");
      }, d.stringToUTF8String = L, d.unreachable = w, d.utf8StringToString = function(i) {
        return unescape(encodeURIComponent(i));
      }, d.warn = y, globalThis._pdfjsCompatibilityChecked || (globalThis._pdfjsCompatibilityChecked = !0, t(2)), d.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0], d.FONT_IDENTITY_MATRIX = [1e-3, 0, 0, 1e-3, 0, 0], d.MAX_IMAGE_SIZE_TO_CACHE = 1e7, d.LINE_FACTOR = 1.35, d.LINE_DESCENT_FACTOR = 0.35, d.BASELINE_FACTOR = 0.25925925925925924, d.RenderingIntentFlag = { ANY: 1, DISPLAY: 2, PRINT: 4, SAVE: 8, ANNOTATIONS_FORMS: 16, ANNOTATIONS_STORAGE: 32, ANNOTATIONS_DISABLE: 64, OPLIST: 256 }, d.AnnotationMode = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 }, d.AnnotationEditorPrefix = "pdfjs_internal_editor_", d.AnnotationEditorType = { DISABLE: -1, NONE: 0, FREETEXT: 3, INK: 15 }, d.AnnotationEditorParamsType = { FREETEXT_SIZE: 1, FREETEXT_COLOR: 2, FREETEXT_OPACITY: 3, INK_COLOR: 11, INK_THICKNESS: 12, INK_OPACITY: 13 }, d.PermissionFlag = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 }, d.TextRenderingMode = { FILL: 0, STROKE: 1, FILL_STROKE: 2, INVISIBLE: 3, FILL_ADD_TO_PATH: 4, STROKE_ADD_TO_PATH: 5, FILL_STROKE_ADD_TO_PATH: 6, ADD_TO_PATH: 7, FILL_STROKE_MASK: 3, ADD_TO_PATH_FLAG: 4 }, d.ImageKind = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 }, d.AnnotationType = { TEXT: 1, LINK: 2, FREETEXT: 3, LINE: 4, SQUARE: 5, CIRCLE: 6, POLYGON: 7, POLYLINE: 8, HIGHLIGHT: 9, UNDERLINE: 10, SQUIGGLY: 11, STRIKEOUT: 12, STAMP: 13, CARET: 14, INK: 15, POPUP: 16, FILEATTACHMENT: 17, SOUND: 18, MOVIE: 19, WIDGET: 20, SCREEN: 21, PRINTERMARK: 22, TRAPNET: 23, WATERMARK: 24, THREED: 25, REDACT: 26 }, d.AnnotationStateModelType = { MARKED: "Marked", REVIEW: "Review" }, d.AnnotationMarkedState = { MARKED: "Marked", UNMARKED: "Unmarked" }, d.AnnotationReviewState = { ACCEPTED: "Accepted", REJECTED: "Rejected", CANCELLED: "Cancelled", COMPLETED: "Completed", NONE: "None" }, d.AnnotationReplyType = { GROUP: "Group", REPLY: "R" }, d.AnnotationFlag = { INVISIBLE: 1, HIDDEN: 2, PRINT: 4, NOZOOM: 8, NOROTATE: 16, NOVIEW: 32, READONLY: 64, LOCKED: 128, TOGGLENOVIEW: 256, LOCKEDCONTENTS: 512 }, d.AnnotationFieldFlag = { READONLY: 1, REQUIRED: 2, NOEXPORT: 4, MULTILINE: 4096, PASSWORD: 8192, NOTOGGLETOOFF: 16384, RADIO: 32768, PUSHBUTTON: 65536, COMBO: 131072, EDIT: 262144, SORT: 524288, FILESELECT: 1048576, MULTISELECT: 2097152, DONOTSPELLCHECK: 4194304, DONOTSCROLL: 8388608, COMB: 16777216, RICHTEXT: 33554432, RADIOSINUNISON: 33554432, COMMITONSELCHANGE: 67108864 }, d.AnnotationBorderStyleType = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 }, d.AnnotationActionEventType = { E: "Mouse Enter", X: "Mouse Exit", D: "Mouse Down", U: "Mouse Up", Fo: "Focus", Bl: "Blur", PO: "PageOpen", PC: "PageClose", PV: "PageVisible", PI: "PageInvisible", K: "Keystroke", F: "Format", V: "Validate", C: "Calculate" }, d.DocumentActionEventType = { WC: "WillClose", WS: "WillSave", DS: "DidSave", WP: "WillPrint", DP: "DidPrint" }, d.PageActionEventType = { O: "PageOpen", C: "PageClose" };
      const e = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
      d.VerbosityLevel = e, d.CMapCompressionType = { NONE: 0, BINARY: 1 }, d.OPS = { dependency: 1, setLineWidth: 2, setLineCap: 3, setLineJoin: 4, setMiterLimit: 5, setDash: 6, setRenderingIntent: 7, setFlatness: 8, setGState: 9, save: 10, restore: 11, transform: 12, moveTo: 13, lineTo: 14, curveTo: 15, curveTo2: 16, curveTo3: 17, closePath: 18, rectangle: 19, stroke: 20, closeStroke: 21, fill: 22, eoFill: 23, fillStroke: 24, eoFillStroke: 25, closeFillStroke: 26, closeEOFillStroke: 27, endPath: 28, clip: 29, eoClip: 30, beginText: 31, endText: 32, setCharSpacing: 33, setWordSpacing: 34, setHScale: 35, setLeading: 36, setFont: 37, setTextRenderingMode: 38, setTextRise: 39, moveText: 40, setLeadingMoveText: 41, setTextMatrix: 42, nextLine: 43, showText: 44, showSpacedText: 45, nextLineShowText: 46, nextLineSetSpacingShowText: 47, setCharWidth: 48, setCharWidthAndBounds: 49, setStrokeColorSpace: 50, setFillColorSpace: 51, setStrokeColor: 52, setStrokeColorN: 53, setFillColor: 54, setFillColorN: 55, setStrokeGray: 56, setFillGray: 57, setStrokeRGBColor: 58, setFillRGBColor: 59, setStrokeCMYKColor: 60, setFillCMYKColor: 61, shadingFill: 62, beginInlineImage: 63, beginImageData: 64, endInlineImage: 65, paintXObject: 66, markPoint: 67, markPointProps: 68, beginMarkedContent: 69, beginMarkedContentProps: 70, endMarkedContent: 71, beginCompat: 72, endCompat: 73, paintFormXObjectBegin: 74, paintFormXObjectEnd: 75, beginGroup: 76, endGroup: 77, beginAnnotation: 80, endAnnotation: 81, paintImageMaskXObject: 83, paintImageMaskXObjectGroup: 84, paintImageXObject: 85, paintInlineImageXObject: 86, paintInlineImageXObjectGroup: 87, paintImageXObjectRepeat: 88, paintImageMaskXObjectRepeat: 89, paintSolidColorImageMask: 90, constructPath: 91 }, d.PasswordResponses = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
      let a = e.WARNINGS;
      function y(v) {
        a >= e.WARNINGS && console.log(`Warning: ${v}`);
      }
      function w(v) {
        throw new Error(v);
      }
      function O(v, i, A) {
        let n = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
        return Object.defineProperty(v, i, { value: A, enumerable: !n, configurable: !0, writable: !1 }), A;
      }
      const p = function() {
        function i(A, n) {
          this.constructor === i && w("Cannot initialize BaseException."), this.message = A, this.name = n;
        }
        return i.prototype = new Error(), i.constructor = i, i;
      }();
      d.BaseException = p, d.PasswordException = class extends p {
        constructor(i, A) {
          super(i, "PasswordException"), this.code = A;
        }
      }, d.UnknownErrorException = class extends p {
        constructor(i, A) {
          super(i, "UnknownErrorException"), this.details = A;
        }
      }, d.InvalidPDFException = class extends p {
        constructor(i) {
          super(i, "InvalidPDFException");
        }
      }, d.MissingPDFException = class extends p {
        constructor(i) {
          super(i, "MissingPDFException");
        }
      }, d.UnexpectedResponseException = class extends p {
        constructor(i, A) {
          super(i, "UnexpectedResponseException"), this.status = A;
        }
      }, d.FormatError = class extends p {
        constructor(i) {
          super(i, "FormatError");
        }
      }, d.AbortException = class extends p {
        constructor(i) {
          super(i, "AbortException");
        }
      };
      function h(v) {
        typeof v != "string" && w("Invalid argument for stringToBytes");
        const i = v.length, A = new Uint8Array(i);
        for (let n = 0; n < i; ++n)
          A[n] = 255 & v.charCodeAt(n);
        return A;
      }
      d.FeatureTest = class {
        static get isLittleEndian() {
          return O(this, "isLittleEndian", function() {
            const A = new Uint8Array(4);
            return A[0] = 1, new Uint32Array(A.buffer, 0, 1)[0] === 1;
          }());
        }
        static get isEvalSupported() {
          return O(this, "isEvalSupported", function() {
            try {
              return new Function(""), !0;
            } catch {
              return !1;
            }
          }());
        }
        static get isOffscreenCanvasSupported() {
          return O(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
        }
        static get platform() {
          return typeof navigator > "u" ? O(this, "platform", { isWin: !1, isMac: !1 }) : O(this, "platform", { isWin: navigator.platform.includes("Win"), isMac: navigator.platform.includes("Mac") });
        }
      };
      const l = [...Array(256).keys()].map((v) => v.toString(16).padStart(2, "0"));
      class c {
        static makeHexColor(i, A, n) {
          return `#${l[i]}${l[A]}${l[n]}`;
        }
        static scaleMinMax(i, A) {
          let n;
          i[0] ? (i[0] < 0 && (n = A[0], A[0] = A[1], A[1] = n), A[0] *= i[0], A[1] *= i[0], i[3] < 0 && (n = A[2], A[2] = A[3], A[3] = n), A[2] *= i[3], A[3] *= i[3]) : (n = A[0], A[0] = A[2], A[2] = n, n = A[1], A[1] = A[3], A[3] = n, i[1] < 0 && (n = A[2], A[2] = A[3], A[3] = n), A[2] *= i[1], A[3] *= i[1], i[2] < 0 && (n = A[0], A[0] = A[1], A[1] = n), A[0] *= i[2], A[1] *= i[2]), A[0] += i[4], A[1] += i[4], A[2] += i[5], A[3] += i[5];
        }
        static transform(i, A) {
          return [i[0] * A[0] + i[2] * A[1], i[1] * A[0] + i[3] * A[1], i[0] * A[2] + i[2] * A[3], i[1] * A[2] + i[3] * A[3], i[0] * A[4] + i[2] * A[5] + i[4], i[1] * A[4] + i[3] * A[5] + i[5]];
        }
        static applyTransform(i, A) {
          return [i[0] * A[0] + i[1] * A[2] + A[4], i[0] * A[1] + i[1] * A[3] + A[5]];
        }
        static applyInverseTransform(i, A) {
          const n = A[0] * A[3] - A[1] * A[2];
          return [(i[0] * A[3] - i[1] * A[2] + A[2] * A[5] - A[4] * A[3]) / n, (-i[0] * A[1] + i[1] * A[0] + A[4] * A[1] - A[5] * A[0]) / n];
        }
        static getAxialAlignedBoundingBox(i, A) {
          const n = c.applyTransform(i, A), s = c.applyTransform(i.slice(2, 4), A), r = c.applyTransform([i[0], i[3]], A), u = c.applyTransform([i[2], i[1]], A);
          return [Math.min(n[0], s[0], r[0], u[0]), Math.min(n[1], s[1], r[1], u[1]), Math.max(n[0], s[0], r[0], u[0]), Math.max(n[1], s[1], r[1], u[1])];
        }
        static inverseTransform(i) {
          const A = i[0] * i[3] - i[1] * i[2];
          return [i[3] / A, -i[1] / A, -i[2] / A, i[0] / A, (i[2] * i[5] - i[4] * i[3]) / A, (i[4] * i[1] - i[5] * i[0]) / A];
        }
        static singularValueDecompose2dScale(i) {
          const A = [i[0], i[2], i[1], i[3]], n = i[0] * A[0] + i[1] * A[2], s = i[0] * A[1] + i[1] * A[3], r = i[2] * A[0] + i[3] * A[2], u = i[2] * A[1] + i[3] * A[3], C = (n + u) / 2, D = Math.sqrt((n + u) ** 2 - 4 * (n * u - r * s)) / 2, o = C + D || 1, F = C - D || 1;
          return [Math.sqrt(o), Math.sqrt(F)];
        }
        static normalizeRect(i) {
          const A = i.slice(0);
          return i[0] > i[2] && (A[0] = i[2], A[2] = i[0]), i[1] > i[3] && (A[1] = i[3], A[3] = i[1]), A;
        }
        static intersect(i, A) {
          const n = Math.max(Math.min(i[0], i[2]), Math.min(A[0], A[2])), s = Math.min(Math.max(i[0], i[2]), Math.max(A[0], A[2]));
          if (n > s)
            return null;
          const r = Math.max(Math.min(i[1], i[3]), Math.min(A[1], A[3])), u = Math.min(Math.max(i[1], i[3]), Math.max(A[1], A[3]));
          return r > u ? null : [n, r, s, u];
        }
        static bezierBoundingBox(i, A, n, s, r, u, C, D) {
          const o = [], F = [[], []];
          let z, q, J, $, S, f, P, g;
          for (let G = 0; G < 2; ++G)
            if (G === 0 ? (q = 6 * i - 12 * n + 6 * r, z = -3 * i + 9 * n - 9 * r + 3 * C, J = 3 * n - 3 * i) : (q = 6 * A - 12 * s + 6 * u, z = -3 * A + 9 * s - 9 * u + 3 * D, J = 3 * s - 3 * A), Math.abs(z) < 1e-12) {
              if (Math.abs(q) < 1e-12)
                continue;
              $ = -J / q, 0 < $ && $ < 1 && o.push($);
            } else
              P = q * q - 4 * J * z, g = Math.sqrt(P), P < 0 || (S = (-q + g) / (2 * z), 0 < S && S < 1 && o.push(S), f = (-q - g) / (2 * z), 0 < f && f < 1 && o.push(f));
          let _, U = o.length;
          const N = U;
          for (; U--; )
            $ = o[U], _ = 1 - $, F[0][U] = _ * _ * _ * i + 3 * _ * _ * $ * n + 3 * _ * $ * $ * r + $ * $ * $ * C, F[1][U] = _ * _ * _ * A + 3 * _ * _ * $ * s + 3 * _ * $ * $ * u + $ * $ * $ * D;
          return F[0][N] = i, F[1][N] = A, F[0][N + 1] = C, F[1][N + 1] = D, F[0].length = F[1].length = N + 2, [Math.min(...F[0]), Math.min(...F[1]), Math.max(...F[0]), Math.max(...F[1])];
        }
      }
      d.Util = c;
      const b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
      function L(v) {
        return decodeURIComponent(escape(v));
      }
      d.PromiseCapability = (I = class {
        constructor() {
          et(this, x, !1);
          this.promise = new Promise((i, A) => {
            this.resolve = (n) => {
              ut(this, x, !0), i(n);
            }, this.reject = (n) => {
              ut(this, x, !0), A(n);
            };
          });
        }
        get settled() {
          return T(this, x);
        }
      }, x = new WeakMap(), I);
      let m = null, M = null;
    }, (k, d, t) => {
      var e = t(3);
      (function() {
        !globalThis.DOMMatrix && e.isNodeJS && (globalThis.DOMMatrix = require$$6.DOMMatrix);
      })(), function() {
        if (globalThis.Path2D || !e.isNodeJS)
          return;
        const { CanvasRenderingContext2D: y } = require$$6, { polyfillPath2D: w } = requirePath2dPolyfill_min();
        globalThis.CanvasRenderingContext2D = y, w(globalThis);
      }(), function() {
        Array.prototype.at || t(4);
      }(), function() {
        Uint8Array.prototype.at || t(78);
      }(), function() {
        globalThis.structuredClone || t(90);
      }();
    }, (k, d) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.isNodeJS = void 0;
      const t = !(typeof process != "object" || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && process.type !== "browser");
      d.isNodeJS = t;
    }, (k, d, t) => {
      t(5);
      var e = t(77);
      k.exports = e("Array", "at");
    }, (k, d, t) => {
      var e = t(6), a = t(43), y = t(67), w = t(65), O = t(72);
      e({ target: "Array", proto: !0 }, { at: function(h) {
        var l = a(this), c = y(l), b = w(h), L = b >= 0 ? b : c + b;
        return L < 0 || L >= c ? void 0 : l[L];
      } }), O("at");
    }, (k, d, t) => {
      var e = t(7), a = t(8).f, y = t(47), w = t(51), O = t(41), p = t(59), h = t(71);
      k.exports = function(l, c) {
        var b, L, m, M, x, I = l.target, v = l.global, i = l.stat;
        if (b = v ? e : i ? e[I] || O(I, {}) : (e[I] || {}).prototype)
          for (L in c) {
            if (M = c[L], m = l.dontCallGetSet ? (x = a(b, L)) && x.value : b[L], !h(v ? L : I + (i ? "." : "#") + L, l.forced) && m !== void 0) {
              if (typeof M == typeof m)
                continue;
              p(M, m);
            }
            (l.sham || m && m.sham) && y(M, "sham", !0), w(b, L, M, l);
          }
      };
    }, function(k) {
      var d = function(t) {
        return t && t.Math == Math && t;
      };
      k.exports = d(typeof globalThis == "object" && globalThis) || d(typeof window == "object" && window) || d(typeof self == "object" && self) || d(typeof commonjsGlobal == "object" && commonjsGlobal) || function() {
        return this;
      }() || this || Function("return this")();
    }, (k, d, t) => {
      var e = t(9), a = t(11), y = t(13), w = t(14), O = t(15), p = t(21), h = t(42), l = t(45), c = Object.getOwnPropertyDescriptor;
      d.f = e ? c : function(L, m) {
        if (L = O(L), m = p(m), l)
          try {
            return c(L, m);
          } catch {
          }
        if (h(L, m))
          return w(!a(y.f, L, m), L[m]);
      };
    }, (k, d, t) => {
      var e = t(10);
      k.exports = !e(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }, (k) => {
      k.exports = function(d) {
        try {
          return !!d();
        } catch {
          return !0;
        }
      };
    }, (k, d, t) => {
      var e = t(12), a = Function.prototype.call;
      k.exports = e ? a.bind(a) : function() {
        return a.apply(a, arguments);
      };
    }, (k, d, t) => {
      var e = t(10);
      k.exports = !e(function() {
        var a = function() {
        }.bind();
        return typeof a != "function" || a.hasOwnProperty("prototype");
      });
    }, (k, d) => {
      var t = {}.propertyIsEnumerable, e = Object.getOwnPropertyDescriptor, a = e && !t.call({ 1: 2 }, 1);
      d.f = a ? function(w) {
        var O = e(this, w);
        return !!O && O.enumerable;
      } : t;
    }, (k) => {
      k.exports = function(d, t) {
        return { enumerable: !(1 & d), configurable: !(2 & d), writable: !(4 & d), value: t };
      };
    }, (k, d, t) => {
      var e = t(16), a = t(19);
      k.exports = function(y) {
        return e(a(y));
      };
    }, (k, d, t) => {
      var e = t(17), a = t(10), y = t(18), w = Object, O = e("".split);
      k.exports = a(function() {
        return !w("z").propertyIsEnumerable(0);
      }) ? function(p) {
        return y(p) == "String" ? O(p, "") : w(p);
      } : w;
    }, (k, d, t) => {
      var e = t(12), a = Function.prototype, y = a.call, w = e && a.bind.bind(y, y);
      k.exports = e ? w : function(O) {
        return function() {
          return y.apply(O, arguments);
        };
      };
    }, (k, d, t) => {
      var e = t(17), a = e({}.toString), y = e("".slice);
      k.exports = function(w) {
        return y(a(w), 8, -1);
      };
    }, (k, d, t) => {
      var e = t(20), a = TypeError;
      k.exports = function(y) {
        if (e(y))
          throw a("Can't call method on " + y);
        return y;
      };
    }, (k) => {
      k.exports = function(d) {
        return d == null;
      };
    }, (k, d, t) => {
      var e = t(22), a = t(26);
      k.exports = function(y) {
        var w = e(y, "string");
        return a(w) ? w : w + "";
      };
    }, (k, d, t) => {
      var e = t(11), a = t(23), y = t(26), w = t(33), O = t(36), p = t(37), h = TypeError, l = p("toPrimitive");
      k.exports = function(c, b) {
        if (!a(c) || y(c))
          return c;
        var L, m = w(c, l);
        if (m) {
          if (b === void 0 && (b = "default"), L = e(m, c, b), !a(L) || y(L))
            return L;
          throw h("Can't convert object to primitive value");
        }
        return b === void 0 && (b = "number"), O(c, b);
      };
    }, (k, d, t) => {
      var e = t(24), a = t(25), y = a.all;
      k.exports = a.IS_HTMLDDA ? function(w) {
        return typeof w == "object" ? w !== null : e(w) || w === y;
      } : function(w) {
        return typeof w == "object" ? w !== null : e(w);
      };
    }, (k, d, t) => {
      var e = t(25), a = e.all;
      k.exports = e.IS_HTMLDDA ? function(y) {
        return typeof y == "function" || y === a;
      } : function(y) {
        return typeof y == "function";
      };
    }, (k) => {
      var d = typeof document == "object" && document.all, t = d === void 0 && d !== void 0;
      k.exports = { all: d, IS_HTMLDDA: t };
    }, (k, d, t) => {
      var e = t(27), a = t(24), y = t(28), w = t(29), O = Object;
      k.exports = w ? function(p) {
        return typeof p == "symbol";
      } : function(p) {
        var h = e("Symbol");
        return a(h) && y(h.prototype, O(p));
      };
    }, (k, d, t) => {
      var e = t(7), a = t(24);
      k.exports = function(y, w) {
        return arguments.length < 2 ? (O = e[y], a(O) ? O : void 0) : e[y] && e[y][w];
        var O;
      };
    }, (k, d, t) => {
      var e = t(17);
      k.exports = e({}.isPrototypeOf);
    }, (k, d, t) => {
      var e = t(30);
      k.exports = e && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }, (k, d, t) => {
      var e = t(31), a = t(10), y = t(7).String;
      k.exports = !!Object.getOwnPropertySymbols && !a(function() {
        var w = Symbol();
        return !y(w) || !(Object(w) instanceof Symbol) || !Symbol.sham && e && e < 41;
      });
    }, (k, d, t) => {
      var e, a, y = t(7), w = t(32), O = y.process, p = y.Deno, h = O && O.versions || p && p.version, l = h && h.v8;
      l && (a = (e = l.split("."))[0] > 0 && e[0] < 4 ? 1 : +(e[0] + e[1])), !a && w && (!(e = w.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = w.match(/Chrome\/(\d+)/)) && (a = +e[1]), k.exports = a;
    }, (k) => {
      k.exports = typeof navigator < "u" && String(navigator.userAgent) || "";
    }, (k, d, t) => {
      var e = t(34), a = t(20);
      k.exports = function(y, w) {
        var O = y[w];
        return a(O) ? void 0 : e(O);
      };
    }, (k, d, t) => {
      var e = t(24), a = t(35), y = TypeError;
      k.exports = function(w) {
        if (e(w))
          return w;
        throw y(a(w) + " is not a function");
      };
    }, (k) => {
      var d = String;
      k.exports = function(t) {
        try {
          return d(t);
        } catch {
          return "Object";
        }
      };
    }, (k, d, t) => {
      var e = t(11), a = t(24), y = t(23), w = TypeError;
      k.exports = function(O, p) {
        var h, l;
        if (p === "string" && a(h = O.toString) && !y(l = e(h, O)) || a(h = O.valueOf) && !y(l = e(h, O)) || p !== "string" && a(h = O.toString) && !y(l = e(h, O)))
          return l;
        throw w("Can't convert object to primitive value");
      };
    }, (k, d, t) => {
      var e = t(7), a = t(38), y = t(42), w = t(44), O = t(30), p = t(29), h = e.Symbol, l = a("wks"), c = p ? h.for || h : h && h.withoutSetter || w;
      k.exports = function(b) {
        return y(l, b) || (l[b] = O && y(h, b) ? h[b] : c("Symbol." + b)), l[b];
      };
    }, (k, d, t) => {
      var e = t(39), a = t(40);
      (k.exports = function(y, w) {
        return a[y] || (a[y] = w !== void 0 ? w : {});
      })("versions", []).push({ version: "3.30.2", mode: e ? "pure" : "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE", source: "https://github.com/zloirock/core-js" });
    }, (k) => {
      k.exports = !1;
    }, (k, d, t) => {
      var e = t(7), a = t(41), y = "__core-js_shared__", w = e[y] || a(y, {});
      k.exports = w;
    }, (k, d, t) => {
      var e = t(7), a = Object.defineProperty;
      k.exports = function(y, w) {
        try {
          a(e, y, { value: w, configurable: !0, writable: !0 });
        } catch {
          e[y] = w;
        }
        return w;
      };
    }, (k, d, t) => {
      var e = t(17), a = t(43), y = e({}.hasOwnProperty);
      k.exports = Object.hasOwn || function(O, p) {
        return y(a(O), p);
      };
    }, (k, d, t) => {
      var e = t(19), a = Object;
      k.exports = function(y) {
        return a(e(y));
      };
    }, (k, d, t) => {
      var e = t(17), a = 0, y = Math.random(), w = e(1 .toString);
      k.exports = function(O) {
        return "Symbol(" + (O === void 0 ? "" : O) + ")_" + w(++a + y, 36);
      };
    }, (k, d, t) => {
      var e = t(9), a = t(10), y = t(46);
      k.exports = !e && !a(function() {
        return Object.defineProperty(y("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, (k, d, t) => {
      var e = t(7), a = t(23), y = e.document, w = a(y) && a(y.createElement);
      k.exports = function(O) {
        return w ? y.createElement(O) : {};
      };
    }, (k, d, t) => {
      var e = t(9), a = t(48), y = t(14);
      k.exports = e ? function(w, O, p) {
        return a.f(w, O, y(1, p));
      } : function(w, O, p) {
        return w[O] = p, w;
      };
    }, (k, d, t) => {
      var e = t(9), a = t(45), y = t(49), w = t(50), O = t(21), p = TypeError, h = Object.defineProperty, l = Object.getOwnPropertyDescriptor, c = "enumerable", b = "configurable", L = "writable";
      d.f = e ? y ? function(M, x, I) {
        if (w(M), x = O(x), w(I), typeof M == "function" && x === "prototype" && "value" in I && L in I && !I[L]) {
          var v = l(M, x);
          v && v[L] && (M[x] = I.value, I = { configurable: b in I ? I[b] : v[b], enumerable: c in I ? I[c] : v[c], writable: !1 });
        }
        return h(M, x, I);
      } : h : function(M, x, I) {
        if (w(M), x = O(x), w(I), a)
          try {
            return h(M, x, I);
          } catch {
          }
        if ("get" in I || "set" in I)
          throw p("Accessors not supported");
        return "value" in I && (M[x] = I.value), M;
      };
    }, (k, d, t) => {
      var e = t(9), a = t(10);
      k.exports = e && a(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: !1 }).prototype != 42;
      });
    }, (k, d, t) => {
      var e = t(23), a = String, y = TypeError;
      k.exports = function(w) {
        if (e(w))
          return w;
        throw y(a(w) + " is not an object");
      };
    }, (k, d, t) => {
      var e = t(24), a = t(48), y = t(52), w = t(41);
      k.exports = function(O, p, h, l) {
        l || (l = {});
        var c = l.enumerable, b = l.name !== void 0 ? l.name : p;
        if (e(h) && y(h, b, l), l.global)
          c ? O[p] = h : w(p, h);
        else {
          try {
            l.unsafe ? O[p] && (c = !0) : delete O[p];
          } catch {
          }
          c ? O[p] = h : a.f(O, p, { value: h, enumerable: !1, configurable: !l.nonConfigurable, writable: !l.nonWritable });
        }
        return O;
      };
    }, (k, d, t) => {
      var e = t(17), a = t(10), y = t(24), w = t(42), O = t(9), p = t(53).CONFIGURABLE, h = t(54), l = t(55), c = l.enforce, b = l.get, L = String, m = Object.defineProperty, M = e("".slice), x = e("".replace), I = e([].join), v = O && !a(function() {
        return m(function() {
        }, "length", { value: 8 }).length !== 8;
      }), i = String(String).split("String"), A = k.exports = function(n, s, r) {
        M(L(s), 0, 7) === "Symbol(" && (s = "[" + x(L(s), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (s = "get " + s), r && r.setter && (s = "set " + s), (!w(n, "name") || p && n.name !== s) && (O ? m(n, "name", { value: s, configurable: !0 }) : n.name = s), v && r && w(r, "arity") && n.length !== r.arity && m(n, "length", { value: r.arity });
        try {
          r && w(r, "constructor") && r.constructor ? O && m(n, "prototype", { writable: !1 }) : n.prototype && (n.prototype = void 0);
        } catch {
        }
        var u = c(n);
        return w(u, "source") || (u.source = I(i, typeof s == "string" ? s : "")), n;
      };
      Function.prototype.toString = A(function() {
        return y(this) && b(this).source || h(this);
      }, "toString");
    }, (k, d, t) => {
      var e = t(9), a = t(42), y = Function.prototype, w = e && Object.getOwnPropertyDescriptor, O = a(y, "name"), p = O && function() {
      }.name === "something", h = O && (!e || e && w(y, "name").configurable);
      k.exports = { EXISTS: O, PROPER: p, CONFIGURABLE: h };
    }, (k, d, t) => {
      var e = t(17), a = t(24), y = t(40), w = e(Function.toString);
      a(y.inspectSource) || (y.inspectSource = function(O) {
        return w(O);
      }), k.exports = y.inspectSource;
    }, (k, d, t) => {
      var e, a, y, w = t(56), O = t(7), p = t(23), h = t(47), l = t(42), c = t(40), b = t(57), L = t(58), m = "Object already initialized", M = O.TypeError, x = O.WeakMap;
      if (w || c.state) {
        var I = c.state || (c.state = new x());
        I.get = I.get, I.has = I.has, I.set = I.set, e = function(i, A) {
          if (I.has(i))
            throw M(m);
          return A.facade = i, I.set(i, A), A;
        }, a = function(i) {
          return I.get(i) || {};
        }, y = function(i) {
          return I.has(i);
        };
      } else {
        var v = b("state");
        L[v] = !0, e = function(i, A) {
          if (l(i, v))
            throw M(m);
          return A.facade = i, h(i, v, A), A;
        }, a = function(i) {
          return l(i, v) ? i[v] : {};
        }, y = function(i) {
          return l(i, v);
        };
      }
      k.exports = { set: e, get: a, has: y, enforce: function(i) {
        return y(i) ? a(i) : e(i, {});
      }, getterFor: function(i) {
        return function(A) {
          var n;
          if (!p(A) || (n = a(A)).type !== i)
            throw M("Incompatible receiver, " + i + " required");
          return n;
        };
      } };
    }, (k, d, t) => {
      var e = t(7), a = t(24), y = e.WeakMap;
      k.exports = a(y) && /native code/.test(String(y));
    }, (k, d, t) => {
      var e = t(38), a = t(44), y = e("keys");
      k.exports = function(w) {
        return y[w] || (y[w] = a(w));
      };
    }, (k) => {
      k.exports = {};
    }, (k, d, t) => {
      var e = t(42), a = t(60), y = t(8), w = t(48);
      k.exports = function(O, p, h) {
        for (var l = a(p), c = w.f, b = y.f, L = 0; L < l.length; L++) {
          var m = l[L];
          e(O, m) || h && e(h, m) || c(O, m, b(p, m));
        }
      };
    }, (k, d, t) => {
      var e = t(27), a = t(17), y = t(61), w = t(70), O = t(50), p = a([].concat);
      k.exports = e("Reflect", "ownKeys") || function(l) {
        var c = y.f(O(l)), b = w.f;
        return b ? p(c, b(l)) : c;
      };
    }, (k, d, t) => {
      var e = t(62), a = t(69).concat("length", "prototype");
      d.f = Object.getOwnPropertyNames || function(w) {
        return e(w, a);
      };
    }, (k, d, t) => {
      var e = t(17), a = t(42), y = t(15), w = t(63).indexOf, O = t(58), p = e([].push);
      k.exports = function(h, l) {
        var c, b = y(h), L = 0, m = [];
        for (c in b)
          !a(O, c) && a(b, c) && p(m, c);
        for (; l.length > L; )
          a(b, c = l[L++]) && (~w(m, c) || p(m, c));
        return m;
      };
    }, (k, d, t) => {
      var e = t(15), a = t(64), y = t(67), w = function(O) {
        return function(p, h, l) {
          var c, b = e(p), L = y(b), m = a(l, L);
          if (O && h != h) {
            for (; L > m; )
              if ((c = b[m++]) != c)
                return !0;
          } else
            for (; L > m; m++)
              if ((O || m in b) && b[m] === h)
                return O || m || 0;
          return !O && -1;
        };
      };
      k.exports = { includes: w(!0), indexOf: w(!1) };
    }, (k, d, t) => {
      var e = t(65), a = Math.max, y = Math.min;
      k.exports = function(w, O) {
        var p = e(w);
        return p < 0 ? a(p + O, 0) : y(p, O);
      };
    }, (k, d, t) => {
      var e = t(66);
      k.exports = function(a) {
        var y = +a;
        return y != y || y === 0 ? 0 : e(y);
      };
    }, (k) => {
      var d = Math.ceil, t = Math.floor;
      k.exports = Math.trunc || function(a) {
        var y = +a;
        return (y > 0 ? t : d)(y);
      };
    }, (k, d, t) => {
      var e = t(68);
      k.exports = function(a) {
        return e(a.length);
      };
    }, (k, d, t) => {
      var e = t(65), a = Math.min;
      k.exports = function(y) {
        return y > 0 ? a(e(y), 9007199254740991) : 0;
      };
    }, (k) => {
      k.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }, (k, d) => {
      d.f = Object.getOwnPropertySymbols;
    }, (k, d, t) => {
      var e = t(10), a = t(24), y = /#|\.prototype\./, w = function(c, b) {
        var L = p[O(c)];
        return L == l || L != h && (a(b) ? e(b) : !!b);
      }, O = w.normalize = function(c) {
        return String(c).replace(y, ".").toLowerCase();
      }, p = w.data = {}, h = w.NATIVE = "N", l = w.POLYFILL = "P";
      k.exports = w;
    }, (k, d, t) => {
      var e = t(37), a = t(73), y = t(48).f, w = e("unscopables"), O = Array.prototype;
      O[w] == null && y(O, w, { configurable: !0, value: a(null) }), k.exports = function(p) {
        O[w][p] = !0;
      };
    }, (k, d, t) => {
      var e, a = t(50), y = t(74), w = t(69), O = t(58), p = t(76), h = t(46), l = t(57), c = "prototype", b = "script", L = l("IE_PROTO"), m = function() {
      }, M = function(v) {
        return "<" + b + ">" + v + "</" + b + ">";
      }, x = function(v) {
        v.write(M("")), v.close();
        var i = v.parentWindow.Object;
        return v = null, i;
      }, I = function() {
        try {
          e = new ActiveXObject("htmlfile");
        } catch {
        }
        I = typeof document < "u" ? document.domain && e ? x(e) : function() {
          var i, A = h("iframe"), n = "java" + b + ":";
          return A.style.display = "none", p.appendChild(A), A.src = String(n), (i = A.contentWindow.document).open(), i.write(M("document.F=Object")), i.close(), i.F;
        }() : x(e);
        for (var v = w.length; v--; )
          delete I[c][w[v]];
        return I();
      };
      O[L] = !0, k.exports = Object.create || function(i, A) {
        var n;
        return i !== null ? (m[c] = a(i), n = new m(), m[c] = null, n[L] = i) : n = I(), A === void 0 ? n : y.f(n, A);
      };
    }, (k, d, t) => {
      var e = t(9), a = t(49), y = t(48), w = t(50), O = t(15), p = t(75);
      d.f = e && !a ? Object.defineProperties : function(l, c) {
        w(l);
        for (var b, L = O(c), m = p(c), M = m.length, x = 0; M > x; )
          y.f(l, b = m[x++], L[b]);
        return l;
      };
    }, (k, d, t) => {
      var e = t(62), a = t(69);
      k.exports = Object.keys || function(w) {
        return e(w, a);
      };
    }, (k, d, t) => {
      var e = t(27);
      k.exports = e("document", "documentElement");
    }, (k, d, t) => {
      var e = t(7), a = t(17);
      k.exports = function(y, w) {
        return a(e[y].prototype[w]);
      };
    }, (k, d, t) => {
      t(79);
    }, (k, d, t) => {
      var e = t(80), a = t(67), y = t(65), w = e.aTypedArray;
      (0, e.exportTypedArrayMethod)("at", function(p) {
        var h = w(this), l = a(h), c = y(p), b = c >= 0 ? c : l + c;
        return b < 0 || b >= l ? void 0 : h[b];
      });
    }, (k, d, t) => {
      var e, a, y, w = t(81), O = t(9), p = t(7), h = t(24), l = t(23), c = t(42), b = t(82), L = t(35), m = t(47), M = t(51), x = t(84), I = t(28), v = t(85), i = t(87), A = t(37), n = t(44), s = t(55), r = s.enforce, u = s.get, C = p.Int8Array, D = C && C.prototype, o = p.Uint8ClampedArray, F = o && o.prototype, z = C && v(C), q = D && v(D), J = Object.prototype, $ = p.TypeError, S = A("toStringTag"), f = n("TYPED_ARRAY_TAG"), P = "TypedArrayConstructor", g = w && !!i && b(p.opera) !== "Opera", _ = !1, U = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, N = { BigInt64Array: 8, BigUint64Array: 8 }, G = function(W) {
        var X = v(W);
        if (l(X)) {
          var K = u(X);
          return K && c(K, P) ? K[P] : G(X);
        }
      }, V = function(W) {
        if (!l(W))
          return !1;
        var X = b(W);
        return c(U, X) || c(N, X);
      };
      for (e in U)
        (y = (a = p[e]) && a.prototype) ? r(y)[P] = a : g = !1;
      for (e in N)
        (y = (a = p[e]) && a.prototype) && (r(y)[P] = a);
      if ((!g || !h(z) || z === Function.prototype) && (z = function() {
        throw $("Incorrect invocation");
      }, g))
        for (e in U)
          p[e] && i(p[e], z);
      if ((!g || !q || q === J) && (q = z.prototype, g))
        for (e in U)
          p[e] && i(p[e].prototype, q);
      if (g && v(F) !== q && i(F, q), O && !c(q, S)) {
        _ = !0, x(q, S, { configurable: !0, get: function() {
          return l(this) ? this[f] : void 0;
        } });
        for (e in U)
          p[e] && m(p[e], f, e);
      }
      k.exports = { NATIVE_ARRAY_BUFFER_VIEWS: g, TYPED_ARRAY_TAG: _ && f, aTypedArray: function(W) {
        if (V(W))
          return W;
        throw $("Target is not a typed array");
      }, aTypedArrayConstructor: function(W) {
        if (h(W) && (!i || I(z, W)))
          return W;
        throw $(L(W) + " is not a typed array constructor");
      }, exportTypedArrayMethod: function(W, X, K, H) {
        if (O) {
          if (K)
            for (var Z in U) {
              var dt = p[Z];
              if (dt && c(dt.prototype, W))
                try {
                  delete dt.prototype[W];
                } catch {
                  try {
                    dt.prototype[W] = X;
                  } catch {
                  }
                }
            }
          q[W] && !K || M(q, W, K ? X : g && D[W] || X, H);
        }
      }, exportTypedArrayStaticMethod: function(W, X, K) {
        var H, Z;
        if (O) {
          if (i) {
            if (K) {
              for (H in U)
                if ((Z = p[H]) && c(Z, W))
                  try {
                    delete Z[W];
                  } catch {
                  }
            }
            if (z[W] && !K)
              return;
            try {
              return M(z, W, K ? X : g && z[W] || X);
            } catch {
            }
          }
          for (H in U)
            !(Z = p[H]) || Z[W] && !K || M(Z, W, X);
        }
      }, getTypedArrayConstructor: G, isView: function(X) {
        if (!l(X))
          return !1;
        var K = b(X);
        return K === "DataView" || c(U, K) || c(N, K);
      }, isTypedArray: V, TypedArray: z, TypedArrayPrototype: q };
    }, (k) => {
      k.exports = typeof ArrayBuffer < "u" && typeof DataView < "u";
    }, (k, d, t) => {
      var e = t(83), a = t(24), y = t(18), w = t(37)("toStringTag"), O = Object, p = y(function() {
        return arguments;
      }()) == "Arguments";
      k.exports = e ? y : function(h) {
        var l, c, b;
        return h === void 0 ? "Undefined" : h === null ? "Null" : typeof (c = function(L, m) {
          try {
            return L[m];
          } catch {
          }
        }(l = O(h), w)) == "string" ? c : p ? y(l) : (b = y(l)) == "Object" && a(l.callee) ? "Arguments" : b;
      };
    }, (k, d, t) => {
      var e = {};
      e[t(37)("toStringTag")] = "z", k.exports = String(e) === "[object z]";
    }, (k, d, t) => {
      var e = t(52), a = t(48);
      k.exports = function(y, w, O) {
        return O.get && e(O.get, w, { getter: !0 }), O.set && e(O.set, w, { setter: !0 }), a.f(y, w, O);
      };
    }, (k, d, t) => {
      var e = t(42), a = t(24), y = t(43), w = t(57), O = t(86), p = w("IE_PROTO"), h = Object, l = h.prototype;
      k.exports = O ? h.getPrototypeOf : function(c) {
        var b = y(c);
        if (e(b, p))
          return b[p];
        var L = b.constructor;
        return a(L) && b instanceof L ? L.prototype : b instanceof h ? l : null;
      };
    }, (k, d, t) => {
      var e = t(10);
      k.exports = !e(function() {
        function a() {
        }
        return a.prototype.constructor = null, Object.getPrototypeOf(new a()) !== a.prototype;
      });
    }, (k, d, t) => {
      var e = t(88), a = t(50), y = t(89);
      k.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var w, O = !1, p = {};
        try {
          (w = e(Object.prototype, "__proto__", "set"))(p, []), O = p instanceof Array;
        } catch {
        }
        return function(l, c) {
          return a(l), y(c), O ? w(l, c) : l.__proto__ = c, l;
        };
      }() : void 0);
    }, (k, d, t) => {
      var e = t(17), a = t(34);
      k.exports = function(y, w, O) {
        try {
          return e(a(Object.getOwnPropertyDescriptor(y, w)[O]));
        } catch {
        }
      };
    }, (k, d, t) => {
      var e = t(24), a = String, y = TypeError;
      k.exports = function(w) {
        if (typeof w == "object" || e(w))
          return w;
        throw y("Can't set " + a(w) + " as a prototype");
      };
    }, (k, d, t) => {
      t(91), t(98), t(100), t(123), t(125);
      var e = t(137);
      k.exports = e.structuredClone;
    }, (k, d, t) => {
      var e = t(15), a = t(72), y = t(92), w = t(55), O = t(48).f, p = t(93), h = t(97), l = t(39), c = t(9), b = "Array Iterator", L = w.set, m = w.getterFor(b);
      k.exports = p(Array, "Array", function(x, I) {
        L(this, { type: b, target: e(x), index: 0, kind: I });
      }, function() {
        var x = m(this), I = x.target, v = x.kind, i = x.index++;
        return !I || i >= I.length ? (x.target = void 0, h(void 0, !0)) : h(v == "keys" ? i : v == "values" ? I[i] : [i, I[i]], !1);
      }, "values");
      var M = y.Arguments = y.Array;
      if (a("keys"), a("values"), a("entries"), !l && c && M.name !== "values")
        try {
          O(M, "name", { value: "values" });
        } catch {
        }
    }, (k) => {
      k.exports = {};
    }, (k, d, t) => {
      var e = t(6), a = t(11), y = t(39), w = t(53), O = t(24), p = t(94), h = t(85), l = t(87), c = t(96), b = t(47), L = t(51), m = t(37), M = t(92), x = t(95), I = w.PROPER, v = w.CONFIGURABLE, i = x.IteratorPrototype, A = x.BUGGY_SAFARI_ITERATORS, n = m("iterator"), s = "keys", r = "values", u = "entries", C = function() {
        return this;
      };
      k.exports = function(D, o, F, z, q, J, $) {
        p(F, o, z);
        var S, f, P, g = function(X) {
          if (X === q && V)
            return V;
          if (!A && X in N)
            return N[X];
          switch (X) {
            case s:
              return function() {
                return new F(this, X);
              };
            case r:
              return function() {
                return new F(this, X);
              };
            case u:
              return function() {
                return new F(this, X);
              };
          }
          return function() {
            return new F(this);
          };
        }, _ = o + " Iterator", U = !1, N = D.prototype, G = N[n] || N["@@iterator"] || q && N[q], V = !A && G || g(q), W = o == "Array" && N.entries || G;
        if (W && (S = h(W.call(new D()))) !== Object.prototype && S.next && (y || h(S) === i || (l ? l(S, i) : O(S[n]) || L(S, n, C)), c(S, _, !0, !0), y && (M[_] = C)), I && q == r && G && G.name !== r && (!y && v ? b(N, "name", r) : (U = !0, V = function() {
          return a(G, this);
        })), q)
          if (f = { values: g(r), keys: J ? V : g(s), entries: g(u) }, $)
            for (P in f)
              (A || U || !(P in N)) && L(N, P, f[P]);
          else
            e({ target: o, proto: !0, forced: A || U }, f);
        return y && !$ || N[n] === V || L(N, n, V, { name: q }), M[o] = V, f;
      };
    }, (k, d, t) => {
      var e = t(95).IteratorPrototype, a = t(73), y = t(14), w = t(96), O = t(92), p = function() {
        return this;
      };
      k.exports = function(h, l, c, b) {
        var L = l + " Iterator";
        return h.prototype = a(e, { next: y(+!b, c) }), w(h, L, !1, !0), O[L] = p, h;
      };
    }, (k, d, t) => {
      var e, a, y, w = t(10), O = t(24), p = t(23), h = t(73), l = t(85), c = t(51), b = t(37), L = t(39), m = b("iterator"), M = !1;
      [].keys && ("next" in (y = [].keys()) ? (a = l(l(y))) !== Object.prototype && (e = a) : M = !0), !p(e) || w(function() {
        var x = {};
        return e[m].call(x) !== x;
      }) ? e = {} : L && (e = h(e)), O(e[m]) || c(e, m, function() {
        return this;
      }), k.exports = { IteratorPrototype: e, BUGGY_SAFARI_ITERATORS: M };
    }, (k, d, t) => {
      var e = t(48).f, a = t(42), y = t(37)("toStringTag");
      k.exports = function(w, O, p) {
        w && !p && (w = w.prototype), w && !a(w, y) && e(w, y, { configurable: !0, value: O });
      };
    }, (k) => {
      k.exports = function(d, t) {
        return { value: d, done: t };
      };
    }, (k, d, t) => {
      var e = t(83), a = t(51), y = t(99);
      e || a(Object.prototype, "toString", y, { unsafe: !0 });
    }, (k, d, t) => {
      var e = t(83), a = t(82);
      k.exports = e ? {}.toString : function() {
        return "[object " + a(this) + "]";
      };
    }, (k, d, t) => {
      t(101);
    }, (k, d, t) => {
      t(102)("Map", function(e) {
        return function() {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      }, t(120));
    }, (k, d, t) => {
      var e = t(6), a = t(7), y = t(17), w = t(71), O = t(51), p = t(103), h = t(110), l = t(117), c = t(24), b = t(20), L = t(23), m = t(10), M = t(118), x = t(96), I = t(119);
      k.exports = function(v, i, A) {
        var n = v.indexOf("Map") !== -1, s = v.indexOf("Weak") !== -1, r = n ? "set" : "add", u = a[v], C = u && u.prototype, D = u, o = {}, F = function(f) {
          var P = y(C[f]);
          O(C, f, f == "add" ? function(_) {
            return P(this, _ === 0 ? 0 : _), this;
          } : f == "delete" ? function(g) {
            return !(s && !L(g)) && P(this, g === 0 ? 0 : g);
          } : f == "get" ? function(_) {
            return s && !L(_) ? void 0 : P(this, _ === 0 ? 0 : _);
          } : f == "has" ? function(_) {
            return !(s && !L(_)) && P(this, _ === 0 ? 0 : _);
          } : function(_, U) {
            return P(this, _ === 0 ? 0 : _, U), this;
          });
        };
        if (w(v, !c(u) || !(s || C.forEach && !m(function() {
          new u().entries().next();
        }))))
          D = A.getConstructor(i, v, n, r), p.enable();
        else if (w(v, !0)) {
          var z = new D(), q = z[r](s ? {} : -0, 1) != z, J = m(function() {
            z.has(1);
          }), $ = M(function(f) {
            new u(f);
          }), S = !s && m(function() {
            for (var f = new u(), P = 5; P--; )
              f[r](P, P);
            return !f.has(-0);
          });
          $ || ((D = i(function(f, P) {
            l(f, C);
            var g = I(new u(), f, D);
            return b(P) || h(P, g[r], { that: g, AS_ENTRIES: n }), g;
          })).prototype = C, C.constructor = D), (J || S) && (F("delete"), F("has"), n && F("get")), (S || q) && F(r), s && C.clear && delete C.clear;
        }
        return o[v] = D, e({ global: !0, constructor: !0, forced: D != u }, o), x(D, v), s || A.setStrong(D, v, n), D;
      };
    }, (k, d, t) => {
      var e = t(6), a = t(17), y = t(58), w = t(23), O = t(42), p = t(48).f, h = t(61), l = t(104), c = t(107), b = t(44), L = t(109), m = !1, M = b("meta"), x = 0, I = function(i) {
        p(i, M, { value: { objectID: "O" + x++, weakData: {} } });
      }, v = k.exports = { enable: function() {
        v.enable = function() {
        }, m = !0;
        var i = h.f, A = a([].splice), n = {};
        n[M] = 1, i(n).length && (h.f = function(s) {
          for (var r = i(s), u = 0, C = r.length; u < C; u++)
            if (r[u] === M) {
              A(r, u, 1);
              break;
            }
          return r;
        }, e({ target: "Object", stat: !0, forced: !0 }, { getOwnPropertyNames: l.f }));
      }, fastKey: function(i, A) {
        if (!w(i))
          return typeof i == "symbol" ? i : (typeof i == "string" ? "S" : "P") + i;
        if (!O(i, M)) {
          if (!c(i))
            return "F";
          if (!A)
            return "E";
          I(i);
        }
        return i[M].objectID;
      }, getWeakData: function(i, A) {
        if (!O(i, M)) {
          if (!c(i))
            return !0;
          if (!A)
            return !1;
          I(i);
        }
        return i[M].weakData;
      }, onFreeze: function(i) {
        return L && m && c(i) && !O(i, M) && I(i), i;
      } };
      y[M] = !0;
    }, (k, d, t) => {
      var e = t(18), a = t(15), y = t(61).f, w = t(105), O = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      k.exports.f = function(h) {
        return O && e(h) == "Window" ? function(l) {
          try {
            return y(l);
          } catch {
            return w(O);
          }
        }(h) : y(a(h));
      };
    }, (k, d, t) => {
      var e = t(64), a = t(67), y = t(106), w = Array, O = Math.max;
      k.exports = function(p, h, l) {
        for (var c = a(p), b = e(h, c), L = e(l === void 0 ? c : l, c), m = w(O(L - b, 0)), M = 0; b < L; b++, M++)
          y(m, M, p[b]);
        return m.length = M, m;
      };
    }, (k, d, t) => {
      var e = t(21), a = t(48), y = t(14);
      k.exports = function(w, O, p) {
        var h = e(O);
        h in w ? a.f(w, h, y(0, p)) : w[h] = p;
      };
    }, (k, d, t) => {
      var e = t(10), a = t(23), y = t(18), w = t(108), O = Object.isExtensible, p = e(function() {
      });
      k.exports = p || w ? function(l) {
        return !!a(l) && (!w || y(l) != "ArrayBuffer") && (!O || O(l));
      } : O;
    }, (k, d, t) => {
      var e = t(10);
      k.exports = e(function() {
        if (typeof ArrayBuffer == "function") {
          var a = new ArrayBuffer(8);
          Object.isExtensible(a) && Object.defineProperty(a, "a", { value: 8 });
        }
      });
    }, (k, d, t) => {
      var e = t(10);
      k.exports = !e(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    }, (k, d, t) => {
      var e = t(111), a = t(11), y = t(50), w = t(35), O = t(113), p = t(67), h = t(28), l = t(114), c = t(115), b = t(116), L = TypeError, m = function(x, I) {
        this.stopped = x, this.result = I;
      }, M = m.prototype;
      k.exports = function(x, I, v) {
        var i, A, n, s, r, u, C, D = v && v.that, o = !(!v || !v.AS_ENTRIES), F = !(!v || !v.IS_RECORD), z = !(!v || !v.IS_ITERATOR), q = !(!v || !v.INTERRUPTED), J = e(I, D), $ = function(f) {
          return i && b(i, "normal", f), new m(!0, f);
        }, S = function(f) {
          return o ? (y(f), q ? J(f[0], f[1], $) : J(f[0], f[1])) : q ? J(f, $) : J(f);
        };
        if (F)
          i = x.iterator;
        else if (z)
          i = x;
        else {
          if (!(A = c(x)))
            throw L(w(x) + " is not iterable");
          if (O(A)) {
            for (n = 0, s = p(x); s > n; n++)
              if ((r = S(x[n])) && h(M, r))
                return r;
            return new m(!1);
          }
          i = l(x, A);
        }
        for (u = F ? x.next : i.next; !(C = a(u, i)).done; ) {
          try {
            r = S(C.value);
          } catch (f) {
            b(i, "throw", f);
          }
          if (typeof r == "object" && r && h(M, r))
            return r;
        }
        return new m(!1);
      };
    }, (k, d, t) => {
      var e = t(112), a = t(34), y = t(12), w = e(e.bind);
      k.exports = function(O, p) {
        return a(O), p === void 0 ? O : y ? w(O, p) : function() {
          return O.apply(p, arguments);
        };
      };
    }, (k, d, t) => {
      var e = t(18), a = t(17);
      k.exports = function(y) {
        if (e(y) === "Function")
          return a(y);
      };
    }, (k, d, t) => {
      var e = t(37), a = t(92), y = e("iterator"), w = Array.prototype;
      k.exports = function(O) {
        return O !== void 0 && (a.Array === O || w[y] === O);
      };
    }, (k, d, t) => {
      var e = t(11), a = t(34), y = t(50), w = t(35), O = t(115), p = TypeError;
      k.exports = function(h, l) {
        var c = arguments.length < 2 ? O(h) : l;
        if (a(c))
          return y(e(c, h));
        throw p(w(h) + " is not iterable");
      };
    }, (k, d, t) => {
      var e = t(82), a = t(33), y = t(20), w = t(92), O = t(37)("iterator");
      k.exports = function(p) {
        if (!y(p))
          return a(p, O) || a(p, "@@iterator") || w[e(p)];
      };
    }, (k, d, t) => {
      var e = t(11), a = t(50), y = t(33);
      k.exports = function(w, O, p) {
        var h, l;
        a(w);
        try {
          if (!(h = y(w, "return"))) {
            if (O === "throw")
              throw p;
            return p;
          }
          h = e(h, w);
        } catch (c) {
          l = !0, h = c;
        }
        if (O === "throw")
          throw p;
        if (l)
          throw h;
        return a(h), p;
      };
    }, (k, d, t) => {
      var e = t(28), a = TypeError;
      k.exports = function(y, w) {
        if (e(w, y))
          return y;
        throw a("Incorrect invocation");
      };
    }, (k, d, t) => {
      var e = t(37)("iterator"), a = !1;
      try {
        var y = 0, w = { next: function() {
          return { done: !!y++ };
        }, return: function() {
          a = !0;
        } };
        w[e] = function() {
          return this;
        }, Array.from(w, function() {
          throw 2;
        });
      } catch {
      }
      k.exports = function(O, p) {
        if (!p && !a)
          return !1;
        var h = !1;
        try {
          var l = {};
          l[e] = function() {
            return { next: function() {
              return { done: h = !0 };
            } };
          }, O(l);
        } catch {
        }
        return h;
      };
    }, (k, d, t) => {
      var e = t(24), a = t(23), y = t(87);
      k.exports = function(w, O, p) {
        var h, l;
        return y && e(h = O.constructor) && h !== p && a(l = h.prototype) && l !== p.prototype && y(w, l), w;
      };
    }, (k, d, t) => {
      var e = t(73), a = t(84), y = t(121), w = t(111), O = t(117), p = t(20), h = t(110), l = t(93), c = t(97), b = t(122), L = t(9), m = t(103).fastKey, M = t(55), x = M.set, I = M.getterFor;
      k.exports = { getConstructor: function(v, i, A, n) {
        var s = v(function(o, F) {
          O(o, r), x(o, { type: i, index: e(null), first: void 0, last: void 0, size: 0 }), L || (o.size = 0), p(F) || h(F, o[n], { that: o, AS_ENTRIES: A });
        }), r = s.prototype, u = I(i), C = function(o, F, z) {
          var q, J, $ = u(o), S = D(o, F);
          return S ? S.value = z : ($.last = S = { index: J = m(F, !0), key: F, value: z, previous: q = $.last, next: void 0, removed: !1 }, $.first || ($.first = S), q && (q.next = S), L ? $.size++ : o.size++, J !== "F" && ($.index[J] = S)), o;
        }, D = function(o, F) {
          var z, q = u(o), J = m(F);
          if (J !== "F")
            return q.index[J];
          for (z = q.first; z; z = z.next)
            if (z.key == F)
              return z;
        };
        return y(r, { clear: function() {
          for (var F = u(this), z = F.index, q = F.first; q; )
            q.removed = !0, q.previous && (q.previous = q.previous.next = void 0), delete z[q.index], q = q.next;
          F.first = F.last = void 0, L ? F.size = 0 : this.size = 0;
        }, delete: function(o) {
          var F = this, z = u(F), q = D(F, o);
          if (q) {
            var J = q.next, $ = q.previous;
            delete z.index[q.index], q.removed = !0, $ && ($.next = J), J && (J.previous = $), z.first == q && (z.first = J), z.last == q && (z.last = $), L ? z.size-- : F.size--;
          }
          return !!q;
        }, forEach: function(F) {
          for (var z, q = u(this), J = w(F, arguments.length > 1 ? arguments[1] : void 0); z = z ? z.next : q.first; )
            for (J(z.value, z.key, this); z && z.removed; )
              z = z.previous;
        }, has: function(F) {
          return !!D(this, F);
        } }), y(r, A ? { get: function(F) {
          var z = D(this, F);
          return z && z.value;
        }, set: function(F, z) {
          return C(this, F === 0 ? 0 : F, z);
        } } : { add: function(F) {
          return C(this, F = F === 0 ? 0 : F, F);
        } }), L && a(r, "size", { configurable: !0, get: function() {
          return u(this).size;
        } }), s;
      }, setStrong: function(v, i, A) {
        var n = i + " Iterator", s = I(i), r = I(n);
        l(v, i, function(u, C) {
          x(this, { type: n, target: u, state: s(u), kind: C, last: void 0 });
        }, function() {
          for (var u = r(this), C = u.kind, D = u.last; D && D.removed; )
            D = D.previous;
          return !u.target || !(u.last = D = D ? D.next : u.state.first) ? (u.target = void 0, c(void 0, !0)) : c(C == "keys" ? D.key : C == "values" ? D.value : [D.key, D.value], !1);
        }, A ? "entries" : "values", !A, !0), b(i);
      } };
    }, (k, d, t) => {
      var e = t(51);
      k.exports = function(a, y, w) {
        for (var O in y)
          e(a, O, y[O], w);
        return a;
      };
    }, (k, d, t) => {
      var e = t(27), a = t(84), y = t(37), w = t(9), O = y("species");
      k.exports = function(p) {
        var h = e(p);
        w && h && !h[O] && a(h, O, { configurable: !0, get: function() {
          return this;
        } });
      };
    }, (k, d, t) => {
      t(124);
    }, (k, d, t) => {
      t(102)("Set", function(e) {
        return function() {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      }, t(120));
    }, (k, d, t) => {
      var e, a = t(39), y = t(6), w = t(7), O = t(27), p = t(17), h = t(10), l = t(44), c = t(24), b = t(126), L = t(20), m = t(23), M = t(26), x = t(110), I = t(50), v = t(82), i = t(42), A = t(106), n = t(47), s = t(67), r = t(127), u = t(128), C = t(130), D = t(131), o = t(132), F = t(133), z = w.Object, q = w.Array, J = w.Date, $ = w.Error, S = w.EvalError, f = w.RangeError, P = w.ReferenceError, g = w.SyntaxError, _ = w.TypeError, U = w.URIError, N = w.PerformanceMark, G = w.WebAssembly, V = G && G.CompileError || $, W = G && G.LinkError || $, X = G && G.RuntimeError || $, K = O("DOMException"), H = C.Map, Z = C.has, dt = C.get, lt = C.set, E = D.Set, R = D.add, j = O("Object", "keys"), B = p([].push), Y = p((!0).valueOf), tt = p(1 .valueOf), rt = p("".valueOf), it = p(J.prototype.getTime), At = l("structuredClone"), ct = "DataCloneError", vt = "Transferring", ht = function(at) {
        return !h(function() {
          var Pt = new w.Set([7]), Et = at(Pt), Ut = at(z(7));
          return Et == Pt || !Et.has(7) || typeof Ut != "object" || Ut != 7;
        }) && at;
      }, mt = function(at, Pt) {
        return !h(function() {
          var Et = new Pt(), Ut = at({ a: Et, b: Et });
          return !(Ut && Ut.a === Ut.b && Ut.a instanceof Pt && Ut.a.stack === Et.stack);
        });
      }, yt = w.structuredClone, _t = a || !mt(yt, $) || !mt(yt, K) || (e = yt, !!h(function() {
        var at = e(new w.AggregateError([1], At, { cause: 3 }));
        return at.name != "AggregateError" || at.errors[0] != 1 || at.message != At || at.cause != 3;
      })), Ct = !yt && ht(function(at) {
        return new N(At, { detail: at }).detail;
      }), Q = ht(yt) || Ct, pt = function(at) {
        throw new K("Uncloneable type: " + at, ct);
      }, xt = function(at, Pt) {
        throw new K((Pt || "Cloning") + " of " + at + " cannot be properly polyfilled in this engine", ct);
      }, Mt = function(at, Pt) {
        return Q || xt(Pt), Q(at);
      }, Ft = function(at, Pt) {
        if (M(at) && pt("Symbol"), !m(at))
          return at;
        if (Pt) {
          if (Z(Pt, at))
            return dt(Pt, at);
        } else
          Pt = new H();
        var Et, Ut, St, te, Nt, Ht, Rt, Xt, Qt, st, ot, ft = v(at), gt = !1;
        switch (ft) {
          case "Array":
            St = q(s(at)), gt = !0;
            break;
          case "Object":
            St = {}, gt = !0;
            break;
          case "Map":
            St = new H(), gt = !0;
            break;
          case "Set":
            St = new E(), gt = !0;
            break;
          case "RegExp":
            St = new RegExp(at.source, u(at));
            break;
          case "Error":
            switch (Ut = at.name) {
              case "AggregateError":
                St = O("AggregateError")([]);
                break;
              case "EvalError":
                St = S();
                break;
              case "RangeError":
                St = f();
                break;
              case "ReferenceError":
                St = P();
                break;
              case "SyntaxError":
                St = g();
                break;
              case "TypeError":
                St = _();
                break;
              case "URIError":
                St = U();
                break;
              case "CompileError":
                St = V();
                break;
              case "LinkError":
                St = W();
                break;
              case "RuntimeError":
                St = X();
                break;
              default:
                St = $();
            }
            gt = !0;
            break;
          case "DOMException":
            St = new K(at.message, at.name), gt = !0;
            break;
          case "DataView":
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array":
            Et = w[ft], m(Et) || xt(ft), St = new Et(Ft(at.buffer, Pt), at.byteOffset, ft === "DataView" ? at.byteLength : at.length);
            break;
          case "DOMQuad":
            try {
              St = new DOMQuad(Ft(at.p1, Pt), Ft(at.p2, Pt), Ft(at.p3, Pt), Ft(at.p4, Pt));
            } catch {
              St = Mt(at, ft);
            }
            break;
          case "File":
            if (Q)
              try {
                St = Q(at), v(St) !== ft && (St = void 0);
              } catch {
              }
            if (!St)
              try {
                St = new File([at], at.name, at);
              } catch {
              }
            St || xt(ft);
            break;
          case "FileList":
            if (te = function() {
              var bt;
              try {
                bt = new w.DataTransfer();
              } catch {
                try {
                  bt = new w.ClipboardEvent("").clipboardData;
                } catch {
                }
              }
              return bt && bt.items && bt.files ? bt : null;
            }()) {
              for (Nt = 0, Ht = s(at); Nt < Ht; Nt++)
                te.items.add(Ft(at[Nt], Pt));
              St = te.files;
            } else
              St = Mt(at, ft);
            break;
          case "ImageData":
            try {
              St = new ImageData(Ft(at.data, Pt), at.width, at.height, { colorSpace: at.colorSpace });
            } catch {
              St = Mt(at, ft);
            }
            break;
          default:
            if (Q)
              St = Q(at);
            else
              switch (ft) {
                case "BigInt":
                  St = z(at.valueOf());
                  break;
                case "Boolean":
                  St = z(Y(at));
                  break;
                case "Number":
                  St = z(tt(at));
                  break;
                case "String":
                  St = z(rt(at));
                  break;
                case "Date":
                  St = new J(it(at));
                  break;
                case "ArrayBuffer":
                  (Et = w.DataView) || typeof at.slice == "function" || xt(ft);
                  try {
                    if (typeof at.slice != "function" || at.resizable)
                      for (Ht = at.byteLength, ot = ("maxByteLength" in at) ? { maxByteLength: at.maxByteLength } : void 0, St = new ArrayBuffer(Ht, ot), Qt = new Et(at), st = new Et(St), Nt = 0; Nt < Ht; Nt++)
                        st.setUint8(Nt, Qt.getUint8(Nt));
                    else
                      St = at.slice(0);
                  } catch {
                    throw new K("ArrayBuffer is detached", ct);
                  }
                  break;
                case "SharedArrayBuffer":
                  St = at;
                  break;
                case "Blob":
                  try {
                    St = at.slice(0, at.size, at.type);
                  } catch {
                    xt(ft);
                  }
                  break;
                case "DOMPoint":
                case "DOMPointReadOnly":
                  Et = w[ft];
                  try {
                    St = Et.fromPoint ? Et.fromPoint(at) : new Et(at.x, at.y, at.z, at.w);
                  } catch {
                    xt(ft);
                  }
                  break;
                case "DOMRect":
                case "DOMRectReadOnly":
                  Et = w[ft];
                  try {
                    St = Et.fromRect ? Et.fromRect(at) : new Et(at.x, at.y, at.width, at.height);
                  } catch {
                    xt(ft);
                  }
                  break;
                case "DOMMatrix":
                case "DOMMatrixReadOnly":
                  Et = w[ft];
                  try {
                    St = Et.fromMatrix ? Et.fromMatrix(at) : new Et(at);
                  } catch {
                    xt(ft);
                  }
                  break;
                case "AudioData":
                case "VideoFrame":
                  c(at.clone) || xt(ft);
                  try {
                    St = at.clone();
                  } catch {
                    pt(ft);
                  }
                  break;
                case "CropTarget":
                case "CryptoKey":
                case "FileSystemDirectoryHandle":
                case "FileSystemFileHandle":
                case "FileSystemHandle":
                case "GPUCompilationInfo":
                case "GPUCompilationMessage":
                case "ImageBitmap":
                case "RTCCertificate":
                case "WebAssembly.Module":
                  xt(ft);
                default:
                  pt(ft);
              }
        }
        if (lt(Pt, at, St), gt)
          switch (ft) {
            case "Array":
            case "Object":
              for (Rt = j(at), Nt = 0, Ht = s(Rt); Nt < Ht; Nt++)
                Xt = Rt[Nt], A(St, Xt, Ft(at[Xt], Pt));
              break;
            case "Map":
              at.forEach(function(bt, wt) {
                lt(St, Ft(wt, Pt), Ft(bt, Pt));
              });
              break;
            case "Set":
              at.forEach(function(bt) {
                R(St, Ft(bt, Pt));
              });
              break;
            case "Error":
              n(St, "message", Ft(at.message, Pt)), i(at, "cause") && n(St, "cause", Ft(at.cause, Pt)), Ut == "AggregateError" && (St.errors = Ft(at.errors, Pt));
            case "DOMException":
              o && n(St, "stack", Ft(at.stack, Pt));
          }
        return St;
      };
      y({ global: !0, enumerable: !0, sham: !F, forced: _t }, { structuredClone: function(Pt) {
        var Et, Ut = r(arguments.length, 1) > 1 && !L(arguments[1]) ? I(arguments[1]) : void 0, St = Ut ? Ut.transfer : void 0;
        return St !== void 0 && function(te, Nt) {
          if (!m(te))
            throw _("Transfer option cannot be converted to a sequence");
          var Ht = [];
          x(te, function(wt) {
            B(Ht, I(wt));
          });
          var Rt, Xt, Qt, st, ot, ft, gt = 0, bt = s(Ht);
          if (F)
            for (st = yt(Ht, { transfer: Ht }); gt < bt; )
              lt(Nt, Ht[gt], st[gt++]);
          else
            for (; gt < bt; ) {
              if (Rt = Ht[gt++], Z(Nt, Rt))
                throw new K("Duplicate transferable", ct);
              switch (Xt = v(Rt)) {
                case "ImageBitmap":
                  Qt = w.OffscreenCanvas, b(Qt) || xt(Xt, vt);
                  try {
                    (ft = new Qt(Rt.width, Rt.height)).getContext("bitmaprenderer").transferFromImageBitmap(Rt), ot = ft.transferToImageBitmap();
                  } catch {
                  }
                  break;
                case "AudioData":
                case "VideoFrame":
                  c(Rt.clone) && c(Rt.close) || xt(Xt, vt);
                  try {
                    ot = Rt.clone(), Rt.close();
                  } catch {
                  }
                  break;
                case "ArrayBuffer":
                  c(Rt.transfer) || xt(Xt, vt), ot = Rt.transfer();
                  break;
                case "MediaSourceHandle":
                case "MessagePort":
                case "OffscreenCanvas":
                case "ReadableStream":
                case "TransformStream":
                case "WritableStream":
                  xt(Xt, vt);
              }
              if (ot === void 0)
                throw new K("This object cannot be transferred: " + Xt, ct);
              lt(Nt, Rt, ot);
            }
        }(St, Et = new H()), Ft(Pt, Et);
      } });
    }, (k, d, t) => {
      var e = t(17), a = t(10), y = t(24), w = t(82), O = t(27), p = t(54), h = function() {
      }, l = [], c = O("Reflect", "construct"), b = /^\s*(?:class|function)\b/, L = e(b.exec), m = !b.exec(h), M = function(v) {
        if (!y(v))
          return !1;
        try {
          return c(h, l, v), !0;
        } catch {
          return !1;
        }
      }, x = function(v) {
        if (!y(v))
          return !1;
        switch (w(v)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return m || !!L(b, p(v));
        } catch {
          return !0;
        }
      };
      x.sham = !0, k.exports = !c || a(function() {
        var I;
        return M(M.call) || !M(Object) || !M(function() {
          I = !0;
        }) || I;
      }) ? x : M;
    }, (k) => {
      var d = TypeError;
      k.exports = function(t, e) {
        if (t < e)
          throw d("Not enough arguments");
        return t;
      };
    }, (k, d, t) => {
      var e = t(11), a = t(42), y = t(28), w = t(129), O = RegExp.prototype;
      k.exports = function(p) {
        var h = p.flags;
        return h !== void 0 || "flags" in O || a(p, "flags") || !y(O, p) ? h : e(w, p);
      };
    }, (k, d, t) => {
      var e = t(50);
      k.exports = function() {
        var a = e(this), y = "";
        return a.hasIndices && (y += "d"), a.global && (y += "g"), a.ignoreCase && (y += "i"), a.multiline && (y += "m"), a.dotAll && (y += "s"), a.unicode && (y += "u"), a.unicodeSets && (y += "v"), a.sticky && (y += "y"), y;
      };
    }, (k, d, t) => {
      var e = t(17), a = Map.prototype;
      k.exports = { Map, set: e(a.set), get: e(a.get), has: e(a.has), remove: e(a.delete), proto: a };
    }, (k, d, t) => {
      var e = t(17), a = Set.prototype;
      k.exports = { Set, add: e(a.add), has: e(a.has), remove: e(a.delete), proto: a };
    }, (k, d, t) => {
      var e = t(10), a = t(14);
      k.exports = !e(function() {
        var y = Error("a");
        return "stack" in y ? (Object.defineProperty(y, "stack", a(1, 7)), y.stack !== 7) : !0;
      });
    }, (k, d, t) => {
      var e = t(7), a = t(10), y = t(31), w = t(134), O = t(135), p = t(136), h = e.structuredClone;
      k.exports = !!h && !a(function() {
        if (O && y > 92 || p && y > 94 || w && y > 97)
          return !1;
        var l = new ArrayBuffer(8), c = h(l, { transfer: [l] });
        return l.byteLength != 0 || c.byteLength != 8;
      });
    }, (k, d, t) => {
      var e = t(135), a = t(136);
      k.exports = !e && !a && typeof window == "object" && typeof document == "object";
    }, (k) => {
      k.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";
    }, (k, d, t) => {
      var e = t(18);
      k.exports = typeof process < "u" && e(process) == "process";
    }, (k, d, t) => {
      var e = t(7);
      k.exports = e;
    }, (__unused_webpack_module, exports, __w_pdfjs_require__) => {
      var k, t, e, a, re, w, pe, p, h, l, c, b, L, m, Ae, x, I, _e, i, A;
      Object.defineProperty(exports, "__esModule", { value: !0 }), exports.build = exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultFilterFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0, exports.getDocument = getDocument, exports.version = void 0;
      var _util = __w_pdfjs_require__(1), _annotation_storage = __w_pdfjs_require__(139), _display_utils = __w_pdfjs_require__(142), _font_loader = __w_pdfjs_require__(145), _canvas = __w_pdfjs_require__(146), _worker_options = __w_pdfjs_require__(149), _is_node = __w_pdfjs_require__(3), _message_handler = __w_pdfjs_require__(150), _metadata = __w_pdfjs_require__(151), _optional_content_config = __w_pdfjs_require__(152), _transport_stream = __w_pdfjs_require__(153), _xfa_text = __w_pdfjs_require__(154);
      const DEFAULT_RANGE_CHUNK_SIZE = 65536, RENDERING_CANCELLED_TIMEOUT = 100, DELAYED_CLEANUP_TIMEOUT = 5e3;
      let DefaultCanvasFactory = _display_utils.DOMCanvasFactory;
      exports.DefaultCanvasFactory = DefaultCanvasFactory;
      let DefaultCMapReaderFactory = _display_utils.DOMCMapReaderFactory;
      exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
      let DefaultFilterFactory = _display_utils.DOMFilterFactory;
      exports.DefaultFilterFactory = DefaultFilterFactory;
      let DefaultStandardFontDataFactory = _display_utils.DOMStandardFontDataFactory, createPDFNetworkStream;
      if (exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory, _is_node.isNodeJS) {
        const { NodeCanvasFactory: s, NodeCMapReaderFactory: r, NodeFilterFactory: u, NodeStandardFontDataFactory: C } = __w_pdfjs_require__(155);
        exports.DefaultCanvasFactory = DefaultCanvasFactory = s, exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory = r, exports.DefaultFilterFactory = DefaultFilterFactory = u, exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory = C;
      }
      if (_is_node.isNodeJS) {
        const { PDFNodeStream: s } = __w_pdfjs_require__(156);
        createPDFNetworkStream = (r) => new s(r);
      } else {
        const { PDFNetworkStream: s } = __w_pdfjs_require__(159), { PDFFetchStream: r } = __w_pdfjs_require__(160);
        createPDFNetworkStream = (u) => (0, _display_utils.isValidFetchUrl)(u.url) ? new r(u) : new s(u);
      }
      function getDocument(s) {
        if (typeof s == "string" || s instanceof URL ? s = { url: s } : (0, _util.isArrayBuffer)(s) && (s = { data: s }), typeof s != "object")
          throw new Error("Invalid parameter in getDocument, need parameter object.");
        if (!s.url && !s.data && !s.range)
          throw new Error("Invalid parameter object: need either .data, .range or .url");
        const r = new PDFDocumentLoadingTask(), { docId: u } = r, C = s.url ? getUrlProp(s.url) : null, D = s.data ? getDataProp(s.data) : null, o = s.httpHeaders || null, F = s.withCredentials === !0, z = s.password ?? null, q = s.range instanceof PDFDataRangeTransport ? s.range : null, J = Number.isInteger(s.rangeChunkSize) && s.rangeChunkSize > 0 ? s.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
        let $ = s.worker instanceof PDFWorker ? s.worker : null;
        const S = s.verbosity, f = typeof s.docBaseUrl != "string" || (0, _display_utils.isDataScheme)(s.docBaseUrl) ? null : s.docBaseUrl, P = typeof s.cMapUrl == "string" ? s.cMapUrl : null, g = s.cMapPacked !== !1, _ = s.CMapReaderFactory || DefaultCMapReaderFactory, U = typeof s.standardFontDataUrl == "string" ? s.standardFontDataUrl : null, N = s.StandardFontDataFactory || DefaultStandardFontDataFactory, G = s.stopAtErrors !== !0, V = Number.isInteger(s.maxImageSize) && s.maxImageSize > -1 ? s.maxImageSize : -1, W = s.isEvalSupported !== !1, X = typeof s.isOffscreenCanvasSupported == "boolean" ? s.isOffscreenCanvasSupported : !_is_node.isNodeJS, K = Number.isInteger(s.canvasMaxAreaInBytes) ? s.canvasMaxAreaInBytes : -1, H = typeof s.disableFontFace == "boolean" ? s.disableFontFace : _is_node.isNodeJS, Z = s.fontExtraProperties === !0, dt = s.enableXfa === !0, lt = s.ownerDocument || globalThis.document, E = s.disableRange === !0, R = s.disableStream === !0, j = s.disableAutoFetch === !0, B = s.pdfBug === !0, Y = q ? q.length : s.length ?? NaN, tt = typeof s.useSystemFonts == "boolean" ? s.useSystemFonts : !_is_node.isNodeJS && !H, rt = typeof s.useWorkerFetch == "boolean" ? s.useWorkerFetch : _ === _display_utils.DOMCMapReaderFactory && N === _display_utils.DOMStandardFontDataFactory && (0, _display_utils.isValidFetchUrl)(P, document.baseURI) && (0, _display_utils.isValidFetchUrl)(U, document.baseURI), it = s.canvasFactory || new DefaultCanvasFactory({ ownerDocument: lt }), At = s.filterFactory || new DefaultFilterFactory({ docId: u, ownerDocument: lt });
        (0, _util.setVerbosityLevel)(S);
        const ct = { canvasFactory: it, filterFactory: At };
        if (rt || (ct.cMapReaderFactory = new _({ baseUrl: P, isCompressed: g }), ct.standardFontDataFactory = new N({ baseUrl: U })), !$) {
          const mt = { verbosity: S, port: _worker_options.GlobalWorkerOptions.workerPort };
          $ = mt.port ? PDFWorker.fromPort(mt) : new PDFWorker(mt), r._worker = $;
        }
        const vt = { docId: u, apiVersion: "3.7.107", data: D, password: z, disableAutoFetch: j, rangeChunkSize: J, length: Y, docBaseUrl: f, enableXfa: dt, evaluatorOptions: { maxImageSize: V, disableFontFace: H, ignoreErrors: G, isEvalSupported: W, isOffscreenCanvasSupported: X, canvasMaxAreaInBytes: K, fontExtraProperties: Z, useSystemFonts: tt, cMapUrl: rt ? P : null, standardFontDataUrl: rt ? U : null } }, ht = { ignoreErrors: G, isEvalSupported: W, disableFontFace: H, fontExtraProperties: Z, enableXfa: dt, ownerDocument: lt, disableAutoFetch: j, pdfBug: B, styleElement: null };
        return $.promise.then(function() {
          if (r.destroyed)
            throw new Error("Loading aborted");
          const mt = _fetchDocument($, vt), yt = new Promise(function(_t) {
            let Ct;
            q ? Ct = new _transport_stream.PDFDataTransportStream({ length: Y, initialData: q.initialData, progressiveDone: q.progressiveDone, contentDispositionFilename: q.contentDispositionFilename, disableRange: E, disableStream: R }, q) : D || (Ct = createPDFNetworkStream({ url: C, length: Y, httpHeaders: o, withCredentials: F, rangeChunkSize: J, disableRange: E, disableStream: R })), _t(Ct);
          });
          return Promise.all([mt, yt]).then(function(_t) {
            let [Ct, Q] = _t;
            if (r.destroyed)
              throw new Error("Loading aborted");
            const pt = new _message_handler.MessageHandler(u, Ct, $.port), xt = new WorkerTransport(pt, r, Q, ht, ct);
            r._transport = xt, pt.send("Ready", null);
          });
        }).catch(r._capability.reject), r;
      }
      async function _fetchDocument(s, r) {
        if (s.destroyed)
          throw new Error("Worker was destroyed");
        const u = await s.messageHandler.sendWithPromise("GetDocRequest", r, r.data ? [r.data.buffer] : null);
        if (s.destroyed)
          throw new Error("Worker was destroyed");
        return u;
      }
      function getUrlProp(s) {
        if (s instanceof URL)
          return s.href;
        try {
          return new URL(s, window.location).href;
        } catch {
          if (_is_node.isNodeJS && typeof s == "string")
            return s;
        }
        throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
      }
      function getDataProp(s) {
        if (_is_node.isNodeJS && typeof Buffer < "u" && s instanceof Buffer)
          return (0, _display_utils.deprecated)("Please provide binary data as `Uint8Array`, rather than `Buffer`."), new Uint8Array(s);
        if (s instanceof Uint8Array && s.byteLength === s.buffer.byteLength)
          return s;
        if (typeof s == "string")
          return (0, _util.stringToBytes)(s);
        if (typeof s == "object" && !isNaN(s == null ? void 0 : s.length) || (0, _util.isArrayBuffer)(s))
          return new Uint8Array(s);
        throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
      }
      const d = class {
        constructor() {
          this._capability = new _util.PromiseCapability(), this._transport = null, this._worker = null, this.docId = "d" + ue(d, k)._++, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
        }
        get promise() {
          return this._capability.promise;
        }
        async destroy() {
          var r;
          this.destroyed = !0, await ((r = this._transport) === null || r === void 0 ? void 0 : r.destroy()), this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
        }
      };
      let PDFDocumentLoadingTask = d;
      k = new WeakMap(), et(PDFDocumentLoadingTask, k, 0), exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
      class PDFDataRangeTransport {
        constructor(r, u) {
          let C = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], D = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          this.length = r, this.initialData = u, this.progressiveDone = C, this.contentDispositionFilename = D, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = new _util.PromiseCapability();
        }
        addRangeListener(r) {
          this._rangeListeners.push(r);
        }
        addProgressListener(r) {
          this._progressListeners.push(r);
        }
        addProgressiveReadListener(r) {
          this._progressiveReadListeners.push(r);
        }
        addProgressiveDoneListener(r) {
          this._progressiveDoneListeners.push(r);
        }
        onDataRange(r, u) {
          for (const C of this._rangeListeners)
            C(r, u);
        }
        onDataProgress(r, u) {
          this._readyCapability.promise.then(() => {
            for (const C of this._progressListeners)
              C(r, u);
          });
        }
        onDataProgressiveRead(r) {
          this._readyCapability.promise.then(() => {
            for (const u of this._progressiveReadListeners)
              u(r);
          });
        }
        onDataProgressiveDone() {
          this._readyCapability.promise.then(() => {
            for (const r of this._progressiveDoneListeners)
              r();
          });
        }
        transportReady() {
          this._readyCapability.resolve();
        }
        requestDataRange(r, u) {
          (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
        }
        abort() {
        }
      }
      exports.PDFDataRangeTransport = PDFDataRangeTransport;
      class PDFDocumentProxy {
        constructor(r, u) {
          this._pdfInfo = r, this._transport = u;
        }
        get annotationStorage() {
          return this._transport.annotationStorage;
        }
        get filterFactory() {
          return this._transport.filterFactory;
        }
        get numPages() {
          return this._pdfInfo.numPages;
        }
        get fingerprints() {
          return this._pdfInfo.fingerprints;
        }
        get isPureXfa() {
          return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
        }
        get allXfaHtml() {
          return this._transport._htmlForXfa;
        }
        getPage(r) {
          return this._transport.getPage(r);
        }
        getPageIndex(r) {
          return this._transport.getPageIndex(r);
        }
        getDestinations() {
          return this._transport.getDestinations();
        }
        getDestination(r) {
          return this._transport.getDestination(r);
        }
        getPageLabels() {
          return this._transport.getPageLabels();
        }
        getPageLayout() {
          return this._transport.getPageLayout();
        }
        getPageMode() {
          return this._transport.getPageMode();
        }
        getViewerPreferences() {
          return this._transport.getViewerPreferences();
        }
        getOpenAction() {
          return this._transport.getOpenAction();
        }
        getAttachments() {
          return this._transport.getAttachments();
        }
        getJavaScript() {
          return this._transport.getJavaScript();
        }
        getJSActions() {
          return this._transport.getDocJSActions();
        }
        getOutline() {
          return this._transport.getOutline();
        }
        getOptionalContentConfig() {
          return this._transport.getOptionalContentConfig();
        }
        getPermissions() {
          return this._transport.getPermissions();
        }
        getMetadata() {
          return this._transport.getMetadata();
        }
        getMarkInfo() {
          return this._transport.getMarkInfo();
        }
        getData() {
          return this._transport.getData();
        }
        saveDocument() {
          return this._transport.saveDocument();
        }
        getDownloadInfo() {
          return this._transport.downloadInfoCapability.promise;
        }
        cleanup() {
          let r = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          return this._transport.startCleanup(r || this.isPureXfa);
        }
        destroy() {
          return this.loadingTask.destroy();
        }
        get loadingParams() {
          return this._transport.loadingParams;
        }
        get loadingTask() {
          return this._transport.loadingTask;
        }
        getFieldObjects() {
          return this._transport.getFieldObjects();
        }
        hasJSActions() {
          return this._transport.hasJSActions();
        }
        getCalculationOrderIds() {
          return this._transport.getCalculationOrderIds();
        }
      }
      exports.PDFDocumentProxy = PDFDocumentProxy;
      class PDFPageProxy {
        constructor(r, u, C) {
          et(this, a);
          et(this, w);
          et(this, t, null);
          et(this, e, !1);
          let D = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
          this._pageIndex = r, this._pageInfo = u, this._transport = C, this._stats = D ? new _display_utils.StatTimer() : null, this._pdfBug = D, this.commonObjs = C.commonObjs, this.objs = new PDFObjects(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
        }
        get pageNumber() {
          return this._pageIndex + 1;
        }
        get rotate() {
          return this._pageInfo.rotate;
        }
        get ref() {
          return this._pageInfo.ref;
        }
        get userUnit() {
          return this._pageInfo.userUnit;
        }
        get view() {
          return this._pageInfo.view;
        }
        getViewport() {
          let { scale: r, rotation: u = this.rotate, offsetX: C = 0, offsetY: D = 0, dontFlip: o = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new _display_utils.PageViewport({ viewBox: this.view, scale: r, rotation: u, offsetX: C, offsetY: D, dontFlip: o });
        }
        getAnnotations() {
          let { intent: r = "display" } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          const u = this._transport.getRenderingIntent(r);
          return this._transport.getAnnotations(this._pageIndex, u.renderingIntent);
        }
        getJSActions() {
          return this._transport.getPageJSActions(this._pageIndex);
        }
        get isPureXfa() {
          return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
        }
        async getXfa() {
          var r;
          return ((r = this._transport._htmlForXfa) === null || r === void 0 ? void 0 : r.children[this._pageIndex]) || null;
        }
        render(r) {
          var u, C;
          let { canvasContext: D, viewport: o, intent: F = "display", annotationMode: z = _util.AnnotationMode.ENABLE, transform: q = null, background: J = null, optionalContentConfigPromise: $ = null, annotationCanvasMap: S = null, pageColors: f = null, printAnnotationStorage: P = null } = r;
          if ((u = arguments[0]) !== null && u !== void 0 && u.canvasFactory)
            throw new Error("render no longer accepts the `canvasFactory`-option, please pass it to the `getDocument`-function instead.");
          (C = this._stats) === null || C === void 0 || C.time("Overall");
          const g = this._transport.getRenderingIntent(F, z, P);
          ut(this, e, !1), nt(this, w, pe).call(this), $ || ($ = this._transport.getOptionalContentConfig());
          let _ = this._intentStates.get(g.cacheKey);
          _ || (_ = /* @__PURE__ */ Object.create(null), this._intentStates.set(g.cacheKey, _)), _.streamReaderCancelTimeout && (clearTimeout(_.streamReaderCancelTimeout), _.streamReaderCancelTimeout = null);
          const U = !!(g.renderingIntent & _util.RenderingIntentFlag.PRINT);
          if (!_.displayReadyCapability) {
            var N;
            _.displayReadyCapability = new _util.PromiseCapability(), _.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }, (N = this._stats) === null || N === void 0 || N.time("Page Request"), this._pumpOperatorList(g);
          }
          const G = (X) => {
            var K, H;
            _.renderTasks.delete(V), (this._maybeCleanupAfterRender || U) && ut(this, e, !0), nt(this, a, re).call(this, !U), X ? (V.capability.reject(X), this._abortOperatorList({ intentState: _, reason: X instanceof Error ? X : new Error(X) })) : V.capability.resolve(), (K = this._stats) === null || K === void 0 || K.timeEnd("Rendering"), (H = this._stats) === null || H === void 0 || H.timeEnd("Overall");
          }, V = new InternalRenderTask({ callback: G, params: { canvasContext: D, viewport: o, transform: q, background: J }, objs: this.objs, commonObjs: this.commonObjs, annotationCanvasMap: S, operatorList: _.operatorList, pageIndex: this._pageIndex, canvasFactory: this._transport.canvasFactory, filterFactory: this._transport.filterFactory, useRequestAnimationFrame: !U, pdfBug: this._pdfBug, pageColors: f });
          (_.renderTasks || (_.renderTasks = /* @__PURE__ */ new Set())).add(V);
          const W = V.task;
          return Promise.all([_.displayReadyCapability.promise, $]).then((X) => {
            var K;
            let [H, Z] = X;
            T(this, e) ? G() : ((K = this._stats) === null || K === void 0 || K.time("Rendering"), V.initializeGraphics({ transparency: H, optionalContentConfig: Z }), V.operatorListChanged());
          }).catch(G), W;
        }
        getOperatorList() {
          let { intent: r = "display", annotationMode: u = _util.AnnotationMode.ENABLE, printAnnotationStorage: C = null } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          const D = this._transport.getRenderingIntent(r, u, C, !0);
          let o, F = this._intentStates.get(D.cacheKey);
          if (F || (F = /* @__PURE__ */ Object.create(null), this._intentStates.set(D.cacheKey, F)), !F.opListReadCapability) {
            var z;
            o = /* @__PURE__ */ Object.create(null), o.operatorListChanged = function() {
              F.operatorList.lastChunk && (F.opListReadCapability.resolve(F.operatorList), F.renderTasks.delete(o));
            }, F.opListReadCapability = new _util.PromiseCapability(), (F.renderTasks || (F.renderTasks = /* @__PURE__ */ new Set())).add(o), F.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }, (z = this._stats) === null || z === void 0 || z.time("Page Request"), this._pumpOperatorList(D);
          }
          return F.opListReadCapability.promise;
        }
        streamTextContent() {
          let { includeMarkedContent: r = !1, disableNormalization: u = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return this._transport.messageHandler.sendWithStream("GetTextContent", { pageIndex: this._pageIndex, includeMarkedContent: r === !0, disableNormalization: u === !0 }, { highWaterMark: 100, size: (C) => C.items.length });
        }
        getTextContent() {
          let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (this._transport._htmlForXfa)
            return this.getXfa().then((C) => _xfa_text.XfaText.textContent(C));
          const u = this.streamTextContent(r);
          return new Promise(function(C, D) {
            const o = u.getReader(), F = { items: [], styles: /* @__PURE__ */ Object.create(null) };
            (function z() {
              o.read().then(function(q) {
                let { value: J, done: $ } = q;
                $ ? C(F) : (Object.assign(F.styles, J.styles), F.items.push(...J.items), z());
              }, D);
            })();
          });
        }
        getStructTree() {
          return this._transport.getStructTree(this._pageIndex);
        }
        _destroy() {
          this.destroyed = !0;
          const r = [];
          for (const u of this._intentStates.values())
            if (this._abortOperatorList({ intentState: u, reason: new Error("Page was destroyed."), force: !0 }), !u.opListReadCapability)
              for (const C of u.renderTasks)
                r.push(C.completed), C.cancel();
          return this.objs.clear(), ut(this, e, !1), nt(this, w, pe).call(this), Promise.all(r);
        }
        cleanup() {
          let r = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          ut(this, e, !0);
          const u = nt(this, a, re).call(this, !1);
          return r && u && this._stats && (this._stats = new _display_utils.StatTimer()), u;
        }
        _startRenderPage(r, u) {
          var C, D;
          const o = this._intentStates.get(u);
          o && ((C = this._stats) === null || C === void 0 || C.timeEnd("Page Request"), (D = o.displayReadyCapability) === null || D === void 0 || D.resolve(r));
        }
        _renderPageChunk(r, u) {
          for (let C = 0, D = r.length; C < D; C++)
            u.operatorList.fnArray.push(r.fnArray[C]), u.operatorList.argsArray.push(r.argsArray[C]);
          u.operatorList.lastChunk = r.lastChunk, u.operatorList.separateAnnots = r.separateAnnots;
          for (const C of u.renderTasks)
            C.operatorListChanged();
          r.lastChunk && nt(this, a, re).call(this, !0);
        }
        _pumpOperatorList(r) {
          let { renderingIntent: u, cacheKey: C, annotationStorageMap: D } = r;
          const o = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageIndex: this._pageIndex, intent: u, cacheKey: C, annotationStorage: D }).getReader(), F = this._intentStates.get(C);
          F.streamReader = o;
          const z = () => {
            o.read().then((q) => {
              let { value: J, done: $ } = q;
              $ ? F.streamReader = null : this._transport.destroyed || (this._renderPageChunk(J, F), z());
            }, (q) => {
              if (F.streamReader = null, !this._transport.destroyed) {
                if (F.operatorList) {
                  F.operatorList.lastChunk = !0;
                  for (const J of F.renderTasks)
                    J.operatorListChanged();
                  nt(this, a, re).call(this, !0);
                }
                if (F.displayReadyCapability)
                  F.displayReadyCapability.reject(q);
                else {
                  if (!F.opListReadCapability)
                    throw q;
                  F.opListReadCapability.reject(q);
                }
              }
            });
          };
          z();
        }
        _abortOperatorList(r) {
          let { intentState: u, reason: C, force: D = !1 } = r;
          if (u.streamReader) {
            if (u.streamReaderCancelTimeout && (clearTimeout(u.streamReaderCancelTimeout), u.streamReaderCancelTimeout = null), !D) {
              if (u.renderTasks.size > 0)
                return;
              if (C instanceof _display_utils.RenderingCancelledException) {
                let o = RENDERING_CANCELLED_TIMEOUT;
                C.extraDelay > 0 && C.extraDelay < 1e3 && (o += C.extraDelay), u.streamReaderCancelTimeout = setTimeout(() => {
                  u.streamReaderCancelTimeout = null, this._abortOperatorList({ intentState: u, reason: C, force: !0 });
                }, o);
                return;
              }
            }
            if (u.streamReader.cancel(new _util.AbortException(C.message)).catch(() => {
            }), u.streamReader = null, !this._transport.destroyed) {
              for (const [o, F] of this._intentStates)
                if (F === u) {
                  this._intentStates.delete(o);
                  break;
                }
              this.cleanup();
            }
          }
        }
        get stats() {
          return this._stats;
        }
      }
      t = new WeakMap(), e = new WeakMap(), a = new WeakSet(), re = function() {
        let r = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        if (nt(this, w, pe).call(this), !T(this, e))
          return !1;
        if (r)
          return ut(this, t, setTimeout(() => {
            ut(this, t, null), nt(this, a, re).call(this, !1);
          }, DELAYED_CLEANUP_TIMEOUT)), !1;
        for (const { renderTasks: u, operatorList: C } of this._intentStates.values())
          if (u.size > 0 || !C.lastChunk)
            return !1;
        return this._intentStates.clear(), this.objs.clear(), ut(this, e, !1), !0;
      }, w = new WeakSet(), pe = function() {
        T(this, t) && (clearTimeout(T(this, t)), ut(this, t, null));
      }, exports.PDFPageProxy = PDFPageProxy;
      class LoopbackPort {
        constructor() {
          et(this, p, /* @__PURE__ */ new Set());
          et(this, h, Promise.resolve());
        }
        postMessage(r, u) {
          const C = { data: structuredClone(r, null) };
          T(this, h).then(() => {
            for (const D of T(this, p))
              D.call(this, C);
          });
        }
        addEventListener(r, u) {
          T(this, p).add(u);
        }
        removeEventListener(r, u) {
          T(this, p).delete(u);
        }
        terminate() {
          T(this, p).clear();
        }
      }
      p = new WeakMap(), h = new WeakMap(), exports.LoopbackPort = LoopbackPort;
      const PDFWorkerUtil = { isWorkerDisabled: !1, fallbackWorkerSrc: null, fakeWorkerId: 0 };
      if (exports.PDFWorkerUtil = PDFWorkerUtil, _is_node.isNodeJS && typeof commonjsRequire == "function")
        PDFWorkerUtil.isWorkerDisabled = !0, PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
      else if (typeof document == "object") {
        var _document, _document$currentScri;
        const s = (_document = document) === null || _document === void 0 || (_document$currentScri = _document.currentScript) === null || _document$currentScri === void 0 ? void 0 : _document$currentScri.src;
        s && (PDFWorkerUtil.fallbackWorkerSrc = s.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
      }
      PDFWorkerUtil.isSameOrigin = function(s, r) {
        let u;
        try {
          if (u = new URL(s), !u.origin || u.origin === "null")
            return !1;
        } catch {
          return !1;
        }
        const C = new URL(r, u);
        return u.origin === C.origin;
      }, PDFWorkerUtil.createCDNWrapper = function(s) {
        const r = `importScripts("${s}");`;
        return URL.createObjectURL(new Blob([r]));
      };
      const _PDFWorker = class {
        constructor() {
          let { name: s = null, port: r = null, verbosity: u = (0, _util.getVerbosityLevel)() } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (r && T(_PDFWorker, l).has(r))
            throw new Error("Cannot use more than one PDFWorker per port.");
          this.name = s, this.destroyed = !1, this.verbosity = u, this._readyCapability = new _util.PromiseCapability(), this._port = null, this._webWorker = null, this._messageHandler = null, r ? (T(_PDFWorker, l).set(r, this), this._initializeFromPort(r)) : this._initialize();
        }
        get promise() {
          return this._readyCapability.promise;
        }
        get port() {
          return this._port;
        }
        get messageHandler() {
          return this._messageHandler;
        }
        _initializeFromPort(s) {
          this._port = s, this._messageHandler = new _message_handler.MessageHandler("main", "worker", s), this._messageHandler.on("ready", function() {
          }), this._readyCapability.resolve(), this._messageHandler.send("configure", { verbosity: this.verbosity });
        }
        _initialize() {
          if (!PDFWorkerUtil.isWorkerDisabled && !_PDFWorker._mainThreadWorkerMessageHandler) {
            let { workerSrc: s } = _PDFWorker;
            try {
              PDFWorkerUtil.isSameOrigin(window.location.href, s) || (s = PDFWorkerUtil.createCDNWrapper(new URL(s, window.location).href));
              const r = new Worker(s), u = new _message_handler.MessageHandler("main", "worker", r), C = () => {
                r.removeEventListener("error", D), u.destroy(), r.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
              }, D = () => {
                this._webWorker || C();
              };
              r.addEventListener("error", D), u.on("test", (F) => {
                r.removeEventListener("error", D), this.destroyed ? C() : F ? (this._messageHandler = u, this._port = r, this._webWorker = r, this._readyCapability.resolve(), u.send("configure", { verbosity: this.verbosity })) : (this._setupFakeWorker(), u.destroy(), r.terminate());
              }), u.on("ready", (F) => {
                if (r.removeEventListener("error", D), this.destroyed)
                  C();
                else
                  try {
                    o();
                  } catch {
                    this._setupFakeWorker();
                  }
              });
              const o = () => {
                const F = new Uint8Array();
                u.send("test", F, [F.buffer]);
              };
              o();
              return;
            } catch {
              (0, _util.info)("The worker has been disabled.");
            }
          }
          this._setupFakeWorker();
        }
        _setupFakeWorker() {
          PDFWorkerUtil.isWorkerDisabled || ((0, _util.warn)("Setting up fake worker."), PDFWorkerUtil.isWorkerDisabled = !0), _PDFWorker._setupFakeWorkerGlobal.then((s) => {
            if (this.destroyed) {
              this._readyCapability.reject(new Error("Worker was destroyed"));
              return;
            }
            const r = new LoopbackPort();
            this._port = r;
            const u = "fake" + PDFWorkerUtil.fakeWorkerId++, C = new _message_handler.MessageHandler(u + "_worker", u, r);
            s.setup(C, r);
            const D = new _message_handler.MessageHandler(u, u + "_worker", r);
            this._messageHandler = D, this._readyCapability.resolve(), D.send("configure", { verbosity: this.verbosity });
          }).catch((s) => {
            this._readyCapability.reject(new Error(`Setting up fake worker failed: "${s.message}".`));
          });
        }
        destroy() {
          this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), T(_PDFWorker, l).delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
        }
        static fromPort(s) {
          if (s == null || !s.port)
            throw new Error("PDFWorker.fromPort - invalid method signature.");
          return T(this, l).has(s.port) ? T(this, l).get(s.port) : new _PDFWorker(s);
        }
        static get workerSrc() {
          if (_worker_options.GlobalWorkerOptions.workerSrc)
            return _worker_options.GlobalWorkerOptions.workerSrc;
          if (PDFWorkerUtil.fallbackWorkerSrc !== null)
            return _is_node.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'), PDFWorkerUtil.fallbackWorkerSrc;
          throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
        }
        static get _mainThreadWorkerMessageHandler() {
          try {
            var s;
            return ((s = globalThis.pdfjsWorker) === null || s === void 0 ? void 0 : s.WorkerMessageHandler) || null;
          } catch {
            return null;
          }
        }
        static get _setupFakeWorkerGlobal() {
          const loader = async () => {
            const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
            if (mainWorkerMessageHandler)
              return mainWorkerMessageHandler;
            if (_is_node.isNodeJS && typeof commonjsRequire == "function") {
              const worker = eval("require")(this.workerSrc);
              return worker.WorkerMessageHandler;
            }
            return await (0, _display_utils.loadScript)(this.workerSrc), window.pdfjsWorker.WorkerMessageHandler;
          };
          return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
        }
      };
      let PDFWorker = _PDFWorker;
      l = new WeakMap(), et(PDFWorker, l, /* @__PURE__ */ new WeakMap()), exports.PDFWorker = PDFWorker;
      class WorkerTransport {
        constructor(r, u, C, D, o) {
          et(this, m);
          et(this, c, /* @__PURE__ */ new Map());
          et(this, b, /* @__PURE__ */ new Map());
          et(this, L, /* @__PURE__ */ new Map());
          this.messageHandler = r, this.loadingTask = u, this.commonObjs = new PDFObjects(), this.fontLoader = new _font_loader.FontLoader({ ownerDocument: D.ownerDocument, styleElement: D.styleElement }), this._params = D, this.canvasFactory = o.canvasFactory, this.filterFactory = o.filterFactory, this.cMapReaderFactory = o.cMapReaderFactory, this.standardFontDataFactory = o.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._passwordCapability = null, this._networkStream = C, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = new _util.PromiseCapability(), this.setupMessageHandler();
        }
        get annotationStorage() {
          return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
        }
        getRenderingIntent(r) {
          let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _util.AnnotationMode.ENABLE, C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, D = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], o = _util.RenderingIntentFlag.DISPLAY, F = null;
          switch (r) {
            case "any":
              o = _util.RenderingIntentFlag.ANY;
              break;
            case "display":
              break;
            case "print":
              o = _util.RenderingIntentFlag.PRINT;
              break;
            default:
              (0, _util.warn)(`getRenderingIntent - invalid intent: ${r}`);
          }
          switch (u) {
            case _util.AnnotationMode.DISABLE:
              o += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
              break;
            case _util.AnnotationMode.ENABLE:
              break;
            case _util.AnnotationMode.ENABLE_FORMS:
              o += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
              break;
            case _util.AnnotationMode.ENABLE_STORAGE:
              o += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE, F = (o & _util.RenderingIntentFlag.PRINT && C instanceof _annotation_storage.PrintAnnotationStorage ? C : this.annotationStorage).serializable;
              break;
            default:
              (0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${u}`);
          }
          return D && (o += _util.RenderingIntentFlag.OPLIST), { renderingIntent: o, cacheKey: `${o}_${_annotation_storage.AnnotationStorage.getHash(F)}`, annotationStorageMap: F };
        }
        destroy() {
          if (this.destroyCapability)
            return this.destroyCapability.promise;
          this.destroyed = !0, this.destroyCapability = new _util.PromiseCapability(), this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
          const r = [];
          for (const C of T(this, b).values())
            r.push(C._destroy());
          T(this, b).clear(), T(this, L).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
          const u = this.messageHandler.sendWithPromise("Terminate", null);
          return r.push(u), Promise.all(r).then(() => {
            this.commonObjs.clear(), this.fontLoader.clear(), T(this, c).clear(), this.filterFactory.destroy(), this._networkStream && this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
          }, this.destroyCapability.reject), this.destroyCapability.promise;
        }
        setupMessageHandler() {
          const { messageHandler: r, loadingTask: u } = this;
          r.on("GetReader", (C, D) => {
            (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (o) => {
              this._lastProgress = { loaded: o.loaded, total: o.total };
            }, D.onPull = () => {
              this._fullReader.read().then(function(o) {
                let { value: F, done: z } = o;
                z ? D.close() : ((0, _util.assert)(F instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), D.enqueue(new Uint8Array(F), 1, [F]));
              }).catch((o) => {
                D.error(o);
              });
            }, D.onCancel = (o) => {
              this._fullReader.cancel(o), D.ready.catch((F) => {
                if (!this.destroyed)
                  throw F;
              });
            };
          }), r.on("ReaderHeadersReady", (C) => {
            const D = new _util.PromiseCapability(), o = this._fullReader;
            return o.headersReady.then(() => {
              if (!o.isStreamingSupported || !o.isRangeSupported) {
                if (this._lastProgress) {
                  var F;
                  (F = u.onProgress) === null || F === void 0 || F.call(u, this._lastProgress);
                }
                o.onProgress = (z) => {
                  var q;
                  (q = u.onProgress) === null || q === void 0 || q.call(u, { loaded: z.loaded, total: z.total });
                };
              }
              D.resolve({ isStreamingSupported: o.isStreamingSupported, isRangeSupported: o.isRangeSupported, contentLength: o.contentLength });
            }, D.reject), D.promise;
          }), r.on("GetRangeReader", (C, D) => {
            (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
            const o = this._networkStream.getRangeReader(C.begin, C.end);
            o ? (D.onPull = () => {
              o.read().then(function(F) {
                let { value: z, done: q } = F;
                q ? D.close() : ((0, _util.assert)(z instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), D.enqueue(new Uint8Array(z), 1, [z]));
              }).catch((F) => {
                D.error(F);
              });
            }, D.onCancel = (F) => {
              o.cancel(F), D.ready.catch((z) => {
                if (!this.destroyed)
                  throw z;
              });
            }) : D.close();
          }), r.on("GetDoc", (C) => {
            let { pdfInfo: D } = C;
            this._numPages = D.numPages, this._htmlForXfa = D.htmlForXfa, delete D.htmlForXfa, u._capability.resolve(new PDFDocumentProxy(D, this));
          }), r.on("DocException", function(C) {
            let D;
            switch (C.name) {
              case "PasswordException":
                D = new _util.PasswordException(C.message, C.code);
                break;
              case "InvalidPDFException":
                D = new _util.InvalidPDFException(C.message);
                break;
              case "MissingPDFException":
                D = new _util.MissingPDFException(C.message);
                break;
              case "UnexpectedResponseException":
                D = new _util.UnexpectedResponseException(C.message, C.status);
                break;
              case "UnknownErrorException":
                D = new _util.UnknownErrorException(C.message, C.details);
                break;
              default:
                (0, _util.unreachable)("DocException - expected a valid Error.");
            }
            u._capability.reject(D);
          }), r.on("PasswordRequest", (C) => {
            if (this._passwordCapability = new _util.PromiseCapability(), u.onPassword) {
              const D = (o) => {
                o instanceof Error ? this._passwordCapability.reject(o) : this._passwordCapability.resolve({ password: o });
              };
              try {
                u.onPassword(D, C.code);
              } catch (o) {
                this._passwordCapability.reject(o);
              }
            } else
              this._passwordCapability.reject(new _util.PasswordException(C.message, C.code));
            return this._passwordCapability.promise;
          }), r.on("DataLoaded", (C) => {
            var D;
            (D = u.onProgress) === null || D === void 0 || D.call(u, { loaded: C.length, total: C.length }), this.downloadInfoCapability.resolve(C);
          }), r.on("StartRenderPage", (C) => {
            this.destroyed || T(this, b).get(C.pageIndex)._startRenderPage(C.transparency, C.cacheKey);
          }), r.on("commonobj", (C) => {
            var D;
            let [o, F, z] = C;
            if (!this.destroyed && !this.commonObjs.has(o))
              switch (F) {
                case "Font":
                  const q = this._params;
                  if ("error" in z) {
                    const S = z.error;
                    (0, _util.warn)(`Error during font loading: ${S}`), this.commonObjs.resolve(o, S);
                    break;
                  }
                  const J = q.pdfBug && (D = globalThis.FontInspector) !== null && D !== void 0 && D.enabled ? (S, f) => globalThis.FontInspector.fontAdded(S, f) : null, $ = new _font_loader.FontFaceObject(z, { isEvalSupported: q.isEvalSupported, disableFontFace: q.disableFontFace, ignoreErrors: q.ignoreErrors, inspectFont: J });
                  this.fontLoader.bind($).catch((S) => r.sendWithPromise("FontFallback", { id: o })).finally(() => {
                    !q.fontExtraProperties && $.data && ($.data = null), this.commonObjs.resolve(o, $);
                  });
                  break;
                case "FontPath":
                case "Image":
                case "Pattern":
                  this.commonObjs.resolve(o, z);
                  break;
                default:
                  throw new Error(`Got unknown common object type ${F}`);
              }
          }), r.on("obj", (C) => {
            let [D, o, F, z] = C;
            if (this.destroyed)
              return;
            const q = T(this, b).get(o);
            if (!q.objs.has(D))
              switch (F) {
                case "Image":
                  if (q.objs.resolve(D, z), z) {
                    let $;
                    if (z.bitmap) {
                      const { width: S, height: f } = z;
                      $ = S * f * 4;
                    } else {
                      var J;
                      $ = ((J = z.data) === null || J === void 0 ? void 0 : J.length) || 0;
                    }
                    $ > _util.MAX_IMAGE_SIZE_TO_CACHE && (q._maybeCleanupAfterRender = !0);
                  }
                  break;
                case "Pattern":
                  q.objs.resolve(D, z);
                  break;
                default:
                  throw new Error(`Got unknown object type ${F}`);
              }
          }), r.on("DocProgress", (C) => {
            var D;
            this.destroyed || (D = u.onProgress) === null || D === void 0 || D.call(u, { loaded: C.loaded, total: C.total });
          }), r.on("FetchBuiltInCMap", (C) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(C) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), r.on("FetchStandardFontData", (C) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(C) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
        }
        getData() {
          return this.messageHandler.sendWithPromise("GetData", null);
        }
        saveDocument() {
          var r;
          return this.annotationStorage.size <= 0 && (0, _util.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead."), this.messageHandler.sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: this.annotationStorage.serializable, filename: ((r = this._fullReader) === null || r === void 0 ? void 0 : r.filename) ?? null }).finally(() => {
            this.annotationStorage.resetModified();
          });
        }
        getPage(r) {
          if (!Number.isInteger(r) || r <= 0 || r > this._numPages)
            return Promise.reject(new Error("Invalid page request."));
          const u = r - 1, C = T(this, L).get(u);
          if (C)
            return C;
          const D = this.messageHandler.sendWithPromise("GetPage", { pageIndex: u }).then((o) => {
            if (this.destroyed)
              throw new Error("Transport destroyed");
            const F = new PDFPageProxy(u, o, this, this._params.pdfBug);
            return T(this, b).set(u, F), F;
          });
          return T(this, L).set(u, D), D;
        }
        getPageIndex(r) {
          return typeof r != "object" || r === null || !Number.isInteger(r.num) || r.num < 0 || !Number.isInteger(r.gen) || r.gen < 0 ? Promise.reject(new Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", { num: r.num, gen: r.gen });
        }
        getAnnotations(r, u) {
          return this.messageHandler.sendWithPromise("GetAnnotations", { pageIndex: r, intent: u });
        }
        getFieldObjects() {
          return nt(this, m, Ae).call(this, "GetFieldObjects");
        }
        hasJSActions() {
          return nt(this, m, Ae).call(this, "HasJSActions");
        }
        getCalculationOrderIds() {
          return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
        }
        getDestinations() {
          return this.messageHandler.sendWithPromise("GetDestinations", null);
        }
        getDestination(r) {
          return typeof r != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", { id: r });
        }
        getPageLabels() {
          return this.messageHandler.sendWithPromise("GetPageLabels", null);
        }
        getPageLayout() {
          return this.messageHandler.sendWithPromise("GetPageLayout", null);
        }
        getPageMode() {
          return this.messageHandler.sendWithPromise("GetPageMode", null);
        }
        getViewerPreferences() {
          return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
        }
        getOpenAction() {
          return this.messageHandler.sendWithPromise("GetOpenAction", null);
        }
        getAttachments() {
          return this.messageHandler.sendWithPromise("GetAttachments", null);
        }
        getJavaScript() {
          return this.messageHandler.sendWithPromise("GetJavaScript", null);
        }
        getDocJSActions() {
          return this.messageHandler.sendWithPromise("GetDocJSActions", null);
        }
        getPageJSActions(r) {
          return this.messageHandler.sendWithPromise("GetPageJSActions", { pageIndex: r });
        }
        getStructTree(r) {
          return this.messageHandler.sendWithPromise("GetStructTree", { pageIndex: r });
        }
        getOutline() {
          return this.messageHandler.sendWithPromise("GetOutline", null);
        }
        getOptionalContentConfig() {
          return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((r) => new _optional_content_config.OptionalContentConfig(r));
        }
        getPermissions() {
          return this.messageHandler.sendWithPromise("GetPermissions", null);
        }
        getMetadata() {
          const r = "GetMetadata", u = T(this, c).get(r);
          if (u)
            return u;
          const C = this.messageHandler.sendWithPromise(r, null).then((D) => {
            var o, F;
            return { info: D[0], metadata: D[1] ? new _metadata.Metadata(D[1]) : null, contentDispositionFilename: ((o = this._fullReader) === null || o === void 0 ? void 0 : o.filename) ?? null, contentLength: ((F = this._fullReader) === null || F === void 0 ? void 0 : F.contentLength) ?? null };
          });
          return T(this, c).set(r, C), C;
        }
        getMarkInfo() {
          return this.messageHandler.sendWithPromise("GetMarkInfo", null);
        }
        async startCleanup() {
          let r = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          if (!this.destroyed) {
            await this.messageHandler.sendWithPromise("Cleanup", null);
            for (const u of T(this, b).values())
              if (!u.cleanup())
                throw new Error(`startCleanup: Page ${u.pageNumber} is currently rendering.`);
            this.commonObjs.clear(), r || this.fontLoader.clear(), T(this, c).clear(), this.filterFactory.destroy(!0);
          }
        }
        get loadingParams() {
          const { disableAutoFetch: r, enableXfa: u } = this._params;
          return (0, _util.shadow)(this, "loadingParams", { disableAutoFetch: r, enableXfa: u });
        }
      }
      c = new WeakMap(), b = new WeakMap(), L = new WeakMap(), m = new WeakSet(), Ae = function(r) {
        let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        const C = T(this, c).get(r);
        if (C)
          return C;
        const D = this.messageHandler.sendWithPromise(r, u);
        return T(this, c).set(r, D), D;
      };
      class PDFObjects {
        constructor() {
          et(this, I);
          et(this, x, /* @__PURE__ */ Object.create(null));
        }
        get(r) {
          let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          if (u) {
            const D = nt(this, I, _e).call(this, r);
            return D.capability.promise.then(() => u(D.data)), null;
          }
          const C = T(this, x)[r];
          if (C == null || !C.capability.settled)
            throw new Error(`Requesting object that isn't resolved yet ${r}.`);
          return C.data;
        }
        has(r) {
          const u = T(this, x)[r];
          return (u == null ? void 0 : u.capability.settled) || !1;
        }
        resolve(r) {
          let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          const C = nt(this, I, _e).call(this, r);
          C.data = u, C.capability.resolve();
        }
        clear() {
          for (const u in T(this, x)) {
            var r;
            const { data: C } = T(this, x)[u];
            C == null || (r = C.bitmap) === null || r === void 0 || r.close();
          }
          ut(this, x, /* @__PURE__ */ Object.create(null));
        }
      }
      x = new WeakMap(), I = new WeakSet(), _e = function(r) {
        return T(this, x)[r] || (T(this, x)[r] = { capability: new _util.PromiseCapability(), data: null });
      };
      class RenderTask {
        constructor(r) {
          et(this, i, null);
          ut(this, i, r), this.onContinue = null;
        }
        get promise() {
          return T(this, i).capability.promise;
        }
        cancel() {
          let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          T(this, i).cancel(null, r);
        }
        get separateAnnots() {
          const { separateAnnots: r } = T(this, i).operatorList;
          if (!r)
            return !1;
          const { annotationCanvasMap: u } = T(this, i);
          return r.form || r.canvas && (u == null ? void 0 : u.size) > 0;
        }
      }
      i = new WeakMap(), exports.RenderTask = RenderTask;
      const n = class {
        constructor(r) {
          let { callback: u, params: C, objs: D, commonObjs: o, annotationCanvasMap: F, operatorList: z, pageIndex: q, canvasFactory: J, filterFactory: $, useRequestAnimationFrame: S = !1, pdfBug: f = !1, pageColors: P = null } = r;
          this.callback = u, this.params = C, this.objs = D, this.commonObjs = o, this.annotationCanvasMap = F, this.operatorListIdx = null, this.operatorList = z, this._pageIndex = q, this.canvasFactory = J, this.filterFactory = $, this._pdfBug = f, this.pageColors = P, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = S === !0 && typeof window < "u", this.cancelled = !1, this.capability = new _util.PromiseCapability(), this.task = new RenderTask(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = C.canvasContext.canvas;
        }
        get completed() {
          return this.capability.promise.catch(function() {
          });
        }
        initializeGraphics(r) {
          var u, C;
          let { transparency: D = !1, optionalContentConfig: o } = r;
          if (this.cancelled)
            return;
          if (this._canvas) {
            if (T(n, A).has(this._canvas))
              throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
            T(n, A).add(this._canvas);
          }
          this._pdfBug && (u = globalThis.StepperManager) !== null && u !== void 0 && u.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
          const { canvasContext: F, viewport: z, transform: q, background: J } = this.params;
          this.gfx = new _canvas.CanvasGraphics(F, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: o }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({ transform: q, viewport: z, transparency: D, background: J }), this.operatorListIdx = 0, this.graphicsReady = !0, (C = this.graphicsReadyCallback) === null || C === void 0 || C.call(this);
        }
        cancel() {
          var r;
          let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          this.running = !1, this.cancelled = !0, (r = this.gfx) === null || r === void 0 || r.endDrawing(), this._canvas && T(n, A).delete(this._canvas), this.callback(u || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, "canvas", C));
        }
        operatorListChanged() {
          var r;
          this.graphicsReady ? ((r = this.stepper) === null || r === void 0 || r.updateOperatorList(this.operatorList), this.running || this._continue()) : this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
        }
        _continue() {
          this.running = !0, this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
        }
        _scheduleNext() {
          this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
            this._nextBound().catch(this._cancelBound);
          }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
        }
        async _next() {
          this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(this.pageColors), this._canvas && T(n, A).delete(this._canvas), this.callback())));
        }
      };
      let InternalRenderTask = n;
      A = new WeakMap(), et(InternalRenderTask, A, /* @__PURE__ */ new WeakSet());
      const version = "3.7.107";
      exports.version = version;
      const build = "036f855dc";
      exports.build = build;
    }, (k, d, t) => {
      var p, h, l, We, b;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.PrintAnnotationStorage = d.AnnotationStorage = void 0;
      var e = t(1), a = t(140), y = t(144);
      class w {
        constructor() {
          et(this, l);
          et(this, p, !1);
          et(this, h, /* @__PURE__ */ new Map());
          this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
        }
        getValue(m, M) {
          const x = T(this, h).get(m);
          return x === void 0 ? M : Object.assign(M, x);
        }
        getRawValue(m) {
          return T(this, h).get(m);
        }
        remove(m) {
          if (T(this, h).delete(m), T(this, h).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
            for (const M of T(this, h).values())
              if (M instanceof a.AnnotationEditor)
                return;
            this.onAnnotationEditor(null);
          }
        }
        setValue(m, M) {
          const x = T(this, h).get(m);
          let I = !1;
          if (x !== void 0)
            for (const [v, i] of Object.entries(M))
              x[v] !== i && (I = !0, x[v] = i);
          else
            I = !0, T(this, h).set(m, M);
          I && nt(this, l, We).call(this), M instanceof a.AnnotationEditor && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(M.constructor._type);
        }
        has(m) {
          return T(this, h).has(m);
        }
        getAll() {
          return T(this, h).size > 0 ? (0, e.objectFromMap)(T(this, h)) : null;
        }
        setAll(m) {
          for (const [M, x] of Object.entries(m))
            this.setValue(M, x);
        }
        get size() {
          return T(this, h).size;
        }
        resetModified() {
          T(this, p) && (ut(this, p, !1), typeof this.onResetModified == "function" && this.onResetModified());
        }
        get print() {
          return new O(this);
        }
        get serializable() {
          if (T(this, h).size === 0)
            return null;
          const m = /* @__PURE__ */ new Map();
          for (const [M, x] of T(this, h)) {
            const I = x instanceof a.AnnotationEditor ? x.serialize() : x;
            I && m.set(M, I);
          }
          return m;
        }
        static getHash(m) {
          if (!m)
            return "";
          const M = new y.MurmurHash3_64();
          for (const [x, I] of m)
            M.update(`${x}:${JSON.stringify(I)}`);
          return M.hexdigest();
        }
      }
      p = new WeakMap(), h = new WeakMap(), l = new WeakSet(), We = function() {
        T(this, p) || (ut(this, p, !0), typeof this.onSetModified == "function" && this.onSetModified());
      }, d.AnnotationStorage = w;
      class O extends w {
        constructor(M) {
          super();
          et(this, b, null);
          ut(this, b, structuredClone(M.serializable));
        }
        get print() {
          (0, e.unreachable)("Should not call PrintAnnotationStorage.print");
        }
        get serializable() {
          return T(this, b);
        }
      }
      b = new WeakMap(), d.PrintAnnotationStorage = O;
    }, (k, d, t) => {
      var w, O, p, h, l, c;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.AnnotationEditor = void 0;
      var e = t(141), a = t(1);
      const b = class {
        constructor(m) {
          et(this, w, this.focusin.bind(this));
          et(this, O, this.focusout.bind(this));
          et(this, p, !1);
          et(this, h, !1);
          et(this, l, !1);
          It(this, "_uiManager", null);
          et(this, c, b._zIndex++);
          this.constructor === b && (0, a.unreachable)("Cannot initialize AnnotationEditor."), this.parent = m.parent, this.id = m.id, this.width = this.height = null, this.pageIndex = m.parent.pageIndex, this.name = m.name, this.div = null, this._uiManager = m.uiManager;
          const { rotation: M, rawDims: { pageWidth: x, pageHeight: I, pageX: v, pageY: i } } = this.parent.viewport;
          this.rotation = M, this.pageRotation = (360 + M - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [x, I], this.pageTranslation = [v, i];
          const [A, n] = this.parentDimensions;
          this.x = m.x / A, this.y = m.y / n, this.isAttachedToDOM = !1;
        }
        static get _defaultLineColor() {
          return (0, a.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
        }
        addCommands(m) {
          this._uiManager.addCommands(m);
        }
        get currentLayer() {
          return this._uiManager.currentLayer;
        }
        setInBackground() {
          this.div.style.zIndex = 0;
        }
        setInForeground() {
          this.div.style.zIndex = T(this, c);
        }
        setParent(m) {
          m !== null && (this.pageIndex = m.pageIndex, this.pageDimensions = m.pageDimensions), this.parent = m;
        }
        focusin(m) {
          T(this, p) ? ut(this, p, !1) : this.parent.setSelected(this);
        }
        focusout(m) {
          var M;
          if (!this.isAttachedToDOM)
            return;
          const x = m.relatedTarget;
          (x == null || !x.closest(`#${this.id}`)) && (m.preventDefault(), (M = this.parent) !== null && M !== void 0 && M.isMultipleSelection || this.commitOrRemove());
        }
        commitOrRemove() {
          this.isEmpty() ? this.remove() : this.commit();
        }
        commit() {
          this.addToAnnotationStorage();
        }
        addToAnnotationStorage() {
          this._uiManager.addToAnnotationStorage(this);
        }
        dragstart(m) {
          const M = this.parent.div.getBoundingClientRect();
          this.startX = m.clientX - M.x, this.startY = m.clientY - M.y, m.dataTransfer.setData("text/plain", this.id), m.dataTransfer.effectAllowed = "move";
        }
        setAt(m, M, x, I) {
          const [v, i] = this.parentDimensions;
          [x, I] = this.screenToPageTranslation(x, I), this.x = (m + x) / v, this.y = (M + I) / i, this.div.style.left = 100 * this.x + "%", this.div.style.top = 100 * this.y + "%";
        }
        translate(m, M) {
          const [x, I] = this.parentDimensions;
          [m, M] = this.screenToPageTranslation(m, M), this.x += m / x, this.y += M / I, this.div.style.left = 100 * this.x + "%", this.div.style.top = 100 * this.y + "%";
        }
        screenToPageTranslation(m, M) {
          switch (this.parentRotation) {
            case 90:
              return [M, -m];
            case 180:
              return [-m, -M];
            case 270:
              return [-M, m];
            default:
              return [m, M];
          }
        }
        get parentScale() {
          return this._uiManager.viewParameters.realScale;
        }
        get parentRotation() {
          return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
        }
        get parentDimensions() {
          const { realScale: m } = this._uiManager.viewParameters, [M, x] = this.pageDimensions;
          return [M * m, x * m];
        }
        setDims(m, M) {
          const [x, I] = this.parentDimensions;
          this.div.style.width = 100 * m / x + "%", this.div.style.height = 100 * M / I + "%";
        }
        fixDims() {
          const { style: m } = this.div, { height: M, width: x } = m, I = x.endsWith("%"), v = M.endsWith("%");
          if (I && v)
            return;
          const [i, A] = this.parentDimensions;
          I || (m.width = 100 * parseFloat(x) / i + "%"), v || (m.height = 100 * parseFloat(M) / A + "%");
        }
        getInitialTranslation() {
          return [0, 0];
        }
        render() {
          this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.setAttribute("tabIndex", 0), this.setInForeground(), this.div.addEventListener("focusin", T(this, w)), this.div.addEventListener("focusout", T(this, O));
          const [m, M] = this.getInitialTranslation();
          return this.translate(m, M), (0, e.bindEvents)(this, this.div, ["dragstart", "pointerdown"]), this.div;
        }
        pointerdown(m) {
          const { isMac: M } = a.FeatureTest.platform;
          m.button !== 0 || m.ctrlKey && M ? m.preventDefault() : (m.ctrlKey && !M || m.shiftKey || m.metaKey && M ? this.parent.toggleSelected(this) : this.parent.setSelected(this), ut(this, p, !0));
        }
        getRect(m, M) {
          const x = this.parentScale, [I, v] = this.pageDimensions, [i, A] = this.pageTranslation, n = m / x, s = M / x, r = this.x * I, u = this.y * v, C = this.width * I, D = this.height * v;
          switch (this.rotation) {
            case 0:
              return [r + n + i, v - u - s - D + A, r + n + C + i, v - u - s + A];
            case 90:
              return [r + s + i, v - u + n + A, r + s + D + i, v - u + n + C + A];
            case 180:
              return [r - n - C + i, v - u + s + A, r - n + i, v - u + s + D + A];
            case 270:
              return [r - s - D + i, v - u - n - C + A, r - s + i, v - u - n + A];
            default:
              throw new Error("Invalid rotation");
          }
        }
        getRectInCurrentCoords(m, M) {
          const [x, I, v, i] = m, A = v - x, n = i - I;
          switch (this.rotation) {
            case 0:
              return [x, M - i, A, n];
            case 90:
              return [x, M - I, n, A];
            case 180:
              return [v, M - I, A, n];
            case 270:
              return [v, M - i, n, A];
            default:
              throw new Error("Invalid rotation");
          }
        }
        onceAdded() {
        }
        isEmpty() {
          return !1;
        }
        enableEditMode() {
          ut(this, l, !0);
        }
        disableEditMode() {
          ut(this, l, !1);
        }
        isInEditMode() {
          return T(this, l);
        }
        shouldGetKeyboardEvents() {
          return !1;
        }
        needsToBeRebuilt() {
          return this.div && !this.isAttachedToDOM;
        }
        rebuild() {
          var m;
          (m = this.div) === null || m === void 0 || m.addEventListener("focusin", T(this, w));
        }
        serialize() {
          (0, a.unreachable)("An editor must be serializable");
        }
        static deserialize(m, M, x) {
          const I = new this.prototype.constructor({ parent: M, id: M.getNextId(), uiManager: x });
          I.rotation = m.rotation;
          const [v, i] = I.pageDimensions, [A, n, s, r] = I.getRectInCurrentCoords(m.rect, i);
          return I.x = A / v, I.y = n / i, I.width = s / v, I.height = r / i, I;
        }
        remove() {
          this.div.removeEventListener("focusin", T(this, w)), this.div.removeEventListener("focusout", T(this, O)), this.isEmpty() || this.commit(), this.parent.remove(this);
        }
        select() {
          var m;
          (m = this.div) === null || m === void 0 || m.classList.add("selectedEditor");
        }
        unselect() {
          var m;
          (m = this.div) === null || m === void 0 || m.classList.remove("selectedEditor");
        }
        updateParams(m, M) {
        }
        disableEditing() {
        }
        enableEditing() {
        }
        get propertiesToUpdate() {
          return {};
        }
        get contentDiv() {
          return this.div;
        }
        get isEditing() {
          return T(this, h);
        }
        set isEditing(m) {
          ut(this, h, m), m ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null);
        }
      };
      let y = b;
      w = new WeakMap(), O = new WeakMap(), p = new WeakMap(), h = new WeakMap(), l = new WeakMap(), c = new WeakMap(), It(y, "_colorManager", new e.ColorManager()), It(y, "_zIndex", 1), d.AnnotationEditor = y;
    }, (k, d, t) => {
      var l, c, b, L, m, M, Ge, v, i, A, n, s, r, u, C, D, o, F, z, q, J, $, S, f, P, g, _, U, N, G, V, He, X, Se, H, ze, dt, Ve, E, $t, j, ae, Y, $e, rt, Xe, At, xe, vt, oe, mt, Ce;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.KeyboardManager = d.CommandManager = d.ColorManager = d.AnnotationEditorUIManager = void 0, d.bindEvents = function(Q, pt, xt) {
        for (const Mt of xt)
          pt.addEventListener(Mt, Q[Mt].bind(Q));
      }, d.opacityToHex = function(Q) {
        return Math.round(Math.min(255, Math.max(1, 255 * Q))).toString(16).padStart(2, "0");
      };
      var e = t(1), a = t(142);
      class y {
        constructor() {
          et(this, l, 0);
        }
        getId() {
          return `${e.AnnotationEditorPrefix}${ue(this, l)._++}`;
        }
      }
      l = new WeakMap();
      class w {
        constructor() {
          et(this, c, []);
          et(this, b, !1);
          et(this, L, void 0);
          et(this, m, -1);
          let Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 128;
          ut(this, L, Q);
        }
        add(Q) {
          let { cmd: pt, undo: xt, mustExec: Mt, type: Ft = NaN, overwriteIfSameType: at = !1, keepUndo: Pt = !1 } = Q;
          if (Mt && pt(), T(this, b))
            return;
          const Et = { cmd: pt, undo: xt, type: Ft };
          if (T(this, m) === -1) {
            T(this, c).length > 0 && (T(this, c).length = 0), ut(this, m, 0), T(this, c).push(Et);
            return;
          }
          if (at && T(this, c)[T(this, m)].type === Ft) {
            Pt && (Et.undo = T(this, c)[T(this, m)].undo), T(this, c)[T(this, m)] = Et;
            return;
          }
          const Ut = T(this, m) + 1;
          Ut === T(this, L) ? T(this, c).splice(0, 1) : (ut(this, m, Ut), Ut < T(this, c).length && T(this, c).splice(Ut)), T(this, c).push(Et);
        }
        undo() {
          T(this, m) !== -1 && (ut(this, b, !0), T(this, c)[T(this, m)].undo(), ut(this, b, !1), ut(this, m, T(this, m) - 1));
        }
        redo() {
          T(this, m) < T(this, c).length - 1 && (ut(this, m, T(this, m) + 1), ut(this, b, !0), T(this, c)[T(this, m)].cmd(), ut(this, b, !1));
        }
        hasSomethingToUndo() {
          return T(this, m) !== -1;
        }
        hasSomethingToRedo() {
          return T(this, m) < T(this, c).length - 1;
        }
        destroy() {
          ut(this, c, null);
        }
      }
      c = new WeakMap(), b = new WeakMap(), L = new WeakMap(), m = new WeakMap(), d.CommandManager = w;
      class O {
        constructor(Q) {
          et(this, M);
          this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
          const { isMac: pt } = e.FeatureTest.platform;
          for (const [xt, Mt] of Q)
            for (const Ft of xt) {
              const at = Ft.startsWith("mac+");
              pt && at ? (this.callbacks.set(Ft.slice(4), Mt), this.allKeys.add(Ft.split("+").at(-1))) : !pt && !at && (this.callbacks.set(Ft, Mt), this.allKeys.add(Ft.split("+").at(-1)));
            }
        }
        exec(Q, pt) {
          if (!this.allKeys.has(pt.key))
            return;
          const xt = this.callbacks.get(nt(this, M, Ge).call(this, pt));
          xt && (xt.bind(Q)(), pt.stopPropagation(), pt.preventDefault());
        }
      }
      M = new WeakSet(), Ge = function(Q) {
        Q.altKey && this.buffer.push("alt"), Q.ctrlKey && this.buffer.push("ctrl"), Q.metaKey && this.buffer.push("meta"), Q.shiftKey && this.buffer.push("shift"), this.buffer.push(Q.key);
        const pt = this.buffer.join("+");
        return this.buffer.length = 0, pt;
      }, d.KeyboardManager = O;
      const I = class {
        get _colors() {
          const Q = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
          return (0, a.getColorValues)(Q), (0, e.shadow)(this, "_colors", Q);
        }
        convert(Q) {
          const pt = (0, a.getRGB)(Q);
          if (!window.matchMedia("(forced-colors: active)").matches)
            return pt;
          for (const [xt, Mt] of this._colors)
            if (Mt.every((Ft, at) => Ft === pt[at]))
              return I._colorsMapping.get(xt);
          return pt;
        }
        getHexCode(Q) {
          const pt = this._colors.get(Q);
          return pt ? e.Util.makeHexColor(...pt) : Q;
        }
      };
      let p = I;
      It(p, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]])), d.ColorManager = p;
      const _t = class {
        constructor(Q, pt, xt) {
          et(this, V);
          et(this, X);
          et(this, H);
          et(this, dt);
          et(this, E);
          et(this, j);
          et(this, Y);
          et(this, rt);
          et(this, At);
          et(this, vt);
          et(this, mt);
          et(this, v, null);
          et(this, i, /* @__PURE__ */ new Map());
          et(this, A, /* @__PURE__ */ new Map());
          et(this, n, null);
          et(this, s, new w());
          et(this, r, 0);
          et(this, u, null);
          et(this, C, /* @__PURE__ */ new Set());
          et(this, D, null);
          et(this, o, new y());
          et(this, F, !1);
          et(this, z, e.AnnotationEditorType.NONE);
          et(this, q, /* @__PURE__ */ new Set());
          et(this, J, this.copy.bind(this));
          et(this, $, this.cut.bind(this));
          et(this, S, this.paste.bind(this));
          et(this, f, this.keydown.bind(this));
          et(this, P, this.onEditingAction.bind(this));
          et(this, g, this.onPageChanging.bind(this));
          et(this, _, this.onScaleChanging.bind(this));
          et(this, U, this.onRotationChanging.bind(this));
          et(this, N, { isEditing: !1, isEmpty: !0, hasSomethingToUndo: !1, hasSomethingToRedo: !1, hasSelectedEditor: !1 });
          et(this, G, null);
          ut(this, G, Q), ut(this, D, pt), T(this, D)._on("editingaction", T(this, P)), T(this, D)._on("pagechanging", T(this, g)), T(this, D)._on("scalechanging", T(this, _)), T(this, D)._on("rotationchanging", T(this, U)), ut(this, n, xt), this.viewParameters = { realScale: a.PixelsPerInch.PDF_TO_CSS_UNITS, rotation: 0 };
        }
        destroy() {
          nt(this, X, Se).call(this), T(this, D)._off("editingaction", T(this, P)), T(this, D)._off("pagechanging", T(this, g)), T(this, D)._off("scalechanging", T(this, _)), T(this, D)._off("rotationchanging", T(this, U));
          for (const Q of T(this, A).values())
            Q.destroy();
          T(this, A).clear(), T(this, i).clear(), T(this, C).clear(), ut(this, v, null), T(this, q).clear(), T(this, s).destroy();
        }
        onPageChanging(Q) {
          let { pageNumber: pt } = Q;
          ut(this, r, pt - 1);
        }
        focusMainContainer() {
          T(this, G).focus();
        }
        addShouldRescale(Q) {
          T(this, C).add(Q);
        }
        removeShouldRescale(Q) {
          T(this, C).delete(Q);
        }
        onScaleChanging(Q) {
          let { scale: pt } = Q;
          this.commitOrRemove(), this.viewParameters.realScale = pt * a.PixelsPerInch.PDF_TO_CSS_UNITS;
          for (const xt of T(this, C))
            xt.onScaleChanging();
        }
        onRotationChanging(Q) {
          let { pagesRotation: pt } = Q;
          this.commitOrRemove(), this.viewParameters.rotation = pt;
        }
        addToAnnotationStorage(Q) {
          Q.isEmpty() || !T(this, n) || T(this, n).has(Q.id) || T(this, n).setValue(Q.id, Q);
        }
        copy(Q) {
          if (Q.preventDefault(), T(this, v) && T(this, v).commitOrRemove(), !this.hasSelection)
            return;
          const pt = [];
          for (const xt of T(this, q))
            xt.isEmpty() || pt.push(xt.serialize());
          pt.length !== 0 && Q.clipboardData.setData("application/pdfjs", JSON.stringify(pt));
        }
        cut(Q) {
          this.copy(Q), this.delete();
        }
        paste(Q) {
          Q.preventDefault();
          let pt = Q.clipboardData.getData("application/pdfjs");
          if (!pt)
            return;
          try {
            pt = JSON.parse(pt);
          } catch (Mt) {
            (0, e.warn)(`paste: "${Mt.message}".`);
            return;
          }
          if (!Array.isArray(pt))
            return;
          this.unselectAll();
          const xt = T(this, A).get(T(this, r));
          try {
            const Mt = [];
            for (const Pt of pt) {
              const Et = xt.deserialize(Pt);
              if (!Et)
                return;
              Mt.push(Et);
            }
            const Ft = () => {
              for (const Pt of Mt)
                nt(this, At, xe).call(this, Pt);
              nt(this, mt, Ce).call(this, Mt);
            }, at = () => {
              for (const Pt of Mt)
                Pt.remove();
            };
            this.addCommands({ cmd: Ft, undo: at, mustExec: !0 });
          } catch (Mt) {
            (0, e.warn)(`paste: "${Mt.message}".`);
          }
        }
        keydown(Q) {
          var pt;
          (pt = this.getActive()) !== null && pt !== void 0 && pt.shouldGetKeyboardEvents() || _t._keyboardManager.exec(this, Q);
        }
        onEditingAction(Q) {
          ["undo", "redo", "delete", "selectAll"].includes(Q.name) && this[Q.name]();
        }
        setEditingState(Q) {
          Q ? (nt(this, V, He).call(this), nt(this, H, ze).call(this), nt(this, E, $t).call(this, { isEditing: T(this, z) !== e.AnnotationEditorType.NONE, isEmpty: nt(this, vt, oe).call(this), hasSomethingToUndo: T(this, s).hasSomethingToUndo(), hasSomethingToRedo: T(this, s).hasSomethingToRedo(), hasSelectedEditor: !1 })) : (nt(this, X, Se).call(this), nt(this, dt, Ve).call(this), nt(this, E, $t).call(this, { isEditing: !1 }));
        }
        registerEditorTypes(Q) {
          if (!T(this, u)) {
            ut(this, u, Q);
            for (const pt of T(this, u))
              nt(this, j, ae).call(this, pt.defaultPropertiesToUpdate);
          }
        }
        getId() {
          return T(this, o).getId();
        }
        get currentLayer() {
          return T(this, A).get(T(this, r));
        }
        get currentPageIndex() {
          return T(this, r);
        }
        addLayer(Q) {
          T(this, A).set(Q.pageIndex, Q), T(this, F) ? Q.enable() : Q.disable();
        }
        removeLayer(Q) {
          T(this, A).delete(Q.pageIndex);
        }
        updateMode(Q) {
          if (ut(this, z, Q), Q === e.AnnotationEditorType.NONE)
            this.setEditingState(!1), nt(this, rt, Xe).call(this);
          else {
            this.setEditingState(!0), nt(this, Y, $e).call(this);
            for (const pt of T(this, A).values())
              pt.updateMode(Q);
          }
        }
        updateToolbar(Q) {
          Q !== T(this, z) && T(this, D).dispatch("switchannotationeditormode", { source: this, mode: Q });
        }
        updateParams(Q, pt) {
          if (T(this, u)) {
            for (const xt of T(this, q))
              xt.updateParams(Q, pt);
            for (const xt of T(this, u))
              xt.updateDefaultParams(Q, pt);
          }
        }
        getEditors(Q) {
          const pt = [];
          for (const xt of T(this, i).values())
            xt.pageIndex === Q && pt.push(xt);
          return pt;
        }
        getEditor(Q) {
          return T(this, i).get(Q);
        }
        addEditor(Q) {
          T(this, i).set(Q.id, Q);
        }
        removeEditor(Q) {
          var pt;
          T(this, i).delete(Q.id), this.unselect(Q), (pt = T(this, n)) === null || pt === void 0 || pt.remove(Q.id);
        }
        setActiveEditor(Q) {
          T(this, v) !== Q && (ut(this, v, Q), Q && nt(this, j, ae).call(this, Q.propertiesToUpdate));
        }
        toggleSelected(Q) {
          T(this, q).has(Q) ? (T(this, q).delete(Q), Q.unselect(), nt(this, E, $t).call(this, { hasSelectedEditor: this.hasSelection })) : (T(this, q).add(Q), Q.select(), nt(this, j, ae).call(this, Q.propertiesToUpdate), nt(this, E, $t).call(this, { hasSelectedEditor: !0 }));
        }
        setSelected(Q) {
          for (const pt of T(this, q))
            pt !== Q && pt.unselect();
          T(this, q).clear(), T(this, q).add(Q), Q.select(), nt(this, j, ae).call(this, Q.propertiesToUpdate), nt(this, E, $t).call(this, { hasSelectedEditor: !0 });
        }
        isSelected(Q) {
          return T(this, q).has(Q);
        }
        unselect(Q) {
          Q.unselect(), T(this, q).delete(Q), nt(this, E, $t).call(this, { hasSelectedEditor: this.hasSelection });
        }
        get hasSelection() {
          return T(this, q).size !== 0;
        }
        undo() {
          T(this, s).undo(), nt(this, E, $t).call(this, { hasSomethingToUndo: T(this, s).hasSomethingToUndo(), hasSomethingToRedo: !0, isEmpty: nt(this, vt, oe).call(this) });
        }
        redo() {
          T(this, s).redo(), nt(this, E, $t).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: T(this, s).hasSomethingToRedo(), isEmpty: nt(this, vt, oe).call(this) });
        }
        addCommands(Q) {
          T(this, s).add(Q), nt(this, E, $t).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: !1, isEmpty: nt(this, vt, oe).call(this) });
        }
        delete() {
          if (this.commitOrRemove(), !this.hasSelection)
            return;
          const Q = [...T(this, q)];
          this.addCommands({ cmd: () => {
            for (const pt of Q)
              pt.remove();
          }, undo: () => {
            for (const pt of Q)
              nt(this, At, xe).call(this, pt);
          }, mustExec: !0 });
        }
        commitOrRemove() {
          var Q;
          (Q = T(this, v)) === null || Q === void 0 || Q.commitOrRemove();
        }
        selectAll() {
          for (const Q of T(this, q))
            Q.commit();
          nt(this, mt, Ce).call(this, T(this, i).values());
        }
        unselectAll() {
          if (T(this, v))
            T(this, v).commitOrRemove();
          else if (T(this, q).size !== 0) {
            for (const Q of T(this, q))
              Q.unselect();
            T(this, q).clear(), nt(this, E, $t).call(this, { hasSelectedEditor: !1 });
          }
        }
        isActive(Q) {
          return T(this, v) === Q;
        }
        getActive() {
          return T(this, v);
        }
        getMode() {
          return T(this, z);
        }
      };
      let h = _t;
      v = new WeakMap(), i = new WeakMap(), A = new WeakMap(), n = new WeakMap(), s = new WeakMap(), r = new WeakMap(), u = new WeakMap(), C = new WeakMap(), D = new WeakMap(), o = new WeakMap(), F = new WeakMap(), z = new WeakMap(), q = new WeakMap(), J = new WeakMap(), $ = new WeakMap(), S = new WeakMap(), f = new WeakMap(), P = new WeakMap(), g = new WeakMap(), _ = new WeakMap(), U = new WeakMap(), N = new WeakMap(), G = new WeakMap(), V = new WeakSet(), He = function() {
        T(this, G).addEventListener("keydown", T(this, f));
      }, X = new WeakSet(), Se = function() {
        T(this, G).removeEventListener("keydown", T(this, f));
      }, H = new WeakSet(), ze = function() {
        document.addEventListener("copy", T(this, J)), document.addEventListener("cut", T(this, $)), document.addEventListener("paste", T(this, S));
      }, dt = new WeakSet(), Ve = function() {
        document.removeEventListener("copy", T(this, J)), document.removeEventListener("cut", T(this, $)), document.removeEventListener("paste", T(this, S));
      }, E = new WeakSet(), $t = function(Q) {
        Object.entries(Q).some((pt) => {
          let [xt, Mt] = pt;
          return T(this, N)[xt] !== Mt;
        }) && T(this, D).dispatch("annotationeditorstateschanged", { source: this, details: Object.assign(T(this, N), Q) });
      }, j = new WeakSet(), ae = function(Q) {
        T(this, D).dispatch("annotationeditorparamschanged", { source: this, details: Q });
      }, Y = new WeakSet(), $e = function() {
        if (!T(this, F)) {
          ut(this, F, !0);
          for (const Q of T(this, A).values())
            Q.enable();
        }
      }, rt = new WeakSet(), Xe = function() {
        if (this.unselectAll(), T(this, F)) {
          ut(this, F, !1);
          for (const Q of T(this, A).values())
            Q.disable();
        }
      }, At = new WeakSet(), xe = function(Q) {
        const pt = T(this, A).get(Q.pageIndex);
        pt ? pt.addOrRebuild(Q) : this.addEditor(Q);
      }, vt = new WeakSet(), oe = function() {
        if (T(this, i).size === 0)
          return !0;
        if (T(this, i).size === 1)
          for (const Q of T(this, i).values())
            return Q.isEmpty();
        return !1;
      }, mt = new WeakSet(), Ce = function(Q) {
        T(this, q).clear();
        for (const pt of Q)
          pt.isEmpty() || (T(this, q).add(pt), pt.select());
        nt(this, E, $t).call(this, { hasSelectedEditor: !0 });
      }, It(h, "_keyboardManager", new O([[["ctrl+a", "mac+meta+a"], _t.prototype.selectAll], [["ctrl+z", "mac+meta+z"], _t.prototype.undo], [["ctrl+y", "ctrl+shift+Z", "mac+meta+shift+Z"], _t.prototype.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete"], _t.prototype.delete], [["Escape", "mac+Escape"], _t.prototype.unselectAll]])), d.AnnotationEditorUIManager = h;
    }, (k, d, t) => {
      var A, n, s, r, u, C, D, o, F, se, q, Jt, $, Yt;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.StatTimer = d.RenderingCancelledException = d.PixelsPerInch = d.PageViewport = d.PDFDateString = d.DOMStandardFontDataFactory = d.DOMSVGFactory = d.DOMFilterFactory = d.DOMCanvasFactory = d.DOMCMapReaderFactory = d.AnnotationPrefix = void 0, d.deprecated = function(P) {
        console.log("Deprecated API usage: " + P);
      }, d.getColorValues = function(P) {
        const g = document.createElement("span");
        g.style.visibility = "hidden", document.body.append(g);
        for (const _ of P.keys()) {
          g.style.color = _;
          const U = window.getComputedStyle(g).color;
          P.set(_, v(U));
        }
        g.remove();
      }, d.getCurrentTransform = function(P) {
        const { a: g, b: _, c: U, d: N, e: G, f: V } = P.getTransform();
        return [g, _, U, N, G, V];
      }, d.getCurrentTransformInverse = function(P) {
        const { a: g, b: _, c: U, d: N, e: G, f: V } = P.getTransform().invertSelf();
        return [g, _, U, N, G, V];
      }, d.getFilenameFromUrl = function(P) {
        return arguments.length > 1 && arguments[1] !== void 0 && arguments[1] || ([P] = P.split(/[#?]/, 1)), P.substring(P.lastIndexOf("/") + 1);
      }, d.getPdfFilenameFromUrl = function(P) {
        let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "document.pdf";
        if (typeof P != "string")
          return g;
        if (M(P))
          return (0, a.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), g;
        const _ = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, U = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(P);
        let N = _.exec(U[1]) || _.exec(U[2]) || _.exec(U[3]);
        if (N && (N = N[0], N.includes("%")))
          try {
            N = _.exec(decodeURIComponent(N))[0];
          } catch {
          }
        return N || g;
      }, d.getRGB = v, d.getXfaPageViewport = function(P, g) {
        let { scale: _ = 1, rotation: U = 0 } = g;
        const { width: N, height: G } = P.attributes.style, V = [0, 0, parseInt(N), parseInt(G)];
        return new L({ viewBox: V, scale: _, rotation: U });
      }, d.isDataScheme = M, d.isPdfFile = function(P) {
        return typeof P == "string" && /\.pdf$/i.test(P);
      }, d.isValidFetchUrl = x, d.loadScript = function(P) {
        let g = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        return new Promise((_, U) => {
          const N = document.createElement("script");
          N.src = P, N.onload = function(G) {
            g && N.remove(), _(G);
          }, N.onerror = function() {
            U(new Error(`Cannot load script at: ${N.src}`));
          }, (document.head || document.documentElement).append(N);
        });
      }, d.setLayerDimensions = function(P, g) {
        let _ = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], U = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
        if (g instanceof L) {
          const { pageWidth: N, pageHeight: G } = g.rawDims, { style: V } = P, W = `calc(var(--scale-factor) * ${N}px)`, X = `calc(var(--scale-factor) * ${G}px)`;
          _ && g.rotation % 180 != 0 ? (V.width = X, V.height = W) : (V.width = W, V.height = X);
        }
        U && P.setAttribute("data-main-rotation", g.rotation);
      };
      var e = t(143), a = t(1);
      const y = "http://www.w3.org/2000/svg";
      d.AnnotationPrefix = "pdfjs_internal_id_";
      const i = class {
      };
      let w = i;
      It(w, "CSS", 96), It(w, "PDF", 72), It(w, "PDF_TO_CSS_UNITS", i.CSS / i.PDF), d.PixelsPerInch = w;
      class O extends e.BaseFilterFactory {
        constructor() {
          let { docId: g, ownerDocument: _ = globalThis.document } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          super();
          et(this, F);
          et(this, q);
          et(this, $);
          et(this, A, void 0);
          et(this, n, void 0);
          et(this, s, void 0);
          et(this, r, void 0);
          et(this, u, void 0);
          et(this, C, void 0);
          et(this, D, void 0);
          et(this, o, 0);
          ut(this, s, g), ut(this, r, _);
        }
        addFilter(g) {
          if (!g)
            return "none";
          let _, U, N, G, V = T(this, F, se).get(g);
          if (V)
            return V;
          if (g.length === 1) {
            const Z = g[0], dt = new Array(256);
            for (let lt = 0; lt < 256; lt++)
              dt[lt] = Z[lt] / 255;
            G = _ = U = N = dt.join(",");
          } else {
            const [Z, dt, lt] = g, E = new Array(256), R = new Array(256), j = new Array(256);
            for (let B = 0; B < 256; B++)
              E[B] = Z[B] / 255, R[B] = dt[B] / 255, j[B] = lt[B] / 255;
            _ = E.join(","), U = R.join(","), N = j.join(","), G = `${_}${U}${N}`;
          }
          if (V = T(this, F, se).get(G), V)
            return T(this, F, se).set(g, V), V;
          const W = `g_${T(this, s)}_transfer_map_${ue(this, o)._++}`, X = `url(#${W})`;
          T(this, F, se).set(g, X), T(this, F, se).set(G, X);
          const K = T(this, r).createElementNS(y, "filter", y);
          K.setAttribute("id", W), K.setAttribute("color-interpolation-filters", "sRGB");
          const H = T(this, r).createElementNS(y, "feComponentTransfer");
          return K.append(H), nt(this, $, Yt).call(this, H, "feFuncR", _), nt(this, $, Yt).call(this, H, "feFuncG", U), nt(this, $, Yt).call(this, H, "feFuncB", N), T(this, q, Jt).append(K), X;
        }
        addHCMFilter(g, _) {
          var U;
          const N = `${g}-${_}`;
          if (T(this, C) === N)
            return T(this, D);
          if (ut(this, C, N), ut(this, D, "none"), (U = T(this, u)) === null || U === void 0 || U.remove(), !g || !_)
            return T(this, D);
          T(this, q, Jt).style.color = g;
          const G = v(g = getComputedStyle(T(this, q, Jt)).getPropertyValue("color"));
          g = a.Util.makeHexColor(...G), T(this, q, Jt).style.color = _;
          const V = v(_ = getComputedStyle(T(this, q, Jt)).getPropertyValue("color"));
          if (_ = a.Util.makeHexColor(...V), T(this, q, Jt).style.color = "", g === "#000000" && _ === "#ffffff" || g === _)
            return T(this, D);
          const W = new Array(256);
          for (let E = 0; E <= 255; E++) {
            const R = E / 255;
            W[E] = R <= 0.03928 ? R / 12.92 : ((R + 0.055) / 1.055) ** 2.4;
          }
          const X = W.join(","), K = `g_${T(this, s)}_hcm_filter`, H = ut(this, u, T(this, r).createElementNS(y, "filter", y));
          H.setAttribute("id", K), H.setAttribute("color-interpolation-filters", "sRGB");
          let Z = T(this, r).createElementNS(y, "feComponentTransfer");
          H.append(Z), nt(this, $, Yt).call(this, Z, "feFuncR", X), nt(this, $, Yt).call(this, Z, "feFuncG", X), nt(this, $, Yt).call(this, Z, "feFuncB", X);
          const dt = T(this, r).createElementNS(y, "feColorMatrix");
          dt.setAttribute("type", "matrix"), dt.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), H.append(dt), Z = T(this, r).createElementNS(y, "feComponentTransfer"), H.append(Z);
          const lt = (E, R) => {
            const j = G[E] / 255, B = V[E] / 255, Y = new Array(R + 1);
            for (let tt = 0; tt <= R; tt++)
              Y[tt] = j + tt / R * (B - j);
            return Y.join(",");
          };
          return nt(this, $, Yt).call(this, Z, "feFuncR", lt(0, 5)), nt(this, $, Yt).call(this, Z, "feFuncG", lt(1, 5)), nt(this, $, Yt).call(this, Z, "feFuncB", lt(2, 5)), T(this, q, Jt).append(H), ut(this, D, `url(#${K})`), T(this, D);
        }
        destroy() {
          (!(arguments.length > 0 && arguments[0] !== void 0 && arguments[0]) || !T(this, D)) && (T(this, n) && (T(this, n).parentNode.parentNode.remove(), ut(this, n, null)), T(this, A) && (T(this, A).clear(), ut(this, A, null)), ut(this, o, 0));
        }
      }
      A = new WeakMap(), n = new WeakMap(), s = new WeakMap(), r = new WeakMap(), u = new WeakMap(), C = new WeakMap(), D = new WeakMap(), o = new WeakMap(), F = new WeakSet(), se = function() {
        return T(this, A) || ut(this, A, /* @__PURE__ */ new Map());
      }, q = new WeakSet(), Jt = function() {
        if (!T(this, n)) {
          const g = T(this, r).createElement("div"), { style: _ } = g;
          _.visibility = "hidden", _.contain = "strict", _.width = _.height = 0, _.position = "absolute", _.top = _.left = 0, _.zIndex = -1;
          const U = T(this, r).createElementNS(y, "svg");
          U.setAttribute("width", 0), U.setAttribute("height", 0), ut(this, n, T(this, r).createElementNS(y, "defs")), g.append(U), U.append(T(this, n)), T(this, r).body.append(g);
        }
        return T(this, n);
      }, $ = new WeakSet(), Yt = function(g, _, U) {
        const N = T(this, r).createElementNS(y, _);
        N.setAttribute("type", "discrete"), N.setAttribute("tableValues", U), g.append(N);
      }, d.DOMFilterFactory = O;
      class p extends e.BaseCanvasFactory {
        constructor() {
          let { ownerDocument: P = globalThis.document } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          super(), this._document = P;
        }
        _createCanvas(P, g) {
          const _ = this._document.createElement("canvas");
          return _.width = P, _.height = g, _;
        }
      }
      d.DOMCanvasFactory = p;
      async function h(f) {
        let P = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        if (x(f, document.baseURI)) {
          const g = await fetch(f);
          if (!g.ok)
            throw new Error(g.statusText);
          return P ? new Uint8Array(await g.arrayBuffer()) : (0, a.stringToBytes)(await g.text());
        }
        return new Promise((g, _) => {
          const U = new XMLHttpRequest();
          U.open("GET", f, !0), P && (U.responseType = "arraybuffer"), U.onreadystatechange = () => {
            if (U.readyState === XMLHttpRequest.DONE) {
              if (U.status === 200 || U.status === 0) {
                let N;
                if (P && U.response ? N = new Uint8Array(U.response) : !P && U.responseText && (N = (0, a.stringToBytes)(U.responseText)), N) {
                  g(N);
                  return;
                }
              }
              _(new Error(U.statusText));
            }
          }, U.send(null);
        });
      }
      class l extends e.BaseCMapReaderFactory {
        _fetchData(P, g) {
          return h(P, this.isCompressed).then((_) => ({ cMapData: _, compressionType: g }));
        }
      }
      d.DOMCMapReaderFactory = l;
      class c extends e.BaseStandardFontDataFactory {
        _fetchData(P) {
          return h(P, !0);
        }
      }
      d.DOMStandardFontDataFactory = c;
      class b extends e.BaseSVGFactory {
        _createSVG(P) {
          return document.createElementNS(y, P);
        }
      }
      d.DOMSVGFactory = b;
      class L {
        constructor(P) {
          let { viewBox: g, scale: _, rotation: U, offsetX: N = 0, offsetY: G = 0, dontFlip: V = !1 } = P;
          this.viewBox = g, this.scale = _, this.rotation = U, this.offsetX = N, this.offsetY = G;
          const W = (g[2] + g[0]) / 2, X = (g[3] + g[1]) / 2;
          let K, H, Z, dt, lt, E, R, j;
          switch (U %= 360, U < 0 && (U += 360), U) {
            case 180:
              K = -1, H = 0, Z = 0, dt = 1;
              break;
            case 90:
              K = 0, H = 1, Z = 1, dt = 0;
              break;
            case 270:
              K = 0, H = -1, Z = -1, dt = 0;
              break;
            case 0:
              K = 1, H = 0, Z = 0, dt = -1;
              break;
            default:
              throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
          }
          V && (Z = -Z, dt = -dt), K === 0 ? (lt = Math.abs(X - g[1]) * _ + N, E = Math.abs(W - g[0]) * _ + G, R = (g[3] - g[1]) * _, j = (g[2] - g[0]) * _) : (lt = Math.abs(W - g[0]) * _ + N, E = Math.abs(X - g[1]) * _ + G, R = (g[2] - g[0]) * _, j = (g[3] - g[1]) * _), this.transform = [K * _, H * _, Z * _, dt * _, lt - K * _ * W - Z * _ * X, E - H * _ * W - dt * _ * X], this.width = R, this.height = j;
        }
        get rawDims() {
          const { viewBox: P } = this;
          return (0, a.shadow)(this, "rawDims", { pageWidth: P[2] - P[0], pageHeight: P[3] - P[1], pageX: P[0], pageY: P[1] });
        }
        clone() {
          let { scale: P = this.scale, rotation: g = this.rotation, offsetX: _ = this.offsetX, offsetY: U = this.offsetY, dontFlip: N = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new L({ viewBox: this.viewBox.slice(), scale: P, rotation: g, offsetX: _, offsetY: U, dontFlip: N });
        }
        convertToViewportPoint(P, g) {
          return a.Util.applyTransform([P, g], this.transform);
        }
        convertToViewportRectangle(P) {
          const g = a.Util.applyTransform([P[0], P[1]], this.transform), _ = a.Util.applyTransform([P[2], P[3]], this.transform);
          return [g[0], g[1], _[0], _[1]];
        }
        convertToPdfPoint(P, g) {
          return a.Util.applyInverseTransform([P, g], this.transform);
        }
      }
      d.PageViewport = L;
      class m extends a.BaseException {
        constructor(P, g) {
          let _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          super(P, "RenderingCancelledException"), this.type = g, this.extraDelay = _;
        }
      }
      d.RenderingCancelledException = m;
      function M(f) {
        const P = f.length;
        let g = 0;
        for (; g < P && f[g].trim() === ""; )
          g++;
        return f.substring(g, g + 5).toLowerCase() === "data:";
      }
      d.StatTimer = class {
        constructor() {
          It(this, "started", /* @__PURE__ */ Object.create(null));
          It(this, "times", []);
        }
        time(P) {
          P in this.started && (0, a.warn)(`Timer is already running for ${P}`), this.started[P] = Date.now();
        }
        timeEnd(P) {
          P in this.started || (0, a.warn)(`Timer has not been started for ${P}`), this.times.push({ name: P, start: this.started[P], end: Date.now() }), delete this.started[P];
        }
        toString() {
          const P = [];
          let g = 0;
          for (const { name: _ } of this.times)
            g = Math.max(_.length, g);
          for (const { name: _, start: U, end: N } of this.times)
            P.push(`${_.padEnd(g)} ${N - U}ms
`);
          return P.join("");
        }
      };
      function x(f, P) {
        try {
          const { protocol: g } = P ? new URL(f, P) : new URL(f);
          return g === "http:" || g === "https:";
        } catch {
          return !1;
        }
      }
      let I;
      d.PDFDateString = class {
        static toDateObject(P) {
          if (!P || typeof P != "string")
            return null;
          I || (I = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
          const g = I.exec(P);
          if (!g)
            return null;
          const _ = parseInt(g[1], 10);
          let U = parseInt(g[2], 10);
          U = U >= 1 && U <= 12 ? U - 1 : 0;
          let N = parseInt(g[3], 10);
          N = N >= 1 && N <= 31 ? N : 1;
          let G = parseInt(g[4], 10);
          G = G >= 0 && G <= 23 ? G : 0;
          let V = parseInt(g[5], 10);
          V = V >= 0 && V <= 59 ? V : 0;
          let W = parseInt(g[6], 10);
          W = W >= 0 && W <= 59 ? W : 0;
          const X = g[7] || "Z";
          let K = parseInt(g[8], 10);
          K = K >= 0 && K <= 23 ? K : 0;
          let H = parseInt(g[9], 10) || 0;
          return H = H >= 0 && H <= 59 ? H : 0, X === "-" ? (G += K, V += H) : X === "+" && (G -= K, V -= H), new Date(Date.UTC(_, U, N, G, V, W));
        }
      };
      function v(f) {
        if (f.startsWith("#")) {
          const P = parseInt(f.slice(1), 16);
          return [(16711680 & P) >> 16, (65280 & P) >> 8, 255 & P];
        }
        return f.startsWith("rgb(") ? f.slice(4, -1).split(",").map((P) => parseInt(P)) : f.startsWith("rgba(") ? f.slice(5, -1).split(",").map((P) => parseInt(P)).slice(0, 3) : ((0, a.warn)(`Not a valid color format: "${f}"`), [0, 0, 0]);
      }
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.BaseStandardFontDataFactory = d.BaseSVGFactory = d.BaseFilterFactory = d.BaseCanvasFactory = d.BaseCMapReaderFactory = void 0;
      var e = t(1);
      class a {
        constructor() {
          this.constructor === a && (0, e.unreachable)("Cannot initialize BaseFilterFactory.");
        }
        addFilter(l) {
          return "none";
        }
        addHCMFilter(l, c) {
          return "none";
        }
        destroy() {
        }
      }
      d.BaseFilterFactory = a;
      class y {
        constructor() {
          this.constructor === y && (0, e.unreachable)("Cannot initialize BaseCanvasFactory.");
        }
        create(l, c) {
          if (l <= 0 || c <= 0)
            throw new Error("Invalid canvas size");
          const b = this._createCanvas(l, c);
          return { canvas: b, context: b.getContext("2d") };
        }
        reset(l, c, b) {
          if (!l.canvas)
            throw new Error("Canvas is not specified");
          if (c <= 0 || b <= 0)
            throw new Error("Invalid canvas size");
          l.canvas.width = c, l.canvas.height = b;
        }
        destroy(l) {
          if (!l.canvas)
            throw new Error("Canvas is not specified");
          l.canvas.width = 0, l.canvas.height = 0, l.canvas = null, l.context = null;
        }
        _createCanvas(l, c) {
          (0, e.unreachable)("Abstract method `_createCanvas` called.");
        }
      }
      d.BaseCanvasFactory = y;
      class w {
        constructor(l) {
          let { baseUrl: c = null, isCompressed: b = !0 } = l;
          this.constructor === w && (0, e.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = c, this.isCompressed = b;
        }
        async fetch(l) {
          let { name: c } = l;
          if (!this.baseUrl)
            throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
          if (!c)
            throw new Error("CMap name must be specified.");
          const b = this.baseUrl + c + (this.isCompressed ? ".bcmap" : ""), L = this.isCompressed ? e.CMapCompressionType.BINARY : e.CMapCompressionType.NONE;
          return this._fetchData(b, L).catch((m) => {
            throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${b}`);
          });
        }
        _fetchData(l, c) {
          (0, e.unreachable)("Abstract method `_fetchData` called.");
        }
      }
      d.BaseCMapReaderFactory = w;
      class O {
        constructor(l) {
          let { baseUrl: c = null } = l;
          this.constructor === O && (0, e.unreachable)("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = c;
        }
        async fetch(l) {
          let { filename: c } = l;
          if (!this.baseUrl)
            throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
          if (!c)
            throw new Error("Font filename must be specified.");
          const b = `${this.baseUrl}${c}`;
          return this._fetchData(b).catch((L) => {
            throw new Error(`Unable to load font data at: ${b}`);
          });
        }
        _fetchData(l) {
          (0, e.unreachable)("Abstract method `_fetchData` called.");
        }
      }
      d.BaseStandardFontDataFactory = O;
      class p {
        constructor() {
          this.constructor === p && (0, e.unreachable)("Cannot initialize BaseSVGFactory.");
        }
        create(l, c) {
          let b = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
          if (l <= 0 || c <= 0)
            throw new Error("Invalid SVG dimensions");
          const L = this._createSVG("svg:svg");
          return L.setAttribute("version", "1.1"), b || (L.setAttribute("width", `${l}px`), L.setAttribute("height", `${c}px`)), L.setAttribute("preserveAspectRatio", "none"), L.setAttribute("viewBox", `0 0 ${l} ${c}`), L;
        }
        createElement(l) {
          if (typeof l != "string")
            throw new Error("Invalid SVG element type");
          return this._createSVG(l);
        }
        _createSVG(l) {
          (0, e.unreachable)("Abstract method `_createSVG` called.");
        }
      }
      d.BaseSVGFactory = p;
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.MurmurHash3_64 = void 0;
      var e = t(1);
      const a = 3285377520, y = 4294901760, w = 65535;
      d.MurmurHash3_64 = class {
        constructor(p) {
          this.h1 = p ? 4294967295 & p : a, this.h2 = p ? 4294967295 & p : a;
        }
        update(p) {
          let h, l;
          if (typeof p == "string") {
            h = new Uint8Array(2 * p.length), l = 0;
            for (let s = 0, r = p.length; s < r; s++) {
              const u = p.charCodeAt(s);
              u <= 255 ? h[l++] = u : (h[l++] = u >>> 8, h[l++] = 255 & u);
            }
          } else {
            if (!(0, e.isArrayBuffer)(p))
              throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
            h = p.slice(), l = h.byteLength;
          }
          const c = l >> 2, b = l - 4 * c, L = new Uint32Array(h.buffer, 0, c);
          let m = 0, M = 0, x = this.h1, I = this.h2;
          const v = 3432918353, i = 461845907, A = 11601, n = 13715;
          for (let s = 0; s < c; s++)
            1 & s ? (m = L[s], m = m * v & y | m * A & w, m = m << 15 | m >>> 17, m = m * i & y | m * n & w, x ^= m, x = x << 13 | x >>> 19, x = 5 * x + 3864292196) : (M = L[s], M = M * v & y | M * A & w, M = M << 15 | M >>> 17, M = M * i & y | M * n & w, I ^= M, I = I << 13 | I >>> 19, I = 5 * I + 3864292196);
          switch (m = 0, b) {
            case 3:
              m ^= h[4 * c + 2] << 16;
            case 2:
              m ^= h[4 * c + 1] << 8;
            case 1:
              m ^= h[4 * c], m = m * v & y | m * A & w, m = m << 15 | m >>> 17, m = m * i & y | m * n & w, 1 & c ? x ^= m : I ^= m;
          }
          this.h1 = x, this.h2 = I;
        }
        hexdigest() {
          let p = this.h1, h = this.h2;
          return p ^= h >>> 1, p = 3981806797 * p & y | 36045 * p & w, h = 4283543511 * h & y | (2950163797 * (h << 16 | p >>> 16) & y) >>> 16, p ^= h >>> 1, p = 444984403 * p & y | 60499 * p & w, h = 3301882366 * h & y | (3120437893 * (h << 16 | p >>> 16) & y) >>> 16, p ^= h >>> 1, (p >>> 0).toString(16).padStart(8, "0") + (h >>> 0).toString(16).padStart(8, "0");
        }
      };
    }, (k, d, t) => {
      var y, w;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.FontLoader = d.FontFaceObject = void 0;
      var e = t(1), a = t(3);
      d.FontLoader = (w = class {
        constructor(p) {
          et(this, y, /* @__PURE__ */ new Set());
          let { ownerDocument: h = globalThis.document, styleElement: l = null } = p;
          this._document = h, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
        }
        addNativeFontFace(p) {
          this.nativeFontFaces.add(p), this._document.fonts.add(p);
        }
        removeNativeFontFace(p) {
          this.nativeFontFaces.delete(p), this._document.fonts.delete(p);
        }
        insertRule(p) {
          this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
          const h = this.styleElement.sheet;
          h.insertRule(p, h.cssRules.length);
        }
        clear() {
          for (const p of this.nativeFontFaces)
            this._document.fonts.delete(p);
          this.nativeFontFaces.clear(), T(this, y).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
        }
        async loadSystemFont(p) {
          if (p && !T(this, y).has(p.loadedName))
            if ((0, e.assert)(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
              const { loadedName: h, src: l, style: c } = p, b = new FontFace(h, l, c);
              this.addNativeFontFace(b);
              try {
                await b.load(), T(this, y).add(h);
              } catch {
                (0, e.warn)(`Cannot load system font: ${p.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(b);
              }
            } else
              (0, e.unreachable)("Not implemented: loadSystemFont without the Font Loading API.");
        }
        async bind(p) {
          if (p.attached || p.missingFile && !p.systemFontInfo)
            return;
          if (p.attached = !0, p.systemFontInfo) {
            await this.loadSystemFont(p.systemFontInfo);
            return;
          }
          if (this.isFontLoadingAPISupported) {
            const l = p.createNativeFontFace();
            if (l) {
              this.addNativeFontFace(l);
              try {
                await l.loaded;
              } catch (c) {
                throw (0, e.warn)(`Failed to load font '${l.family}': '${c}'.`), p.disableFontFace = !0, c;
              }
            }
            return;
          }
          const h = p.createFontFaceRule();
          if (h) {
            if (this.insertRule(h), this.isSyncFontLoadingSupported)
              return;
            await new Promise((l) => {
              const c = this._queueLoadingCallback(l);
              this._prepareFontLoadEvent(p, c);
            });
          }
        }
        get isFontLoadingAPISupported() {
          var p;
          const h = !((p = this._document) === null || p === void 0 || !p.fonts);
          return (0, e.shadow)(this, "isFontLoadingAPISupported", h);
        }
        get isSyncFontLoadingSupported() {
          let p = !1;
          return (a.isNodeJS || typeof navigator < "u" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (p = !0), (0, e.shadow)(this, "isSyncFontLoadingSupported", p);
        }
        _queueLoadingCallback(p) {
          const { loadingRequests: h } = this, l = { done: !1, complete: function() {
            for ((0, e.assert)(!l.done, "completeRequest() cannot be called twice."), l.done = !0; h.length > 0 && h[0].done; ) {
              const b = h.shift();
              setTimeout(b.callback, 0);
            }
          }, callback: p };
          return h.push(l), l;
        }
        get _loadTestFont() {
          const p = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
          return (0, e.shadow)(this, "_loadTestFont", p);
        }
        _prepareFontLoadEvent(p, h) {
          function l(r, u) {
            return r.charCodeAt(u) << 24 | r.charCodeAt(u + 1) << 16 | r.charCodeAt(u + 2) << 8 | 255 & r.charCodeAt(u + 3);
          }
          function c(r, u, C, D) {
            return r.substring(0, u) + D + r.substring(u + C);
          }
          let b, L;
          const m = this._document.createElement("canvas");
          m.width = 1, m.height = 1;
          const M = m.getContext("2d");
          let x = 0;
          const I = `lt${Date.now()}${this.loadTestFontId++}`;
          let v = this._loadTestFont;
          v = c(v, 976, I.length, I);
          const i = 1482184792;
          let A = l(v, 16);
          for (b = 0, L = I.length - 3; b < L; b += 4)
            A = A - i + l(I, b) | 0;
          b < I.length && (A = A - i + l(I + "XXX", b) | 0), v = c(v, 16, 4, (0, e.string32)(A));
          const n = `@font-face {font-family:"${I}";src:${`url(data:font/opentype;base64,${btoa(v)});`}}`;
          this.insertRule(n);
          const s = this._document.createElement("div");
          s.style.visibility = "hidden", s.style.width = s.style.height = "10px", s.style.position = "absolute", s.style.top = s.style.left = "0px";
          for (const r of [p.loadedName, I]) {
            const u = this._document.createElement("span");
            u.textContent = "Hi", u.style.fontFamily = r, s.append(u);
          }
          this._document.body.append(s), function r(u, C) {
            if (++x > 30) {
              (0, e.warn)("Load test font never loaded."), C();
              return;
            }
            M.font = "30px " + u, M.fillText(".", 0, 20), M.getImageData(0, 0, 1, 1).data[3] > 0 ? C() : setTimeout(r.bind(null, u, C));
          }(I, () => {
            s.remove(), h.complete();
          });
        }
      }, y = new WeakMap(), w), d.FontFaceObject = class {
        constructor(p, h) {
          let { isEvalSupported: l = !0, disableFontFace: c = !1, ignoreErrors: b = !1, inspectFont: L = null } = h;
          this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
          for (const m in p)
            this[m] = p[m];
          this.isEvalSupported = l !== !1, this.disableFontFace = c === !0, this.ignoreErrors = b === !0, this._inspectFont = L;
        }
        createNativeFontFace() {
          var p;
          if (!this.data || this.disableFontFace)
            return null;
          let h;
          if (this.cssFontInfo) {
            const l = { weight: this.cssFontInfo.fontWeight };
            this.cssFontInfo.italicAngle && (l.style = `oblique ${this.cssFontInfo.italicAngle}deg`), h = new FontFace(this.cssFontInfo.fontFamily, this.data, l);
          } else
            h = new FontFace(this.loadedName, this.data, {});
          return (p = this._inspectFont) === null || p === void 0 || p.call(this, this), h;
        }
        createFontFaceRule() {
          var p;
          if (!this.data || this.disableFontFace)
            return null;
          const h = (0, e.bytesToString)(this.data), l = `url(data:${this.mimetype};base64,${btoa(h)});`;
          let c;
          if (this.cssFontInfo) {
            let b = `font-weight: ${this.cssFontInfo.fontWeight};`;
            this.cssFontInfo.italicAngle && (b += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), c = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${b}src:${l}}`;
          } else
            c = `@font-face {font-family:"${this.loadedName}";src:${l}}`;
          return (p = this._inspectFont) === null || p === void 0 || p.call(this, this, l), c;
        }
        getPathGenerator(p, h) {
          if (this.compiledGlyphs[h] !== void 0)
            return this.compiledGlyphs[h];
          let l;
          try {
            l = p.get(this.loadedName + "_path_" + h);
          } catch (c) {
            if (!this.ignoreErrors)
              throw c;
            return (0, e.warn)(`getPathGenerator - ignoring character: "${c}".`), this.compiledGlyphs[h] = function(b, L) {
            };
          }
          if (this.isEvalSupported && e.FeatureTest.isEvalSupported) {
            const c = [];
            for (const b of l) {
              const L = b.args !== void 0 ? b.args.join(",") : "";
              c.push("c.", b.cmd, "(", L, `);
`);
            }
            return this.compiledGlyphs[h] = new Function("c", "size", c.join(""));
          }
          return this.compiledGlyphs[h] = function(c, b) {
            for (const L of l)
              L.cmd === "scale" && (L.args = [b, -b]), c[L.cmd].apply(c, L.args);
          };
        }
      };
    }, (k, d, t) => {
      var o, we, z, Ee;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.CanvasGraphics = void 0;
      var e = t(1), a = t(142), y = t(147), w = t(148), O = t(3);
      const p = 4096, h = 16;
      class l {
        constructor(S) {
          this.canvasFactory = S, this.cache = /* @__PURE__ */ Object.create(null);
        }
        getCanvas(S, f, P) {
          let g;
          return this.cache[S] !== void 0 ? (g = this.cache[S], this.canvasFactory.reset(g, f, P)) : (g = this.canvasFactory.create(f, P), this.cache[S] = g), g;
        }
        delete(S) {
          delete this.cache[S];
        }
        clear() {
          for (const S in this.cache) {
            const f = this.cache[S];
            this.canvasFactory.destroy(f), delete this.cache[S];
          }
        }
      }
      function c($, S, f, P, g, _, U, N, G, V) {
        const [W, X, K, H, Z, dt] = (0, a.getCurrentTransform)($);
        if (X === 0 && K === 0) {
          const lt = U * W + Z, E = Math.round(lt), R = N * H + dt, j = Math.round(R), B = (U + G) * W + Z, Y = Math.abs(Math.round(B) - E) || 1, tt = (N + V) * H + dt, rt = Math.abs(Math.round(tt) - j) || 1;
          return $.setTransform(Math.sign(W), 0, 0, Math.sign(H), E, j), $.drawImage(S, f, P, g, _, 0, 0, Y, rt), $.setTransform(W, X, K, H, Z, dt), [Y, rt];
        }
        if (W === 0 && H === 0) {
          const lt = N * K + Z, E = Math.round(lt), R = U * X + dt, j = Math.round(R), B = (N + V) * K + Z, Y = Math.abs(Math.round(B) - E) || 1, tt = (U + G) * X + dt, rt = Math.abs(Math.round(tt) - j) || 1;
          return $.setTransform(0, Math.sign(X), Math.sign(K), 0, E, j), $.drawImage(S, f, P, g, _, 0, 0, rt, Y), $.setTransform(W, X, K, H, Z, dt), [rt, Y];
        }
        return $.drawImage(S, f, P, g, _, U, N, G, V), [Math.hypot(W, X) * G, Math.hypot(K, H) * V];
      }
      class b {
        constructor(S, f) {
          this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = e.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = e.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = e.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, S, f]);
        }
        clone() {
          const S = Object.create(this);
          return S.clipBox = this.clipBox.slice(), S;
        }
        setCurrentPoint(S, f) {
          this.x = S, this.y = f;
        }
        updatePathMinMax(S, f, P) {
          [f, P] = e.Util.applyTransform([f, P], S), this.minX = Math.min(this.minX, f), this.minY = Math.min(this.minY, P), this.maxX = Math.max(this.maxX, f), this.maxY = Math.max(this.maxY, P);
        }
        updateRectMinMax(S, f) {
          const P = e.Util.applyTransform(f, S), g = e.Util.applyTransform(f.slice(2), S);
          this.minX = Math.min(this.minX, P[0], g[0]), this.minY = Math.min(this.minY, P[1], g[1]), this.maxX = Math.max(this.maxX, P[0], g[0]), this.maxY = Math.max(this.maxY, P[1], g[1]);
        }
        updateScalingPathMinMax(S, f) {
          e.Util.scaleMinMax(S, f), this.minX = Math.min(this.minX, f[0]), this.maxX = Math.max(this.maxX, f[1]), this.minY = Math.min(this.minY, f[2]), this.maxY = Math.max(this.maxY, f[3]);
        }
        updateCurvePathMinMax(S, f, P, g, _, U, N, G, V, W) {
          const X = e.Util.bezierBoundingBox(f, P, g, _, U, N, G, V);
          W ? (W[0] = Math.min(W[0], X[0], X[2]), W[1] = Math.max(W[1], X[0], X[2]), W[2] = Math.min(W[2], X[1], X[3]), W[3] = Math.max(W[3], X[1], X[3])) : this.updateRectMinMax(S, X);
        }
        getPathBoundingBox() {
          let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y.PathType.FILL, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          const P = [this.minX, this.minY, this.maxX, this.maxY];
          if (S === y.PathType.STROKE) {
            f || (0, e.unreachable)("Stroke bounding box must include transform.");
            const g = e.Util.singularValueDecompose2dScale(f), _ = g[0] * this.lineWidth / 2, U = g[1] * this.lineWidth / 2;
            P[0] -= _, P[1] -= U, P[2] += _, P[3] += U;
          }
          return P;
        }
        updateClipFromPath() {
          const S = e.Util.intersect(this.clipBox, this.getPathBoundingBox());
          this.startNewPathAndClipBox(S || [0, 0, 0, 0]);
        }
        isEmptyClip() {
          return this.minX === 1 / 0;
        }
        startNewPathAndClipBox(S) {
          this.clipBox = S, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
        }
        getClippedPathBoundingBox() {
          let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y.PathType.FILL, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return e.Util.intersect(this.clipBox, this.getPathBoundingBox(S, f));
        }
      }
      function L($, S) {
        if (typeof ImageData < "u" && S instanceof ImageData) {
          $.putImageData(S, 0, 0);
          return;
        }
        const f = S.height, P = S.width, g = f % h, _ = (f - g) / h, U = g === 0 ? _ : _ + 1, N = $.createImageData(P, h);
        let G, V = 0;
        const W = S.data, X = N.data;
        let K, H, Z, dt;
        if (S.kind === e.ImageKind.GRAYSCALE_1BPP) {
          const lt = W.byteLength, E = new Uint32Array(X.buffer, 0, X.byteLength >> 2), R = E.length, j = P + 7 >> 3, B = 4294967295, Y = e.FeatureTest.isLittleEndian ? 4278190080 : 255;
          for (K = 0; K < U; K++) {
            for (Z = K < _ ? h : g, G = 0, H = 0; H < Z; H++) {
              const tt = lt - V;
              let rt = 0;
              const it = tt > j ? P : 8 * tt - 7, At = -8 & it;
              let ct = 0, vt = 0;
              for (; rt < At; rt += 8)
                vt = W[V++], E[G++] = 128 & vt ? B : Y, E[G++] = 64 & vt ? B : Y, E[G++] = 32 & vt ? B : Y, E[G++] = 16 & vt ? B : Y, E[G++] = 8 & vt ? B : Y, E[G++] = 4 & vt ? B : Y, E[G++] = 2 & vt ? B : Y, E[G++] = 1 & vt ? B : Y;
              for (; rt < it; rt++)
                ct === 0 && (vt = W[V++], ct = 128), E[G++] = vt & ct ? B : Y, ct >>= 1;
            }
            for (; G < R; )
              E[G++] = 0;
            $.putImageData(N, 0, K * h);
          }
        } else if (S.kind === e.ImageKind.RGBA_32BPP) {
          for (H = 0, dt = P * h * 4, K = 0; K < _; K++)
            X.set(W.subarray(V, V + dt)), V += dt, $.putImageData(N, 0, H), H += h;
          K < U && (dt = P * g * 4, X.set(W.subarray(V, V + dt)), $.putImageData(N, 0, H));
        } else {
          if (S.kind !== e.ImageKind.RGB_24BPP)
            throw new Error(`bad image kind: ${S.kind}`);
          for (Z = h, dt = P * Z, K = 0; K < U; K++) {
            for (K >= _ && (Z = g, dt = P * Z), G = 0, H = dt; H--; )
              X[G++] = W[V++], X[G++] = W[V++], X[G++] = W[V++], X[G++] = 255;
            $.putImageData(N, 0, K * h);
          }
        }
      }
      function m($, S) {
        if (S.bitmap) {
          $.drawImage(S.bitmap, 0, 0);
          return;
        }
        const f = S.height, P = S.width, g = f % h, _ = (f - g) / h, U = g === 0 ? _ : _ + 1, N = $.createImageData(P, h);
        let G = 0;
        const V = S.data, W = N.data;
        for (let X = 0; X < U; X++) {
          const K = X < _ ? h : g;
          ({ srcPos: G } = (0, w.convertBlackAndWhiteToRGBA)({ src: V, srcPos: G, dest: W, width: P, height: K, nonBlackColor: 0 })), $.putImageData(N, 0, X * h);
        }
      }
      function M($, S) {
        const f = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
        for (const P of f)
          $[P] !== void 0 && (S[P] = $[P]);
        $.setLineDash !== void 0 && (S.setLineDash($.getLineDash()), S.lineDashOffset = $.lineDashOffset);
      }
      function x($) {
        $.strokeStyle = $.fillStyle = "#000000", $.fillRule = "nonzero", $.globalAlpha = 1, $.lineWidth = 1, $.lineCap = "butt", $.lineJoin = "miter", $.miterLimit = 10, $.globalCompositeOperation = "source-over", $.font = "10px sans-serif", $.setLineDash !== void 0 && ($.setLineDash([]), $.lineDashOffset = 0), O.isNodeJS || ($.filter = "none");
      }
      function I($, S, f, P) {
        const g = $.length;
        for (let _ = 3; _ < g; _ += 4) {
          const U = $[_];
          if (U === 0)
            $[_ - 3] = S, $[_ - 2] = f, $[_ - 1] = P;
          else if (U < 255) {
            const N = 255 - U;
            $[_ - 3] = $[_ - 3] * U + S * N >> 8, $[_ - 2] = $[_ - 2] * U + f * N >> 8, $[_ - 1] = $[_ - 1] * U + P * N >> 8;
          }
        }
      }
      function v($, S, f) {
        const P = $.length;
        for (let g = 3; g < P; g += 4) {
          const _ = f ? f[$[g]] : $[g];
          S[g] = S[g] * _ * 0.00392156862745098 | 0;
        }
      }
      function i($, S, f) {
        const P = $.length;
        for (let g = 3; g < P; g += 4) {
          const _ = 77 * $[g - 3] + 152 * $[g - 2] + 28 * $[g - 1];
          S[g] = f ? S[g] * f[_ >> 8] >> 8 : S[g] * _ >> 16;
        }
      }
      function A($, S, f, P) {
        const g = P[0], _ = P[1], U = P[2] - g, N = P[3] - _;
        U !== 0 && N !== 0 && (function(V, W, X, K, H, Z, dt, lt, E, R, j) {
          const B = !!Z, Y = B ? Z[0] : 0, tt = B ? Z[1] : 0, rt = B ? Z[2] : 0;
          let it;
          it = H === "Luminosity" ? i : v;
          const At = Math.min(K, Math.ceil(1048576 / X));
          for (let ct = 0; ct < K; ct += At) {
            const vt = Math.min(At, K - ct), ht = V.getImageData(lt - R, ct + (E - j), X, vt), mt = W.getImageData(lt, ct + E, X, vt);
            B && I(ht.data, Y, tt, rt), it(ht.data, mt.data, dt), W.putImageData(mt, lt, ct + E);
          }
        }(S.context, f, U, N, S.subtype, S.backdrop, S.transferMap, g, _, S.offsetX, S.offsetY), $.save(), $.globalAlpha = 1, $.globalCompositeOperation = "source-over", $.setTransform(1, 0, 0, 1, 0, 0), $.drawImage(f.canvas, 0, 0), $.restore());
      }
      function n($, S) {
        const f = e.Util.singularValueDecompose2dScale($);
        f[0] = Math.fround(f[0]), f[1] = Math.fround(f[1]);
        const P = Math.fround((globalThis.devicePixelRatio || 1) * a.PixelsPerInch.PDF_TO_CSS_UNITS);
        return S !== void 0 ? S : f[0] <= P || f[1] <= P;
      }
      const s = ["butt", "round", "square"], r = ["miter", "round", "bevel"], u = {}, C = {}, J = class {
        constructor(S, f, P, g, _, U, N, G) {
          et(this, o);
          et(this, z);
          let { optionalContentConfig: V, markedContentStack: W = null } = U;
          this.ctx = S, this.current = new b(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = f, this.objs = P, this.canvasFactory = g, this.filterFactory = _, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = W || [], this.optionalContentConfig = V, this.cachedCanvases = new l(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = N, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = G, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
        }
        getObject(S) {
          let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return typeof S == "string" ? S.startsWith("g_") ? this.commonObjs.get(S) : this.objs.get(S) : f;
        }
        beginDrawing(S) {
          let { transform: f, viewport: P, transparency: g = !1, background: _ = null } = S;
          const U = this.ctx.canvas.width, N = this.ctx.canvas.height, G = this.ctx.fillStyle;
          if (this.ctx.fillStyle = _ || "#ffffff", this.ctx.fillRect(0, 0, U, N), this.ctx.fillStyle = G, g) {
            const V = this.cachedCanvases.getCanvas("transparent", U, N);
            this.compositeCtx = this.ctx, this.transparentCanvas = V.canvas, this.ctx = V.context, this.ctx.save(), this.ctx.transform(...(0, a.getCurrentTransform)(this.compositeCtx));
          }
          this.ctx.save(), x(this.ctx), f && (this.ctx.transform(...f), this.outputScaleX = f[0], this.outputScaleY = f[0]), this.ctx.transform(...P.transform), this.viewportScale = P.scale, this.baseTransform = (0, a.getCurrentTransform)(this.ctx);
        }
        executeOperatorList(S, f, P, g) {
          const _ = S.argsArray, U = S.fnArray;
          let N = f || 0;
          const G = _.length;
          if (G === N)
            return N;
          const V = G - N > 10 && typeof P == "function", W = V ? Date.now() + 15 : 0;
          let X = 0;
          const K = this.commonObjs, H = this.objs;
          let Z;
          for (; ; ) {
            if (g !== void 0 && N === g.nextBreakPoint)
              return g.breakIt(N, P), N;
            if (Z = U[N], Z !== e.OPS.dependency)
              this[Z].apply(this, _[N]);
            else
              for (const dt of _[N]) {
                const lt = dt.startsWith("g_") ? K : H;
                if (!lt.has(dt))
                  return lt.get(dt, P), N;
              }
            if (N++, N === G)
              return N;
            if (V && ++X > 10) {
              if (Date.now() > W)
                return P(), N;
              X = 0;
            }
          }
        }
        endDrawing() {
          nt(this, o, we).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
          for (const S of this._cachedBitmapsMap.values()) {
            for (const f of S.values())
              typeof HTMLCanvasElement < "u" && f instanceof HTMLCanvasElement && (f.width = f.height = 0);
            S.clear();
          }
          this._cachedBitmapsMap.clear(), nt(this, z, Ee).call(this);
        }
        _scaleImage(S, f) {
          const P = S.width, g = S.height;
          let _, U, N = Math.max(Math.hypot(f[0], f[1]), 1), G = Math.max(Math.hypot(f[2], f[3]), 1), V = P, W = g, X = "prescale1";
          for (; N > 2 && V > 1 || G > 2 && W > 1; ) {
            let K = V, H = W;
            N > 2 && V > 1 && (K = V >= 16384 ? Math.floor(V / 2) - 1 || 1 : Math.ceil(V / 2), N /= V / K), G > 2 && W > 1 && (H = W >= 16384 ? Math.floor(W / 2) - 1 || 1 : Math.ceil(W) / 2, G /= W / H), _ = this.cachedCanvases.getCanvas(X, K, H), U = _.context, U.clearRect(0, 0, K, H), U.drawImage(S, 0, 0, V, W, 0, 0, K, H), S = _.canvas, V = K, W = H, X = X === "prescale1" ? "prescale2" : "prescale1";
          }
          return { img: S, paintWidth: V, paintHeight: W };
        }
        _createMaskCanvas(S) {
          const f = this.ctx, { width: P, height: g } = S, _ = this.current.fillColor, U = this.current.patternFill, N = (0, a.getCurrentTransform)(f);
          let G, V, W, X;
          if ((S.bitmap || S.data) && S.count > 1) {
            const rt = S.bitmap || S.data.buffer;
            V = JSON.stringify(U ? N : [N.slice(0, 4), _]), G = this._cachedBitmapsMap.get(rt), G || (G = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(rt, G));
            const it = G.get(V);
            if (it && !U)
              return { canvas: it, offsetX: Math.round(Math.min(N[0], N[2]) + N[4]), offsetY: Math.round(Math.min(N[1], N[3]) + N[5]) };
            W = it;
          }
          W || (X = this.cachedCanvases.getCanvas("maskCanvas", P, g), m(X.context, S));
          let K = e.Util.transform(N, [1 / P, 0, 0, -1 / g, 0, 0]);
          K = e.Util.transform(K, [1, 0, 0, 1, 0, -g]);
          const H = e.Util.applyTransform([0, 0], K), Z = e.Util.applyTransform([P, g], K), dt = e.Util.normalizeRect([H[0], H[1], Z[0], Z[1]]), lt = Math.round(dt[2] - dt[0]) || 1, E = Math.round(dt[3] - dt[1]) || 1, R = this.cachedCanvases.getCanvas("fillCanvas", lt, E), j = R.context, B = Math.min(H[0], Z[0]), Y = Math.min(H[1], Z[1]);
          j.translate(-B, -Y), j.transform(...K), W || (W = this._scaleImage(X.canvas, (0, a.getCurrentTransformInverse)(j)), W = W.img, G && U && G.set(V, W)), j.imageSmoothingEnabled = n((0, a.getCurrentTransform)(j), S.interpolate), c(j, W, 0, 0, W.width, W.height, 0, 0, P, g), j.globalCompositeOperation = "source-in";
          const tt = e.Util.transform((0, a.getCurrentTransformInverse)(j), [1, 0, 0, 1, -B, -Y]);
          return j.fillStyle = U ? _.getPattern(f, this, tt, y.PathType.FILL) : _, j.fillRect(0, 0, P, g), G && !U && (this.cachedCanvases.delete("fillCanvas"), G.set(V, R.canvas)), { canvas: R.canvas, offsetX: Math.round(B), offsetY: Math.round(Y) };
        }
        setLineWidth(S) {
          S !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = S, this.ctx.lineWidth = S;
        }
        setLineCap(S) {
          this.ctx.lineCap = s[S];
        }
        setLineJoin(S) {
          this.ctx.lineJoin = r[S];
        }
        setMiterLimit(S) {
          this.ctx.miterLimit = S;
        }
        setDash(S, f) {
          const P = this.ctx;
          P.setLineDash !== void 0 && (P.setLineDash(S), P.lineDashOffset = f);
        }
        setRenderingIntent(S) {
        }
        setFlatness(S) {
        }
        setGState(S) {
          for (const [f, P] of S)
            switch (f) {
              case "LW":
                this.setLineWidth(P);
                break;
              case "LC":
                this.setLineCap(P);
                break;
              case "LJ":
                this.setLineJoin(P);
                break;
              case "ML":
                this.setMiterLimit(P);
                break;
              case "D":
                this.setDash(P[0], P[1]);
                break;
              case "RI":
                this.setRenderingIntent(P);
                break;
              case "FL":
                this.setFlatness(P);
                break;
              case "Font":
                this.setFont(P[0], P[1]);
                break;
              case "CA":
                this.current.strokeAlpha = P;
                break;
              case "ca":
                this.current.fillAlpha = P, this.ctx.globalAlpha = P;
                break;
              case "BM":
                this.ctx.globalCompositeOperation = P;
                break;
              case "SMask":
                this.current.activeSMask = P ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
                break;
              case "TR":
                this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(P);
            }
        }
        get inSMaskMode() {
          return !!this.suspendedCtx;
        }
        checkSMaskState() {
          const S = this.inSMaskMode;
          this.current.activeSMask && !S ? this.beginSMaskMode() : !this.current.activeSMask && S && this.endSMaskMode();
        }
        beginSMaskMode() {
          if (this.inSMaskMode)
            throw new Error("beginSMaskMode called while already in smask mode");
          const S = this.ctx.canvas.width, f = this.ctx.canvas.height, P = "smaskGroupAt" + this.groupLevel, g = this.cachedCanvases.getCanvas(P, S, f);
          this.suspendedCtx = this.ctx, this.ctx = g.context;
          const _ = this.ctx;
          _.setTransform(...(0, a.getCurrentTransform)(this.suspendedCtx)), M(this.suspendedCtx, _), function(N, G) {
            if (N._removeMirroring)
              throw new Error("Context is already forwarding operations.");
            N.__originalSave = N.save, N.__originalRestore = N.restore, N.__originalRotate = N.rotate, N.__originalScale = N.scale, N.__originalTranslate = N.translate, N.__originalTransform = N.transform, N.__originalSetTransform = N.setTransform, N.__originalResetTransform = N.resetTransform, N.__originalClip = N.clip, N.__originalMoveTo = N.moveTo, N.__originalLineTo = N.lineTo, N.__originalBezierCurveTo = N.bezierCurveTo, N.__originalRect = N.rect, N.__originalClosePath = N.closePath, N.__originalBeginPath = N.beginPath, N._removeMirroring = () => {
              N.save = N.__originalSave, N.restore = N.__originalRestore, N.rotate = N.__originalRotate, N.scale = N.__originalScale, N.translate = N.__originalTranslate, N.transform = N.__originalTransform, N.setTransform = N.__originalSetTransform, N.resetTransform = N.__originalResetTransform, N.clip = N.__originalClip, N.moveTo = N.__originalMoveTo, N.lineTo = N.__originalLineTo, N.bezierCurveTo = N.__originalBezierCurveTo, N.rect = N.__originalRect, N.closePath = N.__originalClosePath, N.beginPath = N.__originalBeginPath, delete N._removeMirroring;
            }, N.save = function() {
              G.save(), this.__originalSave();
            }, N.restore = function() {
              G.restore(), this.__originalRestore();
            }, N.translate = function(W, X) {
              G.translate(W, X), this.__originalTranslate(W, X);
            }, N.scale = function(W, X) {
              G.scale(W, X), this.__originalScale(W, X);
            }, N.transform = function(W, X, K, H, Z, dt) {
              G.transform(W, X, K, H, Z, dt), this.__originalTransform(W, X, K, H, Z, dt);
            }, N.setTransform = function(W, X, K, H, Z, dt) {
              G.setTransform(W, X, K, H, Z, dt), this.__originalSetTransform(W, X, K, H, Z, dt);
            }, N.resetTransform = function() {
              G.resetTransform(), this.__originalResetTransform();
            }, N.rotate = function(W) {
              G.rotate(W), this.__originalRotate(W);
            }, N.clip = function(W) {
              G.clip(W), this.__originalClip(W);
            }, N.moveTo = function(V, W) {
              G.moveTo(V, W), this.__originalMoveTo(V, W);
            }, N.lineTo = function(V, W) {
              G.lineTo(V, W), this.__originalLineTo(V, W);
            }, N.bezierCurveTo = function(V, W, X, K, H, Z) {
              G.bezierCurveTo(V, W, X, K, H, Z), this.__originalBezierCurveTo(V, W, X, K, H, Z);
            }, N.rect = function(V, W, X, K) {
              G.rect(V, W, X, K), this.__originalRect(V, W, X, K);
            }, N.closePath = function() {
              G.closePath(), this.__originalClosePath();
            }, N.beginPath = function() {
              G.beginPath(), this.__originalBeginPath();
            };
          }(_, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
        }
        endSMaskMode() {
          if (!this.inSMaskMode)
            throw new Error("endSMaskMode called while not in smask mode");
          this.ctx._removeMirroring(), M(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
        }
        compose(S) {
          if (!this.current.activeSMask)
            return;
          S ? (S[0] = Math.floor(S[0]), S[1] = Math.floor(S[1]), S[2] = Math.ceil(S[2]), S[3] = Math.ceil(S[3])) : S = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
          const f = this.current.activeSMask;
          A(this.suspendedCtx, f, this.ctx, S), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
        }
        save() {
          this.inSMaskMode ? (M(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
          const S = this.current;
          this.stateStack.push(S), this.current = S.clone();
        }
        restore() {
          this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), M(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
        }
        transform(S, f, P, g, _, U) {
          this.ctx.transform(S, f, P, g, _, U), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
        }
        constructPath(S, f, P) {
          const g = this.ctx, _ = this.current;
          let U, N, G = _.x, V = _.y;
          const W = (0, a.getCurrentTransform)(g), X = W[0] === 0 && W[3] === 0 || W[1] === 0 && W[2] === 0, K = X ? P.slice(0) : null;
          for (let H = 0, Z = 0, dt = S.length; H < dt; H++)
            switch (0 | S[H]) {
              case e.OPS.rectangle:
                G = f[Z++], V = f[Z++];
                const lt = f[Z++], E = f[Z++], R = G + lt, j = V + E;
                g.moveTo(G, V), lt === 0 || E === 0 ? g.lineTo(R, j) : (g.lineTo(R, V), g.lineTo(R, j), g.lineTo(G, j)), X || _.updateRectMinMax(W, [G, V, R, j]), g.closePath();
                break;
              case e.OPS.moveTo:
                G = f[Z++], V = f[Z++], g.moveTo(G, V), X || _.updatePathMinMax(W, G, V);
                break;
              case e.OPS.lineTo:
                G = f[Z++], V = f[Z++], g.lineTo(G, V), X || _.updatePathMinMax(W, G, V);
                break;
              case e.OPS.curveTo:
                U = G, N = V, G = f[Z + 4], V = f[Z + 5], g.bezierCurveTo(f[Z], f[Z + 1], f[Z + 2], f[Z + 3], G, V), _.updateCurvePathMinMax(W, U, N, f[Z], f[Z + 1], f[Z + 2], f[Z + 3], G, V, K), Z += 6;
                break;
              case e.OPS.curveTo2:
                U = G, N = V, g.bezierCurveTo(G, V, f[Z], f[Z + 1], f[Z + 2], f[Z + 3]), _.updateCurvePathMinMax(W, U, N, G, V, f[Z], f[Z + 1], f[Z + 2], f[Z + 3], K), G = f[Z + 2], V = f[Z + 3], Z += 4;
                break;
              case e.OPS.curveTo3:
                U = G, N = V, G = f[Z + 2], V = f[Z + 3], g.bezierCurveTo(f[Z], f[Z + 1], G, V, G, V), _.updateCurvePathMinMax(W, U, N, f[Z], f[Z + 1], G, V, G, V, K), Z += 4;
                break;
              case e.OPS.closePath:
                g.closePath();
            }
          X && _.updateScalingPathMinMax(W, K), _.setCurrentPoint(G, V);
        }
        closePath() {
          this.ctx.closePath();
        }
        stroke() {
          let S = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          const f = this.ctx, P = this.current.strokeColor;
          f.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof P == "object" && P != null && P.getPattern ? (f.save(), f.strokeStyle = P.getPattern(f, this, (0, a.getCurrentTransformInverse)(f), y.PathType.STROKE), this.rescaleAndStroke(!1), f.restore()) : this.rescaleAndStroke(!0)), S && this.consumePath(this.current.getClippedPathBoundingBox()), f.globalAlpha = this.current.fillAlpha;
        }
        closeStroke() {
          this.closePath(), this.stroke();
        }
        fill() {
          let S = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          const f = this.ctx, P = this.current.fillColor;
          let g = !1;
          this.current.patternFill && (f.save(), f.fillStyle = P.getPattern(f, this, (0, a.getCurrentTransformInverse)(f), y.PathType.FILL), g = !0);
          const _ = this.current.getClippedPathBoundingBox();
          this.contentVisible && _ !== null && (this.pendingEOFill ? (f.fill("evenodd"), this.pendingEOFill = !1) : f.fill()), g && f.restore(), S && this.consumePath(_);
        }
        eoFill() {
          this.pendingEOFill = !0, this.fill();
        }
        fillStroke() {
          this.fill(!1), this.stroke(!1), this.consumePath();
        }
        eoFillStroke() {
          this.pendingEOFill = !0, this.fillStroke();
        }
        closeFillStroke() {
          this.closePath(), this.fillStroke();
        }
        closeEOFillStroke() {
          this.pendingEOFill = !0, this.closePath(), this.fillStroke();
        }
        endPath() {
          this.consumePath();
        }
        clip() {
          this.pendingClip = u;
        }
        eoClip() {
          this.pendingClip = C;
        }
        beginText() {
          this.current.textMatrix = e.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
        }
        endText() {
          const S = this.pendingTextPaths, f = this.ctx;
          if (S !== void 0) {
            f.save(), f.beginPath();
            for (const P of S)
              f.setTransform(...P.transform), f.translate(P.x, P.y), P.addToPath(f, P.fontSize);
            f.restore(), f.clip(), f.beginPath(), delete this.pendingTextPaths;
          } else
            f.beginPath();
        }
        setCharSpacing(S) {
          this.current.charSpacing = S;
        }
        setWordSpacing(S) {
          this.current.wordSpacing = S;
        }
        setHScale(S) {
          this.current.textHScale = S / 100;
        }
        setLeading(S) {
          this.current.leading = -S;
        }
        setFont(S, f) {
          var P;
          const g = this.commonObjs.get(S), _ = this.current;
          if (!g)
            throw new Error(`Can't find font for ${S}`);
          if (_.fontMatrix = g.fontMatrix || e.FONT_IDENTITY_MATRIX, _.fontMatrix[0] !== 0 && _.fontMatrix[3] !== 0 || (0, e.warn)("Invalid font matrix for font " + S), f < 0 ? (f = -f, _.fontDirection = -1) : _.fontDirection = 1, this.current.font = g, this.current.fontSize = f, g.isType3Font)
            return;
          const U = g.loadedName || "sans-serif", N = ((P = g.systemFontInfo) === null || P === void 0 ? void 0 : P.css) || `"${U}", ${g.fallbackName}`;
          let G = "normal";
          g.black ? G = "900" : g.bold && (G = "bold");
          const V = g.italic ? "italic" : "normal";
          let W = f;
          f < 16 ? W = 16 : f > 100 && (W = 100), this.current.fontSizeScale = f / W, this.ctx.font = `${V} ${G} ${W}px ${N}`;
        }
        setTextRenderingMode(S) {
          this.current.textRenderingMode = S;
        }
        setTextRise(S) {
          this.current.textRise = S;
        }
        moveText(S, f) {
          this.current.x = this.current.lineX += S, this.current.y = this.current.lineY += f;
        }
        setLeadingMoveText(S, f) {
          this.setLeading(-f), this.moveText(S, f);
        }
        setTextMatrix(S, f, P, g, _, U) {
          this.current.textMatrix = [S, f, P, g, _, U], this.current.textMatrixScale = Math.hypot(S, f), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
        }
        nextLine() {
          this.moveText(0, this.current.leading);
        }
        paintChar(S, f, P, g) {
          const _ = this.ctx, U = this.current, N = U.font, G = U.textRenderingMode, V = U.fontSize / U.fontSizeScale, W = G & e.TextRenderingMode.FILL_STROKE_MASK, X = !!(G & e.TextRenderingMode.ADD_TO_PATH_FLAG), K = U.patternFill && !N.missingFile;
          let H;
          (N.disableFontFace || X || K) && (H = N.getPathGenerator(this.commonObjs, S)), N.disableFontFace || K ? (_.save(), _.translate(f, P), _.beginPath(), H(_, V), g && _.setTransform(...g), W !== e.TextRenderingMode.FILL && W !== e.TextRenderingMode.FILL_STROKE || _.fill(), W !== e.TextRenderingMode.STROKE && W !== e.TextRenderingMode.FILL_STROKE || _.stroke(), _.restore()) : (W !== e.TextRenderingMode.FILL && W !== e.TextRenderingMode.FILL_STROKE || _.fillText(S, f, P), W !== e.TextRenderingMode.STROKE && W !== e.TextRenderingMode.FILL_STROKE || _.strokeText(S, f, P)), X && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({ transform: (0, a.getCurrentTransform)(_), x: f, y: P, fontSize: V, addToPath: H });
        }
        get isFontSubpixelAAEnabled() {
          const { context: S } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
          S.scale(1.5, 1), S.fillText("I", 0, 10);
          const f = S.getImageData(0, 0, 10, 10).data;
          let P = !1;
          for (let g = 3; g < f.length; g += 4)
            if (f[g] > 0 && f[g] < 255) {
              P = !0;
              break;
            }
          return (0, e.shadow)(this, "isFontSubpixelAAEnabled", P);
        }
        showText(S) {
          const f = this.current, P = f.font;
          if (P.isType3Font)
            return this.showType3Text(S);
          const g = f.fontSize;
          if (g === 0)
            return;
          const _ = this.ctx, U = f.fontSizeScale, N = f.charSpacing, G = f.wordSpacing, V = f.fontDirection, W = f.textHScale * V, X = S.length, K = P.vertical, H = K ? 1 : -1, Z = P.defaultVMetrics, dt = g * f.fontMatrix[0], lt = f.textRenderingMode === e.TextRenderingMode.FILL && !P.disableFontFace && !f.patternFill;
          _.save(), _.transform(...f.textMatrix), _.translate(f.x, f.y + f.textRise), V > 0 ? _.scale(W, -1) : _.scale(W, 1);
          let E;
          if (f.patternFill) {
            _.save();
            const tt = f.fillColor.getPattern(_, this, (0, a.getCurrentTransformInverse)(_), y.PathType.FILL);
            E = (0, a.getCurrentTransform)(_), _.restore(), _.fillStyle = tt;
          }
          let R = f.lineWidth;
          const j = f.textMatrixScale;
          if (j === 0 || R === 0) {
            const tt = f.textRenderingMode & e.TextRenderingMode.FILL_STROKE_MASK;
            tt !== e.TextRenderingMode.STROKE && tt !== e.TextRenderingMode.FILL_STROKE || (R = this.getSinglePixelWidth());
          } else
            R /= j;
          if (U !== 1 && (_.scale(U, U), R /= U), _.lineWidth = R, P.isInvalidPDFjsFont) {
            const tt = [];
            let rt = 0;
            for (const it of S)
              tt.push(it.unicode), rt += it.width;
            _.fillText(tt.join(""), 0, 0), f.x += rt * dt * W, _.restore(), this.compose();
            return;
          }
          let B, Y = 0;
          for (B = 0; B < X; ++B) {
            const tt = S[B];
            if (typeof tt == "number") {
              Y += H * tt * g / 1e3;
              continue;
            }
            let rt = !1;
            const it = (tt.isSpace ? G : 0) + N, At = tt.fontChar, ct = tt.accent;
            let vt, ht, mt, yt = tt.width;
            if (K) {
              const _t = tt.vmetric || Z, Ct = -(tt.vmetric ? _t[1] : 0.5 * yt) * dt, Q = _t[2] * dt;
              yt = _t ? -_t[0] : yt, vt = Ct / U, ht = (Y + Q) / U;
            } else
              vt = Y / U, ht = 0;
            if (P.remeasure && yt > 0) {
              const _t = 1e3 * _.measureText(At).width / g * U;
              if (yt < _t && this.isFontSubpixelAAEnabled) {
                const Ct = yt / _t;
                rt = !0, _.save(), _.scale(Ct, 1), vt /= Ct;
              } else
                yt !== _t && (vt += (yt - _t) / 2e3 * g / U);
            }
            if (this.contentVisible && (tt.isInFont || P.missingFile)) {
              if (lt && !ct)
                _.fillText(At, vt, ht);
              else if (this.paintChar(At, vt, ht, E), ct) {
                const _t = vt + g * ct.offset.x / U, Ct = ht - g * ct.offset.y / U;
                this.paintChar(ct.fontChar, _t, Ct, E);
              }
            }
            mt = K ? yt * dt - it * V : yt * dt + it * V, Y += mt, rt && _.restore();
          }
          K ? f.y -= Y : f.x += Y * W, _.restore(), this.compose();
        }
        showType3Text(S) {
          const f = this.ctx, P = this.current, g = P.font, _ = P.fontSize, U = P.fontDirection, N = g.vertical ? 1 : -1, G = P.charSpacing, V = P.wordSpacing, W = P.textHScale * U, X = P.fontMatrix || e.FONT_IDENTITY_MATRIX, K = S.length;
          let H, Z, dt, lt;
          if (P.textRenderingMode !== e.TextRenderingMode.INVISIBLE && _ !== 0) {
            for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, f.save(), f.transform(...P.textMatrix), f.translate(P.x, P.y), f.scale(W, U), H = 0; H < K; ++H) {
              if (Z = S[H], typeof Z == "number") {
                lt = N * Z * _ / 1e3, this.ctx.translate(lt, 0), P.x += lt * W;
                continue;
              }
              const E = (Z.isSpace ? V : 0) + G, R = g.charProcOperatorList[Z.operatorListId];
              if (!R) {
                (0, e.warn)(`Type3 character "${Z.operatorListId}" is not available.`);
                continue;
              }
              this.contentVisible && (this.processingType3 = Z, this.save(), f.scale(_, _), f.transform(...X), this.executeOperatorList(R), this.restore()), dt = e.Util.applyTransform([Z.width, 0], X)[0] * _ + E, f.translate(dt, 0), P.x += dt * W;
            }
            f.restore(), this.processingType3 = null;
          }
        }
        setCharWidth(S, f) {
        }
        setCharWidthAndBounds(S, f, P, g, _, U) {
          this.ctx.rect(P, g, _ - P, U - g), this.ctx.clip(), this.endPath();
        }
        getColorN_Pattern(S) {
          let f;
          if (S[0] === "TilingPattern") {
            const P = S[1], g = this.baseTransform || (0, a.getCurrentTransform)(this.ctx), _ = { createCanvasGraphics: (U) => new J(U, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }) };
            f = new y.TilingPattern(S, P, this.ctx, _, g);
          } else
            f = this._getPattern(S[1], S[2]);
          return f;
        }
        setStrokeColorN() {
          this.current.strokeColor = this.getColorN_Pattern(arguments);
        }
        setFillColorN() {
          this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
        }
        setStrokeRGBColor(S, f, P) {
          const g = e.Util.makeHexColor(S, f, P);
          this.ctx.strokeStyle = g, this.current.strokeColor = g;
        }
        setFillRGBColor(S, f, P) {
          const g = e.Util.makeHexColor(S, f, P);
          this.ctx.fillStyle = g, this.current.fillColor = g, this.current.patternFill = !1;
        }
        _getPattern(S) {
          let f, P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return this.cachedPatterns.has(S) ? f = this.cachedPatterns.get(S) : (f = (0, y.getShadingPattern)(this.getObject(S)), this.cachedPatterns.set(S, f)), P && (f.matrix = P), f;
        }
        shadingFill(S) {
          if (!this.contentVisible)
            return;
          const f = this.ctx;
          this.save();
          const P = this._getPattern(S);
          f.fillStyle = P.getPattern(f, this, (0, a.getCurrentTransformInverse)(f), y.PathType.SHADING);
          const g = (0, a.getCurrentTransformInverse)(f);
          if (g) {
            const _ = f.canvas, U = _.width, N = _.height, G = e.Util.applyTransform([0, 0], g), V = e.Util.applyTransform([0, N], g), W = e.Util.applyTransform([U, 0], g), X = e.Util.applyTransform([U, N], g), K = Math.min(G[0], V[0], W[0], X[0]), H = Math.min(G[1], V[1], W[1], X[1]), Z = Math.max(G[0], V[0], W[0], X[0]), dt = Math.max(G[1], V[1], W[1], X[1]);
            this.ctx.fillRect(K, H, Z - K, dt - H);
          } else
            this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
          this.compose(this.current.getClippedPathBoundingBox()), this.restore();
        }
        beginInlineImage() {
          (0, e.unreachable)("Should not call beginInlineImage");
        }
        beginImageData() {
          (0, e.unreachable)("Should not call beginImageData");
        }
        paintFormXObjectBegin(S, f) {
          if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(S) && S.length === 6 && this.transform(...S), this.baseTransform = (0, a.getCurrentTransform)(this.ctx), f)) {
            const P = f[2] - f[0], g = f[3] - f[1];
            this.ctx.rect(f[0], f[1], P, g), this.current.updateRectMinMax((0, a.getCurrentTransform)(this.ctx), f), this.clip(), this.endPath();
          }
        }
        paintFormXObjectEnd() {
          this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
        }
        beginGroup(S) {
          if (!this.contentVisible)
            return;
          this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
          const f = this.ctx;
          S.isolated || (0, e.info)("TODO: Support non-isolated groups."), S.knockout && (0, e.warn)("Knockout groups not supported.");
          const P = (0, a.getCurrentTransform)(f);
          if (S.matrix && f.transform(...S.matrix), !S.bbox)
            throw new Error("Bounding box is required.");
          let g = e.Util.getAxialAlignedBoundingBox(S.bbox, (0, a.getCurrentTransform)(f));
          const _ = [0, 0, f.canvas.width, f.canvas.height];
          g = e.Util.intersect(g, _) || [0, 0, 0, 0];
          const U = Math.floor(g[0]), N = Math.floor(g[1]);
          let G = Math.max(Math.ceil(g[2]) - U, 1), V = Math.max(Math.ceil(g[3]) - N, 1), W = 1, X = 1;
          G > p && (W = G / p, G = p), V > p && (X = V / p, V = p), this.current.startNewPathAndClipBox([0, 0, G, V]);
          let K = "groupAt" + this.groupLevel;
          S.smask && (K += "_smask_" + this.smaskCounter++ % 2);
          const H = this.cachedCanvases.getCanvas(K, G, V), Z = H.context;
          Z.scale(1 / W, 1 / X), Z.translate(-U, -N), Z.transform(...P), S.smask ? this.smaskStack.push({ canvas: H.canvas, context: Z, offsetX: U, offsetY: N, scaleX: W, scaleY: X, subtype: S.smask.subtype, backdrop: S.smask.backdrop, transferMap: S.smask.transferMap || null, startTransformInverse: null }) : (f.setTransform(1, 0, 0, 1, 0, 0), f.translate(U, N), f.scale(W, X), f.save()), M(f, Z), this.ctx = Z, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(f), this.groupLevel++;
        }
        endGroup(S) {
          if (!this.contentVisible)
            return;
          this.groupLevel--;
          const f = this.ctx, P = this.groupStack.pop();
          if (this.ctx = P, this.ctx.imageSmoothingEnabled = !1, S.smask)
            this.tempSMask = this.smaskStack.pop(), this.restore();
          else {
            this.ctx.restore();
            const g = (0, a.getCurrentTransform)(this.ctx);
            this.restore(), this.ctx.save(), this.ctx.setTransform(...g);
            const _ = e.Util.getAxialAlignedBoundingBox([0, 0, f.canvas.width, f.canvas.height], g);
            this.ctx.drawImage(f.canvas, 0, 0), this.ctx.restore(), this.compose(_);
          }
        }
        beginAnnotation(S, f, P, g, _) {
          if (nt(this, o, we).call(this), x(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), Array.isArray(f) && f.length === 4) {
            const U = f[2] - f[0], N = f[3] - f[1];
            if (_ && this.annotationCanvasMap) {
              (P = P.slice())[4] -= f[0], P[5] -= f[1], (f = f.slice())[0] = f[1] = 0, f[2] = U, f[3] = N;
              const [G, V] = e.Util.singularValueDecompose2dScale((0, a.getCurrentTransform)(this.ctx)), { viewportScale: W } = this, X = Math.ceil(U * this.outputScaleX * W), K = Math.ceil(N * this.outputScaleY * W);
              this.annotationCanvas = this.canvasFactory.create(X, K);
              const { canvas: H, context: Z } = this.annotationCanvas;
              this.annotationCanvasMap.set(S, H), this.annotationCanvas.savedCtx = this.ctx, this.ctx = Z, this.ctx.save(), this.ctx.setTransform(G, 0, 0, -V, 0, N * V), x(this.ctx);
            } else
              x(this.ctx), this.ctx.rect(f[0], f[1], U, N), this.ctx.clip(), this.endPath();
          }
          this.current = new b(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...P), this.transform(...g);
        }
        endAnnotation() {
          this.annotationCanvas && (this.ctx.restore(), nt(this, z, Ee).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
        }
        paintImageMaskXObject(S) {
          if (!this.contentVisible)
            return;
          const f = S.count;
          (S = this.getObject(S.data, S)).count = f;
          const P = this.ctx, g = this.processingType3;
          if (g && (g.compiled === void 0 && (g.compiled = function(G) {
            const { width: V, height: W } = G;
            if (V > 1e3 || W > 1e3)
              return null;
            const X = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), K = V + 1;
            let H, Z, dt, lt = new Uint8Array(K * (W + 1));
            const E = V + 7 & -8;
            let R = new Uint8Array(E * W), j = 0;
            for (const rt of G.data) {
              let it = 128;
              for (; it > 0; )
                R[j++] = rt & it ? 0 : 255, it >>= 1;
            }
            let B = 0;
            for (j = 0, R[j] !== 0 && (lt[0] = 1, ++B), Z = 1; Z < V; Z++)
              R[j] !== R[j + 1] && (lt[Z] = R[j] ? 2 : 1, ++B), j++;
            for (R[j] !== 0 && (lt[Z] = 2, ++B), H = 1; H < W; H++) {
              j = H * E, dt = H * K, R[j - E] !== R[j] && (lt[dt] = R[j] ? 1 : 8, ++B);
              let rt = (R[j] ? 4 : 0) + (R[j - E] ? 8 : 0);
              for (Z = 1; Z < V; Z++)
                rt = (rt >> 2) + (R[j + 1] ? 4 : 0) + (R[j - E + 1] ? 8 : 0), X[rt] && (lt[dt + Z] = X[rt], ++B), j++;
              if (R[j - E] !== R[j] && (lt[dt + Z] = R[j] ? 2 : 4, ++B), B > 1e3)
                return null;
            }
            for (j = E * (W - 1), dt = H * K, R[j] !== 0 && (lt[dt] = 8, ++B), Z = 1; Z < V; Z++)
              R[j] !== R[j + 1] && (lt[dt + Z] = R[j] ? 4 : 8, ++B), j++;
            if (R[j] !== 0 && (lt[dt + Z] = 4, ++B), B > 1e3)
              return null;
            const Y = new Int32Array([0, K, -1, 0, -K, 0, 0, 0, 1]), tt = new Path2D();
            for (H = 0; B && H <= W; H++) {
              let rt = H * K;
              const it = rt + V;
              for (; rt < it && !lt[rt]; )
                rt++;
              if (rt === it)
                continue;
              tt.moveTo(rt % K, H);
              const At = rt;
              let ct = lt[rt];
              do {
                const vt = Y[ct];
                do
                  rt += vt;
                while (!lt[rt]);
                const ht = lt[rt];
                ht !== 5 && ht !== 10 ? (ct = ht, lt[rt] = 0) : (ct = ht & 51 * ct >> 4, lt[rt] &= ct >> 2 | ct << 2), tt.lineTo(rt % K, rt / K | 0), lt[rt] || --B;
              } while (At !== rt);
              --H;
            }
            return R = null, lt = null, function(rt) {
              rt.save(), rt.scale(1 / V, -1 / W), rt.translate(0, -W), rt.fill(tt), rt.beginPath(), rt.restore();
            };
          }(S)), g.compiled)) {
            g.compiled(P);
            return;
          }
          const _ = this._createMaskCanvas(S), U = _.canvas;
          P.save(), P.setTransform(1, 0, 0, 1, 0, 0), P.drawImage(U, _.offsetX, _.offsetY), P.restore(), this.compose();
        }
        paintImageMaskXObjectRepeat(S, f) {
          let P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, _ = arguments.length > 4 ? arguments[4] : void 0, U = arguments.length > 5 ? arguments[5] : void 0;
          if (!this.contentVisible)
            return;
          S = this.getObject(S.data, S);
          const N = this.ctx;
          N.save();
          const G = (0, a.getCurrentTransform)(N);
          N.transform(f, P, g, _, 0, 0);
          const V = this._createMaskCanvas(S);
          N.setTransform(1, 0, 0, 1, V.offsetX - G[4], V.offsetY - G[5]);
          for (let W = 0, X = U.length; W < X; W += 2) {
            const K = e.Util.transform(G, [f, P, g, _, U[W], U[W + 1]]), [H, Z] = e.Util.applyTransform([0, 0], K);
            N.drawImage(V.canvas, H, Z);
          }
          N.restore(), this.compose();
        }
        paintImageMaskXObjectGroup(S) {
          if (!this.contentVisible)
            return;
          const f = this.ctx, P = this.current.fillColor, g = this.current.patternFill;
          for (const _ of S) {
            const { data: U, width: N, height: G, transform: V } = _, W = this.cachedCanvases.getCanvas("maskCanvas", N, G), X = W.context;
            X.save(), m(X, this.getObject(U, _)), X.globalCompositeOperation = "source-in", X.fillStyle = g ? P.getPattern(X, this, (0, a.getCurrentTransformInverse)(f), y.PathType.FILL) : P, X.fillRect(0, 0, N, G), X.restore(), f.save(), f.transform(...V), f.scale(1, -1), c(f, W.canvas, 0, 0, N, G, 0, -1, 1, 1), f.restore();
          }
          this.compose();
        }
        paintImageXObject(S) {
          if (!this.contentVisible)
            return;
          const f = this.getObject(S);
          f ? this.paintInlineImageXObject(f) : (0, e.warn)("Dependent image isn't ready yet");
        }
        paintImageXObjectRepeat(S, f, P, g) {
          if (!this.contentVisible)
            return;
          const _ = this.getObject(S);
          if (!_) {
            (0, e.warn)("Dependent image isn't ready yet");
            return;
          }
          const U = _.width, N = _.height, G = [];
          for (let V = 0, W = g.length; V < W; V += 2)
            G.push({ transform: [f, 0, 0, P, g[V], g[V + 1]], x: 0, y: 0, w: U, h: N });
          this.paintInlineImageXObjectGroup(_, G);
        }
        applyTransferMapsToCanvas(S) {
          return this.current.transferMaps !== "none" && (S.filter = this.current.transferMaps, S.drawImage(S.canvas, 0, 0), S.filter = "none"), S.canvas;
        }
        applyTransferMapsToBitmap(S) {
          if (this.current.transferMaps === "none")
            return S.bitmap;
          const { bitmap: f, width: P, height: g } = S, _ = this.cachedCanvases.getCanvas("inlineImage", P, g), U = _.context;
          return U.filter = this.current.transferMaps, U.drawImage(f, 0, 0), U.filter = "none", _.canvas;
        }
        paintInlineImageXObject(S) {
          if (!this.contentVisible)
            return;
          const f = S.width, P = S.height, g = this.ctx;
          this.save(), O.isNodeJS || (g.filter = "none"), g.scale(1 / f, -1 / P);
          let _;
          if (S.bitmap)
            _ = this.applyTransferMapsToBitmap(S);
          else if (typeof HTMLElement == "function" && S instanceof HTMLElement || !S.data)
            _ = S;
          else {
            const N = this.cachedCanvases.getCanvas("inlineImage", f, P).context;
            L(N, S), _ = this.applyTransferMapsToCanvas(N);
          }
          const U = this._scaleImage(_, (0, a.getCurrentTransformInverse)(g));
          g.imageSmoothingEnabled = n((0, a.getCurrentTransform)(g), S.interpolate), c(g, U.img, 0, 0, U.paintWidth, U.paintHeight, 0, -P, f, P), this.compose(), this.restore();
        }
        paintInlineImageXObjectGroup(S, f) {
          if (!this.contentVisible)
            return;
          const P = this.ctx;
          let g;
          if (S.bitmap)
            g = S.bitmap;
          else {
            const _ = S.width, U = S.height, N = this.cachedCanvases.getCanvas("inlineImage", _, U).context;
            L(N, S), g = this.applyTransferMapsToCanvas(N);
          }
          for (const _ of f)
            P.save(), P.transform(..._.transform), P.scale(1, -1), c(P, g, _.x, _.y, _.w, _.h, 0, -1, 1, 1), P.restore();
          this.compose();
        }
        paintSolidColorImageMask() {
          this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
        }
        markPoint(S) {
        }
        markPointProps(S, f) {
        }
        beginMarkedContent(S) {
          this.markedContentStack.push({ visible: !0 });
        }
        beginMarkedContentProps(S, f) {
          S === "OC" ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(f) }) : this.markedContentStack.push({ visible: !0 }), this.contentVisible = this.isContentVisible();
        }
        endMarkedContent() {
          this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
        }
        beginCompat() {
        }
        endCompat() {
        }
        consumePath(S) {
          const f = this.current.isEmptyClip();
          this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(S);
          const P = this.ctx;
          this.pendingClip && (f || (this.pendingClip === C ? P.clip("evenodd") : P.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), P.beginPath();
        }
        getSinglePixelWidth() {
          if (!this._cachedGetSinglePixelWidth) {
            const S = (0, a.getCurrentTransform)(this.ctx);
            if (S[1] === 0 && S[2] === 0)
              this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(S[0]), Math.abs(S[3]));
            else {
              const f = Math.abs(S[0] * S[3] - S[2] * S[1]), P = Math.hypot(S[0], S[2]), g = Math.hypot(S[1], S[3]);
              this._cachedGetSinglePixelWidth = Math.max(P, g) / f;
            }
          }
          return this._cachedGetSinglePixelWidth;
        }
        getScaleForStroking() {
          if (this._cachedScaleForStroking[0] === -1) {
            const { lineWidth: S } = this.current, { a: f, b: P, c: g, d: _ } = this.ctx.getTransform();
            let U, N;
            if (P === 0 && g === 0) {
              const G = Math.abs(f), V = Math.abs(_);
              if (G === V)
                if (S === 0)
                  U = N = 1 / G;
                else {
                  const W = G * S;
                  U = N = W < 1 ? 1 / W : 1;
                }
              else if (S === 0)
                U = 1 / G, N = 1 / V;
              else {
                const W = G * S, X = V * S;
                U = W < 1 ? 1 / W : 1, N = X < 1 ? 1 / X : 1;
              }
            } else {
              const G = Math.abs(f * _ - P * g), V = Math.hypot(f, P), W = Math.hypot(g, _);
              if (S === 0)
                U = W / G, N = V / G;
              else {
                const X = S * G;
                U = W > X ? W / X : 1, N = V > X ? V / X : 1;
              }
            }
            this._cachedScaleForStroking[0] = U, this._cachedScaleForStroking[1] = N;
          }
          return this._cachedScaleForStroking;
        }
        rescaleAndStroke(S) {
          const { ctx: f } = this, { lineWidth: P } = this.current, [g, _] = this.getScaleForStroking();
          if (f.lineWidth = P || 1, g === 1 && _ === 1) {
            f.stroke();
            return;
          }
          const U = f.getLineDash();
          if (S && f.save(), f.scale(g, _), U.length > 0) {
            const N = Math.max(g, _);
            f.setLineDash(U.map((G) => G / N)), f.lineDashOffset /= N;
          }
          f.stroke(), S && f.restore();
        }
        isContentVisible() {
          for (let S = this.markedContentStack.length - 1; S >= 0; S--)
            if (!this.markedContentStack[S].visible)
              return !1;
          return !0;
        }
      };
      let D = J;
      o = new WeakSet(), we = function() {
        for (; this.stateStack.length || this.inSMaskMode; )
          this.restore();
        this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
      }, z = new WeakSet(), Ee = function() {
        if (this.pageColors) {
          const S = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
          if (S !== "none") {
            const f = this.ctx.filter;
            this.ctx.filter = S, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = f;
          }
        }
      }, d.CanvasGraphics = D;
      for (const $ in e.OPS)
        D.prototype[$] !== void 0 && (D.prototype[e.OPS[$]] = D.prototype[$]);
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.TilingPattern = d.PathType = void 0, d.getShadingPattern = function(v) {
        switch (v[0]) {
          case "RadialAxial":
            return new p(v);
          case "Mesh":
            return new c(v);
          case "Dummy":
            return new b();
        }
        throw new Error(`Unknown IR type: ${v[0]}`);
      };
      var e = t(1), a = t(142);
      const y = { FILL: "Fill", STROKE: "Stroke", SHADING: "Shading" };
      d.PathType = y;
      function w(I, v) {
        if (!v)
          return;
        const i = v[2] - v[0], A = v[3] - v[1], n = new Path2D();
        n.rect(v[0], v[1], i, A), I.clip(n);
      }
      class O {
        constructor() {
          this.constructor === O && (0, e.unreachable)("Cannot initialize BaseShadingPattern.");
        }
        getPattern() {
          (0, e.unreachable)("Abstract method `getPattern` called.");
        }
      }
      class p extends O {
        constructor(v) {
          super(), this._type = v[1], this._bbox = v[2], this._colorStops = v[3], this._p0 = v[4], this._p1 = v[5], this._r0 = v[6], this._r1 = v[7], this.matrix = null;
        }
        _createGradient(v) {
          let i;
          this._type === "axial" ? i = v.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (i = v.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
          for (const A of this._colorStops)
            i.addColorStop(A[0], A[1]);
          return i;
        }
        getPattern(v, i, A, n) {
          let s;
          if (n === y.STROKE || n === y.FILL) {
            const r = i.current.getClippedPathBoundingBox(n, (0, a.getCurrentTransform)(v)) || [0, 0, 0, 0], u = Math.ceil(r[2] - r[0]) || 1, C = Math.ceil(r[3] - r[1]) || 1, D = i.cachedCanvases.getCanvas("pattern", u, C, !0), o = D.context;
            o.clearRect(0, 0, o.canvas.width, o.canvas.height), o.beginPath(), o.rect(0, 0, o.canvas.width, o.canvas.height), o.translate(-r[0], -r[1]), A = e.Util.transform(A, [1, 0, 0, 1, r[0], r[1]]), o.transform(...i.baseTransform), this.matrix && o.transform(...this.matrix), w(o, this._bbox), o.fillStyle = this._createGradient(o), o.fill(), s = v.createPattern(D.canvas, "no-repeat");
            const F = new DOMMatrix(A);
            s.setTransform(F);
          } else
            w(v, this._bbox), s = this._createGradient(v);
          return s;
        }
      }
      function h(I, v, i, A, n, s, r, u) {
        const C = v.coords, D = v.colors, o = I.data, F = 4 * I.width;
        let z;
        C[i + 1] > C[A + 1] && (z = i, i = A, A = z, z = s, s = r, r = z), C[A + 1] > C[n + 1] && (z = A, A = n, n = z, z = r, r = u, u = z), C[i + 1] > C[A + 1] && (z = i, i = A, A = z, z = s, s = r, r = z);
        const q = (C[i] + v.offsetX) * v.scaleX, J = (C[i + 1] + v.offsetY) * v.scaleY, $ = (C[A] + v.offsetX) * v.scaleX, S = (C[A + 1] + v.offsetY) * v.scaleY, f = (C[n] + v.offsetX) * v.scaleX, P = (C[n + 1] + v.offsetY) * v.scaleY;
        if (J >= P)
          return;
        const g = D[s], _ = D[s + 1], U = D[s + 2], N = D[r], G = D[r + 1], V = D[r + 2], W = D[u], X = D[u + 1], K = D[u + 2], H = Math.round(J), Z = Math.round(P);
        let dt, lt, E, R, j, B, Y, tt;
        for (let rt = H; rt <= Z; rt++) {
          if (rt < S) {
            let ht;
            ht = rt < J ? 0 : (J - rt) / (J - S), dt = q - (q - $) * ht, lt = g - (g - N) * ht, E = _ - (_ - G) * ht, R = U - (U - V) * ht;
          } else {
            let ht;
            ht = rt > P ? 1 : S === P ? 0 : (S - rt) / (S - P), dt = $ - ($ - f) * ht, lt = N - (N - W) * ht, E = G - (G - X) * ht, R = V - (V - K) * ht;
          }
          let it;
          it = rt < J ? 0 : rt > P ? 1 : (J - rt) / (J - P), j = q - (q - f) * it, B = g - (g - W) * it, Y = _ - (_ - X) * it, tt = U - (U - K) * it;
          const At = Math.round(Math.min(dt, j)), ct = Math.round(Math.max(dt, j));
          let vt = F * rt + 4 * At;
          for (let ht = At; ht <= ct; ht++)
            it = (dt - ht) / (dt - j), it < 0 ? it = 0 : it > 1 && (it = 1), o[vt++] = lt - (lt - B) * it | 0, o[vt++] = E - (E - Y) * it | 0, o[vt++] = R - (R - tt) * it | 0, o[vt++] = 255;
        }
      }
      function l(I, v, i) {
        const A = v.coords, n = v.colors;
        let s, r;
        switch (v.type) {
          case "lattice":
            const u = v.verticesPerRow, C = Math.floor(A.length / u) - 1, D = u - 1;
            for (s = 0; s < C; s++) {
              let o = s * u;
              for (let F = 0; F < D; F++, o++)
                h(I, i, A[o], A[o + 1], A[o + u], n[o], n[o + 1], n[o + u]), h(I, i, A[o + u + 1], A[o + 1], A[o + u], n[o + u + 1], n[o + 1], n[o + u]);
            }
            break;
          case "triangles":
            for (s = 0, r = A.length; s < r; s += 3)
              h(I, i, A[s], A[s + 1], A[s + 2], n[s], n[s + 1], n[s + 2]);
            break;
          default:
            throw new Error("illegal figure");
        }
      }
      class c extends O {
        constructor(v) {
          super(), this._coords = v[2], this._colors = v[3], this._figures = v[4], this._bounds = v[5], this._bbox = v[7], this._background = v[8], this.matrix = null;
        }
        _createMeshCanvas(v, i, A) {
          const n = Math.floor(this._bounds[0]), s = Math.floor(this._bounds[1]), r = Math.ceil(this._bounds[2]) - n, u = Math.ceil(this._bounds[3]) - s, C = Math.min(Math.ceil(Math.abs(r * v[0] * 1.1)), 3e3), D = Math.min(Math.ceil(Math.abs(u * v[1] * 1.1)), 3e3), o = r / C, F = u / D, z = { coords: this._coords, colors: this._colors, offsetX: -n, offsetY: -s, scaleX: 1 / o, scaleY: 1 / F }, q = C + 4, J = D + 4, $ = A.getCanvas("mesh", q, J, !1), S = $.context, f = S.createImageData(C, D);
          if (i) {
            const P = f.data;
            for (let g = 0, _ = P.length; g < _; g += 4)
              P[g] = i[0], P[g + 1] = i[1], P[g + 2] = i[2], P[g + 3] = 255;
          }
          for (const P of this._figures)
            l(f, P, z);
          return S.putImageData(f, 2, 2), { canvas: $.canvas, offsetX: n - 2 * o, offsetY: s - 2 * F, scaleX: o, scaleY: F };
        }
        getPattern(v, i, A, n) {
          w(v, this._bbox);
          let s;
          if (n === y.SHADING)
            s = e.Util.singularValueDecompose2dScale((0, a.getCurrentTransform)(v));
          else if (s = e.Util.singularValueDecompose2dScale(i.baseTransform), this.matrix) {
            const u = e.Util.singularValueDecompose2dScale(this.matrix);
            s = [s[0] * u[0], s[1] * u[1]];
          }
          const r = this._createMeshCanvas(s, n === y.SHADING ? null : this._background, i.cachedCanvases);
          return n !== y.SHADING && (v.setTransform(...i.baseTransform), this.matrix && v.transform(...this.matrix)), v.translate(r.offsetX, r.offsetY), v.scale(r.scaleX, r.scaleY), v.createPattern(r.canvas, "no-repeat");
        }
      }
      class b extends O {
        getPattern() {
          return "hotpink";
        }
      }
      const L = 1, m = 2, x = class {
        constructor(v, i, A, n, s) {
          this.operatorList = v[2], this.matrix = v[3] || [1, 0, 0, 1, 0, 0], this.bbox = v[4], this.xstep = v[5], this.ystep = v[6], this.paintType = v[7], this.tilingType = v[8], this.color = i, this.ctx = A, this.canvasGraphicsFactory = n, this.baseTransform = s;
        }
        createPatternCanvas(v) {
          const i = this.operatorList, A = this.bbox, n = this.xstep, s = this.ystep, r = this.paintType, u = this.tilingType, C = this.color, D = this.canvasGraphicsFactory;
          (0, e.info)("TilingType: " + u);
          const o = A[0], F = A[1], z = A[2], q = A[3], J = e.Util.singularValueDecompose2dScale(this.matrix), $ = e.Util.singularValueDecompose2dScale(this.baseTransform), S = [J[0] * $[0], J[1] * $[1]], f = this.getSizeAndScale(n, this.ctx.canvas.width, S[0]), P = this.getSizeAndScale(s, this.ctx.canvas.height, S[1]), g = v.cachedCanvases.getCanvas("pattern", f.size, P.size, !0), _ = g.context, U = D.createCanvasGraphics(_);
          U.groupLevel = v.groupLevel, this.setFillAndStrokeStyleToContext(U, r, C);
          let N = o, G = F, V = z, W = q;
          return o < 0 && (N = 0, V += Math.abs(o)), F < 0 && (G = 0, W += Math.abs(F)), _.translate(-f.scale * N, -P.scale * G), U.transform(f.scale, 0, 0, P.scale, 0, 0), _.save(), this.clipBbox(U, N, G, V, W), U.baseTransform = (0, a.getCurrentTransform)(U.ctx), U.executeOperatorList(i), U.endDrawing(), { canvas: g.canvas, scaleX: f.scale, scaleY: P.scale, offsetX: N, offsetY: G };
        }
        getSizeAndScale(v, i, A) {
          v = Math.abs(v);
          const n = Math.max(x.MAX_PATTERN_SIZE, i);
          let s = Math.ceil(v * A);
          return s >= n ? s = n : A = s / v, { scale: A, size: s };
        }
        clipBbox(v, i, A, n, s) {
          const r = n - i, u = s - A;
          v.ctx.rect(i, A, r, u), v.current.updateRectMinMax((0, a.getCurrentTransform)(v.ctx), [i, A, n, s]), v.clip(), v.endPath();
        }
        setFillAndStrokeStyleToContext(v, i, A) {
          const n = v.ctx, s = v.current;
          switch (i) {
            case L:
              const r = this.ctx;
              n.fillStyle = r.fillStyle, n.strokeStyle = r.strokeStyle, s.fillColor = r.fillStyle, s.strokeColor = r.strokeStyle;
              break;
            case m:
              const u = e.Util.makeHexColor(A[0], A[1], A[2]);
              n.fillStyle = u, n.strokeStyle = u, s.fillColor = u, s.strokeColor = u;
              break;
            default:
              throw new e.FormatError(`Unsupported paint type: ${i}`);
          }
        }
        getPattern(v, i, A, n) {
          let s = A;
          n !== y.SHADING && (s = e.Util.transform(s, i.baseTransform), this.matrix && (s = e.Util.transform(s, this.matrix)));
          const r = this.createPatternCanvas(i);
          let u = new DOMMatrix(s);
          u = u.translate(r.offsetX, r.offsetY), u = u.scale(1 / r.scaleX, 1 / r.scaleY);
          const C = v.createPattern(r.canvas, "repeat");
          return C.setTransform(u), C;
        }
      };
      let M = x;
      It(M, "MAX_PATTERN_SIZE", 3e3), d.TilingPattern = M;
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.convertBlackAndWhiteToRGBA = a, d.convertToRGBA = function(w) {
        switch (w.kind) {
          case e.ImageKind.GRAYSCALE_1BPP:
            return a(w);
          case e.ImageKind.RGB_24BPP:
            return function(p) {
              let { src: h, srcPos: l = 0, dest: c, destPos: b = 0, width: L, height: m } = p, M = 0;
              const x = h.length >> 2, I = new Uint32Array(h.buffer, l, x);
              if (e.FeatureTest.isLittleEndian) {
                for (; M < x - 2; M += 3, b += 4) {
                  const v = I[M], i = I[M + 1], A = I[M + 2];
                  c[b] = 4278190080 | v, c[b + 1] = v >>> 24 | i << 8 | 4278190080, c[b + 2] = i >>> 16 | A << 16 | 4278190080, c[b + 3] = A >>> 8 | 4278190080;
                }
                for (let v = 4 * M, i = h.length; v < i; v += 3)
                  c[b++] = h[v] | h[v + 1] << 8 | h[v + 2] << 16 | 4278190080;
              } else {
                for (; M < x - 2; M += 3, b += 4) {
                  const v = I[M], i = I[M + 1], A = I[M + 2];
                  c[b] = 255 | v, c[b + 1] = v << 24 | i >>> 8 | 255, c[b + 2] = i << 16 | A >>> 16 | 255, c[b + 3] = A << 8 | 255;
                }
                for (let v = 4 * M, i = h.length; v < i; v += 3)
                  c[b++] = h[v] << 24 | h[v + 1] << 16 | h[v + 2] << 8 | 255;
              }
              return { srcPos: l, destPos: b };
            }(w);
        }
        return null;
      }, d.grayToRGBA = function(w, O) {
        if (e.FeatureTest.isLittleEndian)
          for (let p = 0, h = w.length; p < h; p++)
            O[p] = 65793 * w[p] | 4278190080;
        else
          for (let p = 0, h = w.length; p < h; p++)
            O[p] = 16843008 * w[p] | 255;
      };
      var e = t(1);
      function a(y) {
        let { src: w, srcPos: O = 0, dest: p, width: h, height: l, nonBlackColor: c = 4294967295, inverseDecode: b = !1 } = y;
        const L = e.FeatureTest.isLittleEndian ? 4278190080 : 255, [m, M] = b ? [c, L] : [L, c], x = h >> 3, I = 7 & h, v = w.length;
        p = new Uint32Array(p.buffer);
        let i = 0;
        for (let A = 0; A < l; A++) {
          for (const s = O + x; O < s; O++) {
            const r = O < v ? w[O] : 255;
            p[i++] = 128 & r ? M : m, p[i++] = 64 & r ? M : m, p[i++] = 32 & r ? M : m, p[i++] = 16 & r ? M : m, p[i++] = 8 & r ? M : m, p[i++] = 4 & r ? M : m, p[i++] = 2 & r ? M : m, p[i++] = 1 & r ? M : m;
          }
          if (I === 0)
            continue;
          const n = O < v ? w[O++] : 255;
          for (let s = 0; s < I; s++)
            p[i++] = n & 1 << 7 - s ? M : m;
        }
        return { srcPos: O, destPos: i };
      }
    }, (k, d) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.GlobalWorkerOptions = void 0;
      const t = /* @__PURE__ */ Object.create(null);
      d.GlobalWorkerOptions = t, t.workerPort = null, t.workerSrc = "";
    }, (k, d, t) => {
      var M, Ye, I, Ke, i, fe, n;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.MessageHandler = void 0;
      var e = t(1);
      const a = 1, y = 2, w = 1, O = 2, p = 3, h = 4, l = 5, c = 6, b = 7, L = 8;
      function m(s) {
        switch (s instanceof Error || typeof s == "object" && s !== null || (0, e.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), s.name) {
          case "AbortException":
            return new e.AbortException(s.message);
          case "MissingPDFException":
            return new e.MissingPDFException(s.message);
          case "PasswordException":
            return new e.PasswordException(s.message, s.code);
          case "UnexpectedResponseException":
            return new e.UnexpectedResponseException(s.message, s.status);
          case "UnknownErrorException":
            return new e.UnknownErrorException(s.message, s.details);
          default:
            return new e.UnknownErrorException(s.message, s.toString());
        }
      }
      d.MessageHandler = (n = class {
        constructor(r, u, C) {
          et(this, M);
          et(this, I);
          et(this, i);
          this.sourceName = r, this.targetName = u, this.comObj = C, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (D) => {
            const o = D.data;
            if (o.targetName !== this.sourceName)
              return;
            if (o.stream) {
              nt(this, I, Ke).call(this, o);
              return;
            }
            if (o.callback) {
              const z = o.callbackId, q = this.callbackCapabilities[z];
              if (!q)
                throw new Error(`Cannot resolve callback ${z}`);
              if (delete this.callbackCapabilities[z], o.callback === a)
                q.resolve(o.data);
              else {
                if (o.callback !== y)
                  throw new Error("Unexpected callback case");
                q.reject(m(o.reason));
              }
              return;
            }
            const F = this.actionHandler[o.action];
            if (!F)
              throw new Error(`Unknown action from worker: ${o.action}`);
            if (o.callbackId) {
              const z = this.sourceName, q = o.sourceName;
              new Promise(function(J) {
                J(F(o.data));
              }).then(function(J) {
                C.postMessage({ sourceName: z, targetName: q, callback: a, callbackId: o.callbackId, data: J });
              }, function(J) {
                C.postMessage({ sourceName: z, targetName: q, callback: y, callbackId: o.callbackId, reason: m(J) });
              });
            } else
              o.streamId ? nt(this, M, Ye).call(this, o) : F(o.data);
          }, C.addEventListener("message", this._onComObjOnMessage);
        }
        on(r, u) {
          const C = this.actionHandler;
          if (C[r])
            throw new Error(`There is already an actionName called "${r}"`);
          C[r] = u;
        }
        send(r, u, C) {
          this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: r, data: u }, C);
        }
        sendWithPromise(r, u, C) {
          const D = this.callbackId++, o = new e.PromiseCapability();
          this.callbackCapabilities[D] = o;
          try {
            this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: r, callbackId: D, data: u }, C);
          } catch (F) {
            o.reject(F);
          }
          return o.promise;
        }
        sendWithStream(r, u, C, D) {
          const o = this.streamId++, F = this.sourceName, z = this.targetName, q = this.comObj;
          return new ReadableStream({ start: (J) => {
            const $ = new e.PromiseCapability();
            return this.streamControllers[o] = { controller: J, startCall: $, pullCall: null, cancelCall: null, isClosed: !1 }, q.postMessage({ sourceName: F, targetName: z, action: r, streamId: o, data: u, desiredSize: J.desiredSize }, D), $.promise;
          }, pull: (J) => {
            const $ = new e.PromiseCapability();
            return this.streamControllers[o].pullCall = $, q.postMessage({ sourceName: F, targetName: z, stream: c, streamId: o, desiredSize: J.desiredSize }), $.promise;
          }, cancel: (J) => {
            (0, e.assert)(J instanceof Error, "cancel must have a valid reason");
            const $ = new e.PromiseCapability();
            return this.streamControllers[o].cancelCall = $, this.streamControllers[o].isClosed = !0, q.postMessage({ sourceName: F, targetName: z, stream: w, streamId: o, reason: m(J) }), $.promise;
          } }, C);
        }
        destroy() {
          this.comObj.removeEventListener("message", this._onComObjOnMessage);
        }
      }, M = new WeakSet(), Ye = function(r) {
        const u = r.streamId, C = this.sourceName, D = r.sourceName, o = this.comObj, F = this, z = this.actionHandler[r.action], q = { enqueue(J) {
          let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, S = arguments.length > 2 ? arguments[2] : void 0;
          if (this.isCancelled)
            return;
          const f = this.desiredSize;
          this.desiredSize -= $, f > 0 && this.desiredSize <= 0 && (this.sinkCapability = new e.PromiseCapability(), this.ready = this.sinkCapability.promise), o.postMessage({ sourceName: C, targetName: D, stream: h, streamId: u, chunk: J }, S);
        }, close() {
          this.isCancelled || (this.isCancelled = !0, o.postMessage({ sourceName: C, targetName: D, stream: p, streamId: u }), delete F.streamSinks[u]);
        }, error(J) {
          (0, e.assert)(J instanceof Error, "error must have a valid reason"), this.isCancelled || (this.isCancelled = !0, o.postMessage({ sourceName: C, targetName: D, stream: l, streamId: u, reason: m(J) }));
        }, sinkCapability: new e.PromiseCapability(), onPull: null, onCancel: null, isCancelled: !1, desiredSize: r.desiredSize, ready: null };
        q.sinkCapability.resolve(), q.ready = q.sinkCapability.promise, this.streamSinks[u] = q, new Promise(function(J) {
          J(z(r.data, q));
        }).then(function() {
          o.postMessage({ sourceName: C, targetName: D, stream: L, streamId: u, success: !0 });
        }, function(J) {
          o.postMessage({ sourceName: C, targetName: D, stream: L, streamId: u, reason: m(J) });
        });
      }, I = new WeakSet(), Ke = function(r) {
        const u = r.streamId, C = this.sourceName, D = r.sourceName, o = this.comObj, F = this.streamControllers[u], z = this.streamSinks[u];
        switch (r.stream) {
          case L:
            r.success ? F.startCall.resolve() : F.startCall.reject(m(r.reason));
            break;
          case b:
            r.success ? F.pullCall.resolve() : F.pullCall.reject(m(r.reason));
            break;
          case c:
            if (!z) {
              o.postMessage({ sourceName: C, targetName: D, stream: b, streamId: u, success: !0 });
              break;
            }
            z.desiredSize <= 0 && r.desiredSize > 0 && z.sinkCapability.resolve(), z.desiredSize = r.desiredSize, new Promise(function(q) {
              var J;
              q((J = z.onPull) === null || J === void 0 ? void 0 : J.call(z));
            }).then(function() {
              o.postMessage({ sourceName: C, targetName: D, stream: b, streamId: u, success: !0 });
            }, function(q) {
              o.postMessage({ sourceName: C, targetName: D, stream: b, streamId: u, reason: m(q) });
            });
            break;
          case h:
            if ((0, e.assert)(F, "enqueue should have stream controller"), F.isClosed)
              break;
            F.controller.enqueue(r.chunk);
            break;
          case p:
            if ((0, e.assert)(F, "close should have stream controller"), F.isClosed)
              break;
            F.isClosed = !0, F.controller.close(), nt(this, i, fe).call(this, F, u);
            break;
          case l:
            (0, e.assert)(F, "error should have stream controller"), F.controller.error(m(r.reason)), nt(this, i, fe).call(this, F, u);
            break;
          case O:
            r.success ? F.cancelCall.resolve() : F.cancelCall.reject(m(r.reason)), nt(this, i, fe).call(this, F, u);
            break;
          case w:
            if (!z)
              break;
            new Promise(function(q) {
              var J;
              q((J = z.onCancel) === null || J === void 0 ? void 0 : J.call(z, m(r.reason)));
            }).then(function() {
              o.postMessage({ sourceName: C, targetName: D, stream: O, streamId: u, success: !0 });
            }, function(q) {
              o.postMessage({ sourceName: C, targetName: D, stream: O, streamId: u, reason: m(q) });
            }), z.sinkCapability.reject(m(r.reason)), z.isCancelled = !0, delete this.streamSinks[u];
            break;
          default:
            throw new Error("Unexpected stream case");
        }
      }, i = new WeakSet(), fe = async function(r, u) {
        var C, D, o;
        await Promise.allSettled([(C = r.startCall) === null || C === void 0 ? void 0 : C.promise, (D = r.pullCall) === null || D === void 0 ? void 0 : D.promise, (o = r.cancelCall) === null || o === void 0 ? void 0 : o.promise]), delete this.streamControllers[u];
      }, n);
    }, (k, d, t) => {
      var a, y, w;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.Metadata = void 0;
      var e = t(1);
      d.Metadata = (w = class {
        constructor(p) {
          et(this, a, void 0);
          et(this, y, void 0);
          let { parsedData: h, rawData: l } = p;
          ut(this, a, h), ut(this, y, l);
        }
        getRaw() {
          return T(this, y);
        }
        get(p) {
          return T(this, a).get(p) ?? null;
        }
        getAll() {
          return (0, e.objectFromMap)(T(this, a));
        }
        has(p) {
          return T(this, a).has(p);
        }
      }, a = new WeakMap(), y = new WeakMap(), w);
    }, (k, d, t) => {
      var O, p, h, l, c, b, Te, m;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.OptionalContentConfig = void 0;
      var e = t(1), a = t(144);
      const y = Symbol("INTERNAL");
      class w {
        constructor(x, I) {
          et(this, O, !0);
          this.name = x, this.intent = I;
        }
        get visible() {
          return T(this, O);
        }
        _setVisible(x, I) {
          x !== y && (0, e.unreachable)("Internal method `_setVisible` called."), ut(this, O, I);
        }
      }
      O = new WeakMap(), d.OptionalContentConfig = (m = class {
        constructor(x) {
          et(this, b);
          et(this, p, null);
          et(this, h, /* @__PURE__ */ new Map());
          et(this, l, null);
          et(this, c, null);
          if (this.name = null, this.creator = null, x !== null) {
            this.name = x.name, this.creator = x.creator, ut(this, c, x.order);
            for (const I of x.groups)
              T(this, h).set(I.id, new w(I.name, I.intent));
            if (x.baseState === "OFF")
              for (const I of T(this, h).values())
                I._setVisible(y, !1);
            for (const I of x.on)
              T(this, h).get(I)._setVisible(y, !0);
            for (const I of x.off)
              T(this, h).get(I)._setVisible(y, !1);
            ut(this, l, this.getHash());
          }
        }
        isVisible(x) {
          if (T(this, h).size === 0)
            return !0;
          if (!x)
            return (0, e.warn)("Optional content group not defined."), !0;
          if (x.type === "OCG")
            return T(this, h).has(x.id) ? T(this, h).get(x.id).visible : ((0, e.warn)(`Optional content group not found: ${x.id}`), !0);
          if (x.type === "OCMD") {
            if (x.expression)
              return nt(this, b, Te).call(this, x.expression);
            if (!x.policy || x.policy === "AnyOn") {
              for (const I of x.ids) {
                if (!T(this, h).has(I))
                  return (0, e.warn)(`Optional content group not found: ${I}`), !0;
                if (T(this, h).get(I).visible)
                  return !0;
              }
              return !1;
            }
            if (x.policy === "AllOn") {
              for (const I of x.ids) {
                if (!T(this, h).has(I))
                  return (0, e.warn)(`Optional content group not found: ${I}`), !0;
                if (!T(this, h).get(I).visible)
                  return !1;
              }
              return !0;
            }
            if (x.policy === "AnyOff") {
              for (const I of x.ids) {
                if (!T(this, h).has(I))
                  return (0, e.warn)(`Optional content group not found: ${I}`), !0;
                if (!T(this, h).get(I).visible)
                  return !0;
              }
              return !1;
            }
            if (x.policy === "AllOff") {
              for (const I of x.ids) {
                if (!T(this, h).has(I))
                  return (0, e.warn)(`Optional content group not found: ${I}`), !0;
                if (T(this, h).get(I).visible)
                  return !1;
              }
              return !0;
            }
            return (0, e.warn)(`Unknown optional content policy ${x.policy}.`), !0;
          }
          return (0, e.warn)(`Unknown group type ${x.type}.`), !0;
        }
        setVisibility(x) {
          let I = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          T(this, h).has(x) ? (T(this, h).get(x)._setVisible(y, !!I), ut(this, p, null)) : (0, e.warn)(`Optional content group not found: ${x}`);
        }
        get hasInitialVisibility() {
          return this.getHash() === T(this, l);
        }
        getOrder() {
          return T(this, h).size ? T(this, c) ? T(this, c).slice() : [...T(this, h).keys()] : null;
        }
        getGroups() {
          return T(this, h).size > 0 ? (0, e.objectFromMap)(T(this, h)) : null;
        }
        getGroup(x) {
          return T(this, h).get(x) || null;
        }
        getHash() {
          if (T(this, p) !== null)
            return T(this, p);
          const x = new a.MurmurHash3_64();
          for (const [I, v] of T(this, h))
            x.update(`${I}:${v.visible}`);
          return ut(this, p, x.hexdigest());
        }
      }, p = new WeakMap(), h = new WeakMap(), l = new WeakMap(), c = new WeakMap(), b = new WeakSet(), Te = function(x) {
        const I = x.length;
        if (I < 2)
          return !0;
        const v = x[0];
        for (let i = 1; i < I; i++) {
          const A = x[i];
          let n;
          if (Array.isArray(A))
            n = nt(this, b, Te).call(this, A);
          else {
            if (!T(this, h).has(A))
              return (0, e.warn)(`Optional content group not found: ${A}`), !0;
            n = T(this, h).get(A).visible;
          }
          switch (v) {
            case "And":
              if (!n)
                return !1;
              break;
            case "Or":
              if (n)
                return !0;
              break;
            case "Not":
              return !n;
            default:
              return !0;
          }
        }
        return v === "And";
      }, m);
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.PDFDataTransportStream = void 0;
      var e = t(1), a = t(142);
      d.PDFDataTransportStream = class {
        constructor(p, h) {
          let { length: l, initialData: c, progressiveDone: b = !1, contentDispositionFilename: L = null, disableRange: m = !1, disableStream: M = !1 } = p;
          if ((0, e.assert)(h, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'), this._queuedChunks = [], this._progressiveDone = b, this._contentDispositionFilename = L, (c == null ? void 0 : c.length) > 0) {
            const x = c instanceof Uint8Array && c.byteLength === c.buffer.byteLength ? c.buffer : new Uint8Array(c).buffer;
            this._queuedChunks.push(x);
          }
          this._pdfDataRangeTransport = h, this._isStreamingSupported = !M, this._isRangeSupported = !m, this._contentLength = l, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener((x, I) => {
            this._onReceiveData({ begin: x, chunk: I });
          }), this._pdfDataRangeTransport.addProgressListener((x, I) => {
            this._onProgress({ loaded: x, total: I });
          }), this._pdfDataRangeTransport.addProgressiveReadListener((x) => {
            this._onReceiveData({ chunk: x });
          }), this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
            this._onProgressiveDone();
          }), this._pdfDataRangeTransport.transportReady();
        }
        _onReceiveData(p) {
          let { begin: h, chunk: l } = p;
          const c = l instanceof Uint8Array && l.byteLength === l.buffer.byteLength ? l.buffer : new Uint8Array(l).buffer;
          if (h === void 0)
            this._fullRequestReader ? this._fullRequestReader._enqueue(c) : this._queuedChunks.push(c);
          else {
            const b = this._rangeReaders.some(function(L) {
              return L._begin !== h ? !1 : (L._enqueue(c), !0);
            });
            (0, e.assert)(b, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
          }
        }
        get _progressiveDataLength() {
          var p;
          return ((p = this._fullRequestReader) === null || p === void 0 ? void 0 : p._loaded) ?? 0;
        }
        _onProgress(p) {
          if (p.total === void 0) {
            var h, l;
            (h = this._rangeReaders[0]) === null || h === void 0 || (l = h.onProgress) === null || l === void 0 || l.call(h, { loaded: p.loaded });
          } else {
            var c, b;
            (c = this._fullRequestReader) === null || c === void 0 || (b = c.onProgress) === null || b === void 0 || b.call(c, { loaded: p.loaded, total: p.total });
          }
        }
        _onProgressiveDone() {
          var p;
          (p = this._fullRequestReader) === null || p === void 0 || p.progressiveDone(), this._progressiveDone = !0;
        }
        _removeRangeReader(p) {
          const h = this._rangeReaders.indexOf(p);
          h >= 0 && this._rangeReaders.splice(h, 1);
        }
        getFullReader() {
          (0, e.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
          const p = this._queuedChunks;
          return this._queuedChunks = null, new y(this, p, this._progressiveDone, this._contentDispositionFilename);
        }
        getRangeReader(p, h) {
          if (h <= this._progressiveDataLength)
            return null;
          const l = new w(this, p, h);
          return this._pdfDataRangeTransport.requestDataRange(p, h), this._rangeReaders.push(l), l;
        }
        cancelAllRequests(p) {
          var h;
          (h = this._fullRequestReader) === null || h === void 0 || h.cancel(p);
          for (const l of this._rangeReaders.slice(0))
            l.cancel(p);
          this._pdfDataRangeTransport.abort();
        }
      };
      class y {
        constructor(p, h) {
          let l = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          this._stream = p, this._done = l || !1, this._filename = (0, a.isPdfFile)(c) ? c : null, this._queuedChunks = h || [], this._loaded = 0;
          for (const b of this._queuedChunks)
            this._loaded += b.byteLength;
          this._requests = [], this._headersReady = Promise.resolve(), p._fullRequestReader = this, this.onProgress = null;
        }
        _enqueue(p) {
          this._done || (this._requests.length > 0 ? this._requests.shift().resolve({ value: p, done: !1 }) : this._queuedChunks.push(p), this._loaded += p.byteLength);
        }
        get headersReady() {
          return this._headersReady;
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._stream._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._stream._isStreamingSupported;
        }
        get contentLength() {
          return this._stream._contentLength;
        }
        async read() {
          if (this._queuedChunks.length > 0)
            return { value: this._queuedChunks.shift(), done: !1 };
          if (this._done)
            return { value: void 0, done: !0 };
          const p = new e.PromiseCapability();
          return this._requests.push(p), p.promise;
        }
        cancel(p) {
          this._done = !0;
          for (const h of this._requests)
            h.resolve({ value: void 0, done: !0 });
          this._requests.length = 0;
        }
        progressiveDone() {
          this._done || (this._done = !0);
        }
      }
      class w {
        constructor(p, h, l) {
          this._stream = p, this._begin = h, this._end = l, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
        }
        _enqueue(p) {
          if (!this._done) {
            if (this._requests.length === 0)
              this._queuedChunk = p;
            else {
              this._requests.shift().resolve({ value: p, done: !1 });
              for (const h of this._requests)
                h.resolve({ value: void 0, done: !0 });
              this._requests.length = 0;
            }
            this._done = !0, this._stream._removeRangeReader(this);
          }
        }
        get isStreamingSupported() {
          return !1;
        }
        async read() {
          if (this._queuedChunk) {
            const h = this._queuedChunk;
            return this._queuedChunk = null, { value: h, done: !1 };
          }
          if (this._done)
            return { value: void 0, done: !0 };
          const p = new e.PromiseCapability();
          return this._requests.push(p), p.promise;
        }
        cancel(p) {
          this._done = !0;
          for (const h of this._requests)
            h.resolve({ value: void 0, done: !0 });
          this._requests.length = 0, this._stream._removeRangeReader(this);
        }
      }
    }, (k, d) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.XfaText = void 0;
      class t {
        static textContent(a) {
          const y = [], w = { items: y, styles: /* @__PURE__ */ Object.create(null) };
          return function O(p) {
            var h;
            if (!p)
              return;
            let l = null;
            const c = p.name;
            if (c === "#text")
              l = p.value;
            else {
              if (!t.shouldBuildText(c))
                return;
              p != null && (h = p.attributes) !== null && h !== void 0 && h.textContent ? l = p.attributes.textContent : p.value && (l = p.value);
            }
            if (l !== null && y.push({ str: l }), p.children)
              for (const b of p.children)
                O(b);
          }(a), w;
        }
        static shouldBuildText(a) {
          return !(a === "textarea" || a === "input" || a === "option" || a === "select");
        }
      }
      d.XfaText = t;
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.NodeStandardFontDataFactory = d.NodeFilterFactory = d.NodeCanvasFactory = d.NodeCMapReaderFactory = void 0;
      var e = t(143);
      const a = function(h) {
        return new Promise((l, c) => {
          require$$6.readFile(h, (b, L) => {
            !b && L ? l(new Uint8Array(L)) : c(new Error(b));
          });
        });
      };
      class y extends e.BaseFilterFactory {
      }
      d.NodeFilterFactory = y;
      class w extends e.BaseCanvasFactory {
        _createCanvas(l, c) {
          return require$$6.createCanvas(l, c);
        }
      }
      d.NodeCanvasFactory = w;
      class O extends e.BaseCMapReaderFactory {
        _fetchData(l, c) {
          return a(l).then((b) => ({ cMapData: b, compressionType: c }));
        }
      }
      d.NodeCMapReaderFactory = O;
      class p extends e.BaseStandardFontDataFactory {
        _fetchData(l) {
          return a(l);
        }
      }
      d.NodeStandardFontDataFactory = p;
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.PDFNodeStream = void 0;
      var e = t(1), a = t(157);
      const y = require$$6, w = require$$6, O = require$$6, p = require$$6, h = /^file:\/\/\/[a-zA-Z]:\//;
      d.PDFNodeStream = class {
        constructor(v) {
          this.source = v, this.url = function(A) {
            const n = p.parse(A);
            return n.protocol === "file:" || n.host ? n : /^[a-z]:[/\\]/i.test(A) ? p.parse(`file:///${A}`) : (n.host || (n.protocol = "file:"), n);
          }(v.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && v.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        get _progressiveDataLength() {
          var v;
          return ((v = this._fullRequestReader) === null || v === void 0 ? void 0 : v._loaded) ?? 0;
        }
        getFullReader() {
          return (0, e.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new M(this) : new L(this), this._fullRequestReader;
        }
        getRangeReader(v, i) {
          if (i <= this._progressiveDataLength)
            return null;
          const A = this.isFsUrl ? new x(this, v, i) : new m(this, v, i);
          return this._rangeRequestReaders.push(A), A;
        }
        cancelAllRequests(v) {
          var i;
          (i = this._fullRequestReader) === null || i === void 0 || i.cancel(v);
          for (const A of this._rangeRequestReaders.slice(0))
            A.cancel(v);
        }
      };
      class l {
        constructor(v) {
          this._url = v.url, this._done = !1, this._storedError = null, this.onProgress = null;
          const i = v.source;
          this._contentLength = i.length, this._loaded = 0, this._filename = null, this._disableRange = i.disableRange || !1, this._rangeChunkSize = i.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !i.disableStream, this._isRangeSupported = !i.disableRange, this._readableStream = null, this._readCapability = new e.PromiseCapability(), this._headersCapability = new e.PromiseCapability();
        }
        get headersReady() {
          return this._headersCapability.promise;
        }
        get filename() {
          return this._filename;
        }
        get contentLength() {
          return this._contentLength;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var v;
          if (await this._readCapability.promise, this._done)
            return { value: void 0, done: !0 };
          if (this._storedError)
            throw this._storedError;
          const i = this._readableStream.read();
          return i === null ? (this._readCapability = new e.PromiseCapability(), this.read()) : (this._loaded += i.length, (v = this.onProgress) === null || v === void 0 || v.call(this, { loaded: this._loaded, total: this._contentLength }), { value: new Uint8Array(i).buffer, done: !1 });
        }
        cancel(v) {
          this._readableStream ? this._readableStream.destroy(v) : this._error(v);
        }
        _error(v) {
          this._storedError = v, this._readCapability.resolve();
        }
        _setReadableStream(v) {
          this._readableStream = v, v.on("readable", () => {
            this._readCapability.resolve();
          }), v.on("end", () => {
            v.destroy(), this._done = !0, this._readCapability.resolve();
          }), v.on("error", (i) => {
            this._error(i);
          }), !this._isStreamingSupported && this._isRangeSupported && this._error(new e.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
        }
      }
      class c {
        constructor(v) {
          this._url = v.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = new e.PromiseCapability();
          const i = v.source;
          this._isStreamingSupported = !i.disableStream;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var v;
          if (await this._readCapability.promise, this._done)
            return { value: void 0, done: !0 };
          if (this._storedError)
            throw this._storedError;
          const i = this._readableStream.read();
          return i === null ? (this._readCapability = new e.PromiseCapability(), this.read()) : (this._loaded += i.length, (v = this.onProgress) === null || v === void 0 || v.call(this, { loaded: this._loaded }), { value: new Uint8Array(i).buffer, done: !1 });
        }
        cancel(v) {
          this._readableStream ? this._readableStream.destroy(v) : this._error(v);
        }
        _error(v) {
          this._storedError = v, this._readCapability.resolve();
        }
        _setReadableStream(v) {
          this._readableStream = v, v.on("readable", () => {
            this._readCapability.resolve();
          }), v.on("end", () => {
            v.destroy(), this._done = !0, this._readCapability.resolve();
          }), v.on("error", (i) => {
            this._error(i);
          }), this._storedError && this._readableStream.destroy(this._storedError);
        }
      }
      function b(I, v) {
        return { protocol: I.protocol, auth: I.auth, host: I.hostname, port: I.port, path: I.path, method: "GET", headers: v };
      }
      class L extends l {
        constructor(v) {
          super(v);
          const i = (A) => {
            if (A.statusCode === 404) {
              const u = new e.MissingPDFException(`Missing PDF "${this._url}".`);
              this._storedError = u, this._headersCapability.reject(u);
              return;
            }
            this._headersCapability.resolve(), this._setReadableStream(A);
            const n = (u) => this._readableStream.headers[u.toLowerCase()], { allowRangeRequests: s, suggestedLength: r } = (0, a.validateRangeRequestCapabilities)({ getResponseHeader: n, isHttp: v.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
            this._isRangeSupported = s, this._contentLength = r || this._contentLength, this._filename = (0, a.extractFilenameFromHeader)(n);
          };
          this._request = null, this._url.protocol === "http:" ? this._request = w.request(b(this._url, v.httpHeaders), i) : this._request = O.request(b(this._url, v.httpHeaders), i), this._request.on("error", (A) => {
            this._storedError = A, this._headersCapability.reject(A);
          }), this._request.end();
        }
      }
      class m extends c {
        constructor(v, i, A) {
          super(v), this._httpHeaders = {};
          for (const s in v.httpHeaders) {
            const r = v.httpHeaders[s];
            r !== void 0 && (this._httpHeaders[s] = r);
          }
          this._httpHeaders.Range = `bytes=${i}-${A - 1}`;
          const n = (s) => {
            if (s.statusCode !== 404)
              this._setReadableStream(s);
            else {
              const r = new e.MissingPDFException(`Missing PDF "${this._url}".`);
              this._storedError = r;
            }
          };
          this._request = null, this._url.protocol === "http:" ? this._request = w.request(b(this._url, this._httpHeaders), n) : this._request = O.request(b(this._url, this._httpHeaders), n), this._request.on("error", (s) => {
            this._storedError = s;
          }), this._request.end();
        }
      }
      class M extends l {
        constructor(v) {
          super(v);
          let i = decodeURIComponent(this._url.path);
          h.test(this._url.href) && (i = i.replace(/^\//, "")), y.lstat(i, (A, n) => {
            A ? (A.code === "ENOENT" && (A = new e.MissingPDFException(`Missing PDF "${i}".`)), this._storedError = A, this._headersCapability.reject(A)) : (this._contentLength = n.size, this._setReadableStream(y.createReadStream(i)), this._headersCapability.resolve());
          });
        }
      }
      class x extends c {
        constructor(v, i, A) {
          super(v);
          let n = decodeURIComponent(this._url.path);
          h.test(this._url.href) && (n = n.replace(/^\//, "")), this._setReadableStream(y.createReadStream(n, { start: i, end: A - 1 }));
        }
      }
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.createResponseStatusError = function(O, p) {
        return O === 404 || O === 0 && p.startsWith("file:") ? new e.MissingPDFException('Missing PDF "' + p + '".') : new e.UnexpectedResponseException(`Unexpected server response (${O}) while retrieving PDF "${p}".`, O);
      }, d.extractFilenameFromHeader = function(O) {
        const p = O("Content-Disposition");
        if (p) {
          let h = (0, a.getFilenameFromContentDispositionHeader)(p);
          if (h.includes("%"))
            try {
              h = decodeURIComponent(h);
            } catch {
            }
          if ((0, y.isPdfFile)(h))
            return h;
        }
        return null;
      }, d.validateRangeRequestCapabilities = function(O) {
        let { getResponseHeader: p, isHttp: h, rangeChunkSize: l, disableRange: c } = O;
        const b = { allowRangeRequests: !1, suggestedLength: void 0 }, L = parseInt(p("Content-Length"), 10);
        return !Number.isInteger(L) || (b.suggestedLength = L, L <= 2 * l) || c || !h || p("Accept-Ranges") !== "bytes" || (p("Content-Encoding") || "identity") !== "identity" || (b.allowRangeRequests = !0), b;
      }, d.validateResponseStatus = function(O) {
        return O === 200 || O === 206;
      };
      var e = t(1), a = t(158), y = t(142);
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.getFilenameFromContentDispositionHeader = function(y) {
        let w = !0, O = p("filename\\*", "i").exec(y);
        if (O) {
          O = O[1];
          let m = c(O);
          return m = unescape(m), m = b(m), m = L(m), l(m);
        }
        if (O = function(M) {
          const x = [];
          let I;
          const v = p("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
          for (; (I = v.exec(M)) !== null; ) {
            let [, A, n, s] = I;
            if (A = parseInt(A, 10), A in x) {
              if (A === 0)
                break;
            } else
              x[A] = [n, s];
          }
          const i = [];
          for (let A = 0; A < x.length && A in x; ++A) {
            let [n, s] = x[A];
            s = c(s), n && (s = unescape(s), A === 0 && (s = b(s))), i.push(s);
          }
          return i.join("");
        }(y), O)
          return l(L(O));
        if (O = p("filename", "i").exec(y), O) {
          O = O[1];
          let m = c(O);
          return m = L(m), l(m);
        }
        function p(m, M) {
          return new RegExp("(?:^|;)\\s*" + m + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', M);
        }
        function h(m, M) {
          if (m) {
            if (!/^[\x00-\xFF]+$/.test(M))
              return M;
            try {
              const x = new TextDecoder(m, { fatal: !0 }), I = (0, e.stringToBytes)(M);
              M = x.decode(I), w = !1;
            } catch {
            }
          }
          return M;
        }
        function l(m) {
          return w && /[\x80-\xff]/.test(m) && (m = h("utf-8", m), w && (m = h("iso-8859-1", m))), m;
        }
        function c(m) {
          if (m.startsWith('"')) {
            const M = m.slice(1).split('\\"');
            for (let x = 0; x < M.length; ++x) {
              const I = M[x].indexOf('"');
              I !== -1 && (M[x] = M[x].slice(0, I), M.length = x + 1), M[x] = M[x].replaceAll(/\\(.)/g, "$1");
            }
            m = M.join('"');
          }
          return m;
        }
        function b(m) {
          const M = m.indexOf("'");
          return M === -1 ? m : h(m.slice(0, M), m.slice(M + 1).replace(/^[^']*'/, ""));
        }
        function L(m) {
          return !m.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(m) ? m : m.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(M, x, I, v) {
            if (I === "q" || I === "Q")
              return h(x, v = (v = v.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function(i, A) {
                return String.fromCharCode(parseInt(A, 16));
              }));
            try {
              v = atob(v);
            } catch {
            }
            return h(x, v);
          });
        }
        return "";
      };
      var e = t(1);
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.PDFNetworkStream = void 0;
      var e = t(1), a = t(157);
      class y {
        constructor(h) {
          let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.url = h, this.isHttp = /^https?:/i.test(h), this.httpHeaders = this.isHttp && l.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = l.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
        }
        requestRange(h, l, c) {
          const b = { begin: h, end: l };
          for (const L in c)
            b[L] = c[L];
          return this.request(b);
        }
        requestFull(h) {
          return this.request(h);
        }
        request(h) {
          const l = new XMLHttpRequest(), c = this.currXhrId++, b = this.pendingRequests[c] = { xhr: l };
          l.open("GET", this.url), l.withCredentials = this.withCredentials;
          for (const L in this.httpHeaders) {
            const m = this.httpHeaders[L];
            m !== void 0 && l.setRequestHeader(L, m);
          }
          return this.isHttp && "begin" in h && "end" in h ? (l.setRequestHeader("Range", `bytes=${h.begin}-${h.end - 1}`), b.expectedStatus = 206) : b.expectedStatus = 200, l.responseType = "arraybuffer", h.onError && (l.onerror = function(L) {
            h.onError(l.status);
          }), l.onreadystatechange = this.onStateChange.bind(this, c), l.onprogress = this.onProgress.bind(this, c), b.onHeadersReceived = h.onHeadersReceived, b.onDone = h.onDone, b.onError = h.onError, b.onProgress = h.onProgress, l.send(null), c;
        }
        onProgress(h, l) {
          var c;
          const b = this.pendingRequests[h];
          b && ((c = b.onProgress) === null || c === void 0 || c.call(b, l));
        }
        onStateChange(h, l) {
          const c = this.pendingRequests[h];
          if (!c)
            return;
          const b = c.xhr;
          if (b.readyState >= 2 && c.onHeadersReceived && (c.onHeadersReceived(), delete c.onHeadersReceived), b.readyState !== 4 || !(h in this.pendingRequests))
            return;
          if (delete this.pendingRequests[h], b.status === 0 && this.isHttp) {
            var L;
            (L = c.onError) === null || L === void 0 || L.call(c, b.status);
            return;
          }
          const m = b.status || 200;
          if (!(m === 200 && c.expectedStatus === 206) && m !== c.expectedStatus) {
            var M;
            (M = c.onError) === null || M === void 0 || M.call(c, b.status);
            return;
          }
          const x = function(i) {
            const A = i.response;
            return typeof A != "string" ? A : (0, e.stringToBytes)(A).buffer;
          }(b);
          if (m === 206) {
            const v = b.getResponseHeader("Content-Range"), i = /bytes (\d+)-(\d+)\/(\d+)/.exec(v);
            c.onDone({ begin: parseInt(i[1], 10), chunk: x });
          } else if (x)
            c.onDone({ begin: 0, chunk: x });
          else {
            var I;
            (I = c.onError) === null || I === void 0 || I.call(c, b.status);
          }
        }
        getRequestXhr(h) {
          return this.pendingRequests[h].xhr;
        }
        isPendingRequest(h) {
          return h in this.pendingRequests;
        }
        abortRequest(h) {
          const l = this.pendingRequests[h].xhr;
          delete this.pendingRequests[h], l.abort();
        }
      }
      d.PDFNetworkStream = class {
        constructor(h) {
          this._source = h, this._manager = new y(h.url, { httpHeaders: h.httpHeaders, withCredentials: h.withCredentials }), this._rangeChunkSize = h.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        _onRangeRequestReaderClosed(h) {
          const l = this._rangeRequestReaders.indexOf(h);
          l >= 0 && this._rangeRequestReaders.splice(l, 1);
        }
        getFullReader() {
          return (0, e.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new w(this._manager, this._source), this._fullRequestReader;
        }
        getRangeReader(h, l) {
          const c = new O(this._manager, h, l);
          return c.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(c), c;
        }
        cancelAllRequests(h) {
          var l;
          (l = this._fullRequestReader) === null || l === void 0 || l.cancel(h);
          for (const c of this._rangeRequestReaders.slice(0))
            c.cancel(h);
        }
      };
      class w {
        constructor(h, l) {
          this._manager = h;
          const c = { onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
          this._url = l.url, this._fullRequestId = h.requestFull(c), this._headersReceivedCapability = new e.PromiseCapability(), this._disableRange = l.disableRange || !1, this._contentLength = l.length, this._rangeChunkSize = l.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
        }
        _onHeadersReceived() {
          const h = this._fullRequestId, l = this._manager.getRequestXhr(h), c = (m) => l.getResponseHeader(m), { allowRangeRequests: b, suggestedLength: L } = (0, a.validateRangeRequestCapabilities)({ getResponseHeader: c, isHttp: this._manager.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
          b && (this._isRangeSupported = !0), this._contentLength = L || this._contentLength, this._filename = (0, a.extractFilenameFromHeader)(c), this._isRangeSupported && this._manager.abortRequest(h), this._headersReceivedCapability.resolve();
        }
        _onDone(h) {
          if (h && (this._requests.length > 0 ? this._requests.shift().resolve({ value: h.chunk, done: !1 }) : this._cachedChunks.push(h.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
            for (const l of this._requests)
              l.resolve({ value: void 0, done: !0 });
            this._requests.length = 0;
          }
        }
        _onError(h) {
          this._storedError = (0, a.createResponseStatusError)(h, this._url), this._headersReceivedCapability.reject(this._storedError);
          for (const l of this._requests)
            l.reject(this._storedError);
          this._requests.length = 0, this._cachedChunks.length = 0;
        }
        _onProgress(h) {
          var l;
          (l = this.onProgress) === null || l === void 0 || l.call(this, { loaded: h.loaded, total: h.lengthComputable ? h.total : this._contentLength });
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        get contentLength() {
          return this._contentLength;
        }
        get headersReady() {
          return this._headersReceivedCapability.promise;
        }
        async read() {
          if (this._storedError)
            throw this._storedError;
          if (this._cachedChunks.length > 0)
            return { value: this._cachedChunks.shift(), done: !1 };
          if (this._done)
            return { value: void 0, done: !0 };
          const h = new e.PromiseCapability();
          return this._requests.push(h), h.promise;
        }
        cancel(h) {
          this._done = !0, this._headersReceivedCapability.reject(h);
          for (const l of this._requests)
            l.resolve({ value: void 0, done: !0 });
          this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
        }
      }
      class O {
        constructor(h, l, c) {
          this._manager = h;
          const b = { onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
          this._url = h.url, this._requestId = h.requestRange(l, c, b), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
        }
        _close() {
          var h;
          (h = this.onClosed) === null || h === void 0 || h.call(this, this);
        }
        _onDone(h) {
          const l = h.chunk;
          this._requests.length > 0 ? this._requests.shift().resolve({ value: l, done: !1 }) : this._queuedChunk = l, this._done = !0;
          for (const c of this._requests)
            c.resolve({ value: void 0, done: !0 });
          this._requests.length = 0, this._close();
        }
        _onError(h) {
          this._storedError = (0, a.createResponseStatusError)(h, this._url);
          for (const l of this._requests)
            l.reject(this._storedError);
          this._requests.length = 0, this._queuedChunk = null;
        }
        _onProgress(h) {
          if (!this.isStreamingSupported) {
            var l;
            (l = this.onProgress) === null || l === void 0 || l.call(this, { loaded: h.loaded });
          }
        }
        get isStreamingSupported() {
          return !1;
        }
        async read() {
          if (this._storedError)
            throw this._storedError;
          if (this._queuedChunk !== null) {
            const l = this._queuedChunk;
            return this._queuedChunk = null, { value: l, done: !1 };
          }
          if (this._done)
            return { value: void 0, done: !0 };
          const h = new e.PromiseCapability();
          return this._requests.push(h), h.promise;
        }
        cancel(h) {
          this._done = !0;
          for (const l of this._requests)
            l.resolve({ value: void 0, done: !0 });
          this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
        }
      }
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.PDFFetchStream = void 0;
      var e = t(1), a = t(157);
      function y(l, c, b) {
        return { method: "GET", headers: l, signal: b.signal, mode: "cors", credentials: c ? "include" : "same-origin", redirect: "follow" };
      }
      function w(l) {
        const c = new Headers();
        for (const b in l) {
          const L = l[b];
          L !== void 0 && c.append(b, L);
        }
        return c;
      }
      function O(l) {
        return l instanceof Uint8Array ? l.buffer : l instanceof ArrayBuffer ? l : ((0, e.warn)(`getArrayBuffer - unexpected data format: ${l}`), new Uint8Array(l).buffer);
      }
      d.PDFFetchStream = class {
        constructor(c) {
          this.source = c, this.isHttp = /^https?:/i.test(c.url), this.httpHeaders = this.isHttp && c.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        get _progressiveDataLength() {
          var c;
          return ((c = this._fullRequestReader) === null || c === void 0 ? void 0 : c._loaded) ?? 0;
        }
        getFullReader() {
          return (0, e.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new p(this), this._fullRequestReader;
        }
        getRangeReader(c, b) {
          if (b <= this._progressiveDataLength)
            return null;
          const L = new h(this, c, b);
          return this._rangeRequestReaders.push(L), L;
        }
        cancelAllRequests(c) {
          var b;
          (b = this._fullRequestReader) === null || b === void 0 || b.cancel(c);
          for (const L of this._rangeRequestReaders.slice(0))
            L.cancel(c);
        }
      };
      class p {
        constructor(c) {
          this._stream = c, this._reader = null, this._loaded = 0, this._filename = null;
          const b = c.source;
          this._withCredentials = b.withCredentials || !1, this._contentLength = b.length, this._headersCapability = new e.PromiseCapability(), this._disableRange = b.disableRange || !1, this._rangeChunkSize = b.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !b.disableStream, this._isRangeSupported = !b.disableRange, this._headers = w(this._stream.httpHeaders);
          const L = b.url;
          fetch(L, y(this._headers, this._withCredentials, this._abortController)).then((m) => {
            if (!(0, a.validateResponseStatus)(m.status))
              throw (0, a.createResponseStatusError)(m.status, L);
            this._reader = m.body.getReader(), this._headersCapability.resolve();
            const M = (v) => m.headers.get(v), { allowRangeRequests: x, suggestedLength: I } = (0, a.validateRangeRequestCapabilities)({ getResponseHeader: M, isHttp: this._stream.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
            this._isRangeSupported = x, this._contentLength = I || this._contentLength, this._filename = (0, a.extractFilenameFromHeader)(M), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new e.AbortException("Streaming is disabled."));
          }).catch(this._headersCapability.reject), this.onProgress = null;
        }
        get headersReady() {
          return this._headersCapability.promise;
        }
        get filename() {
          return this._filename;
        }
        get contentLength() {
          return this._contentLength;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var c;
          await this._headersCapability.promise;
          const { value: b, done: L } = await this._reader.read();
          return L ? { value: b, done: L } : (this._loaded += b.byteLength, (c = this.onProgress) === null || c === void 0 || c.call(this, { loaded: this._loaded, total: this._contentLength }), { value: O(b), done: !1 });
        }
        cancel(c) {
          var b;
          (b = this._reader) === null || b === void 0 || b.cancel(c), this._abortController.abort();
        }
      }
      class h {
        constructor(c, b, L) {
          this._stream = c, this._reader = null, this._loaded = 0;
          const m = c.source;
          this._withCredentials = m.withCredentials || !1, this._readCapability = new e.PromiseCapability(), this._isStreamingSupported = !m.disableStream, this._abortController = new AbortController(), this._headers = w(this._stream.httpHeaders), this._headers.append("Range", `bytes=${b}-${L - 1}`);
          const M = m.url;
          fetch(M, y(this._headers, this._withCredentials, this._abortController)).then((x) => {
            if (!(0, a.validateResponseStatus)(x.status))
              throw (0, a.createResponseStatusError)(x.status, M);
            this._readCapability.resolve(), this._reader = x.body.getReader();
          }).catch(this._readCapability.reject), this.onProgress = null;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var c;
          await this._readCapability.promise;
          const { value: b, done: L } = await this._reader.read();
          return L ? { value: b, done: L } : (this._loaded += b.byteLength, (c = this.onProgress) === null || c === void 0 || c.call(this, { loaded: this._loaded }), { value: O(b), done: !1 });
        }
        cancel(c) {
          var b;
          (b = this._reader) === null || b === void 0 || b.cancel(c), this._abortController.abort();
        }
      }
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.TextLayerRenderTask = void 0, d.renderTextLayer = function(L) {
        !L.textContentSource && (L.textContent || L.textContentStream) && ((0, a.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead."), L.textContentSource = L.textContent || L.textContentStream);
        const { container: m, viewport: M } = L, x = getComputedStyle(m), I = x.getPropertyValue("visibility"), v = parseFloat(x.getPropertyValue("--scale-factor"));
        I === "visible" && (!v || Math.abs(v - M.scale) > 1e-5) && console.error("The `--scale-factor` CSS-variable must be set, to the same value as `viewport.scale`, either on the `container`-element itself or higher up in the DOM.");
        const i = new c(L);
        return i._render(), i;
      }, d.updateTextLayer = function(L) {
        let { container: m, viewport: M, textDivs: x, textDivProperties: I, isOffscreenCanvasSupported: v, mustRotate: i = !0, mustRescale: A = !0 } = L;
        if (i && (0, a.setLayerDimensions)(m, { rotation: M.rotation }), A) {
          const n = p(0, v), s = { prevFontSize: null, prevFontFamily: null, div: null, scale: M.scale * (globalThis.devicePixelRatio || 1), properties: null, ctx: n };
          for (const r of x)
            s.properties = I.get(r), s.div = r, l(s);
        }
      };
      var e = t(1), a = t(142);
      const y = 30, w = 0.8, O = /* @__PURE__ */ new Map();
      function p(b, L) {
        let m;
        if (L && e.FeatureTest.isOffscreenCanvasSupported)
          m = new OffscreenCanvas(b, b).getContext("2d", { alpha: !1 });
        else {
          const M = document.createElement("canvas");
          M.width = M.height = b, m = M.getContext("2d", { alpha: !1 });
        }
        return m;
      }
      function h(b, L, m) {
        const M = document.createElement("span"), x = { angle: 0, canvasWidth: 0, hasText: L.str !== "", hasEOL: L.hasEOL, fontSize: 0 };
        b._textDivs.push(M);
        const I = e.Util.transform(b._transform, L.transform);
        let v = Math.atan2(I[1], I[0]);
        const i = m[L.fontName];
        i.vertical && (v += Math.PI / 2);
        const A = Math.hypot(I[2], I[3]), n = A * function(F, z) {
          const q = O.get(F);
          if (q)
            return q;
          const J = p(y, z);
          J.font = `${y}px ${F}`;
          const $ = J.measureText("");
          let S = $.fontBoundingBoxAscent, f = Math.abs($.fontBoundingBoxDescent);
          if (S) {
            const g = S / (S + f);
            return O.set(F, g), J.canvas.width = J.canvas.height = 0, g;
          }
          J.strokeStyle = "red", J.clearRect(0, 0, y, y), J.strokeText("g", 0, 0);
          let P = J.getImageData(0, 0, y, y).data;
          f = 0;
          for (let g = P.length - 1 - 3; g >= 0; g -= 4)
            if (P[g] > 0) {
              f = Math.ceil(g / 4 / y);
              break;
            }
          J.clearRect(0, 0, y, y), J.strokeText("A", 0, y), P = J.getImageData(0, 0, y, y).data, S = 0;
          for (let g = 0, _ = P.length; g < _; g += 4)
            if (P[g] > 0) {
              S = y - Math.floor(g / 4 / y);
              break;
            }
          if (J.canvas.width = J.canvas.height = 0, S) {
            const g = S / (S + f);
            return O.set(F, g), g;
          }
          return O.set(F, w), w;
        }(i.fontFamily, b._isOffscreenCanvasSupported);
        let s, r;
        v === 0 ? (s = I[4], r = I[5] - n) : (s = I[4] + n * Math.sin(v), r = I[5] - n * Math.cos(v));
        const u = "calc(var(--scale-factor)*", C = M.style;
        b._container === b._rootContainer ? (C.left = `${(100 * s / b._pageWidth).toFixed(2)}%`, C.top = `${(100 * r / b._pageHeight).toFixed(2)}%`) : (C.left = `${u}${s.toFixed(2)}px)`, C.top = `${u}${r.toFixed(2)}px)`), C.fontSize = `${u}${A.toFixed(2)}px)`, C.fontFamily = i.fontFamily, x.fontSize = A, M.setAttribute("role", "presentation"), M.textContent = L.str, M.dir = L.dir, b._fontInspectorEnabled && (M.dataset.fontName = L.fontName), v !== 0 && (x.angle = v * (180 / Math.PI));
        let D = !1;
        if (L.str.length > 1)
          D = !0;
        else if (L.str !== " " && L.transform[0] !== L.transform[3]) {
          const o = Math.abs(L.transform[0]), F = Math.abs(L.transform[3]);
          o !== F && Math.max(o, F) / Math.min(o, F) > 1.5 && (D = !0);
        }
        D && (x.canvasWidth = i.vertical ? L.height : L.width), b._textDivProperties.set(M, x), b._isReadableStream && b._layoutText(M);
      }
      function l(b) {
        const { div: L, scale: m, properties: M, ctx: x, prevFontSize: I, prevFontFamily: v } = b, { style: i } = L;
        let A = "";
        if (M.canvasWidth !== 0 && M.hasText) {
          const { fontFamily: n } = i, { canvasWidth: s, fontSize: r } = M;
          (I !== r || v !== n) && (x.font = `${r * m}px ${n}`, b.prevFontSize = r, b.prevFontFamily = n);
          const { width: u } = x.measureText(L.textContent);
          u > 0 && (A = `scaleX(${s * m / u})`);
        }
        M.angle !== 0 && (A = `rotate(${M.angle}deg) ${A}`), A.length > 0 && (i.transform = A);
      }
      class c {
        constructor(L) {
          var m;
          let { textContentSource: M, container: x, viewport: I, textDivs: v, textDivProperties: i, textContentItemsStr: A, isOffscreenCanvasSupported: n } = L;
          this._textContentSource = M, this._isReadableStream = M instanceof ReadableStream, this._container = this._rootContainer = x, this._textDivs = v || [], this._textContentItemsStr = A || [], this._isOffscreenCanvasSupported = n, this._fontInspectorEnabled = !((m = globalThis.FontInspector) === null || m === void 0 || !m.enabled), this._reader = null, this._textDivProperties = i || /* @__PURE__ */ new WeakMap(), this._canceled = !1, this._capability = new e.PromiseCapability(), this._layoutTextParams = { prevFontSize: null, prevFontFamily: null, div: null, scale: I.scale * (globalThis.devicePixelRatio || 1), properties: null, ctx: p(0, n) };
          const { pageWidth: s, pageHeight: r, pageX: u, pageY: C } = I.rawDims;
          this._transform = [1, 0, 0, -1, -u, C + r], this._pageWidth = s, this._pageHeight = r, (0, a.setLayerDimensions)(x, I), this._capability.promise.finally(() => {
            this._layoutTextParams = null;
          }).catch(() => {
          });
        }
        get promise() {
          return this._capability.promise;
        }
        cancel() {
          this._canceled = !0, this._reader && (this._reader.cancel(new e.AbortException("TextLayer task cancelled.")).catch(() => {
          }), this._reader = null), this._capability.reject(new e.AbortException("TextLayer task cancelled."));
        }
        _processItems(L, m) {
          for (const M of L)
            if (M.str !== void 0)
              this._textContentItemsStr.push(M.str), h(this, M, m);
            else if (M.type === "beginMarkedContentProps" || M.type === "beginMarkedContent") {
              const x = this._container;
              this._container = document.createElement("span"), this._container.classList.add("markedContent"), M.id !== null && this._container.setAttribute("id", `${M.id}`), x.append(this._container);
            } else
              M.type === "endMarkedContent" && (this._container = this._container.parentNode);
        }
        _layoutText(L) {
          const m = this._layoutTextParams.properties = this._textDivProperties.get(L);
          if (this._layoutTextParams.div = L, l(this._layoutTextParams), m.hasText && this._container.append(L), m.hasEOL) {
            const M = document.createElement("br");
            M.setAttribute("role", "presentation"), this._container.append(M);
          }
        }
        _render() {
          const L = new e.PromiseCapability();
          let m = /* @__PURE__ */ Object.create(null);
          if (this._isReadableStream) {
            const M = () => {
              this._reader.read().then((x) => {
                let { value: I, done: v } = x;
                v ? L.resolve() : (Object.assign(m, I.styles), this._processItems(I.items, m), M());
              }, L.reject);
            };
            this._reader = this._textContentSource.getReader(), M();
          } else {
            if (!this._textContentSource)
              throw new Error('No "textContentSource" parameter specified.');
            {
              const { items: M, styles: x } = this._textContentSource;
              this._processItems(M, x), L.resolve();
            }
          }
          L.promise.then(() => {
            m = null, function(x) {
              if (x._canceled)
                return;
              const I = x._textDivs, v = x._capability;
              if (I.length > 1e5)
                v.resolve();
              else {
                if (!x._isReadableStream)
                  for (const i of I)
                    x._layoutText(i);
                v.resolve();
              }
            }(this);
          }, this._capability.reject);
        }
      }
      d.TextLayerRenderTask = c;
    }, (k, d, t) => {
      var h, l, c, b, L, m, M, x, I, Pe, i, Je, n, ke, r, Re;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.AnnotationEditorLayer = void 0;
      var e = t(1), a = t(141), y = t(163), w = t(164), O = t(142);
      const C = class {
        constructor(o) {
          et(this, I);
          et(this, i);
          et(this, n);
          et(this, r);
          et(this, h, void 0);
          et(this, l, !1);
          et(this, c, this.pointerup.bind(this));
          et(this, b, this.pointerdown.bind(this));
          et(this, L, /* @__PURE__ */ new Map());
          et(this, m, !1);
          et(this, M, !1);
          et(this, x, void 0);
          C._initialized || (C._initialized = !0, y.FreeTextEditor.initialize(o.l10n), w.InkEditor.initialize(o.l10n)), o.uiManager.registerEditorTypes([y.FreeTextEditor, w.InkEditor]), ut(this, x, o.uiManager), this.pageIndex = o.pageIndex, this.div = o.div, ut(this, h, o.accessibilityManager), T(this, x).addLayer(this);
        }
        get isEmpty() {
          return T(this, L).size === 0;
        }
        updateToolbar(o) {
          T(this, x).updateToolbar(o);
        }
        updateMode() {
          let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : T(this, x).getMode();
          nt(this, r, Re).call(this), o === e.AnnotationEditorType.INK ? (this.addInkEditorIfNeeded(!1), this.disableClick()) : this.enableClick(), T(this, x).unselectAll(), o !== e.AnnotationEditorType.NONE && (this.div.classList.toggle("freeTextEditing", o === e.AnnotationEditorType.FREETEXT), this.div.classList.toggle("inkEditing", o === e.AnnotationEditorType.INK), this.div.hidden = !1);
        }
        addInkEditorIfNeeded(o) {
          if (!(!o && T(this, x).getMode() !== e.AnnotationEditorType.INK)) {
            if (!o) {
              for (const F of T(this, L).values())
                if (F.isEmpty()) {
                  F.setInBackground();
                  return;
                }
            }
            nt(this, n, ke).call(this, { offsetX: 0, offsetY: 0 }).setInBackground();
          }
        }
        setEditingState(o) {
          T(this, x).setEditingState(o);
        }
        addCommands(o) {
          T(this, x).addCommands(o);
        }
        enable() {
          this.div.style.pointerEvents = "auto";
          for (const o of T(this, L).values())
            o.enableEditing();
        }
        disable() {
          this.div.style.pointerEvents = "none";
          for (const o of T(this, L).values())
            o.disableEditing();
          nt(this, r, Re).call(this), this.isEmpty && (this.div.hidden = !0);
        }
        setActiveEditor(o) {
          T(this, x).getActive() !== o && T(this, x).setActiveEditor(o);
        }
        enableClick() {
          this.div.addEventListener("pointerdown", T(this, b)), this.div.addEventListener("pointerup", T(this, c));
        }
        disableClick() {
          this.div.removeEventListener("pointerdown", T(this, b)), this.div.removeEventListener("pointerup", T(this, c));
        }
        attach(o) {
          T(this, L).set(o.id, o);
        }
        detach(o) {
          var F;
          T(this, L).delete(o.id), (F = T(this, h)) === null || F === void 0 || F.removePointerInTextLayer(o.contentDiv);
        }
        remove(o) {
          T(this, x).removeEditor(o), this.detach(o), o.div.style.display = "none", setTimeout(() => {
            o.div.style.display = "", o.div.remove(), o.isAttachedToDOM = !1, document.activeElement === document.body && T(this, x).focusMainContainer();
          }, 0), T(this, M) || this.addInkEditorIfNeeded(!1);
        }
        add(o) {
          if (nt(this, I, Pe).call(this, o), T(this, x).addEditor(o), this.attach(o), !o.isAttachedToDOM) {
            const F = o.render();
            this.div.append(F), o.isAttachedToDOM = !0;
          }
          this.moveEditorInDOM(o), o.onceAdded(), T(this, x).addToAnnotationStorage(o);
        }
        moveEditorInDOM(o) {
          var F;
          (F = T(this, h)) === null || F === void 0 || F.moveElementInDOM(this.div, o.div, o.contentDiv, !0);
        }
        addOrRebuild(o) {
          o.needsToBeRebuilt() ? o.rebuild() : this.add(o);
        }
        addANewEditor(o) {
          this.addCommands({ cmd: () => {
            this.addOrRebuild(o);
          }, undo: () => {
            o.remove();
          }, mustExec: !0 });
        }
        addUndoableEditor(o) {
          this.addCommands({ cmd: () => {
            this.addOrRebuild(o);
          }, undo: () => {
            o.remove();
          }, mustExec: !1 });
        }
        getNextId() {
          return T(this, x).getId();
        }
        deserialize(o) {
          switch (o.annotationType) {
            case e.AnnotationEditorType.FREETEXT:
              return y.FreeTextEditor.deserialize(o, this, T(this, x));
            case e.AnnotationEditorType.INK:
              return w.InkEditor.deserialize(o, this, T(this, x));
          }
          return null;
        }
        setSelected(o) {
          T(this, x).setSelected(o);
        }
        toggleSelected(o) {
          T(this, x).toggleSelected(o);
        }
        isSelected(o) {
          return T(this, x).isSelected(o);
        }
        unselect(o) {
          T(this, x).unselect(o);
        }
        pointerup(o) {
          const { isMac: F } = e.FeatureTest.platform;
          !(o.button !== 0 || o.ctrlKey && F) && o.target === this.div && T(this, m) && (ut(this, m, !1), T(this, l) ? nt(this, n, ke).call(this, o) : ut(this, l, !0));
        }
        pointerdown(o) {
          const { isMac: F } = e.FeatureTest.platform;
          if (o.button !== 0 || o.ctrlKey && F || o.target !== this.div)
            return;
          ut(this, m, !0);
          const z = T(this, x).getActive();
          ut(this, l, !z || z.isEmpty());
        }
        drop(o) {
          const F = o.dataTransfer.getData("text/plain"), z = T(this, x).getEditor(F);
          if (!z)
            return;
          o.preventDefault(), o.dataTransfer.dropEffect = "move", nt(this, I, Pe).call(this, z);
          const q = this.div.getBoundingClientRect(), J = o.clientX - q.x, $ = o.clientY - q.y;
          z.translate(J - z.startX, $ - z.startY), this.moveEditorInDOM(z), z.div.focus();
        }
        dragover(o) {
          o.preventDefault();
        }
        destroy() {
          var o;
          ((o = T(this, x).getActive()) === null || o === void 0 ? void 0 : o.parent) === this && T(this, x).setActiveEditor(null);
          for (const z of T(this, L).values()) {
            var F;
            (F = T(this, h)) === null || F === void 0 || F.removePointerInTextLayer(z.contentDiv), z.setParent(null), z.isAttachedToDOM = !1, z.div.remove();
          }
          this.div = null, T(this, L).clear(), T(this, x).removeLayer(this);
        }
        render(o) {
          let { viewport: F } = o;
          this.viewport = F, (0, O.setLayerDimensions)(this.div, F), (0, a.bindEvents)(this, this.div, ["dragover", "drop"]);
          for (const z of T(this, x).getEditors(this.pageIndex))
            this.add(z);
          this.updateMode();
        }
        update(o) {
          let { viewport: F } = o;
          T(this, x).commitOrRemove(), this.viewport = F, (0, O.setLayerDimensions)(this.div, { rotation: F.rotation }), this.updateMode();
        }
        get pageDimensions() {
          const { pageWidth: o, pageHeight: F } = this.viewport.rawDims;
          return [o, F];
        }
      };
      let p = C;
      h = new WeakMap(), l = new WeakMap(), c = new WeakMap(), b = new WeakMap(), L = new WeakMap(), m = new WeakMap(), M = new WeakMap(), x = new WeakMap(), I = new WeakSet(), Pe = function(o) {
        var F;
        o.parent !== this && (this.attach(o), (F = o.parent) === null || F === void 0 || F.detach(o), o.setParent(this), o.div && o.isAttachedToDOM && (o.div.remove(), this.div.append(o.div)));
      }, i = new WeakSet(), Je = function(o) {
        switch (T(this, x).getMode()) {
          case e.AnnotationEditorType.FREETEXT:
            return new y.FreeTextEditor(o);
          case e.AnnotationEditorType.INK:
            return new w.InkEditor(o);
        }
        return null;
      }, n = new WeakSet(), ke = function(o) {
        const F = this.getNextId(), z = nt(this, i, Je).call(this, { parent: this, id: F, x: o.offsetX, y: o.offsetY, uiManager: T(this, x) });
        return z && this.add(z), z;
      }, r = new WeakSet(), Re = function() {
        ut(this, M, !0);
        for (const o of T(this, L).values())
          o.isEmpty() && o.remove();
        ut(this, M, !1);
      }, It(p, "_initialized", !1), d.AnnotationEditorLayer = p;
    }, (k, d, t) => {
      var O, p, h, l, c, b, L, m, M, x, Qe, v, Ze, A, tr, s, Me;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.FreeTextEditor = void 0;
      var e = t(1), a = t(141), y = t(140);
      const u = class extends y.AnnotationEditor {
        constructor(o) {
          super({ ...o, name: "freeTextEditor" });
          et(this, x);
          et(this, v);
          et(this, A);
          et(this, s);
          et(this, O, this.editorDivBlur.bind(this));
          et(this, p, this.editorDivFocus.bind(this));
          et(this, h, this.editorDivInput.bind(this));
          et(this, l, this.editorDivKeydown.bind(this));
          et(this, c, void 0);
          et(this, b, "");
          et(this, L, `${this.id}-editor`);
          et(this, m, !1);
          et(this, M, void 0);
          ut(this, c, o.color || u._defaultColor || y.AnnotationEditor._defaultLineColor), ut(this, M, o.fontSize || u._defaultFontSize);
        }
        static initialize(o) {
          this._l10nPromise = new Map(["free_text2_default_content", "editor_free_text2_aria_label"].map((z) => [z, o.get(z)]));
          const F = getComputedStyle(document.documentElement);
          this._internalPadding = parseFloat(F.getPropertyValue("--freetext-padding"));
        }
        static updateDefaultParams(o, F) {
          switch (o) {
            case e.AnnotationEditorParamsType.FREETEXT_SIZE:
              u._defaultFontSize = F;
              break;
            case e.AnnotationEditorParamsType.FREETEXT_COLOR:
              u._defaultColor = F;
          }
        }
        updateParams(o, F) {
          switch (o) {
            case e.AnnotationEditorParamsType.FREETEXT_SIZE:
              nt(this, x, Qe).call(this, F);
              break;
            case e.AnnotationEditorParamsType.FREETEXT_COLOR:
              nt(this, v, Ze).call(this, F);
          }
        }
        static get defaultPropertiesToUpdate() {
          return [[e.AnnotationEditorParamsType.FREETEXT_SIZE, u._defaultFontSize], [e.AnnotationEditorParamsType.FREETEXT_COLOR, u._defaultColor || y.AnnotationEditor._defaultLineColor]];
        }
        get propertiesToUpdate() {
          return [[e.AnnotationEditorParamsType.FREETEXT_SIZE, T(this, M)], [e.AnnotationEditorParamsType.FREETEXT_COLOR, T(this, c)]];
        }
        getInitialTranslation() {
          const o = this.parentScale;
          return [-u._internalPadding * o, -(u._internalPadding + T(this, M)) * o];
        }
        rebuild() {
          super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this));
        }
        enableEditMode() {
          this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(e.AnnotationEditorType.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this.div.draggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", T(this, l)), this.editorDiv.addEventListener("focus", T(this, p)), this.editorDiv.addEventListener("blur", T(this, O)), this.editorDiv.addEventListener("input", T(this, h)));
        }
        disableEditMode() {
          this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", T(this, L)), this.div.draggable = !0, this.editorDiv.removeEventListener("keydown", T(this, l)), this.editorDiv.removeEventListener("focus", T(this, p)), this.editorDiv.removeEventListener("blur", T(this, O)), this.editorDiv.removeEventListener("input", T(this, h)), this.div.focus({ preventScroll: !0 }), this.isEditing = !1, this.parent.div.classList.add("freeTextEditing"));
        }
        focusin(o) {
          super.focusin(o), o.target !== this.editorDiv && this.editorDiv.focus();
        }
        onceAdded() {
          this.width || (this.enableEditMode(), this.editorDiv.focus());
        }
        isEmpty() {
          return !this.editorDiv || this.editorDiv.innerText.trim() === "";
        }
        remove() {
          this.isEditing = !1, this.parent.setEditingState(!0), this.parent.div.classList.add("freeTextEditing"), super.remove();
        }
        commit() {
          this.isInEditMode() && (super.commit(), T(this, m) || (ut(this, m, !0), this.parent.addUndoableEditor(this)), this.disableEditMode(), ut(this, b, nt(this, A, tr).call(this).trimEnd()), nt(this, s, Me).call(this));
        }
        shouldGetKeyboardEvents() {
          return this.isInEditMode();
        }
        dblclick(o) {
          this.enableEditMode(), this.editorDiv.focus();
        }
        keydown(o) {
          o.target === this.div && o.key === "Enter" && (this.enableEditMode(), this.editorDiv.focus());
        }
        editorDivKeydown(o) {
          u._keyboardManager.exec(this, o);
        }
        editorDivFocus(o) {
          this.isEditing = !0;
        }
        editorDivBlur(o) {
          this.isEditing = !1;
        }
        editorDivInput(o) {
          this.parent.div.classList.toggle("freeTextEditing", this.isEmpty());
        }
        disableEditing() {
          this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
        }
        enableEditing() {
          this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
        }
        render() {
          if (this.div)
            return this.div;
          let o, F;
          this.width && (o = this.x, F = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", T(this, L)), this.enableEditing(), u._l10nPromise.get("editor_free_text2_aria_label").then((q) => {
            var J;
            return (J = this.editorDiv) === null || J === void 0 ? void 0 : J.setAttribute("aria-label", q);
          }), u._l10nPromise.get("free_text2_default_content").then((q) => {
            var J;
            return (J = this.editorDiv) === null || J === void 0 ? void 0 : J.setAttribute("default-content", q);
          }), this.editorDiv.contentEditable = !0;
          const { style: z } = this.editorDiv;
          if (z.fontSize = `calc(${T(this, M)}px * var(--scale-factor))`, z.color = T(this, c), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), (0, a.bindEvents)(this, this.div, ["dblclick", "keydown"]), this.width) {
            const [q, J] = this.parentDimensions;
            this.setAt(o * q, F * J, this.width * q, this.height * J);
            for (const $ of T(this, b).split(`
`)) {
              const S = document.createElement("div");
              S.append($ ? document.createTextNode($) : document.createElement("br")), this.editorDiv.append(S);
            }
            this.div.draggable = !0, this.editorDiv.contentEditable = !1;
          } else
            this.div.draggable = !1, this.editorDiv.contentEditable = !0;
          return this.div;
        }
        get contentDiv() {
          return this.editorDiv;
        }
        static deserialize(o, F, z) {
          const q = super.deserialize(o, F, z);
          return ut(q, M, o.fontSize), ut(q, c, e.Util.makeHexColor(...o.color)), ut(q, b, o.value), q;
        }
        serialize() {
          if (this.isEmpty())
            return null;
          const o = u._internalPadding * this.parentScale, F = this.getRect(o, o), z = y.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : T(this, c));
          return { annotationType: e.AnnotationEditorType.FREETEXT, color: z, fontSize: T(this, M), value: T(this, b), pageIndex: this.pageIndex, rect: F, rotation: this.rotation };
        }
      };
      let w = u;
      O = new WeakMap(), p = new WeakMap(), h = new WeakMap(), l = new WeakMap(), c = new WeakMap(), b = new WeakMap(), L = new WeakMap(), m = new WeakMap(), M = new WeakMap(), x = new WeakSet(), Qe = function(o) {
        const F = (q) => {
          this.editorDiv.style.fontSize = `calc(${q}px * var(--scale-factor))`, this.translate(0, -(q - T(this, M)) * this.parentScale), ut(this, M, q), nt(this, s, Me).call(this);
        }, z = T(this, M);
        this.addCommands({ cmd: () => {
          F(o);
        }, undo: () => {
          F(z);
        }, mustExec: !0, type: e.AnnotationEditorParamsType.FREETEXT_SIZE, overwriteIfSameType: !0, keepUndo: !0 });
      }, v = new WeakSet(), Ze = function(o) {
        const F = T(this, c);
        this.addCommands({ cmd: () => {
          ut(this, c, this.editorDiv.style.color = o);
        }, undo: () => {
          ut(this, c, this.editorDiv.style.color = F);
        }, mustExec: !0, type: e.AnnotationEditorParamsType.FREETEXT_COLOR, overwriteIfSameType: !0, keepUndo: !0 });
      }, A = new WeakSet(), tr = function() {
        const o = this.editorDiv.getElementsByTagName("div");
        if (o.length === 0)
          return this.editorDiv.innerText;
        const F = [];
        for (const z of o)
          F.push(z.innerText.replace(/\r\n?|\n/, ""));
        return F.join(`
`);
      }, s = new WeakSet(), Me = function() {
        const [o, F] = this.parentDimensions;
        let z;
        if (this.isAttachedToDOM)
          z = this.div.getBoundingClientRect();
        else {
          const { currentLayer: q, div: J } = this, $ = J.style.display;
          J.style.display = "hidden", q.div.append(this.div), z = J.getBoundingClientRect(), J.remove(), J.style.display = $;
        }
        this.width = z.width / o, this.height = z.height / F;
      }, It(w, "_freeTextDefaultContent", ""), It(w, "_l10nPromise"), It(w, "_internalPadding", 0), It(w, "_defaultColor", null), It(w, "_defaultFontSize", 10), It(w, "_keyboardManager", new a.KeyboardManager([[["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], u.prototype.commitOrRemove]])), It(w, "_type", "freetext"), d.FreeTextEditor = w;
    }, (k, d, t) => {
      var p, h, l, c, b, L, m, M, x, I, v, i, A, n, s, r, u, er, D, rr, F, sr, q, nr, $, Fe, f, ir, g, De, U, ar, G, or, W, lr, K, cr, Z, hr, lt, Kt, R, Oe, B, ge, tt, me, it, ne, ct, Ie, ht, ve, yt, dr, Ct, ur, pt, pr, Mt, fr, at, Le, Et, be, St, ie, Nt, Ne;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.InkEditor = void 0;
      var e = t(1), a = t(140), y = t(141);
      const w = 16, Rt = class extends a.AnnotationEditor {
        constructor(st) {
          super({ ...st, name: "inkEditor" });
          et(this, u);
          et(this, D);
          et(this, F);
          et(this, q);
          et(this, $);
          et(this, f);
          et(this, g);
          et(this, U);
          et(this, G);
          et(this, W);
          et(this, K);
          et(this, Z);
          et(this, lt);
          et(this, R);
          et(this, B);
          et(this, tt);
          et(this, it);
          et(this, ct);
          et(this, ht);
          et(this, Ct);
          et(this, pt);
          et(this, Mt);
          et(this, at);
          et(this, Et);
          et(this, St);
          et(this, Nt);
          et(this, p, 0);
          et(this, h, 0);
          et(this, l, 0);
          et(this, c, this.canvasContextMenu.bind(this));
          et(this, b, this.canvasPointermove.bind(this));
          et(this, L, this.canvasPointerleave.bind(this));
          et(this, m, this.canvasPointerup.bind(this));
          et(this, M, this.canvasPointerdown.bind(this));
          et(this, x, new Path2D());
          et(this, I, !1);
          et(this, v, !1);
          et(this, i, !1);
          et(this, A, null);
          et(this, n, 0);
          et(this, s, 0);
          et(this, r, null);
          this.color = st.color || null, this.thickness = st.thickness || null, this.opacity = st.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0;
        }
        static initialize(st) {
          this._l10nPromise = new Map(["editor_ink_canvas_aria_label", "editor_ink2_aria_label"].map((ot) => [ot, st.get(ot)]));
        }
        static updateDefaultParams(st, ot) {
          switch (st) {
            case e.AnnotationEditorParamsType.INK_THICKNESS:
              Rt._defaultThickness = ot;
              break;
            case e.AnnotationEditorParamsType.INK_COLOR:
              Rt._defaultColor = ot;
              break;
            case e.AnnotationEditorParamsType.INK_OPACITY:
              Rt._defaultOpacity = ot / 100;
          }
        }
        updateParams(st, ot) {
          switch (st) {
            case e.AnnotationEditorParamsType.INK_THICKNESS:
              nt(this, u, er).call(this, ot);
              break;
            case e.AnnotationEditorParamsType.INK_COLOR:
              nt(this, D, rr).call(this, ot);
              break;
            case e.AnnotationEditorParamsType.INK_OPACITY:
              nt(this, F, sr).call(this, ot);
          }
        }
        static get defaultPropertiesToUpdate() {
          return [[e.AnnotationEditorParamsType.INK_THICKNESS, Rt._defaultThickness], [e.AnnotationEditorParamsType.INK_COLOR, Rt._defaultColor || a.AnnotationEditor._defaultLineColor], [e.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * Rt._defaultOpacity)]];
        }
        get propertiesToUpdate() {
          return [[e.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || Rt._defaultThickness], [e.AnnotationEditorParamsType.INK_COLOR, this.color || Rt._defaultColor || a.AnnotationEditor._defaultLineColor], [e.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? Rt._defaultOpacity))]];
        }
        rebuild() {
          super.rebuild(), this.div !== null && (this.canvas || (nt(this, B, ge).call(this), nt(this, tt, me).call(this)), this.isAttachedToDOM || (this.parent.add(this), nt(this, it, ne).call(this)), nt(this, St, ie).call(this));
        }
        remove() {
          this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, T(this, A).disconnect(), ut(this, A, null), super.remove());
        }
        setParent(st) {
          !this.parent && st ? this._uiManager.removeShouldRescale(this) : this.parent && st === null && this._uiManager.addShouldRescale(this), super.setParent(st);
        }
        onScaleChanging() {
          const [st, ot] = this.parentDimensions, ft = this.width * st, gt = this.height * ot;
          this.setDimensions(ft, gt);
        }
        enableEditMode() {
          !T(this, I) && this.canvas !== null && (super.enableEditMode(), this.div.draggable = !1, this.canvas.addEventListener("pointerdown", T(this, M)));
        }
        disableEditMode() {
          this.isInEditMode() && this.canvas !== null && (super.disableEditMode(), this.div.draggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", T(this, M)));
        }
        onceAdded() {
          this.div.draggable = !this.isEmpty();
        }
        isEmpty() {
          return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
        }
        commit() {
          T(this, I) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), ut(this, I, !0), this.div.classList.add("disabled"), nt(this, St, ie).call(this, !0), this.parent.addInkEditorIfNeeded(!0), this.parent.moveEditorInDOM(this), this.div.focus({ preventScroll: !0 }));
        }
        focusin(st) {
          super.focusin(st), this.enableEditMode();
        }
        canvasPointerdown(st) {
          st.button === 0 && this.isInEditMode() && !T(this, I) && (this.setInForeground(), st.preventDefault(), st.type !== "mouse" && this.div.focus(), nt(this, f, ir).call(this, st.offsetX, st.offsetY));
        }
        canvasContextMenu(st) {
          st.preventDefault();
        }
        canvasPointermove(st) {
          st.preventDefault(), nt(this, g, De).call(this, st.offsetX, st.offsetY);
        }
        canvasPointerup(st) {
          st.preventDefault(), nt(this, R, Oe).call(this, st);
        }
        canvasPointerleave(st) {
          nt(this, R, Oe).call(this, st);
        }
        render() {
          if (this.div)
            return this.div;
          let st, ot;
          this.width && (st = this.x, ot = this.y), super.render(), Rt._l10nPromise.get("editor_ink2_aria_label").then((kt) => {
            var Tt;
            return (Tt = this.div) === null || Tt === void 0 ? void 0 : Tt.setAttribute("aria-label", kt);
          });
          const [ft, gt, bt, wt] = nt(this, q, nr).call(this);
          if (this.setAt(ft, gt, 0, 0), this.setDims(bt, wt), nt(this, B, ge).call(this), this.width) {
            const [kt, Tt] = this.parentDimensions;
            this.setAt(st * kt, ot * Tt, this.width * kt, this.height * Tt), ut(this, i, !0), nt(this, it, ne).call(this), this.setDims(this.width * kt, this.height * Tt), nt(this, lt, Kt).call(this), nt(this, Nt, Ne).call(this), this.div.classList.add("disabled");
          } else
            this.div.classList.add("editing"), this.enableEditMode();
          return nt(this, tt, me).call(this), this.div;
        }
        setDimensions(st, ot) {
          const ft = Math.round(st), gt = Math.round(ot);
          if (T(this, n) === ft && T(this, s) === gt)
            return;
          ut(this, n, ft), ut(this, s, gt), this.canvas.style.visibility = "hidden", T(this, p) && Math.abs(T(this, p) - st / ot) > 0.01 && (ot = Math.ceil(st / T(this, p)), this.setDims(st, ot));
          const [bt, wt] = this.parentDimensions;
          this.width = st / bt, this.height = ot / wt, T(this, I) && nt(this, ct, Ie).call(this, st, ot), nt(this, it, ne).call(this), nt(this, lt, Kt).call(this), this.canvas.style.visibility = "visible", this.fixDims();
        }
        static deserialize(st, ot, ft) {
          var Lt, jt;
          const gt = super.deserialize(st, ot, ft);
          gt.thickness = st.thickness, gt.color = e.Util.makeHexColor(...st.color), gt.opacity = st.opacity;
          const [bt, wt] = gt.pageDimensions, kt = gt.width * bt, Tt = gt.height * wt, Ot = gt.parentScale, Dt = st.thickness / 2;
          ut(gt, p, kt / Tt), ut(gt, I, !0), ut(gt, n, Math.round(kt)), ut(gt, s, Math.round(Tt));
          for (const { bezier: Bt } of st.paths) {
            const zt = [];
            gt.paths.push(zt);
            let Wt = Ot * (Bt[0] - Dt), Gt = Ot * (Tt - Bt[1] - Dt);
            for (let Vt = 2, le = Bt.length; Vt < le; Vt += 6) {
              const ce = Ot * (Bt[Vt] - Dt), he = Ot * (Tt - Bt[Vt + 1] - Dt), de = Ot * (Bt[Vt + 2] - Dt), mr = Ot * (Tt - Bt[Vt + 3] - Dt), Ue = Ot * (Bt[Vt + 4] - Dt), qe = Ot * (Tt - Bt[Vt + 5] - Dt);
              zt.push([[Wt, Gt], [ce, he], [de, mr], [Ue, qe]]), Wt = Ue, Gt = qe;
            }
            const ee = nt(this, yt, dr).call(this, zt);
            gt.bezierPath2D.push(ee);
          }
          const qt = nt(Lt = gt, at, Le).call(Lt);
          return ut(gt, l, Math.max(w, qt[2] - qt[0])), ut(gt, h, Math.max(w, qt[3] - qt[1])), nt(jt = gt, ct, Ie).call(jt, kt, Tt), gt;
        }
        serialize() {
          if (this.isEmpty())
            return null;
          const st = this.getRect(0, 0), ot = this.rotation % 180 == 0 ? st[3] - st[1] : st[2] - st[0], ft = a.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
          return { annotationType: e.AnnotationEditorType.INK, color: ft, thickness: this.thickness, opacity: this.opacity, paths: nt(this, Ct, ur).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, ot), pageIndex: this.pageIndex, rect: st, rotation: this.rotation };
        }
      };
      let O = Rt;
      p = new WeakMap(), h = new WeakMap(), l = new WeakMap(), c = new WeakMap(), b = new WeakMap(), L = new WeakMap(), m = new WeakMap(), M = new WeakMap(), x = new WeakMap(), I = new WeakMap(), v = new WeakMap(), i = new WeakMap(), A = new WeakMap(), n = new WeakMap(), s = new WeakMap(), r = new WeakMap(), u = new WeakSet(), er = function(st) {
        const ot = this.thickness;
        this.addCommands({ cmd: () => {
          this.thickness = st, nt(this, St, ie).call(this);
        }, undo: () => {
          this.thickness = ot, nt(this, St, ie).call(this);
        }, mustExec: !0, type: e.AnnotationEditorParamsType.INK_THICKNESS, overwriteIfSameType: !0, keepUndo: !0 });
      }, D = new WeakSet(), rr = function(st) {
        const ot = this.color;
        this.addCommands({ cmd: () => {
          this.color = st, nt(this, lt, Kt).call(this);
        }, undo: () => {
          this.color = ot, nt(this, lt, Kt).call(this);
        }, mustExec: !0, type: e.AnnotationEditorParamsType.INK_COLOR, overwriteIfSameType: !0, keepUndo: !0 });
      }, F = new WeakSet(), sr = function(st) {
        st /= 100;
        const ot = this.opacity;
        this.addCommands({ cmd: () => {
          this.opacity = st, nt(this, lt, Kt).call(this);
        }, undo: () => {
          this.opacity = ot, nt(this, lt, Kt).call(this);
        }, mustExec: !0, type: e.AnnotationEditorParamsType.INK_OPACITY, overwriteIfSameType: !0, keepUndo: !0 });
      }, q = new WeakSet(), nr = function() {
        const { parentRotation: st, parentDimensions: [ot, ft] } = this;
        switch (st) {
          case 90:
            return [0, ft, ft, ot];
          case 180:
            return [ot, ft, ot, ft];
          case 270:
            return [ot, 0, ft, ot];
          default:
            return [0, 0, ot, ft];
        }
      }, $ = new WeakSet(), Fe = function() {
        const { ctx: st, color: ot, opacity: ft, thickness: gt, parentScale: bt, scaleFactor: wt } = this;
        st.lineWidth = gt * bt / wt, st.lineCap = "round", st.lineJoin = "round", st.miterLimit = 10, st.strokeStyle = `${ot}${(0, y.opacityToHex)(ft)}`;
      }, f = new WeakSet(), ir = function(st, ot) {
        this.canvas.addEventListener("contextmenu", T(this, c)), this.canvas.addEventListener("pointerleave", T(this, L)), this.canvas.addEventListener("pointermove", T(this, b)), this.canvas.addEventListener("pointerup", T(this, m)), this.canvas.removeEventListener("pointerdown", T(this, M)), this.isEditing = !0, T(this, i) || (ut(this, i, !0), nt(this, it, ne).call(this), this.thickness || (this.thickness = Rt._defaultThickness), this.color || (this.color = Rt._defaultColor || a.AnnotationEditor._defaultLineColor), this.opacity ?? (this.opacity = Rt._defaultOpacity)), this.currentPath.push([st, ot]), ut(this, v, !1), nt(this, $, Fe).call(this), ut(this, r, () => {
          nt(this, W, lr).call(this), T(this, r) && window.requestAnimationFrame(T(this, r));
        }), window.requestAnimationFrame(T(this, r));
      }, g = new WeakSet(), De = function(st, ot) {
        const [ft, gt] = this.currentPath.at(-1);
        if (this.currentPath.length > 1 && st === ft && ot === gt)
          return;
        const bt = this.currentPath;
        let wt = T(this, x);
        bt.push([st, ot]), ut(this, v, !0), bt.length <= 2 ? (wt.moveTo(...bt[0]), wt.lineTo(st, ot)) : (bt.length === 3 && (ut(this, x, wt = new Path2D()), wt.moveTo(...bt[0])), nt(this, K, cr).call(this, wt, ...bt.at(-3), ...bt.at(-2), st, ot));
      }, U = new WeakSet(), ar = function() {
        if (this.currentPath.length === 0)
          return;
        const st = this.currentPath.at(-1);
        T(this, x).lineTo(...st);
      }, G = new WeakSet(), or = function(st, ot) {
        ut(this, r, null), st = Math.min(Math.max(st, 0), this.canvas.width), ot = Math.min(Math.max(ot, 0), this.canvas.height), nt(this, g, De).call(this, st, ot), nt(this, U, ar).call(this);
        let ft;
        if (this.currentPath.length !== 1)
          ft = nt(this, Z, hr).call(this);
        else {
          const wt = [st, ot];
          ft = [[wt, wt.slice(), wt.slice(), wt]];
        }
        const gt = T(this, x), bt = this.currentPath;
        this.currentPath = [], ut(this, x, new Path2D()), this.addCommands({ cmd: () => {
          this.allRawPaths.push(bt), this.paths.push(ft), this.bezierPath2D.push(gt), this.rebuild();
        }, undo: () => {
          this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (nt(this, B, ge).call(this), nt(this, tt, me).call(this)), nt(this, St, ie).call(this));
        }, mustExec: !0 });
      }, W = new WeakSet(), lr = function() {
        if (!T(this, v))
          return;
        ut(this, v, !1), Math.ceil(this.thickness * this.parentScale);
        const st = this.currentPath.slice(-3), ot = st.map((bt) => bt[0]), ft = st.map((bt) => bt[1]), { ctx: gt } = (Math.min(...ot), Math.max(...ot), Math.min(...ft), Math.max(...ft), this);
        gt.save(), gt.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const bt of this.bezierPath2D)
          gt.stroke(bt);
        gt.stroke(T(this, x)), gt.restore();
      }, K = new WeakSet(), cr = function(st, ot, ft, gt, bt, wt, kt) {
        const Tt = (ot + gt) / 2, Ot = (ft + bt) / 2, Dt = (gt + wt) / 2, qt = (bt + kt) / 2;
        st.bezierCurveTo(Tt + 2 * (gt - Tt) / 3, Ot + 2 * (bt - Ot) / 3, Dt + 2 * (gt - Dt) / 3, qt + 2 * (bt - qt) / 3, Dt, qt);
      }, Z = new WeakSet(), hr = function() {
        const st = this.currentPath;
        if (st.length <= 2)
          return [[st[0], st[0], st.at(-1), st.at(-1)]];
        const ot = [];
        let ft, [gt, bt] = st[0];
        for (ft = 1; ft < st.length - 2; ft++) {
          const [Lt, jt] = st[ft], [Bt, zt] = st[ft + 1], Wt = (Lt + Bt) / 2, Gt = (jt + zt) / 2, ee = [gt + 2 * (Lt - gt) / 3, bt + 2 * (jt - bt) / 3], Vt = [Wt + 2 * (Lt - Wt) / 3, Gt + 2 * (jt - Gt) / 3];
          ot.push([[gt, bt], ee, Vt, [Wt, Gt]]), [gt, bt] = [Wt, Gt];
        }
        const [wt, kt] = st[ft], [Tt, Ot] = st[ft + 1], Dt = [gt + 2 * (wt - gt) / 3, bt + 2 * (kt - bt) / 3], qt = [Tt + 2 * (wt - Tt) / 3, Ot + 2 * (kt - Ot) / 3];
        return ot.push([[gt, bt], Dt, qt, [Tt, Ot]]), ot;
      }, lt = new WeakSet(), Kt = function() {
        if (this.isEmpty()) {
          nt(this, ht, ve).call(this);
          return;
        }
        nt(this, $, Fe).call(this);
        const { canvas: st, ctx: ot } = this;
        ot.setTransform(1, 0, 0, 1, 0, 0), ot.clearRect(0, 0, st.width, st.height), nt(this, ht, ve).call(this);
        for (const ft of this.bezierPath2D)
          ot.stroke(ft);
      }, R = new WeakSet(), Oe = function(st) {
        this.canvas.removeEventListener("pointerleave", T(this, L)), this.canvas.removeEventListener("pointermove", T(this, b)), this.canvas.removeEventListener("pointerup", T(this, m)), this.canvas.addEventListener("pointerdown", T(this, M)), setTimeout(() => {
          this.canvas.removeEventListener("contextmenu", T(this, c));
        }, 10), nt(this, G, or).call(this, st.offsetX, st.offsetY), this.addToAnnotationStorage(), this.setInBackground();
      }, B = new WeakSet(), ge = function() {
        this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", Rt._l10nPromise.get("editor_ink_canvas_aria_label").then((st) => {
          var ot;
          return (ot = this.canvas) === null || ot === void 0 ? void 0 : ot.setAttribute("aria-label", st);
        }), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
      }, tt = new WeakSet(), me = function() {
        ut(this, A, new ResizeObserver((st) => {
          const ot = st[0].contentRect;
          ot.width && ot.height && this.setDimensions(ot.width, ot.height);
        })), T(this, A).observe(this.div);
      }, it = new WeakSet(), ne = function() {
        if (!T(this, i))
          return;
        const [st, ot] = this.parentDimensions;
        this.canvas.width = Math.ceil(this.width * st), this.canvas.height = Math.ceil(this.height * ot), nt(this, ht, ve).call(this);
      }, ct = new WeakSet(), Ie = function(st, ot) {
        const ft = nt(this, Et, be).call(this), gt = (st - ft) / T(this, l), bt = (ot - ft) / T(this, h);
        this.scaleFactor = Math.min(gt, bt);
      }, ht = new WeakSet(), ve = function() {
        const st = nt(this, Et, be).call(this) / 2;
        this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + st, this.translationY * this.scaleFactor + st);
      }, yt = new WeakSet(), dr = function(st) {
        const ot = new Path2D();
        for (let ft = 0, gt = st.length; ft < gt; ft++) {
          const [bt, wt, kt, Tt] = st[ft];
          ft === 0 && ot.moveTo(...bt), ot.bezierCurveTo(wt[0], wt[1], kt[0], kt[1], Tt[0], Tt[1]);
        }
        return ot;
      }, Ct = new WeakSet(), ur = function(st, ot, ft, gt) {
        const bt = [], wt = this.thickness / 2;
        let kt, Tt;
        for (const Ot of this.paths) {
          kt = [], Tt = [];
          for (let Dt = 0, qt = Ot.length; Dt < qt; Dt++) {
            const [Lt, jt, Bt, zt] = Ot[Dt], Wt = st * (Lt[0] + ot) + wt, Gt = gt - st * (Lt[1] + ft) - wt, ee = st * (jt[0] + ot) + wt, Vt = gt - st * (jt[1] + ft) - wt, le = st * (Bt[0] + ot) + wt, ce = gt - st * (Bt[1] + ft) - wt, he = st * (zt[0] + ot) + wt, de = gt - st * (zt[1] + ft) - wt;
            Dt === 0 && (kt.push(Wt, Gt), Tt.push(Wt, Gt)), kt.push(ee, Vt, le, ce, he, de), nt(this, pt, pr).call(this, Wt, Gt, ee, Vt, le, ce, he, de, 4, Tt);
          }
          bt.push({ bezier: kt, points: Tt });
        }
        return bt;
      }, pt = new WeakSet(), pr = function(st, ot, ft, gt, bt, wt, kt, Tt, Ot, Dt) {
        if (nt(this, Mt, fr).call(this, st, ot, ft, gt, bt, wt, kt, Tt))
          Dt.push(kt, Tt);
        else {
          for (let qt = 1; qt < Ot - 1; qt++) {
            const Lt = qt / Ot, jt = 1 - Lt;
            let Bt = Lt * st + jt * ft, zt = Lt * ot + jt * gt, Wt = Lt * ft + jt * bt, Gt = Lt * gt + jt * wt;
            Bt = Lt * Bt + jt * Wt, zt = Lt * zt + jt * Gt, Wt = Lt * Wt + jt * (Lt * bt + jt * kt), Gt = Lt * Gt + jt * (Lt * wt + jt * Tt), Bt = Lt * Bt + jt * Wt, zt = Lt * zt + jt * Gt, Dt.push(Bt, zt);
          }
          Dt.push(kt, Tt);
        }
      }, Mt = new WeakSet(), fr = function(st, ot, ft, gt, bt, wt, kt, Tt) {
        const Ot = (3 * ft - 2 * st - kt) ** 2, Dt = (3 * gt - 2 * ot - Tt) ** 2, qt = (3 * bt - st - 2 * kt) ** 2, Lt = (3 * wt - ot - 2 * Tt) ** 2;
        return Math.max(Ot, qt) + Math.max(Dt, Lt) <= 10;
      }, at = new WeakSet(), Le = function() {
        let st = 1 / 0, ot = -1 / 0, ft = 1 / 0, gt = -1 / 0;
        for (const bt of this.paths)
          for (const [wt, kt, Tt, Ot] of bt) {
            const Dt = e.Util.bezierBoundingBox(...wt, ...kt, ...Tt, ...Ot);
            st = Math.min(st, Dt[0]), ft = Math.min(ft, Dt[1]), ot = Math.max(ot, Dt[2]), gt = Math.max(gt, Dt[3]);
          }
        return [st, ft, ot, gt];
      }, Et = new WeakSet(), be = function() {
        return T(this, I) ? Math.ceil(this.thickness * this.parentScale) : 0;
      }, St = new WeakSet(), ie = function() {
        let st = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        if (this.isEmpty())
          return;
        if (!T(this, I)) {
          nt(this, lt, Kt).call(this);
          return;
        }
        const ot = nt(this, at, Le).call(this), ft = nt(this, Et, be).call(this);
        ut(this, l, Math.max(w, ot[2] - ot[0])), ut(this, h, Math.max(w, ot[3] - ot[1]));
        const gt = Math.ceil(ft + T(this, l) * this.scaleFactor), bt = Math.ceil(ft + T(this, h) * this.scaleFactor), [wt, kt] = this.parentDimensions;
        this.width = gt / wt, this.height = bt / kt, ut(this, p, gt / bt), nt(this, Nt, Ne).call(this);
        const Tt = this.translationX, Ot = this.translationY;
        this.translationX = -ot[0], this.translationY = -ot[1], nt(this, it, ne).call(this), nt(this, lt, Kt).call(this), ut(this, n, gt), ut(this, s, bt), this.setDims(gt, bt);
        const Dt = st ? ft / this.scaleFactor / 2 : 0;
        this.translate(Tt - this.translationX - Dt, Ot - this.translationY - Dt);
      }, Nt = new WeakSet(), Ne = function() {
        const { style: st } = this.div;
        T(this, p) >= 1 ? (st.minHeight = "16px", st.minWidth = `${Math.round(T(this, p) * w)}px`) : (st.minWidth = "16px", st.minHeight = `${Math.round(w / T(this, p))}px`);
      }, et(O, yt), It(O, "_defaultColor", null), It(O, "_defaultOpacity", 1), It(O, "_defaultThickness", 1), It(O, "_l10nPromise"), It(O, "_type", "ink"), d.InkEditor = O;
    }, (k, d, t) => {
      var U, Zt, G, gr, X, je, H, Be;
      Object.defineProperty(d, "__esModule", { value: !0 }), d.AnnotationLayer = void 0;
      var e = t(1), a = t(142), y = t(139), w = t(166), O = t(167);
      const p = 1e3, h = /* @__PURE__ */ new WeakSet();
      function l(lt) {
        return { width: lt[2] - lt[0], height: lt[3] - lt[1] };
      }
      class c {
        static create(E) {
          switch (E.data.annotationType) {
            case e.AnnotationType.LINK:
              return new L(E);
            case e.AnnotationType.TEXT:
              return new m(E);
            case e.AnnotationType.WIDGET:
              switch (E.data.fieldType) {
                case "Tx":
                  return new x(E);
                case "Btn":
                  return E.data.radioButton ? new v(E) : E.data.checkBox ? new I(E) : new i(E);
                case "Ch":
                  return new A(E);
              }
              return new M(E);
            case e.AnnotationType.POPUP:
              return new n(E);
            case e.AnnotationType.FREETEXT:
              return new r(E);
            case e.AnnotationType.LINE:
              return new u(E);
            case e.AnnotationType.SQUARE:
              return new C(E);
            case e.AnnotationType.CIRCLE:
              return new D(E);
            case e.AnnotationType.POLYLINE:
              return new o(E);
            case e.AnnotationType.CARET:
              return new z(E);
            case e.AnnotationType.INK:
              return new q(E);
            case e.AnnotationType.POLYGON:
              return new F(E);
            case e.AnnotationType.HIGHLIGHT:
              return new J(E);
            case e.AnnotationType.UNDERLINE:
              return new $(E);
            case e.AnnotationType.SQUIGGLY:
              return new S(E);
            case e.AnnotationType.STRIKEOUT:
              return new f(E);
            case e.AnnotationType.STAMP:
              return new P(E);
            case e.AnnotationType.FILEATTACHMENT:
              return new g(E);
            default:
              return new b(E);
          }
        }
      }
      class b {
        constructor(E) {
          let { isRenderable: R = !1, ignoreBorder: j = !1, createQuadrilaterals: B = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.isRenderable = R, this.data = E.data, this.layer = E.layer, this.page = E.page, this.viewport = E.viewport, this.linkService = E.linkService, this.downloadManager = E.downloadManager, this.imageResourcesPath = E.imageResourcesPath, this.renderForms = E.renderForms, this.svgFactory = E.svgFactory, this.annotationStorage = E.annotationStorage, this.enableScripting = E.enableScripting, this.hasJSActions = E.hasJSActions, this._fieldObjects = E.fieldObjects, R && (this.container = this._createContainer(j)), B && (this.quadrilaterals = this._createQuadrilaterals(j));
        }
        _createContainer() {
          let E = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          const { data: R, page: j, viewport: B } = this, Y = document.createElement("section");
          Y.setAttribute("data-annotation-id", R.id), R.noRotate && Y.classList.add("norotate");
          const { pageWidth: tt, pageHeight: rt, pageX: it, pageY: At } = B.rawDims, { width: ct, height: vt } = l(R.rect), ht = e.Util.normalizeRect([R.rect[0], j.view[3] - R.rect[1] + j.view[1], R.rect[2], j.view[3] - R.rect[3] + j.view[1]]);
          if (!E && R.borderStyle.width > 0) {
            Y.style.borderWidth = `${R.borderStyle.width}px`;
            const yt = R.borderStyle.horizontalCornerRadius, _t = R.borderStyle.verticalCornerRadius;
            if (yt > 0 || _t > 0) {
              const Q = `calc(${yt}px * var(--scale-factor)) / calc(${_t}px * var(--scale-factor))`;
              Y.style.borderRadius = Q;
            } else if (this instanceof v) {
              const Q = `calc(${ct}px * var(--scale-factor)) / calc(${vt}px * var(--scale-factor))`;
              Y.style.borderRadius = Q;
            }
            switch (R.borderStyle.style) {
              case e.AnnotationBorderStyleType.SOLID:
                Y.style.borderStyle = "solid";
                break;
              case e.AnnotationBorderStyleType.DASHED:
                Y.style.borderStyle = "dashed";
                break;
              case e.AnnotationBorderStyleType.BEVELED:
                (0, e.warn)("Unimplemented border style: beveled");
                break;
              case e.AnnotationBorderStyleType.INSET:
                (0, e.warn)("Unimplemented border style: inset");
                break;
              case e.AnnotationBorderStyleType.UNDERLINE:
                Y.style.borderBottomStyle = "solid";
            }
            const Ct = R.borderColor || null;
            Ct ? Y.style.borderColor = e.Util.makeHexColor(0 | Ct[0], 0 | Ct[1], 0 | Ct[2]) : Y.style.borderWidth = 0;
          }
          Y.style.left = 100 * (ht[0] - it) / tt + "%", Y.style.top = 100 * (ht[1] - At) / rt + "%";
          const { rotation: mt } = R;
          return R.hasOwnCanvas || mt === 0 ? (Y.style.width = 100 * ct / tt + "%", Y.style.height = 100 * vt / rt + "%") : this.setRotation(mt, Y), Y;
        }
        setRotation(E) {
          let R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.container;
          const { pageWidth: j, pageHeight: B } = this.viewport.rawDims, { width: Y, height: tt } = l(this.data.rect);
          let rt, it;
          E % 180 == 0 ? (rt = 100 * Y / j, it = 100 * tt / B) : (rt = 100 * tt / j, it = 100 * Y / B), R.style.width = `${rt}%`, R.style.height = `${it}%`, R.setAttribute("data-main-rotation", (360 - E) % 360);
        }
        get _commonActions() {
          const E = (R, j, B) => {
            const Y = B.detail[R];
            B.target.style[j] = w.ColorConverters[`${Y[0]}_HTML`](Y.slice(1));
          };
          return (0, e.shadow)(this, "_commonActions", { display: (R) => {
            const j = R.detail.display % 2 == 1;
            this.container.style.visibility = j ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { hidden: j, print: R.detail.display === 0 || R.detail.display === 3 });
          }, print: (R) => {
            this.annotationStorage.setValue(this.data.id, { print: R.detail.print });
          }, hidden: (R) => {
            this.container.style.visibility = R.detail.hidden ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { hidden: R.detail.hidden });
          }, focus: (R) => {
            setTimeout(() => R.target.focus({ preventScroll: !1 }), 0);
          }, userName: (R) => {
            R.target.title = R.detail.userName;
          }, readonly: (R) => {
            R.detail.readonly ? R.target.setAttribute("readonly", "") : R.target.removeAttribute("readonly");
          }, required: (R) => {
            this._setRequired(R.target, R.detail.required);
          }, bgColor: (R) => {
            E("bgColor", "backgroundColor", R);
          }, fillColor: (R) => {
            E("fillColor", "backgroundColor", R);
          }, fgColor: (R) => {
            E("fgColor", "color", R);
          }, textColor: (R) => {
            E("textColor", "color", R);
          }, borderColor: (R) => {
            E("borderColor", "borderColor", R);
          }, strokeColor: (R) => {
            E("strokeColor", "borderColor", R);
          }, rotation: (R) => {
            const j = R.detail.rotation;
            this.setRotation(j), this.annotationStorage.setValue(this.data.id, { rotation: j });
          } });
        }
        _dispatchEventFromSandbox(E, R) {
          const j = this._commonActions;
          for (const B of Object.keys(R.detail)) {
            const Y = E[B] || j[B];
            Y == null || Y(R);
          }
        }
        _setDefaultPropertiesFromJS(E) {
          if (!this.enableScripting)
            return;
          const R = this.annotationStorage.getRawValue(this.data.id);
          if (!R)
            return;
          const j = this._commonActions;
          for (const [B, Y] of Object.entries(R)) {
            const tt = j[B];
            tt && (tt({ detail: { [B]: Y }, target: E }), delete R[B]);
          }
        }
        _createQuadrilaterals() {
          let E = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          if (!this.data.quadPoints)
            return null;
          const R = [], j = this.data.rect;
          for (const B of this.data.quadPoints)
            this.data.rect = [B[2].x, B[2].y, B[1].x, B[1].y], R.push(this._createContainer(E));
          return this.data.rect = j, R;
        }
        _createPopup(E, R) {
          let j = this.container;
          this.quadrilaterals && (E || (E = this.quadrilaterals), j = this.quadrilaterals[0]), E || ((E = document.createElement("div")).classList.add("popupTriggerArea"), j.append(E));
          const B = new s({ container: j, trigger: E, color: R.color, titleObj: R.titleObj, modificationDate: R.modificationDate, contentsObj: R.contentsObj, richText: R.richText, hideWrapper: !0 }).render();
          B.style.left = "100%", j.append(B);
        }
        _renderQuadrilaterals(E) {
          for (const R of this.quadrilaterals)
            R.classList.add(E);
          return this.quadrilaterals;
        }
        render() {
          (0, e.unreachable)("Abstract method `AnnotationElement.render` called");
        }
        _getElementsByName(E) {
          let R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          const j = [];
          if (this._fieldObjects) {
            const B = this._fieldObjects[E];
            if (B)
              for (const { page: Y, id: tt, exportValues: rt } of B) {
                if (Y === -1 || tt === R)
                  continue;
                const it = typeof rt == "string" ? rt : null, At = document.querySelector(`[data-element-id="${tt}"]`);
                !At || h.has(At) ? j.push({ id: tt, exportValue: it, domElement: At }) : (0, e.warn)(`_getElementsByName - element not allowed: ${tt}`);
              }
            return j;
          }
          for (const B of document.getElementsByName(E)) {
            const { exportValue: Y } = B, tt = B.getAttribute("data-element-id");
            tt !== R && h.has(B) && j.push({ id: tt, exportValue: Y, domElement: B });
          }
          return j;
        }
      }
      class L extends b {
        constructor(R) {
          let j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          super(R, { isRenderable: !0, ignoreBorder: !(j == null || !j.ignoreBorder), createQuadrilaterals: !0 });
          et(this, U);
          et(this, G);
          this.isTooltipOnly = R.data.isTooltipOnly;
        }
        render() {
          const { data: R, linkService: j } = this, B = document.createElement("a");
          B.setAttribute("data-element-id", R.id);
          let Y = !1;
          return R.url ? (j.addLinkAttributes(B, R.url, R.newWindow), Y = !0) : R.action ? (this._bindNamedAction(B, R.action), Y = !0) : R.attachment ? (this._bindAttachment(B, R.attachment), Y = !0) : R.setOCGState ? (nt(this, G, gr).call(this, B, R.setOCGState), Y = !0) : R.dest ? (this._bindLink(B, R.dest), Y = !0) : (R.actions && (R.actions.Action || R.actions["Mouse Up"] || R.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(B, R), Y = !0), R.resetForm ? (this._bindResetFormAction(B, R.resetForm), Y = !0) : this.isTooltipOnly && !Y && (this._bindLink(B, ""), Y = !0)), this.quadrilaterals ? this._renderQuadrilaterals("linkAnnotation").map((tt, rt) => {
            const it = rt === 0 ? B : B.cloneNode();
            return tt.append(it), tt;
          }) : (this.container.classList.add("linkAnnotation"), Y && this.container.append(B), this.container);
        }
        _bindLink(R, j) {
          R.href = this.linkService.getDestinationHash(j), R.onclick = () => (j && this.linkService.goToDestination(j), !1), (j || j === "") && nt(this, U, Zt).call(this);
        }
        _bindNamedAction(R, j) {
          R.href = this.linkService.getAnchorUrl(""), R.onclick = () => (this.linkService.executeNamedAction(j), !1), nt(this, U, Zt).call(this);
        }
        _bindAttachment(R, j) {
          R.href = this.linkService.getAnchorUrl(""), R.onclick = () => {
            var B;
            return (B = this.downloadManager) === null || B === void 0 || B.openOrDownloadData(this.container, j.content, j.filename), !1;
          }, nt(this, U, Zt).call(this);
        }
        _bindJSAction(R, j) {
          R.href = this.linkService.getAnchorUrl("");
          const B = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
          for (const Y of Object.keys(j.actions)) {
            const tt = B.get(Y);
            tt && (R[tt] = () => {
              var rt;
              return (rt = this.linkService.eventBus) === null || rt === void 0 || rt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: j.id, name: Y } }), !1;
            });
          }
          R.onclick || (R.onclick = () => !1), nt(this, U, Zt).call(this);
        }
        _bindResetFormAction(R, j) {
          const B = R.onclick;
          B || (R.href = this.linkService.getAnchorUrl("")), nt(this, U, Zt).call(this), this._fieldObjects ? R.onclick = () => {
            B == null || B();
            const { fields: Y, refs: tt, include: rt } = j, it = [];
            if (Y.length !== 0 || tt.length !== 0) {
              const ht = new Set(tt);
              for (const mt of Y) {
                const yt = this._fieldObjects[mt] || [];
                for (const { id: _t } of yt)
                  ht.add(_t);
              }
              for (const mt of Object.values(this._fieldObjects))
                for (const yt of mt)
                  ht.has(yt.id) === rt && it.push(yt);
            } else
              for (const ht of Object.values(this._fieldObjects))
                it.push(...ht);
            const At = this.annotationStorage, ct = [];
            for (const ht of it) {
              const { id: mt } = ht;
              switch (ct.push(mt), ht.type) {
                case "text": {
                  const _t = ht.defaultValue || "";
                  At.setValue(mt, { value: _t });
                  break;
                }
                case "checkbox":
                case "radiobutton": {
                  const _t = ht.defaultValue === ht.exportValues;
                  At.setValue(mt, { value: _t });
                  break;
                }
                case "combobox":
                case "listbox": {
                  const _t = ht.defaultValue || "";
                  At.setValue(mt, { value: _t });
                  break;
                }
                default:
                  continue;
              }
              const yt = document.querySelector(`[data-element-id="${mt}"]`);
              yt && (h.has(yt) ? yt.dispatchEvent(new Event("resetform")) : (0, e.warn)(`_bindResetFormAction - element not allowed: ${mt}`));
            }
            if (this.enableScripting) {
              var vt;
              (vt = this.linkService.eventBus) === null || vt === void 0 || vt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: ct, name: "ResetForm" } });
            }
            return !1;
          } : ((0, e.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), B || (R.onclick = () => !1));
        }
      }
      U = new WeakSet(), Zt = function() {
        this.container.setAttribute("data-internal-link", "");
      }, G = new WeakSet(), gr = function(R, j) {
        R.href = this.linkService.getAnchorUrl(""), R.onclick = () => (this.linkService.executeSetOCGState(j), !1), nt(this, U, Zt).call(this);
      };
      class m extends b {
        constructor(E) {
          var R, j, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (R = E.data.titleObj) !== null && R !== void 0 && R.str || (j = E.data.contentsObj) !== null && j !== void 0 && j.str || (B = E.data.richText) !== null && B !== void 0 && B.str) });
        }
        render() {
          this.container.classList.add("textAnnotation");
          const E = document.createElement("img");
          return E.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", E.alt = "[{{type}} Annotation]", E.dataset.l10nId = "text_annotation_type", E.dataset.l10nArgs = JSON.stringify({ type: this.data.name }), this.data.hasPopup || this._createPopup(E, this.data), this.container.append(E), this.container;
        }
      }
      class M extends b {
        render() {
          return this.data.alternativeText && (this.container.title = this.data.alternativeText), this.container;
        }
        showElementAndHideCanvas(E) {
          if (this.data.hasOwnCanvas) {
            var R;
            ((R = E.previousSibling) === null || R === void 0 ? void 0 : R.nodeName) === "CANVAS" && (E.previousSibling.hidden = !0), E.hidden = !1;
          }
        }
        _getKeyModifier(E) {
          const { isWin: R, isMac: j } = e.FeatureTest.platform;
          return R && E.ctrlKey || j && E.metaKey;
        }
        _setEventListener(E, R, j, B) {
          R.includes("mouse") ? E.addEventListener(R, (Y) => {
            var tt;
            (tt = this.linkService.eventBus) === null || tt === void 0 || tt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: j, value: B(Y), shift: Y.shiftKey, modifier: this._getKeyModifier(Y) } });
          }) : E.addEventListener(R, (Y) => {
            var tt;
            (tt = this.linkService.eventBus) === null || tt === void 0 || tt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: j, value: B(Y) } });
          });
        }
        _setEventListeners(E, R, j) {
          for (const [Y, tt] of R) {
            var B;
            (tt === "Action" || (B = this.data.actions) !== null && B !== void 0 && B[tt]) && this._setEventListener(E, Y, tt, j);
          }
        }
        _setBackgroundColor(E) {
          const R = this.data.backgroundColor || null;
          E.style.backgroundColor = R === null ? "transparent" : e.Util.makeHexColor(R[0], R[1], R[2]);
        }
        _setTextStyle(E) {
          const R = ["left", "center", "right"], { fontColor: j } = this.data.defaultAppearanceData, B = this.data.defaultAppearanceData.fontSize || 9, Y = E.style;
          let tt;
          const rt = (it) => Math.round(10 * it) / 10;
          if (this.data.multiLine) {
            const it = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), At = it / (Math.round(it / (e.LINE_FACTOR * B)) || 1);
            tt = Math.min(B, rt(At / e.LINE_FACTOR));
          } else {
            const it = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
            tt = Math.min(B, rt(it / e.LINE_FACTOR));
          }
          Y.fontSize = `calc(${tt}px * var(--scale-factor))`, Y.color = e.Util.makeHexColor(j[0], j[1], j[2]), this.data.textAlignment !== null && (Y.textAlign = R[this.data.textAlignment]);
        }
        _setRequired(E, R) {
          R ? E.setAttribute("required", !0) : E.removeAttribute("required"), E.setAttribute("aria-required", R);
        }
      }
      class x extends M {
        constructor(E) {
          super(E, { isRenderable: E.renderForms || !E.data.hasAppearance && !!E.data.fieldValue });
        }
        setPropertyOnSiblings(E, R, j, B) {
          const Y = this.annotationStorage;
          for (const tt of this._getElementsByName(E.name, E.id))
            tt.domElement && (tt.domElement[R] = j), Y.setValue(tt.id, { [B]: j });
        }
        render() {
          const E = this.annotationStorage, R = this.data.id;
          this.container.classList.add("textWidgetAnnotation");
          let j = null;
          if (this.renderForms) {
            var B;
            const tt = E.getValue(R, { value: this.data.fieldValue });
            let rt = tt.value || "";
            const it = E.getValue(R, { charLimit: this.data.maxLen }).charLimit;
            it && rt.length > it && (rt = rt.slice(0, it));
            let At = tt.formattedValue || ((B = this.data.textContent) === null || B === void 0 ? void 0 : B.join(`
`)) || null;
            At && this.data.comb && (At = At.replaceAll(/\s+/g, ""));
            const ct = { userValue: rt, formattedValue: At, lastCommittedValue: null, commitKey: 1 };
            this.data.multiLine ? (j = document.createElement("textarea"), j.textContent = At ?? rt, this.data.doNotScroll && (j.style.overflowY = "hidden")) : (j = document.createElement("input"), j.type = "text", j.setAttribute("value", At ?? rt), this.data.doNotScroll && (j.style.overflowX = "hidden")), this.data.hasOwnCanvas && (j.hidden = !0), h.add(j), j.setAttribute("data-element-id", R), j.disabled = this.data.readOnly, j.name = this.data.fieldName, j.tabIndex = p, this._setRequired(j, this.data.required), it && (j.maxLength = it), j.addEventListener("input", (ht) => {
              E.setValue(R, { value: ht.target.value }), this.setPropertyOnSiblings(j, "value", ht.target.value, "value"), ct.formattedValue = null;
            }), j.addEventListener("resetform", (ht) => {
              const mt = this.data.defaultFieldValue ?? "";
              j.value = ct.userValue = mt, ct.formattedValue = null;
            });
            let vt = (ht) => {
              const { formattedValue: mt } = ct;
              mt != null && (ht.target.value = mt), ht.target.scrollLeft = 0;
            };
            if (this.enableScripting && this.hasJSActions) {
              var Y;
              j.addEventListener("focus", (mt) => {
                const { target: yt } = mt;
                ct.userValue && (yt.value = ct.userValue), ct.lastCommittedValue = yt.value, ct.commitKey = 1;
              }), j.addEventListener("updatefromsandbox", (mt) => {
                this.showElementAndHideCanvas(mt.target);
                const yt = { value(_t) {
                  ct.userValue = _t.detail.value ?? "", E.setValue(R, { value: ct.userValue.toString() }), _t.target.value = ct.userValue;
                }, formattedValue(_t) {
                  const { formattedValue: Ct } = _t.detail;
                  ct.formattedValue = Ct, Ct != null && _t.target !== document.activeElement && (_t.target.value = Ct), E.setValue(R, { formattedValue: Ct });
                }, selRange(_t) {
                  _t.target.setSelectionRange(..._t.detail.selRange);
                }, charLimit: (_t) => {
                  var Ct;
                  const { charLimit: Q } = _t.detail, { target: pt } = _t;
                  if (Q === 0) {
                    pt.removeAttribute("maxLength");
                    return;
                  }
                  pt.setAttribute("maxLength", Q);
                  let xt = ct.userValue;
                  xt && !(xt.length <= Q) && (xt = xt.slice(0, Q), pt.value = ct.userValue = xt, E.setValue(R, { value: xt }), (Ct = this.linkService.eventBus) === null || Ct === void 0 || Ct.dispatch("dispatcheventinsandbox", { source: this, detail: { id: R, name: "Keystroke", value: xt, willCommit: !0, commitKey: 1, selStart: pt.selectionStart, selEnd: pt.selectionEnd } }));
                } };
                this._dispatchEventFromSandbox(yt, mt);
              }), j.addEventListener("keydown", (mt) => {
                var yt;
                ct.commitKey = 1;
                let _t = -1;
                if (mt.key === "Escape" ? _t = 0 : mt.key !== "Enter" || this.data.multiLine ? mt.key === "Tab" && (ct.commitKey = 3) : _t = 2, _t === -1)
                  return;
                const { value: Ct } = mt.target;
                ct.lastCommittedValue !== Ct && (ct.lastCommittedValue = Ct, ct.userValue = Ct, (yt = this.linkService.eventBus) === null || yt === void 0 || yt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: R, name: "Keystroke", value: Ct, willCommit: !0, commitKey: _t, selStart: mt.target.selectionStart, selEnd: mt.target.selectionEnd } }));
              });
              const ht = vt;
              vt = null, j.addEventListener("blur", (mt) => {
                if (!mt.relatedTarget)
                  return;
                const { value: yt } = mt.target;
                if (ct.userValue = yt, ct.lastCommittedValue !== yt) {
                  var _t;
                  (_t = this.linkService.eventBus) === null || _t === void 0 || _t.dispatch("dispatcheventinsandbox", { source: this, detail: { id: R, name: "Keystroke", value: yt, willCommit: !0, commitKey: ct.commitKey, selStart: mt.target.selectionStart, selEnd: mt.target.selectionEnd } });
                }
                ht(mt);
              }), (Y = this.data.actions) !== null && Y !== void 0 && Y.Keystroke && j.addEventListener("beforeinput", (mt) => {
                var yt;
                ct.lastCommittedValue = null;
                const { data: _t, target: Ct } = mt, { value: Q, selectionStart: pt, selectionEnd: xt } = Ct;
                let Mt = pt, Ft = xt;
                switch (mt.inputType) {
                  case "deleteWordBackward": {
                    const at = Q.substring(0, pt).match(/\w*[^\w]*$/);
                    at && (Mt -= at[0].length);
                    break;
                  }
                  case "deleteWordForward": {
                    const at = Q.substring(pt).match(/^[^\w]*\w*/);
                    at && (Ft += at[0].length);
                    break;
                  }
                  case "deleteContentBackward":
                    pt === xt && (Mt -= 1);
                    break;
                  case "deleteContentForward":
                    pt === xt && (Ft += 1);
                }
                mt.preventDefault(), (yt = this.linkService.eventBus) === null || yt === void 0 || yt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: R, name: "Keystroke", value: Q, change: _t || "", willCommit: !1, selStart: Mt, selEnd: Ft } });
              }), this._setEventListeners(j, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (mt) => mt.target.value);
            }
            if (vt && j.addEventListener("blur", vt), this.data.comb) {
              const ht = (this.data.rect[2] - this.data.rect[0]) / it;
              j.classList.add("comb"), j.style.letterSpacing = `calc(${ht}px * var(--scale-factor) - 1ch)`;
            }
          } else
            j = document.createElement("div"), j.textContent = this.data.fieldValue, j.style.verticalAlign = "middle", j.style.display = "table-cell";
          return this._setTextStyle(j), this._setBackgroundColor(j), this._setDefaultPropertiesFromJS(j), this.container.append(j), this.container;
        }
      }
      class I extends M {
        constructor(E) {
          super(E, { isRenderable: E.renderForms });
        }
        render() {
          const E = this.annotationStorage, R = this.data, j = R.id;
          let B = E.getValue(j, { value: R.exportValue === R.fieldValue }).value;
          typeof B == "string" && (B = B !== "Off", E.setValue(j, { value: B })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
          const Y = document.createElement("input");
          return h.add(Y), Y.setAttribute("data-element-id", j), Y.disabled = R.readOnly, this._setRequired(Y, this.data.required), Y.type = "checkbox", Y.name = R.fieldName, B && Y.setAttribute("checked", !0), Y.setAttribute("exportValue", R.exportValue), Y.tabIndex = p, Y.addEventListener("change", (tt) => {
            const { name: rt, checked: it } = tt.target;
            for (const At of this._getElementsByName(rt, j)) {
              const ct = it && At.exportValue === R.exportValue;
              At.domElement && (At.domElement.checked = ct), E.setValue(At.id, { value: ct });
            }
            E.setValue(j, { value: it });
          }), Y.addEventListener("resetform", (tt) => {
            const rt = R.defaultFieldValue || "Off";
            tt.target.checked = rt === R.exportValue;
          }), this.enableScripting && this.hasJSActions && (Y.addEventListener("updatefromsandbox", (tt) => {
            const rt = { value(it) {
              it.target.checked = it.detail.value !== "Off", E.setValue(j, { value: it.target.checked });
            } };
            this._dispatchEventFromSandbox(rt, tt);
          }), this._setEventListeners(Y, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (tt) => tt.target.checked)), this._setBackgroundColor(Y), this._setDefaultPropertiesFromJS(Y), this.container.append(Y), this.container;
        }
      }
      class v extends M {
        constructor(E) {
          super(E, { isRenderable: E.renderForms });
        }
        render() {
          this.container.classList.add("buttonWidgetAnnotation", "radioButton");
          const E = this.annotationStorage, R = this.data, j = R.id;
          let B = E.getValue(j, { value: R.fieldValue === R.buttonValue }).value;
          typeof B == "string" && (B = B !== R.buttonValue, E.setValue(j, { value: B }));
          const Y = document.createElement("input");
          if (h.add(Y), Y.setAttribute("data-element-id", j), Y.disabled = R.readOnly, this._setRequired(Y, this.data.required), Y.type = "radio", Y.name = R.fieldName, B && Y.setAttribute("checked", !0), Y.tabIndex = p, Y.addEventListener("change", (tt) => {
            const { name: rt, checked: it } = tt.target;
            for (const At of this._getElementsByName(rt, j))
              E.setValue(At.id, { value: !1 });
            E.setValue(j, { value: it });
          }), Y.addEventListener("resetform", (tt) => {
            const rt = R.defaultFieldValue;
            tt.target.checked = rt != null && rt === R.buttonValue;
          }), this.enableScripting && this.hasJSActions) {
            const tt = R.buttonValue;
            Y.addEventListener("updatefromsandbox", (rt) => {
              const it = { value: (At) => {
                const ct = tt === At.detail.value;
                for (const vt of this._getElementsByName(At.target.name)) {
                  const ht = ct && vt.id === j;
                  vt.domElement && (vt.domElement.checked = ht), E.setValue(vt.id, { value: ht });
                }
              } };
              this._dispatchEventFromSandbox(it, rt);
            }), this._setEventListeners(Y, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (rt) => rt.target.checked);
          }
          return this._setBackgroundColor(Y), this._setDefaultPropertiesFromJS(Y), this.container.append(Y), this.container;
        }
      }
      class i extends L {
        constructor(E) {
          super(E, { ignoreBorder: E.data.hasAppearance });
        }
        render() {
          const E = super.render();
          E.classList.add("buttonWidgetAnnotation", "pushButton"), this.data.alternativeText && (E.title = this.data.alternativeText);
          const R = E.lastChild;
          return this.enableScripting && this.hasJSActions && R && (this._setDefaultPropertiesFromJS(R), R.addEventListener("updatefromsandbox", (j) => {
            this._dispatchEventFromSandbox({}, j);
          })), E;
        }
      }
      class A extends M {
        constructor(E) {
          super(E, { isRenderable: E.renderForms });
        }
        render() {
          this.container.classList.add("choiceWidgetAnnotation");
          const E = this.annotationStorage, R = this.data.id, j = E.getValue(R, { value: this.data.fieldValue }), B = document.createElement("select");
          h.add(B), B.setAttribute("data-element-id", R), B.disabled = this.data.readOnly, this._setRequired(B, this.data.required), B.name = this.data.fieldName, B.tabIndex = p;
          let Y = this.data.combo && this.data.options.length > 0;
          this.data.combo || (B.size = this.data.options.length, this.data.multiSelect && (B.multiple = !0)), B.addEventListener("resetform", (ct) => {
            const vt = this.data.defaultFieldValue;
            for (const ht of B.options)
              ht.selected = ht.value === vt;
          });
          for (const ct of this.data.options) {
            const vt = document.createElement("option");
            vt.textContent = ct.displayValue, vt.value = ct.exportValue, j.value.includes(ct.exportValue) && (vt.setAttribute("selected", !0), Y = !1), B.append(vt);
          }
          let tt = null;
          if (Y) {
            const ct = document.createElement("option");
            ct.value = " ", ct.setAttribute("hidden", !0), ct.setAttribute("selected", !0), B.prepend(ct), tt = () => {
              ct.remove(), B.removeEventListener("input", tt), tt = null;
            }, B.addEventListener("input", tt);
          }
          const rt = (ct) => {
            const vt = ct ? "value" : "textContent", { options: ht, multiple: mt } = B;
            return mt ? Array.prototype.filter.call(ht, (yt) => yt.selected).map((yt) => yt[vt]) : ht.selectedIndex === -1 ? null : ht[ht.selectedIndex][vt];
          };
          let it = rt(!1);
          const At = (ct) => {
            const vt = ct.target.options;
            return Array.prototype.map.call(vt, (ht) => ({ displayValue: ht.textContent, exportValue: ht.value }));
          };
          return this.enableScripting && this.hasJSActions ? (B.addEventListener("updatefromsandbox", (ct) => {
            const vt = { value(ht) {
              var mt;
              (mt = tt) === null || mt === void 0 || mt();
              const yt = ht.detail.value, _t = new Set(Array.isArray(yt) ? yt : [yt]);
              for (const Ct of B.options)
                Ct.selected = _t.has(Ct.value);
              E.setValue(R, { value: rt(!0) }), it = rt(!1);
            }, multipleSelection(ht) {
              B.multiple = !0;
            }, remove(ht) {
              const mt = B.options, yt = ht.detail.remove;
              mt[yt].selected = !1, B.remove(yt), mt.length > 0 && Array.prototype.findIndex.call(mt, (_t) => _t.selected) === -1 && (mt[0].selected = !0), E.setValue(R, { value: rt(!0), items: At(ht) }), it = rt(!1);
            }, clear(ht) {
              for (; B.length !== 0; )
                B.remove(0);
              E.setValue(R, { value: null, items: [] }), it = rt(!1);
            }, insert(ht) {
              const { index: mt, displayValue: yt, exportValue: _t } = ht.detail.insert, Ct = B.children[mt], Q = document.createElement("option");
              Q.textContent = yt, Q.value = _t, Ct ? Ct.before(Q) : B.append(Q), E.setValue(R, { value: rt(!0), items: At(ht) }), it = rt(!1);
            }, items(ht) {
              const { items: mt } = ht.detail;
              for (; B.length !== 0; )
                B.remove(0);
              for (const yt of mt) {
                const { displayValue: _t, exportValue: Ct } = yt, Q = document.createElement("option");
                Q.textContent = _t, Q.value = Ct, B.append(Q);
              }
              B.options.length > 0 && (B.options[0].selected = !0), E.setValue(R, { value: rt(!0), items: At(ht) }), it = rt(!1);
            }, indices(ht) {
              const mt = new Set(ht.detail.indices);
              for (const yt of ht.target.options)
                yt.selected = mt.has(yt.index);
              E.setValue(R, { value: rt(!0) }), it = rt(!1);
            }, editable(ht) {
              ht.target.disabled = !ht.detail.editable;
            } };
            this._dispatchEventFromSandbox(vt, ct);
          }), B.addEventListener("input", (ct) => {
            var vt;
            const ht = rt(!0);
            E.setValue(R, { value: ht }), ct.preventDefault(), (vt = this.linkService.eventBus) === null || vt === void 0 || vt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: R, name: "Keystroke", value: it, changeEx: ht, willCommit: !1, commitKey: 1, keyDown: !1 } });
          }), this._setEventListeners(B, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (ct) => ct.target.value)) : B.addEventListener("input", function(ct) {
            E.setValue(R, { value: rt(!0) });
          }), this.data.combo && this._setTextStyle(B), this._setBackgroundColor(B), this._setDefaultPropertiesFromJS(B), this.container.append(B), this.container;
        }
      }
      const W = class extends b {
        constructor(E) {
          var R, j, B;
          const { data: Y } = E;
          super(E, { isRenderable: !W.IGNORE_TYPES.has(Y.parentType) && !!((R = Y.titleObj) !== null && R !== void 0 && R.str || (j = Y.contentsObj) !== null && j !== void 0 && j.str || (B = Y.richText) !== null && B !== void 0 && B.str) });
        }
        render() {
          this.container.classList.add("popupAnnotation");
          const E = this.layer.querySelectorAll(`[data-annotation-id="${this.data.parentId}"]`);
          if (E.length === 0)
            return this.container;
          const R = new s({ container: this.container, trigger: Array.from(E), color: this.data.color, titleObj: this.data.titleObj, modificationDate: this.data.modificationDate, contentsObj: this.data.contentsObj, richText: this.data.richText }), j = this.page, B = e.Util.normalizeRect([this.data.parentRect[0], j.view[3] - this.data.parentRect[1] + j.view[1], this.data.parentRect[2], j.view[3] - this.data.parentRect[3] + j.view[1]]), Y = B[0] + this.data.parentRect[2] - this.data.parentRect[0], tt = B[1], { pageWidth: rt, pageHeight: it, pageX: At, pageY: ct } = this.viewport.rawDims;
          return this.container.style.left = 100 * (Y - At) / rt + "%", this.container.style.top = 100 * (tt - ct) / it + "%", this.container.append(R.render()), this.container;
        }
      };
      let n = W;
      It(n, "IGNORE_TYPES", /* @__PURE__ */ new Set(["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"]));
      class s {
        constructor(E) {
          this.container = E.container, this.trigger = E.trigger, this.color = E.color, this.titleObj = E.titleObj, this.modificationDate = E.modificationDate, this.contentsObj = E.contentsObj, this.richText = E.richText, this.hideWrapper = E.hideWrapper || !1, this.pinned = !1;
        }
        render() {
          var E, R;
          const j = document.createElement("div");
          j.classList.add("popupWrapper"), this.hideElement = this.hideWrapper ? j : this.container, this.hideElement.hidden = !0;
          const B = document.createElement("div");
          B.classList.add("popup");
          const Y = this.color;
          if (Y) {
            const it = 0.7 * (255 - Y[0]) + Y[0], At = 0.7 * (255 - Y[1]) + Y[1], ct = 0.7 * (255 - Y[2]) + Y[2];
            B.style.backgroundColor = e.Util.makeHexColor(0 | it, 0 | At, 0 | ct);
          }
          const tt = document.createElement("h1");
          tt.dir = this.titleObj.dir, tt.textContent = this.titleObj.str, B.append(tt);
          const rt = a.PDFDateString.toDateObject(this.modificationDate);
          if (rt) {
            const it = document.createElement("span");
            it.classList.add("popupDate"), it.textContent = "{{date}}, {{time}}", it.dataset.l10nId = "annotation_date_string", it.dataset.l10nArgs = JSON.stringify({ date: rt.toLocaleDateString(), time: rt.toLocaleTimeString() }), B.append(it);
          }
          if ((E = this.richText) === null || E === void 0 || !E.str || (R = this.contentsObj) !== null && R !== void 0 && R.str && this.contentsObj.str !== this.richText.str) {
            const it = this._formatContents(this.contentsObj);
            B.append(it);
          } else
            O.XfaLayer.render({ xfaHtml: this.richText.html, intent: "richText", div: B }), B.lastChild.classList.add("richText", "popupContent");
          Array.isArray(this.trigger) || (this.trigger = [this.trigger]);
          for (const it of this.trigger)
            it.addEventListener("click", this._toggle.bind(this)), it.addEventListener("mouseover", this._show.bind(this, !1)), it.addEventListener("mouseout", this._hide.bind(this, !1));
          return B.addEventListener("click", this._hide.bind(this, !0)), j.append(B), j;
        }
        _formatContents(E) {
          let { str: R, dir: j } = E;
          const B = document.createElement("p");
          B.classList.add("popupContent"), B.dir = j;
          const Y = R.split(/(?:\r\n?|\n)/);
          for (let tt = 0, rt = Y.length; tt < rt; ++tt) {
            const it = Y[tt];
            B.append(document.createTextNode(it)), tt < rt - 1 && B.append(document.createElement("br"));
          }
          return B;
        }
        _toggle() {
          this.pinned ? this._hide(!0) : this._show(!0);
        }
        _show() {
          arguments.length > 0 && arguments[0] !== void 0 && arguments[0] && (this.pinned = !0), this.hideElement.hidden && (this.hideElement.hidden = !1, this.container.style.zIndex = parseInt(this.container.style.zIndex) + 1e3);
        }
        _hide() {
          (!(arguments.length > 0 && arguments[0] !== void 0) || arguments[0]) && (this.pinned = !1), !this.hideElement.hidden && !this.pinned && (this.hideElement.hidden = !0, this.container.style.zIndex = parseInt(this.container.style.zIndex) - 1e3);
        }
      }
      class r extends b {
        constructor(E) {
          var R, j, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (R = E.data.titleObj) !== null && R !== void 0 && R.str || (j = E.data.contentsObj) !== null && j !== void 0 && j.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 }), this.textContent = E.data.textContent;
        }
        render() {
          if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
            const E = document.createElement("div");
            E.classList.add("annotationTextContent"), E.setAttribute("role", "comment");
            for (const R of this.textContent) {
              const j = document.createElement("span");
              j.textContent = R, E.append(j);
            }
            this.container.append(E);
          }
          return this.data.hasPopup || this._createPopup(null, this.data), this.container;
        }
      }
      class u extends b {
        constructor(E) {
          var R, j, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (R = E.data.titleObj) !== null && R !== void 0 && R.str || (j = E.data.contentsObj) !== null && j !== void 0 && j.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 });
        }
        render() {
          this.container.classList.add("lineAnnotation");
          const E = this.data, { width: R, height: j } = l(E.rect), B = this.svgFactory.create(R, j, !0), Y = this.svgFactory.createElement("svg:line");
          return Y.setAttribute("x1", E.rect[2] - E.lineCoordinates[0]), Y.setAttribute("y1", E.rect[3] - E.lineCoordinates[1]), Y.setAttribute("x2", E.rect[2] - E.lineCoordinates[2]), Y.setAttribute("y2", E.rect[3] - E.lineCoordinates[3]), Y.setAttribute("stroke-width", E.borderStyle.width || 1), Y.setAttribute("stroke", "transparent"), Y.setAttribute("fill", "transparent"), B.append(Y), this.container.append(B), this._createPopup(Y, E), this.container;
        }
      }
      class C extends b {
        constructor(E) {
          var R, j, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (R = E.data.titleObj) !== null && R !== void 0 && R.str || (j = E.data.contentsObj) !== null && j !== void 0 && j.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 });
        }
        render() {
          this.container.classList.add("squareAnnotation");
          const E = this.data, { width: R, height: j } = l(E.rect), B = this.svgFactory.create(R, j, !0), Y = E.borderStyle.width, tt = this.svgFactory.createElement("svg:rect");
          return tt.setAttribute("x", Y / 2), tt.setAttribute("y", Y / 2), tt.setAttribute("width", R - Y), tt.setAttribute("height", j - Y), tt.setAttribute("stroke-width", Y || 1), tt.setAttribute("stroke", "transparent"), tt.setAttribute("fill", "transparent"), B.append(tt), this.container.append(B), this._createPopup(tt, E), this.container;
        }
      }
      class D extends b {
        constructor(E) {
          var R, j, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (R = E.data.titleObj) !== null && R !== void 0 && R.str || (j = E.data.contentsObj) !== null && j !== void 0 && j.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 });
        }
        render() {
          this.container.classList.add("circleAnnotation");
          const E = this.data, { width: R, height: j } = l(E.rect), B = this.svgFactory.create(R, j, !0), Y = E.borderStyle.width, tt = this.svgFactory.createElement("svg:ellipse");
          return tt.setAttribute("cx", R / 2), tt.setAttribute("cy", j / 2), tt.setAttribute("rx", R / 2 - Y / 2), tt.setAttribute("ry", j / 2 - Y / 2), tt.setAttribute("stroke-width", Y || 1), tt.setAttribute("stroke", "transparent"), tt.setAttribute("fill", "transparent"), B.append(tt), this.container.append(B), this._createPopup(tt, E), this.container;
        }
      }
      class o extends b {
        constructor(E) {
          var R, j, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (R = E.data.titleObj) !== null && R !== void 0 && R.str || (j = E.data.contentsObj) !== null && j !== void 0 && j.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 }), this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
        }
        render() {
          this.container.classList.add(this.containerClassName);
          const E = this.data, { width: R, height: j } = l(E.rect), B = this.svgFactory.create(R, j, !0);
          let Y = [];
          for (const rt of E.vertices) {
            const it = rt.x - E.rect[0], At = E.rect[3] - rt.y;
            Y.push(it + "," + At);
          }
          Y = Y.join(" ");
          const tt = this.svgFactory.createElement(this.svgElementName);
          return tt.setAttribute("points", Y), tt.setAttribute("stroke-width", E.borderStyle.width || 1), tt.setAttribute("stroke", "transparent"), tt.setAttribute("fill", "transparent"), B.append(tt), this.container.append(B), this._createPopup(tt, E), this.container;
        }
      }
      class F extends o {
        constructor(E) {
          super(E), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
        }
      }
      class z extends b {
        constructor(E) {
          var R, j, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (R = E.data.titleObj) !== null && R !== void 0 && R.str || (j = E.data.contentsObj) !== null && j !== void 0 && j.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 });
        }
        render() {
          return this.container.classList.add("caretAnnotation"), this.data.hasPopup || this._createPopup(null, this.data), this.container;
        }
      }
      class q extends b {
        constructor(E) {
          var R, j, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (R = E.data.titleObj) !== null && R !== void 0 && R.str || (j = E.data.contentsObj) !== null && j !== void 0 && j.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 }), this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline";
        }
        render() {
          this.container.classList.add(this.containerClassName);
          const E = this.data, { width: R, height: j } = l(E.rect), B = this.svgFactory.create(R, j, !0);
          for (const Y of E.inkLists) {
            let tt = [];
            for (const it of Y) {
              const At = it.x - E.rect[0], ct = E.rect[3] - it.y;
              tt.push(`${At},${ct}`);
            }
            tt = tt.join(" ");
            const rt = this.svgFactory.createElement(this.svgElementName);
            rt.setAttribute("points", tt), rt.setAttribute("stroke-width", E.borderStyle.width || 1), rt.setAttribute("stroke", "transparent"), rt.setAttribute("fill", "transparent"), this._createPopup(rt, E), B.append(rt);
          }
          return this.container.append(B), this.container;
        }
      }
      class J extends b {
        constructor(E) {
          var R, j, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (R = E.data.titleObj) !== null && R !== void 0 && R.str || (j = E.data.contentsObj) !== null && j !== void 0 && j.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
          return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("highlightAnnotation") : (this.container.classList.add("highlightAnnotation"), this.container);
        }
      }
      class $ extends b {
        constructor(E) {
          var R, j, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (R = E.data.titleObj) !== null && R !== void 0 && R.str || (j = E.data.contentsObj) !== null && j !== void 0 && j.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
          return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("underlineAnnotation") : (this.container.classList.add("underlineAnnotation"), this.container);
        }
      }
      class S extends b {
        constructor(E) {
          var R, j, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (R = E.data.titleObj) !== null && R !== void 0 && R.str || (j = E.data.contentsObj) !== null && j !== void 0 && j.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
          return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("squigglyAnnotation") : (this.container.classList.add("squigglyAnnotation"), this.container);
        }
      }
      class f extends b {
        constructor(E) {
          var R, j, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (R = E.data.titleObj) !== null && R !== void 0 && R.str || (j = E.data.contentsObj) !== null && j !== void 0 && j.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
          return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("strikeoutAnnotation") : (this.container.classList.add("strikeoutAnnotation"), this.container);
        }
      }
      class P extends b {
        constructor(E) {
          var R, j, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (R = E.data.titleObj) !== null && R !== void 0 && R.str || (j = E.data.contentsObj) !== null && j !== void 0 && j.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 });
        }
        render() {
          return this.container.classList.add("stampAnnotation"), this.data.hasPopup || this._createPopup(null, this.data), this.container;
        }
      }
      class g extends b {
        constructor(E) {
          var R;
          super(E, { isRenderable: !0 });
          const { filename: j, content: B } = this.data.file;
          this.filename = (0, a.getFilenameFromUrl)(j, !0), this.content = B, (R = this.linkService.eventBus) === null || R === void 0 || R.dispatch("fileattachmentannotation", { source: this, filename: j, content: B });
        }
        render() {
          var E, R;
          this.container.classList.add("fileAttachmentAnnotation");
          let j;
          return this.data.hasAppearance ? j = document.createElement("div") : (j = document.createElement("img"), j.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(this.data.name) ? "paperclip" : "pushpin"}.svg`), j.classList.add("popupTriggerArea"), j.addEventListener("dblclick", this._download.bind(this)), !this.data.hasPopup && ((E = this.data.titleObj) !== null && E !== void 0 && E.str || (R = this.data.contentsObj) !== null && R !== void 0 && R.str || this.data.richText) && this._createPopup(j, this.data), this.container.append(j), this.container;
        }
        _download() {
          var E;
          (E = this.downloadManager) === null || E === void 0 || E.openOrDownloadData(this.container, this.content, this.filename);
        }
      }
      const dt = class {
        static render(E) {
          var it, At;
          const { annotations: R, div: j, viewport: B, accessibilityManager: Y } = E;
          (0, a.setLayerDimensions)(j, B);
          const tt = { data: null, layer: j, page: E.page, viewport: B, linkService: E.linkService, downloadManager: E.downloadManager, imageResourcesPath: E.imageResourcesPath || "", renderForms: E.renderForms !== !1, svgFactory: new a.DOMSVGFactory(), annotationStorage: E.annotationStorage || new y.AnnotationStorage(), enableScripting: E.enableScripting === !0, hasJSActions: E.hasJSActions, fieldObjects: E.fieldObjects };
          let rt = 0;
          for (const ct of R) {
            if (ct.noHTML)
              continue;
            if (ct.annotationType !== e.AnnotationType.POPUP) {
              const { width: mt, height: yt } = l(ct.rect);
              if (mt <= 0 || yt <= 0)
                continue;
            }
            tt.data = ct;
            const vt = c.create(tt);
            if (!vt.isRenderable)
              continue;
            const ht = vt.render();
            if (ct.hidden && (ht.style.visibility = "hidden"), Array.isArray(ht))
              for (const mt of ht)
                mt.style.zIndex = rt++, nt(it = dt, X, je).call(it, mt, ct.id, j, Y);
            else
              ht.style.zIndex = rt++, vt instanceof n ? j.prepend(ht) : nt(At = dt, X, je).call(At, ht, ct.id, j, Y);
          }
          nt(this, H, Be).call(this, j, E.annotationCanvasMap);
        }
        static update(E) {
          const { annotationCanvasMap: R, div: j, viewport: B } = E;
          (0, a.setLayerDimensions)(j, { rotation: B.rotation }), nt(this, H, Be).call(this, j, R), j.hidden = !1;
        }
      };
      let _ = dt;
      X = new WeakSet(), je = function(E, R, j, B) {
        const Y = E.firstChild || E;
        Y.id = `${a.AnnotationPrefix}${R}`, j.append(E), B == null || B.moveElementInDOM(j, E, Y, !1);
      }, H = new WeakSet(), Be = function(E, R) {
        if (R) {
          for (const [j, B] of R) {
            const Y = E.querySelector(`[data-annotation-id="${j}"]`);
            if (!Y)
              continue;
            const { firstChild: tt } = Y;
            tt ? tt.nodeName === "CANVAS" ? tt.replaceWith(B) : tt.before(B) : Y.append(B);
          }
          R.clear();
        }
      }, et(_, X), et(_, H), d.AnnotationLayer = _;
    }, (k, d) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.ColorConverters = void 0;
      function t(e) {
        return Math.floor(255 * Math.max(0, Math.min(1, e))).toString(16).padStart(2, "0");
      }
      d.ColorConverters = class {
        static CMYK_G(a) {
          let [y, w, O, p] = a;
          return ["G", 1 - Math.min(1, 0.3 * y + 0.59 * O + 0.11 * w + p)];
        }
        static G_CMYK(a) {
          let [y] = a;
          return ["CMYK", 0, 0, 0, 1 - y];
        }
        static G_RGB(a) {
          let [y] = a;
          return ["RGB", y, y, y];
        }
        static G_HTML(a) {
          let [y] = a;
          const w = t(y);
          return `#${w}${w}${w}`;
        }
        static RGB_G(a) {
          let [y, w, O] = a;
          return ["G", 0.3 * y + 0.59 * w + 0.11 * O];
        }
        static RGB_HTML(a) {
          let [y, w, O] = a;
          return `#${t(y)}${t(w)}${t(O)}`;
        }
        static T_HTML() {
          return "#00000000";
        }
        static CMYK_RGB(a) {
          let [y, w, O, p] = a;
          return ["RGB", 1 - Math.min(1, y + p), 1 - Math.min(1, O + p), 1 - Math.min(1, w + p)];
        }
        static CMYK_HTML(a) {
          const y = this.CMYK_RGB(a).slice(1);
          return this.RGB_HTML(y);
        }
        static RGB_CMYK(a) {
          let [y, w, O] = a;
          const p = 1 - y, h = 1 - w, l = 1 - O;
          return ["CMYK", p, h, l, Math.min(p, h, l)];
        }
      };
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.XfaLayer = void 0;
      var e = t(154);
      d.XfaLayer = class {
        static setupStorage(y, w, O, p, h) {
          const l = p.getValue(w, { value: null });
          switch (O.name) {
            case "textarea":
              if (l.value !== null && (y.textContent = l.value), h === "print")
                break;
              y.addEventListener("input", (c) => {
                p.setValue(w, { value: c.target.value });
              });
              break;
            case "input":
              if (O.attributes.type === "radio" || O.attributes.type === "checkbox") {
                if (l.value === O.attributes.xfaOn ? y.setAttribute("checked", !0) : l.value === O.attributes.xfaOff && y.removeAttribute("checked"), h === "print")
                  break;
                y.addEventListener("change", (c) => {
                  p.setValue(w, { value: c.target.checked ? c.target.getAttribute("xfaOn") : c.target.getAttribute("xfaOff") });
                });
              } else {
                if (l.value !== null && y.setAttribute("value", l.value), h === "print")
                  break;
                y.addEventListener("input", (c) => {
                  p.setValue(w, { value: c.target.value });
                });
              }
              break;
            case "select":
              if (l.value !== null)
                for (const c of O.children)
                  c.attributes.value === l.value && (c.attributes.selected = !0);
              y.addEventListener("input", (c) => {
                const b = c.target.options, L = b.selectedIndex === -1 ? "" : b[b.selectedIndex].value;
                p.setValue(w, { value: L });
              });
          }
        }
        static setAttributes(y) {
          let { html: w, element: O, storage: p = null, intent: h, linkService: l } = y;
          const { attributes: c } = O, b = w instanceof HTMLAnchorElement;
          c.type === "radio" && (c.name = `${c.name}-${h}`);
          for (const [L, m] of Object.entries(c))
            if (m != null)
              switch (L) {
                case "class":
                  m.length && w.setAttribute(L, m.join(" "));
                  break;
                case "dataId":
                  break;
                case "id":
                  w.setAttribute("data-element-id", m);
                  break;
                case "style":
                  Object.assign(w.style, m);
                  break;
                case "textContent":
                  w.textContent = m;
                  break;
                default:
                  (!b || L !== "href" && L !== "newWindow") && w.setAttribute(L, m);
              }
          b && l.addLinkAttributes(w, c.href, c.newWindow), p && c.dataId && this.setupStorage(w, c.dataId, O, p);
        }
        static render(y) {
          const w = y.annotationStorage, O = y.linkService, p = y.xfaHtml, h = y.intent || "display", l = document.createElement(p.name);
          p.attributes && this.setAttributes({ html: l, element: p, intent: h, linkService: O });
          const c = [[p, -1, l]], b = y.div;
          if (b.append(l), y.viewport) {
            const M = `matrix(${y.viewport.transform.join(",")})`;
            b.style.transform = M;
          }
          h !== "richText" && b.setAttribute("class", "xfaLayer xfaFont");
          const L = [];
          for (; c.length > 0; ) {
            var m;
            const [M, x, I] = c.at(-1);
            if (x + 1 === M.children.length) {
              c.pop();
              continue;
            }
            const v = M.children[++c.at(-1)[1]];
            if (v === null)
              continue;
            const { name: i } = v;
            if (i === "#text") {
              const n = document.createTextNode(v.value);
              L.push(n), I.append(n);
              continue;
            }
            let A;
            if (A = v != null && (m = v.attributes) !== null && m !== void 0 && m.xmlns ? document.createElementNS(v.attributes.xmlns, i) : document.createElement(i), I.append(A), v.attributes && this.setAttributes({ html: A, element: v, storage: w, intent: h, linkService: O }), v.children && v.children.length > 0)
              c.push([v, -1, A]);
            else if (v.value) {
              const n = document.createTextNode(v.value);
              e.XfaText.shouldBuildText(i) && L.push(n), A.append(n);
            }
          }
          for (const M of b.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
            M.setAttribute("readOnly", !0);
          return { textDivs: L };
        }
        static update(y) {
          const w = `matrix(${y.viewport.transform.join(",")})`;
          y.div.style.transform = w, y.div.hidden = !1;
        }
      };
    }, (k, d, t) => {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.SVGGraphics = void 0;
      var e = t(142), a = t(1), y = t(3);
      let w = class {
        constructor() {
          (0, a.unreachable)("Not implemented: SVGGraphics");
        }
      };
      d.SVGGraphics = w;
      {
        let M = function(n) {
          let s = [];
          const r = [];
          for (const u of n)
            u.fn !== "save" ? u.fn === "restore" ? s = r.pop() : s.push(u) : (s.push({ fnId: 92, fn: "group", items: [] }), r.push(s), s = s.at(-1).items);
          return s;
        }, x = function(n) {
          if (Number.isInteger(n))
            return n.toString();
          const s = n.toFixed(10);
          let r = s.length - 1;
          if (s[r] !== "0")
            return s;
          do
            r--;
          while (s[r] === "0");
          return s.substring(0, s[r] === "." ? r : r + 1);
        }, I = function(n) {
          if (n[4] === 0 && n[5] === 0) {
            if (n[1] === 0 && n[2] === 0)
              return n[0] === 1 && n[3] === 1 ? "" : `scale(${x(n[0])} ${x(n[3])})`;
            if (n[0] === n[3] && n[1] === -n[2])
              return `rotate(${x(180 * Math.acos(n[0]) / Math.PI)})`;
          } else if (n[0] === 1 && n[1] === 0 && n[2] === 0 && n[3] === 1)
            return `translate(${x(n[4])} ${x(n[5])})`;
          return `matrix(${x(n[0])} ${x(n[1])} ${x(n[2])} ${x(n[3])} ${x(n[4])} ${x(n[5])})`;
        };
        const O = { fontStyle: "normal", fontWeight: "normal", fillColor: "#000000" }, p = "http://www.w3.org/XML/1998/namespace", h = "http://www.w3.org/1999/xlink", l = ["butt", "round", "square"], c = ["miter", "round", "bevel"], b = function(n) {
          let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
          if (URL.createObjectURL && typeof Blob < "u" && !r)
            return URL.createObjectURL(new Blob([n], { type: s }));
          const u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let C = `data:${s};base64,`;
          for (let D = 0, o = n.length; D < o; D += 3) {
            const F = 255 & n[D], z = 255 & n[D + 1], q = 255 & n[D + 2];
            C += u[F >> 2] + u[(3 & F) << 4 | z >> 4] + u[D + 1 < o ? (15 & z) << 2 | q >> 6 : 64] + u[D + 2 < o ? 63 & q : 64];
          }
          return C;
        }, L = function() {
          const n = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), s = new Int32Array(256);
          for (let D = 0; D < 256; D++) {
            let o = D;
            for (let F = 0; F < 8; F++)
              o = 1 & o ? 3988292384 ^ o >> 1 & 2147483647 : o >> 1 & 2147483647;
            s[D] = o;
          }
          function r(D, o, F, z) {
            let q = z;
            const J = o.length;
            F[q] = J >> 24 & 255, F[q + 1] = J >> 16 & 255, F[q + 2] = J >> 8 & 255, F[q + 3] = 255 & J, q += 4, F[q] = 255 & D.charCodeAt(0), F[q + 1] = 255 & D.charCodeAt(1), F[q + 2] = 255 & D.charCodeAt(2), F[q + 3] = 255 & D.charCodeAt(3), q += 4, F.set(o, q), q += o.length;
            const $ = function(f, P, g) {
              let _ = -1;
              for (let U = P; U < g; U++) {
                const N = 255 & (_ ^ f[U]);
                _ = _ >>> 8 ^ s[N];
              }
              return -1 ^ _;
            }(F, z + 4, q);
            F[q] = $ >> 24 & 255, F[q + 1] = $ >> 16 & 255, F[q + 2] = $ >> 8 & 255, F[q + 3] = 255 & $;
          }
          function u(D) {
            let o = D.length;
            const F = 65535, z = Math.ceil(o / F), q = new Uint8Array(2 + o + 5 * z + 4);
            let J = 0;
            q[J++] = 120, q[J++] = 156;
            let $ = 0;
            for (; o > F; )
              q[J++] = 0, q[J++] = 255, q[J++] = 255, q[J++] = 0, q[J++] = 0, q.set(D.subarray($, $ + F), J), J += F, $ += F, o -= F;
            q[J++] = 1, q[J++] = 255 & o, q[J++] = o >> 8 & 255, q[J++] = 255 & ~o, q[J++] = (65535 & ~o) >> 8 & 255, q.set(D.subarray($), J), J += D.length - $;
            const S = function(P, g, _) {
              let U = 1, N = 0;
              for (let G = g; G < _; ++G)
                U = (U + (255 & P[G])) % 65521, N = (N + U) % 65521;
              return N << 16 | U;
            }(D, 0, D.length);
            return q[J++] = S >> 24 & 255, q[J++] = S >> 16 & 255, q[J++] = S >> 8 & 255, q[J++] = 255 & S, q;
          }
          function C(D, o, F, z) {
            const q = D.width, J = D.height;
            let $, S, f;
            const P = D.data;
            switch (o) {
              case a.ImageKind.GRAYSCALE_1BPP:
                S = 0, $ = 1, f = q + 7 >> 3;
                break;
              case a.ImageKind.RGB_24BPP:
                S = 2, $ = 8, f = 3 * q;
                break;
              case a.ImageKind.RGBA_32BPP:
                S = 6, $ = 8, f = 4 * q;
                break;
              default:
                throw new Error("invalid format");
            }
            const g = new Uint8Array((1 + f) * J);
            let _ = 0, U = 0;
            for (let K = 0; K < J; ++K)
              g[_++] = 0, g.set(P.subarray(U, U + f), _), U += f, _ += f;
            if (o === a.ImageKind.GRAYSCALE_1BPP && z) {
              _ = 0;
              for (let K = 0; K < J; K++) {
                _++;
                for (let H = 0; H < f; H++)
                  g[_++] ^= 255;
              }
            }
            const N = new Uint8Array([q >> 24 & 255, q >> 16 & 255, q >> 8 & 255, 255 & q, J >> 24 & 255, J >> 16 & 255, J >> 8 & 255, 255 & J, $, S, 0, 0, 0]), G = function(H) {
              if (!y.isNodeJS)
                return u(H);
              try {
                let Z;
                Z = parseInt(process.versions.node) >= 8 ? H : Buffer.from(H);
                const dt = require$$6.deflateSync(Z, { level: 9 });
                return dt instanceof Uint8Array ? dt : new Uint8Array(dt);
              } catch (Z) {
                (0, a.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + Z);
              }
              return u(H);
            }(g), V = n.length + 36 + N.length + G.length, W = new Uint8Array(V);
            let X = 0;
            return W.set(n, X), X += n.length, r("IHDR", N, W, X), X += 12 + N.length, r("IDATA", G, W, X), X += 12 + G.length, r("IEND", new Uint8Array(0), W, X), b(W, "image/png", F);
          }
          return function(o, F, z) {
            return C(o, o.kind === void 0 ? a.ImageKind.GRAYSCALE_1BPP : o.kind, F, z);
          };
        }();
        class m {
          constructor() {
            this.fontSizeScale = 1, this.fontWeight = O.fontWeight, this.fontSize = 0, this.textMatrix = a.IDENTITY_MATRIX, this.fontMatrix = a.FONT_IDENTITY_MATRIX, this.leading = 0, this.textRenderingMode = a.TextRenderingMode.FILL, this.textMatrixScale = 1, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = O.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = "";
          }
          clone() {
            return Object.create(this);
          }
          setCurrentPoint(s, r) {
            this.x = s, this.y = r;
          }
        }
        let v = 0, i = 0, A = 0;
        d.SVGGraphics = w = class {
          constructor(n, s) {
            let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
            (0, e.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future."), this.svgFactory = new e.DOMSVGFactory(), this.current = new m(), this.transformMatrix = a.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = n, this.objs = s, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = /* @__PURE__ */ Object.create(null), this.cssStyle = null, this.forceDataSchema = !!r, this._operatorIdMapping = [];
            for (const u in a.OPS)
              this._operatorIdMapping[a.OPS[u]] = u;
          }
          getObject(n) {
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            return typeof n == "string" ? n.startsWith("g_") ? this.commonObjs.get(n) : this.objs.get(n) : s;
          }
          save() {
            this.transformStack.push(this.transformMatrix);
            const n = this.current;
            this.extraStack.push(n), this.current = n.clone();
          }
          restore() {
            this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.pendingClip = null, this.tgrp = null;
          }
          group(n) {
            this.save(), this.executeOpTree(n), this.restore();
          }
          loadDependencies(n) {
            const s = n.fnArray, r = n.argsArray;
            for (let u = 0, C = s.length; u < C; u++)
              if (s[u] === a.OPS.dependency)
                for (const D of r[u]) {
                  const o = D.startsWith("g_") ? this.commonObjs : this.objs, F = new Promise((z) => {
                    o.get(D, z);
                  });
                  this.current.dependencies.push(F);
                }
            return Promise.all(this.current.dependencies);
          }
          transform(n, s, r, u, C, D) {
            const o = [n, s, r, u, C, D];
            this.transformMatrix = a.Util.transform(this.transformMatrix, o), this.tgrp = null;
          }
          getSVG(n, s) {
            this.viewport = s;
            const r = this._initialize(s);
            return this.loadDependencies(n).then(() => (this.transformMatrix = a.IDENTITY_MATRIX, this.executeOpTree(this.convertOpList(n)), r));
          }
          convertOpList(n) {
            const s = this._operatorIdMapping, r = n.argsArray, u = n.fnArray, C = [];
            for (let D = 0, o = u.length; D < o; D++) {
              const F = u[D];
              C.push({ fnId: F, fn: s[F], args: r[D] });
            }
            return M(C);
          }
          executeOpTree(n) {
            for (const s of n) {
              const r = s.fn, u = s.fnId, C = s.args;
              switch (0 | u) {
                case a.OPS.beginText:
                  this.beginText();
                  break;
                case a.OPS.dependency:
                  break;
                case a.OPS.setLeading:
                  this.setLeading(C);
                  break;
                case a.OPS.setLeadingMoveText:
                  this.setLeadingMoveText(C[0], C[1]);
                  break;
                case a.OPS.setFont:
                  this.setFont(C);
                  break;
                case a.OPS.showText:
                case a.OPS.showSpacedText:
                  this.showText(C[0]);
                  break;
                case a.OPS.endText:
                  this.endText();
                  break;
                case a.OPS.moveText:
                  this.moveText(C[0], C[1]);
                  break;
                case a.OPS.setCharSpacing:
                  this.setCharSpacing(C[0]);
                  break;
                case a.OPS.setWordSpacing:
                  this.setWordSpacing(C[0]);
                  break;
                case a.OPS.setHScale:
                  this.setHScale(C[0]);
                  break;
                case a.OPS.setTextMatrix:
                  this.setTextMatrix(C[0], C[1], C[2], C[3], C[4], C[5]);
                  break;
                case a.OPS.setTextRise:
                  this.setTextRise(C[0]);
                  break;
                case a.OPS.setTextRenderingMode:
                  this.setTextRenderingMode(C[0]);
                  break;
                case a.OPS.setLineWidth:
                  this.setLineWidth(C[0]);
                  break;
                case a.OPS.setLineJoin:
                  this.setLineJoin(C[0]);
                  break;
                case a.OPS.setLineCap:
                  this.setLineCap(C[0]);
                  break;
                case a.OPS.setMiterLimit:
                  this.setMiterLimit(C[0]);
                  break;
                case a.OPS.setFillRGBColor:
                  this.setFillRGBColor(C[0], C[1], C[2]);
                  break;
                case a.OPS.setStrokeRGBColor:
                  this.setStrokeRGBColor(C[0], C[1], C[2]);
                  break;
                case a.OPS.setStrokeColorN:
                  this.setStrokeColorN(C);
                  break;
                case a.OPS.setFillColorN:
                  this.setFillColorN(C);
                  break;
                case a.OPS.shadingFill:
                  this.shadingFill(C[0]);
                  break;
                case a.OPS.setDash:
                  this.setDash(C[0], C[1]);
                  break;
                case a.OPS.setRenderingIntent:
                  this.setRenderingIntent(C[0]);
                  break;
                case a.OPS.setFlatness:
                  this.setFlatness(C[0]);
                  break;
                case a.OPS.setGState:
                  this.setGState(C[0]);
                  break;
                case a.OPS.fill:
                  this.fill();
                  break;
                case a.OPS.eoFill:
                  this.eoFill();
                  break;
                case a.OPS.stroke:
                  this.stroke();
                  break;
                case a.OPS.fillStroke:
                  this.fillStroke();
                  break;
                case a.OPS.eoFillStroke:
                  this.eoFillStroke();
                  break;
                case a.OPS.clip:
                  this.clip("nonzero");
                  break;
                case a.OPS.eoClip:
                  this.clip("evenodd");
                  break;
                case a.OPS.paintSolidColorImageMask:
                  this.paintSolidColorImageMask();
                  break;
                case a.OPS.paintImageXObject:
                  this.paintImageXObject(C[0]);
                  break;
                case a.OPS.paintInlineImageXObject:
                  this.paintInlineImageXObject(C[0]);
                  break;
                case a.OPS.paintImageMaskXObject:
                  this.paintImageMaskXObject(C[0]);
                  break;
                case a.OPS.paintFormXObjectBegin:
                  this.paintFormXObjectBegin(C[0], C[1]);
                  break;
                case a.OPS.paintFormXObjectEnd:
                  this.paintFormXObjectEnd();
                  break;
                case a.OPS.closePath:
                  this.closePath();
                  break;
                case a.OPS.closeStroke:
                  this.closeStroke();
                  break;
                case a.OPS.closeFillStroke:
                  this.closeFillStroke();
                  break;
                case a.OPS.closeEOFillStroke:
                  this.closeEOFillStroke();
                  break;
                case a.OPS.nextLine:
                  this.nextLine();
                  break;
                case a.OPS.transform:
                  this.transform(C[0], C[1], C[2], C[3], C[4], C[5]);
                  break;
                case a.OPS.constructPath:
                  this.constructPath(C[0], C[1]);
                  break;
                case a.OPS.endPath:
                  this.endPath();
                  break;
                case 92:
                  this.group(s.items);
                  break;
                default:
                  (0, a.warn)(`Unimplemented operator ${r}`);
              }
            }
          }
          setWordSpacing(n) {
            this.current.wordSpacing = n;
          }
          setCharSpacing(n) {
            this.current.charSpacing = n;
          }
          nextLine() {
            this.moveText(0, this.current.leading);
          }
          setTextMatrix(n, s, r, u, C, D) {
            const o = this.current;
            o.textMatrix = o.lineMatrix = [n, s, r, u, C, D], o.textMatrixScale = Math.hypot(n, s), o.x = o.lineX = 0, o.y = o.lineY = 0, o.xcoords = [], o.ycoords = [], o.tspan = this.svgFactory.createElement("svg:tspan"), o.tspan.setAttributeNS(null, "font-family", o.fontFamily), o.tspan.setAttributeNS(null, "font-size", `${x(o.fontSize)}px`), o.tspan.setAttributeNS(null, "y", x(-o.y)), o.txtElement = this.svgFactory.createElement("svg:text"), o.txtElement.append(o.tspan);
          }
          beginText() {
            const n = this.current;
            n.x = n.lineX = 0, n.y = n.lineY = 0, n.textMatrix = a.IDENTITY_MATRIX, n.lineMatrix = a.IDENTITY_MATRIX, n.textMatrixScale = 1, n.tspan = this.svgFactory.createElement("svg:tspan"), n.txtElement = this.svgFactory.createElement("svg:text"), n.txtgrp = this.svgFactory.createElement("svg:g"), n.xcoords = [], n.ycoords = [];
          }
          moveText(n, s) {
            const r = this.current;
            r.x = r.lineX += n, r.y = r.lineY += s, r.xcoords = [], r.ycoords = [], r.tspan = this.svgFactory.createElement("svg:tspan"), r.tspan.setAttributeNS(null, "font-family", r.fontFamily), r.tspan.setAttributeNS(null, "font-size", `${x(r.fontSize)}px`), r.tspan.setAttributeNS(null, "y", x(-r.y));
          }
          showText(n) {
            const s = this.current, r = s.font, u = s.fontSize;
            if (u === 0)
              return;
            const C = s.fontSizeScale, D = s.charSpacing, o = s.wordSpacing, F = s.fontDirection, z = s.textHScale * F, q = r.vertical, J = q ? 1 : -1, $ = r.defaultVMetrics, S = u * s.fontMatrix[0];
            let f = 0;
            for (const _ of n) {
              if (_ === null) {
                f += F * o;
                continue;
              }
              if (typeof _ == "number") {
                f += J * _ * u / 1e3;
                continue;
              }
              const U = (_.isSpace ? o : 0) + D, N = _.fontChar;
              let G, V, W, X = _.width;
              if (q) {
                let K;
                const H = _.vmetric || $;
                K = _.vmetric ? H[1] : 0.5 * X, K = -K * S;
                const Z = H[2] * S;
                X = H ? -H[0] : X, G = K / C, V = (f + Z) / C;
              } else
                G = f / C, V = 0;
              (_.isInFont || r.missingFile) && (s.xcoords.push(s.x + G), q && s.ycoords.push(-s.y + V), s.tspan.textContent += N), W = q ? X * S - U * F : X * S + U * F, f += W;
            }
            s.tspan.setAttributeNS(null, "x", s.xcoords.map(x).join(" ")), q ? s.tspan.setAttributeNS(null, "y", s.ycoords.map(x).join(" ")) : s.tspan.setAttributeNS(null, "y", x(-s.y)), q ? s.y -= f : s.x += f * z, s.tspan.setAttributeNS(null, "font-family", s.fontFamily), s.tspan.setAttributeNS(null, "font-size", `${x(s.fontSize)}px`), s.fontStyle !== O.fontStyle && s.tspan.setAttributeNS(null, "font-style", s.fontStyle), s.fontWeight !== O.fontWeight && s.tspan.setAttributeNS(null, "font-weight", s.fontWeight);
            const P = s.textRenderingMode & a.TextRenderingMode.FILL_STROKE_MASK;
            if (P === a.TextRenderingMode.FILL || P === a.TextRenderingMode.FILL_STROKE ? (s.fillColor !== O.fillColor && s.tspan.setAttributeNS(null, "fill", s.fillColor), s.fillAlpha < 1 && s.tspan.setAttributeNS(null, "fill-opacity", s.fillAlpha)) : s.textRenderingMode === a.TextRenderingMode.ADD_TO_PATH ? s.tspan.setAttributeNS(null, "fill", "transparent") : s.tspan.setAttributeNS(null, "fill", "none"), P === a.TextRenderingMode.STROKE || P === a.TextRenderingMode.FILL_STROKE) {
              const _ = 1 / (s.textMatrixScale || 1);
              this._setStrokeAttributes(s.tspan, _);
            }
            let g = s.textMatrix;
            s.textRise !== 0 && (g = g.slice(), g[5] += s.textRise), s.txtElement.setAttributeNS(null, "transform", `${I(g)} scale(${x(z)}, -1)`), s.txtElement.setAttributeNS(p, "xml:space", "preserve"), s.txtElement.append(s.tspan), s.txtgrp.append(s.txtElement), this._ensureTransformGroup().append(s.txtElement);
          }
          setLeadingMoveText(n, s) {
            this.setLeading(-s), this.moveText(n, s);
          }
          addFontStyle(n) {
            if (!n.data)
              throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
            this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.append(this.cssStyle));
            const s = b(n.data, n.mimetype, this.forceDataSchema);
            this.cssStyle.textContent += `@font-face { font-family: "${n.loadedName}"; src: url(${s}); }
`;
          }
          setFont(n) {
            const s = this.current, r = this.commonObjs.get(n[0]);
            let u = n[1];
            s.font = r, this.embedFonts && !r.missingFile && !this.embeddedFonts[r.loadedName] && (this.addFontStyle(r), this.embeddedFonts[r.loadedName] = r), s.fontMatrix = r.fontMatrix || a.FONT_IDENTITY_MATRIX;
            let C = "normal";
            r.black ? C = "900" : r.bold && (C = "bold");
            const D = r.italic ? "italic" : "normal";
            u < 0 ? (u = -u, s.fontDirection = -1) : s.fontDirection = 1, s.fontSize = u, s.fontFamily = r.loadedName, s.fontWeight = C, s.fontStyle = D, s.tspan = this.svgFactory.createElement("svg:tspan"), s.tspan.setAttributeNS(null, "y", x(-s.y)), s.xcoords = [], s.ycoords = [];
          }
          endText() {
            var n;
            const s = this.current;
            s.textRenderingMode & a.TextRenderingMode.ADD_TO_PATH_FLAG && (n = s.txtElement) !== null && n !== void 0 && n.hasChildNodes() && (s.element = s.txtElement, this.clip("nonzero"), this.endPath());
          }
          setLineWidth(n) {
            n > 0 && (this.current.lineWidth = n);
          }
          setLineCap(n) {
            this.current.lineCap = l[n];
          }
          setLineJoin(n) {
            this.current.lineJoin = c[n];
          }
          setMiterLimit(n) {
            this.current.miterLimit = n;
          }
          setStrokeAlpha(n) {
            this.current.strokeAlpha = n;
          }
          setStrokeRGBColor(n, s, r) {
            this.current.strokeColor = a.Util.makeHexColor(n, s, r);
          }
          setFillAlpha(n) {
            this.current.fillAlpha = n;
          }
          setFillRGBColor(n, s, r) {
            this.current.fillColor = a.Util.makeHexColor(n, s, r), this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.xcoords = [], this.current.ycoords = [];
          }
          setStrokeColorN(n) {
            this.current.strokeColor = this._makeColorN_Pattern(n);
          }
          setFillColorN(n) {
            this.current.fillColor = this._makeColorN_Pattern(n);
          }
          shadingFill(n) {
            const s = this.viewport.width, r = this.viewport.height, u = a.Util.inverseTransform(this.transformMatrix), C = a.Util.applyTransform([0, 0], u), D = a.Util.applyTransform([0, r], u), o = a.Util.applyTransform([s, 0], u), F = a.Util.applyTransform([s, r], u), z = Math.min(C[0], D[0], o[0], F[0]), q = Math.min(C[1], D[1], o[1], F[1]), J = Math.max(C[0], D[0], o[0], F[0]), $ = Math.max(C[1], D[1], o[1], F[1]), S = this.svgFactory.createElement("svg:rect");
            S.setAttributeNS(null, "x", z), S.setAttributeNS(null, "y", q), S.setAttributeNS(null, "width", J - z), S.setAttributeNS(null, "height", $ - q), S.setAttributeNS(null, "fill", this._makeShadingPattern(n)), this.current.fillAlpha < 1 && S.setAttributeNS(null, "fill-opacity", this.current.fillAlpha), this._ensureTransformGroup().append(S);
          }
          _makeColorN_Pattern(n) {
            return n[0] === "TilingPattern" ? this._makeTilingPattern(n) : this._makeShadingPattern(n);
          }
          _makeTilingPattern(n) {
            const s = n[1], r = n[2], u = n[3] || a.IDENTITY_MATRIX, [C, D, o, F] = n[4], z = n[5], q = n[6], J = n[7], $ = "shading" + A++, [S, f, P, g] = a.Util.normalizeRect([...a.Util.applyTransform([C, D], u), ...a.Util.applyTransform([o, F], u)]), [_, U] = a.Util.singularValueDecompose2dScale(u), N = z * _, G = q * U, V = this.svgFactory.createElement("svg:pattern");
            V.setAttributeNS(null, "id", $), V.setAttributeNS(null, "patternUnits", "userSpaceOnUse"), V.setAttributeNS(null, "width", N), V.setAttributeNS(null, "height", G), V.setAttributeNS(null, "x", `${S}`), V.setAttributeNS(null, "y", `${f}`);
            const W = this.svg, X = this.transformMatrix, K = this.current.fillColor, H = this.current.strokeColor, Z = this.svgFactory.create(P - S, g - f);
            if (this.svg = Z, this.transformMatrix = u, J === 2) {
              const dt = a.Util.makeHexColor(...s);
              this.current.fillColor = dt, this.current.strokeColor = dt;
            }
            return this.executeOpTree(this.convertOpList(r)), this.svg = W, this.transformMatrix = X, this.current.fillColor = K, this.current.strokeColor = H, V.append(Z.childNodes[0]), this.defs.append(V), `url(#${$})`;
          }
          _makeShadingPattern(n) {
            switch (typeof n == "string" && (n = this.objs.get(n)), n[0]) {
              case "RadialAxial":
                const s = "shading" + A++, r = n[3];
                let u;
                switch (n[1]) {
                  case "axial":
                    const C = n[4], D = n[5];
                    u = this.svgFactory.createElement("svg:linearGradient"), u.setAttributeNS(null, "id", s), u.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), u.setAttributeNS(null, "x1", C[0]), u.setAttributeNS(null, "y1", C[1]), u.setAttributeNS(null, "x2", D[0]), u.setAttributeNS(null, "y2", D[1]);
                    break;
                  case "radial":
                    const o = n[4], F = n[5], z = n[6], q = n[7];
                    u = this.svgFactory.createElement("svg:radialGradient"), u.setAttributeNS(null, "id", s), u.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), u.setAttributeNS(null, "cx", F[0]), u.setAttributeNS(null, "cy", F[1]), u.setAttributeNS(null, "r", q), u.setAttributeNS(null, "fx", o[0]), u.setAttributeNS(null, "fy", o[1]), u.setAttributeNS(null, "fr", z);
                    break;
                  default:
                    throw new Error(`Unknown RadialAxial type: ${n[1]}`);
                }
                for (const C of r) {
                  const D = this.svgFactory.createElement("svg:stop");
                  D.setAttributeNS(null, "offset", C[0]), D.setAttributeNS(null, "stop-color", C[1]), u.append(D);
                }
                return this.defs.append(u), `url(#${s})`;
              case "Mesh":
                return (0, a.warn)("Unimplemented pattern Mesh"), null;
              case "Dummy":
                return "hotpink";
              default:
                throw new Error(`Unknown IR type: ${n[0]}`);
            }
          }
          setDash(n, s) {
            this.current.dashArray = n, this.current.dashPhase = s;
          }
          constructPath(n, s) {
            const r = this.current;
            let u = r.x, C = r.y, D = [], o = 0;
            for (const F of n)
              switch (0 | F) {
                case a.OPS.rectangle:
                  u = s[o++], C = s[o++];
                  const z = u + s[o++], q = C + s[o++];
                  D.push("M", x(u), x(C), "L", x(z), x(C), "L", x(z), x(q), "L", x(u), x(q), "Z");
                  break;
                case a.OPS.moveTo:
                  u = s[o++], C = s[o++], D.push("M", x(u), x(C));
                  break;
                case a.OPS.lineTo:
                  u = s[o++], C = s[o++], D.push("L", x(u), x(C));
                  break;
                case a.OPS.curveTo:
                  u = s[o + 4], C = s[o + 5], D.push("C", x(s[o]), x(s[o + 1]), x(s[o + 2]), x(s[o + 3]), x(u), x(C)), o += 6;
                  break;
                case a.OPS.curveTo2:
                  D.push("C", x(u), x(C), x(s[o]), x(s[o + 1]), x(s[o + 2]), x(s[o + 3])), u = s[o + 2], C = s[o + 3], o += 4;
                  break;
                case a.OPS.curveTo3:
                  u = s[o + 2], C = s[o + 3], D.push("C", x(s[o]), x(s[o + 1]), x(u), x(C), x(u), x(C)), o += 4;
                  break;
                case a.OPS.closePath:
                  D.push("Z");
              }
            D = D.join(" "), r.path && n.length > 0 && n[0] !== a.OPS.rectangle && n[0] !== a.OPS.moveTo ? D = r.path.getAttributeNS(null, "d") + D : (r.path = this.svgFactory.createElement("svg:path"), this._ensureTransformGroup().append(r.path)), r.path.setAttributeNS(null, "d", D), r.path.setAttributeNS(null, "fill", "none"), r.element = r.path, r.setCurrentPoint(u, C);
          }
          endPath() {
            const n = this.current;
            if (n.path = null, !this.pendingClip)
              return;
            if (!n.element) {
              this.pendingClip = null;
              return;
            }
            const s = "clippath" + v++, r = this.svgFactory.createElement("svg:clipPath");
            r.setAttributeNS(null, "id", s), r.setAttributeNS(null, "transform", I(this.transformMatrix));
            const u = n.element.cloneNode(!0);
            if (this.pendingClip === "evenodd" ? u.setAttributeNS(null, "clip-rule", "evenodd") : u.setAttributeNS(null, "clip-rule", "nonzero"), this.pendingClip = null, r.append(u), this.defs.append(r), n.activeClipUrl) {
              n.clipGroup = null;
              for (const C of this.extraStack)
                C.clipGroup = null;
              r.setAttributeNS(null, "clip-path", n.activeClipUrl);
            }
            n.activeClipUrl = `url(#${s})`, this.tgrp = null;
          }
          clip(n) {
            this.pendingClip = n;
          }
          closePath() {
            const n = this.current;
            if (n.path) {
              const s = `${n.path.getAttributeNS(null, "d")}Z`;
              n.path.setAttributeNS(null, "d", s);
            }
          }
          setLeading(n) {
            this.current.leading = -n;
          }
          setTextRise(n) {
            this.current.textRise = n;
          }
          setTextRenderingMode(n) {
            this.current.textRenderingMode = n;
          }
          setHScale(n) {
            this.current.textHScale = n / 100;
          }
          setRenderingIntent(n) {
          }
          setFlatness(n) {
          }
          setGState(n) {
            for (const [s, r] of n)
              switch (s) {
                case "LW":
                  this.setLineWidth(r);
                  break;
                case "LC":
                  this.setLineCap(r);
                  break;
                case "LJ":
                  this.setLineJoin(r);
                  break;
                case "ML":
                  this.setMiterLimit(r);
                  break;
                case "D":
                  this.setDash(r[0], r[1]);
                  break;
                case "RI":
                  this.setRenderingIntent(r);
                  break;
                case "FL":
                  this.setFlatness(r);
                  break;
                case "Font":
                  this.setFont(r);
                  break;
                case "CA":
                  this.setStrokeAlpha(r);
                  break;
                case "ca":
                  this.setFillAlpha(r);
                  break;
                default:
                  (0, a.warn)(`Unimplemented graphic state operator ${s}`);
              }
          }
          fill() {
            const n = this.current;
            n.element && (n.element.setAttributeNS(null, "fill", n.fillColor), n.element.setAttributeNS(null, "fill-opacity", n.fillAlpha), this.endPath());
          }
          stroke() {
            const n = this.current;
            n.element && (this._setStrokeAttributes(n.element), n.element.setAttributeNS(null, "fill", "none"), this.endPath());
          }
          _setStrokeAttributes(n) {
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
            const r = this.current;
            let u = r.dashArray;
            s !== 1 && u.length > 0 && (u = u.map(function(C) {
              return s * C;
            })), n.setAttributeNS(null, "stroke", r.strokeColor), n.setAttributeNS(null, "stroke-opacity", r.strokeAlpha), n.setAttributeNS(null, "stroke-miterlimit", x(r.miterLimit)), n.setAttributeNS(null, "stroke-linecap", r.lineCap), n.setAttributeNS(null, "stroke-linejoin", r.lineJoin), n.setAttributeNS(null, "stroke-width", x(s * r.lineWidth) + "px"), n.setAttributeNS(null, "stroke-dasharray", u.map(x).join(" ")), n.setAttributeNS(null, "stroke-dashoffset", x(s * r.dashPhase) + "px");
          }
          eoFill() {
            var n;
            (n = this.current.element) === null || n === void 0 || n.setAttributeNS(null, "fill-rule", "evenodd"), this.fill();
          }
          fillStroke() {
            this.stroke(), this.fill();
          }
          eoFillStroke() {
            var n;
            (n = this.current.element) === null || n === void 0 || n.setAttributeNS(null, "fill-rule", "evenodd"), this.fillStroke();
          }
          closeStroke() {
            this.closePath(), this.stroke();
          }
          closeFillStroke() {
            this.closePath(), this.fillStroke();
          }
          closeEOFillStroke() {
            this.closePath(), this.eoFillStroke();
          }
          paintSolidColorImageMask() {
            const n = this.svgFactory.createElement("svg:rect");
            n.setAttributeNS(null, "x", "0"), n.setAttributeNS(null, "y", "0"), n.setAttributeNS(null, "width", "1px"), n.setAttributeNS(null, "height", "1px"), n.setAttributeNS(null, "fill", this.current.fillColor), this._ensureTransformGroup().append(n);
          }
          paintImageXObject(n) {
            const s = this.getObject(n);
            s ? this.paintInlineImageXObject(s) : (0, a.warn)(`Dependent image with object ID ${n} is not ready yet`);
          }
          paintInlineImageXObject(n, s) {
            const r = n.width, u = n.height, C = L(n, this.forceDataSchema, !!s), D = this.svgFactory.createElement("svg:rect");
            D.setAttributeNS(null, "x", "0"), D.setAttributeNS(null, "y", "0"), D.setAttributeNS(null, "width", x(r)), D.setAttributeNS(null, "height", x(u)), this.current.element = D, this.clip("nonzero");
            const o = this.svgFactory.createElement("svg:image");
            o.setAttributeNS(h, "xlink:href", C), o.setAttributeNS(null, "x", "0"), o.setAttributeNS(null, "y", x(-u)), o.setAttributeNS(null, "width", x(r) + "px"), o.setAttributeNS(null, "height", x(u) + "px"), o.setAttributeNS(null, "transform", `scale(${x(1 / r)} ${x(-1 / u)})`), s ? s.append(o) : this._ensureTransformGroup().append(o);
          }
          paintImageMaskXObject(n) {
            const s = this.getObject(n.data, n);
            if (s.bitmap) {
              (0, a.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
              return;
            }
            const r = this.current, u = s.width, C = s.height, D = r.fillColor;
            r.maskId = "mask" + i++;
            const o = this.svgFactory.createElement("svg:mask");
            o.setAttributeNS(null, "id", r.maskId);
            const F = this.svgFactory.createElement("svg:rect");
            F.setAttributeNS(null, "x", "0"), F.setAttributeNS(null, "y", "0"), F.setAttributeNS(null, "width", x(u)), F.setAttributeNS(null, "height", x(C)), F.setAttributeNS(null, "fill", D), F.setAttributeNS(null, "mask", `url(#${r.maskId})`), this.defs.append(o), this._ensureTransformGroup().append(F), this.paintInlineImageXObject(s, o);
          }
          paintFormXObjectBegin(n, s) {
            if (Array.isArray(n) && n.length === 6 && this.transform(n[0], n[1], n[2], n[3], n[4], n[5]), s) {
              const r = s[2] - s[0], u = s[3] - s[1], C = this.svgFactory.createElement("svg:rect");
              C.setAttributeNS(null, "x", s[0]), C.setAttributeNS(null, "y", s[1]), C.setAttributeNS(null, "width", x(r)), C.setAttributeNS(null, "height", x(u)), this.current.element = C, this.clip("nonzero"), this.endPath();
            }
          }
          paintFormXObjectEnd() {
          }
          _initialize(n) {
            const s = this.svgFactory.create(n.width, n.height), r = this.svgFactory.createElement("svg:defs");
            s.append(r), this.defs = r;
            const u = this.svgFactory.createElement("svg:g");
            return u.setAttributeNS(null, "transform", I(n.transform)), s.append(u), this.svg = u, s;
          }
          _ensureClipGroup() {
            if (!this.current.clipGroup) {
              const n = this.svgFactory.createElement("svg:g");
              n.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.append(n), this.current.clipGroup = n;
            }
            return this.current.clipGroup;
          }
          _ensureTransformGroup() {
            return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"), this.tgrp.setAttributeNS(null, "transform", I(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().append(this.tgrp) : this.svg.append(this.tgrp)), this.tgrp;
          }
        };
      }
    }], __webpack_module_cache__ = {};
    function __w_pdfjs_require__(k) {
      var d = __webpack_module_cache__[k];
      if (d !== void 0)
        return d.exports;
      var t = __webpack_module_cache__[k] = { exports: {} };
      return __webpack_modules__[k].call(t.exports, t, t.exports, __w_pdfjs_require__), t.exports;
    }
    var __webpack_exports__ = {};
    return (() => {
      var k = __webpack_exports__;
      Object.defineProperty(k, "__esModule", { value: !0 }), Object.defineProperty(k, "AbortException", { enumerable: !0, get: function() {
        return d.AbortException;
      } }), Object.defineProperty(k, "AnnotationEditorLayer", { enumerable: !0, get: function() {
        return y.AnnotationEditorLayer;
      } }), Object.defineProperty(k, "AnnotationEditorParamsType", { enumerable: !0, get: function() {
        return d.AnnotationEditorParamsType;
      } }), Object.defineProperty(k, "AnnotationEditorType", { enumerable: !0, get: function() {
        return d.AnnotationEditorType;
      } }), Object.defineProperty(k, "AnnotationEditorUIManager", { enumerable: !0, get: function() {
        return w.AnnotationEditorUIManager;
      } }), Object.defineProperty(k, "AnnotationLayer", { enumerable: !0, get: function() {
        return O.AnnotationLayer;
      } }), Object.defineProperty(k, "AnnotationMode", { enumerable: !0, get: function() {
        return d.AnnotationMode;
      } }), Object.defineProperty(k, "CMapCompressionType", { enumerable: !0, get: function() {
        return d.CMapCompressionType;
      } }), Object.defineProperty(k, "FeatureTest", { enumerable: !0, get: function() {
        return d.FeatureTest;
      } }), Object.defineProperty(k, "GlobalWorkerOptions", { enumerable: !0, get: function() {
        return p.GlobalWorkerOptions;
      } }), Object.defineProperty(k, "InvalidPDFException", { enumerable: !0, get: function() {
        return d.InvalidPDFException;
      } }), Object.defineProperty(k, "MissingPDFException", { enumerable: !0, get: function() {
        return d.MissingPDFException;
      } }), Object.defineProperty(k, "OPS", { enumerable: !0, get: function() {
        return d.OPS;
      } }), Object.defineProperty(k, "PDFDataRangeTransport", { enumerable: !0, get: function() {
        return t.PDFDataRangeTransport;
      } }), Object.defineProperty(k, "PDFDateString", { enumerable: !0, get: function() {
        return e.PDFDateString;
      } }), Object.defineProperty(k, "PDFWorker", { enumerable: !0, get: function() {
        return t.PDFWorker;
      } }), Object.defineProperty(k, "PasswordResponses", { enumerable: !0, get: function() {
        return d.PasswordResponses;
      } }), Object.defineProperty(k, "PermissionFlag", { enumerable: !0, get: function() {
        return d.PermissionFlag;
      } }), Object.defineProperty(k, "PixelsPerInch", { enumerable: !0, get: function() {
        return e.PixelsPerInch;
      } }), Object.defineProperty(k, "PromiseCapability", { enumerable: !0, get: function() {
        return d.PromiseCapability;
      } }), Object.defineProperty(k, "RenderingCancelledException", { enumerable: !0, get: function() {
        return e.RenderingCancelledException;
      } }), Object.defineProperty(k, "SVGGraphics", { enumerable: !0, get: function() {
        return h.SVGGraphics;
      } }), Object.defineProperty(k, "UnexpectedResponseException", { enumerable: !0, get: function() {
        return d.UnexpectedResponseException;
      } }), Object.defineProperty(k, "Util", { enumerable: !0, get: function() {
        return d.Util;
      } }), Object.defineProperty(k, "VerbosityLevel", { enumerable: !0, get: function() {
        return d.VerbosityLevel;
      } }), Object.defineProperty(k, "XfaLayer", { enumerable: !0, get: function() {
        return l.XfaLayer;
      } }), Object.defineProperty(k, "build", { enumerable: !0, get: function() {
        return t.build;
      } }), Object.defineProperty(k, "createValidAbsoluteUrl", { enumerable: !0, get: function() {
        return d.createValidAbsoluteUrl;
      } }), Object.defineProperty(k, "getDocument", { enumerable: !0, get: function() {
        return t.getDocument;
      } }), Object.defineProperty(k, "getFilenameFromUrl", { enumerable: !0, get: function() {
        return e.getFilenameFromUrl;
      } }), Object.defineProperty(k, "getPdfFilenameFromUrl", { enumerable: !0, get: function() {
        return e.getPdfFilenameFromUrl;
      } }), Object.defineProperty(k, "getXfaPageViewport", { enumerable: !0, get: function() {
        return e.getXfaPageViewport;
      } }), Object.defineProperty(k, "isDataScheme", { enumerable: !0, get: function() {
        return e.isDataScheme;
      } }), Object.defineProperty(k, "isPdfFile", { enumerable: !0, get: function() {
        return e.isPdfFile;
      } }), Object.defineProperty(k, "loadScript", { enumerable: !0, get: function() {
        return e.loadScript;
      } }), Object.defineProperty(k, "normalizeUnicode", { enumerable: !0, get: function() {
        return d.normalizeUnicode;
      } }), Object.defineProperty(k, "renderTextLayer", { enumerable: !0, get: function() {
        return a.renderTextLayer;
      } }), Object.defineProperty(k, "setLayerDimensions", { enumerable: !0, get: function() {
        return e.setLayerDimensions;
      } }), Object.defineProperty(k, "shadow", { enumerable: !0, get: function() {
        return d.shadow;
      } }), Object.defineProperty(k, "updateTextLayer", { enumerable: !0, get: function() {
        return a.updateTextLayer;
      } }), Object.defineProperty(k, "version", { enumerable: !0, get: function() {
        return t.version;
      } });
      var d = __w_pdfjs_require__(1), t = __w_pdfjs_require__(138), e = __w_pdfjs_require__(142), a = __w_pdfjs_require__(161), y = __w_pdfjs_require__(162), w = __w_pdfjs_require__(141), O = __w_pdfjs_require__(165), p = __w_pdfjs_require__(149), h = __w_pdfjs_require__(168), l = __w_pdfjs_require__(167);
    })(), __webpack_exports__;
  })());
})(pdf_min$2);
var pdf_minExports = pdf_min$2.exports;
const pdf_min = /* @__PURE__ */ getDefaultExportFromCjs(pdf_minExports), pdf_min$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pdf_min
}, Symbol.toStringTag, { value: "Module" }));
export {
  pdf_min$1 as p
};
