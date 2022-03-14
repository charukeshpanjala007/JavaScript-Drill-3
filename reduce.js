const cbFunction = (previousValue, currentValue) => {
    if (currentValue) {
        return (previousValue + currentValue)
    }
}


const reduce = (array, cb = cbFunction, startingValue) => {
    if (Array.isArray(array)) {
        let previousValue = array[0]
        let currentValue
        if (startingValue) {
            previousValue = startingValue  
        }else{
            previousValue = array[0]
        }
        for (let index=0; index < array.length-1; index++) {
            currentValue = array[index+1]
            previousValue = cbFunction(previousValue, currentValue)
        }
        return previousValue
    }
    return "Invalid Input"
}

module.exports = reduce