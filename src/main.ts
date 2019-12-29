import express from 'express';
import fs from 'fs';
import path from 'path';
import { getClient } from './mongo';

//load env variables;
require('dotenv').config({path: path.join(__dirname,"..","variables.env")});
//connect to mongo
const MongoClient = getClient();
let db = null;

const app = express();
const port = process.env.PORT || 4000;

app.get('/api/data', (req, res) => res.json({
        hippity: "hoppity"
    })
);


app.get('/api/q/drive', 
(req, res) => 
    {
      db.collection('Drives').find().toArray((err,results)=>{
        const json = JSON.parse(results);
        res.json(json);
      });
    }
);

app.put('/api/overwrite/drive', (req,res)=>{
  db.collection('Drives').save(req.body, (err, result) =>{
    if(err) return console.log(err);

    console.log('saved to database');
    res.redirect('/');
  });
})

MongoClient.connect((err) =>{
  if (err) return console.log(err);
  db = MongoClient.db('ShareEdData');
  app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
})