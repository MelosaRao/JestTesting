export const calculator = {
    add : (a,b)=> {
        if(typeof a !== 'number' || typeof b !== 'number'){
            return 'Argument is not a number'
        }
        return a+b},

    substract: (a,b)=>{
        if(typeof a !== 'number' || typeof b !== 'number'){
            return 'Argument is not a number'
        }
        return a-b},

    mulitply:(a,b)=>{
        if(typeof a !== 'number' || typeof b !== 'number'){
            return 'Argument is not a number'
        }
        return a*b},
    divide:(a,b)=>{
        if(typeof a !== 'number' || typeof b !== 'number'){
            return 'Argument is not a number'
        }
        if(b==0){
            return 'division by zero is not allowed'
        }
        return a/b},
}
