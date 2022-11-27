const auth = require('../services/auth.service');
const createError = require('http-errors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
class authController {
    static register = async (req, res, next) => {
        console.log("register function is called");
        try {
            const user = await auth.register(req.body);

            // userresult = await prisma.user.create({
            //     user
            // })

            res.status(200).json({
                status: true,
                message: 'User created successfully',
                data: user
            })
        }
        catch (e) {
            console.log("error is",e);
            res.status(401).json({
                status:"ERROR",
                message: 'unbale to register'
               // data: user
            })
        }
    }
    static login = async (req, res, next) => {
         try {
            const data = await auth.login(req.body)
            res.status(200).json({
                status: true,
                message: "Account login successful",
                data
            })
        } catch (e) {
            res.status(401).json({
                status:"ERROR",
                message: 'Wrong Email id or password'
               // data: user
            })
        }
    }
    static all = async (req, res, next) => {
        try {
            const users = await auth.all();
            res.status(200).json({
                status: true,
                message: 'All users',
                data: users
            })
        }
        catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }
}
module.exports = authController;