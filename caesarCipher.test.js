import { caesarCipher } from "./caesarCipher";

describe("Cipher", () => {
    test('xyz is abc',()=>{
        expect(caesarCipher('xyz',3)).toBe('abc')
    })

    test('HeLLo is KhOOr',()=>{
        expect(caesarCipher('HeLLo',3)).toBe('KhOOr')
    })

    test('Khoor, Zruog!',()=>{
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    })

});