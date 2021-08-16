

const { Router } = require('express');

const { createUser, revalidarToken } = require('../controllers/auth.controller');
const { loginUser } = require('../controllers/auth.controller');

const router = Router();


//Criar um novo usuario
router.post('/new', createUser );

//Fazer login do usuario
router.post('/', loginUser );


//Validar e Revalidar token 
router.get('/renew', revalidarToken );




module.exports = router;