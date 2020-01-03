# typescript-practice
TypeScript入門

-------------------
■メモ
TypeScriptとは
TypeScript はマイクロソフトによって開発され、メンテナンスされているフリーでオープンソースのプログラミング言語である。

TypeScript公式サイト
https://www.typescriptlang.org/


ES6 -> ECMAScript6(2015) JavaScriptの規格


-------------------
■TypeScript講座

□TypeScript入門 #01：トランスパイルとTypeScript
https://www.youtube.com/watch?v=GgL3SwKW_KA
トランスパイス=トランスコンパイル
マシン語(機械語) <- 翻訳

プログラム言語 -> コンパイル -> マシン後
プログラム言語(TypeScript≒ES6) -> トランスパイル -> プログラム言語(JavaScript)

中間言語 <- 翻訳
インターぷりたー(通訳)　スクリプト言語

以前は、Babelを使用してJavaScriptをトランパイルしていたが、
TypeScriptが主流になってきた。


□TypeScript入門 #02：TypeScript Compierの導入とVisual Studio Codeで簡単編集
https://www.youtube.com/watch?v=WrTDiGY3f8o
npm install -g typescript -> TypeScriptインストールコマンド
C:\Users\Ryusuke\AppData\Roaming\npm -> インストール場所。tscコマンドを使用する場合は、システム環境変数のPathに設定してあげる必要がる

Powershell
実行可能にする実行ポリシーを設定するには、「Set-ExecutionPolicy RemoteSigned」を実行する
実行ポリシーをデフォルト設定に戻すには、「Set-ExecutionPolicy Restricted」を実行すればよい。
tsc --init








