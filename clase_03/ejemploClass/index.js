

const UserManager = require("./UserManager.js");
let userManager = new UserManager();
console.log(userManager);




let persistirUsuario = async () => {
    // registrar un user
    await userManager.crearUsuario("Usuario4", "Apellido4", 20, "React JS");


    // consultar users
    let usuarios = await userManager.consultarUsuarios();
    console.log(`Usuarios encontrados en User Manager: ${usuarios.length}`);
    console.log(usuarios);
};
persistirUsuario();