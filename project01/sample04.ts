let a: number = 10;
let b: number = 5;

a = 20;

let s: string = 'abc';
let n: number = 123;
let bb: boolean = true;
let an: any = 'abc'; // なんでも入れる
let un: unknown = 'abc'; // パラメータの型が分からない場合
let nu: null = null; // nullのみ
let ud: undefined = undefined; // undefinedのみ
let ob: object = Math;

// Union Types
let number_or_string: number | string = 'hello'; // number or string のどちらか

let ans: number = a * b;
console.log(ans);