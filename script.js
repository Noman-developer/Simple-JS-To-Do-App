let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function () {
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let li = document.createElement('li');
    li.innerHTML = `
        <span class="text">${taskText}</span>
        <button class="del">X</button>
    `;

    // Task complete toggle
    li.querySelector('.text').addEventListener('click', function () {
        this.parentElement.classList.toggle('completed');
    });

    // Delete task
    li.querySelector('.del').addEventListener('click', function () {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
});
