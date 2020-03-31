const restful = require('node-restful')
const mongoose = restful.mongoose;

const modelo = new mongoose.Schema({
  data: { type: Date },
  nome: { type: String },
  email: { type: String },
  assunto: { type: String }
});

module.exports = restful.model('contato', modelo);