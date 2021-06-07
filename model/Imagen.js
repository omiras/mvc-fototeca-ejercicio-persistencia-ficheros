
class Imagen {

    static bbddImagenes = [];

    constructor(titulo, url, fecha) {
        this.titulo = titulo;
        this.url = url;
        this.fecha = fecha;
    }

    static addImagen(titulo, url, fecha) {
        // crear una nueva Imagen
        const imagen = new Imagen(titulo, url, fecha)
        // añadirla a la 'bbddImagenes'
        this.bbddImagenes.push(imagen);
    }

    static esImagenRepetida(url) {
        return this.bbddImagenes.some(imagen => imagen.url == url);
    }

    static obtenerImagenes() {
        return this.bbddImagenes;
    }
}

// Cuando haga un require('./model/Imagen.js); lo que vamos a recibir es la clase Imagen

module.exports = Imagen;

//exports.imagen = Imagen;
// const imagen = require('./model/imagen.js).imagen;