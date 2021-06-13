const num = document.querySelectorAll(".nmbr")
const inpt = document.getElementById("upper")
const operators = document.querySelectorAll(".oper")

let topp = inpt.firstElementChild
let bot = inpt.lastElementChild

let expression = ""
let res = ""

num.forEach(bttn => {bttn.addEventListener('click',numClick => {
    topp.textContent+=bttn.textContent
    expression = topp.textContent.toString()
    })
})

operators.forEach(operator =>{operator.addEventListener("click",action =>{
    if(operator.value === "AC"){
        topp.textContent = ""
        bot.textContent = ""
    }
    else if(operator.value === "bck"){
        top.textContent = top.textContent.slice(0,-1)
    }
    else if(operator.value === "="){
        res = eval(expression)
        topp.textContent = res
        console.log(res,expression)
    }
    else{
    topp.textContent+=operator.textContent
    expression = bot.textContent.toString()
    }
    })
})