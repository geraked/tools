export default class Util {

    static copy(element) {
        element.select();
        element.setSelectionRange(0, 99999);
        document.execCommand('copy');
    }

    static addCss(url, id) {
        if (!document.getElementById(id)) {
            let head = document.getElementsByTagName('head')[0];
            let link = document.createElement('link');
            link.id = id;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = url;
            link.media = 'all';
            head.appendChild(link);
        }
    }

    static clearModal() {
        document.body.classList.remove('modal-open');
        document.body.removeAttribute('style');
        document.body.removeAttribute('data-bs-padding-right');
        document.querySelectorAll('.modal-backdrop').forEach(e => e.remove());
    }

    static dateParts(date, locale, options) {
        let ps = {};
        let f = new Intl.DateTimeFormat(locale, options);
        f.formatToParts(date).forEach(p => ps[p.type] = p.value);
        return ps;
    }

    static toPersianDigits(str) {
        const en_digits = '0123456789'.split('');
        const fa_digits = '۰۱۲۳۴۵۶۷۸۹'.split('');
        const ar_digits = '٠١٢٣٤٥٦٧٨٩'.split('');
        en_digits.forEach((n, i) => str = str.replaceAll(n, fa_digits[i]));
        ar_digits.forEach((n, i) => str = str.replaceAll(n, fa_digits[i]));
        return str;
    }

    static toEnglishDigits(str) {
        const en_digits = '0123456789'.split('');
        const fa_digits = '۰۱۲۳۴۵۶۷۸۹'.split('');
        const ar_digits = '٠١٢٣٤٥٦٧٨٩'.split('');
        fa_digits.forEach((n, i) => str = str.replaceAll(n, en_digits[i]));
        ar_digits.forEach((n, i) => str = str.replaceAll(n, en_digits[i]));
        return str;
    }
}