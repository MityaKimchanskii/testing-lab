const func = require('./function')

test('returnTwo should return two', () => {
    expect(func.returnTwo()).toBe(2)  
})

test('Return name', () => {
    expect(func.greeting("Eminem")).toBe("Hello Eminem")
})


describe("Math Challenge!", () => {
    test("Add", () => {
        expect(func.add(8, 8)).toBe(16)
    })
    test("Subtract", () => {
        expect(func.subtract(9, 8)).toBe(1)
    })
    test("Multiply", () => {
        expect(func.multiply(3, 3)).toBe(9)
    })
    test("Divide", () => {
        expect(func.divide(777, 7)).toBe(111)
    })
})