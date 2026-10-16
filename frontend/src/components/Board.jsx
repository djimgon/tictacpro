import {Square} from "./Square";
import {useState} from "react";
import {checkWinner} from "../utils/checkWinner";

export function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = checkWinner(squares);
    const isDraw = winner === null && squares.every(square => square !== null);

    const handleClick = (index) => {
        if (squares[index]) return;

        if (winner) return;

        const nextSquares = squares.slice();

        nextSquares[index] = xIsNext ? "X" : "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);

        console.log("Current player is X:", xIsNext);
    }

    return (
        <div className="__game">
            <div className="__winner">
                {winner ? (
                    <p>🏆 Winner: {winner}</p>
                ) : isDraw ? (
                    <p>🤝 Draw!</p>
                ) : null}
            </div>

            <div className="__board">
                {squares.map((square, index) => (
                    <Square
                        key={index}
                        value={square}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}