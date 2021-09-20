import React from 'react'
import Util from '../../libs/util'

export const DateItem = ({ title, date, timeZone, locale }) => {

    let o = {};
    let p = {};
    let short, long;

    o = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: timeZone,
    };
    p = Util.dateParts(date, locale, o);
    short = `${p.year}/${p.month}/${p.day}`;

    o = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long',
        timeZone: timeZone,
    };
    p = Util.dateParts(date, locale, o);
    long = `${p.weekday} ${p.day} ${p.month} ${p.year}`;

    return (
        <div className="card bg-light">
            <div className="card-body py-5 px-1 px-md-3 d-flex flex-column align-items-center justify-content-center text-center">
                <i className="fas fa-calendar-alt text-success"></i>
                <h5>{title}</h5>
                <h6>{short}</h6>
                <h6>{long}</h6>
            </div>
        </div>
    )
}
