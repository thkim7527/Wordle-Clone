const answer = "trove";

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

        block.innerHTML = key;
        next();
    }
}

function next() {
    if (blockIndex === 4 && rowIndex === 5) { //On Game End
        document.removeEventListener("keypress", handleKeyPress);
    } else if (blockIndex === 4) { //Go Next Line
        check();
        blockIndex = 0;
        rowIndex++;
    } else { //Go Next Block
        blockIndex++;
    }
}

function check() {
    const blocks = getBlocks();
    blocks.forEach((block, blockIndex) => {
        answer.split("").forEach((char, charIndex) => {
            if (block.innerHTML === char && blockIndex === charIndex) {
                block.style.color = "green";
            } else if (block.innerHTML === char) {
                block.style.color = "yellow";
            }
        });
    });
}