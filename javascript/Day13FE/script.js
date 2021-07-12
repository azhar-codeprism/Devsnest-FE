
let setup = document.getElementById("setup")
let punchline = document.getElementById("punchline")
let getJoke = document.getElementById("get-joke")
function joke_fetch(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {setup.innerHTML = `${data.setup}`
                    punchline.innerHTML = `${data.punchline}`
                })
}

getJoke.addEventListener('click',joke_fetch)