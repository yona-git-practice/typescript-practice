"use strict";
var x = 20; // 定数宣言
var y = 5;
var answer = x + y; // 変数宣言
if (answer < 10) {
    console.log("0" + answer); // バッククウォートを使って変数を中に書くことをフォーマット文字列という
}
else {
    // コンソールに表示
    console.log(answer);
}
for (var i = 0; i < answer; i++) {
    console.log("i=" + i);
}
var j = 0;
while (j < answer) {
    console.log("j=" + j);
    j++;
}
