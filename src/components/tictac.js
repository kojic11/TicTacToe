import './tictac.css'

function Tictac({isItX, isX, board, reset, timer, min}){
    // const darkMode = () =>{
    //     const body = document.body;
    //     const btn = document.getElementsByClassName("btn");
    //     const reset = document.getElementsByClassName("reset")[0];
    //     body.classList.toggle("dark")
    //     for (let i=0; i < btn.length; i++){
    //         btn[i].classList.toggle("darkbtn");
    //     }; 
    //     reset.classList.toggle("darkreset");
        
    // }
    return <div>
        <div className="wrap">
            {/* <button className='darkMode' onClick={darkMode}>Dark</button> */}
            <p className='turn'>{isX ? 'X' : 'O'} turn</p>
            <div className='board'>
                {board.map((val, i) =>
                    <button className={"btn"} onClick={() => isItX(i)} key={i} value={val}>{val}</button>
                )}
            </div>
            <button className='reset' onClick={reset}>Reset</button>
            <p>{min+":"+timer}</p>
        </div>
    </div>
}
export default Tictac;