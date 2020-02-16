$(document).ready(function () {

    // A property of an execution context (global, function or eval) 
    // that, in non–strict mode, is always a reference to an object 
    // and in strict mode can be any value.

    const test = {
        val: 32,
        func: function () {
            return this.val;
        }
    };
    //console.log(test.func());

    //console.log(this === window)


    function f1() {
        // 'use strict'
        return this;
    }

    var obj = { a: 'custom' };


    function whatsThis() {
        return this.a;
    }

    //  console.log( whatsThis() );
    //  console.log( whatsThis.call(obj) );
    //  console.log( whatsThis.apply(obj) );


    var t = 1;
    var t2 = new Number(1);
    var s2 = new String("abc");

    //  console.log(s2);

    //  console.log( typeof t );
    //  console.log( typeof s2 );

    function bar() {
        console.log(Object.prototype.toString.call(this));
    }

    //  var t = 7;
    //  var s = "abc"
    //  bar.call(s);

    function f() {
        return this.a;
    }

    var g = f.bind({ a: 'azerty' });

    var h = g.bind({ a: 'yoo' });

    // console.log(g);
    // console.log(g());

    //    console.log(h());

    var o = { a: 37, f: f, g: g, h: h }

    //  console.log( o.a, o.f(), o.g(), o.h() );


    var globalObject = this;
    var foo = (() => this);

    var obj = { func: foo };
    // console.log(obj.func() === globalObject); // true


    //console.log(foo.call()); // true

    var obj = {
        bar: function () {
            var x = (() => this);
            return x;
        }
    };

    var fn = obj.bar();

    //console.log(fn);
    var fn2 = obj.bar;

    //console.log( fn2()() );

    var o = {
        prop: 37,
    }

    function independent() {
        return this.prop;
    }



    //console.log(o.x());

    o.b = { g: independent, prop: 42 };

    //console.log(o.b.g());

    var o = { f: function () { return this.a + this.b } }

    var p = Object.create(o);

    p.a = 1;
    p.b = 4;

    //console.log(p.f());

    function bluify(e) {
        this.style.backgroundColor = 'blue';
    }

    var elements = document.getElementsByTagName('*');

    // for (let index = 0; index < elements.length; index++) {
    //     elements[index].addEventListener('click', bluify, false);

    // }

    var e = Number('22');
    //console.log(typeof e);

    var f = new Number('22');
    //console.log(typeof f);

    //console.log( Object.prototype.toString.call(e));
    //console.log( Object.prototype.toString.call(f));

    const organization = new Set();



    const organization2 = new Map();

    //console.log( "abc".charAt === String.prototype.charAt);
    const stats = {
        max: 56.78,
        standard_deviation: 4.34,
        median: 34.54,
        mode: 23.87,
        min: -0.75,
        average: 35.85
    };

    // use function argument destructuring
    // change code below this line

    const half = ({ max, min }) => (max + min) / 2.0;


    //const half = (stats) => (stats.max + stats.min) / 2.0; 
    // change code above this line

    // console.log(stats); // should be object
    // console.log(half(stats)); // should be 28.015

    // console.log(half);

    // console.log( Object.prototype.toString.call(half));

    const result = {
        success: ["max-length", "no-amd", "prefer-arrow-functions"],
        failure: ["no-var", "var-on-top", "linebreak"],
        skipped: ["id-blacklist", "no-dup-keys"]
    };

    function makeList(arr) {
        "use strict";

        // change code below this line
        const resultDisplayArray = [];

        for (let index = 0; index < arr.length; index++) {
            resultDisplayArray.push(`<li class="text-warning">${arr[index]}</li>`)
        }

        return resultDisplayArray;
    }

    /**
     * makeList(result.failure) should return:
     * [ `<li class="text-warning">no-var</li>`,
     *   `<li class="text-warning">var-on-top</li>`,
     *   `<li class="text-warning">linebreak</li>` ]
     **/
    const resultDisplayArray = makeList(result.failure);
    console.log(resultDisplayArray);
















});