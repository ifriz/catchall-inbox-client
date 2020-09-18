import React, {Component} from 'react';

class EmailListPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {emailitems: [], selectedEmail: 0};

        this.handleSelect = this.selectEmail.bind(this);
    }

    selectEmail(event) {
        
    }

    EmailList (props) {
        const items = props.items;
        const listItems = items.map((item) =>
            <div>item.from</div>
            <div>item.subject</div>
        )

        return (
            <div className="email-list">
                {listItems}
            </div>
        )

    }

    render() {
        return (
            <div className="email-list-panel">

                <EmailList items={} />

            </div>
        );
    }

}

export default EmailListPanel