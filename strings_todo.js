// Remove Blanks
// let str = "pl ay that f"
function removeBlanks(str) {
    let temp = ""
    for (let i=0; i < str.length; i++) {
        console.log(str[i])
        if (str[i] !== " ") {
            temp += str[i]
        }
    }
    return temp
}

// console.log(removeBlanks(str))

// Get Digits
// let str = "adf123adfd123"

function getDigits(str) {
    let temp = ""
    for (let i=0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            temp += str[i]
        }
    }
    let newVal = Number(temp)
    return newVal
}

// console.log(getDigits(str))

// Acronyms
// let str = "Live from New York, it's Saturday Night!"

function acronyms(str) {
    let newStr = str.split(' ')
    let temp = ""
    for (let i=0; i < newStr.length; i++) {
        // console.log(newStr[i][0])
        temp += newStr[i][0].toUpperCase()
    }
    return temp
}
// console.log(acronyms(str))

// Count Non-Spaces
// let str = "Hello world !"
function countNonSpaces(str) {
    let count = 0
    for (let i=0; i < str.length; i++) {
        // console.log(str[i])
        if (str[i] !== " ") {
            count += 1
        }
    }
    return count
}
// console.log(countNonSpaces(str))

// Remove Shorter Strings
let arr = ['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello']
let strNum = 4

function removeShorty (arr, num) {
    let tempArray = []
    for (let i=0; i<arr.length; i++) {
        if (arr[i].length >= num) {
            tempArray.push(arr[i])
        }
    }
    return tempArray
}
console.log(removeShorty(arr, strNum))
