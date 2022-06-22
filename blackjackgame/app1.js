let firstCard = 0
let secondCard = 0
let cards = []
let hasBlackjack = false
let isAlive = false
let message = ""

let player = {
    name: "Hung",
    chips: "999999"
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEL = document.getElementById("card-el")


function startGame(){
    isAlive = true
    hasBlackjack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard(){
    let randomNumber = Math.floor((Math.random() * 13) + 1)
    if( randomNumber === 1) {
        return 11
    }else if(randomNumber > 10){
        return 10
    }else{
        return randomNumber
    }
}

function renderGame(){
    cardEL.textContent = "Cards: " 

    for( let i = 0; i < cards.length; i++ ){
        cardEL.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message = "Whohoo! You've got Blackjack!"
        hasBlackjack = true
    }else{
        message = "You've out of the game!"
        isAlive = false
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent =  message
}


function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
