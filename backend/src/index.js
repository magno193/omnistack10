const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-ymbxy.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// rota
app.get('/', (request, response) => {
    return response.json( {message: 'Olá OmniStack'});
});

// localhost:3333
app.listen(3333)