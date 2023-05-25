// Using ALERT or console.log display final result of action (+ - / *).


// Using PROMPT ask user what does he want to do  (+ - / *). Ask until then he will put correct answer.
do {
    userActions = prompt('choose operations (+ - / *)');
} while (userActions !== '+' && userActions !== '-' && userActions !== '*' && userActions !== '/');

// Asking how much operands does he want to use. It should be a NUMBER more then 1 and less then 7. Ask until then he will put correct answer.
do {
    countOfOperations = parseInt(prompt('How much numbers do you wont used'))
} while (countOfOperations > 8 || countOfOperations < 2 || isNaN(countOfOperations));

// Asking every operand in user. It should be a NUMBER. Ask until then he will put correct answer.

count = 0;
res = 0;
do {
    count++;

    do {
        usersNumber = prompt('Enter the required number');
    } while (isNaN(usersNumber));

    switch (userActions) {
        case '+':
            res += usersNumber
            break;

        case '-':
            res = count === 1 ? usersNumber : res - usersNumber;
            break;

        case '*':
            if (res === 1) {
                res === 1
            }
            res *= usersNumber;
            break;

        case '/':
            res = count === 1 ? usersNumber : res - usersNumber;
            break;
    }

} while (count < countOfOperations);

alert(res)