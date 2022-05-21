const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 
//  The doubler insert : 786.447458
//  The doubler append : 2.105209

// Try it with first function
perf.start();                     // Starts timer 
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results 
                                        


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
// ------------------------------------------------

//  Time for tiny array:
perf.start();
doublerAppend(tinyArray);
let appendTinyArray = perf.stop();

perf.start();
doublerInsert(tinyArray);
let insertTinyArray = perf.stop();

console.log("Results for the tinyArray");
console.log("append", appendTinyArray.preciseWords);
console.log("insert", insertTinyArray.preciseWords);

// // -------------------------------------------------

// Time for small Array:

perf.start();
doublerAppend(smallArray);
let appendSmallArray = perf.stop();

perf.start();
doublerInsert(smallArray);
let insertSmallArray = perf.stop();

console.log("Results for the smallArray");
console.log("append", appendSmallArray.preciseWords)
console.log("insert", insertSmallArray.preciseWords);

// // -----------------------------------------------------

// Time for Medium Array:

perf.start();
doublerAppend(mediumArray);
let appendMediumArray = perf.stop();

perf.start();
doublerInsert(mediumArray);
let insertMediumArray = perf.stop();

console.log("Results for the mediumArray");
console.log("append", appendMediumArray.preciseWords)
console.log("insert", insertMediumArray.preciseWords);

// // -----------------------------------------------------

// Time for Large Array:

perf.start();
doublerAppend(largeArray);
let appendLargeArray = perf.stop();

perf.start();
doublerInsert(largeArray);
let insertLargeArray = perf.stop();

console.log("Results for the largeArray");
console.log("append", appendLargeArray.preciseWords)
console.log("insert", insertLargeArray.preciseWords);





