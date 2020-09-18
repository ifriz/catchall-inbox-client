import React, { Component } from 'react';

class EmailListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {id: 0, from: "", subject: ""}
        this.loadEmail = this.loadEmail.bind(this);
    }

    loadEmail(event) {
        event.preventDefault();
        this.props.LoadEmail(this.props.id)
    }

    render() {
        return (
            <div className="emailItem">
                <div className="fromName">
                    {this.props.from} -
                </div>
                <div className="subjectLine">
                    <a href="/" onClick={this.loadEmail}>{this.props.subject}</a>
                </div>
            </div>
        );
    }
}

export default EmailListItem;
