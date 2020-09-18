import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {emailAddress: ''};

        this.handleChange = this.handleChange.bind(this);
        this.searchEmail = this.searchEmail.bind(this);
    }

    handleChange(event) {
        this.setState({emailAddress: event.target.value});
    }
    searchEmail(event) {
        event.preventDefault();
        this.props.onSearch(this.state.emailAddress);
    }

    render() {
        return(
            <form onSubmit={this.searchEmail}>
                <input id="EmailAddress" type="text" width="20" onChange={this.handleChange} value={this.state.emailAddress} name="emailAddress" placeholder="Email Address" />
                <input type="submit" value="find"/>
            </form>
        );
    }
}

export default Form;