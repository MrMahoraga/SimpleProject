let a = "this is the test. is it?"
let b = "is"

count = 0;
for (let k = 0; k < a.length; k++) {
    if (a[k] == b[0] && a[k + 1] == b[1]) { count++ }
}

console.log(count);