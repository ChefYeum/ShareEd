import React, { Component, useState } from 'react';
import SearchForm from './SearchForm';
import DrivePreview from './DrivePreview';

//will request array of ParsedDrives from backend
function DriveBrowser(props){
    const [drivesArray,setDrivesArray] = React.useState([]);
    //0- initial, 1 - drive navigation, 2 - no drive found prompt, 3 - fetching drives
    const [stateCode,setStateCode] = React.useState(1);

    function handleFailure(err){
        console.log(`${err}`);
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

    function fetchAllDrives(sort,dir){
        fetch(`/api/q/drives?sortedOn=${sort}&dir=${dir}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
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

    function handleSubmit(name,sort,dir){
        setStateCode(3);
        console.log(typeof name)
        if(name == ''){
            fetchAllDrives(sort,dir);
        }
        else{
            fetchDrives(name);
        }
    }       

//drive display

    let jsx = null;
    switch (stateCode) {
        case 1:
            jsx = <div className='drive-browser float-left'>
                    <div className = 'drive-browser-nav'>
                        <SearchForm onSubmit={(name,sort,dir) => handleSubmit(name,sort,dir)}/>
                    </div>
                    <ul className='drive-listing'>
                    {drivesArray.map(
                        (drive,index) =>
                        <a key='index'className='no-link-effects' 
                            onClick={()=>props.onDriveChoice(drive)}>
                                <DrivePreview name={drive.name} author={drive.author} rating={drive.rating} description={drive.description}/>
                        </a>)
                    }
                    </ul>
                  </div>
            break;
        //no drives window
        case 2:
            jsx =  <div className='drive-browser'>
                        <h3>Could not find courses with similar name</h3>
                        <button className='accent-button block' onClick={()=>setStateCode(1)}>back</button>
                   </div>;   
            break;
        //loading screen
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