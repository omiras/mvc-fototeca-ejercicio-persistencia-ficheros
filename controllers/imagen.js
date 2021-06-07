
const Imagen = require('../model/Imagen');

exports.getAllImages =(req, res) => {
    res.render('index', {
        imagenes : Imagen.obtenerImagenes()
    })
}

exports.getForm = (req, res) => {
    res.render('nueva-imagen', {
        error: false
    });
}

exports.postForm = (req, res) => {
    console.log(req.body);

    // voy a comprobar si ya existe una imagen con la misma URL
    const esRepetida = Imagen.esImagenRepetida(req.body.url)

    // Si la imagen no está repetida, la añadimos a la base de datos y le damos un mensaje de OK al usuario
    if (!esRepetida) {
        Imagen.addImagen(req.body.title, req.body.url, req.body.fecha);
      
        return res.redirect('/');
    }

    // Si la imagen está repetida, informar al usuario
    // una técnica seria renderizar la misma vista del formulario, pero con un mensaje error
    res.render('nueva-imagen', {
        error: true
    })

}