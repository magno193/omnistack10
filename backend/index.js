const express = require('express');

const app = express();

app.use(express.json());

// rota
app.get('/', (request, response) => {
    return response.json( {message: 'Olá OmniStack'});
});

// localhost:3333
app.listen(3333)