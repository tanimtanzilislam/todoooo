let listContainer = document.getElementById('list-container');
let inputBox = document.getElementById('input-box');

function addTask() {
    if (inputBox.value === '') {
        alert('Add your Task');
    } else {
        let task = document.createElement('li');
        task.textContent = inputBox.value; // Changed line
        listContainer.appendChild(task);

        let span = document.createElement('span');
        span.textContent = '\u00D7'; // Changed line
        task.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', (el) => { // Changed line
    if (el.target.tagName === 'LI') { // Changed line
        el.target.classList.toggle('checked');
        saveData();
    } else if (el.target.tagName === 'SPAN') { // Changed line
        el.target.parentNode.remove(); // Changed line
        saveData();
    }
});

function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('tasks');
}

showData();