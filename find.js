const cbFunction = (currentValue, searchValue) => {
    if (currentValue === searchValue) {
        return true
    }
}



const find = (array, cb = cbFunction) => {
    if (Array.isArray(array)) {
        for (let index = 0; index < array.length; index++) {
            let currentValue = array[index]
            const output = cbFunction(currentValue, 5, index)
            if (output) {
                return (`The searched value ${currentValue} is at index ${index}`)
            }
        }
    }
}
module.exports = find


