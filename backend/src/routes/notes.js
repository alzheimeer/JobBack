//importamos una funcion desde express llamada Router
const { Router } = require('express');
//ejecutamos la funcion y el resultado nos devuelve un objeto llamado router
const router = Router();

const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(createNote)



router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)




//exportamos este objeto y lo usamos en las rutas
module.exports = router;