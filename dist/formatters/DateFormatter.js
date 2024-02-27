import { lpad } from 'lkt-string-tools';
import { DATE_FORMAT_CHARS, DATE_TEXTS } from '../constants';
export function DateFormatter({ date = new Date(), format = '' }) {
    function dateCharFormatter(t, s) {
        return f[t] ? f[t]() : s;
    }
    const f = {
        // Day
        d() {
            // Day of month w/leading 0; 01..31
            return lpad(f.j(), 2, '0');
        },
        D() {
            // Shorthand day name; Mon...Sun
            return f.l().slice(0, 3);
        },
        j() {
            // Day of month; 1..31
            return date.getDate();
        },
        l() {
            // Full day name; Monday...Sunday
            return `${DATE_TEXTS[f.w()]}day`;
        },
        N() {
            // ISO-8601 day of week; 1[Mon]..7[Sun]
            return f.w() || 7;
        },
        S() {
            // Ordinal suffix for day of month; st, nd, rd, th
            const j = f.j();
            let i = j % 10;
            if (i <= 3 && parseInt(String((j % 100) / 10), 10) === 1) {
                i = 0;
            }
            return ['st', 'nd', 'rd'][i - 1] || 'th';
        },
        w() {
            // Day of week; 0[Sun]..6[Sat]
            return date.getDay();
        },
        z() {
            // Day of year; 0..365
            const a = new Date(f.Y(), f.n() - 1, f.j());
            const b = new Date(f.Y(), 0, 1);
            // @ts-ignore
            return Math.round((a - b) / 864e5);
        },
        // Week
        W() {
            // ISO-8601 week number
            const a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
            const b = new Date(a.getFullYear(), 0, 4);
            // @ts-ignore
            return lpad(1 + Math.round((a - b) / 864e5 / 7), 2, '0');
        },
        // Month
        F() {
            // Full month name; January...December
            return DATE_TEXTS[6 + f.n()];
        },
        m() {
            // Month w/leading 0; 01...12
            return lpad(f.n(), 2, '0');
        },
        M() {
            // Shorthand month name; Jan...Dec
            return f.F().slice(0, 3);
        },
        n() {
            // Month; 1...12
            return date.getMonth() + 1;
        },
        t() {
            // Days in month; 28...31
            return new Date(f.Y(), f.n(), 0).getDate();
        },
        // Year
        L() {
            // Is leap year?; 0 or 1
            const j = f.Y();
            // @ts-ignore
            return ((j % 4 === 0) & (j % 100 !== 0)) | (j % 400 === 0);
        },
        o() {
            // ISO-8601 year
            const n = f.n();
            const W = f.W();
            const Y = f.Y();
            return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
        },
        Y() {
            // Full year; e.g. 1980...2010
            return date.getFullYear();
        },
        y() {
            // Last two digits of year; 00...99
            return f.Y().toString().slice(-2);
        },
        // Time
        a() {
            // am or pm
            return date.getHours() > 11 ? 'pm' : 'am';
        },
        A() {
            // AM or PM
            return f.a().toUpperCase();
        },
        B() {
            // Swatch Internet time; 000..999
            const H = date.getUTCHours() * 36e2;
            // Hours
            const i = date.getUTCMinutes() * 60;
            // Minutes
            // Seconds
            const s = date.getUTCSeconds();
            return lpad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3, '0');
        },
        g() {
            // 12-Hours; 1..12
            return f.G() % 12 || 12;
        },
        G() {
            // 24-Hours; 0..23
            return date.getHours();
        },
        h() {
            // 12-Hours w/leading 0; 01..12
            return lpad(f.g(), 2, '0');
        },
        H() {
            // 24-Hours w/leading 0; 00..23
            return lpad(f.G(), 2, '0');
        },
        i() {
            // Minutes w/leading 0; 00..59
            return lpad(date.getMinutes(), 2, '0');
        },
        s() {
            // Seconds w/leading 0; 00..59
            return lpad(date.getSeconds(), 2, '0');
        },
        u() {
            // Microseconds; 000000-999000
            return lpad(date.getMilliseconds() * 1000, 6, '0');
        },
        // Timezone
        e() {
            // Timezone identifier; e.g. Atlantic/Azores, ...
            // The following works, but requires inclusion of the very large
            // timezone_abbreviations_list() function.
            /*              return that.date_default_timezone_get();
             */
            const msg = 'Not supported (see source code of date() for timezone on how to add support)';
            throw new Error(msg);
        },
        I() {
            // DST observed?; 0 or 1
            // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
            // If they are not equal, then DST is observed.
            const a = new Date(f.Y(), 0);
            // Jan 1
            const c = Date.UTC(f.Y(), 0);
            // Jan 1 UTC
            const b = new Date(f.Y(), 6);
            // Jul 1
            // Jul 1 UTC
            const d = Date.UTC(f.Y(), 6);
            // @ts-ignore
            return a - c !== b - d ? 1 : 0;
        },
        O() {
            // Difference to GMT in hour format; e.g. +0200
            const tzo = date.getTimezoneOffset();
            const a = Math.abs(tzo);
            return ((tzo > 0 ? '-' : '+') +
                lpad(Math.floor(a / 60) * 100 + (a % 60), 4, '0'));
        },
        P() {
            // Difference to GMT w/colon; e.g. +02:00
            const O = f.O();
            return `${O.substring(0, 3)}:${O.substring(3, 2)}`;
        },
        T() {
            // The following works, but requires inclusion of the very
            // large timezone_abbreviations_list() function.
            return 'UTC';
        },
        Z() {
            // Timezone offset in seconds (-43200...50400)
            return -date.getTimezoneOffset() * 60;
        },
        // Full Date/Time
        c() {
            // ISO-8601 date.
            return 'Y-m-d\\TH:i:sP'.replace(DATE_FORMAT_CHARS, dateCharFormatter);
        },
        r() {
            // RFC 2822
            return 'D, d M Y H:i:s O'.replace(DATE_FORMAT_CHARS, dateCharFormatter);
        },
        U() {
            // Seconds since UNIX epoch
            //@ts-ignore
            return (date / 1000) | 0;
        },
    };
    return format.replace(DATE_FORMAT_CHARS, dateCharFormatter);
}
