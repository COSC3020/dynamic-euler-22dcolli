const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

//assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);
assert(Math.abs(e(5) - Math.exp(5)) < 0.01);
