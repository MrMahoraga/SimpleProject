let std = " bannaa bannaa bannaa bannaa bannaa "
let a = {}
for (let i in std) {
    if (a[std[i]]) {
        a[std[i]]++;
        // a[std[i]] != " ";[ban]
    }
    else {
        a[std[i]] = 1;
        a[std[i]] != " "
    }
}
let arr = Object.keys(a)


let str = ""
for(let value of arr){
    str = str + value
}
console.log(str);