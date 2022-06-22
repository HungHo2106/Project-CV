let countEl = document.getElementById("count-el")
let previousEl = document.getElementById("previous-entries")
let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}

function reset(){
    count = 0
    countEl.innerText = count
}


function save(){
    let countStr = count + "-"
    previousEl.textContent += countStr
}


let content = document.getElementById("error")
let button = document.getElementById("reset-btn")

// function displayError(){
//     content.textContent = "Something went wrong, please try again"
// }

// button.addEventListener('click', displayError)



