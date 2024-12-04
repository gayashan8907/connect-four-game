


export default function GameBoard({onSlelectSquare,gameBoard}){
   
    
    return(<>
        <ol id="game-board">
        {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=><li key={colIndex}>
                    <button style={{backgroundColor:(playerSymbol === 'x' && 'red') ||( playerSymbol==='o' && 'yellow')}} onClick={()=>onSlelectSquare(rowIndex,colIndex)}>{playerSymbol ? '':playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}

        </ol>
      
      
        </>
    )

}