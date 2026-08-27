

class User {
    constructor(nombre, apellido, edad, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
    }
}



class UserManager {
    #users;
    #userDirPath;
    #usersFilePath;
    #fileSystem;


    constructor() {
        this.#users = new Array()
        this.#userDirPath = "./files"
        this.#usersFilePath = this.#userDirPath + "/usuarios.json"
        this.#fileSystem = require('fs')
    }



    // Creacionde usuario
    crearUsuario = async (nombre, apellido, edad, curso) => {
        // creamos el obj User
        const newUser = new User(nombre, apellido, edad, curso)
        console.log("New User: ", newUser);

        try {
            //Creamos el directorio
            await this.#fileSystem.promises.mkdir(this.#userDirPath, { recursive: true })


            //Validamos que exista ya el archivo con usuarios sino se crea vacío para ingresar nuevos:
            if (!this.#fileSystem.existsSync(this.#usersFilePath)) {
                // se crea un archivo vacio
                await this.#fileSystem.promises.writeFile(this.#usersFilePath, "[]")
            }


            //leemos el archivo
            let usuariosFile = await this.#fileSystem.promises.readFile(this.#usersFilePath, "utf-8")
            console.info("Archivo JSON obtenido desde archivo: ");
            console.log(usuariosFile);


            // Agregamos al array la informacion que hay en el archivo y ademas hacemos un parseo de .json a Objeto.
            this.#users = JSON.parse(usuariosFile)
            console.log("Usuarios encontrados: ");
            console.log(this.#users);


            this.#users.push(newUser);
            console.log("Lista actualizada de usuaros: ");
            console.log(this.#users);


            //Se sobreescribe el archivos de usuarios para persistencia.
            await this.#fileSystem.promises.writeFile(this.#usersFilePath, JSON.stringify(this.#users, null, 2, '\t'));


        } catch (error) {
            console.error(`Error creando usuario nuevo: ${JSON.stringify(newUser)}, detalle del error: ${error}`);
            throw Error(`Error creando usuario nuevo: ${JSON.stringify(newUser)}, detalle del error: ${error}`);
        }

    }


    // consulta de usuarios
    consultarUsuarios = async () => {
        try {
            //Creamos el directorio
            await this.#fileSystem.promises.mkdir(this.#userDirPath, { recursive: true });

            //Validamos que exista ya el archivo con usuarios sino se crea vacío para ingresar nuevos:
            if (!this.#fileSystem.existsSync(this.#usersFilePath)) {
                //Se crea el archivo vacio.
                await this.#fileSystem.promises.writeFile(this.#usersFilePath, "[]");
            }

            //leemos el archivo
            let usuariosFile = await this.#fileSystem.promises.readFile(this.#usersFilePath, "utf-8");
            //Obtenemos el JSON String 
            console.info("Archivo JSON obtenido desde archivo: ");
            console.log(usuariosFile);

            this.#users = JSON.parse(usuariosFile);
            console.log("Usuarios encontrados: ");
            console.log(this.#users);

            return this.#users;
        } catch (error) {
            console.error(`Error consultando los usuarios por archivo, valide el archivo: ${this.#userDirPath}, 
                detalle del error: ${error}`);
            throw Error(`Error consultando los usuarios por archivo, valide el archivo: ${this.#userDirPath},
             detalle del error: ${error}`);
        }
    }
}


module.exports = UserManager;