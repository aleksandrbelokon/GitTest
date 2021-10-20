function checkForm(el) 
{
    
    var name = el.name.value;     // Получает имя
    var pass = el.pass.value;     // Получаем пароль
    var repass = el.repass.value; // Получаем подтрержденный пароль
    var state = el.state.value;   // Получаем пол
    
    var fail = "";
    
    if (name == "" || pass == "" || state == "") 
        fail = "Заполните все поля";
    else if (name.length <= 1 || name.length > 50) 
        fail = "Введите корректное имя";
    else if (pass != repass) 
        fail = "Пароли должны совпадать";
    else if (pass.split("&").length > 1) 
        fail = "Недопустимый символ &";
    
    if (fail != "") {
        document.getElementById('error').innerHTML = fail + "<br><br>";
        return false;
    } else {
        alert("Все данные корректно заполненны")
        return true;    
    }   
}