

var days = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var consoleGreating = "Hola mundo desde JS";
// alert('test');

function setTimeAndDate(timeElement, dateElement){
	var date = new Date();
	var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
	var time = date.getHours() + ":" + minutes;

	var date1 = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
	timeElement.innerHTML = time;
	dateElement.innerHTML = date1;
}


console.log(consoleGreating);

document.addEventListener('DOMContentLoaded', function(dcle){
	 var timeElement = document.getElementById('time');
	 var dateElement = document.getElementById('date');
	 setTimeAndDate(timeElement, dateElement)
})