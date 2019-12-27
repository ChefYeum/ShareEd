import React, { Component, useState } from 'react';
import SearchForm from './SearchForm'

//will request array of ParsedDrives from backend
function DriveBrowser(props){
    const [drivesArray,setDrivesArray] = React.useState([]);
    //0 - search menu, 1 - found drives display, 2 - no drive found prompt
    const [stateCode,setStateCode] = React.useState(0);
    
    function handleFailure(err){
        alert(`${err}`);
    }

    function requestDrives(name){
        ///beep boop
         
        fetch(`/api/q/drive?name=${name}`)
            .then((res) => Response.json(),(err) => this.handleFailure)
            .then((data) => setDrivesArray(data))
    }

    function handleSubmit(name){

        event.preventDefault();
        //reach for api
        requestDrives(name);
        if(drivesArray.length == 0)
        {
            setStateCode(2);
        }
        else{
            setStateCode(1);
        }

    }
    let jsx = null;
    switch (stateCode) {
        case 0:
            jsx = <SearchForm onSubmit={(name) => handleSubmit(name)}/>
            break;
        case 1:
            jsx = <h2>found drives</h2>
            break;
        case 2:
            jsx = <h2>no drives found</h2>
            break;
        default:
            break;
    };
    return(jsx);
}

export default DriveBrowser;