import express from 'express';
import path from 'path';
import connect from './database';
import DriveItem from './models/DriveItem';
import getDriveItems from './googleapi';

//load env variables;
require('dotenv').config({path: path.join(__dirname,"..",".env")});

const app = express();
const port = process.env.EXPRESS_PORT || 4000;

app.get('/api/test', (req, res) => res.json({
        hippity: "hoppity"
    })
);


app.get('/api/drive', (req, res) => 
    {
      // db.collection('drives').find({$text: {$search: req.query.name}}).toArray((err,results)=>{
      //   if(err) return console.log(err);
      //   console.log(results);
      //   res.json(results);
      // });
    }
);

connect()
  .then( (connection) => {
    console.log("Succesfully connected to the MongoDB database");

    getDriveItems()
      .then((items) => DriveItem.create(items))
      .catch(console.error);

    app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
  })
  .catch(console.error);
