let firstCard = getRandomCard()
let seconCard = getRandomCard()
let cards = [firstCard, seconCard]
let sum = firstCard + seconCard
let isAlive = true
let hasBlackJack = false
let message = ""
let messageEL = document.querySelector("#message-el")
let sumEL = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")



function getRandomCard() {
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
    let thirdCard = getRandomCard()
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
}

