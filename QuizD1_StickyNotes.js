window.onload = function onload() {
    let container = document.getElementById("container");
    let button = document.getElementById("submit");
    let display = ``

    const getRandomColor = () => {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            console.log(letters)
        }
        return color;
    }

    function post() {
        message = document.getElementById("text").value;
        display += `
        <div id="box" style="background-color: ${getRandomColor()};">
        <p>${message}</p>
        </div>`
        
        container.innerHTML = display
    }

    button.onclick = () => {
        post();
    }

}