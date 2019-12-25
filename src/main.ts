import express from 'express';

const app = express();
const port = 4000;

app.get('/api/data', (req, res) => res.json({
        hippity: "hoppity"
    })
);

app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));