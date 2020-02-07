let arr = [1, 2, 3, 4, 5]

//console.log( arr.find(x => x * 2)) ;



const inventory = [
    { name: "banana", quantity: 2 },
    { name: "banana", quantity: 2 },
    { name: "cherry", quantity: 2 }
]
/*
function isCherry(fruit) {
    return fruit.name === "cherry";
}
*/

//console.log( inventory.find(x => x.name =="cherry"));

// // Declare array with no elements at indexes 2, 3, and 4
const array = [0, 1, , , , 5, 6];

// // Shows all indexes, not just those with assigned values
// array.find(function (value, index) {
//     console.log('Visited index ', index, ' with value ', value);
// });


// Shows all indexes, including deleted
array.find(function (value, index) {
    // Delete element 5 on first iteration
    if (index === 0) {
        //console.log('Deleting array[5] with value ', array[5]);
        delete array[5];
    }
    // Element 5 is still visited even though deleted
    //console.log('Visited index ', index, ' with value ', value);
});



function sum(arr, n) {
    if (n < 0) return false
    return sum(arr, n - 1) + arr[n];
}


//console.log(sum([2, 3, 4], 1));

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    var nameObj = contacts.find(x => x.firstName === name);
    if (nameObj) {
        var propObj = Object.keys(nameObj).find(y => y === prop);
        if (propObj) {
            return nameObj[propObj];
        }
        else return "No such property";
    } else return "No such contact"
}

// Change these values to test your function
//console.log(lookUpProfile("Sherlock", "address"));


function randomFraction() {
    return Math.floor(Math.random() * 10);
}


//console.log(randomFraction());

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// Change these values to test your function
var myRandom = randomRange(14, 15);
//console.log(myRandom);  




function countup(n) {
    console.log("kulso n: " + n);

    if (n < 1) {
        console.log("n < 1 ");
        return [];
    }

    else {
        console.log("call countup");
        var countArray =[];
        console.log(countArray);
        console.log("init countarray");
        countArray = countup(n - 1);
        console.log("------------------------------");
        // console.log(Object.prototype.toString.call(countArray));
        console.log("belso n: " + n);
        console.log("countarray: " + countArray);
        console.log(n);
        console.log("call push with " + n + ".");
        countArray.push(n);
        console.log("return countarray: " + countArray);
        return countArray;
    }
}


//console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]


// const arr2 = [];
// arr2.push(4);
// arr2.push(43);
// console.log(arr2);



//Only change code below this line
function countdown(n) {
    if (n < 1) {
      return [];
    }
  
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
  
  
  console.log(countdown(5)); // [5, 4, 3, 2, 1]
  