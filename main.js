let count = 0;
let gameMatrix = [
    [],
    [],
    []
];
let row = 0,
    col = 0;
let isDiag1 = true,
    isRowGame = true,
    isColGame = true,
    isDiag2 = true;

function bottonClicked(obj) {
    console.log("object value is :" + obj);
    if ((obj.innerHTML != "Player 1") && (obj.innerHTML != "Player 2")) {
        console.log("Obj Id is : " + obj.id);
        if (count % 2 === 0) {
            obj.style.backgroundColor = "blue";
            obj.innerHTML = "Player 1";
        } else {
            obj.style.backgroundColor = "red";
            obj.innerHTML = "Player 2";
        }
        let isComplete = insertIntoMatrix((obj.id - 1), obj.innerHTML);
        count++;
        if (isComplete) {
            alert("Game Over.." + obj.innerHTML + " won..");
            location.reload();
        } else if (count == 9) {
            alert("Game Over.. Please Try again..");
            location.reload();
        }
    }
}

function insertIntoMatrix(id, name) {

    console.log("Id value is : " + id);
    id = Number(id);

    switch (id) {
        case 0:
            row = 0;
            col = 0;
            break;
        case 1:
            row = 0;
            col = 1;
            break;
        case 2:
            row = 0;
            col = 2;
            break;
        case 3:
            row = 1;
            col = 0;
            break;
        case 4:
            row = 1;
            col = 1;
            break;
        case 5:
            row = 1;
            col = 2;
            break;
        case 6:
            row = 2;
            col = 0;
            break;
        case 7:
            row = 2;
            col = 1;
            break;
        case 8:
            row = 2;
            col = 2;
            break;
        default:
            console.log("Inside Default case, Id value is " + id);
            break;
    }
    gameMatrix[row][col] = name;
    let isGame = checkGame(gameMatrix, row, col);
    console.log("IsGame value is " + isGame);
    return isGame;
}

function checkGame(gameMatrix, row, col) {
    // display(gameMatrix);
    console.log("Row , Col is " + row + " " + col);
    let checkValue = gameMatrix[row][col];

    //Row check..
    for (let i = 0; i < 3; i++) {
        console.log("GameMatrix of " + row + " " + i + " is :" + gameMatrix[row][i]);
        console.log("Checked value is " + checkValue);
        if ((gameMatrix[row][i]) !== checkValue) {
            isRowGame = false;
            break;
        } else {
            isRowGame = true;
        }
    }

    //Col check..
    for (let i = 0; i < 3; i++) {
        console.log("GameMatrix of " + i + " " + col + " is :" + gameMatrix[i][col]);
        console.log("Checked value is " + checkValue);
        if ((gameMatrix[i][col]) !== checkValue) {
            isColGame = false;
            break;
        } else {
            isColGame = true;
        }
    }

    //Dia1 check...
    for (let i = 2, j = 0; i >= 0, j < 3; i--, j++) {
        console.log("GameMatrix of " + i + " " + j + " " + gameMatrix[i][j]);
        console.log("Checked Value is " + checkValue);
        if (gameMatrix[i][j] !== checkValue) {
            isDiag1 = false;
            break;
        } else {
            isDiag1 = true;
        }
    }

    //Dia2 check...
    for (let i = 0, j = 0; i < 3, j < 3; i++, j++) {
        console.log("GameMatrix of " + i + " " + j + " " + gameMatrix[i][j]);
        console.log("Checked Value is " + checkValue);
        if (gameMatrix[i][j] !== checkValue) {
            isDiag2 = false;
            break;
        } else {
            isDiag2 = true;
        }
    }

    return isRowGame || isColGame || isDiag1 || isDiag2;
}

function display(gameMatrix) {
    console.log("inside GameMatrrix display");

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log(gameMatrix[i][j] + " ");
        }
        console.log(" ");
    }
}