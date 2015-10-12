/**
 * Created by Elena on 10/8/2015.
 */
var number;
do {
    number = +prompt('Пожалуйста введите число больше 100');

    if (number > 100) {
        break;
    }
} while(number);