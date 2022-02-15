// printing from function . ....

function demo () {
    console.log("I am a function")
}
demo()

function demo1 () {}

// returning from a function

function demo1 () {
    return 4;
}

// local and global variables

var ab = 10;

function demo7() {
    var ab = 20;
    console.log(ab);
}
demo7();
console.log(ab);



// functions and parameter

function demo3 (a, b)
    {
        console.log(a + b);
    }

demo3(2)

demo3(2, 3, 4)

demo3(3, 4)

function demo4(a, b=5){
    return a + b;
}
demo4(2, 6)

function demo5()   {
    console.log(i);
    var i = 10;
}


function demo6 () {
    console.log(J);
}
var J = 0;
demo6()



// Nested functions 

function demo9 () {
    function demo10 () {
        console.log("inner function");
    }
    demo10();
    console.log("outer function");
}



// Function expression 

var func10 = function fexp () {
    console.log("func exp.")
}
undefined
var func10 = function () {
    console.log("func exp.")
}
undefined
var func10 = function fexp () {
    fexp();
    console.log("func exp.")
}


// iterating over aaray 

//for loop
var arr = [1, 4, 6, 7, 9];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// for each .....

function printvalue (element) {
    console.log(element);
}

arr.forEach(printvalue);

// map .....

arr.map(printvalue);