//importamos una funcion desde express llamada Router
const { Router } = require('express');
//ejecutamos la funcion y el resultado nos devuelve un objeto llamado router
const router = Router();
const { getUsers, getUser, createUsers, deleteUsers } = require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(createUsers)

router.route('/:id')
    .get(getUser)
    .delete(deleteUsers)

//exportamos este objeto y lo usamos en las rutas
module.exports = router;