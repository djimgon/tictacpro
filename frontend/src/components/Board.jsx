import { Square} from "./Square";

const squares = Array(9).fill(null);

export function Board() {
    return (
        <div className="__board">
            {
                squares.map((square, index) => (
                    <Square key={ index } value={ square } />
                ))
            }
        </div>
    );
}