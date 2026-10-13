const {sum, capitalL, reverseString, subtract, multiple, divide, ceasarCiphere } = require('./testing');

test('First Letter Capitalized', () => {
    expect(capitalL('anyword')).toMatch('Anyword');
});

test('Reverse The String', () => {
    expect(reverseString('hello')).toMatch('olleh');
});

test('Add', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Subtract', () => {
    expect(subtract(4, 2)).toBe(2);
});

test('Multiply', () => {
    expect(multiple(3, 4)).toBe(12);
});

test('Division', () => {
    expect(divide(12, 4)).toBe(3);
});

test('Ceasar Cipher', () => {
    expect(ceasarCiphere()).toBe();
});

