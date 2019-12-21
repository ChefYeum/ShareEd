import React, { Component, useState } from 'react';

///
///
const titleStyle = {
    backgroundColor : 'Coral',
    textAlign: 'center',
    borderRadius: 15,
}
function DriveDisplay(props){
    const [currentFile, setCurrentFile] = useState(0);
    
    return(
        <div>
            <div style={titleStyle}>
                <h1>{props.drive.name}</h1>
            </div>
            <div>
                <ul>
                  
                </ul>
            </div>
        </div>
    );
}
//for line 20{props.drive.files[currentFile].children.map(Cfile => <li key={Cfile.id}>{Cfile.name}</li>)}
export default DriveDisplay;