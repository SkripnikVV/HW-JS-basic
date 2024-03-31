# Home Work

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