const array = require("./arrays.js")

const cbFunction = (currentValue, searchValue, index) => {
    if(currentValue===searchValue){
        return (`The searched value ${searchValue} is at ${index} index`)
    }
}



const reduce = (array, cb = cbFunction) => {
    if (Array.isArray(array)){
        for (let index = 0; index < array.length; index++) {
            let currentValue = array[index]
            const output = cbFunction(currentValue, 5, index)
            if(output){
                return output
            }
        }
    }
}
module.exports = reduce


