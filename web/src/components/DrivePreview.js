import React from 'react';

function DrivePreview(props){

    return(
        <div className = 'drive-preview'>
            <li>
                <div className='head'>
                    <h2>{props.name}</h2>
                    <p>{props.author}</p>    
                </div>
                <div className='body'>
                    <p>{props.description}</p>
                    <p>{props.rating}</p>
                </div>
            </li>
        </div>
    );
}

export default DrivePreview;