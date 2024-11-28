let a = "HIMANSHU"
let first = a[0].toUpperCase();
let mid = a.length / 2 - 1;
let second = a[mid].toUpperCase();
let temp = "";
let temp2 = '';
for (let i = 1; i <= mid - 1; i++) {
    temp = temp + a[i].toLowerCase();
}
for (let i = mid + 1; i <= a.length - 1; i++) {
    temp2 = temp2 + a[i].toLowerCase();
}
console.log(first + temp + second + temp2);
//HimAnshu