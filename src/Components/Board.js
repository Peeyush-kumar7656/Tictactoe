import React,{useState} from 'react'
import Square from './Square'
const Board = () => {
    const[square,setSquare]=useState(Array(9).fill(null));
    const[X,setX]=useState(true);
    const winner=calculateWinner(square);
    let status;
    if(winner){
        status='Winner:'+winner;
    }else{
        status='Player turn :'+(X ?'X':'O');
    }
    const renderSquare=(i)=>{
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
    return null;
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
               {renderSquare(0)}
               {renderSquare(1)}
               {renderSquare(2)}
            </div>
            <div className="board-row">
               {renderSquare(3)}
               {renderSquare(4)}
               {renderSquare(5)}
            </div>
            <div className="board-row">
               {renderSquare(6)}
               {renderSquare(7)}
               {renderSquare(8)}
            </div>
            {status}
            <div className="restart-button">{renderRestartButton()}</div>
        </div>
    )
}

export default Board
