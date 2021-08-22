const express = require('express');
const cors = require('cors');
require('dotenv').config();


// Criar o servidor/ aplicacao do express
const app = express();


//Directorio publico
app.use( express.static('public'))

//CORS 
app.use( cors() );


//Leitura y parseo del body 
app.use( express.json() )

//Routes
app.use('/api/auth', require('./routes/auth.routes'));


app.listen(process.env.PORT, () => {
    console.log(`Servidor correndo na porta ${ process.env.PORT }`);
})