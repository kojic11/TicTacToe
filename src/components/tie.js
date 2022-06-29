import "./tie.css";
function Tie({reset}){
return <div>
    <div className="tiewrap">
        <h1>Tie</h1>
        <button className='resetw' onClick={reset}>Reset</button>
    </div>
</div>
}
export default Tie;