const { usuarios, perfils } = require("../data/db");

module.exports = {
  ola() {
    return "Basta retornar uma String";
  },
  horaAtual() {
    const horaAtual = new Date().toISOString();
    return horaAtual;
  },
  horaAtualDate() {
    return new Date();
  },
  usuarioLogado(obj) {
    console.log(obj);
    return {
      id: 1,
      nome: "Yuri",
      email: "yuri@gmail.com",
      idade: 24,
      salario_real: 10000,
      vip: true,
    };
  },
  produtoEmDestaque() {
    return {
      nome: "Bateria",
      preco: 1227.2,
      desconto: 0.15,
    };
  },
  numerosMegaSena() {
    // return [4,8,13,14,25,26,57,68]
    const crescente = (a, b) => a - b;
    const generateRandomNumber = () => parseInt(Math.random() * 100);
    // Retorna array com 6 posições com numeros aleatorios entre 1 e 60 e ordena de forma crescente
    return Array(6)
      .fill(0)
      .map(() => generateRandomNumber())
      .map((n, _, arr) =>
        arr.indexOf(n) === -1 ? (n = generateRandomNumber) : n
      )
      .sort(crescente);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    const selecionados = usuarios.find((u) => u.id === id);
    return selecionados ? selecionados : null;
  },
  perfils() {
    return perfils;
  },
  perfil(_, { id }) {
    const selecionados = perfils.find((p) => p.id == id);
    return selecionados ? selecionados : null;
  },
};
