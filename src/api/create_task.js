const express = require('express');

const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const { route } = require('./emojis');

const prisma = new PrismaClient()
router.post('/create', async (req, res) => {
    let data = req.body

    let task = await prisma.TaskTemplate.create({
        data
    })    
    res.json({
       status:"SUCCESS" ,Task:task
    });
});

router.post('/alltask', async (req, res) => {
    let data = req.body
    let task = await prisma.TaskTemplate.findMany()    
    res.json({
       status:"SUCCESS" ,Task:task
    });
});
router.post('/create/functional', async (req, res) => {
    let data = req.body

    let task = await prisma.FunctionalGroup.create({
        data
    })  
    res.json({
        status:"SUCCESS" ,FunctionalGroup:task
     });
});

router.get('/functional', async (req, res) => {
  
    let task = await prisma.FunctionalGroup.findMany()  
    res.json({
        status:"SUCCESS" ,FunctionalGroup:task
     });
});

router.post('/user/alltask/', async (req, res) => {
    if(req.body.type == 'DAILY'){
        let task = await prisma.TaskTemplate.findMany({
            where:{
                category:req.body.type,
            },
        })
        let userLogThatDate =   await prisma.UserTask.findMany({
            where:{
                completedAt:req.body.date,
            },
        })
        for(let k=0;k<task.length;k++){
            task[k].completed = false

        }
        for(let i=0;i<task.length;i++){
            for(let j=0;j<userLogThatDate.length;j++){
                if(task[i].id == parseInt(userLogThatDate[j].tasktTemplateId)){
                   // console.log("true");
                    task[i].completed = true
                }
            }
        }
        res.json({
            status:"SUCCESS" ,userTask:task
         });
    }
    if(req.body.type == 'WEEKLY'){
        let task = await prisma.TaskTemplate.findMany({
            where:{
                category:req.body.type,
            },
        })
        let userLogThatDate =   await prisma.UserTask.findMany({
            where:{
                completedAt:req.body.date,
            },
        })
        for(let k=0;k<task.length;k++){
            task[k].completed = false

        }
        for(let i=0;i<task.length;i++){
            for(let j=0;j<userLogThatDate.length;j++){
                if(task[i].id == parseInt(userLogThatDate[j].tasktTemplateId)){
                   // console.log("true");
                    task[i].completed = true
                }
            }
        }
        res.json({
            status:"SUCCESS" ,userTask:task
         });
    }
    if(req.body.type == 'FUNCTIONAL'){
        let task = await prisma.TaskTemplate.findMany({
            where:{
                AND: [
                    { category:req.body.type },
                    { functionalGroup: req.body.functionalGroup  }
                  ],
            },
        })
        let userFunctionTaskLog =   await prisma.UserTask.findMany({
            where:{
                taskType:req.body.type,
            },
        })
        for(let k=0;k<task.length;k++){
            task[k].completed = false
        }
        for(let i=0;i<task.length;i++){
            for(let j=0;j<userFunctionTaskLog.length;j++){
                if(task[i].id == parseInt(userFunctionTaskLog[j].tasktTemplateId)){
                   // console.log("true");
                    task[i].completed = true
                }
            }
        }
        res.json({
            status:"SUCCESS" ,userTask:task
         });
    }
  
});

router.post('/complete', async (req, res) => {
    let data = req.body
    let task = await prisma.UserTask.create({
        data
    })    
    res.json({
       status:"SUCCESS" ,complete:task
    });
});





module.exports = router;