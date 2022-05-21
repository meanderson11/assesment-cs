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