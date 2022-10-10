//1
let task1 = document.getElementById("task1");
function firstTask(a, b, c) {
    let sum = 0;
    sum = (a - b) / c;
    task1.innerHTML = '<b>Заданные числа:</b> ' + a + ', ' + b + ', ' + c + '<br>' + '<b>Решение: </b>(' + a + ' - ' + b + ') / ' + c + ' = ' + sum;
}
firstTask(22, 2, 4);

//2
let task2 = document.getElementById("task2");
let secondTask = function(num) {    
    let square = num * num;
    let cube = square * num;
    return 'Возводимое число: ' + num + '<br>Квадрат = ' + square +  '<br>Куб = ' + cube;
}
task2.innerHTML = secondTask(2);

//3
// Решение в одно фунции
let task3 = document.getElementById("task3");
function thirdTask(a, b) {    
    if (a < b) {
        return a;
      } else if (a == b){
        return a + ' = ' + b;
      } else{
        return b;
      }   
}
task3.innerHTML = thirdTask(10, 10); 

//4
let task4 = document.getElementById("task4");
let inputRange = function() { 
    arr = [];
    let firstNum = prompt('Введите начало диапазоа', 2);
    while (true) {
        if (firstNum === '' || firstNum === ' ' || (isNaN(firstNum))) {        
            alert('Вы не ввели число');
            firstNum = prompt('Введите начало диапазоа', 2);
        } else{
            break;
        }      
    }
    console.log(firstNum);
    let secondNum = prompt('Введите конец диапазоа', 20);
    while (true) {        
        if (secondNum === '' || secondNum === ' ' || (isNaN(secondNum))) {
            alert('Вы не ввели число');
            secondNum = prompt('Введите конец диапазоа', 20);
        } else{
            break;
        }
    }
    console.log(secondNum);
        
    if (firstNum > secondNum){
        for (let i = firstNum; i >= secondNum; i--) {
            arr.push(Number(i));           
        }
        console.log(arr);
    } else if (firstNum < secondNum) {
        for (let i = firstNum; i <= secondNum; i++) {
            arr.push(Number(i));            
        }
        console.log(arr);
    }        
    return arr;    
}
function outputArr() {
    task4.innerHTML = 'Массив в заданном диапазоне: [' + inputRange() + ']<br>'; 
}
// outputArr();

//5
let task5 = document.getElementById("task5");
function isEven(n) {  
     task5.innerHTML = 'Заданное число: ' + n + '<br>';
     if (n % 2 == 0) {
        task5.innerHTML = task5.innerHTML + 'Число ' + n + ' четное';
        return true;
     } else{
        task5.innerHTML = task5.innerHTML + 'Число ' + n + ' нечетное';
        return false;
     }     
}
isEven(Math.floor(Math.random() * (100 - 1)) + 1);

//6
let task6 = document.getElementById("task6");
function sixthTask(arr) {   
    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 == 0 ? evenArr.push(arr[i]) : '';        
    }    
    task6.innerHTML = 'Заданный массив: [' + arr + ']';
    return evenArr;
}
task6Sec.innerHTML = 'Четный массив: [' + sixthTask([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) + ']';

//7
let task7 = document.getElementById("task7");
function seventhTask() { 
    let symbol = prompt('Введите символ');
    function pyramid(n) {        
        for(let i = 1; i <= n; i++){
            let m = '';
            for(let j = 0; j < i; j++){
                if (symbol == undefined || symbol.length-1 || symbol == ' ') {
                    m += i;
                } else{
                    m += symbol;
                }
            }
            console.log(m+'\n');
            task7.innerHTML = task7.innerHTML + m + '<br>';
        }
    }
    pyramid(prompt('Введите восту пирамиды', 9));
}

//8
let task8 = document.getElementById("task8");
let task8_reverse = document.getElementById("task8_reverse");
function eighthTask() {  
    let line = 0, i = 0, j = 0;
    let space = '', triangle = '';
    while (true) {
        line = prompt('Выберите высоту фигуры', 10);
        if (line == false || isNaN(line)) {
            alert("Вы не ввели число");                                     
        } else {
            break;
        }           
    }     
    while (i < line) { 
        space = '', triangle = '';
        for (j = 0; j < line - i; j++) space += "&nbsp;&nbsp;";
        for (j = 0; j < 2 * i + 1; j ++) triangle += "*";
        task8.innerHTML = task8.innerHTML + space + triangle + '<br>';
        i++;
    }  
    i = line - 1;
	while (i >= 0) {
	  space = '', triangle = '';
	  for (j = 0; j < line - i; j++){
        space += "&nbsp;&nbsp;"; 
    }
	  for (j = 0; j < 2 * i + 1; j++) {
        triangle += "*"; 
    }
    task8_reverse.innerHTML = task8_reverse.innerHTML + space + triangle + '<br>'; 
	  i--; 
	}
}


//9
let task9 = document.getElementById("task9");
function ninthTask(n) {  
    let arr = [];
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            arr[i] = 1;
        } else {
            arr[i] = arr[i-1] + arr[i-2];
        }
    }    
    return arr;
}
task9.innerHTML = ninthTask(16);

//10
let task10 = document.getElementById("task10");
let num = 256;
function tenthTask(num) {  
    let sum = 0;
    let arr = String(num).split('');
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];        
    }
    if (sum > 9) {
        return tenthTask(sum);
    } else{
        return sum;
    }
}
let finalSum = tenthTask(num);
task10.innerHTML = 'Заданное число: ' + num + '<br>Сумма цифр заданного числа = ' + finalSum;

//11
let task11 = document.getElementById("task11");
let i = 0;
function eleventhTask(arr) {
    task11.innerHTML = task11.innerHTML + arr[i] + ', ';
    i++;
    if (i < arr.length) {
        eleventhTask(arr)
    }
}
eleventhTask([1, 2, 3, 46, 512, 0, -2]);

//12
let task12 = document.getElementById("task12");
function tveltwelfthTask() {    
    task12.innerHTML = 'Ответ записан в консоль';
    function createFrame(length){
        let frame = '';
        for (let i = 0; i < length; i++){
            frame += '*';
        }
        console.log(frame);
    }
    
    let arr = [];
    arr.push('Домашняя работа \"Функции\"');
    
    let group = prompt('Введите номер группы', 12345);
    arr.push('Выполнил студент гр.' + group);
    
    let lastName = prompt('Введите фамилию', 'Иванов'),
    firstName = prompt('Введите имя', 'Иван'),
    patronymic = prompt('Введите отчество', 'Иванович'),
    fio = lastName + ' ' + firstName + ' ' + patronymic;
    arr.push(fio);
    
    let frameLength = 0;
    for (let i = 0; i < arr.length; i++){
        if (frameLength < arr[i].length){
            frameLength = arr[i].length;
        }
    }
    frameLength += 2;
    
    createFrame(frameLength);
    for (let i = 0; i < arr.length; i++){
        let resultString = '*';
        for (let j = 0; j < frameLength; j++){
            if (arr[i][j] === undefined){
                if (j === frameLength - 2){
                    resultString += '*';
                }
                else{
                    resultString += ' ';
                }
            }
            else{
                resultString += arr[i][j];
            }
        }
        console.log(resultString);
    }
    createFrame(frameLength);
}

//13
let task13 = document.getElementById("task13");
function thirteenthTask() {    
    while (true) {
        let mail = prompt('Введите почту', 'test@gmail.com');
        switch (true) {
            case (mail.search(/[А-яЁё]/) !== -1):
                alert('Почта должна состоять из латичнских букв. Введите почту заново');
                continue;
            case (mail.search(/[,!&?]/) !== -1):
                alert('Почта не должна содержать спец. символы. Введите почту заново');
                continue;

            case (mail.split('@').length - 1 > 1):
                alert('Почта не должна содержать более одного символа "@". Введите почту заново');
                continue; 
            case (mail.split('.').length - 1 > 1):
                alert('Почта не должна содержать более одной точки. Введите почту заново');
                continue;
                case (mail.split('_').length - 1 > 1):
                alert('Почта не должна содержать более одного символа "_". Введите почту заново');
                continue;                           
            case (mail.split('-').length - 1 > 1):
                alert('Почта не должна содержать более одного символа "-". Введите почту заново');
                continue;

            case (mail.indexOf('@') == 0 || mail.indexOf('@') == mail.length - 1):
                alert('Почта не должна начинаться или заканчиваться знаком "@". Введите почту заново');
                continue;                
            case (mail.indexOf('.') == 0 || mail.indexOf('.') == mail.length - 1):
                alert('Почта не должна начинаться или заканчиваться точкой. Введите почту заново');
                continue;               
            case (mail.indexOf('_') == 0 || mail.indexOf('_') == mail.length - 1):
                alert('Почта не должна начинаться или заканчиваться знаком "_". Введите почту заново');
                continue;              
            case (mail.indexOf('-') == 0 || mail.indexOf('-') == mail.length - 1):
                alert('Почта не должна начинаться или заканчиваться знаком "-". Введите почту заново');
                continue;  

            case (
                mail.indexOf('@') + 1 == mail.indexOf('.') || mail.indexOf('@') - 1 == mail.indexOf('.') ||
                mail.indexOf('@') + 1 == mail.indexOf('_') || mail.indexOf('@') - 1 == mail.indexOf('_') ||
                mail.indexOf('@') + 1 == mail.indexOf('-') || mail.indexOf('@') - 1 == mail.indexOf('-')
            ):
                alert('Почта не должна содержать несколько спец. символов подряд. Введите почту заново');
                continue;
            case (
                mail.indexOf('.') + 1 == mail.indexOf('@') || mail.indexOf('.') - 1 == mail.indexOf('@') ||
                mail.indexOf('.') + 1 == mail.indexOf('_') || mail.indexOf('.') - 1 == mail.indexOf('_') ||
                mail.indexOf('.') + 1 == mail.indexOf('-') || mail.indexOf('.') - 1 == mail.indexOf('-')
            ):
                alert('Почта не должна содержать несколько спец. символов подряд. Введите почту заново');
                continue;
            case (
                mail.indexOf('_') + 1 == mail.indexOf('@') || mail.indexOf('_') - 1 == mail.indexOf('@') ||
                mail.indexOf('_') + 1 == mail.indexOf('.') || mail.indexOf('_') - 1 == mail.indexOf('.') ||
                mail.indexOf('_') + 1 == mail.indexOf('-') || mail.indexOf('_') - 1 == mail.indexOf('-')
            ):
                alert('Почта не должна содержать несколько спец. символов подряд. Введите почту заново');
                continue;
            case (
                mail.indexOf('-') + 1 == mail.indexOf('@') || mail.indexOf('-') - 1 == mail.indexOf('@') ||
                mail.indexOf('-') + 1 == mail.indexOf('.') || mail.indexOf('-') - 1 == mail.indexOf('.') ||
                mail.indexOf('-') + 1 == mail.indexOf('_') || mail.indexOf('-') - 1 == mail.indexOf('_')
            ):
                alert('Почта не должна содержать несколько спец. символов подряд. Введите почту заново');
                continue;

            case (mail.split('@')[1].length <= 3):
                alert('После знака "@" должно быть более 2-х символов. Введите почту заново');
                continue;
            case (mail.split('@')[1].length > 11):
                alert('После знака "@" должно быть менее 11 символов. Введите почту заново');
                continue;
            case (mail.split('@')[0].length < 2):
                alert('Перед знаком "@" должно быть более 2-х символов. Введите почту заново');
                continue;

            case true:
                task13.innerHTML = 'Вы ввели почту: ' + mail;
                alert('Вы ввели почту: ' + mail);                
                break;
                
        }
        break;
    }   
}