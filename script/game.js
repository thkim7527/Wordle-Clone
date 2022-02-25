const ANSWER = "trove";

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
        if (!check()) { //sjdkfjsldjflksdjfㄴ아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
            nextRow();
        }
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

async function check() {
    const blocks = getBlocks();
    const word = getWord(blocks);

    const dict = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    console.log(dict);
    if (!dict.ok) {
        alert("Wrong Word!");
        return false;
    }

    blocks.forEach((block, blockIndex) => {
        ANSWER.split("").forEach((char, charIndex) => {
            if (block.innerHTML === char && blockIndex === charIndex) {
                block.classList.toggle("perfect");
            } else if (block.innerHTML === char) {
                block.classList.toggle("good");
            } else {
                block.classList.toggle("bad");
            }
        });
    });

    return true;
}

function getWord(blocks) {
    let word = "";
    blocks.forEach(block => {
        word += block.innerHTML;
    });
    return word;
}