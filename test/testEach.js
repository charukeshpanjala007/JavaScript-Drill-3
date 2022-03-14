const eachFunction = require("../each.js")

const test1 = [1, 2, 3, 4, 5, 5]
const test2 = {one:1, two:2, three:3}
const test3 = null
const test4 = undefined
const test5 = "abcdefg"

console.log("Test Case-1")
eachFunction(test1)

console.log("Test Case-2")
eachFunction(test2)

console.log("Test Case-3")
eachFunction(test3)

console.log("Test Case-4")
eachFunction(test4)

console.log("Test Case-5")
eachFunction(test5)


