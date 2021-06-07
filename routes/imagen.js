const express = require('express');

const imagesController = require('../controllers/imagen') 

// instanciamos un nuevo objeto de la clase router
const router = express.Router();

// Ahora utilizamos el objeto 'router' para registrar todos los endpoints
router.get('/', imagesController.getAllImages)

router.get('/anadir', imagesController.getForm)

router.post('/anadir', imagesController.postForm)

module.exports = router;


