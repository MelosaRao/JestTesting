export function capitalize(str){
    if(typeof str !== 'string'){
        return 'Please enter a String';
    }

    let new_str = str[0].toUpperCase() + str.slice(1,).toLowerCase()
    return new_str;
}