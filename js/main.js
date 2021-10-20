var text = document.getElementById('text'); //Выбираем объект с которым будем работать, выбираем по id 
text.style.color = "red"; //Устанавливаем цвет текста
text.style.backgroundColor = "blue"; //Устанавливаем цвет фона

text.innerHTML = "Какойто текст"; //Записываем текст в HTML тег

document.getElementById('text').style.backgroundColor = "white";

//Обрабатываем массив элементов span
//var spans = document.getElementsByTagName('span');

//Обрабатываем массив элементов span "теперь обращаемся по имени класса"
var spans = document.getElementsByClassName('simple-text');
for (var i=0; i<spans.length; i++) {
    spans[i].innerHTML =   "- " + i + "<br>";
}