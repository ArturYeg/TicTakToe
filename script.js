let stringifyBoard = function(board){
    return board[0].join(" | ") + 
            "\n" +
            board[1].join(" | ") + 
            "\n" +
            board[2].join(" | ");
}

    
let didWeWin = function(board,player){
    if(board[0][0] === player && board[0][1] === player && board[0][2] === player){
        return true;
    }
    if(board[1][0] === player && board[1][1] === player && board[1][2] === player){
        return true;
    }
    if(board[2][0] === player && board[2][1] === player && board[2][2] === player){
        return true;
    }
    if(board[0][0] === player && board[1][0] === player && board[2][0] === player){
        return true;
    }
    if(board[0][1] === player && board[1][1] === player && board[1][2] === player){
        return true;
    }
    if(board[0][2] === player && board[1][2] === player && board[2][2] === player){
        return true;
    }
    if(board[0][0] === player && board[1][1] === player && board[2][2] === player){
        return true;
    }
    if(board[0][2] === player && board[1][1] === player && board[0][2] ===player){
        return true;
    }
    return false;
}


let board = [
    [" _ "," _ "," _ "],
    [" _ "," _ "," _ "],
    [" _ "," _ "," _ "]
]

 let player = " x ";
while(true){
    let boardStr = stringifyBoard(board)



    let row = +prompt("Dear user, please provider the value for the row \n\n" + boardStr);                    
    let column = +prompt("Dear user, please provider the value for the column \n\n" + boardStr);                    

        if(board[row][column] !== " _ "){
            alert("Non");
            break;
        }

    board[row][column] = player;

    const won = didWeWin(board,player);
    if(won){
        alert("Player "  +  player + " won the game")
        break;
    }
    if(player === " x "){
        player = " o ";
    } else{
        player = " x "; 
    }
    
        
}
    alert(boardStr);
    