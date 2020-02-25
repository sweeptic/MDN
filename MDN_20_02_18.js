$(document).ready(function () {


    function largestOfFour(arr) {


        let r = Function.prototype.apply.bind(Math.max, null);

        // Olyan mint ha a Math.max ra meghivnam az apply-t
        console.log(Math.max.apply(null, arr[0]));

        // ...Vagy a function.apply ra meghivnam a math max et :)))
        let r2 = (...arr) => (Function.apply).call(Math.max, null, ...arr)

        console.log(r(arr[0]));

        console.log("r2:" + r2(arr[0]));





    }



    var unboundSlice = Array.prototype.slice;
    var myslice = Function.prototype.apply.bind(unboundSlice);

    console.log(Array.prototype.slice.apply([13, 27, 18, 26]));
    console.log([13, 27, 18, 26].slice());

    // olyan mint ha az Array.prototype.slice ra maghivnam az apply-t



    const x = {
        foo: function () {
            console.log(this.x);
        },
        x: 42
    }

    var myFoo = x.foo.bind({ x: 5 });

    x.foo(); // 42
    myFoo(); // 5



    //olyan mint ha az {x: 5} re meghivnam az x.foo function-t





    largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])

});