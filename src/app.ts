import express from 'express';
const app = express();

const response = {status: 1, data: {}, message: 'Successfull fetched data'};

app.get('/', (req, res) => {
    const resp = response;
    resp.data = {product: 1, name: "Shoes"};
    res.json(resp);
});

app.listen(5000, () => console.log('Server running'));