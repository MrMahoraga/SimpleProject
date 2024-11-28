let arr = [ 12,46,32,64]

let a = arr.reduce( function(sum,add){
    return sum + add        
})
console.log( a / arr.length);