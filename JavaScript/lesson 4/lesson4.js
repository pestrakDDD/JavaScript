let oficalNameJs = prompt("какое официальное назвние JavaScript");
if(oficalNameJs == "ECMAScript")
{
	alert("Верно!");
}
else
{
	alert("Не знаете? ECMAScript!");
}

//2
let num = prompt("Введите число");
if(num > 0)
{
	alert(1);
}
else if(num < 0)
{
	alert(-1);
}
else
{
	alert(0);
}

//3
let a = 9;
let b = -6;
let result = (a + b < 4)? 'Мало': 'Много';
alert(result);

//4
let login = '';
let message = (login == 'Сотрудник')? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '')?  'Нет логина' : '';
alert(message);
	