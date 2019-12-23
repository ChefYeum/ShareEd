import React, { Component } from 'react';
import NavBar from './NavBar';
import DriveDisplay from './DriveDisplay';
import '../css/style.css';
import DocDisplay from './DocDisplay';

import dummyResponse from '../dummyResponse';

class App extends Component {
    state = {
        currentDrive: this.props.currentDrive,
    }

    render() {
        return (
            <div>
                <NavBar/>
                <DriveDisplay drive={this.state.currentDrive}/>
                <DocDisplay docData={dummyResponse}/>
            </div>
        );
    }
}

export default App;