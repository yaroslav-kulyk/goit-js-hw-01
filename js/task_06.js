let total = 0;

do {
    let input = prompt('Введите число');

    if (input === null) {
        break;
    }

    input = Number(input);
    const notANumber = Number.isNaN(input);

    if (notANumber) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    total += input;

} while (true);

console.log(`Общая сумма чисел равна ${total}`)