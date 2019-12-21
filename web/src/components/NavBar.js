import React, { Component } from 'react';

const navStyle ={
    backgroundColor: 'DodgerBlue',
    margin: 0,
    padding: 20,
    borderRadius: 15
};

const navTileStyle = {
    fontFamily: 'Helvetica Neue, sans-serif',
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: -1,
    textAlign: 'center',
    lineHeight: 1,
    marginRight: 20,
    display: 'inline-block',
}
function NavBar(){
    return(
        <div className={'topnav'} style={navStyle}>
            <a style ={navTileStyle}>ShareEd - Google Drive Enhancer</a>
        </div>
    )
}

export default NavBar;