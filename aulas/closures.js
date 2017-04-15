function Pessoa (nome, idade, senha) {
  this.getIdade = function () {
    return idade
  }

  this.getNome = function () {
    return nome
  }

  this.verificaSenha = function (value) {
    return value === senha
  }
}

const domeniqque = new Pessoa('Domeniqque Dylluar', 20, 'ASds23')

// console.log(domeniqque)
// console.log(domeniqque.getNome())
// console.log(domeniqque.getIdade())
// console.log(domeniqque.verificaSenha('ASds23'))

function soma (a, b) {
  return a + b
}

function add (a) {
  return function (b) {
    return soma(a, b)
  }
}

const soma5 = add(5)

console.log(soma5(4))
