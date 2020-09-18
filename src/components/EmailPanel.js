import React, {Component} from 'react';
import Form from "./Form";
import EmailListItem from "./EmailListItem";

class EmailPanel extends Component {

    displayName = EmailPanel.name;

    constructor(props) {
        super(props);
        this.state = {email: "", emailItems: [], loading: false, viewEmail: false}
        this.fetchEmails = this.fetchEmails.bind(this);
        this.loadEmailId = this.loadEmailId.bind(this);
    }

    async fetchEmails(emailAddress) {
        if (emailAddress !== "") {
            this.setState({email: emailAddress, emailItems:[], loading: true});
            await fetch("http://localhost:8080/email",
                {
                    method: "post",
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "email": emailAddress
                    })
            }
        ) // use environment variable here: process.env["CATCHALLINBOX_API_URL"]
                .then(response => response.json())
                .then(data => {
                    this.setState({emailItems: data.data});
                })
                .finally(() => { this.setState({loading: false})});
        }
    }

    async loadEmailId(id){
        // fetch email specific data
        this.setState({viewEmail: true, loading: true});

        
    }

    render() {
        return (
            <div className="email-panel">
                <Form onSearch={this.fetchEmails}/>
                {this.state.loading ? <div>FINDING EMAILS</div> : <div></div>}
                <div className="email-items">
                    {this.state.emailItems.map((item,key) =>
                        <div>
                            <EmailListItem id={item.id} from={item.email} subject={item.subject} LoadEmail={this.loadEmailId}/>
                        </div>
                    )}
                </div>
            </div>
        );
    }

}

export default EmailPanel;