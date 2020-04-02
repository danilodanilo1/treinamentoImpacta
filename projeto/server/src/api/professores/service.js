const professores = require('./model');

professores.methods(['get', 'post', 'put', 'delete']);
professores.updateOptions({ new: true, runValidators: true });

module.exports = professores;