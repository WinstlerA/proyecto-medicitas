const mysql = require('mysql');

// Configuración de conexión a la BD
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: 'medicitas_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la BD: ' + err.stack);
    return;
  }
  console.log('Conectado a la Base de Datos con ID ' + connection.threadId);
});

module.exports = connection;
