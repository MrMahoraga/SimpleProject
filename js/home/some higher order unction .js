let arr= [12,2,3,4,5,6,7,8,9,9]
let Max = Math.max(...arr)
console.log(arr);
let Min = Math.min(...arr)
console.log(Min);
let Sort = arr.sort(function(a,b){
    return a-b 
})
console.log("ascending",Sort);
let k = arr.sort(function(a,b){
    return b-a
})
console.log("descending",k);
