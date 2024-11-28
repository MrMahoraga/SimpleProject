let arr = [1,6,7,9,5,4,1,3,2,5,6,9,8,4,5]
let sort = arr.sort(function(a,b){
    return a-b
})
console.log("ascending", sort)

let double = sort.filter(function(k){
    return  k%2==0
}).map(function(c){
    return c**2
})
console.log(double)