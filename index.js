const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

//console.log(process.env);

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio público
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
// Todo lo que se va a exportar del archivo auth lo va a habilitar en la ruta /api/auth
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
