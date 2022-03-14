const cbFunction = (element, result = []) => {
    if (!Array.isArray(element)) {
        result.push(element)
    } else {
        let x
        while (Array.isArray(element)) {
            [x] = element
            element = x
        }
        result.push(element)
    }
    return result
}

const flatten = (array) => {
    let output = []
    if (Array.isArray(array)) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index]
            if (element.length > 1) {
                const result = flatten(element)
                output= output.concat(result)
            }
            else{
                output = cbFunction(element, output)
            }
        }
    }
    return output
}
module.exports = flatten
