document.addEventListener('DOMContentLoaded', function() {
    const boardDiv = document.getElementById('board');
    const boardstatus = document.getElementById('status');

    // You can also select the button using its class
    const newGamebtn = document.querySelector('.btn');
    // Adding an event listener to the button

    newGamebtn.addEventListener('click', function() {
        

               
       

        for (let i = 0; i < 9; i++) { // Create 9 squares for a 3x3 grid
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('snum', i);
            square.addEventListener('mouseout',Hoveroutbtn);
            square.addEventListener('mouseover',Hoverbtn);
            
            square.addEventListener('click', Squarebtn);
            boardDiv.appendChild(square);
        }


        


        
    });

    
    

});
//alert(board);
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
    getWin(); 

}

function Hoverbtn(event){
    event.target.classList.add('hover');
}

function Hoveroutbtn(event){
    event.target.classList.remove('hover');
}

/*function getWin(){
    if (board[0] == board[1]==board[2] || board[3] == board[4]==board[5] ||
        board[6] == board[7]==board[8]||board[0] == board[3]==board[6] || board[1] == board[4]==board[7]||
        board[2] == board[5]==board[8]||board[0] == board[4]==board[8]||board[2] == board[4]==board[6]
     ){
        alert('win');
     }
}*/
function getWin() {

    let winner = '';

    if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
        winner = board[0];
    }
    else if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {
        winner = board[3];
    }
    else if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {
        winner = board[6];
    }
    else if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {
        winner = board[0];
    }
    else if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {
        winner = board[1];
    }
    else if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {
        winner = board[2];
    }
    else if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {
        winner = board[0];
    }
    else if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {
        winner = board[2];
    }

    const boardstatus = document.getElementById('status');

    if (winner !== '') {
        if (winner === 'X') {
            boardstatus.classList.add('you-won');
            boardstatus.textContent = "Congratulations! X is the Winner!";
        } else if (winner === 'O') {
            boardstatus.classList.add('you-won');
            boardstatus.textContent = "Congratulations! O is the Winner!";
        }
    }

    
}


