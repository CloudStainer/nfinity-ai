var D = Object.defineProperty;
var q = (t, e, n) =>
  e in t
    ? D(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var f = (t, e, n) => q(t, typeof e != "symbol" ? e + "" : e, n);
function B() {}
const ot = (t) => t;
function G(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function I(t) {
  return t();
}
function ut() {
  return Object.create(null);
}
function z(t) {
  t.forEach(I);
}
function at(t) {
  return typeof t == "function";
}
function ft(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let m;
function _t(t, e) {
  return t === e
    ? !0
    : (m || (m = document.createElement("a")), (m.href = e), t === m.href);
}
function ht(t) {
  return Object.keys(t).length === 0;
}
function F(t, ...e) {
  if (t == null) {
    for (const i of e) i(void 0);
    return B;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function dt(t, e, n) {
  t.$$.on_destroy.push(F(e, n));
}
function mt(t, e, n, i) {
  if (t) {
    const l = j(t, e, n, i);
    return t[0](l);
  }
}
function j(t, e, n, i) {
  return t[1] && i ? G(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function pt(t, e, n, i) {
  if (t[2] && i) {
    const l = t[2](i(n));
    if (e.dirty === void 0) return l;
    if (typeof l == "object") {
      const r = [],
        s = Math.max(e.dirty.length, l.length);
      for (let o = 0; o < s; o += 1) r[o] = e.dirty[o] | l[o];
      return r;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function yt(t, e, n, i, l, r) {
  if (l) {
    const s = j(e, n, i, r);
    t.p(s, l);
  }
}
function gt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function bt(t) {
  return t ?? "";
}
let y = !1;
function xt() {
  y = !0;
}
function wt() {
  y = !1;
}
function R(t, e, n, i) {
  for (; t < e; ) {
    const l = t + ((e - t) >> 1);
    n(l) <= i ? (t = l + 1) : (e = l);
  }
  return t;
}
function U(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const c = [];
    for (let u = 0; u < e.length; u++) {
      const a = e[u];
      a.claim_order !== void 0 && c.push(a);
    }
    e = c;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let l = 0;
  for (let c = 0; c < e.length; c++) {
    const u = e[c].claim_order,
      a =
        (l > 0 && e[n[l]].claim_order <= u
          ? l + 1
          : R(1, l, (C) => e[n[C]].claim_order, u)) - 1;
    i[c] = n[a] + 1;
    const A = a + 1;
    (n[A] = c), (l = Math.max(A, l));
  }
  const r = [],
    s = [];
  let o = e.length - 1;
  for (let c = n[l] + 1; c != 0; c = i[c - 1]) {
    for (r.push(e[c - 1]); o >= c; o--) s.push(e[o]);
    o--;
  }
  for (; o >= 0; o--) s.push(e[o]);
  r.reverse(), s.sort((c, u) => c.claim_order - u.claim_order);
  for (let c = 0, u = 0; c < s.length; c++) {
    for (; u < r.length && s[c].claim_order >= r[u].claim_order; ) u++;
    const a = u < r.length ? r[u] : null;
    t.insertBefore(s[c], a);
  }
}
function W(t, e) {
  if (y) {
    for (
      U(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function J(t, e, n) {
  t.insertBefore(e, n || null);
}
function K(t, e, n) {
  y && !n
    ? W(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function E(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Et(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function M(t) {
  return document.createElement(t);
}
function Q(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function v(t) {
  return document.createTextNode(t);
}
function Tt() {
  return v(" ");
}
function Nt() {
  return v("");
}
function vt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function At(t) {
  return function (e) {
    e.target === this && t.call(this, e);
  };
}
function H(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const V = ["width", "height"];
function X(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null
      ? t.removeAttribute(i)
      : i === "style"
      ? (t.style.cssText = e[i])
      : i === "__value"
      ? (t.value = t[i] = e[i])
      : n[i] && n[i].set && V.indexOf(i) === -1
      ? (t[i] = e[i])
      : H(t, i, e[i]);
}
function Y(t, e) {
  Object.keys(e).forEach((n) => {
    Z(t, n, e[n]);
  });
}
function Z(t, e, n) {
  const i = e.toLowerCase();
  i in t
    ? (t[i] = typeof t[i] == "boolean" && n === "" ? !0 : n)
    : e in t
    ? (t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n)
    : H(t, e, n);
}
function kt(t) {
  return /-/.test(t) ? Y : X;
}
function Lt(t) {
  return t.dataset.svelteH;
}
function jt(t) {
  return Array.from(t.childNodes);
}
function P(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function O(t, e, n, i, l = !1) {
  P(t);
  const r = (() => {
    for (let s = t.claim_info.last_index; s < t.length; s++) {
      const o = t[s];
      if (e(o)) {
        const c = n(o);
        return (
          c === void 0 ? t.splice(s, 1) : (t[s] = c),
          l || (t.claim_info.last_index = s),
          o
        );
      }
    }
    for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
      const o = t[s];
      if (e(o)) {
        const c = n(o);
        return (
          c === void 0 ? t.splice(s, 1) : (t[s] = c),
          l
            ? c === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = s),
          o
        );
      }
    }
    return i();
  })();
  return (
    (r.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    r
  );
}
function $(t, e, n, i) {
  return O(
    t,
    (l) => l.nodeName === e,
    (l) => {
      const r = [];
      for (let s = 0; s < l.attributes.length; s++) {
        const o = l.attributes[s];
        n[o.name] || r.push(o.name);
      }
      r.forEach((s) => l.removeAttribute(s));
    },
    () => i(e)
  );
}
function Mt(t, e, n) {
  return $(t, e, n, M);
}
function tt(t, e) {
  return O(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => v(e),
    !0
  );
}
function Ht(t) {
  return tt(t, " ");
}
function k(t, e, n) {
  for (let i = n; i < t.length; i += 1) {
    const l = t[i];
    if (l.nodeType === 8 && l.textContent.trim() === e) return i;
  }
  return -1;
}
function Pt(t, e) {
  const n = k(t, "HTML_TAG_START", 0),
    i = k(t, "HTML_TAG_END", n + 1);
  if (n === -1 || i === -1) return new b(e);
  P(t);
  const l = t.splice(n, i - n + 1);
  E(l[0]), E(l[l.length - 1]);
  const r = l.slice(1, l.length - 1);
  if (r.length === 0) return new b(e);
  for (const s of r)
    (s.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1);
  return new b(e, r);
}
function Ot(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function St(t, e, n, i) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
}
function Ct(t, e, n) {
  t.classList.toggle(e, !!n);
}
function et(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
class nt {
  constructor(e = !1) {
    f(this, "is_svg", !1);
    f(this, "e");
    f(this, "n");
    f(this, "t");
    f(this, "a");
    (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e ||
      (this.is_svg
        ? (this.e = Q(n.nodeName))
        : (this.e = M(n.nodeType === 11 ? "TEMPLATE" : n.nodeName)),
      (this.t = n.tagName !== "TEMPLATE" ? n : n.content),
      this.c(e)),
      this.i(i);
  }
  h(e) {
    (this.e.innerHTML = e),
      (this.n = Array.from(
        this.e.nodeName === "TEMPLATE"
          ? this.e.content.childNodes
          : this.e.childNodes
      ));
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) J(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(E);
  }
}
class b extends nt {
  constructor(n = !1, i) {
    super(n);
    f(this, "l");
    (this.e = this.n = null), (this.l = i);
  }
  c(n) {
    this.l ? (this.n = this.l) : super.c(n);
  }
  i(n) {
    for (let i = 0; i < this.n.length; i += 1) K(this.t, this.n[i], n);
  }
}
function Dt(t, e) {
  return new t(e);
}
let p;
function x(t) {
  p = t;
}
function g() {
  if (!p) throw new Error("Function called outside component initialization");
  return p;
}
function qt(t) {
  g().$$.on_mount.push(t);
}
function Bt(t) {
  g().$$.after_update.push(t);
}
function Gt(t) {
  g().$$.on_destroy.push(t);
}
function It() {
  const t = g();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const r = et(e, n, { cancelable: i });
      return (
        l.slice().forEach((s) => {
          s.call(t, r);
        }),
        !r.defaultPrevented
      );
    }
    return !0;
  };
}
const d = [],
  L = [];
let h = [];
const T = [],
  S = Promise.resolve();
let N = !1;
function it() {
  N || ((N = !0), S.then(st));
}
function zt() {
  return it(), S;
}
function lt(t) {
  h.push(t);
}
function Ft(t) {
  T.push(t);
}
const w = new Set();
let _ = 0;
function st() {
  if (_ !== 0) return;
  const t = p;
  do {
    try {
      for (; _ < d.length; ) {
        const e = d[_];
        _++, x(e), ct(e.$$);
      }
    } catch (e) {
      throw ((d.length = 0), (_ = 0), e);
    }
    for (x(null), d.length = 0, _ = 0; L.length; ) L.pop()();
    for (let e = 0; e < h.length; e += 1) {
      const n = h[e];
      w.has(n) || (w.add(n), n());
    }
    h.length = 0;
  } while (d.length);
  for (; T.length; ) T.pop()();
  (N = !1), w.clear(), x(t);
}
function ct(t) {
  if (t.fragment !== null) {
    t.update(), z(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(lt);
  }
}
function Rt(t) {
  const e = [],
    n = [];
  h.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))),
    n.forEach((i) => i()),
    (h = e);
}
export {
  ot as $,
  z as A,
  ut as B,
  st as C,
  at as D,
  ht as E,
  lt as F,
  Rt as G,
  p as H,
  x as I,
  I as J,
  d as K,
  it as L,
  xt as M,
  wt as N,
  Gt as O,
  b as P,
  Pt as Q,
  Lt as R,
  vt as S,
  At as T,
  G as U,
  kt as V,
  Ft as W,
  Et as X,
  _t as Y,
  It as Z,
  bt as _,
  pt as a,
  Ct as a0,
  Tt as b,
  mt as c,
  Mt as d,
  M as e,
  jt as f,
  gt as g,
  tt as h,
  E as i,
  Ht as j,
  K as k,
  W as l,
  Ot as m,
  B as n,
  dt as o,
  Nt as p,
  Bt as q,
  qt as r,
  ft as s,
  v as t,
  yt as u,
  H as v,
  St as w,
  L as x,
  Dt as y,
  zt as z,
};
