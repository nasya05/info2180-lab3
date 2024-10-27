document.addEventListener('DOMContentLoaded', function() {
    const boardDiv = document.getElementById('board');

    // You can also select the button using its class
    const newGamebtn = document.querySelector('.btn');
    // Adding an event listener to the button

    newGamebtn.addEventListener('click', function() {
        //alert("New Game Started!");
        boardDiv.innerHTML = '';
        for (let i = 0; i < 9; i++) { // Create 9 squares for a 3x3 grid
            const square = document.createElement('div');
            square.classList.add('square');
            boardDiv.appendChild(square);
        }
    });
});