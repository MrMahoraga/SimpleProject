function Bubblesort(arr) {
    
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        // return arr;
    }
    return arr;
}
console.log(Bubblesort([56,8,79,8,0,-52,3]

));