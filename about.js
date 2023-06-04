// function toggleDarkMode() {
//     var body = document.body;
//     body.classList.toggle("bg-dark");
//     body.classList.toggle("text-light");
// }
var countDownDate = new Date("June 4, 2023 00:00:00").getTime();
var x = setInterval(function()
{
  var now = new Date().getTime();
  var distance = now-countDownDate;
  var days = 246 + Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("counter").innerHTML = days + " ";
}, 1000);