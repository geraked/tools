import React, { Component } from 'react'
import Util from '../libs/util'
import { CopyBtn } from '../ui/CopyBtn'

export default class DigitConverter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            persian: '',
            english: '',
            dir: 'rtl',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let val = e.target.value;
        this.setState({
            persian: Util.toPersianDigits(val),
            english: Util.toEnglishDigits(val),
            dir: Util.isLTR(val) ? 'ltr' : 'rtl',
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="persian-txt" className="form-label">ارقام فارسی</label>
                            </div>
                            <div className="col-auto">
                                <CopyBtn targetId='persian-txt' />
                            </div>
                        </div>
                        <textarea className="form-control" dir={this.state.dir} onChange={this.handleChange} value={this.state.persian} id="persian-txt"></textarea>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="english-txt" className="form-label">ارقام انگلیسی</label>
                            </div>
                            <div className="col-auto">
                                <CopyBtn targetId='english-txt' />
                            </div>
                        </div>
                        <textarea className="form-control" dir={this.state.dir} onChange={this.handleChange} value={this.state.english} id="english-txt"></textarea>
                    </div>
                </div>
            </div>
        );
    }
}