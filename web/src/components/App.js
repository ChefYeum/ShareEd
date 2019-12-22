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
                <div>
                    <NavBar/>
                </div>
                <div>
                    <DriveDisplay drive={this.state.currentDrive}/>
                </div>
            </div>
        );
    }
}

export default App;