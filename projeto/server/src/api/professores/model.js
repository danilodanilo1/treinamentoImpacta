const restful = require('node-restful')
const mongoose = restful.mongoose;

const modelo = new mongoose.Schema({

  nome: { type: String, required: true },
  especialidade: { type: String, required: true },
  certificacoes: { type: String, required: true },

});

module.exports = restful.model('professores', modelo);