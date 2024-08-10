const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'reset') {  // 'reset' should be a string
            alert("Color Reset!");
            body.style.backgroundColor = ''; // Reset background color
        } else {
            body.style.backgroundColor = e.target.id;
        }
    });
});
