let add = document.getElementById('push');
let taskInput = document.querySelector('#newTask input');
// let tasks=document.getElementById('tasks')
const tasks = document.querySelector('.container div:nth-child(2)')

// console.log(add);
// console.log(taskInput)
// console.log(tasks);
const allTasks = [];

add.addEventListener('click', () => {
    if (taskInput.value === "") {
        alert("Enter a task ");
    }
    else {
        let task1 = taskInput.value;
        // console.log(task1)
        allTasks.unshift(task1);
        console.log(allTasks);
        taskInput.value = '';
        tasks.innerHTML = '';
        ul.innerHTML = ''
        allTasks.forEach((task, index) => createListElement(task, index));
        // createListElement(allTasks);
    }
})

const ul = document.createElement('ul')
function createListElement(task, index) {
    // ul.innerHTML=''
    const li = document.createElement('li')
    ul.appendChild(li)
    let count = 0
    li.addEventListener('click', () => {
        count++;
        if (count % 2 === 1)
            completed(li);
        else
            removecompleted(li)

    })

    const span = document.createElement('span')
    li.appendChild(span)
    span.innerText = task;
    const i = document.createElement('i')
    addClassName(i, ['delete', 'far', 'fa-trash-alt'])
    i.addEventListener('click', () => {
        deleteTask(index)
    })
    li.appendChild(i)

    console.log(task)
    tasks.appendChild(ul)
    // taskInput.value='';
    // taskInput.forEach(taskElement => {
    //     const span=document.createElement('span');
    //     tasks.innerHTML=span;
    //     span.textContent=taskElement;
    //     // span.classList.add('task');

    //     // tasks.classList.add('tasks');


    //     const deleteBtn=document.createElement('button');
    //     deleteBtn.classList.add('delete,far,fa-trash-alt');
    //     span.append('deleteBtn');
    // });
}
function addClassName(tag, classList) {
    classList.forEach(className => tag.classList.add(className))
}
function deleteTask(index) {
    let tasks = allTasks;
    console.log(tasks)
    tasks.splice(index, 1);
    ul.innerHTML = ''
    allTasks.forEach((task, index) => createListElement(task, index));
}
function completed(li) {
    li.classList.add('completed');
}
function removecompleted(li) {
    li.classList.add('removecompleted');
}



