export function checkWinner(board,player){
    if (!board| !Array.isArray(board) || board.length === 0) {
        throw new Error("Invalid board structure");
      }else{
    for(let i=0;i<6;i++){
        for(let j=0;j<4;j++){
            if(board[i][j]===player && board[i][j+1]===player && board[i][j+2]===player && board[i][j+3]===player){
                
                return true
                
               
            }
        }
        
    }
    

    

    for(let i=0;i<3;i++){
        for(let j=0;j<7;j++){
            if(board[i][j]===player && board[i+1][j]===player && board[i+2][j]===player && board[i+3][j]===player){
                return true
                
            }
        }
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<4;j++){
            if(board[i][j]===player && board[i+1][j+1]===player && board[i+2][j+2]===player && board[i+3][j+3]===player){
                return true
                
            }
        }
    }

    for(let i=3;i<6;i++){
        for(let j=0;j<4;j++){
            if(board[i][j]===player && board[i-1][j+1]===player && board[i-2][j+2]===player && board[i-3][j+3]===player){
                return true
                
            }
        }
    }
    return false;}
}