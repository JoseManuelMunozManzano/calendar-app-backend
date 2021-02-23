/**
 * Rutas de Usuarios / Event
 * host + /api/events
 */

const { Router } = require('express');
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require('../controllers/events');

const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Obtener eventos
router.get('/', validarJWT, getEventos);

// Crear un nuevo evento
router.post('/', validarJWT, crearEvento);

// Actualizar evento
router.put('/:id', validarJWT, actualizarEvento);

// Borrar evento
router.delete('/:id', validarJWT, eliminarEvento);

module.exports = router;
