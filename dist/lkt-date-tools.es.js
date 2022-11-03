import { lpad as s } from "lkt-string-tools";
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
function l({ date: e = new Date(), format: o = "" }) {
  function c(n, r) {
    return t[n] ? t[n]() : r;
  }
  const t = {
    d() {
      return s(t.j(), 2, "0");
    },
    D() {
      return t.l().slice(0, 3);
    },
    j() {
      return e.getDate();
    },
    l() {
      return `${i[t.w()]}day`;
    },
    N() {
      return t.w() || 7;
    },
    S() {
      const n = t.j();
      let r = n % 10;
      return r <= 3 && parseInt(String(n % 100 / 10), 10) === 1 && (r = 0), ["st", "nd", "rd"][r - 1] || "th";
    },
    w() {
      return e.getDay();
    },
    z() {
      const n = new Date(t.Y(), t.n() - 1, t.j()), r = new Date(t.Y(), 0, 1);
      return Math.round((n - r) / 864e5);
    },
    W() {
      const n = new Date(t.Y(), t.n() - 1, t.j() - t.N() + 3), r = new Date(n.getFullYear(), 0, 4);
      return s(1 + Math.round((n - r) / 864e5 / 7), 2, "0");
    },
    F() {
      return i[6 + t.n()];
    },
    m() {
      return s(t.n(), 2, "0");
    },
    M() {
      return t.F().slice(0, 3);
    },
    n() {
      return e.getMonth() + 1;
    },
    t() {
      return new Date(t.Y(), t.n(), 0).getDate();
    },
    L() {
      const n = t.Y();
      return n % 4 === 0 & n % 100 !== 0 | n % 400 === 0;
    },
    o() {
      const n = t.n(), r = t.W();
      return t.Y() + (n === 12 && r < 9 ? 1 : n === 1 && r > 9 ? -1 : 0);
    },
    Y() {
      return e.getFullYear();
    },
    y() {
      return t.Y().toString().slice(-2);
    },
    a() {
      return e.getHours() > 11 ? "pm" : "am";
    },
    A() {
      return t.a().toUpperCase();
    },
    B() {
      const n = e.getUTCHours() * 3600, r = e.getUTCMinutes() * 60, u = e.getUTCSeconds();
      return s(Math.floor((n + r + u + 3600) / 86.4) % 1e3, 3, "0");
    },
    g() {
      return t.G() % 12 || 12;
    },
    G() {
      return e.getHours();
    },
    h() {
      return s(t.g(), 2, "0");
    },
    H() {
      return s(t.G(), 2, "0");
    },
    i() {
      return s(e.getMinutes(), 2, "0");
    },
    s() {
      return s(e.getSeconds(), 2, "0");
    },
    u() {
      return s(e.getMilliseconds() * 1e3, 6, "0");
    },
    e() {
      const n = "Not supported (see source code of date() for timezone on how to add support)";
      throw new Error(n);
    },
    I() {
      const n = new Date(t.Y(), 0), r = Date.UTC(t.Y(), 0), u = new Date(t.Y(), 6), D = Date.UTC(t.Y(), 6);
      return n - r !== u - D ? 1 : 0;
    },
    O() {
      const n = e.getTimezoneOffset(), r = Math.abs(n);
      return (n > 0 ? "-" : "+") + s(Math.floor(r / 60) * 100 + r % 60, 4, "0");
    },
    P() {
      const n = t.O();
      return `${n.substring(0, 3)}:${n.substring(3, 2)}`;
    },
    T() {
      return "UTC";
    },
    Z() {
      return -e.getTimezoneOffset() * 60;
    },
    c() {
      return "Y-m-d\\TH:i:sP".replace(a, c);
    },
    r() {
      return "D, d M Y H:i:s O".replace(a, c);
    },
    U() {
      return e / 1e3 | 0;
    }
  };
  return o.replace(a, c);
}
function T(e) {
  return e === void 0 ? new Date() : e instanceof Date ? new Date(e) : new Date(e * 1e3);
}
function m(e) {
  const o = e.split(/\D/);
  return new Date(o[0], o[1] - 1, o[2], o[3], o[4], o[5]);
}
const Y = (e, o = void 0) => l({ date: T(o), format: e }), f = (e) => e !== "" ? new Date(`${e}T00:00:00Z`) : null, p = (e) => e != null && Object.prototype.toString.call(e) === "[object Date]" && !isNaN(e.getTime()), M = () => new Date().getTime() / 1e3, d = () => new Date().getTime(), S = () => Date.now(), b = () => g, h = (e) => e * 1e3, O = (e) => e.getTime() / 1e3;
export {
  Y as date,
  O as dateToTimestamp,
  T as getDateByTimestamp,
  b as getOneYearInSeconds,
  S as getStampInMilliseconds,
  p as isDate,
  m as isoToDate,
  h as secondsToMilliseconds,
  M as time,
  d as timeInMilliseconds,
  f as ymdToDate
};
