const cbFunction = (currentValue, index, array) => {
    if (currentValue % 2 === 0) {
        return true
    }
}



const filter = (array, cb = cbFunction) => {
    let output = []
    if (Array.isArray(array)) {
        for (let index = 0; index < array.length; index++) {
            let currentValue = array[index]
            const result = cbFunction(currentValue, index, array)
            if (result) {
                output.push(currentValue)
            }
        }
    }
    return output
}
module.exports = filter
