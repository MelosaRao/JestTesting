import {capitalize} from './capitalize'

test('is Captilized', () => {
  expect(capitalize('ring')).toBe('Ring');
});

test('Not String',()=>{
    expect(capitalize(123)).toBe('Please enter a String')
})