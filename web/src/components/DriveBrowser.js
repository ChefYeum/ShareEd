import React, { Component, useState } from 'react';
import SearchForm from './SearchForm'

//will request array of ParsedDrives from backend
function DriveBrowser(props){
    const [drivesArray,setDrivesArray] = React.useState([]);
    //0 - search menu, 1 - found drives display, 2 - no drive found prompt, 3 - fetching drives
    const [stateCode,setStateCode] = React.useState(0);
    
    function handleFailure(err){
        alert(`${err}`);
    }

    function requestDrives(name, callBack)
    {
        fetch(`/api/q/drive?name=${name}`)
            .then((res) => callBack(res.json()), (err) => handleFailure(err))
    }

    function updateState(jsonDrive){
        setDrivesArray(jsonDrive);

        if(jsonDrive.length == 0)
        {
            setStateCode(2);
        }
        else{
            setStateCode(1);
        }
    }
    function handleSubmit(name){
        //reach for api
        const json = requestDrives(name,(json)=>updateState(json))
        setStateCode(3)
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
        case 3:
            jsx =<h2> loading..</h2>
        default:
            break;
    };
    return(jsx);
}

export default DriveBrowser;