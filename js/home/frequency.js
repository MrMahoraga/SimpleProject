let std = "bananana bananana bananana"
let a = {}
for(let i in std){
    if(a[std[i]])
        a[std[i]] ++ ;
    else{
        a[std[i]] = 1 ;
    }
}
console.log(a);