import * as d3 from 'd3';

const select = d3.selectAll("div");

console.log('select: ', select);

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }
