const { response } = require('express');

const getEventos = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'getEventos',
  });
};

const crearEvento = (req, res = response) => {
  // verificar que tenga el evento
  console.log(req.body);

  res.json({
    ok: true,
    msg: 'crearEvento',
  });
};

const actualizarEvento = (req, res = response) => {
  const { id } = req.params;

  res.json({
    ok: true,
    id,
    msg: 'actualizarEvento',
  });
};

const eliminarEvento = (req, res = response) => {
  const { id } = req.params;

  res.json({
    ok: true,
    id,
    msg: 'eliminarEvento',
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
