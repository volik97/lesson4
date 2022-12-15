import readLine from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readLine.createInterface({ input, output });

const random = Math.floor(Math.random() * 10);

const start = () => {
  let attempt = 10;
  const nextAttempt = () => {
    if (attempt)
      rl.question(
        `Осталось попыток ${attempt}. Введите число: `,
        (answer) => {
          if (+answer === random) {
            console.log('Угадал');
            rl.close();
          }
          else {
            if (answer < random) {
              console.log("Загаданное число больше.");
              attempt--;
              return nextAttempt();
            }
            if (answer > random) {
              console.log("Загаданное число меньше.");
              attempt--;
              return nextAttempt();
            }
          }
        }
      );
    else rl.close();
  };

  rl.question("Введите число: ", (answer) => {
    if (+answer === random){
        console.log('Угадал');
        rl.close()
    } 
    else {
      if (answer < random) {
        console.log("загаданное число больше.");
        return nextAttempt();
      }
      if (answer > random) {
        console.log("загаданное число меньше.");
        return nextAttempt();
      }
    }
  });
};

start();
