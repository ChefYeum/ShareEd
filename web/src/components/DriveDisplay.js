import React, { Component, useState } from 'react';
import htmlParser from 'html-react-parser';

function DriveDisplay(props){
    const [currentFileI, setCurrentFile] = useState(0);
    const currentFile = props.drive.files[currentFileI];
    //each file can be a leaf, we decide the content based on that
    function parseJSXString(jsxstring){
        return React.createElement(jsxstring.type)
    }
    const useChildrenAsContent = currentFile.isLeaf ? true:false;
    return(
        <div className ='drive-display'>
            <h2 className='text-center faded-bottom-line'>{props.drive.name}</h2>
            <div >
                    {useChildrenAsContent ?
                    currentFile.children.map((c,index)=>htmlParser(c)) :
                    currentFile.children.map(childID => props.drive.files.find(file => file.id === childID))
                                        .map(CFile =>
                                            <button className='accent-button 'key={CFile.id} onClick={()=>setCurrentFile(props.drive.files.indexOf(CFile))}>
                                                {CFile.name}        
                                            </button>)}
            </div>
        </div>
    );
}
export default DriveDisplay;