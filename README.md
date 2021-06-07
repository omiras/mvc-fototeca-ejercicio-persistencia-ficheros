# MVC Fototeca

Modifica el modelo de esta fototeca para conseguir los siguientes requisitos

## Requisito 1
Todas imagenes de la fototeca deben guardarse ahora, no en un array de objetos, si no en un fichero. Por ejemplo, puedes ponerle como nombre __imagenes.json__. 

Cada vez que añadimos una nueva imagen, debemos:

1. Leer el fichero imagenes.json
2. Añadir la imagen al array de objetos recuperados
3. Volver a guardar toda la información en imagenes.json

## Requisito 2
Mostrar todas las imágenes cuando hagamos un GET a 'http://localhost:3000/imagenes".

Para ello el **modelo** debe recuperar los datos de __imagenes.json__

Sabremos si lo hemos hecho bien cuando, al salir del servidor o reiniciarlo y volver más tarde; los datos sobre las imágenes que recuperamos son los que hemos guardado en __imagenes.json__

Nota: Para escribir ficheros en formato JSON:

```
const fs = require('fs')
fs.writeFileSync('file.json', JSON.stringify(arrayDeObjetosAGuardar));
```

A continuación, la tabla de endpoints generada tras ejecutar el script con todas las rutas:

```
Aplicación:
-----------
['GET', '/', ejecute la función anónima
definida en este mismo fichero]
['GET', '/imagenes', getAllImages]
['GET', '/imagenes/anadir', getForm]
['POST', '/imagenes/anadir', postForm]
```