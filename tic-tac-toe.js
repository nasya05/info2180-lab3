document.addEventListener('DOMContentLoaded', function() {
    const boardDiv = document.getElementById('board');

    // You can also select the button using its class
    const newGamebtn = document.querySelector('.btn');
    // Adding an event listener to the button

    newGamebtn.addEventListener('click', function() {
        //alert("New Game Started!");
        //let letter = 0;
        boardDiv.innerHTML = '';
        for (let i = 0; i < 9; i++) { // Create 9 squares for a 3x3 grid
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('snum', i);
            
            square.addEventListener('click', Squarebtn);
            boardDiv.appendChild(square);
        }
    });

    
    

});

let board = ['', '', '', '', '', '', '', '', '', ''];
let letter = 0;

function Squarebtn(event){
    //alert("New Game Started!");
    const square = event.target.getAttribute('snum');
     
    
    let player = (letter % 2 === 0) ? 'X' : 'O';

    if (board[square] == ''){
        board[square] = player;


    }else {
        const message = `Square already used. \n Pick another Square.`
        alert(message);
        return;
    
    }
     // Update the board state

       
    if (player == 'X'){ 
        
        event.target.classList.add('square.X', player);
        event.target.textContent = player;
        
    }else{
        event.target.classList.add('square.O', player);
        event.target.textContent = player;
        
    }

    letter += 1; 

}