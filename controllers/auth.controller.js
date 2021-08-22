const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt')




const createUser = async (req, res = response) => {

    const { name, email, password } = req.body;

 
        
    try {
         
      //Verificar se naoa existe o email
        const user = await User.findOne({ email: email });
        
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'Este email ja existe'
            })
        }

        const dbUser = new User(req.body);
        
        //Hashear a senha
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);

        //Generar el JWT
         const token = await generarJWT( dbUser.id, name );
        //Criar usuario de DB
        dbUser.save();
        
        //Generar resposta
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            token
        });
         
     } catch (error) {

      return res.json({
        ok: false,
        msg: 'Criar usuario'
      });

     }
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