let a = "Ravi Singh"
let b = "aeiouAEIOU"
let count = 0;
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
            count++;
        }
    }
}
console.log(count);

