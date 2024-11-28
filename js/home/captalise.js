let a = "hemant"
let firts = a[0].toUpperCase()
 let temp= "";
 
// for ( let i = a.length-1; i >=0 ; i--)
// {
//     console.log(a[i].toUpperCase());
// }

for(let i =1;i<a.length;i++){
    temp=temp+a[i]
}

console.log(firts+temp);