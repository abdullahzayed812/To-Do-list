let theInput = document.querySelector('.add-tasks input');
let addButton = document.querySelector('.add-tasks .plus');
let tasksContainer = document.querySelector('.tasks-content');
let tasksCount = document.querySelector('.tasks-stats .tasks-count span');
let tasksCompleted = document.querySelector('.tasks-stats .tasks-completed span');

window.onload = function () {
    theInput.focus();
}

addButton.onclick = function () {
    if (theInput.value === '') {
        window.alert('Plese Inset Task');
    } else {
        let noMessage = document.querySelector('.tasks-content .no-message');

        if (document.body.contains(noMessage)) {
            noMessage.remove();
        }
        
        let mainSpanTask = document.createElement('span');
        let textTask = document.createTextNode(theInput.value);
        mainSpanTask.appendChild(textTask);
        mainSpanTask.className = 'task-box';
        let deleteButton = document.createElement('span');
        let deleteText = document.createTextNode('Delete');
        deleteButton.appendChild(deleteText);
        deleteButton.className = 'delete';
        mainSpanTask.appendChild(deleteButton);
        tasksContainer.appendChild(mainSpanTask);
        theInput.value = '';
        theInput.focus();
        // Want To Check If The Input Value Equal To Task Box Content
        // if (document.querySelectorAll('.task-box').textContent === theInput.value) {
        //     window.alert('No Add')
        // }
        calculateTasks();
    }
}

document.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        e.target.parentNode.remove();
        calculateTasks();
        if (tasksContainer.childElementCount == 0) {
            createNoTask()
        }
    }


    if (e.target.classList.contains('task-box')) {
        e.target.classList.toggle('finished');
        calculateTasks();
        // Want To Create Button To Add Finished Class
    }
});

function createNoTask() {
    let msgSpan = document.createElement('span');
    msgSpan.className = 'no-message';
    msgSpan.appendChild(document.createTextNode('No Tasks To Show'));
    tasksContainer.appendChild(msgSpan);
}

function calculateTasks() {
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}