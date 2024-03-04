const array1 = [1,2,3,4,5]
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
    console.log(array)   
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


function removeDuplicates(arr) {
    for (let i = 0; i<arr.length-1; i++) {
        if (arr[i] == arr[i+1]) {
            idxList.push(i+1)
        }
    }
    return arr
}

console.log(arr(array1))