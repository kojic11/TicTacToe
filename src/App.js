import './App.css';
import Tictac from './components/tictac';
import React, { useState } from 'react';
import Win from './components/win';
import Tie from './components/tie';
function App() {
const [board, setBoard] = useState([
  [""],[""],[""],
  [""],[""],[""],
  [""],[""],[""],
]);
const [isX, setIsX] = useState(true);
const [tie, setTie] = useState(0);
const isItX = (i) =>{
  const boardCopy = [...board];
  if (boardCopy[i] == ""){
    boardCopy[i] =  isX ? "X" : "O";
    setBoard(boardCopy);
    setIsX(!isX);
    setTie(tie+1);
    isTie();
  }
  else{
    setIsX(isX);
  }
}
const reset = () =>{
  setBoard([
    [""],[""],[""],
    [""],[""],[""],
    [""],[""],[""],
  ])
  setIsX(true);
  setTie(0);

}
const isWin = () => {
  if(board[0] === board[3] &&  board[0] === board[6] && board[0] !== "") {return true;}
  else if(board[1] === board[4] &&  board[1] === board[7] && board[1] !== "") {return true;}
  else if(board[2] === board[5] &&  board[2] === board[8] && board[2] !== "") {return true;}
  else if(board[0] === board[4] &&  board[0] === board[8] && board[0] !== "") {return true;}
  else if(board[2] === board[4] &&  board[2] === board[6] && board[2] !== "") {return true;}
  else if(board[0] === board[1] && board[1] === board[2] && board[0] !== "") {return true;}
  else if(board[3] === board[4] && board[4] === board[5] && board[3] !== "") {return true;}
  else if(board[6] === board[7] && board[7] === board[8] && board[6] !== "") {return true;}
  else return false;
}
const isTie = () => {
  if(tie>=9 && !isWin()) { return true} 
  else return false;
}

  return (
    <div className="App">
      { 
        isWin() ? <Win reset={reset} isX = {isX} /> :
        <Tictac board={board} isX={isX} isItX={isItX} reset={reset}/>
      } 
      {(() => {
        if (isTie()) {
          return <Tie reset={reset}/>;
        } else {
          <Tictac board={board} isX={isX} isItX={isItX} reset={reset}/>
        }
})()}
    </div>
  );
}

export default App;
