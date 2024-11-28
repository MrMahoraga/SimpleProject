let a = "save earth save earth save earth save earth save earth save earth save earth save earth"
let bag = "" ;
let arr = [] ; 
let b = "earth"
count = 0 ;
for( let i in a){
    if(a[i] == " "){
        arr.push(bag)
    bag = " ";}
    else 
    {
        bag = bag +a[i]
    }
}
  for( let j = 0 ; j< arr.length;j++){
 if(arr[j] == b){
    count ++ ;
    console.log(count);
 }}
arr.push(bag)
console.log(arr);
console.log(count);