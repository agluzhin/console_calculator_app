// Объявление и присвоение значений используемых переменных.
const a = +prompt('Введите первое число:', '');
const b = +prompt('Введите второе число:', '');
const action = prompt('Введите желаемое действие:', '')

// Описание основных действий.
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const division = (a, b) => a / b;
const multiply = (a, b) => a * b;

// Присваивание результатов функций одноименным переменным.
let sumResult = sum(a, b);
let subtractResult = subtract(a, b);
let divisionResult = division(a, b);
let multiplyResult = multiply(a, b);

// Описание проверки переменной на число и описание результатов проделанного действия.
if(isNaN(a) || isNaN(b)) {
	alert('Возникла ошибка! Число указано неверно... Попробуйте использовать знак "." при написании дробных чисел!');
} else {
	if(action === '+') {
		alert(`Результатом суммы чисел ${a} и ${b} выступает число: ${sumResult}`);
	} else if(action === '-') {
		alert(`Результатом разности чисел ${a} и ${b} выступает число: ${subtractResult}`);
	} else if(action === ':' || action === '/') {
		alert(`Результатом деления чисел ${a} и ${b} выступает число: ${divisionResult}`);
	} else if(action === '*') {
		alert(`Результатом умножения чисел ${a} и ${b} выступает число: ${multiplyResult}`);
	} else {
		alert('Возникла ошибка! Предполагаемое действие указано неверно...Поробуйте еще раз!');
	}
};

