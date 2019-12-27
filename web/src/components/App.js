import React, { Component } from 'react';
import NavBar from './NavBar';
import DriveDisplay from './DriveDisplay';
import DocDisplay from './DocDisplay';
import SearchForm from './SearchForm';
import DriveBrowser from './DriveBrowser';

class App extends Component {
    state = {
        currentDrive: this.props.currentDrive,
        //0 - display browser, 1 - display selected drive
        stateCode: 0,
    }

    handleSubmit(event){
        
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <DriveBrowser/>
            </div>
        );
    }
}

export default App;