let str = 'Hello World'
const reverseString = function(str) {
    let arr = str.split('')
    let reversedArr = []
    for(let i = 0; i < arr.length; i++) {
        reversedArr.unshift(arr[i])
    }
    let reversedStr = reversedArr.join('')
    return reversedStr
}
console.log(reverseString(str))

// Do not edit below this line
module.exports = reverseString;
