import React from 'react'
import { Link } from 'react-router-dom'
import ModeBtn from '../ui/ModeBtn'

export const NoMatch = () =>
    <main id="main-layout" className="container">
        <div className="row flex-column align-items-center justify-content-center pt-3 pb-3 gy-3">
            <div className="col-12">
                <div className="card shadow-sm title-card">
                    <div className="card-body text-center">
                        <span class="display-1 d-block">404</span>
                        <div class="mb-4 lead">صفحه مورد نظر یافت نشد.</div>
                    </div>
                    <Link to='/'><span id="home-btn" className="badge bg-light text-dark">خانه</span></Link>
                    <ModeBtn />
                </div>
            </div>
        </div>
    </main>
