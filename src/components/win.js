import "./win.css";
function Win ({reset, isX}) {
    return <div>
        <div className="winwrap">
            <h1>{isX ? 'O' : 'X'} wins</h1>
            <button className='resetw' onClick={reset}>Reset</button>
        </div>
    </div>
}
export default Win;