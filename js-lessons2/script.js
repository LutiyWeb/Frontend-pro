//Thirst task
userName = prompt('Hello! What is your name?');
userAge = prompt('Please tell me how old are you');
userSkills = prompt('Ok. What skills do you have');

alert('So. Your name is ' + userName + '. ' + 'You are ' + userAge  + '.' + ' ' + 'And rou like to ' + userSkills);

userNumber = 25588;
alert(userNumber.toString().replaceAll('', ' '));

//Secondary task
thirstUserValue = +prompt('Plese enter thirst value');
secondaryUserValue = +prompt('Plese enter secondary value');
result = thirstUserValue + secondaryUserValue

sum = `${thirstUserValue} + ${secondaryUserValue} = ${result}`;
minus = `${thirstUserValue} - ${secondaryUserValue} = ${result}`;
multiply = `${thirstUserValue} * ${secondaryUserValue} = ${result}`;
division = `${thirstUserValue} * ${secondaryUserValue} = ${result}`;


// Thirty task
alert(`
       ${sum}
       ${minus}
       ${multiply}
       ${division}
       `)

//Third task
hoursValue = +prompt('Enter plese random hours');
secondaryValue = hoursValue * 60;
alert(secondaryValue);
