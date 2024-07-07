export function reverseStr(str){
    if(typeof str!=='string'){
        return 'ERROR Not a string';
    }
   return str.split('').reverse().join('')
}