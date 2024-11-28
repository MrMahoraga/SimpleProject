let a = "hemant kumar"
let first = a[0].toUpperCase();
let temp = "";


for( let i = 1; i < a.length ; i ++){
    if(a[i]!=" "){
        temp=temp+a[i]
    }
}
  console.log(first+temp);
