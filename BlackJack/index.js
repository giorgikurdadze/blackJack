let player = {
    chips: 200,
    name: "User"
}
let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""
let outofgame = ""
let messageEL = document.querySelector("#message-el")
let sumEL = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.querySelector("#player-el")
let outofpointEl = document.querySelector("#outofpoint-el")


function getRandomCard() {
    playerEl.textContent = player.name + ": $" + player.chips
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let seconCard = getRandomCard()
    cards = [firstCard, seconCard]
    sum = firstCard + seconCard
    renderGame()
}


function renderGame() {
    sumEL.textContent = "Sum: " + sum
    cardEl.textContent = "Card: "
    for (let i = 0; i < cards.length; i++) {
        console.log(cards)
        cardEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "you have got blackJack"
        hasBlackJack = true
    } else {
        message = "you are out of the game "
        isAlive = false
    }
    messageEL.textContent = message
}


function addNewCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
    }
    renderGame()
}

