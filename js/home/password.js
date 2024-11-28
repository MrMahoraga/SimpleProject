function  randompassword(){
    let value = "1234567890!@#$%^&*()qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    let bag = "";
for(let i=0; i < 5; i++ ){
    let a = Math.floor(Math.random()*value.length)
    bag = bag + value[a]
    }
    return bag ;
}
console.log(randompassword(5))




setInterval(() => {console.log(randompassword(5))

    
}, 1000);
setTimeout(()=> {console.log(randompassword(5))
}),2000