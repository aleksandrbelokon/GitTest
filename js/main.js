document.getElementById('main-form').addEventListener("submit", checkForm) //Отслеживаем событие submit (отправить на сервер)
                                                                           //через слушатель, ужираем js код из html
function checkForm(event) 
{
    var el = document.getElementById('main-form');

    var name = el.name.value;     // Получает имя
    var pass = el.pass.value;     // Получаем пароль
    var repass = el.repass.value; // Получаем подтрержденный пароль
    var state = el.state.value;   // Получаем пол
    
    var fail = "";

    event.preventDefault(); //Отключаем стандартное поведение события submit что-бы форма не перезагружалаь 
    
    if (name == "" || pass == "" || state == "") 
        fail = "Заполните все поля";
    else if (name.length <= 1 || name.length > 50) 
        fail = "Введите корректное имя";
    else if (pass != repass) 
        fail = "Пароли должны совпадать";
    else if (pass.split("&").length > 1) 
        fail = "Недопустимый символ &";
    
    if (fail != "") 
    {
        document.getElementById('error').innerHTML = fail + "<br><br>";
    } else 
    {
        alert("Все данные корректно заполненны")  
    }   
}