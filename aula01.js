function Person (name, year) {
  this.name = name
  this.year = year || 1
  this.speak = function (words) {
    console.log(this.name + ', de ' + this.year + ' anos, falou "' + words + '".')
  }
  this.age = function (years) {
    console.log(this.year += years || 1)
  }
}

var person1 = new Person('Domeniqque Dylluar', 21)
person1.speak('Lero lero :P')
person1.age(14)

var person2 = new Person('Bianca Vidotto', 19)
person2.speak('Lorem ipsum dolor sit armet')
person2.age(1)
