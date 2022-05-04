

alert('Welcome to a quiz about the known Universe');
var name = prompt('What is your name?');

var good = ['Good Morning ', 'Hello ', 'How are you ']

var yay = ['Congrats ', 'Good work ', 'Correct ',]
var run = Math.floor(Math.random() * 3)

alert(good[run] + name)


score = 0;

alert('Some quick ground rules \n - Nothing is spelt with a capital letter, so please enter all lower-case letters. \n - If you get a question wrong, it deducts a point from your overall tally, if you get one right it will add a point. \n Other than that, you may click the continue button!');

//question one
var qone = prompt('Insert Question One');

while (qone != 'Insert answer One') {
  var qone = prompt('Insert Question One');
  score = score - 1;
}

if (qone == 'Insert Answer One') {
alert ('Correct ' + name)
score = score + 1;
} 
//question two
var qtwo = prompt('Insert Question Two');

while (qtwo != 'Insert Answer Two') {
  var qtwo = prompt('Insert Question Two');
  score = score - 1;
}

if (qtwo == 'Insert Answer Two') {
alert ('Correct ' + name)
score = score + 1;
}
//question three
var qthree = prompt('Insert Question Three');

while (qthree != 'Insert Answer Three') {
  var qthree = prompt('Insert Question Three');
  score = score - 1;
}

if (qthree == 'Insert Answer Three') {
alert ('Correct ' + name)
score = score + 1;
} 

//question four 
var qfour = prompt('Insert Question Four');

while (qfour != 'Insert Answer Four') {
  var qfour = prompt('Insert Question Four');
  score = score - 1;
}

if (qfour == 'Insert Answer Four') {
alert ('Correct ' + name)
score = score + 1;
}

//question five
var qfive = prompt('Insert Question Five');

while (qfive != 'Insert Answer Five') {
  var qfive = prompt('Insert Question Five');
  score = score - 1;
}

if (qfive == 'Insert Answer Five') {
alert ('Correct ' + name)
score = score + 1;
} 

if (score == 6){
alert('Congratulations, you\'re a star ' + name + '. You managed to get a score of ' + score + '. I count that as a win but you always could have done better. Have a great day ' + name + '.');
}

if (score == 5){
alert('You did alright ' + name + '. You may not have got a perfect score but you can always try again. You have concludede with a total score of ' + score + '.')

}
if (score == 4){
alert('You made an average effort ' + name + '. You did not get a perfect score but you can always try again. You ended up with a overall score of ' + score + '.')

}
if (score == 3){
alert('Halfway ' + name + '. Whilst you did not win, you did try your hardest and managed to get a score of ' + score + '.')

}
if (score == 2){
alert('You need to pick up a astrophysics book ' + name + '. You could even try a astronomy book. You managed a score of ' + score + '.')

}
if (score == 1){
alert('You did really bad ' + name + '. You did terrible, come see me when you have more knowlege. Your utterly terrible score was ' + score + '.')

}

if (score <= 0){
alert('Terrible ' + name + ', Absolutly terrible. I dont know how but you managed to get a score of ' + score + '. That is truly sad.')

}

alert('Thank you ' + name + '. You have succsesfuly completed the quiz and got a score of ' + score + '. Good bye')