/**
 * Fs Asincrono:
 * 
- writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
- readFile = Para obtener el contenido de un archivo. Como pide información, su callback es de la forma: (error, resultado)=>
- appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
- unlink = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
*/

const fs = require('fs') // <--- fs es un modulo nativo de NODEJS

const dirName = './files/'
const fileName = 'ejemplo_02.txt'
const filePath = dirName + fileName

let data = "Hola Coders, estoy en un archivo! - utilizando callbacks"

fs.mkdir(dirName, { recursive: true }, (error) => {
    if (error) throw Error('No se pudo crear el directorio base!')

    // write
    fs.writeFile(filePath, data, (error) => {
        if (error) throw Error('No se pudo crear/escribir en el archivo!')

        // read
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if (error) throw Error('No se pudo leer el archivo!')
            console.log("data_01_file: ", data);


            // add
            fs.appendFile(filePath, " - NUEVA DATA", (error) => {
                if (error) throw Error('No se pudo agregar nueva data en el archivo!')

                // read
                fs.readFile(filePath, 'utf-8', (error, data) => {
                    if (error) throw Error('No se pudo leer el archivo!')
                    console.log("data_02_file: ", data);
                })
            })

        })
    })
})