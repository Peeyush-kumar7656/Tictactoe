import React,{useState} from 'react'
import Square from './Square'
const Board = () => {
    const[square,setSquare]=useState(Array(9).fill(null));
    const[X,setX]=useState(true);
    const winner=calculateWinner(square);
    let status;
    if(winner){
        status = 'Winner: ' + winner;
    if (status === "Winner: DRAW") {
        status = "DRAW";
      }
    }
    else {
        status = 'Player turn: ' + (X ? 'X' : 'O');
    }
    const squareRender=(i)=>{
        return(
            <Square value={square[i]} onClick={()=>handleClick(i)} />
        )
    }
    function Restart({ onClick }) {

        return (
          <button className="restart" onClick={onClick}>
            Play again
          </button>
        );
      }
    const handleClick=(i)=>{
        const squares=square.slice();
        if(squares[i]===null){
        squares[i]= X ? 'X':'O';
        setSquare(squares);
        setX(!X);
        }else{
            alert("Click some other square");
        }
    }

    function calculateWinner(square){
      const lines=[
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6],
      ];
      for(let i=0;i<lines.length;i++){
          const [a,b,c]=lines[i];

          if(square[a] && square[a]===square[b] && square[a]===square[c]){
            return square[a];
      }
}
    for(let j = 0; j < square.length; j++) {
        if (square[j] == null) {
          return null;
        }
     }
     return "DRAW";
    }
    function renderRestartButton() {
        return (
          <Restart
            onClick={() => {
              setSquare(Array(9).fill(null));
            }}
          />
        );
      }
    return (
        <div className="board">
            <div className="board-row">
               {squareRender(0)}
               {squareRender(1)}
               {squareRender(2)}
            </div>
            <div className="board-row">
               {squareRender(3)}
               {squareRender(4)}
               {squareRender(5)}
            </div>
            <div className="board-row">
               {squareRender(6)}
               {squareRender(7)}
               {squareRender(8)}
            </div>
            {status}
            <div className="restart-button">{renderRestartButton()}</div>
        </div>
    )
}
export default Board
