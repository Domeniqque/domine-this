
function Person (name, year) {
  this.name = name
  this.year = year || 1
}

Person.prototype.speak = function (words) {
  console.log(this.name + ', de ' + this.year + ' anos, falou "' + words + '".')
}

Person.prototype.age = function (years) {
  this.year += years || 1
  console.log(this)
}

function Domeniqque (name, year, count) {
  Person.call(this, name, year)
  this.count = 0
}

Domeniqque.prototype = Person.prototype

Domeniqque.prototype.steps = function (steps) {
  console.log(this.name + ' walked ' + steps + ' steps')
}
const domeniqque = new Domeniqque('Domeniqque Dylluar', 20)

const bianca = new Person('Bianca Vidotto', 20)

domeniqque.steps(12)
domeniqque.age()
bianca.age()
