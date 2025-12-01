const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
  res.send('API del Sistema MediCitas v1.0.0 is running...');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
