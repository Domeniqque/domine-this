class Pessoa {
  constructor (nome, idade = 1) {
    this.nome = nome
    this.idade = idade
  }

  falar (words) {
    console.log(this.name + ', de ' + this.year + ' anos, falou "' + words + '".')
  }

  envelhecer (anos = 1) {
    this.idade += anos
    console.log(this)
  }
}

class Homem extends Pessoa {
  constructor (nome, idade = 1) {
    super(nome, idade)
    this.sexo = 'masculino'
  }
}

const domeniqque = new Homem('domeniqque', 25)
console.log(domeniqque)
