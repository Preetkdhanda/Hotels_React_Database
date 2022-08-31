const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {

    const router = express.Router()

    router.get('/', (req, res)=>{
        collection
        .find()
        .toArray()
        .then ((data)=> res.json(data))
        .catch((error)=>{ 
            console.error(error);
            res.status(500);
            res.json({status:500, error: error})
        })
    });


    router.get('/:id', (req, res)=>{
        const id = req.params.id;
        collection
        .findOne({_id: ObjectId(id)})
        .then((data)=>res.json(data))
        .catch((error)=>{
            console.error(error);
            res.status(500);
            res.json({status:500, error:error})
        });

    })

    router.post('/', (req, res)=>{
        const newData = req.body;
        collection
        .insertOne(newData)
        .then((result)=>{
            res.json(result.ops[0])
        })
        .catch((error)=>{
            console.error(error);
            res.status(500);
            res.json({status:500, error: error})
        })
    });


    router.delete('/:id', (req, res)=>{
        
        const id = req.params.id;
        const updatedData = req.body;
        collection
        .deleteOne({_id: ObjectId(id)})
        .then( result => res.json(result))
        .catch((error)=>{
            console.error(error);
            res.status(500);
            res.json({status:500, error: error})
        })
    });

    router.put('/:id', (req, res)=>{
        const id = req.params.id;
        const updatedData = req.body;
        collection
        .updateOne(
            {_id: ObjectId(id)},
            {$set: updatedData}
        )
        .then((result)=>{
            res.json(result)
        })
        .catch((error)=>{
            console.error(error)
            res.status(500)
            res.json({status:500, error:error})

        })


    })
  
    return router
};

module.exports = createRouter;