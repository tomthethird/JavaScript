window.onload = function onload() {
    let container = document.getElementById("container");
    let button = document.getElementById("submit");
    const timer = 1000;

    function countdown() {
        let i = 10
        const loop = () => {
            let circle = document.createElement("div")
            circle.id = "circle"

            let numberContainer = document.createElement("p")
            let number = document.createTextNode(`${i}`)

            numberContainer.appendChild(number)
            circle.appendChild(numberContainer)
            container.appendChild(circle)
            i--
            
            if (i == 0){
                clearInterval(interval)

                const x = setInterval(function() {
                    let rocket = document.createElement("img");
                    rocket.src=("https://static.vecteezy.com/system/resources/previews/003/211/955/original/rocket-launch-icon-illustration-free-vector.jpg");
                    container.appendChild(rocket);
                    clearInterval(x)
                }, timer);
            }
        }
        const interval = setInterval(loop, timer)
    }
    button.onclick = () => {
        countdown();
    }
}