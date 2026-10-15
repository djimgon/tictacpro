const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

export function checkWinner(squares) {
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];

        console.log("Итерация:", i);
        console.log("Комбинация:", winningLines[i]);
        console.log("a =", a, "b =", b, "c =", c);
    }

    return null;
}