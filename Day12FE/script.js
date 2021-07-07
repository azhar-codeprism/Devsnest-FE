let addDayBtn = document.getElementById("add-day")
let addTaskBtn = document.getElementById("add-task")
let lower = document.getElementById("lower")
let modal = document.getElementById("modal")
let taskModal = document.getElementById("add-task-modal")
let confirmDay = document.getElementById("date-ok")
let confirmTask = document.getElementById("task-ok")


addDayBtn.addEventListener('click', ()=>{
    modal.classList.toggle("invisible")
    document.body.classList.toggle("semi-transparent")
    lower.classList.add("invisible")
    console.log('day added')
})

confirmDay.addEventListener("click",()=>{
    modal.classList.toggle("invisible")
    document.body.classList.toggle("semi-transparent")
    lower.classList.remove("invisible")
})

addTaskBtn.addEventListener('click', ()=>{
    taskModal.classList.toggle("invisible")
    document.body.classList.toggle("semi-transparent")
    upper.classList.add("invisible")
    lower.classList.add("invisible")
})

confirmTask.addEventListener("click", ()=>{
    taskModal.classList.toggle("invisible")
    document.body.classList.toggle("semi-transparent")
    upper.classList.remove("invisible")
    lower.classList.remove("invisible")
})
