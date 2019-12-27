import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 4000;

app.get('/api/data', (req, res) => res.json({
        hippity: "hoppity"
    })
);


app.get('/api/q/drive', 
(req, res) => 
    {
      const file = fs.readFileSync(path.join(__dirname,'..','data',req.query.name + '.json'),"utf8");
      const json = JSON.parse(file);
      res.json([json]);

    }
);
 
app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));