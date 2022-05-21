// 1) sum zero
function addToZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++){

            if (arr[j] === 0){
                return true;
            }
        }
    }
    return false
}

// let array = [1,2,3,-4, 5, 6, 20];
// console.log(addToZero(array));

// time complexity: O(n^2)
// space complexity: O(1)

// 2) Unique Characters
function hasUniqueChars(str) {
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        for(j = 0; j < str.length; j++){
            if(i === j){
                continue;
            }
            else if (char === str[j]){
                return true;
            }
        }
    }
    return false;
}

// console.log(hasUniqueChars("Monday")); true
// console.log(hasUniqueChars("Moonday")); false

// time complexity: O(n^2)
// space complexity: O(1)

// 3) Pangram Sentence
function isPangram(string) {
    let regex = /([a-z])(?!.*\1)/gi;
  return (string.match(regex)).length === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));// true
console.log(isPangram("This is not a pangram."));// false
console.log(isPangram("Pack my box with five dozen liquor jugs."));// true

// time complexity: O(n)
// space complexity: O(n)

// 4) Longest Word
function findLongestWord(arr) {
    let theLongest = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > theLongest) {
            theLongest = arr[i].length
        }
    }
    console.log(theLongest)
    return theLongest
}

findLongestWord(["hi", "hello"]);

// time complexity: O(n)
// space complexity: O(1)