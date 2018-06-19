/**
 * ES6テスト
 * template
 * @return {[type]} [description]
 */
export const template = function () {
	// テンプレート文字列は「`」バッククォート
	var str = `あ
	い
	う`;
	console.log(str);

	// 変数の文字列への埋め込み
	var name = '1-10';
	var age = 20;
	var greeting = `私の名前は${name}です。${age}歳です`;
	console.log(greeting);


	// 分割代入
	var [name, age] = ['1-10', 20];
	console.log(name, age);


	// 可変長引数
	var array = [1, 5, 3];
	var max = Math.max(...array);
	console.log(max); // 5

	function show1(...args) {
	  console.log(args);
	}
	show1(1, 2, 3); // [1, 2, 3]


	// 初期値代入
	function show2(name = '1-10') {
	  console.log(name);
	}
	show2('1-10 design');
	show2();


	// アロー関数
	var show3 = (text) => {
	  console.log(text);
	};

	// 引数が一つの時には()を省略可能
	var show4 = text => {
	  console.log(text);
	};

	// また一文の場合、{}とreturnの省略も可能。
	var show5 = (text) => text + ' さようなら';

	var text = show5('こんにちは');
	console.log(text); // こんにちは さようなら


	// thisを束縛
	var counter = {
	  count: 0,

	  start: function() {
	    setTimeout(() => {
	      console.log(this.count++);
	    }, 1000);
	  }
	};
	counter.start();
};
