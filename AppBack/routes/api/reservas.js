import express from "express";
import reservaSchema from "../../models/reservas.model.js"
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

const router = express.Router();

//Voy a crear mi reserva
// router.post('/reservas', (require, response) => {
//     const reserva = reservaSchema(require.body);
//     reserva
//         .save()
//         .then((data) => response.json(data))
//         .catch((error) => response.json({ message: error }))
// });

router.post('/reservas', (req, res) => {
    const { nombrecompleto, email, telnumero, ciudad, cpostal, pais, detallesviaje, destino, fechai, fechaf, numeroadultos, numeronino, tipohabit } = req.body;

    // Crea una instancia del modelo seguimiento con los datos proporcionados
    const newReserva = new reservaSchema({
        nombrecompleto,
        email,
        telnumero,
        ciudad,
        cpostal,
        pais,
        detallesviaje,
        destino,
        fechai,
        fechaf,
        numeroadultos,
        numeronino,
        tipohabit

    });

    // Guarda el nuevo registro en la base de datos
    newReserva
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Voy a crear mi arreglo de reservas
router.post('/reservasMany', (require, response) => {
    const reservasData = require.body;
    reservaSchema.insertMany(reservasData)
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});


export default router;