import { lpad as u } from "lkt-string-tools";
const g = 31536e3, i = [
  "Sun",
  "Mon",
  "Tues",
  "Wednes",
  "Thurs",
  "Fri",
  "Satur",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], a = /\\?(.?)/gi;
function l({ date: t = new Date(), format: o = "" }) {
  function c(r, n) {
    return e[r] ? e[r]() : n;
  }
  const e = {
    d() {
      return u(e.j(), 2, "0");
    },
    D() {
      return e.l().slice(0, 3);
    },
    j() {
      return t.getDate();
    },
    l() {
      return `${i[e.w()]}day`;
    },
    N() {
      return e.w() || 7;
    },
    S() {
      const r = e.j();
      let n = r % 10;
      return n <= 3 && parseInt(String(r % 100 / 10), 10) === 1 && (n = 0), ["st", "nd", "rd"][n - 1] || "th";
    },
    w() {
      return t.getDay();
    },
    z() {
      const r = new Date(e.Y(), e.n() - 1, e.j()), n = new Date(e.Y(), 0, 1);
      return Math.round((r - n) / 864e5);
    },
    W() {
      const r = new Date(e.Y(), e.n() - 1, e.j() - e.N() + 3), n = new Date(r.getFullYear(), 0, 4);
      return u(1 + Math.round((r - n) / 864e5 / 7), 2, "0");
    },
    F() {
      return i[6 + e.n()];
    },
    m() {
      return u(e.n(), 2, "0");
    },
    M() {
      return e.F().slice(0, 3);
    },
    n() {
      return t.getMonth() + 1;
    },
    t() {
      return new Date(e.Y(), e.n(), 0).getDate();
    },
    L() {
      const r = e.Y();
      return r % 4 === 0 & r % 100 !== 0 | r % 400 === 0;
    },
    o() {
      const r = e.n(), n = e.W();
      return e.Y() + (r === 12 && n < 9 ? 1 : r === 1 && n > 9 ? -1 : 0);
    },
    Y() {
      return t.getFullYear();
    },
    y() {
      return e.Y().toString().slice(-2);
    },
    a() {
      return t.getHours() > 11 ? "pm" : "am";
    },
    A() {
      return e.a().toUpperCase();
    },
    B() {
      const r = t.getUTCHours() * 3600, n = t.getUTCMinutes() * 60, s = t.getUTCSeconds();
      return u(Math.floor((r + n + s + 3600) / 86.4) % 1e3, 3, "0");
    },
    g() {
      return e.G() % 12 || 12;
    },
    G() {
      return t.getHours();
    },
    h() {
      return u(e.g(), 2, "0");
    },
    H() {
      return u(e.G(), 2, "0");
    },
    i() {
      return u(t.getMinutes(), 2, "0");
    },
    s() {
      return u(t.getSeconds(), 2, "0");
    },
    u() {
      return u(t.getMilliseconds() * 1e3, 6, "0");
    },
    e() {
      const r = "Not supported (see source code of date() for timezone on how to add support)";
      throw new Error(r);
    },
    I() {
      const r = new Date(e.Y(), 0), n = Date.UTC(e.Y(), 0), s = new Date(e.Y(), 6), D = Date.UTC(e.Y(), 6);
      return r - n !== s - D ? 1 : 0;
    },
    O() {
      const r = t.getTimezoneOffset(), n = Math.abs(r);
      return (r > 0 ? "-" : "+") + u(Math.floor(n / 60) * 100 + n % 60, 4, "0");
    },
    P() {
      const r = e.O();
      return `${r.substring(0, 3)}:${r.substring(3, 2)}`;
    },
    T() {
      return "UTC";
    },
    Z() {
      return -t.getTimezoneOffset() * 60;
    },
    c() {
      return "Y-m-d\\TH:i:sP".replace(a, c);
    },
    r() {
      return "D, d M Y H:i:s O".replace(a, c);
    },
    U() {
      return t / 1e3 | 0;
    }
  };
  return o.replace(a, c);
}
function T(t) {
  return t === void 0 ? new Date() : t instanceof Date ? new Date(t) : new Date(t * 1e3);
}
function Y(t) {
  const o = t.split(/\D/);
  return new Date(o[0], o[1] - 1, o[2], o[3], o[4], o[5]);
}
const f = (t, o = void 0) => l({ date: T(o), format: t }), m = (t) => t !== "" ? new Date(`${t}T00:00:00Z`) : null, p = () => new Date().getTime(), M = () => Date.now(), d = () => g, S = (t) => t * 1e3, h = (t) => t.getTime() / 1e3;
export {
  f as date,
  h as dateToTimestamp,
  T as getDateByTimestamp,
  d as getOneYearInSeconds,
  M as getStampInMilliseconds,
  Y as isoToDate,
  S as secondsToMilliseconds,
  p as time,
  m as ymdToDate
};
