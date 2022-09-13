import express from 'express';
const app = express();
app.get('/rota', (request, response) => {
    return response.json([
        { id: 1, name: 'Joao' },
        { id: 1, name: 'Joao 2' },
        { id: 1, name: 'Joao 3' },
    ]);
});
app.listen(3333);
