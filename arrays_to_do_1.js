const array1 = [1,1,2,2,2,2,3,3,3,3,4,5,5,5]
const val1 = 91
const idx1 = 3

function pushFront(array, value) {
    for (let i=array.length; i>0; i--) {
        array[i] = array[i-1]
    }
    console.log(array)
    array[0] = value
    return array
}

// console.log(pushFront(array1, val1))


function popFront(array) {
    let newVal = array[0]
    for (let i=1; i<array.length+1; i++) {
        array[i-1] = array[i]
    }
    array.pop(array[array.length-1])
    console.log(array)
    return newVal
}

// console.log(popFront(array1))


function insertAt(array, idx, val) {
    for (let i=array.length; i>idx; i--) {
        array[i] = array[i-1]
    }
    array[idx] = val
    return array
}

// console.log(insertAt(array1, idx1, val1))


function removeAt(array, idx) {
    let removedVal = array[idx]
    for (let i=idx+1; i<array.length+1; i++) {
        array[i-1] = array[i]
    }
    array.pop(array[array.length-1])
    // console.log(array)   
    return removedVal
}

// console.log(removeAt(array1, idx1))


function swapPairs (arr) {
    for (let i = 0; i<arr.length-1; i+=2) {
        const temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }
    
    return arr
}

// console.log(swapPairs(array1))


// function removeDuplicate(arr) {
//     let length = 0;
//     const temp = {};
//     let startNum = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (!temp[arr[i]]) {
//             temp[arr[i]] = startNum;
//             arr[length] = arr[i];
//             length++;
//         }
//     }
    
//     if (!temp[arr[arr.length-1]]) {
//         length--;
//     }
//     arr.length = length
//     return arr;
// }

// console.log(removeDuplicate(array1))


function removeDuplicate(arr) {
    let length = 0;
    let tempIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1] || arr[i] === arr[i-1]) {
            tempIdx = i
            removeAt(arr, tempIdx)
        }
        // console.log(arr)
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            tempIdx = i
            removeAt(arr, tempIdx)
        }
        // console.log(arr)
    }

    return arr;
}

console.log(removeDuplicate(array1))