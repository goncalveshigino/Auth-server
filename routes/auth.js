

const { Router } = require('express');

const router = Router();


//Criar um novo usuario
router.post('/new', (req, res) => {

    return res.json({
        ok: true,
        msg: 'Criar usuario'
    })

});

//Fazer login do usuario
router.post('/', (req, res) => {

    return res.json({
        ok: true,
        msg: 'Login de usuario'
    })

});


//Validar e Revalidar token 
router.get('/renew', (req, res) => {

    return res.json({
        ok: true,
        msg: 'Validar e Revalidar token '
    })

});




module.exports = router;