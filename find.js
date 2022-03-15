const cbFunction = (currentValue, searchValue, index, array) => {
    if (currentValue === searchValue) {
        return currentValue
    }
}



const find = (array, cb = cbFunction) => {
    if (Array.isArray(array)) {
        for (let index = 0; index < array.length; index++) {
            let currentValue = array[index]
            const output = cbFunction(currentValue, 5, index, array)
            if (output) {
                return (`The searched value ${output} is at index ${index}`)
            }
        }
    }
}
module.exports = find


