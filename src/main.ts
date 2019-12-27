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
    JSON.stringify(fs.readFileSync(path.join(__dirname,'..','data',req.query.name + '.json'),"utf8"))
);
 
app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));