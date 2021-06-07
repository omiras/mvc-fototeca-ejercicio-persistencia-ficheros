const fs = require('fs')
const path = require('path')

class Imagen {

    static bbddImagenes = [];

    constructor(titulo, url, fecha) {
        this.titulo = titulo;
        this.url = url;
        this.fecha = fecha;
    }

    static addImagen(titulo, url, fecha) {

        // 1. Recuperar todos los datos del fichero
        // 2. Modificar el array de objetos recuperado
        // 3. Volver a escribir el fichero con los datos actualizados 

        // crear una nueva Imagen
        const imagen = new Imagen(titulo, url, fecha)
        // añadirla a la 'bbddImagenes'
        this.bbddImagenes.push(imagen);
    }

    static esImagenRepetida(url) {
        return this.bbddImagenes.some(imagen => imagen.url == url);
    }

    static obtenerImagenes() {
        const data = fs.readFileSync(path.join(__dirname, "imagenes.json"));
        return JSON.parse(data);
    }
}

// Cuando haga un require('./model/Imagen.js); lo que vamos a recibir es la clase Imagen

module.exports = Imagen;

//exports.imagen = Imagen;
// const imagen = require('./model/imagen.js).imagen;