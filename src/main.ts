import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.json({
    hippity: "hoppity"
}));

app.listen(port, () => console.log(`Server listening on port http://localhost:${port}/`));