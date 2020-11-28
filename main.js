let btn = document.querySelector(".btn-input button")
let input = document.querySelector(".input input")
let paragraph = document.querySelector("p.paragraph")
let prefix = "me:"
btn.onclick = function () {
    let inputValue = input.value
    paragraph.textContent = inputValue
    input.value = ""
}
let names = ["A", "B", "C", "D", "E"]

for (let name of names) {
    let newDiv = document.createElement("div")
    document.body.append(newDiv)

    newDiv.textContent = prefix + name

}
let btns = ["Go", "Cancel"]
for (let button of btns) {
    let newButton = document.createElement("button")
    document.body.append(newButton)
    newButton.textContent = prefix + button
    newButton.onclick = function () {
        paragraph.textContent = button
    }
}


let btnTwo = document.querySelector(".btn-input-two button")
let inputTwo = document.querySelector(".input-two input")
let table = document.querySelector(".table table")
btnTwo.onclick = function () {
    let inputValue = inputTwo.value
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    tr.append(td)
    table.append(tr)
    td.textContent = inputValue
    inputTwo.value = ""

}

let menu = document.querySelector(".menu ul")
let cities = ["SPb", "Msc"]
for (let city of cities) {
    let li = document.createElement("li")
    li.textContent = city
    menu.append(li)
    li.onclick = function () {
        console.log("b")
        li.classList.toggle("active")

    }
}


let btnBack = document.querySelector(".btn-back")
let btnNext = document.querySelector(".btn-next")
let counter = document.querySelector(".counter")
let counterValue = 0
btnBack.onclick = function () {

    if (counterValue > 0) {
        counterValue = counterValue - 1
        renderCounter()
    }
}
btnNext.onclick = function () {
    counterValue = counterValue + 1
    renderCounter()
}

function renderCounter() {
    counter.textContent = counterValue
}

let food = document.querySelector(".food")
let fruits = ["Яблоко", "Киви", "Апельсин"]
for (let fruit of fruits) {
    let newDiv = document.createElement("div")
    newDiv.textContent = fruit
    newDiv.setAttribute("class", "fruit")
    food.append(newDiv)
}
let activeFruitInput = document.querySelector(".food input")
activeFruitInput.oninput = function () {
    let fruitElements = food.querySelectorAll(".fruit")
    let index = 1
    for(let fruit of fruitElements) {
        let activeFruitInputValue = activeFruitInput.value
        if (index == activeFruitInputValue) {
            fruit.classList.add("active")
        } else {
            fruit.classList.remove("active")
        }
        index++
    }


}