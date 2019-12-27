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

    function fetchDrives(name){
        fetch(`/api/q/drive?name=${name}`)
            .then((res) => res.json())
            .then((data) => {
                setDrivesArray(data);
                if(data.length == 0)
                {
                    setStateCode(2);
                }
                else{
                    setStateCode(1);
                }
            })
            .catch((err) => handleFailure(err))
            
            
    }
    function handleSubmit(name){
        //reach for api

        setStateCode(3);
        fetchDrives(name);
    }


    let jsx = null;
    switch (stateCode) {
        case 0:
            jsx = <SearchForm onSubmit={(name) => handleSubmit(name)}/>
            break;
        case 1:
            jsx = <ul>{drivesArray.map(
                (drive,index)=> <button key='index'className='accent-button' onClick={()=>props.onDriveChoice(drive)}>{drive.name}</button>)}
                  </ul>
            break;
        case 2:
            jsx = <h2>no drives found</h2>
            break;
        case 3:
            jsx =<h2> loading..</h2>
            break;
        default:
            break;
    };
    return(<div className='drive-browser'>{jsx}</div>);
}

export default DriveBrowser;