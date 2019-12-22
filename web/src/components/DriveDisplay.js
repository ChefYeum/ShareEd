import React, { Component, useState } from 'react';

///
///

function DriveDisplay(props){
    const [currentFileI, setCurrentFile] = useState(0);
    const currentFile = props.drive.files[currentFileI];
    //each file can be a leaf, we decide the content based on that
    const useChildrenAsContent = currentFile.isLeaf ? true:false;
    return(
        <div>
            <div>
                <h1>{props.drive.name}</h1>
            </div>
            <div>
                <ul>
                    {useChildrenAsContent ?
                    currentFile.children :
                    currentFile.children.filter(CFile => CFile != null)
                                        .map(CFile =>
                                            <li key={CFile.id} onClick={()=>setCurrentFile(props.drive.files.indexOf(CFile))}>
                                                {CFile.name}        
                                            </li>)}
                </ul>
            </div>
        </div>
    );
}
export default DriveDisplay;