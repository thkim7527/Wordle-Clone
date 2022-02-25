const answer = "trove";

let rowIndex = 0;
let blockIndex = 0;

const board = document.querySelector("#board");
const rows = board.querySelectorAll(".row");
const getBlocks = () => rows[rowIndex].querySelectorAll(".block");

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
    const key = event.key;

    if (key.length === 1 && key.match(/^[A-Za-z]+$/)) {
        nextBlock(key);
    } else if (key === "Backspace") {
        prevBlock();
    } else if (key === "Enter") {
        nextRow();
    }
}

function nextBlock(key) {
    if (blockIndex < 5) {
        getBlocks()[blockIndex].innerHTML = key;
        blockIndex++;
    }
}

function prevBlock() {
    if (blockIndex > 0) {
        blockIndex--;
        getBlocks()[blockIndex].innerHTML = "";
    }
}

function nextRow() {
    if (blockIndex === 5) {
        check();

        if (rowIndex < 5) {
            blockIndex = 0;
            rowIndex++;
        } else {
            gameEnd();
        }
    }
}

function gameEnd() {
    document.removeEventListener("keydown", handleKeyDown);
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
