# CLI de Gestión de Usuarios con Node.js y MySQL

Este proyecto es una aplicación de línea de comandos (CLI) que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una base de datos MySQL.

## 🛠️ Requisitos
- [Node.js](https://nodejs.org/)
- [XAMPP](https://www.apachefriends.org/) (o cualquier servidor MySQL)

## 🏗️ Configuración de la Base de Datos
1. Abrir phpMyAdmin y crear una base de datos llamada `registro_personal`.
2. Ejecutar el siguiente script SQL para crear la tabla necesaria:
```sql
CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);