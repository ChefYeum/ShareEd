import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ParsedDrive from './utils/ParsedDrive';
import DriveFile from './utils/DriveFile';

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
    testDrive.files[1],
    testDrive.files[2],
    testDrive.files[3],
    testDrive.files[4]]);

testDrive.files[1].setChildren([
    testDrive.files[6],
    testDrive.files[7],
    testDrive.files[8],
    testDrive.files[9]]);

testDrive.files[2].setChildren([
    testDrive.files[10],
    testDrive.files[11],
    testDrive.files[12]]);

testDrive.files[6].setChildrenJSX([<h1 key ='1'>hello</h1>,<a key = '2'>link</a>])

ReactDOM.render(<App currentDrive={testDrive}/>,document.getElementById('root'));

