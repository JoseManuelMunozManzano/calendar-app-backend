const { response } = require('express');
const Evento = require('../models/Evento');

const getEventos = async (req, res = response) => {
  const eventos = await Evento.find().populate('user', 'name'); //populate('user', 'name password');

  res.json({
    ok: true,
    eventos,
  });
};

const crearEvento = async (req, res = response) => {
  const evento = new Evento(req.body);
  try {
    evento.user = req.uid;

    const eventoGuardado = await evento.save();

    res.status(201).json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    });
  }
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
