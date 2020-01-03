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
        if(err) return res.sendStatus(500);

        res.json(results);
      });
    }
);

//requires sortedOn and dir as parameters
app.get('/api/q/drives', 
(req, res) => 
    {
      //1 or -1 for ascending or descending

      let direction = req.query.dir;
      console.log(direction + req.query.sortedOn);
      switch (req.query.sortedOn)
      {
        case 'name':
          db.collection('drives').find({}).sort({ name:direction}).toArray((err,results)=>{
            if(err) return console.log(err);
            res.json(results);
          });
          return;
        case 'author':
          db.collection('drives').find().sort({ author:direction}).toArray((err,results)=>{
            if(err) return console.log(err);
            res.json(results);
          });
          return;
        case 'rating':
          db.collection('drives').find().sort({ rating:direction}).toArray((err,results)=>{
            if(err) return console.log(err);
            res.json(results);
          });
          return;
        default:
            res.sendStatus(400);
          return;
      }
      
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