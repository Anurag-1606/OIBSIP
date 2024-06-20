document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const pendingTasksList = document.getElementById('pendingTasksList');
    const completedTasksList = document.getElementById('completedTasksList');

    addTaskBtn.addEventListener('click', () => {
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        if (task.trim() === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        pendingTasksList.appendChild(li);

        const completeBtn = li.querySelector('.complete-btn');
        const editBtn = li.querySelector('.edit-btn');
        const deleteBtn = li.querySelector('.delete-btn');

        completeBtn.addEventListener('click', () => {
            completeTask(li);
        });

        editBtn.addEventListener('click', () => {
            editTask(li);
        });

        deleteBtn.addEventListener('click', () => {
            deleteTask(li);
        });
    }

    function completeTask(li) {
        li.classList.toggle('completed');
        if (li.classList.contains('completed')) {
            completedTasksList.appendChild(li);
        } else {
            pendingTasksList.appendChild(li);
        }
    }

    function editTask(li) {
        const span = li.querySelector('span');
        const newTask = prompt('Edit your task:', span.textContent);
        if (newTask !== null) {
            span.textContent = newTask;
        }
    }

    function deleteTask(li) {
        li.remove();
    }
});
