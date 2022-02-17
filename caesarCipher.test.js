const caesarCipher = require('./caesarCipher');

test('abcde shift 1, with punctuation', () => {
    expect(caesarCipher('abc,d,e',1)).toBe('bcd,e,f');
});

test('abcde shift 2, wrap z to a', () => {
    expect(caesarCipher('abcdeyz',2)).toBe('cdefgab');
});

test('negative shift', () => {
    expect(caesarCipher('aBc', -3)).toBe('xYz');
});

// test("handle negative numbers", () => {
//     expect(caesarCipher("hello world", -10)).toBe("xubbe mehbt");
// });

// test('handle large number', () => {
//     expect(caesarCipher('Hello World', 1000)).toBe('Tqxxa Iadxp');
// });