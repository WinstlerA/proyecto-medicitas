// Controlador para gestionar las citas médicas

const obtenerCitas = (req, res) => {
    // TODO: Conectar con base de datos
    res.json({ mensaje: "Listado de citas" });
};

const crearCita = (req, res) => {
    const { fecha, medicoId, pacienteId } = req.body;
    // Lógica para reservar cita
    console.log("Creando cita para:", fecha);
    res.status(201).json({ success: true, id: 101 });
};

module.exports = { obtenerCitas, crearCita };
