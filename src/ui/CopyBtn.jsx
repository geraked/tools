import React from 'react'
import Util from '../libs/util'

export const CopyBtn = ({ targetId }) => {
    const copy = (e) => {
        let target = document.getElementById(targetId);
        Util.copy(target);
    };

    return (
        <span className="badge bg-primary" onClick={copy}>کپی</span>
    )
}
