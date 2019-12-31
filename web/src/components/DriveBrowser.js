import React, { Component, useState } from 'react';
import SearchForm from './SearchForm';
import DrivePreview from './DrivePreview';

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
        setStateCode(3);
        fetchDrives(name);
    }

    let jsx = null;
    switch (stateCode) {
        case 0:
            jsx = <div className ='drive-browser'><SearchForm onSubmit={(name) => handleSubmit(name)}/></div>;
            break;
        case 1:
            jsx = <div className='full-container drive-browser float-left'>
                    {drivesArray.map(
                        (drive,index) =>
                        <a key='index'className='no-link-effects' 
                            onClick={()=>props.onDriveChoice(drive)}>
                                <DrivePreview name={drive.name} author={drive.author} rating={drive.rating} description={drive.description}/>
                        </a>)
                    }
                  </div>;
            break;
        case 2:
            jsx =  <div className='drive-browser'>
                        <h3>Could not find courses with similar name</h3>
                        <button className='accent-button block' onClick={()=>setStateCode(0)}>back</button>
                   </div>;   
            break;
        case 3:
            jsx =<div className='drive-browser'>
                    <div className='loader'></div>
                </div>
            break;
        default:
            break;
    };
    return(jsx);
}

export default DriveBrowser;