const fs = require('fs');

const filepath = 'text.txt';

const data =fs.readFileSync(filepath,{endcoding: 'utf8'});
console.log(data);

let sum = 0;
for (let i=l; i<=10; i++){
    sum = sum+i ;

}

console.log('Sum: ', sum);

