const cbFunction = (element, index,array) => {
    return (`Square of element at index ${index} in array ${array} is ${element * element}`)

}

const map = function (array, cb = cbFunction) {
    if (Array.isArray(array)) {
        let outputArray = []
        for (let index = 0; index < array.length; index++) {
            element = array[index]
            newElement = cb(element, index,array)
            outputArray.push(newElement)
        }
        return outputArray
    }
    return "Invalid Input"
}


module.exports = map

