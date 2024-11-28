// let a = "racecar";
// let bag = "";
// for (i = a.length-1; i >= 0; i--) {
//     bag=bag+a[i]   
// }

// if(a==bag){
//     console.log("palindrome");

// }
// else{
//     console.log("not palindrome");
// }



let a = "98890";

for(let i = 0; i < a.length/2 ; i++)
{
    if(a[i] != a[(a.length) -1 - i])
    {
        console.log('not a plaindrome');
        return;
    }
}
console.log('its a palindrome');