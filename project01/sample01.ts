const x = 20; // 定数宣言
const y = 5;

let answer = x + y; // 変数宣言

if (answer < 10) {
    console.log(`0${answer}`); // バッククウォートを使って変数を中に書くことをフォーマット文字列という
} else {
    // コンソールに表示
    console.log(answer);
}

for (let i=0; i<answer; i++) {
    console.log(`i=${i}`);
}

let j = 0;
while (j<answer) {
    console.log(`j=${j}`);
    j++;
}

