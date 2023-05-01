//First task
firstValue = +prompt('Enter your first value');
secondaryValue = +prompt('Enter your secondary value');
thirdValue = +prompt('Enter your third value');

result = firstValue + secondaryValue + thirdValue / 3;

alert(result);

//Second tusk
userBirthYear = +prompt('Please enter your year of birth');

date = new Date().getFullYear();
userAge = date - userBirthYear;

if (userBirthYear === 0) {
    alert('Ви не захотіли ввести свій рік народження');
}

debugger
userCity = prompt('Please enter the city in which you live');
switch (userCity) {
    case 'Київ':
        userCity = 'You live in the capital of Ukraine';
        break;
    case 'Вашингтон':
        userCity = 'You live in the capital of USA';
        break;
    case 'Лондон':
        userCity = 'You live in the capital of England';
        break;
    case null:
        alert('Ви не захотіли ввести свіє місто');
        break;

    default:
        userCity = `You live in ${userCity}`;
        break;
}

favoriteSport = prompt('Please enter your favorite sport');
switch (favoriteSport) {
    case 'box':
        favoriteSport = 'Cool! Do you want to become like Mike Tyson';
        break;
    case 'footbal':
        favoriteSport = 'Cool! Do you want to become like Andriy Shevchenko';
        break;
    case 'tenis':
        favoriteSport = 'Cool! Do you want to become like Jozy Murdok';
        break;
    case null:
        alert('Ви не захотіли ввести свій');
        break;
    default:
        favoriteSport = 'Cool! Do you want to become like Jozy Murdok';
        break;
}

alert(`
${userAge} 
${userCity} 
${favoriteSport}
`);

//Third task
let numOrStr = prompt('input number or string');

switch (numOrStr) {
    case null:
        console.log('ви скасували')
        break;
    case '':
        console.log('Empty String');
        break;
    case isNaN(numOrStr):
        console.log(' number is Ba_NaN'); //Не разобрался как прокинуть сюда isNaN(). Этот кейс не отрабатывает
        break;
    default:
        console.log('OK!');
}
