const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<p> Home page de la Fototeca! Mira nuestra <a href="/imagenes/">lista de imagenes!</a>')
})

module.exports = router;