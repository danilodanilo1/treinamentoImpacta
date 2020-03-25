const express = require('express');

module.exports = server => {
  const router = express.Router();
  server.use('/api', router);

  const serviceCursos = require('../api/cursos/service');
  serviceCursos.register(router, '/cursos');
}