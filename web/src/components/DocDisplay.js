// This component will display a single Google Doc file as a Markdown style format 

import React, { Component } from 'react';

class DocDisplay extends Component {
    state = {
        "some": "state"
    }
    render() {
        return (
            <div>
                <h1> Header 1</h1>
                <p> Paragraph 1</p>
                <p> {JSON.stringify(this.state)} </p>
            </div>);
    };

    componentDidMount(){
        console.log(this.state)
        fetch('/api/data')
            .then( res => {
                console.log("res:", res);
                return res.json()
            })
            .then((resJSON) => this.setState(resJSON))

    }
}

export default DocDisplay;