let isEnable = true;
// isEnable = 'asda' incorrect
// isEnable = null; incorrect, only valid in JS
// isEnable = undefined; incorrect, only valid in JS
isEnable = false;

let isNew: boolean = false;
console.log('isNew', isNew);

const random = Math.random();
console.log('random', random);
isNew = random > 0.5;


const myBoolean: Boolean = true // Bad practice
