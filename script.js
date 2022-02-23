const answer = "clone";

let rowIndex = 0;
let blockIndex = 0;

const board = document.querySelector("#board");
const rows = board.querySelectorAll(".row");
const getBlocks = () => rows[rowIndex].querySelectorAll(".block");

document.addEventListener("keypress", handleKeyPress);

function handleKeyPress(event) {
    const key = event.key;
    if (key.match(/^[A-Za-z]+$/)) { //On Alphabet Pressed
        const block = getBlocks()[blockIndex];

        block.innerText = key;
        next();
    }
}

function next() {
    if (blockIndex === 4 && rowIndex === 4) { //On Game End
        document.removeEventListener("keypress", handleKeyPress);
    } else if (blockIndex === 4) { //Go Next Line
        blockIndex = 0;
        rowIndex++;
    } else { //Go Next Block
        blockIndex++;
    }
}