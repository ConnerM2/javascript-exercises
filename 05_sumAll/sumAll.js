const sumAll = function(num1, num2) {
    let sum = 0

    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    } else if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR'
    } else if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            sum += i
        }
        return sum
    } else if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            sum += i
        }
        return sum
    }

};

console.log(sumAll(60, 3))

//Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:
// Do not edit below this line
//module.exports = sumAll;
