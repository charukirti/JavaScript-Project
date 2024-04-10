const addTodoButton = document.querySelector('.add-todo__btn')
const addInputElement = document.querySelector('.add-todo__input')
const taskListContainer = document.querySelector('.task-list')
const messageTxtElement = document.querySelector('.message-text')

const checkBoxElement = document.querySelector('.list_item--check')
const editButton = document.querySelectorAll('.edit-task')
const deleteIcon = document.querySelectorAll('.delete-task')

loadTasksFromLocalStorage()

// adding todo element on keypress
addInputElement.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const value = addInputElement.value;
        addTask(value)
        saveTasksToLocalStorage()
        addInputElement.value = ''
    } else {
        messageTxtElement.textContent = ''
    }
})



// handling task complition status  

taskListContainer.addEventListener('change', event => {
    if (event.target.matches('.list_item--check')) {
        const taskItem = event.target.closest('.task-list__item');
        const editButton = taskItem.querySelector('.edit-task');

        editButton.style.display = event.target.checked ? 'none' : 'block'; // Hide/show edit button based on checkbox state
        taskItem.classList.toggle('completed', event.target.checked);
        displayMessage('Task Completed', 'done');

        saveTasksToLocalStorage()

    }

});


// handling edit button
taskListContainer.addEventListener('click', event => {
    const editBtn = event.target.closest('.edit-task');
    if (editBtn) {
        console.log('Edit btn found');
        const todoItem = event.target.closest('.task-list__item')
        /* targetting task name */
        const task = todoItem.querySelector('.task-title')

        /* making title editable */
        task.contentEditable = true;
        task.focus()

        /* Eventlistener for saving edited task */
        task.addEventListener('keydown', event => {
            if (event.keyCode === 13 || event.keyCode === 9) {
                console.log('Specified key pressed');
                task.contentEditable = false;
                saveTasksToLocalStorage()
            }
        })
        console.log(task);

    }
});


// handling delete button

taskListContainer.addEventListener('click', event => {
    const deleteBtn = event.target.closest('.delete-task');
    if (deleteBtn) {
        const task = deleteBtn.closest('.task-list__item')
        task.remove()
        console.log(task);

        saveTasksToLocalStorage()
    }
})


// function to add task
function addTask() {
    if (addInputElement.value === '') {
        displayMessage('Input should not be empty', 'error')
    } else {
        const value = addInputElement.value
        displayTask(value)
        saveTasksToLocalStorage()
        addInputElement.value = ''
        displayMessage('Task added successfully', 'success')
    }
}


// display message
function displayMessage(message, className) {
    console.log(message);
    messageTxtElement.textContent = ''
    messageTxtElement.textContent = message;
    /* changing message color */
    messageTxtElement.classList.remove('error', 'success', 'done')
    messageTxtElement.classList.add(className)

}

function displayTask(taskName, staus = false) {
    const todo = ` <div class="task-list__item">
    <div class="task-details">
        <input type="checkbox" class="list_item--check" id="input-checkbx">
        <p class="task-title">
            ${taskName}
        </p>
    </div>
    <div class="options">
        <div class="edit-task">
            <img src="./images/edit.svg" alt="edit-task">
        </div>
        <div class="delete-task">
            <img src="./images/delete.svg" alt="delete-task">
        </div>
    </div>
</div>`;
    taskListContainer.insertAdjacentHTML("beforeend", todo)

    const taskItem = taskListContainer.querySelector(`.task-list__item:last-child`);
    taskItem.classList.toggle('completed', status);
}
// Event listener to add task
addTodoButton.addEventListener('click', function (e) {
    addTask()
});

function loadTasksFromLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    storedTasks.forEach(task => {
        displayTask(task.name, task.completed);
    });
}



// configuring local storage for adding tasks

function saveTasksToLocalStorage() {
    const tasks = [];
    const taskElements = document.querySelectorAll('.task-list__item');

    taskElements.forEach(taskElement => {
        const taskName = taskElement.querySelector('.task-title').textContent;
        const taskCompleted = taskElement.classList.contains('completed');

        tasks.push({
            name: taskName,
            completed: taskCompleted
        });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

