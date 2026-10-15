import { Square} from "./Square";

export function Board() {
    return (
        <div className="__board">
            <Square value="X" />
            <Square value="X" />
            <Square value="X" />
            <Square value="O" />
            <Square value="O" />
            <Square value="O" />
            <Square value="X" />
            <Square value="X" />
            <Square value="X" />
        </div>
    );
}