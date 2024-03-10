let x = [4,2,1,3,5]
// let idx = 2
// let temp = x[0]
// x[0] = x[idx]
// x[idx] = temp
// console.log(x)

function minToFront(arr) {
    let idx = 2
    let newVar = arr[idx]
    let temp = arr[0]
    console.log(arr)
    for (let i=0; i<arr.length; i++) {
        arr[i+1] = temp
        temp
    }
    arr[0] = newVar
    return arr
}
console.log(minToFront(x))