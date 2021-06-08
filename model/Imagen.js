const fs = require('fs')
const path = require('path')
const rutaFichero = path.join(__dirname, "imagenes.json");

class Imagen {

    // La ruta a las de datos de fichero, es única para la clase Imagen

    constructor(titulo, url, fecha) {
        this.titulo = titulo;
        this.url = url;
        this.fecha = fecha;
    }

    static addImagen(titulo, url, fecha) {

        // 1. Recuperar todos los datos del fichero
        const imagenes = this.obtenerImagenes();

        // crear una nueva Imagen
        // 2. Modificar el array de objetos recuperado. Tenemos que añadir la nueva imagen

        const imagen = new Imagen(titulo, url, fecha)
        imagenes.push(imagen);

        // 3. Volver a escribir el fichero con los datos actualizados 
        fs.writeFileSync(rutaFichero, JSON.stringify(imagenes));
    }

    static esImagenRepetida(url) {
        const imagenes = this.obtenerImagenes();
        return imagenes.some(imagen => imagen.url == url);
    }

    static obtenerImagenes() {
        const data = fs.readFileSync(rutaFichero);
        return JSON.parse(data);
    }
}

// Cuando haga un require('./model/Imagen.js); lo que vamos a recibir es la clase Imagen

module.exports = Imagen;

//exports.imagen = Imagen;
// const imagen = require('./model/imagen.js).imagen;