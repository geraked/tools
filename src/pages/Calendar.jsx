import React, { Component } from 'react'
import { DateItem } from '../ui/calendar/DateItem'
import { TimeItem } from '../ui/calendar/TimeItem'
import { Zekr } from '../ui/calendar/Zekr'
import { Eslah } from '../ui/calendar/Eslah'
import { Modal } from '../ui/Modal'

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            timeZone: 'Asia/Tehran',
            modalTitle: '',
            modalBody: ''
        };

        this.updateModal = this.updateModal.bind(this);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateModal(title, body) {
        this.setState({
            modalTitle: title,
            modalBody: body
        });
    }

    render() {
        return (
            <div>
                <div className="row mb-1 mb-md-3">
                    <div className="col-12">
                        <TimeItem date={this.state.date} timeZone={this.state.timeZone} />
                    </div>
                </div>
                <div className="row g-1 mb-1 g-md-3 mb-md-3 row-eq">
                    <div className="col-4">
                        <DateItem title="شمسی" locale="fa-IR" date={this.state.date} timeZone={this.state.timeZone} />
                    </div>
                    <div className="col-4">
                        <DateItem title="قمری" locale="ar-IQ-u-ca-islamic" date={this.state.date} timeZone={this.state.timeZone} />
                    </div>
                    <div className="col-4">
                        <DateItem title="میلادی" locale="en-US" date={this.state.date} timeZone={this.state.timeZone} />
                    </div>
                </div>
                <div className="row g-1 g-md-3 row-eq">
                    <div className="col-md-6">
                        <Zekr date={this.state.date} timeZone={this.state.timeZone} updateModal={this.updateModal} />
                    </div>
                    <div className="col-md-6">
                        <Eslah date={this.state.date} timeZone={this.state.timeZone} updateModal={this.updateModal} />
                    </div>
                </div>
                <Modal id="calendar-modal" title={this.state.modalTitle} body={this.state.modalBody} />
            </div>
        );
    }
}