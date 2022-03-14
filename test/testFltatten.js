const flatten = require("../flatten.js")

const test1 = [1, [2], [[3]], [[[4]]]]
const test2 = [1, [[2], [[3]], [[[4]]]]]
const test3 = null
const test4 = undefined
const test5 = [[1],[["Hello"],[[["World"]]]], [[[[[3]]]]], [4, 5]]

console.log("Test Case-1")
let output = flatten(test1)
console.log(output)

console.log("Test Case-2")
output = flatten(test2)
console.log(output)

console.log("Test Case-3")
output = flatten(test3)
console.log(output)

console.log("Test Case-4")
output = flatten(test4)
console.log(output)

console.log("Test Case-5")
output = flatten(test5)
console.log(output)

