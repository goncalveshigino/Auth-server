const { response } = require('express');
const { validationResult } = require('express-validator')



const createUser = (req, res = response) => {

    const { name, email, password } = req.body;
        
    return res.json({
        ok: true,
        msg: 'Criar usuario'
    });

}


const loginUser = (req, res = response) => {

    const { email, password } = req.body;

    return res.json({
        ok: true,
        msg: 'Login de usuario'
    })

}


const revalidarToken = (req, res = response ) => {

    return res.json({
        ok: true,
        msg: 'Revalidar token do usuario'
    })

}


module.exports = {

    createUser,
    loginUser,
    revalidarToken
}