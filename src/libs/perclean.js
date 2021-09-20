const en_digits = '0123456789'.split('');
const fa_digits = '۰۱۲۳۴۵۶۷۸۹'.split('');
const ar_digits = '٠١٢٣٤٥٦٧٨٩'.split('');

const words = [
    'رسما،رسماً',
    'مثلا،مثلاً',
    'حتما،حتماً',
    'اکثرا،اکثراً',
    'قبلا،قبلاً',
    'معمولا،معمولاً',
    'لطفا،لطفاً',
    'احتراما،احتراماً',
    'ناچارا،ناچاراً',
    'گاها،گاهاً',
    'اساسا،اساساً',
    'اصولا،اصولاً',
    'مجددا،مجدداً',
    'کاملا،کاملاً',
    'مخصوصا،مخصوصاً',
    'خصوصا،خصوصاً',
    'اتفاقا،اتفاقاً',
    'عمدا،عمداً',
    'سهوا،سهواً',
    'حقیقتا،حقیقتاً',
    'غالبا،غالباً',
    'حدودا،حدوداً',
    'واقعا،واقعاً',
    'کلا،کلاً',
    'ذاتا،ذاتاً',
    'مرتبا،مرتباً',
    'دوما،دوماً',
    'ثانیا،ثانیاً',
    'مسلما،مسلماً',
    'مکررا،مکرراً',
    'عموما،عموماً',
    'ضمنا،ضمناً',
    'اصلا،اصلاً',
    'کتبا،کتباً',
    'شفاها،شفاهاً',
    'متعاقبا،متعاقباً',
    'دقیقا،دقیقاً',
    'جسارتا،جسارتاً',
    'اجالتا،اجالتاً',
    'عمیقا،عمیقاً',

    'بسمه تعالی،باسمه تعالی',
    'بسم تعالی،باسمه تعالی',
    'باسلام،با سلام',
    'باتشکر،با تشکر',
    'بااحترام،با احترام',
    'گزارشات،گزارش‌ها',
    'ناچاراً،به‌ناچار',
    'گاهاً،گاهی',
    'دوماً،دوم اینکه',
    'آئین،آیین',
    'روئین،رویین',
    'بفرمائید،بفرمایید',
    'پائیز،پاییز',
    'سائیدن،ساییدن',
    'آئینه،آیینه',
    'رییس،رئیس',
    'جزیی،جزئی',
    'مریی،مرئی',
    'علایم،علائم',
    'مساله،مسئله',
    'مسأله،مسئله',
    'انشاالله،ان‌شاءالله',
    'انشا الله،ان‌شاءالله',
    'سوال،سؤال',
    'تاسف،تأسف',
];

const bes = [
    'نام',
    'عنوان',
    'سوی',
    'طرف',
    'دیدار',
];

export default class PerClean {

    static clean(str) {
        str = this.removeExteraSpaces(str);
        str = this.convertArabicCharsToPersian(str);
        str = this.convertNumsToEnglish(str);
        str = this.fixSigns(str);
        str = this.fixConjunction(str);
        str = this.fixWords(str);
        str = this.fixBes(str);
        return str;
    }

    static convertNumsToPersian(str) {
        en_digits.forEach((n, i) => str = str.replaceAll(n, fa_digits[i]));
        ar_digits.forEach((n, i) => str = str.replaceAll(n, fa_digits[i]));
        return str;
    }

    static convertNumsToEnglish(str) {
        fa_digits.forEach((n, i) => str = str.replaceAll(n, en_digits[i]));
        ar_digits.forEach((n, i) => str = str.replaceAll(n, en_digits[i]));
        return str;
    }

    static convertArabicCharsToPersian(str) {
        str = str.replaceAll('ي', 'ی');
        str = str.replaceAll('ك', 'ک');
        return str;
    }

    static removeExteraSpaces(str) {
        str = str.trim();
        str = str.replace(/[\u00AD\u200F\u00AC]/g, '\u200C'); // half-space
        str = str.replace(/[\v\f\r \u00a0\u2000-\u200b\u2028-\u2029\u3000]+/g, ' ');
        str = str.replace(/[\u200C]+/g, '\u200C');
        return str;
    }

    static fixSigns(str) {
        str = str.replace(/([A-Za-z0-9_\-+/@#$%=]+)/g, ' $1 ');
        str = str.replace(/[ ]+/g, ' ');
        str = str.replace(/ ?([.:،؛)\]}»؟!?,;]+)/g, '$1 ');
        str = str.replace(/([(«[{]) ?/g, ' $1');
        str = str.replace(/[ ]+/g, ' ');
        return str;
    }

    static fixConjunction(str) {
        str = str.replace(/\u0020\u0647\u0627\u06CC\u06CC([.:،؛)\]}»؟!?,;]|\s|$)/g, '\u200C\u0647\u0627\u06CC\u06CC$1'); // هایی
        str = str.replace(/\u0020\u0647\u0627\u06CC([.:،؛)\]}»؟!?,;]|\s|$)/g, '\u200C\u0647\u0627\u06CC$1'); // های
        str = str.replace(/\u0020\u0647\u0627([.:،؛)\]}»؟!?,;]|\s|$)/g, '\u200C\u0647\u0627$1'); // ها
        str = str.replace(/\u0647\u0020\u0627\u06CC([.:،؛)\]}»؟!?,;]|\s|$)/g, '\u0647\u200C\u0627\u06CC$1'); // ای
        str = str.replace(/(^|\s\u0646?)\u0645\u06CC\u0020/g, '$1\u0645\u06CC\u200C'); // می
        str = str.replace(/\u0020\u062A\u0631([.:،؛)\]}»؟!?,;]|\s|$)/g, '\u200C\u062A\u0631$1'); // تر
        str = str.replace(/\u0020\u062A\u0631\u06CC\u0646([.:،؛)\]}»؟!?,;]|\s|$)/g, '\u200C\u062A\u0631\u06CC\u0646$1'); // ترین
        str = str.replace(/\u0647\u0020(\u0627\u0645|\u0627\u06CC|\u0627\u06CC\u0645|\u0627\u06CC\u062F|\u0627\u0646\u062F)([.:،؛)\]}»؟!?,;]|\s|$)/g, '\u0647\u200C$1$2'); // verbs
        str = str.replace(/[.،] و/g, '؛ و');
        str = str.replaceAll('نمی‌باشد', 'نیست');
        str = str.replaceAll('می‌باشد', 'است');
        return str;
    }

    static fixWords(str) {
        words.forEach(c => {
            let w = c.split('،');
            let p = '(^|\\s)' + w[0] + '([.:،؛)\\]}»؟!?,;]|\\s|$)';
            p = new RegExp(p, 'g');
            str = str.replace(p, '$1' + w[1] + '$2');
        });
        return str;
    }

    static fixBes(str) {
        bes.forEach(w => {
            let p = '(^|\\s)ب(ه |)' + w + '([.:،؛)\\]}»؟!?,;]|\\s|$)';
            p = new RegExp(p, 'g');
            str = str.replace(p, '$1به‌' + w + '$3');
        });
        return str;
    }

}