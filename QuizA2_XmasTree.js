const d = new Date();

let currentMonth = d.getMonth() +1;
let currentDay = d.getDate();
let year = d.getFullYear();

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let monthname = month[d.getMonth()];
console.log(currentMonth)

if(currentMonth == 12 && currentDay > 25){
    year += 1;
}

let nextXmasDate = year + '-12-25T00:00:00.000Z';
let xmasDay = new Date(nextXmasDate);

let diffSeconds = Math.floor((xmasDay.getTime() - d.getTime()) / 1000);

let days = 0;
days = Math.floor(diffSeconds / (3600*24));

document.getElementById("today").innerHTML = `Today is ${currentDay} ${monthname}, ${year}.`;
document.getElementById("countdown").innerHTML = days + " DAYS";