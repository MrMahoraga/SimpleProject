let a = "my name is khan njnk"
let bag = ""
let arr = [] ; 
for(let i = 0 ; i < a.length ; i++){
    
    if( a[i] == " "){
        arr.push(bag)
        bag = "";
    }
    else{
        bag = bag + a[i]
    }
}
arr.push(bag)
console.log(arr);
let bag1 = "";
for(let i =0 ; i< arr.length;i++){
    for(j= 0;i<arr[i];j++){
        if(arr[i][0]){
        }
        bag1 = bag1 + arr[j][1].toUpperCase()
        console.log(bag1);
        // else {
        //     bag = bag[j][j+1]
        // // }
        // bag = bag+ " "
    }
}
console.log(bag1);