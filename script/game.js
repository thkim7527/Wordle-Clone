const ANSWER = "trove";

let rowIndex = 0;
let blockIndex = 0;

const board = document.querySelector("#board");
const rows = board.querySelectorAll(".row");
const getBlocks = () => rows[rowIndex].querySelectorAll(".block");
const getWord = () => {
    let word = "";
    getBlocks().forEach(block => {
        word += block.innerHTML;
    });
    return word;
};

//Handle Event
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

//Go to Block & Row
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

async function nextRow() {
    if (blockIndex === 5) {
        if (await checkWord()) {
            if (rowIndex < 5) {
                checkAnswer();
                blockIndex = 0;
                rowIndex++;
            } else {
                checkAnswer();
                endGame();
            }
        } else {
            alert("Wrong Word!");
        }
    }
}

//Check Word & Answer
async function checkWord() {
    const blocks = getBlocks();
    const word = getWord(blocks);

    const dict = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    console.dir(dict);
    console.dir(dict.ok);
    if (dict.ok) {
        return true;
    } else {
        return false;
    }
}

function checkAnswer() {
    getBlocks().forEach((block, blockIndex) => {
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
}

//End Game
function endGame() {
    document.removeEventListener("keydown", handleKeyDown);
}
