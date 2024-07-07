export function caesarCipher(str, shift=3){
    if(typeof str !== 'string'){
        return null
    }
    let new_str = ""

    for(let i= 0; i<str.length; i++){
        let charcode = str[i].charCodeAt()

        if((charcode>=65 && charcode<= 90) || (charcode >= 97 && charcode <= 122)){
            charcode += shift

            while ((charcode > 90 && str[i] <= 'Z') || charcode > 122) {
                charcode -= 26;
              }
        }

        new_str += String.fromCharCode(charcode)
    }
    return new_str
}
