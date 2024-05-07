const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

//assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);
//assert(e(5) == 2.7166666666666663);
//just wanted to try an input half as large and 10 times as large, Replit AI tool helped me get the following statements correct, specifically the math to calculate a tolerance
assert(e(5) >= 2.716 - .001 && e(5) <= 2.716 + .001);
assert(e(100) >= 2.6881 - .001 && e(100) <= 2.6881 + .001);
