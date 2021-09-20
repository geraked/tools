import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ title, to, icon }) =>
    <div className="col-md-4 col-6">
        <Link to={to}>
            <div className="card shadow-sm item-card">
                <div className="card-body d-flex align-items-center justify-content-center text-center">
                    {icon}
                    <h5>{title}</h5>
                </div>
            </div>
        </Link>
    </div>
