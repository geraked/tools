import React, { Component } from 'react'
import Util from '../../libs/util'
import { jalaaliToDateObject } from 'jalaali-js'
import HijriDate from 'hijri-date/lib/safe'

const tzs = [
    { "label": "(GMT-12:00) International Date Line West", "value": "Etc/GMT+12" },
    { "label": "(GMT-11:00) Midway Island, Samoa", "value": "Pacific/Midway" },
    { "label": "(GMT-10:00) Hawaii", "value": "Pacific/Honolulu" },
    { "label": "(GMT-09:00) Alaska", "value": "US/Alaska" },
    { "label": "(GMT-08:00) Pacific Time (US & Canada)", "value": "America/Los_Angeles" },
    { "label": "(GMT-08:00) Tijuana, Baja California", "value": "America/Tijuana" },
    { "label": "(GMT-07:00) Arizona", "value": "US/Arizona" },
    { "label": "(GMT-07:00) Chihuahua, La Paz, Mazatlan", "value": "America/Chihuahua" },
    { "label": "(GMT-07:00) Mountain Time (US & Canada)", "value": "US/Mountain" },
    { "label": "(GMT-06:00) Central America", "value": "America/Managua" },
    { "label": "(GMT-06:00) Central Time (US & Canada)", "value": "US/Central" },
    { "label": "(GMT-06:00) Guadalajara, Mexico City, Monterrey", "value": "America/Mexico_City" },
    { "label": "(GMT-06:00) Saskatchewan", "value": "Canada/Saskatchewan" },
    { "label": "(GMT-05:00) Bogota, Lima, Quito, Rio Branco", "value": "America/Bogota" },
    { "label": "(GMT-05:00) Eastern Time (US & Canada)", "value": "US/Eastern" },
    { "label": "(GMT-05:00) Indiana (East)", "value": "US/East-Indiana" },
    { "label": "(GMT-04:00) Atlantic Time (Canada)", "value": "Canada/Atlantic" },
    { "label": "(GMT-04:00) Caracas, La Paz", "value": "America/Caracas" },
    { "label": "(GMT-04:00) Manaus", "value": "America/Manaus" },
    { "label": "(GMT-04:00) Santiago", "value": "America/Santiago" },
    { "label": "(GMT-03:30) Newfoundland", "value": "Canada/Newfoundland" },
    { "label": "(GMT-03:00) Brasilia", "value": "America/Sao_Paulo" },
    { "label": "(GMT-03:00) Buenos Aires, Georgetown", "value": "America/Argentina/Buenos_Aires" },
    { "label": "(GMT-03:00) Greenland", "value": "America/Godthab" },
    { "label": "(GMT-03:00) Montevideo", "value": "America/Montevideo" },
    { "label": "(GMT-02:00) Mid-Atlantic", "value": "America/Noronha" },
    { "label": "(GMT-01:00) Cape Verde Is.", "value": "Atlantic/Cape_Verde" },
    { "label": "(GMT-01:00) Azores", "value": "Atlantic/Azores" },
    { "label": "(GMT+00:00) Casablanca, Monrovia, Reykjavik", "value": "Africa/Casablanca" },
    { "label": "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London", "value": "Etc/Greenwich" },
    { "label": "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna", "value": "Europe/Amsterdam" },
    { "label": "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague", "value": "Europe/Belgrade" },
    { "label": "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris", "value": "Europe/Brussels" },
    { "label": "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb", "value": "Europe/Sarajevo" },
    { "label": "(GMT+01:00) West Central Africa", "value": "Africa/Lagos" },
    { "label": "(GMT+02:00) Amman", "value": "Asia/Amman" },
    { "label": "(GMT+02:00) Athens, Bucharest, Istanbul", "value": "Europe/Athens" },
    { "label": "(GMT+02:00) Beirut", "value": "Asia/Beirut" },
    { "label": "(GMT+02:00) Cairo", "value": "Africa/Cairo" },
    { "label": "(GMT+02:00) Harare, Pretoria", "value": "Africa/Harare" },
    { "label": "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius", "value": "Europe/Helsinki" },
    { "label": "(GMT+02:00) Jerusalem", "value": "Asia/Jerusalem" },
    { "label": "(GMT+02:00) Minsk", "value": "Europe/Minsk" },
    { "label": "(GMT+02:00) Windhoek", "value": "Africa/Windhoek" },
    { "label": "(GMT+03:00) Kuwait, Riyadh, Baghdad", "value": "Asia/Kuwait" },
    { "label": "(GMT+03:00) Moscow, St. Petersburg, Volgograd", "value": "Europe/Moscow" },
    { "label": "(GMT+03:00) Nairobi", "value": "Africa/Nairobi" },
    { "label": "(GMT+03:00) Tbilisi", "value": "Asia/Tbilisi" },
    { "label": "(GMT+03:30) Tehran", "value": "Asia/Tehran" },
    { "label": "(GMT+04:00) Abu Dhabi, Muscat", "value": "Asia/Muscat" },
    { "label": "(GMT+04:00) Baku", "value": "Asia/Baku" },
    { "label": "(GMT+04:00) Yerevan", "value": "Asia/Yerevan" },
    { "label": "(GMT+04:30) Kabul", "value": "Asia/Kabul" },
    { "label": "(GMT+05:00) Yekaterinburg", "value": "Asia/Yekaterinburg" },
    { "label": "(GMT+05:00) Islamabad, Karachi, Tashkent", "value": "Asia/Karachi" },
    { "label": "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi", "value": "Asia/Calcutta" },
    { "label": "(GMT+05:30) Sri Jayawardenapura", "value": "Asia/Calcutta" },
    { "label": "(GMT+05:45) Kathmandu", "value": "Asia/Katmandu" },
    { "label": "(GMT+06:00) Almaty, Novosibirsk", "value": "Asia/Almaty" },
    { "label": "(GMT+06:00) Astana, Dhaka", "value": "Asia/Dhaka" },
    { "label": "(GMT+06:30) Yangon (Rangoon)", "value": "Asia/Rangoon" },
    { "label": "(GMT+07:00) Bangkok, Hanoi, Jakarta", "value": "Asia/Bangkok" },
    { "label": "(GMT+07:00) Krasnoyarsk", "value": "Asia/Krasnoyarsk" },
    { "label": "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi", "value": "Asia/Hong_Kong" },
    { "label": "(GMT+08:00) Kuala Lumpur, Singapore", "value": "Asia/Kuala_Lumpur" },
    { "label": "(GMT+08:00) Irkutsk, Ulaan Bataar", "value": "Asia/Irkutsk" },
    { "label": "(GMT+08:00) Perth", "value": "Australia/Perth" },
    { "label": "(GMT+08:00) Taipei", "value": "Asia/Taipei" },
    { "label": "(GMT+09:00) Osaka, Sapporo, Tokyo", "value": "Asia/Tokyo" },
    { "label": "(GMT+09:00) Seoul", "value": "Asia/Seoul" },
    { "label": "(GMT+09:00) Yakutsk", "value": "Asia/Yakutsk" },
    { "label": "(GMT+09:30) Adelaide", "value": "Australia/Adelaide" },
    { "label": "(GMT+09:30) Darwin", "value": "Australia/Darwin" },
    { "label": "(GMT+10:00) Brisbane", "value": "Australia/Brisbane" },
    { "label": "(GMT+10:00) Canberra, Melbourne, Sydney", "value": "Australia/Canberra" },
    { "label": "(GMT+10:00) Hobart", "value": "Australia/Hobart" },
    { "label": "(GMT+10:00) Guam, Port Moresby", "value": "Pacific/Guam" },
    { "label": "(GMT+10:00) Vladivostok", "value": "Asia/Vladivostok" },
    { "label": "(GMT+11:00) Magadan, Solomon Is., New Caledonia", "value": "Asia/Magadan" },
    { "label": "(GMT+12:00) Auckland, Wellington", "value": "Pacific/Auckland" },
    { "label": "(GMT+12:00) Fiji, Kamchatka, Marshall Is.", "value": "Pacific/Fiji" },
    { "label": "(GMT+13:00) Nuku'alofa", "value": "Pacific/Tongatapu" }
];

export class ChangeDate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            py: 0,
            pm: 0,
            pd: 0,
            iy: 0,
            im: 0,
            id: 0,
            gy: 0,
            gm: 0,
            gd: 0,
            th: 0,
            tn: 0,
            ts: 0,
            ss: 0,
        };

        this.timeout = 0;
        this.handleFocus = this.handleFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNow = this.handleNow.bind(this);
        this.handleTzChange = this.handleTzChange.bind(this);
    }

    componentDidMount() {
        this.calculate();
    }

    handleFocus(e) {
        Util.select(e.target);
    }

    handleChange(e) {
        let id = e.target.id;
        let val = e.target.value;

        if (val !== '') {
            val = Util.toEnglishDigits(val).trim();
            val = parseInt(val);
            if (isNaN(val)) return;
        }

        this.setState({
            [id]: val
        });

        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            let nd;

            this.validate();

            nd = new Date();
            nd.setFullYear(this.state.gy);
            nd.setMonth(this.state.gm - 1);
            nd.setDate(this.state.gd);

            if (id.startsWith('p')) {
                nd = jalaaliToDateObject(this.state.py, this.state.pm, this.state.pd);
            } else if (id.startsWith('i')) {
                nd = new HijriDate(this.state.iy, this.state.im, this.state.id).toGregorian();
            }

            nd.setHours(this.state.th);
            nd.setMinutes(this.state.tn);
            nd.setSeconds(this.state.ts);

            if (id === 'ss') {
                nd = new Date(this.state.ss);
            }

            this.props.setDate(nd);

            this.calculate();
        }, 3000);
    }

    handleNow() {
        this.props.setNow();
        setTimeout(() => this.calculate(), 500);
    }

    handleTzChange(e) {
        let val = e.target.value;
        this.props.setTimeZone(val);
        setTimeout(() => this.calculate(), 500);
    }

    validate() {
        for (let k in this.state) {
            let v = this.state[k];

            if (k.startsWith('t')) {
                if (v === '' || v < 0) {
                    this.setState({
                        [k]: 0
                    });
                }

                if ((k.endsWith('s') || k.endsWith('n')) && v > 59) {
                    this.setState({
                        [k]: 59
                    });
                }

                if (k.endsWith('h') && v > 23) {
                    this.setState({
                        [k]: 23
                    });
                }
            } else if (k.startsWith('s')) {
                if (v === '') {
                    this.setState({
                        [k]: 0
                    });
                }

                if (v > 40000000000000) {
                    this.setState({
                        [k]: 40000000000000
                    });
                } else if (v < -40000000000000) {
                    this.setState({
                        [k]: -40000000000000
                    });
                }
            } else {
                if (v === '' || v < 1) {
                    this.setState({
                        [k]: 1
                    });
                }

                if (k.endsWith('d') && v > 31) {
                    this.setState({
                        [k]: 31
                    });
                }

                if (k.endsWith('m') && v > 12) {
                    this.setState({
                        [k]: 12
                    });
                }
            }
        }

        if (this.state.py > 2000) {
            this.setState({
                py: 2000
            });
        } else if (this.state.py < 2) {
            this.setState({
                py: 2
            });
        }

        if (this.state.iy > 2000) {
            this.setState({
                iy: 2000
            });
        } else if (this.state.iy < 1000) {
            this.setState({
                iy: 1000
            });
        }

        if (this.state.gy > 3000) {
            this.setState({
                gy: 3000
            });
        } else if (this.state.gy < 623) {
            this.setState({
                gy: 623
            });
        }
    }

    calculate() {
        const options = {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
            timeZone: this.props.timeZone,
        };

        let pp, ip, gp;

        pp = Util.dateParts(this.props.date, 'fa-IR-u-nu-latn', options);
        ip = Util.dateParts(this.props.date, 'ar-IQ-u-ca-islamic-nu-latn', options);
        gp = Util.dateParts(this.props.date, 'en-US', options);

        this.setState({
            py: parseInt(pp.year),
            pm: parseInt(pp.month),
            pd: parseInt(pp.day),
            iy: parseInt(ip.year),
            im: parseInt(ip.month),
            id: parseInt(ip.day),
            gy: parseInt(gp.year),
            gm: parseInt(gp.month),
            gd: parseInt(gp.day),
            th: parseInt(gp.hour),
            tn: parseInt(gp.minute),
            ts: parseInt(gp.second),
            ss: this.props.date.getTime(),
        });
    }

    render() {

        return (
            <div className="card bg-light">
                <div className="card-body py-5 px-1 px-md-3 d-flex flex-column align-items-center justify-content-center text-center">
                    <i className="fas fa-exchange-alt text-danger"></i>
                    <h5>تغییر / تبدیل تاریخ</h5>

                    <div className="row gx-5 gy-4">

                        <div className="col-md-4">
                            <h6>شمسی</h6>
                            <div className="row g-1">
                                <div className="col-3">
                                    <div className="form-floating">
                                        <input dir="ltr" type="input" className="form-control" id="pd" value={this.state.pd} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        <label htmlFor="pd">روز</label>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-floating">
                                        <input dir="ltr" type="input" className="form-control" id="pm" value={this.state.pm} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        <label htmlFor="pm">ماه</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating">
                                        <input dir="ltr" type="input" className="form-control" id="py" value={this.state.py} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        <label htmlFor="py">سال</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <h6>قمری</h6>
                            <div className="row g-1">
                                <div className="col-3">
                                    <div className="form-floating">
                                        <input dir="ltr" type="input" className="form-control" id="id" value={this.state.id} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        <label htmlFor="id">روز</label>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-floating">
                                        <input dir="ltr" type="input" className="form-control" id="im" value={this.state.im} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        <label htmlFor="im">ماه</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating">
                                        <input dir="ltr" type="input" className="form-control" id="iy" value={this.state.iy} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        <label htmlFor="iy">سال</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <h6>میلادی</h6>
                            <div className="row g-1">
                                <div className="col-3">
                                    <div className="form-floating">
                                        <input dir="ltr" type="input" className="form-control" id="gd" value={this.state.gd} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        <label htmlFor="gd">روز</label>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-floating">
                                        <input dir="ltr" type="input" className="form-control" id="gm" value={this.state.gm} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        <label htmlFor="gm">ماه</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating">
                                        <input dir="ltr" type="input" className="form-control" id="gy" value={this.state.gy} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        <label htmlFor="gy">سال</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <h6>زمان</h6>
                            <div className="row g-1">
                                <div className="col">
                                    <div className="form-floating">
                                        <input dir="ltr" type="input" className="form-control" id="ts" value={this.state.ts} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        <label htmlFor="ts">ثانیه</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating">
                                        <input dir="ltr" type="input" className="form-control" id="tn" value={this.state.tn} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        <label htmlFor="tn">دقیقه</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating">
                                        <input dir="ltr" type="input" className="form-control" id="th" value={this.state.th} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        <label htmlFor="th">ساعت</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <h6>تایم استمپ</h6>
                            <div className="row g-1">
                                <div className="col">
                                    <div className="form-floating">
                                        <input dir="ltr" type="input" className="form-control" id="ss" value={this.state.ss} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        <label htmlFor="ss">میلی ثانیه</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <h6>‌</h6>
                            <div className="row g-1">
                                <div className="col-9">
                                    <div className="form-floating">
                                        <select className="form-select" id="zt" value={this.props.timeZone} onChange={this.handleTzChange} aria-label="منطقه زمانی">
                                            {tzs.map((t, i) => <option dir="ltr" key={i} value={t.value}>{t.label}</option>)}
                                        </select>
                                        <label htmlFor="zt">منطقه زمانی</label>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-primary btn-lg mt-1" onClick={this.handleNow}>اکنون</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

