function changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
}

console.log('This is an external script');
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    // You can add more functionality here
});
