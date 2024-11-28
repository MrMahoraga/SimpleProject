let arr = [1, 2, 40, 3, 5,Infinity,4948161781894198]
let max = 0;
for (let i of arr) {
    if(i>max){
        max=i;
    }

}
console.log(max);