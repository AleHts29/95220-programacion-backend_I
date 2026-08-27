/**
 * Manejo de archivos usando NodeJs
 * Implementación usando nodejs:fs
 */

/**
 * Fs Sincrono:
 * 
    - writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
    - readFileSync = Para obtener el contenido de un archivo.
    - appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
    - unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
    - existsSync = Corrobora que un archivo exista!
*/

const fs = require('fs') // <--- fs es un modulo nativo de NODEJS

const dirName = './files/'
const fileName = 'ejemplo.txt'
const filePath = dirName + fileName

console.log(`Generando escritura de archivos en Sync con fileSystem, path:${filePath}`);

// solo crea un directorio
if (!fs.existsSync(dirName)) {
    console.log(`No existe el directorio ${dirName}, se inicia creacion del mismo...`);
    fs.mkdirSync(dirName)
}

// escribimos en el archivo
fs.writeFileSync(filePath, '1er mensaje::: Hola coders, estoy en un archivo usando el metodo writeFileSync')


if (fs.existsSync(filePath)) {
    // read
    let dataFile = fs.readFileSync(filePath, "utf-8");


    // imprimir data
    console.log("DataFile: ", dataFile);


    // add
    fs.appendFileSync(filePath, " - Nuevo Contenido!!")
    let data2File = fs.readFileSync(filePath, "utf-8");
    console.log("Data2File: ", data2File);


    // delete
    console.log('Borrando archivo...');
    fs.unlinkSync(filePath)

}
