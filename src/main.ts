import express from 'express';
import fs from 'fs';
import path from 'path';
import { getClient } from './mongo';

console.log('iam here');
//load env variables;
require('dotenv').config({path: path.join(__dirname,"..","variables.env")});
//connect to mongo
const mongoClient = getClient();
var db = null;

const app = express();
const port = process.env.PORT || 4000;

app.get('/api/data', (req, res) => res.json({
        hippity: "hoppity"
    })
);


app.get('/api/q/drive', 
(req, res) => 
    {
      db.collection('drives').find({$text: {$search: req.query.name}}).toArray((err,results)=>{
        if(err) return console.log(err);
        console.log(results);
        res.json(results);
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

mongoClient.connect((err) =>{
  if (err) return console.log(err);
  console.log("Succesfully connected to the mongo database")
  db = mongoClient.db('ShareEdData');
  db.collection('drives').createIndex({name: 'text'});

  app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
  //mongoClient.close();
})