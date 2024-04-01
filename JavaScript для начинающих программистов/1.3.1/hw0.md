# Home Work 1.3

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
# Home Work 1.5

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

# Home Work 1.6

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