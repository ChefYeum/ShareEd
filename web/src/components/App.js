import React, { Component } from 'react';
import NavBar from './NavBar';
import DriveDisplay from './DriveDisplay';
import DocDisplay from './DocDisplay';
import SearchForm from './SearchForm';
import DriveBrowser from './DriveBrowser';

class App extends Component {
    state = {
        currentDrive: null,
        //0 - display browser, 1 - drive selected, show contents, 2 - about page, 3 - courses page 
        stateCode: 2,
    }

    handleDriveChoice(drive){
        this.setState({
            currentDrive: drive,
            stateCode: 1,
        })
    }

    chooseContent(){
        switch (this.state.stateCode){
            case 0:
                return (
                <div className = 'courses-container'>
                    <DriveBrowser onDriveChoice={(drive)=>this.handleDriveChoice(drive)}/>;
                </div>
                );
            case 1: 
                return (
                        <DriveDisplay drive={this.state.currentDrive}/>
    
                );
            case 2:
                return (
                    <div className = 'about-container'>
                        <div className='about-img-parent'>
                                <div className='edi-image'></div>
                                <div className = 'content'>
                                    <h2><span>Welcome!</span></h2>
                                    <p><span>We are a student lead, content sharing platform for courses at the University of Edinburgh.</span><br/>
                                        <span>We believe that university life is hard as it is, and sharing resources is extremely beneficial.</span><br/>
                                        <span>Our mission is to make collaboration between students easier and more accessible.</span><br/></p>
                                    <h2><span>Team</span></h2>
                                    <p><span className = 'names'>Maks Mozolewski & Dee Yeum</span></p>
                                    <h2><span>Contact</span></h2>
                                    <p><span>If you have any queries, or want to add a course contact us at: mozolewskimaks@gmail.com or yeum@yeum</span></p>
                                </div>                         
                        </div>
                        <div className = 'about-under'>
                            <h2>How this works</h2>
                            <p>Each course on our system represents a google drive with course materials. In order to add something to the website, simply modify the content on the google drive. Notice how whoever registers the course with us owns the drive and so they manage the drive and control who can edit files within it.</p>
                        </div>   
                    </div>
                );
            case 3:
                return <h2>state 3</h2>
            default:
                console.log('error: invalid state code');
        }
    }
    handleNavigation(destination){
        switch (destination){
            case 'home':
                this.setState({
                    stateCode: 2
                })
                break;
            case 'about':
                this.setState({
                    stateCode: 2
                })
                break;
            case 'courses':
                this.setState({
                    stateCode: 0
                })
                break;
            default:
                console.log('error: could not recognize destination');
        }
    }

    render() {

        return (
            <div>
                <NavBar onClick={(destination) => this.handleNavigation(destination)}></NavBar>
                {this.chooseContent()}
            </div>
        );
    }
}

export default App;