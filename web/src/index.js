import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ParsedDrive from './utils/ParsedDrive';
import DriveFile from './utils/DriveFile';
import './css/normalize.css';
import './css/style.css';
import './css/customStyle.css'

const testDrive= new ParsedDrive('Better Informatics Drive');

testDrive.files = [
    new DriveFile('Root'),
    new DriveFile('Year1'),
    new DriveFile('Year2'),
    new DriveFile('Year3'),
    new DriveFile('Year4'),
    new DriveFile('Masters'),
    new DriveFile('ILA'),
    new DriveFile('CAP'),
    new DriveFile('CL'),
    new DriveFile('FP'),
    new DriveFile('DMMR'),
    new DriveFile('CS'),
    new DriveFile('SE'),
];

testDrive.files[0].setChildren([
    testDrive.files[1].id,
    testDrive.files[2].id,
    testDrive.files[3].id,
    testDrive.files[4].id]);

testDrive.files[1].setChildren([
    testDrive.files[6].id,
    testDrive.files[7].id,
    testDrive.files[8].id,
    testDrive.files[9].id]);

testDrive.files[2].setChildren([
    testDrive.files[10].id,
    testDrive.files[11].id,
    testDrive.files[12].id]);

testDrive.files[6].setChildrenJSX([<h2 key ='1'>Week1</h2>,<a href='#' key = '2'>vectors</a>,<h2 key ='3'>Week2</h2>,<a href='#' key='4'>github.com notes</a>])


ReactDOM.render(<App/>,document.getElementById('root'));

