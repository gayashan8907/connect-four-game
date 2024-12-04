import Player from "./Player"
import { useState } from "react"
import Winner from "./Winner";
import GameBoard from "./GameBoard"
import { checkWinner } from "./checkWinner";
import React from "react";
import Reset from "./Reset";
const InitialGameBoard = [
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null]
]


export default function App(){
    const [activePlayer,setActivePlayer] = useState('x');
    const [gameBoard,setGameBoard]=useState(InitialGameBoard);
    const [winner, setWinner] = useState(null);
    
    function handelSelectSquare(rowIndex,colIndex){
        if(winner) return;
       
        setGameBoard((prevGameBoard)=>{
            
            const updateBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
            if (updateBoard[rowIndex][colIndex]=== null){
                for( rowIndex=5;rowIndex >= 0;rowIndex--) {
                    if (updateBoard[rowIndex][colIndex]=== null){ 
                    updateBoard[rowIndex][colIndex]=activePlayer;
                    if (checkWinner(updateBoard, activePlayer)) {
                        setWinner(activePlayer);
                        
                    }
                        break;
                }
                }

               if(!winner){ setActivePlayer((currentPlayer)=>currentPlayer==='x'?'o':'x')
            }}
            
            
            return updateBoard;
        })
      
        

    }
     function handleStart(){
        setGameBoard(InitialGameBoard);
        setActivePlayer('x');
        setWinner(null)
     }
    
    return <main>
    <div id="game-container">
            <ol id="players" className="highlight-player">
            <Player name="player 1" colour="red" isActive={activePlayer==='x'}/>
            <Player name= "player2" colour="yellow" isActive={activePlayer==='o'} />
                
            </ol>
            <GameBoard onSlelectSquare={handelSelectSquare} gameBoard={gameBoard}/>
            <Winner winner={winner}/>
            <Reset startGame={handleStart} />
        </div>
      <div>
     
      </div>  
    </main>
}