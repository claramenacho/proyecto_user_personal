const { obtenerUsuarios, crearUsuario, eliminarUsuario,
    actualizarUsuario } = require('./controllers');

const main = async () => {
    const comando = process.argv[2]; // Capturamos el comando 

    switch (comando) {
        case 'get':
            const usuarios = await obtenerUsuarios();
            console.table(usuarios); // Muestra los usuarios en una tabla linda [cite: 50]
            break;

        case 'add':
            // Capturamos: username, email, password 
            const [ , , , username, email, password] = process.argv;
            await crearUsuario(username, email, password);
            break;

        case 'delete':
            //capturamos:  solo el id
            const idBorrar = process.argv[3];
            await eliminarUsuario(idBorrar);
            break;

        case 'update':
            //capturamos los 4 datos que vienen después de update
            const [ , , , userUpd, emailUpd, passUpd, idUpd] = process.argv;
            await actualizarUsuario(userUpd, emailUpd, passUpd, idUpd);
            break;

        default:
            console.log("Comando no reconocido. Usá 'get' o 'add'.");
    }
    // Cerramos el proceso al terminar
    process.exit();
};

main();