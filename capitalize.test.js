
const capitalize = require('./capitalize');

test('abcd -> Abcd', () => {
    expect(capitalize('abcd')).toBe('Abcd');
});

test('Abcd -> Abcd', () => {
    expect(capitalize('Abcd')).toBe('Abcd');
});

test('ABCD -> ABCD', () => {
    expect(capitalize('ABCD abcd')).toBe('ABCD Abcd');
})