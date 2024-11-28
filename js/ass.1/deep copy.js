let a= [1,[1,2,3],3,4,5]
let b=JSON.parse(JSON.stringify(a))
b[0]=50;
b[1][2]=80

console.log(a,b)