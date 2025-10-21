// Union types
let userId: string | number;

userId = 123;
userId = '123';

function greeting(myText: string | number) {
  if (typeof myText === 'string') {
    // The IDE thanks to TS knows that myText is a string
    console.log(myText.toLowerCase());
  } else {
    // The IDE thanks to TS knows that myText is a number
    console.log(myText.toFixed());
  }
}

greeting('Hello');
greeting(1);
