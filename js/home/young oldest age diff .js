let arr = [{ name: "john ", age: 13 },{ name: "msrk ", age: 56 }, {name: "rachel", age: 45},{name: "jate ", age: 67},{name: "jennifer ", age: 65},]
let a = arr.map((a)=> a.age)
let result = [ Math.max(...a),Math.min(...a), Math.max(...a)-Math.min(...a)]
console.log(result);