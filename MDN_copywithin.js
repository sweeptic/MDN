



// console.log(Array.prototype.copyWithin.call(  { length: 5, 3: 1 } , 0, 3));




// console.log( [1, 2, 3, 4, 5].copyWithin( (0, 3, 4)) );
// [4, 2, 3, 4, 5]

/*
var object = { length: 5, 3: 1 }

console.log(object);

console.log(object[0]);
console.log(object[3]);
*/


//console.log( [1,2,3].copyWithin.call( 0, 3) );

// {0: 1, 3: 1, length: 5}


//console.log( [1, 2, 3, 4, 5].copyWithin(this, 0, 3) );
// [4, 5, 3, 4, 5]


//console.log( [].copyWithin.call({length: 5, 3: 1}, 0, 3) );
/*
console.log( [].copyWithin.call([1, 2, 3, 4, 5], 0, 3) ); 
console.log(Array.prototype.copyWithin.call(  { length: 5, 3: 1 } , 0, 3));

console.log( [1, 2, 3, 4, 5].copyWithin( 0, 3) );
*/


/*
function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

console.log(checkScope());
*/


function run() {
    // console.log(foo); // undefined
    // var foo = "Foo";
    // console.log(foo); // Foo
}

run();


function checkHoisting() {
    // console.log(foo); // ReferenceError
    // let foo = "Foo";
    // console.log(foo); // Foo
}

checkHoisting();


// var foo = "Foo";  // globally scoped
// let bar = "Bar"; // globally scoped

// console.log(window.foo); // Foo
// console.log(window.bar); // undefined



// 'use strict';
// var foo = "foo1";
// var foo = "foo2"; // No problem, 'foo' is replaced.

// let bar = "bar1";
// let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared



"use strict";
const s = [5, 6, 7];
// s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
s.push(45);
//console.log(s); // returns [5, 6, 45]



var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89

console.log(maximus);