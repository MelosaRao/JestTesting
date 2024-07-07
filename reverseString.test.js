import {reverseStr} from './reverseString'
describe("reverseStr", () => {
    test('No String entered',()=>{
        expect(reverseStr(123)).toBe('ERROR Not a string')
    })

    test('Hello reversed as olleH',()=>{
        expect(reverseStr('Hello')).toBe('olleH')
    })

});

