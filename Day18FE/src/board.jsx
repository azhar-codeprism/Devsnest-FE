import React from "react";

let arr = [];
function makeBoard() {
    for (let i = 0; i <= 63; i++) {
        arr.push(i);
    }
}
makeBoard();
function CreateBox({ st }) {
    return (
        <div
            className="box"
            style={st % 2 ? { background: "white" } : { background: "black" }}
        >
        </div>
    );
}
function Chessboard() {
    return (
        <div className="board">
            {arr.map((ele) => {
                return <CreateBox st={ele + (Math.floor(ele / 8) % 2 ? 1 : 0)} />;
            })}
        </div>
    );
}

export default Chessboard;
