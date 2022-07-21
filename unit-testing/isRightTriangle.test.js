const isRightTriangle = require('./isRightTriangle');

test('3, 4, 5 is right triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
    expect(isRightTriangle(3, 5, 4)).toBe(true);
    expect(isRightTriangle(5, 4, 3)).toBe(true);
    expect(isRightTriangle(5, 3, 4)).toBe(true);
    expect(isRightTriangle(4, 3, 5)).toBe(true);
    expect(isRightTriangle(4, 5, 3)).toBe(true);
});

test('3, 4, 5 is right triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
});

test('0, 4, 5 is not triangle', () => {
    expect(isRightTriangle(0, 4, 5)).toBe(false);
});

test('-3, 4, 5 is triangle', () => {
    expect(isRightTriangle(-3, 4, 5)).toBe(false);
});

test('A, 2, 7 is not triangle', () => {
    expect(isRightTriangle('A', 2, 7)).toBe(false);
});

test('10000, 2, 7 is not triangle', () => {
    expect(isRightTriangle(10000, 2, 7)).toBe(false);
});

test('6.5, 2, 7 is not triangle', () => {
    expect(isRightTriangle(6.5, 2, 7)).toBe(false);
});