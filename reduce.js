const cbFunction = (previousValue, currentValue) => {
    if (currentValue) {
        return (previousValue + currentValue)
    }
}


const reduce = (array, cb = cbFunction, startingValue) => {
    if (Array.isArray(array)) {
        let previousValue = array[0]
        let currentValue
        let index
        if (startingValue) {
            previousValue = startingValue 
            index = 0 
        }else{
            previousValue = array[0]
            index = 1
        }
        for (index; index < array.length; index++) {
            currentValue = array[index]
            previousValue = cbFunction(previousValue, currentValue,index, array)
        }
        return previousValue
    }
    return "Invalid Input"
}

module.exports = reduce
