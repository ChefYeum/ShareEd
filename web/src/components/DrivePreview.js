import React from 'react';

function DrivePreview(props){

    return(
        <div className ='drive-preview'>
            <div className='faded-bottom-line'><h2 className='left'>{props.name}</h2></div>

                <p>{props.description}</p>
            <span>
                <p>{props.author}</p>
                <p>{props.rating}</p>
            </span>
        </div>
    );
}

export default DrivePreview;