const sumTwoNumbers = require("./sumTwoNumbers.js")

test("add 3 and 4", () => {
    expect(sumTwoNumbers(3,4)).toBe(7)
})