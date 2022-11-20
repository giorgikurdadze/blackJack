// points
let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
let colors = ["clubs", "diamonds", "hearts", "spades"]

let numbericValues = new Map([
    ['J', 10], ['Q', 10], ['K', 10], ['A', 11]
])

let userCards = []
let dealerCards = []

// main engine
let getRandomCard = (isDealer=false) => {
    let number = cards[Math.floor(Math.random() * cards.length)]
    let color = colors[Math.floor(Math.random() * colors.length)]
    if (number >= 10 && number != 14) {
        number = 10
    } else if (number == 14) {
        number = 11
    } 

    isDealer ? dealerCards.push({number, color, flip: true}) : userCards.push({number, color, flip: true})
}

// main functions
let startGame = () => {
    userCards = []
    dealerCards = []
    
    // for user
    getRandomCard()
    getRandomCard()
    // for dealer
    getRandomCard(true)
    getRandomCard(true)
    dealerCards[0].flip = false

    renderCards() 
}

let cardEl = document.querySelector("#user-card-el")
let dealerEl = document.querySelector("#dealer-card-el")
let renderCards = () => {
    cardEl.innerHTML = ''
    dealerEl.innerHTML = ''
    userCards.map(e => {
        cardEl.innerHTML += `<img style="background-color: white; width: 150px; height: 220px; border-radius:5px; margin: 5px;" src="./Photos/Cards/${e.number}_of_${e.color}.png" />`
    })
    dealerCards.map(e => {
        if (e.flip) {
            dealerEl.innerHTML += `<img style="width: 150px; height: 220px; border-radius:5px; margin: 5px;" src="./Photos/Cards/back.png" />`
        } else {
            dealerEl.innerHTML += `<img style="background-color: white; width: 150px; height: 220px; border-radius:5px; margin: 5px;" src="./Photos/Cards/${e.number}_of_${e.color}.png" />`
        }
    })
}

let addCard = () => {
    
    getRandomCard()
    renderCards()
}

// buttons
let startGame_btn = document.querySelector("#startGame")
let addNewCard = document.querySelector("#addNewCard")
startGame_btn.addEventListener("click", startGame)
addNewCard.addEventListener("click", addCard)