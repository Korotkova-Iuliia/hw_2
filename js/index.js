// number1



















let userNumber = prompt("Введите число больше 100")
let check = false;

do {
    if (userNumber < 100) {
        check = true;
        userNumber = prompt("Введите число больше 100");
    } else {
        check = false;
    }
    
} while (check)

console.log(`Вы ввели ${userNumber}`)

// while (userNumber < 100) {
//     userNumber = prompt("Введите число больше 100");
// } console.log(`Вы ввели ${userNumber}`)

let userNumber = prompt("Введите число!");
let total = 0

while (userNumber) {
  total += Number(userNumber);
  userNumber = prompt("Введите число!");
}


console.log(total) 
