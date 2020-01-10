import React, { Component } from 'react';
import logo from '../images/favicon-32x32.png'

function NavBar(props){
    return(
        <div className="navbar-div" >
            <img className='vertical-center left' src={logo}/>
            <h1 className='text-left no-margin-top left'><a onClick = {() => props.onClick('home')} className='no-link-effects' href='#'>ShareEd</a></h1>
            <h1 className='text-left no-margin-top right'><a onClick={() => props.onClick('courses')} href='#'>Courses</a></h1>
            <h1 className='text-left no-margin-top right'><a onClick={() => props.onClick('about')} href='#'>About</a></h1>
        </div>
    )
}

export default NavBar;