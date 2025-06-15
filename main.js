// Task 1.4
function calcTask4Value(x){
    return (3*x - 2)/(2*Math.atan(Math.abs(x)) + 1);
}

console.log("Task 4.1:");
for(let x = 3.2; x <= 5.2; x += 0.4){
    let z = calcTask4Value(x);
    console.log(z);
}

console.log("Task 4.2:");
for(let x = 2; x <= 5; x += 1){
    let z = calcTask4Value(x);
    console.log(z);
}

// Task 1.5
function calcTask51SumValue(n){
    return Math.pow(-1, n) * (4*n - 5)/(2*n + 2);
}

console.log("Task 5.1:");
let S = 0;
for(let n = 2; n <= 5; n++){
    S += calcTask51SumValue(n);
}
console.log(S);

console.log("Task 5.2:");
let m = 2;
let P = 1;
function calcTask52ProductValue(k){
    return (1-1/k)/(Math.pow(k,2)*(k+3)*(k+4));
}
for(let k = 1; k <= m; k++){
    P *= calcTask52ProductValue(k);
}
console.log(P);
// Task 7.2
console.log("Task 7.2:");
let C = [-2.2, 0.31, 2.1, -3.16, 1.05];
let maxElem = C[0];
let maxIndex = 0;
for(let i = 1; i < C.length; i++){
    if(Math.abs(C[maxElem]) < Math.abs(C[i])){
        maxElem = C[i];
        maxIndex = i;
    }
}
console.log("Product of modules: ", maxElem);
// Task 4
let enterprises=[
  { 
      name:"ATB",
      activity:"Consumer services",
      workers:"59000"
  },
  { 
      name:"Kyivstar",
      activity:"Telecommunications",
      workers:"4000"
  },
  { 
      name:"PrivatBank",
      activity:"Financials",
      workers:"22000"
  },
];
//Task 5
for (let i=0; i<enterprises.length;i++){
	console.log(`${enterprises[i].name} ${enterprises[i].activity} ${enterprises[i].workers}`)
}
