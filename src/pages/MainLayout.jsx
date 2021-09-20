import React from 'react'
import ModeBtn from '../ui/ModeBtn'
import { Link, useLocation } from 'react-router-dom'
import Util from '../libs/util'

export const MainLayout = ({ title, children }) => {

    let qs = new URLSearchParams(useLocation().search);

    if (qs.has('css')) {
        localStorage.setItem('darkMode', '0');
        Util.addCss(qs.get('css'), 'custom-css');
    }

    return <main id="main-layout" className="container">
        <div className="row flex-column align-items-center justify-content-center pt-3 pb-3 gy-3">
            <div className="col-12">
                <div className="card shadow-sm title-card">
                    <div className="card-body text-center">
                        <h4>{title}</h4>
                    </div>
                    <Link to='/'><span id="home-btn" className="badge bg-light text-dark">خانه</span></Link>
                    <ModeBtn />
                </div>
            </div>
            <div className="col-12">
                <div className="card shadow-sm main-card">
                    <div className="card-body p-1 p-md-3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </main>
};
