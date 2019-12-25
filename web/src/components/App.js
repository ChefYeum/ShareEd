import React, { Component } from 'react';
import NavBar from './NavBar';
import DriveDisplay from './DriveDisplay';
import DocDisplay from './DocDisplay';
import '../css/style.css';

class App extends Component {
    state = {
        currentDrive: this.props.currentDrive,
    }

    render() {
        return (
            <div>
                <NavBar/>
                <DriveDisplay drive={this.state.currentDrive}/>
                <DocDisplay/>
            </div>
        );
    }
}

export default App;