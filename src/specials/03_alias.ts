// Alias
type UserID = string | number;

let userId: UserID;

function greeting(userId: UserID, shirtSize: Sizes) {
  if (typeof userId === 'string') {
    // The IDE thanks to TS knows that userId is a string
    console.log(userId.toLowerCase());
  } else if (typeof userId === 'number') {
    // The IDE thanks to TS knows that userId is a number
    console.log(userId.toFixed());
  }
}

// Literal types
type Sizes = 'S' | 'M' | 'L' | 'XL';

let shirtSize: Sizes;
shirtSize = 'S';
// shirtSize = 's' // incorrect

greeting(123, 'M');
// greeting(321, 'm'); // incorrect
