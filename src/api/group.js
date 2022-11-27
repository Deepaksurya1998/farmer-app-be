const express = require('express');

const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
router.post('/createGroup', async (req, res) => {
    let data = req.body
    let group = await prisma.Group.create({
        data
    })    
    res.json({
       status:"SUCCESS" ,Group:group
    });
});

router.get('/getAllGroups', async (req, res) => {
    let group = await prisma.Group.findMany()
    res.json({
       status:"SUCCESS" ,Group:group
    });
});

router.post('/addUsers', async (req, res) => {
    data = req.body
    let group = await prisma.GroupUser.create({
        data
    })
    res.json({
       status:"SUCCESS" ,GroupDetails:group
    });
});




module.exports = router;