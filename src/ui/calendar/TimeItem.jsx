import React from 'react'
import Util from '../../libs/util'

export const TimeItem = ({ date, timeZone }) => {

    let o = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: timeZone
    }

    let p = Util.dateParts(date, 'fa-IR', o);

    let time = `${p.hour}:${p.minute}:${p.second}`;

    return (
        <div className="card bg-light">
            <div className="card-body text-center">
                <h5 className="mb-0">{time}</h5>
            </div>
        </div>
    )
}
