const array = require("./arrays.js")
const startingValue = array[0]

const cbFunction = (previousValue, currentValue) => {
    if (currentValue) {
        return (previousValue + currentValue)
    }
}



const reduce = (array, cb = cbFunction, startingValue) => {
    if (array) {
        let previousValue = array[0]
        let currentValue
        let index = 1
        if (startingValue) {
            previousValue = startingValue
            index = 0
        }
        for (index ; index < array.length; index++) {
            currentValue = array[index]
            previousValue = cbFunction(previousValue, currentValue)
        }
        return previousValue
    }
    return "Invalid Input"
}

module.exports = reduce