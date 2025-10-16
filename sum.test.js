import sum from "./sum";

test('should return the sum of two numbers', () => {
    expect(sum(2, 3)).toBe(5);
})
test('should return the sum of two numbers', () => {
    expect(sum(-5, -5)).toBe(-10);
})