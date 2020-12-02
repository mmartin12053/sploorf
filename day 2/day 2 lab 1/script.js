let secondsInAMinute = 60;
let minutesInAnHour = 60;
let hoursInADay = 24;
let daysInAYear = 365;


var secondsInAnHour = secondsInAMinute * minutesInAnHour;
var secondsInADay = secondsInAnHour * hoursInADay;
var secondsInAYear = secondsInADay * daysInAYear;

document.write('the number of seconds in a hour is ' + secondsInAnHour);
document.write('<br>');

document.write('the number of seconds in a day is ' + secondsInADay);
document.write('<br>');

document.write('the number of seconds in a year is ' + secondsInAYear);
document.write('<br>');
//
//