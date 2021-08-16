const express = require('express');

// Criar o servidor/ aplicacao do express
const app = express();


//Routes
app.use('/api/auth', require('./routes/auth'));


app.listen(4000, () => {
    console.log(`Servidor correndo na porta ${ 4000 }`);
})