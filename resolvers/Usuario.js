const {perfils} = require('../data/db');

module.exports = {
  salario(usuario) {
    return usuario.salario_real;
  },
  perfil(usuario) {
    const selecionados = perfils.find((p) => p.id == usuario.perfil_id);
    return selecionados ? selecionados : null;
  },
};
