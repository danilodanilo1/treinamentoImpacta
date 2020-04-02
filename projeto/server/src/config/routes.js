const express = require('express');

module.exports = server => {
  const router = express.Router();
  server.use('/api', router);

  const serviceCursos = require('../api/cursos/service');
  serviceCursos.register(router, '/cursos');

  const serviceContato = require('../api/contato/service');
  serviceContato.register(router, '/contato');

  const serviceCompromissos = require('../api/compromissos/service');
  serviceCompromissos.register(router, '/compromissos');

  const serviceProfessores = require('../api/professores/service');
  serviceProfessores.register(router, '/professores');
}