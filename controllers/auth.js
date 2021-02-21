// Son las funciones que hay definidas en routes/auth.js

// Se vuelve a requerir express, pero no vuelve a cargar la librería puesto que ya se
// cargó en otro .js.
// Realmente no hace falta, pero se vuelve a requerir para la ayuda de Intellisense en
// VSCode
const { response } = require('express');
const Usuario = require('../models/Usuario');

// De nuevo, res = response se hace para obtener la ayuda de Intellisense en VSCode
const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'Un usuario existe con ese correo',
      });
    }

    usuario = new Usuario(req.body);
    await usuario.save();

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  res.status(200).json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew',
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
