import { Request, Response } from 'express'
//import { getRepository } from 'typeorm';
//import * as Yup from 'yup';
//import User from '../models/User';
//import UserView from '../views/user_views';

var jwt = require('jsonwebtoken');

export default{
    async authenticate(request: Request, response: Response){
        const { email, password } = request.body;
        //const userRepository = getRepository(User);

        //const bcrypt = require('bcrypt');
        console.log('aqui')
        try{
            if(email == 'luis@luis' && password == '123'){
                console.log('aqui')
                const id = email;
                const token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 300 // expires in 5min
                });
                return response.json({
                    user: {
                        id: email,
                        name: email,
                        email:email,
                    },
                    authenticated: true,             
                    token: token,
                });
            }
            return response.json('Usuário não existe.');
        } catch{
            return response.json('Usuário não existe.');
        }

        // try{
        //     const user = await userRepository.findOneOrFail( { where:
        //         { email:email }
        //     });
             
        //     const match = await bcrypt.compare(password, user.password )
        //     if(match){
        //         const id = user.id
        //         const token = jwt.sign({ id }, process.env.SECRET, {
        //             expiresIn: 300 // expires in 5min
        //         });
        //         return response.json(UserView.renderLogin(user,token));
        //     }
        //     return response.json('Senha incorreta.');
        // } catch {
        //     return response.json('Usuário não existe.');
        // }
    },

    // async me(request: Request, response: Response){
    //     const {id} = request.params;
    //     const userRepository = getRepository(User);
    //     const user = await userRepository.findOneOrFail( { where:
    //         { id:id }
    //     });
    //     return response.json(user);
    // }
}