import React, { Component } from 'react'
import { DateItem } from '../ui/calendar/DateItem'
import { TimeItem } from '../ui/calendar/TimeItem'
import { Zekr } from '../ui/calendar/Zekr'
import { Eslah } from '../ui/calendar/Eslah'
import { ChangeDate } from '../ui/calendar/ChangeDate'
import { Modal } from '../ui/Modal'

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            timeZone: localStorage.getItem('timeZone') || 'Asia/Tehran',
            modalTitle: '',
            modalBody: ''
        };

        this.interval = 0;
        this.setModal = this.setModal.bind(this);
        this.setDate = this.setDate.bind(this);
        this.setNow = this.setNow.bind(this);
        this.setTimeZone = this.setTimeZone.bind(this);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        this.interval = 0;
    }

    setModal(title, body) {
        this.setState({
            modalTitle: title,
            modalBody: body
        });
    }

    setDate(date) {
        this.setState({
            date: date
        });
        clearInterval(this.interval);
        this.interval = 0;
    }

    setNow() {
        if (this.interval) return;
        this.setState({ date: new Date() });
        this.interval = setInterval(() => this.tick(), 1000);
    }

    setTimeZone(tz) {
        this.setState({
            timeZone: tz
        });
        localStorage.setItem('timeZone', tz);
    }

    render() {
        return (
            <div>
                <div className="row mb-1 mb-md-3">
                    <div className="col-12">
                        <TimeItem date={this.state.date} timeZone={this.state.timeZone} />
                    </div>
                </div>
                <div className="row g-1 g-md-3 row-eq">

                    <div className="col-4">
                        <DateItem title="شمسی" locale="fa-IR" date={this.state.date} timeZone={this.state.timeZone} />
                    </div>
                    <div className="col-4">
                        <DateItem title="قمری" locale="ar-IQ-u-ca-islamic" date={this.state.date} timeZone={this.state.timeZone} />
                    </div>
                    <div className="col-4">
                        <DateItem title="میلادی" locale="en-US" date={this.state.date} timeZone={this.state.timeZone} />
                    </div>

                    <div className="col-md-6">
                        <Zekr date={this.state.date} timeZone={this.state.timeZone} setModal={this.setModal} />
                    </div>
                    <div className="col-md-6">
                        <Eslah date={this.state.date} timeZone={this.state.timeZone} setModal={this.setModal} />
                    </div>

                    <div className="col-12">
                        <ChangeDate date={this.state.date} timeZone={this.state.timeZone} setDate={this.setDate} setNow={this.setNow} setTimeZone={this.setTimeZone} />
                    </div>
                </div>
                <Modal id="calendar-modal" title={this.state.modalTitle} body={this.state.modalBody} />
            </div>
        );
    }
}