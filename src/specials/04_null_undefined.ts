// let myNumber: number = null; not possible
// let myString: string = undefined; not possible

// Both of these variables will be picked up as any by TS
let myNull = null;
let myUndefined = undefined;


// There cases in web development where null and undefined are used
// For example, when working with DOM elements, while fetching data from an API, etc.
let myNumber: number | null = null;
myNumber = 123;

let myString: string | undefined = undefined;
myString = 'Hello';

function hi(name: string | null) {
  let hello = 'Hello '

  if (name) {
    hello += name.toLocaleLowerCase();
  } else {
    hello += 'Guest';
  }
  console.log(hello);
}

hi('Martin');
hi(null);

function hiOptimized(name: string | null) {
  let hello = 'Hola '
  // In case name is null or undefined, it will use 'Invitado'
  // Optional chaining operator
  hello += name?.toLowerCase() || 'Invitado';
  console.log(hello);
}

hiOptimized('Jose');
hiOptimized(null);
