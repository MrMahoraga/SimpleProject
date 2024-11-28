let arr = [1,9,4,3,8,5,6,7]
let a = arr.reduce(function(sum,add){
    return add + sum
})
console.log(a);