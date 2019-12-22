import React, { Component } from 'react';
import NavBar from './NavBar';
import DriveDisplay from './DriveDisplay';
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
            </div>
        );
    }
}

export default App;