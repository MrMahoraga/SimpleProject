// Bread Slicing Function
const sliceBread = (bread) => `${bread} is sliced`

// // Spreading Function
const spreadButter = (bread) => `Butter spread on ${bread}`

// // Filling Function
const addFilling = (bread) => `Filling added to ${bread}`

// // Composing Functions to make a Sandwich
const makeSandwich = (bread) => addFilling(spreadButter(sliceBread(bread)))
// const makeSandwich = (bread) => spreadButter(sliceBread(bread)) 

console.log(makeSandwich('Whole Wheat'))
// Outputs: "Filling added to Butter spread on Whole Wheat is sliced"
