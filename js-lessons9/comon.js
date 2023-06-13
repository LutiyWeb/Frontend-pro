// Перевести час, витрачений на виконання завдання, з хвилин в години.
// Залиште лише ті завдання, на виконання яких потрібно більше 2 годин.
// Помножте результат на погодинну ставку (суму) і додайте цей результат як третій елемент масиву.
// Виконайте візуалізацію в таблиці html за допомогою цього прикладу:

const amount = 100;
const monday = [
    ['Write a tutorial', 240],
    ['Some web development', 300]
];

const tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 240]
];

function filterArr(array) {
    const filterArr = array
        .map(function (item) {
            item[1] = item[1] / 60
            return item
        })
        .filter(function (item) {
            return item[1] > 2
        })
        .map(function (item) {
            item.push(item[1] * amount);
            return item;
        }).map(function (item) {
            return `
                <tr>
                    <td>Task name:${item[0]}</td>
                    <td>Taks duration:${item[1]}</td>
                    <td>Task amount:${item[2]}</td>
                </tr>`
        })
        // Не понимаю зачем join() нужен. Спросить на уроке
        .join('')

    return filterArr;
}

document.write(
    `<h2>Monday</h2>
    <table>${filterArr(monday)}</table>
    <h2>tuesday</h2>
    <table>${filterArr(tuesday)}</table>
    `
)

// Уточнить как правильно разбить єтот функицонал на разніе функции;