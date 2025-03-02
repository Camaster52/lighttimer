










// инициализируем функцию
function timer()
{
    // инициализируем обьект даты пишем padStart (первое чило, колличество символов, второе число это число которое ставится перед всеми числами тобиш вместо 5 секунд 05 секунд что бы было грамотно
    // а также конвертируем в стринг
    var date = new Date();
    var hours = String(date.getHours()).padStart(2, '0'); 
    var minutes = String(date.getMinutes()).padStart(2, '0');
    var seconds = String(date.getSeconds()).padStart(2, '0'); 

    // создаем переменную где будет храниться все время для дальнейшего вывода
    var time = hours + ":" + minutes + ":" + seconds;
    //получаем инфу об элементе и запихиваем туда наше время ввиде текста
    document.getElementsByClassName("timesection")[0].innerText = time;

}

//создаем интервал в котором каждую секунду вызывается функция uptimer() а внутри нее сразу же вызывается  timer();
setInterval(function uptimer()
{
    timer();
},1000);

















































































