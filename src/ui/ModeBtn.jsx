import React, { Component } from 'react';

export default class ModeBtn extends Component {
    constructor(props) {
        super(props);

        let darkMode = localStorage.getItem('darkMode') || '0';
        let title = 'تیره';
        if (darkMode === '1') {
            document.body.classList.add('night');
            title = 'روشن';
        }
        this.state = {
            title: title,
            darkMode: darkMode,
        };

        this.toggleMode = this.toggleMode.bind(this);
    }

    toggleMode(e) {
        if (this.state.darkMode === '1') {
            localStorage.setItem('darkMode', '0');
            document.body.classList.remove('night');
            this.setState({
                title: 'تیره',
                darkMode: '0',
            });
        } else {
            localStorage.setItem('darkMode', '1');
            document.body.classList.add('night');
            this.setState({
                title: 'روشن',
                darkMode: '1',
            });
        }
    }

    render() {
        return (
            <span id="mode-btn" className="badge bg-light text-dark" onClick={this.toggleMode}>{this.state.title}</span>
        );
    }
}
