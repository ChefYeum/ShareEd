import React, { Component } from 'react';
import NavBar from './NavBar';
import DriveDisplay from './DriveDisplay';
import DocDisplay from './DocDisplay';

class App extends Component {
    state = {
        currentDrive: this.props.currentDrive,

    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <DriveDisplay drive={this.state.currentDrive}/>
            </div>
        );
    }
}

export default App;