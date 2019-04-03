/////////////////// EX 1 /////////////////////////////

function addAndMultiply(x, y, z) {
  return ((x + y) * z)
}

console.log(addAndMultiply(4,8,5)) // 60

const addAndMultiply2 = (x, y, z) => ((x + y) * z);

console.log('test this ' + addAndMultiply2(4, 8, 5))

////////////////////////////////////////////////////////

function selfIntro(name, hobby, count) {
  return "My name is " + name + ". I practice " + hobby + " " + count + " times a day."
}

console.log(selfIntro('Shanqyeet', 'Kendama', '18')) // My name is Shanqyeet. I practice Kendama 18 times a day.

const selfIntro2 = (name, hobby, count) => (`My name is ${name}. I practice ${hobby} ${count} times a day.`);

console.log(selfIntro2('Shanqyeet', 'Kendama', '18'))

/////////////////// EX 2 ///////////////////////////////////////

// tips: remove curly braces
let squared = (x) => {
  return x * x;
}

let squared2 = (X) => (x * x);

/////////////////// EX 3 /////////////////////////////////////////

const prices = [1.00, 2.00, 3.00, 4.00];
const gst = 0.06;

const pricesWithTax = prices.map(x => x * gst + x);    // Complete this with .map

console.log(pricesWithTax) // you should get [1.06, 2.12, 3.18, 4.24]

const prices2 = [1.00, 2.00, 3.00, 4.00]
const gst2 = 0.06
let newPrices = [];

const pricesWithTax2 = prices2.forEach(function(element) {
newPrices.push(element * gst2 + element);

})

  


console.log(newPrices) // you should get [1.06, 2.12, 3.18, 4.24]

