window.onload = function onload() {
    let container = document.getElementById("container");
    let button = document.getElementById("submit");

    function c2f(temp) {
        let result = ((temp*9)/5)+32;
        return result;
    }

    button.onclick = () => {
        let box = document.createElement("div");
        box.id = "box"
        let digit = document.getElementById("digit").value;
        let display = document.createTextNode(`${c2f(digit)}°F`);
        box.appendChild(display)
        container.appendChild(box)

    }

}