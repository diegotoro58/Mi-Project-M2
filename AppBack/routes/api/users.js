import express from "express";
import userSchema from "../../models/users.model.js"

const  router = express.Router();

//Voy a crear mi usuario
router.post('/users', (require, response) => {
    const user = userSchema(require.body);
    user
    .save()
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});

//Voy a crear mi arreglo de usuarios
router.post('/usersMany', (require, response) => {
    const usersData = require.body;
    userSchema.insertMany(usersData)
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});

//Traer todos los usuarios
router.get('/users', (require, response) => {
   userSchema
   .find()
   .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))

});
router.get('/users/:id', (require, response) =>{
    const { id } = require.params;
    userSchema.findById(id)
    .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))
});

//Actualizar usuario
router.put('/users/:id', (require, response) =>{
    const { id } = require.params;
    const { name , lastname, age } = require.body;
    userSchema.updateOne({ _id: id }, {$set:{ name, lastname, age }})
    .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))
});

//Eliminar usuario
router.delete('/users/:id', (require, response) =>{
    const { id } = require.params;
    userSchema.deleteOne({ _id: id })
    .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))
});


export default router;