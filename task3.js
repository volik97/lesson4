import readLine from "readline";
import { stdin as input, stdout as output } from "process";
import { resolve } from "path";
import { rejects } from "assert";

const rl = readLine.createInterface({ input, output });

const random = Math.floor(Math.random() * 10);

async function getUserNumber() {
  return new Promise(function (resolve, rejects) {
    rl.question("Введите число: ", (answer) => {
      rl.pause();
      return resolve(answer);
    });
  });
}

async function startGame() {
  let attempt = 10;

  while (attempt != 0) {
    let input = await getUserNumber();
    let number = +input;
    attempt--;
    if (number === random) {
      console.log("Угадал");
      break;
    }
    if (attempt === 0) {
      console.log("Проиграл");
      break;
    }

    number > random
      ? console.log(`Загаданное число меньше. Попыток осталось ${attempt}`)
      : console.log(`Загаданное число больше. Попыток осталось ${attempt}`);
  }
  rl.close();
}

startGame();
