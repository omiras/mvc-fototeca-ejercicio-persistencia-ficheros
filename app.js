// Simplemente por orden, requiero los módulos primero
const express = require('express');

const imagesRoutes = require('./routes/imagen');
const indexRoutes = require('./routes/index')

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))

// Prefija todas las rutas de 'imagesRoutes'. Todas estas rutas 
app.use(indexRoutes);

// Todos los endpoints que dan funcionalidad a la gestión de imagenes de nuestra aplicación; estarán prefijados en la URL por /imagenes
app.use('/imagenes', imagesRoutes);

// Si gestionaramos custom 404; puede ir aquí

app.listen(3000);