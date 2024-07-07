export function analyzeArray(array){
    if(array.length<0){return 'empty array length: 1'}
    let sum = 0; let min_ele = array[0]; let max_ele = array[0]
    array.forEach(element => {
        if(typeof element !== 'number'){
            return 'all elements not numbers'
        }
        sum += element;
        min_ele = Math.min(element, min_ele)
        max_ele = Math.max(element,max_ele)
    });
    

    return{"average": sum/array.length, "min": min_ele, "max": max_ele, "length": array.length }
}