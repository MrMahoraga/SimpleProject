let arr = [1, 2, 3, 4, 5, 6]
let re = arr.filter((arr) => {
    return arr % 2 == 0
}).map((re) => {
    return re * 10
}).reduce((sum, k) => {
    return sum = sum + k
})
console.log(re);