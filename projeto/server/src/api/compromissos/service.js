const service = require('./model');

service.methods(['get', 'post', 'put', 'delete']);
service.updateOptions({ new: true, runValidators: true });

module.exports = service;














