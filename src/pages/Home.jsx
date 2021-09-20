import React, { Component } from 'react'
import { Item } from '../ui/Item'
import ModeBtn from '../ui/ModeBtn'

export default class Home extends Component {
    render() {
        return (
            <main id="home-layout" className="container">
                <div className="row mt-3 mt-md-5 mb-3">
                    <div className="col-12">
                        <div className="card shadow-sm title-card">
                            <div className="card-body text-center">
                                <h4>ابزار</h4>
                            </div>
                            <ModeBtn />
                        </div>
                    </div>
                </div>
                <div className="row g-3 mb-3">
                    {this.props.items.map(t => <Item key={t.path} title={t.title} to={t.path} icon={t.icon} />)}
                </div>
            </main>
        )
    }
}
