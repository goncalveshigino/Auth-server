

const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, revalidarToken } = require('../controllers/auth.controller');
const { loginUser } = require('../controllers/auth.controller');

const router = Router();


//Criar um novo usuario
router.post('/new', createUser );

//Fazer login do usuario
router.post('/', [
    check('email', 'O e-mail é obrigatório').isEmail(),
    check('password', 'A senha é obrigatória').isLength({ min: 6 })
],loginUser );


//Validar e Revalidar token 
router.get('/renew', revalidarToken );




module.exports = router;