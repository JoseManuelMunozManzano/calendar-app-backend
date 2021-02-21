// Son las funciones que hay definidas en routes/auth.js

// Se vuelve a requerir express, pero no vuelve a cargar la librería puesto que ya se
// cargó en otro .js.
// Realmente no hace falta, pero se vuelve a requerir para la ayuda de Intellisense en
// VSCode
const { response } = require('express');

// De nuevo, res = response se hace para obtener la ayuda de Intellisense en VSCode
const crearUsuario = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'registro',
  });
};

const loginUsuario = (req, res) => {
  res.json({
    ok: true,
    msg: 'login',
  });
};

const revalidarToken = (req, res) => {
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
