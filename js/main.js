function changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
}

function fetchToDos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => console.log(data));
}