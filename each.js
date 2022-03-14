const cbFunction = (element, index) => {
    console.log(`Index ${index} in the given array is ${element}`)

}

const array = [1, 2, 3, 4, 5, 5]
const eachFunction = function (array, cb = cbFunction) {
    if (Array.isArray(array)) {
        for (let index = 0; index < array.length; index++) {
            element = array[index]
            cb(element, index)
        }
    } else {
        console.log("Invalid Input")
    }
}


module.exports = eachFunction 
