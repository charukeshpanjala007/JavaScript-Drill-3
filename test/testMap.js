const mapFunction = require("../map.js")

const test1 = [1, 2, 3, 4, 5, 5]
const test2 = {one:1, two:2, three:3}
const test3 = null
const test4 = undefined
const test5 = "abcdefg"

console.log("Test Case-1")
let output = mapFunction(test1)
console.log(output)

console.log("Test Case-2")
output = mapFunction(test2)
console.log(output)

console.log("Test Case-3")
output = mapFunction(test3)
console.log(output)

console.log("Test Case-4")
output = mapFunction(test4)
console.log(output)

console.log("Test Case-5")
output = mapFunction(test5)
console.log(output)

