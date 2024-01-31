const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hantei(answer1, answer2, answer3) {
  if (answer1 === 'はい') {
    if (answer2 === 'はい') {
      console.log("あなたは猫派です！");
    } else if (answer2 === 'いいえ') {
      if (answer3 === 'はい') {
        console.log("あなたは猫派です！");
      } else if (answer3 === 'いいえ') {
        console.log("あなたは犬派です！");
      } else {
        console.log("全ての質問に回答してください。");
      }
    } else {
      console.log("全ての質問に回答してください。");
    }
  } else if (answer1 === 'いいえ') {
    if (answer2 === 'いいえ') {
      console.log("あなたは犬派です！");
    } else if (answer2 === 'はい') {
      if (answer3 === 'いいえ') {
        console.log("あなたは犬派です！");
      } else if (answer3 === 'はい') {
        console.log("あなたは猫派です！");
      } else {
        console.log("全ての質問に回答してください。");
      }
    } else {
      console.log("全ての質問に回答してください。");
    }
  } else {
    console.log("全ての質問に回答してください。");
  }
}

rl.question("質問1: 誰かと一緒にいるより、一人でいるのが好きですか？ (はい/いいえ): ", (answer1) => {
  rl.question("質問2: 複数人で何かをするとき、リーダー的役割は避けますか？ (はい/いいえ): ", (answer2) => {
    rl.question("質問3: いろいろなことに興味があり、次に何をするか決めがたいですか？ (はい/いいえ): ", (answer3) => {
      // ここで性格診断を行う条件分岐を書きます
      hantei(answer1, answer2, answer3);
      rl.close();
    });
  });
});
