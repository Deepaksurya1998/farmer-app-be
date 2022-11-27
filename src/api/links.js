const express = require('express');

const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
router.post('/create', async (req, res) => {
  let data = req.body
  let create = await prisma.Links.create({
    data
})  
    
    res.json({
       status:"SUCCESS" ,Created:create
    });
});

router.get('/all', async (req, res) => {
   const links =  await prisma.Links.findMany()
    res.json({
        Links: links, status:"SUCCESS"
    });
});

router.delete('/delete/:id', async (req, res) => {
    const deleteUser = await prisma.Links.delete({
        where: {
          id: parseInt(req.params.id) ,
        },
      })

      res.json({
        status:"SUCCESS" , deleted:deleteUser
    });
 });

module.exports = router;