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
            <div className='container'>
                <h2 className='text-center'>{props.drive.name}</h2>
            </div>
            <div className ='container'>
                <ul>
                    {useChildrenAsContent ?
                    currentFile.children :
                    currentFile.children.filter(CFile => CFile != null)
                                        .map(CFile =>
                                            <button className='full-button muted-button'key={CFile.id} onClick={()=>setCurrentFile(props.drive.files.indexOf(CFile))}>
                                                {CFile.name}        
                                            </button>)}
                </ul>
            </div>
        </div>
    );
}
export default DriveDisplay;