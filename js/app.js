'use strict';

//welcome message
alert('Welcome to My Website');

// User name prompt
var name =prompt('May I know your name please!');
 alert('Hello ' + name + '! Welcome To My Website');
 console.log('Name', name)

 //questions
//question 1
var love = prompt('Do you love coding?');

love = love.toLowerCase();

switch (love){
    case 'yes':
    case 'y':
        alert('ofcourse, you do!');
        console.log('You selected yes for question 1');
        break;
    case 'no':
    case 'n':
        alert('pity');
        console.log('You selected no for question 1');
        break;
    default:
        alert('Sorry! I didn\'t get that');
        console.log('Your answer for question 1 is not valid');
}

//Question 2
var swim = prompt('Do you like swimming?');

swim = swim.toLowerCase();

switch(swim){
    case 'yes':
    case 'y':
        alert('A great sports indeed!!');
        console.log('You selected yes for question 2');
        break;
    case 'no':
    case 'n':
        alert('You need to workout fatty :)');
        console.log('You selected no for question 2');
        break;
    default:
        alert('Sorry! I didn\'t get that');
        console.log('Your answer for question 2 is not valid');
}

//Question 3
var coffee = prompt('Do you drink coffee?');

coffee = coffee.toLowerCase();

switch(coffee){
    case 'yes':
    case 'y':
        alert('Its delicious!!!');
        console.log('You selected yes for question 3');
        break;
    case 'no':
    case 'n':
        alert('You gotta be kidding me!');
        console.log('You selected no for question 3');
        break;
    default:
        alert('Sorry! I didn\'t get that');
        console.log('Your answer for question 3 is not valid');
}

//Question 4
var cat= prompt('Can you teach a cat to talk?');

cat=cat.toLowerCase();

switch(cat){
    case 'yes':
    case 'y':
        alert('You should be a trainer');
        console.log('You selected yes for question 4');
        break;
    case 'no':
    case 'n':
        alert('cats never learn');
        console.log('You selected no for question 4');
        break;
    default:
        alert('Sorry! I didn\'t get that');
        console.log('Your answer for question 4 is not valid');
}

//Question 5
var global= prompt('Do you believe global warming is a hoax?');

global=global.toLowerCase();

switch(global){
    case 'yes':
    case 'y':
        alert('You should check the latest researches');
        console.log('You selected yes for question 5');
        break;
    case 'no':
    case 'n':
        alert('Yet there is nothing much we are doing to avoid it!');
        console.log('You selected no for question 5');
        break;
    default:
        alert('Sorry! I didn\'t get that');
        console.log('Your answer for question 5 is not valid');
}

//Farewell
alert('Thanks for your time ' + name + ', Have a nice day!');

window.onload = function() {
document.getElementById('name').innerHTML= name;
document.getElementById('Ans1').innerHTML= love;
document.getElementById('Ans2').innerHTML= swim;
document.getElementById('Ans3').innerHTML= coffee;
document.getElementById('Ans4').innerHTML= cat;
document.getElementById('Ans5').innerHTML= global;
}
