
function Person(name, year) {
    this.name = name;
    this.year = year || 1;

    this.speak = function (words) {
        console.log(this.name + ', de ' + this.year + ' anos, falou "' + words + '".');
    };

    this.age = function (years) {
        this.year += years || 1;
        console.log(this);
    };
}

const domeniqque = new Person('Domeniqque Dylluar', 20);

console.log(domeniqque);