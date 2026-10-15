import { Square} from "./Square";
import { useState } from "react";

export function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (index) => {
        console.log("Clicked square:", index)
    }

    return (
        <div className="__board">
            {
                squares.map((square, index) => (
                    <Square key={ index } value={ square } onClick={ () => handleClick(index) } />
                ))
            }
        </div>
    );
}