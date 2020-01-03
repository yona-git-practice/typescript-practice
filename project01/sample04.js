"use strict";
let a = 10;
let b = 5;
a = 20;
let s = 'abc';
let n = 123;
let bb = true;
let an = 'abc'; // なんでも入れる
let un = 'abc'; // パラメータの型が分からない場合
let nu = null; // nullのみ
let ud = undefined; // undefinedのみ
let ob = Math;
// Union Types
let number_or_string = 'hello'; // number or string のどちらか
let ans = a * b;
console.log(ans);
