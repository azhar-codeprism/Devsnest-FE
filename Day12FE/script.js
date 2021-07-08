let main = document.getElementById("main")
let addTaskBtn = document.getElementById("add-task")
let addTaskModal = document.getElementById("add-task-modal")
let taskDesc = document.getElementById("input-task")
let registerTask = document.getElementById("reg-task-btn")

let value = taskDesc.value
console.log(taskDesc.value)
let count = 1
let store = []
let taskTemplate = function(id, task,status){
    return {
        id,
        task,
        status
    }
}

function openModal(){
    addTaskModal.classList.toggle("invisible")
}

function displayTask(){
    let div = document.createElement('div')
    div.classList.add('task')
    let currTask = taskTemplate(count, taskDesc.value, true)
    store.push(currTask)
    console.log(store)
    div.innerHTML = `<span>${count}. ${currTask.task}</span><button class = "cmplt-task-btn" id = ${count}>&#10003</button>`
    main.appendChild(div);
    (function addListener(){
        let cmpltBtn = document.getElementById(`${count}`)
        cmpltBtn.addEventListener("click",()=>{
                    let completedTask = cmpltBtn.previousElementSibling.innerHTML
                    cmpltBtn.parentElement.innerHTML = `<strike> ${completedTask}</strike>`
                    console.log("adeed")
                })
    })();
}


if(taskDesc.value !== null || taskDesc.value !== null ){
    registerTask.addEventListener('click',()=>{
        addTaskModal.classList.toggle("invisible")
        displayTask()
        count += 1
    })
}

addTaskBtn.addEventListener('click', ()=>{
    openModal()
})



