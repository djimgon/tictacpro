export function Square({ value, onClick }){
    return (
        <button className="square __square" onClick={onClick}>{ value }</button>
    );
}