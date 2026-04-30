-- 1. Crear la base de datos (si no existe)
CREATE DATABASE IF NOT EXISTS registro_personal;
USE registro_personal;

-- 2. Crear la tabla de usuarios con su estructura
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);