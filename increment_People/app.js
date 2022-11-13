let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
count = 0

function increment() {
    count += 1
    countEl.textContent = count

}

function save() {
    let number = count
    let separator = " - "
    saveEl.textContent += number + separator
    countEl.textContent = 0
    count = 0

}