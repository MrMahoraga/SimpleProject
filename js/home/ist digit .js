let a = "My Name Is Hemant"
let arr = [];
let bag = "";



for (let value of a) {
    for(  let j of arr){

        
        if (value == " ") {
            arr.push(bag);
            bag = ' ';
        }
        else {
            bag = bag + value;
        }
    }
        
        for(let j in arr){

            
            console.log(arr[j]);
        }
}
console.log(arr[j][0]);