//1
let task1 = document.getElementById("task1");
function firstTask() {
    let replaceEl = /@/gi,
        str = 'aaa@bbb@ccc',
        result = str.replace(replaceEl, '!');
    task1.innerHTML = 'Заданная строка: ' + str + '<br>' + 'Строка с заменой "@": ' + result; 
}
firstTask();

//2
let task2 = document.getElementById("task2");
let secondTask = function() {  
    let date = '2025-12-31';
    let arr = date.split('-');
    let formatDate = arr[2] + '/' + arr[1] + '/' + arr[0]; 

    return formatDate;
}
task2.innerHTML = 'Дата в новом формате: ' + secondTask();

//3
let task3 = document.getElementById("task3");
function thirdTask() {    
    let str = 'Я учу javascript!';
    let firstMethod = str.substring(0, 1);
    let secondMethod = str.substr(0, 1);
    let thirdMethod = str.slice(0, 1);
    task3.innerHTML = 'Метод substring(): ' + firstMethod + '<br>' + 'Метод substr(): ' + secondMethod + '<br>' + 'Метод slice(): ' + thirdMethod;
}
thirdTask();

//4
let task4 = document.getElementById("task4");
function fourthTask(arr) {
    let sum = 0,
        result = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);        
    }
    result = Math.sqrt(sum);
    task4.innerHTML = 'Сумма кубов элеметов массива = ' + sum + '<br>' + 'Квадратный корень из суммы = ' + result.toFixed(2); 

    return result;
}
fourthTask([4, 2, 5, 19, 13, 0, 10]);

//5
let task5 = document.getElementById("task5");
function fifthTask(n) {  
    let a = 3, b = 5, c = 0;
    c = a - b;
    task5.innerHTML = 'Результат выражения при a = ' + a + ' и b = ' + b + ': ' + Math.abs(c) + '<br>';

    a = 6;
    b = 1;
    c = a - b;
    task5.innerHTML = task5.innerHTML + 'Результат выражения при a = ' + a + ' и b = ' + b + ': ' + Math.abs(c);     
}
fifthTask();

//6
let task6 = document.getElementById("task6"); 
function addZero (num) {
    if (num <= 9) {
      return num = '0' + num;  
    } else {
        return num;
    }
}
function sixthTask() {   
    let date = new Date();
    let fullDate = date.getDate() + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear(); //для проверки можно убрать "+ 1" в getMonth()
    let time = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
    task6.innerHTML = time + ' ' + fullDate;
}
sixthTask()

//7
let task7 = document.getElementById("task7");
function seventhTask() { 
    let str = 'aa aba abba abbba abca abea';
    searchReg = str.match(/ab+a/gi);
    task7.innerHTML = 'Заданная строка: ' + str + '<br>' + 'Вывод искомых строк: ' + searchReg;
}
seventhTask();

//8
let task8 = document.getElementById("task8");
function eighthTask() {      
    while (true) {
        let phoneNumber = prompt('Введите номер телефона в международном формате.', '+375(29)1234567');
        var re = /^[\+]{1}[\d]{1,3}\([\d]{2,3}\)[\d]{5,7}$/;
        var valid = re.test(phoneNumber);
        if (valid) {
            alert('Номер телефона ' + phoneNumber + ' введен верно ');
            task8.innerHTML = 'Вы ввели номер телефона: ' + phoneNumber; 
            break;                                    
        } else {
            alert('Номер телефона не подходит под международный формат');    
        }           
    }   

    return valid;
}

//9
let task9 = document.getElementById("task9");
function ninthTask() {  
    while (true) {
        let email = prompt('Введите Email.', 'info@gmail.com');
        let re = /^[A-Za-z]+([A-Za-z0-9_\-\.])+\@([A-Za-z]{2,11})+\.([A-Za-z]{2,11})$/; //не проверяет на повторение символов ".", "_", "-"
        let valid = re.test(email);
        if (valid) {
            alert('Email ' + email + ' введен верно ');
            task9.innerHTML = 'Вы ввели Email: ' + email; 
            break;                                
        } else {
            alert('Вы ввели Email ' + email + ' неправильно');                            
        } 

        return valid;          
    }   
}

//10
let task10 = document.getElementById("task10");
function tenthTask(arr) {  
    let link = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';   

    let valid1 = link.match(/https?:\/\/([^\/]+)[^\/]+/)[0];
    arr.push(valid1);

    let valid2 = link.match(/[\/?][\S]+[\/\?]/)[0];
    valid2 = valid2.replace(/\/\/([^\/]+)[^\/]+/g, '');
    valid2 = valid2.replace(/\?/g, '');
    arr.push(valid2);

    let valid3 = link.match(/utm[\S]+[\#]/)[0];
    valid3 = valid3.replace(/\#/g, '');
    arr.push(valid3);

    let valid4 = link.match(/[\#][\S]+/)[0];
    arr.push(valid4);

    console.log(valid1 + '\n' + valid2 + '\n' + valid3 + '\n' + valid4);
    task10.innerHTML = '<b>Разбиение домена: </b><br>' + valid1 + '<br>' + valid2 + '<br>' + valid3 + '<br>' + valid4;
    console.log(arr);
    task10.innerHTML = task10.innerHTML + '<br><br>' + '[' + arr + ']';     

    return arr;
}
tenthTask([]);