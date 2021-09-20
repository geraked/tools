import React from 'react'
import Util from '../../libs/util'

export const Zekr = ({ date, timeZone, updateModal }) => {

    const fa_weekdays = [
        'شنبه',
        'یکشنبه',
        'دوشنبه',
        'سه‌شنبه',
        'چهارشنبه',
        'پنجشنبه',
        'جمعه',
    ];

    const weekdays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

    const zekrs = [
        'یا رَبَّ الْعالَمین',
        'یا ذَالْجَلالِ وَالْاِکْرام',
        'یا قاضِیَ الْحاجات',
        'یا اَرْحَمَ الرّاحِمین',
        'یا حَیُّ یا قَیّوم',
        'لا اِلهَ اِلّا اللهُ الْمَلِکُ الْحَقُّ الْمُبین',
        'اَللّهُمَّ صَلِّ عَلی مُحَمَّدٍ وَ آلِ مُحَمَّد',
    ];

    let o = {
        weekday: 'short',
        timeZone: timeZone
    }

    let p = Util.dateParts(date, 'en-US', o);
    let zi = weekdays.indexOf(p.weekday);
    let z = zekrs[zi];

    let modalTitle = 'ذکر روز';

    let modalBody = (
        <ul className="list-group">
            {zekrs.map((v, i) => <li key={i} className={'list-group-item ' + (i === zi ? 'active' : '')}><b>{fa_weekdays[i] + ': '}</b>{v}</li>)}
        </ul>
    )

    return (
        <div className="card bg-light" style={{ cursor: 'pointer' }} onClick={e => updateModal(modalTitle, modalBody)} data-bs-toggle="modal" data-bs-target="#calendar-modal">
            <div className="card-body py-5 px-1 px-md-3 d-flex flex-column align-items-center justify-content-center text-center">
                <i className="fas fa-kaaba"></i>
                <h6>{modalTitle}</h6>
                <h5 className="mb-0">{z}</h5>
            </div>
        </div>
    )
}
