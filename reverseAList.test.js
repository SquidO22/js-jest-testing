const reverseAList = require("./reverseAList.js")

test("reverse [1,2,3] ", () => {
    expect(reverseAList([1,2,3])).toStrictEqual([3,2,1])
})

test("reverse [-1,-2,-3] ", () => {
    expect(reverseAList([-1,-2,-3])).toStrictEqual([-3,-2,-1])
})