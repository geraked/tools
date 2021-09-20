import React from 'react'

export const Modal = ({ id, title, body }) => {
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={id + '-label'} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={id + '-label'}>{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">{body}</div>
                </div>
            </div>
        </div>
    )
}
