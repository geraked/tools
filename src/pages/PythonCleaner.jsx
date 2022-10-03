import React, { Component } from 'react'
import Util from '../libs/util'
import { CopyBtn } from '../ui/CopyBtn'

export default class PythonCleaner extends Component {
    constructor(props) {
        super(props);
        this.state = { output: '' };
        this.updateOutput = this.updateOutput.bind(this);
        this.updateRawOutput = this.updateRawOutput.bind(this);
    }

    updateOutput(e) {
        let val = e.target.value;
        this.setState({
            output: Util.cleanPython(val),
        });
    }

    updateRawOutput(e) {
        let val = e.target.value;
        this.setState({
            output: val,
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="input-txt" className="form-label">متن ورودی</label>
                        <textarea className="form-control" dir='ltr' onChange={this.updateOutput} id="input-txt"></textarea>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="output-txt" className="form-label">متن خروجی</label>
                            </div>
                            <div className="col-auto">
                                <CopyBtn targetId='output-txt' />
                            </div>
                        </div>
                        <textarea className="form-control" dir='ltr' value={this.state.output} onChange={this.updateRawOutput} id="output-txt"></textarea>
                    </div>
                </div>
            </div>
        );
    }
}