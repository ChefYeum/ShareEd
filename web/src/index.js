import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ParsedDrive from './utils/ParsedDrive';
import DriveFile from './utils/DriveFile';
import './css/normalize.css';
import './css/style.css';
import './css/customStyle.css'

ReactDOM.render(<App currentDrive={null}/>,document.getElementById('root'));

