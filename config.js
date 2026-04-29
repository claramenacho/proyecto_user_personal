const mysql = require('mysql2/promise');

// 2. Creamos el "Pool" (el grupo de conexiones listas para usar)
const pool = mysql.createPool({
  host: 'localhost',      // servidor local
  user: 'root',           // Usuario por defecto de phpMyAdmin
  password: '',           // Normalmente vacío en XAMPP
  database: 'registro_personal',   // El nombre de la base creada
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 3. Lo exportamos para que controllers.js lo pueda usar
module.exports = pool;