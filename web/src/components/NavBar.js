import React, { Component } from 'react';
import logo from '../images/favicon-32x32.png'

function NavBar(){
    return(
        <div className="navbar-div" >
            <img className='vertical-center left' src={logo}/>
            <h1 className='text-left no-margin-top left'><a className='no-link-effects'href='#'>ShareEd</a></h1>
            <h1 className='text-left no-margin-top right'><a href='#'>Home</a></h1>
            <h1 className='text-left no-margin-top right'><a href='#'>About</a></h1>
        </div>
    )
}

export default NavBar;