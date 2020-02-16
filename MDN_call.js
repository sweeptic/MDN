

const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];

for (let i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species
                + ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}



// for (let i = 0; i < animals.length; i++) {
//     animals[i].print();
// }

//animals[1].print();

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

let r = new Food('cheese', 5)
console.log(r.name);
// expected output: "cheese"

console.log(r);