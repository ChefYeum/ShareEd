import { google } from 'googleapis';

import { config } from 'dotenv';
import { resolve } from 'path';

import { writeFile } from 'fs';

config({path: resolve(__dirname, '../.env')});

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const DUMMY_FILE_ID = "1OqglQWvFyZtkYBVXrhsFYn-rDcQBLXbnpiF2e191bBU"

const drive = google.drive({version: "v3", auth: GOOGLE_API_KEY});

function getRes(){
    return drive.files.export({
        fileId: DUMMY_FILE_ID,
        mimeType: "text/html" 
    })
}

getRes().then((res) => (writeFile(`../web/src/docs/${DUMMY_FILE_ID}`, res.data, (err) => console.log)))
