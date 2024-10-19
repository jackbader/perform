function changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
}

function fetchToDos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const todoList = document.createElement('ul');
            todoList.id = 'todo-list';

            data.forEach(todo => {
                const todoItem = document.createElement('li');
                todoItem.textContent = `${todo.title} (${todo.completed ? 'Completed' : 'Pending'})`;
                todoList.appendChild(todoItem);
            });

            // Remove existing todo list if present
            const existingList = document.getElementById('todo-list');
            if (existingList) {
                existingList.remove();
            }

            // Append the new todo list to the main element
            document.querySelector('main').appendChild(todoList);
        })
        .catch(error => {
            console.error('Error fetching todos:', error);
            alert('Failed to fetch todos. Please try again later.');
        });
}
