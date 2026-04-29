const pool = require('./config');
const { v4: uuidv4 } = require('uuid');

const obtenerUsuarios = async () => {
    try {
        // Pedimos todos los datos de la tabla 'users'
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    } catch (error) {
        console.error("Error al obtener usuarios:", error.message);
    }
};

const crearUsuario = async (username, email, password) => {
    // 1. Validar que no falten datos
    if (!username || !email || !password) {
        return console.log("Todos los campos son requeridos."); 
    }

    // 2. Validar que el email sea de Gmail
    if (!email.endsWith('@gmail.com')) {
        return console.log("El email debe terminar en @gmail.com."); 
    }

    try {
        const id = uuidv4(); // Generamos el ID único 
        await pool.query(
            'INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)',
            [id, username, email, password]
        );
        console.log("Usuario creado con éxito!");
    } catch (error) {
        console.error("Error al crear usuario:", error.message);
    }
};

const eliminarUsuario = async (id) => {
    try {
        // Ejecutamos la consulta usando el ID que recibimos por la consola
        const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);

        // Verificamos si realmente se borró alguien (affectedRows > 0)
        if (result.affectedRows === 0) {
            return console.log("Error: Usuario no encontrado."); 
        }

        console.log("Usuario eliminado correctamente."); 
    } catch (error) {
        console.error("Error al eliminar usuario:", error.message); 
    }
}
const actualizarUsuario = async (username, email, password, id) => {
    // Validamos datos básicos y el email de Gmail [cite: 24, 25]
    if (!username || !email || !password || !id) {
        return console.log("Todos los campos (incluyendo el ID) son requeridos.");
    }
    if (!email.endsWith('@gmail.com')) {
        return console.log("El email debe terminar en @gmail.com.");
    }

    try {
        const [result] = await pool.query(
            'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',
            [username, email, password, id]
        );

        if (result.affectedRows === 0) {
            return console.log("Error: No se pudo actualizar. Usuario no encontrado."); 
        }

        console.log("Usuario actualizado con éxito!");
    } catch (error) {
        console.error("Error al actualizar:", error.message);
    }
};

module.exports = {
    obtenerUsuarios,
    crearUsuario,
    eliminarUsuario,
    actualizarUsuario
    // Después agregaremos 'actualizarUsuario' y 'eliminarUsuario'
};