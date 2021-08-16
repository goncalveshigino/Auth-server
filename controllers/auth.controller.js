const { response } = require('express');



const createUser =  (req, res = response ) => {

    return res.json({
        ok: true,
        msg: 'Criar usuario'
    });

}


const loginUser = (req, res = response ) => {

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