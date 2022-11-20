// points
let userCards = []
let dealerCards = []

// `<img style="background-color: white; width: 150px; border-radius:5px; margin: 5px;" src="./Photos/Cards/${randomNumber}_of_${colors[Math.floor(Math.random() * colors.length)]}.png" />`

// main engine
let colors = ["clubs", "diamonds", "hearts", "spades"]
let getRandomCard = (isDealer=false) => {
    let number = Math.floor(Math.random() * 13 + 2)
    let color = colors[Math.floor(Math.random() * colors.length)]
    if (number >= 10 && number != 14) {
        number = 10
    } else if (number == 14) {
        number = 11
    } 

    isDealer ? dealerCards.push({number, color}) : userCards.push({number, color})
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

    renderCards() 
}

let cardEl = document.querySelector("#user-card-el")
let dealerEl = document.querySelector("#dealer-card-el")
let renderCards = () => {
    userCards.map(e => {
        cardEl.innerHTML += `<img style="background-color: white; width: 150px; border-radius:5px; margin: 5px;" src="./Photos/Cards/${e.number}_of_${e.color}.png`
        console.log(e)
    })
    dealerCards.map(e => {
        dealerEl.innerHTML += `<img style="background-color: white; width: 150px; border-radius:5px; margin: 5px;" src="./Photos/Cards/${e.number}_of_${e.color}.png`
        console.log(e)
    })
}

let addCard = () => {
    
    console.log(userCards)
    console.log(dealerCards)
}

// buttons
let startGame_btn = document.querySelector("#startGame")
let addNewCard = document.querySelector("#addNewCard")
startGame_btn.addEventListener("click", startGame)
addNewCard.addEventListener("click", addCard)