const restful = require('node-restful')
const mongoose = restful.mongoose;

const modelo = new mongoose.Schema({
  codigo: { type: Number, required: true },
  descricao: { type: String, required: true },
  cargaHoraria: { type: Number, required: true, min: 4, max: 2000 },
  preco: { type: Number, required: true },
  categoria: {
    type: String, uppercase: true,
    enum: ['INFORMATICA', 'REDES', 'ADMINISTRACAO', 'ENGENHARIA']
  }
});

module.exports = restful.model('cursos', modelo);