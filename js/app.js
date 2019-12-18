'use strict';
var score=0;

//welcome message
alert('Welcome to My Website');

// User name prompt
var name =prompt('May I know your name please!');

//confirmation of name entry
while(!name){
    name = prompt('Please Enter your name');
}

//User name display
 alert('Hello ' + name + '! Welcome To My Website');

//questions 1-5
//Questions, positive reply, negative reply
var questions = [
    ['Do you love coding?', 'ofcourse, you do!', 'pity' ],
    ['Do you like swimming?', 'A great sports indeed!!', 'Yeah it can be quite exausting' ],
    ['Do you drink coffee?', 'Its delicious!!!', 'You gotta be kidding me!'],
    ['Can you teach a cat to talk?', 'You should be a trainer', 'cats never learn'],
    ['Do you believe global warming is a hoax?', 'You should check the latest researches', 'Yet there is nothing much we are doing to avoid it!']
]

//For loop feeds one entry at a time from questions array (5 entries) to currentquestion array (3 entries)
//currentquestion array entries are fed to currentprompt, positivereply and negativereply vars respectively
for(var i=0; i<5; i++){
var currentquestion=questions[i];
var currentprompt= prompt(currentquestion[0]);
currentprompt=currentprompt.toLowerCase();
var positivereply=currentquestion[1];
var negativereply=currentquestion[2];
switch(currentprompt){
    case 'yes':
    case 'y':
        alert(positivereply);
        score=score+1;
        break;
    case 'no':
    case 'n':
        alert(negativereply);
        score=score+1;
        break;
    default:
        alert('Sorry! I didn\'t get that');
}}

//Question 6
var guessnumber=prompt('Guess a number between 1 to 10, You have 4 chances');
for(var x=4; x>0; x--){
    var y=x-1;
    if (guessnumber == 5)
    {alert('You guessed it right, the number is 5');
    score=score+1;
    break;}
    else if (guessnumber<5)
        alert('Your guess is lower');
    else if (guessnumber > 5)
        alert('Your guess is higher');
    if(y>0)
    guessnumber=prompt('You have ' + (y) + ' chances left');
    }
if (y==0 && guessnumber!=5)
    alert('Sorry you ran out of chances, the number is 5');

//Question 7, Multiple entries in an array
var multi=[7, 15, 27, 36,45];
var guessmulti=prompt('Guess a number between 1 to 50 with multiple possibilities, you have 6 chances');
console.log(multi)
for(var m=6; m>0; m--){
    var n=m-1;
    for(var c=0; c<5; c++){
        if (guessmulti==multi[c]){
            alert('You guessed it right, ' + guessmulti + '. All the possible numbers are 7, 15, 27, 36, 45');
            score=score+1;
            var flag=1;
            break;
        }
    }
    if(flag==1)
    break;
    if(n>0)
    guessmulti=prompt('Your have ' + n + ' chances left');
}
if(n==0 && flag!=1)
    {alert('Sorry you ran out of chances, the numbers are 7, 15, 27, 36, 45');}

//score
alert('Your score is ' + score + ' out of 7');

//Farewell
alert('Thanks for your time ' + name + ', Have a nice day!');

window.onload = function() {
document.getElementById('name').innerHTML= name;
document.getElementById('Ans1').innerHTML= displayreply[0];
console.log('Ans1', displayreply[0]);
document.getElementById('Ans2').innerHTML= displayreply[1];
document.getElementById('Ans3').innerHTML= displayreply[2];
document.getElementById('Ans4').innerHTML= displayreply[3];
document.getElementById('Ans5').innerHTML= displayreply[4];
}
