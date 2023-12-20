const newGame = document.querySelector(".newgame")
const rolldice = document.querySelector(".rolldice")
const hold = document.querySelector(".hold")
const image = document.querySelector(".image")
const tempScore1 = document.querySelector(".tempScore1")
const tempScore2 = document.querySelector(".tempScore2")
const perScore1 = document.querySelector(".perScore1")
const perScore2 = document.querySelector(".perScore2")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const roll = new Audio("rolling-dice-2-102706.mp3")
let playerTurn = "a";
const imageList = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]
document.querySelector(".playerName1").innerText = prompt("Enter your name: ")
document.querySelector(".playerName2").innerText = prompt("Enter your name: ")

let temp1 = 0;
let temp2 = 0;
let per1 = 0;
let per2 = 0;



image.src = "dice_PNG141.png"

function animate() {
    let ran = Math.floor(Math.random() * imageList.length)
    image.src = imageList[ran]
}

function switchPlayer() {
    playerTurn = playerTurn === "a" ? "b" : "a";
    right.classList.toggle("bgChange")
    left.classList.toggle("bg2Change")


}
let realRandom;
function compAnimate() {
    roll.play()
    let ab = setInterval(animate, 50)
    setTimeout(function () {
        clearInterval(ab)
        realRandom = Math.floor(Math.random() * imageList.length)
        image.src = imageList[realRandom]
        if (playerTurn === "a") {
            if (realRandom !== 0) {
                temp1 += realRandom + 1;
                tempScore1.innerText = temp1;

            }
            else {
                temp1 = 0;
                tempScore1.innerText = temp1;
                switchPlayer()

            }

        }
        else if (playerTurn == "b") {
            if (realRandom === 0) {
                temp2 = 0;
                tempScore2.innerText = temp2;
                switchPlayer()
            }
            else {
                temp2 += realRandom + 1;
                tempScore2.innerText = temp2;

            }

        }

    }, 1000)


}


function holdScore() {

    if (playerTurn === "a") {
        per1 += temp1;
        perScore1.innerText = per1
        temp1 = 0;
        tempScore1.innerText = temp1;
        checkWinner()
        switchPlayer()
    }
    else if (playerTurn === "b") {
        per2 += temp2;
        perScore2.innerText = per2
        temp2 = 0;
        tempScore2.innerText = temp2;
        checkWinner()
        switchPlayer()
    }
}
function replay() {
    temp1 = 0
    temp2 = 0;
    per1 = 0;
    per2 = 0;
    perScore1.innerText = per1
    perScore2.innerText = per1
    tempScore1.innerText = per1
    tempScore1.innerText = per1
    left.classList.remove("bgBlack")
    right.classList.remove("bgBlack")
    rolldice.addEventListener("click", compAnimate)
    hold.addEventListener("click", holdScore)
}

function checkWinner() {
    if (per1 >= 10) {
        left.classList.add("bgBlack")
        rolldice.removeEventListener("click", compAnimate)
        hold.removeEventListener("click", holdScore)
    }
    else if (per2 >= 10) {
        right.classList.add("bgBlack")
        rolldice.removeEventListener("click", compAnimate)
        hold.removeEventListener("click", holdScore)
    }
}

rolldice.addEventListener("click", compAnimate)
hold.addEventListener("click", holdScore)
newGame.addEventListener("click", replay)

