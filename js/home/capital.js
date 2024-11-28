let a = "hemant"
let first = a[0].toUpperCase();
let mid = Math.floor(a.length / 2);
let sec = a[mid].toUpperCase()

temp = "";
temp2 = "";
for (let i = 1; i < mid; i++) {
   temp = temp + a[i];}

for (let i = mid + 1; i <= a.length-1 ; i++) {
    temp2 = temp2 + a[i]}
    console.log(first + temp + sec + temp2);
