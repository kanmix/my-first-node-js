'use script'; //JSをStrictモードで利用
const number = process.argv[2] || 0; //number定数の2版添字に値を指定。論理和の||を使い、左側がFalsyなら、右側を利用
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum +i;
}
console.log(sum);
