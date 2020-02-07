/*Mapping an array of numbers to an array of square roots*/
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

//console.log
//[1, 2, 4, 8].map(n => { return n * 2; })



/*Using map to reformat objects in an array*/



// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 
// kvArray is still: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]
/*
let kvarray =
    [{ key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }]

let reformattedArray = kvarray.map(obj => {
    let newArr = {};
    newArr[obj.key] = obj.value;
    return newArr;
})
*/
//console.log(reformattedArray);


//Mapping an array of numbers using a function containing an argument
// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]

//console.log( [1, 4, 9].map(n => { return n * 2; }) );

//let map = Array.prototype.map;
//console.log( map.call("hello", n => {return n.charCodeAt(0)}) );


$(document).ready(function () {
    let elems = document.querySelectorAll('div')
    // console.log(elems);
    let values = Array.prototype.map.call(elems, function (obj) {
        return obj.textContent;
    })

    //console.log(values);


});


// console.log(["1", "2", "3"].map(Number) );
// console.log(["10", "222", "3"].map(x =>  parseInt(x,undefined)) );

//console.log( parseInt("123", 12));


// let elems = document.querySelectorAll('div')
// let values = Array.prototype.map.call(elems, function(obj) {
//   return obj.value
// })


let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.map(function (num, index) {
    if (index < 3) {
        return num
    }
})

//console.log(filteredNumbers);




// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};


// Only change code below this line
function updateRecords(id, prop, value) {

    if(prop != "tracks" && value != ""){
        collection[id][prop] = value;
    }

    if (prop == "tracks") {
        if (collection[id][prop] == undefined) {
            collection[id][prop] = [];
        }
        collection[id][prop].push(value);

    }

      if (value == "") {
          delete collection[id][prop];
      }
  

    return collection;
}


// Alter values below to test your code
updateRecords(2468, "tracks", "Free")

console.log(collection);

//console.log(Object.prototype.toString.call(collection));
