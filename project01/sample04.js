"use strict";
var a = 10;
var b = 5;
a = 20;
var s = 'abc';
var n = 123;
var bb = true;
var an = 'abc'; // なんでも入れる
var un = 'abc'; // パラメータの型が分からない場合
var nu = null; // nullのみ
var ud = undefined; // undefinedのみ
var ob = Math;
// Union Types
var number_or_string = 'hello'; // number or string のどちらか
var ans = a * b;
console.log(ans);
