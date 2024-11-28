let students = [{ name: "Alice", scores: [90, 85, 92] }, { name:"Bob", scores: [75, 80, 85]},
 {name: "Charlie", scores: [90, 95,85]}, { name: "Jack", scores: [100, 100, 100] }]

let avg = students.map(function (a) {
    let sum = a.scores.reduce((acc, score) => acc + score)
    return {
        Name: a.name, average: sum / a.scores.length
    }
})
let highest = avg.filter(a => a.average > 90)
console.log(highest);
console.log(avg);