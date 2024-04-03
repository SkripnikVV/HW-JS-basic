# Домашнее задание № 1

1. В переменных a и b хранятся числа. 

Написать программу, которая выводит в консоль произведение и сумму этих чисел.

```javascript
const a = 5,
    b = 10;
console.log(`${a} * ${b} = ${a * b}`)
```

2. В двух переменных хранятся строки символов. 

Написать программу, которая выведет в консоль суммарное количество символов в обоих строках.

```javascript
const a = 'hello', 
    b = 'world';
console.log(`length ${a} + lenght ${b} = ${a.length + b.length}`)

```

3. Написать программу, которая запрашивает у пользователя ввод трёхзначного числа, а потом выводит в
консоль сумму цифр введённого числа.

```javascript
// const str = '111111111'
const str = prompt('input number, please: ');
const result = [...str].map(x => +x).reduce((accumulator, value) => accumulator + value)
console.log(result)
```
# Домашнее задание № 2

1. В переменных a и b хранятся числа. Вывести в консоль наибольшее из них.
```javascript
const a = 5, b = 10;
(a > b) ? console.log(`a: ${a}`) : console.log(`b: ${b}`)
```
2. Запросить у пользователя ввод числа от 1 до 12. Вывести в консоль название месяца, соответствующее этому числу 
(1 — январь, 2 — февраль и т.д.).
```javascript
// const month = +prompt('input month: ');
function get_month(month) {
    switch (month) {
        case 1:
            console.log('январь')
            break;

        case 2:
            console.log('февраль')
            break;

        case 3:
            console.log('март')
            break;

        case 4:
            console.log('апрель')
            break;

        case 5:
            console.log('май')
            break;

        case 6:
            console.log('июнь')
            break;

        case 7:
            console.log('июль')
            break;

        case 8:
            console.log('август')
            break;

        case 9:
            console.log('сентябрь')
            break;

        case 10:
            console.log('октябрь')
            break;

        case 11:
            console.log('ноябрь')
            break;

        case 12:
            console.log('декабрь')
            break;
        default:
            console.log('bad')
    }
}

for (let index = 0; index < 14; index++) {
    get_month(index)
}
```
3. В переменных circle и square хранятся площади круга и квадрата соответственно. Написать программу,
которая определяет, поместится ли круг в квадрат

```javascript
const circle = 4, square = 5.095;
const diameter = ((circle / Math.PI) ** 0.5) * 2;
const side = square ** 0.5;
console.log('диаметр: ', diameter);
console.log('сторона: ', side);
(diameter <= side) ? console.log('поместится') : console.log('НЕ поместится')

```

# Домашнее задание № 3

1.Вывести в консоль сумму всех целых чисел от 50 до 100.
```javascript
let accumulator = 0
for (let index=50; index <= 100; index+=2) {
    accumulator += index
    console.log(`${index} acc: ${accumulator}`)
}
```

2.Вывести в консоль таблицу умножения на 7.
```
7 x 1 = 7
7 x 2 = 14
…
7 x 9 = 63
```
```javascript
const seven = 7;
for (index=1; index <10; index++) {
    console.log(`${seven} x ${index} = ${seven * index}`)
}
```
*Запросить у пользователя ввод числа N. Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N
```javascript
const limitNumber = 15;
let count = 0;
let acc = 0;
for (index = 1; index <= limitNumber; index += 2) {
    count += 1;
    acc += index;
    console.log(`${count}: ${index}: ${acc}`)
}
console.log('avg', acc / count)
```

# Домашнее задание № 4

Создайте объект user, содержащий поле name со значением ‘John’.
1.Запросить у пользователя ввод числа. Записать введенное значение в поле age объекта user.

2.Создать копию объекта user с именем admin. Добавить новому объекту поле role со значением  ‘admin’.

*Записать все значения полей объекта admin в отдельные переменные. Имена переменных должны совпадать с названиями полей.

```javascript
let user = {'name': 'John'};
console.log(user)
let userAge = 33;
user['age'] = userAge
let admin = Object.assign({}, user, {'role' : 'admin'})
const {name, age, role} = admin;
console.log(user)
console.log(admin)
console.log(name, age, role)
```

# Домашнее задание № 5 «Массивы»

Создайте массив целых чисел из 10 элементов.

1.Выведите в консоль сумму всех элементов массива.
2.Создайте новый массив на основе исходного, в котором каждый элемент будет вдвое больше  элемента исходного массива с 
таким же индексом.
(a[1] = 3, b[1] = 6, где a — исходный массив, b — новый массив).

3.*Найдите и выведите в консоль наибольший и наименьший элементы исходного массива
```javascript
const arr = [1,11,-22,2, 5,53,23,76,98,45,47,25,47,97,45,24,66,7,667,87,9006,45,564, 36, 4643, 57, 5775, 790,361,4637];
console.log(arr)

const sum = arr.reduce((acc, value) => acc += value);
console.log('sum', sum)

let max = -Infinity;
let min = Infinity;
arr.forEach(x => {
    x > max ? max = x : max;
    x < min ? min = x : min;
});
console.log('max', max)
console.log('min', min)

let doubleArr = arr.map(x => x * 2);
console.log(doubleArr);

doubleArr = doubleArr.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
});
console.log(doubleArr);

```
# Домашнее задание №6 «Функции»

1.Напишите функцию diff, которая получает в качестве параметров 2 числа и возвращает разницу между наибольшим 
и наименьшим.
```javascript
const diff = (a, b) => {
    return (a > b) ? a-b : b-a;
}

console.log(diff(5, 3));
console.log(diff(5, 30));
```
2.Напишите функцию isWord, которая принимает на вход текстовую строку. Функция возвращает true, если строка состоит из 
одного слова и false, если из нескольких.
```javascript
const isWord = (str) => {
    console.log(str);
    return (str.indexOf(' ') > -1) ? false : true;
}
console.log(isWord('word'));
console.log(isWord('two word'));
```

*Напишите функцию pow(a, x), которая вернёт значение числа a, возведённого в степень x.
```javascript
const pow = (value, power) => {
    const result = Math.pow(value, power);
    console.log(`${value} ** ${power} = ${result}`);
    return result;
}
pow(2, 3);
```

# Домашнее задание № 7 «Работа с DOM»

Сверстать страницу и подключить к ней файл со  скриптом. На странице должны быть три текстовых  параграфа, поле ввода 
и кнопка. Напишите скрипт, который будет выполнять следующие условия:

1.Кнопка скрыта, если в поле ввода нет значения.

2.При клике на кнопку добавляется новый параграф, содержащий текст из поля ввода. 

3.*Если параграфов становится больше 5, первый из них удаляется.

```html
<!--index.html-->
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div class="container">
    <p>hello world</p>
    <p>from JavaScript</p>
    <p>postscriptum</p>
</div>
<div><input type="text" class="text-field"></div>
<br>
<div><button hidden="hidden" class="button">Click me</button></div>
<script src="index.js"></script>
</body>
</html>
```

```javascript
// index.js
document.addEventListener('DOMContentLoaded', main);

const button = document.querySelector('.button'),
    textInput = document.querySelector('.text-field'),
    container = document.querySelector('.container'),
    paragrafLimit = 5;


function main() {
    console.log('loaded')
    console.log(textInput);
    textInput.addEventListener('input', inputChange);
    textInput.addEventListener('keypress', (event) => {if (event.key ==='Enter') {
        buttonClick()
    }})
    button.addEventListener('click', buttonClick);
}

function inputChange(e){
    if (e.target.value.length > 0) {
        button.hidden = "";
    } else {
        button.hidden = "hidden";
    }
    console.log(e.target.value);
}

function buttonClick() {
    if (textInput.value.length === 0) {return}
    removeParagraf(paragrafLimit);
    addParagraf();
    textInput.value = "";
    button.hidden = 'hidden';
    textInput.focus()
}

function removeParagraf(limit=5) {
    const paragrafs = container.querySelectorAll('p');
    if (paragrafs.length === limit) {
        paragrafs[0].remove();
    }
}

function addParagraf() {
    element = document.createElement('p');
    element.textContent = textInput.value;
    container.append(element);
}
```