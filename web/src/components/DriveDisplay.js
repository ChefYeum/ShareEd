import React, { Component, useState } from 'react';

function DriveDisplay(props){
    const [currentFileI, setCurrentFile] = useState(0);
    const currentFile = props.drive.files[currentFileI];
    //each file can be a leaf, we decide the content based on that
    const useChildrenAsContent = currentFile.isLeaf ? true:false;
    return(
        <div className ='drive-display'>
            <h2 className='text-center faded-bottom-line'>{props.drive.name}</h2>
            <div >
                    {useChildrenAsContent ?
                    currentFile.children :
                    currentFile.children.filter(CFile => CFile != null)
                                        .map(CFile =>
                                            <button className='accent-button 'key={CFile.id} onClick={()=>setCurrentFile(props.drive.files.indexOf(CFile))}>
                                                {CFile.name}        
                                            </button>)}
            </div>
        </div>
    );
}
export default DriveDisplay;