//loob juurdepääsu süsteemis olevale failile
const fs = require('fs');

// koostab kalorid = ja loeb andmeid failist input2.txt
const kalorid = fs.readFileSync('input2.txt', { encoding: 'utf-8'}).split("\n").map(i => Number(i));

const koigeRohkem = [];

let a = 0;

for (let i = 0; i < kalorid.length; i++) {
  if (kalorid[i] == 0) {
    koigeRohkem.push(a);
    a = 0
  } else {
    a = kalorid[i] + a
  }
}

console.log(koigeRohkem);



