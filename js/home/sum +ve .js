let arr = [1,-4,12,0,-3,2,9,-150]
let a = arr.filter(function(arr){
    return arr > 0
    
}).reduce((sum,add) =>  
    {

   return  sum +add})
console.log(a);