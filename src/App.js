import {useState} from "react";
import './App.css';

function App() {
    const [rows, setRows] = useState(5);
    const [columns, setColumns] = useState(5);
    const [activeBoxes, setActiveBoxes] = useState([]);

    const handleAddRow = function () {
        setRows(rows + 1);
    };
    const handleRemoveRow = function () {
        setRows(rows - 1);
    };
    const handleAddCol = function () {
        setColumns(columns + 1);
    };
    const handleRemoveCol = function () {
        setColumns(columns - 1);
    };
    const isBoxActive = (row, col) => activeBoxes.includes(`${row},${col}`);
    const handleBoxState = (row, col) => {
        const boxId = `${row},${col}`;

        if (isBoxActive(row, col)) {
            setActiveBoxes((prev) => prev.filter((key) => key !== boxId));
        } else {
            setActiveBoxes([...activeBoxes, boxId]);
        }
    }
    const handleReset = function () {
        setActiveBoxes([]);
        setRows(5);
        setColumns(5);
    }

    return (
        <div className="App">
            <h1>Interactive Grid Dashboard</h1>
            <nav>
                <button onClick={handleAddRow}>Add Row</button>
                <button onClick={handleAddCol}>Add Column</button>
                <button onClick={handleRemoveRow}>Remove Row</button>
                <button onClick={handleRemoveCol}>Remove Column</button>
                <button onClick={handleReset}>Reset</button>
            </nav>
            <div className="Grid-Container">
                {Array.from({length: rows}).map((_, rowIndex) => (
                    <div>
                        {Array.from({length: columns}).map((_, colIndex) => (
                            <div
                                onClick={() => handleBoxState(rowIndex, colIndex)}
                                className={`Box ${isBoxActive(rowIndex, colIndex) ? "Active" : ""}`}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>

            <div>
                <p>Active Boxes:</p>
                <ul>
                    {activeBoxes.map(value => <li>{value}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default App;
