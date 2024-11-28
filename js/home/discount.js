


let a = 1100;
if ((a <= 500 && a < 1000)) {
    let result = (a * 10 / 100);
    console.log("discont 10 % Your bill is",a-result);
    
} 
else if (a >= 1000) {
    let result = (a * 20 / 100);
    console.log("discont 10 % Your bill is",a-result);}
else { console.log("bill"); }