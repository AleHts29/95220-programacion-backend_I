

const fs = require('fs') // <--- fs es un modulo nativo de NODEJS

const dirName = './files/'
const fileName = 'ejemplo_03.txt'
const filePath = dirName + fileName


const operacionAsync = async () => {
    // write
    await fs.promises.writeFile(filePath, "Hola, 1er contenido!")


    // leemos
    let result = await fs.promises.readFile(filePath, 'utf-8')
    console.log("Data_01: ", result);



    // modificamos el archivo
    await fs.promises.appendFile(filePath, "Hola, 2do contenido!")


    // leemos
    let result2 = await fs.promises.readFile(filePath, 'utf-8')
    console.log("Data_02: ", result2);

    // borramos
}

operacionAsync()