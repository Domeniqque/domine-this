const cachorro = {
  nome: 'Pluck',
  idade: 5,
  idadeCanina () {
    return this.idade * 7
  },
  falar (text = 'au au ', vezes = 1) {
    for (var i = 1; i < vezes; i++) {
      text += text
    }
    console.log(`${this.nome} falou: "${text}"`)
  }
}

const pessoa = {
  nome: 'Domeniqque',
  idade: 20,
  falar (palavras) {
    console.log(`${this.nome} falou: "${palavras}"`)
  }
  // latir (text = 'au au') {
    // console.log(`${this.nome} latiu: "${text}"`)
    // cachorro.falar.call(this)
  // }
}

// Call e apply chamam uma função mudando seu contexto (this)
// cachorro.falar.call(pessoa, 'ua ua ua ', 4)
// cachorro.falar.apply(pessoa, ['ua ua ua ', 4])

// Bind, não chama uma função, ele retorna uma nova uma nova função
// com seu contexto (this ou parametros) modificado
// pessoa.latir = cachorro.falar.bind(pessoa, 'yo yo yo ', 4)
// pessoa.latir()

// Mais de bind
function add (a, b) {
  return a + b
}

const add20 = add.bind(undefined, 20)
const add44 = add.bind(undefined, 44)

console.log(add20(10), add44(33))
