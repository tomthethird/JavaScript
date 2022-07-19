const d = new Date;
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let monthname = month[d.getMonth()];
let dayname = day[d.getDay()];
let number = d.getDate();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let amOrPm = (hours < 12) ? "AM" : "PM"

hours = (hours===0) ? 12 : ((hours > 12) ? hours-12 : hours);
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

let timeString = `${hours}:${minutes}:${seconds} ${amOrPm}`

function addZero(component) {
    return component < 10 ? "0" + component : component;
}

document.getElementById("dateString").innerHTML = `Today is ${monthname} ${number}, ${dayname}. Current time is ${timeString}.`
document.getElementById("date").innerHTML = monthname + " " + number;
document.getElementById("clock").innerHTML = timeString;
document.getElementById("day").innerHTML = dayname;