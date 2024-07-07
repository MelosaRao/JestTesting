import {calculator, validate} from './calculator'
describe("Calculator", () => {
    test('Not a number',()=>{
        expect(calculator.add(22,'www')).toBe('Argument is not a number')
    })

    test('Not a number 2',()=>{
        expect(calculator.add('ww',22)).toBe('Argument is not a number')
    })

    test('Division by zero',()=>{
        expect(calculator.divide(22,0)).toBe('division by zero is not allowed')
    })

    test('Add',()=>{
        expect(calculator.add(22,2)).toBe(24)
    })

    test('Subtract',()=>{
        expect(calculator.substract(22,2)).toBe(20)
    })

    test('multiply',()=>{
        expect(calculator.mulitply(22,2)).toBe(44)
    })

    test('divide',()=>{
        expect(calculator.divide(22,2)).toBe(11)
    })

});