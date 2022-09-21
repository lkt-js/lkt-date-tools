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
  function c(r, n) {
    return t[r] ? t[r]() : n;
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
      const r = t.j();
      let n = r % 10;
      return n <= 3 && parseInt(String(r % 100 / 10), 10) === 1 && (n = 0), ["st", "nd", "rd"][n - 1] || "th";
    },
    w() {
      return e.getDay();
    },
    z() {
      const r = new Date(t.Y(), t.n() - 1, t.j()), n = new Date(t.Y(), 0, 1);
      return Math.round((r - n) / 864e5);
    },
    W() {
      const r = new Date(t.Y(), t.n() - 1, t.j() - t.N() + 3), n = new Date(r.getFullYear(), 0, 4);
      return s(1 + Math.round((r - n) / 864e5 / 7), 2, "0");
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
      const r = t.Y();
      return r % 4 === 0 & r % 100 !== 0 | r % 400 === 0;
    },
    o() {
      const r = t.n(), n = t.W();
      return t.Y() + (r === 12 && n < 9 ? 1 : r === 1 && n > 9 ? -1 : 0);
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
      const r = e.getUTCHours() * 3600, n = e.getUTCMinutes() * 60, u = e.getUTCSeconds();
      return s(Math.floor((r + n + u + 3600) / 86.4) % 1e3, 3, "0");
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
      const r = "Not supported (see source code of date() for timezone on how to add support)";
      throw new Error(r);
    },
    I() {
      const r = new Date(t.Y(), 0), n = Date.UTC(t.Y(), 0), u = new Date(t.Y(), 6), D = Date.UTC(t.Y(), 6);
      return r - n !== u - D ? 1 : 0;
    },
    O() {
      const r = e.getTimezoneOffset(), n = Math.abs(r);
      return (r > 0 ? "-" : "+") + s(Math.floor(n / 60) * 100 + n % 60, 4, "0");
    },
    P() {
      const r = t.O();
      return `${r.substring(0, 3)}:${r.substring(3, 2)}`;
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
function Y(e) {
  const o = e.split(/\D/);
  return new Date(o[0], o[1] - 1, o[2], o[3], o[4], o[5]);
}
const f = (e, o = void 0) => l({ date: T(o), format: e }), m = (e) => e !== "" ? new Date(`${e}T00:00:00Z`) : null, p = (e) => e != null && Object.prototype.toString.call(e) === "[object Date]" && !isNaN(e.getTime()), M = () => new Date().getTime(), d = () => Date.now(), S = () => g, b = (e) => e * 1e3, h = (e) => e.getTime() / 1e3;
export {
  f as date,
  h as dateToTimestamp,
  T as getDateByTimestamp,
  S as getOneYearInSeconds,
  d as getStampInMilliseconds,
  p as isDate,
  Y as isoToDate,
  b as secondsToMilliseconds,
  M as time,
  m as ymdToDate
};
