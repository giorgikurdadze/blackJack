let messageEL = document.querySelector("#message-el")
let sumEL = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.querySelector("#player-el")
let startGame_btn = document.querySelector("#startGame")
let addNewCard = document.querySelector("#addNewCard")
let kk = ["clubs", "diamonds", "hearts", "spades"]

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 12 + 2)
    return `<img style = "background-image: url(./Photos/Cards/back.png); border-radius:7px" src="./Photos/Cards/${randomNumber}_of_${kk[Math.floor(Math.random() * kk.length)]}.png" />`
}

let isAlive = false
let hasBlackJack = false
function startGame() {
    cardEl.innerHTML += getRandomCard()
    console.log("uieoir")
}




startGame_btn.addEventListener("click", () => console.log("sdad"))