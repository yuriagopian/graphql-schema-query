const usuarios = [
  {
    id: 1,
    nome: "joao silva",
    email: "jsilva@gmail.com",
    idade: 29,
    perfil_id: 1,
    status: "ATIVO"
  },
  {
    id: 2,
    nome: "junior",
    email: "junin@gmail.com",
    idade: 40,
    perfil_id: 2,
    status: "INATIVO"
  },
  {
    id: 3,
    nome: "Ana gabriela",
    email: "ana_gab@gmail.com",
    idade: 22,
    perfil_id: 1,
    status: "BLOQUEADO"
  },
];

const perfils = [
  {
    id: 1,
    nome: "Comum",
  },
  {
    id: 2,
    nome: "Administrador",
  },
];

module.exports = { usuarios, perfils };
