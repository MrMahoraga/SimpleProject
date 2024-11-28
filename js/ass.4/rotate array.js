let a = [1,6,3,2,9,5,4]
let t = 3
let arr = []
for(let i = t; i<a.length; i++){
    arr.push(a[i])
}
for(let j = 0; j<t ;j++ ){
    arr.push(a[j])
}
console.log(arr);