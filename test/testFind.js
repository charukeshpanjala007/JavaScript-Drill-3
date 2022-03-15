const find = require("../find.js")

const test1 = [1, 2, 3, 4, 5, 5]
const test2 = { one: 1, two: 2, three: 3 }
const test3 = null
const test4 = undefined
const test5 = "abcdefg"

console.log("Test Case-1")
let output = find(test1)
console.log(output)

console.log("Test Case-2")
output = find(test2)
console.log(output)

console.log("Test Case-3")
output = find(test3)
console.log(output)

console.log("Test Case-4")
output = find(test4)
console.log(output)

console.log("Test Case-5")
output = find(test5)
console.log(output)

