const array = require("./arrays.js")


const cbFunction = (element, index) => {
    return (`Square of element at index ${index} is ${element*element}`)

}

const mapFunction = function (array, cb = cbFunction) {
    if (Array.isArray(array)) {
        let outputArray = []
        for (let index = 0; index < array.length; index++) {
            element = array[index]
            newElement = cb(element, index)
            outputArray.push(newElement)
        }
        return outputArray
    } 
    return "Invalid Input"
}


module.exports = mapFunction 
