import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json())

app.post('/products', (req, res) => {
    const {product, description} = req.body;

    res.send(product, description)
})

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
})