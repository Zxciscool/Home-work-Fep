//Декларируем константу с нынешним годом
const nowadaysYear = 2022;
//декларируем переменную с именем пользователя
let userName;
alert("Hello!")
//Присваиваем переменной имя, которое напишет пользователь
userName = prompt("What is your name?");
//Выводим это имя
alert('Nice to meet you, ' + userName);
//Декларируем переменную для возвраста
let userAge;
//Сохраняем в переменную возраст, который напишет пользователь
userAge = prompt('Please enter your age');
//Декларируем переменную, для года рождения пользователя
let userYearOfBirth;
//Вычисляем год рождения пользователя и сохраняем в переменной
userYearOfBirth = nowadaysYear - userAge;
//Выводим год рождения пользователя
alert('your year of birth is ' + userYearOfBirth);