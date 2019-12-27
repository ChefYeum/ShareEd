import React, { Component } from 'react';
import NavBar from './NavBar';
import DriveDisplay from './DriveDisplay';
import DocDisplay from './DocDisplay';
import SearchForm from './SearchForm';
import DriveBrowser from './DriveBrowser';

class App extends Component {
    state = {
        currentDrive: null,
        //0 - display browser, 1 - display selected drive
        stateCode: 0,
    }

    handleDriveChoice(drive){
        this.setState({
            currentDrive: drive,
            stateCode: 1,
        })
    }

    chooseContent(){
        let jsxcontent = null;
        if(this.state.stateCode === 0){
            jsxcontent = <DriveBrowser onDriveChoice={(drive)=>this.handleDriveChoice(drive)}/>;
        }
        else{
            console.log(this.state.currentDrive);
            jsxcontent = <DriveDisplay drive={this.state.currentDrive}/>;
        }
        return jsxcontent;
    }

    render() {

        return (
            <div>
                <NavBar></NavBar>
                {this.chooseContent()}
            </div>
        );
    }
}

export default App;