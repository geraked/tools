import React from 'react'
import Util from '../../libs/util'

export const Eslah = ({ date, timeZone, setModal }) => {

    // 1: good 2: bad
    const type = [2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1];

    const data = [
        'کوتاهی عمر',
        'حاجت‌روا گردد',
        'سبب ضعف حافظه',
        'باعث غم و اندوه است',
        'باعث سرور و شادی است',
        'باعث بلای ناگهانی است',
        'از بزرگان دولت یابد',
        'سبب بیماری است',
        'باعث دردی شود',
        'عزیز و محترم گردد',
        'باعث اندوه است',
        'میان مردم باشکوه گردد',
        'با شخصی خصومت کند',
        'باعث شادی است',
        'باعث شادی است',
        'باعث دلتنگی است',
        'میانه است',
        'باعث رنج و اندوه است',
        'توانگر شود',
        'باعث ایمنی از بلاست',
        'دولت یابد',
        'باعث بی‌پولی است',
        'کارهایی اصلاح شود',
        'کارها اصلاح شود',
        'کارها به اصلاح آید',
        'از بلا رها شود',
        'پشیمانی آورد',
        'بسیار بسیار بد است',
        'از خلق بپرهیزد',
        'از بلیات ایمن باشد',
    ];

    let o = {
        day: 'numeric',
        timeZone: timeZone
    }

    let p = Util.dateParts(date, 'fa-IR-u-ca-islamic-nu-latn', o);
    let c = data[parseInt(p.day) - 1];

    let modalTitle = 'اصلاح ناخن و مو';

    let modalBody = (
        <ul className="list-group">
            {data.map((v, i) => <li key={i} className={'list-group-item ' + ((i + 1) === parseInt(p.day) ? 'active' : type[i] === 1 ? 'list-group-item-success' : 'list-group-item-danger')}><b>{Util.toPersianDigits((i + 1).toString()) + ': '}</b>{v}</li>)}
        </ul>
    )

    return (
        <div className="card bg-light" style={{ cursor: 'pointer' }} onClick={e => setModal(modalTitle, modalBody)} data-bs-toggle="modal" data-bs-target="#calendar-modal">
            <div className="card-body py-5 px-1 px-md-3 d-flex flex-column align-items-center justify-content-center text-center">
                <i className="fas fa-cut text-info"></i>
                <h6>{modalTitle}</h6>
                <h5 className="mb-0">{c}</h5>
            </div>
        </div>
    )
}
