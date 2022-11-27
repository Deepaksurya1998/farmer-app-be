const express = require('express');

const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
router.post('/create', async (req, res) => {

    let data = req.body
    let user = await prisma.UserActivityLogger.create({
        data
       
    })    
    res.json({
       status:"SUCCESS" ,Log:user
    });
});




module.exports = router;