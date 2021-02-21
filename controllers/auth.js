// Son las funciones que hay definidas en routes/auth.js

// Se vuelve a requerir express, pero no vuelve a cargar la librería puesto que ya se
// cargó en otro .js.
// Realmente no hace falta, pero se vuelve a requerir para la ayuda de Intellisense en
// VSCode
const { response } = require('express');
const { validationResult } = require('express-validator');

// De nuevo, res = response se hace para obtener la ayuda de Intellisense en VSCode
const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;

  // Manejo de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.status(201).json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  // Manejo de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

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
