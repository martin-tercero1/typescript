// Any means "I don't know what type this is"
let myDynamicVar: any = 10;
myDynamicVar = null;
myDynamicVar = 'asd';
myDynamicVar = true;

// Type Assertion
myDynamicVar = 'Hello';
const rta = (myDynamicVar as string).toLowerCase();
console.log(rta);

// Type Casting
myDynamicVar = 123;
const rta2 = (<number>myDynamicVar).toFixed();
console.log(rta2);
